import { test, expect } from '@playwright/test';
import { Game, SAVE_KEY } from '../dist/engine.js';
import { boot } from '../e2e/helpers.mjs';
import { openMapTools } from '../e2e/ui-controls.mjs';

async function checkPhone(page) {
  const g = Game.create({ mapVersion: 4, seed: 17, playerCount: 6, talents: false });
  g.s.weather = { kind: 'rain', startedRound: 1, untilRound: 2, nextRound: 4 };
  await page.addInitScript(
    ({ s, key }) => {
      localStorage.setItem(key, JSON.stringify(s));
      localStorage.setItem(
        'naiwa-tutorial-v1',
        JSON.stringify({ version: 1, disabled: true, seen: [] }),
      );
    },
    {
      s: g.s,
      key: SAVE_KEY,
    },
  );
  await boot(page);
  await page.locator('#continueBtn').click();
  await expect(page.locator('#actionBtn')).toBeEnabled();
  await expect(page.locator('#mapToolsToggle')).toBeVisible();
  await expect(page.locator('#mapTools')).toBeHidden();
  await expect(page.locator('#newsFlash')).toBeHidden();
  await page.screenshot({ path: `artifacts/mobile-compact-${test.info().project.name}.png` });
  const sizes = await page.evaluate(() => {
    const box = (s) => {
      const e = document.querySelector(s);
      return { width: e.offsetWidth, height: e.offsetHeight };
    };
    return {
      app: box('#app'),
      sidebar: box('.sidebar'),
      weather: box('#forestWeather'),
      action: box('#actionBtn'),
    };
  });
  if (sizes.app.width > sizes.app.height) {
    expect(
      sizes.sidebar.width,
      'phone sidebar should not consume a quarter of the board',
    ).toBeLessThanOrEqual(144);
    expect(sizes.weather.height, 'weather should be a compact status line').toBeLessThanOrEqual(52);
  }
  expect(
    sizes.action.height,
    'roll should stay touchable without becoming a giant tile',
  ).toBeLessThanOrEqual(64);
  expect(sizes.action.height).toBeGreaterThanOrEqual(44);
  for (const selector of ['#actionBtn', '#mapToolsToggle', '.dock-tabs [data-panel=cards]']) {
    const r = await page.locator(selector).evaluate((e) => {
      const r = e.getBoundingClientRect(),
        hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return {
        width: e.offsetWidth,
        height: e.offsetHeight,
        hit: e === hit || e.contains(hit),
        textFits: [...e.childNodes]
          .filter((n) => n.nodeType === 3 && n.textContent.trim())
          .every((n) => {
            const range = document.createRange();
            range.selectNode(n);
            return [...range.getClientRects()].every(
              (t) =>
                t.left >= r.left && t.right <= r.right && t.top >= r.top && t.bottom <= r.bottom,
            );
          }),
      };
    });
    expect(r.width).toBeGreaterThanOrEqual(44);
    expect(r.height).toBeGreaterThanOrEqual(44);
    expect(r.hit, selector).toBe(true);
    expect(r.textFits, selector).toBe(true);
  }
  await openMapTools(page);
  await page.locator('#homeBtn').click();
  await expect(page.locator('#mapTools')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#mapTools')).toBeHidden();
  await expect(page.locator('#mapToolsToggle')).toBeFocused();
  await page.locator('.dock-tabs [data-panel=cards]').click();
  await expect(page.locator('#sheet')).toBeVisible();
  await page.locator('#closeSheet').click();
  await openMapTools(page);
  await page.locator('#orientationBtn').click();
  await expect(page.locator('#mapTools')).toBeHidden();
  await expect(page.locator('#actionBtn')).toBeEnabled();
  await page.locator('.dock-tabs [data-panel=cards]').click();
  await expect(page.locator('#sheet')).toBeVisible();
  await page.locator('#closeSheet').click();
}

test('phone HUD leaves the forest visible and keeps primary actions reachable', async ({
  page,
}) => {
  await checkPhone(page);
});

test('short embedded browser viewport keeps compact controls after rotation', async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 360, height: 640 },
    isMobile: true,
    hasTouch: true,
    reducedMotion: 'reduce',
    serviceWorkers: 'block',
  });
  try {
    await checkPhone(await context.newPage());
  } finally {
    await context.close();
  }
});
