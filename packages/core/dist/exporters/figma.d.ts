import type { PersianPaletteDefinition } from '../types/palette.js';
export interface FigmaVariableToken {
    name: string;
    resolvedType: 'COLOR';
    valuesByMode: {
        Default: {
            r: number;
            g: number;
            b: number;
            a: 1;
        };
    };
    description: string;
    scopes: ['ALL_SCOPES'];
}
/** Project interchange schema consumed by docs/figma-import.js, not a REST request. */
export declare function exportFigmaVariables(palettes?: PersianPaletteDefinition[]): {
    schema: string;
    schemaVersion: number;
    collections: {
        name: string;
        modes: string[];
        variables: FigmaVariableToken[];
    }[];
};
//# sourceMappingURL=figma.d.ts.map