import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import { parse as parseHTML } from 'parse5';
import { parse as parseJS } from 'acorn';
import StyleDictionary from 'style-dictionary';
import * as core from '../packages/core/dist/index.js';
import {createServer} from '../scripts/serve.mjs';
const html=await fs.readFile(new URL('../code_artifact.html',import.meta.url),'utf8');
const source=await fs.readFile(new URL('../app/app.js',import.meta.url),'utf8');
const extra=await fs.readFile(new URL('../app/enhancements.js',import.meta.url),'utf8');
const dom=parseHTML(html);
const nodes=[];function walk(n){nodes.push(n);for(const c of n.childNodes||[])walk(c);}walk(dom);
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
test('Style Dictionary 5 actually consumes all DTCG colors and formats CSS',async()=>{
 const sd=new StyleDictionary({tokens:core.exportW3CTokens(),usesDtcg:true,log:{verbosity:'silent'},platforms:{css:{transformGroup:'css',files:[{destination:'colors.css',format:'css/variables'}]}}});
 const result=await sd.formatPlatform('css'),css=result[0].output;
 assert.equal((css.match(/--persian-/g)||[]).length,72);
 assert.match(css,/--persian-isfahan-tiles-ultramarine-lapis:/);
 assert.ok(!css.includes('[object Object]'));
});
test('standalone HTML has no external runtime script, style or font requests',()=>{
 for(const n of nodes){
  if(n.tagName==='script')assert.equal(attr(n,'src'),undefined);
  if(n.tagName==='link')assert.ok(!/^https?:/.test(attr(n,'href')||''));
 }
 assert.ok(!html.includes('cdn.tailwindcss.com'));
 assert.ok(!html.includes('<!-- BUILD:'));
 assert.ok(html.includes('data:font/woff2;base64,'));
});
test('all generated scripts parse and canonical browser bundle matches package output',()=>{
 const scripts=nodes.filter(n=>n.tagName==='script').map(n=>(n.childNodes||[]).map(x=>x.value||'').join(''));
 assert.equal(scripts.length,3);
 scripts.forEach(s=>new vm.Script(s));
 // Execute only the pure color library, never the UI or a browser.
 const context=vm.createContext({});vm.runInContext(scripts[1],context,{timeout:10000});
 assert.equal(context.PersianCore.VERSION,core.VERSION);
 assert.deepEqual(JSON.parse(JSON.stringify(context.PersianCore.exportW3CTokens())),core.exportW3CTokens());
 const pure=parseJS(source,{ecmaVersion:'latest'}).body.filter(n=>n.type==='FunctionDeclaration'&&['calculateAPCA','generateM3Tones','blendOklab'].includes(n.id.name));
 for(const n of pure)vm.runInContext(source.slice(n.start,n.end),context);
 assert.equal(context.calculateAPCA('#FFFFFF','#777777'),core.calculateAPCA('#FFFFFF','#777777'));
 assert.equal(context.blendOklab('#120A8F','#F4C430',.4),'#5C6888');
 assert.equal(context.generateM3Tones('#FF0000').find(t=>t.tone===40).hex,'#C00100');
});
test('static HTML IDs are unique and all literal UI targets exist',()=>{
 const ids=nodes.map(n=>attr(n,'id')).filter(Boolean);
 assert.equal(new Set(ids).size,ids.length,'Duplicate static IDs');
 const missing=[];
 for(const m of (source+'\n'+extra).matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)){
  if(!ids.includes(m[1])&&!source.includes('id="'+m[1]+'"'))missing.push(m[1]);
 }
 assert.deepEqual([...new Set(missing)],[]);
});
test('contrast optimization preserves or improves contrast and reports the measured grade',()=>{
 const context=vm.createContext({PersianCore:core});
 const names=['hexToRgb','getLuminance','getContrastRatio','getWCAGBadgeInfo','optimizeTextContrast'];
 for(const n of parseJS(source,{ecmaVersion:'latest'}).body.filter(n=>n.type==='FunctionDeclaration'&&names.includes(n.id.name)))
   vm.runInContext(source.slice(n.start,n.end),context);
 for(const p of core.ALL_PALETTES_LIST)for(const bg of p.colors)for(const fg of p.colors){
   const original=context.getContrastRatio(bg.hex,fg.hex);
   const optimized=context.optimizeTextContrast(bg.hex,fg.hex);
   const ratio=context.getContrastRatio(bg.hex,optimized);
   assert.ok(ratio>=original-1e-10);
   assert.ok(ratio>=4.5);
   if(original>=7)assert.equal(optimized,fg.hex);
 }
 const gray=context.optimizeTextContrast('#777777','#777777');
 const ratio=context.getContrastRatio('#777777',gray);
 assert.ok(ratio>=4.5&&ratio<7);
 assert.equal(context.getWCAGBadgeInfo(ratio).label,'WCAG AA');
});
test('literal event handlers reference defined functions',()=>{
 const ast=parseJS(source+'\n'+extra,{ecmaVersion:'latest'});
 const names=new Set(ast.body.filter(n=>n.type==='FunctionDeclaration').map(n=>n.id.name));
 const missing=[];
 for(const n of nodes)for(const a of n.attrs||[])if(a.name.startsWith('on')){
  parseJS(a.value,{ecmaVersion:'latest',allowReturnOutsideFunction:true});
  const match=a.value.match(/^([a-zA-Z_$][\w$]*)\(/);
  if(match&&!names.has(match[1]))missing.push(match[1]);
 }
 assert.deepEqual([...new Set(missing)],[]);
});
test('accessibility and provenance affordances are present in shipped source',()=>{
 assert.ok(nodes.some(n=>attr(n,'class')==='skip-link'));
 assert.ok(attr(nodes.find(n=>attr(n,'id')==='searchInput'),'aria-label'));
 assert.equal(attr(nodes.find(n=>attr(n,'id')==='toast'),'aria-live'),'polite');
 assert.ok(nodes.some(n=>attr(n,'id')==='evidenceProvenance'));
 assert.ok(extra.includes("e.key==='Escape'")&&extra.includes("e.key==='Tab'"));
 assert.ok(html.includes('prefers-reduced-motion:reduce'));
 assert.ok(source.includes('let soundEnabled = false'));
 assert.ok(!html.includes('سازگاری ۱۰۰٪'));
});
test('local HTTP server serves artifact, rejects arbitrary files and unsupported methods',async(t)=>{
 const server=createServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 t.after(()=>new Promise(resolve=>server.close(resolve)));
 const base='http://127.0.0.1:'+server.address().port;
 const response=await fetch(base+'/');assert.equal(response.status,200);assert.ok((await response.text()).includes('v3.0.0 Studio'));
 assert.equal((await fetch(base+'/package.json')).status,404);
 assert.equal((await fetch(base+'/packages/core/src/engine.ts')).status,404);
 assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
 assert.equal((await fetch(base+'/%ZZ')).status,400);
 const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
});
