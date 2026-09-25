// 06 Lab performance + graphics: payload breakdown, 5 cold loads/edition, long tasks, heap before/after 10x heavy views,
// idle WebGL rendering while drawer is closed, radar loop after tab switch, WebGL unavailable, context loss,
// plus targeted light-theme contrast measurements. Headless Chromium lab numbers, NOT field Core Web Vitals.
import { launch, instrument, newLog, save, shot, setTheme, sleep, URLS, WORK } from './lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
const R = { caveat: 'Headless Chromium 141 (SwiftShader software WebGL), 4 vCPU VM, no throttling, file:// load; lab-only, not field CWV.' };

// Payload breakdown
{
  const html = fs.readFileSync(path.join(WORK, 'code_artifact.html'), 'utf8');
  const blocks = [...html.matchAll(/<(script|style)>([\s\S]*?)<\/\1>/g)].map(m => ({ tag: m[1], bytes: Buffer.byteLength(m[2]), head: m[2].slice(0, 60).replace(/\s+/g, ' ') }));
  const b64 = [...html.matchAll(/data:(font\/[a-z0-9]+);base64,([A-Za-z0-9+/=]+)/g)].reduce((a, m) => (a[m[1]] = (a[m[1]] || 0) + m[2].length, a), {});
  R.payload = { totalBytes: Buffer.byteLength(html), blocks, base64FontBytes: b64 };
}
const browser = await launch();
const initObs = () => { window.__lt = []; try { new PerformanceObserver(l => { for (const e of l.getEntries()) window.__lt.push(Math.round(e.duration)); }).observe({ type: 'longtask', buffered: true }); } catch {} };
R.loads = {};
for (const ed of ['fa', 'en']) {
  R.loads[ed] = [];
  for (let i = 0; i < 5; i++) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await ctx.addInitScript(initObs);
    const page = await ctx.newPage(); await instrument(page, newLog());
    await page.goto(URLS[ed], { waitUntil: 'load' }); await sleep(1500);
    R.loads[ed].push(await page.evaluate(() => { const n = performance.getEntriesByType('navigation')[0]; const p = Object.fromEntries(performance.getEntriesByType('paint').map(e => [e.name, Math.round(e.startTime)]));
      return { dcl: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd), fcp: p['first-contentful-paint'], longTasks: window.__lt, longTaskTotal: window.__lt.reduce((a, b) => a + b, 0), domNodes: document.getElementsByTagName('*').length }; }));
    await ctx.close();
  }
}
const med = a => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
R.loadMedians = Object.fromEntries(Object.entries(R.loads).map(([k, v]) => [k, { dcl: med(v.map(x => x.dcl)), load: med(v.map(x => x.load)), fcp: med(v.map(x => x.fcp)), longTaskTotal: med(v.map(x => x.longTaskTotal)), maxLongTask: Math.max(...v.flatMap(x => x.longTasks)) }]));

