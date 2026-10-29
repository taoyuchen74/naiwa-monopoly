import { test, expect } from '@playwright/test';
import { boot, start, state, advanceUntil } from './helpers.mjs';

test('select character → settle dice → buy land → wait for computer', async ({ page }) => {
  const errors = await boot(page);
  await start(page, 'naishu');
  const before = await state(page);
  // Seed 17's first roll is asserted, not patched into the engine.
  await page.locator('#actionBtn').click();
  await advanceUntil(page, async () => (await state(page)).phase === 'buy');
  await expect(page.locator('#sheet')).toBeVisible();
  const landed = await state(page);
  expect(landed.dice).toEqual([4]);
  expect(landed.players[0].pos).toBe(4);
  await page.locator('[data-act=buy]').click();
  const bought = await state(page);
  expect(bought.phase).toBe('end');
  expect(bought.ownership['4']).toMatchObject({ player: 0, level: 0 });
  expect(bought.players[0].money).toBeLessThan(before.players[0].money);
  // Construction panel is a real blocking decision; close before ending turn.
  if (await page.locator('#sheet').isVisible()) await page.locator('#closeSheet').click();
  await page.locator('#actionBtn').click();
  await expect.poll(async () => (await state(page)).revision).toBeGreaterThan(bought.revision);
  expect(errors).toEqual([]);
});
