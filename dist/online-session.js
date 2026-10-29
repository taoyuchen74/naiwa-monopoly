import { OnlineClient } from './online-client.js';
import { OnlineView } from './online-view.js';
import { IslandScene } from './scene.js';
import { MiniMap, MapOverview } from './minimap.js';
import { ModalFocus } from './modal-focus.js';
import { GameOrientation } from './orientation.js';
import { mountPlayerDrawer } from './mobile-ui.js';
import { readPreferences, writePreferences } from './preferences.js';
import { prepareStartupAssets, nextPaint } from './startup.js';
import { GameAudio } from './audio.js';
import { CHARACTERS, CARDS, VEHICLES } from './content.js';
import { MAPS } from './maps.js';
import { GameAnnouncements } from './announcements.js';
import { helpPanel, updateHelp } from './rule-help.js';

const $ = (id) => document.getElementById(id);
const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
const phases = {
  roll: '待掷骰',
  departure: '出发结算',
  moving: '行进中',
  branch: '选择岔路',
  buy: '购地选择',
  estate: '支付租金',
  event: '确认事件',
  end: '经营与结束回合',
  debt: '筹款',
  auction: '地产拍卖',
  finished: '已结束',
};
const errors = {
  DUPLICATE: '重复操作已拒绝',
  STALE_REVISION: '状态已更新，请重试',
  OUT_OF_ORDER: '操作顺序已变化，请重试',
  AUTH_FAILED: '身份不匹配',
  INVALID_PAYLOAD: '参数不合法',
  INVALID_PHASE: '当前阶段不能执行',
  RULE_REJECTED: '余额、资产或目标不符合规则',
  AI_CONTROLLED: '请先接回控制',
  NOT_CURRENT_PLAYER: '尚未轮到你',
  TURN_TIMEOUT: '本回合已超时',
  NOT_READY: '需要全部玩家在线并准备',
  HOST_ONLY: '只有房主可以修改',
  CHARACTER_TAKEN: '角色已被其他玩家选择',
  ROOM_NOT_FOUND: '房间不存在或已过期',
  UNSUPPORTED_COMMAND: '在线房间暂不支持此操作',
};
const categories = {
  cards: ['card'],
  shop: ['shop', 'vehicle'],
  deeds: ['sell'],
  build: ['construct', 'upgrade', 'demolish', 'setResearch'],
};
const primary = ['roll', 'end'];
const decisions = new Set(['buy', 'estate', 'branch', 'event', 'debt', 'auction', 'finished']);
const titles = {
  cards: '我的卡包',
  bank: '奶币银行',
  stocks: '奶家证券所',
  shop: '奶伴商店',
  deeds: '我的地产',
  build: '建设与经营',
  room: '在线房间',
  settings: '旅行设置',
  decision: '当前选择',
  overview: '全岛大地图',
  tile: '地块详情',
  help: '规则帮助',
};

