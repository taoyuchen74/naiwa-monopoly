import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { boot, start, state, advanceUntil, SAVE_KEY } from './helpers.mjs';

test('download save → clear storage → import file → continue exact game', async ({ page }) => {
  const errors = await boot(page);
  await start(page, 'naicha');
  const original = await state(page);
  await page.locator('#settingsBtn').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: '导出存档', exact: true }).click();
  const download = await downloadPromise;
  const bytes = await readFile(await download.path());
  expect(JSON.parse(bytes.toString())).toEqual(original);
  // Clear after page unload, so the real pagehide autosave cannot repopulate it.
  await page.goto('/build-info.json');
  await page.evaluate((key) => localStorage.removeItem(key), SAVE_KEY);
  await page.goto('/');
  await advanceUntil(page, async () => page.locator('#loadingScreen').isHidden(), 30000);
  await expect(page.locator('#continueBtn')).toBeHidden();
  expect(await state(page)).toBeNull();
  await page.locator('#settingsBtn').click();
  await page
    .locator('#importSave')
    .setInputFiles({ name: 'roundtrip.json', mimeType: 'application/json', buffer: bytes });
  await page.getByRole('button', { name: '确认导入', exact: true }).click();
  await expect(page.locator('#startScreen')).toBeHidden();
  expect(await state(page)).toEqual(original);
  await expect(page.locator('#actionBtn')).toBeEnabled();
  await page.locator('#actionBtn').click();
  await advanceUntil(page, async () => (await state(page)).phase === 'moving');
  expect(errors).toEqual([]);
});
