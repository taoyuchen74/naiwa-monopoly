import { test, expect } from '@playwright/test';
import { Game, SAVE_KEY } from '../dist/engine.js';
async function boot(page, saved = null, gl = false) {
  await page.clock.setFixedTime(new Date('2026-01-01T00:00:00Z'));
  await page.addInitScript(
    ({ saved, key, gl }) => {
      localStorage.setItem(
        'naiwa-monopoly-preferences-v1',
        JSON.stringify({ sound: false, music: false, voice: false, quality: 'low', speed: 3 }),
      );
      localStorage.setItem(
        'naiwa-setup-v1',
        JSON.stringify({ mapVersion: 2, seed: '17', randomStart: false }),
      );
      if (saved) localStorage.setItem(key, JSON.stringify(saved));
      const get = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, options, ...args) {
        if (/webgl/i.test(type) && (!gl || options?.preserveDrawingBuffer)) return null;
        return get.call(this, type, options, ...args);
      };
    },
    { saved, key: SAVE_KEY, gl },
  );
  await page.goto('/');
  await expect(page.locator('#loadingScreen')).toBeHidden();
}
const state = (page) => page.evaluate((key) => JSON.parse(localStorage.getItem(key)), SAVE_KEY);
async function chooseForest(page) {
  await page.locator('[data-select-id=mapSelect] button').click();
  await page.getByRole('option', { name: '森林温泉小镇 · 天气分岔', exact: true }).click();
  await expect(page.locator('#onlineEntry')).toBeHidden();
  await page.locator('#talentsEnabled').uncheck();
  await page.locator('#startBtn').click();
  await expect(page.locator('#startScreen')).toBeHidden();
}
async function buyBuild(page) {
  await page.locator('.dock-tabs [data-panel=cards]').click();
  await page.locator('[data-act=card][data-index="0"]').click();
  await page.locator('[data-act=useCard][data-target="1"]').click();
  await page.locator('#actionBtn').click();
  await expect.poll(async () => (await state(page)).phase).toBe('buy');
  await page.locator('[data-act=buy]').click();
  await page.locator('[data-act=construct][data-type=residence]').click();
  if (await page.locator('#sheet').isVisible()) await page.locator('#closeSheet').click();
  await expect.poll(async () => (await state(page)).ownership[1]?.level).toBe(1);
}
test('forest is selectable and playable through purchase, construction, ending and exact saved weather restore', async ({
  page,
}) => {
  await boot(page);
  await chooseForest(page);
  await expect(page.locator('#forestWeather')).toContainText('第4轮换天气');
  await buyBuild(page);
  const weather = (await state(page)).weather;
  await page.reload();
  await expect(page.locator('#loadingScreen')).toBeHidden();
  await page.locator('#continueBtn').click();
  expect((await state(page)).weather).toEqual(weather);
  await page.locator('#actionBtn').click();
  await expect.poll(async () => (await state(page)).current).not.toBe(0);
});
test('closed forest branch has no illegal choice and both maps visibly mark blocked entries', async ({
  page,
}) => {
  const g = Game.create({ mapVersion: 4, seed: 17, talents: false });
  g.player.pos = 8;
  g.s.phase = 'branch';
  g.s.remaining = 2;
  g.s.weather = { kind: 'rain', startedRound: 1, untilRound: 2, nextRound: 4 };
  await boot(page, g.s);
  await page.locator('#continueBtn').click();
  await expect(page.locator('#forestWeather')).toContainText('松林小径入口关闭');
  await expect(page.locator('[data-act=branch][data-id="40"]')).toHaveCount(0);
  await page.locator('[data-act=branch][data-id="9"]').click();
  await expect.poll(async () => (await state(page)).players[0].pos).toBe(10);
  await page.locator('[data-act=buy]').click();
  if (await page.locator('#sheet').isVisible()) await page.locator('#closeSheet').click();
  if ((await page.locator('.mini-toggle').getAttribute('aria-expanded')) === 'false')
    await page.locator('.mini-toggle').click();
  await expect(page.locator('#miniMap [data-closed-road]')).toHaveCount(2);
  await expect(page.locator('#miniMap [data-closed-road]').first()).toBeVisible();
  await page.locator('.mini-enlarge').click();
  await expect(page.locator('#sheetBody [data-closed-road]')).toHaveCount(2);
  await expect(page.locator('#sheetBody [data-closed-road]').first()).toBeVisible();
});
test('hotseat end changes weather before handoff and themed event restores and acknowledges', async ({
  page,
}) => {
  const g = Game.create({
    mapVersion: 4,
    seed: 13,
    playerCount: 2,
    seatTypes: ['human', 'human'],
    talents: false,
  });
  g.s.round = 3;
  g.s.current = 1;
  g.s.phase = 'end';
  g.s.handoff = null;
  g.s.weather = { kind: 'rain', startedRound: 1, untilRound: 2, nextRound: 4 };
  await boot(page, g.s);
  await page.locator('#continueBtn').click();
  await page.locator('[data-act=acceptTurn]').click();
  await page.locator('#actionBtn').click();
  await expect.poll(async () => (await state(page)).round).toBe(4);
  await expect(page.locator('#sheet')).toHaveAttribute('data-panel', 'handoff');
  expect((await state(page)).weather.startedRound).toBe(4);
});
test('forest actual WebGL buy-build flow and remaining actions survive motion and quality changes', async ({
  page,
}) => {
  test.skip(process.env.NAIWA_FOREST_WEBGL !== '1', 'Optional actual WebGL check');
  await boot(page, null, true);
  await chooseForest(page);
  await expect(page.locator('#scene > canvas')).toHaveCount(1);
  await expect(page.locator('#fallback')).toBeHidden();
  await buyBuild(page);
  await page.locator('#qualityBtn').click();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('#actionBtn')).toBeEnabled();
  await page.locator('#actionBtn').click();
  await expect.poll(async () => (await state(page)).current).not.toBe(0);
});
test('forest event cap is shown as actual coupons and remains pending through reload', async ({
  page,
}) => {
  const g = Game.create({ mapVersion: 4, seed: 17, talents: false });
  g.player.tickets = 145;
  g.int = () => 13;
  g.event();
  await boot(page, g.s);
  await page.locator('#continueBtn').click();
  await expect(page.locator('#sheetTitle')).toContainText('温泉补给');
  await expect(page.locator('#sheetBody')).toContainText('点券 +5');
  await page.reload();
  await expect(page.locator('#loadingScreen')).toBeHidden();
  await page.locator('#continueBtn').click();
  expect((await state(page)).players[0].tickets).toBe(150);
  await page.locator('[data-act=ack]').click();
  await expect.poll(async () => (await state(page)).phase).toBe('end');
});
test('desktop forest controls stay reachable with keyboard and weather overlay', async ({
  browser,
}) => {
  const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      serviceWorkers: 'block',
    }),
    page = await context.newPage();
  try {
    await boot(page);
    await chooseForest(page);
    for (const selector of ['#actionBtn', '.dock-tabs [data-panel=cards]', '#homeBtn']) {
      const el = page.locator(selector);
      await el.scrollIntoViewIfNeeded();
      expect(
        await el.evaluate((n) => {
          const r = n.getBoundingClientRect();
          return n.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2));
        }),
      ).toBe(true);
    }
    await page.locator('#helpBtn').click();
    await page.locator('[data-rule-search]').fill('森林天气');
    await expect(page.locator('[data-rule-results]')).toContainText('主环始终开放');
    await page.keyboard.press('Escape');
    await expect(page.locator('#helpBtn')).toBeFocused();
  } finally {
    await context.close();
  }
});

