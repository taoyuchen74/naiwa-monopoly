import {auctionPanel,offerPanel,readOffer} from './commerce-panel.js';
import {commerceEnabled} from './commerce.js';
import {replayRecord,attachRecording} from './replay-log.js';
import {ReplayPlayer,readHistory,storeReplay,localStats,causeStats,resultSummary} from './replay.js';
import {Tutorial} from './tutorial.js';
import {helpPanel,updateHelp} from './rule-help.js';
import {modeConfig,modeDescription} from './modes.js';
import {isHotseat,accountPlayer,publicLog,lockSession} from './hotseat.js';
import {advanceSession} from './ui-session.js';
import {RULES} from './rules-config.js';
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
import {resumeCard,exportableState,archiveSummary,saveSlotsPanel,slotName,slotSummary} from './save-menu.js';
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
import {ActionPacer,PlaybackSession,presentationSpeed} from './pacing.js';
import {diceWeights} from './strategy.js';
import {createSaveRepository,Game,SAVE_KEY,BACKUP_KEY,storeGame,backupStoredGame,restoreStoredBackup} from './engine.js?v=16';
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
const repository=createSaveRepository(()=>localStorage);
let TILES=game.tiles;const selectMenus=new GameSelects($('app'));
const tutorial=new Tutorial($('app'),{getItem:key=>localStorage.getItem(key),setItem:(key,value)=>localStorage.setItem(key,value)});
mountPlayerDrawer($('app'));
const announcements=new GameAnnouncements(()=>!$('sheet').hidden?$('dialogAnnouncements'):$('gameAnnouncements'));
const modal=new ModalFocus($('sheet'),{onEscape:()=>{if(!$('sheetRuleHelp').hidden){toggleSheetHelp(false);return;}if(pinned){toast('请先完成当前选择。');return;}dismiss();render();},fallback:()=>!$('actionBtn').disabled?$('actionBtn'):$('settingsBtn')});
try{saved=Game.restore(repository.read('auto').state);Object.assign(game.s.options,readPreferences(localStorage,saved?.s.options||game.s.options));}catch{}
try{scene=new IslandScene($('scene'),id=>{if(started&&!pinned)openPanel('tile',id);},game.tiles);}catch(e){console.warn('3D unavailable; using playable map',e);$('fallback').hidden=false;}
if(scene)scene.paused=true;globalThis.__NAIWA_BOOT__?.set(55,'正在准备奶伴与操作界面…');await nextPaint();
$('scene').addEventListener('camerachange',e=>$('followBtn').setAttribute('aria-pressed',String(e.detail.follow)));
$('scene').addEventListener('dicerollchange',e=>{$('dice').classList.toggle('rolling',e.detail.rolling);$('app').classList.toggle('is-dice-active',e.detail.active);if(e.detail.impact)soundtrack.sfx('diceLand');});
$('scene').addEventListener('renderlost',()=>{scene?.leaveStudio();$('app').classList.remove('is-studio');$('studioPanel').hidden=true;$('startScreen').hidden=started;$('fallback').hidden=false;save();toast('3D 画面暂时不可用，已切换到可玩的简洁地图。');render();});
$('scene').addEventListener('renderrestored',()=>{$('fallback').hidden=true;if(scene)scene.paused=gamePaused;render();scene?.renderStill();toast('3D 画面已恢复，继续当前旅程。');});
const miniMap=new MiniMap($('miniMap'),{jump:id=>{if(started&&!pinned&&!scene?.studio){scene?.focusTile(id);sound();}},inspect:id=>{if(started&&!pinned)openPanel('tile',id);},overview:id=>{if(started&&!pinned&&!scene?.studio)openPanel('overview',id);}});
const transferFeed=new TransferFeed();
const newsFeed=new NewsFeed($('newsFlash'),{onEvent:({mood})=>{if(mood!=='idle')sound(mood);}});const actionPacer=new ActionPacer(),playback=new PlaybackSession();
const soundtrack=new GameAudio(game.s.options);let soundSnapshot=null;
function audioState(){soundtrack.setOptions(game.s.options);$('soundBtn').dataset.state=soundtrack.status();const status=$('audioStatus');if(status)status.textContent=soundtrack.status();}
function sound(type='tap'){audioState();soundtrack.sfx(type);}
async function unlockSound(){await soundtrack.unlock();audioState();}
document.addEventListener('pointerdown',unlockSound,{once:true,capture:true});
document.addEventListener('keydown',unlockSound,{once:true,capture:true});
document.addEventListener('keydown',e=>{if(e.repeat&&['Enter',' '].includes(e.key)&&e.composedPath().some(n=>n.matches?.('button,[role=button],[role=option]')))e.preventDefault();},true);
function sceneSounds(){const s=game.s,n={state:s,positions:s.players.map(p=>p.pos),money:s.players.map(p=>p.money),lots:Object.fromEntries(Object.entries(s.ownership).map(([id,o])=>[id,o.level])),phase:s.phase};const old=soundSnapshot;soundSnapshot=n;if(!started||!old||old.state!==s)return;if(n.positions.some((v,i)=>v!==old.positions[i]))soundtrack.sfx('step');if(Object.entries(n.lots).some(([id,l])=>l>(old.lots[id]??0)))soundtrack.sfx('build');else if(Object.entries(old.lots).some(([id,l])=>l>0&&(n.lots[id]??0)<l))soundtrack.sfx('demolish');else if(n.money.some((v,i)=>v>old.money[i]))soundtrack.sfx('coin');if(n.phase==='moving'&&['roll','departure'].includes(old.phase))soundtrack.sfx('roll');if(n.phase==='finished'&&old.phase!=='finished')soundtrack.sfx('win');}
function toast(msg){announcements.say(msg);$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.remove('show'),2800);}
let replayPlayer=null,replayDeadline=0,pendingReplayBranch=null,archiveWarning='';
function archiveGame(){try{if(started)storeReplay(localStorage,game,replayRecord(game));archiveWarning='';}catch{archiveWarning='回放未保存，请导出当前录制。';}}
function restoreRecording(){const hash=game.stateHash(),item=readHistory(localStorage).matches.slice().reverse().find(m=>m.replay.initialHash===hash||m.replay.commands.some(e=>e?.stateHash===hash)||m.replay.finalHash===hash);if(item)try{const p=new ReplayPlayer(item.replay),r=p.record,index=r.initialHash===hash?0:r.commands.findIndex(e=>e.stateHash===hash)+1,fork=index<r.commands.length;r.commands=r.commands.slice(0,index);r.finalHash=hash;attachRecording(game,r,fork);}catch{}replayRecord(game);}
function save(){try{writePreferences(localStorage,game.s.options);}catch{}if(!started)return;try{storeGame(localStorage,game);saveOk=true;archiveGame();$('saveStatus').textContent='已自动保存在本机';}catch{saveOk=false;$('saveStatus').textContent='存档空间不足，请导出备份';}}
function commit(ok=true){if(!ok){toast('当前无法执行：请检查余额、数量或使用时机。');return;}save();render();sound();}
let pendingOverwrite=null;
function startFresh(confirmed=false){const count=+$('playerCountSelect').value,error=setupError(advanced,selected,count);if(error){advancedDraft=normalizeSetup(advanced);openPanel('advanced');toast(error);return;}
 try{const item=repository.read('auto'),raw=item.raw,archive=Game.restore(item.state);if(raw!==null&&(confirmed!==true||pendingOverwrite!==raw)){pendingOverwrite=raw;activePanel={type:'overwriteSave'};showSheet('开始新旅行并覆盖存档？',archive?archiveSummary(archive):'现有自动存档损坏或来自较新版本，可先导出原始数据。',`<p>确认后会先备份这份存档，再开始新局。三个手动槽保持不变。</p><div class="row-actions">${btn('取消，保留原局','cancel')}${btn('确认覆盖并开始','overwriteSave','',false,'primary')}</div>`,true);return;}
 const fresh=Game.create({mode:modeConfig({id:advanced.modeId,rounds:+$('roundSelect').value,cash:advanced.startingCash,tickets:advanced.startingTickets}),character:selected,rounds:+$('roundSelect').value,playerCount:count,randomStart:advanced.randomStart,mapVersion:advanced.mapVersion,opponents:Array.from({length:count-1},(_,i)=>advanced.opponents[i]||'random'),seatLevels:advanced.seatLevels,startingCash:advanced.startingCash,startingTickets:advanced.startingTickets,seatTypes:advanced.seatTypes,primaryLevel:advanced.primaryLevel,seed:advanced.seed===''?Date.now():+advanced.seed,difficulty:$('difficultySelect').value,talents:$('talentsEnabled').checked});fresh.s.options={...game.s.options,...(fresh.s.mode.id==='standard'?{}:{speed:fresh.s.mode.speed})};const record=repository.replaceAuto(fresh.s,{expectedRaw:raw});fresh.s.savedAt=record.savedAt;
 pendingOverwrite=null;actionPacer.reset();game=fresh;started=true;saveOk=true;blockKey='';dismiss(true);$('startScreen').hidden=true;scene?.home();scene?.followPlayer();$('saveStatus').textContent='已自动保存在本机';render();sound();
 }catch{toast('无法备份或保存原存档，新局未开始。请先导出存档。');}
}
function restoreBackup(){try{const restored=restoreStoredBackup(localStorage);if(!restored){toast('没有可恢复的有效备份，当前进度未修改。');return;}saved=restored;resume();toast('已恢复覆盖前存档。');}catch{toast('恢复失败，当前进度未修改。请先导出存档。');}}
function readAdvancedFields(){if(!advancedDraft)return;advancedDraft.character=$('sheetBody').querySelector('[data-setup-primary]')?.value||selected;advancedDraft.seatTypes=Array.from(document.querySelectorAll('[data-setup-type]'),e=>e.value);advancedDraft.primaryLevel=$('sheetBody').querySelector('[data-setup-primary-level]')?.value||'inherit';advancedDraft.opponents=Array.from(document.querySelectorAll('[data-setup-seat]'),e=>e.value);advancedDraft.seatLevels=Array.from(document.querySelectorAll('[data-setup-level]'),e=>e.value);advancedDraft.modeId=$('setupMode').value;$('setupSeed').disabled=advancedDraft.modeId==='daily';$('modeDescription').textContent=modeDescription(modeConfig({id:advancedDraft.modeId}));advancedDraft.startingCash=+$('setupCash').value;advancedDraft.startingTickets=+$('setupTickets').value;advancedDraft.mapVersion=+$('setupMap').value;advancedDraft.randomStart=$('setupInitiative').value==='random';advancedDraft.seed=$('setupSeed').value.trim();const error=setupError(advancedDraft,advancedDraft.character||selected,+$('playerCountSelect').value);$('setupError').textContent=error;$('sheetBody').querySelector('[data-act=applyAdvanced]').disabled=!!error;for(const row of document.querySelectorAll('.opponent-seat')){const id=row.querySelector('[data-setup-seat],[data-setup-primary]').value;row.querySelector('.seat-portrait').innerHTML=id==='random'?'<span class="random-face">⚄</span>':portrait(id);}}

