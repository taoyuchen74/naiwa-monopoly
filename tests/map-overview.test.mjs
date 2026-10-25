import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {mapPoint,nearestMapTile} from '../dist/navigation.js';
import {mapTileInfo,mapPawnMarkers} from '../dist/minimap.js';
import {BUSINESSES} from '../dist/businesses.js';

test('map touch selection chooses the closest real tile on both maps and rejects empty terrain',()=>{
 for(const mapVersion of [1,2]){const g=Game.create({mapVersion,seed:48});for(const t of g.tiles){const p=mapPoint(t,g.tiles);assert.equal(nearestMapTile(p.x,p.y,g.tiles),t.id);assert.equal(nearestMapTile(p.x+.3,p.y+.3,g.tiles),t.id);}assert.equal(nearestMapTile(-100,-100,g.tiles),null);}
});

test('map labels distinguish vacant plots, owned land and every facility without changing the match',()=>{
 for(const mapVersion of [1,2]){
  const g=Game.create({mapVersion,playerCount:6,seed:48}),tile=g.tiles.find(t=>t.kind==='property');let d=mapTileInfo(g,tile.id);assert.equal(d.vacant,true);assert.match(d.description,new RegExp(String(tile.price)));assert.equal(d.glyph,'');
  for(const p of g.s.players)for(const [key,b]of Object.entries(BUSINESSES)){
   g.s.ownership[tile.id]={player:p.id,level:1,buildingType:key};const state=JSON.stringify(g.s);d=mapTileInfo(g,tile.id);assert.equal(d.color,g.char(p).estateColor);assert.equal(d.glyph,'1');assert.equal(d.vacant,false);assert.ok(d.description.includes(g.char(p).name));assert.ok(d.description.includes(b.name));assert.equal(JSON.stringify(g.s),state);
  }
  g.s.ownership[tile.id].level=0;assert.match(mapTileInfo(g,tile.id).description,/待建空地/);
  for(const t of g.tiles.filter(t=>t.kind!=='property')){d=mapTileInfo(g,t.id);assert.ok(d.glyph);assert.equal(d.vacant,false);assert.ok(!d.description.includes('空地'));}
 }
});

test('six players sharing any stop remain distinct and within the map while isolated players stay aligned',()=>{
 for(const mapVersion of [1,2]){const g=Game.create({mapVersion,playerCount:6,seed:48});for(const t of g.tiles){g.s.players.forEach(p=>p.pos=t.id);const markers=mapPawnMarkers(g);assert.equal(new Set(markers.map(p=>p.x+':'+p.y)).size,6);for(const p of markers){assert.ok(p.x>=8&&p.x<=352&&p.y>=8&&p.y<=242);assert.equal(p.tileX,mapPoint(t,g.tiles).x);}}
  g.s.players.forEach((p,i)=>p.pos=i*6);for(const m of mapPawnMarkers(g))assert.ok(Math.abs(m.x-m.tileX)<.001);g.s.players[1].alive=false;assert.equal(mapPawnMarkers(g).length,5);
 }
});
