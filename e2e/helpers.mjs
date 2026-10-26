import { expect } from '@playwright/test';

export const SAVE_KEY = 'naiwa-monopoly-v2';
export async function boot(page) {
  // Mock wall time before navigation. Native RAF/timers must keep running for
  // Playwright actionability and real scene animations; rules use an explicit seed.
  const now = new Date('2026-01-01T00:00:00Z');
  await page.clock.setFixedTime(now);
  await page.addInitScript(() => {
    localStorage.setItem(
      'naiwa-monopoly-preferences-v1',
      JSON.stringify({ sound: false, music: false, voice: false, quality: 'low', speed: 2 }),
    );
    localStorage.setItem(
      'naiwa-setup-v1',
      JSON.stringify({ seed: '17', randomStart: false, mapVersion: 2 }),
    );
    // No OS audio or orientation permissions; exercise the game's rotation fallback.
    Object.defineProperty(window, 'AudioContext', { value: undefined, configurable: true });
    Object.defineProperty(window, 'webkitAudioContext', { value: undefined, configurable: true });
    Object.defineProperty(Element.prototype, 'requestFullscreen', {
      configurable: true,
      value: async () => {
        throw new Error('E2E: fullscreen denied');
      },
    });
  });
  const errors = [];
  page.on('pageerror', (error) => {
    errors.push(error.message);
    console.error('E2E page error:', error.message);
  });
  page.on('console', (message) => {
    if (message.type() === 'error') console.error('E2E console:', message.text());
  });
  await page.goto('/');
  try {
    await advanceUntil(page, async () => page.locator('#loadingScreen').isHidden(), 30000);
  } catch (error) {
    console.error(
      'E2E startup:',
      await page.evaluate(() => ({
        hidden: document.hidden,
        status: document.querySelector('#loadingStatus')?.textContent,
        progress: document.querySelector('#loadingProgress')?.value,
        ready: document.readyState,
        fonts: document.fonts.status,
        faces: [...document.fonts].map((face) => ({ family: face.family, status: face.status })),
        images: [...document.images].map((image) => ({
          complete: image.complete,
          width: image.naturalWidth,
          source: image.currentSrc.slice(0, 90),
        })),
        audioBytes: globalThis.__NAIWA_LAUGH_BYTES__?.byteLength,
        gl: document.querySelector('#scene canvas')?.getContext('webgl2')?.getParameter(7937),
      })),
    );
    throw error;
  }
  await expect(page.locator('#app')).not.toHaveAttribute('inert');
  return errors;
}

// Wait for observable rule/UI state instead of a fixed animation duration.
export async function advanceUntil(_page, predicate, max = 30000) {
  await expect.poll(predicate, { timeout: max, intervals: [50, 100, 250] }).toBe(true);
}
export const state = (page) =>
  page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
export async function start(page, character = 'naiwa') {
  await page.locator(`[data-character="${character}"]`).click();
  await page.locator('#startBtn').click();
  await expect(page.locator('#startScreen')).toBeHidden();
  expect((await state(page)).setupSeed).toBe(17);
  expect((await state(page)).current).toBe(0);
}
