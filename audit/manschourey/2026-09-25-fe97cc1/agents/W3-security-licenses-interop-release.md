# W3: Security, licensing, token interoperability, release and build

Worker W3. Roles: A10 (design tokens and native integration), A11 (application security and privacy), A12 (OSS licensing and asset rights), A14 (build, release and maintainer experience). Baseline: `fe97cc1ba1400f5c118d7c290bc1000574ac6dd0`. Written 2026-09-25.

I did not modify any production file. I ran builds, servers and tool installs only in `$SCRATCH/work` (read-only use) and in private copies under `$SCRATCH/W3/`. Evidence is in `evidence/W3-security/`. The report uses `$SCRATCH` in place of the scratch path.

This report is not a legal opinion. Where I say something needs counsel, that is an open question, not a conclusion.

---

## 1. Environment and tool versions

| Item | Version / state | How obtained |
|---|---|---|
| OS / runtime | Linux x86_64, Node v22.22.2, npm 10.9.7, Python 3.11.15 | `node -v`, `npm -v` |
| JDK | OpenJDK 21 (`/usr/lib/jvm/java-21-openjdk-amd64`) | `which java javac` |
| swiftc / kotlinc | absent | `which` |
| Kotlin compiler | kotlin-compiler-embeddable 2.1.21 (Maven Central), run via `K2JVMCompiler` | downloaded to `$SCRATCH/W3/kt/lib` |
| Compose jars | Compose Multiplatform **desktop** 1.7.3: material3, ui-graphics, ui-unit, ui-geometry, ui-util, runtime | Maven Central |
| Style Dictionary | 5.5.5 (repo devDependency) | `$SCRATCH/work/node_modules` |
| Tailwind v3 | 3.4.19 (repo devDependency) | same |
| Tailwind v4 | tailwindcss 4.3.3 + @tailwindcss/cli 4.3.3 | `npm install tailwindcss@4 @tailwindcss/cli@4` in `$SCRATCH/W3/tw4` |
| TypeScript (core build) | 7.0.2, which is npm `latest` today (published 2026-07-08) | `npm view typescript dist-tags` |
| Figma typings | @figma/plugin-typings 1.139.0 + TypeScript 5.9.3 | npm |
| fontTools | installed in a venv under `$SCRATCH/W3/venv` to read the embedded font name tables | PyPI |
| DTCG spec | `www.designtokens.org` is **blocked by the egress proxy** (both curl and WebFetch). I used the spec **source** from `raw.githubusercontent.com/design-tokens/community-group/main/technical-reports/` instead. Its `format/index.html` is titled "Design Tokens Format Module 2025.10" (`specStatus: 'CG-DRAFT'`). It comes from the `main` branch on the audit date, not from the published TR page. | curl |
| GitHub | GitHub MCP (read-only) for the releases, tags, runs, jobs and artifacts of `AdzeemDigital/persian-palette`. `git ls-remote` for the action tags. | |
| Blocked hosts | designtokens.org, developers.figma.com, commons.wikimedia.org, download.swift.org | proxy `connect_rejected` / `EGRESS_BLOCKED` |

---

## 2. Threat model (proportionate)

| Surface | Assets | Realistic adversary / input | Trust boundary | Assessment |
|---|---|---|---|---|
| **Standalone HTML** (`code_artifact*.html`, opened from `file://` or a static host) | The user's browser session; camera (AR mode); clipboard (write only) | A URL query (`?lang=`), the search box, `localStorage` (`manshour_lang`, `manshour_theme`), `<input type=color>` and range sliders, and a malicious build or dependency (supply chain) | All rendered data is compiled into the file at build time. There is no file import, no `fetch`, no `postMessage` and no clipboard read. | The only realistic injection path is the build itself (supply chain). User inputs are whitelisted, used only as filters, or are numeric. See the sink table. |
| **Remote requests from the HTML** | User IP address and privacy | Wikimedia hotlinked photos (only in "photo" mode; the default is `vector`, app.js:1637). The Google Maps link runs only on a user click. | No request is made by default. | Acceptable. Photos are an opt-in privacy leak to `upload.wikimedia.org` and are not disclosed in the UI (see the licensing section). |
| **Local server** `scripts/serve.mjs` (`npm start`) | Repository files on the developer machine | A local user; a malicious web page via DNS rebinding | Binds `127.0.0.1` only. Regex allow-list plus a lexical prefix check. | Traversal was resisted in the live probe. No Host allow-list, and symlinks are followed (Low). All exposed files are already public. |
| **npm consumers** of `@persian-palette/core` | Downstream build and runtime; license compliance | Crafted palette definitions passed to the public exporters; transitive dependencies | Exporters accept `PersianPaletteDefinition[]` from the caller without validation. | Output injection and malformed output are possible **only** if a consumer passes untrusted palette data (Low–Medium). License metadata misstates what ships (High, legal). |
| **CI** (`.github/workflows/ci.yml`) | Repository write token, caches, artifacts | Fork PRs; compromised actions | `permissions: contents: read`; `pull_request` (not `_target`); SHA-pinned actions; `persist-credentials: false` | Good posture. The only gap is that generated files are not checked for freshness (integrity, not security). |
| **Release** (manual, GitHub Releases) | Integrity of the v3.0.0 assets | Maintainer error, retroactive edits | Built locally on Windows, no CI at the tag. The release is not immutable. | See the release findings. |

---

## 3. DOM sink table (A11)

Method: I grepped `app/app.js` and `app/enhancements.js` (see `evidence/W3-security/dom-sinks.log`) and traced each sink's data back to its source. `enhancements.js` has **0** HTML sinks: it uses `textContent` only. No `eval`, `new Function`, string `setTimeout`/`setInterval`, `document.write`, `outerHTML` or `insertAdjacentHTML` exists in either file.

