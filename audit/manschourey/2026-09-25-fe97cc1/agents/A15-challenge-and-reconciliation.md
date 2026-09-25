# A15: skeptical challenge and reconciliation

- **Reviewer:** A15, the independent skeptic. **Baseline:** `fe97cc1ba1400f5c118d7c290bc1000574ac6dd0`. **Date:** 2026-09-25 (UTC).
- **Method:** My job was to falsify, not to agree. Where another reviewer's evidence and my own check could differ, I re-derived the result from the repository source at fe97cc1, from my own command runs, or from sources I fetched again myself. I treated agreement among reviewers as no evidence at all.
- **Execution:** I used a private copy of the built clone at `$SCRATCH/A15/work`. It was made with `cp -r $SCRATCH/work` and is at fe97cc1. Playwright and axe dependencies were copied into `$SCRATCH/A15/pw`. My scripts are in `$SCRATCH/A15/` and are not persisted in the repository: `counts.mjs`, `named.mjs`, `oracle.mjs`, `hook.mjs`/`reg.mjs`, `pw/a15-probe.mjs`, `pw/a15-dossier.mjs` and `pw/a15-light.mjs`. The steps needed to reproduce each result are given inline below.
- **Repository state:** The repository HEAD is now `c803ea7`, because the audit commits were added after the baseline. I checked this with `git diff --name-only fe97cc1 HEAD`. The command shows that only files under `audit/` changed, and there are 0 changes under `app/`, `packages/` or `scripts/`. Every source statement below therefore holds at fe97cc1.
- **Inputs read:** A00, W1 (all three files), `CULTURAL_CLAIMS.csv`, `SOURCES.md`, W3 (both files) and W2.
  - I read `W2-browser-a11y-ux.md` at **14:00 UTC**. The file mtime was 13:59:30 and the md5 was `63cca7ca…`. At 14:14 UTC the md5 and mtime were unchanged.
  - A00 confirmed that the W2 file is final.
  - Lead files that appeared later (`TECHNICAL_VALIDATION.md`, `DATA_QUALITY.md`, `ACCESSIBILITY_AND_UX.md`) were not among my inputs, and I did not review them. I noticed them only while searching for IDs.

---

## 1. Critical/High findings: recheck

No reviewer proposed a Critical finding. Under task 4 I propose one: R-1, a merged root cause.