// Heap + heavy views + idle rendering
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage(); await instrument(page, newLog());
  const cdp = await ctx.newCDPSession(page); await cdp.send('Performance.enable');
  await page.goto(URLS.fa); await sleep(1500);
  const heap = async () => { await cdp.send('HeapProfiler.collectGarbage'); await sleep(300); const m = (await cdp.send('Performance.getMetrics')).metrics; const g = k => m.find(x => x.name === k)?.value;
    return { heapUsedMB: +(g('JSHeapUsedSize') / 1048576).toFixed(2), nodes: g('Nodes'), listeners: g('JSEventListeners'), docs: g('Documents') }; };
  const metric = async k => (await cdp.send('Performance.getMetrics')).metrics.find(x => x.name === k).value;
  R.heap = { afterLoad: await heap() };
  // idle cost with drawer CLOSED
  const f0 = await page.evaluate(() => threeRenderer.info.render.frame); const td0 = await metric('TaskDuration');
  await sleep(3000);
  const f1 = await page.evaluate(() => threeRenderer.info.render.frame); const td1 = await metric('TaskDuration');
  R.idleDrawerClosed = { webglFramesIn3s: f1 - f0, mainThreadTaskSecondsIn3s: +(td1 - td0).toFixed(3), drawerHidden: await page.evaluate(() => previewDrawer.classList.contains('hidden')) };
  // radar loop keeps running after switching tab away?
  R.radar = await page.evaluate(async () => { openScientificModalForActive(); switchScientificTab('radar'); await new Promise(r => setTimeout(r, 300)); switchScientificTab('tonal'); const a0 = radarAngle; await new Promise(r => setTimeout(r, 1000)); const a1 = radarAngle; closeScientificModal(); const a2 = radarAngle; await new Promise(r => setTimeout(r, 500)); return { angleAdvanceWhileHiddenTab1s: +(a1 - a0).toFixed(3), afterCloseAdvance: +(radarAngle - a2).toFixed(3) }; });
  // 10x heavy views
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => { openEvidenceDashboard('isfahan-tiles', 0); ['chemical', 'geospatial', 'mixer', 'photogrammetry', 'tokens', 'spectral'].forEach(switchEvidenceTab); });
    await sleep(150); await page.keyboard.press('Escape');
    await page.evaluate(() => { togglePreviewDrawer(); changeThreeGeometry(['torusKnot', 'icosahedron', 'octahedron', 'dodecahedron'][Math.floor(Math.random() * 4)]); });
    await sleep(200); await page.keyboard.press('Escape');
    await page.evaluate(() => { openScientificModalForActive(); switchScientificTab('radar'); switchScientificTab('harmony'); switchScientificTab('tokens'); });
    await sleep(150); await page.keyboard.press('Escape'); await sleep(100);
  }
  R.heap.after10Cycles = await heap();
  R.heap.threeMemory = await page.evaluate(() => threeRenderer.info.memory);
  for (let i = 0; i < 10; i++) { await page.evaluate(n => setLanguage(n % 2 ? 'fa' : 'en'), i); }
  R.heap.after10LangToggles = await heap();
  // long tasks during interactions
  R.interactionTiming = await page.evaluate(async () => { const t = []; for (const fn of [() => setLanguage('en'), () => setLanguage('fa'), () => renderPalettes(), () => openEvidenceDashboard('isfahan-tiles', 0), () => openExportAllModal(), () => { currentExportTab = 'tokens'; updateExportCodeView(); }]) { const s = performance.now(); fn(); t.push(Math.round(performance.now() - s)); } return { setLangEn: t[0], setLangFa: t[1], renderPalettes: t[2], openEvidence: t[3], openExport: t[4], exportTokensView: t[5] }; });
  // context loss
  R.contextLoss = await page.evaluate(async () => { const errs = []; const gl = threeRenderer.getContext(); const ext = gl.getExtension('WEBGL_lose_context'); ext.loseContext(); await new Promise(r => setTimeout(r, 400)); togglePreviewDrawer(); await new Promise(r => setTimeout(r, 300)); const handled = /webglcontextlost/.test(String(initThreeJsShowcase)); return { lost: gl.isContextLost(), appHandlesContextLost: handled }; });
  await shot(page, 'webgl-context-lost-drawer.jpg', { clip: { x: 200, y: 50, width: 1040, height: 700 } });
  await ctx.close();
}
// WebGL unavailable
{
  const b2 = await launch(['--disable-gpu', '--disable-webgl', '--disable-3d-apis', '--disable-software-rasterizer']);
  const ctx = await b2.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage(); const log = newLog(); await instrument(page, log);
  await page.goto(URLS.fa); await sleep(800);
  R.noWebGL = { initial: await page.evaluate(() => ({ renderer: typeof threeRenderer !== 'undefined' && !!threeRenderer, hud: document.querySelector('[data-i18n=hudGpuVal]').textContent, webgl: !!document.createElement('canvas').getContext('webgl') })) };
  await page.click('header button[onclick="togglePreviewDrawer()"]'); await sleep(300);
  for (const sel of ['#threeRotateBtn', '#threeWireBtn']) await page.click(sel).catch(e => log.pageErrors.push('click ' + sel + ': ' + e));
  await page.selectOption('#threeGeometrySelect', 'torusKnot'); await sleep(200);
  R.noWebGL.drawerMessage = await page.evaluate(() => threeJsCanvasContainer.innerText.replace(/\s+/g, ' ').trim());
  R.noWebGL.console = log.console.map(c => c.type + ': ' + c.text.slice(0, 160)); R.noWebGL.pageErrors = log.pageErrors;
  await shot(page, 'webgl-unavailable-drawer.jpg', { clip: { x: 200, y: 50, width: 1040, height: 700 } });
  await b2.close();
}
// Targeted light-theme contrast (computed styles, solid layers composited manually)
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await setTheme(ctx, 'light', 'fa');
  const page = await ctx.newPage(); await page.goto(URLS.fa); await sleep(500);
  R.lightTargets = await page.evaluate(() => {
    const parse = s => { const m = s.match(/rgba?\(([^)]+)\)/); const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p[3] ?? 1 }; };
    const lum = c => { const f = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
    const ratio = (a, b) => { const x = lum(a), y = lum(b); return +((Math.max(x, y) + .05) / (Math.min(x, y) + .05)).toFixed(2); };
    const over = (t, b) => ({ r: t.r * t.a + b.r * (1 - t.a), g: t.g * t.a + b.g * (1 - t.a), b: t.b * t.a + b.b * (1 - t.a), a: 1 });
    const white = { r: 255, g: 255, b: 255, a: 1 };
    const body = document.getElementById('card-body-isfahan-tiles'), sample = document.getElementById('card-sample-isfahan-tiles'), wcag = document.getElementById('card-wcag-isfahan-tiles');
    const item = document.querySelector('[data-palette-id=isfahan-tiles] .group\\/item'), hex = item.querySelector('.font-mono span');
    const itemBg = over(parse(getComputedStyle(item).backgroundColor), white);
    const hudVal = document.querySelector('[data-i18n=hudColorsVal]'), hudBox = hudVal.parentElement;
    const exportBtn = [...document.querySelectorAll('header button')].find(b => b.getAttribute('onclick') === 'openExportAllModal()' && b.innerText.includes('دریافت'));
    const ver = document.querySelector('h1 span.font-mono');
    return {
      cardBody: { claimedBadge: wcag.textContent.trim(), fg: getComputedStyle(body).color, bg: getComputedStyle(sample).backgroundColor, ratio: ratio(parse(getComputedStyle(body).color), parse(getComputedStyle(sample).backgroundColor)), inlineStyleColor: body.style.color },
      colorItemHex: { fg: getComputedStyle(hex).color, bgComposited: `rgb(${itemBg.r|0},${itemBg.g|0},${itemBg.b|0})`, ratio: ratio(parse(getComputedStyle(hex).color), itemBg) },
      hudValue: { fg: getComputedStyle(hudVal).color, bg: getComputedStyle(hudBox).backgroundColor, ratio: ratio(parse(getComputedStyle(hudVal).color), over(parse(getComputedStyle(hudBox).backgroundColor), { r: 248, g: 246, b: 240, a: 1 })) },
      headerExportBtn: { fg: getComputedStyle(exportBtn).color, bg: getComputedStyle(exportBtn).backgroundColor, ratio: ratio(parse(getComputedStyle(exportBtn).color), over(parse(getComputedStyle(exportBtn).backgroundColor), white)) },
      versionBadge: { fg: getComputedStyle(ver).color, ratio: ratio(parse(getComputedStyle(ver).color), over(parse(getComputedStyle(ver).backgroundColor), white)) },
    };
  });
  const card = page.locator('[data-palette-id=isfahan-tiles]');
  await card.scrollIntoViewIfNeeded(); await card.screenshot({ path: path.join(process.env.OUT || './out', 'screens', 'light-card-isfahan-zoom.jpg'), type: 'jpeg', quality: 60 });
  // drawer heading in light
  await page.evaluate(() => togglePreviewDrawer()); await sleep(300);
  R.lightTargets.drawerHeading = await page.evaluate(() => { const h = document.querySelector('#mockupCard h4'); return { fg: getComputedStyle(h).color, bg: getComputedStyle(mockupCard).backgroundColor, badge: mockupCard.querySelector('.font-mono')?.textContent.trim() }; });
  await shot(page, 'light-drawer-heading.jpg', { clip: { x: 200, y: 50, width: 1040, height: 600 } });
  await ctx.close();
}
save('06-perf-graphics.json', R);
console.log(JSON.stringify({ ...R, loads: undefined, payload: { total: R.payload.totalBytes, blocks: R.payload.blocks.map(b => b.tag + ':' + b.bytes + ':' + b.head.slice(0, 30)), fonts: R.payload.base64FontBytes } }, null, 1));
await browser.close();
