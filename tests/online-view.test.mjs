import test from 'node:test';
import assert from 'node:assert/strict';
import { OnlineView } from '../dist/online-view.js';
import { Game } from '../dist/engine.js';
import { Rooms } from '../server/rooms.mjs';

test('online presentation consumes only the public projection and has no local rule or storage interface', () => {
  const rooms = new Rooms({ code: () => '123456', seed: () => 17 });
  const peer = { sessionId: 'a', send() {}, close() {} };
  rooms.bind(peer, { op: 'create', protocol: 1, name: '甲' });
  rooms.bind(
    { sessionId: 'b', send() {}, close() {} },
    { op: 'join', protocol: 1, name: '乙', roomId: '123456' },
  );
  const room = rooms.rooms.get('123456');
  room.game = Game.create({ seed: 17, playerCount: 2 });
  room.status = 'PLAYING';
  const snapshot = rooms.view(room, 0),
    before = JSON.stringify(snapshot),
    options = { quality: 'low', speed: 1, lighting: 'day' };
  const view = new OnlineView(options);
  view.update(snapshot);
  assert.equal(view.s.options, options);
  assert.equal(view.char().id, snapshot.game.players[0].character);
  assert.equal(view.tiles.length, 48);
  assert.equal(view.command, undefined);
  assert.equal(view.stateHash, undefined);
  for (const p of view.s.players)
    for (const field of ['cards', 'stocks', 'deposit', 'stockBook'])
      assert.equal(p[field], undefined);
  assert.equal(view.s.seed, undefined);
  assert.deepEqual(view.s.blocks, snapshot.game.blocks);
  assert.deepEqual(view.s.pickups, snapshot.game.pickups);
  assert.equal(JSON.stringify(snapshot), before);
  view.update({ ...snapshot, game: null });
  assert.equal(view.s, null);
});
