import { Game } from '../dist/engine.js';
import { FOREST_EVENTS } from '../dist/forest-rules.js';
import { CHARACTERS } from '../dist/content.js';
import { writeFile, mkdir } from 'node:fs/promises';
const games = Number(process.argv[2] || 100),
  output = process.argv[3] || 'artifacts/forest-balance.json';
if (!Number.isInteger(games) || games < 1 || games > 10000) throw Error('Invalid game count');
if (process.env.FOREST_MAINTENANCE)
  FOREST_EVENTS.find((e) => e.id === 'forest-maintenance').amount = Number(
    process.env.FOREST_MAINTENANCE,
  );
const rows = [];
for (let i = 0; i < games; i++) {
  const count = 2 + (i % 5),
    difficulty = ['easy', 'normal', 'hard'][i % 3],
    seed = 2001 + i;
  let g = Game.create({
    mapVersion: 4,
    seed,
    rounds: 50,
    playerCount: count,
    difficulty,
    character: CHARACTERS[i % 6].id,
    seatTypes: Array(count).fill('ai'),
  });
  let commands = 0,
    entries = 0,
    opportunities = 0,
    moneyChange = 0,
    samples = 0,
    restores = 0;
  while (g.s.phase !== 'finished' && commands++ < 30000) {
    const id = g.s.current,
      p = g.player,
      pos = p.pos,
      reverse = p.reverse,
      money = g.s.players.map((p) => p.money);
    if (!g.ai()) throw Error('Stalled ' + seed + ' ' + g.s.phase);
    if (g.s.current === id && g.player.pos !== pos && !reverse && [8, 28].includes(pos)) {
      opportunities++;
      if ([40, 44].includes(g.player.pos)) entries++;
    }
    for (const [j, p] of g.s.players.entries()) {
      moneyChange += Math.abs(p.money - money[j]);
      samples++;
    }
    if (commands % 97 === 0) {
      const restored = Game.restore(g.s);
      if (!restored || restored.stateHash() !== g.stateHash())
        throw Error('Restore mismatch ' + seed);
      g = restored;
      restores++;
    }
  }
  if (g.s.phase !== 'finished') throw Error('Timeout ' + seed);
  rows.push({
    seed,
    characters: g.s.players.map((p) => p.character),
    players: count,
    difficulty,
    rounds: g.s.round,
    commands,
    entries,
    opportunities,
    restores,
    meanAbsoluteCashChange: moneyChange / samples,
    bankrupt: g.s.players.filter((p) => !p.alive).length,
    winners: g.leaders().map((p) => p.character),
    hash: g.stateHash(),
  });
  if ((i + 1) % 10 === 0) console.log('Finished ' + (i + 1) + '/' + games);
}
const wins = Object.fromEntries(
  CHARACTERS.map((c) => [c.id, rows.filter((r) => r.winners.includes(c.id)).length]),
);
const appearances = Object.fromEntries(
  CHARACTERS.map((c) => [c.id, rows.filter((r) => r.characters.includes(c.id)).length]),
);
const winRate = Object.fromEntries(CHARACTERS.map((c) => [c.id, wins[c.id] / appearances[c.id]]));
const summary = {
  maintenance: FOREST_EVENTS.find((e) => e.id === 'forest-maintenance').amount,
  appearances,
  winRate,
  games,
  roundLimit: 50,
  meanRounds: rows.reduce((n, r) => n + r.rounds, 0) / games,
  bankruptcyRate:
    rows.reduce((n, r) => n + r.bankrupt, 0) / rows.reduce((n, r) => n + r.players, 0),
  branchUseRate:
    rows.reduce((n, r) => n + r.entries, 0) / rows.reduce((n, r) => n + r.opportunities, 0),
  meanAbsoluteCashChange: rows.reduce((n, r) => n + r.meanAbsoluteCashChange, 0) / games,
  wins,
};
await mkdir(new URL('../artifacts/', import.meta.url), { recursive: true });
await writeFile(output, JSON.stringify({ summary, rows }, null, 2));
console.log(JSON.stringify(summary));