| # | Finding (proposer ID) | Proposer | Verdict | My severity | Confidence | Reproduction I ran and result |
|---|---|---|---|---|---|---|
| 1 | English provenance banner inversion: "Primary source documented" vs «نیازمند بررسی منبع» (W1 MSR-I18N-001; W2 MSR-UX-001; A00 A06 addendum) | A00, W1, W2 | **confirmed** | **High** | high | **Source:** `app/enhancements.js:8` (EN) vs `:11` (FA). The string appears once each in `code_artifact.html` and `code_artifact_en.html`. **Render:** in Playwright (Chromium 141, headless, fresh context, `file://`) I opened the EN edition and ran `openEvidenceDashboard('behzad-miniature',0)`. `#evidenceProvenance` then contained, visibly: "…Historical & Mineral: Primary source documented. Geographic data divergence: latitude 32.4279 / 34.3283 … Displayed coordinates follow initial site registry." The FA edition renders «…اطلاعات تاریخی و ماده: نیازمند بررسی منبع…». **Data:** `heritageStatus==='unverified'` in 72/72 records and `verification==='not-verified'` in 72/72 (my `counts.mjs`). This one string contradicts the data for every record in the English dossier, which is where the caveat is supposed to appear. |
| 2 | CAS 7732-18-5 (water) labelled "Authentic Historical Specimen" (W1 MSR-DATA-001) | W1 | **confirmed-with-correction** | High on its own; merged into **R-1 (Critical)** | high | **Counts (all exact):** 60 records (all 6 achaemenid-majesty records plus all 54 in 9 template palettes; 0 in isfahan and 0 in behzad). 120 occurrences, in `evidence.mineralogical.casNumber` and `evidence.chemical.casNumber`. 120 in `heritage-data.ts` (first at l.558), 120 in `w3c-tokens.json`, 120 in `style-dictionary.json`, 120 in `code_artifact.html`, and 120 in a fresh `exportW3CTokens(ALL_PALETTES_LIST)`. **Lookup:** I installed `chemicals==1.5.2` myself; `search_chemical('7732-18-5')` returns water, H2O, CID 962. **Correction:** the CAS number is **not displayed in the studio dossier**. `app.js` has 0 references to `casNumber`, and my probe shows `innerText.includes('7732-18-5')` is false on the evidence dialog. It reaches users through the DTCG/JSON downloads, the evidence tab's W3C token view (`app.js:822`) and the npm `tokens/` files. The finding stands, but "labelled in the UI" should read "labelled in data and exports". |
| 3 | Template "evidence" shown as authentic documentation (W1 MSR-DATA-002) | W1 | **confirmed**; **upgrade** as part of R-1 | **Critical** (R-1, scoped to verdict 2) | high on facts; medium-high on the severity choice | **Counts (exact):** 54 records with `chemicalFormula` "Natural Organic / Mineral Complex (Matrix #HEX)"; in **54/54** the embedded hex equals the record's own HEX. 54 with "Persian Historical Pigment (…)". 60 each with the placeholder manuscript «رسالات کهن رنگرزی سنتی و صنعتی ایران زمین», crystal system «کریستالین بومی فلات ایران», generic «ثبت میراث فرهنگی ملموس و ناملموس یونسکو», `historicalContextFa` identical to `meaningFa`, `artMovement` identical to the palette's `nameFa`, and "Calculated Complex". 60 have `peak == dominant` wavelength. **Rendered (FA and EN, `persian-gulf-pearls` colour 2):** formula "Natural Organic / Mineral Complex (Matrix #00B4D8)" under the heading «اطلاعات ماده در منبع اولیه»; «رنگدانه اصیل ایرانی (آبی فیروزه‌ای قشم)» under the label «نام کانی‌شناسی اصیل (فارسی):» (`template.html:1113`); the placeholder manuscript under «رساله کهن خطی و سند تاریخی مرجع» (`:1139`); crystal badge «کریستالین بومی فلات ایران»; UNESCO badge set to the generic label. The EN edition shows the same Persian labels, because they have no `data-i18n`. Also, `palettes.ts:57` copies the placeholder into `provenance.historicalReference.citation`, so DTCG exports ship it as a "citation". The static badge «موزه هنرهای اسلامی» (`template.html:1366`, 0 JS references) sits on every colour's texture tab. |
| 4 | Synthetic grid coordinates chosen over specific sites (W1 MSR-DATA-003) | W1 | **confirmed** | High on its own; merged into **R-1** | high | **Grid:** 60/60 records match `lat = 32.4279 + 0.5·i`, `lng = 53.688 + 0.3·i`, `alt 1400` exactly, where i is the colour index, across 10 palettes, including behzad. **Rendered:** "Qeshm Turquoise Shore" (a Persian Gulf island) shows 32.9279° N 53.9880° E, site "Iranian Plateau Heritage Sites", Maps link `…?q=32.9279,53.988`. **Distances** (UWHS `.rda` re-downloaded, sha256 `71cf06d8…` = S003, haversine with R = 6371.0088): Hormuz point to WHC 114 = **472.78 km**; behzad-c2 legacy point to WHC 1346 = 0.18 km; behzad-c6 legacy point to WHC 603 = 3.80 km. All match W1. `coordinateConflicts` = 11 is confirmed from `getDataQualityReport()`. |
| 5 | Modern named-colour HEX values presented as heritage "standards" (W1 MSR-CULT-001) | W1 | **confirmed (counts)** / **downgrade (severity)** | **Medium**; wording part merged into R-3 | high | **Recount:** I fetched S002 again myself (sha256 `0f965aa0…`, identical). CSS names come from culori's `colorsNamed`. Result: **24/72** (5 CSS + 23 list; union 24). My first pass returned 23 because S002 stores some values as 3-digit hex (`#c33` = Persian Red). Anyone repeating the count must parse the r,g,b columns, not the hex column. **Reasoning:** choosing a named web colour is not an error. The README says HEX is a design choice, and plain names such as "Saffron" or "Pistachio" will always match some list. The defect is the wording. **16 meanings** (my regex: استاندارد، ثبت‌شده، کد رسمی، اصلاح شده، کاتالوگ، جهانی) assert "world standard", "registered", "official code" or "corrected for accuracy"; W1 listed 14. That wording belongs with MSR-I18N-005. It is not a separate High. |
| 6 | Package says MIT but ships or loads non-MIT code (W3 MSR-LIC-001) | W3 | **confirmed-with-correction** | **High** | medium (facts high; legal consequence needs counsel) | `packages/core/package.json`: `"license":"MIT"`, and `dependencies` include `apca-w3 0.1.9` ("Limited W3 License"), which depends on `colorparsley ^0.1.8` ("AGPL v3"). `dist/index.cjs:6355` bundles `node_modules/apca-w3/src/apca-w3.js`. **ESM trace:** my own resolve hook printed `LOADED node_modules/apca-w3/src/apca-w3.js` and `LOADED node_modules/colorparsley/src/colorparsley.js` when calculating Lc 106.04. The `apca-w3/LICENSE.md:87` terms say "Commercial use is prohibited without a written…". The tarball ships `licenses/{apca-w3.md,colorparsley.md,material-color-utilities.txt}`, and `THIRD_PARTY_NOTICES.md` discloses them honestly. **Correction:** Material Color Utilities (Apache-2.0) should come out of the headline. The Apache text ships with the package, and bundling Apache code in an MIT package with its notice is ordinary practice. The blocker is the **apca-w3 hard dependency**, whose non-commercial and web-only terms travel to every consumer however the SPDX field is written, plus the open AGPL question. That still meets "material distribution-rights blocker", so it stays High. |
| 7 | Light theme: card text at 1.78:1 next to a "16.2:1 (AAA)" badge (W2 MSR-A11Y-001) | W2 | **confirmed-with-correction** | Medium alone; **High** when merged with MSR-A11Y-003 (R-5) | high | **Render** (`colorScheme:'light'`, `html.light`): `#card-body-*` inline colour is overridden by `polish.css:55-57` to `rgb(51,65,85)` on 11 of 12 cards. Measured 1.42–1.93:1, while the badges read 11.0–17.0:1 (AAA). Isfahan: 1.78:1 vs "16.2:1 (AAA)", which matches W2 exactly. **Correction:** `toranj-illumination` behaves differently. Its body renders dark (readable), while its inline heading colour `#FDFBF4` lands on a light surface. I did not measure that one reliably, because a background image is involved. **Light-theme chrome** (my own composite-background measurement): header "دریافت کدها" 1.32, "NPM" 1.28, mixer 1.46, M3 1.55; NPM dialog "کپی دستور" 1.19; "download token packages" 1.60; close button 1.41. These agree with W2 MSR-A11Y-003. On its own, A11Y-001 affects sample paragraphs, which are not an essential workflow, so Medium. Together, the export and copy controls are near-invisible in light theme, and light theme is selected automatically for OS light preference (`app.js:19`). That is "essential workflows inaccessible" for that group, so the merged root cause is High. |
| 8 | 400% zoom: sticky header taller than the viewport (W2 MSR-A11Y-002) | W2 | **confirmed** | **High** | medium-high (emulated by CSS viewport, as W2 said) | `header` is `position: sticky`, `top 0`. At 320×256: header **277 px** (fa) and **233 px** (en), after scrolling. With fa, 0 px of the 256 px viewport is left for content, and with en 23 px. At 320×640 it is 277 px (43%); at 640×512 it is 232 px. Anyone who needs 400% zoom cannot reach the content, which is an essential workflow blocked (SC 1.4.10). |
| 9 | English UI upgrades hedged Persian wording (W2 MSR-UX-001) | W2 | **duplicate of #1**, merge | High (via #1) | high | The table rows at `app.js:77/78/79` and `enhancements.js:8` match W1 MSR-I18N-001 plus I18N-002 verbatim. The hero wording alone is Medium, as W1 said; the banner is what makes the merged finding High. |

