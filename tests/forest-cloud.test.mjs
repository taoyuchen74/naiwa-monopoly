import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { CloudStore } from '../server/cloud-store.mjs';
import { Game } from '../dist/engine.js';

test('optional cloud accepts forest rule 12 weather and rejects inconsistent map versions atomically', async (t) => {
  const store = new CloudStore({ path: ':memory:', now: () => 2000000000000 });
  t.after(() => store.close());
  const { user } = await store.authenticate('register', 'forest_traveler', 'fixture-password-123');
  const g = Game.create({ mapVersion: 4, seed: 17 }),
    id = randomUUID();
  const input = (save) => ({
    actorUserId: user.id,
    requestId: randomUUID(),
    expectedVersion: 0,
    label: '温泉旅行',
    save,
  });
  store.put(user, id, input(g.s));
  const downloaded = store.read(user, id).save;
  assert.deepEqual(downloaded.weather, g.s.weather);
  assert.equal(Game.restore(downloaded).stateHash(), g.stateHash());
  const wrong = Game.create({ mapVersion: 2, seed: 17 }).s;
  wrong.rules = 12;
  assert.throws(() => store.put(user, randomUUID(), input(wrong)));
  const corrupt = structuredClone(g.s);
  corrupt.weather.untilRound++;
  assert.throws(() => store.put(user, randomUUID(), input(corrupt)));
  assert.equal(store.list(user).length, 1);
  assert.deepEqual(store.read(user, id).save.weather, g.s.weather);
});
