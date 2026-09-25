# W2: browser runtime, accessibility, graphics/performance/privacy and UX/brand (roles A07, A08, A09)

Worker: W2. Baseline: `fe97cc1` (clean). Date of runs: 2026-09-25. Scope: `code_artifact.html` (fa/rtl, bilingual) and `code_artifact_en.html` (en/ltr), built from `app/template.html`, `app/app.js`, `app/enhancements.js`, `app/polish.css`, `scripts/build-app.mjs` and `scripts/serve.mjs`. Both built HTML files in `$SCRATCH/work` are byte-identical to the checked-in files (SHA-256 `97fda1e8…` for fa and `6062013a…` for en).

This is an audit. No production file was modified. All evidence is under `evidence/W2-browser/`. Paths below are relative to `audit/manschourey/2026-09-25-fe97cc1/` unless they start with `app/`, `scripts/` or `packages/`.

---

## 1. Environment

| Item | Value |
|---|---|
| OS | Ubuntu 24.04.4 LTS in a VM (Linux 6.18 x86_64), 4 vCPU, 16 GB RAM |
| Browser | Chromium 141.0.7390.37 (Playwright build `chromium-1194`), **headless**, run through `playwright@1.56.0` with `executablePath` |
| GPU | None. WebGL ran on SwiftShader software rendering (Chromium logged its "automatic fallback to software WebGL" deprecation warning). |
| A11y engine | axe-core 4.13.0 through `@axe-core/playwright`. Tags: `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa`. |
| Node | v22.22.2 |
| Viewports | 1440×900 desktop; 390×844 mobile (iPhone 13 emulation, DPR 3, touch); 320×640 and 720×450 for reflow; 320×256 and 640×512 for 400% and 200% zoom of a 1280×1024 window |
| Load method | `file://` for both editions. `http://127.0.0.1:4199/` through `scripts/serve.mjs` for clipboard and camera tests, because permissions need an http origin. `serve.mjs` cannot serve the EN edition (see MSR-UX-009). |
| Network | Every non-local request was **recorded and then aborted** (Playwright route → `internetdisconnected`). No third-party host was actually contacted. This gives the "offline" condition. The "online" host list is taken from the recorded attempts. |
| Theme | Set through the app's own `localStorage` key and through `colorScheme` emulation |

Caveats. All timings are lab numbers from one headless VM without throttling, loaded from `file://`. They are **not** field Core Web Vitals. Software WebGL makes GPU cost look different from real hardware. Page zoom was emulated by reducing the CSS viewport, which is how Chromium zoom affects layout. It was not done by pressing Ctrl + in a headed browser.

Reproduction: `evidence/W2-browser/README.txt` and `evidence/W2-browser/scripts/01…09-*.mjs` (shared helpers are in `lib.mjs`).

---

## 2. Test matrix

| # | Check | fa dark | fa light | en dark | en light | Mobile 390 | Result | Evidence |
|---|---|---|---|---|---|---|---|---|
| 1 | Cold load, console errors, page errors | 0 errors | 0 | 0 | 0 | 0 (both editions, both themes) | **pass**. The only console message is Chromium's SwiftShader warning. | `results/01-smoke.json` |
| 2 | External requests on cold load (vector mode) | 0 | 0 | 0 | 0 | 0 | **pass**. One request per load (the HTML file). | `01-smoke.json` |
| 3 | Offline (all non-local requests aborted) | core UI works | works | works | works | works | **pass**, with a caveat: photo mode fails silently (see MSR-PRIV-001) | `02-workflows.json` → `log.failed`, `screens/wf-photo-mode-offline.jpg` |
| 4 | Horizontal scroll at 390 / 320 px | none | – | none | – | none | **pass** | `01-smoke.json`, `05-keyboard-a11y.json` → `reflow` |
| 5 | Search: Persian, Arabic ي/ك, ZWNJ, hex | fa only | | | | | **pass**, except Persian digits ("۱۲۰" returns 0 results) | `02-workflows.json` → `search` |
| 6 | Category filters (6) | ✓ | | | | | **pass** (12/1/1/2/5/3) | `02-workflows.json` → `categories` |
| 7 | Every dialog opens and closes (9 dialogs) | ✓ | ✓ | ✓ | ✓ | | **pass** | `02`, `03`, `04` |
| 8 | Exports: 6 downloads and 6 copies | ✓ | | | | | **pass** functionally. Content issues: MSR-UX-007 | `downloads/`, `02-workflows.json` → `downloads` |
| 9 | Clipboard granted / denied | ✓ / ✓ | | | | | **pass**. On denial a toast says "copy manually". | `02-workflows.json` → `deniedClipboard` |
| 10 | Camera (fake device) granted / denied | ✓ / ✓ | | | | | **pass** functionally. Tracks end on close. The error is not announced (MSR-A11Y-008). | `02`, `03`, `screens/wf-ar-camera-*.jpg` |
| 11 | Audio | AudioContext is created only after the sound toggle is switched on | | | | | **pass** (state `running`). Actual audibility was **not-tested**. | `02-workflows.json` → `sound-toggle` |
| 12 | Theme and language persistence across reload | ✓ | | | | | **pass** (`manshour_theme` and `manshour_lang`) | `02-workflows.json` → `persistence-reload` |
| 13 | Language toggle updates `lang`/`dir` | ✓ | | | | | **pass** for `lang`/`dir`. **Fail** for leftovers (MSR-I18N-001) | `02`, `03` |
| 14 | axe WCAG A/AA, page plus 11 dialog states | 3 rules | 4 rules | 3 rules | 4 rules | | **fail**: 4 rules, 875 node-instances | `results/04-axe-summary.json` |
| 15 | Keyboard: 80 tab stops with visible focus | 80/80 | | | | | **pass** | `05-keyboard-a11y.json` → `tabStops`, `screens/kbd-stop-22.jpg` |
| 16 | Skip link | ✓ | | | | | **pass** | `05` → `skipLink` |
| 17 | Dialog focus trap, Escape, restore, nested dialogs, backdrop | ✓ | | | | | **pass** | `05` → `dialog` |
| 18 | Accessible names and states | | | | | | **fail** (MSR-A11Y-005/006/007) | `05` → `names_fa`, `names_en` |
| 19 | Reflow at 320×640 | ✓ | | ✓ | | | **pass** (no horizontal scroll) | `05` → `reflow` |
| 20 | 400% zoom (320×256) | 0 px of content visible | | 23 px visible | | | **fail** (MSR-A11Y-002) | `results/08-zoom400.json`, `screens/zoom400-320x256-fa-scrolled.jpg` |
| 21 | prefers-reduced-motion | ✓ | | | | | **pass** (animations reduced, mesh stops rotating, card tilt off). The WebGL loop still renders at ~10 fps. | `05` → `reducedMotion` |
| 22 | Rendered text contrast | 0 of 53 sampled solid-background elements fail | **fail** | 0 of 53 fail | **fail** | | **fail** in light theme (MSR-A11Y-001/003) | `05` → `textContrast`, `06` → `lightTargets` |
| 23 | Target size (SC 2.5.8) | 72 under 24 px | | | | 72 | **fail** (MSR-A11Y-004) | `05` → `targetSize` |
| 24 | Language of parts | 25 Latin phrases, 0 `lang` attributes | | 53 Persian nodes under `lang=en` | | | **fail** (MSR-A11Y-009) | `05` → `langParts_*` |
| 25 | WebGL unavailable / context lost / resize | | | | | | **partial** (MSR-GFX-002) | `06`, `09`, `screens/webgl-unavailable-drawer.jpg` |
| 26 | Lab performance, heap over 10 open/close cycles | | | | | | measured (MSR-GFX-001/003) | `06-perf-graphics.json` |
| 27 | Screen reader | | | | | | **not-tested** | – |

