# W1 draft: data quality and provenance (role A04)

Baseline fe97cc1. Reviewer: W1 (sequential AI review). Evidence is in `evidence/W1-cultural/`. Scripts ran against the built isolated clone `$SCRATCH/work` (Node v22.22.2). The raw output is `analyze-data.out.json`. Nothing under production paths was modified.

## 1. Recomputed counts

| Metric | Recomputed (raw `RAW_PALETTES` + normalised `ALL_PALETTES_LIST`) | Shipped `tokens/data-quality.json` / `getDataQualityReport()` |
|---|---|---|
| Palettes | 12 (12 unique IDs) | 12 |
| Colours | 72 (72 unique IDs, 6 per palette) | 72 |
| Unique HEX | **71**: `#FDFBF7` is used by `achaemenid-majesty-c5` (Apadana Alabaster) and `minakari-craft-c5` (Porcelain Enamel White) | not reported |
| Near-duplicate whites | `#FDFBF4` (toranj-illumination-c5) differs from `#FDFBF7` by 3 in the blue channel; there are also 7 other off-whites (#F4F1DE, #FAF3E0, #F2ECE4, #F9F6F0, #F4F6F8, #F8F9FA, #F8E7D1) | not reported |
| Duplicate `nameEn` | 0 | — |
| Colours with any conflict | 11 | 11 (`conflicts[]`) |
| Conflicts by field | `geo.latitude` 10, `geo.longitude` 11, `geo.elevationMeters` 8, `chemical.formula` **0** | same (computed) |
| `coordinateConflicts` | 11 | 11 (computed; matches) |
| `unverifiedHeritageColors` | 72, but only because it is **hard-coded** as `colors.length` (`packages/core/src/tokens/palettes.ts:72`) | 72 |
| `measuredSpectra` | 0, **hard-coded** literal (`palettes.ts:72`) | 0 |

The `chemical.formula` comparison (`palettes.ts`, `compare('chemical.formula', …)`) never fires because `mineralogical.chemicalFormula` and `chemical.formula` are identical in all 72 raw records. The conflict detector can only catch disagreements that were already in the legacy duplicate fields. It does not validate formulas against CAS numbers or names (see §3).

The two hard-coded counts are true today, because every record is `heritageStatus: 'unverified'` and every spectrum is illustrative. They would stay true even after a record gains a verified source or a measured spectrum. The report therefore cannot show progress. **Proposed fix:** derive both counts from `evidence.provenance.heritageStatus` and `spectralStatus`, and make those per-record fields writable from data rather than fixed to constants (`palettes.ts:49–51` sets them to constant literals of a single-value type).

## 2. The 11 coordinate conflicts (selected `geoSpatial.coordinates` vs legacy `geo.*`)

Distances are haversine with R = 6371.0088 km (S006).

| # | Colour | Selected site | Selected lat, lng (alt) | Alternative (legacy `geo`) | Alt lat, lng (alt) | Legacy site ID text | Δ km |
|---|---|---|---|---|---|---|---|
| 1 | isfahan-tiles-c2 | Neyshabur Turquoise Mines | 36.4633, 58.8025 (1650 m) | معدن فیروزه نیشابور، خراسان رضوی | 36.2133, 58.7958 (1650 m) | WCC Craft City | 27.81 |
| 2 | isfahan-tiles-c3 | Isfahan Royal Workshops | 32.6575, 51.6778 (1570 m) | بازار مسگرها، میدان نقش جهان اصفهان | 32.6575, 51.6775 (1574 m) | UNESCO Ref: 115 | 0.03 |
| 3 | isfahan-tiles-c4 | Naqsh-e Jahan Mihrabs | 32.6514, 51.6776 (1574 m) | کاخ عالی‌قاپو و تالار موسیقی، اصفهان | 32.6571, 51.6769 (1574 m) | UNESCO Ref: 115 | 0.64 |
| 4 | isfahan-tiles-c5 | Sheikh Lotfollah Sanctuary Dome | 32.6575, 51.6778 (1574 m) | محراب اولجایتو، مسجد جامع عتیق اصفهان | 32.6686, 51.6853 (1578 m) | UNESCO Ref: 1397 (Masjed-e Jāmé) | 1.42 |
| 5 | isfahan-tiles-c6 | Muqarnas Vaults of Isfahan | 32.6514, 51.6776 (1574 m) | سردر ورودی و ایوان شمالی مسجد شاه اصفهان | 32.6521, 51.6773 (1574 m) | UNESCO Ref: 115 | 0.08 |
| 6 | behzad-miniature-c1 | Iranian Plateau Heritage Sites | 32.4279, 53.688 (1400 m) | کارگاه‌های نگارگری هرات و کتابخانه بایسنقری | 34.3283, 62.1926 (920 m) | Intangible Cultural Heritage | 817.18 |
| 7 | behzad-miniature-c2 | Iranian Plateau Heritage Sites | 32.9279, 53.988 (1400 m) | معادن مس آذربایجان و کارگاه‌های تبریز دوم | 38.08, 46.2919 (1360 m) | Tabriz Historic Bazaar Complex | 901.37 |
| 8 | behzad-miniature-c3 | Iranian Plateau Heritage Sites | 33.4279, 54.288000000000004 (1400 m) | کتابخانه سلطنتی هرات و دارالسلطنه هرات | 34.329, 62.193 (920 m) | Herat Citadel Matrix | 736.41 |
| 9 | behzad-miniature-c4 | Iranian Plateau Heritage Sites | 33.9279, 54.588 (1400 m) | کارگاه‌های صباغی و نگارگری اصفهان صفوی | 32.657, 51.677 (1574 m) | UNESCO Ref: 115 | 305.23 |
| 10 | behzad-miniature-c5 | Iranian Plateau Heritage Sites | 34.4279, 54.888000000000005 (1400 m) | کتابخانه آستان قدس رضوی، مشهد | 36.2878, 59.6155 (985 m) | Imam Reza Holy Shrine | 475.91 |
| 11 | behzad-miniature-c6 | Iranian Plateau Heritage Sites | 34.9279, 55.188 (1400 m) | کارگاه‌های کاغذسازی سمرقند و هرات | 39.6542, 66.9597 (710 m) | Samarkand - Crossroad of Cultures | 1165.14 |

Observations:

- **The selection rule prefers the synthetic value.** In conflicts 6–11 the normaliser selects the generated "Iranian Plateau" point (see §3) and demotes the specific legacy point to `alternative`. For two of those, the legacy point matches a WHC reference point: behzad-miniature-c2 is 0.18 km from WHC 1346 Tabriz Bazaar, and behzad-miniature-c6 is 3.8 km from WHC 603 Samarkand (S003). The studio's map link (`app/app.js:354`) and `evidence.geo` are built from the selected, synthetic point.
- Floating-point artefacts such as `54.288000000000004` and `54.888000000000005` in the raw data show the values were produced by arithmetic (32.4279 + 0.5·i, 53.688 + 0.3·i), not typed from a source.
- Conflicts 2, 5 and 3 are sub-kilometre and all fall inside the Meidan Emam area. They are record-keeping noise, not substantive disagreements. Conflict 4 is substantive: the two records name different buildings in different WHC properties (115 vs 1397).

### Coordinates checked against WHC reference points (S003, 2014 mirror)

| Colours | Cited WHC | Distance from WHC reference point |
|---|---|---|
| isfahan-tiles-c1, c4, c6 (32.6514, 51.6776) | 115 Meidan Emam | 0.67 km |
| isfahan-tiles-c3, c5 (32.6575, 51.6778) | 115 | 0.01 km |
| achaemenid-majesty-c2, c4, c5, c6 (29.9351, 52.8916) | 114 Persepolis | 0.15 km |
| achaemenid-majesty-c3 (30.2003, 53.1772) | 1106 Pasargadae | 1.19 km |
| **achaemenid-majesty-c1 (27.0628, 56.4589)** | **114 Persepolis** | **472.78 km**: these are Hormuz Island coordinates under a Persepolis reference |

## 3. Schema and content problems

1. **Placeholder CAS number is water.** 60 of 72 records (all 6 Achaemenid colours and all 54 template records) carry `casNumber: "7732-18-5 (Authentic Historical Specimen)"` in both `mineralogical` and `chemical` (120 occurrences, first at `heritage-data.ts:558`). S005 identifies 7732-18-5 as **water, H₂O (PubChem CID 962)**. The string is exported verbatim: 120 occurrences in `packages/core/tokens/w3c-tokens.json` and `style-dictionary.json`, and 120 in `code_artifact.html`.
2. **Other CAS errors.** `1260-15-5` (behzad-miniature-c4, `heritage-data.ts:1329`) fails the CAS check digit (computed 7); S005 lists carminic acid as 1260-17-9. `1307-96-6` (isfahan-tiles-c6) is CoO, while the formula is Co₃O₄ (1308-06-1). `142-71-2` (isfahan-tiles-c3) is neutral copper(II) acetate, while the formula is basic copper acetate. Four CAS numbers check out in S005: gold, gypsum, HgS and basic copper carbonate. Four others have a valid check digit but I could not look them up: 1302-85-8, 1319-32-0, 9000-01-5 and 9004-34-6.
3. **Template records.** 54 colours in 9 palettes (nomadic-rugs, minakari, toranj, persian-gulf, gardens-of-shiraz, khorasan-gems, hyrcanian-forests, yazd, bazaar) have `mineralName = "Persian Historical Pigment (<nameEn>)"` and `chemicalFormula = "Natural Organic / Mineral Complex (Matrix #<HEX>)"`. The "formula" embeds the HEX value. 60 records (these 54 plus the 6 Behzad colours) share the same `traditionalExtraction` sentence, the manuscript placeholder `"رسالات کهن رنگرزی سنتی و صنعتی ایران زمین"`, the `crystalSystem` value `"کریستالین بومی فلات ایران"` (not a crystal system), the generic `unescoHeritageRef`, the synthetic coordinates, and `peakWavelengthNm === dominantWavelengthNm`. In those same 60 records, `historicalContextFa` is a copy of `meaningFa` and `artMovement` is a copy of the palette's `nameFa`. `molarMass` is `"Calculated Complex"` in 60 records (the 54 template records plus the 6 Achaemenid ones).
4. **Synthetic geography.** Six points (lat 32.4279 + 0.5·i, lng 53.688 + 0.3·i, alt 1400 m) are reused by 10 palettes, 60 colours in total. Persian Gulf, Caspian-forest, Khorasan and Shiraz colours are all placed at the same central-Iran points.
5. **English-named fields carrying Persian text.** Palette `description`, `culturalContext` and `unescoRef` are byte-identical to their `…Fa` twins in 12/12 palettes. Colour `role` and `meaning` are identical to `roleFa` and `meaningFa` in 72/72 records. `artMovement` (no Fa suffix) is Persian in 72/72. The studio then renders `palette.description` as the English subtitle and search text (`app/app.js:2055`, `:2118`), and `palette.unescoRef` in the English dossier header (`app/app.js:276`). The type `PersianPaletteDefinition` (`packages/core/src/types/palette.ts`) declares these as optional English fields, so consumers will read them as English.
6. **`roleEn` carries no information.** It is `"Primary Accent"` for 72/72 colours, while `roleFa` has distinct roles.
7. **Stale legacy `colorScience` and `physics` in the raw data.** The raw `colorScience.oklab` agrees with the recomputed values (max ΔOklab 0.0001). However, the raw `apca.contrastOnBlack` is `0.0` in 26 records; for 7 of these the recomputed value is non-zero (−7.8 to −15.0 Lc, e.g. minakari-craft-c1 −12.8, khorasan-gems-c2 −15.0). Raw `recommendedWeight` strings differ from the recomputed ones in 72/72 records. Raw `physics.cieLab` differs from the recomputed CIELAB by more than 5 ΔE in 5 records (max 14.64, isfahan-tiles-c1). Raw `chromaOklab` differs by more than 0.02 in 9 records (e.g. 0.28 vs 0.1944). The normaliser overwrites all of these in published output, which is good (see §5). But `heritage-data.ts` still ships the stale numbers in the package `dist/tokens/heritage-data.js` and is importable.
8. **`molarMass`** is removed by the normaliser (`palettes.ts:31`, `unverifiedMolarMass`), which is good. In the raw data it is wrong for verdigris: stated 370.2, recomputed 376.76 for the stated formula. It is meaningless for mixtures (lazurite + CoO stated 985.4; lazurite alone is 996.61). See `molar-mass-check.out.tsv`.
9. **Internal contradictions within records** (full list in `CULTURAL_CLAIMS.csv`):
   - achaemenid-majesty-c4: "Basalt" vs CaCO₃ vs "Jade".
   - achaemenid-majesty-c5: "Quartz Sandstone" vs "Alabaster" vs "marble".
   - achaemenid-majesty-c6: a bronze alloy for "black basalt".
   - achaemenid-majesty-c3: "royal shells" vs indigo.
   - isfahan-tiles-c6: manganese extraction vs cobalt formula.
   - hyrcanian-forests: Jurassic vs "50 million years" vs "ice age".
   - bazaar-spices: Isfahan in the description vs Tehran in the context.
   - toranj-illumination-c5: "deerskin" in the name vs "paper" in the meaning.
10. **Transliteration is inconsistent in English fields:** `Tacara` (nameEn, `heritage-data.ts:964`) vs `Tachara` (originSite, `:897`). See the language report.

## 4. Exporters: is provenance preserved?

| Output (`packages/core/tokens/`) | Provenance / caveat carried? | Detail |
|---|---|---|
| `w3c-tokens.json` (DTCG) | **Yes, fully.** `$extensions["org.persian-palette"].evidence` holds the whole normalised evidence object, including `provenance.heritageStatus: "unverified"`, `spectralStatus: "illustrative"`, `conflicts`, `historicalReference.verification: "not-verified"` | It also carries the placeholder CAS "7732-18-5 (Authentic Historical Specimen)" 120 times. `$description` is Persian name + role only |
| `style-dictionary.json` | Same as DTCG (identical size and content counts) | same |
| `figma-variables.json` | **Partly:** every variable description ends "— Heritage annotation not independently verified" (72/72) | No per-field status and no conflicts |
| `tokens-studio.json` | **No:** `description` is the Persian name only (e.g. "فیروزه‌ای اصیل (Persian Turquoise)") | Authenticity adjective travels, caveat does not |
| `tailwind-theme.css` | **No:** comments are palette/colour names only | e.g. `/* سرخ پارسی اصیل (Persian Red) */` |
| `Colors.swift` | **No** caveat | names only |
| `ColorSchemes.kt` | **No** caveat. It holds Material 3 schemes derived from seeds, not the heritage HEX values themselves | — |

Recommendation: add a one-line header caveat to the Tailwind, Swift, Kotlin and Tokens Studio outputs ("HEX values are design choices; heritage annotations unverified; see data-quality.json") and drop "اصیل" from the names that exporters copy.

## 5. What works (passes with evidence)

- The normaliser keeps both values when legacy fields disagree and marks them `resolution: 'unresolved'`. It does not silently pick one and discard the other.
- Normalised `colorScience`, `physics.cieLab` and `chromaOklab` are recomputed from the HEX value (`palettes.ts:38–45`). Stale legacy APCA and CIELAB numbers do not reach the published tokens.
- Every colour carries `provenance.heritageStatus: 'unverified'`, `spectralStatus: 'illustrative'`, `colorMetricsStatus: 'computed'` and `historicalReference.verification: 'not-verified'`. The DTCG export preserves all of these.
- `docs/DESIGN_SYSTEM.md` and `README.fa.md:17–23` describe the data honestly: "not a pigment-authentication database", "zero measured spectra", "HEX انتخاب طراحی است".
- IDs are unique and follow a stable, readable scheme (`<palette-id>-c<n>`).

## 6. Citability

| Item | Status |
|---|---|
| Stable record IDs | Present, but position-based (`-c1…c6`): reordering a palette changes meanings. DTCG token keys derive from `nameEn` slugs, so renaming a colour breaks consumers |
| Dataset version | `3.0.0` in the DTCG `$extensions` and package.json. `data-quality.json` has no version, date or commit field |
| CITATION.cff | Absent (none in repo root) |
| Data licence | Only the repo-wide MIT `LICENSE`, with no separate statement for the cultural annotations or the (externally hot-linked) Wikimedia images. `THIRD_PARTY_NOTICES.md:14` says image licensing "must be checked on their source pages before republication" |
| DOI / archival release | None found |
| Per-claim source fields | Only free-text `historicalManuscriptRef`, with no edition, page, URL or access date. The `references[]` list covers methods only (Oklab, APCA, MCU) |

## 7. Not performed / blocked

- Direct UNESCO, PubChem, CAS, mindat and Wikipedia lookups were blocked by egress policy (see `evidence/W1-cultural/source-notes.md`). I used mirrors instead (S003–S005).
- I did not check the precise building-level coordinates (e.g. Shah Mosque vs the square's centroid) against an authoritative GIS.
- I did not compare the historical-data files under `archive/` with the current data. I did not re-run the ULP drift reported by A00.
