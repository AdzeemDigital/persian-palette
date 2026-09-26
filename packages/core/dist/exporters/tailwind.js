/**
 * Tailwind CSS Theme Exporter (Supports Tailwind v3 and v4 @theme directives)
 */
import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
export function exportTailwindTheme(palettes = ALL_PALETTES_LIST) {
    const colors = {};
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
function sanitizeComment(text) {
    let s = String(text ?? '');
    s = s.replace(/[{}\r\n]/g, '');
    while (s.includes('*/') || s.includes('/*')) {
        s = s.replace(/\/\*|\*\//g, '');
    }
    return s.trim();
}
export function exportTailwindV4CSS(palettes = ALL_PALETTES_LIST) {
    let css = '@theme {\n';
    for (const palette of palettes) {
        const pNameFa = sanitizeComment(palette.nameFa);
        const pNameEn = sanitizeComment(palette.nameEn);
        css += `  /* ${pNameFa} (${pNameEn}) */\n`;
        for (let i = 0; i < palette.colors.length; i++) {
            const color = palette.colors[i];
            const step = (i + 1) * 100;
            const cNameFa = sanitizeComment(color.nameFa);
            css += `  --color-persian-${palette.id}-${step}: ${color.hex}; /* ${cNameFa} */\n`;
        }
    }
    css += '}\n';
    return css;
}
