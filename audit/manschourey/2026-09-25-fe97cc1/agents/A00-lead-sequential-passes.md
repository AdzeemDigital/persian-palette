# Audit lead's sequential review passes (A00, A01, A02, A06, A13, K)

- Baseline: `fe97cc1ba1400f5c118d7c290bc1000574ac6dd0`. Date 2026-09-25 (UTC). Environment: Linux x86_64, Node v22.22.2, npm 10.9.7, Python 3.11.15.
- Execution model: the lead ran these passes **one after another in a single context**. They are not independent reviewers. Three separate worker agents ran in parallel (W1 cultural/data/language, W2 browser/accessibility/UX, W3 security/licensing/interop/release). A separate A15 skeptic reviewed afterwards. See `agents/`.
- Throughout, "passed" means the stated command or procedure was run here with the stated result.

## A00 — Baseline and pipeline

| Step | Command | Result | Evidence |
| --- | --- | --- | --- |
| Isolated clone | `git clone <repo> $SCRATCH/work` at fe97cc1 | ok | — |
| Install | `npm ci` ; `npm --prefix packages/core ci` | ok (root 149 packages; core 5) | — |
| Build + tests | `npm run check` | exit 0; core 18/18, integration 8/8 | `evidence/A00-baseline/check.log.txt` |
| Generated drift | `git status` after build | **3 committed generated files change**: `docs/build-manifest.json` (stale hashes and sizes), `w3c-tokens.json` and `style-dictionary.json` (69 value lines per file, 138 in total, of last-digit float drift; count corrected per A15). The HTML is rebuilt byte-identically. | same |
| Pack | `npm run pack:core` | exit 0; 91 files, 234.6 kB | `evidence/A00-baseline/pack-core.log.txt` |
| Committed tarball vs fresh pack | unpack both, compare with CR removed | only CRLF and float-ULP differences; `dist/index.cjs` identical. This suggests the committed tarball was packed on Windows from equivalent sources | this file |
| Package consumer | `npm run verify:package` | exit 0 (ESM, CJS, strict .mts/.cts, 4 doc examples) | `evidence/A00-baseline/verify-package.log.txt` |
| Studio ZIP, clean checkout | `python3 scripts/package-release.py` before build | **exit 1**: "Artifact hash differs from build manifest" | `evidence/A00-baseline/pack-studio-committed-manifest.log.txt` |
| Studio ZIP after build | `npm run pack:studio` | exit 0; 152 files, 8,926,164 bytes; hash differs on every run because it embeds file mtimes | `evidence/A00-baseline/pack-studio.log.txt` |
| Committed ZIP content | compared entries against `git show HEAD:<path>` | 139 entries. 8 differ from HEAD, including README.md (old text: "Enterprise-Grade", "72 authentic colors", "72 authenticated pigment formulas", "100% offline"). 15 tracked files are missing, e.g. README.fa.md, SECURITY.md, CONTRIBUTING.md | this file |

## A01 — TypeScript and package architecture

Passes with evidence:
- ESM (`dist/index.js`, unbundled, imports the `@material/material-color-utilities` and `apca-w3` dependencies) and CJS (`dist/index.cjs`, esbuild bundle that inlines both dependencies and `colorparsley`) both load. Strict `.mts`/`.cts` consumers type-check with `skipLibCheck:false` (verify:package).
- `hexToRgb` rejects malformed input. Lookups throw on unknown or ambiguous input. Canonical data is deeply frozen (core tests 3, 4, 12).
- The UI's color math delegates to `PersianCore` (`app/app.js:391, 785-797, 1740-1744, 1778`), so the browser and the package share one implementation. The integration test compares the browser bundle's DTCG output with the package output.

