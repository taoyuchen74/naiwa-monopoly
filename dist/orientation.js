export function logicalSize(w,h,mode='auto'){const rotated=mode!=='auto'&&((mode==='landscape')!==(w>=h));return {width:rotated?h:w,height:rotated?w:h,rotated};}
export function safeInsets(insets,rotated=false){const {top,right,bottom,left}=insets;return rotated?{top:right,right:bottom,bottom:left,left:top}:{top,right,bottom,left};}
export function visibleFrame(win){const v=win.visualViewport,use=v&&Math.abs((v.scale||1)-1)<.01;return {width:use?v.width:win.innerWidth,height:use?v.height:win.innerHeight,left:use?v.offsetLeft||0:0,top:use?v.offsetTop||0:0};}
export function localCanvasPoint(x,y,r,rotated=false){return rotated?{x:y-r.top,y:r.right-x}:{x:x-r.left,y:y-r.top};}
export function canvasPoint(x,y,el){return localCanvasPoint(x,y,el.getBoundingClientRect(),document.getElementById('app')?.dataset.rotated==='true');}
export function mountGameOverlays(root){
 // Keep legacy or re-created dialogs in the same transformed coordinate space.
 for(const id of ['sheetBackdrop','sheet','toast','bootError']){
  const overlay=root.ownerDocument?.getElementById(id);
  if(overlay&&!root.contains(overlay))root.appendChild(overlay);
 }
}
export class GameOrientation{
 constructor(root,button,{notify=()=>{},resize=()=>{}}={}){Object.assign(this,{root,button,notify,resize,mode:'auto',rules:[]});
  const collect=list=>{for(const rule of list){if(rule.type===4&&/(width|height|orientation)/.test(rule.conditionText))this.rules.push({rule,condition:rule.conditionText});else if(rule.cssRules)collect(rule.cssRules);}};
  for(const sheet of document.styleSheets)try{collect(sheet.cssRules);}catch{}
  button.addEventListener('click',()=>this.toggle());window.addEventListener('resize',()=>this.apply());document.addEventListener('fullscreenchange',()=>this.apply());
  // Some phone browsers report the new dimensions after the direction event.
  const directionChanged=()=>{this.apply();requestAnimationFrame(()=>this.apply());};
  window.addEventListener('orientationchange',directionChanged);
  window.screen?.orientation?.addEventListener?.('change',directionChanged);
  window.visualViewport?.addEventListener('resize',()=>this.apply());
  window.visualViewport?.addEventListener('scroll',()=>this.apply());
  const editingTarget=e=>e.target?.matches?.('input:not([type=checkbox]):not([type=range]):not([type=file]),textarea,[contenteditable=true]');
  document.addEventListener('focusin',e=>{if(editingTarget(e))this.apply();});document.addEventListener('focusout',e=>{if(editingTarget(e))requestAnimationFrame(()=>this.apply());});
  this.apply();
 }
 apply(){mountGameOverlays(this.root);const frame=visibleFrame(window),editing=!!this.root.ownerDocument?.activeElement?.matches('input:not([type=checkbox]):not([type=range]):not([type=file]),textarea,[contenteditable=true]');
  if(!editing||!this.layoutViewport||this.layoutViewport.width!==window.innerWidth)this.layoutViewport={width:window.innerWidth,height:window.innerHeight};
  const layout=logicalSize(this.layoutViewport.width,this.layoutViewport.height,this.mode),s={width:layout.rotated?frame.height:frame.width,height:layout.rotated?frame.width:frame.height,rotated:layout.rotated};this.root.dataset.rotated=String(s.rotated);this.root.dataset.layout=layout.width>=layout.height?'landscape':'portrait';this.root.dataset.keyboard=String(editing&&this.layoutViewport.height-frame.height>100);this.root.style.setProperty('--game-vh',s.height/100+'px');this.root.style.setProperty('--game-vw',s.width/100+'px');
  Object.assign(this.root.style,{position:'fixed',left:frame.left+(s.rotated?frame.width:0)+'px',top:frame.top+'px',width:s.width+'px',height:s.height+'px',minHeight:'0',transform:s.rotated?'rotate(90deg)':'',transformOrigin:'0 0'});
  for(const {rule,condition} of this.rules){if(!s.rotated){rule.media.mediaText=condition;continue;}const virtual=condition.replace(/\(orientation:\s*(portrait|landscape)\)/g,(_,o)=>((s.width>=s.height)===(o==='landscape'))?'(min-width: 0px)':'(max-width: 0px)').replace(/\((max|min)-(width|height):\s*([\d.]+)px\)/g,(_,bound,axis,n)=>((bound==='max'?s[axis]<=+n:s[axis]>=+n)?'(min-width: 0px)':'(max-width: 0px)'));rule.media.mediaText=window.matchMedia(virtual).matches?'all':'not all';}
  const landscape=layout.width>=layout.height;this.button.textContent=landscape?'竖屏':'横屏';this.button.setAttribute('aria-label',landscape?'切换竖屏':'切换横屏');this.button.title=this.button.getAttribute('aria-label');this.button.setAttribute('aria-pressed',String(this.mode!=='auto'));requestAnimationFrame(()=>{this.resize();window.dispatchEvent(new Event('gamelayoutchange'));if(editing)this.root.ownerDocument.activeElement?.scrollIntoView?.({block:'nearest',inline:'nearest'});});
 }
 async toggle(){const s=logicalSize(innerWidth,innerHeight,this.mode);this.mode=s.width>=s.height?'portrait':'landscape';this.apply();
  // Layout fallback works immediately, including local files and denied fullscreen.
  if(matchMedia('(pointer: coarse)').matches){try{if(!document.fullscreenElement&&document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();await screen.orientation?.lock?.(this.mode);}catch{}this.apply();}
  this.notify(this.mode==='landscape'?'已切换横屏，横握手机游玩；再点可回竖屏。':'已切换竖屏。');
 }
}
