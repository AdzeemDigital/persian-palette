// 02 Workflows: exercise every control reachable in the UI; downloads, clipboard, camera, audio, lang/theme, persistence.
// Requires local server: MANSHOUR_PORT=4199 node scripts/serve.mjs (in the built clone).
import { launch, instrument, newLog, hosts, save, shot, sleep, OUT, URLS } from './lib.mjs';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.BASE || 'http://127.0.0.1:4199/';
const R = { steps: [], downloads: [], clipboard: [], leftovers: {}, controls: {} };
const step = async (name, fn) => {
  try { const v = await fn(); R.steps.push({ name, status: 'pass-run', v }); return v; }
  catch (e) { R.steps.push({ name, status: 'error', err: String(e).slice(0, 300) }); }
};
const browser = await launch(['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream']);
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true, colorScheme: 'dark' });
await ctx.grantPermissions(['clipboard-read', 'clipboard-write', 'camera'], { origin: BASE.replace(/\/$/, '') });
const page = await ctx.newPage();
const log = newLog();
await instrument(page, log, { blockExternal: true });
await page.goto(BASE);
await sleep(600);
const clip = () => page.evaluate(() => navigator.clipboard.readText());
const visible = sel => page.locator(sel).isVisible();
const closeTop = async () => { await page.keyboard.press('Escape'); await sleep(150); };

// Inventory of all interactive controls in the static page (before interaction)
R.controls.initial = await page.evaluate(() => [...document.querySelectorAll('button,a[href],input,select,[onclick]')].map(el => ({
  tag: el.tagName.toLowerCase(), id: el.id || null, onclick: (el.getAttribute('onclick') || '').slice(0, 60),
  name: (el.getAttribute('aria-label') || el.innerText || el.title || '').trim().replace(/\s+/g, ' ').slice(0, 50),
  inDialog: !!el.closest('[role=dialog]'),
})));

// ---- Search & filter
const count = async () => page.evaluate(() => ({ cards: document.querySelectorAll('#palettesGrid .glass-card').length, empty: !document.getElementById('emptyState').classList.contains('hidden') }));
const queries = {
  'fa-lajvard': 'لاجورد', 'arabic-yeh': 'لاجوردي', 'arabic-kaf': 'كاشی', 'zwnj-present': 'کاشی‌کاری', 'zwnj-absent': 'کاشیکاری',
  'arabic-both+zwnj': 'كاشي‌كاري', 'space-instead-zwnj': 'کاشی کاری', 'hex-lower': '#120a8f', 'hex-no-hash': '120A8F', 'english': 'turquoise', 'none': 'zzzqqq', 'persian-digits': '۱۲۰',
};
R.search = {};
for (const [k, q] of Object.entries(queries)) {
  await page.fill('#searchInput', q); await sleep(120); R.search[k] = { q, ...(await count()) };
}
await shot(page, 'wf-empty-state.jpg', { clip: { x: 0, y: 300, width: 1440, height: 600 } });
await page.fill('#searchInput', ''); await sleep(100);
R.categories = {};
for (const b of await page.locator('#categoryPills button').all()) {
  const label = (await b.innerText()).trim(); await b.click(); await sleep(80); R.categories[label] = (await count()).cards;
}
await page.locator('#categoryPills button').first().click();

// ---- Swatch copy (clipboard granted)
await step('swatch-strip-click-copies-hex', async () => { await page.locator('.color-swatch-strip').first().click(); await sleep(150); const t = await clip(); R.clipboard.push({ from: 'swatch', text: t }); return t; });
await step('swatch-keyboard-enter', async () => { await page.evaluate(() => navigator.clipboard.writeText('x')); await page.locator('.color-swatch-strip').nth(2).focus(); await page.keyboard.press('Enter'); await sleep(150); return clip(); });
await step('toast-announce', async () => page.evaluate(() => ({ role: toast.getAttribute('role'), live: toast.getAttribute('aria-live'), title: toastTitle.textContent, desc: toastDesc.textContent })));
await step('card-primary-copy', async () => { await page.locator('[id^=card-btn-primary-]').first().click(); await sleep(100); return clip(); });
await step('card-shuffle-cycle', async () => { const b = page.locator('[id^=card-btn-secondary-]').first(); await b.click(); await b.click(); await sleep(100);
  return page.evaluate(() => { const id = document.querySelector('[id^=card-wcag-]').id; return { wcag: document.getElementById(id).textContent.trim(), btn: document.querySelector('[id^=card-btn-primary-]').textContent.trim() }; }); });

