import {estatePanel,branchPanel,quotedLandingFee} from './arrival-panels.js';
import {TransferFeed,pulseTransferCards} from './transfers.js';
import {LIGHTING,lightingMode} from './lighting.js';
import {resultsPanel} from './results-panel.js';
import {cardsPanel} from './cards-panel.js';
import {gameShareUrl} from './share.js';
import {normalizeSetup,setupError,DEFAULT_SETUP} from './setup.js';
import {advancedPanel} from './advanced-panel.js';
import {BUSINESSES,businessType,buildingLimit} from './businesses.js';
import {businessPanel,businessFacts} from './business-panel.js';
import {researchChangePanel} from './research-panel.js';
import {shopPanel} from './shop-panel.js';
import {disposalPanel} from './disposal-panel.js';
import {playerPanel} from './player-panel.js';
import {debtPanel,debtBankDraft} from './debt-panel.js';
import {talentsPanel} from './talent-panel.js';
import {resumeCard,exportableState,archiveSummary} from './save-menu.js';
import {cardTargetPanel} from './card-target-panel.js';
import {deedsPanel} from './deeds-panel.js';
import {bankPanel,bankLimit,updateBankPreview} from './bank-panel.js';
import {stockPanel,updateStockPreview} from './stocks-panel.js';
import {DIFFICULTIES} from './difficulty.js';
import {MAPS} from './maps.js';
import {TALENTS} from './talents.js?v=16';
import {GameOrientation} from './orientation.js';
import {art,guideArt,buildingImage} from './illustrations.js';
import {landmarkPanel} from './landmark-panel.js';
import {eventPanel} from './event-panel.js';
import {ActionPacer} from './pacing.js';
import {diceWeights} from './strategy.js';
import {Game,SAVE_KEY,BACKUP_KEY,storeGame,backupStoredGame,restoreStoredBackup} from './engine.js?v=16';
import {CHARACTERS,GROUPS,CARDS,SPIRITS,STOCKS,VEHICLES} from './content.js';
import {IslandScene} from './scene.js';
import {portrait,portraitBitmap} from './portraits.js';
import {architectureFor} from './buildings.js';
import {GameAudio,audioOptions,MUSIC_TRACKS} from './audio.js';
import {readPreferences,writePreferences} from './preferences.js';
import {MiniMap,MapOverview} from './minimap.js';
import {NewsFeed} from './news.js';
import {nextPaint,prepareStartupAssets,waitForStyles} from './startup.js';
import {GameSelects} from './game-selects.js';
import {ModalFocus} from './modal-focus.js';
import {GameAnnouncements} from './announcements.js';
import {mountPlayerDrawer} from './mobile-ui.js';
async function startGame(){
globalThis.__NAIWA_BOOT__?.set(25,'正在准备精细场景…');await nextPaint();await waitForStyles();
const $=id=>document.getElementById(id),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=n=>Math.round(n).toLocaleString('zh-CN');
let advanced=normalizeSetup(),advancedDraft=null;try{advanced=normalizeSetup(JSON.parse(localStorage.getItem('naiwa-setup-v1')||'{}'));}catch{}
let stockWindow=20,stockHeld=false;
const faces={naiwa:'◉',naichong:'≋',naishu:'♧'};
let bankDraft={kind:'deposit',amount:'300'};
let game=Game.create({seed:7481}),started=false,selected='naiwa',saved=null,scene,activePanel=null,pinned=false,blockKey='',toastTimer,timer,saveOk=true,gamePaused=false;
let TILES=game.tiles;const selectMenus=new GameSelects($('app'));
mountPlayerDrawer($('app'));
const announcements=new GameAnnouncements(()=>!$('sheet').hidden?$('dialogAnnouncements'):$('gameAnnouncements'));
const modal=new ModalFocus($('sheet'),{onEscape:()=>{if(pinned){toast('请先完成当前选择。');return;}dismiss();render();},fallback:()=>!$('actionBtn').disabled?$('actionBtn'):$('settingsBtn')});
try{saved=Game.restore(localStorage.getItem(SAVE_KEY));Object.assign(game.s.options,readPreferences(localStorage,saved?.s.options||game.s.options));}catch{}
try{scene=new IslandScene($('scene'),id=>{if(started&&!pinned)openPanel('tile',id);},game.tiles);}catch(e){console.warn('3D unavailable; using playable map',e);$('fallback').hidden=false;}
if(scene)scene.paused=true;globalThis.__NAIWA_BOOT__?.set(55,'正在准备奶伴与操作界面…');await nextPaint();
$('scene').addEventListener('camerachange',e=>$('followBtn').setAttribute('aria-pressed',String(e.detail.follow)));
$('scene').addEventListener('dicerollchange',e=>{$('dice').classList.toggle('rolling',e.detail.rolling);$('app').classList.toggle('is-dice-active',e.detail.active);if(e.detail.impact)soundtrack.sfx('diceLand');});
$('scene').addEventListener('renderlost',()=>{scene?.leaveStudio();$('app').classList.remove('is-studio');$('studioPanel').hidden=true;$('startScreen').hidden=started;$('fallback').hidden=false;save();toast('3D 画面暂时不可用，已切换到可玩的简洁地图。');render();});
$('scene').addEventListener('renderrestored',()=>{$('fallback').hidden=true;if(scene)scene.paused=gamePaused;render();scene?.renderStill();toast('3D 画面已恢复，继续当前旅程。');});
const miniMap=new MiniMap($('miniMap'),{jump:id=>{if(started&&!pinned&&!scene?.studio){scene?.focusTile(id);sound();}},inspect:id=>{if(started&&!pinned)openPanel('tile',id);},overview:id=>{if(started&&!pinned&&!scene?.studio)openPanel('overview',id);}});
const transferFeed=new TransferFeed();
const newsFeed=new NewsFeed($('newsFlash'),{onEvent:({mood})=>{if(mood!=='idle')sound(mood);}});const actionPacer=new ActionPacer();
const soundtrack=new GameAudio(game.s.options);let soundSnapshot=null;
function audioState(){soundtrack.setOptions(game.s.options);$('soundBtn').dataset.state=soundtrack.status();const status=$('audioStatus');if(status)status.textContent=soundtrack.status();}
function sound(type='tap'){audioState();soundtrack.sfx(type);}
async function unlockSound(){await soundtrack.unlock();audioState();}
document.addEventListener('pointerdown',unlockSound,{once:true,capture:true});
document.addEventListener('keydown',unlockSound,{once:true,capture:true});
function sceneSounds(){const s=game.s,n={state:s,positions:s.players.map(p=>p.pos),money:s.players.map(p=>p.money),lots:Object.fromEntries(Object.entries(s.ownership).map(([id,o])=>[id,o.level])),phase:s.phase};const old=soundSnapshot;soundSnapshot=n;if(!started||!old||old.state!==s)return;if(n.positions.some((v,i)=>v!==old.positions[i]))soundtrack.sfx('step');if(Object.entries(n.lots).some(([id,l])=>l>(old.lots[id]??0)))soundtrack.sfx('build');else if(Object.entries(old.lots).some(([id,l])=>l>0&&(n.lots[id]??0)<l))soundtrack.sfx('demolish');else if(n.money.some((v,i)=>v>old.money[i]))soundtrack.sfx('coin');if(n.phase==='moving'&&['roll','departure'].includes(old.phase))soundtrack.sfx('roll');if(n.phase==='finished'&&old.phase!=='finished')soundtrack.sfx('win');}
function toast(msg){announcements.say(msg);$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2800);}
function save(){try{writePreferences(localStorage,game.s.options);}catch{}if(!started)return;try{storeGame(localStorage,game);saveOk=true;$('saveStatus').textContent='已自动保存在本机';}catch{saveOk=false;$('saveStatus').textContent='存档空间不足，请导出备份';}}
function commit(ok=true){if(!ok){toast('当前无法执行：请检查余额、数量或使用时机。');return;}save();render();sound();}
let pendingOverwrite=null;
function startFresh(confirmed=false){const count=+$('playerCountSelect').value,error=setupError(advanced,selected,count);if(error){advancedDraft=normalizeSetup(advanced);openPanel('advanced');toast(error);return;}
 try{const raw=localStorage.getItem(SAVE_KEY),archive=Game.restore(raw);if(archive){if(confirmed!==true||pendingOverwrite!==raw){pendingOverwrite=raw;activePanel={type:'overwriteSave'};showSheet('开始新旅行并覆盖存档？',archiveSummary(archive),`<p>确认后会先备份这份存档，再开始新局。可在旅行设置中恢复覆盖前存档。</p><div class="row-actions">${btn('取消，保留原局','cancel')}${btn('确认覆盖并开始','overwriteSave','',false,'primary')}</div>`,true);return;}backupStoredGame(localStorage,raw);}}catch{toast('无法备份原存档，新局未开始。请先导出存档。');return;}
 pendingOverwrite=null;actionPacer.reset();const preferences={...game.s.options};game=Game.create({character:selected,rounds:+$('roundSelect').value,playerCount:count,randomStart:advanced.randomStart,mapVersion:advanced.mapVersion,opponents:Array.from({length:count-1},(_,i)=>advanced.opponents[i]||'random'),seatLevels:advanced.seatLevels,startingCash:advanced.startingCash,startingTickets:advanced.startingTickets,seed:advanced.seed===''?Date.now():+advanced.seed,difficulty:$('difficultySelect').value,talents:$('talentsEnabled').checked});game.s.options=preferences;started=true;blockKey='';dismiss(true);$('startScreen').hidden=true;scene?.home();scene?.followPlayer();commit();}
