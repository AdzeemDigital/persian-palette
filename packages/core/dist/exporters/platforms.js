import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
import { hexToRgb } from '../math/oklab.js';
import { generateM3DynamicScheme } from '../math/hct.js';
export function exportSwiftUI(palettes = ALL_PALETTES_LIST) {
    const lines = ['import SwiftUI', '', 'extension Color {'];
    for (const p of palettes)
        for (let i = 0; i < p.colors.length; i++) {
            const { r, g, b } = hexToRgb(p.colors[i].hex);
            lines.push('    static let persian_' + p.id.replace(/-/g, '_') + '_' + (i + 1) +
                ' = Color(.sRGB, red: ' + (r / 255).toFixed(8) + ', green: ' + (g / 255).toFixed(8) +
                ', blue: ' + (b / 255).toFixed(8) + ', opacity: 1)');
        }
    return lines.concat('}', '').join('\n');
}
export function exportMaterialKotlin(palettes = ALL_PALETTES_LIST) {
    const lines = ['import androidx.compose.material3.lightColorScheme', 'import androidx.compose.material3.darkColorScheme', 'import androidx.compose.ui.graphics.Color', ''];
    for (const p of palettes) {
        const scheme = generateM3DynamicScheme(p.colors[0].hex), name = p.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        for (const mode of ['light', 'dark']) {
            lines.push('val ' + name + (mode === 'light' ? 'Light' : 'Dark') + 'ColorScheme = ' + mode + 'ColorScheme(');
            lines.push(Object.entries(scheme[mode]).map(([role, hex]) => '    ' + role + ' = Color(0xFF' + hex.slice(1) + ')').join(',\n'));
            lines.push(')', '');
        }
    }
    return lines.join('\n');
}
