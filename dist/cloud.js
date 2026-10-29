import {CloudSync,cloudBackupKey} from './cloud-sync.js';
import {ModalFocus} from './modal-focus.js';
import {slotSummary,slotName} from './save-menu.js';
const $=id=>document.getElementById(id),sync=new CloudSync();
let busy=false,cancelDialog=null,lastTrigger=null,focusReturn=null;
$('cloudMain').addEventListener('click',e=>{const b=e.target.closest('button');if(b)lastTrigger=b;},true);
const modal=new ModalFocus($('confirm'),{onEscape:()=>cancelDialog?.(),fallback:()=>$('upload')});
const messages={CLOUD_DISABLED:'此站点未启用云存档。可返回单机，无需登录继续玩。',NETWORK_ERROR:'连接失败，未自动重发。上传若已提交，请用“重试待确认上传”确认原结果。退出若失败，服务器会话仍可能有效，联网后请重试退出。',LOGIN_REQUIRED:'请重新登录；本机存档仍然保留。',BAD_CREDENTIALS:'用户名或密码不正确。',USERNAME_TAKEN:'用户名已被使用。',INVALID_CREDENTIALS:'请检查用户名和密码长度。',ACCOUNT_CHANGED:'账号已在其他页面改变，请重新检查登录状态。没有继续此操作。',LOCAL_CHANGED:'本机存档已变化，请重新检查并确认。',LOCAL_SYNC_CORRUPT:'本机同步记录损坏，请先导出本机存档，再使用同步记录维护；原记录不会自动删除。',INVALID_LOCAL_SAVE:'来源槽位为空、损坏或版本不兼容，不能上传。',PENDING_UPLOAD:'先重试待确认上传，取得原请求结果后再上传新修改。',LOCAL_RECEIPT_FAILED:'云端已接收，但本机未能记录结果。请释放本机空间后重试待确认上传。',REQUEST_ID_REUSED:'请求标识与内容不一致，已拒绝。请保留副本并检查同步记录。',CLOUD_CORRUPT:'云端数据损坏或版本不兼容，未写入本机。可下载原始数据保留，或上传为独立新副本。',SAVE_LIMIT:'云端副本数量已达上限。请导出 JSON 保留。',REQUEST_LIMIT:'云端请求记录已达上限，请联系站点维护者。',RATE_LIMIT:'请求过于频繁，请稍后重试。',AUTH_BUSY:'登录服务繁忙，请稍后重试。',REMOTE_CHANGED:'云端列表已变化，请先刷新。'};
function status(text){if($('status').textContent!==text)$('status').textContent=text;}
function error(e){status(messages[e.code]||'操作未完成（'+(e.code||'本机存储不可用')+'）。原存档未被静默替换。');}
function network(){$('network').textContent=navigator.onLine?'网络可用；同步需手动确认。':'当前离线：可返回单机继续玩，联网后手动同步。';}
function time(value){return value?new Date(value).toLocaleString('zh-CN',{hour12:false}):'未知';}
function localText(state){if(!state)return '空槽位或数据不可读取';const s=slotSummary(state);return s.map+' · 第 '+s.round+' 轮 · '+s.players+' 人\n本机保存时间（仅供参考）：'+s.time;}
function cloudText(item){return item?(item.summary?item.summary.map+' · 第 '+item.summary.round+' 轮 · '+item.summary.players+' 人':'摘要不可用')+'\n服务器保存时间：'+time(item.serverSavedAt)+' · 版本 '+item.version+(item.status==='valid'?'':' · 数据损坏或版本不兼容'):'尚无云端副本';}
function button(label,run){const b=document.createElement('button');b.textContent=label;b.addEventListener('click',()=>act(run));return b;}
function download(blob,name){const a=document.createElement('a'),url=URL.createObjectURL(blob);a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function ask(title,lines,options){return new Promise(resolve=>{
 const dialog=$('confirm'),trigger=lastTrigger||document.activeElement;focusReturn=trigger;$('confirmTitle').textContent=title;$('comparison').replaceChildren();$('choices').replaceChildren();
 for(const text of lines){const p=document.createElement('p');p.textContent=text;$('comparison').append(p);}
 let settled=false;const finish=value=>{if(settled)return;settled=true;modal.close();dialog.close();cancelDialog=null;dialog.removeEventListener('cancel',cancel);if(trigger?.isConnected)trigger.focus();resolve(value);};
 const cancel=e=>{e.preventDefault();finish(null);};dialog.addEventListener('cancel',cancel);
 for(const [id,label]of [[null,'取消'],...options]){const b=document.createElement('button');b.textContent=label;b.onclick=()=>finish(id);$('choices').append(b);}
 cancelDialog=()=>finish(null);dialog.showModal();modal.open();$('choices').firstElementChild.focus();
});}
function localSummary(){try{const item=sync.repo.read($('source').value);$('localSummary').textContent=localText(item.state);}catch(e){error(e);}}
function render(){
 const user=sync.user;$('auth').hidden=!!user;$('account').hidden=!user;$('accountName').textContent=user?'当前账号：'+user.username:'';
 if(!user){$('cloudList').replaceChildren();$('target').replaceChildren(new Option('新建云端副本',''));return;}
 localSummary();try{$('retry').hidden=!sync.pending();}catch(e){$('retry').hidden=true;error(e);}
 const previous=$('target').value;$('target').replaceChildren(new Option('新建云端副本',''));$('cloudList').replaceChildren();
 for(const item of sync.items){
  $('target').append(new Option(item.label+' · 版本 '+item.version,item.id));
  const row=document.createElement('article'),h=document.createElement('h3'),p=document.createElement('p'),actions=document.createElement('div');row.dataset.cloudId=item.id;actions.className='actions';h.textContent=item.label;p.textContent=cloudText(item);
  actions.append(button('下载到手动槽',()=>readCloud(item.id)),button('下载原始 JSON',async()=>download(await sync.raw(item.id),'cloud-save.json')));actions.firstChild.disabled=item.status!=='valid';row.append(h,p,actions);$('cloudList').append(row);
 }
 if(sync.items.some(x=>x.id===previous))$('target').value=previous;
}
async function act(fn){if(busy)return;const trigger=document.activeElement;busy=true;document.querySelectorAll('main button').forEach(b=>b.disabled=true);try{await fn();}catch(e){error(e);}finally{busy=false;document.querySelectorAll('main button').forEach(b=>b.disabled=false);render();const target=focusReturn||(document.activeElement===document.body?trigger:null);focusReturn=null;if(target?.isConnected&&!target.disabled)target.focus();}}
async function readCloud(id){
 const stage=await sync.stageDownload(id,$('destination').value),local=sync.repo.read(stage.slot);
 const choice=await ask('确认下载到'+slotName(stage.slot),['将覆盖这个手动槽；旧数据会先保留为覆盖前副本。','本机：'+localText(local.state),'云端：'+cloudText(stage.cloud)],[['download','保留旧副本并下载']]);
 if(choice){const result=sync.applyDownload(stage);status('已下载到'+slotName(stage.slot)+'。返回单机，在存档管理中读取此槽继续。'+(result.associated?'':'本机同步关联未保存，下次上传请手动选择目标。'));}
}
async function resolveUpload(stage){
 const options=stage.cloud?.status==='valid'?[['cloud','使用云端（下载确认）'],['local','用本机覆盖此云端版本'],['copy','两者保留：新建云端副本']]:[['copy','保留云端原数据，新建副本']];
 const choice=await ask(stage.conflict?'存档冲突：请选择保留方式':'确认上传单机存档',['本机：'+localText(stage.save),'云端：'+cloudText(stage.cloud),'上传归属当前账号：'+sync.user.username+'。不会按本机时间自动覆盖。'],stage.cloud?options:[['local','确认上传新副本']]);
 if(!choice)return;
 if(choice==='cloud'){await readCloud(stage.id);return;}
 if(choice==='copy')stage={...stage,id:crypto.randomUUID(),expectedVersion:0,cloud:null,label:stage.label.slice(0,57)+' 副本'};
 else stage={...stage,expectedVersion:stage.cloud?.version||0};
 try{const result=await sync.upload(stage);await sync.refresh();$('target').value=result.id;status('云端已保存：第 '+result.summary.round+' 轮 · 服务器版本 '+result.version+(result.localChanged?'。本机后来有新修改，尚未上传。':'。'));}catch(e){await uploadError(e);}
}
async function uploadError(e){
 if((e.code==='VERSION_CONFLICT'||e.code==='CLOUD_CORRUPT')&&e.data.pending){
  const p=e.data.pending;await sync.refresh();const cloud=sync.items.find(x=>x.id===p.id)||e.data.cloud;
  await resolveUpload({accountId:p.accountId,id:p.id,slot:p.slot,localRaw:p.localRaw,save:p.body.save,label:p.body.label,expectedVersion:p.body.expectedVersion,cloud,conflict:true});return;
 }
 throw e;
}
$('authForm').addEventListener('submit',e=>{e.preventDefault();const kind=e.submitter?.name==='register'?'register':'login',password=$('password').value;$('password').value='';act(async()=>{await sync.auth(kind,$('username').value,password);status('已登录。游客存档仍在本机，尚未上传；请选择来源并确认绑定到此账号。');});});
$('source').addEventListener('change',localSummary);
$('upload').onclick=()=>act(async()=>{await sync.refresh();await resolveUpload(sync.stage($('source').value,$('target').value||null,$('label').value));});
$('retry').onclick=()=>act(async()=>{try{const result=await sync.retry();await sync.refresh();status('已确认原上传结果：服务器版本 '+result.version+(result.localChanged?'；本机新修改尚未上传。':'。'));}catch(e){await uploadError(e);}});
$('refresh').onclick=()=>act(async()=>{await sync.refresh();status('云端列表已刷新。');});
$('logout').onclick=()=>act(async()=>{if(await ask('退出当前设备登录',['本机存档与待确认请求按原账号保留；其他设备会话不受影响。'],[['logout','确认退出']])){await sync.logout();status('已退出。可返回单机以游客继续玩；未删除本机或云端存档。');}});
$('check').onclick=()=>act(async()=>{await sync.session();if(sync.user)await sync.refresh();status(sync.user?'登录状态已更新。':'当前为游客，无需登录即可玩。');});
$('backup').onclick=()=>act(()=>{const raw=localStorage.getItem(cloudBackupKey($('destination').value));if(raw===null){status('该槽位还没有云端下载覆盖前副本。');return;}download(new Blob([raw],{type:'application/json'}),'before-cloud-download.json');});
$('reset').onclick=()=>act(async()=>{if(await ask('重置同步记录',['将先备份原记录，再清除关联与待确认请求。本机存档与云端数据不删除。云端可能已经接收待确认请求，请先刷新检查。'],[['reset','备份并重置']])){sync.resetMetadata();status('同步记录已备份并重置；请刷新检查云端已有副本。');}});
addEventListener('online',network);addEventListener('offline',network);network();
act(async()=>{await sync.session();if(sync.user)await sync.refresh();status(sync.user?'已恢复登录状态。同步始终需要手动确认。':'当前为游客，无需登录即可玩。');});