### R-1: proposed merged Critical (for verdict 2, the cultural-reference release claim)

- **Title:** Template-generated pseudo-evidence (water CAS, "Matrix #HEX" formulas, placeholder manuscript and citation, non-crystal "crystal system", generic UNESCO label, grid coordinates, static museum badge) is presented as documentation in the evidence dossier and exports.
- **Merges:** MSR-DATA-001, MSR-DATA-002 and MSR-DATA-003; the placeholder parts of MSR-CULT-004 and MSR-CULT-006; W2 MSR-UX-003; and the template part of A02's dominant-wavelength failure (60 records with `peak == dominant`).

**Why this reaches Critical.** The rubric's threshold is "a pervasive foundational failure that makes the product's central scholarly claim untenable". I apply it with four explicit tests, and all four pass:

1. **Pervasive.** 60 of 72 records (83%) carry generated values in every evidence dimension: material, formula, identifier, manuscript, extraction, crystal system, designation and location. The other 12 records have no located, verified citation. The ledger has 0 `supported` historical-use claims, and I checked W1's `al-Tafhim` and `Pliny book 33` notes: none of those references is located.
2. **Central.** The UI presents this content as the product's evidence layer: «شناسنامهٔ رنگ، محاسبات و منابع», "Multi-Evidence Provenance", "Color Science Dossier & Provenance". It is not a side feature.
3. **Asserted, not hedged, at the point of use.** The labels say «اصیل» and «رساله کهن خطی و سند تاریخی مرجع». The header subtitle falls back to "UNESCO Heritage", and the museum badge is static. The EN banner says "Primary source documented".
4. **Propagates.** It is exported to DTCG and Style Dictionary (120 water CAS entries; placeholder as `historicalReference.citation`) and to downloaded JSON.

**The mitigation is real, but it does not defuse the problem.**

- `heritageStatus:'unverified'` is set on 72/72 records and exported in DTCG.
- The Persian banner says «نیازمند بررسی منبع».
- `DESIGN_SYSTEM.md` and `README.fa.md:21` state that this is not an authentication database.

"Unverified" tells readers the value may be true and has not been checked. These values are not unchecked citations. They are known-false or non-referential. A water CAS number cannot be "verified" into a pigment identifier. A HEX-embedding "formula" and an arithmetic grid cannot be verified into anything. So the caveat names the wrong kind of uncertainty. It is also absent from the EN banner, which inverts it, and from the Tailwind, Swift, Kotlin and Tokens Studio exports and the studio's CSS, SCSS, Tailwind and Dart downloads.

**Scope of the Critical.** It is Critical **for the source-citable cultural-reference claim (verdict 2)**. For the design/colour toolkit (verdict 1), the same facts do not change any colour computation, and I would weigh them as High. If the lead policy is one severity per finding regardless of verdict, **High is the floor**. Critical is justified whenever the release claims reference or citation status.

---

## 2. Count reconciliation

