// W1 diagnostic: behaviour of normalizeColorName / PersianEngine.getColor for Persian/Arabic variants.
// Usage: SCRATCH=<scratch dir> node normalization-probe.mjs > normalization-probe.out.txt
// Runs against $SCRATCH/work/packages/core/dist/index.js (built isolated clone at fe97cc1). Read-only.
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SCRATCH = process.env.SCRATCH;
if (!SCRATCH) { console.error('Set SCRATCH'); process.exit(2); }
const core = await import(pathToFileURL(path.join(SCRATCH, 'work/packages/core/dist/index.js')).href);
const { normalizeColorName: n, PersianEngine } = core;
const cp = s => [...s].map(c => 'U+' + c.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')).join(' ');

// [label, a, b, expectation] expectation: 'equal' = a Persian reader would treat them as the same query
const pairs = [
  ['ZWNJ vs none', 'فیروزه‌ای', 'فیروزهای', 'equal'],
  ['ZWNJ vs space', 'فیروزه‌ای', 'فیروزه ای', 'equal'],
  ['Arabic yeh U+064A vs Farsi yeh', 'لاجوردي', 'لاجوردی', 'equal'],
  ['Alef maksura U+0649 vs Farsi yeh', 'لاجوردى', 'لاجوردی', 'equal'],
  ['Arabic kaf U+0643 vs keheh', 'كاشی', 'کاشی', 'equal'],
  ['Swash kaf U+06AA vs keheh', 'ڪاشی', 'کاشی', 'equal'],
  ['Heh+hamza above (U+0647 U+0654) vs heh', 'خامهٔ', 'خامه', 'equal'],
  ['Heh with yeh U+06C0 vs heh', 'خامۀ', 'خامه', 'equal'],
  ['Heh with yeh U+06C0 vs heh+hamza', 'خامۀ', 'خامهٔ', 'equal'],
  ['Teh marbuta U+0629 vs heh', 'صناعة', 'صناعه', 'equal'],
  ['Alef hamza above U+0623 vs alef', 'الأطایب', 'الاطایب', 'equal'],
  ['Alef hamza below U+0625 vs alef', 'إصفهان', 'اصفهان', 'equal'],
  ['Alef madda U+0622 vs alef', 'آبی', 'ابی', 'distinct (آ is a separate Persian letter; folding optional)'],
  ['Yeh hamza U+0626 vs yeh', 'عرائس', 'عرایس', 'equal (common spelling variant)'],
  ['Decomposed alef+hamza (U+0627 U+0654) vs U+0623', 'أ', 'أ', 'equal'],
  ['Harakat (fatha/kasra) stripped', 'مَنشورِی', 'منشوری', 'equal'],
  ['Tatweel stripped', 'لاجـــوردی', 'لاجوردی', 'equal'],
  ['Persian digits vs ASCII', '۷۲', '72', 'equal'],
  ['Arabic-Indic digits vs ASCII', '٧٢', '72', 'equal'],
  ['Arabic-Indic vs Persian digits', '٧٢', '۷۲', 'equal'],
  ['Hex with Persian digits', '#۱۲۰A8F', '#120A8F', 'equal'],
  ['Arabic presentation form (NFKC) vs base', 'ﻻ', 'لا', 'equal'],
  ['English case', 'Persian Blue', 'persian blue', 'equal'],
  ['Punctuation stripped', 'Rig-e Jenn', 'Rig e Jenn', 'equal'],
];
const lines = [];
lines.push(`# normalizeColorName probe — core ${core.VERSION ?? '(VERSION export missing)'} — node ${process.version}`);
lines.push('label | a | b | n(a) | n(b) | equal? | expectation | verdict');
let mismatches = 0;
for (const [label, a, b, exp] of pairs) {
  const na = n(a), nb = n(b), eq = na === nb;
  const want = exp.startsWith('equal');
  const verdict = exp.startsWith('distinct') ? 'info' : (eq === want ? 'ok' : 'GAP');
  if (verdict === 'GAP') mismatches++;
  lines.push(`${label} | ${a} [${cp(a)}] | ${b} | ${na} [${cp(na)}] | ${nb} [${cp(nb)}] | ${eq} | ${exp} | ${verdict}`);
}
lines.push(`GAP count: ${mismatches} of ${pairs.length}`);

lines.push('\n# PersianEngine.getColor end-to-end lookups');
const lookups = [
  ['isfahan-tiles', 'لاجوردی'], ['isfahan-tiles', 'لاجوردي'], ['isfahan-tiles', 'لاجوردى'],
  ['isfahan-tiles', 'فیروزه‌ای اصیل'], ['isfahan-tiles', 'فيروزه اي اصيل'], ['isfahan-tiles', 'فیروزهای اصیل'],
  ['isfahan-tiles', 'سرمه‌ای مقرنس'], ['isfahan-tiles', 'سرمه ای مقرنس'],
  ['nomadic-rugs', 'کرم خامه پشمی'], ['nomadic-rugs', 'کرم خامۀ پشمی'], ['nomadic-rugs', 'كرم خامه پشمي'],
  ['yazd-saffron-desert', 'Rig-e Jenn Red Agate'], ['yazd-saffron-desert', 'rig e jenn red agate'],
  ['achaemenid-majesty', 'Tacara Basalt Black'], ['achaemenid-majesty', 'Tachara Basalt Black'],
  ['isfahan-tiles', '#120A8F'], ['isfahan-tiles', 'isfahan-tiles-c1'], ['isfahan-tiles', 'ای'],
];
for (const [pid, q] of lookups) {
  try { const t = PersianEngine.getColor(pid, q); lines.push(`${pid} "${q}" -> ${t.id} ${t.hex} (${t.nameFa})`); }
  catch (e) { lines.push(`${pid} "${q}" -> ${e.name}: ${e.message}`); }
}
console.log(lines.join('\n'));