function resume(){if(!saved)return;const preferences={...game.s.options};game=saved;game.s.options=preferences;restoreRecording();relockSession();started=true;blockKey='';actionPacer.reset();$('startScreen').hidden=true;scene?.endPreview();scene?.followPlayer();dismiss(true);commit();}
function picker(){ $('mapSelect').value=String(advanced.mapVersion); if(!started&&game.s.mapVersion!==advanced.mapVersion){const options={...game.s.options};game=Game.create({mapVersion:advanced.mapVersion,seed:7481});game.s.options=options;TILES=game.tiles;scene?.sync(game);scene?.home();}document.querySelector('.map-preview-note').textContent=MAPS[advanced.mapVersion].name+' · '+(advanced.mapVersion===2?'48格 · 两条短支路':'48格 · 跨岛长捷径'); const seats=+$('playerCountSelect').value||3,humans=Array.from({length:seats},(_,i)=>(advanced.seatTypes[i]||(i?'ai':'human'))==='human').filter(Boolean).length;$('advancedSummary').textContent=`${MAPS[advanced.mapVersion].name} · ${humans} 真人 / ${seats-humans} 电脑 · 初始 ${fmt(advanced.startingCash)} 奶币 · ${advanced.opponents.some(id=>id&&id!=='random')?'指定阵容':'随机阵容'}`; $('characterPicker').innerHTML=CHARACTERS.map(c=>`<button class="character-choice ${selected===c.id?'selected':''}" data-character="${c.id}" aria-pressed="${selected===c.id}"><span class="face">${portrait(c.id)}</span><strong>${c.name}</strong></button>`).join('');$('continueBtn').hidden=!saved;$('continueBtn').innerHTML=resumeCard(saved);document.querySelector('.welcome-panel').classList.toggle('has-save',!!saved);const t=TALENTS[selected];$('talentPreview').innerHTML=`<strong>${CHARACTERS.find(c=>c.id===selected).name} · ${t.name}${t.strong?' · 强势角色':''}</strong><p>${t.text}</p>`;selectMenus.sync();if(!started)scene?.previewCharacter(selected);}
function statusTags(p){return [p.eventWard?'事件护盾已备':'',p.insuranceTurns?`保险 ${p.insuranceTurns} 次回合结束`:'',p.operatingUntilRound>=game.s.round?`经营加成至第 ${p.operatingUntilRound} 轮`:'',p.skip?`休养 ${p.skip} 回合`:'',p.shield?'免租已就绪':'',p.spirit?SPIRITS[p.spirit].name+' '+Math.min(3,p.spiritTurns)+' 回合':'',p.vehicle?VEHICLES[p.vehicle].name:'',p.reverse?'本回合倒退':'',p.forced?`指定 ${p.forced} 步`:'',p.slowTurns?`慢行 ${p.slowTurns} 次`:''].filter(Boolean).map(t=>`<span class="status-pill">${esc(t)}</span>`).join('');}
let privacyGame=null,privacySeat=null;
function syncHandoff(){
 if(!started||!isHotseat(game.s)&&!(privacyGame&&isHotseat(privacyGame.s)))return;
 if(privacyGame!==game||privacySeat!==game.s.current){
  if(activePanel)dismiss(true);$('sheetBody').replaceChildren();selectMenus.close(false);newsFeed.reset();announcements.reset();clearTimeout(toastTimer);$('toast').textContent='';$('toast').classList.remove('show');$('gameAnnouncements').textContent='';$('dialogAnnouncements').textContent='';
  privacyGame=game;privacySeat=game.s.current;
 }
 if(game.s.handoff&&activePanel?.type!=='handoff'){dismiss(true);$('sheetBody').replaceChildren();newsFeed.reset();openPanel('handoff');}
}
function relockSession(){lockSession(game);}
function render(){if(started)replayRecord(game);selectMenus.sync();announcements.sync(game,started);const transfers=transferFeed.read(game,started);TILES=game.tiles;const s=game.s,p=game.player;syncHandoff();audioState();sceneSounds();const rate=presentationSpeed(s.options,!p.human);playback.bind(game);actionPacer.setSpeed(rate);newsFeed.setSpeed(rate);newsFeed.sync(game,started);scene?.setMenu(!started);scene?.sync(game);miniMap.sync(game,{visible:started&&!scene?.studio});$('app').classList.toggle('is-menu',!started);$('app').dataset.phase=s.phase;$('app').dataset.mapVersion=String(s.mapVersion);$('app').style.setProperty('--player-count',s.players.length);
 $('speedBtn').textContent=s.options.speed+'×';$('speedBtn').setAttribute('aria-label','演出速度 '+s.options.speed+'倍，点击切换');$('aiPaceBtn').setAttribute('aria-pressed',String(s.options.aiFast!==false));$('aiPaceBtn').textContent=s.options.aiFast!==false?'AI快':'AI原速';$('skipShowBtn').disabled=!started||!!s.handoff||!!activePanel||!!scene?.studio||s.phase==='finished'||!playback.canSkip(game);
 $('pauseBtn').hidden=!started;$('pauseBtn').setAttribute('aria-pressed',String(gamePaused));
 $('difficultyBtn').textContent=DIFFICULTIES[s.difficulty].name;$('difficultyBtn').title=DIFFICULTIES[s.difficulty].description;$('mapHeading').textContent=MAPS[s.mapVersion].name;
 $('round').textContent=started?`第 ${s.round} / ${s.maxRounds} 轮`:'准备出发';$('logRound').textContent=`第 ${s.round} 轮`;$('weather').textContent=started?['周日','周一','周二','周三','周四','周五','周六'][s.round%RULES.weekLength]+' · '+LIGHTING[lightingMode(s.options.lighting)].label:LIGHTING[lightingMode(s.options.lighting)].label+' · 宜大笑';
 $('players').innerHTML=s.players.map(q=>{const c=game.char(q);return `<button type="button" data-player-id="${q.id}" aria-label="${c.name}，查看角色详情" ${started&&s.current===q.id?'aria-current="true"':''} ${started?'':'disabled'} class="player ${started&&s.current===q.id?'active':''} ${q.alive?'':'out'}"><div class="player-head"><span class="mini-face" style="--c:${c.color}">${portrait(c.id)}</span><div><div class="player-name">${c.name} ${q.human?'<span class="badge">真人 '+(q.id+1)+'</span>':''}</div><div class="player-role">${q.alive?started&&s.current===q.id?'当前回合':'':'本局已破产'}</div></div><div class="player-money"><small>●</small>${fmt(q.money)}</div></div><div class="player-stats"><span>地产 <strong>${game.owned(q).length}</strong></span><span>净资产 <strong>${fmt(game.worth(q))}</strong></span></div>${statusTags(q)?`<div class="status-pills">${statusTags(q)}</div>`:''}</button>`;}).join('');
 $('logs').innerHTML=s.logs.slice(0,20).map(l=>`<div class="log"><span class="log-time">${String(l.round).padStart(2,'0')}</span><span>${esc(publicLog(s,l.text))}</span></div>`).join('');
 $('turnName').textContent=started?s.phase==='finished'?'本次旅行圆满结束':`${game.char().name}${p.human?'，轮到你啦':'正在旅行'}`:'准备好了吗？';$('talentBtn').title=game.s.talents?TALENTS[(accountPlayer(game)||p).character].text:'本局天赋未开启';$('turnAvatar').innerHTML=portrait(game.char().id);$('turnAvatar').style.background=game.char().color;
 const hints={auction:'地产正在拍卖',negotiation:'交易报价待电脑审核',departure:'天赋结算中，马上掷骰出发',roll:p.skip?'正在休养，可用野生狗奶恢复':`点券 ${p.tickets} · 已用卡 ${p.cardsUsed} · 停到自家地可建设`,moving:`${p.reverse?'倒退':'前进'}中 · 还剩 ${s.remaining} 格`,branch:'选择一条路线继续前进',buy:'这块地值得买下来吗？',estate:'支付租金，还是用购地卡收购？',event:'看看岛上发生了什么',end:`点券 ${p.tickets} · 建设 ${p.buildsUsed}/1 · 可继续经营`,debt:'现金不足，可以取款、借款或变卖资产',finished:'看看谁是今天的奶家大富翁'};
 const pipFaces={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
 for(const receipt of transfers){const clear=pulseTransferCards($('players'),receipt);if(!scene?.showTransfer(receipt,clear))playback.tail(clear,1200);}
 $('turnHint').textContent=started?(s.handoff?'等待换手确认':isHotseat(s)&&!p.human?'电脑正在行动；账户操作关闭':hints[s.phase]):'选一位奶伴，开启旅行';$('dice').innerHTML=s.dice.map(n=>`<span class="pip-die" role="img" aria-label="骰子 ${n} 点">${Array.from({length:9},(_,i)=>`<i class="${pipFaces[n].includes(i)?'pip-on':''}"></i>`).join('')}</span>`).join('');$('dice').classList.toggle('rolling',!!scene?.fx.diceRolling);
 $('actionBtn').textContent=!started?'选奶伴':s.phase==='finished'?'看排名':!p.human?'等待中':({roll:p.skip?'休养':'掷骰子',end:'结束回合',auction:'拍卖中',negotiation:'审核报价',departure:'天赋中',moving:'前进中',branch:'选路线',buy:'买地',estate:'选地产',event:'看事件',debt:'筹资金'}[s.phase]);
 if($('actionBtn').textContent.length===4)$('actionBtn').textContent=$('actionBtn').textContent.slice(0,2)+'\n'+$('actionBtn').textContent.slice(2);
 $('actionBtn').disabled=!!s.handoff||(!p.alive&&s.phase!=='finished')||!started||(!p.human&&s.phase!=='finished')||['moving','departure'].includes(s.phase);
 document.querySelectorAll('.dock-tabs [data-panel]').forEach(b=>b.disabled=!started||!p.human||!['roll','end','debt'].includes(s.phase));for(const type of ['deeds','cards','bank','stocks'])document.querySelector('.dock-tabs [data-panel='+type+']').disabled=!started||pinned||!!scene?.studio||!accountPlayer(game);$('cardCount').textContent=accountPlayer(game)?.cards.length??'—';$('planBtn').disabled=!started||!!s.handoff||!p.human||s.phase!=='roll';
 $('diceCount').hidden=!started||!!s.handoff||!p.human||p.vehicle===0||s.phase!=='roll';$('diceCount').innerHTML=Array.from({length:VEHICLES[p.vehicle].dice},(_,i)=>`<option value="${i+1}" ${p.diceCount===i+1?'selected':''}>${i+1} 颗骰子</option>`).join('');
 $('soundBtn').textContent=s.options.sound?'♫':'♪';$('soundBtn').setAttribute('aria-label',s.options.sound?'关闭声音':'开启声音');$('qualityBtn').textContent=s.options.quality==='low'?'省电':'自适应';$('qualityBtn').title=s.options.quality==='low'?'省电画质 · 点击切换自适应画质':'自适应画质 · 点击切换省电画质';
 $('castBtn').disabled=!scene||!!scene.contextLost;$('followBtn').setAttribute('aria-pressed',String(!!scene?.follow));$('moveIndicator').hidden=!started;$('moveIndicator').textContent=`${game.char().name} · ${TILES[p.pos].name}${s.phase==='moving'?' · 剩 '+s.remaining+' 格':''}`;
 if(!$('fallback').hidden)$('fallback').innerHTML=`<div class="fallback-grid">${TILES.map(t=>`<button class="fallback-tile ${p.pos===t.id?'current':''}" data-tile="${t.id}" style="background:${GROUPS[t.group].color}50">${t.id+1}. ${esc(t.name)}<br>${s.players.filter(q=>q.alive&&q.pos===t.id).map(q=>game.char(q).name).join(' ')}${s.ownership[t.id]?'<br>⌂ '+game.char(s.players[s.ownership[t.id].player]).name:''}</button>`).join('')}</div>`;
 const currentKey=`${s.phase}:${s.current}:${s.round}:${p.pos}:${s.auction?.actor}:${s.auction?.bid}`;
 if(started&&s.phase==='auction'&&s.players[s.auction.actor].human&&!activePanel&&blockKey!==currentKey){blockKey=currentKey;openPanel('auction');}
 if(started&&!s.handoff&&(p.human||s.phase==='finished')&&['buy','estate','event','branch','debt','finished','negotiation'].includes(s.phase)&&!activePanel&&blockKey!==currentKey){blockKey=currentKey;openPanel(s.phase);}
 if(started&&!s.handoff&&p.human&&s.phase==='end'&&!activePanel&&blockKey!==currentKey){blockKey=currentKey;if(game.canUpgrade(p.pos)||game.canBuild(p.pos)||businessType(s.ownership[p.pos])==='research'&&s.ownership[p.pos]?.player===p.id)openPanel('buildHere',p.pos);else if(TILES[p.pos].kind==='shop')openPanel('shop');}
 syncTutorial();
}
function syncTutorial(){tutorial.sync(game,{started,panel:activePanel?.type||null});}
function toggleSheetHelp(open){$('sheetRuleHelp').hidden=!open;$('sheetHelpBtn').setAttribute('aria-expanded',String(open));if(open){$('sheetRuleHelp').innerHTML=helpPanel('inlineRules');updateHelp($('sheetRuleHelp'),game.s.mode);$('sheetRuleHelp').querySelector('input').focus({preventScroll:true});}else $('sheetHelpBtn').focus({preventScroll:true});}
function syncNewsPause(){newsFeed.setPaused(document.hidden||gamePaused||!$('sheet').hidden);}
function showSheet(title,subtitle,html,lock=false){$('sheetRuleHelp').hidden=true;$('sheetRuleHelp').replaceChildren();$('sheetHelpBtn').setAttribute('aria-expanded','false');scene?.cancelGestures();selectMenus.close(false);$('sheet').classList.remove('is-collapsed');$('sheet').setAttribute('aria-modal','true');$('collapseSheet').setAttribute('aria-label','折叠面板');$('collapseSheet').setAttribute('aria-expanded','true');$('collapseSheet').textContent='收起';$('collapseSheet').hidden=activePanel?.type==='handoff';if(activePanel?.type==='tile')scene?.selectTile(activePanel.id,'inspect');else if(activePanel?.type==='buy')scene?.selectTile(game.player.pos,'buy');$('app').classList.add('has-dialog');$('sheet').dataset.panel=activePanel?.type||'';$('sheet').dataset.detail=activePanel?.type==='tile'&&TILES[activePanel.id]?.kind!=='property'?'landmark':'';$('sheetTitle').textContent=title;$('sheetSubtitle').textContent=subtitle;$('sheetBody').innerHTML=html;$('sheet').hidden=false;$('sheetBody').scrollTop=0;$('sheetBackdrop').hidden=false;$('sheetBackdrop').classList.toggle('live-map',['deeds','tile','confirmDemolish','confirmSell','buy','branch'].includes(activePanel?.type));pinned=lock;$('closeSheet').hidden=lock;syncNewsPause();selectMenus.sync();if(!$('sheetBody').querySelector('[data-modal-autofocus]'))$('sheetBody').querySelector('button:not(:disabled),input:not(:disabled),select:not(:disabled),summary')?.setAttribute('data-modal-autofocus','');modal.open();syncTutorial();}
function dismiss(force=false){if(pinned&&!force)return;tutorial.clear();$('sheetRuleHelp').hidden=true;$('sheetRuleHelp').replaceChildren();if(gamePaused)setPaused(false);scene?.clearSelection();$('app').classList.remove('has-dialog');activePanel=null;pinned=false;$('sheet').hidden=true;$('sheetBackdrop').hidden=true;syncNewsPause();selectMenus.close(false);modal.close();if(started&&['buy','estate','event','branch','debt','finished'].includes(game.s.phase))blockKey='';queueMicrotask(syncTutorial);}
const stats=items=>`<div class="stat-grid">${items.map(([v,l])=>`<div class="stat-box"><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>`;
const btn=(label,act,data='',disabled=false,cls='secondary')=>`<button class="${cls}" data-act="${act}" ${data} ${disabled?'disabled':''}>${label}</button>`;
function buildingArt(t,level,color){return buildingImage({...t,buildingType:t.buildingType||game.s.ownership[t.id]?.buildingType},level,color);}
function humanManage(){return started&&game.player.human&&!game.s.handoff&&game.manageable();}
function landingText(r){const t=TILES[r.id];return esc(t.name)+' · '+(r.rent?quotedLandingFee(game,r):r.price?'空地 '+r.price+' 奶币':r.owner===game.player.id?'自己的地产':({shop:'点券 +30 与随机卡',hospital:`费用 ${game.payment(100)}，休养一次`,tax:`费用 ${game.payment(180)}`,rest:`补贴 +${Math.round(120*(game.player.spirit==='fortune'?1.25:1))}`,event:'随机事件',spirit:'随机神灵',bank:'银行',stock:'证券所',start:'起点'}[t.kind]||'已备免租'))+(r.passesStart?` · 经过起点 +${Math.round((RULES.startIncome+(game.s.talents&&game.player.character==='naiwa'?RULES.startTalentBonus:0))*(game.player.spirit==='fortune'?1.25:1))} / ${RULES.startCoupons}点券`:'')+(r.points?' · 途中点券 +'+r.points:'')+(r.blocked?' · 路障截停':'');}
function openPanel(type,id){
 if(started&&game.s.handoff&&type!=='handoff')return;
 if(started&&['cards','bank','stocks','shop','deeds','cardTarget','plan'].includes(type)&&!accountPlayer(game))return;
 const s=game.s,p=game.player;activePanel={type,id};const can=humanManage(),normal=can&&s.phase!=='debt';
 if(type==='auction'){showSheet('无人地产拍卖','原回合暂停，按顺序竞价',auctionPanel(game),true);return;}
 if(type==='exchange'||type==='negotiation'){showSheet('玩家间交易','报价确认后由电脑独立审核',offerPanel(game,id),s.phase==='negotiation');return;}
 if(type==='handoff'){showSheet(`请交给玩家 ${s.current+1} · ${game.char().name}`,'确认后才显示手牌与账户',`<p>上一位玩家请交出设备。当前仍处于${s.phase==='debt'?'筹款':'原来的'}行动阶段，确认前不会推进。</p><button class="primary" data-act="acceptTurn" data-modal-autofocus>我是玩家 ${s.current+1}，开始回合</button>`,true);return;}
 if(type==='saves'){try{showSheet('旅行存档槽','3 个手动槽 + 1 个自动槽',saveSlotsPanel(repository.list(),!!exportableState(game,started,saved)));}catch{showSheet('旅行存档槽','本机存储暂不可用','<p>无法访问本机存档。当前旅行仍可从设置导出 JSON。</p>');}
 }else if(type==='advanced'){advancedDraft??=normalizeSetup(advanced);showSheet('高级对局设置','真人、电脑席位与公平起始条件',advancedPanel(advancedDraft,selected,+$('playerCountSelect').value,$('difficultySelect').value));
 }else if(type==='overview'){showSheet('全岛大地图','看清归属、建筑与奶伴位置','<div class="map-overview"></div>');new MapOverview($('sheetBody').firstElementChild,game,{selected:id??game.player.pos,inspect:tile=>{scene?.focusTile(tile);openPanel('tile',tile);}});
 }else if(type==='mapGuide'){showSheet(MAPS[s.mapVersion].name,'路线与电脑设置',`<p>${MAPS[s.mapVersion].description}</p><h3>本局电脑：${DIFFICULTIES[s.difficulty].name}</h3><p>${DIFFICULTIES[s.difficulty].description}</p><p>本局电脑：${s.players.filter(q=>!q.human).map(q=>game.char(q).name+' · '+DIFFICULTIES[game.aiDifficulty(q)].name).join('、')}。种子 ${s.setupSeed??'旧存档未记录'}。</p><p>所有难度的初始资金、租金、掷骰和天赋规则相同，差别只在电脑如何做决策。新局可重新选择强度。</p><p>功能建筑均对应道路格；选择捷径前可打开落点预览，比较租金、补给和起点奖励。</p>`);
 }else if(type==='talents'){showSheet('奶伴专属天赋',s.talents?'我的技能进度 · 自动触发':'本局未开启；新局可勾选开启',talentsPanel(game));
 }else if(type==='player'){
  showSheet('奶伴旅行档案','资产、天赋与状态',playerPanel(game,id));
 }else if(type==='deeds'){
  showSheet('我的奶家地产','从一间小店，到一座小镇',deedsPanel(game)+(commerceEnabled(s)&&p.human&&['roll','end'].includes(s.phase)&&!s.debt?'<button class="primary" data-act="panel" data-panel="exchange">发起玩家交易</button>':''));
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
  const t=TILES[p.pos];showSheet('发现一块好地盘',`${t.name} · ${GROUPS[t.group].name}`,`${buildingArt(t,0,game.char(p).estateColor)}<p>购地后可选择住宅、连锁店、旅馆、商场、加油站、研究所或公园。之后需再次停靠才能加盖；工程队可远程加盖。</p>${stats([[t.price,'购买价格'],[game.rent(t.id),'初始租金'],[fmt(p.money),'当前现金']])}<div class="button-grid">${btn(commerceEnabled(s)?'拒购并进入拍卖':'先路过看看','pass')}${btn('买下这块地','buy','',p.money<t.price,'primary')}</div>`,true);
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
 }else if(type==='history'){
  const d=readHistory(localStorage),stats=localStats(d),total=Object.values(stats).reduce((n,r)=>n+r.uses,0);showSheet('本地回放与战绩','本地数据、非竞技认证',`<p role="status">${d.incompatible?'本地战绩版本不兼容，未覆盖。':esc(archiveWarning)}</p><p>保留20局；回放含手牌，勿公开分享。</p><input type="file" id="replayImport" accept="application/json">${started?'<button class="secondary" data-act="replayCurrent">当前录制</button>':''}<h3>角色使用率 / 胜率 / 平均轮数 / 破产</h3><p>真人与AI合计；按已结算席位统计。</p>${Object.entries(stats).map(([id,r])=>`<p>${CHARACTERS.find(c=>c.id===id)?.name||'未知'}：${Math.round(r.uses/total*100)}%（${r.uses}次） / ${Math.round(r.wins/r.uses*100)}% / ${(r.rounds/r.uses).toFixed(1)} / ${r.bankruptcies}</p>`).join('')}<h3>破产原因</h3>${Object.entries(causeStats(d)).map(([cause,n])=>`<p>${esc(cause)}：${n}</p>`).join('')}<h3>回放记录</h3>${d.matches.map((m,i)=>`<div class="row"><p>${m.replay.initial.mapVersion===2?'滨河镇':'发财岛'} · ${Number.isInteger(m.rounds)?m.rounds:'进行中'}轮 · ${Number.isFinite(m.updatedAt)?esc(new Date(m.updatedAt).toLocaleString('zh-CN')):'旧记录'}</p><button class="secondary" data-act="replayOpen" data-id="${i}">播放</button></div>`).join('')}`);
 }else if(type==='replay'){
  showSheet('本地对局回放','公开资产回放',`<p>起点：第${replayPlayer.record.initial.round}轮。接续存档之前的操作仅在已有录制中保留。</p><div id="replayView"></div><div class="row-actions">${btn('播放 / 暂停','replayPlay')}${btn('上回合','replayPrev')}${btn('下回合','replayNext')}${btn('倍速','replaySpeed')}${btn('从这里继续','replayContinue')}${btn('导出回放','replayExport')}</div>`);paintReplay();
 }else if(type==='finished'){
  showSheet('奶家发财纪念册','本次旅行结算',resultsPanel(game)+`<button class="secondary" data-act="copyResult">复制中文战绩</button><textarea id="resultCopy" aria-label="可复制战绩摘要" readonly>${esc(resultSummary(game))}</textarea><button class="secondary" data-act="panel" data-panel="history">回放与本地战绩</button>`,true);
 }else if(type==='settings'){
  let backup=null;try{backup=Game.restore(repository.readBackup().state);}catch{}
  showSheet('旅行设置','按自己的节奏，慢慢玩',`<div class="setting-row"><label for="speedSelect">动画速度</label><select id="speedSelect">${[1,2,3].map(n=>`<option value="${n}" ${s.options.speed===n?'selected':''}>${n}× · ${['','完整展示','轻快','快速'][n]}</option>`).join('')}</select></div><div class="setting-row"><span>AI 回合自动 3×</span><button class="secondary" data-act="aiPace" aria-pressed="${s.options.aiFast!==false}">${s.options.aiFast!==false?'已开启':'已关闭'}</button></div><p>跳过仅收尾当前演出；交易结果保留阅读时间，付款和破产确认仍需本人操作。</p><div class="setting-row"><label for="qualitySelect">画面质量</label><select id="qualitySelect"><option value="auto" ${s.options.quality==='auto'?'selected':''}>自适应画质 · 完整光影</option><option value="low" ${s.options.quality==='low'?'selected':''}>省电画质</option></select></div><div class="setting-row"><label for="lightingSelect">日照氛围</label><select id="lightingSelect">${Object.entries(LIGHTING).map(([id,p])=>`<option value="${id}" ${lightingMode(s.options.lighting)===id?'selected':''}>${p.label}</option>`).join('')}</select></div><div class="setting-row"><span>声音</span>${btn(s.options.sound?'已开启 · 点击关闭':'已关闭 · 点击开启','sound')}</div>${audioSettings()}<h3>旅行存档</h3><p>${saveOk?'进度自动保存在当前浏览器。':'自动存档失败，请导出备份。'}导出后，可以在另一台设备导入继续。</p><div class="row-actions">${btn('导出存档','export','',!started&&!saved)}${btn('素材与制作说明','panel','data-panel="sources"')}</div><label style="font-size:11px">导入存档<input class="file-input" id="importSave" type="file" accept="application/json,.json"></label><h3>重新出发</h3><p>重新开始会替换本版存档；旧版游戏的存档不会受影响。</p>${btn('选择奶伴重新开始','confirmRestart','','','secondary danger')}<p>设置打开期间，对局暂停。</p>`);
  $('sheetBody').insertAdjacentHTML('beforeend','<button class="secondary" data-act="panel" data-panel="history">回放与本地战绩</button>');
  $('sheetBody').insertAdjacentHTML('beforeend','<h3>新手提示</h3><p>提示偏好只保存在此浏览器，不属于对局存档。</p><div class="row-actions"><button class="secondary" data-act="resetTutorial">重置教程</button><button class="secondary" data-act="disableTutorial">不再显示提示</button></div><p id="tutorialPreferenceStatus" role="status"></p>');
  $('importSave').parentElement.insertAdjacentHTML('beforebegin','<div class="row-actions"><button class="primary" data-act="panel" data-panel="saves">管理 4 个存档槽</button></div>');
  $('importSave').parentElement.insertAdjacentHTML('afterend',`<div class="row-actions">${btn('恢复覆盖前存档','confirmRestoreBackup','',!backup)}</div>${backup?`<p>${esc(archiveSummary(backup))}</p>`:''}`);
 }else if(type==='confirmRestoreBackup'){
  let backup=null;try{backup=Game.restore(repository.readBackup().state);}catch{}if(!backup){toast('没有可恢复的有效备份。');return;}
  showSheet('恢复覆盖前存档？',archiveSummary(backup),`<p>会替换当前旅行；这份备份会继续保留。可以先导出当前存档。</p><div class="row-actions">${btn('导出当前存档','export','',!started&&!saved)}${btn('取消恢复','cancel')}${btn('确认恢复','restoreBackup','',false,'primary')}</div>`,true);
 }else if(type==='help'){
  showSheet('规则帮助','随时搜索，不必记住全部规则',helpPanel('fullRules'));updateHelp($('sheetBody'),game.s.mode);
 }else if(type==='news'){
 showSheet('岛上消息记录','重要消息会在地图中央逐条出现',s.logs.slice(0,40).map(l=>`<div class="row"><small>第 ${l.round} 轮</small><p>${esc(publicLog(s,l.text))}</p></div>`).join(''));
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
$('sheetBody').addEventListener('change',e=>{if(e.target.id==='offerPartner'){openPanel('exchange',+e.target.value);return;}if(activePanel?.type==='advanced'){readAdvancedFields();return;}if(e.target.id==='stockWindow'){stockWindow=+e.target.value;openPanel('stocks');}});
$('sheetHelpBtn').addEventListener('click',()=>toggleSheetHelp($('sheetRuleHelp').hidden));
$('sheetRuleHelp').addEventListener('input',()=>updateHelp($('sheetRuleHelp'),game.s.mode));
$('sheetBody').addEventListener('input',e=>{if(e.target.matches('[data-rule-search]')){updateHelp($('sheetBody'),game.s.mode);return;}if(activePanel?.type==='advanced'){readAdvancedFields();return;}if(e.target.id==='bankAmount'){bankDraft.amount=e.target.value;updateBankPreview(game,bankDraft.kind);return;}if(e.target.dataset.stockQty!==undefined){updateStockPreview(game,+e.target.dataset.stockQty);return;}const key=e.target.dataset.volume;if(!key)return;game.s.options[key]=+e.target.value/100;e.target.nextElementSibling.textContent=e.target.value+'%';audioState();save();});
function setPaused(value){gamePaused=value;syncNewsPause();if(scene){scene.paused=value||!!scene.contextLost;if(value)scene.renderStill();}soundtrack.visibility(value||document.hidden);audioState();$('app').classList.toggle('is-paused',value);$('pauseBtn').setAttribute('aria-pressed',String(value));}
function refreshPanel(){if(activePanel){const {type,id}=activePanel,scroll=$('sheetBody').scrollTop;openPanel(type,id);queueMicrotask(()=>{$('sheetBody').scrollTop=scroll;});}}
let pendingSlot=null;
function prepareSlot(kind,slot,state){const item=repository.read(slot);if(kind==='save'&&!state){state=exportableState(game,started,saved);if(!state)throw Error('没有可保存的旅行。');state=Game.restore(state)?.s;if(!state)throw Error('当前旅行无法保存。');}pendingSlot={kind,slot,state,expectedRaw:item.raw,autoRaw:repository.raw('auto')};if(kind==='load'){if(!item.state)throw Error('存档损坏或版本不兼容。');pendingSlot.state=item.state;pendingSlot.sourceRaw=item.raw;}if(kind==='save'&&item.status==='empty'){performSlot();return;}const description=state||item.state;showSheet(({save:'覆盖这个槽位？',load:'读取这个存档？',delete:'删除这个槽位？',import:'导入到这个槽位？'})[kind],slotName(slot),(item.state&&['save','import'].includes(kind)?'<p>现有槽位：'+esc(slotSummary(item.state).map+' · 第 '+item.state.round+' 轮 · 更新时间 '+slotSummary(item.state).time)+'</p>':'')+'<p>'+esc(description?slotSummary(description).map+' · 第 '+description.round+' 轮 · '+description.players.length+' 人':item.status==='future'?'较新版本存档':'损坏存档')+'</p><p>'+(kind==='load'?'读取会替换当前旅行；原自动存档会先备份。未保存的进度请先导出。':kind==='delete'?'删除后无法从此槽位读取，请先导出。':kind==='import'?'导入文件只写入所选槽位；导入自动槽后会继续该旅行。':'仅覆盖所选槽位，其他手动槽不变。')+'</p><div class="row-actions"><button class="secondary" data-act="slotCancel">取消</button><button class="primary" data-act="slotConfirm">确认'+({save:'覆盖',load:'读取',delete:'删除',import:'导入'})[kind]+'</button></div>',true);}
function saveError(error){return error.name==='QuotaExceededError'?'存储空间不足，请先导出备份。':error.name==='SecurityError'?'浏览器禁止访问本机存储，请导出备份。':error.message;}
function performSlot(){
 const op=pendingSlot;if(!op)return;let activate=false,record;
 try{
  if(op.kind==='delete')repository.remove(op.slot,{expectedRaw:op.expectedRaw});
  else if(op.kind==='load'){
   if(repository.raw(op.slot)!==op.sourceRaw)throw Error('来源存档已变化，请重新选择。');
   const state={...op.state,options:{...game.s.options}};
   record=op.slot==='auto'?repository.save('auto',state,{expectedRaw:op.autoRaw}):repository.replaceAuto(state,{expectedRaw:op.autoRaw});activate=true;
  }else if(op.kind==='import'&&op.slot==='auto'){record=repository.replaceAuto(op.state,{expectedRaw:op.expectedRaw});activate=true;}
  else record=repository.save(op.slot,op.state,{expectedRaw:op.expectedRaw});
 }catch(error){pendingSlot=null;openPanel('saves');toast(saveError(error)+' 操作未完成，请检查槽位。');return;}
 pendingSlot=null;if(op.kind==='load'||op.slot==='auto')saved=record?Game.restore(record):null;
 if(activate){
  game=Game.restore(record);if(pendingReplayBranch?.hash===game.stateHash()){attachRecording(game,pendingReplayBranch.record);pendingReplayBranch=null;}else restoreRecording();relockSession();try{writePreferences(localStorage,game.s.options);}catch{}
  started=true;saveOk=true;blockKey='';actionPacer.reset();dismiss(true);$('startScreen').hidden=true;$('saveStatus').textContent='已自动保存在本机';scene?.home();scene?.followPlayer();if(game.s.handoff)save();render();
 }else{
  if(op.slot==='auto'){saveOk=op.kind!=='delete';$('saveStatus').textContent=saveOk?'已自动保存在本机':'自动槽已删除，下次操作重新保存';if(started&&record)game.s.savedAt=record.savedAt;}
  if(!started)picker();openPanel('saves');
 }
 toast(op.kind==='delete'?'槽位已删除。':activate?'已读取旅行存档。':'槽位已保存。');
}
function handleSlot(act,slot){if(act==='slotCancel'){pendingReplayBranch=null;pendingSlot=null;openPanel('saves');return;}if(act==='slotConfirm'){performSlot();return;}try{if(act==='slotExport'){const item=repository.read(slot),blob=new Blob([repository.export(slot)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='奶蛙大富翁-'+slotName(slot)+(item.state?'-第'+item.state.round+'轮':'-原始数据')+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);return;}prepareSlot(({slotSave:'save',slotLoad:'load',slotDelete:'delete'})[act],slot);}catch(error){toast(error.message);}}
function exportSave(){const state=exportableState(game,started,saved);if(!state)return;const blob=new Blob([repository.serialize(state)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`奶蛙大富翁-第${state.round}轮.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('已导出旅行存档。');}
function send(type,payload={}){const viewer=accountPlayer(game);if(!viewer||viewer.id!==game.s.current||!game.player.human||game.s.handoff)return false;return game.command(type,payload,viewer.id);}
function onAction(){if(!started)return;if(game.s.phase==='finished'){openPanel('finished');return;}if(!game.player.human||game.s.handoff)return;if(game.s.phase==='departure')return;if(game.s.phase==='roll'){scene?.followPlayer();commit(send('roll'));}else if(game.s.phase==='end')commit(send('end'));else openPanel(game.s.phase);}
function durationHint(){$('roundSelect').disabled=advanced.modeId!=='standard';if(advanced.modeId&&advanced.modeId!=='standard'){const mode=modeConfig({id:advanced.modeId});$('roundSelect').value=String(mode.rounds);selectMenus.sync();$('durationHint').textContent=modeDescription(mode);return;}selectMenus.sync();const rounds=+$('roundSelect').value,count=+$('playerCountSelect').value,minutes=rounds*(count*.19+.1);$('durationHint').textContent=rounds===20?'试玩局：适合熟悉操作；完整经营建议 50 轮。':`约 ${Math.round(minutes*.8)}—${Math.round(minutes*1.25)} 分钟，依操作和动画速度变化。`;}
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
$('helpBtn').addEventListener('click',()=>{if(activePanel)toggleSheetHelp(true);else openPanel('help');});$('settingsBtn').addEventListener('click',()=>{if(!pinned)openPanel('settings');});$('saveBtn').addEventListener('click',()=>{if(!pinned)openPanel('saves');});
$('homeBtn').addEventListener('click',()=>{scene?.leaveStudio();$('app').classList.remove('is-studio');scene?.home();$('studioPanel').hidden=true;$('startScreen').hidden=started;render();});$('followBtn').addEventListener('click',()=>{if(scene){if(scene.follow)scene.follow=false;else scene.followPlayer({manual:true});render();toast(scene.follow?'跟随当前奶伴':'自由探索小岛');}});$('qualityBtn').addEventListener('click',()=>{game.s.options.quality=game.s.options.quality==='low'?'auto':'low';commit();});
$('castBtn').addEventListener('click',()=>{if(pinned||!scene||scene.contextLost)return;scene.enterStudio(started?game.player.character:selected);$('app').classList.add('is-studio');$('studioPanel').hidden=false;$('miniMap').hidden=true;$('startScreen').hidden=true;$('actionBtn').disabled=true;tutorial.clear();document.querySelectorAll('.dock-tabs button').forEach(b=>b.disabled=true);});
$('closeStudio').addEventListener('click',()=>{scene?.leaveStudio();$('app').classList.remove('is-studio');$('studioPanel').hidden=true;$('startScreen').hidden=started;render();});
$('studioPanel').addEventListener('click',e=>{const char=e.target.closest('[data-studio-char]'),mode=e.target.closest('[data-studio-mode]'),view=e.target.closest('[data-studio-view]');if(char)scene?.enterStudio(char.dataset.studioChar);if(mode&&scene?.studio)scene.studio.mode=mode.dataset.studioMode;if(view&&scene?.studio){scene.studio.yaw=.45+({front:0,side:Math.PI/2,back:Math.PI}[view.dataset.studioView]);scene.studio.manual=true;}scene?.invalidate();});
$('diceCount').addEventListener('change',e=>{if(game.s.phase==='roll'&&game.player.human){commit(send('setDiceCount',{count:+e.target.value}));}});
document.querySelectorAll('[data-panel]').forEach(b=>b.addEventListener('click',()=>openPanel(b.dataset.panel)));
$('players').addEventListener('click',e=>{const b=e.target.closest('[data-player-id]');if(b&&started&&!pinned)openPanel('player',+b.dataset.playerId);});
$('fallback').addEventListener('click',e=>{const b=e.target.closest('[data-tile]');if(b&&!pinned)openPanel('tile',+b.dataset.tile);});
$('closeSheet').addEventListener('click',()=>{dismiss();render();});$('sheetBackdrop').addEventListener('click',()=>{dismiss();render();});
// ModalFocus owns Tab/Escape; summary and form controls keep native key behavior.
$('sheetBody').addEventListener('change',async e=>{if(e.target.id==='replayImport'){try{const file=e.target.files[0];if(!file)return;if(file.size>5000000)throw Error('回放文件过大');replayPlayer=new ReplayPlayer(await file.text());openPanel('replay');}catch(error){toast(error.message);}return;}
 if(e.target.id==='musicTrack'){game.s.options.track=e.target.value;audioState();save();}
 if(e.target.id==='speedSelect'){game.s.options.speed=+e.target.value;save();render();}
 if(e.target.id==='lightingSelect'){game.s.options.lighting=lightingMode(e.target.value);commit();}
 if(e.target.id==='qualitySelect'){game.s.options.quality=e.target.value;commit();}
 if(e.target.id==='importSave'||e.target.dataset.slotImport){
  const file=e.target.files[0];if(!file)return;try{if(file.size>1e6)throw Error('存档文件过大。');const state=repository.parse(await file.text());if(!state)throw Error('存档不完整或版本不兼容。');prepareSlot('import',e.target.dataset.slotImport||'auto',state);}catch(error){toast(error.message+' 当前进度未修改。');}return;

 }
});

