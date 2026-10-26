import {animateVehicle} from './vehicles.js';
import {diceRollStarted} from './dice.js';
import {structuralChange} from './building-reveal.js';
import {LIGHTING,lightingMode} from './lighting.js';
import {HighQuality} from './high-quality.js';
import {animateSurfaces,setSurfaceLighting} from './surfaces.js';
import {CITY_TILES} from './maps.js';
import {canvasPoint} from './orientation.js';
import * as THREE from './vendor/three.module.js';
import {CHARACTERS,GROUPS,POINT_STOPS} from './content.js';
import {ball,box,mesh,cylinder,tube,sign,material,disposeUnique,batchStatic,signTexture} from './render-kit.js';
import {characterModel,animateCharacter,vehicleModel} from './characters.js';
import {propertyBuilding,landmark,townTree} from './buildings.js';
import {EffectSystem} from './effects.js';
import {animationSpeed} from './pacing.js';
import {MapGestures} from './map-gestures.js';
import {buildIsland,plotPosition} from './island.js';
import {roofLabelAnchor} from './world-labels.js';
export {characterModel} from './characters.js';
const lotPosition=plotPosition;
function label(text,color='#35525c',size=256){const c=document.createElement('canvas');c.width=size;c.height=80;const x=c.getContext('2d');x.font='bold 28px "Microsoft YaHei",sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillStyle=color;x.fillText(text,size/2,40);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
export class IslandScene{
 constructor(container,onTile,tiles=CITY_TILES){this.tiles=tiles;this.el=container;this.onTile=onTile;this.follow=false;this.zoom=1;this.offset=new THREE.Vector3();this.quality='';this.paused=false;this.last=0;this.time=0;this.game=null;this.showcase=null;this.reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#b7d3dc');this.scene.fog=new THREE.Fog('#b7d3dc',70,130);
  this.camera=new THREE.OrthographicCamera(-19,19,13,-13,.1,180);this.camera.position.set(28,30,36);this.camera.lookAt(0,0,0);
  this.renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(Math.max(devicePixelRatio,1.5),2.5));this.renderer.shadowMap.enabled=true;this.renderer.localClippingEnabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.94;container.append(this.renderer.domElement);
  this.renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();if(this.contextLost)return;this.cancelGestures();this.contextLost=true;this.pausedBeforeContextLoss=this.paused;this.paused=true;this.fx?.clear();container.dispatchEvent(new CustomEvent('renderlost'));});
  this.renderer.domElement.addEventListener('webglcontextrestored',()=>this.restoreRendering());
  this.hemi=new THREE.HemisphereLight('#fff3dc','#6f8e9e',.95);this.scene.add(this.hemi);const sun=new THREE.DirectionalLight('#fff2dc',3.2);sun.position.set(-10,30,18);sun.castShadow=true;sun.shadow.mapSize.set(4096,4096);Object.assign(sun.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:.5,far:70});sun.shadow.normalBias=.025;sun.shadow.bias=-.0001;this.scene.add(sun);this.sun=sun;
  const fill=new THREE.DirectionalLight('#b4d9ef',1);fill.position.set(15,8,-10);this.scene.add(fill);this.fill=fill;
  this.highQuality=new HighQuality(this.renderer,this.scene,this.camera);this.ray=new THREE.Raycaster();this.pointer=new THREE.Vector2();this.tileMeshes=[];this.plotMeshes=new Map();this.blockMeshes=new Map();this.pawns=[];this.pickupMeshes=new Map();this.smokestacks=[];this.buildingBadges=[];this.floats=[];this.lights=[];this.pointLights=[];this.lightingKey='';this.world=new THREE.Group();this.scene.add(this.world);this.fx=new EffectSystem(this.world,{reduced:this.reduced,onDiceState:(rolling,impact,active)=>container.dispatchEvent(new CustomEvent('dicerollchange',{detail:{rolling,impact,active}}))});
  this.build();this.turnMarker=mesh(this.world,new THREE.RingGeometry(.58,.7,48),new THREE.MeshBasicMaterial({color:'#ffe289',side:THREE.DoubleSide,transparent:true,opacity:.9,depthWrite:false}),[0,.23,0]);this.turnMarker.rotation.x=-Math.PI/2;this.turnMarker.castShadow=false;this.turnMarker.visible=false;
  this.selection=new THREE.Group();const plate=mesh(this.selection,new THREE.PlaneGeometry(2.05,1.72),new THREE.MeshBasicMaterial({color:'#ffe189',transparent:true,opacity:.17,depthWrite:false,depthTest:false}),[0,.02,0]);plate.rotation.x=-Math.PI/2;plate.castShadow=false;this.selectionPlate=plate;const corners=[];for(const x of [-1.03,1.03])for(const z of [-.87,.87]){corners.push(x,.035,z,x-Math.sign(x)*.35,.035,z,x,.035,z,x,.035,z-Math.sign(z)*.35);}this.selection.add(new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(corners,3)),new THREE.LineBasicMaterial({color:'#ffca4f',depthTest:false})));this.selectionLabel=new THREE.Sprite(new THREE.SpriteMaterial({transparent:true,depthTest:false,depthWrite:false}));this.selectionLabel.renderOrder=6;this.selectionLabel.scale.set(3.1,.65,1);this.selectionLabel.position.y=.65;this.selection.add(this.selectionLabel);this.selection.visible=false;this.selection.renderOrder=4;this.world.add(this.selection);this.controls();this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(container);this.resize();this.animate=this.animate.bind(this);this.raf=requestAnimationFrame(this.animate);
 }
 restoreRendering(){if(!this.contextLost)return;const game=this.game,quality=game?.s.options.quality||this.quality||'auto';
  try{this.highQuality?.dispose();this.highQuality=new HighQuality(this.renderer,this.scene,this.camera);this.sun.shadow.map?.dispose();this.sun.shadow.map=null;this.sun.shadow.mapPass?.dispose();this.sun.shadow.mapPass=null;this.sun.shadow.needsUpdate=true;
   this.contextLost=false;this.paused=!!this.pausedBeforeContextLoss;this.quality='';this.lightingKey='';this.setQuality(quality);this.applyLighting(game?.s.options.lighting||this.worldLighting);this.game=null;if(game)this.sync(game);this.resize();this.el.dispatchEvent(new CustomEvent('renderrestored'));
  }catch(error){this.contextLost=true;this.paused=true;console.warn('3D recovery unavailable; keeping the playable map',error);}
 }
 setMap(tiles){this.leaveStudio();this.fx.clear();this.world.remove(this.selection,this.turnMarker);disposeUnique(this.world);this.world.clear();this.tiles=tiles;this.game=null;this.rollState=null;this.lastMoney=null;this.tileMeshes=[];this.plotMeshes.clear();this.blockMeshes.clear();this.pawns=[];this.pickupMeshes.clear();this.smokestacks=[];this.buildingBadges=[];this.floats=[];this.lights=[];this.pointLights=[];this.lightingKey='';this.build();this.world.add(this.selection,this.turnMarker);this.clearSelection();this.home();}
 build(){buildIsland(this);}
 tag(root,id){root.userData.tile=id;root.traverse(o=>{if(o.isMesh)o.userData.tile=id;});}
 lamp(x,z){const g=new THREE.Group();cylinder(g,'#4e6366',[0,.95,0],.028,.05,1.5);box(g,'#597375',[0,1.72,0],[.23,.09,.23]);const lantern=box(g,'#ffe8a8',[0,1.59,0],[.15,.23,.15]);g.position.set(x,.2,z);this.world.add(g);this.lights.push(lantern);const light=new THREE.PointLight('#ffc779',0,4.5,2);light.position.set(0,1.5,0);g.add(light);this.pointLights.push(light);}
 sync(game){if(this.contextLost){this.game=game;return;}if(this.tiles!==game.tiles)this.setMap(game.tiles);const fresh=this.game!==game;this.game=game;const s=game.s;if(this.selectionMode==='nav'&&this.navTurn!==`${s.round}:${s.current}`)this.clearSelection();
  if(fresh){while(this.pawns.length>s.players.length){const pawn=this.pawns.pop();this.world.remove(pawn);disposeUnique(pawn);}this.clearSelection();this.fx.clear();for(const entry of this.plotMeshes.values()){this.world.remove(entry.model);disposeUnique(entry.model);}this.plotMeshes.clear();for(const block of this.blockMeshes.values()){this.world.remove(block);disposeUnique(block);}this.blockMeshes.clear();}
  for(const p of s.players){let pawn=this.pawns[p.id];if(!pawn||pawn.userData.id!==p.character){if(pawn){this.world.remove(pawn);disposeUnique(pawn);}pawn=characterModel(p.character);pawn.scale.setScalar(.56);const t=this.tiles[p.pos];pawn.position.set(t.x,.24,t.z);this.world.add(pawn);this.pawns[p.id]=pawn;}
   if(fresh){const t=this.tiles[p.pos];pawn.position.set(t.x+(p.id-(s.players.length-1)/2)*.4,.24,t.z-.15+(p.id%2)*.22);pawn.rotation.y=.45;pawn.scale.setScalar(p.alive?.56:.001);}
   if(!fresh&&this.lastMoney?.[p.id]!==undefined&&this.lastMoney[p.id]!==p.money)this.fx.money(pawn.position,p.money-this.lastMoney[p.id]);
   if(pawn.userData.vehicleId!==p.vehicle){const old=pawn.getObjectByName('vehicle');if(old){pawn.remove(old);disposeUnique(old);}if(p.vehicle){const v=vehicleModel(p.vehicle);v.position.y=-.1;pawn.add(v);}pawn.userData.vehicleId=p.vehicle;pawn.userData.body.position.y=p.vehicle?.3:0;}
  }
  for(const t of this.tiles.filter(t=>t.kind==='property')){const o=s.ownership[t.id],signature=o?`${o.player}:${o.level}:${o.buildingType||'legacy'}`:'empty';const previous=this.plotMeshes.get(t.id);if(previous?.signature===signature)continue;
   const color=o?CHARACTERS.find(c=>c.id===s.players[o.player].character).estateColor:'#acb18d';const model=propertyBuilding({...t,buildingType:o?.buildingType},o?.level||0,color,!!o);model.position.copy(lotPosition(t));model.rotation.y=t.facing;this.tag(model,t.id);this.world.add(model);let labelModel=model;
   if(o){cylinder(model,'#587070',[.85,.5,-.6],.018,.018,.85,8);box(model,color,[.98,.81,-.6],[.28,.17,.025]);}
   if(previous){const old=previous.model;this.fx.finish(old);const removeOld=()=>{this.world.remove(old);disposeUnique(old);};if(!fresh&&structuralChange(previous,o)){const demolish=!o||o.level<previous.level;this.fx.spawn(demolish?'demolish':'build',old.position,color);this.fx.spawn('dust',old.position);
    if(demolish){model.visible=this.reduced||!o?.level;const endHeight=o?.level?new THREE.Box3().setFromObject(model).max.y:undefined;this.fx.transition(old,'remove',()=>{removeOld();model.visible=true;if(this.selectedTile===t.id)this.liftSelectionLabel();},{endHeight});if(old.parent)labelModel=old;}
    else{const startHeight=previous.level>0&&previous.buildingType===(o?.buildingType||'legacy')?new THREE.Box3().setFromObject(old).max.y:undefined;removeOld();this.fx.transition(model,'grow',undefined,{startHeight});if(o?.level>0)this.fx.construction(model);}
   }else removeOld();}

   this.plotMeshes.set(t.id,{model,signature,level:o?.level||0,buildingType:o?.buildingType||'legacy'});if(this.selectedTile===t.id)this.liftSelectionLabel(labelModel);
  }
  for(const [id]of Object.entries(s.blocks))if(!this.blockMeshes.has(id)){const t=this.tiles[id],g=new THREE.Group();for(const x of [-.4,.4])box(g,'#f4dcac',[x,.45,0],[.07,.55,.07]);box(g,'#c76f51',[0,.6,0],[1.15,.19,.13]);for(const x of [-.4,0,.4]){const bar=box(g,'#f1dfb1',[x,.61,.07],[.15,.2,.02]);bar.rotation.z=-.35;}g.position.set(t.x,.2,t.z);this.world.add(g);this.blockMeshes.set(id,g);this.fx.spawn('build',g.position,'#d7b871');}
  for(const [id,g]of this.blockMeshes)if(s.blocks[id]===undefined){this.world.remove(g);this.blockMeshes.delete(id);this.fx.spawn('demolish',g.position,'#c77956');disposeUnique(g);}
  for(const id of POINT_STOPS){let token=this.pickupMeshes.get(id);if(!token){token=new THREE.Group();cylinder(token,'#f7cc54',[0,.58,0],.24,.24,.08,32).rotation.x=Math.PI/2;const badge=sign(token,'10',[0,.58,.05],.38,.23,{background:'#f7cc54',color:'#80551f',width:96,height:64});token.position.set(this.tiles[id].x,.24,this.tiles[id].z);this.world.add(token);this.pickupMeshes.set(id,token);}token.visible=s.pickups?.[id]===undefined;}
  this.setQuality(s.options.quality);this.applyLighting(s.options.lighting);
  if(!fresh&&diceRollStarted(this.rollState,s))this.fx.rollDice(s.dice,this.pawns[s.current].position,game.char().estateColor);this.rollState={phase:s.phase,current:s.current,round:s.round};
  this.lastMoney=s.players.map(p=>p.money);
 }
 applyLighting(requested){this.worldLighting=lightingMode(requested);const key=this.studio?'studio':this.worldLighting;if(this.lightingKey===key)return;this.lightingKey=key;const p=LIGHTING[this.studio?'day':key];this.hemi.color.set(p.hemi);this.hemi.groundColor.set(p.ground);this.hemi.intensity=p.ambient;this.sun.color.set(p.sun);this.sun.intensity=p.power;this.sun.position.set(...p.position);this.fill.color.set(p.fill);this.fill.intensity=p.fillPower;this.scene.environmentIntensity=p.environment;this.renderer.toneMappingExposure=p.exposure;this.highQuality.bloom.strength=p.bloom;this.highQuality.bloom.threshold=p.threshold;this.scene.background.set(this.studio?'#dedccc':p.sky);this.scene.fog.color.copy(this.scene.background);for(const light of this.pointLights)light.intensity=this.studio?0:p.lamps;for(const lantern of this.lights)lantern.material.emissiveIntensity=.55+p.lamps*.25;setSurfaceLighting(this.studio?'day':key);}
 showTransfer(receipt,done){if(this.contextLost)return false;const from=this.pawns[receipt.from],to=this.pawns[receipt.to];return from&&to?this.fx.transfer(from.position,to.position,receipt.amount,done):false;}
 setQuality(q){if(this.quality===q)return;this.quality=q;this.renderer.setPixelRatio(q==='low'?1:Math.min(Math.max(devicePixelRatio,1.5),2.5));this.renderer.shadowMap.enabled=q!=='low';this.sun.shadow.mapSize.set(q==='low'?512:4096,q==='low'?512:4096);this.highQuality?.resize(this.el.clientWidth,this.el.clientHeight,this.renderer.getPixelRatio());}
 resize(){const w=this.el.clientWidth,h=this.el.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h,false);this.highQuality?.resize(w,h,this.renderer.getPixelRatio());this.aspect=w/h;if(this.follow)this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45;this.updateCamera();if(this.paused)this.renderStill();}
 updateCamera(){const span=this.studio?Math.max(2.3,1.95/this.aspect)/this.studio.zoom:Math.max(13.8,23/this.aspect)/this.zoom;this.camera.left=-span*this.aspect;this.camera.right=span*this.aspect;this.camera.top=span;this.camera.bottom=-span;this.camera.updateProjectionMatrix();if(this.studio){this.camera.position.set(3.4,2.3,7);this.camera.lookAt(0,1.55,0);}else{this.camera.position.set(28+this.offset.x,30,36+this.offset.z);this.camera.lookAt(this.offset.x,0,this.offset.z);}}
 selectTile(id,mode='inspect'){const t=this.tiles[id];if(!t)return;this.selectedTile=id;this.selectionMode=mode;this.navTurn=this.game?`${this.game.s.round}:${this.game.s.current}`:'';this.selection.visible=true;this.selection.position.copy(t.kind==='property'?lotPosition(t):new THREE.Vector3(t.x,.23,t.z));this.selection.rotation.y=t.facing;this.selection.scale.set(t.kind==='property'?1:.8,1,t.kind==='property'?1:.72);this.selectionPlate.material.color.set(mode==='buy'?'#ffd65a':'#fff0a8');this.selectionLabel.material.map?.dispose();this.selectionLabel.material.map=signTexture(mode==='buy'?`待售 · ${t.price} 奶币`:t.name,{background:mode==='buy'?'#ffdfa0':'#fff0cb',color:'#674324',width:320,height:72});this.selectionLabel.material.needsUpdate=true;this.selectionLabel.userData.tile=id;this.liftSelectionLabel();this.el.dataset.selectedTile=String(id);}
 liftSelectionLabel(model){
  model??=this.plotMeshes.get(this.selectedTile)?.model||this.tileMeshes.find(o=>o.isGroup&&o.userData.tile===this.selectedTile);
  if(model&&!model.userData.vacant){this.selection.updateWorldMatrix(true,false);this.selectionLabel.position.copy(this.selection.worldToLocal(roofLabelAnchor(model)));}
  else this.selectionLabel.position.set(0,.65,0);
 }
 updateLabelVisibility(){for(const badge of this.buildingBadges)badge.visible=this.zoom>1.3&&!this.showcase&&!(this.selection.visible&&badge.userData.tile===this.selectedTile);}
 pickTile(x,y){
  if(this.studio||this.contextLost)return null;
  const c=this.renderer.domElement;if(x<0||y<0||x>c.clientWidth||y>c.clientHeight)return null;
  this.camera.updateMatrixWorld(true);this.world.updateMatrixWorld(true);this.updateLabelVisibility();
  this.pointer.set(x/c.clientWidth*2-1,-y/c.clientHeight*2+1);this.ray.setFromCamera(this.pointer,this.camera);
  // Labels render above geometry, so their visible hit targets take precedence too.
  const selected=this.selection.visible&&this.selectionLabel.visible?this.ray.intersectObject(this.selectionLabel,false)[0]:null;
  if(selected&&Number.isInteger(selected.object.userData.tile))return selected.object.userData.tile;
  const labels=this.buildingBadges.filter(b=>b.visible),label=this.ray.intersectObjects(labels,false)[0];
  if(label&&Number.isInteger(label.object.userData.tile))return label.object.userData.tile;
  const roots=[...this.tileMeshes,...[...this.plotMeshes.values()].filter(v=>v.model.visible).map(v=>v.model)];
  const hit=this.ray.intersectObjects(roots,true).find(h=>Number.isInteger(h.object.userData.tile));return hit?.object.userData.tile??null;
 }
 clearSelection(){this.selectedTile=null;this.selection.visible=false;delete this.el.dataset.selectedTile;}
 focusTile(id){if(!this.tiles[id]||this.studio)return;this.follow=false;this.focusTarget=this.tiles[id].kind==='property'?lotPosition(this.tiles[id]):new THREE.Vector3(this.tiles[id].x,0,this.tiles[id].z);this.focusTarget.y=0;this.focusZoom=this.aspect<.8?2.6:2.1;this.selectTile(id,'nav');this.cameraChanged();}
 isMoving(){if(this.contextLost||!this.game||this.studio)return false;return this.game.s.players.some(p=>{const t=this.tiles[p.pos],pawn=this.pawns[p.id];return pawn&&Math.hypot(pawn.position.x-(t.x+(p.id-(this.game.s.players.length-1)/2)*.4),pawn.position.z-(t.z-.15+(p.id%2)*.22))>.075;});}
 drawFrame(){this.updateLabelVisibility();this.fx.anchorDice(this.camera,this.aspect<.8);this.renderer.info.autoReset=false;this.renderer.info.reset();if(this.quality==='low')this.renderer.render(this.scene,this.camera);else this.highQuality.render();}
 renderStill(){if(!this.contextLost&&!this.renderer.getContext().isContextLost()){this.updateCamera();this.drawFrame();}}
 cameraChanged(){this.el.dispatchEvent(new CustomEvent('camerachange',{detail:{follow:this.follow}}));}
 zoomBy(factor){if(this.studio){this.studio.zoom=Math.max(.65,Math.min(2.5,this.studio.zoom*factor));}else{this.zoom=Math.max(.65,Math.min(3.3,this.zoom*factor));this.followZoom=this.zoom;}this.updateCamera();}
 cancelGestures(){const c=this.renderer.domElement,ids=[...(this.gestures?.points.keys()||[])];this.gestures?.reset();for(const id of ids)try{if(c.hasPointerCapture(id))c.releasePointerCapture(id);}catch{}}
 controls(){const c=this.renderer.domElement;c.style.touchAction='none';this.gestures=new MapGestures({
  isStudio:()=>!!this.studio,turn:dx=>{this.studio.yaw+=dx*.012;this.studio.manual=true;},zoom:factor=>this.zoomBy(factor),
  pan:(dx,dy)=>{this.follow=false;this.focusTarget=null;const units=(this.camera.top-this.camera.bottom)/Math.max(1,c.clientHeight);this.offset.x=Math.max(-25,Math.min(25,this.offset.x-(dx*.789+dy*1.118)*units));this.offset.z=Math.max(-22,Math.min(22,this.offset.z+(dx*.614-dy*1.437)*units));this.updateCamera();this.cameraChanged();},
  tap:(x,y)=>{const id=this.pickTile(x,y);if(Number.isInteger(id))this.onTile(id);}
 });
 const cancel=()=>this.cancelGestures();window.addEventListener('gamelayoutchange',cancel);window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
 c.addEventListener('pointerdown',e=>{const p=canvasPoint(e.clientX,e.clientY,c);this.gestures.down(e.pointerId,p.x,p.y);c.setPointerCapture(e.pointerId);});c.addEventListener('pointermove',e=>{const p=canvasPoint(e.clientX,e.clientY,c);this.gestures.move(e.pointerId,p.x,p.y);});c.addEventListener('pointerup',e=>{const p=canvasPoint(e.clientX,e.clientY,c);this.gestures.up(e.pointerId,p.x,p.y);});for(const type of ['pointercancel','lostpointercapture'])c.addEventListener(type,e=>this.gestures.cancel(e.pointerId));c.addEventListener('wheel',e=>{e.preventDefault();this.zoomBy(e.deltaY<0?1.1:.91);},{passive:false});
 }
 followPlayer(){this.clearSelection();this.follow=true;this.focusTarget=null;this.endPreview();this.followZoom=this.aspect<.8?2.6:this.aspect>1.9?1.7:1.45;this.cameraChanged();}
 home(){this.clearSelection();this.follow=false;this.focusTarget=null;this.endPreview();this.offset.set(0,0,0);this.zoom=1;this.updateCamera();this.cameraChanged();}
 focusLot(id){if(!this.tiles[id]||this.studio)return;this.follow=false;this.focusTarget=lotPosition(this.tiles[id]).multiplyScalar(.9);this.focusTarget.y=0;this.focusZoom=2.1;this.cameraChanged();}
 previewCharacter(){this.endPreview();}
 endPreview(){if(this.showcase){this.world.remove(this.showcase);disposeUnique(this.showcase);this.showcase=null;}this.hero.visible=true;}
 enterStudio(id){this.cancelGestures();if(this.studio)this.leaveStudio();const root=new THREE.Group(),model=characterModel(id);root.add(model);model.position.y=.15;cylinder(root,'#c7bfa5',[0,.04,0],1.2,1.3,.14,64);const floor=mesh(root,new THREE.PlaneGeometry(240,240),'#dfd9c7',[0,-.05,0]);floor.rotation.x=-Math.PI/2;this.scene.add(root);this.studio={root,model,yaw:.3,zoom:1,mode:'idle',manual:false};this.highQuality.studio(true);this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-5;this.sun.shadow.camera.right=this.sun.shadow.camera.top=5;this.sun.shadow.camera.updateProjectionMatrix();this.world.visible=false;this.scene.fog=new THREE.Fog('#dedccc',18,50);this.scene.background.set('#dedccc');this.applyLighting(this.worldLighting);this.updateCamera();}
 leaveStudio(){this.cancelGestures();if(!this.studio)return;this.scene.remove(this.studio.root);disposeUnique(this.studio.root);this.studio=null;this.highQuality.studio(false);this.sun.shadow.camera.left=this.sun.shadow.camera.bottom=-26;this.sun.shadow.camera.right=this.sun.shadow.camera.top=26;this.sun.shadow.camera.updateProjectionMatrix();this.world.visible=true;this.scene.fog=new THREE.Fog('#b7d3dc',70,130);this.scene.background.set('#b7d3dc');this.applyLighting(this.worldLighting);this.updateCamera();}
 animate(now){this.raf=requestAnimationFrame(this.animate);if(document.hidden||this.paused||now-this.last<16)return;const dt=Math.min(.06,(now-this.last)/1000||.033);this.last=now;this.time+=dt;const time=this.time;animateSurfaces(this.reduced?0:time,this.camera);const actionDt=dt*(this.studio?1:animationSpeed(this.game?.s.options.speed));this.actionTime=(this.actionTime??0)+actionDt;this.fx.update(actionDt);if(this.selection.visible)this.selectionPlate.material.opacity=this.reduced?.23:.22+Math.sin(time*3)*.06;
  if(this.studio){const st=this.studio;st.model.rotation.y=st.yaw+(st.manual?0:Math.sin(time*.25)*.25);animateCharacter(st.model,{time,moving:st.mode==='walk',mood:st.mode==='laugh'?'happy':null});this.drawFrame();return;}
  if(this.focusTarget){const ease=this.reduced?1:1-Math.exp(-3.2*dt);this.offset.lerp(this.focusTarget,ease);this.zoom+=(this.focusZoom-this.zoom)*ease;this.updateCamera();if(this.offset.distanceTo(this.focusTarget)<.02)this.focusTarget=null;}
  if(this.game){const s=this.game.s;for(const p of s.players){const pawn=this.pawns[p.id],tile=this.tiles[p.pos],target=new THREE.Vector3(tile.x+(p.id-(s.players.length-1)/2)*.4,.24,tile.z-.15+(p.id%2)*.22);const k=p.alive?.56:.001;pawn.scale.lerp(new THREE.Vector3(k,k,k),1-Math.exp(-5*actionDt));pawn.visible=pawn.scale.x>.015;const moving=pawn.position.distanceTo(target)>.06,vehicleX=pawn.position.x,vehicleZ=pawn.position.z;
    if(moving){const d=target.clone().sub(pawn.position);pawn.rotation.y=Math.atan2(d.x,d.z);pawn.position.lerp(target,this.reduced?1:1-Math.exp(-8*actionDt));pawn.position.y=this.reduced?.24:.24+Math.abs(Math.sin(this.actionTime*14))*.065;}else{pawn.position.copy(target);pawn.rotation.y+=(.45-pawn.rotation.y)*.04;}
    animateVehicle(pawn.getObjectByName('vehicle'),Math.hypot(pawn.position.x-vehicleX,pawn.position.z-vehicleZ)/Math.max(.001,pawn.scale.x),{reduced:this.reduced});
    animateCharacter(pawn,{time:(moving?this.actionTime:time)+p.id,moving,mood:s.current===p.id&&s.phase==='event'?s.notice?.mood:this.actionMood?.player===p.id&&this.actionMood.until>performance.now()?this.actionMood.mood:null,alive:p.alive});
   }const active=this.pawns[s.current];this.turnMarker.visible=!!active&&!this.showcase&&s.phase!=='finished';if(active){this.turnMarker.position.set(active.position.x,.23,active.position.z);this.turnMarker.material.color.set(CHARACTERS.find(c=>c.id===s.players[s.current].character).color);this.turnMarker.scale.setScalar(this.reduced?1:1+Math.sin(time*4)*.08);}if(this.follow&&active){this.offset.lerp(new THREE.Vector3(active.position.x,0,active.position.z),this.reduced?1:1-Math.exp(-2.2*actionDt));this.zoom+=(this.followZoom-this.zoom)*(this.reduced?1:1-Math.exp(-2.2*actionDt));this.updateCamera();}
  }
  for(const [id,token]of this.pickupMeshes)token.position.y=this.reduced?.24:.24+Math.sin(time*2+id)*.055;
  animateCharacter(this.hero,{time,mood:this.game?.s.phase==='event'?this.game.s.notice?.mood:null});if(this.showcase){animateCharacter(this.showcase,{time});this.showcase.rotation.y=.3+Math.sin(time*.4)*.18;}
  if(!this.reduced){for(const [i,b]of this.floats.entries()){b.position.y=-.45+Math.sin(time*1.1+i)*.035;b.rotation.z=Math.sin(time+i)*.015;}for(const [i,r]of this.ripples.entries())r.scale.x=1+Math.sin(time*.8+i)*.08;
   for(const [i,j]of this.waterJets.entries())j.scale.y=1+Math.sin(time*3+i)*.035;
   if(Math.floor(time*2)!==this.lastSmoke){this.lastSmoke=Math.floor(time*2);if(this.quality!=='low')for(const p of this.smokestacks)this.fx.spawn('dust',new THREE.Vector3(p.x,p.y,p.z),'#d3d3c2');}
  }
  this.drawFrame();this.el.dataset.drawCalls=String(this.renderer.info.render.calls);this.el.dataset.triangles=String(this.renderer.info.render.triangles);this.el.dataset.effects=String(this.fx.items.length);
 }
}