### Controls found and exercised

The static page has 409 controls at load: buttons, generated `role=button` divs, 8 selects, inputs and links. The report `02-workflows.json` → `controls` lists each one. Exercised:

- **Header.** NPM modal, mixer modal, W3C tokens (export), vector/photo art mode, export ("دریافت کدها"), sound, M3 scientific modal, spatial mode, 3D studio, theme, language. All exercised.
- **Hero.** Search input, 6 category pills, evidence CTA. All exercised.
- **Each palette card** (×12, sampled on the first card): shuffle, evidence, matrix, gradient, fullscreen studio, 6 swatch strips (mouse and Enter key), primary-copy button, cycle-mode button, 6 color items, and 6 atom evidence buttons. All exercised on card 1. Swatch keyboard activation was also exercised.
- **Evidence dialog.** Palette select, 6 color pills, 6 tabs, APCA background presets and color input, Maps link (href inspected, not followed), copy coordinates, mixer select and slider, 5 step tiles (mouse and keyboard), light and gloss sliders, 4 token formats with copy, AR start, close. All exercised except the color input. The native color picker was **not-tested**.
- **AR dialog.** Room/camera mode, 3000K/5500K, cycle color, close. All exercised.
- **Scientific dialog.** 4 tabs, color pills, copy JSON, copy CSS, tone tile copy. All exercised.
- **Matrix dialog.** 30 cells with apply-pair. Exercised.
- **Gradient dialog.** 4 copy buttons. One exercised.
- **Export dialog.** 6 tabs, download, copy. All exercised.
- **NPM dialog.** Two copy buttons. Exercised.
- **Quick mixer.** Two selects, ratio slider, copy, "open evidence". Exercised.
- **3D drawer.** Smart shuffle (3 modes), reset, matrix, copy CSS, 4 templates, 5 vision filters, rotate, wireframe, geometry select, 6 swatch tiles, close. All exercised. Mouse drag-to-orbit was **not-tested**.

---

## 3. Proposed findings

Severity and IDs are proposals for A00.

### MSR-A11Y-001: In light theme, sample text becomes near-invisible while the WCAG badge next to it still reports "AAA"

- **Severity (proposed):** High. **Confidence:** high. The failure was measured three ways: axe, computed styles and screenshots.
- **Status:** reproduced
- **Location:**
  - `app/polish.css:55-57` (`html.light .glass-card p {color:#334155 !important}`)
  - `app/polish.css:98-101` (`html.light [role="dialog"] h3, h4 {color:#0f172a !important}`)
  - These override the inline sample colors set at `app/app.js:2204-2217` and `app/app.js:2523-2527`, while the badge is computed from the palette pair at `app/app.js:2045-2046` and `app/app.js:2499-2500`.
- **Observed:**
  - On the Isfahan card in light theme, the badge reads `16.2:1 (AAA)`. The rendered body text is `rgb(51,65,85)` on `rgb(11,19,43)`, which is **1.78:1**. The inline style asked for `rgb(244,241,222)`.
  - axe reports `#card-body-*` at 1.33–1.65:1 on the other cards.
  - The 3D drawer mockup heading renders `#0f172a` on `#0b132b`, which is **1.02:1**, next to a `16.2:1 (AAA)` badge.
  - The light theme is chosen automatically for every user whose OS prefers light (`app/app.js:19`).
- **Expected:** SC 1.4.3 Contrast (Minimum). A contrast tool must also report the contrast that is actually rendered.
- **Reproduction:** `scripts/06-perf-graphics.mjs` → `lightTargets`; `scripts/04-axe.mjs`.
- **Evidence:** `results/06-perf-graphics.json` (`lightTargets.cardBody`, `drawerHeading`), `screens/light-card-isfahan-zoom.jpg`, `screens/light-drawer-heading.jpg`, `screens/contrast-fa-light-cards.jpg`.
- **Impact:** The product's core promise (calibrated, contrast-checked samples) is visibly false in the default theme for light-preference users. The text is unreadable for everyone.
- **Recommended minimal fix:** Scope the light overrides so they skip preview surfaces (for example `:not(#mockupCard *):not([id^=card-sample-] *)`), or apply the sample colors with a class that has higher specificity. Also compute the badge from the rendered colors (`getComputedStyle`) instead of the palette pair.
- **Acceptance test:** In light theme, axe reports 0 `color-contrast` violations on `[id^=card-body-]` and `#mockupCard h4`, and the badge ratio equals the ratio of the computed styles within ±0.05.
- **Effort range:** S–M (0.5–1 day)

### MSR-A11Y-002: At 400% zoom the sticky header is taller than the viewport, so no page content is reachable

- **Severity (proposed):** High. **Confidence:** high, with the caveat that zoom was emulated through the viewport.
- **Status:** reproduced
- **Location:** `app/template.html:200` (`header … sticky top-0 z-40`), which wraps 13 controls at `app/template.html:204-318`.
- **Observed:** At 320×256 CSS px (a 1280×1024 window at 400%), the header is 277 px tall in fa, so **0 px** of content shows under it after scrolling. In en the header is 233 px, leaving 23 px. At 320×640 the header takes 277 of 640 px (43%).
- **Expected:** SC 1.4.10 Reflow. Content must be usable at 320 CSS px without loss. See also SC 2.4.11 Focus Not Obscured (Minimum): at this size focused content ends up under the header.
- **Reproduction:** `scripts/08-zoom400.mjs`.
- **Evidence:** `results/08-zoom400.json`, `screens/zoom400-320x256-fa-scrolled.jpg`.
- **Impact:** Low-vision users who zoom to 400% cannot read or operate the main content.
- **Recommended minimal fix:** Stop the header being sticky below a height threshold (for example `@media (max-height:500px), (max-width:640px) { header{position:static} }`), or collapse the tools into one menu button.
- **Acceptance test:** At 320×256 the header takes ≤ 30% of the viewport height, or scrolls away with the page. Every tab stop is at least partly visible.
- **Effort range:** S (≤ 0.5 day) for the CSS fix; M for a collapsible toolbar.

