// A13 diagnostic tests for the ManschouRey audit (baseline fe97cc1).
// These are NOT part of the product test suite. Each test encodes a risk found in the audit.
// Tests named "DEFECT:" are EXPECTED TO FAIL on the baseline; they become regression tests once fixed.
// Tests named "GUARD:" should pass on the baseline and protect verified behavior.
//
// Run:  CORE_DIST=<repo>/packages/core/dist/index.js REPO=<repo> node --test diagnostic.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';

const repo = path.resolve(process.env.REPO ?? '.');
const core = await import(pathToFileURL(path.resolve(process.env.CORE_DIST ?? path.join(repo, 'packages/core/dist/index.js'))).href);
const colors = core.ALL_PALETTES_LIST.flatMap(p => p.colors);

test('GUARD: Oklab round trip is exact for every palette color', () => {
  for (const c of colors) assert.equal(core.rgbToHex(core.oklabToRgb(core.rgbToOklab(core.hexToRgb(c.hex)))), c.hex);
});

test('GUARD: APCA polarity and reference values (confirmed against colorjs.io 0.5.2 in A02)', () => {
  assert.ok(Math.abs(core.calculateAPCA('#000000', '#FFFFFF') - 106.04067321268862) < 1e-9);
  assert.ok(core.calculateAPCA('#FFFFFF', '#000000') < 0);
});

test('DEFECT: normalizeColorName should fold alef maksura (ى U+0649) to Persian ye (ی U+06CC)', () => {
  assert.equal(core.normalizeColorName('لاجوردى'), core.normalizeColorName('لاجوردی'));
});

test('DEFECT: evaluateAPCA.minFontSizePx must not report apca-w3 special codes (>=400) as pixel sizes', () => {
  const r = core.evaluateAPCA('#777777', '#808080');
  assert.ok(r.minFontSizePx.fontNormal400 < 400, 'got ' + r.minFontSizePx.fontNormal400 + ' "px"');
});

test('DEFECT: dominantWavelengthNm must be absent for black and for purple-sector (non-spectral) colors', () => {
  const offenders = ['toranj-illumination-c6', 'gardens-of-shiraz-c1', 'gardens-of-shiraz-c2']
    .map(id => colors.find(c => c.id === id)).filter(c => typeof c.evidence.physics.dominantWavelengthNm === 'number');
  assert.deepEqual(offenders.map(c => c.id), []);
});

test('DEFECT: data-quality counts must be computed from record status, not hard-coded', () => {
  const src = fs.readFileSync(path.join(repo, 'packages/core/src/tokens/palettes.ts'), 'utf8');
  assert.ok(!/measuredSpectra:\s*0/.test(src), 'measuredSpectra is a literal 0');
  assert.ok(!/unverifiedHeritageColors:\s*colors\.length/.test(src), 'unverified count equals total by construction');
});

test('DEFECT: Tailwind v4 CSS export must not allow comment break-out from data', () => {
  const evil = structuredClone(core.ALL_PALETTES_LIST[0]);
  evil.nameFa = 'x */ body{display:none} /*';
  const css = core.exportTailwindV4CSS([evil]);
  assert.ok(!css.includes('body{display:none}'), 'palette name escaped the CSS comment');
});

test('DEFECT: token paths should be stable across an English display-name correction', () => {
  const p = structuredClone(core.ALL_PALETTES_LIST[0]);
  const before = Object.keys(core.exportW3CTokens([p]).persian[p.id]).filter(k => !k.startsWith('$'));
  p.colors[0].nameEn = 'Lapis Lazuli Blue';
  const after = Object.keys(core.exportW3CTokens([p]).persian[p.id]).filter(k => !k.startsWith('$'));
  assert.deepEqual(after, before);
});

test('DEFECT: committed build manifest must describe the committed HTML', () => {
  const m = JSON.parse(fs.readFileSync(path.join(repo, 'docs/build-manifest.json'), 'utf8'));
  const h = createHash('sha256').update(fs.readFileSync(path.join(repo, m.artifact))).digest('hex');
  assert.equal(h, m.sha256);
});

test('DEFECT: English edition should have an English <title>', () => {
  const html = fs.readFileSync(path.join(repo, 'code_artifact_en.html'), 'utf8').slice(0, 2000);
  const title = html.match(/<title>([^<]*)<\/title>/)[1];
  assert.ok(!/[؀-ۿ]/.test(title), 'title: ' + title);
});

test('GUARD: every palette has 6 colors with unique ids; flag duplicate HEX across palettes', () => {
  const ids = new Set(colors.map(c => c.id));
  assert.equal(ids.size, 72);
  const byHex = Object.groupBy(colors, c => c.hex);
  const dups = Object.entries(byHex).filter(([, v]) => v.length > 1).map(([k, v]) => k + ':' + v.map(c => c.id).join('+'));
  assert.deepEqual(dups, ['#FDFBF7:achaemenid-majesty-c5+minakari-craft-c5'], 'duplicate HEX inventory changed');
});