Observations (feed into findings):
1. **The CJS and ESM paths ship different copies of the dependencies.** CJS bundles apca-w3, colorparsley and MCU; ESM resolves them from `node_modules`. The code is stateless, so there is no dual-package state hazard. But the license notices must cover bundled code (see W3), and a consumer's dependency override does not affect the CJS path.
2. **Import-time work.** Importing the module normalizes all 72 colors and computes APCA, CIELAB and Oklab for each (`palettes.ts:15-66`). Measured ESM import ≈ 63-70 ms and CJS require ≈ 22 ms on this machine (3 runs). There is no `sideEffects` field, so bundlers cannot tree-shake the data away. Low.
3. **Token paths derive from English display names**, not stable IDs (`exporters/w3c.ts:7-8` `colorTokenKey`). Tailwind/Swift identifiers derive from array position (`tailwind.ts:15,37`, `platforms.ts:9-11`). Renaming or reordering a color silently changes consumer-facing identifiers. This matters for the brand and data-correction roadmap. Medium.
4. **`evaluateAPCA().minFontSizePx`** returns apca-w3 special codes (999 and 777) as if they were pixel sizes (`math/apca.ts:20,31`; probe: `evaluateAPCA('#777777','#808080')` → `fontNormal400: 999`). `getApcaFontSizes` documents the codes; `evaluateAPCA` does not. Low.
5. **`hctToHex` silently reduces unreachable chroma.** Requested (250°, 150, 50) → `#007CC4` with achieved chroma 52.3. Neither the type nor the docs say so (`math/hct.ts:32-36`). Low.
6. **The browser UI keeps a silent fallback** that the package removed: `app/app.js:1857-1864` `hexToRgb` returns `#120A8F` for invalid input. This contradicts the migration note "ورودی نامعتبر رد می‌شود" for the studio. Low.
7. **Dead or legacy duplicates in the UI:** `srgbLin`, `linSrgb` (`app.js:787-795`), `srgbToLinear`, `linearToSrgb` (`app.js:1730-1739`), and a comment claiming "SAPC-0.0.98G Implementation" above a one-line delegate (`app.js:388-391`). Low (maintainability, misleading comment).
8. **The `types/index.d.ts` forwarding file** is not referenced by `exports` or `types`. It is harmless and can be removed in a major release. The package also exports no `./package.json` subpath. Informational.
9. **Palette-ID lookups are case-sensitive and not normalized** (`getColor('Isfahan-Tiles',…)` throws). This is acceptable as a contract but undocumented. Informational.
10. **Partial matching can shift over time.** `getColor('achaemenid-majesty','gold')` resolves to `-c2` "Old Gold" today. Adding another "gold" name later turns it into an ambiguity error, which is safe but a breaking change for consumers. Informational (documented as "unambiguous partial names").

## A02 — Color science (independent oracles)

Script: `evidence/A02-color/oracle-comparison.mjs`; output: `evidence/A02-color/oracle-comparison.out.json`. The oracles, colorjs.io 0.5.2 and culori 4.0.2, are separate code bases from the project's Oklab code, apca-w3 and MCU. Sample: the 72 palette colors, 12 edge colors and 5,000 seeded random colors (mulberry32, seed 0x5eed1234).

