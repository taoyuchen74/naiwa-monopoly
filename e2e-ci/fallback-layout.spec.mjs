import { test, expect } from '@playwright/test';
import { boot, start, rotateDevice } from '../e2e/helpers.mjs';

test('simplified map tiles scroll clear of the live tutorial and mini map', async ({ page }) => {
  await boot(page);
  await start(page);
  await expect(page.locator('#fallback')).toBeVisible();
  await expect(page.locator('#newsFlash')).toBeHidden();
  for (const tile of await page.locator('.fallback-tile').all()) {
    await tile.scrollIntoViewIfNeeded();
    expect(
      await tile.evaluate((e) => {
        const r = e.getBoundingClientRect(),
          hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
        return e === hit || e.contains(hit);
      }),
      await tile.getAttribute('data-tile'),
    ).toBe(true);
  }
  for (const id of [1, 20, 47]) {
    const tile = page.locator(`.fallback-tile[data-tile="${id}"]`);
    await tile.scrollIntoViewIfNeeded();
    await tile.click({ timeout: 4000 });
    await expect(page.locator('#sheet')).toBeVisible();
    await page.keyboard.press('Escape');
  }
  await rotateDevice(page);
  const last = page.locator('.fallback-tile[data-tile="47"]');
  await last.scrollIntoViewIfNeeded();
  await last.click({ timeout: 4000 });
  await expect(page.locator('#sheet')).toBeVisible();
});
