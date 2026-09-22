# Color methods and evidence

Persian Palette contains curated sRGB design colors inspired by Persian cultural references. It is not a pigment-authentication database.

## Evidence

The [data-quality report](../packages/core/tokens/data-quality.json) records 12 palettes, 72 colors, 72 unverified heritage annotations, zero measured spectra and 11 colors with conflicting coordinates.

heritage-data.ts preserves source annotations. palettes.ts derives digital metrics from HEX, harmonizes aliases and retains alternatives in evidence.provenance.conflicts. A selected display coordinate is not proof of geographic correctness.

Corrections need a traceable source identifying exactly which claim it supports. Documentary evidence and physical measurements must remain distinguishable.

## Methods

- HCT/CAM16, CIELAB and Material Tonal Spot use Material Color Utilities 0.3.0. Tone is CIELAB L*, not linear physical luminance.
- APCA uses apca-w3 0.1.9 and preserves text/background polarity. Its reference font lookup is based on Barlow; Persian type needs separate evaluation.
- Oklab follows published transformation matrices. Mixing interpolates digital coordinates and maps back to sRGB; it does not simulate subtractive pigment chemistry or guarantee a particular appearance.
- Spectral curves are Gaussian illustrations using legacy parameters. No spectrophotometer measurements are present.

See [dependencies](../packages/core/package.json), [math source](../packages/core/src/math) and [licenses](../THIRD_PARTY_NOTICES.md).

## Palette inventory

The authoritative IDs/names are in ALL_PALETTES_LIST, with six colors per palette:

```js
import { ALL_PALETTES_LIST } from '@persian-palette/core';
console.table(ALL_PALETTES_LIST.map(p => ({ id: p.id, name: p.nameEn, colors: p.colors.length })));
```

Tailwind slots 100–600 identify curated entries, not tonal ramps. Use generateTonalPalette for a lightness scale.

## Studio and verification

The studio has light/dark themes and Persian/English controls. README images are previews. Embedded runtime assets allow local operation; optional photographs and map links are external.

Automated tests cover calculations, formats, selected contrast pairs and static UI connections. They are not a browser accessibility audit or native-platform build report. See [verification scope](verification.md).
