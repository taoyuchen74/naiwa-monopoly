import { test, expect } from '@playwright/test';
import { Game, SAVE_KEY } from '../dist/engine.js';
test('WebGL sparse frame clocks finish movement and preserve command state', async ({
  page,
}, info) => {
  test.skip(
    process.env.NAIWA_FOREST_WEBGL !== '1' || info.project.name !== '390x844',
    'Dedicated real WebGL clock regression',
  );
  const g = Game.create({ seed: 17, mapVersion: 2, talents: false, randomStart: false });
  expect(g.command('card', { index: 0, target: 1 })).toBe(true);
  const expected = Game.restore(g.s);
  expected.command('roll');
  expected.command('step');
  expected.command('step');
  expect(expected.s.phase).toBe('buy');
  await page.addInitScript(
    ({ state, key }) => {
      localStorage.setItem(key, JSON.stringify(state));
      localStorage.setItem(
        'naiwa-monopoly-preferences-v1',
        JSON.stringify({ quality: 'low', speed: 2, sound: false, music: false, voice: false }),
      );
      window.sparseFrames = false;
      window.completedSceneFrames = 0;
      window.movementObserved = false;
      const store = Storage.prototype.setItem;
      Storage.prototype.setItem = function (k, value) {
        store.call(this, k, value);
        if (k === key && !window.movementObserved) {
          const state = JSON.parse(value);
          if (state.phase === 'moving' && state.remaining === 0 && state.players[0].pos === 1) {
            window.movementObserved = true;
            window.completedSceneFrames = 0;
          }
        }
      };
      const raf = requestAnimationFrame.bind(window);
      let clock;
      window.requestAnimationFrame = (callback) =>
        raf((time) => {
          if (!window.sparseFrames || callback.name !== 'bound animate') {
            callback(time);
            return;
          }
          if (window.movementObserved && window.completedSceneFrames >= 2) return;
          clock = Math.max(clock ?? time, time) + 500;
          const afterMove = window.movementObserved;
          setTimeout(() => {
            try {
              callback(clock);
            } finally {
              if (afterMove) window.completedSceneFrames++;
            }
          }, 150);
        });
    },
    { state: g.s, key: SAVE_KEY },
  );
  await page.goto('/');
  await expect(page.locator('#loadingScreen')).toBeHidden({ timeout: 60000 });
  await page.locator('#continueBtn').click();
  await expect(page.locator('#scene canvas')).toHaveCount(1);
  await expect(page.locator('#fallback')).toBeHidden();
  // Bound only the scene frame clock; UI, command pacing and browser input keep real time.
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.evaluate(() => {
    window.sparseFrames = true;
  });
  await page.locator('#actionBtn').click();
  await expect
    .poll(() => page.evaluate(() => window.completedSceneFrames), { timeout: 120000 })
    .toBe(2);
  const read = () => page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
  await expect
    .poll(async () => (await read()).phase, {
      timeout: process.env.NAIWA_SOFTWARE_WEBGL === '1' ? 60000 : 5000,
    })
    .toBe('buy');
  expect(Game.restore(await read()).stateHash()).toBe(expected.stateHash());
  await expect(page.locator('[data-act=buy]')).toBeVisible();
});
