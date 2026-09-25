// 04 axe-core WCAG 2.0/2.1/2.2 A/AA on both editions x both themes; page + each dialog (scoped to the dialog).
import { AxeBuilder } from '@axe-core/playwright';
import { launch, instrument, newLog, save, setTheme, sleep, URLS } from './lib.mjs';
import { createRequire } from 'node:module';
const axeVersion = createRequire(import.meta.url)('axe-core/package.json').version;
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const STATES = {
  page: [null, null],
  evidence: ['#evidenceDashboardModal', () => openEvidenceDashboard('isfahan-tiles', 0)],
  evidenceGeo: ['#evidenceDashboardModal', () => { openEvidenceDashboard('isfahan-tiles', 0); switchEvidenceTab('geospatial'); }],
  evidenceMixer: ['#evidenceDashboardModal', () => { openEvidenceDashboard('isfahan-tiles', 0); switchEvidenceTab('mixer'); }],
  drawer: ['#previewDrawer', () => togglePreviewDrawer()],
  export: ['#exportModal', () => openExportAllModal()],
  sci: ['#scientificModal', () => openScientificModalForActive()],
  matrix: ['#matrixModal', () => openContrastMatrixForActive()],
  gradient: ['#gradientModal', () => openGradientModal('isfahan-tiles')],
  mixer: ['#mixerModal', () => openMixerModal()],
  npm: ['#npmModal', () => openNpmModal()],
  ar: ['#arSimulatorModal', () => { openEvidenceDashboard('isfahan-tiles', 0); openARSimulator(); }],
};
const browser = await launch();
const out = { axeVersion, tags: TAGS, runs: [] };
for (const ed of ['fa', 'en']) for (const theme of ['dark', 'light']) {
  for (const [state, [sel, fn]] of Object.entries(STATES)) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: theme });
    await setTheme(ctx, theme, ed);
    const page = await ctx.newPage(); await instrument(page, newLog());
    await page.goto(URLS[ed]); await sleep(500);
    if (fn) { await page.evaluate(fn); await sleep(400); }
    let b = new AxeBuilder({ page }).withTags(TAGS);
    if (sel) b = b.include(sel);
    const res = await b.analyze();
    out.runs.push({ edition: ed, theme, state, scope: sel || 'document', passes: res.passes.length, incomplete: res.incomplete.map(v => ({ id: v.id, nodes: v.nodes.length })),
      violations: res.violations.map(v => ({ id: v.id, impact: v.impact, tags: v.tags.filter(t => /^wcag\d|^wcag2/.test(t)), help: v.help, nodes: v.nodes.length,
        examples: v.nodes.slice(0, 3).map(n => ({ target: n.target.join(' ').slice(0, 140), summary: (n.failureSummary || '').replace(/\s+/g, ' ').slice(0, 220) })) })) });
    await ctx.close();
  }
}
// Aggregate by rule
const agg = {};
for (const r of out.runs) for (const v of r.violations) {
  const a = agg[v.id] ||= { id: v.id, impact: v.impact, tags: v.tags, help: v.help, totalNodes: 0, states: [] };
  a.totalNodes += v.nodes; a.states.push(`${r.edition}/${r.theme}/${r.state}:${v.nodes}`);
}
out.byRule = Object.values(agg).sort((a, b) => b.totalNodes - a.totalNodes);
save('04-axe-summary.json', out);
for (const a of out.byRule) console.log(a.id.padEnd(28), a.impact?.padEnd(9), String(a.totalNodes).padStart(5), a.tags.join(','), '|', a.states.slice(0, 50).join(' '));
await browser.close();
