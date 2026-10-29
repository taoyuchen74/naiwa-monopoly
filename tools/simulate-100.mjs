import assert from 'node:assert/strict';
import { Game } from '../dist/engine.js';

for (let seed = 1; seed <= 100; seed++) {
  let g = Game.create({
    seed,
    rounds: 30,
    playerCount: seed % 2 ? 4 : 6,
    mapVersion: seed % 3 ? 2 : 1,
    difficulty: ['easy', 'normal', 'hard'][seed % 3],
    randomStart: true,
    seatTypes: Array(seed % 2 ? 4 : 6).fill('ai'),
  });
  let actions = 0;
  while (g.s.phase !== 'finished' && actions < 25000) {
    const before = JSON.stringify(g.s);
    assert.equal(g.command('aiTurn'), true);
    actions++;
    assert.notEqual(JSON.stringify(g.s), before, `stuck: seed ${seed}, ${g.s.phase}`);
    for (const p of g.s.players) {
      assert.ok(Number.isSafeInteger(p.money) && p.money >= 0, `cash: seed ${seed}`);
      assert.ok(p.stocks.every((n) => Number.isSafeInteger(n) && n >= 0));
    }
    for (const own of Object.values(g.s.ownership))
      assert.ok(own.level >= 0 && own.level <= g.buildingLimit(own));
    if (actions % 31 === 0) {
      const restored = Game.restore(g.s);
      assert.ok(restored, `restore: seed ${seed}`);
      assert.deepEqual(restored.s, g.s);
      g = restored;
    }
  }
  assert.equal(g.s.phase, 'finished', `timeout: seed ${seed}`);
  assert.ok(Game.restore(g.s));
  console.log(`Seed ${seed}/100: ${actions} actions, round ${g.s.round}, winner ${g.s.winner}`);
}
