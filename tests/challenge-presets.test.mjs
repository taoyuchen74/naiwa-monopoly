import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Game, createSaveRepository } from '../dist/engine.js';
import { UI_PRESETS, resolvePreset, challengeIntro } from '../dist/ui-presets.js';
import { modeConfig } from '../dist/modes.js';
import { routeSaving } from '../dist/route-preview.js';
import { branchPanel } from '../dist/arrival-panels.js';
import { resultsPanel } from '../dist/results-panel.js';
import { replayRecord, attachRecording } from '../dist/replay-log.js';
import { ReplayPlayer } from '../dist/replay.js';
const preset = () => resolvePreset('forest-business');
const make = (options) =>
  Game.create({ ...preset(), seed: 17, randomStart: false, talents: false, ...options });
test('forest shortcut is an immutable UI table resolving the existing business configuration', () => {
  assert.ok(Object.isFrozen(UI_PRESETS));
  assert.ok(Object.isFrozen(UI_PRESETS['forest-business']));
  assert.deepEqual(preset(), { mapVersion: 4, mode: modeConfig({ id: 'business' }) });
  const a = preset();
  a.mode.initial.cash = 1;
  assert.equal(preset().mode.initial.cash, 3200);
  for (const id of ['unknown', 'constructor', 'toString']) assert.throws(() => resolvePreset(id));
  const html = challengeIntro('forest-business');
  for (const text of ['20', '3,200', '60', '800', '5,000', '抢地', '拆除', '换位', '选择席位'])
    assert.ok(html.includes(text));
});
test('single player, hotseat and observer keep initial conditions and existing save/replay state meaning', () => {
  for (const seatTypes of [
    ['human', 'ai', 'ai'],
    ['human', 'human', 'ai'],
    ['ai', 'ai', 'ai'],
  ]) {
    const g = make({ seatTypes });
    for (const p of g.s.players) {
      assert.equal(p.money, 3200);
      assert.equal(p.tickets, 60);
      assert.equal(p.loan, 800);
      assert.equal(g.owned(p).length, 2);
      assert.ok(g.owned(p).every((o) => o.level === 1 && o.buildingType === 'residence'));
    }
    assert.equal(g.s.maxRounds, 20);
    assert.equal(!!g.s.handoff, seatTypes.filter((s) => s === 'human').length > 1);
    assert.equal(Game.restore(JSON.stringify(g.s)).stateHash(), g.stateHash());
    assert.ok(!Object.hasOwn(g.s, 'presetId'));
    const data = new Map(),
      repo = createSaveRepository({
        getItem: (k) => data.get(k) ?? null,
        setItem: (k, v) => data.set(k, v),
        removeItem: (k) => data.delete(k),
      });
    repo.save('manual1', g.s);
    assert.equal(Game.restore(repo.load('manual1')).stateHash(), g.stateHash());
  }
});
test('branch saving comes from legal routes and known merges without consuming randomness', () => {
  const g = make();
  g.s.weather = { kind: 'clear', startedRound: 1, untilRound: 0, nextRound: 4 };
  for (const [entry, first] of [
    [8, 40],
    [28, 44],
  ]) {
    g.player.pos = entry;
    const hash = g.stateHash();
    assert.equal(routeSaving(g, first), 3);
    assert.equal(routeSaving(g, entry + 1), 0);
    assert.equal(g.stateHash(), hash);
  }
  const city = Game.create({ mapVersion: 2 });
  city.player.pos = 15;
  assert.equal(routeSaving(city, 44), 3);
  const island = Game.create({ mapVersion: 1 });
  island.player.pos = 15;
  assert.equal(routeSaving(island, 44), 15);
});
test('preview names only legal choices and current risk while keeping roadblocks separate', () => {
  const g = make();
  g.player.pos = 8;
  g.s.remaining = 3;
  g.s.phase = 'branch';
  g.s.weather = { kind: 'clear', startedRound: 1, untilRound: 0, nextRound: 4 };
  g.s.blocks[41] = 1;
  const hash = g.stateHash(),
    html = branchPanel(g, (r) => (r.blocked ? '路障截停' : '当前费用 ' + r.rent));
  assert.match(html, /全程省3格/);
  assert.match(html, /当前可知落点/);
  assert.match(html, /路障截停/);
  assert.match(html, /data-id="40"/);
  assert.equal(g.stateHash(), hash);
  g.s.weather = { kind: 'rain', startedRound: 1, untilRound: 2, nextRound: 4 };
  const closedHash = g.stateHash(),
    closed = branchPanel(g, (r) => String(r.id));
  assert.equal(routeSaving(g, 40), 0);
  assert.doesNotMatch(closed, /data-id="40"/);
  assert.match(closed, /data-id="9"/);
  assert.equal(g.stateHash(), closedHash);
});
test('challenge settlement shows objective shortfall, asset components and concrete failure reasons', () => {
  const g = make();
  g.s.round = 20;
  g.s.weather = { kind: 'clear', startedRound: 19, untilRound: 18, nextRound: 22 };
  for (const p of g.s.players) p.money = 0;
  g.player.money = 20000;
  g.finish();
  const html = resultsPanel(g),
    shortfall = Math.max(0, 5000 - g.worth(g.s.players[1]));
  assert.match(html, /挑战成功/);
  assert.ok(html.includes('距离目标还差 ' + shortfall.toLocaleString('zh-CN')));
  assert.match(html, /轮数已用尽，净资产未达目标/);
  assert.match(html, /扣除贷款/);
  assert.match(html, /地产/);
});
test('forest business completes with 2-6 AI seats on every difficulty, restored commands replay identically', () => {
  for (let playerCount = 2; playerCount <= 6; playerCount++)
    for (const difficulty of ['easy', 'normal', 'hard']) {
      let g = make({
        seed: 200 + playerCount,
        playerCount,
        difficulty,
        seatTypes: Array(playerCount).fill('ai'),
      });
      const record = playerCount === 2 && difficulty === 'hard';
      if (record) replayRecord(g);
      let n = 0;
      while (g.s.phase !== 'finished' && n++ < 20000) {
        assert.ok(g.ai());
        if (n % 113 === 0) {
          const copy = Game.restore(g.s);
          assert.ok(copy);
          assert.equal(copy.stateHash(), g.stateHash());
          if (record) attachRecording(copy, replayRecord(g));
          g = copy;
        }
      }
      assert.equal(g.s.phase, 'finished');
      assert.ok(g.s.round <= 20);
      if (record) {
        const replay = new ReplayPlayer(replayRecord(g));
        while (replay.step());
        assert.equal(replay.game.stateHash(), g.stateHash());
      }
    }
});
