import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
import { hexToRgb, rgbToHex } from '../math/oklab.js';
import { VERSION, DTCG_VERSION } from '../version.js';
export const colorTokenKey = (color) => color.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export function toDTCGColorValue(hex) {
    const rgb = hexToRgb(hex);
    return { colorSpace: 'srgb', components: [rgb.r / 255, rgb.g / 255, rgb.b / 255], alpha: 1, hex: rgbToHex(rgb).toLowerCase() };
}
export function toDTCGToken(color) {
    return { $type: 'color', $value: toDTCGColorValue(color.hex),
        $description: color.nameFa + ' — ' + color.roleFa,
        $extensions: { 'org.persian-palette': { id: color.id, nameFa: color.nameFa, nameEn: color.nameEn, evidence: color.evidence } } };
}
export function exportW3CTokens(palettes = ALL_PALETTES_LIST) {
    const persian = { $description: 'Persian-inspired sRGB colors; heritage annotations are not laboratory authentication.' };
    for (const palette of palettes) {
        const group = { $description: palette.nameFa + ' (' + palette.nameEn + ')' };
        for (const color of palette.colors) {
            const key = colorTokenKey(color);
            if (Object.hasOwn(group, key))
                throw new Error('Duplicate token key: ' + key);
            group[key] = toDTCGToken(color);
        }
        persian[palette.id] = group;
    }
    return { $description: 'Persian Palette Vault design tokens',
        $extensions: { 'org.persian-palette': { version: VERSION, dtcgVersion: DTCG_VERSION } }, persian };
}
/** Explicit legacy format for Tokens Studio consumers that require hex values. */
export function exportTokensStudio(palettes = ALL_PALETTES_LIST) {
    return Object.fromEntries(palettes.map(p => [p.id, Object.fromEntries(p.colors.map(c => [
            colorTokenKey(c), { value: c.hex, type: 'color', description: c.nameFa }
        ]))]));
}
