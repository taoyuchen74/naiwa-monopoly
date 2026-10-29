import {BUILTIN_MAP_DATA} from './builtin-maps.js';
import {compileMap} from './map-schema.js';
import {FOREST_MAP} from './forest-map.js';
export const MAP_DATA={...BUILTIN_MAP_DATA,4:FOREST_MAP},CITY_TILES=MAP_DATA[2].tiles;
export const MAPS={1:MAP_DATA[1],2:MAP_DATA[2],4:MAP_DATA[4]};
/** @type {Readonly<Record<number, import('./domain.js').MapTheme>>} */
export const MAP_THEMES=Object.freeze({1:'island',2:'riverside',3:'custom',4:'forest'});
export const mapTiles=(version,custom)=>version===3&&custom?compileMap(custom):(MAP_DATA[version]||MAP_DATA[1]).tiles;
export const mapInfo=state=>state.mapVersion===3?state.customMap:MAPS[state.mapVersion];
export const mapPoints=state=>mapInfo(state).pointStops;
