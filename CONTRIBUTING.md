# Contributing to Persian Palette Design System

First off, thank you for considering contributing to the **Persian Palette Design System (Manshour)**! Projects that celebrate cultural preservation, rigorous perceptual color science, and modern design engineering thrive on open collaboration.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Development Workflow

### Prerequisites

- **Node.js**: `v22.0.0` or higher (Active LTS recommended).
- **Python**: `3.10+` (optional, only needed for `npm run pack:studio`).
- **Git**: Modern version.

### Setup

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/AdzeemDigital/persian-palette.git
   cd persian-palette
   ```

2. Install dependencies for both the root project and core package:
   ```bash
   npm ci
   npm --prefix packages/core ci
   ```

3. Build and test:
   ```bash
   npm run check
   ```

### Running the Live Local Studio

Start the offline local development server:
```bash
npm start
```
Then open `http://127.0.0.1:4173` in your browser.

## Architectural Guidelines & Principles

1. **Deterministic Single Source of Truth**:
   All 72 colors and 12 palettes are defined canonically in `packages/core/src/tokens/heritage-data.ts` and computed through `packages/core/src/tokens/palettes.ts`. Never hardcode derived metrics (CAM16 HCT, APCA, Oklab) manually.
2. **Zero Runtime Dependencies for Standalone HTML**:
   The distribution artifact `code_artifact.html` is 100% self-contained. Fonts, icons, and Three.js runtime are bundled inline via `scripts/build-app.mjs`.
3. **W3C DTCG 2025.10 Specification Compliance**:
   All exported design tokens must strictly adhere to the W3C Design Tokens Community Group specification. Token transformations are verified against Style Dictionary 5.
4. **Bilingual & BiDi Integrity**:
   Persian names must be correctly normalized (handling both Persian and Arabic `ی`/`ك` variations). UI controls must support both LTR (English) and RTL (Persian) dynamically.
5. **No Silent Fallbacks**:
   Looking up an unknown color or query should fail loudly and deterministically, rather than silently falling back to the first color.

## Submitting Pull Requests

1. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: ...` for new features
   - `fix: ...` for bug fixes
   - `docs: ...` for documentation
   - `test: ...` for test additions
3. Ensure all tests pass:
   ```bash
   npm run check
   ```
4. Push and open a Pull Request with a clear description and screenshot if UI-related.

Thank you for helping preserve and modernize authentic Persian visual heritage!
