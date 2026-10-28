import {isHotseat,publicLog} from './hotseat.js';
import {animationSpeed} from './pacing.js';
import {portrait} from './portraits.js';
import {eventPresentation,eventActor} from './event-panel.js';
import {art} from './illustrations.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function newsCharacter(text){return [['奶蛙','naiwa'],['奶鼠','naishu'],['奶虫','naichong'],['奶狗','naigou'],['奶蛋','naidan'],['奶茶','naicha']].map(([name,id])=>({id,index:text.indexOf(name)})).filter(c=>c.index>=0).sort((a,b)=>a.index-b.index)[0]?.id;}
export function shortNews(text){if(/暂时放弃|存款利息/.test(text))return null;let s=text.replace(/掷出 (.+?)，(前进|倒退) (\d+) 格。/,'掷出 $1 · $2 $3格').replace(/奶家发财岛开张！每位奶伴带着 ([\d,]+) 奶币出发。/,'奶家开局 · 每人 $1 奶币').replace(/将「(.+?)」升级为 (\d) 级/,'升级 $1 · $2级').replace(/拆除「(.+?)」房屋，保留土地，回收材料/,'拆除 $1 · 回收').replace(/需支付 (\d+) 奶币，请筹集资金或申请破产。/,'现金不足 · 待付 $1').replace(/向(奶.+?)支付「.+?」租金/,'向$1付租金').replace(/，持续 3 个后续回合。/,'').replace(/第 (\d+) 轮开始，奶家股市行情已更新。/,'第 $1 轮 · 股市更新').replace(/[「」]/g,'').replace(/[。！]$/,'');if(s.length>33){const money=s.match(/[+−]\d+[，。]?$/)?.[0]||'';s=s.slice(0,29-money.length)+'…'+money;}return s;}
export const criticalNews=entry=>typeof entry==='string'?/破产|本局结束|结算|现金不足|买下|买入|卖出|支付|收购|存入|取出|借入|偿还|购入|购买|建成|升级|拆除/.test(entry):!!entry?.critical||!!entry?.event;
export class NewsFeed{
 constructor(root,{onEvent=()=>{},clock=()=>performance.now()}={}){this.root=root;this.onEvent=onEvent;this.clock=clock;this.queue=[];this.timer=null;this.paused=false;this.remaining=2400;this.speed=1;this.epoch=0;}
 get busy(){return !this.root.hidden||this.queue.length>0;}
 cancel(){clearTimeout(this.timer);this.timer=null;this.epoch++;}
 setSpeed(value){const speed=animationSpeed(value);if(speed===this.speed)return;const now=this.clock(),remaining=this.paused?this.remaining:Math.max(0,(this.deadline??now)-now);this.remaining=Math.max(remaining*this.speed/speed,this.paused?this.minimumRemaining||0:(this.minimumUntil||0)-now);this.speed=speed;if(!this.paused&&!this.root.hidden)this.schedule();}
 sync(game,started){
  if(!started){this.reset();return;}const event=game.s.phase==='event'&&!game.player?.human&&game.s.notice;
  if(this.game!==game){this.reset();this.game=game;this.turn=`${game.s.round}:${game.s.current}`;this.head=game.s.logs[0];this.push(`第 ${game.s.round} 轮 · ${game.char().name}的回合`);if(event)this.pushEvent(game);return;}
  const turn=`${game.s.round}:${game.s.current}`;if(turn!==this.turn){this.turn=turn;this.push(`第 ${game.s.round} 轮 · ${game.char().name}的回合`);}
  if(event&&game.s.notice!==this.lastNotice){this.pushEvent(game);this.head=game.s.logs[0];return;}
  const index=game.s.logs.indexOf(this.head);if(index!==0){const fresh=(index<0?game.s.logs.slice(0,1):game.s.logs.slice(0,index)).reverse();this.head=game.s.logs[0];for(const log of fresh){const raw=publicLog(game.s,log.text),critical=criticalNews(log.text),text=critical?raw.replace(/[「」]/g,'').replace(/[。！]$/,''):shortNews(raw);if(text)this.push(critical?{text,critical:true}:text);}}
 }
 pushEvent(game){this.lastNotice=game.s.notice;if(isHotseat(game.s)){this.push({text:game.char().name+'处理了旅途事件',critical:true});return;}this.push({title:game.s.notice.title,event:eventPresentation(game),critical:true});}
 reset(){this.cancel();this.queue=[];this.current=null;this.game=null;this.lastNotice=null;this.root.hidden=true;this.root.classList.remove('news-event','news-happy','news-sad','news-critical');}
 push(entry){this.queue.push(entry);if(!this.timer&&!this.paused&&this.root.hidden)this.next();}
 next(){
  if(this.paused)return;this.cancel();const entry=this.queue.shift();this.current=entry;if(!entry){this.root.hidden=true;return;}
  const d=typeof entry==='string'?null:entry.event,text=d?`${d.name} · ${entry.title} ${d.text} ${d.outcomes.join(' ')}`:typeof entry==='string'?entry:entry.text;
  this.root.textContent=text;this.root.classList.remove('news-event','news-happy','news-sad','news-critical');const critical=criticalNews(entry);if(critical)this.root.classList.add('news-critical');
  if(d){this.root.classList.add('news-event',`news-${d.mood}`);this.root.innerHTML=`<div class="news-event-picture">${eventActor(d)}<span>${art(d.icon)}</span></div><div class="news-event-copy"><small>电脑 · ${esc(d.name)}</small><strong>${esc(entry.title)}</strong><p>${esc(d.text)}</p>${d.outcomes.length?`<div>${d.outcomes.map(t=>`<b>${esc(t)}</b>`).join('')}</div>`:''}</div>`;}
  else if(this.root.insertAdjacentHTML){const who=newsCharacter(text);if(who)this.root.insertAdjacentHTML('afterbegin',`<span class="news-face">${portrait(who)}</span>`);}
  this.root.hidden=false;this.root.classList.remove('news-enter');void this.root.offsetWidth;this.root.classList.add('news-enter');
  const floor=d||/破产|本局结束|挑战结算/.test(text)?2200:critical?1100:600;this.minimumRemaining=floor;this.minimumUntil=this.clock()+floor;this.remaining=Math.max(floor,Math.min(d?5200:2800,(d?2000:1200)+text.length*(d?35:40))/this.speed);if(d)try{this.onEvent(d);}catch{}this.schedule();
 }
 schedule(){this.cancel();this.deadline=this.clock()+this.remaining;const epoch=this.epoch;this.timer=setTimeout(()=>{if(epoch!==this.epoch)return;this.timer=null;this.next();},this.remaining);}
 setPaused(value){if(value===this.paused)return;this.paused=value;const now=this.clock();if(value){this.minimumRemaining=Math.max(0,(this.minimumUntil||0)-now);if(this.timer){this.remaining=Math.max(0,this.deadline-now);this.cancel();}}else{this.minimumUntil=now+(this.minimumRemaining||0);if(!this.root.hidden)this.schedule();else if(this.queue.length)this.next();}}
 skipPresentation(){this.queue=this.queue.filter(criticalNews);if(criticalNews(this.current))return false;this.cancel();this.current=null;this.root.hidden=true;if(!this.paused)this.next();return true;}
}
