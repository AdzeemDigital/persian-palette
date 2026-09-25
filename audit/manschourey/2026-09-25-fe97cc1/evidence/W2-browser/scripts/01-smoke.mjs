// 01 Runtime smoke: 2 editions x 2 viewports x 2 themes, cold load, logs, timings, screenshots.
import { launch, instrument, newLog, hosts, save, shot, setTheme, URLS, VIEWPORTS, sleep } from './lib.mjs';

const browser = await launch();
const results = [];
for (const ed of ['fa', 'en']) for (const vp of ['desktop', 'mobile']) for (const theme of ['dark', 'light']) {
  const ctx = await browser.newContext({ ...VIEWPORTS[vp], colorScheme: theme });
  await setTheme(ctx, theme);
  const page = await ctx.newPage();
  const log = newLog();
  await instrument(page, log, { blockExternal: true });
  const t0 = Date.now();
  await page.goto(URLS[ed], { waitUntil: 'load' });
  const wall = Date.now() - t0;
  await sleep(800);
  const nav = await page.evaluate(() => {
    const n = performance.getEntriesByType('navigation')[0];
    return { dcl: Math.round(n.domContentLoadedEventEnd), load: Math.round(n.loadEventEnd), transfer: n.transferSize, decoded: n.decodedBodySize };
  });
  const state = await page.evaluate(() => ({
    lang: document.documentElement.lang, dir: document.documentElement.dir, cls: document.documentElement.className,
    title: document.title, cards: document.querySelectorAll('#palettesGrid .glass-card').length,
    scrollW: document.documentElement.scrollWidth, clientW: document.documentElement.clientWidth,
    h1: document.querySelector('h1')?.innerText, threeRenderer: typeof threeRenderer !== 'undefined' && !!threeRenderer,
  }));
  const id = `${ed}-${vp}-${theme}`;
  await shot(page, `smoke-${id}.jpg`);
  results.push({ id, wallMs: wall, nav, state, console: log.console, pageErrors: log.pageErrors, failed: log.failed,
    requestCount: log.requests.length, externalHosts: hosts(log), nonLocal: log.requests.filter(r => !r.local) });
  await ctx.close();
}
// Language persistence leak between editions on file:// (shared origin)
{
  const ctx = await browser.newContext(VIEWPORTS.desktop);
  const page = await ctx.newPage();
  await page.goto(URLS.fa); await page.click('#langToggleBtn'); await sleep(200);
  const afterToggle = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, ls: localStorage.getItem('manshour_lang') }));
  await page.reload(); await sleep(300);
  const faAfterReload = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir }));
  await page.goto(URLS.en); await sleep(300);
  // switch EN edition back to fa, then open fa... and check en edition behaviour after a 'fa' preference
  await page.click('#langToggleBtn'); await sleep(200);
  await page.goto(URLS.en); await sleep(300);
  const enAfterFaPref = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir, ls: localStorage.getItem('manshour_lang'), title: document.title }));
  results.push({ id: 'lang-persistence', afterToggle, faAfterReload, enAfterFaPref });
  await ctx.close();
}
save('01-smoke.json', results);
console.log(JSON.stringify(results.map(r => ({ id: r.id, nav: r.nav, errs: r.pageErrors?.length, cons: r.console?.length, ext: r.externalHosts, st: r.state })), null, 1));
console.log(JSON.stringify(results.at(-1)));
await browser.close();
