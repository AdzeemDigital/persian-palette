# W1 report: Persian language and i18n (role A05)

Baseline fe97cc1. Reviewer: W1 (sequential AI review; native-speaker sign-off still needed for style items). Evidence files are in `evidence/W1-cultural/`:
- `persian-orthography-scan.mjs` and its output `.out.json`
- `normalization-probe.mjs` and its output `.out.txt`, run against `$SCRATCH/work/packages/core/dist/index.js` (core 3.0.0, Node v22.22.2)

## 1. Script and character inventory

| File | Farsi yeh ی U+06CC | Arabic yeh ي U+064A | Alef maksura ى | Keheh ک U+06A9 | Arabic kaf ك U+0643 | ZWNJ U+200C | Hamza-above ٔ | Persian digits ۰–۹ | Arabic-Indic ٠–٩ | Teh marbuta ة |
|---|---|---|---|---|---|---|---|---|---|---|
| `packages/core/src/tokens/heritage-data.ts` | 4485 | 0 | 0 | 905 | 0 | 619 | 0 | 92 | 0 | 1 (Arabic title "صناعة", l.122) |
| `app/app.js` | 360 | 0 | 0 | 133 | 0 | 56 | 5 | 22 | 0 | 0 |
| `app/template.html` | 681 | 0 | 0 | 175 | 0 | 126 | 22 | 96 | 0 | 0 |
| `app/enhancements.js` | 20 | 0 | 0 | 1 | 0 | 3 | 3 | 0 | 0 | 0 |
| `README.fa.md` | 148 | 0 | 0 | 18 | 0 | 38 | 10 | 12 | 0 | 0 |
| `implementation_plan.md` | 76 | 0 | 0 | 16 | 0 | 13 | 6 | 8 | 0 | 0 |
| `walkthrough.md` | 175 | 0 | 0 | 31 | 0 | 44 | 11 | 22 | 0 | 0 |

**Passes with evidence.**
- No Arabic yeh or kaf, and no Arabic-Indic digits, appear anywhere in data, UI or Persian docs.
- There are no ZWNJs next to spaces and no doubled ZWNJs. No "می" verb prefix is written with a space or directly joined, and no plural "ها/های" is separated by a space (scan patterns returned 0 hits).
- Directly joined suffixes (e.g. "سروهای", "بادگیرهای", "بلندترین") all follow non-joining letters, which the Academy allows.
- Persian punctuation (، ؛) is used. The one teh marbuta is inside an Arabic book title, where it is correct.
- `dir="ltr"` plus `unicode-bidi: isolate` protects formulas and coordinates inside RTL text (`template.html:1107`, `:1212`).

**Minor inconsistencies (Low).**
- Ezafe on final heh: the UI and docs write "ـهٔ" (U+0654: "شناسنامهٔ", "نسخهٔ"). The data never does (e.g. "کرم خامه پشمی", "کاسه مقرنس‌های"). Choose one convention.
- Compound spelling varies inside the data: "حل‌کاری" (`heritage-data.ts:1051`, `:1398`) vs "حلکاری" (`:286`, `:330`, `:1408`, `:1452`); "دستبافته‌ها" (7×) vs "دست‌ساز", "دست‌ریس" (with ZWNJ).
- Decimals and version numbers mix Persian digits with an ASCII full stop: "۰.۱ میکرون" (`heritage-data.ts:289`), "۳.۰.۰" (`README.fa.md:55`, `walkthrough.md:1`), `app.js:3212`, `template.html:623`, `:810`. The Persian decimal separator is "٫" (U+066B). For version strings, ASCII digits are the safer choice.
- Only one harakat appears in the whole UI ("کاملاً", `template.html:241`). The target brand **مَنشورِی!** (with fatha and kasra) does not appear anywhere yet. The Persian README title is "رنگ‌های پارسی — منشور" (`README.fa.md:1`).
- Transliterated English jargon is used where Persian terms are established: "شافل" (shuffle), "مود" (mode), "سمپل هارمونی", "کپی اکشن:", "دیزاین سیستم" (`app/app.js:23`, `:55–57`), "هگز", "فول‌اسکرین". Suggested replacements: «جابه‌جایی»، «حالت»، «نمونهٔ هماهنگی»، «رنگ کنش»، «سامانهٔ طراحی». This is a style item for native review.
- Translation slip: `<option value="octahedron">منشور هشت‌وجهی</option>` (`template.html:560`). An octahedron is «هشت‌وجهی»; «منشور هشت‌وجهی» means an octagonal prism.

