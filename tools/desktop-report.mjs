import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const rows = [];
for (let run = 1; run <= 3; run++)
  for (const variant of ['before', 'after']) {
    const raw = JSON.parse(await readFile(`artifacts/desktop-${variant}-${run}.json`, 'utf8')),
      p = raw.profiles[0];
    p.aiHash = createHash('sha256').update(JSON.stringify(p.outputs)).digest('hex');
    delete p.outputs;
    rows.push({ run, variant, ...p });
  }
assert.equal(new Set(rows.map((r) => r.aiHash)).size, 1, 'AI outcomes must remain identical');
const med = (a) => a.sort((a, b) => a - b)[1];
const summary = Object.fromEntries(
  ['before', 'after'].map((variant) => {
    const rs = rows.filter((r) => r.variant === variant);
    return [
      variant,
      {
        p50: med(rs.map((r) => r.active.intervalMs.p50)),
        p95: med(rs.map((r) => r.active.intervalMs.p95)),
        resources: rs[2].active.resources,
        staticRenders: rs.map((r) => r.staticScene.renders),
      },
    ];
  }),
);
await mkdir('docs/data', { recursive: true });
await writeFile(
  'docs/data/desktop-playability.json',
  JSON.stringify({ baseline: 'dffb42e2f8fbc0f8c61fb5745114976001fa65e3', summary, rows }, null, 2),
);
console.log(JSON.stringify(summary));
