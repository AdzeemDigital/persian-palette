/**
 * Digital color interpolation in Oklab perceptual space.
 * This does not model physical pigment mixing or measured reflectance.
 */
import { type OklabColor } from './oklab.js';
export interface MixedPigmentResult {
    ratio: number;
    hex: string;
    oklab: OklabColor;
    toString(): string;
    valueOf(): string;
    [Symbol.toPrimitive]?(hint: string): string;
}
/**
 * Interpolate two digital colors; ratio (0.0 to 1.0) is the second color's weight.
 * Returns a result object that behaves as a hex string or provides detailed Oklab telemetry.
 */
export declare function mixHistoricalPigments(hex1: string, hex2: string, ratio?: number): MixedPigmentResult;
/**
 * Generate an N-step digital gradient between two colors.
 */
export declare function generatePigmentGradient(hex1: string, hex2: string, steps?: number): MixedPigmentResult[];
/** Perceptual interpolation, not a physical pigment or reflectance model. */
export declare const mixColors: typeof mixHistoricalPigments;
//# sourceMappingURL=color-mixing.d.ts.map