import type { PersianColorToken, PersianPaletteTokenGroup } from './types/token.js';
/** Normalize Persian/Arabic letter variants, marks, spacing and English case. */
export declare function normalizeColorName(value: string): string;
export declare class PersianEngine {
    static getColor(paletteId: string, name: string): PersianColorToken;
    static getToken(paletteId: string, name: string): PersianColorToken;
    static getPalette(paletteId: string): PersianPaletteTokenGroup | undefined;
    static getAllPalettes(): Record<string, PersianPaletteTokenGroup>;
    static getAllColors(): PersianColorToken[];
}
//# sourceMappingURL=engine.d.ts.map