// 05 Keyboard traversal, focus visibility, dialog focus trap/restore, Escape, skip link, names, tabs semantics,
// live regions, reflow at 320 CSS px / 200% zoom, reduced motion, rendered text contrast, target size, lang of parts,
// aria snapshot (partial evidence, NOT a screen-reader test).
import { launch, instrument, newLog, save, shot, setTheme, sleep, URLS, OUT } from './lib.mjs';
import fs from 'node:fs';
import path from 'node:path';
const R = {};
const browser = await launch();

async function open(ed, theme, vp = { width: 1440, height: 900 }, extra = {}) {
  const ctx = await browser.newContext({ viewport: vp, colorScheme: theme, ...extra });
  await setTheme(ctx, theme, ed);
  const page = await ctx.newPage(); await instrument(page, newLog());
  await page.goto(URLS[ed]); await sleep(500);
  return { ctx, page };
}
const focusInfo = page => page.evaluate(() => {
  const el = document.activeElement; if (!el || el === document.body) return { tag: 'body' };
  const cs = getComputedStyle(el), r = el.getBoundingClientRect();
  const name = (el.getAttribute('aria-label') || el.innerText || el.title || el.value || '').trim().replace(/\s+/g, ' ').slice(0, 60);
  const header = document.querySelector('header').getBoundingClientRect();
  return { tag: el.tagName.toLowerCase(), id: el.id || null, role: el.getAttribute('role'), name, onclick: (el.getAttribute('onclick') || '').slice(0, 50),
    outline: `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`, focusVisible: el.matches(':focus-visible'),
    visibleIndicator: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2,
    rect: [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)], inViewport: r.bottom > 0 && r.top < innerHeight,
    obscuredByHeader: !document.querySelector('[role=dialog]:not(.hidden)') && getComputedStyle(el).position !== 'fixed' && r.top < header.bottom && !el.closest('header'), fullyHidden: r.bottom <= header.bottom || r.bottom <= 0 };
});

