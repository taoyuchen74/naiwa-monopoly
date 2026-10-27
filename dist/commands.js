import {CARDS} from './content.js';
const integer=Number.isSafeInteger,none=()=>true;
const definitions={
 roll:{phases:['roll','departure'],fields:[],valid:none,run:g=>g.roll()},
 step:{phases:['moving','branch'],fields:['choice'],valid:(p,g)=>{
  if(p.choice===undefined)return g.s.phase!=='branch';
  return integer(p.choice)&&g.s.remaining>0&&!g.player.reverse&&g.tiles[g.player.pos].next.includes(p.choice);
 },run:(g,p)=>{const phase=g.s.phase,ok=g.step(p.choice);return ok||phase==='moving'&&g.s.phase==='branch';}},
 setDiceCount:{phases:['roll'],fields:['count'],valid:p=>integer(p.count),run:(g,p)=>g.setDiceCount(p.count)},
 buy:{phases:['buy'],fields:['yes'],valid:p=>typeof p.yes==='boolean',run:(g,p)=>g.buy(p.yes)},
 resolveEstate:{phases:['estate'],fields:['buy'],valid:p=>typeof p.buy==='boolean',run:(g,p)=>g.resolveEstate(p.buy)},
 acknowledge:{phases:['event'],fields:[],valid:none,run:g=>g.acknowledge()},
 end:{phases:['end'],fields:[],valid:none,run:g=>g.end()},
 construct:{phases:['end'],fields:['id','buildingType'],valid:p=>integer(p.id)&&typeof p.buildingType==='string',run:(g,p)=>g.construct(p.id,p.buildingType)},
 setResearch:{phases:['end'],fields:['id','key'],valid:p=>integer(p.id)&&typeof p.key==='string',run:(g,p)=>g.setResearch(p.id,p.key)},
 upgrade:{phases:['end'],fields:['id'],valid:p=>integer(p.id),run:(g,p)=>g.upgrade(p.id)},
 demolish:{phases:['end'],fields:['id'],valid:p=>integer(p.id),run:(g,p)=>g.demolish(p.id)},
 sell:{phases:['roll','end','debt'],fields:['id'],valid:p=>integer(p.id),run:(g,p)=>g.sell(p.id)},
 bank:{phases:['roll','end','debt'],fields:['kind','amount'],valid:p=>['deposit','withdraw','borrow','repay'].includes(p.kind)&&integer(p.amount)&&p.amount>0,run:(g,p)=>g.bank(p.kind,p.amount)},
 trade:{phases:['roll','end','debt'],fields:['stock','qty'],valid:p=>integer(p.stock)&&integer(p.qty),run:(g,p)=>g.trade(p.stock,p.qty)},
 shop:{phases:['roll','end'],fields:['key'],valid:p=>typeof p.key==='string'&&Object.hasOwn(CARDS,p.key),run:(g,p)=>g.shop(p.key)},
 vehicle:{phases:['roll','end'],fields:['id'],valid:p=>integer(p.id),run:(g,p)=>g.vehicle(p.id)},
 card:{phases:['roll','end','estate'],fields:['index','target'],valid:p=>integer(p.index)&&(p.target===undefined||integer(p.target)),run:(g,p)=>g.card(p.index,p.target)},
 settle:{phases:['debt'],fields:[],valid:none,run:g=>g.settle()},
 bankrupt:{phases:['debt'],fields:[],valid:none,run:g=>g.bankrupt()},
 aiTurn:{phases:['roll','departure','moving','branch','buy','estate','event','end','debt'],fields:[],valid:(_p,g)=>!g.player.human,run:g=>g.takeAiAction()}
};
const plain=x=>x!==null&&typeof x==='object'&&!Array.isArray(x)&&(Object.getPrototypeOf(x)===null||Object.getPrototypeOf(Object.getPrototypeOf(x))===null);
// Local callers generate the next sequence; external/replay callers use dispatch.
export function nextCommand(game,type,payload={},playerId=game.s.current){return {type,payload,playerId,sequence:game.s.commandSequences[playerId]+1,revision:game.s.revision};}
export function dispatch(game,command){
 const s=game.s,reply=(ok,code)=>({ok,code,revision:s.revision,sequence:s.commandSequences[command?.playerId]??null});
 if(!plain(command)||typeof command.type!=='string'||!Object.hasOwn(definitions,command.type)||!plain(command.payload))return reply(false,'INVALID_COMMAND');
 const {playerId,sequence,revision,payload}=command,def=definitions[command.type];
 if(!integer(playerId)||playerId<0||playerId>=s.players.length)return reply(false,'INVALID_PLAYER');
 if(!integer(sequence)||sequence<=0)return reply(false,'INVALID_SEQUENCE');
 if(sequence<=s.commandSequences[playerId])return reply(false,'DUPLICATE');
 if(sequence!==s.commandSequences[playerId]+1)return reply(false,'OUT_OF_ORDER');
 if(revision!==undefined&&(!integer(revision)||revision!==s.revision))return reply(false,'STALE_REVISION');
 if(playerId!==s.current)return reply(false,'NOT_CURRENT_PLAYER');
 if(!def.phases.includes(s.phase))return reply(false,'INVALID_PHASE');
 if(!game.player.alive&&!(s.phase==='end'&&['end','aiTurn'].includes(command.type)))return reply(false,'INACTIVE_PLAYER');
 if(Object.keys(payload).some(key=>!def.fields.includes(key))||!def.valid(payload,game))return reply(false,'INVALID_PAYLOAD');
 if(s.revision===Number.MAX_SAFE_INTEGER||sequence===Number.MAX_SAFE_INTEGER)return reply(false,'COUNTER_EXHAUSTED');
 const before=JSON.stringify(s),receipts={sequence:game.transfers.sequence,items:[...game.transfers.items]};
 let ok=false,code='RULE_REJECTED';try{ok=def.run(game,payload)===true;}catch{code='EXECUTION_FAILED';}
 if(!ok){if(JSON.stringify(s)!==before){const restored=JSON.parse(before);for(const key of Object.keys(s))delete s[key];Object.assign(s,restored);}Object.assign(game.transfers,receipts);return reply(false,code);}
 s.revision++;s.commandSequences[playerId]=sequence;return reply(true,'OK');
}
