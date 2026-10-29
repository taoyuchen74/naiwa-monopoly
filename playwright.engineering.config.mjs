import { defineConfig } from '@playwright/test';
import browser from './playwright.config.mjs';

export default defineConfig({
  ...browser,
  testDir: './e2e',
  testMatch: ['gameplay.spec.mjs', 'orientation.spec.mjs', 'save-roundtrip.spec.mjs'],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report/engineering', open: 'never' }]],
  outputDir: 'test-results/engineering',
});
