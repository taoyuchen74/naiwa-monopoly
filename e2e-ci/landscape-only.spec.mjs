import { test, expect } from '@playwright/test';
import { boot, start, state } from '../e2e/helpers.mjs';
test('landscape is the only game layout across physical rotations, without a direction button', async ({
  page,
}) => {
  await boot(page);
  await start(page);
  const before = await state(page);
  await expect(page.locator('#orientationBtn')).toHaveCount(0);
  for (const viewport of [
    { width: 390, height: 844 },
    { width: 844, height: 390 },
    { width: 360, height: 640 },
  ]) {
    await page.setViewportSize(viewport);
    await expect(page.locator('#app')).toHaveAttribute('data-layout', 'landscape');
    await expect(page.locator('#app')).toHaveAttribute(
      'data-rotated',
      String(viewport.width < viewport.height),
    );
    await page.locator('#settingsBtn').click();
    await page.keyboard.press('Tab');
    expect(await page.locator('#sheet').evaluate((el) => el.contains(document.activeElement))).toBe(
      true,
    );
    await page.keyboard.press('Escape');
    await expect(page.locator('#actionBtn')).toBeEnabled();
  }
  expect(await state(page)).toEqual(before);
});
