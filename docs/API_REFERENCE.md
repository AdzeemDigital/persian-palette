# Core API reference

This guide describes v3.0.0. [Generated declarations](../packages/core/dist/index.d.ts) are the type reference.

## Lookup

| Method | Result |
| --- | --- |
| PersianEngine.getColor(paletteId, query) | PersianColorToken; throws for unknown palettes and empty, unknown or ambiguous queries |
| PersianEngine.getToken(paletteId, query) | Alias of getColor |
| PersianEngine.getPalette(paletteId) | PersianPaletteTokenGroup or undefined |
| PersianEngine.getAllPalettes() | Record keyed by palette ID |
| PersianEngine.getAllColors() | Array of all 72 tokens |

Queries accept IDs, English names/slugs, Persian names, equivalent Persian/Arabic letters and unambiguous partial names. **HEX lookup is not supported by getColor.** getPalettes() is not an exported method.

Tokens have id, hex, nameFa, nameEn, evidence and DTCG fields. $value is an sRGB object. Palette token groups have a tokens record. ALL_PALETTES_LIST and PERSIAN_PALETTES expose deeply frozen canonical definitions.

<!-- test:esm -->
```js
import { PersianEngine } from '@persian-palette/core';
const color = PersianEngine.getColor('isfahan-tiles', 'ultramarine');
console.log(color.hex, color.nameEn, color.$value.colorSpace);
console.log(Object.keys(PersianEngine.getAllPalettes()).length); // 12
console.log(PersianEngine.getAllColors().length); // 72
```

## Calculations

Color arguments accept opaque #RGB or #RRGGBB; invalid values throw.

| Function | Contract |
| --- | --- |
| calculateAPCA(textHex, backgroundHex) | Signed Lc, negative for light text on darker backgrounds |
| getApcaFontSizes(lc) | Reference Barlow lookup for weights 100–900; values >=400 are special codes |
| mixColors(firstHex, secondHex, ratio=0.5) | Oklab interpolation; finite ratio in [0,1] is the second color's weight |
| generatePigmentGradient(firstHex, secondHex, steps=5) | Digital gradient; integer steps 1–1000 |
| hexToHct(hex) | hue, chroma, tone from reference HCT/CAM16 |
| hctToHex(hue, chroma, tone) | Finite values, nonnegative chroma, tone in [0,100] |
| generateTonalPalette(hex, tones?) | Record from tone to HEX |
| generateM3DynamicScheme(hex) | seedHex, hct, light, dark, tonalScale and method |

mixHistoricalPigments is a compatibility alias for digital interpolation. Mixed results contain ratio, hex, oklab and string-coercion helpers.

Light/dark schemes each have 24 roles. Default tones are 0,10,20,30,40,50,60,70,80,90,95,98,100. There is no tonalPalette.primary field. APCA is not a certification; spectral functions are illustrative.

## Exporters

These accept an optional array of PersianPaletteDefinition values; use ALL_PALETTES_LIST or a subset.

| Export | Result |
| --- | --- |
| exportW3CTokens / exportToW3CTokens | DTCG 2025.10 document with sRGB objects and namespaced metadata |
| exportTokensStudio | Separate legacy HEX-token JSON |
| exportFigmaVariables | Project interchange schema, one Default mode |
| exportTailwindTheme | Complete theme.extend.colors.persian configuration fragment |
| exportTailwindV4CSS | CSS @theme with --color-persian-* variables |
| exportSwiftUI | Color extension with built-in sRGB initializers |
| exportMaterialKotlin | Material light/dark ColorScheme declarations |

Package subpaths under @persian-palette/core: /tokens, /tokens/figma, /tokens/style-dictionary, /tokens/tailwind and /tokens/studio. See [working integrations](QUICKSTART.md).

getDataQualityReport returns counts and unresolved conflicts. evidence.provenance distinguishes computed metrics, unverified historical annotations and illustrative spectra. Retained citations are not independent validation.
