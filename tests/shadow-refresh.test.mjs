import { test } from 'node:test';
import assert from 'node:assert/strict';
import { IslandScene } from '../dist/scene.js';

function scene(mode = 'soft') {
  let moving = false;
  const shadowMap = { enabled: true, needsUpdate: true };
  const stage = Object.assign(Object.create(IslandScene.prototype), {
    renderer: { shadowMap },
    profile: { shadows: mode },
    fx: { items: [] },
    shadowDeadline: 0,
    shadowWasAnimated: false,
    isMoving: () => moving,
  });
  return {
    stage,
    move: (value) => {
      moving = value;
    },
    mark: () => {
      shadowMap.needsUpdate = true;
    },
    sample: (now) => {
      stage.refreshShadows(now);
      const update = shadowMap.needsUpdate;
      shadowMap.needsUpdate = false;
      return update;
    },
  };
}

test('camera movement reuses the existing shadow map until the world changes', () => {
  const view = scene();
  assert.equal(view.sample(10), true);
  assert.equal(view.sample(510), false);
  view.mark();
  assert.equal(view.sample(520), true);
  assert.equal(view.sample(540), false);
});

test('soft shadows follow a moving pawn and refresh once more after it comes to rest', () => {
  const view = scene();
  view.move(true);
  assert.equal(view.sample(0), true);
  assert.equal(view.sample(16.7), false);
  assert.equal(view.sample(33.4), true);
  view.move(false);
  assert.equal(view.sample(40), true);
  assert.equal(view.sample(56), false);
});

test('fine shadows refresh for every animated frame and studio angles still update', () => {
  const view = scene('fine');
  view.move(true);
  assert.equal(view.sample(0), true);
  assert.equal(view.sample(8.3), true);
  view.move(false);
  view.stage.studio = {};
  assert.equal(view.sample(9), true);
  assert.equal(view.sample(10), true);
  view.stage.renderer.shadowMap.enabled = false;
  assert.equal(view.sample(11), false);
});

test('skipping presentation invalidates shadows for the snapped board', () => {
  const { stage, sample } = scene();
  stage.fx.clear = () => {};
  stage.invalidate = () => {};
  assert.equal(sample(1), true);
  assert.equal(sample(2), false);
  stage.skipPresentation();
  assert.equal(sample(3), true);
});
