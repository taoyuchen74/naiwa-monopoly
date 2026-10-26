import { test, expect } from '@playwright/test';
import { PNG } from './png.mjs';
import { boot, start, state } from './helpers.mjs';

test('portrait ↔ landscape keeps rendered map and dialogs aligned', async ({ page }) => {
  await boot(page);
  await start(page);
  const before = await state(page);
  for (let i = 0; i < 2; i++) {
    await page.locator('#orientationBtn').click();
    await page.waitForFunction(() => {
      const canvas = document.querySelector('#scene canvas');
      const scene = document.querySelector('#scene');
      return canvas && canvas.width === scene.clientWidth && canvas.height === scene.clientHeight;
    });
    const logical = await page.locator('#app').evaluate((el) => [el.clientWidth, el.clientHeight]);
    expect(logical[0] >= logical[1]).toBe(
      i === 0
        ? test.info().project.name.includes('portrait')
        : test.info().project.name.includes('landscape'),
    );
    await expect(page.locator('#scene canvas')).toBeVisible();
    await expect(page.locator('#fallback')).toBeHidden();
    // Pixel variety in the map's central crop catches a blank WebGL framebuffer.
    const shot = await page.screenshot();
    expect(PNG.uniqueCentralColors(shot)).toBeGreaterThan(40);
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
});