| # | Sink (file:line) | Data interpolated | Source of data | Attacker-reachable? |
|---|---|---|---|---|
| 1 | app.js:201 `sel.innerHTML` (palette `<option>`s) | palette id/names | bundled `PERSIAN_PALETTES` | No |
| 2 | app.js:281 `pillsContainer.innerHTML` + `onclick="selectEvidenceColor(${idx})"` | color hex/name, integer index | bundled data | No |
| 3 | app.js:354 `evGeoGoogleMapsLink.href =` Google Maps URL | numeric lat/lng | bundled data | No (numbers only) |
| 4 | app.js:368 `mixSelect.innerHTML` | color hex/name | bundled | No |
| 5 | app.js:432 `tbody.innerHTML` (APCA size table) | numbers from `fontLookupAPCA` | computed | No |
| 6 | app.js:754 `stepsContainer.innerHTML` + `onclick="setMixerRatio(${n})"` | computed hex, integers | computed | No |
| 7 | app.js:1971 `container.innerHTML` + `onclick="setCategory('${cat.id}')"` | category ids | constant `CATEGORIES` | No |
| 8 | app.js:2029/2036 `grid.innerHTML` (palette cards; `src="${palette.imageUrl}"`; `onclick="copyColorHex('${hex}','${cName}')"`, etc.) | names, hex, Wikimedia URL | bundled data. The search query (app.js:1999) **filters only** and is never interpolated. | No |
| 9 | app.js:2509/2553/2591/2613 `mockupCard.innerHTML` | hex, names | bundled/computed | No |
| 10 | app.js:2651, 2672, 2732, 2785, 2832 (swatches, role tags, pills, tonal scale; `onclick` with integer indices or hex) | hex, names, tone numbers | bundled/computed | No |
| 11 | app.js:3049 `deltaTable.innerHTML`; 3134 `container.innerHTML`; 3240 `table.innerHTML` | computed metrics, hex | computed | No |
| 12 | app.js:3163–3164 `googleM3TokensList` / `appleHIGTokensList` `.innerHTML` via string concatenation | M3 role names and hex | `generateM3DynamicScheme` over bundled hex | No |
| 13 | app.js:3293 `gradientsList.innerHTML` + `onclick="copyGradientCSS('${preset.css.replace(/'/g,"\\'")}')"` | gradient CSS | computed from bundled hex | No. The escaping is wrong for a double-quoted attribute, but no quote can occur in the data. |
| 14 | app.js:3561 `btn.innerHTML` icon | constant | constant | No |
| 15 | app.js:3657–3658 `sel1/sel2.innerHTML = optionsHtml` | hex/names | bundled | No |
| 16 | app.js:3372–3378 export view | exporter output | `textContent` (safe sink); download via Blob `text/plain` | N/A (safe) |

Input sources checked: `URLSearchParams` (app.js:14) is compared with `=== 'en'`. `localStorage` values (app.js:12/17) are whitelisted (`'en'|'fa'`, `'light'|'dark'`). `<input type=color>` (template.html:1060) can only produce `#rrggbb` and flows to `style.backgroundColor` and the validated `calculateAPCA`. Range inputs are numeric. `getUserMedia` (app.js:974) sets only `video.srcObject`. The stream is never uploaded, and `stopARCamera` stops its tracks. There is no file import, `FileReader`, `fetch`, `postMessage` or clipboard read.

I also checked all 72 built-in names, hex values and ids for `' " < > & \``. The only hits are `&` in 11 English names, which is harmless in both text and attributes. There are 101 `onclick`, 8 `onchange`, 4 `oninput` and 1 `onerror` inline attributes in the built HTML, and no CSP `<meta>`.

**Verdict:** no attacker-controllable input reaches an HTML/JS sink (pass). There is a latent risk: the pattern `innerHTML` + inline `on*` handlers built from data would become DOM XSS as soon as user-supplied palettes or imports are added. It also makes a strict CSP impossible without `unsafe-inline`/`unsafe-hashes` (see MSR-SEC-001).

---

## 4. npm audit table

Run on 2026-09-25 against registry.npmjs.org in `$SCRATCH/work` (`evidence/W3-security/npm-audit.log`).

| Scope | Command | info/low/mod/high/crit | Deps (prod/dev/optional) | Exposure class |
|---|---|---|---|---|
| root (`manshour-studio`) | `npm audit --omit=dev` | 0/0/0/0/0 | 1 prod (the root itself) / 211 dev / 27 opt | The root has no prod deps, so this run audits nothing meaningful. |
| root | `npm audit` | 0/0/0/0/0 | same | **Note:** three 0.128.0, Tailwind, Font Awesome and the fonts are *devDependencies* but **ship inside the runtime HTML**. "dev" does not mean "not shipped" here. |
| packages/core | `npm audit --omit=dev` | 0/0/0/0/0 | 4 prod / 21 dev / 20 opt | runtime for npm consumers: MCU 0.3.0, apca-w3 0.1.9, colorparsley 0.1.8 |
| packages/core | `npm audit` | 0/0/0/0/0 | same | build: typescript 7.0.2 (+ native optional binaries) |

No advisories, so no reachability classification was needed.

About three.js r128 in the HTML: `npm audit` reports nothing for `three@0.128.0`. The only three.js npm advisory I know of from reference knowledge is CVE-2020-28496 (ReDoS in `Color.setStyle`, fixed in 0.125.0). I did **not** re-fetch it online this session, so treat it as reference knowledge. The app never passes user strings to `Color.setStyle`, so it would not matter here either way. The residual concern is maintenance: r128 dates from 2021, and the `three.min.js` global build it relies on was deprecated and later removed upstream, so upgrading means migrating to ESM.

---

## 5. License inventory (A12)

| Component | Version | License (as stated) | Where shipped | Full notice present? | Open question |
|---|---|---|---|---|---|
| Project code | 3.0.0 | MIT, "Copyright (c) 2026 Persian Palette Vault contributors" | repo, tgz, ZIP | Yes (LICENSE) | The copyright holder names a group, not the sole maintainer (Majid ZeidAbadiNejad / AdzeemDigital). `author` is "Persian Palette Vault Working Group", which does not exist per the brief. |
| @material/material-color-utilities | 0.3.0 | Apache-2.0 | **bundled** into `dist/index.cjs` (L6540–9356) and the HTML core IIFE; loaded at runtime by ESM `dist/index.js` | tgz: `licenses/material-color-utilities.txt`; ZIP: `docs/licenses/`; HTML: per-file "Copyright 20xx Google" + Apache headers only | Apache §4(a) asks for a copy of the license with redistribution; the standalone HTML asset has headers but not the text. The package has no upstream NOTICE file (none in node_modules). |
| apca-w3 | 0.1.9 (npm `latest`, last modified 2022-07-04) | "Limited W3 License" (package.json) | **bundled** into `dist/index.cjs` (L6355–6517) and the HTML; ESM imports it at runtime | tgz `licenses/apca-w3.md`, ZIP `docs/licenses/apca-w3.md` (identical to upstream LICENSE.md after CRLF normalization); HTML has upstream `@preserve` comments only | **Counsel needed.** See the summary below. It is incompatible with an unqualified `"license": "MIT"` for the CJS file. |
| colorparsley | 0.1.8 | "AGPL v3" (package.json); LICENSE.md is the verbatim AGPL-3.0 text | **Code NOT bundled** into `dist/index.cjs` or the HTML: tree-shaken, and only its `@preserve` license comment is retained (dist/index.cjs ~L9780–9830; HTML core IIFE has `parseString`=0, `colorToHex`=0). **Installed and evaluated at runtime** for ESM consumers: `import 'apca-w3'` → `import { colorParsley } from 'colorparsley'`. Confirmed with a Node resolve hook (`LOADED node_modules/colorparsley/src/colorparsley.js`). CJS does not load it. Core never *calls* `colorParsley`: it uses only `APCAcontrast`, `sRGBtoY`, `fontLookupAPCA`; `calcAPCA` is unused. | tgz `licenses/colorparsley.md` (identical to upstream) | **Counsel needed:** whether the ESM runtime import (unused functions), the npm dependency, and the retained comment in an MIT-labeled file create AGPL obligations for this package or its consumers. |
| three.js | 0.128.0 | MIT | HTML (inline `three.min.js`) | HTML: `@license Copyright 2010-2021 Three.js Authors SPDX-License-Identifier: MIT` (no permission-notice text). ZIP: `docs/licenses/three.txt` | Whether an SPDX header satisfies MIT's "this permission notice shall be included" in the standalone HTML asset. |
| Tailwind CSS (generated output) | 3.4.19 | MIT | HTML `<style>` | Header `tailwindcss v3.4.19 \| MIT License \| https://tailwindcss.com`; ZIP `docs/licenses/tailwind.txt` | Same as three.js |
| Font Awesome Free (CSS + webfonts) | 6.5.1 | Icons CC BY 4.0, fonts OFL 1.1, code MIT | HTML (CSS + base64 woff2) | **Attribution comment retained:** "Font Awesome Free 6.5.1 by @fontawesome … (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc." The FA name table has a copyright string but no license id 13/14. ZIP: `docs/licenses/fontawesome.txt`. | Pass for the CC BY attribution as far as FA's own guidance goes (the comment is kept in the CSS). |
| Vazirmatn / Cinzel / Fira Code (Fontsource subsets) | @fontsource 5.3.0 | OFL-1.1 | HTML (base64 woff2, 28 faces) | Name table: copyright (id 0) + license URL `scripts.sil.org/OFL` (id 14); **license text (id 13) empty**. ZIP: `docs/licenses/{vazirmatn,cinzel,fira-code}.txt` | OFL §2 requires the copyright notice and the license with each copy ("stand-alone text files, human-readable headers or … machine-readable metadata fields"). Is a URL-only name table in a standalone HTML sufficient? Also Reserved Font Name questions for subsetted fonts. Counsel. |
| Wikimedia photos (12 `imageUrl`s, heritage-data.ts:19, 538, 1057, …, 5728) | n/a | **evidence-gap:** commons.wikimedia.org is blocked | **Hotlinked** (not embedded). Loaded as `<img crossorigin=anonymous>` only in photo mode. | No author, license or link attribution anywhere in the UI. THIRD_PARTY_NOTICES says to check "before republication". | Several are likely CC BY-SA photographs (e.g. "Mezquita_Shah… DD_71-73_HDR", "Hormuz_Island… (49544498308)"). CC BY/BY-SA display normally requires attribution. Whether hotlink display is "sharing" is a counsel question. |
| archive/v2.1.0/code_artifact.html | 2.1.0 | n/a | repo + release ZIP | n/a | Loads `https://cdn.tailwindcss.com` (unversioned Play CDN) and cdnjs three r128 with **no SRI**. See MSR-SEC-002. |
| Build tools (esbuild, PostCSS, acorn, parse5, Style Dictionary, TypeScript) | see package-lock | MIT/Apache-2.0/BSD (not re-verified) | not shipped | n/a | none |

