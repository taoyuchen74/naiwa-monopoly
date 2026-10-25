import {TransferLog} from './transfers.js';
import {rosterFor} from './setup.js';
import {BUSINESSES,businessType,buildingLimit,businessDeparture,researchChoices,repairBuilding} from './businesses.js';
import {mapTiles} from './maps.js';
import {emptyBook,migratePortfolio,recordTrade,stockPosition,portfolio} from './portfolio.js';
import {hasTalent,departureTalent} from './talents.js?v=16';
import {takeAiTurn} from './strategy.js';
import {CHARACTERS,TILES,STOCKS,CARDS,EVENTS,SPIRITS,VEHICLES,POINT_STOPS} from './content.js';
export const MAX_BUILDING_LEVEL=5;
export const ROUND_OPTIONS=[20,30,50,80];
export const SAVE_KEY='naiwa-monopoly-v2';
const copy=x=>JSON.parse(JSON.stringify(x));
const round=n=>Math.round(n);
function mixedSeed(seed){let x=(seed>>>0)^0x9e3779b9;x=Math.imul(x^(x>>>16),0x85ebca6b);x=Math.imul(x^(x>>>13),0xc2b2ae35);return ((x^(x>>>16))>>>0)||1;}
export class Game {
 constructor(state){this.s=state;this.transfers=new TransferLog();}
 static create({character='naiwa',rounds=50,playerCount=3,randomStart=false,talents=true,mapVersion=2,difficulty='normal',opponents,seatLevels=[],startingCash=3200,startingTickets=60,seed=Date.now()}={}){
  if(character==='dounai')character='naicha';opponents=opponents?.map(id=>id==='dounai'?'naicha':id);if(!CHARACTERS.some(c=>c.id===character))character='naiwa';
  const count=[2,3,4,5,6].includes(+playerCount)?+playerCount:3;const chars=rosterFor(character,count,opponents,seed);
  const game=new Game({version:2,rules:7,setupSeed:seed>>>0,mapVersion:mapVersion===1?1:2,difficulty:['easy','normal','hard'].includes(difficulty)?difficulty:'normal',talents:!!talents,firstPlayer:0,seed:mixedSeed(seed),round:1,maxRounds:ROUND_OPTIONS.includes(+rounds)?+rounds:50,current:0,phase:'roll',dice:[1],remaining:0,moveTotal:0,moveSteps:0,players:chars.map((c,id)=>({id,character:c,human:id===0,difficulty:id&&['easy','normal','hard'].includes(seatLevels[id-1])?seatLevels[id-1]:['easy','normal','hard'].includes(difficulty)?difficulty:'normal',money:[2000,3200,5000,8000].includes(+startingCash)?+startingCash:3200,tickets:[0,60,120].includes(+startingTickets)?+startingTickets:60,businessReady:false,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0,buildSite:null,bankAccess:false,talentReady:false,departures:0,deposit:0,loan:0,stocks:[0,0,0,0],stockBook:emptyBook(),stockLegacy:false,stockTrades:[],cards:['dice','shield','recover'],vehicle:0,diceCount:1,pos:0,history:[],alive:true,skip:0,spirit:null,spiritTurns:0,shield:false,reverse:false,forced:0})),ownership:{},blocks:{},pickups:{},market:STOCKS.map(t=>({...t,history:[t.price],change:0,previous:t.price})),logs:[{round:1,text:'奶家发财岛开张！每位奶伴带着 '+([2000,3200,5000,8000].includes(+startingCash)?+startingCash:3200)+' 奶币出发。'}],notice:null,debt:null,options:{sound:true,speed:1,quality:'auto',lighting:'day'},winner:null});if(randomStart){game.s.current=game.int(count);game.s.firstPlayer=game.s.current;game.log(`随机先手：${game.char().name}先出发，每人行动一次算一轮。`);}return game;
 }
 static restore(raw){
  try{const s=typeof raw==='string'?JSON.parse(raw):copy(raw);const TILES=mapTiles(s?.mapVersion??1);if(s&&s.mapVersion===undefined)s.mapVersion=1;if(s&&s.difficulty===undefined)s.difficulty='normal';if(!s||![1,2].includes(s.mapVersion)||!['easy','normal','hard'].includes(s.difficulty)||s.version!==2||!Array.isArray(s.players)||![2,3,4,5,6].includes(s.players.length)||!['roll','departure','moving','branch','buy','estate','event','end','debt','finished'].includes(s.phase))return null;
   if(!Number.isInteger(s.current)||s.current<0||s.current>=s.players.length||!Number.isInteger(s.round)||s.round<1||!ROUND_OPTIONS.includes(s.maxRounds)||s.round>s.maxRounds||!Number.isInteger(s.seed)||!Number.isInteger(s.remaining)||s.remaining<0||s.remaining>18)return null;
   if(s.moveSteps===undefined)s.moveSteps=null;if(s.moveSteps!==null&&(!Number.isInteger(s.moveSteps)||s.moveSteps<0||s.moveSteps>18))return null;
   if(!s.options||!s.market||s.market.length!==4||!s.ownership||!s.blocks||!Array.isArray(s.logs)||!Array.isArray(s.dice))return null;
   for(const p of s.players)if(p.character==='dounai')p.character='naicha';if(s.players.some(p=>!migratePortfolio(p)))return null;
   if(new Set(s.players.map(p=>p.character)).size!==s.players.length||s.players.some((p,i)=>p.human&&i!==0))return null;
   for(const [index,p] of s.players.entries()){if(p.id!==index||typeof p.human!=='boolean'||typeof p.alive!=='boolean'||!Number.isInteger(p.pos)||!CHARACTERS.some(c=>c.id===p.character)||!TILES[p.pos]||![p.money,p.deposit,p.loan,...p.stocks].every(n=>Number.isSafeInteger(n)&&n>=0)||p.stocks.length!==4||!Array.isArray(p.cards)||p.cards.length>15||p.cards.some(c=>!CARDS[c])||!Array.isArray(p.history)||p.history.length>80||p.history.some(i=>!Number.isInteger(i)||!TILES[i])||!VEHICLES[p.vehicle]||!Number.isInteger(p.diceCount)||p.diceCount<1||p.diceCount>VEHICLES[p.vehicle].dice||!Number.isInteger(p.skip)||p.skip<0||p.skip>3||!Number.isInteger(p.forced)||p.forced<0||p.forced>6||!Number.isInteger(p.spiritTurns)||p.spiritTurns<0||p.spiritTurns>4||p.spirit&&!SPIRITS[p.spirit])return null;}
   for(const [id,o] of Object.entries(s.ownership)){if(o.buildingType!==undefined&&!Object.hasOwn(BUSINESSES,o.buildingType)||o.level>buildingLimit(o)||o.researchProgress!==undefined&&(!Number.isInteger(o.researchProgress)||o.researchProgress<0||o.researchProgress>2)||o.researchCard!==undefined&&(!researchChoices(o.level).includes(o.researchCard)||businessType(o)!=='research'))return null;if(!TILES[id]||TILES[id].kind!=='property'||!Number.isInteger(o.player)||o.player<0||o.player>=s.players.length||!Number.isInteger(o.level)||o.level<0||o.level>MAX_BUILDING_LEVEL)return null;}
   for(const m of s.market){if(m.previous===undefined)m.previous=Number.isFinite(m.change)?Math.max(20,Math.min(500,m.price-m.change)):m.price;if(!Number.isSafeInteger(m.previous)||m.previous<20||m.previous>500)return null;}
   if(s.market.some(m=>!Number.isSafeInteger(m.price)||m.price<20||m.price>500||!Array.isArray(m.history)||m.history.length>20||m.history.some(n=>!Number.isFinite(n)||n<20||n>500)))return null;
   for(const key of ['music','voice'])if(key in s.options&&typeof s.options[key]!=='boolean')return null;
   for(const key of ['musicVolume','effectsVolume','voiceVolume'])if(key in s.options&&(!Number.isFinite(s.options[key])||s.options[key]<0||s.options[key]>1))return null;
   if('track'in s.options&&!['ode','town'].includes(s.options.track))return null;
   if(s.options.lighting===undefined)s.options.lighting='day';if(!['day','golden','night'].includes(s.options.lighting))return null;
   if(typeof s.options.sound!=='boolean'||![1,2,4].includes(s.options.speed)||!['auto','low'].includes(s.options.quality)||s.logs.some(l=>typeof l.text!=='string'||!Number.isInteger(l.round)))return null;
   if(Object.entries(s.blocks).some(([id,owner])=>!TILES[id]||!Number.isInteger(owner)||owner<0||owner>=s.players.length))return null;
   if(s.phase==='estate'&&(!s.ownership[s.players[s.current].pos]||s.ownership[s.players[s.current].pos].player===s.current))return null;
   if(s.phase==='branch'&&(TILES[s.players[s.current].pos].next.length!==2||s.remaining<=0))return null;
   if(s.phase==='debt'&&(!s.debt||!Number.isSafeInteger(s.debt.amount)||s.debt.amount<=0||s.debt.to!==null&&(!Number.isInteger(s.debt.to)||!s.players[s.debt.to])||typeof s.debt.label!=='string'))return null;
   if(s.firstPlayer===undefined)s.firstPlayer=0;if(!Number.isInteger(s.firstPlayer)||s.firstPlayer<0||s.firstPlayer>=s.players.length)return null;if(s.pickups===undefined)s.pickups={};if(!s.pickups||typeof s.pickups!=='object'||Object.entries(s.pickups).some(([id,owner])=>!POINT_STOPS.includes(+id)||!Number.isInteger(owner)||!s.players[owner]))return null;if(s.talents===undefined)s.talents=false;if(typeof s.talents!=='boolean')return null;s.rules=7;for(const p of s.players){for(const [key,value]of Object.entries({tickets:60,cardsUsed:0,buildsUsed:0,shopUsed:0,slowTurns:0})){if(p[key]===undefined)p[key]=value;if(!Number.isInteger(p[key])||p[key]<0||p[key]>(key==='tickets'?150:key==='slowTurns'?3:key==='shopUsed'?2:key==='cardsUsed'?32:1))return null;}if(p.difficulty===undefined)p.difficulty=s.difficulty;if(!['easy','normal','hard'].includes(p.difficulty))return null;if(p.businessReady===undefined)p.businessReady=false;if(typeof p.businessReady!=='boolean')return null;if(p.talentReady===undefined)p.talentReady=false;if(p.departures===undefined)p.departures=0;if(typeof p.talentReady!=='boolean'||!Number.isSafeInteger(p.departures)||p.departures<0)return null;if(p.buildSite===undefined)p.buildSite=null;if(p.bankAccess===undefined)p.bankAccess=false;if(p.buildSite!==null&&(!Number.isInteger(p.buildSite)||!TILES[p.buildSite])||typeof p.bankAccess!=='boolean')return null;}return new Game(s);
  }catch{return null;}
 }
 aiDifficulty(p=this.player){return p.difficulty||this.s.difficulty;}
 buildingLimit(o){return buildingLimit(o);}
 get tiles(){return mapTiles(this.s.mapVersion);}
 position(stock,p=this.player){return stockPosition(this,p,stock);}
 portfolio(p=this.player){return portfolio(this,p);}
 get player(){return this.s.players[this.s.current];}
 char(p=this.player){return CHARACTERS.find(c=>c.id===p.character);}
 rng(){let x=this.s.seed;x^=x<<13;x^=x>>>17;x^=x<<5;this.s.seed=x>>>0;return this.s.seed/4294967296;}
 int(n){return Math.floor(this.rng()*n);}
 log(text){this.s.logs.unshift({round:this.s.round,text});this.s.logs=this.s.logs.slice(0,80);}
 recordTransfer(to,amount,kind='fee'){if(to===null||to===this.s.current||!this.s.players[to]||!Number.isSafeInteger(amount)||amount<=0)return;this.transfers.record({from:this.s.current,to,amount,kind,tile:this.player.pos,round:this.s.round});}
 owned(p){return Object.entries(this.s.ownership).filter(([,o])=>o.player===p.id).map(([id,o])=>({tile:this.tiles[+id],...o}));}
 cost(t,level,type='residence'){return t.price+level*Math.ceil(this.upgradeCost(t)*(BUSINESSES[type]?.cost||1));}
 upgradeCost(t){return Math.ceil(t.price*.6/10)*10;}
 assets(p=this.player){const cash=p.money,deposit=p.deposit,loan=p.loan,property=this.owned(p).reduce((a,t)=>a+this.cost(t.tile,t.level,businessType(t)),0),stocks=p.stocks.reduce((a,n,i)=>a+n*this.s.market[i].price,0),vehicle=VEHICLES[p.vehicle].price;return {cash,deposit,property,stocks,vehicle,loan,total:round(cash+deposit+property+stocks+vehicle-loan)};}
 worth(p){return this.assets(p).total;}
 baseRent(id,level=0){return round(this.tiles[id].price*[.16,.42,.85,1.4,2.05,2.8][level]);}
 district(id,player=this.s.ownership[id]?.player){const t=this.tiles[id],group=this.tiles.filter(x=>x.kind==='property'&&x.group===t.group),lots=group.filter(x=>this.s.ownership[x.id]?.player===player&&businessType(this.s.ownership[x.id])==='residence');const base=this.baseRent(id,this.s.ownership[id]?.level??0),support=lots.filter(x=>x.id!==id).reduce((sum,x)=>sum+this.baseRent(x.id,this.s.ownership[x.id].level),0);return {count:lots.length,total:group.length,bonus:Math.min(1,support*.35/base),support};}
 rent(id,level=this.s.ownership[id]?.level??0,visitor=this.player,steps=this.s.moveSteps||this.s.moveTotal||1){const o=this.s.ownership[id],base=this.baseRent(id,level);if(o&&this.s.players[o.player].skip)return 0;if(o&&level){const type=businessType(o);if(type==='park'||type==='research')return 0;if(type==='chain')return Math.min(400,100+50*(this.owned(this.s.players[o.player]).filter(x=>x.level&&businessType(x)==='chain').length-1));if(type==='gas')return 30+15*steps+60*visitor.vehicle;if(type==='hotel')return Math.round(base*.65)*2;if(type==='mall')return Math.round(base*1.0833333333);}return o?base+Math.min(base,round(this.district(id).support*.35)):base;}
 buildPrice(t,type=businessType(this.s.ownership[t.id])){return Math.ceil(Math.ceil(this.upgradeCost(t)*(BUSINESSES[type]?.cost||1))*(hasTalent(this,this.player,'naiwa')?.85:1));}
 canConstruct(id,type='residence'){const t=this.tiles[id],o=this.s.ownership[id],p=this.player;return !!(Object.hasOwn(BUSINESSES,type)&&t&&o&&o.player===p.id&&o.level===0&&this.s.phase==='end'&&p.pos===id&&p.buildSite===id&&p.buildsUsed<1&&p.money>=this.buildPrice(t,type));}
 canBuild(id){return Object.keys(BUSINESSES).some(type=>this.canConstruct(id,type));}
 construct(id,type){if(!this.canConstruct(id,type))return false;const o=this.s.ownership[id],cost=this.buildPrice(this.tiles[id],type);this.player.money-=cost;this.player.buildsUsed++;o.buildingType=type;o.level=1;if(type==='research'){o.researchProgress=0;o.researchCard='dice';}this.log(`${this.char().name}在「${this.tiles[id].name}」建成${BUSINESSES[type].name} −${cost}`);return true;}
 setResearch(id,key){const o=this.s.ownership[id];if(!o||o.player!==this.player.id||businessType(o)!=='research'||!o.level||this.s.phase!=='end'||this.player.pos!==id||this.player.buildSite!==id||!researchChoices(o.level).includes(key))return false;o.researchCard=key;o.researchProgress=0;this.log(`${this.char().name}调整研究所项目。`);return true;}
 cardPrice(key){return Math.ceil(CARDS[key].price*(hasTalent(this,this.player,'naichong')?.8:1));}
 payment(amount,to=null,p=this.player){return round(amount*(p.spirit==='misfortune'?1.25:1)*(hasTalent(this,p,'naishu')&&to!==null?.8:hasTalent(this,p,'naicha')&&to===null?.5:1));}
 canUpgrade(id){const t=this.tiles[id],o=this.s.ownership[id],p=this.player;return !!(t&&this.s.phase==='end'&&p.pos===id&&p.buildSite===id&&o?.player===p.id&&o.level<buildingLimit(o)&&p.buildsUsed<1&&p.money>=this.buildPrice(t));}
 nearby(id,range=8,p=this.player){if(!this.tiles[id])return false;let queue=[[p.pos,0]],seen=new Set();while(queue.length){const [at,n]=queue.shift();if(at===+id)return true;if(seen.has(at)||n>=range)continue;seen.add(at);for(const t of this.tiles)if(t.next.includes(at))queue.push([t.id,n+1]);for(const to of this.tiles[at].next)queue.push([to,n+1]);}return false;}
 cardTargets(key){const p=this.player,targets=Object.entries(this.s.ownership).filter(([id,o])=>(key==='steal'?+id===p.pos:this.nearby(+id))&&(key==='build'?o.player===p.id&&o.level<buildingLimit(o):key==='demolish'?o.level>0&&this.s.blocks[id]===undefined:o.player!==p.id&&this.s.players[o.player].alive)).map(([id,o])=>({id:+id,...o}));if(key==='demolish')for(const [id,player]of Object.entries(this.s.blocks))if(this.nearby(+id))targets.push({id:+id,player,level:0,obstacle:true});return targets;}
 takeoverPrice(id){const o=this.s.ownership[id];return o?Math.ceil(this.cost(this.tiles[id],o.level,businessType(o))*1.25*(hasTalent(this,this.player,'naishu')?.9:1)/10)*10:0;}
 preview(steps,{from=this.player.pos,first=null,reverse=this.player.reverse,blocks=this.s.blocks}={}){if(!Number.isInteger(steps)||steps<0||steps>18)return [];const p=this.player,result=[];const walk=(pos,left,path,history,passesStart)=>{if(left===0||path.length&&blocks[pos]!==undefined){const t=this.tiles[pos],o=this.s.ownership[pos];result.push({id:pos,path,passesStart,blocked:left>0,points:[...new Set(path)].filter(id=>POINT_STOPS.includes(id)&&this.s.pickups[id]===undefined).length*10,rent:o&&o.player!==p.id&&!p.shield?this.payment(this.rent(pos,undefined,p,path.length+(from===p.pos&&['moving','branch'].includes(this.s.phase)?(this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining)):0)),o.player,p):0,owner:o?.player??null,price:!o&&t.kind==='property'?t.price:0});return;}let next;if(reverse)next=[history.length?history.at(-1):(pos<40?(pos+39)%40:pos===40?35:pos===44?15:pos-1)];else next=path.length===0&&first!==null&&this.tiles[pos].next.includes(first)?[first]:this.tiles[pos].next;for(const to of next)walk(to,left-1,[...path,to],reverse?history.slice(0,-1):[...history,pos],passesStart||!reverse&&to===0);};walk(from,steps,[],[...p.history],false);return result;}
 coupons(p,amount){p.tickets=Math.min(150,p.tickets+amount);}
 income(p,n,label){const amount=round(n*(p.spirit==='fortune'?1.25:1));p.money+=amount;this.log(`${this.char(p).name} ${label} +${amount}`);return amount;}
 canBank(){return this.manageable()&&this.s.round%7!==3&&(this.player.bankAccess||this.tiles[this.player.pos].kind==='bank');}
 canUseCard(key){return this.player.alive&&(this.s.phase==='roll'||this.s.phase==='end'&&!['dice','turn','slow','block'].includes(key)||this.s.phase==='estate'&&key==='steal');}
 blockTargets(){const p=this.player;let at=p.pos;return Array.from({length:6},(_,i)=>{at=this.tiles[at].next[0];return {id:at,steps:i+1,reason:this.s.blocks[at]!==undefined?'这里已有路障':this.s.players.some(q=>q.alive&&q.pos===at)?'这里有角色停靠':''};});}
 cardHint(key){
  const p=this.player;if(!CARDS[key]||!p.cards.includes(key))return '卡片不在当前卡包中';
  if(!this.canUseCard(key))return this.s.phase==='end'&&['dice','turn','slow','block'].includes(key)?'移动卡须在掷骰前使用':'等待自己的行动时机';
  if(key==='dice'&&p.forced)return `本次已指定 ${p.forced} 步`;
  if(key==='turn'&&p.reverse)return '本次已选择倒退';
  if(key==='shield'&&p.shield)return '免租保护已生效，触发后再补充';
  if(key==='slow'&&(p.slowTurns||p.forced))return p.slowTurns?`慢行剩余 ${p.slowTurns} 次出发`:'本次已控骰，暂不能开启慢行';
  if(key==='block'&&this.blockTargets().every(t=>t.reason))return '前方六格暂无可放置位置';
  if(['build','demolish','steal'].includes(key)){const targets=this.cardTargets(key);if(!targets.length)return key==='steal'?'停在对手地产后可收购':key==='build'?'附近八格暂无可加盖的自家地产':'附近八格暂无房屋或路障';if(key==='steal'&&p.money<this.takeoverPrice(p.pos))return `现金不足，还需 ${this.takeoverPrice(p.pos)-p.money} 奶币`;}
  return '';
 }
 canShop(){return this.manageable()&&this.s.phase!=='debt'&&this.tiles[this.player.pos].kind==='shop';}
 manageable(){return ['roll','end','debt'].includes(this.s.phase)&&this.player.alive;}
 charge(amount,to=null,label='支付费用'){
  const p=this.player;amount=this.payment(amount,to,p);
  if(p.money<amount&&p.deposit){const transfer=Math.min(p.deposit,amount-p.money);p.deposit-=transfer;p.money+=transfer;this.log(`${this.char().name}存款自动补足现金 +${transfer}`);}
  if(p.money<amount){this.s.debt={amount,to,label};this.s.phase='debt';this.log(`${this.char().name}需支付 ${amount} 奶币，请筹集资金或申请破产。`);return false;}
  p.money-=amount;if(to!==null)this.s.players[to].money+=amount;this.recordTransfer(to,amount);this.log(`${this.char().name} ${label} −${amount}`);return true;
 }
 roll(){if(!['roll','departure'].includes(this.s.phase))return false;const p=this.player;
  if(p.skip>0){p.skip--;this.log(`${this.char().name}正在休养，本回合暂停行动。`);this.s.phase='end';return true;}
  if(businessDeparture(this)){this.s.phase='departure';return true;}
  if(departureTalent(this)){this.s.phase='departure';return true;}
  const count=Math.max(1,Math.min(VEHICLES[p.vehicle].dice,p.diceCount));
  this.s.dice=p.forced?[p.forced]:p.slowTurns?[1]:Array.from({length:count},()=>this.int(6)+1);if(p.slowTurns)p.slowTurns--;p.forced=0;this.s.remaining=this.s.dice.reduce((a,n)=>a+n,0);this.s.moveTotal=this.s.remaining;this.s.moveSteps=0;this.s.phase='moving';this.log(`${this.char().name}掷出 ${this.s.dice.join(' + ')}，${p.reverse?'倒退':'前进'} ${this.s.remaining} 格。`);return true;
 }
 step(choice){if(!['moving','branch'].includes(this.s.phase))return false;const p=this.player;
  if(this.s.remaining<=0){p.reverse=false;this.land();return true;}
  let next;if(p.reverse){next=p.history.length?p.history.pop():(p.pos<40?(p.pos+39)%40:p.pos===40?35:p.pos===44?15:p.pos-1);}else{const paths=this.tiles[p.pos].next;if(paths.length>1&&!paths.includes(choice)){this.s.phase='branch';return false;}next=paths.length>1?choice:paths[0];if(paths.length>1)this.log(`${this.char().name}选择通往「${this.tiles[next].name}」的路线。`);p.history.push(p.pos);p.history=p.history.slice(-80);}
  this.s.moveSteps=(this.s.moveSteps??Math.max(0,(this.s.moveTotal||0)-this.s.remaining))+1;p.pos=next;if(POINT_STOPS.includes(next)&&this.s.pickups[next]===undefined){this.s.pickups[next]=p.id;this.coupons(p,10);this.log(`${this.char().name}拾取点券 +10`);}if(this.tiles[next].kind==='bank')p.bankAccess=true;this.s.remaining--;if(next===0&&!p.reverse){this.income(p,400+(hasTalent(this,p,'naiwa')?80:0),'经过起点');this.coupons(p,25);}
  if(this.s.blocks[next]!==undefined){delete this.s.blocks[next];this.s.remaining=0;this.log(`${this.char().name}遇到奶块路障，在此停下。`);}
  this.s.phase='moving';return true;
 }
 land(){const p=this.player,t=this.tiles[p.pos];p.buildSite=null;this.s.phase='end';if(this.s.ownership[p.pos]?.player===p.id)p.buildSite=p.pos;
  if(t.kind==='property'){const o=this.s.ownership[t.id];if(!o){this.s.phase='buy';return;}if(o.player!==p.id){if(p.cards.includes('steal')&&p.money>=this.takeoverPrice(t.id)){this.s.phase='estate';return;}this.collectProperty(t.id);}else if(o.level&&businessType(o)==='park'){this.coupons(p,10);this.log(`${this.char().name}游览公园，获得10点券。`);}}
  else if(t.kind==='event')this.event();
  else if(t.kind==='hospital'){p.skip=1;if(this.charge(100,null,'疗养费'))this.notice('奶蛙疗养院','休养一回合。也可以在下回合掷骰前使用野生狗奶恢复。','rest');}
  else if(t.kind==='tax'){if(this.charge(180,null,'奶泡清洁费'))this.notice('奶泡清洁站','街道又干净了，大家一起快乐大笑。','sad');}
  else if(t.kind==='rest'){this.income(p,120,'在小窝领取补贴');this.notice('回到奶蛙的小窝','稍作休息，获得 120 奶币补贴。','happy');}
  else if(t.kind==='spirit'){this.attach();}
  else if(t.kind==='bank')this.notice(this.s.round%7===3?'银行今日休息':'奶币银行',this.s.round%7===3?'周三银行休息，今天仅可查看账户。':'经过银行后本回合可办理存取款、借款与还款。');
  else if(t.kind==='stock')this.notice(this.s.round%7===0?'证券所今日休市':'奶家证券所','打开股票面板查看四家奶家企业。价格每轮变化；每第七轮休市，其余时间可交易。');
  else if(t.kind==='shop'){this.coupons(p,30);this.giveCard(p);this.notice('奶家补给','获得 30 点券与一张随机卡！点券用于买卡，奶币用于地产和交通工具。','happy');}
 }
 collectProperty(id){const p=this.player,o=this.s.ownership[id],t=this.tiles[id],type=businessType(o);if(!o)return;if(o.level&&(type==='park'||type==='research')){if(type==='park'){this.coupons(p,10);this.log(`${this.char().name}免费游览公园，获得10点券。`);}return;}if(this.s.players[o.player].skip)return;if(p.shield){p.shield=false;this.log(`${this.char().name}用快乐免租卡抵消本次费用。`);return;}let amount=this.rent(id),suffix='租金';if(o.level&&type==='hotel'){const days=this.int(3)+1;amount=Math.round(this.baseRent(id,o.level)*.65)*days;p.skip=days;suffix=`住宿${days}回合费用`;}else if(o.level&&type==='mall'){const rate=[.75,1,1.5][this.int(3)];amount=Math.round(this.baseRent(id,o.level)*rate);suffix=`购物消费（${rate*100}%）`;}else if(o.level&&type==='gas')suffix='加油费';if(this.charge(amount,o.player,`向${this.char(this.s.players[o.player]).name}支付「${t.name}」${suffix}`)){this.s.players[o.player].mood='happy';if(o.level&&['hotel','mall','gas'].includes(type))this.notice(BUSINESSES[type].name,`${suffix}：${this.payment(amount,o.player)} 奶币${type==='hotel'?'，休息 '+p.skip+' 回合。':'。'}`,'sad');}}
 resolveEstate(buy=false){if(this.s.phase!=='estate')return false;const p=this.player;if(buy){const index=p.cards.indexOf('steal');if(index<0||!this.card(index,p.pos))return false;p.buildSite=p.pos;this.s.phase='end';return true;}this.s.phase='end';this.collectProperty(p.pos);return true;}
 notice(title,text,mood='idle'){this.s.notice={title,text,mood};this.s.phase='event';}
 acknowledge(){if(this.s.phase!=='event')return false;this.s.notice=null;this.s.phase='end';return true;}
 buy(yes){if(this.s.phase!=='buy')return false;const p=this.player,t=this.tiles[p.pos];if(yes){if(this.s.ownership[t.id]||p.money<t.price)return false;p.money-=t.price;this.s.ownership[t.id]={player:p.id,level:0,buildingType:'residence'};p.buildSite=t.id;this.log(`${this.char().name}买下「${t.name}」−${t.price}`);}else this.log(`${this.char().name}暂时放弃「${t.name}」。`);this.s.phase='end';return true;}
 upgrade(id){if(this.s.ownership[id]?.level===0)return this.construct(id,'residence');if(!this.canUpgrade(id))return false;const p=this.player,t=this.tiles[id],o=this.s.ownership[id],cost=this.buildPrice(t);p.money-=cost;p.buildsUsed++;o.level++;this.log(`${this.char().name}将「${t.name}」升级为 ${o.level} 级 −${cost}`);return true;}
 demolish(id){if(!this.manageable()||this.s.phase==='debt')return false;const t=this.tiles[id],o=this.s.ownership[id];if(!t||!o||this.s.phase!=='end'||this.player.pos!==id||this.player.buildSite!==id||o.player!==this.player.id||o.level===0)return false;const refund=Math.floor((this.cost(t,o.level,businessType(o))-t.price)*.25);o.level=0;repairBuilding(o);this.player.money+=refund;this.log(`${this.char().name}拆除「${t.name}」房屋，保留土地，回收材料 +${refund}`);return true;}
 sell(id){if(!this.manageable())return false;const t=this.tiles[id],o=this.s.ownership[id];if(!o||o.player!==this.player.id)return false;const amount=round(this.cost(t,o.level,businessType(o))*.65);this.player.money+=amount;delete this.s.ownership[id];this.log(`${this.char().name}变卖「${t.name}」+${amount}`);return true;}
 bank(kind,amount){if(!this.canBank())return false;amount=round(+amount);if(!Number.isFinite(amount)||amount<=0)return false;const p=this.player;
  if(kind==='deposit'){if(this.s.phase==='debt'||p.money<amount)return false;p.money-=amount;p.deposit+=amount;}
  else if(kind==='withdraw'){if(p.deposit<amount)return false;p.deposit-=amount;p.money+=amount;}
  else if(kind==='borrow'){if(p.loan+amount>1800)return false;p.loan+=amount;p.money+=amount;}
  else if(kind==='repay'){if(this.s.phase==='debt'||p.money<amount||p.loan<amount)return false;p.money-=amount;p.loan-=amount;}else return false;
  this.log(`${this.char().name}${{deposit:'存入',withdraw:'取出',borrow:'借入',repay:'偿还'}[kind]} ${amount} 奶币。`);return true;
 }
 trade(stock,qty){if(!this.manageable()||this.s.round%7===0)return false;const p=this.player,m=this.s.market[stock];qty=+qty;if(!Number.isInteger(stock)||stock<0||stock>3||!m||!Number.isInteger(qty)||qty===0||Math.abs(qty)>10000)return false;if(qty>0&&(this.s.phase==='debt'||p.money<qty*m.price)||qty<0&&p.stocks[stock]<-qty)return false;const profit=recordTrade(p,stock,qty,m.price,this.s.round);this.log(`${this.char().name}${qty>0?'买入':'卖出'}${Math.abs(qty)}股「${m.name}」。`);return true;}
 giveCard(p,key){key||=Object.keys(CARDS)[this.int(Object.keys(CARDS).length)];if(p.cards.length>=15){this.income(p,60,'卡包已满，补偿');return;}p.cards.push(key);this.log(`${this.char(p).name}获得「${CARDS[key].name}」。`);}
 shop(key){if(!this.canShop())return false;const c=CARDS[key],p=this.player;if(!c||p.cards.length>=15||p.tickets<this.cardPrice(key)||p.shopUsed>=2)return false;p.tickets-=this.cardPrice(key);p.shopUsed++;p.cards.push(key);this.log(`${this.char().name}购买「${c.name}」−${this.cardPrice(key)} 点券`);return true;}
 vehicle(id){if(!this.canShop())return false;const p=this.player,v=VEHICLES[id];if(!v||id<=p.vehicle||p.money<v.price)return false;p.money-=v.price;p.vehicle=id;p.diceCount=v.dice;this.log(`${this.char().name}购入${v.name}，现在可选择 1—${v.dice} 颗骰子。`);return true;}
 card(index,target){const p=this.player,key=p.cards[index];if(this.cardHint(key))return false;let detail='';
  if(key==='dice'){if(!Number.isInteger(target)||target<1||target>6||p.forced)return false;p.forced=target;detail=`指定本次 ${target} 步`;}
  if(key==='block'){if(!Number.isInteger(target)||target<1||target>6)return false;let pos=p.pos;for(let i=0;i<target;i++)pos=this.tiles[pos].next[0];if(this.s.blocks[pos]!==undefined||this.s.players.some(q=>q.alive&&q.pos===pos))return false;this.s.blocks[pos]=p.id;detail=`在「${this.tiles[pos].name}」放置路障`;}
  if(key==='turn'){if(p.reverse)return false;p.reverse=true;}
  if(key==='shield'){if(p.shield)return false;p.shield=true;}
  if(key==='recover'){p.skip=0;if(p.spirit==='misfortune'){p.spirit=null;p.spiritTurns=0;}this.income(p,80,'喝下野生狗奶');}
  if(key==='steal'){const t=this.tiles[target],o=this.s.ownership[target];if(!this.cardTargets(key).some(x=>x.id===target))return false;const price=this.takeoverPrice(target);if(p.money<price)return false;p.money-=price;this.s.players[o.player].money+=price;this.recordTransfer(o.player,price,'takeover');o.player=p.id;detail=`收购「${t.name}」−${price}`;}
  if(key==='demolish'||key==='build'){if(!this.cardTargets(key).some(x=>x.id===target))return false;if(key==='demolish'&&this.s.blocks[target]!==undefined){delete this.s.blocks[target];detail=`清理「${this.tiles[target].name}」路障`;}else{const o=this.s.ownership[target];if(key==='build'&&o.level===0)o.buildingType='residence';o.level+=key==='build'?1:-1;repairBuilding(o);detail=`${key==='build'?'加盖':'拆除'}「${this.tiles[target].name}」一层`;}}
  if(key==='slow'){if(p.slowTurns||p.forced)return false;p.slowTurns=3;}
  p.cards.splice(index,1);p.cardsUsed++;this.log(`${this.char().name}使用「${CARDS[key].name}」${detail}`);return true;
 }
 attach(){const p=this.player,key=Object.keys(SPIRITS)[this.int(3)];if(key==='misfortune'&&p.spirit==='guardian'){p.spirit=null;p.spiritTurns=0;this.log('奶蛋守护抵挡了霉运。');this.notice('奶蛋守护','替你挡住一次霉运，守护效果已消耗。','happy');return;}
  p.spirit=key;p.spiritTurns=4;this.log(`${this.char().name}迎来「${SPIRITS[key].name}」，持续 3 个后续回合。`);this.notice(SPIRITS[key].name,`${SPIRITS[key].description}。持续至接下来 3 次行动结束，同类刷新、异类替换。`,key==='misfortune'?'sad':'happy');}
 event(){const p=this.player,e=EVENTS[this.int(EVENTS.length)];this.log(`「${e.name}」${e.text}`);
  if(['loss','rest'].includes(e.kind)&&p.spirit==='guardian'){p.spirit=null;p.spiritTurns=0;this.notice('奶蛋替你挡住了！',`「${e.name}」的负面效果已抵消。`,'happy');return;}
  if(e.stock!==undefined){const m=this.s.market[e.stock];m.previous??=m.price;m.price=Math.max(20,Math.min(500,round(m.price*(1+e.change))));m.change=m.price-m.previous;m.history.push(m.price);m.history=m.history.slice(-20);}
  if(e.kind==='gain')this.income(p,e.amount,'获得事件奖励');
  if(e.kind==='loss'&&!this.charge(e.amount,null,e.name))return;
  if(e.kind==='rest'){p.skip=1;this.income(p,e.amount,'洗澡补贴');}
  if(e.kind==='recover'){p.skip=0;this.giveCard(p,'recover');}
  if(e.kind==='card')this.giveCard(p);
  if(e.kind==='spirit'){this.attach();return;}
  this.notice(e.name,e.text,e.kind==='loss'?'sad':'happy');
 }
 settle(){if(this.s.phase!=='debt')return false;const d=this.s.debt,p=this.player;if(p.money<d.amount)return false;p.money-=d.amount;if(d.to!==null)this.s.players[d.to].money+=d.amount;this.recordTransfer(d.to,d.amount);this.log(`${this.char().name}支付${d.label} −${d.amount}`);this.s.debt=null;this.s.phase='end';return true;}
 bankrupt(){if(this.s.phase!=='debt')return false;const p=this.player,d=this.s.debt;
  p.money+=p.deposit;p.deposit=0;for(let i=0;i<4;i++)if(p.stocks[i])recordTrade(p,i,-p.stocks[i],this.s.market[i].price,this.s.round);
  for(const o of this.owned(p)){p.money+=round(this.cost(o.tile,o.level,businessType(o))*.65);delete this.s.ownership[o.tile.id];}
  p.money+=round(VEHICLES[p.vehicle].price*.5);p.vehicle=0;p.diceCount=1;p.forced=0;p.slowTurns=0;p.skip=0;
  const paid=Math.min(p.money,d.amount);p.money-=paid;if(d.to!==null)this.s.players[d.to].money+=paid;this.recordTransfer(d.to,paid,'liquidation');p.alive=false;p.spirit=null;this.s.debt=null;this.log(`${this.char().name}申请破产，清算支付 ${paid} 奶币，退出本局。`);this.s.phase='end';if(this.s.players.filter(p=>p.alive).length===1)this.finish();return true;
 }
 end(){if(this.s.phase!=='end')return false;const p=this.player;if(p.spirit&&--p.spiritTurns<=0)p.spirit=null;p.reverse=false;
  if(this.s.players.filter(p=>p.alive).length<=1){this.finish();return true;}
  let next=this.s.current;do{next=(next+1)%this.s.players.length;if(next===(this.s.firstPlayer??0)){if(this.s.round>=this.s.maxRounds){this.finish();return true;}this.s.round++;this.s.pickups={};this.marketTick();}}while(!this.s.players[next].alive);
  this.s.current=next;this.player.businessReady=false;this.player.talentReady=false;this.player.cardsUsed=0;this.player.buildsUsed=0;this.player.shopUsed=0;this.player.buildSite=null;this.player.bankAccess=false;this.player.aiTradeDone=false;this.player.aiBankDone=false;this.s.phase='roll';return true;
 }
 marketTick(){for(const m of this.s.market){const old=m.price;m.price=Math.max(20,Math.min(500,round(m.price*(.88+this.rng()*.24))));m.previous=old;m.previous=old;m.change=m.price-old;m.history.push(m.price);m.history=m.history.slice(-20);}
  for(const p of this.s.players){if(!p.alive)continue;const interest=Math.floor(p.deposit*.005),fee=round(p.loan*.04);p.deposit+=interest;p.loan+=fee;if(interest||fee)this.log(`${this.char(p).name}：存款利息 +${interest}，贷款利息 +${fee}（计入本金）。`);}
  this.log(`第 ${this.s.round} 轮开始，奶家股市行情已更新。`);
 }
 finish(){this.s.phase='finished';const leaders=this.leaders();this.s.winner=leaders[0]?.id??0;this.log(`本局结束！${leaders.map(p=>this.char(p).name).join('、')}${leaders.length>1?'并列':''}成为奶家大富翁。`);}
 leaders(){const ranked=this.ranking(),first=ranked[0];return ranked.filter(p=>p.alive===first.alive&&this.worth(p)===this.worth(first));}
 ranking(){return [...this.s.players].sort((a,b)=>Number(b.alive)-Number(a.alive)||this.worth(b)-this.worth(a)||a.id-b.id);}
 ai(){return takeAiTurn(this);}
}