// ---- Evidence dashboard (provenance, APCA, tabs)
await step('evidence-open-cta', async () => { await page.click('text=شناسنامهٔ رنگ، محاسبات و منابع'); await sleep(300);
  return page.evaluate(() => ({ provenance: evidenceProvenance.textContent, state: evidenceProvenance.dataset.state, focus: document.activeElement?.outerHTML.slice(0, 120),
    notes: [...document.querySelectorAll('#evidenceDashboardModal .apca-note')].map(n => n.textContent.trim()), sub: evHeaderColorSub.textContent, badge: evPhotoSpecimenBadge.textContent, unesco: evGeoUnescoBadge.textContent })); });
await shot(page, 'wf-evidence-spectral-fa-dark.jpg');
for (const t of ['chemical', 'geospatial', 'mixer', 'photogrammetry', 'tokens', 'spectral']) {
  await step('evidence-tab-' + t, async () => { await page.click('#evtab-' + t); await sleep(120); return page.evaluate(k => !document.getElementById('evpanel-' + k).classList.contains('hidden'), t); });
}
await step('evidence-conflict-color', async () => {
  // iterate every palette/color and record provenance state
  return page.evaluate(() => { const out = []; for (const p of PERSIAN_PALETTES) p.colors.forEach((c, i) => { currentEvPaletteId = p.id; currentEvColorIdx = i; renderEvidenceColor(); out.push(evidenceProvenance.dataset.state); });
    return out.reduce((a, s) => (a[s] = (a[s] || 0) + 1, a), {}); });
});
await step('evidence-pill-select', async () => { await page.locator('#evPaletteColorPills button').nth(3).click(); await sleep(100); return page.textContent('#evHeaderColorHex'); });
await step('evidence-palette-select', async () => { await page.selectOption('#evPaletteSelect', { index: 5 }); await sleep(100); return page.textContent('#evHeaderPaletteName'); });
await step('apca-custom-bg', async () => { await page.click('#evpanel-spectral >> text=سرمه‌ای شب'); await sleep(80); return page.textContent('#evCustomApcaLcBadge'); });
await step('apca-matrix-rows', async () => page.$$eval('#evApcaMatrixTbody tr', trs => trs.map(t => t.innerText.replace(/\s+/g, ' '))));
await step('geo-maps-link', async () => { await page.click('#evtab-geospatial'); return page.evaluate(() => ({ href: evGeoGoogleMapsLink.href, rel: evGeoGoogleMapsLink.rel, target: evGeoGoogleMapsLink.target, alt: evGeoAlt.textContent })); });
await step('geo-copy', async () => { await page.click('#evpanel-geospatial button[onclick="copyGeoCoords()"]'); await sleep(100); return clip(); });
await step('ev-mixer', async () => { await page.click('#evtab-mixer'); await page.fill('#evMixerRangeInput', '30'); await page.dispatchEvent('#evMixerRangeInput', 'input'); await page.selectOption('#evMixerSelectB', { index: 10 });
  await page.click('button[onclick="copyMixerResultHex()"]'); await sleep(100); return { clip: await clip(), label: await page.textContent('#evMixerRatioLabel'), steps: await page.locator('#evMixerGradientSteps > div').count() }; });
