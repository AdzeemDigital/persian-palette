import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
await fs.mkdir(path.join(root,'release'),{recursive:true});
const npmCli=process.env.npm_execpath || path.join(path.dirname(process.execPath),'node_modules/npm/bin/npm-cli.js');
const result=spawnSync(process.execPath,[npmCli,'pack','--pack-destination',path.join(root,'release')],{
 cwd:path.join(root,'packages/core'),stdio:'inherit',windowsHide:true
});
if(result.error)throw result.error;
process.exitCode=result.status??1;
