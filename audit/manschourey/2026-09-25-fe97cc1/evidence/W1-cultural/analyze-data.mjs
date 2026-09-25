// W1 data-quality probe (read-only). Runs against the built isolated clone.
// Usage: SCRATCH=<scratch dir> node analyze-data.mjs > analyze-data.out.json
// Reads: $SCRATCH/work/packages/core/dist/{index.js,tokens/heritage-data.js}
//        ./ref/uwhs-subset.json (third-party mirror of UNESCO WHC list, 2014)
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRATCH = process.env.SCRATCH;
if (!SCRATCH) { console.error('Set SCRATCH'); process.exit(2); }
const dist = path.join(SCRATCH, 'work/packages/core/dist');
const core = await import(pathToFileURL(path.join(dist, 'index.js')).href);
const { RAW_PALETTES } = await import(pathToFileURL(path.join(dist, 'tokens/heritage-data.js')).href);
const uwhs = JSON.parse(readFileSync(path.join(here, 'ref/uwhs-subset.json'), 'utf8')).sites;

const R = 6371.0088;
const hav = (a, b, c, d) => {
  const t = x => x * Math.PI / 180;
  const h = Math.sin(t(c - a) / 2) ** 2 + Math.cos(t(a)) * Math.cos(t(c)) * Math.sin(t(d - b) / 2) ** 2;
  return +(2 * R * Math.asin(Math.sqrt(h))).toFixed(2);
};
const hasPersian = s => typeof s === 'string' && /[؀-ۿ]/.test(s);

const rawPalettes = Object.values(RAW_PALETTES);
const rawColors = rawPalettes.flatMap(p => p.colors.map(c => ({ ...c, paletteId: p.id, paletteNameFa: p.nameFa })));
const normColors = core.ALL_PALETTES_LIST.flatMap(p => p.colors);
const out = {};

// Counts and identity
const ids = rawColors.map(c => c.id);
out.counts = {
  palettes: rawPalettes.length, colors: rawColors.length,
  uniqueColorIds: new Set(ids).size, uniquePaletteIds: new Set(rawPalettes.map(p => p.id)).size,
  uniqueHex: new Set(normColors.map(c => c.hex.toUpperCase())).size,
};
const byHex = {};
for (const c of normColors) (byHex[c.hex.toUpperCase()] ??= []).push(c.id);
out.duplicateHex = Object.fromEntries(Object.entries(byHex).filter(([, v]) => v.length > 1));
const byNameEn = {};
for (const c of rawColors) (byNameEn[c.nameEn.toLowerCase()] ??= []).push(c.id);
out.duplicateNameEn = Object.fromEntries(Object.entries(byNameEn).filter(([, v]) => v.length > 1));

// Data-quality report as shipped vs recomputed
const dq = core.getDataQualityReport();
const conflictFieldCounts = {};
for (const c of normColors) for (const f of c.evidence.provenance.conflicts) conflictFieldCounts[f.field] = (conflictFieldCounts[f.field] ?? 0) + 1;
out.dataQualityReport = { palettes: dq.palettes, colors: dq.colors, unverifiedHeritageColors: dq.unverifiedHeritageColors,
  measuredSpectra: dq.measuredSpectra, coordinateConflicts: dq.coordinateConflicts, colorsWithAnyConflict: dq.conflicts.length,
  conflictFieldCounts,
  note: 'unverifiedHeritageColors and measuredSpectra are hard-coded in palettes.ts (colors.length and 0), not derived from per-record status' };

// Coordinate conflicts (selected geoSpatial.coordinates vs legacy geo.*)
out.coordinateConflicts = rawColors.filter(c => {
  const g = c.evidence.geoSpatial.coordinates, o = c.evidence.geo;
  return g.lat !== o.latitude || g.lng !== o.longitude;
}).map(c => {
  const g = c.evidence.geoSpatial.coordinates, o = c.evidence.geo;
  return { id: c.id, selected: { site: c.evidence.geoSpatial.originSite, lat: g.lat, lng: g.lng, alt: g.altitudeMeters },
    alternative: { site: o.locationFa, lat: o.latitude, lng: o.longitude, alt: o.elevationMeters, unesco: o.unescoSiteId },
    distanceKm: hav(g.lat, g.lng, o.latitude, o.longitude) };
});