await step('ev-mixer-step-keyboard', async () => { const s = page.locator('#evMixerGradientSteps > div').nth(4); await s.focus(); await page.keyboard.press('Enter'); await sleep(80); return page.inputValue('#evMixerRangeInput'); });
await step('ev-photogrammetry-sliders', async () => { await page.click('#evtab-photogrammetry'); await page.fill('#evPhotoLightSlider', '200'); await page.dispatchEvent('#evPhotoLightSlider', 'input'); return page.textContent('#evPhotoLightLabel'); });
for (const f of ['w3c', 'figma', 'tailwind', 'css']) {
  await step('ev-token-' + f, async () => { await page.click('#evtab-tokens'); await page.click('#evtok-' + f); await page.click('button[onclick="copyEvidenceTokenCode()"]'); await sleep(80); const t = await clip();
    let parsed = null; if (f === 'w3c' || f === 'figma') { try { const j = JSON.parse(t); parsed = { ok: true, hasProvenance: /provenance|unverified|verification/i.test(t), len: t.length }; } catch (e) { parsed = { ok: false }; } }
    R.clipboard.push({ from: 'ev-token-' + f, text: t.slice(0, 600) }); return parsed || t.slice(0, 200); });
}
// ---- AR camera (fake device, permission granted)
await step('ar-open-room', async () => { await page.click('#evtab-photogrammetry'); await page.click('button[onclick="openARSimulator()"]'); await sleep(200); return visible('#arSimulatorModal'); });
await step('ar-camera-granted', async () => { await page.click('#arBtnModeCamera'); await sleep(1200);
  return page.evaluate(() => ({ hasStream: !!arVideoStream, tracks: arVideoStream?.getTracks().map(t => t.readyState), errVisible: !arCameraErrorMsg.classList.contains('hidden'), w: arVideoElement.videoWidth })); });
await shot(page, 'wf-ar-camera-fake.jpg', { clip: { x: 200, y: 50, width: 1040, height: 800 } });
await step('ar-kelvin-cycle', async () => { await page.click('text=3000K'); await page.click('button[onclick="cycleARColor()"]'); return page.textContent('#arActiveColorHex'); });
await step('ar-close-stops-tracks', async () => { const tr = await page.evaluateHandle(() => arVideoStream); await closeTop();
  return page.evaluate(s => ({ streamVar: !!arVideoStream, states: s ? s.getTracks().map(t => t.readyState) : null, arOpen: !arSimulatorModal.classList.contains('hidden'), evOpen: !evidenceDashboardModal.classList.contains('hidden') }), tr); });
await closeTop();

// ---- Scientific modal
await step('sci-open', async () => { await page.click('button[onclick="openScientificModalForActive()"]'); await sleep(200); return page.textContent('#scientificModalTitle'); });
for (const t of ['radar', 'harmony', 'tokens', 'tonal']) await step('sci-tab-' + t, async () => { await page.click('#scitab-' + t); await sleep(150); return page.evaluate(k => !document.getElementById('scipanel-' + k).classList.contains('hidden'), t); });
await step('sci-pill', async () => { await page.locator('#sciColorPills button').nth(2).click(); return page.locator('#m3TonesContainer > div').count(); });
await step('sci-copy-json', async () => { await page.click('button[onclick="copyAllTones(\'json\')"]'); await sleep(80); const t = await clip(); JSON.parse(t); return t.slice(0, 160); });
await step('sci-copy-css', async () => { await page.click('button[onclick="copyAllTones(\'css\')"]'); await sleep(80); return (await clip()).slice(0, 160); });
await step('sci-tone-tile-copy', async () => { await page.locator('#m3TonesContainer > div').nth(6).click(); await sleep(80); return clip(); });
await closeTop();

// ---- Matrix & gradient modals from first card
await step('matrix-open', async () => { await page.locator('button[onclick^="openContrastMatrix("]').first().click(); await sleep(150); return page.locator('#contrastMatrixTable td[onclick]').count(); });
await shot(page, 'wf-matrix-fa-dark.jpg');
await step('matrix-apply-pair', async () => { await page.locator('#contrastMatrixTable td[onclick]').nth(3).click(); await sleep(100); return { matrixOpen: await visible('#matrixModal') }; });
await step('gradient-open-copy', async () => { await page.locator('button[onclick^="openGradientModal("]').first().click(); await sleep(150); await page.locator('#gradientsList button').first().click(); await sleep(80); const t = await clip(); await closeTop(); return t; });

