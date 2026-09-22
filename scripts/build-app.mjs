import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import { parse } from 'acorn';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
await fs.mkdir(path.join(root,'release'), {recursive:true});
const read=(p)=>fs.readFile(path.join(root,p),'utf8');
let html=await read('app/template.html');
const app=(await read('app/app.js'))+'\n'+await read('app/enhancements.js');
parse(app,{ecmaVersion:'latest'});
const core=await build({absWorkingDir:root,entryPoints:['packages/core/src/index.ts'],bundle:true,format:'iife',globalName:'PersianCore',platform:'browser',target:'es2022',minify:true,write:false,legalComments:'inline'});
const tw=await postcss([tailwindcss({
 content:[{raw:html,extension:'html'},{raw:app,extension:'js'}],
 darkMode:'class',
 theme:{extend:{fontFamily:{sans:['Vazirmatn','sans-serif'],display:['Cinzel','serif'],mono:['Fira Code','monospace']},
 colors:{persian:{gold:'#D4AF37',turquoise:'#00A896',lapis:'#1A365D',crimson:'#9E2A2B',saffron:'#F4A261'}}}},
 plugins:[]
})]).process('@tailwind base;\n@tailwind components;\n@tailwind utilities;',{from:undefined});
async function embedFontCSS(p) {
 let css=await read(p);
 css=css.replace(/,\s*url\([^)]*\.(?:woff|ttf)\)\s*format\([^)]*\)/g,'');
 const urls=[...css.matchAll(/url\(["']?([^)"']+)["']?\)/g)];
 for(const m of urls){
   const target=path.resolve(root,path.dirname(p),m[1]);
   const data=await fs.readFile(target);
   const mime=target.endsWith('.woff2')?'font/woff2':target.endsWith('.ttf')?'font/ttf':'font/woff';
   css=css.replace(m[0],'url(data:'+mime+';base64,'+data.toString('base64')+')');
 }
 return css;
}
let fonts='';
for(const weight of [300,400,500,600,700,800,900]) {
 for(const subset of ['arabic','latin']) fonts+=await embedFontCSS('node_modules/@fontsource/vazirmatn/'+subset+'-'+weight+'.css');
}
for(const [font,weights] of [['cinzel',[600,700]],['fira-code',[400,500]]])
 for(const weight of weights) fonts+=await embedFontCSS('node_modules/@fontsource/'+font+'/latin-'+weight+'.css');
const icons=await embedFontCSS('node_modules/@fortawesome/fontawesome-free/css/all.min.css');
const three=await read('node_modules/three/build/three.min.js');
const css=tw.css+fonts+icons+await read('app/polish.css');
const safeScript=(s)=>s.replace(/<\/script/gi,'<\\/script');
html=html.replace('<!-- BUILD:STYLES -->',()=>'<style>'+css+'</style>');
html=html.replace('<!-- BUILD:SCRIPTS -->',()=>'<script>'+safeScript(three)+'</script>\n<script>'+safeScript(core.outputFiles[0].text)+'</script>\n<script>'+safeScript(app)+'</script>');
await fs.writeFile(path.join(root,'code_artifact.html'),html);
const hash=createHash('sha256').update(html).digest('hex');

// Generate English Standalone Edition (pre-configured with lang="en" and dir="ltr")
let htmlEn = html
  .replace('<html lang="fa" dir="rtl" class="dark">', '<html lang="en" dir="ltr" class="dark">')
  .replace("let currentLang = 'fa';", "let currentLang = 'en';");
await fs.writeFile(path.join(root,'code_artifact_en.html'), htmlEn);
await fs.writeFile(path.join(root,'release/manshour-studio-en.html'), htmlEn);
const hashEn = createHash('sha256').update(htmlEn).digest('hex');

await fs.writeFile(path.join(root,'docs/build-manifest.json'),JSON.stringify({
  version:'3.0.0',
  artifact:'code_artifact.html',
  sha256:hash,
  bytes:Buffer.byteLength(html),
  artifact_en:'code_artifact_en.html',
  sha256_en:hashEn,
  bytes_en:Buffer.byteLength(htmlEn),
  source:'app/template.html + app/app.js + app/enhancements.js + packages/core/src',
  remoteRuntimeDependencies:0
},null,2)+'\n');
console.log('Built standalone studio (FA/bilingual): '+Buffer.byteLength(html)+' bytes; SHA-256 '+hash);
console.log('Built standalone studio (EN standalone): '+Buffer.byteLength(htmlEn)+' bytes; SHA-256 '+hashEn);

