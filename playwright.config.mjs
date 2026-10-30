import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e-ci',
  timeout: process.env.NAIWA_FOREST_WEBGL === '1' ? 240000 : 120000,
  expect: { timeout: 20000 },
  workers: 1,
  retries: 0,
  forbidOnly: !!process.env.CI,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report/browser', open: 'never' }]],
  outputDir: 'test-results/browser',
  use: {
    baseURL: 'http://127.0.0.1:4181',
    locale: 'zh-CN',
    timezoneId: 'UTC',
    browserName: 'chromium',
    channel: process.env.NAIWA_FOREST_WEBGL === '1' ? 'chromium' : undefined,
    hasTouch: true,
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
    serviceWorkers: 'block',
    actionTimeout: process.env.NAIWA_FOREST_WEBGL === '1' ? 60000 : 20000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      args: [
        '--enable-gpu',
        '--enable-unsafe-swiftshader',
        ...(process.env.NAIWA_SOFTWARE_WEBGL === '1' ? ['--use-angle=swiftshader'] : []),
      ],
    },
  },
  projects: [
    { name: '390x844', use: { viewport: { width: 390, height: 844 }, isMobile: true } },
    { name: '844x390', use: { viewport: { width: 844, height: 390 }, isMobile: true } },
  ],
  webServer: {
    command: 'npm run build:site && node tools/serve-mobile.mjs',
    url: 'http://127.0.0.1:4181',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
