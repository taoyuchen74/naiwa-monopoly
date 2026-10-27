export const nextPaint=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
export async function waitForStyles(doc=document){
 await Promise.all([...doc.querySelectorAll('link[rel="stylesheet"]')].map(link=>new Promise((resolve,reject)=>{const ready=()=>{link.media='all';resolve();};if(link.sheet){ready();return;}link.addEventListener('load',ready,{once:true});link.addEventListener('error',reject,{once:true});})));
}
export async function prepareStartupAssets(doc=document,fetchAsset=fetch){
 const fonts=doc.fonts?doc.fonts.load('16px KuaiLe','奶蛙大富翁').then(()=>doc.fonts.ready):Promise.resolve();
 const images=Promise.all([...doc.images].map(img=>img.decode?img.decode():new Promise((resolve,reject)=>{if(img.complete){img.naturalWidth?resolve():reject(Error('Image unavailable'));return;}img.addEventListener('load',resolve,{once:true});img.addEventListener('error',reject,{once:true});})));
 // Audio is optional. Fonts and images still gate a complete, usable home.
 const audio=Promise.resolve().then(()=>fetchAsset(globalThis.__NAIWA_LAUGH_DATA__||'./audio/naiwa-laugh-excerpt.mp3',{cache:'force-cache'})).then(async response=>{if(!response.ok)throw Error('Audio unavailable');globalThis.__NAIWA_LAUGH_BYTES__=await response.arrayBuffer();}).catch(()=>{globalThis.__NAIWA_LAUGH_BYTES__=null;});
 await Promise.all([fonts,images,audio]);
}
