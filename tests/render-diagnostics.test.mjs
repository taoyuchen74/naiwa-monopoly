import { test } from 'node:test';
import assert from 'node:assert/strict';
import { RenderDiagnostics } from '../dist/render-diagnostics.js';
test('render diagnostics retain only public values and expose immutable snapshots', () => {
  const input = {
    buildId: 'test',
    width: 390,
    height: 844,
    mapVersion: 4,
    phase: 'roll',
    requestedQuality: 'auto',
    effectiveQuality: 'low',
    players: [{ cards: ['secret'] }],
    account: 'secret',
  };
  const d = new RenderDiagnostics();
  assert.equal(d.snapshot(input).renderState, 'starting');
  for (const reason of ['context-unavailable', 'draw-error', 'context-lost', 'custom-map']) {
    d.fallback(reason);
    const snap = d.snapshot(input);
    assert.equal(snap.fallbackReason, reason);
    assert.equal(snap.renderState, 'fallback');
    assert.equal(JSON.stringify(snap).includes('secret'), false);
    assert.ok(Object.isFrozen(snap));
    assert.ok(Object.isFrozen(snap.viewport));
  }
  const old = d.snapshot(input);
  d.webgl();
  assert.equal(d.snapshot(input).fallbackReason, null);
  assert.equal(old.fallbackReason, 'custom-map');
});
