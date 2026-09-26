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
  .replace(/<title>.*?<\/title>/, '<title>Persian Palette Vault | Heritage Color Studio & Design Tokens</title>')
  .replace("let currentLang = 'fa';", "let currentLang = 'en';");

// Statically apply English translations to all data-i18n elements
const uiMatch = app.match(/const UI_STRINGS\s*=\s*(\{[\s\S]*?\n\};)/);
if (uiMatch) {
  try {
    const fn = new Function('return ' + uiMatch[1]);
    const uiStringsEn = fn().en || {};
    for (const [key, val] of Object.entries(uiStringsEn)) {
      const regex = new RegExp(`(<[^>]+data-i18n=["']${key}["'][^>]*>)[\\s\\S]*?(<\\/[a-zA-Z0-9]+>)`, 'g');
      htmlEn = htmlEn.replace(regex, `$1${val}$2`);
    }
  } catch(e) {
    console.error('Failed to parse UI_STRINGS:', e);
  }
}

// Statically replace select options and UI controls for pure English edition
const staticEnReplacements = [
  ['رفتن به پالت‌ها', 'Skip to Palettes'],
  ['<span class="hidden sm:inline" id="langLabel">English</span>', '<span class="hidden sm:inline" id="langLabel">Persian (FA)</span>'],
  ['<span class="hidden sm:inline" id="langLabel">فارسی</span>', '<span class="hidden sm:inline" id="langLabel">Persian (FA)</span>'],
  ['<span class="hidden sm:inline" id="themeLabel">تم روشن</span>', '<span class="hidden sm:inline" id="themeLabel">Light Mode</span>'],
  ['<span class="hidden sm:inline" id="themeLabel">تم تیره</span>', '<span class="hidden sm:inline" id="themeLabel">Dark Mode</span>'],
  ['جستجوی پالت، نام رنگ یا کد هگز...', 'Search palette, color name, or hex code...'],
  ['جستجوی پالت، نام رنگ یا کد هگز', 'Search palette, color name, or hex code'],
  ['جست‌وجوی پالت، نام رنگ یا کد هگز', 'Search palette, color name, or hex code'],
  ['title="معماری پکیج NPM و راهنمای نصب"', 'title="NPM Package Architecture & Usage Guide"'],
  ['title="میکسر ادراکی رنگدانه‌های تاریخی"', 'title="Historic Pigment Perceptual Mixer"'],
  ['title="صادرات توکن‌های W3C و فیگما"', 'title="Export W3C & Figma Tokens"'],
  ['title="نمایش نگارگری و هندسه برداری پارسی (کاملاً بومی و برداری)"', 'title="Procedural Persian Vector Artwork Mode"'],
  ['title="نمایش تصاویر پیوندشده از منابع بیرونی"', 'title="Heritage Reference Photograph Mode"'],
  ['title="روشن یا خاموش کردن افکت صوتی"', 'title="Toggle Audio Harmonic Feedback"'],
  ['title="دیدبان علمی پالت‌های تنال M3 گوگل و رادار Oklab"', 'title="Scientific M3 Tonal Scales & Oklab Radar HUD"'],
  ['title="تغییر به حالت فضایی و هولوگرافیک ترند ۲۰۲۶ (Apple VisionOS Mode)"', 'title="Spatial Holographic Mode (Apple VisionOS Style)"'],
  ['title="تغییر تم روشن و تیره (Light / Dark Theme)"', 'title="Toggle Dark / Light Theme"'],
  ['aria-label="تغییر تم بین روشن و تاریک"', 'aria-label="Toggle Dark / Light Theme"'],
  ['title="تغییر زبان به انگلیسی یا فارسی (Switch Language: English / Persian)"', 'title="Switch Language: English / Persian"'],
  ['aria-label="تغییر زبان به انگلیسی"', 'aria-label="Switch Language to Persian"'],
  ['aria-label="پالت‌های رنگ"', 'aria-label="Color Palettes"'],
  ['title="شناسنامهٔ رنگ، شیمیایی، طیف‌سنجی نوری و ارزیابی ادراکی APCA"', 'title="Color Science Dossier, Spectral Physics & APCA"'],
  ['<option value="dark">لوکس تیره (Dark Luxury AAA)</option>', '<option value="dark">Dark Luxury (AAA)</option>'],
  ['<option value="light">کاغذی روشن (Editorial Light AAA)</option>', '<option value="light">Editorial Light (AAA)</option>'],
  ['<option value="dynamic">کنتراست ماکزیمم (Dynamic AA+)</option>', '<option value="dynamic">Max Dynamic (AA+)</option>'],
  ['<option value="product">کارت محصول / اثر هنری</option>', '<option value="product">Product Card / Art Showcase</option>'],
  ['<option value="hud">داشبورد تلمتری (HUD Analytics)</option>', '<option value="hud">Telemetry Dashboard (HUD Analytics)</option>'],
  ['<option value="hero">بنر فراخوان اقدام (Hero CTA)</option>', '<option value="hero">Hero Action Banner (Hero CTA)</option>'],
  ['<option value="form">فرم و کنترل‌های تعاملی</option>', '<option value="form">Form & Interactive Controls</option>'],
  ['<option value="normal">عادی (Normal Vision)</option>', '<option value="normal">Normal Vision</option>'],
  ['<option value="protanopia">پروتانوپیا (قرمز-کور)</option>', '<option value="protanopia">Protanopia (Red-Blind)</option>'],
  ['<option value="deuteranopia">دوترانوپیا (سبز-کور)</option>', '<option value="deuteranopia">Deuteranopia (Green-Blind)</option>'],
  ['<option value="tritanopia">تریتانوپیا (آبی-کور)</option>', '<option value="tritanopia">Tritanopia (Blue-Blind)</option>'],
  ['<option value="achromatopsia">تک‌رنگ (Achromatopsia)</option>', '<option value="achromatopsia">Achromatopsia (Monochrome)</option>'],
  ['<option value="dodecahedron">کریستال دوازده‌وجهی</option>', '<option value="dodecahedron">Dodecahedron Crystal</option>'],
  ['<option value="octahedron">منشور هشت‌وجهی</option>', '<option value="octahedron">Octahedron Prism</option>'],
  ['<option value="icosahedron">ستاره بیست‌وجهی</option>', '<option value="icosahedron">Icosahedron Star</option>'],
  ['<option value="torusKnot">گره اسلیمی (Torus)</option>', '<option value="torusKnot">Arabesque Knot (Torus)</option>'],
  ['3000K (گرم صفوی)', '3000K (Warm Safavid)'],
  ['5500K (نور روز)', '5500K (Daylight)'],
  ['100% رنگ ۱', '100% Color 1'],
  ['50% متوازن', '50% Balanced'],
  ['100% رنگ ۲', '100% Color 2'],
  ['کپی شد!', 'Copied!'],
  ['کد رنگ در حافظه قرار گرفت.', 'Color code saved to clipboard.'],
  ['منحنی توزیع بازتاب طیف نوری (۳۸۰ تا ۷۰۰ نانومتر)', 'Light Reflectance Spectral Curve (380 to 700 nm)'],
  ['۷۰۰ nm (قرمز)', '700 nm (Red)'],
  ['۶۰۰ nm (زرد)', '600 nm (Yellow)'],
  ['۵۰۰ nm (سبز/سیان)', '500 nm (Green/Cyan)'],
  ['۴۰۰ nm (آبی)', '400 nm (Blue)'],
  ['۳۸۰ nm (بنفش)', '380 nm (Violet)'],
  ['طول موج قله نوری', 'Peak Wavelength (λ_max)'],
  ['پهنای نیمه (FWHM)', 'Full Width at Half Max (FWHM)'],
  ['انرژی فوتون قله', 'Peak Photon Energy'],
  ['بازه بازتاب سطحی', 'Surface Reflectance Range'],
  ['ارزیابی کنتراست ادراکی APCA-W3', 'APCA-W3 Perceptual Contrast Evaluation'],
  ['در برابر سفید خالص', 'Against Pure White (#FFF)'],
  ['متن روان (Lc 90+)', 'Fluent Body Text (Lc 90+)'],
  ['در برابر مشکی خالص', 'Against Pure Black (#000)'],
  ['غیر قابل خواندن', 'Low Contrast / Illegible'],
  ['آزمایشگاه زنده خوانایی روی پس‌زمینه‌های مختلف:', 'Live Readability Lab on Varied Surfaces:'],
  ['>سفید<', '>White<'],
  ['>عاجی صفوی<', '>Alabaster<'],
  ['>ماسه‌سنگ<', '>Sandstone<'],
  ['>اسلیت تیره<', '>Dark Slate<'],
  ['>سرمه‌ای شب<', '>Midnight<'],
  ['عنوان نمونه: هنر کاشی‌کاری صفوی', 'Type Preview: Safavid Tilework of Isfahan'],
  ['این متن نمونه برای مقایسهٔ رنگ متن و پس‌زمینه است. مقدار APCA به‌تنهایی خوانایی فونت فارسی یا انطباق کامل دسترسی‌پذیری را تأیید نمی‌کند.', 'This sample text demonstrates foreground/background contrast. APCA score alone does not guarantee accessibility compliance or font legibility across sizes.'],
  ['>اندازه قلم<', '>Font Size<'],
  ['>سبک (300)<', '>Light (300)<'],
  ['>معمولی (400)<', '>Regular (400)<'],
  ['>ضخیم (700)<', '>Bold (700)<'],
  ['اطلاعات ماده در منبع اولیه', 'Primary Source Material Data'],
  ['مونوکلینیک', 'Monoclinic'],
  ['نام کانی‌شناسی سنتی (فارسی):', 'Traditional Mineral Name (Persian):'],
  ['لاجورد بدخشان و کبالت قمصر', 'Badakhshan Lazurite & Ghamsar Cobalt'],
  ['نام ماده در دادهٔ اولیه (انگلیسی):', 'Initial Source Name (English):'],
  ['روش سنتی استخراج، تغلیظ و فراوری رنگدانه', 'Traditional Extraction & Pigment Processing'],
  ['تکلیس کانی لاجورد با صمغ عربی و کداخت کبالت در کوره کاشی هفت‌رنگ صفوی...', 'Traditional calcination of lazurite ore with gum arabic and cobalt firing in Safavid glaze kilns.'],
  ['منبع تاریخی و سنتی (نیازمند بازبینی مستقل)', 'Historical Citation (Independent Review Required)'],
  ['عرائس الجواهر و نفائس الأطایب - ابوالقاسم کاشانی (قرن هشتم هجری)', 'Arais al-Jawahir wa Nafais al-Atayib - Abu al-Qasim Kashani (14th Century CE)'],
  ['مختصات فیزیکی رنگ در فضاهای ادراکی مدرن (Oklab & CIE)', 'Physical Color Coordinates in Modern Perceptual Spaces (Oklab & CIE)'],
  ['مختصات و انتساب‌های میراثی از دادهٔ اولیه نقل شده‌اند. وضعیت تعارض را در شناسنامهٔ رنگ بررسی کنید.', 'Coordinates and heritage notes are quoted from primary dataset. Inspect conflict flags in the evidence ledger.'],
  ['رادار ژئوانفورماتیک خاستگاه جغرافیایی فلات ایران', 'Iranian Plateau Geoinformatics Radar'],
  ['فلات ایران: ۲۵° تا ۴۰° شمالی • ۴۴° تا ۶۴° شرقی', 'Iranian Plateau: 25°–40° N • 44°–64° E'],
  ['بنای تاریخی یا کانسار معدنی:', 'Historical Site or Mineral Deposit:'],
  ['میدان نقش جهان، مسجد شاه اصفهان', 'Shah Mosque, Naqsh-e Jahan Square, Isfahan'],
  ['عرض جغرافیایی (Latitude):', 'Latitude:'],
  ['طول جغرافیایی (Longitude):', 'Longitude:'],
  ['ارتفاع از سطح دریا:', 'Elevation above Sea Level:'],
  ['1574 متر', '1574 m'],
  ['مشاهدهٔ موقعیت ثبت‌شده', 'View Recorded Location'],
  ['انتساب تاریخی از دادهٔ اولیه آمده است و نیازمند بررسی منبع است.', 'Historical provenance quoted from source dataset; requires scholarly verification.'],
  ['میکسر ادراکی رنگدانه‌های باستانی در فضای Oklab', 'Ancient Pigment Perceptual Mixer in Oklab Space'],
  ['ترکیب پیوسته و یکدست بدون افت شفافیت یا ایجاد ماتی خاکستری معمول در فضای sRGB', 'Continuous optical blending without chroma clipping or sRGB gray desaturation'],
  ['رنگدانه اول (مبنا):', 'Primary Base Pigment:'],
  ['لاجوردی صفوی', 'Safavid Lapis Ultramarine'],
  ['رنگدانه دوم (برای ترکیب):', 'Second Blending Pigment:'],
  ['نسبت ترکیب رنگدانه‌ها (Ratio):', 'Pigment Blend Ratio:'],
  ['50% مبنا • 50% ثانویه', '50% Base • 50% Blend'],
  ['پله‌های ترکیب نوری پیوسته در فضای Oklab:', 'Continuous Optical Blending Steps in Oklab Space:'],
  ['رنگ ترکیبی نهایی (Midpoint Blend):', 'Final Midpoint Blend Color:'],
  ['کپی کد هگز ترکیبی', 'Copy Blended HEX'],
  ['این تصویر یک بافت رویه‌ای است؛ از اسکن یا فتوگرامتری نمونهٔ فیزیکی به دست نیامده است.', 'This surface is a procedural shader texture; not derived from physical photogrammetry scans.'],
  ['پیش‌نمایش بافت و تابش نور', 'Texture & Specular Lighting Preview'],
  ['نمونه تاریخی / منبع نیازمند تطبیق', 'Heritage Reference / Source Under Review'],
  ['برای تغییر جهت تابش نور ماوس را روی سطح بکشید', 'Drag cursor across surface to interactively orbit incident lighting'],
  ['زاویه تابش نور (Light Incident Angle):', 'Incident Light Angle:'],
  ['ضریب صیقل و بازتاب لعاب (Gloss/Specular):', 'Gloss & Specular Factor:'],
  ['آرکی‌تایپ فیزیکی ماده اصلی:', 'Primary Material Archetype:'],
  ['لعاب کاشی هفت‌رنگ صفوی', 'Safavid Haft-Rang Tile Glaze'],
  ['بافت نمایشی با الگوی ترک لعاب و نور قابل تنظیم. این تصویر برای مقایسهٔ بصری ساخته می‌شود و از یک نمونهٔ فیزیکی برداشت نشده است.', 'Procedural craquelure glaze pattern with dynamic lighting. Rendered for visual comparison; not captured from a physical specimen.'],
  ['مقایسهٔ رنگ تخت با سایه‌روشن نمایشی:', 'Flat Digital Color vs Simulated Shader Texture:'],
  ['رنگ استاندارد دیجیتال', 'Digital Color Standard'],
  ['بافت نمایشی', 'Procedural Texture'],
  ['نور و سایهٔ شبیه‌سازی‌شده', 'Simulated Light & Shadow'],
  ['روش تولید بافت:', 'Texture Generation Method:'],
  ['مدل نمایشی؛ بدون سنجش نمونه', 'Procedural Model; No Physical Scan'],
  ['پیش‌نمایش رنگ در اتاق (Camera overlay)', 'Room Color Preview (Camera Overlay)'],
  ['مشاهده زنده این رنگ روی دیوارهای اتاق با دوربین', 'Visualize this color live on interior walls using camera overlay'],
  ['شروع AR', 'Launch AR'],
  ['خروجی Figma با اسکریپت واردکنندهٔ همراه پروژه استفاده می‌شود؛ فایل DTCG را جداگانه دریافت کنید.', 'Figma variable interchange bundle operates via the project import script; download standalone DTCG separately.'],
  ['توکن‌های DTCG و بستهٔ انتقال متغیرها', 'DTCG Tokens & Variable Interchange Bundle'],
  ['آماده واردسازی مستقیم در Figma Token Studio، Style Dictionary و Tailwind v4', 'Ready for direct import into Figma Token Studio, Style Dictionary, and Tailwind v4'],
  ['کپی کد', 'Copy Code'],
  ['منبع استاندارد داده‌ها بر پایه پکیج رسمی', 'Standard Data Source Based on Official Core Package'],
  ['پیش‌نمایش رنگ در اتاق (Camera overlay) و رنگ‌آمیزی فضایی', 'Room Color Preview (Camera Overlay) & Spatial Visualization'],
  ['تجسم زنده رنگ‌های سنتی و الهام‌گرفته ایرانی در فضای معماری و اتاق واقعی', 'Live visualization of authentic Persian heritage colors in real architectural spaces'],
  ['اتاق معماری سه‌بعدی', '3D Architectural Room'],
  ['دوربین زنده (Live Camera)', 'Live Camera Overlay'],
  ['رنگ فعال پالت:', 'Active Palette Color:'],
  ['دسترسی به دوربین برقرار نشد', 'Camera Access Unavailable'],
  ['مرورگر شما مجوز دوربین را مسدود کرده است، یا دستگاه به وب‌کم متصل نیست. می‌توانید از شبیه‌ساز اتاق سه‌بعدی استفاده فرمایید.', 'Camera permission was denied or webcam is unavailable. You can use the 3D room simulator instead.'],
  ['دمای نور محیط (Kelvin):', 'Ambient Color Temperature (Kelvin):'],
  ['تغییر رنگ دیوار', 'Change Wall Color'],
  ['تطبیق فوتومتریک نور محیط با استانداردهای رندرینگ معماری ایرانی', 'Photometric ambient lighting calibration aligned with Persian architectural rendering'],
  ['بستن شبیه‌ساز AR', 'Close AR Simulator'],
  ['منحنی زیر یک مدل نمایشی از پارامترهای اولیه است و دادهٔ اندازه‌گیری‌شدهٔ طیف‌سنج نیست.', 'The curve below is a synthetic model from initial parameters; not measured spectrophotometer data.']
];

for (const [faStr, enStr] of staticEnReplacements) {
  htmlEn = htmlEn.replaceAll(faStr, enStr);
}
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