### MSR-A11Y-003: Light theme leaves pale "-300" accent text on white across the chrome

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - Header buttons and version badge use `text-amber-300`, `text-cyan-300` and similar at `app/template.html:211, 218, 258, 290, 299, 311`.
  - The HUD values at `app/template.html:359-371` are not remapped in `app/polish.css`, which only remaps slate text (`:68-77`).
  - Color-list items use `bg-slate-950/60` (`app/app.js:2250`), which `html.light .bg-slate-950` (`app/polish.css:58-63`) does not match, so they stay mid-grey behind `#475569` text.
- **Observed ratios:**

  | Element | Contrast |
  |---|---|
  | Version badge | 1.24:1 |
  | Header "دریافت کدها" | 1.34:1 |
  | HUD "۷۲ رنگ sRGB" | 1.43:1 |
  | Color-list hex text | 1.40:1 |
  | Export tabs | 1.56:1 |
  | NPM copy buttons | 1.19:1 |

  axe `color-contrast` found **295 node-instances** across all states. Light states make up most of them, for example `fa/light/page:9`, `npm:11`, `export:7`, `sci:5`. In dark theme, axe found only 1–9 per dialog: `text-slate-500` at 10 px is 3.75:1 in the drawer, and the matrix diagonal is 2.66:1. Most matrix-cell failures are the deliberately failing color pairs being displayed. Those are by design, but the 8 px AAA/AA/Fail labels inside them are not.
- **Expected:** SC 1.4.3.
- **Evidence:** `results/04-axe-summary.json` (`byRule[color-contrast]`), `results/06-perf-graphics.json` (`lightTargets`), `screens/smoke-en-mobile-light.jpg`.
- **Impact:** Light theme (the default for light-preference users) is hard to read in navigation and metadata.
- **Recommended minimal fix:** Add `html.light` remaps for `text-*-300/400` accent classes to their `-700/800` shades, and remap `bg-slate-950/60`.
- **Acceptance test:** axe finds 0 `color-contrast` violations on `page`, `export`, `npm` and `sci` in fa/light and en/light.
- **Effort range:** S–M

### MSR-A11Y-004: 72 nested interactive controls, and 72 evidence buttons below the 24 px target size

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - `app/app.js:2248-2266`: a color item `div onclick=copyColorHex` contains `<button onclick="…openEvidenceDashboard">`.
  - `app/enhancements.js:90-92` gives the div `role=button` and `tabindex=0`.
  - The inner button has class `p-0.5` and renders 14×36 px.
- **Observed:** axe `nested-interactive` (SC 4.1.2) on 72 nodes and `target-size` (SC 2.5.8) on 72 nodes, in every edition and theme. The own-script count matches: 72 targets of 14×36 px at both 1440 and 390 px widths. There are also 2 tab stops per color item.
- **Expected:** SC 4.1.2 Name, Role, Value (a button role cannot contain another interactive element) and SC 2.5.8 Target Size (Minimum).
- **Evidence:** `results/04-axe-summary.json`, `results/05-keyboard-a11y.json` (`targetSize`, `tabStops` 35–46).
- **Impact:** Screen readers may drop the inner button. Touch users will hit the wrong control, because copy and open-evidence sit on top of each other.
- **Recommended minimal fix:** Make the item a plain container holding two sibling `<button>`s ("copy #hex" and "details"), each at least 24×24 px.
- **Acceptance test:** axe reports 0 `nested-interactive` and 0 `target-size` violations.
- **Effort range:** S

### MSR-A11Y-005: Wrong or generic auto-generated accessible names

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - `app/enhancements.js:86` gives any unnamed button whose `onclick` does not start with `close` the name **"انتخاب رنگ"** ("select color").
  - The 3D drawer's × close button (`app/template.html:413`, `onclick="togglePreviewDrawer()"`) therefore gets the name "select color". It is also the first focus stop when the drawer opens, and it is 22×36 px.
  - `app/enhancements.js:96` names 5 selects **"تنظیم رنگ"** ("adjust color"): `#studioShuffleModeSelect`, `#studioTemplateSelect`, `#visionModeSelect`, `#evPaletteSelect` and `#evMixerSelectB`. Visible labels exist next to them but are not associated (`app/template.html:473, 490`).
- **Expected:** SC 4.1.2, SC 2.4.6 Headings and Labels, SC 1.3.1 Info and Relationships.
- **Evidence:** `results/05-keyboard-a11y.json` (`dialog.drawerFirstFocus`, `names_fa.genericNames`), `screens/kbd-drawer-first-focus.jpg`.
- **Impact:** Screen-reader users hear "select color" on the close button and cannot tell the five selects apart.
- **Recommended minimal fix:** Give `aria-label="بستن" / "Close"` at `app/template.html:413`. Turn the visible spans into `<label for>`. Change the fallback so it never invents a name and instead warns in development.
- **Acceptance test:** No control has the name "انتخاب رنگ" or "تنظیم رنگ" unless it actually selects or adjusts a color. The drawer close button is named "Close"/"بستن".
- **Effort range:** S

### MSR-A11Y-006: The theme and language toggles fail label-in-name, and the EN language button announces the wrong action

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - The static `aria-label`s at `app/template.html:301` ("تغییر تم بین روشن و تاریک") and `app/template.html:313` ("تغییر زبان به انگلیسی") override the visible labels.
  - `app/app.js:111-115` and `app/app.js:164-166` update only the visible text.
  - Visible "بستن دیدبان علمی", "بستن شناسنامهٔ رنگ" and "بستن شبیه‌ساز AR" are named "بستن پنجره" (`app/template.html:888, 1499, 1642`).
- **Observed:**

  | Mode | Visible text | Accessible name |
  |---|---|---|
  | fa | "English" | "تغییر زبان به انگلیسی" |
  | fa | "تم روشن" | "تغییر تم بین روشن و تاریک" |
  | en | "فارسی" | still "switch to English" in Persian |
  | en | "Light Mode" | Persian name |

- **Expected:** SC 2.5.3 Label in Name, SC 4.1.2.
- **Evidence:** `results/05-keyboard-a11y.json` (`names_fa.labelInNameMismatch`, `names_en.labelInNameMismatch`).
- **Impact:** Voice-control users saying "click English" fail. Screen-reader users are told the wrong action.
- **Recommended minimal fix:** Remove the static `aria-label`s, or rebuild them in `setLanguage`/`setTheme` so they include the visible text.
- **Acceptance test:** For every button, the `aria-label` contains the trimmed visible text. After switching to EN, the language button's name mentions Persian/فارسی.
- **Effort range:** S

### MSR-A11Y-007: Toggle states and tab widgets are not exposed programmatically

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - Toggles with no `aria-pressed`: `#soundToggleBtn`, `#spatialModeToggle`, `#artModeVectorBtn`/`#artModePhotoBtn`, `#threeRotateBtn`, `#threeWireBtn`, `#themeToggleBtn`. State is shown only by icon and color (`app/app.js:1695-1723, 1795-1812, 3558-3569`).
  - Tab sets built from plain buttons with no `role=tab`, `aria-selected` or `aria-controls`, and no arrow-key support: evidence `app/template.html:935-958`, scientific `:728-743`, export `:676-681`, token `:1471-1474`.
