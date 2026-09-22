# Quick Start Guide: Persian Palette Design System

Get up and running with Persian Palette Design System (Manshour) in minutes across web, mobile, and design tools.

---

## 1. Web & Framework Integration

### Installation

Install the `@persian-palette/core` package:

```bash
# If using local release tarball
npm install ./release/persian-palette-core-3.0.0.tgz

# Or once published to npm
npm install @persian-palette/core
```

### React / Next.js / TypeScript Example

```tsx
import React from 'react';
import { PersianEngine, calculateAPCA, generateM3DynamicScheme } from '@persian-palette/core';

export function PersianColorCard({ paletteId, colorName }: { paletteId: string; colorName: string }) {
  const color = PersianEngine.getColor(paletteId, colorName);
  const scheme = generateM3DynamicScheme(color.hex);
  const contrast = calculateAPCA('#FFFFFF', color.hex);

  return (
    <div 
      className="p-6 rounded-2xl shadow-xl transition hover:scale-105"
      style={{ backgroundColor: color.hex, color: scheme.dark.onPrimary }}
    >
      <h3 className="text-xl font-bold font-serif">{color.name}</h3>
      <p className="text-sm opacity-80">{color.nameFa}</p>
      <div className="mt-4 flex items-center justify-between text-xs font-mono">
        <span>{color.hex}</span>
        <span>APCA Lc: {contrast.toFixed(1)}</span>
      </div>
    </div>
  );
}
```

### Tailwind CSS Integration

To use the 72 authentic Persian colors directly as Tailwind CSS utility classes:

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
Now you can use classes like `bg-isfahan-tiles-100`, `text-persepolis-gold-300`, `border-behzad-miniature-500`!

#### Tailwind CSS v4 (`theme.css`)
```css
@import "tailwindcss";
@import "@persian-palette/core/tokens/tailwind-v4.css";
```

---

## 2. Design Tokens & Multi-Platform Delivery

The core library compiles tokens into standard **W3C Design Tokens Community Group (DTCG 2025.10)** formats.

### Style Dictionary 5 Integration

In your `config.json` or `build.js`:

```javascript
import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['node_modules/@persian-palette/core/tokens/dtcg.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    }
  }
});

await sd.buildAllPlatforms();
```

### iOS / macOS (SwiftUI)

```swift
import SwiftUI
// Import compiled tokens from tokens/persian-palette.swift

struct PaletteView: View {
    var body: some View {
        VStack {
            Text("Safavid Ultramarine")
                .foregroundColor(Color.PersianPalette.SafavidTileworkOfIsfahan.ultramarine)
                .background(Color.PersianPalette.SafavidTileworkOfIsfahan.persianTurquoise)
        }
    }
}
```

### Android (Jetpack Compose / Material 3)

```kotlin
import androidx.compose.ui.graphics.Color
// Import compiled tokens from tokens/persian-palette.kt

val PrimaryPersianBlue = Color(0xFF120A8F)
val SafavidTurquoise = Color(0xFF30D5C8)
```

---

## 3. UI/UX Designers: Figma & Tokens Studio

### Figma Variables Auto-Import

1. Open your Figma document.
2. Open the **Console** tab in Figma desktop (`Plugins > Development > Open Console`).
3. Copy the contents of [`docs/figma-import.js`](figma-import.js).
4. Paste and press `Enter`.
5. Figma will automatically create a variable collection named **"Persian Palette Vault"** containing all 12 palettes, 72 colors, and their respective dark/light tokens!

### Tokens Studio for Figma

Import the [`packages/core/tokens/tokens-studio.json`](../packages/core/tokens/tokens-studio.json) file directly into the Tokens Studio plugin.

---

## 4. Running the Interactive Studio Locally

Run the standalone studio with Three.js 3D crystal preview, AR photogrammetry simulation, APCA contrast matrix, and color science radar:

```bash
npm start
```
Visit `http://127.0.0.1:4173`.
You can also open [`code_artifact.html`](../code_artifact.html) or the standalone English edition [`code_artifact_en.html`](../code_artifact_en.html) directly in any modern browser without a local server.
