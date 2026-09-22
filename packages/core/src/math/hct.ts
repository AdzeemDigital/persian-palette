/** HCT/CAM16 and Material Tonal Spot, using Google's pinned reference library. */
import { Hct, TonalPalette, SchemeTonalSpot, hexFromArgb, argbFromRgb, labFromArgb } from '@material/material-color-utilities';
import { hexToRgb, rgbToHex } from './oklab.js';

export interface HCTColor { hue: number; chroma: number; tone: number }
export const M3_ROLES = [
  'primary', 'onPrimary', 'primaryContainer', 'onPrimaryContainer',
  'secondary', 'onSecondary', 'secondaryContainer', 'onSecondaryContainer',
  'tertiary', 'onTertiary', 'tertiaryContainer', 'onTertiaryContainer',
  'error', 'onError', 'errorContainer', 'onErrorContainer',
  'background', 'onBackground', 'surface', 'onSurface', 'surfaceVariant',
  'onSurfaceVariant', 'outline', 'outlineVariant',
] as const;
export type M3PaletteRoles = Record<typeof M3_ROLES[number], string>;
export interface M3ColorScheme {
  seedHex: string; hct: HCTColor; light: M3PaletteRoles; dark: M3PaletteRoles;
  tonalScale: Record<number, string>;
  method: 'material-color-utilities@0.3.0/tonal-spot/2021';
}
function argb(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  return argbFromRgb(r, g, b);
}
export function hexToLab(hex: string): { L: number; a: number; b: number } {
  const [L, a, b] = labFromArgb(argb(hex));
  return { L, a, b };
}
export function hexToHct(hex: string): HCTColor {
  const hct = Hct.fromInt(argb(hex));
  return { hue: hct.hue, chroma: hct.chroma, tone: hct.tone };
}
export function hctToHex(hue: number, chroma: number, tone: number): string {
  if (![hue, chroma, tone].every(Number.isFinite) || chroma < 0 || tone < 0 || tone > 100)
    throw new RangeError('HCT requires finite hue, nonnegative chroma and tone in [0, 100]');
  return hexFromArgb(Hct.from(((hue % 360) + 360) % 360, chroma, tone).toInt()).toUpperCase();
}
export function generateTonalPalette(sourceHex: string, tones: number[] = [0,10,20,30,40,50,60,70,80,90,95,98,100]): Record<number,string> {
  if (tones.length > 1000 || !tones.every(t => Number.isFinite(t) && t >= 0 && t <= 100))
    throw new RangeError('Expected at most 1000 tones in [0, 100]');
  const palette = TonalPalette.fromInt(argb(sourceHex));
  return Object.fromEntries(tones.map(t => [t, hexFromArgb(palette.tone(t)).toUpperCase()]));
}
export function generateM3DynamicScheme(sourceHex: string): M3ColorScheme {
  const hct = Hct.fromInt(argb(sourceHex));
  const roles = (dark: boolean): M3PaletteRoles => {
    const scheme = new SchemeTonalSpot(hct, dark, 0);
    return Object.fromEntries(M3_ROLES.map(key => [key, hexFromArgb(scheme[key]).toUpperCase()])) as M3PaletteRoles;
  };
  return { seedHex: rgbToHex(hexToRgb(sourceHex)), hct: hexToHct(sourceHex),
    light: roles(false), dark: roles(true), tonalScale: generateTonalPalette(sourceHex),
    method: 'material-color-utilities@0.3.0/tonal-spot/2021' };
}
