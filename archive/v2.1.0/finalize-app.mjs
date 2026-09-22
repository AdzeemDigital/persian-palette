const EXTRA=[["Apple HIG Semantic Colors","Material 3 · تاریک"],["iOS / VisionOS / macOS","Tonal Spot / Dark"],["Google M3 × Apple HIG","HCT / CAM16"],["v2.1.0","v3.0.0"],["توکن‌های معنایی دوگانه (Google/Apple)","توکن‌های معنایی روشن و تاریک"],["APCA (WCAG 3.0)","APCA-W3"],["// $L_c = -87.4$ (مناسب برای متن‌های اصلی با فونت وزن 400)","// Lc ≈ 90.68؛ ارزیابی نهایی به اندازه و وزن فونت وابسته است."],["console.log(mixedColor.hex); // #8C887C","console.log(mixedColor.hex);"],["معماری پکیج سازمانی NPM","پکیج قابل نصب NPM"],["تایید شده برای متون اصلی با فونت وزن 400","راهنمای کنتراست متن روی نمایشگر"],["شاخص کالریمتری نوری (Colorimetry)","شاخص محاسباتی رنگ (Colorimetry)"]];
import fs from 'node:fs/promises';
import {parse} from 'acorn';
let html=await fs.readFile('app/template.html','utf8'),js=await fs.readFile('app/app.js','utf8');
for(const [a,b] of EXTRA){html=html.replaceAll(a,b);js=js.replaceAll(a,b);}
html=html.replace('<!-- NPM PACKAGE ARCHITECTURE', '<!-- NPM PACKAGE ARCHITECTURE');
html=html.replace('<p class="text-slate-300 leading-relaxed">\n          نمونه کد', '<p class="text-slate-300 leading-relaxed">بستهٔ این نسخه در پوشهٔ release قرار دارد. <a href="./release/persian-palette-core-3.0.0.tgz" download class="text-cyan-300 underline">دریافت پکیج نسخهٔ ۳</a></p>\n<p class="text-slate-300 leading-relaxed">\n          نمونه کد');
html=html.replace(/(<div id="evpanel-geospatial"[^>]*>)/,'$1\n<p class="apca-note">مختصات و انتساب‌های میراثی از دادهٔ اولیه نقل شده‌اند. وضعیت تعارض را در شناسنامهٔ رنگ بررسی کنید.</p>');
html=html.replace(/(<div id="evpanel-photogrammetry"[^>]*>)/,'$1\n<p class="apca-note">این تصویر یک بافت رویه‌ای است؛ از اسکن یا فتوگرامتری نمونهٔ فیزیکی به دست نیامده است.</p>');
html=html.replace(/(<div id="evpanel-spectral"[^>]*>)/,'$1\n<p class="apca-note">منحنی زیر یک مدل نمایشی از پارامترهای اولیه است و دادهٔ اندازه‌گیری‌شدهٔ طیف‌سنج نیست.</p>');
html=html.replace(/(<div id="evpanel-tokens"[^>]*>)/,'$1\n<p class="apca-note">خروجی Figma با اسکریپت واردکنندهٔ همراه پروژه استفاده می‌شود؛ فایل DTCG را جداگانه دریافت کنید.</p>');
// All copy handlers await the operation and retain the helper's failure message.
const edits=[];
for(const fn of parse(js,{ecmaVersion:'latest'}).body){
 if(fn.type!=='FunctionDeclaration'||fn.id.name==='copyTextToClipboard')continue;
 const text=js.slice(fn.start,fn.end);
 if(!text.includes('copyTextToClipboard('))continue;
 let body=js.slice(fn.body.start+1,fn.body.end-1).replaceAll('copyTextToClipboard(','await copyTextToClipboard(');
 const head=text.slice(0,text.indexOf('{')).replace(/^(?:async )?function/,'async function');
 edits.push({start:fn.start,end:fn.end,text:head+'{ try {'+body+'} catch(error) { /* Clipboard helper already explains recovery. */ } }'});
}
for(const e of edits.sort((a,b)=>b.start-a.start)) js=js.slice(0,e.start)+e.text+js.slice(e.end);
js=js.replace('if(document.hidden || reducedMotion.matches) return;','if(document.hidden) return;');
js=js.replace('if (threeAutoRotate && !isDragging3D && threeMesh)','if (threeAutoRotate && !reducedMotion.matches && !isDragging3D && threeMesh)');
parse(js,{ecmaVersion:'latest'});
await fs.writeFile('app/template.html',html);await fs.writeFile('app/app.js',js);
