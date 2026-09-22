/**
 * Digital color interpolation in Oklab perceptual space.
 * This does not model physical pigment mixing or measured reflectance.
 */
import { hexToRgb, rgbToHex, rgbToOklab, oklabToRgb, type OklabColor } from './oklab.js';

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
export function mixHistoricalPigments(hex1: string, hex2: string, ratio: number = 0.5): MixedPigmentResult {
  if (!Number.isFinite(ratio) || ratio < 0 || ratio > 1) throw new RangeError('ratio is the weight of the second color, in [0, 1]');
  const clampedRatio = Math.max(0, Math.min(1, ratio));
  const oklab1 = rgbToOklab(hexToRgb(hex1));
  const oklab2 = rgbToOklab(hexToRgb(hex2));

  // Perceptual interpolation in Oklab
  const mixedOklab: OklabColor = {
    L: oklab1.L * (1 - clampedRatio) + oklab2.L * clampedRatio,
    a: oklab1.a * (1 - clampedRatio) + oklab2.a * clampedRatio,
    b: oklab1.b * (1 - clampedRatio) + oklab2.b * clampedRatio,
  };

  const rgb = oklabToRgb(mixedOklab);
  const hex = rgbToHex(rgb);

  return {
    ratio: clampedRatio,
    hex,
    oklab: mixedOklab,
    toString() {
      return this.hex;
    },
    valueOf() {
      return this.hex;
    },
    [Symbol.toPrimitive](hint: string) {
      return this.hex;
    },
  };
}

/**
 * Generate an N-step digital gradient between two colors.
 */
export function generatePigmentGradient(hex1: string, hex2: string, steps: number = 5): MixedPigmentResult[] {
  if (!Number.isInteger(steps) || steps < 1 || steps > 1000) throw new RangeError('steps must be an integer in [1, 1000]');
  const results: MixedPigmentResult[] = [];
  for (let i = 0; i < steps; i++) {
    const ratio = steps <= 1 ? 0 : i / (steps - 1);
    results.push(mixHistoricalPigments(hex1, hex2, ratio));
  }
  return results;
}

/** Perceptual interpolation, not a physical pigment or reflectance model. */
export const mixColors = mixHistoricalPigments;
