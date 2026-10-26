import {animationSpeed} from './pacing.js';
import {portrait} from './portraits.js';
import {eventPresentation,eventActor} from './event-panel.js';
import {art} from './illustrations.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function newsCharacter(text){return [['奶蛙','naiwa'],['奶鼠','naishu'],['奶虫','naichong'],['奶狗','naigou'],['奶蛋','naidan'],['奶茶','naicha']].map(([name,id])=>({id,index:text.indexOf(name)})).filter(c=>c.index>=0).sort((a,b)=>a.index-b.index)[0]?.id;}
export function shortNews(text){if(/暂时放弃|存款利息/.test(text))return null;let s=text.replace(/掷出 (.+?)，(前进|倒退) (\d+) 格。/,'掷出 $1 · $2 $3格').replace(/奶家发财岛开张！每位奶伴带着 ([\d,]+) 奶币出发。/,'奶家开局 · 每人 $1 奶币').replace(/将「(.+?)」升级为 (\d) 级/,'升级 $1 · $2级').replace(/拆除「(.+?)」房屋，保留土地，回收材料/,'拆除 $1 · 回收').replace(/需支付 (\d+) 奶币，请筹集资金或申请破产。/,'现金不足 · 待付 $1').replace(/向(奶.+?)支付「.+?」租金/,'向$1付租金').replace(/，持续 3 个后续回合。/,'').replace(/第 (\d+) 轮开始，奶家股市行情已更新。/,'第 $1 轮 · 股市更新').replace(/[「」]/g,'').replace(/[。！]$/,'');if(s.length>33){const money=s.match(/[+−]\d+[，。]?$/)?.[0]||'';s=s.slice(0,29-money.length)+'…'+money;}return s;}
export class NewsFeed{
 constructor(root,{onEvent=()=>{}}={}){this.root=root;this.onEvent=onEvent;this.queue=[];this.timer=null;this.paused=false;this.remaining=2400;this.speed=1;}
 get busy(){return !this.root.hidden||this.queue.length>0;}
 setSpeed(speed){this.speed=animationSpeed(speed);}
 sync(game,started){
  if(!started){this.reset();return;}const event=game.s.phase==='event'&&!game.player?.human&&game.s.notice;
  if(this.game!==game){this.reset();this.game=game;this.turn=`${game.s.round}:${game.s.current}`;this.head=game.s.logs[0];this.push(`第 ${game.s.round} 轮 · ${game.char().name}的回合`);if(event)this.pushEvent(game);return;}
  const turn=`${game.s.round}:${game.s.current}`;if(turn!==this.turn){this.turn=turn;this.push(`第 ${game.s.round} 轮 · ${game.char().name}的回合`);}
  // The illustrated receipt replaces duplicate banners, never the permanent journal.
  if(event&&game.s.notice!==this.lastNotice){this.pushEvent(game);this.head=game.s.logs[0];return;}
  const index=game.s.logs.indexOf(this.head);if(index!==0){const fresh=(index<0?game.s.logs.slice(0,1):game.s.logs.slice(0,index)).reverse();this.head=game.s.logs[0];for(const log of fresh){const text=shortNews(log.text);if(text)this.push(text);}}
 }
 pushEvent(game){this.lastNotice=game.s.notice;this.push({title:game.s.notice.title,event:eventPresentation(game)});}
 reset(){clearTimeout(this.timer);this.timer=null;this.queue=[];this.game=null;this.lastNotice=null;this.root.hidden=true;this.root.classList.remove('news-event','news-happy','news-sad');}
 push(entry){this.queue.push(entry);if(!this.timer&&!this.paused)this.next();}
 next(){
  if(this.paused)return;clearTimeout(this.timer);const entry=this.queue.shift();if(!entry){this.timer=null;this.root.hidden=true;return;}
  const d=typeof entry==='string'?null:entry.event,text=d?`${d.name} · ${entry.title} ${d.text} ${d.outcomes.join(' ')}`:entry;this.root.textContent=text;this.root.classList.remove('news-event','news-happy','news-sad');
  if(d){this.root.classList.add('news-event',`news-${d.mood}`);this.root.innerHTML=`<div class="news-event-picture">${eventActor(d)}<span>${art(d.icon)}</span></div><div class="news-event-copy"><small>电脑 · ${esc(d.name)}</small><strong>${esc(entry.title)}</strong><p>${esc(d.text)}</p>${d.outcomes.length?`<div>${d.outcomes.map(t=>`<b>${esc(t)}</b>`).join('')}</div>`:''}</div>`;}
  else if(this.root.insertAdjacentHTML){const who=newsCharacter(text);if(who)this.root.insertAdjacentHTML('afterbegin',`<span class="news-face">${portrait(who)}</span>`);}
  this.root.hidden=false;this.root.classList.remove('news-enter');void this.root.offsetWidth;this.root.classList.add('news-enter');this.remaining=d?Math.max(2200,Math.min(5200,2000+text.length*35)/this.speed):Math.max(1250,Math.min(2800,1200+text.length*40)/this.speed);if(d)try{this.onEvent(d);}catch{}this.schedule();
 }
 schedule(){this.deadline=performance.now()+this.remaining;this.timer=setTimeout(()=>this.next(),this.remaining);}
 setPaused(value){if(value===this.paused)return;this.paused=value;if(value){if(this.timer){this.remaining=Math.max(100,this.deadline-performance.now());clearTimeout(this.timer);this.timer=null;}}else if(!this.root.hidden)this.schedule();else if(this.queue.length)this.next();}
}
