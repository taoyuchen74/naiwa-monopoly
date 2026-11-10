import { test, expect } from '@playwright/test';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
test('portable file exposes its real build fingerprint without external requests', async ({
  page,
}) => {
  const file = pathToFileURL(resolve('artifacts/奶蛙大富翁.html')).href;
  const external = [];
  page.on('request', (r) => {
    if ((/^https?:/.test(r.url()) || r.url().startsWith('file:')) && r.url() !== file)
      external.push(r.url());
  });
  await page.addInitScript(() => {
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return /webgl/i.test(type) ? null : get.call(this, type, ...args);
    };
    Object.defineProperty(window, 'AudioContext', { value: undefined });
    Object.defineProperty(window, 'webkitAudioContext', { value: undefined });
  });
  await page.goto(file);
  await expect(page.locator('#loadingScreen')).toBeHidden();
  expect(
    await page.locator('.brand img').evaluate((img) => img.complete && img.naturalWidth > 0),
  ).toBe(true);
  const build = await page.locator('html').getAttribute('data-build');
  expect(build).toMatch(/^portable-[a-f0-9]{12}$/);
  await page.locator('#challengeEntry').click();
  await expect(page.locator('#sheetBody')).toContainText('5,000');
  await page.locator('[data-act=chooseChallengeSeats]').click();
  await expect(page.locator('#setupMap')).toHaveValue('4');
  await expect(page.locator('#setupMode')).toHaveValue('business');
  await page.keyboard.press('Escape');
  await page.locator('#settingsBtn').click();
  await page.locator('[data-act=copyDiagnostic]').click();
  const data = JSON.parse(await page.locator('#renderDiagnostic').inputValue());
  expect(data.buildId).toBe(build);
  expect(data.renderState).toBe('fallback');
  await page.keyboard.press('Escape');
  await expect(page.locator('#settingsBtn')).toBeFocused();
  expect(external).toEqual([]);
});
