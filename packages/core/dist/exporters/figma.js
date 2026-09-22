import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
import { hexToRgb } from '../math/oklab.js';
/** Project interchange schema consumed by docs/figma-import.js, not a REST request. */
export function exportFigmaVariables(palettes = ALL_PALETTES_LIST) {
    const variables = palettes.flatMap(p => p.colors.map(c => {
        const { r, g, b } = hexToRgb(c.hex);
        return { name: 'Persian/' + p.id + '/' + c.nameEn.replace(/[^a-zA-Z0-9]/g, ' ').trim(),
            resolvedType: 'COLOR', valuesByMode: { Default: { r: r / 255, g: g / 255, b: b / 255, a: 1 } },
            description: c.nameFa + ' — Heritage annotation not independently verified', scopes: ['ALL_SCOPES'] };
    }));
    return { schema: 'persian-palette/figma-interchange', schemaVersion: 1,
        collections: [{ name: 'Persian Palette Vault', modes: ['Default'], variables }] };
}