// Reference comparison for colors citing a WHC id
const idOf = s => (String(s ?? '').match(/(?:Ref:|Ref)\s*(\d{2,4})/) || [])[1];
out.unescoCoordinateChecks = rawColors.map(c => {
  const gs = c.evidence.geoSpatial, g = c.evidence.geo;
  const rows = [];
  for (const [label, ref, lat, lng] of [['geoSpatial', gs.unescoHeritageRef, gs.coordinates.lat, gs.coordinates.lng], ['geo', g.unescoSiteId, g.latitude, g.longitude]]) {
    const id = idOf(ref);
    if (id && uwhs[id]) rows.push({ field: label, cited: ref, whcId: id, whcName: uwhs[id].name, refLat: uwhs[id].lat, refLng: uwhs[id].lon, lat, lng, distanceKm: hav(lat, lng, uwhs[id].lat, uwhs[id].lon) });
  }
  return rows.length ? { id: c.id, rows } : null;
}).filter(Boolean);
// Named-but-not-numbered sites in the alternative geo record
const named = { 'Tabriz Historic Bazaar Complex': '1346', 'Samarkand - Crossroad of Cultures': '603' };
out.namedSiteChecks = rawColors.filter(c => named[c.evidence.geo.unescoSiteId]).map(c => {
  const id = named[c.evidence.geo.unescoSiteId], s = uwhs[id];
  return { id: c.id, cited: c.evidence.geo.unescoSiteId, whcId: id, whcName: s.name, distanceKm: hav(c.evidence.geo.latitude, c.evidence.geo.longitude, s.lat, s.lon) };
});
// Hormuz island coordinates cited together with WHC 114 (Persepolis)
const hormuz = rawColors.find(c => c.id === 'achaemenid-majesty-c1');
out.hormuzVsPersepolisKm = hav(hormuz.evidence.geoSpatial.coordinates.lat, hormuz.evidence.geoSpatial.coordinates.lng, uwhs['114'].lat, uwhs['114'].lon);

// Synthetic / repeated coordinates
const byCoord = {};
for (const c of rawColors) { const g = c.evidence.geoSpatial.coordinates; (byCoord[`${g.lat},${g.lng},${g.altitudeMeters}`] ??= []).push(c.id); }
out.repeatedCoordinates = Object.fromEntries(Object.entries(byCoord).filter(([, v]) => v.length > 1).map(([k, v]) => [k, { n: v.length, ids: v }]));
out.syntheticPlateauPattern = {
  description: 'originSite "Iranian Plateau Heritage Sites"; lat = 32.4279 + 0.5*i, lng = 53.688 + 0.3*i, alt 1400 for color index i',
  colors: rawColors.filter(c => c.evidence.geoSpatial.originSite === 'Iranian Plateau Heritage Sites').length,
  matchesFormula: rawColors.filter(c => c.evidence.geoSpatial.originSite === 'Iranian Plateau Heritage Sites').every(c => {
    const i = Number(c.id.split('-c').pop()) - 1, g = c.evidence.geoSpatial.coordinates;
    return Math.abs(g.lat - (32.4279 + 0.5 * i)) < 1e-9 && Math.abs(g.lng - (53.688 + 0.3 * i)) < 1e-9 && g.altitudeMeters === 1400;
  }),
};

