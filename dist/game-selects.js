import {localCanvasPoint} from './orientation.js';

export function logicalRect(rect,game,rotated){
 const points=[[rect.left,rect.top],[rect.right,rect.top],[rect.left,rect.bottom],[rect.right,rect.bottom]].map(([x,y])=>localCanvasPoint(x,y,game,rotated));
 const left=Math.min(...points.map(p=>p.x)),top=Math.min(...points.map(p=>p.y));return {left,top,right:Math.max(...points.map(p=>p.x)),bottom:Math.max(...points.map(p=>p.y)),width:Math.max(...points.map(p=>p.x))-left};
}
export function choicePlacement(anchor,width,height,count){
 const w=Math.min(Math.max(anchor.width,220),width-24),ideal=Math.min(count*44+12,height-24),below=height-anchor.bottom-12,above=anchor.top-12,down=below>=Math.min(160,ideal)||below>=above,h=ideal;
 return {left:Math.max(12,Math.min(anchor.left,width-w-12)),top:Math.max(12,Math.min(down?anchor.bottom+5:anchor.top-h-5,height-h-12)),width:w,height:h};
}
export function nextEnabled(options,index,step){for(let n=1;n<=options.length;n++){const i=(index+step*n+options.length*2)%options.length;if(!options[i].disabled)return i;}return -1;}
export function safeChoicePlacement(anchor,width,height,count,{top=0,right=0,bottom=0,left=0}={}){const p=choicePlacement({...anchor,left:anchor.left-left,top:anchor.top-top,bottom:anchor.bottom-top},width-left-right,height-top-bottom,count);return {...p,left:p.left+left,top:p.top+top};}

export class GameSelects{
 constructor(root){this.root=root;this.doc=root.ownerDocument;this.items=new Map();this.serial=0;
  this.layer=this.doc.createElement('div');this.layer.className='choice-layer';this.layer.hidden=true;this.list=this.doc.createElement('div');this.list.className='choice-list';this.list.setAttribute('role','listbox');this.layer.append(this.list);root.append(this.layer);
  this.layer.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(e.target===this.layer)this.close();});
  root.addEventListener('click',e=>{if(e.target.closest('.game-select,.choice-layer'))return;const control=e.target.closest('label')?.control;if(this.items.has(control)){e.preventDefault();this.open(this.items.get(control));}});
  root.addEventListener('scroll',e=>{if(!this.layer.contains(e.target))this.place();},true);window.addEventListener('gamelayoutchange',()=>this.place());
  this.observer=new MutationObserver(()=>this.sync());this.observer.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden','disabled','selected','label']});this.sync();
 }
 sync(){
  for(const [select]of this.items)if(!select.isConnected){if(this.active?.select===select)this.close(false);this.items.delete(select);}
  for(const select of this.root.querySelectorAll('select:not(.game-select-native)')){
   const labels=[...(select.labels||[])].map(label=>{const copy=label.cloneNode(true);copy.querySelectorAll('select,.game-select').forEach(n=>n.remove());return copy.textContent.trim();}).join(' '),wrapper=this.doc.createElement('span'),trigger=this.doc.createElement('button'),value=this.doc.createElement('span'),arrow=this.doc.createElement('span');
   wrapper.className='game-select';wrapper.dataset.selectId=select.id;trigger.type='button';trigger.className='choice-trigger';trigger.setAttribute('role','combobox');trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');value.className='choice-value';arrow.textContent='▾';arrow.setAttribute('aria-hidden','true');trigger.append(value,arrow);select.before(wrapper);wrapper.append(select,trigger);select.classList.add('game-select-native');select.tabIndex=-1;select.setAttribute('aria-hidden','true');
   const item={select,wrapper,trigger,value,label:select.getAttribute('aria-label')||labels||'选择选项',id:'game-choice-'+(++this.serial)};this.items.set(select,item);trigger.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();this.active===item?this.close():this.open(item);});trigger.addEventListener('keydown',e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();this.open(item);}});select.addEventListener('change',()=>this.sync());
  }
  for(const item of this.items.values()){
   const {select,wrapper,trigger,value,label}=item,text=select.selectedOptions[0]?.textContent||'请选择';if(value.textContent!==text)value.textContent=text;if(wrapper.hidden!==select.hidden)wrapper.hidden=select.hidden;if(trigger.disabled!==select.disabled)trigger.disabled=select.disabled;const aria=label+'：'+text;if(trigger.getAttribute('aria-label')!==aria)trigger.setAttribute('aria-label',aria);if(this.active===item&&(select.hidden||select.disabled))this.close(false);
  }
 }
 open(item){
  if(item.select.disabled||item.select.hidden)return;this.close(false);this.active=item;this.list.replaceChildren();this.list.id=item.id;item.trigger.setAttribute('aria-controls',item.id);item.trigger.setAttribute('aria-expanded','true');this.list.setAttribute('aria-label',item.label);
  const options=[...item.select.options];this.buttons=options.map((option,index)=>{const button=this.doc.createElement('button');button.type='button';button.setAttribute('role','option');button.setAttribute('aria-selected',String(index===item.select.selectedIndex));button.disabled=option.disabled||!!option.parentElement?.disabled;button.textContent=option.textContent;button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(button.disabled)return;item.select.selectedIndex=index;this.close();item.select.dispatchEvent(new Event('change',{bubbles:true}));this.sync();});button.addEventListener('keydown',e=>{if(['Escape','ArrowDown','ArrowUp','Home','End','Enter',' '].includes(e.key))e.stopPropagation();if(e.key==='Escape'){e.preventDefault();this.close();}else if(e.key==='Tab')this.close(false);else if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?nextEnabled(this.buttons,-1,1):e.key==='End'?nextEnabled(this.buttons,0,-1):nextEnabled(this.buttons,index,e.key==='ArrowDown'?1:-1);this.buttons[next]?.focus({preventScroll:true});this.buttons[next]?.scrollIntoView({block:'nearest'});}});return button;});this.list.append(...this.buttons);this.layer.hidden=false;
  this.place();const selected=this.buttons[item.select.selectedIndex],focus=selected&&!selected.disabled?selected:this.buttons.find(b=>!b.disabled);focus?.focus({preventScroll:true});if(focus)this.list.scrollTop=Math.max(0,focus.offsetTop-this.list.clientHeight/2);
 }
 place(){if(!this.active)return;const item=this.active;if(!item.trigger.isConnected){this.close(false);return;}const anchor=logicalRect(item.trigger.getBoundingClientRect(),this.root.getBoundingClientRect(),this.root.dataset.rotated==='true'),style=getComputedStyle(this.root),insets=Object.fromEntries([['top','t'],['right','r'],['bottom','b'],['left','l']].map(([edge,key])=>[edge,parseFloat(style.getPropertyValue('--safe-'+key))||0])),p=safeChoicePlacement(anchor,this.root.clientWidth,this.root.clientHeight,item.select.options.length,insets);Object.assign(this.list.style,{left:p.left+'px',top:p.top+'px',width:p.width+'px',maxHeight:p.height+'px'});}
 close(focus=true){const item=this.active;if(!item)return;this.active=null;item.trigger.setAttribute('aria-expanded','false');this.layer.hidden=true;if(focus&&item.trigger.isConnected)item.trigger.focus({preventScroll:true});}
}
