// Usage: node exporter-reserved-key-probe.mjs <path-to-core-dist/index.js>
import { pathToFileURL } from 'node:url';
const core = await import(pathToFileURL(process.argv[2]).href);
const color = (o={}) => ({ id:'c', hex:'#112233', nameFa:'رنگ', nameEn:'Color', roleFa:'r', roleEn:'r', meaningFa:'m', evidence:{}, ...o });
const pal = (id, colors=[color()]) => ({ id, category:'art', nameFa:'پ', nameEn:'P', descriptionFa:'', culturalContextFa:'', imageUrl:'', colors });
for (const id of ['$description', '__proto__', 'constructor']) {
  const w = core.exportW3CTokens([pal(id)]);
  console.log(JSON.stringify(id), 'W3C own keys:', JSON.stringify(Object.keys(w.persian)), '$description now:', typeof w.persian.$description, 'JSON:', JSON.stringify(w.persian).slice(0,120));
  const t = core.exportTailwindTheme([pal(id)]).theme.extend.colors.persian;
  console.log(JSON.stringify(id), 'Tailwind own keys:', JSON.stringify(Object.keys(t)));
  const s = core.exportTokensStudio([pal(id)]);
  console.log(JSON.stringify(id), 'TokensStudio own keys:', JSON.stringify(Object.keys(s)));
}
try { core.exportMaterialKotlin([pal('empty', [])]); console.log('Kotlin empty: no throw'); } catch (e) { console.log('Kotlin empty palette THROWS:', e.message); }
try { core.exportW3CTokens([pal('x', [color({ hex: 'red' })])]); } catch (e) { console.log('W3C invalid hex THROWS:', e.message); }
console.log('Tailwind v3 invalid hex passthrough:', JSON.stringify(core.exportTailwindTheme([pal('x', [color({ hex: 'red;}' })])]).theme.extend.colors.persian));
console.log('Tailwind v4 invalid hex passthrough:', JSON.stringify(core.exportTailwindV4CSS([pal('x', [color({ hex: 'red; } body { x: y' })])])));