test('forest WebGL native touch, manual rotation and modal scroll preserve rule state', async ({
  page,
}) => {
  test.skip(process.env.NAIWA_FOREST_WEBGL !== '1', 'Optional actual WebGL check');
  await boot(page, null, true);
  await chooseForest(page);
  const overlapping = await page.locator('#forestWeather').evaluate((el) => {
    const a = el.getBoundingClientRect();
    return ['.map-tools', '.control-dock', '.players-toggle'].filter((selector) => {
      const other = document.querySelector(selector);
      if (!other || !other.getClientRects().length) return false;
      const b = other.getBoundingClientRect();
      return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    });
  });
  expect(overlapping).toEqual([]);
  const before = await state(page),
    cdp = await page.context().newCDPSession(page);
  await page.evaluate(() => {
    window.forestCameraEvents = 0;
    document
      .querySelector('#scene')
      .addEventListener('camerachange', () => window.forestCameraEvents++);
    Object.defineProperty(Element.prototype, 'requestFullscreen', {
      configurable: true,
      value: async () => {
        throw Error('layout fallback');
      },
    });
  });
  for (let rotation = 0; rotation < 2; rotation++) {
    const p = await page.locator('#scene canvas').evaluate((canvas) => {
      for (let y = 140; y < innerHeight - 150; y += 20)
        for (let x = 30; x < innerWidth - 110; x += 20)
          if ([0, 40, 80].every((dx) => document.elementFromPoint(x + dx, y) === canvas))
            return { x, y };
      throw Error('No free map target');
    });
    const touch = (type, points) =>
      cdp.send('Input.dispatchTouchEvent', {
        type,
        touchPoints: points.map((p, id) => ({ id, ...p, radiusX: 3, radiusY: 3, force: 1 })),
      });
    const count = await page.evaluate(() => window.forestCameraEvents);
    await touch('touchStart', [p]);
    await touch('touchMove', [{ x: p.x + 40, y: p.y + 10 }]);
    await touch('touchEnd', []);
    await touch('touchStart', [p, { x: p.x + 30, y: p.y }]);
    await touch('touchMove', [p, { x: p.x + 80, y: p.y }]);
    await touch('touchEnd', []);
    await expect.poll(() => page.evaluate(() => window.forestCameraEvents)).toBeGreaterThan(count);
    await page.locator('#helpBtn').click();
    const events = await page.evaluate(() => window.forestCameraEvents);
    await page.locator('#sheetBody').evaluate((el) => (el.scrollTop = el.scrollHeight));
    const r = await page.locator('#sheetBody').boundingBox();
    await page.mouse.move(r.x + r.width / 2, r.y + r.height - 12);
    await page.mouse.wheel(0, 800);
    expect(
      await page.evaluate(() => ({ scroll: scrollY, camera: window.forestCameraEvents })),
    ).toEqual({ scroll: 0, camera: events });
    await page.keyboard.press('Escape');
    await page.locator('#orientationBtn').click();
    await expect(page.locator('#app')).toHaveAttribute(
      'data-rotated',
      rotation === 0 ? 'true' : 'false',
    );
    await page.evaluate(
      () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))),
    );
  }
  expect(await state(page)).toEqual(before);
  await page.screenshot({ path: 'artifacts/forest-ui-' + page.viewportSize().width + '.png' });
});
