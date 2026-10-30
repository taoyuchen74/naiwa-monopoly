import { test, expect } from '@playwright/test';
import { Game, SAVE_KEY } from '../dist/engine.js';
test('desktop WebGL sleeps while waiting for a human and redraws on camera input', async ({
  browser,
}) => {
  test.skip(process.env.NAIWA_FOREST_WEBGL !== '1', 'Actual WebGL opt-in');
  const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      reducedMotion: 'no-preference',
      serviceWorkers: 'block',
    }),
    page = await context.newPage();
  try {
    const g = Game.create({ seed: 17, playerCount: 3 });
    await page.addInitScript(
      ({ s, key }) => {
        localStorage.setItem(key, JSON.stringify(s));
        localStorage.setItem(
          'naiwa-monopoly-preferences-v1',
          JSON.stringify({ quality: 'auto', sound: false }),
        );
        window.sceneDraws = 0;
        const original = HTMLCanvasElement.prototype.getContext,
          seen = new WeakSet();
        HTMLCanvasElement.prototype.getContext = function (...args) {
          if (/webgl/i.test(args[0]) && args[1]?.preserveDrawingBuffer) return null;
          const gl = original.apply(this, args);
          if (gl && /webgl/i.test(args[0]) && !seen.has(gl)) {
            seen.add(gl);
            for (const method of [
              'drawElements',
              'drawArrays',
              'drawElementsInstanced',
              'drawArraysInstanced',
            ]) {
              const fn = gl[method];
              if (fn)
                gl[method] = function (...a) {
                  if (gl.canvas.parentElement?.id === 'scene') window.sceneDraws++;
                  return fn.apply(gl, a);
                };
            }
          }
          return gl;
        };
      },
      { s: g.s, key: SAVE_KEY },
    );
    await page.goto('/');
    await expect(page.locator('#loadingScreen')).toBeHidden({ timeout: 60000 });
    await page.locator('#continueBtn').click();
    await expect(page.locator('#actionBtn')).toBeEnabled();
    await page.locator('#homeBtn').click();
    const idle = async () => {
      const n = await page.evaluate(() => window.sceneDraws);
      await page.waitForTimeout(350);
      return (await page.evaluate(() => window.sceneDraws)) - n;
    };
    await expect.poll(idle, { timeout: 20000 }).toBe(0);
    const before = await page.evaluate(() => window.sceneDraws);
    expect(before).toBeGreaterThan(0);
    await page.locator('#homeBtn').click();
    await expect.poll(() => page.evaluate(() => window.sceneDraws)).toBeGreaterThan(before);
    await expect.poll(idle).toBe(0);
    await page.screenshot({ path: 'artifacts/desktop-playability.png' });
  } finally {
    await context.close();
  }
});
test('desktop sidebar contains player labels and every tool fits its button at zoom-sized widths', async ({
  browser,
}) => {
  for (const width of [853, 1280, 1920]) {
    const context = await browser.newContext({
        viewport: { width, height: 720 },
        deviceScaleFactor: 1.5,
        serviceWorkers: 'block',
      }),
      page = await context.newPage();
    try {
      const g = Game.create({ seed: 17, playerCount: 6 });
      g.player.money = 12345678;
      await page.addInitScript(
        ({ s, key }) => {
          localStorage.setItem(key, JSON.stringify(s));
          localStorage.setItem(
            'naiwa-monopoly-preferences-v1',
            JSON.stringify({ quality: 'low', sound: false }),
          );
          const get = HTMLCanvasElement.prototype.getContext;
          HTMLCanvasElement.prototype.getContext = function (t, ...args) {
            return /webgl/i.test(t) ? null : get.call(this, t, ...args);
          };
        },
        { s: g.s, key: SAVE_KEY },
      );
      await page.goto('/');
      await expect(page.locator('#loadingScreen')).toBeHidden();
      await page.locator('#continueBtn').click();
      const overflow = await page.locator('.sidebar .player').evaluateAll((nodes) =>
        nodes.flatMap((n) =>
          [...n.querySelectorAll('.player-name,.player-money,.player-stats')]
            .filter((e) => {
              const a = e.getBoundingClientRect(),
                b = n.getBoundingClientRect();
              return a.right > b.right + 1 || a.left < b.left - 1;
            })
            .map((e) => e.className),
        ),
      );
      expect(overflow).toEqual([]);
      expect(
        await page.locator('.sidebar .player').evaluateAll((nodes) =>
          nodes.every((n) => {
            const a = n.getBoundingClientRect(),
              b = n.closest('.sidebar').getBoundingClientRect();
            return a.left >= b.left - 1 && a.right <= b.right + 1;
          }),
        ),
      ).toBe(true);
      expect(
        await page
          .locator('#qualityBtn')
          .evaluate(
            (e) => e.scrollHeight <= e.clientHeight + 1 && e.scrollWidth <= e.clientWidth + 1,
          ),
      ).toBe(true);
    } finally {
      await context.close();
    }
  }
});
