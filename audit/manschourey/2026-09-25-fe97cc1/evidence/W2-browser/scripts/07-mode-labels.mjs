// 07 Do the "AAA"-labelled shuffle modes always yield >=7:1 heading/background? (both body & heading use same colour)
import { launch, save, sleep, URLS } from './lib.mjs';
const b = await launch(); const p = await (await b.newContext()).newPage();
await p.goto(URLS.fa); await sleep(400);
const r = await p.evaluate(() => PERSIAN_PALETTES.map(pl => { const o = { id: pl.id };
  for (const m of ['dark', 'light']) { const x = getCalibratedRoles(pl, m); o[m] = +getContrastRatio(pl.colors[x.bg].hex, pl.colors[x.heading].hex).toFixed(2);
    o[m + '_primaryBtn'] = +getContrastRatio(pl.colors[x.primary].hex, getOptimalTextColor(pl.colors[x.primary].hex)).toFixed(2);
    o[m + '_accentVsBg'] = +getContrastRatio(pl.colors[x.bg].hex, pl.colors[x.accent].hex).toFixed(2); }
  return o; }));
const summary = { darkBelow7: r.filter(x => x.dark < 7).map(x => x.id + ':' + x.dark), lightBelow7: r.filter(x => x.light < 7).map(x => x.id + ':' + x.light), lightBelow4_5: r.filter(x => x.light < 4.5).map(x => x.id + ':' + x.light) };
save('07-mode-labels.json', { rows: r, summary }); console.log(JSON.stringify(summary, null, 1)); await b.close();