## 2. `normalizeColorName` diagnostic (packages/core/src/engine.ts:8–11)

Implementation: NFKC, then lowercase, then `ي→ی`, `ك→ک`, then strip U+064B–065F, U+0670 and U+0640, then drop everything that is not a letter or number. Probe results (full table in `normalization-probe.out.txt`): **12 gaps out of 24 cases.**

| Case | Result |
|---|---|
| ZWNJ vs none vs space ("فیروزه‌ای" / "فیروزهای" / "فیروزه ای") | equal (ok) |
| Arabic yeh U+064A, Arabic kaf U+0643 | folded (ok) |
| Heh + U+0654 ("خامهٔ") vs "خامه" | equal (ok: the hamza mark is stripped) |
| Harakat, tatweel, presentation forms (U+FEFB), English case, punctuation | ok |
| **Alef maksura ى U+0649** vs ی | **not folded**: `getColor('isfahan-tiles','لاجوردى')` throws `Unknown color` |
| **Heh-with-yeh ۀ U+06C0** vs "هٔ"/"ه" | **not folded**: NFKC decomposes U+06C0 to U+06D5 + U+0654, so the result keeps U+06D5 (AE), not U+0647. `getColor('nomadic-rugs','کرم خامۀ پشمی')` throws. On a Persian keyboard the precomposed form is common, so this matters. |
| **Teh marbuta ة vs ه** | not folded |
| **Alef-hamza أ U+0623 / إ U+0625 vs ا** | not folded ("الأطایب" ≠ "الاطایب", "إصفهان" ≠ "اصفهان") |
| **Yeh-hamza ئ vs ی** ("عرائس" vs "عرایس") | not folded |
| **Swash kaf ڪ U+06AA** | not folded |
| **Digits: Persian ۰–۹, Arabic-Indic ٠–٩ and ASCII** | never unified: "۷۲" ≠ "72" ≠ "٧٢", and "#۱۲۰A8F" ≠ "#120A8F" |
| Alef-madda آ vs ا | distinct (acceptable; آ is a separate letter) |

The studio search (`app/app.js:2014–2022`) uses the same function, including for HEX codes. A user typing a HEX code with a Persian-layout number row gets no result. Also, `PersianEngine.getColor(p, '#120A8F')` throws `Unknown color`, because the engine matches id/name/key only, not HEX. README.fa does not claim HEX lookup, so this is noted, not proposed as a finding.

**Proposed minimal fix:** add `.replace(/[ىۍێ]/g,'ی')`, `.replace(/ۀ/g,'ه')` (applied before NFKC, or `ە`→`ه` after), `.replace(/[أإٱ]/g,'ا')`, `.replace(/ؤ/g,'و')`, `.replace(/ئ/g,'ی')`, `.replace(/ة/g,'ه')`, `.replace(/ڪ/g,'ک')`, plus digit mapping `[۰-۹٠-٩] → 0-9`. Add the 12 probe cases as unit tests.

## 3. English UI vs Persian UI: caveats and semantic drift

Both sides of `UI_STRINGS` have 37 keys and neither set is missing a key (`app/app.js:22–97`). The problem is meaning, not coverage.

