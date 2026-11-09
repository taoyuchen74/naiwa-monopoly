import { test, expect } from '@playwright/test';
import { boot, start } from '../e2e/helpers.mjs';
test('settings expose copyable public diagnostics without changing the saved game', async ({
  page,
}) => {
  await boot(page);
  await start(page);
  const before = await page.evaluate(() => localStorage.getItem('naiwa-monopoly-v2'));
  await page.locator('#settingsBtn').click();
  await expect(page.getByRole('region', { name: '画面诊断' })).toBeVisible();
  await page.locator('[data-act=copyDiagnostic]').click();
  const diagnostic = JSON.parse(await page.locator('#renderDiagnostic').inputValue());
  expect(diagnostic.renderState).toBe('fallback');
  expect(diagnostic.fallbackReason).toBe('context-unavailable');
  expect(Object.keys(diagnostic).sort()).toEqual(
    [
      'buildId',
      'viewport',
      'mapVersion',
      'phase',
      'requestedQuality',
      'effectiveQuality',
      'renderState',
      'fallbackReason',
      'errorSummary',
    ].sort(),
  );
  expect(await page.evaluate(() => localStorage.getItem('naiwa-monopoly-v2'))).toBe(before);
  await page.keyboard.press('Escape');
  await expect(page.locator('#settingsBtn')).toBeFocused();
});