// ---- 1. Tab order, first 80 stops (fa, dark, desktop)
{
  const { ctx, page } = await open('fa', 'dark');
  const stops = [];
  for (let i = 0; i < 80; i++) { await page.keyboard.press('Tab'); await sleep(450); stops.push(await focusInfo(page)); if ([0, 21, 71].includes(i)) await shot(page, `kbd-stop-${i + 1}.jpg`); }
  R.tabStops = stops;
  R.tabSummary = { total: stops.length, withIndicator: stops.filter(s => s.visibleIndicator).length, obscured: stops.filter(s => s.obscuredByHeader).length,
    unnamed: stops.filter(s => !s.name).length, roleButtons: stops.filter(s => s.role === 'button').length };
  // Skip link
  await page.goto(URLS.fa); await sleep(300);
  await page.keyboard.press('Tab'); const skip = await focusInfo(page);
  const skipVisible = await page.evaluate(() => { const r = document.querySelector('.skip-link').getBoundingClientRect(); return r.top >= 0 && r.bottom > 0; });
  await page.keyboard.press('Enter'); await sleep(200);
  const afterSkip = await focusInfo(page);
  await page.keyboard.press('Tab'); const nextAfterSkip = await focusInfo(page);
  R.skipLink = { first: skip, skipVisible, afterSkip, nextAfterSkip };
  await ctx.close();
}
// ---- 2. Dialog focus management (evidence -> AR nested), Escape, restore
{
  const { ctx, page } = await open('fa', 'dark');
  const cta = page.locator('button[onclick^="openEvidenceDashboard(\'isfahan-tiles\'"]').first();
  await cta.focus(); await page.keyboard.press('Enter'); await sleep(300);
  const d = { initialFocus: await focusInfo(page) };
  d.dialogAttrs = await page.evaluate(() => { const m = evidenceDashboardModal; return { role: m.getAttribute('role'), modal: m.getAttribute('aria-modal'), labelledby: m.getAttribute('aria-labelledby'), label: document.getElementById(m.getAttribute('aria-labelledby'))?.textContent, mainInert: document.querySelector('main').inert, headerInert: document.querySelector('header').inert }; });
  let escaped = 0, visited = new Set();
  for (let i = 0; i < 70; i++) { await page.keyboard.press('Tab'); const inside = await page.evaluate(() => evidenceDashboardModal.contains(document.activeElement)); if (!inside) escaped++; visited.add(await page.evaluate(() => document.activeElement.id || document.activeElement.textContent.trim().slice(0, 20))); }
  d.tab70 = { escaped, distinct: visited.size };
  await page.keyboard.press('Shift+Tab'); d.shiftTabInside = await page.evaluate(() => evidenceDashboardModal.contains(document.activeElement));
  // tabs semantics
  d.tabsSemantics = await page.evaluate(() => [...document.querySelectorAll('[id^=evtab-]')].map(b => ({ id: b.id, role: b.getAttribute('role'), selected: b.getAttribute('aria-selected'), controls: b.getAttribute('aria-controls') })));
  // Arrow keys on tabs do nothing? record
  await page.focus('#evtab-spectral'); await page.keyboard.press('ArrowLeft'); d.arrowOnTab = await focusInfo(page);
  // nested AR dialog
  await page.evaluate(() => switchEvidenceTab('photogrammetry'));
  const arBtn = page.locator('button[onclick="openARSimulator()"]'); await arBtn.focus(); await page.keyboard.press('Enter'); await sleep(250);
  d.arFocus = await focusInfo(page);
  d.arAttrs = await page.evaluate(() => ({ evModal: evidenceDashboardModal.getAttribute('aria-modal'), evInert: evidenceDashboardModal.inert, arModal: arSimulatorModal.getAttribute('aria-modal'), arInert: arSimulatorModal.inert }));
  await page.keyboard.press('Escape'); await sleep(200);
  d.afterEscAR = { focus: await focusInfo(page), arOpen: await page.evaluate(() => !arSimulatorModal.classList.contains('hidden')), evOpen: await page.evaluate(() => !evidenceDashboardModal.classList.contains('hidden')) };
  await page.keyboard.press('Escape'); await sleep(200);
  d.afterEscEv = { focus: await focusInfo(page), evOpen: await page.evaluate(() => !evidenceDashboardModal.classList.contains('hidden')), restoredToCTA: await page.evaluate(() => document.activeElement?.getAttribute('onclick')?.startsWith("openEvidenceDashboard('isfahan-tiles'")) };
  // backdrop click closes
  await page.evaluate(() => openExportAllModal()); await sleep(150);
  await page.mouse.click(10, 10); await sleep(150); d.backdropClose = await page.evaluate(() => exportModal.classList.contains('hidden'));
  // 3D drawer: toggle via header button then Escape; restore
  await page.focus('header button[onclick="togglePreviewDrawer()"]'); await page.keyboard.press('Enter'); await sleep(200);
  d.drawerFirstFocus = await focusInfo(page); await shot(page, 'kbd-drawer-first-focus.jpg');
  await page.keyboard.press('Escape'); await sleep(150); d.drawerRestore = await focusInfo(page);
  R.dialog = d;
  await ctx.close();
}
// ---- 3. Accessible names of all controls, icon-only buttons, swatches, fa vs en
for (const ed of ['fa', 'en']) {
  const { ctx, page } = await open(ed, 'dark');
  R['names_' + ed] = await page.evaluate(() => {
    const ctrls = [...document.querySelectorAll('button,[role=button],input,select,a[href]')];
    const nameOf = el => (el.getAttribute('aria-label') || (el.labels && el.labels[0]?.innerText) || el.innerText || el.title || '').trim().replace(/\s+/g, ' ');
    const iconOnly = ctrls.filter(el => el.tagName === 'BUTTON' && !el.innerText.trim());
    const generic = ctrls.filter(el => ['انتخاب رنگ', 'تنظیم رنگ'].includes(el.getAttribute('aria-label')));
    const swatch = document.querySelector('.color-swatch-strip');
    const labelInName = [...document.querySelectorAll('button[aria-label]')].filter(b => b.innerText.trim() && !b.getAttribute('aria-label').toLowerCase().includes(b.innerText.trim().toLowerCase().replace(/\s+/g, ' ')))
      .map(b => ({ id: b.id, visible: b.innerText.trim(), ariaLabel: b.getAttribute('aria-label') }));
    const pressed = ['soundToggleBtn', 'spatialModeToggle', 'artModeVectorBtn', 'artModePhotoBtn', 'threeRotateBtn', 'threeWireBtn', 'themeToggleBtn'].map(id => ({ id, ariaPressed: document.getElementById(id)?.getAttribute('aria-pressed') }));
    return { total: ctrls.length, iconOnly: iconOnly.map(b => ({ id: b.id, name: nameOf(b), onclick: (b.getAttribute('onclick') || '').slice(0, 40) })).slice(0, 40), iconOnlyCount: iconOnly.length,
      genericNames: generic.map(g => ({ tag: g.tagName, id: g.id, label: g.getAttribute('aria-label'), onclick: (g.getAttribute('onclick') || g.getAttribute('onchange') || '').slice(0, 40) })),
      swatch: { role: swatch.getAttribute('role'), tabindex: swatch.tabIndex, title: swatch.title, text: swatch.innerText.trim(), ariaLabel: swatch.getAttribute('aria-label') },
      labelInNameMismatch: labelInName, pressedState: pressed,
      selectsNoLabel: [...document.querySelectorAll('select')].map(s => ({ id: s.id, label: s.getAttribute('aria-label') || s.labels?.[0]?.innerText?.trim() })) };
  });
  await ctx.close();
}
// ---- 4. Live regions / status messages
{
  const { ctx, page } = await open('fa', 'dark');
  R.liveRegions = await page.evaluate(() => [...document.querySelectorAll('[aria-live],[role=status],[role=alert]')].map(e => ({ id: e.id, role: e.getAttribute('role'), live: e.getAttribute('aria-live') })));
  await page.fill('#searchInput', 'zzzz'); await sleep(150);
  R.emptyStateAnnounced = await page.evaluate(() => { const e = document.getElementById('emptyState'); return { visible: !e.classList.contains('hidden'), inLive: !!e.closest('[aria-live],[role=status]'), hasLive: e.getAttribute('aria-live') }; });
  await ctx.close();
}
// ---- 5. Reflow: 320 CSS px (≈1280@400%) and 720 (1440@200%), page + dialogs
R.reflow = {};
for (const [label, vp] of [['320x640', { width: 320, height: 640 }], ['720x450-200pct', { width: 720, height: 450 }]]) for (const ed of ['fa', 'en']) {
  const { ctx, page } = await open(ed, 'dark', vp);
  const measure = () => page.evaluate(() => {
    const vw = document.documentElement.clientWidth; const offenders = [];
    for (const el of document.querySelectorAll('body *')) { if (!el.getClientRects().length || el.closest('.hidden')) continue; const r = el.getBoundingClientRect();
      if ((r.right > vw + 1 || r.left < -1) && getComputedStyle(el).position !== 'fixed' && !el.closest('.overflow-x-auto,.overflow-hidden,pre,table,.skip-link,svg')) offenders.push({ tag: el.tagName, cls: (el.className?.baseVal ?? el.className).toString().slice(0, 60), l: Math.round(r.left), r: Math.round(r.right) }); }
    const header = document.querySelector('header').getBoundingClientRect();
    return { scrollW: document.documentElement.scrollWidth, clientW: vw, hScroll: document.documentElement.scrollWidth > vw, headerHeight: Math.round(header.height), viewportH: innerHeight, offenders: offenders.slice(0, 8), offenderCount: offenders.length };
  });
  const res = { page: await measure() };
  await shot(page, `reflow-${label}-${ed}-page.jpg`);
  for (const [k, fn] of [['evidence', () => openEvidenceDashboard('isfahan-tiles', 0)], ['drawer', () => togglePreviewDrawer()], ['sci', () => openScientificModalForActive()], ['matrix', () => openContrastMatrixForActive()]]) {
    await page.evaluate(fn); await sleep(250); res[k] = await measure();
    if (label === '320x640' && ed === 'fa' && (k === 'evidence' || k === 'drawer')) await shot(page, `reflow-320-fa-${k}.jpg`);
    await page.keyboard.press('Escape'); await sleep(100);
  }
  R.reflow[`${label}-${ed}`] = res;
  await ctx.close();
}
// ---- 6. Reduced motion
{
  const { ctx, page } = await open('fa', 'dark', { width: 1440, height: 900 }, { reducedMotion: 'reduce' });
  R.reducedMotion = await page.evaluate(async () => {
    const pulse = getComputedStyle(document.querySelector('.animate-pulse')).animationDuration;
    togglePreviewDrawer(); const r0 = threeMesh.rotation.y; await new Promise(r => setTimeout(r, 600)); const r1 = threeMesh.rotation.y;
    let frames = 0; const t = performance.now(); await new Promise(res => { const f = () => { frames++; performance.now() - t < 1000 ? requestAnimationFrame(f) : res(); }; requestAnimationFrame(f); });
    const calls0 = threeRenderer.info.render.frame; await new Promise(r => setTimeout(r, 1000)); const calls1 = threeRenderer.info.render.frame;
    closePreviewDrawer();
    const smooth = getComputedStyle(document.documentElement).scrollBehavior;
    return { pulseDuration: pulse, meshRotates: r1 !== r0, threeFramesRenderedPerSecondStillRunning: calls1 - calls0, htmlScrollBehavior: smooth };
  });
  // card tilt on hover under reduced motion
  const card = page.locator('.glass-card').first(); await card.hover({ position: { x: 20, y: 20 } }); await page.mouse.move(60, 400); await sleep(50);
  R.reducedMotion.cardTransformOnHover = await card.evaluate(e => getComputedStyle(e).transform);
  await ctx.close();
}
// ---- 7. Rendered text contrast (own computation; solid-background ancestors only)
R.textContrast = {};
for (const ed of ['fa', 'en']) for (const theme of ['dark', 'light']) {
  const { ctx, page } = await open(ed, theme);
  R.textContrast[`${ed}-${theme}`] = await page.evaluate(() => {
    const parse = s => { const m = s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p[3] ?? 1 }; };
    const lum = c => { const f = v => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b); };
    const blend = (top, bot) => ({ r: top.r * top.a + bot.r * (1 - top.a), g: top.g * top.a + bot.g * (1 - top.a), b: top.b * top.a + bot.b * (1 - top.a), a: 1 });
    const bgOf = el => { const layers = []; for (let n = el; n; n = n.parentElement) { const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none' && !n.matches('body,.bg-persian-mesh')) return null; if (cs.backdropFilter && cs.backdropFilter !== 'none' && n !== el) { /* translucent over content: approximate */ }
      const c = parse(cs.backgroundColor); if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; } }
      let base = document.documentElement.classList.contains('light') ? { r: 248, g: 246, b: 240, a: 1 } : { r: 6, g: 9, b: 19, a: 1 };
      for (let i = layers.length - 1; i >= 0; i--) base = blend(layers[i], base); return base; };
    const out = []; const seen = new Set();
    for (const el of document.querySelectorAll('body *:not(script):not(style):not(svg *)')) {
      if (el.closest('.hidden,[role=dialog]') || !el.getClientRects().length) continue;
      const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()); if (!own) continue;
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) continue;
      if (cs.webkitTextFillColor && cs.webkitTextFillColor.includes('rgba(0, 0, 0, 0)')) continue; // gradient text: skip
      const fg = parse(cs.color); const bg = bgOf(el); if (!fg || !bg) continue;
      let op = 1; for (let n = el; n; n = n.parentElement) op *= parseFloat(getComputedStyle(n).opacity); if (op < 0.1) continue;
      const f = blend({ ...fg, a: (fg.a ?? 1) * op }, bg);
      const L1 = lum(f), L2 = lum(bg), ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 700, large = size >= 24 || (bold && size >= 18.66);
      const need = large ? 3 : 4.5;
      const key = el.tagName + el.className + cs.color; if (seen.has(key) && ratio >= need) continue; seen.add(key);
      out.push({ text: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 40), sel: (el.id ? '#' + el.id : el.tagName.toLowerCase() + '.' + [...el.classList].slice(0, 3).join('.')), size, ratio: Math.round(ratio * 100) / 100, need, pass: ratio >= need });
    }
    const fails = out.filter(o => !o.pass);
    return { sampled: out.length, failing: fails.length, worst: fails.sort((a, b) => a.ratio - b.ratio).slice(0, 15) };
  });
  if (theme === 'light') await shot(page, `contrast-${ed}-light-cards.jpg`, { clip: { x: 0, y: 640, width: 1440, height: 700 }, fullPage: true });
  await ctx.close();
}
// ---- 8. Target size (SC 2.5.8) on page, 390 px mobile and desktop
R.targetSize = {};
for (const [label, vp] of [['desktop', { width: 1440, height: 900 }], ['mobile', { width: 390, height: 844 }]]) {
  const { ctx, page } = await open('fa', 'dark', vp, label === 'mobile' ? { isMobile: true, hasTouch: true, deviceScaleFactor: 2 } : {});
  R.targetSize[label] = await page.evaluate(() => {
    const els = [...document.querySelectorAll('button,[role=button],input,select,a[href]')].filter(e => e.getClientRects().length && !e.closest('.hidden'));
    const small = els.map(e => { const r = e.getBoundingClientRect(); return { e, w: r.width, h: r.height }; }).filter(o => o.w < 24 || o.h < 24);
    const groups = {}; small.forEach(o => { const k = (o.e.getAttribute('onclick') || o.e.id || o.e.tagName).replace(/\(.*$/, '').slice(0, 40) + ` ${Math.round(o.w)}x${Math.round(o.h)}`; groups[k] = (groups[k] || 0) + 1; });
    return { visibleTargets: els.length, under24: small.length, groups };
  });
  await ctx.close();
}
// ---- 9. Language of parts
for (const ed of ['fa', 'en']) {
  const { ctx, page } = await open(ed, 'dark');
  R['langParts_' + ed] = await page.evaluate(() => {
    const langAttrs = [...document.querySelectorAll('body [lang]')].map(e => e.getAttribute('lang'));
    const pageLang = document.documentElement.lang; let latinInFa = 0, persianInEn = 0; const ex = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) { const t = w.currentNode.textContent.trim(); const el = w.currentNode.parentElement; if (!t || !el || el.closest('.hidden,script,style') || !el.getClientRects().length) continue;
      const hasFa = /[؀-ۿ]/.test(t), words = (t.match(/[A-Za-z]{3,}/g) || []).length;
      const eff = el.closest('[lang]')?.getAttribute('lang');
      if (pageLang === 'fa' && !hasFa && words >= 2 && eff === 'fa') { latinInFa++; if (ex.length < 8) ex.push(t.slice(0, 50)); }
      if (pageLang === 'en' && hasFa && eff === 'en') { persianInEn++; if (ex.length < 8) ex.push(t.slice(0, 50)); } }
    return { pageLang, bodyLangAttrs: langAttrs.length, latinPhrasesUnderFa: latinInFa, persianUnderEn: persianInEn, examples: ex };
  });
  await ctx.close();
}
// ---- 10. ARIA snapshot (partial evidence only; not a screen-reader test)
{
  const { ctx, page } = await open('fa', 'dark');
  const snap = await page.locator('body').ariaSnapshot();
  fs.writeFileSync(path.join(OUT, '05-aria-snapshot-fa-dark.PARTIAL.yml'), '# Chromium ARIA snapshot via Playwright locator.ariaSnapshot(); PARTIAL evidence, not a screen-reader test.\n' + snap.split('\n').slice(0, 400).join('\n'));
  await page.evaluate(() => openEvidenceDashboard('isfahan-tiles', 0)); await sleep(300);
  const snap2 = await page.locator('#evidenceDashboardModal').ariaSnapshot();
  fs.writeFileSync(path.join(OUT, '05-aria-snapshot-evidence-dialog.PARTIAL.yml'), '# PARTIAL evidence (ariaSnapshot), not a screen-reader test.\n' + snap2.split('\n').slice(0, 250).join('\n'));
  await ctx.close();
}
save('05-keyboard-a11y.json', R);
const brief = { tabSummary: R.tabSummary, skip: R.skipLink, dialog: { ...R.dialog, tabsSemantics: R.dialog.tabsSemantics.slice(0, 2) }, names_fa: { ...R.names_fa, iconOnly: R.names_fa.iconOnly.slice(0, 12) }, names_en_mismatch: R.names_en.labelInNameMismatch, live: R.liveRegions, empty: R.emptyStateAnnounced,
  reflow: Object.fromEntries(Object.entries(R.reflow).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).map(([a, b]) => [a, `${b.scrollW}/${b.clientW} off=${b.offenderCount} hdr=${b.headerHeight}/${b.viewportH}`]))])),
  rm: R.reducedMotion, contrast: R.textContrast, target: R.targetSize, lang: [R.langParts_fa, R.langParts_en] };
console.log(JSON.stringify(brief, null, 1));
await browser.close();
