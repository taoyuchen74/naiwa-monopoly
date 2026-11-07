import { test, expect } from '@playwright/test';
import { openMapTools } from '../e2e/ui-controls.mjs';
import { Game, SAVE_KEY } from '../dist/engine.js';

test.skip(process.env.NAIWA_FOREST_WEBGL !== '1', 'Runs in the explicit software WebGL CI step');

for (const stage of ['startup', 'running']) {
  test(`WebGL drawing exception during ${stage} releases loading and keeps a playable fallback`, async ({
    page,
  }) => {
    await page.addInitScript((stage) => {
      window.injectDrawing = stage === 'startup';
      localStorage.setItem(
        'naiwa-setup-v1',
        JSON.stringify({ seed: '17', randomStart: false, mapVersion: 2 }),
      );
      localStorage.setItem(
        'naiwa-monopoly-preferences-v1',
        JSON.stringify({ quality: 'low', sound: false }),
      );
      localStorage.setItem(
        'naiwa-tutorial-v1',
        JSON.stringify({ version: 1, disabled: true, seen: [] }),
      );
      window.injectedDrawFailures = 0;
      const get = HTMLCanvasElement.prototype.getContext,
        seen = new WeakSet();
      HTMLCanvasElement.prototype.getContext = function (type, options, ...args) {
        if (/webgl/i.test(type) && options?.preserveDrawingBuffer) return null;
        const gl = get.call(this, type, options, ...args);
        if (gl && /webgl/i.test(type) && !seen.has(gl)) {
          seen.add(gl);
          for (const key of [
            'drawElements',
            'drawArrays',
            'drawElementsInstanced',
            'drawArraysInstanced',
          ]) {
            const draw = gl[key];
            gl[key] = function (...values) {
              if (
                window.injectDrawing &&
                gl.canvas.parentElement?.id === 'scene' &&
                new Error().stack.includes('.drawFrame')
              ) {
                window.injectedDrawFailures++;
                throw Error('Controlled scene draw failure');
              }
              return draw.apply(gl, values);
            };
          }
        }
        return gl;
      };
    }, stage);
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto('/');
    if (stage === 'startup')
      await expect
        .poll(() => page.evaluate(() => window.injectedDrawFailures), { timeout: 60000 })
        .toBeGreaterThan(0);
    // Runtime injection waits for an ordinary software-GPU boot first; startup
    // recovery must still unlock within 15 seconds after the injected exception.
    await expect(page.locator('#loadingScreen')).toBeHidden({
      timeout: stage === 'startup' ? 15000 : 60000,
    });
    await expect(page.locator('#app')).not.toHaveAttribute('inert');
    await page.locator('#talentsEnabled').uncheck();
    await page.locator('#startBtn').click();
    if (stage === 'running') {
      const hash = async () =>
        Game.restore(
          await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY),
        ).stateHash();
      const before = await hash();
      await page.evaluate(() => (window.injectDrawing = true));
      await openMapTools(page);
      await page.locator('#homeBtn').click();
      await expect.poll(() => page.evaluate(() => window.injectedDrawFailures)).toBeGreaterThan(0);
      expect(await hash()).toBe(before);
    }
    await expect(page.locator('#fallback')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('#scene canvas')).toHaveCount(0);
    const failures = await page.evaluate(() => window.injectedDrawFailures);
    await page.waitForTimeout(350);
    expect(await page.evaluate(() => window.injectedDrawFailures)).toBe(failures);
    await expect(page.locator('.fallback-tile')).toHaveCount(48);
    const tile = page.locator('.fallback-tile[data-tile="1"]');
    await tile.scrollIntoViewIfNeeded();
    await tile.click();
    await expect(page.locator('#sheet')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('#actionBtn')).toBeEnabled();
    await page.locator('.dock-tabs [data-panel=cards]').click();
    await page.locator('[data-act=card][data-index="0"]').click();
    await page.locator('[data-act=useCard][data-target="1"]').click();
    await page.locator('#actionBtn').click();
    await expect(page.locator('[data-act=buy]')).toBeVisible({ timeout: 20000 });
    expect(errors).toEqual([]);
  });
}