// ---- Export modal: every tab, copy and download
await step('export-open', async () => { await page.locator('header button[onclick="openExportAllModal()"]').first().click(); await sleep(150); return page.textContent('#exportModalTitle'); });
for (const tab of ['css', 'tailwind', 'json', 'scss', 'tokens', 'flutter']) {
  await step('export-' + tab, async () => {
    await page.click('#tab-' + tab); await sleep(80);
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('button[onclick="downloadExportFile()"]')]);
    const fp = path.join(OUT, 'downloads', dl.suggestedFilename() + '.' + tab + '.txt');
    fs.mkdirSync(path.dirname(fp), { recursive: true }); await dl.saveAs(fp);
    const txt = fs.readFileSync(fp, 'utf8');
    const info = { tab, filename: dl.suggestedFilename(), bytes: Buffer.byteLength(txt) };
    if (tab === 'json' || tab === 'tokens') { try { const j = JSON.parse(txt); info.jsonOk = true; info.topKeys = Object.keys(j).slice(0, 5); } catch { info.jsonOk = false; } }
    info.cssVars = (txt.match(/--[a-z0-9-]+:/g) || []).length;
    info.mentionsUnverified = /unverified|verificationStatus|provenance|illustrative|simulat/i.test(txt);
    info.provenanceHits = (txt.match(/provenance/g) || []).length;
    info.head = txt.slice(0, 200);
    await page.click('button[onclick="copyExportCode()"]'); await sleep(60); info.clipboardEqualsDownload = (await clip()) === txt;
    R.downloads.push(info);
    // keep only small samples as evidence
    if (info.bytes > 200000) fs.writeFileSync(fp, txt.slice(0, 20000) + '\n/* …truncated by W2 for evidence size… */\n');
    return info;
  });
}
await closeTop();

// ---- NPM modal
await step('npm-copy', async () => { await page.click('header button[onclick="openNpmModal()"]'); await page.click('#btnCopyNpmCmd'); await sleep(80); const a = await clip(); await page.click('#btnCopyNpmCode'); await sleep(80); const b = await clip(); await closeTop(); return { a, b: b.slice(0, 80) }; });
// ---- Quick mixer
await step('quick-mixer', async () => { await page.click('header button[onclick="openMixerModal()"]'); await sleep(150); await page.selectOption('#quickMixColor2', { index: 30 });
  await page.fill('#quickMixRatio', '75'); await page.dispatchEvent('#quickMixRatio', 'input'); await page.click('button[onclick="copyQuickMixedHex()"]'); await sleep(80);
  const r = { clip: await clip(), label: await page.textContent('#quickMixRatioLabel'), ok: await page.textContent('#quickMixResultOklab'), caveatText: await page.evaluate(() => mixerModal.innerText.includes('رنگدانهٔ فیزیکی') || /pigment|فیزیکی/.test(mixerModal.innerText)) };
  await page.click('button[onclick="openDeepEvidenceForQuickMix()"]'); await sleep(200); r.evOpenedFor = await page.textContent('#evHeaderColorHex'); await closeTop(); return r; });

// ---- Preview drawer / 3D studio
await step('drawer-open', async () => { await page.click('header button[onclick="togglePreviewDrawer()"]'); await sleep(300); return page.evaluate(() => ({ w: threeCanvas.width, h: threeCanvas.height })); });
await step('drawer-shuffle-modes', async () => { const out = []; for (const m of ['dark', 'light', 'dynamic']) { await page.selectOption('#studioShuffleModeSelect', m); await page.click('button[onclick="smartShuffleStudioRoles()"]'); await sleep(60); out.push(await page.evaluate(() => mockupCard.innerText.match(/\d+\.\d:1 \([^)]+\)/)?.[0])); } return out; });
await step('drawer-templates', async () => { const out = {}; for (const t of ['hud', 'hero', 'form', 'product']) { await page.selectOption('#studioTemplateSelect', t); await sleep(50); out[t] = (await page.innerText('#mockupCard')).slice(0, 140).replace(/\s+/g, ' '); } return out; });
await step('drawer-vision', async () => { const out = []; for (const v of ['protanopia', 'deuteranopia', 'tritanopia', 'achromatopsia', 'normal']) { await page.selectOption('#visionModeSelect', v); out.push(await page.getAttribute('#mockupCard', 'class').then(c => (c.match(/filter-\w+/) || ['none'])[0])); } return out; });
await step('drawer-copy-css', async () => { await page.click('button[onclick="copyCurrentShuffleCSS()"]'); await sleep(80); return clip(); });
await step('drawer-3d-controls', async () => { await page.click('#threeRotateBtn'); await page.click('#threeWireBtn'); await page.selectOption('#threeGeometrySelect', 'torusKnot'); await sleep(200);
  return page.evaluate(() => ({ auto: threeAutoRotate, wire: threeMesh.material.wireframe, geom: threeMesh.geometry.type, calls: threeRenderer.info.render.calls, geoms: threeRenderer.info.memory.geometries })); });
