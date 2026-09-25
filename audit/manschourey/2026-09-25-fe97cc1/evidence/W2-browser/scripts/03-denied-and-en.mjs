// 03 Camera permission denied (Chromium --deny-permission-prompts) + EN edition fresh-load untranslated leftovers per dialog.
import { launch, instrument, newLog, save, shot, sleep, URLS } from './lib.mjs';
const BASE = process.env.BASE || 'http://127.0.0.1:4199/';
const R = {};
{
  const b = await launch(['--use-fake-device-for-media-stream', '--deny-permission-prompts']);
  const c = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await c.newPage(); const l = newLog(); await instrument(p, l);
  await p.goto(BASE); await sleep(400);
  await p.evaluate(() => { openEvidenceDashboard('isfahan-tiles', 0); openARSimulator(); });
  await p.click('#arBtnModeCamera'); await sleep(2500);
  R.deniedCamera = await p.evaluate(() => ({ stream: !!arVideoStream, errVisible: !arCameraErrorMsg.classList.contains('hidden'), text: arCameraErrorMsg.innerText.replace(/\s+/g, ' ').trim(), liveRegion: !!arCameraErrorMsg.closest('[role=alert],[aria-live]') }));
  R.deniedCamera.console = l.console.filter(m => /camera|AR /i.test(m.text)).map(m => m.text.slice(0, 160));
  await shot(p, 'wf-ar-camera-denied.jpg', { clip: { x: 200, y: 50, width: 1040, height: 800 } });
  await b.close();
}
{
  const b = await launch();
  const c = await b.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'dark' });
  const p = await c.newPage(); await instrument(p, newLog());
  await p.goto(URLS.en); await sleep(500);
  const scan = sel => p.evaluate(sel => {
    const root = sel ? document.querySelector(sel) : document.body; const out = [];
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const n = w.currentNode, t = n.textContent.trim(); if (!t || !/[؀-ۿ]/.test(t)) continue; const el = n.parentElement;
      if (!el || el.closest('script,style') || (el.closest('.hidden') && !sel) || !el.getClientRects().length) continue;
      if (sel && el.closest('.hidden')) continue;
      out.push(t.replace(/\s+/g, ' ').slice(0, 80)); }
    const total = (root.innerText || '').length;
    return { count: out.length, total, samples: [...new Set(out)].slice(0, 30) };
  }, sel);
  R.enMain = await scan(null);
  R.enMeta = await p.evaluate(() => ({ title: document.title, lang: document.documentElement.lang, dir: document.documentElement.dir, skip: document.querySelector('.skip-link').textContent,
    labels: [...document.querySelectorAll('[aria-label]')].map(e => e.getAttribute('aria-label')).filter(v => /[؀-ۿ]/.test(v)).slice(0, 20) }));
  const opens = { evidence: ['#evidenceDashboardModal', () => openEvidenceDashboard('isfahan-tiles', 0)], drawer: ['#previewDrawer', () => togglePreviewDrawer()], export: ['#exportModal', () => openExportAllModal()],
    mixer: ['#mixerModal', () => openMixerModal()], npm: ['#npmModal', () => openNpmModal()], sci: ['#scientificModal', () => openScientificModalForActive()], matrix: ['#matrixModal', () => openContrastMatrixForActive()],
    gradient: ['#gradientModal', () => openGradientModal('isfahan-tiles')], ar: ['#arSimulatorModal', () => { openEvidenceDashboard('isfahan-tiles', 0); openARSimulator(); }] };
  R.enDialogs = {};
  for (const [k, [sel, fn]] of Object.entries(opens)) {
    await p.evaluate(fn); await sleep(250);
    R.enDialogs[k] = await scan(sel);
    if (k === 'evidence' || k === 'drawer') await shot(p, `en-dialog-${k}.jpg`);
    for (let i = 0; i < 3; i++) { await p.keyboard.press('Escape'); await sleep(80); }
  }
  // toast in EN
  await p.evaluate(() => toggleSpatialMode()); R.enToastSpatial = await p.evaluate(() => toastTitle.textContent + ' | ' + toastDesc.textContent);
  await p.evaluate(() => cycleCardShuffle('isfahan-tiles')); R.enToastShuffle = await p.evaluate(() => toastTitle.textContent + ' | ' + toastDesc.textContent + ' | btn=' + document.getElementById('card-btn-primary-isfahan-tiles').textContent.trim() + ' | badge=' + document.getElementById('card-badge-isfahan-tiles').textContent.trim());
  await b.close();
}
save('03-denied-and-en.json', R);
console.log(JSON.stringify({ denied: R.deniedCamera, meta: R.enMeta, main: R.enMain.count, dialogs: Object.fromEntries(Object.entries(R.enDialogs).map(([k, v]) => [k, v.count + ' / samples: ' + v.samples.slice(0, 6).join(' ¦ ')])), t1: R.enToastSpatial, t2: R.enToastShuffle }, null, 1));
