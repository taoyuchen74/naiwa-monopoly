import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const read = async (path) => JSON.parse(await readFile(path, 'utf8'));
const runs = [];
for (let run = 1; run <= 3; run++)
  for (const variant of ['before', 'after']) {
    const data = await read(`artifacts/forest-quiet-${variant}-${run}.json`);
    for (const p of data.profiles) {
      p.aiOutputHash = createHash('sha256').update(JSON.stringify(p.outputs)).digest('hex');
      delete p.outputs;
    }
    runs.push({ ...data, run, variant });
  }
const median = (a) => [...a].sort((a, b) => a - b)[1];
const summary = ['desktop', 'mobile'].map((name) => {
  const profiles = (variant) =>
    runs.filter((r) => r.variant === variant).map((r) => r.profiles.find((p) => p.name === name));
  const stats = (variant) => {
    const p = profiles(variant);
    return {
      p50: median(p.map((p) => p.active.intervalMs.p50)),
      p95: median(p.map((p) => p.active.intervalMs.p95)),
      aiP50: median(p.map((p) => p.aiMs.p50)),
      aiP95: median(p.map((p) => p.aiMs.p95)),
      resources: p[0].active.resources,
    };
  };
  const before = stats('before'),
    after = stats('after'),
    regression = after.p95 / before.p95 - 1;
  assert.ok(
    profiles('before').every((p) =>
      profiles('after').every((q) => p.aiOutputHash === q.aiOutputHash),
    ),
    'Old-map AI output must stay identical',
  );
  return { name, before, after, p95Regression: regression };
});
await mkdir('docs/data', { recursive: true });
await mkdir('docs/images', { recursive: true });
await writeFile(
  'docs/data/forest-performance.json',
  JSON.stringify(
    {
      baseline: '69fe9698690fe0e0b457c1aa520e1e9c43c47e05',
      measuredLocalBaseline: '51a089735f24be905a40a1b8ee05a94ef4cc79bb',
      summary,
      runs,
    },
    null,
    2,
  ),
);
for (const amount of [80, 100])
  await copyFile(
    `artifacts/forest-balance-${amount}.json`,
    `docs/data/forest-balance-${amount}.json`,
  );
for (const name of ['toy-cast-before', 'toy-cast-after-final', 'forest-toy-town-final'])
  await copyFile(`artifacts/${name}.png`, `docs/images/${name}.png`);
console.log(JSON.stringify(summary, null, 2));
assert.ok(
  summary.every((s) => s.p95Regression <= 0.1),
  'Old scene P95 regression must not exceed 10%',
);
