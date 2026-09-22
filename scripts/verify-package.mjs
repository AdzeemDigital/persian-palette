import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { version } = JSON.parse(await fs.readFile(path.join(root, 'packages/core/package.json'), 'utf8'));
const archive = path.join(root, 'release', `persian-palette-core-${version}.tgz`);
await fs.access(archive);
const temporaryRoot = path.resolve(os.tmpdir());
const consumer = await fs.mkdtemp(path.join(temporaryRoot, 'persian-palette-consumer-'));
assert.ok(!consumer.startsWith(root + path.sep), 'Consumer must be outside the repository');
const npm = process.env.npm_execpath;
assert.ok(npm, 'Run this check with npm run verify:package');

function run(executable, args, { quiet = false } = {}) {
  const result = spawnSync(executable, args, {
    cwd: consumer, encoding: 'utf8', windowsHide: true,
    stdio: quiet ? 'pipe' : 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    if (quiet) process.stderr.write((result.stdout || '') + (result.stderr || ''));
    throw new Error(`Consumer command failed (${result.status}): ${args[0]}`);
  }
}

await fs.writeFile(path.join(consumer, 'package.json'), JSON.stringify({ private: true, type: 'module' }));
run(process.execPath, [npm, 'install', archive, '--ignore-scripts', '--no-audit', '--no-fund']);

const runtime = `import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import * as esm from '@persian-palette/core';
const require = createRequire(import.meta.url);
const cjs = require('@persian-palette/core');
assert.equal(esm.VERSION, ${JSON.stringify(version)});
assert.equal(esm.PersianEngine.getColor('isfahan-tiles', 'ultramarine').hex, '#120A8F');
assert.equal(esm.PersianEngine.getColor('isfahan-tiles', '\u0641\u06cc\u0631\u0648\u0632\u0647\u200c\u0627\u06cc \u0627\u0635\u06cc\u0644').hex, '#30D5C8');
assert.deepEqual(esm.exportW3CTokens(), cjs.exportW3CTokens());
assert.equal(esm.PersianEngine.getAllColors().length, 72);
assert.equal(cjs.exportTailwindTheme().theme.extend.colors.persian['isfahan-tiles']['100'], '#120A8F');
for (const subpath of ['tokens', 'tokens/figma', 'tokens/style-dictionary', 'tokens/studio']) {
  const target = require.resolve('@persian-palette/core/' + subpath);
  assert.ok(JSON.parse(fs.readFileSync(target, 'utf8')));
}
const css = fs.readFileSync(require.resolve('@persian-palette/core/tokens/tailwind'), 'utf8');
assert.ok(css.includes('--color-persian-isfahan-tiles-100:'));
console.log('Installed tarball: ESM, CommonJS, Persian lookup, 72 tokens and package subpaths passed.');
`;
await fs.writeFile(path.join(consumer, 'runtime.mjs'), runtime);
run(process.execPath, ['runtime.mjs']);

for (const extension of ['mts', 'cts']) {
  const importLine = extension === 'mts'
    ? "import * as core from '@persian-palette/core';"
    : "import core = require('@persian-palette/core');";
  await fs.writeFile(path.join(consumer, `consumer.${extension}`), importLine + `
const color: ReturnType<typeof core.PersianEngine.getColor> = core.PersianEngine.getColor('isfahan-tiles', 'ultramarine');
const hex: string = color.hex;
const name: string = color.nameEn;
const scheme: ReturnType<typeof core.generateM3DynamicScheme> = core.generateM3DynamicScheme(hex);
const primary: string = scheme.light.primary;
const tone: string = scheme.tonalScale[40];
const space: 'srgb' = color.$value.colorSpace;
`);
}
await fs.writeFile(path.join(consumer, 'tsconfig.json'), JSON.stringify({
  compilerOptions: { target: 'ES2022', module: 'NodeNext', moduleResolution: 'NodeNext', strict: true, noEmit: true, skipLibCheck: false, types: [] },
  include: ['*.mts', '*.cts'],
}));
run(process.execPath, [path.join(root, 'packages/core/node_modules/typescript/bin/tsc'), '--project', 'tsconfig.json']);
console.log('Installed tarball: strict TypeScript ESM/CommonJS consumers passed.');

// Example tooling is deliberately installed only after core runtime/type checks.
// A standalone consumer must not inherit dependencies from the repository.
const project = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
run(process.execPath, [npm, 'install', '--save-dev', `style-dictionary@${project.devDependencies['style-dictionary']}`, '--ignore-scripts', '--no-audit', '--no-fund']);

let examples = 0;
for (const document of ['README.md', 'docs/QUICKSTART.md', 'docs/API_REFERENCE.md']) {
  const source = await fs.readFile(path.join(root, document), 'utf8');
  const matches = [...source.matchAll(/<!-- test:esm -->\s*```js\r?\n([\s\S]*?)```/g)];
  assert.ok(matches.length > 0, `No executable examples in ${document}`);
  for (const [, code] of matches) {
    const name = `example-${++examples}.mjs`;
    await fs.writeFile(path.join(consumer, name), code);
    run(process.execPath, [name], { quiet: true });
  }
}
console.log(`Installed tarball: ${examples} documentation examples executed successfully.`);
// Remove only the task-specific directory allocated by mkdtemp above.
assert.equal(path.dirname(path.resolve(consumer)), temporaryRoot);
assert.ok(path.basename(consumer).startsWith('persian-palette-consumer-'));
await fs.rm(consumer, { recursive: true });
