// W1 claim-ledger generator. Usage:
//   SCRATCH=<scratch dir> node build-claims.mjs ../../CULTURAL_CLAIMS.csv
// Reads raw records from $SCRATCH/work/packages/core/dist/tokens/heritage-data.js (fe97cc1 build) and the
// reference extracts in ./ref (see SOURCES.md for provenance). Every evidence_status below is a reviewer
// judgment encoded as a rule or an explicit override; see the comments for the basis of each rule.
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRATCH = process.env.SCRATCH;
if (!SCRATCH) { console.error('Set SCRATCH'); process.exit(2); }
const outFile = process.argv[2] || path.join(here, '../../CULTURAL_CLAIMS.csv');
const { RAW_PALETTES } = await import(pathToFileURL(path.join(SCRATCH, 'work/packages/core/dist/tokens/heritage-data.js')).href);
const ref = f => JSON.parse(readFileSync(path.join(here, 'ref', f), 'utf8'));
const named = ref('named-color-matches.json');
const uwhs = ref('uwhs-subset.json').sites;
const matchById = Object.fromEntries(named.matches.map(m => [m.id, m]));

const R = 6371.0088;
const hav = (a, b, c, d) => { const t = x => x * Math.PI / 180; const h = Math.sin(t(c - a) / 2) ** 2 + Math.cos(t(a)) * Math.cos(t(c)) * Math.sin(t(d - b) / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); };
const km = x => x.toFixed(2);
const REV = 'W1-sequential-AI-review';
const rows = [];
let n = 0;
const add = (record, field, claim, cat, src, loc, ev, doc, meas, des, unc, act) => {
  n++; rows.push([`W1-C${String(n).padStart(4, '0')}`, record, field, String(claim), cat, src, loc, ev, doc, meas, des, unc, REV, act]);
};