### Summary of the obligations in `docs/licenses/apca-w3.md` (read in full, identical to upstream)

- **Scope.** Licensed to W3/AGWG "for use with WCAG accessibility guidelines for web-delivered and web-based content only, and not for any other use." Prohibited uses include "uses which are not specific to web-based content presented on self-illuminated displays or devices" (and medical, clinical, safety, aerospace, transportation and military uses).
- **Commercial use.** "Commercial use is prohibited without a written and signed commercial license agreement, except as provided by the W3 cooperative agreement for web content only." "Non-commercial use is permitted only for predicting contrast for web content."
- **Fallback.** "Any files, or use cases of files, not under the W3 cooperative agreement are licensed under the AGPU [sic] v3 License, subject to limitations."
- **No alteration; keep current.** Code must be used "without modification to the essential elements … or specific approved constants." Integrators "have a duty to ensure that the most recent version of this code is used". 0.1.9 is the current npm `latest` (pass today).
- **Terminology.** Using "APCA", "SAPC" or "Advanced/Accessible Perceptual Contrast Algorithm" to describe a method is "only permitted for code that is properly implementing the APCA algorithm, and maintaining sync with the current version … 0.0.98G-4g or later." The app comment at app.js:388 says "SAPC-0.0.98G Implementation", and the UI uses "APCA" labels throughout.
- **Trademark / logo.** The APCA and "Powered by APCA" logos are prohibited without written consent. I found no logo use in `app/` (pass).
- **Revocation.** "License for use is revoked when any such asset is removed from this repository."
- **W3C Software and Document Notice** is appended. It requires the full notice to be included "on ALL copies … in a location viewable to users".

**For counsel:** (1) the effect of these terms on an MIT-labeled npm package whose CJS file embeds the code and that downstream companies may use commercially; (2) whether token outputs that consumers can feed into native iOS/Android builds are "web content"; (3) whether the W3C notice must be viewable in the HTML UI; (4) the colorparsley AGPL question above; (5) the OFL and Wikimedia questions.

---

## 6. Exporter interoperability test matrix (A10)

