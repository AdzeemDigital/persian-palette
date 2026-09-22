# Contributing

Persian Palette welcomes reproducible fixes, working examples, accessibility feedback and sourced corrections to cultural annotations.

## Setup

Use Node.js 22 or 24. Python 3 is needed only for the source ZIP.

```sh
git clone https://github.com/AdzeemDigital/persian-palette.git
cd persian-palette
npm ci
npm --prefix packages/core ci
npm run check
npm start
```

Edit app/ and packages/core/src; HTML and dist/ are generated.

## Before a pull request

```sh
npm run check
npm run pack:core
npm run verify:package
```

CI repeats these checks on Ubuntu/Windows with Node.js 22/24. Documentation snippets marked test:esm are executed against the installed tarball. Add a focused regression test for behavior changes.

Use a feature branch and describe the problem, change and validation. For visual work, include screenshots and identify the browser/device actually tested. Static checks do not establish a completed accessibility audit.

## Contribution rules

- Derive metrics from HEX; avoid manually duplicated HCT/APCA/Oklab values.
- Preserve source annotations and unresolved conflicts. Cultural/material/geographic corrections need traceable citations.
- Label simulations and digital interpolation accurately.
- Preserve Persian/Arabic normalization, RTL/LTR behavior and explicit lookup errors.
- Keep DTCG and legacy Tokens Studio contracts distinct.
- Match example properties, subpaths and filenames to the actual package API.

Use [issues](https://github.com/AdzeemDigital/persian-palette/issues) and [pull requests](https://github.com/AdzeemDigital/persian-palette/pulls). See the [roadmap](docs/ROADMAP.md), [code of conduct](CODE_OF_CONDUCT.md) and [security policy](SECURITY.md).