// ---------- Palette-level judgments (description, culturalContext, unescoRef) ----------
// Basis: S003 (UWHS 2014 mirror of the UNESCO WHC list) for WHC inscriptions; everything else could not be opened.
const P = {
  'isfahan-tiles': {
    description: ['unverified', 'superlatives "اصیل" and "استاندارد جهانی" have no cited basis; lapis lazuli in Safavid tile glazes not documented in record'],
    culturalContext: ['partially-supported', 'S003 confirms WHC 115 "Meidan Emam, Esfahan" (1979); individual mosques are not itemised in S003', 'S003', 'ref_no 115'],
    unescoRef: ['supported', 'S003: ref_no 115 "Meidan Emam, Esfahan" inscribed 1979; the palette field gives no ID', 'S003', 'ref_no 115'],
  },
  'achaemenid-majesty': {
    description: ['unverified', '"marble columns of Susa and Parsa" and "2500 years" are unsourced; Persepolis columns are commonly described as limestone (not checked)'],
    culturalContext: ['partially-supported', 'S003 confirms WHC 114 Persepolis (1979); building list not itemised in S003', 'S003', 'ref_no 114'],
    unescoRef: ['supported', 'S003: ref_no 114 "Persepolis" date_inscribed 1979', 'S003', 'ref_no 114'],
  },
  'behzad-miniature': {
    description: ['unverified', 'mixes Herat (Timurid) and Tabriz (Safavid) schools and Samarkand paper; no source'],
    culturalContext: ['unverified', 'named manuscripts (Baysonghori Shahnameh, Khamsa, Zafarnama) not linked to any collection record; Behzad attribution per manuscript not checked'],
    unescoRef: ['unverified', 'ICH listing not checked: ich.unesco.org blocked; label frames a listing as "Iranian" without naming it'],
  },
  'nomadic-rugs': {
    description: ['unverified', '"۱۰۰٪ طبیعی" (100% natural) is an absolute claim with no dye analysis'],
    culturalContext: ['unverified', 'groups Qashqai (Fars) and Bakhtiari (Chaharmahal/Khuzestan) without distinction'],
    unescoRef: ['unverified', 'ICH page blocked; the cited Fars carpet-weaving listing (as worded) would not cover Bakhtiari weaving'],
  },
  'minakari-craft': {
    description: ['unverified', '"پیشینه پنج‌هزار ساله" (5,000-year history) unsourced'],
    culturalContext: ['unverified', 'no source'],
    unescoRef: ['unverified', 'text cites World Crafts City (a World Crafts Council designation); page blocked'],
  },
  'toranj-illumination': {
    description: ['unverified', 'no source'],
    culturalContext: ['unverified', 'collections named (Golestan Palace, Reza Abbasi Museum, Astan Quds library) but no object cited'],
    unescoRef: ['unverified', 'ICH page blocked; no listing name or year given'],
  },
  'persian-gulf-pearls': {
    description: ['unverified', 'Makran coast lies on the Gulf of Oman, not the Persian Gulf (geographic flattening; not source-checked)'],
    culturalContext: ['unverified', 'no source'],
    unescoRef: ['unverified', 'ICH page blocked (Lenj listing, 2011 claimed)'],
  },
  'gardens-of-shiraz': {
    description: ['unverified', 'no source'],
    culturalContext: ['unverified', 'only Eram is plausibly a component of "The Persian Garden"; Qavam, Jahan-nama and Hafezieh are not WHC components per auditor knowledge (not checked)'],
    unescoRef: ['supported', 'S003: ref_no 1372 "The Persian Garden" date_inscribed 2011; component list not in S003', 'S003', 'ref_no 1372'],
  },
  'khorasan-gems': {
    description: ['unverified', '"کهن‌ترین معدن فیروزه جهان" (oldest turquoise mine in the world) unsourced; rubies/emeralds/amber not Khorasan products per record'],
    culturalContext: ['unverified', 'no source'],
    unescoRef: ['unverified', 'text cites World Crafts Council, not UNESCO; page blocked'],
  },
  'hyrcanian-forests': {
    description: ['contradicted', 'internal conflict: description dates forests to the Jurassic while hyrcanian-forests-c1 says "ice age" and "50 million years" (Jurassic ended ~145 Mya); at least one is wrong', 'S007', 'heritage-data.ts hyrcanian-forests.descriptionFa vs c1.meaningFa'],
    culturalContext: ['unverified', 'no source'],
    unescoRef: ['unverified', 'inscription post-dates S003 (2014); whc.unesco.org blocked'],
  },
  'yazd-saffron-desert': {
    description: ['unverified', '"کهن‌ترین شهر خشتی جهان" unsourced; Qaenat saffron and Lut dunes are outside Yazd (regional flattening)'],
    culturalContext: ['unverified', 'includes Lut desert sands which are not in Yazd'],
    unescoRef: ['unverified', 'inscription post-dates S003 (2014); whc.unesco.org blocked'],
  },
  'bazaar-spices': {
    description: ['unverified', 'internal inconsistency: description names Tabriz and Isfahan bazaars, culturalContext names Tabriz and Tehran'],
    culturalContext: ['unverified', 'see description; no source'],
    unescoRef: ['supported', 'S003: ref_no 1346 "Tabriz Historic Bazaar Complex" date_inscribed 2010', 'S003', 'ref_no 1346'],
  },
};
for (const p of Object.values(RAW_PALETTES)) {
  for (const f of ['description', 'culturalContext', 'unescoRef']) {
    const [ev, note, src = '', loc = ''] = P[p.id][f];
    const same = p[f] === p[f + 'Fa'];
    add(p.id, same ? `${f} (= ${f}Fa)` : f + 'Fa', p[f + 'Fa'], f === 'unescoRef' ? 'heritage-designation' : 'cultural-history', src || 'none-opened', loc || '-', ev,
      src ? (ev === 'contradicted' ? 'internal-conflict' : 'checked-against-' + src) : 'not-checked-source-blocked', 'not-applicable', 'not-applicable',
      note + (same ? `; schema: English-named field "${f}" holds the identical Persian text and is rendered as English copy in the EN UI` : ''),
      (ev === 'supported' ? 'keep; add WHC id and URL' : 'rewrite as attributed/hedged text or add a specific citation') + (same ? `; supply a real English "${f}"` : ''));
  }
}

// ---------- Color-level rules ----------
const NON_PIGMENT = new Set(['nomadic-rugs-c5', 'minakari-craft-c3', 'toranj-illumination-c5', 'persian-gulf-pearls-c1', 'persian-gulf-pearls-c2',
  'persian-gulf-pearls-c4', 'persian-gulf-pearls-c5', 'persian-gulf-pearls-c6', 'gardens-of-shiraz-c1', 'gardens-of-shiraz-c2', 'gardens-of-shiraz-c3',
  'gardens-of-shiraz-c4', 'gardens-of-shiraz-c5', 'gardens-of-shiraz-c6', 'khorasan-gems-c1', 'khorasan-gems-c2', 'khorasan-gems-c3', 'khorasan-gems-c4',
  'khorasan-gems-c5', 'khorasan-gems-c6', 'hyrcanian-forests-c1', 'hyrcanian-forests-c2', 'hyrcanian-forests-c3', 'hyrcanian-forests-c4',
  'hyrcanian-forests-c5', 'hyrcanian-forests-c6', 'yazd-saffron-desert-c3', 'yazd-saffron-desert-c4', 'yazd-saffron-desert-c5', 'yazd-saffron-desert-c6',
  'bazaar-spices-c2', 'bazaar-spices-c3', 'bazaar-spices-c4', 'bazaar-spices-c5', 'bazaar-spices-c6']);

