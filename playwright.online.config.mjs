import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e-online',
  timeout: 90000,
  expect: { timeout: 15000 },
  workers: 1,
  retries: 0,
  forbidOnly: !!process.env.CI,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report/online', open: 'never' }]],
  outputDir: 'test-results/online',
  use: {
    baseURL: 'http://127.0.0.1:4182',
    browserName: 'chromium',
    channel: process.env.NAIWA_ONLINE_WEBGL === '1' ? 'chromium' : undefined,
    launchOptions: { args: ['--enable-gpu', '--enable-unsafe-swiftshader'] },
    locale: 'zh-CN',
    reducedMotion: 'reduce',
    serviceWorkers: 'block',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: '390x844',
      use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
    },
    {
      name: '844x390',
      use: { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true },
    },
  ],
  webServer: {
    command: 'npm run build:site && node tools/serve-online-test.mjs',
    url: 'http://127.0.0.1:4182/online.html',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
