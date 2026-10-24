import {test} from 'node:test';
import assert from 'node:assert/strict';
import {TILES} from '../dist/content.js';
import {mapPoint,mapEdges,nextMapFocus,MAP_SIZE} from '../dist/navigation.js';
test('minimap preserves all 48 unique tile positions within its viewBox',()=>{const points=TILES.map(mapPoint);for(const p of points){assert.ok(p.x>0&&p.x<MAP_SIZE.width);assert.ok(p.y>0&&p.y<MAP_SIZE.height);}assert.equal(new Set(points.map(p=>p.x+':'+p.y)).size,48);});
test('minimap draws every route edge, both shortcut entrances and exits',()=>{const edges=mapEdges();assert.equal(edges.length,50);for(const [a,b]of [[35,40],[43,15],[15,44],[47,35],[39,0]])assert.ok(edges.some(e=>e.from===a&&e.to===b));});
test('minimap keyboard focus wraps without losing the active tile',()=>{assert.equal(nextMapFocus(47,'ArrowRight'),0);assert.equal(nextMapFocus(0,'ArrowLeft'),47);assert.equal(nextMapFocus(15,'Home'),0);assert.equal(nextMapFocus(15,'End'),47);assert.equal(nextMapFocus(15,'Escape'),15);});

test('curved map preserves IDs and branches with individually oriented lots',()=>{assert.equal(TILES.length,48);assert.ok(new Set(TILES.slice(0,40).map(t=>t.z.toFixed(2))).size>30);assert.ok(TILES.every(t=>Number.isFinite(t.lotX)&&Number.isFinite(t.lotZ)&&Number.isFinite(t.facing)));assert.ok(new Set(TILES.map(t=>t.facing.toFixed(2))).size>30);for(const t of TILES)assert.ok(Math.abs(Math.hypot(t.lotX-t.x,t.lotZ-t.z)-2.3)<1e-6);assert.deepEqual(TILES[35].next,[36,40]);assert.deepEqual(TILES[15].next,[16,44]);});
