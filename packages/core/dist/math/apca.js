/** APCA-W3 0.1.9. A contrast estimate for screen text, not a WCAG certification. */
import { APCAcontrast, sRGBtoY, fontLookupAPCA } from 'apca-w3';
import { hexToRgb } from './oklab.js';
export function calculateAPCA(txtHex, bgHex) {
    const t = hexToRgb(txtHex), b = hexToRgb(bgHex);
    return APCAcontrast(sRGBtoY([t.r, t.g, t.b]), sRGBtoY([b.r, b.g, b.b]));
}
/** Reference Barlow lookup. Values >= 400 are special codes, not ordinary font sizes. */
export function getApcaFontSizes(lc) {
    if (!Number.isFinite(lc) || Math.abs(lc) > 110)
        throw new RangeError('Expected finite screen contrast Lc in [-110, 110]');
    const values = fontLookupAPCA(lc);
    return Object.fromEntries([100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight, i) => [weight, Number(values[i + 1])]));
}
export function evaluateAPCA(txtHex, bgHex) {
    const lc = calculateAPCA(txtHex, bgHex), abs = Math.abs(lc);
    const sizes = fontLookupAPCA(lc);
    return {
        lcScore: lc,
        rating: abs >= 90 ? 'Lc 90 (Fluent Body Text)' : abs >= 75 ? 'Lc 75 (Content Text)' :
            abs >= 60 ? 'Lc 60 (Sub-head)' : abs >= 45 ? 'Lc 45 (Large/Bold)' : 'Fail',
        minFontSizePx: { fontNormal400: Number(sizes[4]), fontBold700: Number(sizes[7]) },
        passedFluentBody: abs >= 90,
        method: 'apca-w3@0.1.9',
    };
}
