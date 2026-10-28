import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Game} from '../dist/engine.js';
import {RULES} from '../dist/rules-config.js';
import {CARDS} from '../dist/content.js';
import {BUSINESSES} from '../dist/businesses.js';
import {GUIDE_COPY,ruleEntries,searchRules} from '../dist/rule-help.js';
import {tutorialCandidate,tutorialPreferences,readTutorial,GUIDE_IDS} from '../dist/tutorial.js';
const make=()=>Game.create({seed:17,mapVersion:1,talents:false});
test('tutorial preferences ignore malformed versions, unknown tips and storage errors',()=>{
 assert.deepEqual(tutorialPreferences(null),{version:1,disabled:false,seen:[]});assert.deepEqual(tutorialPreferences({version:8,disabled:true,seen:['cash']}),{version:1,disabled:false,seen:[]});assert.deepEqual(tutorialPreferences({version:1,seen:['cash','evil','cash']}),{version:1,disabled:false,seen:['cash']});for(const raw of ['bad','null','[]'])assert.deepEqual(readTutorial({getItem:()=>raw}),{version:1,disabled:false,seen:[]});assert.equal(readTutorial({getItem(){throw Error('blocked');}}).disabled,false);
});
test('tutorial selection is pure, short and never offers a hint on AI, finished or handoff turns',()=>{
 const g=make(),before=g.stateHash();assert.equal(tutorialCandidate(g).id,'intro');assert.equal(tutorialCandidate(g,{started:true}).id,'intro');assert.equal(g.stateHash(),before);for(const lines of Object.values(GUIDE_COPY)){assert.equal(lines.length,2);assert.ok(lines.every(s=>s.length<=25));}
 g.player.human=false;assert.equal(tutorialCandidate(g,{started:true,cards:true,rent:true}),null);g.player.human=true;g.s.handoff={playerId:0};assert.equal(tutorialCandidate(g,{started:true}),null);g.s.handoff=null;g.finish();assert.equal(tutorialCandidate(g,{started:true}),null);
});
test('buy, rent, building, card reward and insufficient cash pick actual controls without modifying rules',()=>{
 const g=make();g.player.pos=1;g.s.phase='buy';assert.equal(tutorialCandidate(g,{started:true,panel:'buy'}).id,'buy');g.player.money=0;assert.equal(tutorialCandidate(g,{started:true,panel:'buy'}).target,'[data-act=pass]');g.player.money=3200;g.s.phase='estate';assert.equal(tutorialCandidate(g,{started:true,panel:'estate'}).id,'rent');
 g.s.phase='end';g.s.ownership[1]={player:0,level:0};g.player.buildSite=1;assert.equal(tutorialCandidate(g,{started:true,panel:'buildHere'}).id,'build');assert.equal(tutorialCandidate(g,{started:true,cards:true}).id,'cards');assert.equal(tutorialCandidate(g,{started:true,rent:true}).id,'rent');
 g.s.phase='debt';g.s.debt={amount:4000,to:1,label:'租金'};assert.equal(tutorialCandidate(g,{started:true,panel:'debt'}).id,'cash');assert.equal(tutorialCandidate(g,{started:true,panel:'debt',seen:GUIDE_IDS}),null);
});
test('search uses canonical card descriptions, business caps, current bank values and AND terms',()=>{
 const rows=ruleEntries();for(const [key,c] of Object.entries(CARDS))assert.ok(rows.find(r=>r.id==='card-'+key).text.includes(c.description));for(const [key,b] of Object.entries(BUSINESSES))assert.ok(rows.find(r=>r.id==='building-'+key).text.includes(String(b.max)));
 assert.ok(searchRules('贷款 '+RULES.loanLimit).some(r=>r.id==='bank'));assert.ok(searchRules('起点 '+RULES.startIncome).some(r=>r.id==='turn'));assert.ok(searchRules('免租').some(r=>r.title===CARDS.shield.name));assert.deepEqual(searchRules('<img onerror=evil>'),[]);assert.equal(searchRules('   ').length,rows.length);const g=make();g.s.mode.goal={type:'netWorth',target:12345};assert.match(ruleEntries(g.s.mode).find(r=>r.id==='current-mode').text,/12,345/);
});
