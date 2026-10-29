import {defineConfig} from '@playwright/test';
export default defineConfig({
 testDir:'./e2e-cloud',timeout:90000,expect:{timeout:15000},workers:1,retries:0,forbidOnly:!!process.env.CI,
 reporter:[['list'],['html',{outputFolder:'playwright-report/cloud',open:'never'}]],outputDir:'test-results/cloud',
 use:{baseURL:'http://127.0.0.1:4183',browserName:'chromium',locale:'zh-CN',reducedMotion:'reduce',serviceWorkers:'block',screenshot:'only-on-failure',trace:'retain-on-failure'},
 projects:[{name:'390x844',use:{viewport:{width:390,height:844},isMobile:true,hasTouch:true}},{name:'844x390',use:{viewport:{width:844,height:390},isMobile:true,hasTouch:true}}],
 webServer:{command:'npm run build:site && node tools/serve-cloud-test.mjs',url:'http://127.0.0.1:4183/cloud.html',reuseExistingServer:false,timeout:60000}
});
