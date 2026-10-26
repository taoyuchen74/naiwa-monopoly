import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 90000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:4173',
    actionTimeout: 15000,
    browserName: 'chromium',
    channel: 'chromium',
    hasTouch: true,
    isMobile: true,
    deviceScaleFactor: 1,
    serviceWorkers: 'block',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH,
      args: ['--enable-unsafe-swiftshader'],
    },
  },
  projects: [
    { name: 'phone-portrait', use: { viewport: { width: 390, height: 844 } } },
    { name: 'phone-landscape', use: { viewport: { width: 844, height: 390 } } },
  ],
  webServer: {
    command: 'npm run serve:ci',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 10000,
  },
});