- **Expected:** SC 4.1.2. SC 1.3.1. SC 1.4.1 for the selected state conveyed by color plus border.
- **Evidence:** `results/05-keyboard-a11y.json` (`names_fa.pressedState`, `dialog.tabsSemantics`, `dialog.arrowOnTab`).
- **Impact:** Screen-reader users cannot tell whether sound or photo mode is on, or which tab is active.
- **Recommended minimal fix:** Add `aria-pressed` updates, and use the ARIA tabs pattern (or `aria-current` on buttons).
- **Acceptance test:** The ARIA snapshot shows `pressed` states and `tab [selected]`.
- **Effort range:** S–M

### MSR-A11Y-008: Some status changes are not announced

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - The empty-search state (`app/template.html:394-398`) is not a live region, and there is no result count.
  - The camera-denied message (`app/template.html:1611-1615`) is not a live region and is Persian-only in EN mode.
  - The toast (`app/template.html:1651`) is correct (`role=status`). It auto-hides after 2.6 s (`app/app.js:2422`).
- **Expected:** SC 4.1.3 Status Messages.
- **Evidence:** `results/05-keyboard-a11y.json` (`liveRegions`, `emptyStateAnnounced`), `results/03-denied-and-en.json` (`deniedCamera.liveRegion:false`), `screens/wf-ar-camera-denied.jpg`, `screens/wf-empty-state.jpg`.
- **Recommended minimal fix:** Add a polite live region with "N palettes" or "no results", and give the camera error `role=alert`.
- **Acceptance test:** Both messages appear in live regions in the ARIA snapshot.
- **Effort range:** S

### MSR-A11Y-009: Language of parts, and untranslated names, labels and title in EN

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - `<title>` at `app/template.html:6` is not translated.
  - The skip link at `app/template.html:182` is Persian only.
  - Static Persian `aria-label`s: `app/template.html:301, 313, 346, 389`, and `enhancements.js:86,96`.
  - `palette.description` is rendered in both languages (`app/app.js:2118`), and EN `palContext` is also Persian (`app/app.js:2055`).
  - The body contains **0** `lang` attributes.
- **Observed:**
  - In the EN edition, 53 visible Persian text nodes sit under `lang=en`, plus 20+ Persian `aria-label`s.
  - In fa, 25 English phrases such as "Safavid Tilework of Isfahan" or "WebGL Three.js GPU" have no `lang=en`.
  - A screen reader using an English voice will mispronounce or skip the Persian content (by inference; not screen-reader-tested).
- **Expected:** SC 3.1.2 Language of Parts. SC 2.4.2 Page Titled (the title should match the page language).
- **Evidence:** `results/05-keyboard-a11y.json` (`langParts_fa`, `langParts_en`), `results/03-denied-and-en.json` (`enMeta`).
- **Recommended minimal fix:** Wrap bilingual names in `<span lang="en" dir="ltr">` / `<span lang="fa" dir="rtl">`, and translate the title, skip link and `aria-label`s in `setLanguage`.
- **Acceptance test:** EN edition has 0 Persian text nodes without an ancestor `lang="fa"`; `document.title` is English.
- **Effort range:** M

### MSR-A11Y-010: The scrollable export code block is not keyboard-focusable

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** reproduced
- **Location:** `app/template.html:686` (`pre#exportCodeBlock`, overflow-y-auto).
- **Observed:** axe `scrollable-region-focusable` in 4 of 4 export states.
- **Expected:** SC 2.1.1 Keyboard.
- **Evidence:** `results/04-axe-summary.json`.
- **Recommended minimal fix:** `tabindex="0"`, `role="region"` and an `aria-label`.
- **Acceptance test:** The axe rule passes.
- **Effort range:** XS

### MSR-A11Y-011: Bidi mangling of hex codes and Latin-in-parentheses names in RTL

- **Severity (proposed):** Low. **Confidence:** high (visual).
- **Status:** reproduced
- **Location:**
  - `app/app.js:2228` and `app/app.js:2346` (`کپی اکشن: ${hex}`)
  - `app/app.js:2537` (`(${cPrimary.hex})`)
  - `app/app.js:2194` and `app/app.js:2255` (names like "لاجوردی (Ultramarine)" truncated with `truncate`)
- **Observed:** Rendered "120A8F#", "(120A8F#", "…te Green)", "…arine)" (see screenshots).
- **Expected:** SC 1.3.2 Meaningful Sequence (visual order of a code). This is also a quality issue.
- **Evidence:** `screens/light-drawer-heading.jpg`, `screens/wf-photo-mode-offline.jpg`, `screens/contrast-fa-light-cards.jpg`.
- **Recommended minimal fix:** Wrap every hex code in `<bdi dir="ltr">` and every Latin name in `<bdi lang="en">`.
- **Acceptance test:** Screenshots show "#120A8F" in fa.
- **Effort range:** S

### MSR-UX-001: English UI copy upgrades hedged Persian wording into authenticity and documentation claims

- **Severity (proposed):** High. **Confidence:** high. This is a verbatim comparison between languages. A00 established that `unverifiedHeritageColors` = 72 and `measuredSpectra` = 0.
- **Status:** source-confirmed and reproduced
- **Location and verbatim text:**

  | Location | English | Persian |
  |---|---|---|
  | `app/app.js:77` vs `:38` | "Authentic Iranian Heritage Colors • Production Design Tokens" | "رنگ‌های الهام‌گرفته از میراث ایران" ("inspired by Iranian heritage") |
  | `app/app.js:78`, fa `:39` / `app/template.html:333` | "Multi-Evidence Provenance, **Spectral Physics** & APCA Contrast" | "…فیزیک نور…" ("physics of light") |
  | `app/app.js:79` | "…**documented historical sources**" | "وضعیت روشن منابع تاریخی" ("clear status of historical sources") |
  | `app/enhancements.js:8` vs `:11` | "Historical & Mineral: **Primary source documented.**" | "نیازمند بررسی منبع" ("needs source review") |
  | `app/app.js:89` | "Color Science Dossier & Provenance" | – |

  The EN provenance line is the in-dialog caveat, so the English caveat asserts the opposite of the Persian one.
- **Expected:** UI claims must match the evidence state (unverified, illustrative spectra), and must say the same thing in both languages.
- **Reproduction:** Open the EN edition and then the evidence dialog.
- **Evidence:** `screens/wf-evidence-en-light.jpg`, `screens/smoke-en-mobile-light.jpg`, `results/02-workflows.json` (`evidence-open-cta.provenance` for fa).
- **Impact:** English-speaking users (the likely international audience) are told the colors are authentic and documented, while the data says they are unverified.
- **Recommended minimal fix:** Translate the Persian hedged wording literally. EN provenance should read "Historical & mineral notes: unverified; source review needed."
- **Acceptance test:** A grep of app/ finds no "Authentic", "Spectral Physics" or "Primary source documented". A00/W1 review the EN and fa strings in parallel.
- **Effort range:** XS–S

