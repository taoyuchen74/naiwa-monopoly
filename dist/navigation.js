import {TILES} from './content.js';
export const MAP_SIZE={width:360,height:250};
const cached=new WeakMap();
export function mapPoint(tile,tiles=TILES){if(!Array.isArray(tiles))tiles=TILES;let b=cached.get(tiles);if(!b){b={minX:Math.min(...tiles.map(t=>t.x))-1,maxX:Math.max(...tiles.map(t=>t.x))+1,minZ:Math.min(...tiles.map(t=>t.z))-1,maxZ:Math.max(...tiles.map(t=>t.z))+1};cached.set(tiles,b);}return{x:12+(tile.x-b.minX)*336/(b.maxX-b.minX),y:12+(tile.z-b.minZ)*226/(b.maxZ-b.minZ)};}
export function mapEdges(tiles=TILES){return tiles.flatMap(t=>t.next.map(id=>({from:t.id,to:id,a:mapPoint(t,tiles),b:mapPoint(tiles[id],tiles)})));}
export function nextMapFocus(id,key,tiles=TILES){if(key==='Home')return 0;if(key==='End')return tiles.length-1;if(['ArrowRight','ArrowDown'].includes(key))return(id+1)%tiles.length;if(['ArrowLeft','ArrowUp'].includes(key))return(id+tiles.length-1)%tiles.length;return id;}
export function nearestMapTile(x,y,tiles=TILES,radius=18){let selected=null,distance=radius;for(const t of tiles){const p=mapPoint(t,tiles),d=Math.hypot(x-p.x,y-p.y);if(d<distance){selected=t.id;distance=d;}}return selected;}
