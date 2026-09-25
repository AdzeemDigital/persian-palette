// W3 exporter robustness probe. Usage: node exporter-injection-probe.mjs <path-to-core-dist/index.js>
// Feeds crafted palette definitions to the public exporters and reports broken/injectable output.
import { pathToFileURL } from 'node:url';
const core = await import(pathToFileURL(process.argv[2]).href);
const color = (over) => ({ id: 'c', hex: '#112233', nameFa: 'رنگ', nameEn: 'Color', roleFa: 'نقش', roleEn: 'role', meaningFa: 'm', evidence: {}, ...over });
const pal = (over, colors) => ({ id: 'p', category: 'art', nameFa: 'پالت', nameEn: 'Palette', descriptionFa: '', culturalContextFa: '', imageUrl: '', colors, ...over });
const cases = {
  cssCommentBreakout: pal({ id: 'evil', nameFa: 'x */ body{background:red} /*' }, [color({ nameFa: 'y */ :root{--pwn:1} /*' })]),
  newlineAndBrace: pal({ id: 'nl', nameFa: 'a\n}\n@import url(https://example.invalid/x.css);\n/*' }, [color()]),
  idWithSpaceAndSemicolon: pal({ id: 'a; --x: 1' }, [color()]),
  idWithDot: pal({ id: 'a.b' }, [color()]),
  idLeadingDigit: pal({ id: '1st-palette' }, [color()]),
  idSwiftKeyword: pal({ id: 'class' }, [color()]),
  idKotlinKeyword: pal({ id: 'fun' }, [color()]),
  idPersian: pal({ id: 'باغ' }, [color()]),
  idEmoji: pal({ id: 'rose-🌹' }, [color()]),
  idQuote: pal({ id: 'q"x' }, [color()]),
  nameEnEmptyAfterSanitize: pal({ id: 'e' }, [color({ nameEn: 'لاجوردی' }), color({ id: 'c2', nameEn: '🌹' })]),
  nameEnCollisionAcrossPunct: pal({ id: 'col' }, [color({ nameEn: 'Rose Red' }), color({ id: 'c2', nameEn: 'Rose-Red' })]),
  underscoreVsHyphen: [pal({ id: 'a-b' }, [color()]), pal({ id: 'a_b' }, [color()])],
  kotlinCaseCollision: [pal({ id: 'a-b' }, [color()]), pal({ id: 'aB' }, [color()])],
  emptyColors: pal({ id: 'empty' }, []),
};
const run = (name, fn) => { try { return fn(); } catch (e) { return 'THROWS: ' + e.message; } };
for (const [name, def] of Object.entries(cases)) {
  const list = Array.isArray(def) ? def : [def];
  console.log('\n===== ' + name + ' =====');
  console.log('--- exportTailwindV4CSS ---\n' + run(name, () => core.exportTailwindV4CSS(list)));
  console.log('--- exportSwiftUI ---\n' + run(name, () => core.exportSwiftUI(list)));
  console.log('--- exportMaterialKotlin (first 3 lines after imports) ---\n' + String(run(name, () => core.exportMaterialKotlin(list))).split('\n').slice(4, 7).join('\n'));
  console.log('--- exportW3CTokens group keys ---\n' + run(name, () => JSON.stringify(Object.keys(core.exportW3CTokens(list).persian))) + ' tokens: ' + run(name, () => JSON.stringify(Object.values(core.exportW3CTokens(list).persian).filter(g => typeof g === 'object').map(g => Object.keys(g)))));
  console.log('--- exportFigmaVariables names ---\n' + run(name, () => JSON.stringify(core.exportFigmaVariables(list).collections[0].variables.map(v => v.name))));
  console.log('--- exportTailwindTheme keys ---\n' + run(name, () => JSON.stringify(Object.keys(core.exportTailwindTheme(list).theme.extend.colors.persian))));
}
