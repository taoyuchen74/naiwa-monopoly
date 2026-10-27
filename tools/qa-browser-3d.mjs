// Optional GPU-backed version of the same interactive smoke scenarios.
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const cli=fileURLToPath(import.meta.resolve('@playwright/test/cli'));
const result=spawnSync(process.execPath,[cli,'test',...process.argv.slice(2)],{stdio:'inherit',env:{...process.env,NAIWA_BROWSER_WEBGL:'1'}});
if(result.error)throw result.error;
process.exitCode=result.status??1;