| Claimed count (who) | My recount | How | Verdict |
|---|---|---|---|
| 60 records with water CAS; 120 occurrences (W1) | 60; 120 (src, w3c, SD, HTML, fresh export) | `counts.mjs`, `grep -o` | exact |
| 54 "Matrix #HEX" template records (W1) | 54; 54/54 embed their own HEX | `counts.mjs` | exact |
| 60 placeholder manuscript / crystal / UNESCO / extraction (W1) | 60 / 60 / 60 (extraction was not separately regex-counted) | `counts.mjs` | exact |
| 60 grid coordinates (W1) | 60 (10 palettes) | formula match, tolerance 1e-9 | exact |
| 24/72 named-colour matches (W1, brief) | 24 (5 CSS, 23 list) | `named.mjs`, own fetch of S002 | exact, with the 3-digit-hex caveat |
| 14 "standard/corrected" meanings (W1 CULT-001) | 16 with a broader regex (adds nomadic-rugs-c3 «استاندارد», khorasan-gems-c4 «استاندارد», bazaar-spices-c4, yazd-c1…) | regex over `meaningFa` | **disputed: 14 is a lower bound**; the exact number depends on the word list |
| 11 coordinate conflicts (A00/W1) | 11 | `getDataQualityReport()` | exact (computed) |
| 35 non-pigment subjects (W1) | 35 contradicted template `mineralName` rows | ledger | exact, but see §3 for inconsistent application |
| 287 contradicted rows (W1) | 287 = crystalSystem 63 + CAS 63 + coordinates 61 + formula 54 + mineralName 38 + meaningFa 5 + description 1 + molarMass 1 + extraction 1 | ledger | arithmetic exact. **Composition disputed:** 117 (63 crystalSystem + 54 formula) are malformed or placeholder values ("type-error"/"placeholder"), not claims refuted by evidence. Report them as "170 refuted + 117 invalid". 3 more rows should be contradicted and 3 should not (§3), so the net count is unchanged |
| 1,271 ledger rows (W1) | 1,271; 0 duplicate `claim_id` | `csv.DictReader` | exact |
| "138 lines" of float drift (A00: across both files; W3: "138 lines each") | **69 value lines per file** (138 in total); the git diffstat "138" counts both + and − lines | `npm run check` in my copy, then `git diff --numstat` → `69 69` per file | **W3's "each" is wrong**; A00's wording is fine only if read as the total over two files |
| 18 + 8 tests pass (A00) | 18/18, 8/8 | `npm run check` rc 0 | exact |
| 139 ZIP entries; old README strings (A00) | 139; all 3 strings present | Python `zipfile` | exact |
| 91 tgz files (A00) | 91 | `tar tzf` | exact |
| `pack:studio` fails on a clean checkout (A00) | rc 1, "Artifact hash differs from build manifest" | `python3 scripts/package-release.py` | exact |
| Figma caveat 72/72 (W1) | 72 | `grep -o "not independently verified"` | exact |
| "Figma variables (evidence tab): 0 caveats" (W2 MSR-UX-007) | **6/6 per palette**. W2's own `02-workflows.json` (`ev-token-figma`) contains "Heritage annotation not independently verified" | `exportFigmaVariables([p])` | **W2 row is wrong.** Probably a grep for "unverified". The CSS, SCSS, Tailwind and Dart rows stand |
| 3 impossible dominant wavelengths (A02) | #000000 = 610 nm with chroma 0. #FE28A2 (hue angle −38.4°) and #8B1E3F (−14.8°) both fall in the purple sector between −113.2° and −8.6° from D65, so they have no dominant wavelength | colorjs xy chromaticity | confirmed |

---

## 3. Ledger challenge (`CULTURAL_CLAIMS.csv`)

**Sample.** 30 rows drawn at random with Python `random.seed(15)`, stratified: supported 6, contradicted 10, partially-supported 4, unverified 6, illustrative 2, designer-choice 2. I added 12 targeted rows chosen to test the ledger's rules for consistency. For each row I checked the cited source ID and locator against primary data (`RAW_PALETTES`), my own re-fetch of S002/S003/S005, or my own arithmetic.

**Did any `supported` row rely on an unopened source?** No. All 30 `supported` rows cite S003, S004, S005 or S005;S006:

- I re-fetched S003 and S005 myself and matched the sha256 or the values.
- S004 is the RRUFF subset in the evidence folder.
- S006 is arithmetic, which I re-did for turquoise: 813.43.

Every `none-opened` or `none` row is `unverified` (626) or `illustrative` (115). There is no leakage.

