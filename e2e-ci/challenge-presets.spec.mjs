import { test, expect } from '@playwright/test';
import { Game, SAVE_KEY } from '../dist/engine.js';
import { modeConfig } from '../dist/modes.js';
import { slotKey } from '../dist/save-repository.js';
const saved = (page) => page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
async function boot(page, state = null, gl = false) {
  await page.clock.setFixedTime(new Date('2026-11-09T12:00:00Z'));
  await page.addInitScript(
    ({ state, key, gl }) => {
      if (!sessionStorage.getItem('challenge-ready')) {
        localStorage.clear();
        if (state) localStorage.setItem(key, JSON.stringify(state));
        localStorage.setItem(
          'naiwa-setup-v1',
          JSON.stringify({ mapVersion: 2, modeId: 'standard', seed: '17', randomStart: false }),
        );
        sessionStorage.setItem('challenge-ready', '1');
      }
      localStorage.setItem(
        'naiwa-monopoly-preferences-v1',
        JSON.stringify({ quality: 'low', speed: 2, sound: false, music: false, voice: false }),
      );
      const get = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, ...args) {
        return /webgl/i.test(type) && !gl ? null : get.call(this, type, ...args);
      };
      Object.defineProperty(window, 'AudioContext', { value: undefined, configurable: true });
      Object.defineProperty(window, 'webkitAudioContext', { value: undefined, configurable: true });
    },
    { state, key: SAVE_KEY, gl },
  );
  await page.goto('/');
  await expect(page.locator('#loadingScreen')).toBeHidden({ timeout: 60000 });
}
async function choose(page, selector, value) {
  const select = page.locator(selector),
    label = await select.locator('option[value="' + value + '"]').textContent();
  await select.locator('..').getByRole('combobox').click();
  await page.getByRole('option', { name: label, exact: true }).click();
}
async function configure(page, types = ['human', 'ai', 'ai']) {
  await page.locator('#challengeEntry').click();
  await expect(page.locator('#sheetTitle')).toHaveText('森林经营挑战');
  await expect(page.locator('#sheetBody')).toContainText('3,200');
  await expect(page.locator('#sheetBody')).toContainText('5,000');
  await expect(page.locator('#sheetBody')).toContainText('奶鼠抢地卡');
  await page.locator('[data-act=chooseChallengeSeats]').click();
  await expect(page.locator('#setupMode')).toHaveValue('business');
  await expect(page.locator('#setupMap')).toHaveValue('4');
  await page.locator('#setupSeed').fill('17');
  await choose(page, '#setupInitiative', 'human');
  for (let i = 0; i < types.length; i++)
    await choose(page, '[data-setup-type="' + i + '"]', types[i]);
  await page.locator('[data-act=applyAdvanced]').click();
  await page.locator('#talentsEnabled').uncheck();
}
test('challenge introduction can be cancelled without changing setup or the existing game', async ({
  page,
}) => {
  const g = Game.create({ seed: 53, mapVersion: 2, talents: false });
  await boot(page, g.s);
  const raw = await page.evaluate((key) => localStorage.getItem(key), SAVE_KEY),
    setup = await page.evaluate(() => localStorage.getItem('naiwa-setup-v1'));
  await page.locator('#challengeEntry').click();
  await expect(page.locator('[data-act=chooseChallengeSeats]')).toBeFocused();
  for (const key of ['Tab', 'Shift+Tab'])
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press(key);
      expect(
        await page.evaluate(() =>
          document.getElementById('sheet').contains(document.activeElement),
        ),
      ).toBe(true);
    }
  await page.keyboard.press('Escape');
  await expect(page.locator('#challengeEntry')).toBeFocused();
  expect(await page.evaluate((key) => localStorage.getItem(key), SAVE_KEY)).toBe(raw);
  expect(await page.evaluate(() => localStorage.getItem('naiwa-setup-v1'))).toBe(setup);
  await page.locator('#continueBtn').click();
  expect(Game.restore(await saved(page)).stateHash()).toBe(g.stateHash());
});
for (const [name, types] of [
  ['single', ['human', 'ai', 'ai']],
  ['hotseat', ['human', 'human', 'ai']],
  ['observer', ['ai', 'ai', 'ai']],
])
  test(
    'forest shortcut preserves ' + name + ' seats, target and continuation',
    async ({ page }) => {
      await boot(page);
      await configure(page, types);
      await expect(page.locator('#mapSelect')).toHaveValue('4');
      await expect(page.locator('#durationHint')).toContainText('5,000');
      await page.locator('#startBtn').click();
      await expect(page.locator('#startScreen')).toBeHidden();
      const s = await saved(page);
      expect(s.mode).toEqual(modeConfig({ id: 'business' }));
      expect(s.mapVersion).toBe(4);
      expect(s.players.map((p) => p.human)).toEqual(types.map((t) => t === 'human'));
      if (name === 'hotseat') {
        await expect(page.locator('#sheet')).toHaveAttribute('data-panel', 'handoff');
        await expect(page.locator('#cardCount')).toHaveText('—');
        await page.keyboard.press('Escape');
        await expect(page.locator('[data-act=acceptTurn]')).toBeVisible();
        await page.reload();
        await expect(page.locator('#loadingScreen')).toBeHidden();
        await page.locator('#continueBtn').click();
        await expect(page.locator('#sheet')).toHaveAttribute('data-panel', 'handoff');
        await page.locator('[data-act=acceptTurn]').click();
        await expect(page.locator('.dock-tabs [data-panel=cards]')).toBeEnabled();
      } else if (name === 'single') {
        for (const p of s.players) {
          expect(p.money).toBe(3200);
          expect(p.loan).toBe(800);
          expect(p.tickets).toBe(60);
          expect(
            Object.values(s.ownership).filter((o) => o.player === p.id && o.level === 1),
          ).toHaveLength(2);
        }
        const hash = Game.restore(s).stateHash();
        await page.locator('#settingsBtn').click();
        await page.locator('[data-act=panel][data-panel=saves]').click();
        await page.locator('[data-save-slot=manual1] [data-act=slotSave]').click();
        const manual = await page.evaluate((key) => localStorage.getItem(key), slotKey('manual1'));
        expect(Game.restore(manual).stateHash()).toBe(hash);
        await page.locator('[data-save-slot=manual1] [data-act=slotLoad]').click();
        await page.locator('[data-act=slotConfirm]').click();
        expect(Game.restore(await saved(page)).stateHash()).toBe(hash);
        await page.reload();
        await expect(page.locator('#loadingScreen')).toBeHidden();
        await page.locator('#continueBtn').click();
        expect((await saved(page)).mode).toEqual(s.mode);
      } else {
        expect(s.handoff).toBeNull();
        await expect(page.locator('.dock-tabs [data-panel=cards]')).toBeDisabled();
      }
    },
  );