### MSR-UX-002: The studio template claims full WCAG 2.2 compliance for any color pairing

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** source-confirmed and reproduced
- **Location:** `app/app.js:2527`. It appends "این ترکیب با رعایت کامل استانداردهای WCAG 2.2 و کنتراست سطوح کالیبره شده است" ("this combination is calibrated in full compliance with the WCAG 2.2 standards") to every product mockup, whatever the mode or pairing.
- **Observed:**
  - It is also shown after `applyMatrixPair`, which can load a failing pair (the matrix contains 1.28:1 pairs).
  - It is shown in light theme where the heading renders at 1.02:1 (MSR-A11Y-001).
  - By contrast, the HUD template (`app/app.js:2577`) carries the correct caveat.
- **Expected:** No conformance claim should come from a single contrast ratio. WCAG conformance covers the whole page and every success criterion.
- **Evidence:** `screens/light-drawer-heading.jpg`.
- **Recommended minimal fix:** Replace the sentence with the computed ratio and "text contrast only; not a WCAG conformance claim".
- **Acceptance test:** A grep finds no "رعایت کامل" or "WCAG 2.2" in rendered copy.
- **Effort range:** XS

### MSR-UX-003: Static or fallback institution badges ("Museum of Islamic Arts", "UNESCO Heritage Documented", "HERITAGE REFERENCE")

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** source-confirmed and reproduced
- **Location:**
  - `app/template.html:1366`: `#evPhotoSpecimenBadge` "موزه هنرهای اسلامی" ("Museum of Islamic Arts") is never updated by JS (no reference in app.js). It shows for all 72 colors on the texture tab, right under a caveat that says the texture is procedural.
  - `app/template.html:913`: initial subtitle "UNESCO Heritage Documented".
  - `app/app.js:276`: fallback `'UNESCO Heritage'`.
  - `app/app.js:2097`: "HERITAGE REFERENCE" shown in photo mode even when the image failed to load (`onerror` hides it, `app/app.js:2083`).
- **Expected:** Do not name institutions without a record-level source. Brief: do not invent institutions.
- **Evidence:** `screens/wf-evidence-en-light.jpg` (badge visible), `screens/wf-photo-mode-offline.jpg`.
- **Recommended minimal fix:** Remove the static badge, or bind it to a sourced field. Remove the fallbacks. Hide "HERITAGE REFERENCE" when the image fails.
- **Acceptance test:** No museum or UNESCO text appears unless the data record carries a source.
- **Effort range:** XS

### MSR-UX-004: The AR dialog claims "photometric matching", but the Kelvin buttons only recolor an outline

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** source-confirmed and reproduced
- **Location:**
  - `app/template.html:1640`: "تطبیق فوتومتریک نور محیط با استانداردهای رندرینگ معماری ایرانی" ("photometric matching of ambient light to Iranian architectural rendering standards").
  - `app/template.html:1622-1623`: 3000K/5500K buttons.
  - `app/app.js:1019-1028`: `setARColorTemp` only changes the arch `stroke`.
  - `app/template.html:1523`: "رنگ‌های اصیل ایرانی" ("authentic Iranian colors").
  - The camera overlay is a CSS `mix-blend-color` tint (`app/template.html:1605`).
- **Evidence:** `results/02-workflows.json` (`ar-kelvin-cycle`), `screens/wf-ar-camera-fake.jpg`.
- **Recommended minimal fix:** Relabel as "illustrative tint overlay; not color-accurate". Remove "photometric" and "standards".
- **Acceptance test:** The copy has no photometric or standards claim. If Kelvin controls remain, they visibly change the wall tint.
- **Effort range:** XS

### MSR-UX-005: Digital Oklab interpolation is presented as mixing historical pigments

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** source-confirmed
- **Location:**
  - Evidence tab title "میکسر ادراکی رنگدانه‌های باستانی" ("perceptual mixer of ancient pigments"), subtitle claiming "no graying typical of sRGB" (`app/template.html:1266-1268`), and labels "رنگدانه اول/دوم" ("first/second pigment", `:1280, 1290`). None of these has a physical-mixing caveat.
  - Quick mixer title "آزمایشگاه ترکیب رنگدانه‌های تاریخی" ("laboratory for mixing historical pigments", `:1763`) and result "رنگدانه جدید ترکیبی" ("new mixed pigment", `:1817`).
  - Pass nearby: the quick-mixer body says "درون‌یابی دیجیتال" ("digital interpolation", `:1774`).
- **Expected:** A caveat next to the feature: "digital color interpolation; physical pigments mix subtractively and will differ."
- **Evidence:** `results/02-workflows.json` (`quick-mixer.caveatText:false`).
- **Recommended minimal fix:** Rename both mixers to "digital color mixer / میکسر دیجیتال رنگ" and add a one-line caveat under each result.
- **Effort range:** XS

### MSR-UX-006: Mislabelled or inconsistent technical panels

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** source-confirmed
- **Location:**
  - Scientific tab "توکن‌های سمانتیک دوگانه (اپل و گوگل)" ("dual semantic tokens, Apple and Google", `app/template.html:740-742`) and the Apple logo over a column that shows **Material 3 · تاریک** ("M3 dark", `:864-871`). No Apple HIG data exists (`app/app.js:3159-3165` renders M3 light and dark).
  - Tokens panel says "ready for direct import into Figma Token Studio" (`:1464`), while the note above says an importer script is needed (`:1456`).
  - "بر پایه پکیج رسمی" ("based on the official package", `:1497`), although README.md:46 says there is no npm registry publication.
  - The APCA version badge "SAPC-0.0.98G" (`:1022`, comment `app/app.js:389`) conflicts with "APCA-W3 0.1.9" (`:363`, `packages/core/src/math/apca.ts:1`).
  - ΔE_ok is called "contrast / complete distinctness and outstanding clarity" (`app/template.html:810`, `app/app.js:3020`). ΔE is not a readability metric.
  - Harmony text asserts "تعادلی بی‌نظیر" ("an unmatched balance") for any palette (`app/app.js:3141`).
- **Recommended minimal fix:** Relabel the columns as M3 Light and M3 Dark and drop the Apple icon. Reconcile the Figma and "official" wording and the APCA version. Qualify ΔE as "color difference, not text contrast".
- **Effort range:** XS–S

### MSR-UX-007: Most exports drop the provenance caveats, and two tabs download to the same filename

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:** `app/app.js:3365-3394`, and `app/app.js:819-826` for the evidence token formats.
- **Observed:**

  | Export | File | Caveats |
  |---|---|---|
  | JSON | `persian-palettes.json`, 379,625 B | provenance kept (72 entries) |
  | DTCG | `persian-palettes.json`, 403,693 B, same name | provenance kept (72 entries) |
  | CSS | `.css`, 72 variables | 0 |
  | SCSS | `.scss` | 0 |
  | Tailwind | `.js` | 0 |
  | Flutter | `.dart` | 0 |
  | Figma variables (evidence tab) | – | 0 |

  The CSS and SCSS exports carry no header noting that heritage attributions are unverified. Copy output equals download output in all 6 cases.
