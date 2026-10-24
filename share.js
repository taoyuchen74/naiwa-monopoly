export const PUBLIC_GAME_URL='https://taoyuchen74.github.io/naiwa-monopoly/';
export function gameShareUrl(page=globalThis.location){try{const url=new URL(page.href);if(!['http:','https:'].includes(url.protocol)||['localhost','127.0.0.1','[::1]'].includes(url.hostname))return PUBLIC_GAME_URL;url.username='';url.password='';return new URL('./',url).href;}catch{return PUBLIC_GAME_URL;}}
