import { FOREST_WEATHER, WEATHER_PERIOD, FOREST_EVENTS } from './forest-rules.js';
import { RULES } from './rules-config.js';
import { CARDS, CARD_TIMINGS, VEHICLES } from './content.js';
import { BUSINESSES } from './businesses.js';
import { MODE_NAMES, modeConfig, modeDescription } from './modes.js';
export const GUIDE_COPY = {
  intro: ['目标：存活并争净资产第一。', '掷骰前进，经营后结束回合。'],
  roll: ['点“掷骰子”，沿地图前进。', '落地后再买地或经营。'],
  end: ['经营完成，点“结束回合”。', '设备会交给下一位奶伴。'],
  buy: ['空地可购买，也能放弃。', '留点现金，准备之后付租。'],
  rent: ['到访对手地产需要支付租金。', '确认费用，或用购地卡收购。'],
  paidRent: ['已经支付本次租金。', '下次出发前可准备免租卡。'],
  build: ['选建筑或加盖，先看报价。', '普通建设须停在自家地产。'],
  cards: ['获得道具卡。', '卡包可查效果和使用时机。'],
  cash: ['现金不足：先筹款再付款。', '取款、借款、卖股或卖地。'],
};
const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );
export function ruleEntries(currentMode = null) {
  return [
    {
      id: 'forest-weather',
      title: '森林天气与支路',
      text:
        `森林温泉小镇每${WEATHER_PERIOD}轮更换天气；主环始终开放。` +
        FOREST_WEATHER.map(
          (w) => w.name + '：' + w.text + (w.duration ? '，持续' + w.duration + '轮' : ''),
        ).join('；') +
        '。关闭入口不阻止支路内角色离开，倒退也不能重新进入关闭支路；护盾不抵消天气。',
      tags: '暴雨 落石 山雾 封路 温泉',
    },
    ...FOREST_EVENTS.map((e) => ({
      id: e.id,
      title: e.name,
      text: e.text,
      tags: '森林 事件 温泉',
    })),

    ...(currentMode
      ? [
          {
            id: 'current-mode',
            title: '当前对局配置',
            text:
              modeDescription(currentMode) +
              `；初始现金 ${currentMode.initial.cash}、贷款 ${currentMode.initial.loan}；可用卡：` +
              currentMode.allowedCards.map((k) => CARDS[k].name).join('、'),
            tags: '当前 模式 目标',
          },
        ]
      : []),
    {
      id: 'goal',
      title: '目标与结算',
      text: '存活优先，轮数结束按净资产排名；净资产包含现金、存款、地产、股票、交通工具并扣除贷款。经营挑战另按保存的净资产目标判定。',
      tags: '胜利 排名 失败',
    },
    {
      id: 'turn',
      title: '掷骰与结束回合',
      text:
        GUIDE_COPY.roll.join('') +
        GUIDE_COPY.end.join('') +
        `经过起点基础收入 ${RULES.startIncome} 奶币、${RULES.startCoupons} 点券，每位存活玩家行动一次算一轮。`,
      tags: '出发 起点',
    },
    {
      id: 'buy',
      title: '买地与建设',
      text: GUIDE_COPY.buy.join('') + GUIDE_COPY.build.join(''),
      tags: '购地 房屋 加盖',
    },
    {
      id: 'rent',
      title: '到访与租金',
      text: '普通租金自动结算；符合购地卡时机时可先选择收购或付租。免租、保险和特殊设施按当前报价结算；资金不足进入筹款。',
      tags: '付款 收购',
    },
    {
      id: 'bank',
      title: '银行与贷款',
      text:
        `经过银行后本回合可办理业务；${weekdays[RULES.bankClosedDay]}休息。贷款上限 ${RULES.loanLimit} 奶币；每轮存款利息 ${RULES.depositInterest * 100}%，贷款利息 ${RULES.loanInterest * 100}%。` +
        GUIDE_COPY.cash.join(''),
      tags: '借款 存款 现金不足 还款',
    },
    {
      id: 'stocks',
      title: '股票交易',
      text: `自己的行动前后可买卖，${weekdays[RULES.stockClosedDay]}休市。股价按轮与事件变化；存档保留持仓、成本与成交历史。`,
      tags: '证券 持仓 卖出',
    },
    {
      id: 'cards',
      title: '卡包与点券',
      text: `手牌上限 ${RULES.handLimit} 张，点券上限 ${RULES.couponCap}；地图拾取 ${RULES.couponPickup} 点券。满包奖励按规则补偿 ${RULES.cardOverflowCash} 奶币。卡牌时机、目标和模式卡池以当前卡包为准。`,
      tags: '获得卡牌 道具',
    },
    ...Object.entries(CARDS).map(([id, c]) => ({
      id: 'card-' + id,
      title: c.name,
      text: `基础价 ${c.price} 点券；${CARD_TIMINGS[c.timing].label}。${c.description}`,
      tags: '卡牌 道具 ' + c.target,
    })),
    ...Object.entries(BUSINESSES).map(([id, b]) => ({
      id: 'building-' + id,
      title: b.name,
      text: `最高 ${b.max} 级。${b.text}`,
      tags: '建设 建筑 设施',
    })),
    ...VEHICLES.map((v) => ({
      id: 'vehicle-' + v.id,
      title: v.name,
      text: `购入价 ${v.price} 奶币，可选 1—${v.dice} 颗骰子；工具按原规则全额购买，不折价。`,
      tags: '出行 骰子 车辆',
    })),
    ...Object.keys(MODE_NAMES).map((id) => ({
      id: 'mode-' + id,
      title: '预设 · ' + MODE_NAMES[id],
      text:
        modeDescription(modeConfig({ id })) +
        (id === 'daily'
          ? '本地日期可修改，无防作弊能力。同日需其他设置和操作也相同才可复现。'
          : ''),
      tags: '模式 轮数 挑战',
    })),
  ];
}
export function searchRules(query = '', entries = ruleEntries()) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return entries.filter((e) =>
    terms.every((t) => (e.title + ' ' + e.text + ' ' + e.tags).toLocaleLowerCase().includes(t)),
  );
}
export function helpPanel(id = 'rules') {
  return `<section class="rule-help" aria-label="规则帮助"><label for="${id}Search">搜索规则<input id="${id}Search" type="search" autocomplete="off" placeholder="试试：贷款、免租、建设" data-rule-search></label><p class="rule-count" role="status" aria-live="polite" data-rule-count></p><div data-rule-results></div></section>`;
}
export function updateHelp(host, currentMode = null) {
  const input = host.querySelector('[data-rule-search]');
  if (!input) return;
  const rows = searchRules(input.value, ruleEntries(currentMode));
  host.querySelector('[data-rule-count]').textContent = rows.length
    ? `找到 ${rows.length} 条规则`
    : '未找到规则，请换一个关键词。';
  host.querySelector('[data-rule-results]').innerHTML = rows
    .map(
      (r) => `<article class="rule-entry"><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p></article>`,
    )
    .join('');
}
