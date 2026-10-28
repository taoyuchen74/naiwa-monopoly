import {GUIDE_COPY} from './rule-help.js';
export const TUTORIAL_KEY='naiwa-tutorial-v1';
export const GUIDE_IDS=['intro','roll','end','buy','rent','build','cards','cash'];
export function tutorialPreferences(raw){return {version:1,disabled:raw?.version===1&&raw.disabled===true,seen:raw?.version===1&&Array.isArray(raw.seen)?[...new Set(raw.seen.filter(id=>GUIDE_IDS.includes(id)))]:[]};}
export function readTutorial(storage){try{return tutorialPreferences(JSON.parse(storage.getItem(TUTORIAL_KEY)||'null'));}catch{return tutorialPreferences(null);}}
/** Pure presentation selection. Never dispatches a game command or consumes RNG. */
export function tutorialCandidate(g,{started=false,panel=null,seen=[],cards=false,rent=false}={}){
 const result=(id,target,copy=id)=>seen.includes(id)?null:{id,target,lines:GUIDE_COPY[copy]};
 if(!started)return panel?null:result('intro','#startBtn');
 const s=g.s,p=g.player;if(!p.human||!p.alive||s.handoff||s.phase==='finished')return null;
 if(s.phase==='debt'&&s.debt?.amount>p.money&&panel==='debt')return result('cash','.funding-source button:not(:disabled),.debt-bankruptcy summary');
 if(panel==='estate')return result('rent','[data-act=estatePay]');
 if(panel==='buy'){if(p.money<g.tiles[p.pos].price){const tip=result('cash','[data-act=pass]');if(tip)tip.lines=['现金不足，先放弃这次购地。','轮到可经营时再查看筹款途径。'];return tip;}return result('buy','[data-act=buy]');}
 if(panel==='buildHere'&&(g.canBuild(p.pos)||g.canUpgrade(p.pos)))return result('build','[data-act=construct]:not(:disabled),[data-act=upgrade]:not(:disabled)');
 if(panel)return null;
 if(rent&&['roll','end'].includes(s.phase))return result('rent','[data-panel=cards]','paidRent');
 if(cards&&['roll','end'].includes(s.phase))return result('cards','[data-panel=cards]');
 if(s.phase==='roll'){const tip=result('intro','#actionBtn');if(tip&&s.mode.goal.type==='netWorth')tip.lines=[`目标：存活且净资产达${s.mode.goal.target}。`,GUIDE_COPY.intro[1]];return tip||result('roll','#actionBtn');}
 return s.phase==='end'?result('end','#actionBtn'):null;
}
export class Tutorial{
 constructor(root,storage){this.root=root;this.storage=storage;this.preferences=readTutorial(storage);this.node=root.ownerDocument.createElement('aside');this.node.className='tutorial-tip';this.node.setAttribute('aria-label','新手提示');this.node.hidden=true;this.node.innerHTML='<p id="tutorialText" class="tutorial-text" role="status" aria-live="polite" aria-atomic="true"></p><div class="tutorial-actions"><button type="button" data-tutorial="next">知道了</button><button type="button" data-tutorial="skip">跳过全部</button><button type="button" data-tutorial="disable">不再显示</button></div>';this.node.addEventListener('click',e=>{const b=e.target.closest('[data-tutorial]');if(!b)return;e.stopPropagation();const focus=this.target;this.choose(b.dataset.tutorial);this.sync(this.game,this.context);if(focus?.isConnected&&!focus.disabled&&!focus.closest('[inert]'))focus.focus({preventScroll:true});});}
 write(){try{this.storage.setItem(TUTORIAL_KEY,JSON.stringify(this.preferences));return true;}catch{return false;}}
 choose(action){if(action==='skip')this.preferences.seen=[...GUIDE_IDS];if(action==='disable')this.preferences.disabled=true;this.clear();return this.write();}
 reset(){this.preferences=tutorialPreferences(null);this.clear();return this.write();}
 clear(){if(this.target){this.target.classList.remove('tutorial-target');const ids=(this.target.getAttribute('aria-describedby')||'').split(/\s+/).filter(id=>id&&id!=='tutorialText');if(ids.length)this.target.setAttribute('aria-describedby',ids.join(' '));else this.target.removeAttribute('aria-describedby');}this.target=null;this.current=null;this.node.hidden=true;this.node.querySelector('p').replaceChildren();}
 sync(game,context){
  this.context=context;const changed=this.game!==game||this.seat!==game.s.current;
  if(changed){this.clear();this.pendingCards=false;this.pendingRent=false;this.count=game.player.cards.length;this.sequence=game.transfers.sequence;}
  this.game=game;this.seat=game.s.current;const p=game.player;
  if(context.started&&p.human&&!game.s.handoff){if(p.cards.length>this.count)this.pendingCards=true;if(game.transfers.after(this.sequence).some(t=>t.from===p.id&&t.to!==null&&t.kind==='fee'&&t.amount>0))this.pendingRent=true;}
  this.count=p.cards.length;this.sequence=game.transfers.sequence;
  const candidate=!this.preferences.disabled&&tutorialCandidate(game,{...context,seen:this.preferences.seen.filter(id=>id!==this.current?.id),cards:this.pendingCards||this.current?.id==='cards',rent:this.pendingRent||this.current?.id==='rent'});
  if(!candidate){this.clear();return;}
  const host=context.panel?this.root.querySelector('#sheetBody'):context.started?this.root.querySelector('#tutorialFloat'):this.root.querySelector('#tutorialHome');
  const target=(context.panel?host:this.root).querySelector(candidate.target);if(!host||!target||target.disabled||target.closest('[inert]')||!target.getClientRects().length){this.clear();return;}
  if(this.current?.id!==candidate.id||this.target!==target){this.clear();this.current=candidate;this.target=target;this.node.dataset.tutorialId=candidate.id;this.node.querySelector('p').replaceChildren(...candidate.lines.map(line=>{const span=this.root.ownerDocument.createElement('span');span.textContent=line;return span;}));target.classList.add('tutorial-target');target.setAttribute('aria-describedby',((target.getAttribute('aria-describedby')||'')+' tutorialText').trim());if(!this.preferences.seen.includes(candidate.id)){this.preferences.seen.push(candidate.id);this.write();}if(candidate.id==='cards')this.pendingCards=false;if(candidate.id==='rent')this.pendingRent=false;}
  if(this.node.parentElement!==host)host.prepend(this.node);this.node.hidden=false;
 }
}
