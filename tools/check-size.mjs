import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';

const policy = JSON.parse(await readFile('tools/size-budget.json', 'utf8'));
const info = JSON.parse(await readFile('out/build-info.json', 'utf8'));
const script = info.assets.find((a) => /^assets\/game\./.test(a.file));
if (!script) throw new Error('Missing built game script');
const inputs = { script: `out/${script.file}`, portable: 'artifacts/奶蛙大富翁.html' };
let failed = false;
const measured = {};
for (const [name, path] of Object.entries(inputs)) {
  const bytes = await readFile(path);
  if (!(await stat(path)).size) throw new Error(`Empty artifact: ${path}`);
  measured[name] = { bytes: bytes.length, gzipBytes: gzipSync(bytes).length };
  for (const metric of ['bytes', 'gzipBytes']) {
    const actual = measured[name][metric];
    const { baseline, limit } = policy[name][metric];
    const delta = actual - baseline;
    console.log(
      `${name}.${metric}: ${actual} B; baseline ${baseline}; diff ${delta >= 0 ? '+' : ''}${delta} B (${((delta / baseline) * 100).toFixed(2)}%); limit ${limit} B${actual > limit ? ' — FAIL' : ''}`,
    );
    if (actual > limit) failed = true;
  }
}
await mkdir('artifacts', { recursive: true });
await writeFile(
  'artifacts/size-report.json',
  JSON.stringify({ measured, policy, failed }, null, 2),
);
if (failed) process.exitCode = 1;
