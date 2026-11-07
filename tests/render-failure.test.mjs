import { test } from 'node:test';
import assert from 'node:assert/strict';
import { IslandScene } from '../dist/scene.js';

for (const entry of ['low', 'auto', 'context']) {
  test(`scene ${entry} draw failure stops animation and reports loss once`, () => {
    const oldCancel = globalThis.cancelAnimationFrame,
      oldDocument = globalThis.document;
    let cancelled = 0,
      attempts = 0,
      gestures = 0,
      cleared = 0;
    const events = [],
      fail = () => {
        attempts++;
        throw Error('controlled drawing failure');
      };
    const view = Object.assign(Object.create(IslandScene.prototype), {
      raf: 123,
      profile: { name: entry },
      quality: entry,
      el: { dataset: {}, dispatchEvent: (e) => events.push(e) },
      updateLabelVisibility() {},
      updateCamera() {},
      cancelGestures() {
        gestures++;
      },
      fx: {
        anchorDice() {},
        clear() {
          cleared++;
        },
      },
      renderer: {
        info: { reset() {} },
        render: fail,
        getContext: entry === 'context' ? fail : () => ({ isContextLost: () => false }),
      },
      highQuality: { render: fail },
    });
    try {
      globalThis.cancelAnimationFrame = () => cancelled++;
      globalThis.document = { hidden: false };
      assert.doesNotThrow(() => (entry === 'context' ? view.renderStill() : view.drawFrame()));
      assert.equal(view.renderFailed, true);
      assert.equal(view.contextLost, true);
      assert.equal(view.paused, true);
      assert.equal(cancelled, 1);
      assert.equal(gestures, 1);
      assert.equal(cleared, 1);
      assert.equal(events.length, 1);
      assert.equal(events[0].type, 'renderlost');
      assert.equal(events[0].detail.reason, 'draw');
      view.drawFrame();
      view.renderStill();
      assert.equal(attempts, 1);
      assert.equal(events.length, 1);
    } finally {
      globalThis.cancelAnimationFrame = oldCancel;
      globalThis.document = oldDocument;
    }
  });
}
