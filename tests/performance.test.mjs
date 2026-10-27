import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {Game} from '../dist/engine.js';
import {chooseMove} from '../dist/strategy.js';
import {renderProfile} from '../dist/render-profile.js';
import {aiFixtures} from '../tools/perf-fixture.mjs';
import {HighQuality} from '../dist/high-quality.js';

test('automatic mobile quality caps screen-space cost without altering scene geometry',()=>{
 assert.deepEqual(renderProfile('auto',{dpr:3,mobile:true}),{name:'mobile',ratio:1.25,shadow:1024,aoSamples:8,aoScale:.5});
 assert.deepEqual(renderProfile('auto',{dpr:1,mobile:false}),{name:'desktop',ratio:1,shadow:2048,aoSamples:16,aoScale:1});
 assert.equal(renderProfile('auto',{dpr:3,mobile:false}).ratio,2);
 assert.deepEqual(renderProfile('low',{dpr:3,mobile:true}),{name:'low',ratio:1,shadow:0,aoSamples:0,aoScale:0});
});
test('six difficult AI decisions match exact pre-optimization states, including RNG and logs',()=>{
 const expected=['304b1f50fe7f90328ba5dee7c71035c6699da5361aa9ffdc89f2438c42a9cce7','920c1a345d09db1207ea4a9b12a796f1d1c0d6998723d79ee4298d324e4faefd','18c924d4dd73397bbf1f04e8ca5cf64dc77512a55e1d43e705b2746724bc0ae2','eb07f1d951a41172ec7751d817d24802b51e5f65b349bfa0cceef32efd8e7184','f3d9b225cdfc3ec9a4add533806d042863c5475249c928aafccc7344d5767bc0','38250fc9e2553d0ad018fd2231797eed421854ed1ddc720cec36f7895c8bc1ea'];
 for(const [i,s]of aiFixtures().entries()){const g=Game.restore(s);g.ai();const {revision,commandSequences,...legacyRules}=structuredClone(g.s);legacyRules.rules=7;for(const p of legacyRules.players){delete p.eventWard;delete p.insuranceTurns;delete p.operatingUntilRound;}assert.equal(createHash('sha256').update(JSON.stringify(legacyRules)).digest('hex'),expected[i]);}
});
test('duplicate block cards share evaluation, and subsequent decisions cannot reuse stale previews',()=>{
 const count=g=>{let calls=0;const original=g.preview;g.preview=function(...args){calls++;return original.apply(this,args);};g.ai();return calls;};
 const s=aiFixtures()[0],one=Game.restore(s),many=Game.restore(s);many.player.cards.splice(1,0,'block','block');
 assert.equal(count(many),count(one));
 const g=Game.restore(s),before=JSON.stringify(g.s);chooseMove(g);assert.equal(JSON.stringify(g.s),before);
 for(const mutate of [()=>g.player.pos=35,()=>g.player.money=0,()=>g.s.blocks[36]=2,()=>g.s.pickups[38]=0,()=>g.player.reverse=true,()=>g.player.shield=true]){
  mutate();assert.deepEqual(chooseMove(g),chooseMove(Game.restore(g.s)));
 }
});
test('GTAO materials omitted by the bundled pass are released exactly once by the owner',()=>{
 let count=0;const pipeline={composer:{passes:[],dispose(){}},environment:{dispose(){}},ao:{gtaoMaterial:{dispose(){count++;}},blendMaterial:{dispose(){count++;}}}};
 HighQuality.prototype.dispose.call(pipeline);HighQuality.prototype.dispose.call(pipeline);assert.equal(count,2);
});
