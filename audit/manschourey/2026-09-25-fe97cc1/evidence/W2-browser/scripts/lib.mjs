// W2 audit helpers (ManschouRey audit, baseline fe97cc1). Reproducible Playwright harness.
// Usage: WORK=<built clone> OUT=<evidence dir> node <script>.mjs
import { chromium, devices } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

export const WORK = path.resolve(process.env.WORK || '../work');
export const OUT = path.resolve(process.env.OUT || './out');
fs.mkdirSync(OUT, { recursive: true });
export const EXE = process.env.CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
export const URLS = {
  fa: 'file://' + path.join(WORK, 'code_artifact.html'),
  en: 'file://' + path.join(WORK, 'code_artifact_en.html'),
};
export const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 } },
  mobile: { ...devices['iPhone 13'], viewport: { width: 390, height: 844 }, defaultBrowserType: undefined },
};

export async function launch(extraArgs = []) {
  return chromium.launch({ executablePath: EXE, headless: true, args: extraArgs });
}

/** Attach console/pageerror/request logging. Non-local requests are recorded then aborted (offline) or aborted anyway
 *  because the sandbox has no direct egress for Chromium; `mode` is recorded for the log. */
export function instrument(page, log, { blockExternal = true } = {}) {
  page.on('console', m => log.console.push({ type: m.type(), text: m.text().slice(0, 400) }));
  page.on('pageerror', e => log.pageErrors.push(String(e).slice(0, 400)));
  page.on('requestfailed', r => log.failed.push({ url: r.url().slice(0, 200), err: r.failure()?.errorText }));
  page.on('request', r => {
    const u = r.url();
    const local = u.startsWith('file:') || u.startsWith('data:') || u.startsWith('blob:') || u.startsWith('http://127.0.0.1');
    log.requests.push({ url: u.startsWith('data:') ? u.slice(0, 40) + '…' : u.slice(0, 220), type: r.resourceType(), local });
  });
  if (blockExternal) {
    return page.route(u => !/^(file:|data:|blob:|http:\/\/127\.0\.0\.1)/.test(u.toString()), route => route.abort('internetdisconnected'));
  }
}
export const newLog = () => ({ console: [], pageErrors: [], failed: [], requests: [] });
export function hosts(log) {
  return [...new Set(log.requests.filter(r => !r.local).map(r => { try { return new URL(r.url).host; } catch { return r.url; } }))];
}
export function save(name, obj) {
  fs.writeFileSync(path.join(OUT, name), JSON.stringify(obj, null, 2));
}
export async function shot(page, name, opts = {}) {
  const p = path.join(OUT, 'screens', name);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  await page.screenshot({ path: p, type: 'jpeg', quality: 55, ...opts });
  return p;
}
export async function setTheme(context, theme, lang) {
  await context.addInitScript(([t, l]) => {
    try { localStorage.setItem('manshour_theme', t); if (l) localStorage.setItem('manshour_lang', l); } catch {}
  }, [theme, lang]);
}
export const sleep = ms => new Promise(r => setTimeout(r, ms));
