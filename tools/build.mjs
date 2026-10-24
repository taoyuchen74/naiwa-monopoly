import {build} from 'esbuild';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {Script} from 'node:vm';
await mkdir('artifacts',{recursive:true});
const bundled=await build({entryPoints:['dist/app.js'],bundle:true,minify:true,format:'iife',write:false,target:['chrome100','safari15.4'],legalComments:'inline'});
let html=await readFile('dist/index.html','utf8');
const fontLicense=await readFile('dist/fonts/OFL.txt','utf8');html=html.replace('</head>',()=>`<!-- Bundled font license:\n${fontLicense.replaceAll('-->','-- >')}\n-->\n</head>`);
const font=await readFile('dist/fonts/ZCOOLKuaiLe-Regular.ttf'),laugh=await readFile('dist/audio/naiwa-laugh-excerpt.mp3');
const css=(await readFile('dist/style.css','utf8')).replace('./fonts/ZCOOLKuaiLe-Regular.ttf','data:font/ttf;base64,'+font.toString('base64')),svg=await readFile('dist/icon.svg');
html=html.replace('<link rel="stylesheet" href="./style.css">',()=>`<style>${css}</style>`).replaceAll('./icon.svg','data:image/svg+xml;base64,'+svg.toString('base64')).replace('href="./"','href=""');
// Use a callback: shader code contains literal dollar replacement patterns.
html=html.replace('<script type="module" src="./app.js"></script>',()=>`<script>window.__NAIWA_PORTABLE__=true;window.__NAIWA_LAUGH_DATA__='data:audio/mpeg;base64,${laugh.toString('base64')}';\n${bundled.outputFiles[0].text.replace(/<\/script/gi,'<\\/script')}</script>`);
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
if(scripts.length!==1)throw new Error('Portable page must contain exactly one complete script.');
new Script(scripts[0][1]);
await writeFile('artifacts/奶蛙大富翁.html',html);
console.log(`Portable HTML built: ${(Buffer.byteLength(html)/1024/1024).toFixed(2)} MB. No external requests required.`);
