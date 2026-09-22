<div align="center">

# 🏛️ Persian Palette Design System (Manshour)
### Enterprise-Grade Heritage Color System, Spectral Physics & Multi-Platform Design Tokens

[![Version 3.0.0](https://img.shields.io/badge/version-3.0.0-6366f1.svg?style=for-the-badge&logo=semver&logoColor=white)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg?style=for-the-badge)](LICENSE)
[![TypeScript 5.7](https://img.shields.io/badge/TypeScript-5.7-3178c6.svg?style=for-the-badge&logo=typescript&logoColor=white)](packages/core)
[![W3C DTCG](https://img.shields.io/badge/W3C_DTCG-2025.10-8b5cf6.svg?style=for-the-badge)](https://tr.designtokens.org/format/)
[![APCA Contrast](https://img.shields.io/badge/APCA--W3-0.1.9-06b6d4.svg?style=for-the-badge)](https://github.com/Myndex/apca-w3)
[![Google HCT](https://img.shields.io/badge/Google_HCT-CAM16-f59e0b.svg?style=for-the-badge)](https://github.com/material-foundation/material-color-utilities)
[![Zero Runtime Deps](https://img.shields.io/badge/Runtime_Deps-0-emerald.svg?style=for-the-badge)](code_artifact.html)

[🇮🇷 مستندات فارسی (Persian)](README.fa.md) • [🚀 Quick Start](docs/QUICKSTART.md) • [📚 API Reference](docs/API_REFERENCE.md) • [🎨 Design System](docs/DESIGN_SYSTEM.md) • [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## 🌟 Visual Showcase

Persian Palette Studio provides a luxury dual-theme experience designed to showcase historical colors under modern perceptual science and architectural lighting:

<div align="center">

### Luxury Light Theme — Inspired by Safavid Muraqqa' Ivory Parchment (`#F8F6F0`)
![Persian Palette Studio - Luxury Light Theme](docs/shot_v3_light_theme.png)

### Cosmic Obsidian Theme — Deep Iranian Night Sky (`#070B14`)
![Persian Palette Studio - Obsidian Dark Theme](docs/shot_v3_dark_theme.png)

</div>

---

## 💎 What is Persian Palette Design System?

**Persian Palette Design System (Manshour)** bridges millennia of Persian visual civilization with modern software engineering and perceptual color science. 

It digitizes **12 curated historical palettes and 72 authentic colors** — from the cobalt and turquoise tilework of Isfahan to the scarlet clays of Persepolis and illuminated miniatures of Master Behzad — backed by **W3C Design Token (DTCG 2025.10)** standards, **Google Material 3 CAM16 HCT**, and **APCA-W3** perceptual contrast metrics.

### 5 Architectural Pillars

| Pillar | Engineering Foundation | Key Capabilities |
| :--- | :--- | :--- |
| 🏛️ **Cultural Provenance** | Historical & Geographic Mapping | 12 cultural eras, 72 authenticated pigment formulas, mineral archetypes, and geo-provenance. |
| 🔬 **Spectral Physics** | Perceptual Color Science | True digital mixing in **Oklab**, Google M3 **CAM16 HCT** 13-tone scales, and **APCA-W3** lightness contrast. |
| ⚡ **Universal Tokens** | W3C DTCG 2025.10 Standard | Instant compilation to **Style Dictionary 5**, **Tailwind CSS (v3/v4)**, **SwiftUI**, **Compose**, and **Figma**. |
| 🎨 **Dual Luxury Themes** | Dynamic Multi-Theme Engine | Safavid Ivory Paper (`#F8F6F0`) with gold leaf borders + Cosmic Obsidian (`#070B14`) with glassmorphism. |
| 🚀 **Zero-Dependency Studio** | Standalone Single-File Delivery | 100% offline self-contained HTML (`code_artifact.html`) featuring embedded **Three.js WebGL GPU**, AR simulation, and audio. |

---

## ⚡ Quick Start

### 1. Launch the Interactive Studio Locally

Clone the repository and start the offline development server:

```bash
git clone https://github.com/AdzeemDigital/persian-palette.git
cd persian-palette
npm ci
npm start
```

Open **`http://127.0.0.1:4173`** in your browser.

> [!TIP]
> Both [`code_artifact.html`](code_artifact.html) (bilingual) and [`code_artifact_en.html`](code_artifact_en.html) (English standalone) can be opened directly as standalone local files in any browser with **zero installation, zero internet, and zero build steps required**!

---

### 2. NPM Package Integration (`@persian-palette/core`)

Install the core package from the local release tarball:

```bash
npm install ./release/persian-palette-core-3.0.0.tgz
```

#### TypeScript / JavaScript Usage

```typescript
import { 
  PersianEngine, 
  calculateAPCA, 
  generateM3DynamicScheme, 
  mixColors 
} from '@persian-palette/core';

// 1. Retrieve authentic colors with robust normalization
const turquoise = PersianEngine.getColor('isfahan-tiles', 'فیروزه‌ای اصیل');
console.log(turquoise.name); // "Persian Turquoise"
console.log(turquoise.hex);  // "#30D5C8"

// 2. Measure Accessible Perceptual Contrast (APCA-W3)
const contrast = calculateAPCA('#120A8F', '#F4F1DE');
console.log(`APCA Score: ${contrast.toFixed(1)} Lc`);

// 3. Generate 13 Material 3 tonal steps (Google CAM16 HCT)
const scheme = generateM3DynamicScheme(turquoise.hex);
console.log('M3 Light Primary:', scheme.light.primary);
console.log('M3 Dark Primary:', scheme.dark.primary);

// 4. Perceptual digital pigment mixing in Oklab space
const blend = mixColors('#120A8F', '#F4C430', 0.5);
console.log('Blended Oklab Hex:', blend.hex);
```

---

### 3. Tailwind CSS Integration

#### Tailwind CSS v3 (`tailwind.config.js`)
```javascript
const { exportTailwindTheme } = require('@persian-palette/core');

module.exports = {
  theme: {
    extend: {
      colors: exportTailwindTheme()
    }
  }
};
```

#### Tailwind CSS v4 (`theme.css`)
```css
@import "tailwindcss";
@import "@persian-palette/core/tokens/tailwind-v4.css";
```

Classes available immediately:
`bg-isfahan-tiles-100`, `text-persepolis-gold-300`, `border-behzad-miniature-500`

---

## 🎨 The 12 Canonical Palettes (72 Colors)

| Palette | Historical / Cultural Origin | Signature Colors |
| :--- | :--- | :--- |
| **Safavid Tilework of Isfahan** | Shah Mosque & Sheikh Lotfollah (17th c.) | Ultramarine Cobalt, Persian Turquoise, Emerald Zangari |
| **Achaemenid Majesty & Persepolis** | Apadana Palace & Darius Grand Hall (518 BC) | Persepolis Red, Imperial Gold, Shush Marble White |
| **Master Behzad Persian Miniature** | Herat Timurid School of Art (15th c.) | Cinnabar Scarlet, Malachite Green, Lapis Lazuli |
| **Tabriz Silk Rug Masterpieces** | UNESCO Master Silk Weavers (16th c.) | Madder Red, Raw Silk Cream, Indigo Night |
| **Nasir al-Mulk Pink Mosque** | Shiraz Stained Glass & Kaleidoscopic Light | Shiraz Rose Pink, Violet Prism, Amber Sunlight |
| **Turquoise & Yazd Windcatchers** | Desert Adobe & Historical Windcatchers | Adobe Sun-Dried Earth, Neyshabur Turquoise, Desert Ochre |
| **Royal Shiraz Illumination (Tazhib)** | Quranic Gold Illuminations & Floral Borders | 24K Leaf Gold, Azure Celestial, Lacquer Red |
| **Hormuz Rainbow Island** | Volcanic Ocher & Red Soil Beaches | Gelak Red Soil, Saffron Salt, Silver Iron Sand |
| **Sasanian Imperial Silk** | Taq-e Bostan Royal Robes & Metalwork | Tyrian Imperial Purple, Sasanian Silver, Ruby Red |
| **Damavand Alborz Summit** | Mythological Peak & Alborz Range | Glacial Ice Blue, Basalt Gray, Alpine Flora Green |
| **Kashan Traditional Carpet** | Mohtasham Kashan Master Workshops | Pomegranate Deep Crimson, Walnut Husk Brown, Pistachio |
| **Qajar Stained Glass & Mirrors** | Golestan Palace & Mirrorwork Halls | Stained Ruby, Amber Stained Glass, Diamond Mirror |

*Complete data table with hex values, RGB, APCA, and HCT coordinates is documented in [`packages/core/tokens/data-quality.json`](packages/core/tokens/data-quality.json).*

---

## 🛠️ Multi-Platform Design Token Exports

Pre-compiled production tokens ready to drop into any stack:

```
packages/core/tokens/
├── dtcg.tokens.json          # W3C DTCG 2025.10 Standard Design Tokens
├── tokens-studio.json        # Tokens Studio for Figma (JSON Schema)
├── figma-variables.json      # Figma Variables Native Collection Format
├── tailwind-v4.css           # Tailwind CSS v4 @theme CSS Variables
├── persian-palette.swift     # Native iOS/macOS SwiftUI Color Extensions
├── persian-palette.kt        # Android Jetpack Compose Color Palette
└── data-quality.json         # Automated Provenance & Contrast Verification
```

---

## 🧪 Testing & Verification

The suite includes **26 automated unit & integration tests**, verified against Style Dictionary 5, live Node VM sandboxes, and headless Chrome DevTools:

```bash
# Run complete test suite & build check
npm run check
```

```
✔ Persian names and Arabic variants resolve correctly
✔ All 72 IDs, full English and Persian names resolve uniquely
✔ APCA independently pinned golden cases and polarity
✔ HCT red golden coordinates use CAM16
✔ Style Dictionary 5 actually consumes all DTCG colors and formats CSS
✔ Standalone HTML has zero external runtime script, style or font requests
✔ Static HTML IDs are unique and all literal UI targets exist
✔ Console errors & accessibility violations in DevTools: 0

Tests: 26 passed, 0 failed, 100% pass rate
```

---

## 📦 Project Structure

```
├── app/                      # Web Studio Frontend Source
│   ├── template.html         # Semantic HTML5 template (i18n ready)
│   ├── app.js                # Studio state machine & reactive interactions
│   ├── enhancements.js       # Focus traps, WebGL lifecycle, and audio engine
│   └── polish.css            # Responsive layout & luxury Safavid light theme
├── packages/
│   └── core/                 # @persian-palette/core TypeScript NPM Package
│       ├── src/              # Mathematical algorithms (HCT, APCA, Oklab)
│       └── tokens/           # Generated DTCG, Figma, SwiftUI, and Kotlin files
├── release/                  # Production build archives & tarballs
│   ├── manshour-studio-3.0.0.zip
│   └── persian-palette-core-3.0.0.tgz
├── docs/                     # Technical specifications & guides
├── .github/                  # CI/CD Workflows & Issue templates
├── code_artifact.html        # Standalone self-contained Web Studio (Bilingual)
└── code_artifact_en.html     # Standalone self-contained Web Studio (English)
```

---

## 🤝 Contributing

We welcome contributions from designers, historians, and developers! Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before submitting pull requests.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
Historical names and cultural descriptions are provided for educational and design purposes.

---

<div align="center">
  <b>Built with reverence for Persian cultural heritage and modern software craftsmanship.</b><br>
  <sub>Maintained by <a href="https://github.com/AdzeemDigital">Adzeem Digital</a></sub>
</div>
