import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import * as core from '../dist/index.js';
const { PersianEngine, ALL_PALETTES_LIST, PERSIAN_PALETTES, calculateAPCA, hexToHct, generateTonalPalette, generateM3DynamicScheme, mixColors, hexToRgb, rgbToHex, rgbToOklab, oklabToRgb, exportW3CTokens }=core;
const near=(a,b,tol=1e-8)=>assert.ok(Math.abs(a-b)<tol, a+' != '+b);

test('Persian names and Arabic variants resolve correctly',()=>{
 assert.equal(PersianEngine.getColor('isfahan-tiles','فیروزه‌ای اصیل').hex,'#30D5C8');
 assert.equal(PersianEngine.getColor('isfahan-tiles','فيروزه اي اصيل').hex,'#30D5C8');
 assert.equal(PersianEngine.getColor('isfahan-tiles','آبی زنگاری شاهی').hex,'#00A693');
});
test('all 72 IDs, full English and Persian names resolve uniquely',()=>{
 for(const p of ALL_PALETTES_LIST)for(const c of p.colors)
  for(const key of [c.id,c.nameEn,c.nameFa,core.colorTokenKey(c)])assert.equal(PersianEngine.getColor(p.id,key).id,c.id);
});
test('empty, unknown, prototype and ambiguous queries never silently substitute a color',()=>{
 for(const query of ['', '  ', '---', 'not-a-real-color', 'رنگ ناموجود'])assert.throws(()=>PersianEngine.getColor('isfahan-tiles',query));
 assert.throws(()=>PersianEngine.getColor('constructor','red'));
 assert.throws(()=>PersianEngine.getColor('__proto__','red'));
 const p=ALL_PALETTES_LIST.find(p=>p.colors.filter(c=>c.nameFa.includes('ی')).length>1);
 assert.throws(()=>PersianEngine.getColor(p.id,'ی'),/Ambiguous/);
 assert.equal(PersianEngine.getPalette('missing'),undefined);
});
test('hex accepts normalized #RGB and rejects malformed or transparent inputs',()=>{
 assert.deepEqual(hexToRgb(' #abc '),{r:170,g:187,b:204});
 for(const hex of ['red','#12','#1234','#GGGGGG','#12345678','123456','',null])assert.throws(()=>hexToRgb(hex));
 assert.throws(()=>rgbToHex({r:NaN,g:0,b:0}));
});
test('APCA independently pinned golden cases and polarity',()=>{
 const pairs=[['#000000','#FFFFFF',106.04067321268862],['#FFFFFF','#000000',-107.88473318309848],['#777777','#FFFFFF',71.11110332561125],['#FFFFFF','#777777',-76.58194638938959],['#120A8F','#F4F1DE',90.67997329619453]];
 for(const [text,bg,expected]of pairs)near(calculateAPCA(text,bg),expected);
 for(const hex of ['#000000','#FFFFFF','#120A8F'])assert.equal(calculateAPCA(hex,hex),0);
 assert.throws(()=>calculateAPCA('bad','#FFFFFF'));
});
test('APCA font lookup uses actual reference table',()=>{
 assert.equal(core.getApcaFontSizes(75)[400],18);
 assert.equal(core.getApcaFontSizes(75)[700],14);
 assert.ok(core.getApcaFontSizes(0)[400]>=400);
 assert.throws(()=>core.getApcaFontSizes(NaN));
});
test('HCT red golden coordinates use CAM16',()=>{
 const hct=hexToHct('#FF0000');
 near(hct.hue,27.408225137158738);
 near(hct.chroma,113.35788739379781);
 near(hct.tone,53.23288178584245);
 assert.equal(core.hctToHex(hct.hue,hct.chroma,hct.tone),'#FF0000');
});
test('HCT tonal golden colors and L* target accuracy across all seed colors',()=>{
 const red=generateTonalPalette('#FF0000');
 assert.equal(red[0],'#000000');assert.equal(red[40],'#C00100');assert.equal(red[90],'#FFDAD4');assert.equal(red[100],'#FFFFFF');
 for(const p of ALL_PALETTES_LIST)for(const c of p.colors)for(const [tone,hex] of Object.entries(generateTonalPalette(c.hex)))
  near(hexToHct(hex).tone,Number(tone),0.6);
 assert.throws(()=>generateTonalPalette('#FF0000',[NaN]));
 assert.throws(()=>core.hctToHex(30,20,101));
});
const luminance=hex=>{
 const {r,g,b}=hexToRgb(hex),linear=n=>(n/=255)<=0.04045?n/12.92:((n+0.055)/1.055)**2.4;
 return .2126*linear(r)+.7152*linear(g)+.0722*linear(b);
};
test('Material role pairs retain normal-text contrast for all 72 seeds in both themes',()=>{
 for(const p of ALL_PALETTES_LIST)for(const c of p.colors){
  const scheme=generateM3DynamicScheme(c.hex);
  for(const mode of ['light','dark'])for(const [fg,bg]of [['onPrimary','primary'],['onSecondary','secondary'],['onTertiary','tertiary'],['onSurface','surface'],['onError','error']]){
   const a=luminance(scheme[mode][fg]),b=luminance(scheme[mode][bg]),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
   assert.ok(ratio>=4.5,c.id+' '+mode+' '+fg+' '+ratio);
  }
 }
});
test('Oklab forward conversion has known red coordinates and reversible sRGB round trips',()=>{
 const red=rgbToOklab({r:255,g:0,b:0});
 near(red.L,.6279553606145516);near(red.a,.22486306106597398);near(red.b,.1258462985307351);
 for(const p of ALL_PALETTES_LIST)for(const c of p.colors)assert.equal(rgbToHex(oklabToRgb(rgbToOklab(hexToRgb(c.hex)))),c.hex);
});
test('mixing ratio means second color weight; endpoints, symmetry, invalid inputs',()=>{
 const a='#120A8F',b='#F4C430';
 assert.equal(mixColors(a,b,0).hex,a);assert.equal(mixColors(a,b,1).hex,b);
 assert.equal(mixColors(a,b,.4).hex,'#5C6888');
 assert.equal(mixColors(a,b,.4).hex,mixColors(b,a,.6).hex);
 for(const ratio of [-1,2,NaN,Infinity])assert.throws(()=>mixColors(a,b,ratio));
 assert.equal(core.generatePigmentGradient(a,b,1)[0].hex,a);
 assert.throws(()=>core.generatePigmentGradient(a,b,0));
});
test('all generated evidence aliases agree, computed fields match and unresolved evidence is explicit',()=>{
 assert.equal(ALL_PALETTES_LIST.length,12);assert.equal(PersianEngine.getAllColors().length,72);
 const ids=new Set();
 for(const p of ALL_PALETTES_LIST)for(const c of p.colors){
  assert.ok(!ids.has(c.id));ids.add(c.id);
  const e=c.evidence;
  assert.equal(e.geo.latitude,e.geoSpatial.coordinates.lat);assert.equal(e.geo.longitude,e.geoSpatial.coordinates.lng);
  assert.equal(e.chemical.formula,e.mineralogical.chemicalFormula);
  near(e.physics.chromaOklab,Math.hypot(e.colorScience.oklab.a,e.colorScience.oklab.b));
  near(e.colorScience.apca.contrastOnWhite,calculateAPCA(c.hex,'#FFFFFF'));
  assert.equal(e.provenance.heritageStatus,'unverified');assert.equal(e.provenance.spectralStatus,'illustrative');
 }
 const report=core.getDataQualityReport();
 assert.equal(report.coordinateConflicts,11);assert.equal(report.measuredSpectra,0);
 const conflict=report.conflicts.find(c=>c.id==='isfahan-tiles-c2').conflicts.find(c=>c.field==='geo.latitude');
 assert.equal(conflict.selected,36.4633);assert.equal(conflict.alternative,36.2133);assert.equal(conflict.resolution,'unresolved');
});
test('canonical data cannot be mutated by a consumer',()=>{
 assert.throws(()=>{PERSIAN_PALETTES['isfahan-tiles'].colors[0].hex='#000000';},TypeError);
 assert.throws(()=>{PersianEngine.getColor('isfahan-tiles','ultramarine').evidence.geo.latitude=0;},TypeError);
});
test('DTCG shape, metadata placement, values, subset and 72 distinct tokens',()=>{
 const doc=exportW3CTokens();
 assert.equal(doc.$extensions['org.persian-palette'].version,'3.0.0');
 assert.equal(doc.$extensions['org.persian-palette'].dtcgVersion,'2025.10');
 assert.equal(doc.version,undefined);
 let count=0;
 for(const [pName,p]of Object.entries(doc.persian))if(!pName.startsWith('$'))for(const [name,t]of Object.entries(p))if(!name.startsWith('$')){
  count++;assert.equal(t.$type,'color');assert.equal(t.$value.colorSpace,'srgb');assert.equal(t.$value.components.length,3);
  assert.ok(t.$value.components.every(c=>c>=0&&c<=1));assert.equal(t.$value.alpha,1);
  assert.match(t.$value.hex,/^#[0-9a-f]{6}$/);
  assert.equal(t.$extensions['org.persian-palette'].evidence.provenance.heritageStatus,'unverified');
 }
 assert.equal(count,72);
 const subset=exportW3CTokens([ALL_PALETTES_LIST[0]]);assert.equal(Object.keys(subset.persian).filter(k=>!k.startsWith('$')).length,1);
});
test('Figma interchange and legacy Tokens Studio have explicitly different contracts',()=>{
 const figma=core.exportFigmaVariables();assert.equal(figma.schema,'persian-palette/figma-interchange');
 assert.equal(figma.collections[0].variables.length,72);
 for(const v of figma.collections[0].variables){assert.equal(v.resolvedType,'COLOR');assert.ok(Object.values(v.valuesByMode.Default).every(c=>c>=0&&c<=1));}
 const studio=core.exportTokensStudio();assert.equal(studio['isfahan-tiles']['ultramarine-lapis'].value,'#120A8F');
});
test('spectral model is bounded and validates parameters',()=>{
 const data=core.generateSpectralCurve(500,60,.1,.8);
 assert.equal(data.length,65);assert.equal(data[0].wavelengthNm,380);assert.equal(data.at(-1).wavelengthNm,700);
 assert.equal(data.find(p=>p.wavelengthNm===500).reflectance,.8);
 assert.ok(data.every(p=>p.reflectance>=.1&&p.reflectance<=.8));
 for(const args of [[0],[500,0],[500,60,.8,.1],[NaN]])assert.throws(()=>core.generateSpectralCurve(...args));
});
test('SwiftUI export needs no undeclared hex initializer and Material export includes both themes',()=>{
 const swift=core.exportSwiftUI([ALL_PALETTES_LIST[0]]),kotlin=core.exportMaterialKotlin([ALL_PALETTES_LIST[0]]);
 assert.ok(!swift.includes('Color(hex:'));assert.equal((swift.match(/static let/g)||[]).length,6);
 assert.ok(kotlin.includes('lightColorScheme(')&&kotlin.includes('darkColorScheme('));
 const scheme=generateM3DynamicScheme('#120A8F');assert.ok(kotlin.includes(scheme.light.primary.slice(1)));
});
test('CommonJS and ESM package entry points expose matching data and results',async()=>{
 const cjs=createRequire(import.meta.url)('@persian-palette/core'),esm=await import('@persian-palette/core');
 assert.equal(cjs.VERSION,esm.VERSION);assert.deepEqual(cjs.exportW3CTokens(),esm.exportW3CTokens());
 assert.equal(cjs.PersianEngine.getColor('isfahan-tiles','فیروزه‌ای اصیل').hex,'#30D5C8');
});