await step('drawer-swatch-primary', async () => { await page.locator('#mockupSwatchesBar > div').nth(4).click(); return page.evaluate(() => studioRoleMapping.primary); });
await step('drawer-reset', async () => { await page.click('button[onclick="resetStudioRoles()"]'); return true; });
await shot(page, 'wf-drawer-3d-fa-dark.jpg');
await step('drawer-close-footer', async () => { await page.click('#previewDrawer >> text=بستن پیش‌نمایش'); await sleep(100); return visible('#previewDrawer'); });

// ---- Header toggles: sound, spatial, art photo mode, theme, language
await step('sound-toggle', async () => { await page.click('#soundToggleBtn'); await sleep(200); await page.locator('.color-swatch-strip').first().click(); await sleep(200);
  return page.evaluate(() => ({ soundEnabled, ctxState: sharedAudioContext?.state, label: soundToggleBtn.getAttribute('aria-label'), pressed: soundToggleBtn.getAttribute('aria-pressed') })); });
await page.click('#soundToggleBtn');
await step('spatial-toggle', async () => { await page.click('#spatialModeToggle'); const on = await page.evaluate(() => document.body.classList.contains('spatial-vision-mode')); await page.click('#spatialModeToggle'); return on; });
const before = log.requests.length;
await step('art-photo-mode', async () => { await page.click('#artModePhotoBtn'); await sleep(1500); const ext = log.requests.slice(before).filter(r => !r.local);
  return { external: ext.map(r => r.url), imgs: await page.$$eval('#palettesGrid img', a => a.map(i => ({ alt: i.alt, cross: i.crossOrigin, loading: i.loading, op: i.style.opacity }))).then(x => x.slice(0, 3)) }; });
await page.evaluate(() => window.scrollTo(0, 700)); await sleep(1200);
R.photoModeExternalAfterScroll = log.requests.slice(before).filter(r => !r.local).map(r => r.url);
await shot(page, 'wf-photo-mode-offline.jpg');
await page.evaluate(() => window.scrollTo(0, 0));
await page.click('#artModeVectorBtn');

await step('theme-toggle', async () => { await page.click('#themeToggleBtn'); return page.evaluate(() => ({ cls: document.documentElement.className, ls: localStorage.getItem('manshour_theme'), label: themeLabel.textContent })); });
await step('lang-toggle-to-en', async () => { await page.click('#langToggleBtn'); await sleep(200);
  return page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, title: document.title, skip: document.querySelector('.skip-link').textContent, searchLabel: searchInput.getAttribute('aria-label'), langBtnLabel: langToggleBtn.getAttribute('aria-label'), themeBtnLabel: themeToggleBtn.getAttribute('aria-label'), gridLabel: palettesGrid.getAttribute('aria-label') })); });
