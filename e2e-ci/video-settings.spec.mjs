import { expect, test } from '@playwright/test';
import { boot, start, state } from '../e2e/helpers.mjs';

test('the travelling settings preserve video choices separately from the game', async ({
  page,
}) => {
  const errors = await boot(page);
  await expect(page.locator('.welcome-actions')).toHaveCSS(
    'background-color',
    'rgb(255, 249, 232)',
  );
  await start(page);
  const before = await state(page);
  await expect(page.locator('#shareBtn')).toBeHidden();
  await expect(page.locator('#soundBtn svg')).toBeVisible();
  await page.locator('#settingsBtn').click();
  await page.getByText('分享试玩链接', { exact: true }).click();
  await expect(page.locator('#shareUrl')).toHaveValue(/^https:\/\//);
  await page.getByText('视频设置', { exact: true }).click();
  await page.getByRole('button', { name: '精细', exact: true }).click();
  await page.locator('#videoAdvanced summary').click();
  await page.locator('[data-select-id=video-fps] button').click();
  await page.getByRole('option', { name: '30 FPS', exact: true }).click();
  await page.getByLabel('显示 FPS').check();
  expect(await state(page)).toEqual(before);
  await page.reload();
  await expect(page.locator('#loadingScreen')).toBeHidden();
  await page.locator('#settingsBtn').click();
  await page.getByText('视频设置', { exact: true }).click();
  await page.locator('#videoAdvanced summary').click();
  await expect(page.locator('#video-fps')).toHaveValue('30');
  await expect(page.getByLabel('显示 FPS')).toBeChecked();
  expect(errors).toEqual([]);
});
