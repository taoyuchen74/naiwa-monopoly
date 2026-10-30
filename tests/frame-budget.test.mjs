import test from 'node:test';
import assert from 'node:assert/strict';
import { FrameBudget } from '../dist/frame-budget.js';
test('transient slow frames do not downgrade, sustained stalls downgrade exactly once', () => {
  const budget = new FrameBudget();
  for (let i = 0; i < 20; i++) {
    assert.equal(budget.record(80), false);
    assert.equal(budget.record(10), false);
  }
  for (let i = 0; i < 7; i++) assert.equal(budget.record(60), false);
  assert.equal(budget.record(60), true);
  assert.equal(budget.record(100), false);
  assert.equal(budget.degraded, true);
  budget.reset();
  assert.equal(budget.degraded, false);
  for (let i = 0; i < 8; i++) budget.record(70);
  assert.equal(budget.degraded, true);
});