| Location | Persian (what it says) | English (what it says) | Drift |
|---|---|---|---|
| `app/enhancements.js:8` vs `:11` (dossier provenance banner) | «اطلاعات تاریخی و ماده: نیازمند بررسی منبع» ("historical & material information: **needs source review**") | "Historical & Mineral: **Primary source documented.**" | **Reversal**: the English asserts the opposite of the data (`heritageStatus: 'unverified'`, `verification: 'not-verified'` for 72/72). Present in both built HTML files |
| `enhancements.js:9` vs `:12` | «مختصات نمایش‌داده‌شده از رکورد اولیهٔ نقشه است» ("from the initial map record") | "Displayed coordinates follow initial site registry." | English implies an authoritative registry; 60 of these coordinates are synthetic |
| `app.js:38` vs `:77` heroBadge | «رنگ‌های الهام‌گرفته از میراث ایران» ("colours **inspired by** Iranian heritage") | "**Authentic** Iranian Heritage Colors • Production Design Tokens" | Overclaim in English |
| `app.js:40` vs `:79` heroDesc | «وضعیت روشن منابع تاریخی» ("**clear status** of historical sources") | "**documented historical sources**" | Overclaim in English |
| `app.js:39` vs `:78` heroHeading | «مستندات چندگانه، فیزیک نور…» | "Multi-Evidence **Provenance**, **Spectral Physics** & APCA Contrast" | English adds "provenance"; both imply spectral physics although spectra are illustrative |
| `app.js:43/82` hudPreview | «پیش‌نمایش و منابع» / «وکتور + تصویر اختیاری» | "Preview & Evidence" / "Vector + Heritage" | "optional image" becomes "Heritage" |
| `app.js:48/87` evidenceCta, `:2134`, `:2262` | «شناسنامهٔ رنگ، محاسبات و منابع» | "Color Science Dossier & **Provenance**" / "Spectral science & provenance dossier" | Mild overclaim |
| `app.js:428–429` APCA matrix | «✓ راهنمای مرجع» / «— خارج از راهنما» ("within / outside the reference guide") | "✓ Pass (Readable)" / "— Insufficient" | English turns guidance into a readability verdict; the Persian note (`enhancements.js`, after the matrix) says Persian readability needs separate evaluation |
| Static caveat notes (`template.html:967`, `:1178`, `:1356`, `:1406`, `:1430`, `:1456`) | Persian sentences: spectrum is an illustrative model, not spectrometer data; coordinates are quoted from the primary data and may conflict; texture is procedural, not a scan | **No English version**: no `data-i18n` key; the EN build keeps them in Persian | English readers never see these caveats in their language |
| Palette subtitle/context in EN mode (`app.js:2055`, `:2118`, `:276`) | — | Renders `palette.description` / `palette.unescoRef`, which contain the **Persian** text (§ data-quality 3.5) | Persian text shown where English is expected; the caveat-free Persian superlatives ("اصیل", "استاندارد جهانی") are the only copy |

The Persian strings are generally more careful than the English ones: the hero text, the provenance banner and the APCA note all hedge in Persian. The English side reverses or drops these caveats.

## 4. Unsupported superlatives and absolute terms (file:line)