function restoreBackup(){try{const restored=restoreStoredBackup(localStorage);if(!restored){toast('没有可恢复的有效备份，当前进度未修改。');return;}saved=restored;resume();toast('已恢复覆盖前存档。');}catch{toast('恢复失败，当前进度未修改。请先导出存档。');}}
function readAdvancedFields(){if(!advancedDraft)return;advancedDraft.opponents=Array.from(document.querySelectorAll('[data-setup-seat]'),e=>e.value);advancedDraft.seatLevels=Array.from(document.querySelectorAll('[data-setup-level]'),e=>e.value);advancedDraft.startingCash=+$('setupCash').value;advancedDraft.startingTickets=+$('setupTickets').value;advancedDraft.mapVersion=+$('setupMap').value;advancedDraft.randomStart=$('setupInitiative').value==='random';advancedDraft.seed=$('setupSeed').value.trim();const error=setupError(advancedDraft,selected,+$('playerCountSelect').value);$('setupError').textContent=error;$('sheetBody').querySelector('[data-act=applyAdvanced]').disabled=!!error;for(const row of document.querySelectorAll('.opponent-seat')){const id=row.querySelector('[data-setup-seat]').value;row.querySelector('.seat-portrait').innerHTML=id==='random'?'<span class="random-face">⚄</span>':portrait(id);}}

