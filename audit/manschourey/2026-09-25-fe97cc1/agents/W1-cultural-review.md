# W1 report: cultural history, data provenance, Persian language (A03 / A04 / A05)

Baseline fe97cc1 · reviewer: W1 (sequential AI review) · date: 2026-09-25. This is an audit. No production file was modified.

Companion outputs:
- `CULTURAL_CLAIMS.csv`: 1,271 field-level claims covering 12 palettes and 72 colours.
- `SOURCES.md`: source registry S001–S007 and the research backlog.
- `agents/W1-data-quality-draft.md` (A04 detail) and `agents/W1-persian-language.md` (A05 detail and I18N findings MSR-I18N-001…007).
- Evidence and scripts in `evidence/W1-cultural/`:
  - `build-claims.mjs`, `analyze-data.mjs`, `normalization-probe.mjs`, `persian-orthography-scan.mjs`, `cas_probe.py`, `molar-mass-check.py`
  - their `.out.*` files, `ref/*.json`, `source-notes.md`, `dastgah-12tet-check.out.txt`

## Summary of the claim ledger

| evidence_status | rows |
|---|---|
| unverified | 639 |
| contradicted | 287 |
| illustrative | 202 |
| designer-choice | 72 |
| partially-supported | 41 |
| supported | 30 |
| **total** | **1,271** |

"Contradicted" rests on one of three bases. In every case the ledger says which one:
1. An opened reference, S003–S005. Examples: CAS 7732-18-5 is water; a coordinate lies 473 km from the WHC property the same record cites.
2. The record's own internal contradiction (S007). Examples: basalt vs CaCO₃; a "formula" that embeds the HEX value; synthetic coordinates.
3. The project's own statement that HEX is a design choice (`README.fa.md:21`), applied to meanings that claim calibrated accuracy.

"Supported" never means that a material is present in a Persian artefact. It means that an ID, formula or number is correct for the named thing. No manuscript or museum record could be opened, so no historical-use claim is supported.

## How the dataset is layered

1. **Isfahan tiles (6)** and **Behzad miniature (6)** have material-specific entries: real mineral names, and mostly correct formulas and CAS numbers for the named substances.
2. **Achaemenid (6)** has material names, but every CAS number is 7732-18-5 (water) and several records contradict themselves.
3. **The other 9 palettes (54 colours)** are generated from a template. Material = "Persian Historical Pigment (<English name>)". Formula = "Natural Organic / Mineral Complex (Matrix #<HEX>)". CAS = water. Manuscript = «رسالات کهن رنگرزی سنتی و صنعتی ایران زمین». Coordinates = one of six arithmetic points in central Iran. Context = copy of meaning. Movement = copy of palette name.

Layers 2 and 3 are shown in the studio dossier with the same visual authority as layer 1. The dossier labels them «نام کانی‌شناسی اصیل» ("authentic mineralogical name", `template.html:1113`) and «رساله کهن خطی و سند تاریخی مرجع» ("reference historical manuscript", `template.html:1139`).

## Cultural representation assessment

**What is done well**
- The project states plainly that this is not an authentication database:
  - `docs/DESIGN_SYSTEM.md:3`: "curated sRGB design colors inspired by Persian cultural references. It is not a pigment-authentication database".
  - `README.fa.md:3`: «الهام‌گرفته از فرهنگ ایرانی».
  - `README.fa.md:21`: HEX is a design choice, spectra are illustrative, and 11 coordinate conflicts are listed.
- Every normalised colour carries `heritageStatus: 'unverified'` and `historicalReference.verification: 'not-verified'`, and the DTCG export keeps these. This is a real safeguard, and it is better than typical "heritage palette" projects.
- The Persian UI is the careful side. The hero says «الهام‌گرفته از میراث ایران». The dossier banner says «نیازمند بررسی منبع». Notes say the spectrum is «مدل نمایشی … دادهٔ اندازه‌گیری‌شدهٔ طیف‌سنج نیست» (`template.html:967`) and the texture is procedural (`:1356`).
- The Isfahan and Persepolis/Pasargadae site anchors are correct. WHC IDs 114, 115 and 1106 match their names in S003. The coordinates fall within 0.01–1.19 km of the WHC reference points.
- "Persian Gulf" is the name used by the UN and by standard historical and cartographic practice. Using it is not a defect, and I propose no finding on it.

