// A02 diagnostic: compare @persian-palette/core math against independent implementations.
// Usage: node oracle-comparison.mjs <path-to-built-core-dist/index.js> <dir-with-colorjs.io-and-culori-node_modules>
// Oracles: colorjs.io 0.5.2 (Oklab, HCT, APCA 0.0.98G-4g, WCAG 2.1), culori 4.x (Oklab).
// These are separate code bases from apca-w3 / material-color-utilities / the project's own Oklab code.
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const [corePath, oracleDir] = process.argv.slice(2);
const core = await import(pathToFileURL(path.resolve(corePath)).href);
const req = createRequire(path.join(path.resolve(oracleDir), 'x.js'));
const cjMod = await import(pathToFileURL(req.resolve('colorjs.io')).href);
const Color = typeof cjMod.default === 'function' ? cjMod.default : cjMod.default.default;
const culoriMod = await import(pathToFileURL(req.resolve('culori')).href);
const culori = culoriMod.converter ? culoriMod : culoriMod.default;

// Deterministic PRNG (mulberry32) so runs are reproducible.
let seed = 0x5eed1234;
const rand = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const hex2 = n => n.toString(16).padStart(2, '0').toUpperCase();
const randHex = () => '#' + hex2(Math.floor(rand() * 256)) + hex2(Math.floor(rand() * 256)) + hex2(Math.floor(rand() * 256));
const palette = core.ALL_PALETTES_LIST.flatMap(p => p.colors.map(c => c.hex));
const edges = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#808080', '#010101', '#FEFEFE', '#777777'];
const sample = [...new Set([...palette, ...edges, ...Array.from({ length: 5000 }, randHex)])];
const out = { oracleVersions: { colorjs: '0.5.2', culori: req('culori/package.json').version }, sampleSize: sample.length };

// 1. Oklab forward: core vs culori vs colorjs.
let maxOk = 0, maxOkColor = '';
for (const h of sample) {
  const a = core.rgbToOklab(core.hexToRgb(h));
  const b = culori.converter('oklab')(h);
  const d = Math.max(Math.abs(a.L - b.l), Math.abs(a.a - b.a), Math.abs(a.b - b.b));
  if (d > maxOk) { maxOk = d; maxOkColor = h; }
}
let maxOkCj = 0;
for (const h of sample) {
  const a = core.rgbToOklab(core.hexToRgb(h));
  const [L, A, B] = new Color(h).to('oklab').coords;
  maxOkCj = Math.max(maxOkCj, Math.abs(a.L - L), Math.abs(a.a - A), Math.abs(a.b - (B ?? 0)));
}
out.oklab = { maxAbsDiffVsCulori: maxOk, worstColor: maxOkColor, maxAbsDiffVsColorjs: maxOkCj };

// 2. Oklab round trip over a 200k random sample plus the 72 palette colors.
let rtFail = 0; const rtExamples = [];
for (let i = 0; i < 200000; i++) {
  const h = i < palette.length ? palette[i] : randHex();
  const back = core.rgbToHex(core.oklabToRgb(core.rgbToOklab(core.hexToRgb(h))));
  if (back !== h) { rtFail++; if (rtExamples.length < 5) rtExamples.push([h, back]); }
}
out.oklabRoundTrip = { tested: 200000, failures: rtFail, examples: rtExamples };

// 3. Mixing: out-of-gamut rate of straight Oklab interpolation between two in-gamut sRGB colors,
//    and the difference between core's per-channel clipping and colorjs's CSS gamut mapping.
let oog = 0, mixTests = 0, maxClipDeltaE = 0, worstMix = null, diffFromCss = 0;
const pairs = [];
for (const a of palette) for (const b of palette) if (a < b) pairs.push([a, b]);
for (const [a, b] of pairs) for (const t of [0.25, 0.5, 0.75]) {
  mixTests++;
  const m = core.mixColors(a, b, t);
  const lin = core.oklabToRgb(m.oklab); // clamped already; recompute unclamped via colorjs
  const c = new Color('oklab', [m.oklab.L, m.oklab.a, m.oklab.b]);
  if (!c.inGamut('srgb')) {
    oog++;
    const clippedOk = new Color(m.hex).to('oklab');
    const dE = c.deltaE(clippedOk, { method: 'OK' });
    if (dE > maxClipDeltaE) { maxClipDeltaE = dE; worstMix = { a, b, t, core: m.hex, deltaEOK: dE }; }
    const css = c.clone().toGamut({ space: 'srgb', method: 'css' }).to('srgb').toString({ format: 'hex' }).toUpperCase();
    if (css !== m.hex) diffFromCss++;
  }
  void lin;
}
out.mixing = { palettePairsTimesRatios: mixTests, interpolantsOutsideSrgb: oog, maxDeltaEOKIntroducedByClipping: maxClipDeltaE, worst: worstMix, differsFromCssGamutMapping: diffFromCss };

