import {defineConfig} from '@playwright/test';
export default defineConfig({
 testDir:'./e2e',timeout:90000,expect:{timeout:15000},workers:1,retries:0,
 reporter:[['list']],outputDir:'test-results/mobile',
 use:{baseURL:'http://127.0.0.1:4181',browserName:'chromium',hasTouch:true,deviceScaleFactor:1,serviceWorkers:'block',actionTimeout:15000,trace:'retain-on-failure',screenshot:'only-on-failure',launchOptions:{args:['--enable-gpu','--enable-unsafe-swiftshader']}},
 projects:[
  {name:'360x800',use:{viewport:{width:360,height:800},isMobile:true}},
  {name:'390x844',use:{viewport:{width:390,height:844},isMobile:true}},
  {name:'844x390',use:{viewport:{width:844,height:390},isMobile:true}},
  {name:'768x1024',use:{viewport:{width:768,height:1024},isMobile:true}},
  {name:'desktop',use:{viewport:{width:1440,height:900}}}
 ],
 webServer:{command:'npm run build:site && node tools/serve-mobile.mjs',url:'http://127.0.0.1:4181',reuseExistingServer:false,timeout:30000}
});
