import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { ESLint } from 'eslint';

test('lint gate rejects unused values, loose equality and shipped console calls', async () => {
  const lint = new ESLint();
  const [result] = await lint.lintText('const unused = 1; console.log(1 == "1");', {
    filePath: 'dist/new-feature.js',
  });
  for (const rule of ['no-unused-vars', 'no-console', 'eqeqeq']) {
    assert.ok(
      result.messages.some((message) => message.ruleId === rule),
      rule,
    );
  }
});

test('size gate fails above budget, prints baseline diff and measures real gzip bytes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'naiwa-size-'));
  try {
    for (const dir of ['tools', 'out/assets', 'artifacts'])
      await mkdir(join(root, dir), { recursive: true });
    const source = Buffer.from('game-data'.repeat(100));
    await writeFile(join(root, 'out/assets/game.000.js'), source);
    await writeFile(join(root, 'artifacts/奶蛙大富翁.html'), source);
    await writeFile(
      join(root, 'out/build-info.json'),
      JSON.stringify({ assets: [{ file: 'assets/game.000.js' }] }),
    );
    const budget = Object.fromEntries(
      ['script', 'portable'].map((name) => [
        name,
        {
          bytes: { baseline: source.length - 1, limit: source.length },
          gzipBytes: { baseline: gzipSync(source).length, limit: gzipSync(source).length },
        },
      ]),
    );
    const policy = join(root, 'tools/size-budget.json');
    await writeFile(policy, JSON.stringify(budget));
    const script = fileURLToPath(new URL('../tools/check-size.mjs', import.meta.url));
    const run = () => spawnSync(process.execPath, [script], { cwd: root, encoding: 'utf8' });
    assert.equal(run().status, 0, 'exact budget boundary is accepted');
    budget.script.bytes.limit--;
    await writeFile(policy, JSON.stringify(budget));
    const failure = run();
    assert.equal(failure.status, 1);
    assert.match(failure.stdout, /diff \+1 B/);
    assert.match(failure.stdout, /FAIL/);
    const report = JSON.parse(await readFile(join(root, 'artifacts/size-report.json'), 'utf8'));
    assert.equal(report.measured.script.gzipBytes, gzipSync(source).length);
    assert.equal(report.failed, true);
    for (const entry of Object.values(budget)) {
      entry.bytes.limit = null;
      entry.gzipBytes.limit = null;
    }
    await writeFile(policy, JSON.stringify(budget));
    assert.equal(run().status, 0, 'report-only policy accepts growth');
    const unlimited = JSON.parse(await readFile(join(root, 'artifacts/size-report.json'), 'utf8'));
    assert.equal(unlimited.failed, false);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
