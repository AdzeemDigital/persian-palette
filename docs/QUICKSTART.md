# Quick start

Requires Node.js 22+. Install the local tarball from this checkout or the GitHub v3.0.0 release:

```sh
npm install ./release/persian-palette-core-3.0.0.tgz
```

## JavaScript and TypeScript

Use nameEn/nameFa on returned tokens. A Material foreground belongs with its corresponding role background, not necessarily with the original seed HEX.

<!-- test:esm -->
```js
import { PersianEngine, generateM3DynamicScheme, calculateAPCA } from '@persian-palette/core';
const color = PersianEngine.getColor('isfahan-tiles', 'ultramarine');
const scheme = generateM3DynamicScheme(color.hex);
const background = scheme.light.primary;
const foreground = scheme.light.onPrimary;
console.log(color.nameEn, background, foreground);
console.log(calculateAPCA(foreground, background));
```

Handle errors from user-entered queries. Empty, unknown and ambiguous queries throw.

## Tailwind v3

exportTailwindTheme returns a complete theme.extend.colors.persian configuration fragment. Do not place that entire object inside colors. Save as tailwind.config.cjs:

```js
const { exportTailwindTheme } = require('@persian-palette/core');
module.exports = {
  ...exportTailwindTheme(),
  content: ['./src/**/*.{html,js,jsx,ts,tsx}']
};
```

Classes: bg-persian-isfahan-tiles-100, text-persian-achaemenid-majesty-300 and border-persian-behzad-miniature-500. Slots 100–600 identify curated colors, not lightness-ordered tones.

## Tailwind v4

```css
@import "tailwindcss";
@import "@persian-palette/core/tokens/tailwind";
```

## Style Dictionary 5

Install Style Dictionary separately. Use the exported object without relying on a private token filename.

<!-- test:esm -->
```js
import StyleDictionary from 'style-dictionary';
import { exportW3CTokens } from '@persian-palette/core';
const dictionary = new StyleDictionary({
  tokens: exportW3CTokens(),
  usesDtcg: true,
  log: { verbosity: 'silent' },
  platforms: {
    css: {
      transformGroup: 'css',
      files: [{ destination: 'colors.css', format: 'css/variables' }]
    }
  }
});
const [file] = await dictionary.formatPlatform('css');
console.log(file.output); // 72 CSS custom properties
```

## Native source

Copy [Colors.swift](../packages/core/tokens/Colors.swift) into your SwiftUI target; for example, Color.persian_isfahan_tiles_1 is generated with a built-in sRGB initializer.

Copy [ColorSchemes.kt](../packages/core/tokens/ColorSchemes.kt) into a Compose project with Material 3. It contains isfahanTilesLightColorScheme and isfahanTilesDarkColorScheme. These files have structural checks; native compilation has not been verified.

## Figma and Tokens Studio

[figma-variables.json](../packages/core/tokens/figma-variables.json) is a project-specific interchange document. [figma-import.js](figma-import.js) defines importPersianVariables(document) for a Figma plugin context. Supply parsed JSON to that function in a development plugin. Pasting the function into a console does not perform an import. Each call creates new collections with one Default mode, not dark/light Material modes. This is not a published plugin or a REST payload.

[tokens-studio.json](../packages/core/tokens/tokens-studio.json) is a separate legacy HEX-token format. Target-plugin import has not been tested; review it before using it in a shared file.

## Studio

Run npm start from the repository root and open http://127.0.0.1:4173. Runtime code, fonts and styles are embedded. Optional external photographs/maps require connectivity. See [verification](verification.md) for browser-test limits.