// 4. HCT: core (Material Color Utilities 0.3.0) vs colorjs 'hct' space (independent port).
let maxHue = 0, maxChroma = 0, maxTone = 0, worstH = '';
const hueDiff = (x, y) => { const d = Math.abs(x - y) % 360; return d > 180 ? 360 - d : d; };
for (const h of sample) {
  const a = core.hexToHct(h);
  const [H, C, T] = new Color(h).to('hct').coords;
  const dh = a.chroma > 2 ? hueDiff(a.hue, H ?? 0) : 0; // hue undefined near achromatic
  if (dh > maxHue) { maxHue = dh; worstH = h; }
  maxChroma = Math.max(maxChroma, Math.abs(a.chroma - C));
  maxTone = Math.max(maxTone, Math.abs(a.tone - T));
}
out.hct = { maxHueDiffDeg_chromaOver2: maxHue, worstHueColor: worstH, maxChromaDiff: maxChroma, maxToneDiff: maxTone };

// 5. HCT inverse: out-of-gamut chroma is silently reduced and the achieved chroma is not reported.
const req150 = core.hctToHex(250, 150, 50), got = core.hexToHct(req150);
out.hctInverse = { requested: { hue: 250, chroma: 150, tone: 50 }, returned: req150, achieved: got,
  hueWrap: { minus30: core.hctToHex(-30, 40, 50), plus330: core.hctToHex(330, 40, 50), plus690: core.hctToHex(690, 40, 50) },
  grayHue: core.hexToHct('#808080') };

// 6. APCA: apca-w3 0.1.9 vs colorjs contrastAPCA (0.0.98G-4g). Signed Lc.
let maxApca = 0, worstApca = null;
for (let i = 0; i < 3000; i++) {
  const t = i < palette.length ? palette[i] : randHex(), b = randHex();
  const a = core.calculateAPCA(t, b);
  const c = new Color(b).contrast(new Color(t), 'APCA'); // colorjs: background.contrast(foreground)
  const d = Math.abs(a - c);
  if (d > maxApca) { maxApca = d; worstApca = { text: t, bg: b, core: a, colorjs: c }; }
}
out.apca = { pairs: 3000, maxAbsDiffLc: maxApca, worst: worstApca,
  polarity: { blackOnWhite: core.calculateAPCA('#000000', '#FFFFFF'), whiteOnBlack: core.calculateAPCA('#FFFFFF', '#000000') } };

// 7. evaluateAPCA: minFontSizePx carries special codes (>= 400) as if they were pixel sizes.
out.evaluateAPCA = { lowContrast: core.evaluateAPCA('#777777', '#808080'), fontLookupAtLc30: core.getApcaFontSizes(30), negativeLc: core.getApcaFontSizes(-75) };

// 8. WCAG 2.x contrast used by the studio badges (app.js getContrastRatio) vs colorjs WCAG21.
const lum = h => { const { r, g, b } = core.hexToRgb(h); const f = v => (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
let maxW = 0;
for (let i = 0; i < 3000; i++) { const a = randHex(), b = randHex(); const r = (Math.max(lum(a), lum(b)) + .05) / (Math.min(lum(a), lum(b)) + .05); maxW = Math.max(maxW, Math.abs(r - new Color(a).contrast(new Color(b), 'WCAG21'))); }
out.wcag21 = { pairs: 3000, maxAbsDiffRatio: maxW };

// 9. CIELAB (Material labFromArgb, D65) vs colorjs lab-d65.
let maxLab = 0;
for (const h of sample) { const a = core.hexToLab(h); const [L, A, B] = new Color(h).to('lab-d65').coords; maxLab = Math.max(maxLab, Math.abs(a.L - L), Math.abs(a.a - A), Math.abs(a.b - B)); }
out.cielabD65 = { maxAbsDiff: maxLab };

// 10. Dominant wavelength plausibility: colors whose chromaticity lies in the purple sector have NO
//     dominant wavelength (only a complementary one). Purple line endpoints: CIE 1931 x,y at 380 nm
//     (0.1741, 0.0050) and 700 nm (0.7347, 0.2653); D65 white (0.3127, 0.3290).
const W = [0.3127, 0.3290], P380 = [0.1741, 0.0050], P700 = [0.7347, 0.2653];
const ang = (p) => Math.atan2(p[1] - W[1], p[0] - W[0]);
const a380 = ang(P380), a700 = ang(P700);
const nonSpectral = [];
for (const p of core.ALL_PALETTES_LIST) for (const c of p.colors) {
  const [X, Y, Z] = new Color(c.hex).to('xyz-d65').coords; const s = X + Y + Z;
  if (s === 0) { nonSpectral.push({ id: c.id, hex: c.hex, reason: 'black: chromaticity undefined', claimedDominantNm: c.evidence.physics.dominantWavelengthNm }); continue; }
  const xy = [X / s, Y / s];
  const sat = Math.hypot(xy[0] - W[0], xy[1] - W[1]);
  const t = ang(xy);
  // purple sector = angles between a380 (≈ -118°) and a700 (≈ -3.6°) going through the bottom
  if (t > a380 && t < a700 && sat > 0.005) nonSpectral.push({ id: c.id, hex: c.hex, nameEn: c.nameEn, xy: xy.map(v => +v.toFixed(4)), claimedDominantNm: c.evidence.physics.dominantWavelengthNm });
}
out.dominantWavelength = { method: 'purple-sector test from D65', colorsWithoutDominantWavelengthButClaimed: nonSpectral };

// 11. Legacy stored metrics vs recomputed (raw heritage-data colorScience block is overwritten; check raw physics.cieLab).
console.log(JSON.stringify(out, null, 2));
