# W3: Sensitive details (restricted)

This file is referenced from `W3-security-licenses-interop-release.md`. I found **no issue that an external attacker can exploit against the shipped HTML, the npm package defaults or CI at fe97cc1**. The items below are low-impact. They are separated only because they include concrete payloads or server-behavior specifics. Do not paste them into public issues verbatim.

## S1. CSS injection through `exportTailwindV4CSS` (relates to MSR-INT-001)

- Precondition: a consumer passes caller-controlled palette definitions to the exporter. The built-in data is not affected.
- Palette or color `nameFa` is written inside `/* … */` without escaping (`packages/core/src/exporters/tailwind.ts:30,34`). A value containing `*/` closes the comment. A value with a newline and `}` leaves the `@theme` block and can add top-level rules such as `@import url(...)`.
- `palette.id` and `color.hex` are written raw into custom-property names and values. For example, the hex `red; } body { x: y` is emitted verbatim.
- `exportTailwindTheme` passes non-hex values through into the Tailwind v3 config.
- Payloads and output: `evidence/W3-security/exporter-injection-probe.log` (cases `cssCommentBreakout`, `newlineAndBrace`) and `exporter-reserved-key-probe.log` (last two lines).
- Fix: validate ids and hex at the exporter boundary, strip or escape `*/` and line breaks in comments, or drop the comments.

## S2. Local development server (relates to MSR-SEC-001)

- `scripts/serve.mjs` does not validate `Host`. A page using DNS rebinding could read what the server exposes: `code_artifact.html`, `docs/*.{json,md,…}` (top level only), `packages/core/tokens/*` and `release/*.tgz`. All of these are public repository content, so the confidentiality impact is none today. It would matter only if sensitive files were ever placed in `docs/`.
- The containment check is lexical (`path.resolve` + `startsWith`), and `fs.readFile` follows symlinks. A symlink committed under `docs/` or `packages/core/tokens/` that matches the name regex would expose its target. I verified this only in a private copy, with a symlink I created and then removed. The committed tree contains no symlinks.
- The regex also admits dotfile names directly under `docs/` and `packages/core/tokens/` (e.g. `docs/.env`). None exist.
- Fix: check `Host` against `127.0.0.1:<port>`/`localhost:<port>`, use `fs.realpath` before the prefix check, and reject names that start with a dot.
