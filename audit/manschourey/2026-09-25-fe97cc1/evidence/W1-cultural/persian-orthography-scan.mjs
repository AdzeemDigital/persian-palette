// W1 Persian orthography scan (read-only). Usage: node persian-orthography-scan.mjs <repo-root>
// Counts script variants per file and lists suspicious spacing / ZWNJ / superlative patterns with file:line.
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.argv[2] || '.';
const files = ['packages/core/src/tokens/heritage-data.ts', 'app/app.js', 'app/template.html', 'app/enhancements.js',
  'README.fa.md', 'implementation_plan.md', 'walkthrough.md'];
const chars = {
  'U+064A ARABIC YEH ي': /ي/g, 'U+06CC FARSI YEH ی': /ی/g, 'U+0649 ALEF MAKSURA ى': /ى/g,
  'U+0643 ARABIC KAF ك': /ك/g, 'U+06A9 KEHEH ک': /ک/g, 'U+0629 TEH MARBUTA ة': /ة/g,
  'U+06C0 HEH WITH YEH ۀ': /ۀ/g, 'U+0654 HAMZA ABOVE ٔ': /ٔ/g, 'U+0621 HAMZA ء': /ء/g,
  'U+0623 ALEF HAMZA ABOVE أ': /أ/g, 'U+0625 ALEF HAMZA BELOW إ': /إ/g, 'U+0622 ALEF MADDA آ': /آ/g,
  'U+0624 WAW HAMZA ؤ': /ؤ/g, 'U+0626 YEH HAMZA ئ': /ئ/g,
  'U+064B-0652 harakat': /[ً-ْ]/g, 'U+0640 TATWEEL': /ـ/g,
  'U+200C ZWNJ': /‌/g, 'U+200D ZWJ': /‍/g, 'U+200F RLM': /‏/g, 'U+00A0 NBSP': / /g,
  'Persian digits ۰-۹': /[۰-۹]/g, 'Arabic-Indic digits ٠-٩': /[٠-٩]/g,
  'Arabic comma ،': /،/g, 'Arabic question ؟': /؟/g, 'Arabic semicolon ؛': /؛/g,
};
const patterns = {
  'mi-space-verb (می + space)': /(^|[\s(])می (?=[؀-ۿ])/g,
  'space-ha plural ( ها / های)': /[؀-ۿ] (ها|های|هایی)(?=[\s،.:)؛]|$)/g,
  'heh + space + ای (should be ه‌ای)': /[؀-ۿ]ه ای(?=[\s،.)]|$)/g,
  'ZWNJ adjacent to space': /‌\s|\s‌/g,
  'double ZWNJ': /‌‌/g,
  'ASCII digits inside Persian run': /[؀-ۿ]\s?[0-9]+\s?[؀-ۿ]/g,
  'Latin comma after Persian': /[؀-ۿ],/g,
};
const superlatives = ['اصیل', 'استاندارد جهانی', 'دقیق', 'فاخر', 'آزمایشگاه', 'ناب', 'کامل', 'جاودان', 'کهن‌ترین', 'رسمی', 'ثبت‌شده جهانی', 'ثبت‌شده', '۱۰۰٪', 'Authentic', 'Enterprise', 'World-class'];
const report = { files: {}, patterns: [], superlatives: [] };
for (const f of files) {
  let text;
  try { text = readFileSync(path.join(root, f), 'utf8'); } catch { report.files[f] = 'missing'; continue; }
  const counts = {};
  for (const [k, re] of Object.entries(chars)) counts[k] = (text.match(re) || []).length;
  report.files[f] = counts;
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    for (const [k, re] of Object.entries(patterns)) for (const m of line.matchAll(re))
      report.patterns.push({ file: f, line: i + 1, pattern: k, excerpt: line.slice(Math.max(0, m.index - 20), m.index + 30).trim() });
    for (const s of superlatives) {
      let idx = line.indexOf(s);
      while (idx !== -1) {
        report.superlatives.push({ file: f, line: i + 1, term: s, excerpt: line.slice(Math.max(0, idx - 30), idx + 40).replace(/\s+/g, ' ').trim() });
        idx = line.indexOf(s, idx + s.length);
      }
    }
  });
}
// Arabic yeh / kaf contexts
report.arabicLetterContexts = [];
for (const f of files) {
  let text; try { text = readFileSync(path.join(root, f), 'utf8'); } catch { continue; }
  text.split('\n').forEach((line, i) => {
    for (const m of line.matchAll(/[يكىة]/g))
      report.arabicLetterContexts.push({ file: f, line: i + 1, char: 'U+' + m[0].codePointAt(0).toString(16).toUpperCase().padStart(4, '0'), excerpt: line.slice(Math.max(0, m.index - 15), m.index + 15).trim() });
  });
}
console.log(JSON.stringify(report, null, 1));
