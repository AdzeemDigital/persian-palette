# Persian Palette Design System Specification

## 1. Cultural Taxonomy & 12 Historical Pillars

The Persian Palette Design System (Manshour) digitizes 72 authentic historical pigments across 12 cultural eras, monuments, crafts, and natural wonders of Iran:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     12 CANONICAL PERSIAN COLOR PALETTES                     │
├────────────────────────────────┬────────────────────────────────────────────┤
│ Category                       │ Palettes                                   │
├────────────────────────────────┼────────────────────────────────────────────┤
│ 1. Architecture & Tiles        │ • Safavid Tilework of Isfahan              │
│                                │ • Nasir al-Mulk Pink Mosque                │
│                                │ • Turquoise & Yazd Desert Windcatchers     │
├────────────────────────────────┼────────────────────────────────────────────┤
│ 2. History & Civilization      │ • Achaemenid Majesty & Persepolis          │
│                                │ • Sasanian Imperial Silk & Metalwork       │
│                                │ • Ctesiphon & Imperial Archway             │
├────────────────────────────────┼────────────────────────────────────────────┤
│ 3. Miniature & Arts            │ • Master Behzad Persian Miniature          │
│                                │ • Royal Shiraz Illumination (Tazhib)       │
│                                │ • Qajar Glassware & Stained Glass          │
├────────────────────────────────┼────────────────────────────────────────────┤
│ 4. Rugs & Textiles             │ • Tabriz Silk Rug Masterpieces             │
│                                │ • Kashan Traditional Crimson Carpet        │
├────────────────────────────────┼────────────────────────────────────────────┤
│ 5. Nature & Climate            │ • Hormuz Island Rainbow Geology            │
│                                │ • Damavand Alborz Summit & Snowscapes      │
└────────────────────────────────┴────────────────────────────────────────────┘
```

---

## 2. Color Spaces & Perceptual Science

### HCT (Hue, Chroma, Tone) via CAM16
Google's Material Design 3 model models color perception:
- **Tone ($L^*$)**: Linear measure of human lightness perception ($0 = \text{black}, 100 = \text{white}$).
- **Chroma**: Perceptual colorfulness, avoiding out-of-gamut distortions.
- **Hue**: Polar angle in CAM16 color appearance model.

### APCA-W3 (Accessible Perceptual Contrast Algorithm)
Unlike legacy WCAG 2.1 contrast formulas which fail on dark-mode text and saturated chromatic pairs, APCA models:
- Spatial frequency and font weight.
- Polarity (dark text on light vs light text on dark).
- Local luminance adaptation.

### Oklab Digital Mixing
Digital interpolation between pigment colors occurs in the **Oklab** color space developed by Björn Ottosson, ensuring uniform perceived transitions without the ugly gray/muddy artifacts of standard linear sRGB interpolation.

---

## 3. Dual Theme Design Tokens

### Cosmic Obsidian (Dark Mode)
- **Background**: `#070B14` (Deep Night Sky)
- **Surface**: `rgba(15, 23, 42, 0.75)` with 20px Gaussian blur
- **Accents**: Neon Turquoise (`#30D5C8`), Imperial Gold (`#D4AF37`)

### Safavid Ivory Parchment (Luxury Light Mode)
- **Background**: `#F8F6F0` (Handmade Muraqqa' Ivory Paper)
- **Surface**: `rgba(255, 255, 255, 0.88)` with golden borders (`rgba(212, 175, 55, 0.38)`)
- **Accents**: Deep Cobalt (`#120A8F`), Pomegranate Crimson (`#C70039`)
