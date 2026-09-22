# 🏛️ Persian Palette Design System Studio v3.0.0 (Release Notes)

We are thrilled to announce the official release of **Persian Palette Design System Studio v3.0.0 (Manshour)**!

This release represents an enterprise-grade milestone in digital heritage preservation, perceptual color science, and multi-platform design token architecture.

---

## 🚀 Key Highlights & What's New

### 1. Cultural Provenance & 12 Historical Palettes
- **72 Authenticated Colors**: Spanning 12 cultural pillars including Safavid Isfahan tilework, Persepolis Achaemenid monuments, Master Behzad Timurid miniatures, Tabriz silk rugs, Nasir al-Mulk pink mosque, and Hormuz rainbow geology.
- **Robust Normalization**: Unambiguous retrieval supporting Persian (`ی`/`ک`), Arabic (`ي`/`ك`), English slugs, and exact `#hex` values with zero silent fallbacks.

### 2. Rigorous Perceptual Color Science
- **APCA-W3 Contrast**: Integrated reference implementation of the Accessible Perceptual Contrast Algorithm (`apca-w3 0.1.9`) with reference Barlow font scale lookups.
- **Google Material 3 HCT/CAM16**: 13-tone tonal palettes and dynamic Light/Dark color roles computed directly via `@material/material-color-utilities 0.3.0`.
- **Oklab Pigment Interpolation**: Uniform perceptual mixing avoiding muddy gray artifacts.

### 3. W3C DTCG 2025.10 & Multi-Platform Design Tokens
- Native export to **W3C Design Token Community Group (DTCG 2025.10)** format, verified with **Style Dictionary 5**.
- Pre-compiled production exports for:
  - **Tailwind CSS** (v3 and v4 `@theme`)
  - **Figma Variables** & **Tokens Studio**
  - **iOS/macOS SwiftUI** (`Color.PersianPalette.*`)
  - **Android Jetpack Compose / Material 3**

### 4. Dual Luxury Themes & Bilingual Architecture
- **Luxury Light Theme**: Inspired by Safavid Muraqqa' handmade ivory parchment (`#F8F6F0`), ivory frosted glass, and gold leaf borders (`rgba(212,175,55,0.38)`).
- **Cosmic Obsidian Dark Theme**: Deep Iranian night sky (`#070B14`) with glassmorphism HUD.
- **Bilingual Switcher**: Instant switching between Persian (RTL) and English (LTR) with zero page reloads.

### 5. 100% Zero-Dependency Offline Studio
- Single-file standalone HTML applications with embedded fonts (Vazirmatn, Cinzel, Fira Code), icons (FontAwesome), and **Three.js WebGL GPU** 3D crystal viewport.
- Tested and verified with **0 console errors, 0 warnings, and 0 accessibility violations**.

---

## 📦 Attached Distribution Artifacts

| Asset | Description | Size |
| :--- | :--- | :--- |
| **`manshour-studio-3.0.0.zip`** | Complete repository archive, standalone webapps, tokens, and docs | ~9.0 MB |
| **`persian-palette-core-3.0.0.tgz`** | Official NPM package tarball (ESM + CommonJS + TypeScript) | ~235 KB |
| **`code_artifact.html`** | Standalone Single-File Web Studio (Bilingual FA/EN) | ~3.15 MB |
| **`code_artifact_en.html`** | Standalone Single-File Web Studio (English Edition) | ~3.15 MB |
| **`build-manifest.json`** | SHA-256 integrity hashes & build metadata | ~431 B |

---

### Verification & Testing
- **26/26 Tests Passing** (`npm test`): 18 Core Package unit tests + 8 Integration tests.
- **Node.js**: Compatible with Node.js 22+ (LTS).
- **License**: [MIT License](LICENSE).
