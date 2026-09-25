import StyleDictionary from 'style-dictionary';
const sd = new StyleDictionary({
  source: ['tokens.json'],
  log: { verbosity: 'verbose', warnings: 'warn' },
  platforms: {
    css: { transformGroup: 'css', buildPath: 'out/css/', files: [{ destination: 'variables.css', format: 'css/variables' }] },
    js: { transformGroup: 'js', buildPath: 'out/js/', files: [{ destination: 'tokens.js', format: 'javascript/es6' }] },
    ios: { transformGroup: 'ios-swift', buildPath: 'out/ios/', files: [{ destination: 'StyleDictionary.swift', format: 'ios-swift/class.swift', options: { className: 'PersianColors' } }] },
    compose: { transformGroup: 'compose', buildPath: 'out/compose/', files: [{ destination: 'PersianColors.kt', format: 'compose/object', options: { className: 'PersianColors', packageName: 'org.example.persian' } }] },
    json: { transformGroup: 'js', buildPath: 'out/json/', files: [{ destination: 'flat.json', format: 'json/flat' }] },
  },
});
console.log('usesDtcg option:', sd.usesDtcg);
await sd.buildAllPlatforms();
const tokens = await sd.getPlatformTokens('css');
console.log('allTokens count:', tokens.allTokens.length);
console.log('first token keys:', Object.keys(tokens.allTokens[0]));