- **Expected:** A00 guidance: limitations should travel with the data.
- **Evidence:** `downloads/*`, `results/02-workflows.json` (`downloads`).
- **Recommended minimal fix:** Prepend a one-line comment header with version, "heritage attributions unverified" and the source link to CSS/SCSS/JS/Dart. Name the files `…-data.json` and `…-tokens.dtcg.json`.
- **Acceptance test:** Every downloaded file contains "unverified". The six filenames are unique.
- **Effort range:** XS

### MSR-I18N-001: The language toggle and the EN edition leave most dialogs, toasts and some cards in Persian; a stored preference can flip the EN file back to Persian

- **Severity (proposed):** Medium. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - `setLanguage` translates only `[data-i18n]` (35 keys, `app/app.js:22-101, 120-123`). The dialogs in `app/template.html:402-1841` have no `data-i18n`.
  - Toasts are hard-coded Persian (for example `app/app.js:1700-1719, 1803-1809, 2295, 2471, 2691`).
  - After a shuffle, the card button reverts to "کپی اکشن:" and the badge to `nameFa` (`app/app.js:2346, 2328`).
  - `previewPaletteTitle` uses `nameFa` (`app/app.js:2458`).
  - `build-app.mjs:50-51` builds the EN edition by string replacement.
  - `app/app.js:12-15` lets a stored `manshour_lang=fa` override it.
- **Observed:**
  - Fresh EN edition, visible Persian text nodes: main page 53, evidence 41, matrix 40, drawer 34, sci 19, npm 13, mixer 12, AR 12, gradient 11, export 3.
  - On `file://`, where all files share one origin, `code_artifact_en.html` rendered `lang=fa dir=rtl` after the fa preference had been stored.
- **Evidence:** `results/03-denied-and-en.json`, `results/01-smoke.json` (`lang-persistence.enAfterFaPref`), `screens/wf-evidence-en-light.jpg`.
- **Recommended minimal fix:** Move all dialog and toast strings into `UI_STRINGS`. Make the EN edition set a separate default key, or ignore stored `fa` unless `?lang=fa` is given.
- **Acceptance test:** The EN edition has 0 Persian nodes except deliberate `lang=fa` names. Opening the EN file always renders `lang=en`.
- **Effort range:** M

### MSR-UX-008: Minor UX defects

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** reproduced
- **Items:**
  - (a) Persian-digit search "۱۲۰" finds nothing, although "120A8F" works. `normalizeColorName` at `packages/core/src/engine.ts:8-11` does not map ۰-۹.
  - (b) The empty state has no "clear filters" action (`app/template.html:394-398`).
  - (c) Two Font Awesome Pro-only icons are missing from the bundled Free 6.5.1 and render blank: `fa-camera-viewfinder` (`app/template.html:1438, 1516`) and `fa-camera-slash` (`:1612`).
  - (d) The HUD value "WebGL Three.js GPU" (`app/template.html:371`) shows even when WebGL is unavailable (MSR-GFX-002).
- **Evidence:** `results/02-workflows.json` (`search`), `results/06-perf-graphics.json` (`noWebGL.initial.hud`).
- **Effort range:** XS each

