/** APCA-W3 0.1.9. A contrast estimate for screen text, not a WCAG certification. */
import { APCAcontrast, sRGBtoY, fontLookupAPCA } from 'apca-w3';
import { hexToRgb } from './oklab.js';

export function calculateAPCA(txtHex: string, bgHex: string): number {
  const t = hexToRgb(txtHex), b = hexToRgb(bgHex);
  return APCAcontrast(sRGBtoY([t.r, t.g, t.b]), sRGBtoY([b.r, b.g, b.b]));
}

/** Reference Barlow lookup. Values >= 400 are special codes, not ordinary font sizes. */
export function getApcaFontSizes(lc: number): Record<number, number> {
  if (!Number.isFinite(lc) || Math.abs(lc) > 110) throw new RangeError('Expected finite screen contrast Lc in [-110, 110]');
  const values = fontLookupAPCA(lc);
  return Object.fromEntries([100,200,300,400,500,600,700,800,900].map((weight, i) => [weight, Number(values[i+1])]));
}

export interface APCAConformance {
  lcScore: number;
  rating: 'Fail' | 'Lc 45 (Large/Bold)' | 'Lc 60 (Sub-head)' | 'Lc 75 (Content Text)' | 'Lc 90 (Fluent Body Text)';
  minFontSizePx: { fontNormal400: number | null; fontBold700: number | null };
  passedFluentBody: boolean;
  method: 'apca-w3@0.1.9';
}
export function evaluateAPCA(txtHex: string, bgHex: string): APCAConformance {
  const lc = calculateAPCA(txtHex, bgHex), abs = Math.abs(lc);
  const sizes = fontLookupAPCA(lc);
  const raw400 = Number(sizes[4]);
  const raw700 = Number(sizes[7]);
  return {
    lcScore: lc,
    rating: abs >= 90 ? 'Lc 90 (Fluent Body Text)' : abs >= 75 ? 'Lc 75 (Content Text)' :
      abs >= 60 ? 'Lc 60 (Sub-head)' : abs >= 45 ? 'Lc 45 (Large/Bold)' : 'Fail',
    minFontSizePx: {
      fontNormal400: raw400 >= 400 ? null : raw400,
      fontBold700: raw700 >= 400 ? null : raw700,
    },
    passedFluentBody: abs >= 90,
    method: 'apca-w3@0.1.9',
  };
}
