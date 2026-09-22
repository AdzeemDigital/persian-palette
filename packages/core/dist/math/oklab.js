/**
 * Oklab Perceptual Color Space Transformations
 * Designed by Björn Ottosson (2020) for uniform lightness and chroma interpolation
 */
export function hexToRgb(hex) {
    if (typeof hex !== 'string' || !/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(hex.trim())) {
        throw new TypeError('Expected an opaque sRGB color in #RGB or #RRGGBB format');
    }
    let cleanHex = hex.trim().slice(1);
    if (cleanHex.length === 3)
        cleanHex = [...cleanHex].map(c => c + c).join('');
    const num = parseInt(cleanHex, 16);
    return {
        r: (num >> 16) & 255,
        g: (num >> 8) & 255,
        b: num & 255,
    };
}
export function rgbToHex(rgb) {
    if (![rgb.r, rgb.g, rgb.b].every(Number.isFinite))
        throw new TypeError('RGB components must be finite');
    const clamp = (v) => Math.max(0, Math.min(255, Math.round(v)));
    const r = clamp(rgb.r).toString(16).padStart(2, '0');
    const g = clamp(rgb.g).toString(16).padStart(2, '0');
    const b = clamp(rgb.b).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`.toUpperCase();
}
function srgbToLinear(c) {
    const v = c / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}
function linearToSrgb(c) {
    const v = c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
    return Math.max(0, Math.min(255, v * 255));
}
export function rgbToOklab(rgb) {
    if (![rgb.r, rgb.g, rgb.b].every(v => Number.isFinite(v) && v >= 0 && v <= 255))
        throw new RangeError('RGB components must be in [0, 255]');
    const r = srgbToLinear(rgb.r);
    const g = srgbToLinear(rgb.g);
    const b = srgbToLinear(rgb.b);
    const l_ = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m_ = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s_ = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    return {
        L: 0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
        a: 1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
        b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_,
    };
}
export function oklabToRgb(oklab) {
    if (![oklab.L, oklab.a, oklab.b].every(Number.isFinite))
        throw new TypeError('Oklab components must be finite');
    const l_ = oklab.L + 0.3963377774 * oklab.a + 0.2158037573 * oklab.b;
    const m_ = oklab.L - 0.1055613458 * oklab.a - 0.0638541728 * oklab.b;
    const s_ = oklab.L - 0.0894841775 * oklab.a - 1.2914855480 * oklab.b;
    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;
    const rLin = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
    return {
        r: linearToSrgb(rLin),
        g: linearToSrgb(gLin),
        b: linearToSrgb(bLin),
    };
}
