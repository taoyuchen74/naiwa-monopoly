import {BUILTIN_MAP_DATA} from './builtin-maps.js';
import {compileMap} from './map-schema.js';
export const MAP_DATA=BUILTIN_MAP_DATA,CITY_TILES=MAP_DATA[2].tiles;
export const MAPS={1:MAP_DATA[1],2:MAP_DATA[2]};
export const mapTiles=(version,custom)=>version===3&&custom?compileMap(custom):(MAP_DATA[version]||MAP_DATA[1]).tiles;
export const mapInfo=state=>state.mapVersion===3?state.customMap:MAPS[state.mapVersion];
export const mapPoints=state=>mapInfo(state).pointStops;