**Where the text flattens or mixes periods, regions and groups** (Medium, see MSR-CULT-003)
- *Behzad miniature.* Kamāl al-Dīn Behzād is a Timurid Herat master whose late career was in Safavid Tabriz. The palette mixes in:
  - «شاه‌توت شاه‌عباسی» (Shah Abbas I reigned 1588–1629, long after Behzad)
  - "مکتب اصفهان صفوی و نگاره‌های رضا عباسی" (behzad-miniature-c4)
  - Mashhad's Astan Quds library, Samarkand paper, and the Shahnameh of Shah Tahmasp (c2)
  
  Herat (in modern Afghanistan) is folded into «فلات ایران» coordinates in central Iran (selected point 817 km from the record's own Herat point).
- *Safavid tilework of Isfahan.* isfahan-tiles-c5 uses the Ilkhanid Öljeitü stucco mihrab (Masjed-e Jame, WHC 1397) as context for a Safavid palette whose selected site is Sheikh Lotfollah (WHC 115).
- *Qashqai & Bakhtiari.* Two distinct groups are presented as one tradition. The Qashqai are a Turkic-speaking confederation in Fars; the Bakhtiari are a Lur group of the central Zagros. The palette adds an "Afshari" colour and a Safavid court epithet ("شاه‌عباسی"), and cites the Fars carpet-weaving ICH wording, which would not cover Bakhtiari weaving. The data gives no group-specific motif, dye or region.
- *Yazd.* Qaenat saffron (South Khorasan), Lut dunes and "Rig-e Yalan" (Lut) and Rig-e Jenn (Dasht-e Kavir) are all assigned to "Yazd".
- *Persian Gulf.* The description includes the Makran coast, which faces the Gulf of Oman.
- *Khorasan gems.* The palette includes «زمرد نادری» (emeralds associated with Nader Shah's treasury, not Khorasan mines) and «کهربای توس» (amber). Neither is a documented Khorasan product in the record.
- *Achaemenid.* A 13th-century CE cosmography (Qazvini) and Pliny are cited as the basis for 5th-century BCE colours. DSf (a Susa text) is cited for the Persepolis Apadana. Hormuz island is merged with Persepolis.
- *Illumination (toranj/tazhib).* The palette image is a Shahnameh painting (`heritage-data.ts:2614` imageUrl), not an illuminated page. The unescoRef text presents a listing as "Iranian" without naming it; ICH listings of this kind are often multinational (not checked, since the ICH site was blocked).

**Documented material vs modern digital match.** The text does not separate the two.
- 24 of 72 HEX values exactly equal a modern named-colour entry:
  - 5 CSS named colours (S001): turquoise, goldenrod, forestgreen, chocolate, black.
  - 23 entries in the Wikipedia-derived list (S002), including all seven "Persian X" names: Persian Red #CC3333, Persian Blue #1C39BB, Persian Green #00A693, Persian Plum #701C1C, Persian Rose #FE28A2, Persian Orange #D99058, Medium Persian Blue #0067A5.
- The data presents several of these as «استاندارد جهانی», «ثبت‌شده جهانی», «کد رسمی فیروزه» or «رنگ جهانی ثبت‌شده … در موزه‌های بین‌المللی».
- Three meanings claim the HEX was "corrected" for accuracy against tiles, Hormuz ochre or adobe. The project's own README says HEX is a design choice, and 0 spectra were measured.

## Proposed findings

```
Proposed ID: MSR-DATA-001
Title: CAS number of water (7732-18-5) labelled "Authentic Historical Specimen" on 60 of 72 colours and exported
Severity (proposed): High   Confidence: high (S005 lookup; 120 verbatim occurrences)
Status: source-confirmed
Location: packages/core/src/tokens/heritage-data.ts:558 (first of 120; mineralogical.casNumber and chemical.casNumber of all achaemenid-majesty-* and the 54 template colours); packages/core/tokens/w3c-tokens.json and style-dictionary.json (120 each); code_artifact.html (120)
Observed / verbatim: "casNumber": "7732-18-5 (Authentic Historical Specimen)" for hematite, electrum, indigo, bronze, snow, sea water, pistachio …
Expected / rule or spec: a CAS RN identifies one substance; S005: 7732-18-5 = water, H2O, PubChem CID 962
Reproduction or source trail: python evidence/W1-cultural/cas_probe.py; grep -c "7732-18-5" packages/core/tokens/w3c-tokens.json
Evidence path: evidence/W1-cultural/ref/cas-lookup.tsv; CULTURAL_CLAIMS.csv rows field=mineralogical.casNumber
Impact: a scientific-looking identifier asserts authenticity while identifying water; downstream consumers of DTCG tokens inherit it; undermines trust in the correct CAS entries
Recommended minimal fix: set casNumber to undefined for these 60 records (the type already allows optional); remove "(Authentic Historical Specimen)"
Acceptance test: no casNumber equals 7732-18-5 unless the substance is water; all casNumbers pass the check-digit test
Effort range: < 1 hour (+ regenerate tokens)
```

```
Proposed ID: MSR-DATA-002
Title: Template-generated "evidence" (material, formula, manuscript, extraction, crystal system, UNESCO label) displayed as authentic documentation
Severity (proposed): High   Confidence: high (counts from analyze-data.mjs; UI labels verbatim)
Status: reproduced
Location: heritage-data.ts records of nomadic-rugs, minakari-craft, toranj-illumination, persian-gulf-pearls, gardens-of-shiraz, khorasan-gems, hyrcanian-forests, yazd-saffron-desert, bazaar-spices (54) + behzad-miniature (6) for manuscript/extraction/crystal/UNESCO; UI app/app.js:334-339, app/template.html:1113, :1139
Observed / verbatim: mineralNameFa «رنگدانه اصیل ایرانی (سپیدی برف دماوند)»; chemicalFormula "Natural Organic / Mineral Complex (Matrix #F8F9FA)"; historicalManuscriptRef «رسالات کهن رنگرزی سنتی و صنعتی ایران زمین»; crystalSystem «کریستالین بومی فلات ایران»; unescoHeritageRef «ثبت میراث فرهنگی ملموس و ناملموس یونسکو»
Expected / rule or spec: unknown values should be absent or marked unknown; DESIGN_SYSTEM.md says the dataset is not a pigment-authentication database
Reproduction or source trail: SCRATCH=… node evidence/W1-cultural/analyze-data.mjs → templates{} (54/54/60/60/60/60/60)
Evidence path: evidence/W1-cultural/analyze-data.out.json; CULTURAL_CLAIMS.csv
Impact: 35 non-pigment subjects (sea, snow, gems, spices, shade, pastry cream) are presented as "authentic Iranian historical pigments" with a "reference manuscript"; readers cannot tell the 12 researched records from the 60 generated ones
Recommended minimal fix: in heritage-data.ts replace the template strings with null/"unknown"; in the dossier hide empty fields and rename labels to «یادداشت منبع اولیه (تأییدنشده)»
Acceptance test: no field value contains "Matrix #", "Persian Historical Pigment", the placeholder manuscript phrase or the placeholder crystal system; dossier shows "unknown" for them
Effort range: 2–6 hours
```

```
Proposed ID: MSR-DATA-003
Title: Synthetic coordinates for 60 colours presented as origin sites; normaliser prefers them over specific points
Severity (proposed): High   Confidence: high (exact arithmetic pattern, 60/60)
Status: reproduced
Location: heritage-data.ts geoSpatial.coordinates (first at :1080, originSite "Iranian Plateau Heritage Sites"); packages/core/src/tokens/palettes.ts:27-30 (conflict compare), :38-40 (selection of geoSpatial over legacy geo); app/app.js:346-354 (display + Google Maps link)
Observed / verbatim: lat 32.4279 + 0.5*i, lng 53.688 + 0.3*i, alt 1400 (e.g. 54.288000000000004) for colour index i in 10 palettes; Persian Gulf, Hyrcanian and Khorasan colours all placed in central Iran; for behzad-miniature-c1…c6 the specific Herat/Tabriz/Mashhad/Samarkand points are demoted to "alternative" (305–1165 km away)
Expected / rule or spec: coordinates need a source and precision; unknown should be null
Reproduction or source trail: analyze-data.out.json syntheticPlateauPattern.matchesFormula === true; repeatedCoordinates
Evidence path: agents/W1-data-quality-draft.md §2
Impact: map links and exported geo evidence point to arbitrary places; coordinate "conflicts" count (11) understates the problem because the 54 template records are internally consistent fakes
Recommended minimal fix: null the 60 synthetic coordinates; for behzad keep the legacy specific points only where a source exists (Tabriz 0.18 km from WHC 1346, Samarkand 3.8 km from WHC 603 per S003)
Acceptance test: no two palettes share identical coordinates unless the same site is cited; geographyStatus derived, not constant
Effort range: 1–3 hours
```

```
Proposed ID: MSR-CULT-001
Title: Modern named-colour values presented as heritage "world standards", "registered" or calibrated colours
Severity (proposed): High   Confidence: high for matches (S001/S002 exact); medium for intent
Status: source-confirmed
Location: heritage-data.ts meaningFa of isfahan-tiles-c1 (:30), -c2 (:114), -c3; achaemenid-majesty-c1 (:549); behzad-miniature-c4 (:1320); minakari-craft-c1; persian-gulf-pearls-c1 (:3144), -c3; gardens-of-shiraz-c1 (:3663); khorasan-gems-c1 (:4182); yazd-saffron-desert-c1, -c2 (:5304); bazaar-spices-c4
Observed / verbatim: «رنگ استاندارد ثبت‌شده جهانی با الهام از خاک سرخ پارس» on #CC3333 (= "Persian Red" in S002); «کد رسمی فیروزه» on #40E0D0 (= CSS turquoise, X11-derived per S001); «اصلاح شده برای بازتاب دقیق کبالت و لاجورد کاشی‌های مسجد شاه» on #120A8F (= "Ultramarine" in S002)
Expected / rule or spec: README.fa.md:21 "HEX انتخاب طراحی است"; data-quality.json measuredSpectra 0
Reproduction or source trail: evidence/W1-cultural/ref/named-color-matches.json (24/72 exact matches)
Evidence path: CULTURAL_CLAIMS.csv rows field=hex / meaningFa
Impact: users infer that historic objects were measured or that an international registry exists; the "Persian X" names are 20th-century colour-list names, not historical terms
Recommended minimal fix: add `nameSource: "modern color-name list"` (or similar) where a match exists; rewrite the 14 affected meanings to "HEX chosen by the designer; name as in modern colour lists"
Acceptance test: grep for «استاندارد جهانی|ثبت‌شده جهانی|کد رسمی|اصلاح شده برای» returns 0 in data
Effort range: 1–3 hours
```

```
Proposed ID: MSR-DATA-004
Title: Wrong or mismatched chemical identifiers (invalid CAS 1260-15-5; CoO CAS for Co3O4; neutral-acetate CAS for basic acetate; molar-mass error)
Severity (proposed): Medium   Confidence: high (check digit arithmetic; S005)
Status: source-confirmed
Location: heritage-data.ts:1329/:1371 (behzad-miniature-c4), :459/:501 (isfahan-tiles-c6), :207/:249 (isfahan-tiles-c3)
Observed / verbatim: "1260-15-5" (check digit should be 7; carminic acid is 1260-17-9 per S005); "1307-96-6" with formula "Co₃O₄ + C" (S005: 1307-96-6 = CoO; Co3O4 = 1308-06-1); "142-71-2" with "Cu(CH₃COO)₂·[Cu(OH)₂]₂" (S005: cupric acetate C4H6CuO4); raw molarMass 370.2 vs recomputed 376.76
Expected / rule or spec: CAS check-digit rule; identifier must denote the stated formula
Reproduction or source trail: python evidence/W1-cultural/cas_probe.py; python evidence/W1-cultural/molar-mass-check.py
Evidence path: evidence/W1-cultural/ref/cas-lookup.tsv; molar-mass-check.out.tsv
Impact: small scope (3 records), but these are in the most "researched" palettes and are displayed in the dossier
Recommended minimal fix: correct or remove the three CAS numbers; add a check-digit validator test over all casNumber values
Acceptance test: validator passes for all 72; CAS ↔ formula spot-check table in tests
Effort range: < 2 hours
```

```
Proposed ID: MSR-CULT-002
Title: Self-contradictory Achaemenid and other records (stone vs alloy, basalt vs carbonate, shells vs indigo, Hormuz under Persepolis)
Severity (proposed): Medium   Confidence: high (internal, verbatim)
Status: source-confirmed (internal) / reproduced (distance)
Location: heritage-data.ts achaemenid-majesty-c3 (:716 vs mineral indigo), -c4 (:804), -c5 (:888), -c6 (:964 vs :972), -c1 (:552, :561; coordinates); isfahan-tiles-c6 (:457 manganese vs cobalt); toranj-illumination-c5 (deerskin vs paper); hyrcanian-forests description vs c1
Observed / verbatim: "Tacara Basalt Black" → mineralName "Persian Archaeometallurgical Bronze", "Cu88-Sn12 Alloy"; "Apadana Bituminous Grey Basalt" with formula "CaCO3 + Bituminous Hydrocarbons"; meaning «رنگرزی شده با صدف‌های شاهی» with indigo; "Rainbow Island Hormuz / Persepolis" at 27.0628, 56.4589 cited as WHC 114 (472.78 km from WHC 114 reference point, S003)
Expected / rule or spec: one material and one site per record, consistent across fields
Reproduction or source trail: analyze-data.out.json unescoCoordinateChecks; CULTURAL_CLAIMS.csv rows with documentary_status internal-conflict
Evidence path: CULTURAL_CLAIMS.csv
Impact: the dossier shows a bronze formula for a black stone; users cannot trust any single field
Recommended minimal fix: pick one material per record or mark "unknown"; move Hormuz ochre to its own record without the Persepolis ID
Acceptance test: reviewer checklist per record; unit test that a cited WHC id's reference point lies within N km of the record coordinates
Effort range: 2–4 hours
```

```
Proposed ID: MSR-CULT-003
Title: Chronological, regional and ethnic flattening inside palettes (Timurid/Safavid, Ilkhanid/Safavid, Qashqai/Bakhtiari, Yazd/Lut/Qaenat, Gulf/Makran)
Severity (proposed): Medium   Confidence: medium (well-established art-historical and geographic facts from background knowledge; primary pages blocked)
Status: suspected (source check blocked) / source-confirmed where internal
Location: behzad-miniature (-c4 artMovement "مکتب اصفهان صفوی و نگاره‌های رضا عباسی"; nameFa «شاه‌توت شاه‌عباسی»; -c6 Samarkand); isfahan-tiles-c5 historicalContextFa (Öljeitü mihrab) vs site Sheikh Lotfollah; nomadic-rugs palette nameFa/culturalContextFa/unescoRefFa; yazd-saffron-desert descriptionFa (:5204); persian-gulf-pearls descriptionFa; khorasan-gems descriptionFa (:4166)
Observed / verbatim: «مکتب هرات و تبریز … با هارمونی جاودان نگارگری تیموری و صفوی»; «گلیم، گبه و قالی‌های دستباف ایل قشقایی و بختیاری فارس و چهارمحال» with unescoRef «مهارت‌های سنتی فرش‌بافی فارس»
Expected / rule or spec: attributions should name period, place and community separately; where a palette is a modern composite, say so
Reproduction or source trail: read the fields listed; S003 confirms Öljeitü mihrab site is WHC 1397, not 115
Evidence path: this report § Cultural representation; CULTURAL_CLAIMS.csv
Impact: reinforces a single undifferentiated "Persian" identity; misattributes group traditions; confuses learners
Recommended minimal fix: add a `compositeOf` / "modern composite inspired by …" note per palette; split nomadic-rugs attributions by group; move Öljeitü context to a separate record or remove
Acceptance test: each palette has a period/region statement; no colour's artMovement postdates/predates the palette's named master by >50 years without a note
Effort range: 0.5–2 days (content work)
```

```
Proposed ID: MSR-CULT-004
Title: historicalManuscriptRef is uncitable for 60 records and unlocatable or suspect for the other 12
Severity (proposed): Medium   Confidence: medium (placeholders certain; specific mis-attributions from background knowledge, sources blocked)
Status: source-confirmed (placeholders) / suspected (mis-attributions)
Location: heritage-data.ts mineralogical.historicalManuscriptRef (72); shown at app/app.js:339 under «رساله کهن خطی و سند تاریخی مرجع»
Observed / verbatim: 60× «رسالات کهن رنگرزی سنتی و صنعتی ایران زمین»; «التفهیم لأوائل صناعة التنجیم - ابوریحان بیرونی» for Neyshabur turquoise (al-Tafhim is an astronomy/astrology primer; al-Biruni's mineralogy is al-Jamahir); «تاریخ طبیعی پلینی … کتاب ۳۳» for indigo (Book 33 treats metals); «کتیبه پی‌بنای داریوش بزرگ در شوش (DSf)» for Persepolis Apadana gold; «معماری سنتی ایران - استاد حسین لرزاده» (a modern author) as a "manuscript"
Expected / rule or spec: edition + folio/page + passage; the palettes.ts provenance already marks verification 'not-verified'
Reproduction or source trail: CULTURAL_CLAIMS.csv field=mineralogical.historicalManuscriptRef (72 × unverified, with notes)
Evidence path: CULTURAL_CLAIMS.csv; SOURCES.md research backlog
Impact: scholarly-looking citations that cannot be followed; possible mis-attribution of named authors
Recommended minimal fix: delete the placeholder; rename field label in UI to «منبع ذکرشده در دادهٔ اولیه (بررسی‌نشده)»; add locator fields
Acceptance test: every non-null historicalManuscriptRef has edition and locator, or is labelled "further reading"
Effort range: placeholder removal < 1 hour; research 1–4 weeks (backlog)
```

```
Proposed ID: MSR-DATA-005
Title: Data-quality report hard-codes its headline counts and cannot detect formula/CAS inconsistency
Severity (proposed): Medium   Confidence: high
Status: reproduced
Location: packages/core/src/tokens/palettes.ts:72 (unverifiedHeritageColors: colors.length, measuredSpectra: 0); :49-51 (status literals); compare('chemical.formula', …) never fires (0 conflicts)
Observed / verbatim: `unverifiedHeritageColors: colors.length, measuredSpectra: 0`
Expected / rule or spec: counts derived from per-record status; checks for placeholders and identifier validity
Reproduction or source trail: analyze-data.out.json dataQualityReport.conflictFieldCounts (no chemical.formula)
Evidence path: agents/W1-data-quality-draft.md §1
Impact: progress on verification can never be reported; placeholder data passes the only automated check
Recommended minimal fix: derive counts from provenance fields; add placeholder detectors (Matrix #, 7732-18-5, generic manuscript) to the report
Acceptance test: changing one record's heritageStatus changes the report; report lists placeholder counts
Effort range: 2–4 hours
```

```
Proposed ID: MSR-DATA-006
Title: Tailwind, Swift, Kotlin and Tokens Studio exports drop the "unverified" caveat and copy «اصیل»
Severity (proposed): Low   Confidence: high
Status: reproduced
Location: packages/core/tokens/tailwind-theme.css, Colors.swift, ColorSchemes.kt, tokens-studio.json (0 caveat strings each); contrast: figma-variables.json 72/72 "Heritage annotation not independently verified"; w3c-tokens.json full provenance
Observed / verbatim: `--color-persian-achaemenid-majesty-100: #CC3333; /* سرخ پارسی اصیل (Persian Red) */`
Expected / rule or spec: consistent caveat across exports (as Figma does)
Reproduction or source trail: grep -c -i "unverified\|verified" on each file
Evidence path: agents/W1-data-quality-draft.md §4
Impact: consumers of the most common outputs receive "authentic" names with no caveat
Recommended minimal fix: one header comment/description line per file; strip «اصیل» from exported names
Acceptance test: every export contains the caveat string
Effort range: < 2 hours
```

```
Proposed ID: MSR-DATA-007
Title: Dataset is hard to cite: no CITATION.cff, no data/annotation licence, no version or date in data-quality.json, position-based IDs
Severity (proposed): Low   Confidence: high
Status: source-confirmed
Location: repo root (no CITATION.cff); LICENSE (MIT code only); packages/core/tokens/data-quality.json (no version/date); THIRD_PARTY_NOTICES.md:14 (images unchecked)
Observed / verbatim: THIRD_PARTY_NOTICES.md:14 "their provenance/licensing must be checked on their source pages before republication"
Expected / rule or spec: citable dataset metadata (CFF), explicit licence for text annotations, per-image attribution
Reproduction or source trail: ls; read files
Evidence path: agents/W1-data-quality-draft.md §6
Impact: reuse and correction workflows (ROADMAP item 3) lack a stable reference point
Recommended minimal fix: add CITATION.cff with version and date; state the annotation licence; add version and commit to data-quality.json; record image author/licence
Acceptance test: cffconvert validates; data-quality.json has version
Effort range: 1–2 hours
```

```
Proposed ID: MSR-CULT-005
Title: "Persian dastgah" sound effects use Western 12-tone equal-tempered pitches
Severity (proposed): Low   Confidence: medium (frequencies computed exactly; the need for microtonal intervals in dastgah is background knowledge, not source-checked here)
Status: reproduced (frequencies) / suspected (cultural claim)
Location: app/app.js:1667 (comment), :1675 (dastgahFreqs), :1700 toast «افکت‌های هارمونیک دستگاه‌های موسیقی ایرانی فعال شدند»
Observed / verbatim: [261.63, 293.66, 311.13, …] = C4, D4, E♭4, F4, G4, A♭4, B♭4 … all within 0.03 cents of 12-TET
Expected / rule or spec: dastgah intervals such as koron (quarter-flat) are not representable in 12-TET
Reproduction or source trail: evidence/W1-cultural/dastgah-12tet-check.out.txt
Evidence path: same
Impact: small, user-visible misrepresentation of Persian music
Recommended minimal fix: rename to "tones" / «افکت صوتی», or implement koron intervals with a cited scale
Acceptance test: toast text no longer claims dastgah, or frequencies include cited microtonal steps
Effort range: < 1 hour
```

```
Proposed ID: MSR-CULT-006
Title: Generic or non-UNESCO designations presented as UNESCO heritage references
Severity (proposed): Medium   Confidence: medium (S003 covers WHC to 2014 only; ICH/WCC pages blocked)
Status: source-confirmed for WHC IDs; suspected for the rest
Location: heritage-data.ts geoSpatial.unescoHeritageRef (60× «ثبت میراث فرهنگی ملموس و ناملموس یونسکو»); isfahan-tiles-c2 «ثبت میراث ملموس صنعتی-معدنی یونسکو» (legacy geo says "WCC Craft City"); legacy geo "Herat Citadel Matrix", "Imam Reza Holy Shrine"; app/app.js:352 fallback 'HERITAGE REFERENCE'; app/app.js:276 fallback 'UNESCO Heritage'
Observed / verbatim: as above
Expected / rule or spec: cite list, element/property ID and year; S003 has no Herat, Mashhad-shrine or Neyshabur property (to 2014)
Reproduction or source trail: evidence/W1-cultural/ref/uwhs-subset.json; CULTURAL_CLAIMS.csv field=geoSpatial.unescoHeritageRef
Evidence path: same
Impact: implies UNESCO endorsement for places or colours that have none
Recommended minimal fix: keep only specific, checked IDs (114, 115, 1106, 1346, 1372, 1397); remove generic labels and UI fallbacks
Acceptance test: every unescoHeritageRef matches /WHC \d+|ICH \d+/ with a URL, or is null
Effort range: 1–2 hours
```

Findings MSR-I18N-001…007 are in `agents/W1-persian-language.md`. The most important is MSR-I18N-001: the English dossier banner says "Historical & Mineral: Primary source documented." where the Persian says «نیازمند بررسی منبع».

## Passes with evidence

- WHC IDs are correct: 115 = Meidan Emam, Esfahan (1979); 114 = Persepolis (1979); 1106 = Pasargadae (2004); 1397 = Masjed-e Jame of Isfahan (2012); 1346 = Tabriz Historic Bazaar Complex (2010); 1372 = The Persian Garden (2011). Source: S003.
- Isfahan and Persepolis/Pasargadae coordinates are within 0.01–1.19 km of the WHC reference points (S003). The legacy points for Tabriz and Samarkand are within 0.18 and 3.8 km of WHC 1346 and 603.
- These chemistry entries are correct for the named substance: cinnabar HgS, malachite Cu₂CO₃(OH)₂, gypsum CaSO₄·2H₂O, gold Au, turquoise CuAl₆(PO₄)₄(OH)₈·4H₂O (S004), and indigo C₁₆H₁₀N₂O₂ and carminic acid C₂₂H₂₀O₁₃ (S005). These CAS numbers are correct: 7440-57-5, 10101-41-4, 1344-48-5, 12069-69-1 (S005). Recomputed molar masses agree for 6 entries.
- Provenance safeguards:
  - `heritageStatus: 'unverified'` and `historicalReference.verification: 'not-verified'` on 72/72 colours.
  - Conflicts are retained, not overwritten (11).
  - `molarMass` is removed from normalised output.
  - Colour metrics are recomputed from HEX.
  - The DTCG export carries full provenance; the Figma export carries a caveat on 72/72.
- Persian orthography is clean at the character level. There is no Arabic yeh or kaf and no Arabic-Indic digits, and ZWNJ is used correctly (details in the language report).
- The Persian UI and README.fa carry honest caveats: «الهام‌گرفته», «نیازمند بررسی منبع», illustrative spectrum, procedural texture, and «ادعای … اندازه‌گیری آزمایشگاهی ندارد».

## Not performed / blocked

- **Network:** UNESCO (WHC, ICH, DataHub), PubChem, CAS Common Chemistry, W3C TR, Wikipedia, mindat, RRUFF, Encyclopaedia Iranica, museum and DOI resolvers were all blocked by egress policy (`evidence/W1-cultural/source-notes.md`). I used mirrors and derivatives (S001–S005) instead and recorded the limits of each.
- **Not verified at all:**
  - CAS numbers 1302-85-8, 1319-32-0, 9000-01-5 and 9004-34-6. Their check digits are valid.
  - WHC inscriptions after 2014 (Yazd, Hyrcanian Forests).
  - All ICH and World Crafts Council designations.
  - All crystal systems.
  - All manuscript passages: none were read, so no manuscript claim is above `unverified`.
  - Building-level coordinates (e.g. whether 32.6514, 51.6776 is the Shah Mosque).
  - Wikimedia image licences and attributions.
- No physical measurements. The project has none, and none were possible here.
- No browser rendering of the English UI (W2's scope). The i18n statements are based on source code.
- No native-speaker style review.