// Template / placeholder detection
const count = f => rawColors.filter(f).length;
out.templates = {
  genericMineralName: count(c => c.evidence.mineralogical.mineralName.startsWith('Persian Historical Pigment')),
  formulaIsMatrixHex: count(c => /Matrix #[0-9A-F]{6}/i.test(c.evidence.mineralogical.chemicalFormula)),
  casWater7732_18_5: count(c => String(c.evidence.mineralogical.casNumber).startsWith('7732-18-5')),
  casLabelAuthenticSpecimen: count(c => /Authentic Historical Specimen/.test(String(c.evidence.mineralogical.casNumber))),
  genericManuscriptRef: count(c => c.evidence.mineralogical.historicalManuscriptRef === 'رسالات کهن رنگرزی سنتی و صنعتی ایران زمین'),
  genericExtraction: count(c => c.evidence.mineralogical.traditionalExtraction.startsWith('استخراج سنتی از منابع گیاهی و معدنی ایران')),
  genericCrystalSystem: count(c => c.evidence.mineralogical.crystalSystem === 'کریستالین بومی فلات ایران'),
  genericUnescoRef: count(c => c.evidence.geoSpatial.unescoHeritageRef === 'ثبت میراث فرهنگی ملموس و ناملموس یونسکو'),
  historicalContextEqualsMeaning: count(c => c.evidence.historicalContextFa === c.meaningFa),
  artMovementEqualsPaletteName: count(c => c.evidence.artMovement === c.paletteNameFa),
  molarMassCalculatedComplex: count(c => c.evidence.chemical.molarMass === 'Calculated Complex'),
  spectralPeakEqualsDominant: count(c => c.evidence.spectral.peakWavelengthNm === c.evidence.spectral.dominantWavelengthNm),
  roleEnPrimaryAccent: count(c => c.roleEn === 'Primary Accent'),
};

// English-named fields holding Persian text
const pf = ['description', 'culturalContext', 'unescoRef'];
out.englishNamedFieldsWithPersian = {
  palette: Object.fromEntries(pf.map(f => [f, rawPalettes.filter(p => hasPersian(p[f])).length])),
  paletteFieldEqualsFaTwin: Object.fromEntries(pf.map(f => [f, rawPalettes.filter(p => p[f] === p[f + 'Fa']).length])),
  color: { role: count(c => hasPersian(c.role)), meaning: count(c => hasPersian(c.meaning)), artMovement: count(c => hasPersian(c.evidence.artMovement)) },
  colorFieldEqualsFaTwin: { role: count(c => c.role === c.roleFa), meaning: count(c => c.meaning === c.meaningFa) },
};

// Legacy stored colorScience / physics vs recomputed
const legacy = rawColors.map(c => {
  const n = normColors.find(x => x.id === c.id), lo = c.evidence.colorScience.oklab, no = n.evidence.colorScience.oklab;
  const dE = Math.hypot(lo.L - no.L, lo.a - no.a, lo.b - no.b);
  const lab = c.evidence.physics.cieLab, nlab = n.evidence.physics.cieLab;
  return { id: c.id, oklabDelta: +dE.toFixed(4), legacyApcaWhite: c.evidence.colorScience.apca.contrastOnWhite,
    computedApcaWhite: +n.evidence.colorScience.apca.contrastOnWhite.toFixed(1), legacyApcaBlack: c.evidence.colorScience.apca.contrastOnBlack,
    computedApcaBlack: +n.evidence.colorScience.apca.contrastOnBlack.toFixed(1), legacyWeight: c.evidence.colorScience.apca.recommendedWeight,
    computedWeight: n.evidence.colorScience.apca.recommendedWeight,
    labDelta: +Math.hypot(lab.L - nlab.L, lab.a - nlab.a, lab.b - nlab.b).toFixed(2),
    legacyChroma: c.evidence.physics.chromaOklab, computedChroma: +n.evidence.physics.chromaOklab.toFixed(4) };
});
out.legacyColorScience = {
  oklabDeltaOver0_01: legacy.filter(x => x.oklabDelta > 0.01).length,
  maxOklabDelta: Math.max(...legacy.map(x => x.oklabDelta)),
  apcaBlackLegacyZero: legacy.filter(x => x.legacyApcaBlack === 0).length,
  apcaWhiteAbsDiffOver5: legacy.filter(x => Math.abs(Math.abs(x.legacyApcaWhite) - Math.abs(x.computedApcaWhite)) > 5).length,
  cieLabDeltaOver5: legacy.filter(x => x.labDelta > 5).length,
  maxCieLabDelta: Math.max(...legacy.map(x => x.labDelta)),
  normalizedOverwritesColorScience: true,
  sample: legacy.slice(0, 3),
};
out.legacyRows = legacy;
console.log(JSON.stringify(out, null, 1));
