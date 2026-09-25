// 08 400% zoom of a 1280x1024 window = 320x256 CSS px viewport (SC 1.4.10). Is page content visible below the sticky header?
import { launch, save, shot, sleep, URLS, instrument, newLog } from './lib.mjs';
const b = await launch(); const out = {};
for (const ed of ['fa', 'en']) for (const vp of [{ width: 320, height: 256 }, { width: 640, height: 512 }]) {
  const c = await b.newContext({ viewport: vp }); const p = await c.newPage(); await instrument(p, newLog());
  await p.goto(URLS[ed]); await sleep(400);
  const m = async () => p.evaluate(() => { const h = document.querySelector('header').getBoundingClientRect(); return { headerH: Math.round(h.height), headerTop: Math.round(h.top), vh: innerHeight, sticky: getComputedStyle(document.querySelector('header')).position, visibleContentPx: Math.max(0, innerHeight - Math.max(0, h.bottom)) }; });
  const k = `${ed}-${vp.width}x${vp.height}`;
  out[k] = { top: await m() };
  await p.evaluate(() => window.scrollTo(0, 1500)); await sleep(300); out[k].scrolled = await m();
  if (ed === 'fa' && vp.width === 320) await shot(p, 'zoom400-320x256-fa-scrolled.jpg');
  // open evidence dialog: can the close button be reached/seen?
  await p.evaluate(() => openEvidenceDashboard('isfahan-tiles', 0)); await sleep(300);
  out[k].dialog = await p.evaluate(() => { const d = evidenceDashboardModal.firstElementChild.getBoundingClientRect(); return { dialogH: Math.round(d.height), scrollable: evidenceDashboardModal.scrollHeight > evidenceDashboardModal.clientHeight || d.height <= innerHeight }; });
  if (ed === 'fa' && vp.width === 320) await shot(p, 'zoom400-320x256-fa-evidence.jpg');
  await c.close();
}
save('08-zoom400.json', out); console.log(JSON.stringify(out, null, 1)); await b.close();