Data (`packages/core/src/tokens/heritage-data.ts`; each `…Fa` line has an identical English-named twin one line above):
- "اصیل" (authentic): 120 lines. That is 2 per template record: `mineralNameFa`/`historicalPigmentFa` = «رنگدانه اصیل ایرانی (…)» (e.g. `:1591`, `:1635`), for 54 records including sea water, snow, spices and pastry cream. It also appears in names: «فیروزه‌ای اصیل» `:108`, «سرخ پارسی اصیل» `:543`, «آبی پارسی اصیل» `:3138`. In descriptions: `:13` («کبالت و لاجورد اصیل»), `:1052` («شنگرف اصیل معدنی»). In meanings: `:1068`, `:5823`.
- "Authentic Historical Specimen" (with water's CAS number): 120 lines, first `:558`.
- "استاندارد جهانی" (world standard): `:13`, `:114`, `:1320`, `:3663`, `:3735`.
- "ثبت‌شده جهانی" (globally registered): `:549`, `:621`, `:3144`, `:3216`; "رنگ جهانی ثبت‌شده … در موزه‌های بین‌المللی" (minakari-craft-c1 meaning).
- "کد رسمی فیروزه" (official turquoise code): `:4182`, `:4254`.
- "دقیق/دقیق‌تر" ("corrected for accurate reflection/tone"): `:30`, `:5304`, `:5376`. These imply calibration against objects; `README.fa.md:21` says HEX is a design choice.
- "کهن‌ترین" (oldest): `:4166` (turquoise mine), `:4182`, `:4685` (forests), `:5204` (adobe city).
- "۱۰۰٪ طبیعی" (100% natural): `:1571`. "پیشینه پنج‌هزار ساله" (5,000-year history): `:2090`. "جاودان" (eternal): `:1052`, `:5037`.
- "فاخر" (luxurious): 4 lines in data (e.g. `:717` «پارچه‌های فاخر»); editorial tone rather than a claim.

UI and docs:
- `app/app.js:2527`: «این ترکیب با رعایت کامل استانداردهای WCAG 2.2 و کنتراست سطوح کالیبره شده است» ("this combination fully complies with WCAG 2.2 and is calibrated"). An absolute compliance claim appended to every preview, whereas `README.fa.md:23` says APCA/WCAG compliance is not established.
- `app/template.html:1113`: label «نام کانی‌شناسی اصیل (فارسی)» ("authentic mineralogical name"). `:1139`: «رساله کهن خطی و سند تاریخی مرجع» ("reference historical manuscript") is shown above placeholder text for 60 colours.
- `template.html:649`, `:1523`: «رنگ‌های اصیل ایرانی».
- «آزمایشگاه» (laboratory) used for UI tools: `template.html:1049` («آزمایشگاه زنده خوانایی»), `:1763` («آزمایشگاه ترکیب رنگدانه‌های تاریخی»). This is a metaphor, but next to "historical pigments" it suggests lab work. `README.fa.md:17` correctly disclaims laboratory measurement.
- «رسمی» (official): `template.html:1497`, `:1716`, `:1727` (about the package and DTCG). Low risk.
- `walkthrough.md:3` «رفع کامل خطاهای کارکردی», «تم روشن فاخر», «۷۲ رنگ تاریخی» ("72 historical colours"). `walkthrough.md:45`: «تست زنده رابط کاربری با DevTools مرورگر به تایید نهایی رسیده است» ("live UI test … reached final approval"), which contradicts `implementation_plan.md:21` («آزمون دیداری/تعاملی مرورگر … دسترسی ابزار مرورگر مسدود شد»). `walkthrough.md:38` says «۱۳۴ فایل», while A00 counted 139 ZIP entries. `walkthrough.md:9–10` links to an absolute local Windows `file:///c:/Users/…` path, which leaks a local path.

## 5. Name translation and transliteration

- Inconsistent transliteration of the same place: **Tacara** (nameEn, `heritage-data.ts:964`) vs **Tachara** (originSite, `:897`). The engine accepts "Tacara Basalt Black" but throws on "Tachara Basalt Black" (probe).
- Mixed conventions for ق: "Ghasrodasht" (Gh) vs "Qashqai", "Qeshm" (Q). "Masjed-e Jāmé" alone carries diacritics; everything else is plain ASCII. "Meidan Emam" (the UNESCO list form, S003) and "Naqsh-e Jahan" are both used for the same square. "Neyshabur" in the data vs "Nishapur" in the linked image file name. "Rig-e Jenn" and "Senjed" follow a consistent -e ezafe style and are fine.
- English names that change the meaning of the Persian:
  - «سبز کله‌غازی» ("goose-head green") → "Peacock Forest Green".
  - «لاکی شاه‌عباسی» (lac-dye red) → "Persian Crimson **Lacquer**" (lac is an insect dye, not lacquer).
  - «خشت سوخته کویر» ("fired brick") → "**Sun-baked** Adobe Shadow" (sun-baked would be «خشت خام»).
  - «کاهگل آفتاب‌خورده» (straw-mud plaster) → "Adobe **Terracotta**" (terracotta is fired clay).
  - «سنگ مرمر آپادانا» (marble) → "Apadana **Alabaster**".
  - «سنگ سیاه تچر» ("black stone") → "Tacara **Basalt** Black".
  - «سنگ چخماق دودی» ("smoky flint") → "Flint **Basalt** Dark".
  - «خامه شیرینی کهن» → "Ancient **Saffron** Pastry Cream" (saffron added).
  - «زمرد نادری» → "Emerald Green" (Nader's name dropped).
  - «کهربای کهن توس» → "Amber Gold" (Tus dropped).
  - «طلای شاهنشاهی» ("imperial gold") → "Old Gold" (a modern colour-list name, S002).
  - Palette «هنر میناکاری و قلم‌زنی» → "Minakari & **Repousse** Metalwork" (قلم‌زنی is chasing/engraving).
  - Palette «راز خلیج فارس و مروارید قشم» → "Persian Gulf & Hormuz Crimson Coast".

## Proposed findings (brief format)

```
Proposed ID: MSR-I18N-001
Title: English provenance banner reverses the Persian caveat ("Primary source documented" vs "needs source review")
Severity (proposed): High   Confidence: high (verbatim strings; data has verification: not-verified for 72/72)
Status: reproduced
Location: app/enhancements.js:8 (EN) vs :11 (FA); also present in code_artifact.html and code_artifact_en.html (1 occurrence each)
Observed / verbatim: EN "Historical & Mineral: Primary source documented." FA «اطلاعات تاریخی و ماده: نیازمند بررسی منبع»
Expected / rule or spec: English must carry the same epistemic status as the data (heritageStatus 'unverified', historicalReference.verification 'not-verified')
Reproduction or source trail: grep "Primary source documented" app/enhancements.js code_artifact*.html; getDataQualityReport().unverifiedHeritageColors === 72
Evidence path: evidence/W1-cultural/analyze-data.out.json (dataQualityReport)
Impact: English-speaking users and reviewers are told the heritage claims are primary-source documented; this undermines the project's own honesty safeguards
Recommended minimal fix: EN text "Historical & material notes: unverified; source review needed." Also fix "initial site registry" → "initial map record"
Acceptance test: unit/integration test asserting EN banner contains "unverified" and not "documented"
Effort range: < 1 hour
```

```
Proposed ID: MSR-I18N-002
Title: English hero and labels overclaim ("Authentic Iranian Heritage Colors", "documented historical sources", "Pass (Readable)")
Severity (proposed): Medium   Confidence: high (verbatim)
Status: reproduced
Location: app/app.js:77, :78, :79, :82, :87, :428–429, :2134
Observed / verbatim: FA «رنگ‌های الهام‌گرفته از میراث ایران» vs EN "Authentic Iranian Heritage Colors • Production Design Tokens"; FA «وضعیت روشن منابع تاریخی» vs EN "documented historical sources"; FA «✓ راهنمای مرجع» vs EN "✓ Pass (Readable)"
Expected / rule or spec: translation must not strengthen claims; README.fa.md:17–23 disclaims authentication and full accessibility compliance
Reproduction or source trail: compare UI_STRINGS.fa/en
Evidence path: this report §3
Impact: marketing-grade overclaim in the language most external reviewers read
Recommended minimal fix: translate the Persian literally ("Colors inspired by Iranian heritage", "clear status of historical sources", "Within reference guide")
Acceptance test: snapshot test of UI_STRINGS.en for banned terms (authentic, documented, pass)
Effort range: < 1 hour
```

```
Proposed ID: MSR-I18N-003
Title: Persian-only caveat notes and Persian text in English-named data fields shown in the English UI
Severity (proposed): Medium   Confidence: high
Status: reproduced (source); browser rendering not re-checked by W1
Location: app/template.html:967, :1178, :1356, :1406, :1430, :1456 (no data-i18n); app/app.js:2055, :2118, :276 render palette.description / unescoRef; heritage-data.ts description/culturalContext/unescoRef = …Fa (12/12), role/meaning = …Fa (72/72)
Observed / verbatim: e.g. EN mode card subtitle shows «شاهکار هفت‌رنگ صفوی، کبالت و لاجورد اصیل، فیروزه‌ای استاندارد جهانی …»
Expected / rule or spec: every caveat has an EN counterpart; English-named fields hold English or are removed
Reproduction or source trail: analyze-data.out.json englishNamedFieldsWithPersian; grep apca-note template.html
Evidence path: evidence/W1-cultural/analyze-data.out.json
Impact: English readers get no spectral/texture/coordinate caveats; API consumers reading `description` get Persian superlatives as "English" copy
Recommended minimal fix: add data-i18n keys for the six notes; write English description/culturalContext/unescoRef or drop the fields from the type
Acceptance test: in EN build, no Arabic-script characters in elements marked data-i18n; type test that description !== descriptionFa
Effort range: 0.5–2 days (12 palette descriptions + 6 notes to translate)
```

```
Proposed ID: MSR-I18N-004
Title: normalizeColorName misses common Persian/Arabic variants (ۀ, ى, أ/إ, ئ, ة, ڪ) and all digit forms
Severity (proposed): Medium   Confidence: high (runnable probe)
Status: reproduced
Location: packages/core/src/engine.ts:8–11
Observed / verbatim: 12/24 probe cases fail; getColor('nomadic-rugs','کرم خامۀ پشمی') and getColor('isfahan-tiles','لاجوردى') throw RangeError; '#۱۲۰A8F' ≠ '#120A8F'
Expected / rule or spec: README.fa.md:11 promises matching of "equivalent Persian/Arabic characters"
Reproduction or source trail: SCRATCH=… node evidence/W1-cultural/normalization-probe.mjs
Evidence path: evidence/W1-cultural/normalization-probe.out.txt
Impact: failed searches/lookups for users typing with standard Persian keyboards (ۀ, Persian digits) or Arabic layouts
Recommended minimal fix: see §2 mapping table; add the probe cases as tests
Acceptance test: all "equal" rows of the probe return true; existing 18 core tests still pass
Effort range: 1–3 hours
```

```
Proposed ID: MSR-I18N-005
Title: Unsupported superlatives in Persian data and UI ("اصیل", "استاندارد جهانی", "ثبت‌شده جهانی", "کد رسمی", "دقیق", "کهن‌ترین", "۱۰۰٪", WCAG "رعایت کامل")
Severity (proposed): Medium   Confidence: high (verbatim); truth of each claim unverified
Status: source-confirmed (text present); claims themselves unverified or contradicted per CULTURAL_CLAIMS.csv
Location: heritage-data.ts (lines in §4); app/app.js:2527; app/template.html:1113, :1139, :649, :1523; walkthrough.md:3, :45
Observed / verbatim: «رنگدانه اصیل ایرانی (سپیدی برف دماوند)»; «اصلاح شده برای بازتاب دقیق کبالت و لاجورد کاشی‌های مسجد شاه»; «با رعایت کامل استانداردهای WCAG 2.2»
Expected / rule or spec: README.fa.md:21 (HEX is a design choice; 0 measured spectra; claims need independent review)
Reproduction or source trail: node evidence/W1-cultural/persian-orthography-scan.mjs <repo>
Evidence path: evidence/W1-cultural/persian-orthography-scan.out.json (superlatives[])
Impact: the Persian copy, which is otherwise the more careful language, asserts authenticity, calibration and compliance that the project itself disclaims
Recommended minimal fix: remove "اصیل"/"ناب" from generated names and template strings; replace "استاندارد جهانی/ثبت‌شده جهانی" with "نام رایج در فهرست‌های رنگ دیجیتال"; drop the WCAG sentence or make it conditional on a computed result
Acceptance test: scan returns 0 hits for the banned list in data/UI
Effort range: 2–6 hours
```

```
Proposed ID: MSR-I18N-006
Title: English colour names change the meaning of the Persian names; transliteration inconsistent (Tacara/Tachara, Gh/Q)
Severity (proposed): Low   Confidence: medium (translation judgments; native review recommended)
Status: source-confirmed
Location: heritage-data.ts nameEn of nomadic-rugs-c2, c4; yazd-saffron-desert-c2, c5; achaemenid-majesty-c5, c6; khorasan-gems-c6; bazaar-spices-c5; palette minakari-craft nameEn; :964 vs :897
Observed / verbatim: «سبز کله‌غازی» → "Peacock Forest Green"; «خشت سوخته» → "Sun-baked Adobe"; "Tacara" vs "Tachara"
Expected / rule or spec: English names should translate the Persian name or be clearly independent labels; one romanisation scheme
Reproduction or source trail: normalization-probe.out.txt ("Tachara Basalt Black" → Unknown color)
Evidence path: this report §5
Impact: bilingual users see different objects named in each language; English-name lookups fail on the variant spelling
Recommended minimal fix: correct the listed names; adopt one scheme (e.g. UNESCO/Encyclopaedia Iranica simplified) and add aliases
Acceptance test: alias test for Tachara/Tacara; reviewer sign-off on the 13 listed names
Effort range: 2–4 hours
```

```
Proposed ID: MSR-I18N-007
Title: Persian walkthrough claims final live-browser approval, contradicted by implementation_plan
Severity (proposed): Low   Confidence: high (verbatim both sides)
Status: source-confirmed
Location: walkthrough.md:45 vs implementation_plan.md:21; walkthrough.md:38 («۱۳۴ فایل» vs 139 ZIP entries per A00); walkthrough.md:9–10 absolute local Windows file:/// links
Observed / verbatim: «تست زنده رابط کاربری با DevTools مرورگر به تایید نهایی رسیده است» vs «آزمون دیداری/تعاملی مرورگر … دسترسی ابزار مرورگر مسدود شد»
Expected / rule or spec: one consistent verification statement (docs/verification.md)
Reproduction or source trail: read both files
Evidence path: this report §4
Impact: misleading status statement in a Persian document; leaks a local path
Recommended minimal fix: align walkthrough.md with implementation_plan.md/verification.md; remove file:/// links; fix the count
Acceptance test: docs lint for "file:///" and for verification claims
Effort range: < 1 hour
```

## Not performed / blocked

- Native-speaker stylistic review (tone, register) was not performed. The style items above are flagged for human review.
- I did not re-render the English UI in a browser. W2 covers the browser, and statements about rendering here are inferred from the source.
- The Academy of Persian Language and Literature orthography guide (dastur-e khatt) was not opened (network policy). Orthography judgments follow its widely known rules from background knowledge and are labelled Low.
