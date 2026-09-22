/**
 * Tailwind CSS Theme Exporter (Supports Tailwind v3 and v4 @theme directives)
 */
import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
import type { PersianPaletteDefinition } from '../types/palette.js';

export function exportTailwindTheme(palettes: PersianPaletteDefinition[] = ALL_PALETTES_LIST) {
  const colors: Record<string, Record<string, string>> = {};

  for (const palette of palettes) {
    const paletteKey = palette.id;
    colors[paletteKey] = {};
    for (let i = 0; i < palette.colors.length; i++) {
      const color = palette.colors[i];
      const step = (i + 1) * 100;
      colors[paletteKey][`${step}`] = color.hex;
    }
  }

  return {
    theme: {
      extend: {
        colors: {
          persian: colors,
        },
      },
    },
  };
}

export function exportTailwindV4CSS(palettes: PersianPaletteDefinition[] = ALL_PALETTES_LIST): string {
  let css = '@theme {\n';
  for (const palette of palettes) {
    css += `  /* ${palette.nameFa} (${palette.nameEn}) */\n`;
    for (let i = 0; i < palette.colors.length; i++) {
      const color = palette.colors[i];
      const step = (i + 1) * 100;
      css += `  --color-persian-${palette.id}-${step}: ${color.hex}; /* ${color.nameFa} */\n`;
    }
  }
  css += '}\n';
  return css;
}