function resume(){if(!saved)return;const preferences={...game.s.options};game=saved;game.s.options=preferences;started=true;blockKey='';$('startScreen').hidden=true;scene?.endPreview();scene?.followPlayer();dismiss(true);commit();}
function picker(){ $('mapSelect').value=String(advanced.mapVersion); if(!started&&game.s.mapVersion!==advanced.mapVersion){const options={...game.s.options};game=Game.create({mapVersion:advanced.mapVersion,seed:7481});game.s.options=options;TILES=game.tiles;scene?.sync(game);scene?.home();}document.querySelector('.map-preview-note').textContent=MAPS[advanced.mapVersion].name+' · '+(advanced.mapVersion===2?'48格 · 两条短支路':'48格 · 跨岛长捷径'); $('advancedSummary').textContent=`${MAPS[advanced.mapVersion].name} · 初始 ${fmt(advanced.startingCash)} 奶币 · ${advanced.opponents.some(id=>id&&id!=='random')?'指定阵容':'随机阵容'}`; $('characterPicker').innerHTML=CHARACTERS.map(c=>`<button class="character-choice ${selected===c.id?'selected':''}" data-character="${c.id}" aria-pressed="${selected===c.id}"><span class="face">${portrait(c.id)}</span><strong>${c.name}</strong></button>`).join('');$('continueBtn').hidden=!saved;$('continueBtn').innerHTML=resumeCard(saved);document.querySelector('.welcome-panel').classList.toggle('has-save',!!saved);const t=TALENTS[selected];$('talentPreview').innerHTML=`<strong>${CHARACTERS.find(c=>c.id===selected).name} · ${t.name}${t.strong?' · 强势角色':''}</strong><p>${t.text}</p>`;selectMenus.sync();if(!started)scene?.previewCharacter(selected);}
function statusTags(p){return [p.skip?`休养 ${p.skip} 回合`:'',p.shield?'免租已就绪':'',p.spirit?SPIRITS[p.spirit].name+' '+Math.min(3,p.spiritTurns)+' 回合':'',p.vehicle?VEHICLES[p.vehicle].name:'',p.reverse?'本回合倒退':'',p.forced?`指定 ${p.forced} 步`:'',p.slowTurns?`慢行 ${p.slowTurns} 次`:''].filter(Boolean).map(t=>`<span class="status-pill">${esc(t)}</span>`).join('');}
function render(){selectMenus.sync();announcements.sync(game,started);const transfers=transferFeed.read(game,started);TILES=game.tiles;const s=game.s,p=game.player;audioState();sceneSounds();newsFeed.setSpeed(s.options.speed);newsFeed.sync(game,started);scene?.sync(game);miniMap.sync(game,{visible:started&&!scene?.studio});$('app').classList.toggle('is-menu',!started);$('app').dataset.phase=s.phase;$('app').dataset.mapVersion=String(s.mapVersion);$('app').style.setProperty('--player-count',s.players.length);
 $('pauseBtn').hidden=!started;$('pauseBtn').setAttribute('aria-pressed',String(gamePaused));
 $('difficultyBtn').textContent=DIFFICULTIES[s.difficulty].name;$('difficultyBtn').title=DIFFICULTIES[s.difficulty].description;$('mapHeading').textContent=MAPS[s.mapVersion].name;
 $('round').textContent=started?`第 ${s.round} / ${s.maxRounds} 轮`:'准备出发';$('logRound').textContent=`第 ${s.round} 轮`;$('weather').textContent=started?['周日','周一','周二','周三','周四','周五','周六'][s.round%7]+' · '+LIGHTING[lightingMode(s.options.lighting)].label:LIGHTING[lightingMode(s.options.lighting)].label+' · 宜大笑';
 $('players').innerHTML=s.players.map(q=>{const c=game.char(q);return `<button type="button" data-player-id="${q.id}" aria-label="${c.name}，查看角色详情" ${started&&s.current===q.id?'aria-current="true"':''} ${started?'':'disabled'} class="player ${started&&s.current===q.id?'active':''} ${q.alive?'':'out'}"><div class="player-head"><span class="mini-face" style="--c:${c.color}">${portrait(c.id)}</span><div><div class="player-name">${c.name} ${q.human?'<span class="badge">你</span>':''}</div><div class="player-role">${q.alive?started&&s.current===q.id?'当前回合':'':'本局已破产'}</div></div><div class="player-money"><small>●</small>${fmt(q.money)}</div></div><div class="player-stats"><span>地产 <strong>${game.owned(q).length}</strong></span><span>净资产 <strong>${fmt(game.worth(q))}</strong></span></div>${statusTags(q)?`<div class="status-pills">${statusTags(q)}</div>`:''}</button>`;}).join('');
 $('logs').innerHTML=s.logs.slice(0,20).map(l=>`<div class="log"><span class="log-time">${String(l.round).padStart(2,'0')}</span><span>${esc(l.text)}</span></div>`).join('');
 $('turnName').textContent=started?s.phase==='finished'?'本次旅行圆满结束':`${game.char().name}${p.human?'，轮到你啦':'正在旅行'}`:'准备好了吗？';$('talentBtn').title=game.s.talents?TALENTS[s.players[0].character].text:'本局天赋未开启';$('turnAvatar').innerHTML=portrait(game.char().id);$('turnAvatar').style.background=game.char().color;
 const hints={departure:'天赋结算中，马上掷骰出发',roll:p.skip?'正在休养，可用野生狗奶恢复':`点券 ${p.tickets} · 已用卡 ${p.cardsUsed} · 停到自家地可建设`,moving:`${p.reverse?'倒退':'前进'}中 · 还剩 ${s.remaining} 格`,branch:'选择一条路线继续前进',buy:'这块地值得买下来吗？',estate:'支付租金，还是用购地卡收购？',event:'看看岛上发生了什么',end:`点券 ${p.tickets} · 建设 ${p.buildsUsed}/1 · 可继续经营`,debt:'现金不足，可以取款、借款或变卖资产',finished:'看看谁是今天的奶家大富翁'};
 const pipFaces={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
 for(const receipt of transfers){const clear=pulseTransferCards($('players'),receipt);if(!scene?.showTransfer(receipt,clear))setTimeout(clear,1200);}
 $('turnHint').textContent=started?hints[s.phase]:'选一位奶伴，开启旅行';$('dice').innerHTML=s.dice.map(n=>`<span class="pip-die" role="img" aria-label="骰子 ${n} 点">${Array.from({length:9},(_,i)=>`<i class="${pipFaces[n].includes(i)?'pip-on':''}"></i>`).join('')}</span>`).join('');$('dice').classList.toggle('rolling',!!scene?.fx.diceRolling);
 $('actionBtn').textContent=!started?'选奶伴':s.phase==='finished'?'看排名':!p.human?'等待中':({roll:p.skip?'休养':'掷骰子',end:'结束回合',departure:'天赋中',moving:'前进中',branch:'选路线',buy:'买地',estate:'选地产',event:'看事件',debt:'筹资金'}[s.phase]);
 if($('actionBtn').textContent.length===4)$('actionBtn').textContent=$('actionBtn').textContent.slice(0,2)+'\n'+$('actionBtn').textContent.slice(2);
 $('actionBtn').disabled=!started||(!p.human&&s.phase!=='finished')||['moving','departure'].includes(s.phase);
 document.querySelectorAll('.dock-tabs [data-panel]').forEach(b=>b.disabled=!started||!p.human||!['roll','end','debt'].includes(s.phase));for(const type of ['deeds','cards','bank','stocks'])document.querySelector('.dock-tabs [data-panel='+type+']').disabled=!started||pinned||!!scene?.studio;$('cardCount').textContent=s.players[0].cards.length;$('planBtn').disabled=!started||!p.human||s.phase!=='roll';
 $('diceCount').hidden=!started||!p.human||p.vehicle===0||s.phase!=='roll';$('diceCount').innerHTML=Array.from({length:VEHICLES[p.vehicle].dice},(_,i)=>`<option value="${i+1}" ${p.diceCount===i+1?'selected':''}>${i+1} 颗骰子</option>`).join('');
 $('soundBtn').textContent=s.options.sound?'♫':'♪';$('soundBtn').setAttribute('aria-label',s.options.sound?'关闭声音':'开启声音');$('qualityBtn').textContent=s.options.quality==='low'?'省电':'电影';$('qualityBtn').title=s.options.quality==='low'?'省电画质 · 点击切换电影画质':'电影画质 · 点击切换省电画质';
 $('castBtn').disabled=!scene||!!scene.contextLost;$('followBtn').setAttribute('aria-pressed',String(!!scene?.follow));$('moveIndicator').hidden=!started;$('moveIndicator').textContent=`${game.char().name} · ${TILES[p.pos].name}${s.phase==='moving'?' · 剩 '+s.remaining+' 格':''}`;
 if(!$('fallback').hidden)$('fallback').innerHTML=`<div class="fallback-grid">${TILES.map(t=>`<button class="fallback-tile ${p.pos===t.id?'current':''}" data-tile="${t.id}" style="background:${GROUPS[t.group].color}50">${t.id+1}. ${esc(t.name)}<br>${s.players.filter(q=>q.alive&&q.pos===t.id).map(q=>game.char(q).name).join(' ')}${s.ownership[t.id]?'<br>⌂ '+game.char(s.players[s.ownership[t.id].player]).name:''}</button>`).join('')}</div>`;
 const currentKey=`${s.phase}:${s.current}:${s.round}:${p.pos}`;
 if(started&&(p.human||s.phase==='finished')&&['buy','estate','event','branch','debt','finished'].includes(s.phase)&&!activePanel&&blockKey!==currentKey){blockKey=currentKey;openPanel(s.phase);}
 if(started&&p.human&&s.phase==='end'&&!activePanel&&blockKey!==currentKey){blockKey=currentKey;if(game.canUpgrade(p.pos)||game.canBuild(p.pos)||businessType(s.ownership[p.pos])==='research'&&s.ownership[p.pos]?.player===p.id)openPanel('buildHere',p.pos);else if(TILES[p.pos].kind==='shop')openPanel('shop');}
}
function syncNewsPause(){newsFeed.setPaused(document.hidden||gamePaused||!$('sheet').hidden);}
function showSheet(title,subtitle,html,lock=false){scene?.cancelGestures();selectMenus.close(false);$('sheet').classList.remove('is-collapsed');$('sheet').setAttribute('aria-modal','true');$('collapseSheet').setAttribute('aria-label','折叠面板');$('collapseSheet').setAttribute('aria-expanded','true');$('collapseSheet').textContent='收起';if(activePanel?.type==='tile')scene?.selectTile(activePanel.id,'inspect');else if(activePanel?.type==='buy')scene?.selectTile(game.player.pos,'buy');$('app').classList.add('has-dialog');$('sheet').dataset.panel=activePanel?.type||'';$('sheet').dataset.detail=activePanel?.type==='tile'&&TILES[activePanel.id]?.kind!=='property'?'landmark':'';$('sheetTitle').textContent=title;$('sheetSubtitle').textContent=subtitle;$('sheetBody').innerHTML=html;$('sheet').hidden=false;$('sheetBody').scrollTop=0;$('sheetBackdrop').hidden=false;$('sheetBackdrop').classList.toggle('live-map',['deeds','tile','confirmDemolish','confirmSell','buy','branch'].includes(activePanel?.type));pinned=lock;$('closeSheet').hidden=lock;syncNewsPause();selectMenus.sync();modal.open();}
function dismiss(force=false){if(pinned&&!force)return;if(gamePaused)setPaused(false);scene?.clearSelection();$('app').classList.remove('has-dialog');activePanel=null;pinned=false;$('sheet').hidden=true;$('sheetBackdrop').hidden=true;syncNewsPause();selectMenus.close(false);modal.close();if(started&&['buy','estate','event','branch','debt','finished'].includes(game.s.phase))blockKey='';}
const stats=items=>`<div class="stat-grid">${items.map(([v,l])=>`<div class="stat-box"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>`;
const btn=(label,act,data='',disabled=false,cls='secondary')=>`<button class="${cls}" data-act="${act}" ${data} ${disabled?'disabled':''}>${label}</button>`;
function buildingArt(t,level,color){return buildingImage({...t,buildingType:t.buildingType||game.s.ownership[t.id]?.buildingType},level,color);}
function humanManage(){return started&&game.player.human&&game.manageable();}
function landingText(r){const t=TILES[r.id];return esc(t.name)+' · '+(r.rent?quotedLandingFee(game,r):r.price?'空地 '+r.price+' 奶币':r.owner===game.player.id?'自己的地产':({shop:'点券 +30 与随机卡',hospital:`费用 ${game.payment(100)}，休养一次`,tax:`费用 ${game.payment(180)}`,rest:`补贴 +${Math.round(120*(game.player.spirit==='fortune'?1.25:1))}`,event:'随机事件',spirit:'随机神灵',bank:'银行',stock:'证券所',start:'起点'}[t.kind]||'已备免租'))+(r.passesStart?` · 经过起点 +${Math.round((400+(game.s.talents&&game.player.character==='naiwa'?80:0))*(game.player.spirit==='fortune'?1.25:1))} / 25点券`:'')+(r.points?' · 途中点券 +'+r.points:'')+(r.blocked?' · 路障截停':'');}
function openPanel(type,id){
 const s=game.s,p=game.player;activePanel={type,id};const can=humanManage(),normal=can&&s.phase!=='debt';
 if(type==='advanced'){advancedDraft??=normalizeSetup(advanced);showSheet('高级对局设置','自定义电脑席位与公平起始条件',advancedPanel(advancedDraft,selected,+$('playerCountSelect').value,$('difficultySelect').value));
 }else if(type==='overview'){showSheet('全岛大地图','看清归属、建筑与奶伴位置','<div class="map-overview"></div>');new MapOverview($('sheetBody').firstElementChild,game,{selected:id??game.player.pos,inspect:tile=>{scene?.focusTile(tile);openPanel('tile',tile);}});
 }else if(type==='mapGuide'){showSheet(MAPS[s.mapVersion].name,'路线与电脑设置',`<p>${MAPS[s.mapVersion].description}</p><h3>本局电脑：${DIFFICULTIES[s.difficulty].name}</h3><p>${DIFFICULTIES[s.difficulty].description}</p><p>本局电脑：${s.players.filter(q=>!q.human).map(q=>game.char(q).name+' · '+DIFFICULTIES[game.aiDifficulty(q)].name).join('、')}。种子 ${s.setupSeed??'旧存档未记录'}。</p><p>所有难度的初始资金、租金、掷骰和天赋规则相同，差别只在电脑如何做决策。新局可重新选择强度。</p><p>功能建筑均对应道路格；选择捷径前可打开落点预览，比较租金、补给和起点奖励。</p>`);
 }else if(type==='talents'){showSheet('奶伴专属天赋',s.talents?'我的技能进度 · 自动触发':'本局未开启；新局可勾选开启',talentsPanel(game));
 }else if(type==='player'){
  showSheet('奶伴旅行档案','资产、天赋与状态',playerPanel(game,id));
 }else if(type==='deeds'){
  showSheet('我的奶家地产','从一间小店，到一座小镇',deedsPanel(game));
 }else if(type==='cards'){
  showSheet('奶伴的卡包','收好道具，选准下一步',cardsPanel(game));
 }else if(type==='cardTarget'){
  const c=CARDS[p.cards[id]];if(!c){dismiss(true);return;}showSheet(c.name,'选择目标与效果',cardTargetPanel(game,id,landingText));
 }else if(type==='bank'){
  showSheet('奶币银行','让小金库，也慢慢长大',bankPanel(game,bankDraft));
 }else if(type==='stocks'){
  showSheet('奶家证券所','持仓成本 · 浮动盈亏 · 成交记录',stockPanel(game,{window:stockWindow,held:stockHeld}));queueMicrotask(()=>game.s.market.forEach((_,i)=>updateStockPreview(game,i)));
 }else if(type==='shop'){
  showSheet('奶家补给商店','给下一次出发，多一点准备',shopPanel(game));
 }else if(type==='tile'){
  const t=TILES[id],o=s.ownership[id];showSheet(t.name,`${GROUPS[t.group].name} · 地图第 ${id+1} 格`,t.kind==='property'?`${buildingArt(t,o?.level||0,o?game.char(s.players[o.player]).estateColor:'#77aa8b')}${stats([[t.price,'空地价格'],[o?o.level+' 级':'待售','建筑等级']])}${businessFacts(game,id)}<p>${o?`这块地属于${game.char(s.players[o.player]).name}。`:'落在这里时，可以决定是否购买。'}${o?.level?BUSINESSES[businessType(o)].text:'空地可选择七种建筑。只有住宅参与街区联营；其他设施按自身机制经营。'}</p>${o?.player===p.id&&can?`<div class="row-actions">${btn('建设与经营','chooseBuilding',`data-id="${id}"`,!normal||!(game.canUpgrade(id)||game.canBuild(id)||businessType(o)==='research'&&p.pos===id))}${btn('变卖地产','confirmSell',`data-id="${id}"`)}</div>`:''}`:landmarkPanel(game,t));
 }else if(type==='buy'){
  const t=TILES[p.pos];showSheet('发现一块好地盘',`${t.name} · ${GROUPS[t.group].name}`,`${buildingArt(t,0,game.char(p).estateColor)}<p>购地后可选择住宅、连锁店、旅馆、商场、加油站、研究所或公园。之后需再次停靠才能加盖；工程队可远程加盖。</p>${stats([[t.price,'购买价格'],[game.rent(t.id),'初始租金'],[fmt(p.money),'当前现金']])}<div class="button-grid">${btn('先路过看看','pass')}${btn('买下这块地','buy','',p.money<t.price,'primary')}</div>`,true);
 }else if(type==='plan'){
  const count=p.forced||p.slowTurns?1:p.diceCount,weights=p.forced?new Map([[p.forced,1]]):p.slowTurns?new Map([[1,1]]):diceWeights(count);
  showSheet('这次会走到哪里？','先看风险，再决定用卡或骰子数量',`<div class="panel-note">${p.forced?'已指定 '+p.forced+' 步':p.slowTurns?'慢行生效：本次 1 步':count+' 颗骰子的真实落点概率'}。有岔路时会列出两条路线；费用按当前状态估算，事件内容仍随机。点券 ${p.tickets}，本回合已用卡 ${p.cardsUsed}。</div>${[...weights].map(([steps,w])=>`<div class="row"><div class="row-head"><strong>${steps} 步</strong><span class="badge">${(w*100).toFixed(1)}%</span></div>${game.preview(steps).map(r=>`<p>${landingText(r)}</p>`).join('')}</div>`).join('')}<div class="row-actions">${btn('去卡包决定','panel','data-panel="cards"')}${btn('回地图','cancel')}</div>`);
 }else if(type==='buildHere'){
  showSheet('地产建设与经营',TILES[p.pos].name,businessPanel(game,p.pos));
 }else if(type==='researchChange'){
  showSheet('切换研发项目？',TILES[id.id]?.name||'研究所工作台',researchChangePanel(game,id.id,id.key));
 }else if(type==='estate'){
  const t=TILES[p.pos],o=s.ownership[p.pos];showSheet('来到对手的地产',`${game.char(s.players[o.player]).name} · ${t.name}`,estatePanel(game),true);
 }else if(type==='branch'){
  showSheet('下一站，去哪边？','岔路选择',branchPanel(game,landingText),true);
 }else if(type==='event'){
  const n=s.notice;showSheet(n?.title||'岛上新鲜事',`${game.char().name}的旅行手账`,eventPanel(game),true);sound(n?.mood);
 }else if(type==='debt'){
  showSheet('小金库需要周转','先筹款，再继续旅行',debtPanel(game),true);
 }else if(type==='finished'){
  showSheet('奶家发财纪念册','本次旅行结算',resultsPanel(game),true);
 }else if(type==='settings'){
  let backup=null;try{backup=Game.restore(localStorage.getItem(BACKUP_KEY));}catch{}
  showSheet('旅行设置','按自己的节奏，慢慢玩',`<div class="setting-row"><label for="speedSelect">动画速度</label><select id="speedSelect">${[1,2].map(n=>`<option value="${n}" ${Math.min(2,s.options.speed)===n?'selected':''}>${n===1?'正常 · 完整展示':'轻快 · 保留消息阅读时间'}</option>`).join('')}</select></div><div class="setting-row"><label for="qualitySelect">画面质量</label><select id="qualitySelect"><option value="auto" ${s.options.quality==='auto'?'selected':''}>电影画质 · 精细光影</option><option value="low" ${s.options.quality==='low'?'selected':''}>省电画质</option></select></div><div class="setting-row"><label for="lightingSelect">日照氛围</label><select id="lightingSelect">${Object.entries(LIGHTING).map(([id,p])=>`<option value="${id}" ${lightingMode(s.options.lighting)===id?'selected':''}>${p.label}</option>`).join('')}</select></div><div class="setting-row"><span>声音</span>${btn(s.options.sound?'已开启 · 点击关闭':'已关闭 · 点击开启','sound')}</div>${audioSettings()}<h3>旅行存档</h3><p>${saveOk?'进度自动保存在当前浏览器。':'自动存档失败，请导出备份。'}导出后，可以在另一台设备导入继续。</p><div class="row-actions">${btn('导出存档','export','',!started&&!saved)}${btn('素材与制作说明','panel','data-panel="sources"')}</div><label style="font-size:11px">导入存档<input class="file-input" id="importSave" type="file" accept="application/json,.json"></label><h3>重新出发</h3><p>重新开始会替换本版存档；旧版游戏的存档不会受影响。</p>${btn('选择奶伴重新开始','confirmRestart','','','secondary danger')}<p>设置打开期间，对局暂停。</p>`);
  $('importSave').parentElement.insertAdjacentHTML('afterend',`<div class="row-actions">${btn('恢复覆盖前存档','confirmRestoreBackup','',!backup)}</div>${backup?`<p>${esc(archiveSummary(backup))}</p>`:''}`);
 }else if(type==='confirmRestoreBackup'){
  let backup=null;try{backup=Game.restore(localStorage.getItem(BACKUP_KEY));}catch{}if(!backup){toast('没有可恢复的有效备份。');return;}
  showSheet('恢复覆盖前存档？',archiveSummary(backup),`<p>会替换当前旅行；这份备份会继续保留。可以先导出当前存档。</p><div class="row-actions">${btn('导出当前存档','export','',!started&&!saved)}${btn('取消恢复','cancel')}${btn('确认恢复','restoreBackup','',false,'primary')}</div>`,true);
 }else if(type==='help'){
  showSheet('奶家发财指南','先掷一颗骰子，再慢慢学会经营',`<ol class="rules"><li><b>出发：</b>选择奶伴后随机决定先手，所有人完整行动一次算一轮。掷骰移动。经过起点领 400 奶币。每位存活奶伴行动一次算一轮。</li><li><b>置业：</b>踩到空地可买入，并选择七种建筑。住宅、旅馆、商场、研究所最高五级；连锁店、加油站、公园只有一级。普通建设须停到自家地块，每次加一层；工程队可远程加盖。只有住宅参与街区联营。旅馆强制入住、商场抽签消费、加油站按行程和交通工具收费、研究所三次出发产卡、公园免费送点券。</li><li><b>用卡：</b>掷骰前打开卡包。手牌可连用，移动卡须在掷骰前使用；点券来自地图拾取和到站奖励。用点券买卡，可控骰、路障、拆层、免费加盖或慢行。抢地卡仅对脚下的对手地产生效，付 125% 成本；拆除和工程队限附近 8 格。</li><li><b>出行：</b>商店购买自行车或小车后，可在掷骰按钮旁选择骰子数量。岔路自行选方向。</li><li><b>经营：</b>经过银行的本回合可办理存取款和贷款；银行周三休息；股票在自己行动前后可交易，周日休市。商店需到店购买。存款每轮赚 0.5%，贷款每轮计息 4%。股票也会因随机事件涨跌。</li><li><b>神灵：</b>财运增加非交易收入，霉运增加支出，守护抵挡一次负面事件。效果互相替换，持续 3 个后续回合。</li><li><b>周转：</b>付款不足可取款、借款、卖股票或变卖地产；也可申请破产退出。</li><li><b>胜利：</b>坚持到最后，或在轮数结束时拥有最多净资产。手机横屏体验更完整。</li></ol><p>各位角色采用同一规则，电脑也遵守点券、用卡和建设限制，并根据公开地块评估路线。浏览器不支持 3D 时可使用简洁地图继续玩。</p>`);
 }else if(type==='news'){
 showSheet('岛上消息记录','重要消息会在地图中央逐条出现',s.logs.slice(0,40).map(l=>`<div class="row"><small>第 ${l.round} 轮</small><p>${esc(l.text)}</p></div>`).join(''));
 }else if(type==='pause'){
  setPaused(true);save();showSheet('休息一下，奶伴等你','对局、镜头与声音已暂停',`<p>当前进度已保存在本机。准备好了，再继续这一趟发财之旅。</p><div class="button-grid">${btn('继续游戏','resumeGame','',false,'primary')}${btn('导出存档','export','',!started&&!saved)}</div><p class="pause-tip">关闭面板或按 Esc 也可以继续。</p>`);
 }else if(type==='share'){
  showSheet('叫上朋友，来岛上玩','手机点开链接即可开始',`<p>把这个试玩链接发给朋友，无需安装或登录游戏账号。建议横屏体验。</p><label for="shareUrl">试玩链接</label><input id="shareUrl" class="share-url" type="text" readonly value="${esc(gameShareUrl())}"><div class="row-actions">${btn('复制链接','copyLink','',false,'primary')}</div><p>当前是单机试玩：每位朋友在自己的手机上，与电脑奶伴独立对局；进度保存在各自浏览器。</p>`);
 }else if(type==='sources'){
  showSheet('奶家创作手账','素材来源与后续计划',`<div class="panel-note">非官方粉丝游戏。角色模型、地图、建筑和界面由本项目制作。配乐为重新编排的器乐与原创曲；笑声使用社区小游戏的短片段，具体来源见声音设置。</div><div class="credit-list"><p>文化与表现参考：</p><ul class="rules"><li><a href="https://milkyfrog.com/games" target="_blank" rel="noopener">奶蛙小游戏合集</a></li><li><a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">奶蛙的小窝</a>：互动与陪伴表现</li><li><a href="https://milkfrog-bath.pages.dev/" target="_blank" rel="noopener">奶蛙爱洗澡</a>：情绪表情</li><li><a href="https://nailong-dance.pages.dev/" target="_blank" rel="noopener">奶娃街舞</a>：动态表现</li><li><a href="https://naiwanaichadian.pages.dev/" target="_blank" rel="noopener">奶蛙奶茶铺</a>：经营场景</li><li><a href="https://www.douyin.com/video/7673579319512764654" target="_blank" rel="noopener">抖音奶币与野生狗奶二创</a></li></ul></div><p>本版为原创风格化轻量模型。奶蛙、奶鼠、奶狗参考用户三视图及公开视频，奶蛋和奶茶参考农庄视频，奶虫参考此前视频图像。模型采用连续曲面、绘制腹色与关节动画，为原创重建，未提取视频源模型。</p><p>本版已支持六名角色、2—6 人、指定电脑与随机阵容。后续方向：账号与云存档。本版仅包含本机单机。</p><p>3D 引擎 Three.js，MIT 许可随部署包附带。</p>`);
 }else if(type==='confirmRestart'){
  showSheet('准备新的旅行','新局正式开始时替换存档',`<p>先选择奶伴与规则。当前旅行会保留到新局正式开始，也可以先导出备份。</p><div class="row-actions">${btn('导出当前存档','export','',!started&&!saved)}${btn('保留当前旅行','cancel')}${btn('重新选择奶伴','newGame','',false,'primary')}</div>`,true);
 }else if(type==='confirmDemolish'||type==='confirmSell'){
  showSheet(type==='confirmSell'?'变卖这块地产？':'拆除这栋房屋？',TILES[id]?.name||'地产处置',disposalPanel(game,id,type==='confirmSell'?'sell':'demolish'),true);
 }else if(type==='confirmBankrupt'){
  showSheet('确认申请破产？','这会结束你本局的旅行',`<p>系统将清算你的资产，尽可能支付本次欠款。你将退出本局，电脑奶伴继续比赛。</p><div class="row-actions">${btn('再想想办法','panel','data-panel="debt"')}${btn('确认破产退出','bankrupt','','','secondary danger')}</div>`,true);
 }
}
function audioSettings(){const o=audioOptions(game.s.options);return `<h3>小岛音乐台</h3><p id="audioStatus" role="status">${soundtrack.status()}</p><div class="setting-row"><span>背景音乐</span>${btn(o.music?'播放中 · 关闭':'已关闭 · 开启','music')}</div><label class="setting-row">曲目<select id="musicTrack">${Object.entries(MUSIC_TRACKS).map(([id,t])=>`<option value="${id}" ${o.track===id?'selected':''}>${t.name}</option>`).join('')}</select></label>${[['musicVolume','音乐音量'],['effectsVolume','动作音效'],['voiceVolume','奶蛙笑声']].map(([key,label])=>`<label class="volume-row"><span>${label}</span><input type="range" min="0" max="100" value="${Math.round(o[key]*100)}" data-volume="${key}" aria-label="${label}"><output>${Math.round(o[key]*100)}%</output></label>`).join('')}<div class="setting-row"><span>奶蛙笑声</span><div class="row-actions">${btn(o.voice?'已开启':'已关闭','voice')}${btn('试听笑声','testVoice')}</div></div><details class="audio-credit"><summary>音乐与声音来源</summary><p>《奶家欢乐颂》：参考 <a href="https://www.bilibili.com/video/BV1Sv7p6bEJT/" target="_blank" rel="noopener">奶蛙相关《欢乐颂》二创</a>选曲，使用贝多芬公版旋律重新编排器乐，非视频原录音。《奶家漫游》及掷骰、金币、脚步、施工音效为本作原创。</p><p>笑声：<a href="https://naiwaxiaowu.pages.dev/" target="_blank" rel="noopener">奶蛙的小窝</a> laugh.wav 的 1.05 秒片段，已裁切与淡入淡出；未声称该录音为开放许可素材。展示字体：站酷快乐体（OFL）。</p></details>`;}
$('sheetBody').addEventListener('change',e=>{if(activePanel?.type==='advanced'){readAdvancedFields();return;}if(e.target.id==='stockWindow'){stockWindow=+e.target.value;openPanel('stocks');}});
$('sheetBody').addEventListener('input',e=>{if(activePanel?.type==='advanced'){readAdvancedFields();return;}if(e.target.id==='bankAmount'){bankDraft.amount=e.target.value;updateBankPreview(game,bankDraft.kind);return;}if(e.target.dataset.stockQty!==undefined){updateStockPreview(game,+e.target.dataset.stockQty);return;}const key=e.target.dataset.volume;if(!key)return;game.s.options[key]=+e.target.value/100;e.target.nextElementSibling.textContent=e.target.value+'%';audioState();save();});
function setPaused(value){gamePaused=value;syncNewsPause();if(scene){scene.paused=value||!!scene.contextLost;if(value)scene.renderStill();}soundtrack.visibility(value||document.hidden);audioState();$('app').classList.toggle('is-paused',value);$('pauseBtn').setAttribute('aria-pressed',String(value));}
function refreshPanel(){if(activePanel){const {type,id}=activePanel,scroll=$('sheetBody').scrollTop;openPanel(type,id);queueMicrotask(()=>{$('sheetBody').scrollTop=scroll;});}}
function exportSave(){const state=exportableState(game,started,saved);if(!state)return;const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`奶蛙大富翁-第${state.round}轮.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已导出旅行存档。');}
function onAction(){if(!started)return;if(game.s.phase==='finished'){openPanel('finished');return;}if(!game.player.human)return;if(game.s.phase==='departure')return;if(game.s.phase==='roll'){scene?.followPlayer();commit(game.roll());}else if(game.s.phase==='end')commit(game.end());else openPanel(game.s.phase);}
function durationHint(){const rounds=+$('roundSelect').value,count=+$('playerCountSelect').value,minutes=rounds*(count*.19+.1);$('durationHint').textContent=rounds===20?'试玩局：适合熟悉操作；完整经营建议 50 轮。':`约 ${Math.round(minutes*.8)}—${Math.round(minutes*1.25)} 分钟，依操作和动画速度变化。`;}
$('talentsEnabled').addEventListener('change',picker);$('roundSelect').addEventListener('change',durationHint);$('playerCountSelect').addEventListener('change',durationHint);durationHint();
$('startBtn').addEventListener('click',startFresh);$('continueBtn').addEventListener('click',resume);$('characterPicker').addEventListener('click',e=>{const b=e.target.closest('[data-character]');if(b){selected=b.dataset.character;picker();sound();}});
$('actionBtn').addEventListener('click',onAction);$('soundBtn').addEventListener('click',()=>{unlockSound();game.s.options.sound=!game.s.options.sound;commit();toast(game.s.options.sound?'声音已开启':'声音已关闭');});
$('mapSelect').addEventListener('change',e=>{if(started)return;advanced.mapVersion=+e.target.value===1?1:2;try{localStorage.setItem('naiwa-setup-v1',JSON.stringify(advanced));}catch{}picker();render();sound();});
$('advancedBtn').addEventListener('click',()=>{advancedDraft=null;openPanel('advanced');});
$('difficultyBtn').addEventListener('click',()=>{if(!pinned)openPanel('mapGuide');});
$('difficultySelect').addEventListener('change',()=>{$('difficultyHint').textContent=DIFFICULTIES[$('difficultySelect').value].description;});
$('talentBtn').addEventListener('click',()=>{if(!pinned)openPanel('talents');});
const orientation=new GameOrientation($('app'),$('orientationBtn'),{notify:toast,resize:()=>scene?.resize()});
$('newsHistoryBtn').addEventListener('click',()=>{if(started&&!pinned)openPanel('news');});
$('pauseBtn').addEventListener('click',()=>{if(!pinned&&started)openPanel('pause');else toast('先完成当前选择，即可暂停。');});
$('shareBtn').addEventListener('click',()=>{if(!pinned)openPanel('share');else toast('先完成当前选择，再分享链接。');});
$('helpBtn').addEventListener('click',()=>{if(!pinned)openPanel('help');});$('settingsBtn').addEventListener('click',()=>{if(!pinned)openPanel('settings');});$('saveBtn').addEventListener('click',exportSave);
$('homeBtn').addEventListener('click',()=>{scene?.leaveStudio();$('app').classList.remove('is-studio');scene?.home();$('studioPanel').hidden=true;$('startScreen').hidden=started;render();});$('followBtn').addEventListener('click',()=>{if(scene){if(scene.follow)scene.follow=false;else scene.followPlayer();render();toast(scene.follow?'跟随当前奶伴':'自由探索小岛');}});$('qualityBtn').addEventListener('click',()=>{game.s.options.quality=game.s.options.quality==='low'?'auto':'low';commit();});
$('castBtn').addEventListener('click',()=>{if(pinned||!scene||scene.contextLost)return;scene.enterStudio(started?game.player.character:selected);$('app').classList.add('is-studio');$('studioPanel').hidden=false;$('miniMap').hidden=true;$('startScreen').hidden=true;$('actionBtn').disabled=true;document.querySelectorAll('.dock-tabs button').forEach(b=>b.disabled=true);});
$('closeStudio').addEventListener('click',()=>{scene?.leaveStudio();$('app').classList.remove('is-studio');$('studioPanel').hidden=true;$('startScreen').hidden=started;render();});
$('studioPanel').addEventListener('click',e=>{const char=e.target.closest('[data-studio-char]'),mode=e.target.closest('[data-studio-mode]'),view=e.target.closest('[data-studio-view]');if(char)scene?.enterStudio(char.dataset.studioChar);if(mode&&scene?.studio)scene.studio.mode=mode.dataset.studioMode;if(view&&scene?.studio){scene.studio.yaw=.45+({front:0,side:Math.PI/2,back:Math.PI}[view.dataset.studioView]);scene.studio.manual=true;}});
$('diceCount').addEventListener('change',e=>{if(game.s.phase==='roll'&&game.player.human){game.player.diceCount=+e.target.value;commit();}});
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>openPanel(b.dataset.panel)));
$('players').addEventListener('click',e=>{const b=e.target.closest('[data-player-id]');if(b&&started&&!pinned)openPanel('player',+b.dataset.playerId);});
$('fallback').addEventListener('click',e=>{const b=e.target.closest('[data-tile]');if(b&&!pinned)openPanel('tile',+b.dataset.tile);});
$('closeSheet').addEventListener('click',()=>{dismiss();render();});$('sheetBackdrop').addEventListener('click',()=>{dismiss();render();});
// ModalFocus owns Tab/Escape; summary and form controls keep native key behavior.
$('sheetBody').addEventListener('change',async e=>{
 if(e.target.id==='musicTrack'){game.s.options.track=e.target.value;audioState();save();}
 if(e.target.id==='speedSelect'){game.s.options.speed=+e.target.value;save();}
 if(e.target.id==='lightingSelect'){game.s.options.lighting=lightingMode(e.target.value);commit();}
 if(e.target.id==='qualitySelect'){game.s.options.quality=e.target.value;commit();}
 if(e.target.id==='importSave'){
  const file=e.target.files[0];if(!file)return;if(file.size>1e6){toast('存档文件过大，请选择本游戏导出的 JSON。');return;}const imported=Game.restore(await file.text());if(!imported){toast('存档不完整或版本不兼容，当前进度未修改。');return;}
  pendingImport=imported;showSheet('使用这个旅行存档？',`第 ${imported.s.round} / ${imported.s.maxRounds} 轮`,`<p>会替换当前进度。导入前可以先导出备份。</p><div class="row-actions">${btn('导出当前存档','export','',!started&&!saved)}${btn('取消导入','cancel')}${btn('确认导入','import','',false,'primary')}</div>`,true);
 }
});
let pendingImport=null;
$('sheetBody').addEventListener('click',e=>{
 const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const {act}=b.dataset,id=+b.dataset.id,index=+b.dataset.index,target=+b.dataset.target;let ok=true;
 if(act==='cardStep'){const choice=$('sheetBody').querySelector('[data-card-step=\"'+b.dataset.steps+'\"]');choice?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});choice?.querySelector('h3')?.focus({preventScroll:true});return;}
 if(act==='locateDeed'){scene?.focusLot(id);openPanel('tile',id);return;}
 if(act==='bankKind'){bankDraft.kind=b.dataset.kind;refreshPanel();return;}
 if(act==='bankQty'){bankDraft.amount=String(b.dataset.amount==='max'?bankLimit(game,bankDraft.kind):b.dataset.amount);$('bankAmount').value=bankDraft.amount;updateBankPreview(game,bankDraft.kind);return;}
 if(act==='applyAdvanced'){readAdvancedFields();if(setupError(advancedDraft,selected,+$('playerCountSelect').value))return;advanced=normalizeSetup(advancedDraft);advancedDraft=null;try{localStorage.setItem('naiwa-setup-v1',JSON.stringify(advanced));}catch{}dismiss(true);picker();render();toast('高级设置已保存，新局按所选阵容开始。');return;}
 if(act==='resetAdvanced'){advancedDraft=normalizeSetup();openPanel('advanced');return;}
 if(act==='allRandom'){readAdvancedFields();advancedDraft.opponents=[];openPanel('advanced');return;}
 if(act==='playerView'){openPanel('player',id);return;}
 if(act==='locatePlayer'){const target=game.s.players[id];if(target?.alive){dismiss(true);scene?.focusTile(target.pos);render();}return;}
 if(act==='confirmSell'){openPanel('confirmSell',id);return;}
 if(act==='chooseBuilding'){openPanel('buildHere',id);return;}
 if(act==='chooseResearch'){openPanel('researchChange',{id,key:b.dataset.key});return;}
 if(act==='stockFilter'){stockHeld=!stockHeld;openPanel('stocks');return;}
 if(act==='stockQty'){const input=$('qty'+id),pos=game.position(id,game.s.players[0]);input.value=b.dataset.qty==='maxBuy'?Math.min(10000,Math.floor(game.s.players[0].money/pos.price)):b.dataset.qty==='maxSell'?Math.min(10000,pos.qty):b.dataset.qty;updateStockPreview(game,id);return;}
 if(act==='resumeGame'){dismiss(true);render();return;}
 if(act==='copyLink'){navigator.clipboard?.writeText($('shareUrl').value).then(()=>toast('试玩链接已复制，发给朋友就能玩。')).catch(()=>{$('shareUrl').select();toast('请长按链接复制。');});if(!navigator.clipboard){$('shareUrl').select();toast('请长按链接复制。');}return;}
 if(act==='panel'){if(game.s.phase==='debt'){if(b.dataset.panel==='bank'){const draft=debtBankDraft(game);if(draft)bankDraft=draft;}if(b.dataset.panel==='stocks')stockHeld=true;}openPanel(b.dataset.panel);return;}
 if(act==='card'){const key=game.player.cards[index],reason=game.cardHint(key);if(reason){toast(reason);openPanel('cards');return;}if(CARDS[key].target==='self'){ok=game.card(index);if(ok){dismiss(true);commit();}else commit(false);}else openPanel('cardTarget',index);return;}
 if(act==='useCard'){const reason=game.cardHint(game.player.cards[index]);if(reason){toast(reason);openPanel('cards');return;}ok=game.card(index,target);if(ok){dismiss(true);commit();}else commit(false);return;}
 if(act==='construct')ok=game.construct(id,b.dataset.type);else if(act==='research')ok=game.setResearch(id,b.dataset.key);else if(act==='upgrade')ok=game.upgrade(id);else if(act==='sell')ok=game.sell(id);else if(act==='demolish'){ok=game.demolish(id);if(ok)dismiss(true);}else if(act==='confirmDemolish'){openPanel('confirmDemolish',id);return;}else if(act==='bank')ok=game.bank(b.dataset.kind,+$('bankAmount').value);else if(act==='trade')ok=game.trade(id,+$('qty'+id).value*+b.dataset.sign);else if(act==='shop')ok=game.shop(b.dataset.key);else if(act==='vehicle')ok=game.vehicle(id);
 else if(act==='estatePay'||act==='estateBuy'){ok=game.resolveEstate(act==='estateBuy');if(ok||game.s.phase==='debt')dismiss(true);}
 else if(act==='buy'||act==='pass'){ok=game.buy(act==='buy');if(ok)dismiss(true);}
 else if(act==='branch'){ok=game.step(id);if(ok)dismiss(true);}
 else if(act==='ack'){ok=game.acknowledge();if(ok)dismiss(true);}
 else if(act==='settle'){ok=game.settle();if(ok)dismiss(true);}
 else if(act==='bankrupt'){ok=game.bankrupt();if(ok)dismiss(true);}
 else if(act==='confirmBankrupt'){openPanel('confirmBankrupt');return;}
 else if(act==='sound'){unlockSound();game.s.options.sound=!game.s.options.sound;}
 else if(act==='music'){game.s.options.music=!audioOptions(game.s.options).music;}
 else if(act==='voice'){game.s.options.voice=!audioOptions(game.s.options).voice;}
 else if(act==='testVoice'){unlockSound().then(()=>sound('laugh'));return;}
 else if(act==='export'){exportSave();return;}
 else if(act==='confirmRestart'){openPanel('confirmRestart');return;}
 else if(act==='overwriteSave'){startFresh(true);return;}
 else if(act==='confirmRestoreBackup'){openPanel('confirmRestoreBackup');return;}
 else if(act==='restoreBackup'){restoreBackup();return;}
 else if(act==='newGame'){if(started)saved=Game.restore(game.s);started=false;dismiss(true);$('startScreen').hidden=false;picker();render();return;}
 else if(act==='cancel'){pendingOverwrite=null;dismiss(true);render();return;}
 else if(act==='viewBoard'){dismiss(true);blockKey=`finished:${game.s.current}:${game.s.round}:${game.player.pos}`;render();return;}
 else if(act==='import'){if(!pendingImport)return;game=pendingImport;pendingImport=null;started=true;scene?.followPlayer();dismiss(true);blockKey='';$('startScreen').hidden=true;commit();toast('存档已导入。');return;}
 if(ok){if(['construct','upgrade','demolish','sell'].includes(act))scene?.focusLot(id);commit();if(act==='sell'||act==='demolish'){dismiss(true);if(game.s.phase==='debt')render();else openPanel('deeds');return;}if(act==='research'){openPanel('buildHere',id);return;}if(activePanel?.type==='buildHere'&&['upgrade','construct'].includes(act))dismiss(true);if(activePanel&&!['buy','estate','event','branch','finished','debt','confirmBankrupt'].includes(activePanel.type))refreshPanel();else if(activePanel?.type==='debt')openPanel('debt');}else commit(false);
});
function tick(){clearTimeout(timer);timer=setTimeout(tick,90);if(!started||document.hidden||gamePaused||scene?.studio||game.s.phase==='finished')return;
 if(activePanel)return;
 const s=game.s,phase=s.phase,beforeHead=s.logs[0],beforePlayer=s.current;
 const visuals=scene&&!scene.contextLost;if(!actionPacer.ready({news:newsFeed.busy,moving:!!visuals&&scene.isMoving(),effects:!!visuals&&!!scene.fx.items.length}))return;
 let changed=false;if(!game.player.alive&&phase==='end')changed=game.end();else if(!game.player.human)changed=game.ai();else if(phase==='departure')changed=game.roll();else if(phase==='moving')changed=game.step();
 changed=changed||s.phase!==phase||s.logs[0]!==beforeHead||s.current!==beforePlayer;if(changed){actionPacer.after(phase,s.options.speed);save();render();}
}

document.addEventListener('visibilitychange',()=>{syncNewsPause();soundtrack.visibility(document.hidden||gamePaused);if(document.hidden)save();else render();});window.addEventListener('pagehide',save);
picker();render();tick();const brandBitmap=portraitBitmap('naiwa');if(brandBitmap)document.querySelector('.brand img').src=brandBitmap;
// Same-origin offline cache; portable single-file distribution skips registration.
if(!window.__NAIWA_PORTABLE__&&'serviceWorker'in navigator&&location.protocol!=='file:')navigator.serviceWorker.register(globalThis.__NAIWA_SERVICE_WORKER_URL__||'./sw.js?v=16').catch(()=>{});

globalThis.__NAIWA_BOOT__?.set(75,'正在载入字体、图标与声音…');await prepareStartupAssets();scene?.renderStill();await nextPaint();globalThis.__NAIWA_BOOT__?.set(100,'准备完成，欢迎来到奶家！');await nextPaint();globalThis.__NAIWA_BOOT__?.ready();if(scene&&!scene.contextLost&&$('loadingScreen').hidden)scene.paused=gamePaused;
}
startGame().catch(error=>{console.error('Game startup failed',error);globalThis.__NAIWA_BOOT__?.fail();});
