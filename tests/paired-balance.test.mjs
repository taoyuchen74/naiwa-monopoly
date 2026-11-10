import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { matrix, runMatch, simulationOptions } from '../tools/paired-balance.mjs';
import { validateRows, summarize } from '../tools/balance-report.mjs';
import { CHARACTERS } from '../dist/content.js';

test('paired matrix balances characters at every seat and separates smaller compatibility games', () => {
  const cases = matrix(),
    paired = cases.filter((c) => c.family === 'paired');
  assert.equal(paired.length, 3240);
  assert.equal(cases.length, 3360);
  for (const map of [1, 2, 4])
    for (const difficulty of ['easy', 'normal', 'hard'])
      for (const talents of [false, true])
        assert.equal(
          paired.filter(
            (c) => c.mapVersion === map && c.difficulty === difficulty && c.talents === talents,
          ).length,
          180,
        );
  for (let seat = 0; seat < 6; seat++)
    for (let character = 0; character < 6; character++)
      assert.equal(paired.filter((c) => (c.rotation + seat) % 6 === character).length, 540);
  for (let players = 2; players <= 5; players++)
    for (const difficulty of ['easy', 'normal', 'hard'])
      assert.equal(
        cases.filter(
          (c) => c.family === 'compat' && c.players === players && c.difficulty === difficulty,
        ).length,
        10,
      );
  assert.equal(CHARACTERS.length, 6);
});
test('paired runner compares a full match with periodic restores against an independent repeat', () => {
  const config = matrix().find((c) => c.mapVersion === 4 && c.difficulty === 'hard' && c.talents),
    a = runMatch(config, true),
    b = runMatch(config, false);
  assert.equal(a.hash, b.hash);
  assert.ok(a.restores > 0);
  assert.deepEqual(a.ranked, b.ranked);
  assert.deepEqual(a.routes, b.routes);
});
test('fractional wins and route rates retain distinct denominators and unknown zero rates', () => {
  const rows = [
    {
      rounds: 20,
      commands: 100,
      restores: 1,
      routes: { opportunities: 10, openOpportunities: 5, entries: 2 },
      ranked: [
        { seat: 0, character: 'a', winCredit: 0.5, alive: true, assets: { total: 10 } },
        {
          seat: 1,
          character: 'b',
          winCredit: 0.5,
          alive: false,
          assets: { total: 10 },
          bankruptcyCause: '租金',
        },
      ],
    },
  ];
  const s = summarize(rows);
  assert.equal(s.characters.a.winRate, 0.5);
  assert.equal(s.routes.openChoiceRate, 0.4);
  assert.equal(s.routes.overallUtilization, 0.2);
  assert.equal(s.bankruptcyRate, 0.5);
  rows[0].routes = { opportunities: 0, openOpportunities: 0, entries: 0 };
  assert.equal(summarize(rows).routes.openChoiceRate, null);
});
test('committed evidence covers every configuration and rejects missing, duplicate and tampered records', () => {
  const rows = readFileSync(new URL('../docs/data/paired-balance.ndjson', import.meta.url), 'utf8')
    .trim()
    .split('\n')
    .map(JSON.parse);
  assert.equal(validateRows(rows), true);
  assert.throws(() => validateRows(rows.slice(1)));
  assert.throws(() => validateRows([rows[0], ...rows.slice(0, -1)]));
  const changed = structuredClone(rows);
  changed[0].repeatHash = 'changed';
  assert.throws(() => validateRows(changed));
});

test('simulation process bounds prevent empty queues and runaway worker counts', () => {
  assert.deepEqual(simulationOptions(), { workers: 3, limit: 3360 });
  for (const env of [
    { SIM_WORKERS: '0' },
    { SIM_WORKERS: 'NaN' },
    { SIM_LIMIT: '0' },
    { SIM_LIMIT: '3361' },
    { SIM_WORKERS: '2.5' },
  ])
    assert.throws(() => simulationOptions(env));
});

test('canonical raw evidence matches the published checksum across CRLF and LF checkouts', () => {
  const raw = readFileSync(
    new URL('../docs/data/paired-balance.ndjson', import.meta.url),
    'utf8',
  ).replace(/\r\n/g, '\n');
  const summary = JSON.parse(
    readFileSync(new URL('../docs/data/paired-balance-summary.json', import.meta.url), 'utf8'),
  );
  assert.equal(createHash('sha256').update(raw).digest('hex'), summary.rawSha256);
});