| Target | Version | Command / method | Result | Evidence |
|---|---|---|---|---|
| DTCG 2025.10 format: color value | spec source (GitHub `main`, titled 2025.10) | Manual comparison with `color/color-type.md` | **Pass.** `$type: "color"`; `$value` = `{colorSpace:"srgb", components:[0–1 ×3], alpha:1, hex:"#rrggbb"}`. The spec says `hex` "MUST be formatted in 6 digit CSS hex"; lowercase is used. | `$SCRATCH/W3/dtcg/*` (spec source); w3c-tokens.json |
| DTCG naming | same | Python walk of all non-`$` keys for `{ } .` and `$` prefix | **Pass** for shipped data (0 violations). **Not enforced** for custom input: a palette id `a.b` or `$description` is emitted verbatim (see the probe). | `exporter-reserved-key-probe.log` |
| DTCG `$extensions` / `$description` | same | Manual | **Pass** on placement (root, group and token level are all allowed; the key is reverse-domain style). Note: `$extensions` is **190,636 of 209,486 minified bytes (91%)**. The spec says teams "SHOULD restrict their usage of extension data to optional meta-data that is not crucial". It is optional here, but it carries unverified heritage claims (CAS numbers, UNESCO refs) presented as data. `org.persian-palette` implies a domain the project is not shown to control. The file extension is `.json`, not the recommended `.tokens`/`.tokens.json` (SHOULD). | — |
| Style Dictionary | 5.5.5 | `node build.mjs` with platforms css/variables, javascript/es6, ios-swift/class.swift, compose/object, json/flat, source = the **shipped** `w3c-tokens.json` | **Pass.** 72 tokens, DTCG auto-detected, **0 warnings, 0 collisions**, no `$extensions` content in any output (grep for mineral, CAS, UNESCO and evidence: none). iOS output rounds to 3 decimals, which is SD's transform. | `interop/style-dictionary.log`, `interop/sd-build.mjs` |
| Tailwind v3 | 3.4.19 | `tailwind.config.cjs` = `exportTailwindTheme()` from `dist/index.cjs`; `npx tailwindcss -i in.css` | **Pass.** `.bg-persian-isfahan-tiles-100 { background-color: rgb(18 10 143 / …) }`, text and border variants are generated; `-700` is correctly absent. | `interop/tailwind.log` |
| Tailwind v4 | tailwindcss 4.3.3, @tailwindcss/cli 4.3.3 | `@import "tailwindcss"; @import "./tailwind-theme.css";` then `npx @tailwindcss/cli -i in.css -o out.css` | **Pass.** `.bg-persian-isfahan-tiles-100 { background-color: var(--color-persian-isfahan-tiles-100) }` and the other utilities are generated. | `interop/tailwind.log` |
| Tailwind step semantics | — | OKLab L per step | **Issue.** Steps 100…600 are ordinal positions. OKLab L is non-monotonic in **12/12** palettes (e.g. isfahan-tiles 0.31, 0.79, 0.65, 0.77, 0.96, 0.19), unlike the Tailwind convention where higher steps are darker. | `interop/tailwind-step-lightness.log` |
| Kotlin / Compose (shipped `ColorSchemes.kt`) | kotlinc 2.1.21, Compose MP desktop 1.7.3 | `java -cp <compiler jars> org.jetbrains.kotlin.cli.jvm.K2JVMCompiler -no-stdlib -no-reflect -cp <material3,ui-*,runtime,stdlib> -d out ColorSchemes.kt` | **Pass:** rc=0, no diagnostics. This was not an Android/AGP build (**Android build not-tested**). | `kotlin-compile.log` |
| Kotlin (SD compose/object output) | same | same | **Pass**, rc=0 | `kotlin-compile.log` |
| Kotlin role coverage | material3 1.7.3 | `javap` | **Issue.** `lightColorScheme` takes 36 colors. The exporter emits 24 (hct.ts `M3_ROLES`). `inversePrimary`, `inverseSurface`, `inverseOnSurface`, `scrim`, `surfaceTint`, `surfaceBright`, `surfaceDim` and `surfaceContainer{,Low,Lowest,High,Highest}` fall back to Material baseline defaults, although MCU 0.3.0 `DynamicScheme` provides all of them. | `kotlin-compile.log` |
| Kotlin (crafted ids) | same | `kotlin-probe-gen.mjs` → Probe.kt | **Fails to compile** for ids `1st-palette` (`val 1stPalette…`) and for the pair `a-b`/`aB` ("conflicting declarations"). Keyword ids (`fun`) are safe because a suffix is appended. | `kotlin-compile.log` |
| Swift (shipped `Colors.swift`) | — | **not-tested** (no swiftc; download.swift.org blocked). Static check: 72 `static let`, all match `^[A-Za-z_][A-Za-z0-9_]*$`, no duplicates, all components in [0,1], `Color(.sRGB, red:green:blue:opacity:)` is a SwiftUI initializer form, `import SwiftUI` present | static pass | — |
| Figma interchange + `docs/figma-import.js` | @figma/plugin-typings 1.139.0 | `tsc --checkJs` on the importer + `check.ts` asserting `valuesByMode.Default` is `RGBA` and `scopes` is `VariableScope[]` | **Static pass** (rc=0). The importer uses the current `createVariable(name, collection: VariableCollection, type)` overload; the string-id overload is `@deprecated` and throws under `documentAccess: dynamic-page`. `renameMode`, `setValueForMode`, `description` and `scopes` all match the typings. **Not idempotent:** each run creates a new collection (documented in its comment). It is not a runnable plugin: no `manifest.json` or UI, the function is never invoked, and there is no `figma.closePlugin()`. **Runtime in Figma: not-tested.** | `figma-typecheck.log` |
| Tokens Studio (legacy) | — | Structure check | **Pass** on shape: 12 top-level sets × 6 tokens, each `{value:"#RRGGBB", type:"color", description}`. No `$metadata.tokenSetOrder` / `$themes`, so set order is left to the tool. **Tokens Studio app import: not-tested.** | — |
| Injection / robustness | dist at fe97cc1 | `exporter-injection-probe.mjs`, `exporter-reserved-key-probe.mjs` | **Issues:** see MSR-INT-001 | `exporter-injection-probe.log`, `exporter-reserved-key-probe.log` |
| CJS/ESM TypeScript consumers (types) | TS 7.0.2, NodeNext strict | committed tgz installed in a fresh project; `a.cts` / `b.mts` import `type { PersianPaletteDefinition }` | `.mts` passes. **`.cts` fails:** `TS2305 Module '"@persian-palette/core"' has no exported member 'PersianPaletteDefinition'` and `TS2503 Cannot find namespace 'core'`. | `cts-type-import.log` |

### Not-tested native checks: exact commands and fixture

```
# Swift (macOS with Xcode 15+ or a Linux toolchain that has SwiftUI stubs; SwiftUI is Apple-only)
mkdir -p PersianColorsCheck/Sources/PersianColors
cp packages/core/tokens/Colors.swift PersianColorsCheck/Sources/PersianColors/
cat > PersianColorsCheck/Package.swift <<'EOF'
// swift-tools-version:5.9
import PackageDescription
let package = Package(name: "PersianColors", platforms: [.iOS(.v15), .macOS(.v12)],
  targets: [.target(name: "PersianColors")])
EOF
cd PersianColorsCheck && swift build -Xswiftc -strict-concurrency=complete -Xswiftc -warnings-as-errors
# Also: Style Dictionary ios-swift output (UIKit) -> a separate target built with xcodebuild -sdk iphonesimulator

# Android (AGP): app module with androidx.compose.material3:material3:1.3.x; put ColorSchemes.kt in
# app/src/main/java/<pkg>/ (add `package <pkg>` because the file has no package line), then:
./gradlew :app:compileDebugKotlin
```

---

## 7. Release and CI facts (A14)

Source: `evidence/W3-security/release-ci-facts.log` and `rebuild-diff-stat.txt`.