| Check | Result | Verdict |
| --- | --- | --- |
| Oklab forward vs culori and colorjs | max abs diff 3.7e-8 | pass |
| Oklab ↔ sRGB round trip | 200,000 colors, 0 failures | pass |
| HCT vs colorjs `hct` | hue ≤ 0.055° (chroma > 2), chroma ≤ 0.011, tone ≤ 0.0042 | pass |
| APCA vs colorjs contrastAPCA (0.0.98G-4g) | 3,000 pairs, max diff 0 Lc; polarity correct (black/white +106.04, white/black −107.88) | pass |
| WCAG 2.x ratio (formula used by studio badges) vs colorjs WCAG21 | max diff 0.00083 | pass |
| CIELAB D65 (MCU `labFromArgb`) vs colorjs lab-d65 | max diff 0.0074 | pass |
| Hue wraparound in `hctToHex` | −30°, 330° and 690° give the same result | pass |
| Oklab mixing: gamut | 103 of 7,665 palette-pair interpolants fall outside sRGB. Core clips each channel, adding up to ΔEOK 0.0138 (worst: #FDFBF7 × #FE28A2 at 0.5). 1 differs from CSS Color 4 gamut mapping. Undocumented but below a typical ΔEOK ≈ 0.02 JND | Low |
| `physics.dominantWavelengthNm` plausibility | 3 records claim a dominant wavelength that cannot exist: `toranj-illumination-c6` #000000 (black, chromaticity undefined, claims 610 nm), `gardens-of-shiraz-c1` #FE28A2 (purple sector, claims 652 nm), `gardens-of-shiraz-c2` #8B1E3F (purple sector, claims 631 nm) | fail (data) |

Wording and semantics:
- `packages/core/src/math/spectral.ts:2-3` says "Models physical reflectance curves of historical minerals and natural organic dyes". That contradicts `docs/DESIGN_SYSTEM.md` ("Gaussian illustrations") and the provenance `spectralStatus: 'illustrative'`. The doc comment is shipped in `src/`, `dist/*.d.ts` and editor tooltips.
- `evidence.physics.*` (dominant wavelength, spectral reflectance peak) is exported under a key named "physics" in the DTCG `$extensions` for every token. The per-token `provenance.spectralStatus: 'illustrative'` flag is present, but a consumer reading `physics` alone gets no caveat.
- Mixing: `mixHistoricalPigments` / `MixedPigmentResult` / `generatePigmentGradient` keep "pigment" in public API names, even though the doc comments say "not physical pigment mixing". The alias is documented. The naming is still misleading.
- Contrast: the core APCA calculation is correct. The studio labels WCAG-2 ratio thresholds as "WCAG AAA" / "WCAG AA" (`app/app.js:1898-1908`), but a ratio only speaks to SC 1.4.3 / 1.4.6, not conformance. See W2 for the UI evidence.
- `evaluateAPCA` rating tiers (Lc 45/60/75/90) follow the APCA "bronze" readability guideline levels, not a W3C Recommendation. The labels do not claim otherwise. Informational.

## A06 — Documentation and editorial pass

Checked: README.md, README.fa.md, docs/*.md, packages/core/README.md, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md, walkthrough.md, implementation_plan.md, review-2026-09-21.md, the release notes (EN and FA) and the committed ZIP README.

- All four `test:esm` doc examples run against the installed tarball, and their inline expected values match the actual output (`#30D5C8`, `unverified`, `90.67997…`, `#5C6888`, 12, 72). Evidence: this pass (`$SCRATCH/A13/ex*.mjs`). **The harness checks only the exit code, not the commented values.**
- **Contradictory verification claims at the repository root:** `walkthrough.md:45` says the live UI test "با DevTools مرورگر به تایید نهایی رسیده است". `implementation_plan.md:21` says browser access was blocked, and `docs/verification.md:30` says "A live local-app browser session was not performed in this review". `walkthrough.md:3` also says "رفع کامل خطاهای کارکردی" and "۷۲ رنگ تاریخی", and `walkthrough.md:38` says the ZIP has "۱۳۴ فایل" (the committed ZIP has 139).
- `walkthrough.md:9-10` links to `file:///c:/Users/black/...`. The links are broken for everyone else and expose a local path.
- `review-2026-09-21.md` (tracked, root) records local Windows paths, an AI-tool session folder path and session IDs (lines 5, 13-16, 22). It is a useful historical review, but it is repository hygiene and privacy material that should move to an archive or have paths redacted. It also shows that an Antigravity/Gemini session contributed. The current AI-assistance wording (`docs/ROADMAP.md:16` mentions only Codex) should state all tools actually used.
- Attribution: `packages/core/package.json:5` "Persian Palette Vault Working Group"; `LICENSE:3` and `packages/core/LICENSE:3` "Persian Palette Vault contributors"; `SECURITY.md:12` "Persian Palette Design System (Manshour)". No file names the sole maintainer. There is no `CITATION.cff`, no `repository`/`homepage`/`bugs` fields in either package.json, and no data license separate from the code license.
- `SECURITY.md:15` gives `security@adzeem.com` and promises a 48-hour acknowledgment. The mailbox was not verified here. For a sole maintainer, the promise should be realistic.
- Two release-note files with near-identical names (`docs/RELEASE_NOTES_v3.0.0.md` EN, `docs/release-notes-3.0.0.md` FA) are not cross-linked. Low.
- `THIRD_PARTY_NOTICES.md` is accurate about apca-w3 and colorparsley not being MIT. W3 covers the details.

## A13 — Test-strategy pass

Inventory: `packages/core/scripts/core.test.js` (18 `node:test` cases) and `tests/integration.test.mjs` (8 cases), plus the non-`node:test` script `scripts/verify-package.mjs` (installed-package checks and 4 doc examples).

What the assertions actually establish:
- **Independent or semi-independent oracles:** APCA golden values (confirmed equal to colorjs here), HCT red and tonal goldens (confirmed within tolerance by colorjs here), Oklab red coordinates (Ottosson's published values), WCAG ratio ≥ 4.5 for Material role pairs (an independent formula inside the test).
- **Circular or tautological:** `coordinateConflicts === 11` and `measuredSpectra === 0` (`core.test.js:97`) pin the current data counts. `measuredSpectra` is hard-coded in `palettes.ts:72`, so the test cannot fail. `unverifiedHeritageColors: colors.length` is also hard-coded, so it can never report a verified record.
- **Static checks with accessibility-sounding names:** integration test 7 ("accessibility and provenance affordances are present") greps for strings such as `skip-link`, `aria-live` and `prefers-reduced-motion:reduce`. It is a presence check, not an accessibility test. `docs/verification.md` says so correctly.
- **Missing:** a browser E2E smoke test (none exists); exporter adversarial inputs; a check that committed generated files match a rebuild (CI never runs `git diff --exit-code`, which is how the stale manifest shipped); `pack:studio` in CI; value assertions on doc-example output; data-schema validation of `heritage-data.ts` (field types, coordinate ranges, HEX/name duplication); normalization cases beyond ي/ك (alef maksura ى fails, see W1).
- Proposed diagnostic tests are in `evidence/A13-qa/proposed-tests.md`.

## K — Brand-identity inventory (input to BRAND_MIGRATION.md)

Counts are of tracked text outside `archive/`, `release/` and the HTML, plus a separate count in `code_artifact.html`:

| String | tracked src/docs | code_artifact.html |
| --- | ---: | ---: |
| `Persian Palette Vault` | 12 | 2 |
| `Persian Palette` (any) | 20 | 3 |
| `persian-palette` (package, URLs, extension namespace) | 218 | 7 |
| `org.persian-palette` (DTCG extension key) | 159 | 1 |
| `Manshour`/`manshour`/`MANSHOUR` | 5 / 13 / 2 | 0 / 4 / 0 |
| `منشور` | 1 | 1 |
| `PersianCore` (browser global) | 39 | 36 |
| `PersianEngine` (public class) | 42 | 3 |
| `ManschouRey` / `مَنشورِی` | 0 | 0 |

## A06 addendum — bilingual semantic inversion (found while drafting EDITORIAL_REWRITE_SAMPLES.md)

- `app/enhancements.js:8` (English provenance label shown in the color evidence view): `Historical & Mineral: Primary source documented.` The Persian label for the same records (`app/enhancements.js:11`) says `اطلاعات تاریخی و ماده: نیازمند بررسی منبع.` Every record has `heritageStatus: 'unverified'` and `historicalReference.verification: 'not-verified'` (`packages/core/src/tokens/palettes.ts:49,58`). The English edition therefore asserts documentation that the data model itself denies, and does so at the point of use for all 72 colors.
- `app/app.js:79` (English `heroDesc`): "documented historical sources". The Persian counterpart (`app/app.js:40`) says "وضعیت روشن منابع تاریخی" (a clear status of historical sources). Same direction of overclaim.
- `app/enhancements.js:9` (English): "Displayed coordinates follow initial site registry". There is no "site registry"; the Persian says "رکورد اولیهٔ نقشه". Wording implies an authority.
