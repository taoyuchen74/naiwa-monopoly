import {MAP_DATA} from './maps.js';
import {parseMap,TILE_KINDS,MAX_MAP_BYTES} from './map-schema.js';
import {EVENTS} from './content.js';
import {Game} from './engine.js';
import {encodeSave} from './save-schema.js';
import {SAVE_KEY} from './save-repository.js';
const $=id=>document.getElementById(id),clone=x=>JSON.parse(JSON.stringify(x));
let draft=clone(MAP_DATA[2]),selected=0;
const fields=['mapId','mapName','description','cash','rounds','goal','target','points'];
function notice(text){$('notice').textContent=text;}
function valid(){return parseMap(draft);}
function check(){try{const m=valid();$('validation').textContent='校验通过 · '+m.tiles.length+' 格 · '+m.branches.length+' 条支路';for(const id of ['play','export','share'])$(id).disabled=false;}catch(e){$('validation').textContent='尚不能试玩或导出：'+e.message;for(const id of ['play','export','share'])$(id).disabled=true;}draw();}
function svg(name,attributes,text){const node=document.createElementNS('http://www.w3.org/2000/svg',name);for(const [key,value]of Object.entries(attributes))node.setAttribute(key,String(value));if(text!==undefined)node.textContent=text;return node;}
function draw(){
 const root=$('preview');root.replaceChildren();const defs=svg('defs',{}),marker=svg('marker',{id:'arrow',markerWidth:7,markerHeight:7,refX:6,refY:3,orient:'auto',markerUnits:'strokeWidth'});marker.append(svg('path',{d:'M0 0L6 3L0 6',fill:'#35564a'}));defs.append(marker);root.append(defs);
 const point=t=>({x:300+t.x*10.5,y:300+t.z*10.5});
 for(const t of draft.tiles){const a=point(t);for(const id of t.next){const dest=draft.tiles.find(x=>x.id===id);if(!dest)continue;const b=point(dest),d=Math.hypot(b.x-a.x,b.y-a.y)||1;root.append(svg('line',{x1:a.x,y1:a.y,x2:b.x-(b.x-a.x)/d*14,y2:b.y-(b.y-a.y)/d*14,stroke:'#35564a','stroke-width':2,'marker-end':'url(#arrow)'}));}}
 for(const t of draft.tiles){const p=point(t),circle=svg('circle',{cx:p.x,cy:p.y,r:12,fill:t.kind==='start'?'#f4d24e':selected===t.id?'#75bb9e':'#fff',stroke:'#2e5947','stroke-width':selected===t.id?3:1,role:'button',tabindex:0,'aria-label':'选择 '+t.id+' '+t.name});const choose=()=>{selected=t.id;tileForm();draw();};circle.onclick=choose;circle.onkeydown=e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();choose();}};root.append(circle,svg('text',{x:p.x,y:p.y+4,'text-anchor':'middle','font-size':11,'pointer-events':'none'},t.id));}
}
function tileForm(){
 $('tile').replaceChildren(...draft.tiles.map(t=>new Option(t.id+' · '+t.name,t.id)));$('tile').value=selected;
 const t=draft.tiles[selected];for(const [id,key]of [['tileName','name'],['tileDescription','description'],['kind','kind'],['price','price'],['group','group'],['x','x'],['z','z']])$(id).value=t[key];
 for(const id of ['next','side','merge']){$(id).replaceChildren(...(id==='next'?[]:[new Option('无','')]),...draft.tiles.map(t=>new Option(t.id+' · '+t.name,t.id)));}
 $('next').value=t.next[0];$('side').value=t.next[1]??'';$('merge').value=draft.branches.find(b=>b.from===selected)?.merge??'';
}
function fill(){
 for(const [id,value]of [['mapId',draft.id],['mapName',draft.name],['description',draft.description],['cash',draft.startingCash],['rounds',draft.victory.rounds],['goal',draft.victory.type],['target',draft.victory.target],['points',draft.pointStops.join(',')]])$(id).value=value;
 $('events').replaceChildren();for(const event of EVENTS){const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=event.id;input.checked=draft.eventPool.includes(event.id);label.append(input,document.createTextNode(event.name));input.onchange=()=>{draft.eventPool=[...$('events').querySelectorAll('input:checked')].map(x=>x.value);check();};$('events').append(label);}
 tileForm();check();
}
function updateMap(){draft.id=$('mapId').value;draft.name=$('mapName').value;draft.description=$('description').value;draft.startingCash=+$('cash').value;draft.victory={rounds:+$('rounds').value,type:$('goal').value,target:+$('target').value};draft.pointStops=$('points').value.trim()===''?[]:$('points').value.split(',').map(x=>x.trim()===''?NaN:Number(x));check();}
for(const id of fields)$(id).addEventListener('input',updateMap);
function updateTile(){const t=draft.tiles[selected];t.name=$('tileName').value;t.description=$('tileDescription').value;t.kind=$('kind').value;for(const key of ['price','group','x','z'])t[key]=+$(key).value;t.next=[+$('next').value];draft.branches=draft.branches.filter(b=>b.from!==selected);if($('side').value!==''){t.next.push(+$('side').value);draft.branches.push({from:selected,merge:$('merge').value===''?-1:+$('merge').value});}check();}
for(const id of ['tileName','tileDescription','kind','price','group','x','z','next','side','merge'])$(id).addEventListener('input',updateTile);
$('kind').replaceChildren(...TILE_KINDS.map(k=>new Option(k,k)));
$('tile').onchange=()=>{selected=+$('tile').value;tileForm();draw();};
$('copy').onclick=()=>{draft=clone(MAP_DATA[$('template').value]);draft.id='my-'+draft.id;draft.name='我的'+draft.name;selected=0;fill();notice('已复制模板。原内置地图未修改。');};
$('add').onclick=()=>{if(draft.tiles.length>=64){notice('最多64格。');return;}const from=draft.tiles[selected],to=draft.tiles[from.next[0]];if(!to){notice('请先修正主连接。');return;}const id=draft.tiles.length;draft.tiles.push({id,kind:'property',name:'新地产'+id,description:'',x:(from.x+to.x)/2,z:(from.z+to.z)/2,group:from.group,price:300,next:[to.id]});from.next[0]=id;selected=id;tileForm();check();};
$('import').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{if(f.size>MAX_MAP_BYTES)throw Error('地图文件不得超过128KiB');const m=parseMap(await f.text());draft=clone(m);selected=0;fill();notice('导入并校验成功，原草稿已替换。');}catch(error){notice('未导入，保留原草稿：'+error.message);}finally{e.target.value='';}};
function file(){const m=valid();return new File([JSON.stringify(m,null,2)],m.id+'.json',{type:'application/json'});}
function download(f){const url=URL.createObjectURL(f),a=document.createElement('a');a.href=url;a.download=f.name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('export').onclick=()=>{try{download(file());notice('已导出地图 JSON。文件不含任何脚本。');}catch(e){notice(e.message);}};
$('share').onclick=async()=>{try{const f=file();if(navigator.canShare?.({files:[f]})&&navigator.share){await navigator.share({files:[f],title:draft.name});notice('已交给系统分享。');}else{download(f);notice('当前浏览器不支持文件分享，已下载 JSON，可自行发送该文件。');}}catch(e){notice(e.name==='AbortError'?'已取消分享。':e.message);}};
$('play').onclick=()=>{try{const m=valid(),game=Game.create({customMap:m,seed:53,playerCount:3,talents:true});game.s.options={...game.s.options,speed:3,sound:false,music:false};localStorage.setItem('naiwa-map-trial:'+SAVE_KEY,JSON.stringify(encodeSave(game.s)));location.assign(new URL('./index.html?mapTrial=1',location.href));}catch(e){notice('试玩未开始：'+e.message);}};
fill();