// CAS judgments. Basis S005 (chemicals 1.5.2 identifier DB, PubChem-derived) + CAS check-digit arithmetic.
const CAS = {
  '1302-85-8': ['unverified', 'check digit valid; not present in S005; PubChem/CAS Common Chemistry blocked'],
  '1319-32-0': ['unverified', 'check digit valid; not present in S005; PubChem/CAS Common Chemistry blocked'],
  '142-71-2': ['contradicted', 'S005: 142-71-2 = cupric acetate C4H6CuO4 (neutral Cu(II) acetate, PubChem CID 8895), not the basic acetate formula stated'],
  '7440-57-5': ['supported', 'S005: gold, Au, CID 23985'],
  '10101-41-4': ['supported', 'S005: calcium sulfate dihydrate, CID 24928'],
  '1307-96-6': ['contradicted', 'S005: 1307-96-6 = cobalt(II) oxide CoO (CID 14786); Co3O4 is 1308-06-1 in S005'],
  '1344-48-5': ['supported', 'S005: mercuric sulfide HgS, CID 62402'],
  '12069-69-1': ['supported', 'S005: basic copper carbonate CH2Cu2O5, CID 25503'],
  '482-89-3': ['partially-supported', 'S005: indigo C16H10N2O2 (CID 5318432); the record\'s formula also contains lazurite, which this CAS does not identify'],
  '1260-15-5': ['contradicted', 'fails the CAS check-digit test (computed check digit 7); S005 gives carminic acid as 1260-17-9'],
  '9000-01-5': ['unverified', 'check digit valid; not present in S005; stated formula includes gold, which a binder CAS cannot identify'],
  '9004-34-6': ['unverified', 'check digit valid; not present in S005'],
};
const casKey = s => String(s).split(' ')[0];