### MSR-UX-009: The local server cannot serve the EN edition that README links beside it

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** reproduced
- **Location:** The route regex in `scripts/serve.mjs:11-12` allows only `/` and `/code_artifact.html`. README.md:36 and README.fa.md:33 link `code_artifact_en.html` next to the local-studio link.
- **Observed:** `GET /code_artifact_en.html` → 404, and `GET /release/manshour-studio-en.html` → 404. The server also sends no CSP header (for W3's information).
- **Evidence:** the route probe and response headers in `evidence/W2-browser/README.txt`.
- **Recommended minimal fix:** Add `code_artifact_en.html` to the allow-list.
- **Effort range:** XS

### MSR-GFX-001: The WebGL scene renders continuously from page load while the 3D drawer is hidden

- **Severity (proposed):** Medium. **Confidence:** high. The count is from `renderer.info`; the cost on real GPUs is not measured.
- **Status:** reproduced
- **Location:**
  - `app/app.js:1662`: `initThreeJsShowcase()` runs on DOMContentLoaded.
  - `app/app.js:3469-3481`: `animateThree` always calls `requestAnimationFrame` and renders unless `document.hidden`. It never checks whether `#previewDrawer` is hidden.
  - Related: the radar loop keeps running after switching from the radar tab to another tab (`app/app.js:2999-3005`, and `switchScientificTab` at `:2801-2824` does not cancel it). It stops on close.
- **Observed:**
  - With the drawer closed, **181 WebGL frames in 3 s** (about 60 fps).
  - Main-thread task time was 0.167 s per 3 s (about 5.6%, headless with SwiftShader).
  - Under `prefers-reduced-motion`, the mesh stops rotating but frames continue at about 10/s.
- **Expected:** Render on demand only while visible, and pause when hidden or when reduced motion is on.
- **Evidence:** `results/06-perf-graphics.json` (`idleDrawerClosed`, `radar`), `results/05-keyboard-a11y.json` (`reducedMotion`).
- **Impact:** Battery and CPU/GPU drain on mobile for a feature most sessions never open.
- **Recommended minimal fix:** Initialise lazily on first drawer open. Start the rAF loop on open and cancel it on close. Cancel the radar rAF in `switchScientificTab`.
- **Acceptance test:** `threeRenderer.info.render.frame` does not advance while the drawer is hidden.
- **Effort range:** S

### MSR-GFX-002: No fallback for missing WebGL, no context-loss handling, no canvas resize

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** reproduced
- **Location:** `app/app.js:1662` (try/catch around init with only `console.warn`), `app/app.js:3397-3482` (no `webglcontextlost` listener), `app/app.js:3577-3587` (resize only on open, no window `resize` listener).
- **Observed:**
  - With `--disable-webgl --disable-3d-apis`, three.js logs "Error creating WebGL context". The drawer shows an empty canvas with the hint "برای چرخش بکشید (Drag to Orbit)" ("drag to rotate") and working-looking controls, and no message. The HUD still says "WebGL Three.js GPU". No page errors occurred.
  - After `WEBGL_lose_context.loseContext()`, the app had no handler.
  - After resizing the viewport from 1440 to 700 px wide with the drawer open, the container is 590 px wide but the canvas stays 364×254.
  - Pass: geometries and materials are disposed when the shape changes (`app/app.js:3485`). The geometry count stayed at 4 after 10 cycles. `renderer.dispose()` runs on pagehide (`app/enhancements.js:121`).
- **Evidence:** `results/06-perf-graphics.json` (`noWebGL`, `contextLoss`, `heap.threeMemory`), `results/09-resize.json`, `screens/webgl-unavailable-drawer.jpg`.
- **Recommended minimal fix:** Show a text fallback and hide the 3D controls when there is no renderer. Add `webglcontextlost`/`restored` handlers. Add a `ResizeObserver` on the container.
- **Effort range:** S

### MSR-GFX-003: 3.14 MB per edition, with 1.66 MB of base64 fonts; lab load metrics

- **Severity (proposed):** Low. **Confidence:** high for bytes, medium for timings (headless lab).
- **Status:** reproduced (measurement)
- **Observed:**
  - Size per edition: 3,143,964 bytes. Breakdown:

    | Block | Bytes |
    |---|---|
    | CSS | 1,825,944 (of which 1,659,916 is base64 woff2) |
    | three.js r128 | 603,445 |
    | Core bundle | 422,805 |
    | App | 177,021 |

  - Fonts embedded: Vazirmatn 7 weights × 2 subsets, Cinzel, Fira Code, and the full Font Awesome sets (`scripts/build-app.mjs:33-39`). The EN edition duplicates everything.
  - Medians of 5 cold loads from `file://`, lab only:

    | Edition | FCP | DCL | load | Total long tasks (max single) |
    |---|---|---|---|---|
    | fa | 352 ms | 635 ms | 682 ms | 382 ms (315 ms) |
    | en | 336 ms | 620 ms | 672 ms | 375 ms (319 ms) |

  - JS heap after GC was 3.24 MB after load and 3.69 MB after 10 open/close cycles of evidence, drawer and scientific. DOM nodes went from 9,222 to 10,735 and listeners from 452 to 482. The growth is small. It is not established as a leak.
  - `setLanguage` takes 77–87 ms and opening the evidence dialog 76 ms.
- **Evidence:** `results/06-perf-graphics.json`.
- **Recommended minimal fix (optional):** Subset the icon fonts to the ~60 icons used, drop unused Vazirmatn weights, and load three.js lazily.
- **Effort range:** M

### MSR-PRIV-001: Photo mode contacts upload.wikimedia.org without per-image attribution; maps link opens Google

- **Severity (proposed):** Low. **Confidence:** high.
- **Status:** reproduced
- **Location:**
  - `app/app.js:2076-2085`: `<img src=palette.imageUrl crossorigin=anonymous loading=lazy>`, with 12 URLs on `upload.wikimedia.org` (`packages/core/src/tokens/heritage-data.ts:19, 538, …`).
  - `app/app.js:354`: `https://www.google.com/maps?q=lat,lng`, `target=_blank`, no `rel` attribute (`app/template.html:1226-1231`).
- **Observed:**
  - Switching to photo mode issued 9 image requests immediately (lazy-loading covers the rest), all to `upload.wikimedia.org`. That exposes the visitor's IP and user agent to Wikimedia. With `serve.mjs` the referrer is suppressed by the `Referrer-Policy: no-referrer` header; on `file://` there is none.
  - In the UI, the photo button title says "تصاویر پیوندشده از منابع بیرونی" ("images linked from external sources") and a toast repeats it (`app/app.js:1719`). This is partial disclosure.
  - No photographer, licence or Commons link is shown per image. Offline, images fail silently (opacity 0) while "HERITAGE REFERENCE" remains.
  - The docs are accurate: README.md:36 and QUICKSTART.md:84 say "optional external photographs and maps need connectivity".
- **Evidence:** `results/02-workflows.json` (`art-photo-mode`, `log.nonLocal`, `geo-maps-link`), `screens/wf-photo-mode-offline.jpg`.
- **Recommended minimal fix:** Show a credit line (author, licence, Commons link) on each photo card, and state "loads images from Wikimedia Commons" on the toggle. Add `rel="noopener noreferrer"` to the maps link.
- **Effort range:** S (credits need data work; see W1)

---

## 4. Passes with evidence

| Check | Evidence |
|---|---|
| No runtime or page errors in 8 cold-load configurations or during the full workflow run | `01-smoke.json`, `02-workflows.json` (`pageErrors: []`) |
| Zero third-party requests on cold load. Fonts, icons and scripts are embedded. `remoteRuntimeDependencies: 0` holds for default (vector) mode. | `01-smoke.json` |
| Offline: every feature except photo mode works with the network blocked | `02-workflows.json` |
| Storage: only `localStorage.manshour_theme` and `manshour_lang`. No cookies, no sessionStorage, no IndexedDB use found in source. | `02-workflows.json` (`persistence-reload`, `storageDump`) |
| Camera is requested only when the user picks "Live Camera", with `facingMode: environment`. Tracks end on close, and also on pagehide and visibility change (source `app/enhancements.js:117-127`). Denial shows a fallback message. | `02` (`ar-close-stops-tracks: ["ended"]`), `03` |
| Clipboard: write only on user click. No clipboard read. Denial shows a toast with recovery guidance. Copies match downloads. | `02` |
| Audio: no AudioContext until the user enables sound (`app/app.js:1669`) | `02` |
| Search normalises Arabic ي/ك, ZWNJ, spaces and hex case. The empty state is shown. | `02` (`search`) |
| JSON and DTCG exports parse. DTCG has `$description`, `$extensions` and 72 provenance blocks. CSS has 72 custom properties. | `02` (`downloads`), `downloads/` |
| Visible focus indicator on 80/80 tab stops (3 px `#67e8f9` outline from `app/polish.css:3`). No stop obscured at 1440×900. | `05` (`tabSummary`), `screens/kbd-stop-22.jpg` |
| The skip link is first in tab order, visible on focus, and moves focus to `#palettesGrid` | `05` (`skipLink`) |
| Dialogs have `role=dialog`, `aria-modal`, `aria-labelledby`, and background `inert`. 70 Tab presses never escaped. Shift+Tab wraps. Escape closes the top dialog only (nested AR over evidence). Focus returns to the opener. Backdrop click closes. | `05` (`dialog`) |
| Swatch strips are focusable `role=button` with name = hex, and are activated by Enter (`app/enhancements.js:79-80`) | `02` (`swatch-keyboard-enter`), `05` |
| Color is not the only carrier of information: swatches carry hex and name text, and matrix cells carry the ratio number and a text label (SC 1.4.1) | `screens/wf-matrix-fa-dark.jpg` |
| Reflow at 320×640 and 720×450: no horizontal scroll on the page or in 4 dialogs, in either language | `05` (`reflow`) |
| prefers-reduced-motion: animation durations reduced, card tilt disabled, radar loop not re-armed, three.js mesh stops | `05` (`reducedMotion`) |
| "AAA"-labelled shuffle modes (dark/light) give ≥ 7:1 heading/background for all 12 palettes (computed pair; see MSR-A11Y-001 for the rendered caveat) | `07-mode-labels.json` |
| Caveats present next to features: spectral curve "illustrative model, not spectrometer data" (`app/template.html:967`); texture "procedural, not a scan or photogrammetry" (`:1356`); geo "attributions copied from source data; check conflicts" (`:1178`); APCA "not a compliance certificate" (`:1731`, `:1067`); APCA size table is Barlow-based and Persian needs separate evaluation (`app/enhancements.js:113`); fa provenance line (`app/enhancements.js:11`); 11 colors flagged `conflicting` in the dialog | `02` (`evidence-open-cta.notes`, `evidence-conflict-color: {unverified:61, conflicting:11}`) |
| Three.js geometry and material disposal on shape switch; `renderer.dispose()` on pagehide | `06` (`threeMemory.geometries: 4`) |

## 5. Not tested, blocked, or evidence gaps

- **Screen readers (NVDA, JAWS, VoiceOver, TalkBack, Orca): not-tested.** No assistive technology is available here. The `results/05-aria-snapshot-*.PARTIAL.yml` files are Playwright ARIA snapshots and are **partial evidence only**. They were not used to simulate speech output.
- **Real browsers and devices: not-tested.** Headed Chromium, Firefox, Safari/WebKit, and real iOS/Android devices. Mobile was Chromium device emulation only.
- **Real GPU WebGL: not-tested.** Only SwiftShader was available. Frame counts are valid; the power and GPU cost are not measured.
- **Field Core Web Vitals: not-tested.** There is no deployment and no RUM. The numbers in section 3 are lab-only.
- **Actual third-party loading: not-tested by design.** Wikimedia images and Google Maps navigation were intercepted and aborted, so image rendering and attribution pages were not seen.
- **Browser zoom via Ctrl+ and text-only zoom: not-tested.** Zoom was emulated by CSS viewport, as stated.
- **Windows High Contrast / `forced-colors`, SC 1.4.12 text spacing, SC 1.4.13 hover content, touch drag-orbit, native color picker, printing, audible sound output: not-tested.**
- **Wikimedia image licences and attribution requirements: evidence-gap.** Deferred to W1/legal. Here I only observed that no credit is displayed.

## 6. Brand-string inventory (for the ManschouRey / مَنشورِی! migration)

| String | Where (file:line) | Visible to user? |
|---|---|---|
| `گنجینه رنگ‌های پارسی \| Persian Palette Vault` | `app/template.html:6` (`<title>`; the EN edition keeps it) | yes (tab title) |
| `گنجینه دیزاین سیستم پارسی` | `app/template.html:210`, `app/app.js:24` | yes (H1, fa) |
| `Persian Palette Design System` | `app/app.js:63` | yes (H1, en) |
| `PERSIAN PALETTE • HCT · APCA · DTCG 2025.10` | `app/template.html:213`, `app/app.js:25, 64` | yes (tagline) |
| `v3.0.0 Studio` | `app/template.html:211` | yes (badge) |
| `V2.0 DTCG` | `app/template.html:384` | yes (CTA badge, conflicts with v3.0.0) |
| Logo: gradient tile with `fa-atom` icon | `app/template.html:205-206` | yes |
| Favicon: navy circle, gold ring, turquoise triangle (a prism-like mark) | `app/template.html:7` | yes |
| `رفتن به پالت‌ها` (skip link) | `app/template.html:182` | on focus |
| `@persian-palette/core` (+ `v3.0.0`, "official package") | `app/template.html:1497, 1673, 1702` | yes |
| `npm install ./release/persian-palette-core-3.0.0.tgz` | `app/template.html:1685`, `app/app.js:3617` | yes / clipboard |
| `W3C DESIGN TOKENS FORMAT MODULE • SEMVER 2.0.0` | `app/template.html:1674` | yes |
| `منشور هشت‌وجهی` ("octahedral prism", a geometry option). It collides with the new name مَنشورِی! | `app/template.html:560` | yes (3D select) |
| `Neu-Persian Design Tokens - <palette>` | `app/app.js:2702` | clipboard output |
| Download filename `persian-palettes.<ext>` | `app/app.js:3392` | download |
| `Persian Palette Vault design tokens` (`$description`) | `packages/core/src/exporters/w3c.ts:30` | export content |
| `org.persian-palette` (DTCG `$extensions` namespace) | `packages/core/src/exporters/w3c.ts:17, 31`, `packages/core/src/types/token.ts:24` | export content |
| Figma collection `Persian Palette Vault` | `packages/core/src/exporters/figma.ts:18` | export content |
| localStorage keys `manshour_lang`, `manshour_theme` | `app/app.js:12, 17, 105, 144` | storage (migration must keep or port them) |
| Global `PersianCore` (IIFE name) | `scripts/build-app.mjs:15` | developer |
| `release/manshour-studio-en.html` | `scripts/build-app.mjs:55` | artifact name |
| Build log "Built standalone studio (FA/bilingual)…" | `scripts/build-app.mjs:69-70` | developer |
| `Persian Palette Studio: http://127.0.0.1:…` | `scripts/serve.mjs:26` | console |
| Comments "V3.1.0 ENTERPRISE STANDARD", "V2.0 ENTERPRISE DESIGN SYSTEM", "V2.0 Scientific…" | `app/app.js:6, 177`, `app/template.html:89` | no (source only; "Enterprise" wording, version drift) |
| Trademark-adjacent UI labels: "Apple HIG & VisionOS", "Apple VisionOS Mode", "Google Material You", Apple and Google icons | `app/template.html:115, 133, 283, 854, 868`, `app/app.js:1780` | yes (tooltips and icons) |

## 7. Recommendations (subjective; not findings)

1. **Information hierarchy.** The header has 13 equal-weight controls; on mobile they wrap into 4 rows of mostly icon-only buttons. Group them into Explore (search/filter), Inspect (evidence, science, matrix), Build (studio, mixer) and Export, with one overflow menu. That also solves MSR-A11Y-002.
2. **Onboarding.** The hero leads with jargon: "HCT · APCA · DTCG", "Multi-Evidence Provenance", "M3 HUD". A one-sentence plain-language purpose line and a "what the badges mean" legend would help designers who are not color scientists.
3. **Tone.** Terms such as "Spatial VisionOS mode", "holographic", "laboratory" and "dossier", plus the V2.0/v3.0.0/V3.1.0 labels, read as marketing. A sober, craft-oriented voice would fit the new name مَنشورِی! / ManschouRey and make the honest caveats more credible.
4. **Sound effects** default to off (good). Consider removing them, since they add an AudioContext and state without clear value.
5. **Swatch strips** reveal the hex only on hover (`group-hover`). Add `:focus-within` so keyboard users see the same thing.
6. **Palette cards** show two copies of the palette name (Latin small caps plus native) and two descriptions. Consider one primary name with the other language as a subtitle marked with `lang`.
7. **Light theme** is built from about 70 `!important` overrides on dark-first Tailwind classes (`app/polish.css:21-158`), which caused MSR-A11Y-001/003. Moving to CSS custom-property tokens for both themes would prevent the same class of bug from recurring.