| claim_id | record / field | Ledger status | My check | Agree? |
|---|---|---|---|---|
| W1-C0071 | isfahan-tiles-c2 molarMass 813.5 | supported (arithmetic) | CuAl6(PO4)4(OH)8·4H2O = 813.43 | yes (arithmetic only, as the ledger says) |
| W1-C0003 | isfahan-tiles unescoRef | supported, S003 115 | 115 = Meidan Emam, 1979 (own `.rda`) | yes |
| W1-C0173 | achaemenid-c2 WHC 114 | supported | 114 = Persepolis, 1979 | yes |
| W1-C0252 | behzad-c1 CAS 1344-48-5 | supported, S005 | HgS (S005 file; check digit valid) | yes |
| W1-C0006 | achaemenid unescoRef 1979 | supported | 114, 1979 | yes |
| W1-C0059 | isfahan-c2 turquoise formula | supported, S004 | exact mineral formula. The record's own Fa name also says «لعاب مس قلیایی», so the claim is only formula-to-mineral | yes, with note |
| W1-C0705 | persian-gulf-pearls-c3 coordinates | contradicted, S007 | 33.4279, 54.288000000000004 = grid i=2 | yes |
| W1-C0167 | achaemenid-c2 CAS | contradicted, S005 | water, CID 962 | yes |
| W1-C0311 | behzad-c4 coordinates | contradicted | grid i=3 | yes |
| W1-C0529 | minakari-c5 "Matrix #FDFBF7" | contradicted / placeholder | the value is not a formula | status yes; **label semantics**: this is "invalid", not "refuted" (see §2) |
| W1-C0936 | khorasan-c5 "Silver Pearl Luster" as pigment | contradicted | pearl lustre is not a pigment | yes |
| W1-C0462 | minakari-c1 CAS | contradicted | water | yes |
| W1-C0885 | khorasan-c2 "Persian Ruby" | contradicted | a gemstone as "pigment" | yes |
| W1-C1106 | yazd-c3 "Red Agate" | contradicted | stone as "pigment" | yes |
| W1-C0909 | khorasan-c3 coordinates | contradicted | grid i=2 | yes |
| W1-C0783 | gardens-of-shiraz-c2 "Ghasrodasht Ruby Pomegranate" | contradicted ("not a pigment") | Pomegranate rind is a traditional dye source (background knowledge, not source-checked). The ledger treats the equivalent **Walnut Husk** (C0443) and **Turmeric** as `unverified` | **no → unverified** (rule applied inconsistently) |
| W1-C0277 | behzad-c2 legacy geo | partially-supported | 0.18 km from WHC 1346 (own calculation) | yes |
| W1-C0145 | achaemenid-c1 "Persian Red" | partially-supported, S002 | `#c33` = Persian Red in S002 | yes |
| W1-C0206 | achaemenid-c4 coordinates | partially-supported | 0.15 km from WHC 114 | yes |
| W1-C0139 | isfahan-c6 legacy geo | partially-supported | ≈0.60 km from WHC 115 | yes |
| W1-C0396, C0430 | nomadic-rugs-c3/c5 extraction | unverified placeholder | template sentence on 60 records | yes (both) |
| W1-C0689, C0604 | persian-gulf-c2 / toranj-c3 UNESCO | unverified placeholder | generic label on 60 records | yes (both) |
| W1-C0590, C1032 | toranj-c2 / hyrcanian-c4 artMovement | unverified, duplicate of palette name | 60/60 copies | yes (both) |
| W1-C0724 | persian-gulf-c4 peak 605 nm | illustrative | peak == dominant on 60 records | yes |
| W1-C0424 | nomadic-c5 nameFa | illustrative | evocative label | yes |
| W1-C1034, C0949 | hyrcanian-c5 / khorasan-c6 hex | designer-choice | not in S001/S002 (`named.mjs`) | yes (both) |
| *targeted* W1-C0664 | persian-gulf-c1 "Medium Persian Blue" as pigment | contradicted | This is a colour name, not a subject. The same template with "Persian Blue" (minakari-c1, C0460) is `unverified` | **no → unverified** (inconsistent) |
| *targeted* W1-C0766 | gardens-c1 "Persian Rose" as pigment | contradicted | "Persian Orange" (nomadic-c3) is `unverified` | **no → unverified** (inconsistent) |
| *targeted* W1-C0656 | toranj-c6 peak/dominant 610 nm (#000000) | illustrative | Black has no chromaticity. A02 marks it fail, and RELEASE_GATES gate 2 item 4 cites exactly this as "contradicted". It is exported under the key `physics.dominantWavelengthNm` | **no → contradicted** |
| *targeted* W1-C0775 | gardens-c1 dominant 652 nm (#FE28A2) | illustrative | purple sector, so no dominant wavelength | **no → contradicted** |
| *targeted* (gardens-c2) | dominant 631 nm (#8B1E3F) | illustrative (same template) | purple sector | **no → contradicted** (third row; not individually sampled) |
| *targeted* W1-C0155 | achaemenid-c1 coordinates | contradicted, S003 | 472.78 km (own calculation) | yes |
| *targeted* W1-C0132 | isfahan-c6 CAS 1307-96-6 | contradicted, S005 | CoO, CID 14786 (own lookup) | yes |
| *targeted* W1-C0061 | isfahan-c2 manuscript al-Tafhim | unverified (source blocked) | not opened; background note | yes |
| *targeted* W1-C0170 | achaemenid-c2 crystalSystem "Archaeometallurgical" | contradicted / type-error | not a crystal system | status yes; label semantics as for C0529 |
| *targeted* W1-C0183 | achaemenid-c3 indigotin formula | supported | the formula is correct for indigo; the same record's meaning says "royal shells", which the ledger contradicts elsewhere | yes, with note |
| *targeted* W1-C0036 | bazaar-spices unescoRef Tabriz 2010 | supported | 1346, 2010. The palette context names the Tabriz bazaar | yes |

**Agreement rate**

| Sample | Agree | Rate |
|---|---|---|
| Random | 29/30 | **96.7%** |
| Targeted | 7/12 | — |
| All 42 rows | 36/42 | 85.7% |

The targeted rows were chosen to find breaks in the rules, so the random rate is the unbiased estimate.

**Disputed rows:**
- W1-C0783, C0664 and C0766 should be `unverified`.
- W1-C0656, C0775 and the gardens-c2 peak-wavelength row should be `contradicted`.
- **Class-level semantic dispute (no status change):** 117 `contradicted` rows are malformed or placeholder values. Add a flag or status such as `invalid-value` so that "contradicted" means "refuted".

---

## 4. Claimed passes: attempts to break them

| # | Claimed pass (who) | My attempt | Result |
|---|---|---|---|
| 1 | No DOM sink reachable from untrusted input (W3) | I listed every input source in `app.js` and `enhancements.js` (`URLSearchParams`, `localStorage`, `.value`, `dataset`; no `postMessage`, `FileReader`, `hashchange`, `paste` or `drop`). I traced the search query: it is used only in `.includes()` filters (`app.js:1999-2022`) and never interpolated. The quick-mixer values come from `<select>` options built from bundled data. `localStorage` is whitelisted. | **holds.** Latent risk as W3 says (innerHTML plus inline handlers). |
| 2 | Local server resisted traversal (W3) | I started `serve.mjs` in my copy and sent 13 paths with `curl --path-as-is`: `/docs/..`, `..%2f..`, `%2e%2e/%2e%2e`, `..%5c`, `%00`, `//etc/passwd`, `/docs/.%2e`, and others. `/docs/..` and `/docs/.%2e` return 200, but that is the WHATWG URL parser normalizing them to `/`, which serves `code_artifact.html`, not a traversal. Everything else returned 404. Foreign `Host` → 200 (W3's Low item). | **holds.** Also confirmed: `/code_artifact_en.html` → 404 (REL-006/UX-009). |
| 3 | Style Dictionary 5.5.5: 0 warnings (W3) | I re-ran W3's `sd-build.mjs` on the shipped `w3c-tokens.json` in my own folder. | **holds**: rc 0, 0 warnings, 72 tokens. No CAS, mineral, UNESCO or Matrix strings leak into the outputs. The provenance caveat does not survive either (SD drops `$extensions`), which belongs under R-4. |
| 4 | Oklab/HCT/APCA/WCAG agree with oracles (A00 A02) | I wrote my own check (`oracle.mjs`) with a different PRNG, seed 20260925, and 2,000 new random pairs, instead of re-running A02's script. | **holds**: Oklab vs culori max 3.7e-8; APCA vs colorjs max diff **0 Lc**; HCT hue ≤0.025° (chroma > 5), chroma ≤0.011, tone ≤0.0042; black/white +106.04 / −107.88. **Caveat:** the colorjs APCA is a port of the same author's algorithm. The agreement shows the implementation is wired correctly. It does not validate APCA independently. |
| 5 | Persian orthography: no Arabic yeh/kaf (W1) | I scanned every tracked `.ts/.js/.mjs/.html/.md/.json/.css` outside `node_modules`, `archive` and `release` for U+064A, U+0643, U+0649, U+06C0, Arabic-Indic digits, ZWNJ next to a space, and doubled ZWNJ. | **holds.** U+064A (8) and U+0643 (5) appear only in the normaliser's own `replace()` (`engine.ts:9` and its dist/HTML copies), the README sentence describing it, and tests. The single ة is inside an Arabic title. |
| 6 | Rebuilt dist and HTML identical (A00, W3) | `npm run check` in my copy, then `git diff`. | **holds** (`DIST_IDENTICAL`, `HTML_IDENTICAL`). Count correction: 69 drifted lines per token file, not 138 each. |
| 7 | npm audit clean (W3) | `npm audit` (root) and `npm audit --omit=dev` (core), re-run 2026-09-25. | **holds** (0/0/0/0/0). **Scope caveat:** it cannot see code inlined into the HTML (three r128, Tailwind output, Font Awesome). W3 already says so. |
| 8 | Kotlin compiles (W3) | I compiled `tokens/ColorSchemes.kt` from **my** copy (byte-identical to the repository file) with W3's downloaded kotlinc 2.1.21 jars and the Compose desktop 1.7.3 jars. | **holds**: rc 0, `ColorSchemesKt.class` emitted; 24 schemes × 24 roles (576 `Color(`). Android/AGP remains untested. |
| 9 | Zero third-party requests on cold load (W2) | Static scan of the built HTML for auto-loading remote `script src`, `link href`, `@import`, `url(http…)`, `img src`, `iframe`, `sendBeacon` and `WebSocket`. | **holds** (all 0). The only `fetch`/`XMLHttpRequest` occurrences are inside three.js loaders, which the app does not call on load. |
| 10 | Figma export carries the caveat 72/72 (W1) | grep, plus `exportFigmaVariables([p])` | **holds.** This refutes W2's UX-007 row "Figma variables (evidence tab): 0 caveats". |
| 11 | WHC IDs and site distances (W1) | Re-downloaded `uwhs.rda` (same sha256) and parsed it with `rdata`. | **holds**: 114, 115, 603, 1106, 1346, 1372 and 1397 match name and year; the distances are reproduced. |
| 12 | Committed release files as described (A00) | ZIP: 139 entries plus old README strings; tgz: 91 files; `pack:studio` rc 1 on a clean tree. | **holds**. |

No claimed pass broke. Three passes needed their scope stated (4, 7, 8). One W2 count was wrong (Figma).

---

## 5. Merge and duplicate recommendations

| Merged ID (proposal) | Merge these | Severity |
|---|---|---|
| **R-1** Template pseudo-evidence presented as documentation | W1 DATA-001, DATA-002, DATA-003; CULT-004 (placeholder part); CULT-006 (generic-label part); W2 UX-003; A02 template `peak == dominant` | **Critical** (verdict 2; High floor) |
| **R-2** English UI inverts or upgrades the Persian caveats | W1 I18N-001 + I18N-002; W2 UX-001; A00 A06 addendum | High |
| **R-3** Unsupported authenticity, standard and compliance wording | W1 CULT-001 (wording part) + I18N-005; W2 UX-002 (the same `app.js:2527` sentence appears in I18N-005), UX-004, UX-005; A00 A02 "spectral/physical/pigment" wording (`spectral.ts:2-3`, `physics` key, `mixHistoricalPigments`); A00 note on "WCAG AAA/AA" badge labels | Medium (the UX-002 absolute-compliance sentence could be argued High for verdict 3; I keep it Medium because the ratio shown next to it is correct) |
| **R-4** Provenance caveat lost in exports | W1 DATA-006 (package Tailwind/Swift/Kotlin/Tokens Studio); W2 UX-007 (studio CSS/SCSS/Tailwind/Dart downloads, minus the wrong Figma row); SD drops `$extensions` (pass #3) | Medium |
| **R-5** Light-theme override regression | W2 A11Y-001 + A11Y-003 (shared root cause: the `!important` overrides in `polish.css`) | High |
| **R-6** Persian text and missing `lang` in the English experience | W1 I18N-003; W2 A11Y-009; W2 "MSR-I18N-001" (toggle leftovers, stored `fa` overriding the EN file) | Medium |
| **R-7** `normalizeColorName` gaps | W1 I18N-004; W2 UX-008(a); A00 A13 (alef maksura) | Medium |
| **R-8** Stale generated files, manifest and packaging | A00 baseline pass (drift, `pack:studio`); W3 REL-002 | Medium |
| **R-9** v3.0.0 assets carry retracted claims | A00 (ZIP README); W3 REL-001 | Medium |
| **R-10** Image attribution and privacy | W3 LIC-003 (Wikimedia part); W2 PRIV-001; W1 DATA-007 (image licence part) | Medium/Low |
| **R-11** Mislabelled technical panels | W3 minor note (Apple icon on M3); W2 UX-006; A00 A01 #7 and W3 LIC-002 (SAPC-0.0.98G label) | Low (the APCA naming term under the licence stays with LIC-002) |
| **R-12** Hard-coded data-quality counts | A00 A13; W1 DATA-005 | Medium |
| **R-13** Contradictory status docs and local paths | A00 A06 (walkthrough, review file); W1 I18N-007 | Low |
| **R-14** Maintainer identity and metadata | A00 A06 attribution; W3 REL-004; W1 DATA-007 (CFF, licence) | Low (a gate-4 requirement, though) |
| **R-15** `serve.mjs` does not serve the EN edition | W3 REL-006; W2 UX-009 | Low |

**Over-dramatized items.**

- **CULT-001 as High.** Downgrade it, as argued in §1 #5.
- **W2's "core promise is visibly false" (A11Y-001 impact line).** The computed ratio is correct for the palette pair; the preview renders the wrong colour. That is a rendering bug, not an incorrect core result.

**Under-dramatized item.** W1 recorded A02's impossible dominant wavelengths as `illustrative`. They are exported under a key named `physics` with no per-key caveat.

---

## 6. Disagreement log

| # | Topic | Positions | Resolution and evidence |
|---|---|---|---|
| D1 | **ID collision: MSR-I18N-001** | W1 uses it for the EN banner inversion. W2 uses it for the toggle leftovers and stored-preference flip. | These are two different findings. Merge the W1 one into R-2 and the W2 one into R-6. The lead must renumber. |
| D2 | **RELEASE_GATES IDs do not match the worker reports** | Gate 2.1 cites "MSR-I18N-002" for "Primary source documented" (in W1 that is I18N-001; I18N-002 is the hero). Gate 4.1 cites "MSR-REL-001" for the manifest (W3 REL-002). Gate 4.3 cites "MSR-REL-002" for ZIP content (W3 REL-001). Gates cite MSR-API-004 and MSR-SCI-002, which appear in no agent report. They appear only in the lead's later files, which were not among my inputs. | Fix the cross-references after final numbering. The substance of each gate is unaffected. |
| D3 | Severity of the English overclaim | W2 puts the whole UX-001 table at High. W1 splits it: banner High, hero Medium. | The merged R-2 is High because of the banner. The hero wording alone would be Medium. |
| D4 | Severity of the template evidence | W1: High for each of DATA-001, 002 and 003. Nobody proposed Critical. | R-1 is Critical for verdict 2; see §1 for the threshold tests. The lead may keep it at High only if verdict 2 is not a release claim at all. |
| D5 | Named colours | W1: High. | Medium; the count of 24 is confirmed; the wording is folded into R-3. |
| D6 | LIC-001 scope | W3 includes MCU Apache-2.0 in the mismatch. | MCU removed from the headline (its licence text ships). High stays because of apca-w3. |
| D7 | Float drift count | A00 "138 lines"; W3 "138 lines each"; brief "about 138 float values". | 69 per file, 138 in total (git numstat). |
| D8 | Standard/corrected meanings | W1: 14. | Lower bound. My regex finds 16. |
| D9 | Figma export caveat | W1: present 72/72. W2 UX-007: evidence-tab Figma has 0 caveats. | W1 is right. W2's own evidence file contains the caveat. |
| D10 | Impossible dominant wavelengths | A00 A02: fail (data). The W1 ledger: `illustrative`. RELEASE_GATES uses them as the example of "contradicted". | Contradicted: I verified the purple-sector geometry and that #000000 has chroma 0. |
| D11 | "Not a pigment" rule | The ledger applies it to Pomegranate, "Persian Rose" and "Medium Persian Blue", but not to Walnut Husk, Turmeric, "Persian Blue" or "Persian Orange". | Apply one rule. Net ledger count unchanged (−3 +3). |
| D12 | Where the water CAS appears | W1's title says it is "labelled … and exported"; the brief says "presented in the studio UI". | It is in data and exports only. The dossier does not render `casNumber`. |
| D13 | Light-theme contrast severity | W2: A11Y-001 High, A11Y-003 Medium. | Same root cause: merged R-5 is High. A11Y-001 alone would be Medium. |

---

## 7. Readiness verdicts (as I would issue them)

**(1) Digital design/colour toolkit: `not-ready` (narrowly; the closest of the four to ready).**

- **What works.** The colour math is correct. I reproduced it against oracles with a new sample and seed (Oklab 3.7e-8; APCA exact; HCT within 0.03°). Build, tests, pack, package consumer, Style Dictionary and Kotlin all pass on fe97cc1, and the rebuilt dist and HTML are byte-identical.
- **Why it still fails.** The lead's own gate lists three *required* items that fail today:
  - The shipped API text describes behaviour that does not exist. `spectral.ts:2-3` says it models "physical reflectance curves of historical minerals"; the DTCG `physics` key carries impossible dominant wavelengths; there are `…HistoricalPigments` names.
  - The UI silently replaces invalid input (`app.js:1857-1864` returns `#120A8F`).
  - Exporters emit broken or injectable output for unusual palette IDs and names (W3 MSR-INT-001).
- **Path to ready.** Each fix is Low/Medium and under a day. After them the verdict becomes `ready-with-explicit-limitations`. The limitations to state: use with the built-in or validated palettes; spectra and mixing are illustrative; Swift, Figma runtime and Tokens Studio import are untested; CJS TypeScript type imports fail (W3 REL-003).
- **What does not count here.** R-1 does not change any colour value, so it does not block this verdict. Its provenance fields ship in the same tokens, though, so R-4 needs a caveat header.

**(2) Source-citable cultural reference: `not-ready`.**

- R-1 is Critical: 60/72 records carry generated evidence in every field, and the remaining 12 have no located, verified citation.
- 0 manuscript passages were opened by anyone, and 0 spectra were measured.
- R-2: the English UI tells users the opposite of the data model.
- The ledger has 30 `supported` rows. None supports a historical-use claim; all are identifier, arithmetic or WHC-ID checks.
- Nothing short of removing the placeholders and adding located sources would change this. Relabelling alone could make the project an honest "inspired-by" design dataset, which is a different claim. The project's own README.fa and DESIGN_SYSTEM already make that claim, and it should be the only one released.

**(3) Accessible bilingual app within the tested scope: `not-ready`.**

- **What works:** keyboard access, focus trap, skip link, reflow at 320×640, and dark-theme contrast are largely sound (W2's passes are credible, and my probes agree where I overlapped).
- **What fails:**
  - At 400% zoom, content is unreachable under the sticky header (0 px in fa). This is W2 MSR-A11Y-002, confirmed High in §1 #8.
  - The light theme, selected automatically for OS light preference, renders essential export and copy controls at 1.19–1.60:1 and card text at 1.42–1.93:1 next to "AAA" badges (R-5).
  - The English edition inverts the provenance caveat (R-2), leaves 53+ Persian nodes without `lang`, and keeps a Persian `<title>` (R-6).
- Screen-reader testing was not performed by anyone, so even after fixes the claim must say "no assistive-technology testing".

**(4) Redistribution/release: `not-ready`.**

- **Licence.** `@persian-palette/core` declares MIT but hard-depends on and bundles apca-w3, whose licence prohibits commercial use without an agreement and limits use to web content. Its transitive colorparsley (AGPL-3.0) is loaded at runtime by ESM consumers (my resolve-hook trace). This needs counsel or a replacement (LIC-001, High).
- **Release assets.** The committed build manifest describes CRLF bytes rather than the committed files. `pack:studio` fails on a clean checkout. The published v3.0.0 ZIP still says "Enterprise-Grade", "72 authentic colors" and "72 authenticated pigment formulas", and the assets were built outside CI from a pre-correction tag.
- **Identity.** The author and copyright holder is a non-existent "Working Group".
- **What works.** CI hardening itself is good.

---

## 8. What I could not check

- **Legal questions:** apca-w3 terms, AGPL reach, OFL, MIT/Apache notice sufficiency, CC BY-SA hotlinking. These are counsel questions, not audit findings.
- **Primary historical sources:** manuscripts, museum records, ICH and World Crafts Council designations, building-level coordinates, and whether pomegranate, pistachio or paprika are documented Persian dye sources. My dispute on C0783 rests on background knowledge and is labelled as such. WHC inscriptions after 2014 are also unchecked.
- **Screen readers, non-Chromium browsers, real devices, real GPUs, headed Ctrl+ zoom.** My zoom check used the same viewport emulation as W2, so it is not independent of that method.
- **W2 measurements I did not re-run:** the axe totals (875 instances, 295 colour-contrast), the target-size and nested-interactive counts, the label-in-name results, the performance and heap numbers, and the WebGL fallback and resize results. I also did not re-measure the toranj card (background image).
- **W3 checks I did not re-run:** the exporter injection and reserved-key probes (MSR-INT-001, proposed as Low); the Tailwind v4 build; the Figma typecheck; the `.cts` type-import failure; and the GitHub release, tag and CI-run facts. I did not re-query GitHub.
- **Other items:** CAS numbers 1302-85-8, 1319-32-0, 9000-01-5 and 9004-34-6, which S005 does not list (their check digits are valid); Swift compilation; Android/AGP; native-speaker style review.
- **The lead's later synthesis files** (`TECHNICAL_VALIDATION.md`, `DATA_QUALITY.md`, `ACCESSIBILITY_AND_UX.md`, `AUDIT_REPORT.fa.md`) were outside my inputs.
