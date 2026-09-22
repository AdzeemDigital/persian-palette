/**
 * Oklab Perceptual Color Space Transformations
 * Designed by Björn Ottosson (2020) for uniform lightness and chroma interpolation
 */
export interface OklabColor {
    L: number;
    a: number;
    b: number;
}
export interface RGBColor {
    r: number;
    g: number;
    b: number;
}
export declare function hexToRgb(hex: string): RGBColor;
export declare function rgbToHex(rgb: RGBColor): string;
export declare function rgbToOklab(rgb: RGBColor): OklabColor;
export declare function oklabToRgb(oklab: OklabColor): RGBColor;
//# sourceMappingURL=oklab.d.ts.map