// Persian leftovers visible in EN mode (main page + each modal)
const leftovers = async () => page.evaluate(() => {
  const out = []; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) { const n = w.currentNode, t = n.textContent.trim(); if (!t || !/[؀-ۿ]/.test(t)) continue; const el = n.parentElement;
    if (!el || el.closest('script,style,.hidden') || !el.getClientRects().length) continue; const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    out.push(t.replace(/\s+/g, ' ').slice(0, 70)); }
  const attrs = [...document.querySelectorAll('[title],[aria-label],[placeholder]')].filter(e => e.getClientRects().length && !e.closest('.hidden')).flatMap(e => ['title', 'aria-label', 'placeholder'].map(a => e.getAttribute(a)).filter(v => v && /[؀-ۿ]/.test(v)));
  return { visibleTextNodes: out.length, samples: [...new Set(out)].slice(0, 25), attrCount: attrs.length, attrSamples: [...new Set(attrs)].slice(0, 12) };
});
R.leftovers.main = await leftovers();
await shot(page, 'wf-en-toggled-light.jpg');
for (const [name, open] of [['evidence', 'text=Color Science Dossier & Provenance'], ['drawer', 'header button[onclick="togglePreviewDrawer()"]'], ['export', 'header button[onclick="openExportAllModal()"] >> nth=0'], ['mixer', 'header button[onclick="openMixerModal()"]'], ['npm', 'header button[onclick="openNpmModal()"]'], ['sci', 'button[onclick="openScientificModalForActive()"]']]) {
  await step('en-open-' + name, async () => { await page.click(open); await sleep(250); R.leftovers[name] = await leftovers(); if (name === 'evidence') await shot(page, 'wf-evidence-en-light.jpg'); await closeTop(); return R.leftovers[name].visibleTextNodes; });
}
await step('persistence-reload', async () => { await page.reload(); await sleep(400); return page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, cls: document.documentElement.className, keys: Object.keys(localStorage), session: Object.keys(sessionStorage), cookies: document.cookie })); });
R.storageDump = await page.evaluate(() => Object.fromEntries(Object.entries(localStorage)));
R.controls.afterRender = await page.evaluate(() => ({ buttons: document.querySelectorAll('button').length, roleButtons: document.querySelectorAll('[role=button]').length, selects: document.querySelectorAll('select').length, inputs: document.querySelectorAll('input').length, links: document.querySelectorAll('a[href]').length }));
R.log = { console: log.console, pageErrors: log.pageErrors, failed: log.failed, externalHosts: hosts(log), nonLocal: log.requests.filter(r => !r.local).map(r => r.url) };
await ctx.close();

// ---- Denied permissions: clipboard + camera
{
  const c2 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const p2 = await c2.newPage(); const l2 = newLog(); await instrument(p2, l2);
  await p2.goto(BASE); await sleep(400);
  await p2.evaluate(() => Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new DOMException('denied', 'NotAllowedError')) } }));
  await p2.locator('.color-swatch-strip').first().click(); await sleep(200);
  R.deniedClipboard = await p2.evaluate(() => ({ title: toastTitle.textContent, desc: toastDesc.textContent }));
  await c2.close();
  const b3 = await launch(['--use-fake-device-for-media-stream']); // no fake-ui => prompt auto-denied in headless without grant
  const c3 = await b3.newContext({ viewport: { width: 1440, height: 900 } });
  const p3 = await c3.newPage(); const l3 = newLog(); await instrument(p3, l3);
  await p3.goto(BASE); await sleep(400);
  await p3.evaluate(() => { openEvidenceDashboard('isfahan-tiles', 0); openARSimulator(); });
  await p3.click('#arBtnModeCamera'); await sleep(1500);
  R.deniedCamera = await p3.evaluate(() => ({ stream: !!arVideoStream, errVisible: !arCameraErrorMsg.classList.contains('hidden'), text: arCameraErrorMsg.innerText.replace(/\s+/g, ' ') }));
  R.deniedCamera.console = l3.console.filter(m => /camera|AR/i.test(m.text));
  await shot(p3, 'wf-ar-camera-denied.jpg', { clip: { x: 200, y: 50, width: 1040, height: 800 } });
  await b3.close();
}
save('02-workflows.json', R);
console.log(JSON.stringify({ steps: R.steps.map(s => [s.name, s.status, JSON.stringify(s.v ?? s.err)?.slice(0, 160)]), search: R.search, cats: R.categories, downloads: R.downloads.map(d => ({ ...d, head: undefined })), leftovers: Object.fromEntries(Object.entries(R.leftovers).map(([k, v]) => [k, v.visibleTextNodes])), denied: [R.deniedClipboard, R.deniedCamera], log: R.log, photo: R.photoModeExternalAfterScroll?.length }, null, 1));
await browser.close();