- **GitHub release v3.0.0** exists. It was published 2026-09-22T01:48:37Z and its **body was edited** at 13:09:08Z ("This corrected description supersedes the original wording. It does not change the tag or replace its assets."). `immutable: false`.
- **Tag `v3.0.0` → `2e06892`**, seven commits before HEAD `fe97cc1`. At `2e06892` there was **no active CI**: only `.github/workflows-templates/`. `ci.yml` first appears in `fff32d1`, and the earliest CI run (#1) is on `fff32d1`. The release assets were therefore built outside CI. Their CRLF line endings suggest a Windows build.
- **Asset vs repo:** the tgz asset, the ZIP asset and `build-manifest.json` match the committed `release/` files and manifest byte-for-byte. `code_artifact.html` and `code_artifact_en.html` **do not** match the committed HTML (3,149,695 vs 3,143,964 bytes). They are CRLF variants (5,731 CRs) and become identical after `tr -d '\r'`. The committed `docs/build-manifest.json` records the **CRLF asset hashes**, so it does not describe the committed LF HTML. A clean rebuild rewrites it.
- **The ZIP asset** contains the pre-correction README ("Enterprise-Grade…", "72 authentic colors", "72 authenticated pigment formulas") and `archive/v2.1.0/code_artifact.html`. The corrected release body explicitly left the assets unchanged.
- **CI at HEAD:** run #9 (id 35732995118) on `fe97cc1` succeeded with 4/4 jobs (Node 22/24 × ubuntu-24.04/windows-2025). Artifact `studio-fe97cc1…` expires 2026-10-06.
- **CI design:** least privilege (`contents: read`). SHA pins were verified with `git ls-remote`: checkout `3d3c42e…` = v7.0.1, setup-node `820762…` = v7.0.0, upload-artifact `043fb46…` = v7.0.1. No `pull_request_target`, `persist-credentials: false`, npm cache keyed on both lockfiles (PR caches are ref-scoped, so there is no cross-branch poisoning path from fork PRs). **Gaps:** no `git diff --exit-code` after `npm run check`, so stale generated files (manifest, ULP-drifted tokens) pass. `pack:studio` is never run. `pack:core` overwrites `release/*.tgz` before `verify:package`, so the **committed** tarball is never verified in CI.
- **Rebuild determinism** (my private copy): `dist/` is byte-identical to the committed files (`git diff --quiet packages/core/dist` → identical). Both HTML files are identical. Three files change: `docs/build-manifest.json` (CRLF vs LF hashes) and `w3c-tokens.json`/`style-dictionary.json` (138 lines each, last-digit float drift, e.g. `-68.83739973098598` → `-68.837399730986`). The committed tgz has CRLF in `package.json` (60 CR) and `src/*.ts` (e.g. 31 CR in `src/index.ts`) but LF in `dist/` and `tokens/`, which points to a git autocrlf checkout. There is **no `.gitattributes`**. The ZIP stores local mtimes (entries 22:10 to 04:45) and FAT attributes, so it is not reproducible. npm pack normalizes mtimes to 1985-10-26.
- **Inactive `release.yml` template:** `contents: write`, unpinned `actions/checkout@v4`, `setup-node@v4`, `setup-python@v5`, `softprops/action-gh-release@v2`, hard-coded `3.0.0` file names. Its README says it is inactive.
- **package.json (core):** no `repository`, `homepage`, `bugs` or `funding`. `author` "Persian Palette Vault Working Group". No `sideEffects`. No `"./package.json"` export. `engines.node >=22`. `license: "MIT"` (see MSR-LIC-001). `typescript ^7.0.2` is the current latest; the lockfile pins 7.0.2 and it uses native optional binaries, and Windows CI passes (pass). `types/index.d.ts` is a forwarding file that nothing references (`types` → `dist/index.d.ts`, and the `exports` map has no `./types`), so it is dead weight. `dist/index.d.cts` uses `import type * as Core …; export = core`, which exposes values only (see MSR-REL-003). `tokens/style-dictionary.json` is **byte-identical** to `w3c-tokens.json` (403,694 bytes duplicated in a 2.5 MB unpacked package).

---

## 8. Proposed findings

```
Proposed ID: MSR-LIC-001
Title: `@persian-palette/core` declares `"license": "MIT"` but ships and loads non-MIT third-party code (apca-w3 Limited W3 License, MCU Apache-2.0; colorparsley AGPL-3.0 as runtime dependency)
Severity (proposed): High   Confidence: high on the facts; medium on consequence (legal effect needs counsel)
Status: reproduced
Location: packages/core/package.json "license"; packages/core/dist/index.cjs L6355–6517 (apca-w3), L6540–9356 (MCU), EOF legal block ~L9780 (colorparsley comment); dist/math/apca.js:2 (ESM import)
Observed / verbatim: package.json `"license": "MIT"`; apca-w3 package.json `"license": "Limited W3 License"`; colorparsley `"license": "AGPL v3"`. ESM runtime trace: `LOADED node_modules/apca-w3/src/apca-w3.js`, `LOADED node_modules/colorparsley/src/colorparsley.js`. Fresh install of the tarball places `apca-w3` and `colorparsley` in the consumer's node_modules.
Expected / rule or spec: the package license field is an SPDX expression that tools (npm, license scanners, SBOMs) take at face value; bundled third-party terms need to be reflected or the code kept external. APCA-W3 license: "Commercial use is prohibited without a written and signed commercial license agreement, except as provided by the W3 cooperative agreement for web content only."
Reproduction or source trail: grep `// node_modules/` sections in dist/index.cjs; `node --import ./reg.mjs run.mjs` resolve hook (evidence); `npm view apca-w3 license`, `npm view colorparsley license`.
Evidence path: evidence/W3-security/colorparsley-reachability.log, evidence/W3-security/cts-type-import.log (installed node_modules list)
Impact: downstream consumers and scanners see "MIT" and may use the package commercially or outside web content, contrary to apca-w3 terms. Possible AGPL questions for consumers. The THIRD_PARTY_NOTICES text is correct but not machine-readable.
Recommended minimal fix: have counsel review. Technically: set a truthful SPDX expression (e.g. "MIT AND Apache-2.0 AND LicenseRef-APCA-W3", wording per counsel) or stop bundling apca-w3 into the CJS build (mark it `external`) and state the restrictions prominently in the README "License" section; consider an APCA implementation with clear terms, or making APCA an optional peer.
Acceptance test: `npm pack` → license field and README reflect the bundled/runtime third-party terms; a license scanner (e.g. `npx license-checker --production`) run in a consumer lists apca-w3/colorparsley with their real licenses and no "MIT-only" claim for dist/index.cjs.
Effort range: 0.5 day (metadata/docs) to 3 days (replace/externalize APCA); plus counsel time
```

```
Proposed ID: MSR-LIC-002
Title: APCA-W3 use restrictions (web-content-only, non-commercial without agreement, keep-current, terminology) are not surfaced to consumers or reconciled with native token exports
Severity (proposed): Medium   Confidence: medium (terms are clear; applicability to this project is a legal question)
Status: source-confirmed
Location: docs/licenses/apca-w3.md (full text); THIRD_PARTY_NOTICES.md ("Used here for screen-content contrast; not relicensed as MIT"); packages/core/tokens/w3c-tokens.json $extensions…colorScience.apca; app/app.js:388 "SAPC-0.0.98G Implementation"
Observed / verbatim: license: "licensed to the W3/AGWG … for web-delivered and web-based content only, and not for any other use"; "Prohibited uses include … uses which are not specific to web-based content presented on self-illuminated displays"; "Use of the acronyms APCA or SAPC … is only permitted for code that is properly implementing the APCA algorithm, and maintaining sync with the current version … 0.0.98G-4g or later."
Expected / rule or spec: consumers must be able to learn the restrictions before adopting an "MIT" package that exports APCA values into DTCG tokens, which Style Dictionary can turn into iOS/Android outputs.
Reproduction or source trail: read docs/licenses/apca-w3.md; README/API docs do not repeat the restrictions (only the notices file does, in one clause).
Evidence path: this report §5
Impact: unintentional non-compliant downstream use; "APCA" naming claims tied to a version string (0.0.98G vs 0.0.98G-4g) that should be checked.
Recommended minimal fix: add a short "APCA-W3 terms" section in README/API_REFERENCE listing scope, commercial and terminology limits; align the version label; ask counsel whether APCA values belong in exported tokens.
Acceptance test: README contains the restrictions; UI/comment version label matches apca-w3 0.1.9's base algorithm string.
Effort range: 2–4 hours plus counsel
```

```
Proposed ID: MSR-LIC-003
Title: Standalone HTML release assets embed third-party code/fonts without full license texts; hotlinked Wikimedia photos shown without attribution
Severity (proposed): Medium   Confidence: medium (facts high; sufficiency is a legal question)
Status: reproduced (HTML contents); evidence-gap (Wikimedia licenses: commons.wikimedia.org blocked)
Location: code_artifact.html / code_artifact_en.html (release assets); packages/core/src/tokens/heritage-data.ts imageUrl (lines 19, 538, 1057, 1576, 2095, 2614, 3133, 3652, 4171, 4690, 5209, 5728); app/app.js:2076–2084
Observed / verbatim: HTML contains only headers: three.js "SPDX-License-Identifier: MIT", "tailwindcss v3.4.19 | MIT License", Google Apache headers, apca-w3 @preserve blocks; the 28 embedded woff2 faces have name-table copyright + OFL URL but empty license-description (id 13); no Wikimedia author/license text anywhere ('Wikimedia' 0 hits, only 12 upload.wikimedia.org URLs).
Expected / rule or spec: MIT "this permission notice shall be included in all copies"; Apache-2.0 §4(a); OFL-1.1 §2; W3C notice "in a location viewable to users"; CC BY/BY-SA attribution (if applicable).
Reproduction or source trail: python scan of HTML (this report §5); fontTools name-table dump.
Evidence path: this report §5
Impact: the HTML files are distributed as individual release assets without docs/licenses; possible notice non-compliance; photo attribution gap.
Recommended minimal fix: embed an "About / Licenses" dialog (or a `<template>` with full texts) in the HTML at build time; add per-photo author/license/source link fields to heritage data and render them in photo mode; verify each Commons file's license.
Acceptance test: the built HTML contains the full MIT/Apache/OFL/W3C texts and each imageUrl has a displayed credit; a test asserts both.
Effort range: 0.5–1 day (+ research for 12 photos)
```

```
Proposed ID: MSR-REL-001
Title: v3.0.0 release is tied to a pre-CI, pre-correction commit and still distributes retracted claims; assets are mutable CRLF builds
Severity (proposed): Medium   Confidence: high
Status: reproduced
Location: GitHub release v3.0.0 (tag → 2e0689213efef17629b28a8dd10fe78d0214ab65); release asset manshour-studio-3.0.0.zip (README.md lines 4, 40, 46)
Observed / verbatim: release body "This corrected description supersedes the original wording. It does not change the tag or replace its assets."; ZIP README "Enterprise-Grade Heritage Color System…", "72 authentic colors", "72 authenticated pigment formulas"; `immutable:false`; HTML assets 3,149,695 B CRLF vs committed 3,143,964 B LF.
Expected / rule or spec: a release's assets should match its tag, be CI-produced, and not contradict corrected project claims.
Reproduction or source trail: mcp get_release_by_tag / list_tags / list_workflow_runs; sha256sum of committed files; unzip + grep.
Evidence path: evidence/W3-security/release-ci-facts.log
Impact: users downloading "the" release get claims the project has withdrawn and artifacts not produced by the now-validated CI; provenance is weak.
Recommended minimal fix: publish v3.0.1 from HEAD via CI (artifact from ci.yml or an activated, pinned release workflow), mark v3.0.0 as superseded in its body, and enable immutable releases.
Acceptance test: latest release tag == a commit with a green CI run; asset digests equal the CI artifact; ZIP README equals repo README.
Effort range: 0.5 day
```

```
Proposed ID: MSR-REL-002
Title: Generated files are not checked for freshness; committed build-manifest describes other bytes; no line-ending policy
Severity (proposed): Medium   Confidence: high
Status: reproduced
Location: .github/workflows/ci.yml (no `git diff --exit-code`); docs/build-manifest.json; missing .gitattributes; packages/core/tokens/{w3c-tokens,style-dictionary}.json
Observed / verbatim: manifest sha256 1585dd…/92a489…, bytes 3149695 while committed HTML is 97fda1e8…/6062013a…, 3143964; clean rebuild changes manifest + 138 float lines ×2; tgz has CRLF in package.json/src only.
Expected / rule or spec: generated, committed artifacts should equal a clean build of the same commit on every CI platform.
Reproduction or source trail: `npm run build` in a copy, `git diff --stat` (evidence).
Evidence path: evidence/W3-security/rebuild-diff-stat.txt, release-ci-facts.log
Impact: `npm run pack:studio` fails on a clean checkout (baseline); drift and platform float differences go unnoticed; reviewers cannot trust committed outputs.
Recommended minimal fix: add `.gitattributes` (`* text=auto eol=lf`, binary rules); round exported floats (e.g. 12 significant digits) so outputs are platform-stable; add a CI step `git diff --exit-code` after build on ubuntu (and Windows once stable); regenerate the manifest.
Acceptance test: fresh clone → `npm run check && git diff --exit-code` passes on ubuntu-24.04 and windows-2025.
Effort range: 2–6 hours
```

```
Proposed ID: MSR-INT-001
Title: Public exporters emit injectable or invalid output for caller-supplied palettes (CSS comment break-out, raw hex, invalid Swift/Kotlin identifiers, DTCG-reserved names, silent drops)
Severity (proposed): Low (Medium if consumers accept user palettes)   Confidence: high
Status: reproduced
Location: packages/core/src/exporters/tailwind.ts:30–35 (comments with nameFa, raw `color.hex`, raw `palette.id`); platforms.ts:5–7, 15–16 (identifiers from `p.id`); w3c.ts:22 (`persian[palette.id]`), figma.ts:10
Observed / verbatim: (payload strings in agents/W3-SENSITIVE.md and the probe logs) exportTailwindV4CSS with a crafted nameFa closes the comment and emits new top-level CSS; Tailwind exporters pass through non-hex values; Swift emits `static let persian_a.b_1`; Kotlin emits `val 1stPaletteLightColorScheme` (kotlinc: "Expecting property name"); `a-b` + `a_b` → duplicate Swift names; `a-b` + `aB` → Kotlin "conflicting declarations"; id `$description` overwrites the DTCG group description; id `__proto__` is silently dropped from Tailwind/W3C output; empty palette → Kotlin exporter throws TypeError.
Expected / rule or spec: DTCG names "MUST NOT begin with $" and must not contain { } .; generated source must be syntactically valid; code generators should escape or reject.
Reproduction or source trail: `node exporter-injection-probe.mjs <dist/index.js>`; `node exporter-reserved-key-probe.mjs <dist/index.js>`; Kotlin compile of probe output.
Evidence path: evidence/W3-security/exporter-injection-probe.{mjs,log}, exporter-reserved-key-probe.{mjs,log}, kotlin-compile.log; details: agents/W3-SENSITIVE.md
Impact: built-in data is unaffected; any consumer feeding user-defined palettes gets broken or injectable CSS/Swift/Kotlin/DTCG.
Recommended minimal fix: validate palettes at the exporter boundary (id `^[a-z][a-z0-9-]*$`, hex via `hexToRgb`, non-empty colors), escape `*/` and newlines in CSS comments, detect identifier collisions, use `Object.create(null)`/Map for keyed output.
Acceptance test: probe cases either throw a clear validation error or produce output that compiles (kotlinc/swiftc) and parses (Tailwind v4, DTCG name rules).
Effort range: 0.5–1 day
```

```
Proposed ID: MSR-INT-002
Title: Tailwind step numbers are ordinal positions, not a lightness scale; five incompatible naming schemes across exports
Severity (proposed): Medium   Confidence: high
Status: reproduced
Location: packages/core/src/exporters/tailwind.ts:13–15, 32–33; platforms.ts:6 (`persian_<id>_<i+1>`); w3c.ts (name slugs); app/app.js:3375–3378 (in-app css `--persian-<id>-<n>`, scss, flutter `<id>_<n>`)
Observed / verbatim: OKLab L for steps 100..600 is non-monotonic in 12/12 palettes (isfahan-tiles 0.31 0.79 0.65 0.77 0.96 0.19). Same color = `--persian-isfahan-tiles-ultramarine-lapis` (Style Dictionary), `--color-persian-isfahan-tiles-100` (Tailwind v4), `--persian-isfahan-tiles-1` (studio CSS tab), `persian_isfahan_tiles_1` (Swift), and by role name in Kotlin.
Expected / rule or spec: Tailwind users read 50–950 as light→dark; tokens should have one canonical path per color across platforms (DTCG: "Translation tools SHOULD … use design tokens' paths").
Reproduction or source trail: evidence script output.
Evidence path: evidence/W3-security/interop/tailwind-step-lightness.log, interop/tailwind.log
Impact: `bg-persian-x-100` on text is often illegible; cross-platform handoff requires manual mapping.
Recommended minimal fix: name Tailwind keys by token slug (`persian-isfahan-tiles-ultramarine-lapis`) or add a separate lightness-sorted scale; derive Swift/Kotlin/CSS names from the DTCG path.
Acceptance test: one token path maps deterministically to each platform name; a test asserts the mapping for all 72 tokens.
Effort range: 0.5–1 day (breaking change → semver major or aliases)
```

```
Proposed ID: MSR-INT-003
Title: Compose ColorScheme export covers 24 of 36 Material 3 roles; container/inverse roles fall back to Material baseline
Severity (proposed): Low–Medium   Confidence: high (API surface), medium (visual impact not rendered)
Status: reproduced (compile + javap)
Location: packages/core/src/math/hct.ts:6–12 (M3_ROLES); tokens/ColorSchemes.kt
Observed / verbatim: 24 named args per scheme; Compose material3 1.7.3 `lightColorScheme` has 36 color params; MCU 0.3.0 DynamicScheme exposes surfaceContainer*, surfaceBright/Dim, inverse*, scrim, surfaceTint.
Expected / rule or spec: a generated M3 scheme should set all roles used by M3 components (e.g. Card/NavigationBar use surfaceContainer*).
Reproduction or source trail: kotlinc compile + javap (evidence).
Evidence path: evidence/W3-security/kotlin-compile.log
Impact: Android/Compose apps get baseline lavender surfaces mixed into a Persian scheme.
Recommended minimal fix: extend M3_ROLES to the full MCU role list and emit all 36 params.
Acceptance test: ColorSchemes.kt sets every lightColorScheme/darkColorScheme parameter; compile passes.
Effort range: 1–3 hours
```

```
Proposed ID: MSR-REL-003
Title: CommonJS TypeScript consumers cannot import exported types (index.d.cts `export =` exposes values only)
Severity (proposed): Low   Confidence: high
Status: reproduced
Location: packages/core/scripts/build.js:19 → dist/index.d.cts
Observed / verbatim: `a.cts(1,15): error TS2305: Module '"@persian-palette/core"' has no exported member 'PersianPaletteDefinition'.` and `TS2503: Cannot find namespace 'core'.` (TS 7.0.2, NodeNext)
Expected / rule or spec: `types` for the `require` condition should expose the same type surface as ESM.
Reproduction or source trail: evidence/W3-security/cts-type-import.log
Evidence path: same
Impact: CJS TS users lose interfaces (PersianPaletteDefinition, DTCG types) needed to write custom palettes.
Recommended minimal fix: generate a real CJS declaration (tsc with module commonjs into dist/cjs/*.d.cts), or `export = core` plus `declare namespace core { export type … }` re-exports.
Acceptance test: add the a.cts case to scripts/verify-package.mjs.
Effort range: 1–3 hours
```

```
Proposed ID: MSR-SEC-001
Title: No CSP possible for the studio HTML (≈114 inline handlers + 26 data-built innerHTML sinks); local server lacks CSP, Host check, and follows symlinks
Severity (proposed): Low   Confidence: high
Status: reproduced (server); source-confirmed (sinks)
Location: app/app.js (sink table §3); scripts/serve.mjs:12–18
Observed / verbatim: 101 onclick/8 onchange/4 oninput/1 onerror attributes in code_artifact.html, 0 CSP; server responds 200 to `Host: attacker.example`; symlink placed in docs/ (private copy only) is served (lexical containment check, `fs.readFile` follows links); headers: nosniff + no-referrer only.
Expected / rule or spec: defense in depth; OWASP DOM-XSS prevention (textContent / DOM APIs); DNS-rebinding guidance (validate Host for localhost servers).
Reproduction or source trail: evidence/W3-security/serve-probe.log, dom-sinks.log
Evidence path: same
Impact: none exploitable today (no untrusted input reaches sinks; served files are public). Becomes relevant if imports/user palettes are added.
Recommended minimal fix: replace inline handlers with delegated listeners and build DOM with textContent; in serve.mjs check `req.headers.host` ∈ {127.0.0.1:port, localhost:port}, `fs.realpath` + prefix check, add a CSP header.
Acceptance test: integration test sends foreign Host → 421/403; symlink test → 404; HTML loads under `Content-Security-Policy: script-src 'self' 'sha256-…'` without violations.
Effort range: server 1–2 hours; handler refactor 1–2 days
```

```
Proposed ID: MSR-SEC-002
Title: Archived v2.1.0 HTML (in repo and release ZIP) executes unversioned remote scripts without SRI
Severity (proposed): Low   Confidence: high
Status: source-confirmed
Location: archive/v2.1.0/code_artifact.html (`<script src="https://cdn.tailwindcss.com">`, `<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js">`, 0 `integrity`)
Observed / verbatim: as above
Expected / rule or spec: remote scripts should be pinned with SRI; the Tailwind Play CDN is not for production.
Reproduction or source trail: grep
Evidence path: this report §5
Impact: anyone opening the archived file runs whatever those CDNs serve.
Recommended minimal fix: drop the archived HTML from the release ZIP, or add a README warning / replace with a static screenshot.
Acceptance test: ZIP contains no HTML with remote `<script src>`.
Effort range: <1 hour
```

```
Proposed ID: MSR-REL-004
Title: Package metadata and payload hygiene (missing repository/homepage/bugs, group author/copyright, duplicate 400 KB token file, dead types forwarder, no sideEffects/package.json export)
Severity (proposed): Low   Confidence: high
Status: reproduced
Location: packages/core/package.json; packages/core/LICENSE:3; packages/core/types/index.d.ts; packages/core/tokens/style-dictionary.json
Observed / verbatim: repository/homepage/bugs: none; author "Persian Palette Vault Working Group"; LICENSE "Copyright (c) 2026 Persian Palette Vault contributors"; `cmp w3c-tokens.json style-dictionary.json` → identical; types/index.d.ts unreachable via `exports`.
Expected / rule or spec: npm metadata identifies source and maintainer; copyright holder should be an identifiable person/entity (brief: sole maintainer).
Reproduction or source trail: tarball unpack (§7)
Evidence path: this report §7
Impact: provenance and support channel unclear to consumers; 16% of unpacked size is a duplicate.
Recommended minimal fix: add repository/homepage/bugs, set author to the maintainer, align LICENSE holder (maintainer's decision), make ./tokens/style-dictionary an alias of the same file, drop types/, add `"sideEffects": false` (after confirming the frozen-data modules have no required side effects) and `"./package.json": "./package.json"`.
Acceptance test: `npm pkg get repository author` non-empty; tarball has one copy of the DTCG JSON.
Effort range: 1–2 hours
```

```
Proposed ID: MSR-REL-005
Title: Inactive release template would publish with write permission via mutable action tags and hard-coded version
Severity (proposed): Low   Confidence: high
Status: source-confirmed
Location: .github/workflows-templates/release.yml:12–13, 16, 19, 25, 42, 47–48
Observed / verbatim: `contents: write`; `actions/checkout@v4`; `softprops/action-gh-release@v2`; `release/persian-palette-core-3.0.0.tgz`
Expected / rule or spec: same pinning policy as ci.yml; version derived from tag.
Reproduction or source trail: read file
Evidence path: release-ci-facts.log
Impact: if activated as-is: supply-chain exposure with a write token; wrong filenames for any other version.
Recommended minimal fix: pin SHAs, derive filenames from `${{ github.ref_name }}`, verify tag == package version, attach CI-built artifacts only.
Acceptance test: actionlint + a dry run on a test tag.
Effort range: 1–2 hours
```

```
Proposed ID: MSR-INT-004
Title: Figma importer is not a runnable plugin and is not idempotent
Severity (proposed): Low   Confidence: medium (static only)
Status: source-confirmed (runtime not-tested)
Location: docs/figma-import.js:1–15
Observed / verbatim: "Each import creates a new collection."; no manifest.json/UI, function never invoked, no figma.closePlugin().
Expected / rule or spec: users need an executable path; re-import should update existing variables.
Reproduction or source trail: tsc --checkJs against @figma/plugin-typings 1.139.0 (passes)
Evidence path: evidence/W3-security/figma-typecheck.log
Impact: manual wiring required; duplicate collections on re-run.
Recommended minimal fix: ship a minimal plugin (manifest + code reading JSON from UI), look up existing collection/variables by name and update values.
Acceptance test: running twice in Figma leaves one collection with 72 variables (manual).
Effort range: 0.5 day
```

```
Proposed ID: MSR-REL-006
Title: `npm start` server does not serve the English edition documented next to it
Severity (proposed): Low   Confidence: high
Status: reproduced
Location: scripts/serve.mjs:11–12
Observed / verbatim: GET /code_artifact_en.html → 404
Expected / rule or spec: both editions reachable from the local studio.
Reproduction or source trail: evidence/W3-security/serve-probe.log
Evidence path: same
Impact: minor DX.
Recommended minimal fix: allow `/code_artifact_en.html` in the route check; add to the integration test.
Acceptance test: integration test GET /code_artifact_en.html → 200.
Effort range: <30 min
```

Minor note for the design/UI lead (not given a separate ID): the "Material 3 · تاریک" dark-scheme list is rendered into `#appleHIGTokensList` under a `fa-apple` icon (template.html:868–873, app.js:3164), so it is labeled with Apple branding although it contains M3 values only.

---

## 9. Passes, with evidence

| Check | Result | Evidence |
|---|---|---|
| DTCG color value shape and naming (shipped file) | conforms to the spec source text | §6 |
| Style Dictionary 5.5.5: 5 platforms from the shipped JSON | 0 warnings, 0 collisions, no `$extensions` leak | interop/style-dictionary.log |
| Tailwind v3.4.19 and v4.3.3 utilities | generated | interop/tailwind.log |
| Kotlin compile of the shipped ColorSchemes.kt and the SD compose output | rc=0 | kotlin-compile.log |
| Figma importer vs the official typings | tsc rc=0; non-deprecated overload | figma-typecheck.log |
| Tokens Studio legacy shape | 72/72 conforming | §6 |
| npm audit (4 runs) | 0 advisories | npm-audit.log |
| DOM sinks | none reachable from untrusted input | §3, dom-sinks.log |
| Remote requests by default | none (vector mode default; photos opt-in) | app.js:1637 |
| Camera | local-only `srcObject`, tracks stopped | app.js:967–990 |
| serve.mjs traversal (encoded, double-encoded, backslash, dot segments, long path, NUL, bad UTF-8) | all 404/400 or normalized to `/` | serve-probe.log |
| serve.mjs bind / methods / headers | 127.0.0.1 only; 405 for POST; nosniff; no-referrer | serve-probe.log |
| CI hardening | contents: read; SHAs verified to match the v7.x tags; no pull_request_target; persist-credentials false | release-ci-facts.log |
| CI at HEAD | 4/4 jobs green | release-ci-facts.log |
| dist/ committed == rebuilt; both HTML files rebuilt byte-identical | identical | rebuild-diff-stat.txt |
| colorparsley code not bundled (CJS, HTML) | tree-shaken; comment only | colorparsley-reachability.log |
| License copies equal upstream (apca-w3, colorparsley) | identical after CRLF normalization | §5 |
| apca-w3 "keep current" | 0.1.9 = npm latest | `npm view apca-w3` |
| Font Awesome CC BY attribution comment kept in the HTML | present | §5 |
| typescript ^7.0.2 | current latest; lock-pinned; Windows CI passes | §7 |
| Release asset digests (tgz, ZIP, manifest) match the committed `release/` files | match | release-ci-facts.log |

## 10. Not tested, blocked, or evidence gaps

- **Swift compile:** not-tested. No swiftc, download.swift.org is blocked, and SwiftUI requires Apple platforms. Commands are in §6.
- **Android/AGP build and rendered Compose UI:** not-tested. I compiled only against the Compose Multiplatform desktop jars.
- **Figma runtime, and import into the Tokens Studio app:** not-tested. The checks were static only.
- **Flutter/Dart and SCSS outputs** from the in-app export tab (app.js:3375–3378): not-tested.
- **Published DTCG TR page:** blocked. I used the GitHub `main` spec source, titled 2025.10.
- **Figma developer docs:** blocked. I used the npm typings instead.
- **Wikimedia photo licenses:** evidence-gap (Commons is blocked).
- **three.js advisory data** was not fetched online (reference knowledge only).
- Whether **GitHub private vulnerability reporting** is enabled could not be checked (no API access). SECURITY.md promises acknowledgment "within 48 hours", which is a commitment for a sole maintainer to confirm.
- **Legal conclusions** on APCA-W3, AGPL, OFL, MIT/Apache notice sufficiency and CC BY-SA hotlinking are deferred to counsel.