// Formula judgments for specific (non-template) records. Basis S004 (RRUFF IMA export copy) / S005.
const FORMULA = {
  'isfahan-tiles-c1': ['partially-supported', 'S004 lazurite Na3Ca(Si3Al3)O12S (x2 = Na6Ca2Al6Si6O24S2); record notation "Na6Ca2[S|AlSiO4]6" has one S and adds CoO as a mixture', 'S004'],
  'isfahan-tiles-c2': ['supported', 'S004 turquoise CuAl6(PO4)4(OH)8·4H2O exact match (mineral); relevance to a copper-alkaline tile glaze not established', 'S004'],
  'isfahan-tiles-c3': ['unverified', 'basic copper acetate formula not in opened sources; see CAS row (142-71-2 is neutral acetate)', ''],
  'isfahan-tiles-c4': ['supported', 'S004 gold Au', 'S004'],
  'isfahan-tiles-c5': ['supported', 'S004 gypsum CaSO4·2H2O', 'S004'],
  'isfahan-tiles-c6': ['unverified', 'Co3O4 + C not checked in S004; conflicts with record\'s own extraction text (manganese oxide)', ''],
  'achaemenid-majesty-c1': ['partially-supported', 'S004 hematite Fe2O3; "92%" purity unsupported', 'S004'],
  'achaemenid-majesty-c2': ['unverified', 'alloy composition Au75-Ag20-Cu5 has no analysis cited', ''],
  'achaemenid-majesty-c3': ['supported', 'S005 indigo C16H10N2O2 (formula only; no evidence of indigo on the site)', 'S005'],
  'achaemenid-majesty-c4': ['unverified', 'CaCO3 = calcite (S004) but record calls the stone basalt', ''],
  'achaemenid-majesty-c5': ['unverified', 'SiO2 + CaCO3 "matrix" is not a formula', ''],
  'achaemenid-majesty-c6': ['unverified', 'Cu88-Sn12 bronze composition uncited; record colour is a black stone', ''],
  'behzad-miniature-c1': ['supported', 'S004 cinnabar HgS', 'S004'],
  'behzad-miniature-c2': ['supported', 'S004 malachite Cu2CO3(OH)2', 'S004'],
  'behzad-miniature-c3': ['partially-supported', 'indigo part matches S005; lazurite notation as in isfahan-tiles-c1', 'S005'],
  'behzad-miniature-c4': ['supported', 'S005 carminic acid C22H20O13 (formula only)', 'S005'],
  'behzad-miniature-c5': ['partially-supported', 'Au matches S004 gold; "Complex Polysaccharides" is not a formula', 'S004'],
  'behzad-miniature-c6': ['unverified', '(C6H10O5)n cellulose repeat unit is textbook but no opened source', ''],
};
const MANUSCRIPT = {
  'عرائس الجواهر و نفائس الأطایب - ابوالقاسم کاشانی (قرن هشتم هجری)': 'work and author are well known (c. 700 AH) and plausibly discuss lapis and tile making; passage not read; applied to 17th-c. Safavid tiles (chronological gap)',
  'التفهیم لأوائل صناعة التنجیم - ابوریحان بیرونی': 'al-Tafhim is an astronomy/astrology primer; al-Biruni\'s gem treatise is al-Jamahir (auditor background knowledge, not opened): suspected mis-attribution',
  'بیان الصناعات - حبیش تفلیسی (قرن ششم)': 'Hubaysh Tiflisi (6th c. AH) crafts treatise is a real work (background knowledge); verdigris passage not read',
  'گلستان هنر - قاضی احمد قمی (۱۰۱۵ هجری)': 'Qadi Ahmad\'s treatise on calligraphers and painters exists (background knowledge); gold-leaf technique passage not read',
  'معماری سنتی ایران - استاد حسین لرزاده': 'a 20th-century master builder, not a historical manuscript; exact title not verified',
  'جواهرنامه نظامی - محمد بن ابی‌البرکات جوهری نیشابوری': 'Nishaburi\'s Jawahir-nama (6th c. AH) exists (background knowledge); cobalt/manganese passage not read',
  'آثار البلاد و اخبار العباد - زکریا قزوینی': '13th-c. CE cosmography cited for an Achaemenid-period colour (chronological gap); passage not read',
  'کتیبه پی‌بنای داریوش بزرگ در شوش (DSf)': 'DSf is the Susa foundation charter, not a Persepolis/Apadana text; passage not read',
  'تاریخ طبیعی پلینی (Naturalis Historia) - کتاب ۳۳': 'Book 33 concerns metals; indigo is discussed elsewhere in Pliny (auditor background knowledge, not opened): suspected wrong locator',
  'کتیبه‌های بارعام خشایارشا در درگاه شرقی آپادانا': 'Apadana audience reliefs are sculptural; no inscription identified; passage not read',
  'الواح باروی تخت جمشید (Fortification Tablets)': 'administrative archive; relevance to stone quarrying not established; not read',
  'باستان‌شناسی فلزکاری کهن ایران - رومن گیرشمن': 'modern archaeologist; exact title not verified; not a manuscript',
  'رسالات کهن رنگرزی سنتی و صنعتی ایران زمین': 'placeholder phrase ("old treatises of Iranian dyeing"): no identifiable work',
};
// meaningFa overrides; default 'unverified'
const MEANING = {
  'isfahan-tiles-c1': ['contradicted', 'claims HEX was "corrected for accurate reflection" of the tiles; README.fa.md:21 says HEX is a design choice and data-quality.json reports 0 measured spectra', 'S007'],
  'isfahan-tiles-c2': ['unverified', '"world standard" claim; HEX #30D5C8 equals the "Turquoise" entry in S002 (a modern list, not a standard) and is not in S001', 'S002'],
  'isfahan-tiles-c3': ['partially-supported', 'S002 lists "Persian Green" #00A693: the name/HEX pair exists in a modern color-name list; "world catalogues" unspecified', 'S002'],
  'achaemenid-majesty-c1': ['unverified', '"globally registered standard colour": #CC3333 equals "Persian Red" in S002 (modern list); not a CSS named color (S001); no registry identified', 'S002'],
  'achaemenid-majesty-c3': ['contradicted', 'internal conflict: meaning says fabrics dyed with "royal shells" while mineralogical record says indigo (Indigofera); the two dye sources differ', 'S007'],
  'behzad-miniature-c4': ['unverified', '"world standard"; #701C1C equals "Persian Plum" in S002 (modern list)', 'S002'],
  'minakari-craft-c1': ['unverified', '"registered in international museums": no museum or record cited; #1C39BB equals "Persian Blue" in S002', 'S002'],
  'persian-gulf-pearls-c1': ['unverified', '"globally registered": #0067A5 equals "Medium Persian Blue" in S002 (modern list)', 'S002'],
  'persian-gulf-pearls-c3': ['contradicted', 'claims HEX was corrected against Hormuz iron oxide; README.fa.md:21 says HEX is a design choice and 0 spectra measured', 'S007'],
  'gardens-of-shiraz-c1': ['unverified', '"world standard"; #FE28A2 equals "Persian Rose" in S002 (modern list)', 'S002'],
  'khorasan-gems-c1': ['partially-supported', '"official code of turquoise": S001 defines CSS keyword turquoise = #40E0D0 (X11-derived web color, not a gemstone standard)', 'S001'],
  'yazd-saffron-desert-c1': ['unverified', '"world standard saffron colour"; #F4C430 equals "Saffron" in S002 (modern list)', 'S002'],
  'yazd-saffron-desert-c2': ['contradicted', 'claims HEX corrected for more accurate adobe tone; README.fa.md:21 says HEX is a design choice and no measurement exists', 'S007'],
  'bazaar-spices-c4': ['unverified', '"standard Pistachio Green"; #93C572 equals "Pistachio" in S002 (modern list)', 'S002'],
  'hyrcanian-forests-c1': ['contradicted', 'internal: "ice age" relict with "50 million years" age is self-inconsistent and conflicts with palette description (Jurassic)', 'S007'],
};
const UNESCO_ID = s => (String(s).match(/Ref:\s*(\d+)/) || [])[1];
const NONSYSTEM = new Set(['کریستالین بومی فلات ایران', 'متالورژی باستانی (Archaeometallurgical)', 'میکروکریستالین رسوبی', 'آلیاژ دوفازی الفا-دلتا مس-قلع']);