$('sheetBody').addEventListener('click',e=>{
 const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const {act}=b.dataset,id=+b.dataset.id,index=+b.dataset.index,target=+b.dataset.target;let ok=true;
 if(act==='resetTutorial'||act==='disableTutorial'){const persisted=act==='resetTutorial'?tutorial.reset():tutorial.choose('disable');$('tutorialPreferenceStatus').textContent=(act==='resetTutorial'?'教程已重置，关闭设置后会重新显示。':'新手提示已关闭。')+(persisted?'':'本次生效，浏览器未能保存偏好。');return;}
 if(act==='copyResult'){const box=$('resultCopy');box.focus();box.select();navigator.clipboard?.writeText(box.value).then(()=>toast('战绩已复制')).catch(()=>toast('可手动复制已选中的摘要'));return;}
 if(act.startsWith('replay')){try{if(act==='replayCurrent'){replayPlayer=new ReplayPlayer(replayRecord(game));openPanel('replay');return;}if(act==='replayOpen'){replayPlayer=new ReplayPlayer(readHistory(localStorage).matches[id].replay);openPanel('replay');return;}if(act==='replayPlay')replayPlayer.playing=!replayPlayer.playing;if(act==='replayPrev')replayPlayer.turn(-1);if(act==='replayNext')replayPlayer.turn(1);if(act==='replaySpeed')replayPlayer.speed=replayPlayer.speed%3+1;if(act==='replayContinue'){replayPlayer.playing=false;const branch=replayPlayer.continueGame();pendingReplayBranch={hash:branch.stateHash(),record:replayRecord(branch)};prepareSlot('import','auto',branch.s);return;}if(act==='replayExport'){const url=URL.createObjectURL(new Blob([JSON.stringify(replayPlayer.record)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='奶家回放.json';a.click();URL.revokeObjectURL(url);}paintReplay();}catch(error){if(replayPlayer)replayPlayer.playing=false;toast(error.message);}return;}
 if(act==='aiPace'){game.s.options.aiFast=!(game.s.options.aiFast!==false);save();render();refreshPanel();return;}
 if(act==='auctionBid'||act==='auctionPass'){const a=game.s.auction;if(!a||!game.s.players[a.actor].human)return;const ok=game.command(act,act==='auctionBid'?{amount:Number($('auctionAmount').value)}:{},a.actor);if(ok)dismiss(true);commit(ok);return;}
 if(act==='proposeOffer'){const ok=send('proposeOffer',readOffer(game,$('sheetBody')));if(ok){dismiss(true);openPanel('negotiation');}commit(ok);return;}
 if(act==='resolveOffer'||act==='cancelOffer'){const ok=send('resolveOffer',{cancel:act==='cancelOffer'});if(ok)dismiss(true);commit(ok);if(ok)toast(game.s.logs[0].text);return;}
 if(act==='acceptTurn'){if(game.command('acceptTurn')){dismiss(true);blockKey='';bankDraft={kind:'deposit',amount:'300'};stockHeld=false;commit();}return;}
 if(game.s.handoff)return;
 if(['card','useCard','construct','research','upgrade','sell','demolish','bank','trade','shop','vehicle','estatePay','estateBuy','buy','pass','branch','ack','settle','bankrupt'].includes(act)&&(!game.player.human||accountPlayer(game)?.id!==game.s.current))return;
 if(['stockQty','bankKind','bankQty'].includes(act)&&!accountPlayer(game))return;
 if(act.startsWith('slot')){handleSlot(act,b.dataset.slot);return;}
 if(act==='cardStep'){const choice=$('sheetBody').querySelector('[data-card-step=\"'+b.dataset.steps+'\"]');choice?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});choice?.querySelector('h3')?.focus({preventScroll:true});return;}
 if(act==='locateDeed'){scene?.focusLot(id,{manual:true});openPanel('tile',id);return;}
 if(act==='bankKind'){bankDraft.kind=b.dataset.kind;refreshPanel();return;}
 if(act==='bankQty'){bankDraft.amount=String(b.dataset.amount==='max'?bankLimit(game,bankDraft.kind):b.dataset.amount);$('bankAmount').value=bankDraft.amount;updateBankPreview(game,bankDraft.kind);return;}
 if(act==='applyAdvanced'){readAdvancedFields();if(setupError(advancedDraft,advancedDraft.character||selected,+$('playerCountSelect').value))return;selected=advancedDraft.character||selected;advanced=normalizeSetup(advancedDraft);advancedDraft=null;try{localStorage.setItem('naiwa-setup-v1',JSON.stringify(advanced));}catch{}dismiss(true);picker();durationHint();render();toast('高级设置已保存，新局按所选阵容开始。');return;}
 if(act==='resetAdvanced'){advancedDraft=normalizeSetup();openPanel('advanced');return;}
 if(act==='allRandom'){readAdvancedFields();advancedDraft.opponents=[];openPanel('advanced');return;}
 if(act==='playerView'){openPanel('player',id);return;}
 if(act==='locatePlayer'){const target=game.s.players[id];if(target?.alive){dismiss(true);scene?.focusTile(target.pos);render();}return;}
 if(act==='confirmSell'){openPanel('confirmSell',id);return;}
 if(act==='chooseBuilding'){openPanel('buildHere',id);return;}
 if(act==='chooseResearch'){openPanel('researchChange',{id,key:b.dataset.key});return;}
 if(act==='stockFilter'){stockHeld=!stockHeld;openPanel('stocks');return;}
 if(act==='stockQty'){const input=$('qty'+id),pos=game.position(id,accountPlayer(game));input.value=b.dataset.qty==='maxBuy'?Math.min(10000,Math.floor(accountPlayer(game).money/pos.price)):b.dataset.qty==='maxSell'?Math.min(10000,pos.qty):b.dataset.qty;updateStockPreview(game,id);return;}
 if(act==='resumeGame'){dismiss(true);render();return;}
 if(act==='copyLink'){navigator.clipboard?.writeText($('shareUrl').value).then(()=>toast('试玩链接已复制，发给朋友就能玩。')).catch(()=>{$('shareUrl').select();toast('请长按链接复制。');});if(!navigator.clipboard){$('shareUrl').select();toast('请长按链接复制。');}return;}
 if(act==='panel'){if(game.s.phase==='debt'){if(b.dataset.panel==='bank'){const draft=debtBankDraft(game);if(draft)bankDraft=draft;}if(b.dataset.panel==='stocks')stockHeld=true;}openPanel(b.dataset.panel);return;}
 if(act==='card'){const key=game.player.cards[index],reason=game.cardHint(key);if(reason){toast(reason);openPanel('cards');return;}if(CARDS[key].target==='self'){ok=send('card',{index});if(ok){dismiss(true);commit();}else commit(false);}else openPanel('cardTarget',index);return;}
 if(act==='useCard'){const reason=game.cardHint(game.player.cards[index]);if(reason){toast(reason);openPanel('cards');return;}ok=send('card',{index,target});if(ok){dismiss(true);commit();}else commit(false);return;}
 if(act==='construct')ok=send('construct',{id,buildingType:b.dataset.type});else if(act==='research')ok=send('setResearch',{id,key:b.dataset.key});else if(act==='upgrade')ok=send('upgrade',{id});else if(act==='sell')ok=send('sell',{id});else if(act==='demolish'){ok=send('demolish',{id});if(ok)dismiss(true);}else if(act==='confirmDemolish'){openPanel('confirmDemolish',id);return;}else if(act==='bank')ok=send('bank',{kind:b.dataset.kind,amount:+$('bankAmount').value});else if(act==='trade')ok=send('trade',{stock:id,qty:+$('qty'+id).value*+b.dataset.sign});else if(act==='shop')ok=send('shop',{key:b.dataset.key});else if(act==='vehicle')ok=send('vehicle',{id});
 else if(act==='estatePay'||act==='estateBuy'){ok=send('resolveEstate',{buy:act==='estateBuy'});if(ok||game.s.phase==='debt')dismiss(true);}
 else if(act==='buy'||act==='pass'){ok=send('buy',{yes:act==='buy'});if(ok)dismiss(true);}
 else if(act==='branch'){ok=send('step',{choice:id});if(ok)dismiss(true);}
 else if(act==='ack'){ok=send('acknowledge');if(ok)dismiss(true);}
 else if(act==='settle'){ok=send('settle');if(ok)dismiss(true);}
 else if(act==='bankrupt'){ok=send('bankrupt');if(ok)dismiss(true);}
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

 if(ok){if(['construct','upgrade','demolish','sell'].includes(act))scene?.focusLot(id);commit();if(act==='sell'||act==='demolish'){dismiss(true);if(game.s.phase==='debt')render();else openPanel('deeds');return;}if(act==='research'){openPanel('buildHere',id);return;}if(activePanel?.type==='buildHere'&&['upgrade','construct'].includes(act))dismiss(true);if(activePanel&&!['buy','estate','event','branch','finished','debt','confirmBankrupt'].includes(activePanel.type))refreshPanel();else if(activePanel?.type==='debt')openPanel('debt');}else commit(false);
});
function skipShow(){if(!started||activePanel||game.s.handoff||scene?.studio||game.s.phase==='finished')return;if(playback.skip(game,()=>{scene?.skipPresentation();newsFeed.skipPresentation();actionPacer.reset();})){$('playbackStatus').textContent='当前演出已结束；重要结果和待决选择仍保留。';render();}}
$('speedBtn').addEventListener('click',()=>{game.s.options.speed=game.s.options.speed%3+1;save();render();});$('aiPaceBtn').addEventListener('click',()=>{game.s.options.aiFast=!(game.s.options.aiFast!==false);save();render();});$('skipShowBtn').addEventListener('click',skipShow);
function paintReplay(){if(!$('replayView')||!replayPlayer)return;const g=replayPlayer.game;$('sheetBody').querySelector('[data-act=replayContinue]').disabled=g.s.phase==='finished';$('replayView').innerHTML=`<p>${MAPS[g.s.mapVersion].name} · ${replayPlayer.playing?'播放中':'暂停'} · ${replayPlayer.speed}× · 第${g.s.round}轮 玩家${g.s.current+1} · 命令${replayPlayer.index}/${replayPlayer.record.commands.length} · 骰子 ${g.s.dice.join('+')}</p><p>${g.ranking().map(p=>g.char(p).name+(p.alive?'':'（破产）')+' 净资产 '+g.worth(p)).join('；')}</p><p>${esc(publicLog(g.s,g.s.logs[0]?.text||'',true))}</p><div class="replay-map" role="list" aria-label="回放地图">${g.tiles.map(t=>{const o=g.s.ownership[t.id],names=g.s.players.filter(p=>p.alive&&p.pos===t.id).map(p=>g.char(p).name).join('、');return `<div class="replay-tile" role="listitem" aria-current="${g.player.pos===t.id?'location':'false'}">${t.id+1}. ${esc(t.name)}<br><strong>${esc(names)}</strong>${o?'<br>'+g.char(g.s.players[o.player]).name+' · '+o.level+'级':''}</div>`;}).join('')}</div>`;}
function tick(){
 clearTimeout(timer);playback.sweep();if(activePanel?.type==='replay'&&replayPlayer?.playing&&performance.now()>=replayDeadline){try{replayPlayer.step();paintReplay();replayDeadline=performance.now()+600/replayPlayer.speed;}catch(error){replayPlayer.playing=false;toast(error.message);}}
 timer=setTimeout(tick,90);
 const step=advanceSession(game,{
  started,hidden:document.hidden,paused:gamePaused,studio:!!scene?.studio,panelOpen:!!activePanel,
  ready:()=>{
   const visuals=scene&&!scene.contextLost;
   return actionPacer.ready({news:newsFeed.busy,moving:!!visuals&&scene.isMoving(),effects:!!visuals&&scene.fx.busy});
  }
 });
 if(step){actionPacer.after(step.phase,presentationSpeed(game.s.options,!game.player.human));save();render();}
}

document.addEventListener('visibilitychange',()=>{syncNewsPause();soundtrack.visibility(document.hidden||gamePaused);if(document.hidden)save();else render();});window.addEventListener('pagehide',save);
picker();render();tick();const brandBitmap=portraitBitmap('naiwa');if(brandBitmap)document.querySelector('.brand img').src=brandBitmap;
// Same-origin offline cache; portable single-file distribution skips registration.
if(!window.__NAIWA_PORTABLE__&&'serviceWorker'in navigator&&location.protocol!=='file:')navigator.serviceWorker.register(globalThis.__NAIWA_SERVICE_WORKER_URL__||'./sw.js?v=16').catch(()=>{});

globalThis.__NAIWA_BOOT__?.set(75,'正在载入字体、图标与声音…');await prepareStartupAssets();scene?.renderStill();await nextPaint();globalThis.__NAIWA_BOOT__?.set(100,'准备完成，欢迎来到奶家！');await nextPaint();globalThis.__NAIWA_BOOT__?.ready();syncTutorial();if(scene&&!scene.contextLost&&$('loadingScreen').hidden)scene.paused=gamePaused;
}
startGame().catch(error=>{console.error('Game startup failed',error);globalThis.__NAIWA_BOOT__?.fail();});
