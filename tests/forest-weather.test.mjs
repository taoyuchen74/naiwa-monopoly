import test from 'node:test';
import assert from 'node:assert/strict';
import { Game } from '../dist/engine.js';
import { MAP_DATA } from '../dist/maps.js';
import { parseMap } from '../dist/map-schema.js';
import {
  FOREST_WEATHER,
  updateForestWeather,
  closedBranches,
  weatherSummary,
} from '../dist/forest-rules.js';
import { ReplayPlayer } from '../dist/replay.js';
import { replayRecord } from '../dist/replay-log.js';
import { CHARACTERS } from '../dist/content.js';
const forest = () => Game.create({ mapVersion: 4, seed: 17, playerCount: 3, talents: false });
function weather(g, kind = 'rain', round = 1) {
  const w = FOREST_WEATHER.find((w) => w.id === kind);
  g.s.round = round;
  g.s.weather = { kind, startedRound: 1, untilRound: w.duration, nextRound: 4 };
}
test('forest uses a valid 48-tile graph with two three-step shortcuts and keeps custom map ID', () => {
  const map = parseMap(MAP_DATA[4]);
  assert.equal(map.tiles.length, 48);
  assert.deepEqual(map.tiles[8].next, [9, 40]);
  assert.deepEqual(map.tiles[28].next, [29, 44]);
  assert.equal(map.tiles[43].next[0], 16);
  assert.equal(map.tiles[47].next[0], 36);
  assert.equal(forest().s.rules, 12);
  assert.equal(Game.create({ seed: 17 }).s.rules, 11);
});
test('weather schedule draws only once at the start of each three-round interval and old maps consume no RNG', () => {
  const g = forest();
  let draws = 0;
  g.int = () => {
    draws++;
    return 1;
  };
  for (const round of [1, 2, 3, 4, 4, 5, 6, 7]) {
    g.s.round = round;
    updateForestWeather(g);
  }
  assert.equal(draws, 2);
  assert.equal(g.s.weather.startedRound, 7);
  const old = Game.create({ seed: 17 });
  const s = old.s.seed;
  updateForestWeather(old);
  assert.equal(old.s.seed, s);
  assert.equal(old.s.weather, undefined);
  for (const w of FOREST_WEATHER) {
    weather(g, w.id, 1);
    assert.deepEqual(closedBranches(g.s), w.branches);
    g.s.round = w.duration + 1;
    assert.deepEqual(closedBranches(g.s), []);
    if (w.duration) assert.match(weatherSummary(g.s), /封路已结束/);
  }
});
test('closed entries reject illegal commands atomically, previews agree with real movement and branch exits remain open', () => {
  const g = forest();
  weather(g);
  g.player.pos = 8;
  g.s.phase = 'moving';
  g.s.remaining = 2;
  assert.deepEqual(g.routes(8), [9]);
  assert.deepEqual(g.preview(2, { first: 40 }), []);
  const hash = g.stateHash();
  assert.equal(g.command('step', { choice: 40 }), false);
  assert.equal(g.stateHash(), hash);
  const predicted = g.preview(2)[0];
  assert.equal(g.command('step'), true);
  assert.equal(g.player.pos, 9);
  g.command('step');
  assert.equal(g.player.pos, predicted.id);
  g.player.pos = 40;
  assert.deepEqual(g.routes(40, { reverse: true, history: [] }), [8]);
  g.player.pos = 43;
  assert.deepEqual(g.routes(43), [16]);
  g.player.pos = 16;
  g.player.reverse = true;
  g.player.history = [8, 40, 41, 42, 43];
  g.s.remaining = 3;
  const preview = g.preview(3)[0];
  for (let i = 0; i < 3; i++) assert.equal(g.command('step'), true);
  assert.equal(g.player.pos, preview.id);
  assert.equal(g.player.pos, 13);
});
test('weather does not clear or consume roadblocks, ward or shield; themes share existing event protection and caps', () => {
  const g = forest();
  weather(g, 'fog');
  g.player.pos = 8;
  g.player.eventWard = true;
  g.player.shield = true;
  g.s.blocks[9] = 1;
  g.s.phase = 'moving';
  g.s.remaining = 6;
  assert.equal(g.preview(6)[0].id, 9);
  assert.equal(g.command('step'), true);
  assert.equal(g.s.remaining, 0);
  assert.equal(g.player.eventWard, true);
  assert.equal(g.player.shield, true);
  assert.ok(g.s.weather);
  const pool = MAP_DATA[4].eventPool;
  g.int = () => pool.indexOf('forest-coupons');
  g.player.tickets = 145;
  g.event();
  assert.equal(g.player.tickets, 150);
  g.int = () => pool.indexOf('forest-maintenance');
  const money = g.player.money;
  g.event();
  assert.equal(g.player.money, money);
  assert.equal(g.player.eventWard, false);
  g.event();
  assert.equal(g.player.money, money - 100);
});
test('weather saves validate schedules and expire deterministically; replay reproduces final hash', () => {
  const g = forest();
  assert.equal(Game.restore(g.s).stateHash(), g.stateHash());
  const bad = structuredClone(g.s);
  bad.weather.nextRound = 999;
  assert.equal(Game.restore(bad), null);
  const legacy = Game.create({ seed: 17 }).s;
  assert.ok(Game.restore(legacy));
  legacy.weather = { kind: 'fog' };
  assert.equal(Game.restore(legacy), null);
  const ai = Game.create({
    mapVersion: 4,
    seed: 3,
    rounds: 20,
    playerCount: 2,
    seatTypes: ['ai', 'ai'],
  });
  replayRecord(ai);
  for (let i = 0; i < 100; i++) ai.ai();
  const replay = new ReplayPlayer(replayRecord(ai));
  while (replay.index < replay.record.commands.length) replay.step();
  assert.equal(replay.game.stateHash(), ai.stateHash());
});

for (const difficulty of ['easy', 'normal', 'hard'])
  for (let count = 2; count <= 6; count++) {
    test('forest finishes and restores with ' + count + ' seats / ' + difficulty, () => {
      let g = Game.create({
        mapVersion: 4,
        seed: 3100 + count,
        rounds: 20,
        playerCount: count,
        difficulty,
        seatTypes: Array(count).fill('ai'),
      });
      let commands = 0;
      while (g.s.phase !== 'finished' && commands++ < 15000) {
        assert.equal(g.ai(), true, 'command at ' + g.s.phase);
        assert.ok(CHARACTERS.some((c) => c.id === g.player.character));
        if (commands % 211 === 0) {
          const restored = Game.restore(g.s);
          assert.ok(restored);
          assert.equal(restored.stateHash(), g.stateHash());
          g = restored;
        }
      }
      assert.equal(g.s.phase, 'finished');
      assert.ok(g.s.round <= 20);
    });
  }
