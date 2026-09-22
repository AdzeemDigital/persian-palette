import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import { exportW3CTokens, exportFigmaVariables, exportTokensStudio, exportTailwindV4CSS, exportSwiftUI, exportMaterialKotlin, getDataQualityReport, VERSION } from '../dist/index.js';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
await fs.mkdir(path.join(root,'tokens'), {recursive:true});
const jsons = {
  'w3c-tokens.json': exportW3CTokens(), 'figma-variables.json': exportFigmaVariables(),
  'tokens-studio.json': exportTokensStudio(), 'style-dictionary.json': exportW3CTokens(),
  'data-quality.json': getDataQualityReport()
};
for(const [name,data] of Object.entries(jsons)) await fs.writeFile(path.join(root,'tokens',name),JSON.stringify(data,null,2)+'\n');
await fs.writeFile(path.join(root,'tokens/tailwind-theme.css'),exportTailwindV4CSS());
await fs.writeFile(path.join(root,'tokens/Colors.swift'),exportSwiftUI());
await fs.writeFile(path.join(root,'tokens/ColorSchemes.kt'),exportMaterialKotlin());
await build({entryPoints:[path.join(root,'src/index.ts')],outfile:path.join(root,'dist/index.cjs'),platform:'node',target:'node22',bundle:true,format:'cjs',legalComments:'eof'});
await fs.writeFile(path.join(root,'dist/index.d.cts'), "import type * as Core from './index.js';\ndeclare const core: typeof Core;\nexport = core;\n");
await fs.writeFile(path.join(root,'types/index.d.ts'),"// Compatibility forwarding file. Declarations are generated from src.\nexport * from '../dist/index.js';\n");
console.log('Built core '+VERSION+': ESM, CommonJS, types, DTCG, Tokens Studio, Figma interchange and platform exports.');