export async function startOnlineSession() {
  const app = $('app'),
    client = new OnlineClient();
  const options = readPreferences(localStorage, {
    sound: true,
    speed: 1,
    quality: 'auto',
    lighting: 'day',
  });
  const view = new OnlineView(options),
    audio = new GameAudio(options);
  let scene = null,
    panel = null,
    panelKey = '',
    confirmation = null,
    offset = 0,
    lastDecision = '',
    lastTurn = '',
    toastTimer;
  const announce = new GameAnnouncements(() =>
    $('sheet').hidden ? $('gameAnnouncements') : $('dialogAnnouncements'),
  );
  const notify = (message) => {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').classList.add('show');
    announce.say(message);
    toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3000);
  };
  const saveOptions = () => {
    writePreferences(localStorage, options);
    audio.setOptions(options);
  };
  app.dataset.session = 'online';
  app.classList.add('is-menu');
  $('startScreen').hidden = true;
  $('saveStatus').textContent = '在线房间 · 本机存档保持原样';
  $('saveBtn').setAttribute('aria-label', '在线房间与重连');
  $('saveBtn').lastElementChild.textContent = '房间 ↗';
  document.querySelector('.aside-heading span').textContent = '在线房间';
  document.querySelector('.map-title p').textContent = '与朋友一起买地经营';
  for (const id of [
    'aiPaceBtn',
    'planBtn',
    'talentBtn',
    'castBtn',
    'difficultyBtn',
    'pauseBtn',
    'newsHistoryBtn',
    'sheetHelpBtn',
  ])
    $(id).hidden = true;
  $('shareBtn').textContent = '房';
  $('shareBtn').setAttribute('aria-label', '在线房间');
  $('shareBtn').title = '房间与重连';
  const status = document.createElement('section');
  status.className = 'online-session-status';
  status.innerHTML =
    '<strong id="roomTitle">在线房间</strong><p id="connection" role="status">正在检查房间服务…</p><p id="deadline"></p><p id="commandStatus" role="status" aria-live="polite"></p><span id="onlineGame" class="sr-only" hidden>联机对局</span>';
  document.querySelector('.world').append(status);
  mountPlayerDrawer(app);
  const modal = new ModalFocus($('sheet'), {
    onEscape: () => {
      if (mandatory() && !confirmation) {
        notify('请完成当前选择；联机倒计时继续。');
        return;
      }
      if (confirmation) {
        confirmation = null;
        panelKey = '';
        paintPanel();
        return;
      }
      close();
    },
    fallback: () => ($('actionBtn').disabled ? $('saveBtn') : $('actionBtn')),
  });
  function mandatory() {
    return (
      panel === 'decision' &&
      decisions.has(client.state?.game?.phase) &&
      client.state?.controls.actions.length > 0
    );
  }
  function close() {
    modal.close();
    $('sheet').hidden = true;
    $('sheetBackdrop').hidden = true;
    panel = null;
    panelKey = '';
    confirmation = null;
  }
  function open(type, id) {
    if (!client.state?.game && !['room', 'settings'].includes(type)) return;
    panel = type;
    selectedTile = id ?? view.s?.players[client.state.playerId]?.pos ?? 0;
    confirmation = null;
    panelKey = '';
    $('sheet').hidden = false;
    $('sheetBackdrop').hidden = false;
    $('sheet').dataset.panel = type;
    $('sheet').classList.remove('is-collapsed');
    $('collapseSheet').setAttribute('aria-expanded', 'true');
    $('collapseSheet').textContent = '收起';
    paintPanel();
    modal.open();
  }
  let selectedTile = 0;
  function send(type, payload = {}, confirm = false) {
    if (confirm) {
      confirmation = { type, payload, revision: client.state.revision };
      panelKey = '';
      paintPanel();
      modal.first();
      return;
    }
    if (!client.command(type, payload)) notify('正在等待连接或上一操作确认。');
  }
  function actionMarkup(actions) {
    return actions
      .map(
        (a, i) =>
          '<button class="secondary" data-online-action="' +
          i +
          '" data-command="' +
          esc(a.type) +
          '" data-action-key="' +
          esc(JSON.stringify([a.type, a.payload])) +
          '">' +
          esc(a.label) +
          '</button>',
      )
      .join('');
  }
  let panelActions = [];
  function paintPanel() {
    if (!panel) return;
    const s = client.state,
      g = s?.game,
      off = !client.connected || client.pending;
    const key = JSON.stringify([
      panel,
      ['help', 'settings'].includes(panel) ? null : s?.revision,
      s?.status,
      confirmation?.revision,
    ]);
    if (key === panelKey) {
      for (const b of $('sheetBody').querySelectorAll(
        '[data-online-action],form button,[data-network]',
      ))
        b.disabled = off;
      if ($('startRoom'))
        $('startRoom').disabled =
          off || s.seats.length < 2 || s.seats.some((x) => !x.ready || !x.connected);
      if ($('confirmOnlineAction'))
        $('confirmOnlineAction').disabled = off || confirmation.revision !== s.revision;
      return;
    }
    panelKey = key;
    const active = document.activeElement,
      focusId = active?.id,
      focusKey = active?.dataset?.actionKey;
    const detailsOpen = [...$('sheetBody').querySelectorAll('details')].map((el) => el.open);
    const scrollTop = $('sheetBody').scrollTop;
    const fields = Object.fromEntries(
      [...$('sheetBody').querySelectorAll('input,select')].map((el) => [
        el.id,
        { value: el.value, start: el.selectionStart, end: el.selectionEnd },
      ]),
    );
    $('sheetTitle').textContent = titles[panel] || '在线房间';
    $('sheetSubtitle').textContent = g
      ? '在线 · 第 ' + g.round + ' / ' + g.maxRounds + ' 轮 · 打开面板不会暂停倒计时'
      : '2—6 人 · 无需账号 · 本机进度独立保留';
    let html = '';
    panelActions = [];
    if (confirmation) {
      $('sheetTitle').textContent = '确认执行此操作？';
      html =
        '<p>操作确认后由房间服务器校验并执行。</p><div class="row-actions"><button id="cancelOnlineConfirm">取消</button><button id="confirmOnlineAction" class="primary" data-network>确认</button></div>';
    } else if (panel === 'room') {
      const own = s?.seats[s.playerId],
        settings = s?.settings;
      html =
        '<p id="roomMeta">' +
        (s
          ? '你是玩家 ' + (s.playerId + 1) + (s.playerId === 0 ? ' · 房主' : '')
          : '创建新房间，或输入邀请码加入朋友。') +
        '</p>';
      if (!s) {
        html +=
          '<div id="entrance"><label for="onlineName">玩家名称（1—16字）</label><input id="onlineName" maxlength="16" value="奶伴" autocomplete="nickname"><label for="roomCode">6位邀请码</label><input id="roomCode" maxlength="6" inputmode="numeric" autocomplete="off"><div class="row-actions"><button id="createRoom">创建房间</button><button id="joinRoom">加入房间</button></div></div>';
      } else {
        html +=
          '<div id="seatList">' +
          s.seats
            .map(
              (x) =>
                '<p class="seat">' +
                (x.id + 1) +
                ' · ' +
                esc(x.name) +
                '（' +
                CHARACTERS.find((c) => c.id === x.character).name +
                '） · ' +
                (x.connected ? '在线' : '断线') +
                ' · ' +
                (x.ai ? 'AI托管' : x.ready ? '已准备' : '未准备') +
                '</p>',
            )
            .join('') +
          '</div>';
        if (s.status === 'LOBBY') {
          html +=
            '<label for="onlineCharacter">我的角色</label><select id="onlineCharacter">' +
            CHARACTERS.map(
              (c) =>
                '<option value="' +
                c.id +
                '" ' +
                (c.id === own.character ? 'selected' : '') +
                ' ' +
                (s.seats.some((x) => x.id !== own.id && x.character === c.id) ? 'disabled' : '') +
                '>' +
                c.name +
                '</option>',
            ).join('') +
            '</select><button id="configureRoom" data-network>确认角色</button>';
          html +=
            '<fieldset ' +
            (s.playerId !== 0 ? 'disabled' : '') +
            '><legend>房主设置</legend><label for="onlineMapSelect">地图</label><select id="onlineMapSelect">' +
            [1, 2]
              .map(
                (id) =>
                  '<option value="' +
                  id +
                  '" ' +
                  (settings.mapVersion === id ? 'selected' : '') +
                  '>' +
                  MAPS[id].name +
                  '</option>',
              )
              .join('') +
            '</select><label for="onlineRounds">轮数</label><select id="onlineRounds">' +
            [20, 30, 50, 80]
              .map(
                (n) =>
                  '<option ' + (settings.rounds === n ? 'selected' : '') + '>' + n + '</option>',
              )
              .join('') +
            '</select><label for="onlineDifficulty">托管难度</label><select id="onlineDifficulty">' +
            [
              ['easy', '轻松'],
              ['normal', '标准'],
              ['hard', '高手'],
            ]
              .map(
                ([id, label]) =>
                  '<option value="' +
                  id +
                  '" ' +
                  (settings.difficulty === id ? 'selected' : '') +
                  '>' +
                  label +
                  '</option>',
              )
              .join('') +
            '</select><label><input id="onlineTalents" type="checkbox" ' +
            (settings.talents ? 'checked' : '') +
            '> 开启角色天赋</label><button id="applyRoomSettings" data-network>应用设置（全部重新准备）</button></fieldset>';
          html +=
            '<div class="row-actions"><button id="readyRoom" data-network>' +
            (own.ready ? '取消准备' : '准备') +
            '</button>' +
            (s.playerId === 0
              ? '<button id="startRoom" class="primary" data-network>开始对局</button>'
              : '') +
            '</div>';
        } else if (s.status === 'PLAYING')
          html +=
            '<button id="controlRoom" data-network>' +
            (own.ai ? '接回我的控制' : '交给AI托管') +
            '</button>';
      }
      html +=
        '<details><summary>同步信息与恢复</summary><p id="syncInfo">' +
        (s
          ? 'Revision ' + s.revision + ' · 下一序号 ' + s.nextSequence + ' · ' + s.stateHash
          : '暂无房间') +
        '</p><button id="reconnectRoom">重新连接</button><button id="forgetRoom">清除本页房间提示</button><p>断线会自动重连；超时或离开后由AI托管。服务重启或房间过期无法恢复。</p></details><p>在线进度由房间服务保存；本机存档、云存档、回放导入不用于在线对局。暂不支持在线组合交易与自定义模式。</p><a class="secondary online-local-link" href="./">返回本机游玩（离开后AI托管）</a>';
    } else if (panel === 'help') {
      html =
        '<p>在线房间按服务器设置结算。打开帮助不会暂停计时；模式配置与本机存档独立。</p>' +
        helpPanel('onlineRules');
    } else if (panel === 'settings') {
      html =
        '<label for="onlineQuality">画面质量</label><select id="onlineQuality"><option value="auto">自适应完整画质</option><option value="low">省电画质</option></select><p>画质与速度只影响本机演出，联机计时继续。</p><button id="onlineRoomButton">房间与重连</button>';
    } else if (panel === 'tile') {
      const t = view.tiles[selectedTile],
        o = g.ownership[t.id];
      html =
        '<h3>' +
        esc(t.name) +
        '</h3><p>' +
        esc(t.description || '') +
        '</p><p>' +
        (o ? esc(s.seats[o.player].name) + ' · ' + o.level + ' 级' : '标价 ' + t.price) +
        '</p>';
    } else if (panel === 'overview') {
      html = '<div class="map-overview"></div>';
    } else if (panel === 'decision' && g.phase === 'finished') {
      $('sheetTitle').textContent = '旅行结算';
      html =
        '<ol>' +
        [...g.players]
          .sort((a, b) => b.worth - a.worth)
          .map(
            (p) =>
              '<li>' +
              esc(s.seats[p.id].name) +
              ' · 净资产 ' +
              p.worth +
              (p.alive ? '' : ' · 已破产') +
              '</li>',
          )
          .join('') +
        '</ol><button id="onlineRoomButton">返回房间</button>';
    } else {
      const names = categories[panel];
      panelActions = s.controls.actions.filter((a) =>
        names
          ? names.includes(a.type)
          : ![
              'card',
              'shop',
              'vehicle',
              'sell',
              'construct',
              'upgrade',
              'demolish',
              'setResearch',
              'setDiceCount',
              'roll',
              'end',
            ].includes(a.type),
      );
      if (panel === 'decision' && g.notice)
        html +=
          '<h3>' +
          esc(g.notice.title) +
          '</h3><p>' +
          esc(g.notice.text) +
          '</p><p>' +
          esc((g.notice.outcomes || []).join('；')) +
          '</p>';
      if (g.debt && panel === 'decision')
        html +=
          '<p>待偿付 ' +
          g.debt.amount +
          '：' +
          esc(g.debt.label) +
          '</p><div class="row-actions"><button data-open="bank">筹款：银行</button><button data-open="deeds">筹款：出售地产</button></div>';
      if (['cards', 'bank', 'stocks', 'shop'].includes(panel))
        html +=
          '<p id="privateAccount">我的现金 ' +
          s.self.money +
          ' · 存款 ' +
          s.self.deposit +
          ' · 贷款 ' +
          s.self.loan +
          ' · 点券 ' +
          s.self.tickets +
          '</p>';
      if (panel === 'cards')
        html +=
          '<p id="myCards">我的手牌：' + s.self.cards.map((k) => CARDS[k].name).join('、') + '</p>';
      if (panel === 'stocks') html += '<p>我的持股：' + s.self.stocks.join(' / ') + '</p>';
      html += '<div id="ruleActions" class="row-actions">' + actionMarkup(panelActions) + '</div>';
      if (panel === 'bank' && s.controls.bank)
        html +=
          '<form id="bankForm"><label for="onlineBankKind">业务</label><select id="onlineBankKind"><option value="deposit">存款</option><option value="withdraw">取款</option><option value="borrow">贷款</option><option value="repay">还款</option></select><label for="onlineBankAmount">金额</label><input id="onlineBankAmount" type="number" inputmode="numeric" min="1" value="100" required><button type="submit">确认银行操作</button></form>';
      if (panel === 'stocks' && s.controls.stocks)
        html +=
          '<form id="stockForm"><label for="onlineStock">股票</label><select id="onlineStock">' +
          g.market
            .map(
              (m, i) => '<option value="' + i + '">' + esc(m.name) + ' · ' + m.price + '</option>',
            )
            .join('') +
          '</select><label for="onlineStockQty">股数（负数为卖出）</label><input id="onlineStockQty" type="number" inputmode="numeric" value="1" required><button type="submit">确认股票操作</button></form>';
      if (panel === 'decision' && s.controls.auction)
        html +=
          '<p>本次拍卖最低 ' +
          s.controls.auction.min +
          '，可用现金 ' +
          s.controls.auction.max +
          '</p><form id="auctionForm"><label for="onlineBid">报价</label><input id="onlineBid" type="number" inputmode="numeric" min="' +
          s.controls.auction.min +
          '" max="' +
          s.controls.auction.max +
          '" value="' +
          s.controls.auction.min +
          '" required><button type="submit">确认出价</button></form>';
      if (!panelActions.length && !['bank', 'stocks'].includes(panel))
        html += '<p>当前没有可用操作。轮到自己并满足使用条件后开放。</p>';
    }
    $('sheetBody').innerHTML = html;
    for (const [index, el] of [...$('sheetBody').querySelectorAll('details')].entries())
      el.open = detailsOpen[index] || false;
    $('sheetBody').scrollTop = scrollTop;
    for (const b of $('sheetBody').querySelectorAll('button:not([class])'))
      b.className = 'secondary';
    for (const [id, f] of Object.entries(fields)) {
      const el = $(id);
      if (
        el &&
        !['onlineCharacter', 'onlineMapSelect', 'onlineRounds', 'onlineDifficulty'].includes(id)
      ) {
        el.value = f.value;
        if (f.start !== null && el.setSelectionRange && ['text', 'search'].includes(el.type))
          el.setSelectionRange(f.start, f.end);
      }
    }
    if (panel === 'help') updateHelp($('sheetBody'));
    if (panel === 'settings') $('onlineQuality').value = options.quality;
    if (panel === 'overview') {
      new MapOverview($('sheetBody').firstElementChild, view, {
        selected: selectedTile,
        inspect: (id) => {
          scene?.focusTile(id);
          open('tile', id);
        },
      });
      $('sheetBody').querySelector('.overview-hint').textContent = '点选查看地块；联机倒计时继续。';
    }
    for (const b of $('sheetBody').querySelectorAll(
      '[data-online-action],form button,[data-network]',
    ))
      b.disabled = off;
    if ($('startRoom'))
      $('startRoom').disabled =
        off || s.seats.length < 2 || s.seats.some((x) => !x.ready || !x.connected);
    if ($('onlineName'))
      for (const id of ['createRoom', 'joinRoom']) $(id).disabled = client.pending;
    if ($('confirmOnlineAction'))
      $('confirmOnlineAction').disabled = off || confirmation.revision !== s.revision;
    if ($('sheet').contains(active)) {
      const target =
        (focusId && $(focusId)) ||
        [...$('sheetBody').querySelectorAll('[data-action-key]')].find(
          (n) => n.dataset.actionKey === focusKey,
        );
      if (target && !target.disabled) target.focus({ preventScroll: true });
      else modal.first();
    }
  }
  function render() {
    const s = client.state,
      g = s?.game,
      off = !client.connected || client.pending;
    $('onlineGame').hidden = !g;
    if (!s) {
      paintPanel();
      return;
    }
    $('roomTitle').textContent = '房间 ' + s.roomId;
    offset = s.serverNow - Date.now();
    if (g) {
      const before = view.s;
      view.update(s);
      app.classList.remove('is-menu');
      $('onlineGame').dataset.revision = String(s.revision);
      $('mapHeading').textContent = MAPS[g.mapVersion].name;
      $('round').textContent = '第 ' + g.round + ' / ' + g.maxRounds + ' 轮';
      $('weather').textContent = '在线';
      $('turnName').textContent =
        s.seats[g.actor].name + (g.actor === s.playerId ? ' · 我的回合' : ' · 等待中');
      $('turnHint').textContent = phases[g.phase] || '等待服务器';
      $('turnAvatar').textContent = CHARACTERS.find(
        (c) => c.id === g.players[g.actor].character,
      ).name;
      $('cardCount').textContent = String(s.self.cards.length);
      $('dice').textContent = g.dice.join(' + ');
      const action = s.controls.actions.find((a) => primary.includes(a.type));
      $('actionBtn').textContent =
        action?.label ||
        (decisions.has(g.phase) && g.actor === s.playerId ? '处理当前选择' : '等待其他玩家');
      $('actionBtn').dataset.command = action?.type || '';
      $('actionBtn').disabled =
        off || (!action && (!decisions.has(g.phase) || g.actor !== s.playerId));
      $('diceCount').hidden = !s.controls.actions.some((a) => a.type === 'setDiceCount');
      $('diceCount').replaceChildren(
        ...Array.from({ length: VEHICLES[s.self.vehicle].dice }, (_, i) => {
          const o = document.createElement('option');
          o.value = String(i + 1);
          o.textContent = i + 1 + '颗骰子';
          return o;
        }),
      );
      $('diceCount').value = String(s.self.diceCount);
      $('diceCount').disabled = off;
      $('players').innerHTML = g.players
        .map(
          (p) =>
            '<button class="player ' +
            (g.actor === p.id ? 'active' : '') +
            '" id="online-player-' +
            p.id +
            '" data-player-id="' +
            p.id +
            '" data-public-player="' +
            p.id +
            '"><strong>' +
            esc(s.seats[p.id].name) +
            ' · ' +
            CHARACTERS.find((c) => c.id === p.character).name +
            '</strong><span class="player-money">' +
            p.money +
            '</span><span class="player-stats">净资产 ' +
            p.worth +
            ' · ' +
            (p.alive ? (s.seats[p.id].ai ? 'AI托管' : '在局') : '已破产') +
            '</span></button>',
        )
        .join('');
      if (scene) {
        scene.paused = false;
        scene.setMenu(false);
        scene.sync(view);
      }
      mini.sync(view);
      if (!$('fallback').hidden)
        $('fallback').innerHTML =
          '<div class="fallback-grid">' +
          view.tiles
            .map(
              (t) =>
                '<button class="fallback-tile ' +
                (view.player.pos === t.id ? 'current' : '') +
                '" id="online-tile-' +
                t.id +
                '" data-tile="' +
                t.id +
                '">' +
                (t.id + 1) +
                '. ' +
                esc(t.name) +
                '<br>' +
                g.players
                  .filter((p) => p.alive && p.pos === t.id)
                  .map((p) => esc(s.seats[p.id].name))
                  .join(' ') +
                '</button>',
            )
            .join('') +
          '</div>';
      const turn =
        g.phase === 'finished' ? 'finished' : s.seats[g.actor].ai ? 'ai' : g.round + ':' + g.actor;
      if (turn !== lastTurn) {
        lastTurn = turn;
        announce.say(
          turn === 'finished'
            ? '本次旅行已结束。'
            : turn === 'ai'
              ? '电脑奶伴正在行动。'
              : g.actor === s.playerId
                ? '轮到你了。'
                : '轮到 ' + s.seats[g.actor].name + '。',
        );
      }
      const decision = g.phase + ':' + g.current + ':' + g.round + ':' + (g.auction?.actor ?? '');
      if (
        decisions.has(g.phase) &&
        ((g.actor === s.playerId && s.controls.actions.length) || g.phase === 'finished') &&
        decision !== lastDecision
      ) {
        lastDecision = decision;
        open('decision');
      } else if (panel === 'decision' && !decisions.has(g.phase)) {
        close();
        if (before?.phase === 'buy' && s.controls.actions.some((a) => a.type === 'construct'))
          open('build');
      }
      if (panel === 'room' && s.status !== 'LOBBY' && !before) close();
    } else if (panel !== 'room') open('room');
    $('speedBtn').textContent = options.speed + '×';
    paintPanel();
    countdown();
  }
  function countdown() {
    const s = client.state;
    $('deadline').textContent = s?.deadline
      ? '行动剩余 ' +
        Math.max(0, Math.ceil((s.deadline - (Date.now() + offset)) / 1000)) +
        ' 秒 · 面板不暂停'
      : '';
  }
  try {
    scene = new IslandScene($('scene'), (id) => {
      if (view.s && !mandatory()) open('tile', id);
    });
    scene.setQuality(options.quality);
    scene.paused = true;
  } catch {
    $('fallback').hidden = false;
  }
  const mini = new MiniMap($('miniMap'), {
    jump: (id) => scene?.focusTile(id),
    inspect: (id) => open('tile', id),
    overview: (id) => open('overview', id),
  });
  new GameOrientation(app, $('orientationBtn'), { notify, resize: () => scene?.resize() });
  $('scene').addEventListener('renderlost', () => {
    $('fallback').hidden = false;
    render();
    notify('3D 暂不可用，已切换简洁地图。');
  });
  $('scene').addEventListener('renderrestored', () => {
    $('fallback').hidden = true;
    render();
  });
  $('fallback').addEventListener('click', (e) => {
    const id = e.target.closest('[data-tile]')?.dataset.tile;
    if (id !== undefined && !mandatory()) open('tile', +id);
  });
  $('players').addEventListener('click', (e) => {
    const id = e.target.closest('[data-public-player]')?.dataset.publicPlayer;
    if (id !== undefined && !mandatory()) open('tile', client.state.game.players[+id].pos);
  });
  for (const b of document.querySelectorAll('.dock-tabs [data-panel]'))
    b.addEventListener('click', () => open(b.dataset.panel));
  $('actionBtn').addEventListener('click', () => {
    const action = client.state?.controls.actions.find((a) => primary.includes(a.type));
    if (action) send(action.type, action.payload);
    else open('decision');
  });
  $('diceCount').addEventListener('change', () =>
    send('setDiceCount', { count: +$('diceCount').value }),
  );
  $('saveBtn').addEventListener('click', () => open('room'));
  $('shareBtn').addEventListener('click', () => open('room'));
  $('settingsBtn').addEventListener('click', () => open('settings'));
  $('helpBtn').addEventListener('click', () => open('help'));
  $('sheetBody').addEventListener('input', (e) => {
    if (e.target.matches('[data-rule-search]')) updateHelp($('sheetBody'));
  });
  $('closeSheet').addEventListener('click', () => {
    if (mandatory()) {
      notify('请先完成当前选择。');
      return;
    }
    close();
  });
  $('sheetBackdrop').addEventListener('click', () => {
    if (!mandatory()) close();
  });
  $('homeBtn').addEventListener('click', () => scene?.home());
  $('followBtn').addEventListener('click', () => scene?.followPlayer());
  $('qualityBtn').addEventListener('click', () => {
    options.quality = options.quality === 'low' ? 'auto' : 'low';
    saveOptions();
    if (view.s) render();
  });
  $('speedBtn').addEventListener('click', () => {
    options.speed = (options.speed % 3) + 1;
    saveOptions();
    render();
  });
  $('skipShowBtn').disabled = false;
  $('skipShowBtn').addEventListener('click', () => scene?.skipPresentation());
  $('soundBtn').addEventListener('click', () => {
    options.sound = !options.sound;
    saveOptions();
  });
  document.addEventListener('pointerdown', () => audio.unlock(), { once: true, capture: true });
  document.addEventListener('keydown', () => audio.unlock(), { once: true, capture: true });
  $('sheetBody').addEventListener('change', (e) => {
    if (e.target.id === 'onlineQuality') {
      options.quality = e.target.value;
      saveOptions();
      if (view.s) render();
    }
  });
  $('sheetBody').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.open) {
      open(b.dataset.open);
      return;
    }
    if (b.dataset.onlineAction !== undefined) {
      const a = panelActions[+b.dataset.onlineAction];
      send(a.type, a.payload, a.confirm);
      return;
    }
    const id = b.id,
      s = client.state;
    if (id === 'createRoom' || id === 'joinRoom') {
      const name = $('onlineName').value;
      if (!name.trim()) {
        notify('请输入玩家名称。');
        return;
      }
      if (id === 'joinRoom' && !/^\d{6}$/.test($('roomCode').value)) {
        notify('请输入6位数字邀请码。');
        return;
      }
      client.connect(
        id === 'createRoom'
          ? { op: 'create', protocol: 1, name }
          : { op: 'join', protocol: 1, roomId: $('roomCode').value, name },
      );
    } else if (id === 'readyRoom') send('ready', { ready: !s.seats[s.playerId].ready });
    else if (id === 'startRoom') send('start');
    else if (id === 'configureRoom') send('configure', { character: $('onlineCharacter').value });
    else if (id === 'applyRoomSettings')
      send('settings', {
        mapVersion: +$('onlineMapSelect').value,
        rounds: +$('onlineRounds').value,
        difficulty: $('onlineDifficulty').value,
        talents: $('onlineTalents').checked,
      });
    else if (id === 'controlRoom') send('control', { ai: !s.seats[s.playerId].ai });
    else if (id === 'reconnectRoom') client.connect();
    else if (id === 'forgetRoom') client.forget();
    else if (id === 'onlineRoomButton') open('room');
    else if (id === 'cancelOnlineConfirm') {
      confirmation = null;
      panelKey = '';
      paintPanel();
      modal.first();
    } else if (id === 'confirmOnlineAction') {
      const c = confirmation;
      if (!c || c.revision !== s.revision) {
        notify('状态已更新，请重新选择。');
        return;
      }
      confirmation = null;
      panelKey = '';
      send(c.type, c.payload);
    }
  });
  $('sheetBody').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'bankForm')
      send('bank', { kind: $('onlineBankKind').value, amount: +$('onlineBankAmount').value });
    else if (e.target.id === 'stockForm')
      send('trade', { stock: +$('onlineStock').value, qty: +$('onlineStockQty').value });
    else if (e.target.id === 'auctionForm') send('auctionBid', { amount: +$('onlineBid').value });
  });
  client.addEventListener('change', render);
  client.addEventListener('status', (e) => {
    if ($('connection').textContent !== e.detail) $('connection').textContent = e.detail;
  });
  client.addEventListener('result', (e) => {
    const r = e.detail;
    $('commandStatus').textContent = r.accepted ? '操作已确认' : errors[r.error] || r.error;
    $('commandStatus').dataset.error = r.error || '';
    $('commandStatus').dataset.accepted = String(r.accepted);
  });
  document.addEventListener('visibilitychange', () => {
    audio.visibility(document.hidden);
    if (!document.hidden) render();
  });
  let interval;
  window.addEventListener('pagehide', () => {
    clearInterval(interval);
    client.stop();
    scene?.dispose();
    audio.visibility(true);
  });
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) location.reload();
  });
  open('room');
  interval = setInterval(countdown, 1000);
  globalThis.__NAIWA_BOOT__?.set(75, '正在准备联机界面…');
  await prepareStartupAssets();
  await nextPaint();
  globalThis.__NAIWA_BOOT__?.ready();
  client.connect();
}
