# ManschouRey (مَنشورِی!): independent audit, executive summary

- **Repository:** `AdzeemDigital/persian-palette`
- **Audited commit:** `fe97cc1ba1400f5c118d7c290bc1000574ac6dd0`
- **Date:** 2026-09-25 (UTC)
- **Full report (Persian):** `AUDIT_REPORT.fa.md`
- **Structured findings:** `FINDINGS.json` (52 findings: 1 Critical, 4 High, 22 Medium, 25 Low)

This is an audit, not a certification. No production file was changed. "Pass" applies only to the recorded command, procedure and environment. None of the review roles claims human professional credentials (legal, museum or accessibility).

## Verdicts

| Claim | Verdict | Main reason |
| --- | --- | --- |
| Digital design/color toolkit | **not-ready** (narrowly) | The color math is correct against two independent libraries: Oklab max error 3.7e-8, APCA exact, HCT within 0.055°. Build, 26 tests, packaging and an isolated consumer all pass. Three required gate items fail, each fixable in under a day: API/docs describe "physical" spectra and "pigment" mixing that do not exist; the UI silently substitutes invalid input; exporters emit injectable or invalid output for unusual names. |
| Source-citable cultural reference | **not-ready** | 60 of 72 records carry template or placeholder "evidence" (Critical, MSR-CULT-001), and the English UI says "Primary source documented" where the Persian UI and the data model say the sources are unverified (High, MSR-I18N-001). |
| Accessible bilingual app (tested scope: headless Chromium) | **not-ready** | At 400% zoom, 0 px of content is visible under the sticky header (High). The light theme renders essential controls at 1.19–1.60:1 contrast (High). The English edition inverts the provenance caveat and has no `lang` markup. No screen-reader testing was done. |
| Redistribution and release | **not-ready** | The package is labeled MIT but hard-depends on and bundles apca-w3, whose license is limited to web content and requires a signed agreement for commercial use; colorparsley (AGPL-3.0) loads at runtime (High; needs counsel). The committed build manifest is stale. The v3.0.0 ZIP still carries retracted "Enterprise-Grade" / "72 authenticated pigment formulas" text. The package author is listed as a non-existent "Working Group". |

## Most consequential findings

1. **MSR-CULT-001 (Critical for the cultural-reference claim; High floor).** Placeholder values in 60 of 72 records:
   - CAS 7732-18-5, which is water, labeled "Authentic Historical Specimen", 120 times in the source and in exported tokens.
   - A "formula" field that embeds the record's own HEX value (54 records).
   - One generic manuscript reference, copied into the exported `citation` field.
   - Arithmetic-grid coordinates that place Persian Gulf and Caspian colors in central Iran.
   - A generic UNESCO label and a static "Museum of Islamic Arts" badge.

   The studio shows these under labels meaning "authentic" and "reference historical manuscript". The data model's `unverified` flag names the wrong kind of uncertainty: these values are placeholders, not unchecked citations.
2. **MSR-I18N-001 (High).** `app/enhancements.js:8` ("Primary source documented") vs `:11` (Persian: "needs source review"). The same overclaim appears in the English hero text at `app/app.js:77-79`.
3. **MSR-A11Y-001 and MSR-A11Y-002 (High).** Both are fixable in about a day:
   - Light-theme `!important` overrides at `app/polish.css:55-57` and `:98-101`.
   - The sticky header at `app/template.html:200`.
4. **MSR-LIC-001 (High).** `packages/core/package.json` license field versus the apca-w3 terms. Six specific questions for counsel are in `SECURITY_AND_LICENSES.md`.
5. **Release integrity (Medium).**
   - The v3.0.0 tag points at a pre-CI commit, and its assets were built on Windows with CRLF line endings.
   - `pack:studio` fails on a clean checkout.
   - CI never checks that generated files are fresh.

## Strengths

- Correct, reproducible core math.
- Byte-identical rebuild of `dist/` and the HTML.
- Strong CI hardening: least privilege, SHA-pinned actions.
- `npm audit` clean; no reachable DOM sink; zero third-party requests by default.
- Honest provenance flags in the data model and the Persian README.
- Clean Persian orthography.
- Working keyboard and dialog accessibility.
- Style Dictionary 5, Tailwind 3/4 and Kotlin (desktop Compose) consume the outputs.

## Limits of this audit

- **Primary sources:** primary historical and chemical sites were blocked by network policy; mirrors were used instead. No manuscript or museum record was opened.
- **Not performed:** screen readers, Safari, Firefox, real devices and GPUs, Swift and Android builds, Figma and Tokens Studio imports, and field Core Web Vitals.
- **Legal:** no legal opinion is given.
- **Reviewers:** the lead's passes ran sequentially in one context. Three separate specialist workers and one separate skeptical reviewer also took part. The skeptic re-ran every Critical/High finding and confirmed each one, correcting three details. It also sampled the claim ledger, with 96.7% agreement on 30 random rows.

## Next steps (ordered)

1. Fix the English provenance strings.
2. Remove the placeholder evidence and the "authentic" labels.
3. Qualify the "world standard", "full WCAG 2.2 compliance" and "photometric" copy.
4. Fix light-theme contrast and the sticky header.
5. Remove the impossible dominant wavelengths.
6. Correct the author and maintainer metadata and disclose all AI tools used.
7. Add `.gitattributes`, rebuild the manifest and enforce generated-file freshness in CI.
8. Annotate the v3.0.0 release without replacing its assets.
9. Take the APCA and AGPL questions to counsel.
10. Add a three-part provenance schema (documentary / measurement / design status) with computed counts.

See `REMEDIATION_BACKLOG.md`.
