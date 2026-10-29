export const FOREST_MAP_ID = 4;
export const FOREST_BRANCHES = [
  { from: 8, merge: 16, path: [40, 41, 42, 43], name: '松林小径' },
  { from: 28, merge: 36, path: [44, 45, 46, 47], name: '温泉栈道' },
];
export const WEATHER_PERIOD = 3;
export const FOREST_WEATHER = [
  { id: 'clear', name: '晴朗', duration: 0, branches: [], text: '两条支路开放' },
  {
    id: 'rain',
    name: '暴雨',
    duration: 2,
    branches: [0],
    text: '松林小径入口关闭，已进入者可离开',
  },
  {
    id: 'rockfall',
    name: '落石',
    duration: 2,
    branches: [1],
    text: '温泉栈道入口关闭，已进入者可离开',
  },
  {
    id: 'fog',
    name: '山雾',
    duration: 1,
    branches: [0, 1],
    text: '两条支路入口关闭，主环始终开放',
  },
];
export const FOREST_EVENTS = [
  {
    id: 'forest-coupons',
    name: '温泉补给',
    art: 'rest',
    text: '领取温泉补给，获得15点券。',
    kind: 'coupons',
    amount: 15,
    negative: false,
  },
  {
    id: 'forest-market',
    name: '山货交易',
    art: 'house',
    text: '售出山货，获得120奶币。',
    kind: 'gain',
    amount: 120,
    negative: false,
  },
  {
    id: 'forest-maintenance',
    name: '山道维护',
    art: 'factory',
    text: '分担山道维护费用100奶币。',
    kind: 'loss',
    amount: 100,
    negative: true,
  },
];
export function updateForestWeather(game) {
  const s = game.s;
  if (s.mapVersion !== FOREST_MAP_ID) return;
  if (s.weather && s.round < s.weather.nextRound) return;
  const w = FOREST_WEATHER[game.int(FOREST_WEATHER.length)];
  s.weather = {
    kind: w.id,
    startedRound: s.round,
    untilRound: s.round + w.duration - 1,
    nextRound: s.round + WEATHER_PERIOD,
  };
  game.log('森林天气：' + w.name + '；' + w.text + '。');
}
export function closedBranches(state) {
  if (
    state.mapVersion !== FOREST_MAP_ID ||
    !state.weather ||
    state.round > state.weather.untilRound
  )
    return [];
  return FOREST_WEATHER.find((w) => w.id === state.weather.kind)?.branches || [];
}
export function closedEntry(state, from, to) {
  if (state.mapVersion !== FOREST_MAP_ID) return false;
  return closedBranches(state).some((index) => {
    const b = FOREST_BRANCHES[index];
    return !b.path.includes(from) && b.path.includes(to);
  });
}
export function weatherSummary(state) {
  if (state.mapVersion !== FOREST_MAP_ID || !state.weather) return '';
  const w = FOREST_WEATHER.find((w) => w.id === state.weather.kind),
    closed = closedBranches(state);
  return (
    w.name +
    ' · ' +
    (closed.length
      ? closed.map((i) => FOREST_BRANCHES[i].name).join('、') +
        '入口关闭，剩余' +
        (state.weather.untilRound - state.round + 1) +
        '轮'
      : w.duration
        ? '封路已结束，两条支路开放'
        : '两条支路开放') +
    ' · 第' +
    state.weather.nextRound +
    '轮换天气'
  );
}
export function validWeather(state) {
  if (state.mapVersion !== FOREST_MAP_ID)
    return state.weather === undefined || state.weather === null;
  const w = state.weather,
    kind = w && FOREST_WEATHER.find((x) => x.id === w.kind);
  return !!(
    w &&
    kind &&
    Object.keys(w).length === 4 &&
    Number.isSafeInteger(w.startedRound) &&
    w.startedRound >= 1 &&
    (w.startedRound - 1) % 3 === 0 &&
    w.startedRound <= state.round &&
    w.nextRound === w.startedRound + 3 &&
    state.round < w.nextRound &&
    w.untilRound === w.startedRound + kind.duration - 1
  );
}
