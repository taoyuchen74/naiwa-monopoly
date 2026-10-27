const selector='button,input:not([type=hidden]),select,textarea,a[href],area[href],summary,[tabindex],[contenteditable]:not([contenteditable=false]),audio[controls],video[controls],iframe';
export function deepActive(doc){let node=doc.activeElement;while(node?.shadowRoot?.activeElement)node=node.shadowRoot.activeElement;return node;}
export function composedContains(root,node){for(let n=node;n;n=n.parentNode||n.host)if(n===root)return true;return false;}
function available(node){if(!node.isConnected||node.matches(':disabled'))return false;for(let parent=node;parent;parent=parent.parentElement||parent.getRootNode()?.host)if(parent.hidden||parent.inert||parent.getAttribute('aria-hidden')==='true')return false;const style=getComputedStyle(node);return style.visibility!=='hidden'&&style.visibility!=='collapse'&&node.getClientRects().length>0;}
export function tabStops(root){const nodes=[];const visit=parent=>{for(const node of parent.children||[]){if(node.matches(selector)&&(node.tabIndex>=0||(node.isContentEditable&&!node.hasAttribute('tabindex')))&&available(node)&&!node.shadowRoot?.delegatesFocus)nodes.push(node);if(node.shadowRoot)visit(node.shadowRoot);visit(node);}};visit(root);
 return nodes.filter(node=>{if(node.type!=='radio'||!node.name)return true;const group=nodes.filter(other=>other.type==='radio'&&other.name===node.name&&other.form===node.form&&other.getRootNode()===node.getRootNode());return node===(group.find(other=>other.checked)||group[0]);}).sort((a,b)=>(a.tabIndex>0?a.tabIndex:Infinity)-(b.tabIndex>0?b.tabIndex:Infinity));
}
function remember(node){return {node,id:node?.id,player:node?.dataset?.playerId};}
export class ModalFocus{
 constructor(sheet,{onEscape=()=>{},fallback=()=>null}={}){this.sheet=sheet;this.doc=sheet.ownerDocument;this.onEscape=onEscape;this.fallback=fallback;this.background=new Map();this.epoch=0;
  this.doc.addEventListener('keydown',e=>this.keydown(e));
  this.doc.addEventListener('focusin',()=>{if(this.active&&!composedContains(this.sheet,deepActive(this.doc)))this.first();},true);
  this.observer=new MutationObserver(()=>{if(this.active)this.isolate();});
 }
 isolate(){for(let node=this.sheet;node.parentElement;node=node.parentElement){for(const sibling of node.parentElement.children){if(sibling===node||sibling.id==='sheetBackdrop')continue;if(!this.background.has(sibling))this.background.set(sibling,sibling.inert);sibling.inert=true;}if(node.parentElement===this.doc.body)break;}}
 first(){const body=this.sheet.querySelector('#sheetBody'),preferred=body?.querySelector('[data-modal-autofocus]'),target=preferred&&available(preferred)?preferred:tabStops(body||this.sheet)[0]||this.sheet.querySelector('#sheetTitle');target?.focus({preventScroll:true});}
 open(){if(!this.active)this.trigger=remember(deepActive(this.doc));this.active=true;const epoch=++this.epoch;this.isolate();this.observer.observe(this.doc.body,{childList:true,subtree:true});queueMicrotask(()=>{if(this.active&&epoch===this.epoch)this.first();});}
 close(){this.active=false;const epoch=++this.epoch,trigger=this.trigger;this.observer.disconnect();for(const [node,inert]of this.background)node.inert=inert;this.background.clear();
  queueMicrotask(()=>{if(this.active||epoch!==this.epoch)return;let target=trigger?.node;if(!target||!available(target)){target=trigger?.id?this.doc.getElementById(trigger.id):null;if(!target&&trigger?.player!==undefined)target=this.doc.querySelector('[data-player-id="'+trigger.player+'"]');}if(!target||!available(target))target=this.fallback();if(target&&available(target))target.focus({preventScroll:true});});
 }
 keydown(e){if(!this.active||this.sheet.hidden||e.isComposing||e.defaultPrevented)return;
  if(e.key==='Escape'){e.preventDefault();this.onEscape();return;}
  if(e.key!=='Tab')return;e.preventDefault();const nodes=tabStops(this.sheet),current=deepActive(this.doc),index=nodes.indexOf(current);if(!nodes.length){this.first();return;}const target=nodes[index<0?(e.shiftKey?nodes.length-1:0):(index+(e.shiftKey?-1:1)+nodes.length)%nodes.length];target.focus({preventScroll:true});target.scrollIntoView?.({block:'nearest',inline:'nearest'});
 }
}