for (const p of Object.values(RAW_PALETTES)) for (const c of p.colors) {
  const e = c.evidence, m = e.mineralogical, g = e.geoSpatial, id = c.id;
  const generic = m.mineralName.startsWith('Persian Historical Pigment');
  const mm = matchById[id] || { css: [], wikiList: [] };
  // HEX
  const listNote = [mm.css.length ? `S001 css:${mm.css.join('/')}` : '', mm.wikiList.length ? `S002 "${mm.wikiList.join('" / "')}"` : ''].filter(Boolean).join('; ');
  add(id, 'hex', c.hex, 'color-value', listNote ? (mm.css.length ? 'S001;S002' : 'S002') : 'S001;S002', listNote || 'no exact match in S001 or S002', 'designer-choice',
    listNote ? 'exact-match-in-modern-color-list' : 'no-modern-list-match', 'none-on-record (measuredSpectra=0)', 'designer-choice',
    listNote ? 'HEX identical to a modern named-color list entry; suggests digital-list origin rather than material measurement' : 'origin of value undocumented',
    'label as designer choice; if derived from a named-color list, say so');
  // Names
  add(id, 'nameEn', c.nameEn, 'naming', mm.wikiList.length || mm.css.length ? (mm.css.length ? 'S001' : 'S002') : 'none', listNote || '-',
    mm.wikiList.some(w => w.toLowerCase() === c.nameEn.toLowerCase()) || mm.css.some(x => x === c.nameEn.toLowerCase().replace(/\s/g, '')) ? 'partially-supported' : 'illustrative',
    mm.wikiList.length || mm.css.length ? 'pair-found-in-modern-list' : 'evocative-label', 'not-applicable', 'designer-choice',
    mm.wikiList.length ? 'modern list entry is not evidence of historical use' : 'label only', 'keep as label; avoid implying historical name');
  add(id, 'nameFa', c.nameFa, 'naming', /اصیل|ناب/.test(c.nameFa) ? 'none' : 'none', '-', /اصیل|ناب/.test(c.nameFa) ? 'unverified' : 'illustrative',
    /اصیل|ناب/.test(c.nameFa) ? 'authenticity-adjective-unsupported' : 'evocative-label', 'not-applicable', 'designer-choice',
    /اصیل|ناب/.test(c.nameFa) ? 'name asserts authenticity/purity ("اصیل"/"ناب")' : 'label only', /اصیل|ناب/.test(c.nameFa) ? 'drop authenticity adjective' : 'none');
  // Meaning
  const [mev, mnote, msrc] = MEANING[id] || ['unverified', 'cultural/material assertion with no citation', ''];
  add(id, 'meaningFa', c.meaningFa, 'cultural-history', msrc || 'none-opened', msrc === 'S007' ? 'README.fa.md:21; tokens/data-quality.json' : (msrc ? 'HEX lookup' : '-'), mev,
    mev === 'contradicted' ? 'internal-conflict' : (msrc ? 'checked-against-' + msrc : 'not-checked'), mev === 'contradicted' && msrc === 'S007' && /اصلاح/.test(c.meaningFa) ? 'no-measurement-on-record' : 'not-applicable',
    'not-applicable', mnote, mev === 'contradicted' ? 'remove or correct' : 'hedge or cite');
  // Mineralogical
  let mnEv = 'unverified', mnNote = 'material attribution uncited';
  if (generic) { mnEv = NON_PIGMENT.has(id) ? 'contradicted' : 'unverified'; mnNote = NON_PIGMENT.has(id) ? 'template "Persian Historical Pigment (<name>)": subject is not a pigment (e.g. sea, snow, gem, spice, shade, wool, paper)' : 'template "Persian Historical Pigment (<name>)": no pigment identification'; }
  if (id === 'achaemenid-majesty-c4') { mnEv = 'contradicted'; mnNote = 'internal: "Bituminous Grey Basalt" vs formula CaCO3 (a carbonate, not basalt) vs name "Ancient Royal Jade"'; }
  if (id === 'achaemenid-majesty-c5') { mnEv = 'contradicted'; mnNote = 'internal: "Quartz Sandstone" vs nameEn "Alabaster" vs nameFa "marble" vs meaning "limestone and marble"'; }
  if (id === 'achaemenid-majesty-c6') { mnEv = 'contradicted'; mnNote = 'internal: bronze alloy recorded for a colour named/described as black basalt stone'; }
  add(id, 'mineralogical.mineralName', m.mineralName, 'material', mnEv === 'contradicted' ? 'S007' : 'none-opened', `heritage-data.ts ${id}.evidence.mineralogical`, mnEv,
    mnEv === 'contradicted' ? 'internal-conflict' : (generic ? 'placeholder' : 'not-checked'), 'no-analysis-on-record', 'not-applicable', mnNote, generic ? 'replace template with "unknown" or remove' : 'cite analysis or mark as inspiration');
  // Formula
  let fr = FORMULA[id] || (generic ? ['contradicted', 'template "Natural Organic / Mineral Complex (Matrix #HEX)" embeds the HEX value; not a chemical formula', 'S007'] : ['unverified', 'not checked', '']);
  add(id, 'mineralogical.chemicalFormula', m.chemicalFormula, 'chemistry', fr[2] || 'none-opened', fr[2] === 'S004' ? 'RRUFF_Export.csv row by mineral name' : fr[2] === 'S005' ? 'chemicals.identifiers.search_chemical' : '-', fr[0],
    fr[0] === 'contradicted' ? 'placeholder' : (fr[2] ? 'checked-against-' + fr[2] : 'not-checked'), 'no-analysis-on-record', 'not-applicable', fr[1],
    fr[0] === 'supported' ? 'keep formula but label as reference formula of the named material, not an analysis of this colour' : 'correct or remove');
  // CAS
  const ck = casKey(m.casNumber);
  const [cev, cnote] = ck === '7732-18-5' ? ['contradicted', 'S005: 7732-18-5 = water, H2O (PubChem CID 962); labelled "(Authentic Historical Specimen)"'] : (CAS[ck] || ['unverified', 'not checked']);
  add(id, 'mineralogical.casNumber', m.casNumber, 'chemistry-identifier', /supported|contradicted/.test(cev) && !cnote.startsWith('fails') ? 'S005' : (cnote.startsWith('fails') ? 'S005;S006' : 'S005'), `CAS ${ck}`, cev,
    cev === 'unverified' ? 'not-found-in-S005' : 'checked-against-S005', 'not-applicable', 'not-applicable', cnote,
    cev === 'supported' ? 'keep' : 'remove or replace with the CAS RN of the named substance');
  // Manuscript
  const ms = m.historicalManuscriptRef;
  add(id, 'mineralogical.historicalManuscriptRef', ms, 'documentary-reference', 'none-opened', 'no page/folio/edition given', 'unverified',
    ms.startsWith('رسالات کهن') ? 'placeholder' : 'not-checked-source-blocked', 'not-applicable', 'not-applicable', MANUSCRIPT[ms] || 'not assessed',
    ms.startsWith('رسالات کهن') ? 'remove placeholder' : 'give edition, folio/page and quoted passage, or mark as "further reading"');
  // Extraction
  let exEv = 'unverified', exNote = 'process description uncited';
  if (m.traditionalExtraction.startsWith('استخراج سنتی از منابع گیاهی')) exNote = 'template sentence repeated for 60 records';
  if (id === 'isfahan-tiles-c6') { exEv = 'contradicted'; exNote = 'internal: extraction describes manganese oxide while formula/CAS/name describe cobalt oxide + carbon'; }
  if (id === 'isfahan-tiles-c3') exNote = 'verdigris (an acetate) would decompose in a kiln; kiln-fired glaze greens are usually attributed to copper oxides (auditor background knowledge, not source-checked)';
  add(id, 'mineralogical.traditionalExtraction', m.traditionalExtraction, 'craft-process', exEv === 'contradicted' ? 'S007' : 'none-opened', '-', exEv,
    exEv === 'contradicted' ? 'internal-conflict' : (exNote.startsWith('template') ? 'placeholder' : 'not-checked'), 'not-applicable', 'not-applicable', exNote, 'cite or remove');
  // Crystal system
  const csEv = NONSYSTEM.has(m.crystalSystem) ? 'contradicted' : 'unverified';
  add(id, 'mineralogical.crystalSystem', m.crystalSystem, 'mineralogy', csEv === 'contradicted' ? 'S007' : 'none-opened', '-', csEv,
    csEv === 'contradicted' ? 'type-error' : 'not-checked', 'not-applicable', 'not-applicable',
    csEv === 'contradicted' ? 'value is not a crystal system (type error)' : (id === 'isfahan-tiles-c6' ? 'Co3O4 is usually described as cubic spinel (auditor background knowledge, not source-checked)' : 'not checked (mindat/RRUFF pages blocked; S004 copy has no crystal-system column)'),
    csEv === 'contradicted' ? 'remove or use a real crystal system' : 'verify');
  // Site and coordinates
  const lat = g.coordinates.lat, lng = g.coordinates.lng;
  add(id, 'geoSpatial.originSite', `${g.originSite} | ${g.originSiteFa}`, 'geography', 'none-opened', '-', g.originSite === 'Iranian Plateau Heritage Sites' ? 'unverified' : 'unverified',
    g.originSite === 'Iranian Plateau Heritage Sites' ? 'placeholder' : 'not-checked', 'not-applicable', 'not-applicable',
    g.originSite === 'Iranian Plateau Heritage Sites' ? 'non-specific placeholder site' : (id === 'achaemenid-majesty-c1' ? 'combines Hormuz Island and Persepolis (~473 km apart) in one origin' : 'site-to-colour link not documented'),
    'name a specific site or remove');
  let coEv = 'unverified', coNote = 'no reference coordinate opened', coSrc = 'none-opened', coLoc = '-';
  const wid = UNESCO_ID(g.unescoHeritageRef);
  if (g.originSite === 'Iranian Plateau Heritage Sites') { coEv = 'contradicted'; coNote = 'synthetic: lat = 32.4279 + 0.5*i, lng = 53.688 + 0.3*i, alt 1400; the same six points are reused by 10 palettes regardless of region (Gulf, Caspian, Khorasan, Shiraz)'; coSrc = 'S007'; coLoc = 'analyze-data.out.json syntheticPlateauPattern'; }
  else if (wid && uwhs[wid]) {
    const d = hav(lat, lng, uwhs[wid].lat, uwhs[wid].lon); coSrc = 'S003'; coLoc = `ref_no ${wid} (${uwhs[wid].lat}, ${uwhs[wid].lon})`;
    if (d > 25) { coEv = 'contradicted'; coNote = `${km(d)} km from the WHC ${wid} (${uwhs[wid].name}) reference point cited in the same record`; }
    else { coEv = 'partially-supported'; coNote = `${km(d)} km from WHC ${wid} (${uwhs[wid].name}) reference point; building-level position not verified`; }
  }
  const alt = e.geo;
  if (alt.latitude !== lat || alt.longitude !== lng) coNote += `; conflicting legacy geo ${alt.latitude},${alt.longitude} is ${km(hav(lat, lng, alt.latitude, alt.longitude))} km away`;
  add(id, 'geoSpatial.coordinates', `${lat},${lng},${g.coordinates.altitudeMeters ?? ''}`, 'geography', coSrc, coLoc, coEv,
    coEv === 'contradicted' && coSrc === 'S007' ? 'synthetic-value' : (coSrc === 'S003' ? 'checked-against-S003' : 'not-checked'), 'not-applicable', 'not-applicable', coNote,
    coEv === 'partially-supported' ? 'keep; cite reference point and precision' : 'remove or replace with sourced coordinates');
  // UNESCO ref
  let uEv = 'unverified', uNote = 'non-specific or not checkable', uSrc = 'none-opened', uLoc = '-';
  if (wid && uwhs[wid]) { uEv = 'supported'; uSrc = 'S003'; uLoc = `ref_no ${wid}`; uNote = `S003: ref_no ${wid} = "${uwhs[wid].name}" (${uwhs[wid].date_inscribed})`;
    if (id === 'isfahan-tiles-c5') { uEv = 'partially-supported'; uNote += '; but historicalContextFa refers to the Öljeitü mihrab, which lies in WHC 1397 (Masjed-e Jame), as the legacy geo record says'; }
    if (id === 'achaemenid-majesty-c1') { uEv = 'partially-supported'; uNote += '; ID is correct for Persepolis but the record\'s coordinates are Hormuz Island'; } }
  if (id === 'isfahan-tiles-c2') uNote = '"UNESCO tangible industrial-mining heritage": no Neyshabur property in S003 (2014); legacy geo record calls it a World Crafts Council designation instead';
  add(id, 'geoSpatial.unescoHeritageRef', g.unescoHeritageRef, 'heritage-designation', uSrc, uLoc, uEv, uSrc === 'S003' ? 'checked-against-S003' : (g.unescoHeritageRef.startsWith('ثبت میراث فرهنگی ملموس') ? 'placeholder' : 'not-checked'),
    'not-applicable', 'not-applicable', uNote, uEv === 'supported' ? 'keep; link whc.unesco.org/en/list/' + wid : 'remove generic UNESCO wording');
  // Legacy alternative geo record for conflicting colours
  if (alt.latitude !== lat || alt.longitude !== lng) {
    const altName = String(alt.unescoSiteId);
    const altId = UNESCO_ID(altName) || ({ 'Tabriz Historic Bazaar Complex': '1346', 'Samarkand - Crossroad of Cultures': '603' })[altName];
    let aEv = 'unverified', aNote = `alternative record "${altName}" not an identifiable WHC property in S003`, aSrc = 'none-opened';
    if (altId && uwhs[altId]) { const d = hav(alt.latitude, alt.longitude, uwhs[altId].lat, uwhs[altId].lon); aSrc = 'S003';
      aEv = d < 25 ? 'partially-supported' : 'contradicted'; aNote = `${km(d)} km from WHC ${altId} (${uwhs[altId].name}) reference point`; }
    add(id, 'geo (legacy alternative) latitude/longitude + unescoSiteId', `${alt.locationFa} | ${alt.latitude},${alt.longitude},${alt.elevationMeters} | ${altName}`, 'geography', aSrc, altId ? `ref_no ${altId}` : '-', aEv,
      aSrc === 'S003' ? 'checked-against-S003' : 'not-checked', 'not-applicable', 'not-applicable', aNote + '; retained as unresolved conflict by palettes.ts', 'resolve conflict with a cited source');
  }
  // Spectral
  add(id, 'spectral.peakWavelengthNm', `${e.spectral.peakWavelengthNm} nm (dominant ${e.spectral.dominantWavelengthNm} nm)`, 'spectral', 'S007', 'palettes.ts provenance.spectralStatus', 'illustrative',
    'not-applicable', 'not-measured (measuredSpectra=0)', 'not-applicable', e.spectral.peakWavelengthNm === e.spectral.dominantWavelengthNm ? 'peak equals dominant wavelength (template)' : 'model value', 'keep labelled illustrative');
  // Historical context and art movement
  const hcDup = e.historicalContextFa === c.meaningFa;
  add(id, 'historicalContextFa', e.historicalContextFa, 'cultural-history', 'none-opened', '-', 'unverified', hcDup ? 'duplicate-of-meaningFa' : 'not-checked', 'not-applicable', 'not-applicable',
    hcDup ? 'copy of meaningFa, not independent context' : (id === 'isfahan-tiles-c5' ? 'Ilkhanid Öljeitü mihrab cited inside a Safavid palette whose selected site is Sheikh Lotfollah' : (id === 'behzad-miniature-c4' ? 'Safavid Isfahan/Reza Abbasi context inside a Behzad (Timurid Herat) palette' : 'uncited')), 'cite or remove');
  const amDup = e.artMovement === p.nameFa;
  add(id, 'artMovement', e.artMovement, 'art-history', 'none-opened', '-', 'unverified', amDup ? 'duplicate-of-palette-name' : 'not-checked', 'not-applicable', 'not-applicable',
    amDup ? 'copy of palette nameFa, not a movement' : 'uncited attribution', amDup ? 'remove or replace' : 'cite');
  // Molar mass (raw only; normalisation drops it from the published object)
  const mm2 = e.chemical.molarMass;
  const MM = { 'isfahan-tiles-c2': ['supported', 'recomputed 813.44 for stated formula'], 'isfahan-tiles-c3': ['contradicted', 'recomputed 376.76 for stated formula (stated 370.2)'],
    'isfahan-tiles-c4': ['supported', 'recomputed 196.97'], 'isfahan-tiles-c5': ['supported', 'recomputed 172.17'], 'isfahan-tiles-c6': ['partially-supported', '240.80 is Co3O4 alone; stated formula adds C and CAS is CoO'],
    'isfahan-tiles-c1': ['unverified', 'a mixture has no single molar mass; lazurite alone recomputes to 996.61'], 'behzad-miniature-c1': ['supported', 'recomputed 232.66'],
    'behzad-miniature-c2': ['supported', 'recomputed 221.12'], 'behzad-miniature-c3': ['partially-supported', '262.26 is indigo only; formula is a mixture'], 'behzad-miniature-c4': ['supported', 'recomputed 492.39'],
    'behzad-miniature-c5': ['partially-supported', '196.97 is gold only'], 'behzad-miniature-c6': ['partially-supported', '162.14 is the anhydroglucose repeat unit of a polymer'] };
  const [mmEv, mmNote] = MM[id] || ['unverified', mm2 === 'Calculated Complex' ? 'not a value ("Calculated Complex")' : 'not checked'];
  add(id, 'chemical.molarMass (raw; dropped by normaliser)', mm2, 'chemistry-arithmetic', MM[id] ? 'S005;S006' : 'none', MM[id] ? 'molar-mass-check.out.tsv' : '-', mmEv,
    MM[id] ? 'arithmetic-check' : 'placeholder', 'not-applicable', 'not-applicable', mmNote + ' (arithmetic consistency only; not evidence the material is present)', 'drop from source data (already excluded from normalised output)');
}

const esc = v => /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
const header = ['claim_id', 'record_id', 'field', 'exact_claim', 'claim_category', 'source_id', 'locator', 'evidence_status', 'documentary_status', 'measurement_status', 'design_status', 'uncertainty', 'reviewer', 'proposed_action'];
writeFileSync(outFile, [header, ...rows].map(r => r.map(x => esc(String(x))).join(',')).join('\n') + '\n', 'utf8');
const tally = {}; for (const r of rows) tally[r[7]] = (tally[r[7]] ?? 0) + 1;
console.log(JSON.stringify({ rows: rows.length, byEvidenceStatus: tally }, null, 1));
