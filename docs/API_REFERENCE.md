# API Reference: `@persian-palette/core`

Complete documentation for the `@persian-palette/core` library API.

---

## Engine & Retrieval (`PersianEngine`)

### `PersianEngine.getPalettes()`
Returns an array of all 12 canonical palettes.

```typescript
function getPalettes(): ReadonlyArray<PersianPalette>
```

### `PersianEngine.getPalette(idOrSlug: string)`
Retrieves a palette by ID or slug. Returns `undefined` if not found.

```typescript
function getPalette(idOrSlug: string): PersianPalette | undefined
```

### `PersianEngine.getColor(paletteId: string, query: string)`
Searches and retrieves a specific color from a palette.
- **`query`**: Accepts color ID, English name, Persian name, Arabic normalized variants (`ی` / `ي`, `ک` / `ك`), or hex code.
- Throws an explicit error if the color or palette is not found or if the query is ambiguous.

```typescript
function getColor(paletteId: string, query: string): PersianColorToken
```

**Example:**
```typescript
import { PersianEngine } from '@persian-palette/core';

const color1 = PersianEngine.getColor('isfahan-tiles', 'لاجوردی');
const color2 = PersianEngine.getColor('isfahan-tiles', 'ultramarine');
const color3 = PersianEngine.getColor('isfahan-tiles', '#120A8F');
// All three resolve to the exact same canonical token:
console.log(color1.hex); // #120A8F
```

---

## Perceptual Color Science & Contrast

### `calculateAPCA(textColor: string, bgColor: string)`
Calculates the **Accessible Perceptual Contrast Algorithm (APCA-W3)** lightness contrast score (`Lc`).
- Returns a floating point number (typically from `-108` to `+106`).
- Positive values indicate dark text on light background.
- Negative values indicate light text on dark background.

```typescript
function calculateAPCA(textColor: string, bgColor: string): number
```

### `mixColors(color1: string, color2: string, ratio?: number)`
Performs digital interpolation in perceptual **Oklab** color space.
- **`ratio`**: Number in `[0, 1]`. Represents the weight of `color2` (e.g., `0.5` = 50% / 50%).
- Returns an object containing the interpolated `#hex` and computed Oklab coordinates.

```typescript
function mixColors(color1: string, color2: string, ratio: number = 0.5): {
  hex: string;
  oklab: { L: number; a: number; b: number };
}
```

### `generateM3DynamicScheme(sourceHex: string)`
Generates Google Material Design 3 (M3) tonal palettes and light/dark color roles from a seed color using **CAM16 HCT**.

```typescript
function generateM3DynamicScheme(sourceHex: string): {
  light: MaterialSchemeRoles;
  dark: MaterialSchemeRoles;
  tonalPalette: {
    primary: Record<number, string>; // Tones: 0, 10, 20, ..., 90, 95, 99, 100
  };
}
```

---

## Token Export Functions

| Function | Output Format | Description |
| :--- | :--- | :--- |
| `exportW3CTokens()` | W3C DTCG 2025.10 | Standard W3C Design Tokens JSON format with sRGB components and namespaced extensions. |
| `exportTokensStudio()` | Tokens Studio JSON | Legacy hex tokens format for Tokens Studio Figma plugin. |
| `exportFigmaVariables()` | Figma Interchange | Structured JSON mapping to Figma Variable collections and modes. |
| `exportTailwindTheme()` | JS Object | Tailwind CSS theme extensions with 100–600 scale color slots. |
| `exportTailwindV4CSS()` | CSS string | Tailwind CSS v4 `@theme` format. |
| `exportSwiftUI()` | Swift string | Native SwiftUI `Color` extensions with sRGB initializer. |
| `exportMaterialKotlin()` | Kotlin string | Jetpack Compose `androidx.compose.ui.graphics.Color` tokens with Light and Dark schemes. |
