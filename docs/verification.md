# Verification scope

Reviewed on 2026-09-22 for the OSS-readiness changes. Local environment: Windows, Node.js 24.16.0, npm 11.13.0.

## Executed locally

- npm run check: successful build of both HTML editions; 18 core tests and 8 integration tests passed.
- npm run pack:core: successful build, core tests and tarball generation.
- npm run verify:package: installed the actual tarball in a fresh consumer; checked ESM, CommonJS, Persian lookup, 72 exported tokens and package subpaths.
- Strict TypeScript consumers in .mts and .cts: passed with NodeNext resolution and skipLibCheck=false.
- Four runnable examples from README.md, QUICKSTART.md and API_REFERENCE.md: executed against the installed tarball.
- CI YAML: parsed locally; four matrix entries and contents:read permission verified.

The installed-package check is now reproducible rather than a one-off manual claim. It is separate from the 26 Node test-runner tests.

## Public CI

[CI runs](https://github.com/AdzeemDigital/persian-palette/actions/workflows/ci.yml) identify the exact commit, environment, result and downloadable artifact. The workflow targets Ubuntu/Windows and Node.js 22/24; only a completed successful run establishes that environment's result. Check the run for the branch or commit you intend to use.

## What the tests establish

Core checks cover lookup errors and normalization, reference APCA and HCT cases, tonal accuracy, selected Material role contrast pairs, Oklab conversion and interpolation, immutable data, exporter structure and explicit provenance.

Integration checks consume all 72 DTCG tokens with Style Dictionary 5, parse generated scripts, compare the pure browser color bundle with the package, inspect static IDs/handlers, check contrast optimization and exercise the local HTTP server.

Only the pure color library and numerical helpers run in Node VM. UI checks in this suite are static source checks.

## What has not been independently verified here

Earlier project notes described manual browser checks and screenshots. This review does not reproduce those sessions and does not turn those notes into a zero-error or accessibility-certification claim. A live local-app browser session was not performed in this review. Camera, clipboard, WebGL, RTL layout and screen-reader behavior need repeatable browser/device tests.

Swift/Kotlin output is checked structurally; native compilation was not run. Figma/Tokens Studio import was not executed in target tools. The Figma file is a project interchange schema, not a universally accepted plugin format.

All 72 heritage annotations remain unverified, measuredSpectra is zero and 11 colors have coordinate conflicts. These are recorded in [data-quality.json](../packages/core/tokens/data-quality.json). APCA's Barlow lookup does not certify Persian-font readability or full WCAG conformance.

## Reproduce

```sh
npm ci
npm --prefix packages/core ci
npm run check
npm run pack:core
npm run verify:package
```

Consumer folders are created under ignored .tmp/. They are not shipped or uploaded by CI. [build-manifest.json](build-manifest.json) records the generated HTML hashes. Release assets remain tied to their original release; the CI artifact identifies its own commit.

See [third-party notices](../THIRD_PARTY_NOTICES.md) for dependency terms.
