import type { PersianPaletteDefinition, PersianColorDefinition } from '../types/palette.js';
import type { DTCGColorToken, DTCGColorValue, DTCGDesignTokensDocument } from '../types/token.js';
export declare const CANONICAL_TOKEN_KEYS: Readonly<Record<string, string>>;
export declare const colorTokenKey: (color: PersianColorDefinition) => string;
export declare function toDTCGColorValue(hex: string): DTCGColorValue;
export declare function toDTCGToken(color: PersianColorDefinition): DTCGColorToken;
export declare function exportW3CTokens(palettes?: PersianPaletteDefinition[]): DTCGDesignTokensDocument;
/** Explicit legacy format for Tokens Studio consumers that require hex values. */
export declare function exportTokensStudio(palettes?: PersianPaletteDefinition[]): {
    [k: string]: {
        [k: string]: {
            value: string;
            type: string;
            description: string;
        };
    };
};
//# sourceMappingURL=w3c.d.ts.map