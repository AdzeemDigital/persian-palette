# A13 — Diagnostic tests and proposed regression tests

`diagnostic.test.mjs` is an isolated test file kept here. It was not added to the product suite. Baseline run (fe97cc1, Node 22.22.2): **3 GUARD tests pass and 8 DEFECT tests fail, all as expected.** Output: `diagnostic.baseline.out.txt`.

| Test | Baseline | Finding it encodes |
| --- | --- | --- |
| GUARD Oklab round trip (72 colors) | pass | A02: supports the claimed exactness |
| GUARD APCA reference and polarity | pass | A02 |
| DEFECT alef maksura normalization | fail | MSR-I18N-003 |
| DEFECT evaluateAPCA special codes shown as px | fail | MSR-API-002 |
| DEFECT dominant wavelength for non-spectral colors | fail | MSR-SCI-001 |
| DEFECT hard-coded data-quality counts | fail | MSR-DATA-002 |
| DEFECT Tailwind v4 CSS comment break-out | fail | MSR-INT-001 |
| DEFECT token path depends on English display name | fail | MSR-API-001 |
| DEFECT stale build manifest (both editions) | fail | MSR-REL-002 |
| DEFECT Persian `<title>` in the English edition | fail | MSR-I18N-002 |
| GUARD duplicate-HEX inventory | pass (1 duplicate: #FDFBF7) | DATA_QUALITY.md §1 |

## Proposed additions to the product suite (after fixes)

1. **Generated-file freshness in CI:** after `npm run build`, run `git diff --exit-code -- docs/build-manifest.json packages/core/tokens code_artifact*.html release/manshour-studio-en.html`. Round floats in token exports to a fixed precision (e.g. 12 significant digits) first, so that the check holds across operating systems and libm implementations.
2. **Doc-example value assertions:** have `verify-package.mjs` compare `console.log` output with the `// expected` comments, not only the exit code.
3. **Data schema test:** latitude in [-90, 90], longitude in [-180, 180], HEX format, and non-empty `nameFa`/`nameEn`. Fields named `*En` or English-only fields must not contain Arabic-script text; fields named `*Fa` must. Warn on duplicate HEX values.
4. **Property tests** with a seeded PRNG: `hctToHex(hexToHct(x))` round trip for in-gamut x, and `mixColors(a, b, t) === mixColors(b, a, 1 - t)` for all palette pairs.
5. **Exporter fuzz:** Persian, emoji, `*/`, quotes, newlines and Swift/Kotlin keywords in names. Assert that the output parses (CSS via postcss, JSON via JSON.parse; Swift/Kotlin via their compilers in a gated CI job).
6. **Browser smoke (Playwright, Chromium):** load both editions, assert no page errors, open each dialog, and run axe with the WCAG 2.2 AA tags. The goal is a zero-new-violation baseline, not "zero violations".
7. **Replace the `measuredSpectra === 0` assertion** with a test that the count equals the number of records whose measurement provenance is complete. The test should fail if a record claims measurement without instrument metadata.
