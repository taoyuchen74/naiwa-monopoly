import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { ruleDependencies } from './simulation-provenance.mjs';
import { fileURLToPath } from 'node:url';
import { matrix } from './paired-balance.mjs';
import { CHARACTERS } from '../dist/content.js';
const sha = (s) => createHash('sha256').update(s).digest('hex');
export function summarize(rows) {
  const result = {
    games: rows.length,
    meanRounds: rows.reduce((a, r) => a + r.rounds, 0) / rows.length,
    commands: rows.reduce((a, r) => a + r.commands, 0),
    restores: rows.reduce((a, r) => a + r.restores, 0),
  };
  const people = rows.flatMap((r) => r.ranked),
    route = rows.reduce(
      (a, r) => {
        for (const k of Object.keys(a)) a[k] += r.routes[k];
        return a;
      },
      { opportunities: 0, openOpportunities: 0, entries: 0 },
    );
  const actors = group(
    people,
    (p) => p.character,
    (a) => ({
      appearances: a.length,
      wins: a.reduce((s, p) => s + p.winCredit, 0),
      winRate: a.reduce((s, p) => s + p.winCredit, 0) / a.length,
      bankrupt: a.filter((p) => !p.alive).length,
      meanAssets: a.reduce((s, p) => s + p.assets.total, 0) / a.length,
    }),
  );
  return {
    ...result,
    appearances: people.length,
    bankrupt: people.filter((p) => !p.alive).length,
    bankruptcyRate: people.filter((p) => !p.alive).length / people.length,
    characters: actors,
    seats: group(
      people,
      (p) => p.seat,
      (a) => ({
        appearances: a.length,
        wins: a.reduce((s, p) => s + p.winCredit, 0),
        winRate: a.reduce((s, p) => s + p.winCredit, 0) / a.length,
      }),
    ),
    routes: {
      ...route,
      openChoiceRate: route.openOpportunities ? route.entries / route.openOpportunities : null,
      overallUtilization: route.opportunities ? route.entries / route.opportunities : null,
    },
    bankruptcyCauses: group(
      people.filter((p) => !p.alive),
      (p) => p.bankruptcyCause || '未知原因',
      (a) => a.length,
    ),
  };
}
function group(items, key, reduce) {
  const m = new Map();
  for (const x of items) {
    const k = String(key(x));
    if (!m.has(k)) m.set(k, []);
    m.get(k).push(x);
  }
  return Object.fromEntries(
    [...m].sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, reduce(v)]),
  );
}
export function validateRows(rows) {
  const cases = matrix(),
    seen = new Set();
  if (rows.length !== cases.length) throw Error('Missing games');
  for (const r of rows) {
    const c = cases[r.config.id];
    if (!c || JSON.stringify(c) !== JSON.stringify(r.config) || seen.has(c.id))
      throw Error('Invalid configuration');
    seen.add(c.id);
    if (
      r.hash !== r.repeatHash ||
      !/^sha256-v1:[a-f0-9]{64}$/.test(r.hash) ||
      !Number.isSafeInteger(r.commands) ||
      r.commands < 1 ||
      !Number.isInteger(r.rounds) ||
      r.rounds < 1 ||
      r.rounds > 50 ||
      r.restores !== Math.floor(r.commands / 97)
    )
      throw Error('Invalid verification');
    if (
      r.ranked.length !== c.players ||
      new Set(r.ranked.map((p) => p.seat)).size !== c.players ||
      Math.abs(r.ranked.reduce((s, p) => s + p.winCredit, 0) - 1) > 1e-9
    )
      throw Error('Invalid ranking');
    if (
      !(
        r.routes.entries <= r.routes.openOpportunities &&
        r.routes.openOpportunities <= r.routes.opportunities
      )
    )
      throw Error('Invalid route denominator');
    const winners = r.ranked.filter((p) => p.rank === 1).length;
    for (const p of r.ranked) {
      if (
        !Number.isInteger(p.seat) ||
        p.seat < 0 ||
        p.seat >= c.players ||
        p.character !== CHARACTERS[(c.rotation + p.seat) % 6].id ||
        typeof p.alive !== 'boolean' ||
        !Number.isInteger(p.rank) ||
        p.rank < 1 ||
        p.rank > c.players ||
        p.winCredit !== (p.rank === 1 ? 1 / winners : 0) ||
        Object.values(p.assets).some((n) => !Number.isSafeInteger(n))
      )
        throw Error('Invalid participant');
    }
    if (Object.values(r.routes).some((n) => !Number.isSafeInteger(n) || n < 0))
      throw Error('Invalid route count');
    for (const p of r.ranked)
      if (
        p.assets.total !==
        p.assets.cash +
          p.assets.deposit +
          p.assets.property +
          p.assets.stocks +
          p.assets.vehicle -
          p.assets.loan
      )
        throw Error('Invalid assets');
  }
  return true;
}
export const dependencyProvenance = (reference = '4016676') => ruleDependencies(reference);
if (resolve(process.argv[1] || '') === fileURLToPath(import.meta.url)) {
  const input = process.argv[2] || 'artifacts/paired-balance.ndjson',
    output = process.argv[3] || 'artifacts/balance-summary.json',
    raw = readFileSync(input, 'utf8').replace(/\r\n/g, '\n'),
    rows = raw.toString().trim().split('\n').map(JSON.parse);
  validateRows(rows);
  const paired = rows.filter((r) => r.config.family === 'paired'),
    compat = rows.filter((r) => r.config.family === 'compat');
  const report = {
    rawSha256: sha(raw),
    provenance: dependencyProvenance(process.env.BALANCE_REFERENCE || '4016676'),
    paired: summarize(paired),
    compatibility: summarize(compat),
    maps: group(paired, (r) => r.config.mapVersion, summarize),
    difficulty: group(paired, (r) => r.config.difficulty, summarize),
    talents: group(paired, (r) => r.config.talents, summarize),
    mapDifficultyTalents: group(
      paired,
      (r) => [r.config.mapVersion, r.config.difficulty, r.config.talents].join('/'),
      summarize,
    ),
  };
  writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
  console.log(
    JSON.stringify({
      paired: report.paired.games,
      compat: report.compatibility.games,
      meanRounds: report.paired.meanRounds,
      bankrupt: report.paired.bankruptcyRate,
      characters: report.paired.characters,
      routes: report.maps['4'].routes,
    }),
  );
}
