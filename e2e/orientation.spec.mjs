import { test, expect } from '@playwright/test';
import { boot, start, state } from './helpers.mjs';

test('portrait ↔ landscape keeps rendered map and dialogs aligned', async ({ page }) => {
  const errors = await boot(page);
  await start(page);
  const before = await state(page);
  for (let i = 0; i < 2; i++) {
    await page.locator('#orientationBtn').click();
    const logical = await page.locator('#app').evaluate((el) => [el.clientWidth, el.clientHeight]);
    expect(logical[0] >= logical[1]).toBe(
      i === 0 ? test.info().project.name === '390x844' : test.info().project.name === '844x390',
    );
    await expect(page.locator('#fallback')).toBeVisible();
    await expect(page.locator('#fallback button').first()).toBeVisible();
    await page.locator('#settingsBtn').click();
    const aligned = await page.locator('#sheet').evaluate((el) => {
      const axes = (node) => {
        let m = new DOMMatrix();
        for (; node; node = node.parentElement)
          m = new DOMMatrix(getComputedStyle(node).transform).multiply(m);
        return [m.a, m.b, m.c, m.d];
      };
      const app = document.querySelector('#app');
      const a = axes(app),
        b = axes(el),
        r = el.getBoundingClientRect();
      return (
        b.every((n, k) => Math.abs(n - a[k]) < 1e-5) &&
        r.left >= -1 &&
        r.top >= -1 &&
        r.right <= innerWidth + 1 &&
        r.bottom <= innerHeight + 1
      );
    });
    expect(aligned).toBe(true);
    await page.locator('#closeSheet').click();
  }
  expect(await state(page)).toEqual(before);
  expect(errors).toEqual([]);
});
