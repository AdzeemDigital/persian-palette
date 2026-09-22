# @persian-palette/core 3.0.0

Persian-inspired sRGB palettes with reference HCT/CAM16, APCA-W3, DTCG 2025.10 tokens, and explicit evidence provenance. Requires Node.js 22+.

## Install this local release

From the project root:

```sh
npm install ./release/persian-palette-core-3.0.0.tgz
```

Public npm publication is not implied. Both ESM imports and CommonJS require are provided, with conditional TypeScript declarations.

```ts
import {
  PersianEngine, calculateAPCA, mixColors,
  generateM3DynamicScheme, exportW3CTokens
} from '@persian-palette/core';

const turquoise = PersianEngine.getColor('isfahan-tiles', 'فیروزه‌ای اصیل');
console.log(turquoise.hex); // #30D5C8
console.log(turquoise.$value.colorSpace); // srgb
console.log(turquoise.evidence.provenance.heritageStatus); // unverified

calculateAPCA('#120A8F', '#F4F1DE'); // 90.67997329619453
mixColors('#120A8F', '#F4C430', 0.4).hex; // #5C6888
// ratio is the SECOND color's weight: 60% first + 40% second.

const theme = generateM3DynamicScheme('#120A8F');
console.log(theme.light.primary, theme.dark.primary);
const document = exportW3CTokens();
console.log(document.$extensions['org.persian-palette'].version); // 3.0.0
```

```js
const { PersianEngine } = require('@persian-palette/core');
console.log(PersianEngine.getColor('isfahan-tiles', 'ultramarine').hex);
```

## Query and input contract

Queries accept IDs, normalized English names/slugs, Persian names, Arabic ي/ك variants and unambiguous partial names. Empty, unknown and ambiguous color queries throw. Unknown palettes throw in getColor; getPalette returns undefined. There is no implicit first-color fallback.

Colors accept opaque #RGB or #RRGGBB. Invalid values throw. Mixing ratios must be finite and in [0,1]. Canonical palette/evidence data is deeply frozen. Returned token wrappers may be modified without altering the canonical data.

## Export contracts

- exportW3CTokens / exportToW3CTokens: DTCG 2025.10 color objects with srgb components, hex fallback and namespaced extensions. All 72 tokens have been consumed by Style Dictionary 5 in integration tests.
- exportTokensStudio: separately named legacy hex-token format.
- exportFigmaVariables: project interchange schema, consumed by the accompanying Figma plugin-context import script; it is not a Figma REST request or a universally importable plugin format.
- exportTailwindTheme / exportTailwindV4CSS: consistent 100–600 palette slots. These slots identify curated colors, not ordered lightness tones.
- exportSwiftUI: built-in sRGB Color initializers, no custom hex helper required.
- exportMaterialKotlin: light and dark Material Tonal Spot roles from the shared reference scheme.

## Methods and limits

HCT and Material Tonal Spot use @material/material-color-utilities 0.3.0. APCA uses apca-w3 0.1.9. Oklab conversions follow the published matrices. All metrics are derived from digital sRGB.

Heritage, chemistry and geographical annotations remain unverified source material. Conflicting coordinates are preserved in evidence.provenance.conflicts. Spectral curves are illustrative simulations and mixColors is perceptual interpolation, not physical pigment mixing. The compatibility alias mixHistoricalPigments remains available with this same digital meaning.

getApcaFontSizes exposes the reference Barlow lookup. Values >=400 are special lookup codes, not ordinary pixel sizes. Reading order is text color, then background color; negative Lc means light text on a darker background.

Version 3 intentionally changes the DTCG $value contract and lookup failure behavior. See the project migration guide. The project's MIT license does not relicense bundled third-party code; see THIRD_PARTY_NOTICES.md.
