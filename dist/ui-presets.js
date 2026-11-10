// @ts-check
import { modeConfig } from './modes.js';
import { MAPS } from './maps.js';
import { CARDS } from './content.js';
import { FOREST_MAP_ID, WEATHER_PERIOD } from './forest-rules.js';
/** UI shortcuts only. Resolved existing ModeConfig + map ID are stored by Game.create. */
export const UI_PRESETS = Object.freeze({
  'forest-business': Object.freeze({
    title: '森林经营挑战',
    mapVersion: FOREST_MAP_ID,
    modeId: 'business',
  }),
});
/** @param {keyof typeof UI_PRESETS} id */
export function resolvePreset(id) {
  const preset = Object.hasOwn(UI_PRESETS, id) && UI_PRESETS[id];
  if (!preset) throw new RangeError('Unknown challenge');
  return { mapVersion: preset.mapVersion, mode: modeConfig({ id: preset.modeId }) };
}
/** @param {keyof typeof UI_PRESETS} id */
export function challengeIntro(id) {
  const { mapVersion, mode } = resolvePreset(id),
    a = mode.initial,
    fmt = (n) => n.toLocaleString('zh-CN');
  const excluded = Object.entries(CARDS)
    .filter(([key]) => !mode.allowedCards.some((allowed) => allowed === key))
    .map(([, card]) => card.name)
    .join('、');
  return (
    '<p>' +
    MAPS[mapVersion].name +
    ' · ' +
    mode.rounds +
    ' 轮 · 默认演出 ' +
    mode.speed +
    '×</p><dl class="challenge-conditions">' +
    [
      ['初始现金', fmt(a.cash) + ' 奶币'],
      ['初始点券', fmt(a.tickets)],
      ['初始贷款', fmt(a.loan) + ' 奶币'],
      ['初始地产', '每席 ' + a.propertiesPerPlayer + ' 块 ' + a.buildingLevel + ' 级住宅'],
    ]
      .map(([label, value]) => '<div><dt>' + label + '</dt><dd>' + value + '</dd></div>')
      .join('') +
    '</dl><p>目标：结算时仍存活，净资产达到 ' +
    fmt(mode.goal.target) +
    '。点券和手牌不计入净资产。</p><p>限制：禁用' +
    excluded +
    '。天气每 ' +
    WEATHER_PERIOD +
    ' 轮更新，只能依据当前已知天气选路。</p><p>接下来可配置真人、同设备热座或 AI 旁观；确认开始前不会替换已有存档。</p><button class="primary" data-act="chooseChallengeSeats" data-preset="' +
    id +
    '">选择席位</button>'
  );
}
