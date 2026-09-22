import { ALL_PALETTES_LIST } from '../tokens/palettes.js';
import { hexToRgb } from '../math/oklab.js';
import type { PersianPaletteDefinition } from '../types/palette.js';
export interface FigmaVariableToken {
  name: string; resolvedType: 'COLOR';
  valuesByMode: { Default: { r: number; g: number; b: number; a: 1 } };
  description: string; scopes: ['ALL_SCOPES'];
}
/** Project interchange schema consumed by docs/figma-import.js, not a REST request. */
export function exportFigmaVariables(palettes: PersianPaletteDefinition[] = ALL_PALETTES_LIST) {
  const variables: FigmaVariableToken[] = palettes.flatMap(p => p.colors.map(c => {
    const {r,g,b} = hexToRgb(c.hex);
    return { name: 'Persian/' + p.id + '/' + c.nameEn.replace(/[^a-zA-Z0-9]/g, ' ').trim(),
      resolvedType: 'COLOR' as const, valuesByMode: { Default: {r:r/255,g:g/255,b:b/255,a:1 as const} },
      description: c.nameFa + ' — Heritage annotation not independently verified', scopes: ['ALL_SCOPES'] as ['ALL_SCOPES'] };
  }));
  return { schema: 'persian-palette/figma-interchange', schemaVersion: 1,
    collections: [{ name: 'Persian Palette Vault', modes: ['Default'], variables }] };
}