test('branch UI previews only current risks and preserves the rule hash until a route is chosen', async ({
  page,
}) => {
  const g = Game.create({
    seed: 17,
    mapVersion: 4,
    mode: modeConfig({ id: 'business' }),
    talents: false,
    randomStart: false,
  });
  g.s.weather = { kind: 'clear', startedRound: 1, untilRound: 0, nextRound: 4 };
  g.player.pos = 8;
  g.player.forced = 3;
  g.s.ownership[41] = { player: 1, level: 2, buildingType: 'hotel' };
  g.s.blocks[41] = 1;
  g.roll();
  g.step();
  expect(g.s.phase).toBe('branch');
  expect(Game.restore(g.s)).toBeTruthy();
  await boot(page, g.s);
  await page.locator('#continueBtn').click();
  await expect(page.locator('#sheet')).toHaveAttribute('data-panel', 'branch');
  await expect(page.locator('.route-choice')).toHaveCount(2);
  await expect(page.locator('#sheetBody')).toContainText('全程省3格');
  await expect(page.locator('#sheetBody')).toContainText('当前可知落点');
  await expect(page.locator('#sheetBody')).toContainText('路障截停');
  expect(Game.restore(await saved(page)).stateHash()).toBe(g.stateHash());
  await page.locator('[data-act=branch][data-id="40"]').click();
  await expect.poll(async () => (await saved(page)).players[0].pos).toBe(41);
});
test('challenge result exposes shortfall and expandable assets without leaving the modal', async ({
  page,
}) => {
  const g = Game.create({
    seed: 17,
    mapVersion: 4,
    mode: modeConfig({ id: 'business' }),
    talents: false,
  });
  g.s.round = 20;
  g.s.weather = { kind: 'clear', startedRound: 19, untilRound: 18, nextRound: 22 };
  for (const p of g.s.players) p.money = 0;
  g.player.money = 20000;
  g.finish();
  await boot(page, g.s);
  await page.locator('#continueBtn').click();
  await expect(page.locator('[data-mode-player="0"]')).toContainText('距离目标还差 0');
  await expect(page.locator('[data-mode-player="1"]')).toContainText('轮数已用尽');
  await page.locator('.result-entry').nth(1).locator('summary').click();
  await expect(page.locator('.result-entry').nth(1).locator('.result-ledger')).toBeVisible();
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press('Tab');
    expect(
      await page.evaluate(() => document.getElementById('sheet').contains(document.activeElement)),
    ).toBe(true);
  }
});
test('forest shortcut WebGL keeps the built-in 3D map through configuration and start', async ({
  page,
}, info) => {
  test.skip(
    process.env.NAIWA_FOREST_WEBGL !== '1' || info.project.name !== '390x844',
    'Dedicated real WebGL fixture',
  );
  await boot(page, null, true);
  await configure(page);
  await page.locator('#startBtn').click();
  await expect(page.locator('#startScreen')).toBeHidden();
  await expect(page.locator('#scene canvas')).toHaveCount(1);
  await expect(page.locator('#fallback')).toBeHidden();
  expect((await saved(page)).mode.id).toBe('business');
  for (const [width, height] of [
    [360, 640],
    [360, 800],
    [390, 844],
    [844, 390],
    [768, 1024],
    [1440, 900],
  ]) {
    await page.setViewportSize({ width, height });
    await page.evaluate(
      ({ width, height }) => {
        const insets =
          width < height
            ? { top: 44, right: 20, bottom: 34, left: 12 }
            : { top: 0, right: 44, bottom: 21, left: 44 };
        for (const [edge, n] of Object.entries(insets))
          document.documentElement.style.setProperty('--inset-' + edge, n + 'px');
      },
      { width, height },
    );
    await expect
      .poll(
        async () => {
          const boxes = await Promise.all(
            ['forestWeather', 'playerSidebar', 'tutorialFloat'].map((id) =>
              page.locator('#' + id).boundingBox(),
            ),
          );
          const [weather, assets, guide] = boxes;
          const separated = (a, b) =>
            a.x + a.width <= b.x ||
            b.x + b.width <= a.x ||
            a.y + a.height <= b.y ||
            b.y + b.height <= a.y;
          return (
            separated(weather, assets) && separated(guide, weather) && separated(guide, assets)
          );
        },
        { message: `Forest HUD must not overlap at ${width}x${height}` },
      )
      .toBe(true);
  }
  await page.setViewportSize({ width: 360, height: 640 });
  await page.evaluate(() => {
    for (const [edge, n] of Object.entries({ top: 44, right: 20, bottom: 34, left: 12 }))
      document.documentElement.style.setProperty('--inset-' + edge, n + 'px');
  });
  await expect(page.locator('#toast')).not.toHaveClass(/show/);
  await expect(page.locator('#newsFlash')).toBeHidden();
  await page.screenshot({ path: 'artifacts/forest-challenge-guidance.png' });
  // The actual scroll container must expose its lower buttons without moving the page.
  await page.locator('#tutorialFloat [data-tutorial=skip]').click();
  await expect(page.locator('#tutorialFloat .tutorial-tip')).toBeHidden();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await page.locator('#playersToggle').click();
  await expect(page.locator('#playersToggle')).toHaveAttribute('aria-expanded', 'true');
  await page.locator('#playersToggle').click();
  await expect(page.locator('#actionBtn')).toBeEnabled();
  await page.screenshot({ path: 'artifacts/forest-challenge-webgl.png' });
});
