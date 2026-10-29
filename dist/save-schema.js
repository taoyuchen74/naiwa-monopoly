// @ts-check
import { validWeather } from './forest-rules.js';
import { validCommerce } from './commerce.js';
import { modeConfig, validMode } from './modes.js';
import { parseMap } from './map-schema.js';
import { mapPoints, mapTiles } from './maps.js';
import { migratePortfolio } from './portfolio.js';
import { BUSINESSES, businessType, buildingLimit, researchChoices } from './businesses.js';
import { CHARACTERS, CARDS, EVENT_RULES, SPIRITS, VEHICLES } from './content.js';
import { RULES, MAX_BUILDING_LEVEL, ROUND_OPTIONS } from './rules-config.js';
export { MAX_BUILDING_LEVEL, ROUND_OPTIONS };
export const SCHEMA_VERSION = 1;
/** @param {unknown} n @returns {n is number} */
export const validSaveTime = (n) =>
  typeof n === 'number' && Number.isSafeInteger(n) && n > 0 && n <= 8640000000000000;
const copy = (x) => JSON.parse(JSON.stringify(x));
/**
 * Clone and validate untrusted legacy JSON; never mutate the caller's snapshot.
 * Dynamic JSON fields stay inside this migration function until all checks pass.
 * @param {unknown} raw
 * @returns {import('./domain.js').GameState|null}
 */
export function migrateSave(raw) {
  try {
    const s = typeof raw === 'string' ? JSON.parse(raw) : copy(raw);
    if (s && Object.hasOwn(s, 'schemaVersion')) {
      if (s.schemaVersion !== SCHEMA_VERSION || !validSaveTime(s.savedAt)) return null;
      delete s.schemaVersion;
    }
    if (s?.mapVersion === 3) s.customMap = parseMap(s.customMap);
    else if (s && s.customMap !== undefined) return null;
    const TILES = mapTiles(s?.mapVersion ?? 1, s?.customMap);
    if (s && s.mapVersion === undefined) s.mapVersion = 1;
    if (s && s.difficulty === undefined) s.difficulty = 'normal';
    if (
      !s ||
      ![1, 2, 3, 4].includes(s.mapVersion) ||
      !['easy', 'normal', 'hard'].includes(s.difficulty) ||
      s.version !== 2 ||
      !Array.isArray(s.players) ||
      ![2, 3, 4, 5, 6].includes(s.players.length) ||
      ![
        'roll',
        'departure',
        'moving',
        'branch',
        'buy',
        'estate',
        'event',
        'end',
        'debt',
        'finished',
        'auction',
        'negotiation',
      ].includes(s.phase)
    )
      return null;
    if (
      !Number.isInteger(s.current) ||
      s.current < 0 ||
      s.current >= s.players.length ||
      !Number.isInteger(s.round) ||
      s.round < 1 ||
      !ROUND_OPTIONS.includes(s.maxRounds) ||
      s.round > s.maxRounds ||
      !Number.isInteger(s.seed) ||
      !Number.isInteger(s.remaining) ||
      s.remaining < 0 ||
      s.remaining > 18
    )
      return null;
    if (s.revision === undefined && s.commandSequences === undefined) {
      s.revision = 0;
      s.commandSequences = s.players.map(() => 0);
    }
    if (
      !Number.isSafeInteger(s.revision) ||
      s.revision < 0 ||
      !Array.isArray(s.commandSequences) ||
      s.commandSequences.length !== s.players.length ||
      s.commandSequences.some((n) => !Number.isSafeInteger(n) || n < 0) ||
      s.commandSequences.reduce((a, n) => a + n, 0) !== s.revision
    )
      return null;
    if (s.moveSteps === undefined) s.moveSteps = null;
    if (
      s.moveSteps !== null &&
      (!Number.isInteger(s.moveSteps) || s.moveSteps < 0 || s.moveSteps > 18)
    )
      return null;
    if (
      !s.options ||
      !s.market ||
      s.market.length !== 4 ||
      !s.ownership ||
      !s.blocks ||
      !Array.isArray(s.logs) ||
      !Array.isArray(s.dice)
    )
      return null;
    for (const p of s.players) if (p.character === 'dounai') p.character = 'naicha';
    if (s.players.some((p) => !migratePortfolio(p))) return null;
    if (new Set(s.players.map((p) => p.character)).size !== s.players.length) return null;
    for (const [index, p] of s.players.entries()) {
      if (
        p.id !== index ||
        typeof p.human !== 'boolean' ||
        typeof p.alive !== 'boolean' ||
        !Number.isInteger(p.pos) ||
        !CHARACTERS.some((c) => c.id === p.character) ||
        !TILES[p.pos] ||
        ![p.money, p.deposit, p.loan, ...p.stocks].every(
          (n) => Number.isSafeInteger(n) && n >= 0,
        ) ||
        p.stocks.length !== 4 ||
        !Array.isArray(p.cards) ||
        p.cards.length > RULES.handLimit ||
        p.cards.some((c) => !Object.hasOwn(CARDS, c)) ||
        !Array.isArray(p.history) ||
        p.history.length > 80 ||
        p.history.some((i) => !Number.isInteger(i) || !TILES[i]) ||
        !VEHICLES[p.vehicle] ||
        !Number.isInteger(p.diceCount) ||
        p.diceCount < 1 ||
        p.diceCount > VEHICLES[p.vehicle].dice ||
        !Number.isInteger(p.skip) ||
        p.skip < 0 ||
        p.skip > 3 ||
        !Number.isInteger(p.forced) ||
        p.forced < 0 ||
        p.forced > 6 ||
        !Number.isInteger(p.spiritTurns) ||
        p.spiritTurns < 0 ||
        p.spiritTurns > 4 ||
        (p.spirit && !SPIRITS[p.spirit])
      )
        return null;
    }
    for (const [id, o] of Object.entries(s.ownership)) {
      if (
        o.closedUntilRound !== undefined &&
        (!Number.isInteger(o.closedUntilRound) ||
          o.closedUntilRound < 0 ||
          o.closedUntilRound > s.maxRounds + (EVENT_RULES.closure.duration ?? 0))
      )
        return null;
      if (
        (o.buildingType !== undefined && !Object.hasOwn(BUSINESSES, o.buildingType)) ||
        o.level > buildingLimit(o) ||
        (o.researchProgress !== undefined &&
          (!Number.isInteger(o.researchProgress) ||
            o.researchProgress < 0 ||
            o.researchProgress > 2)) ||
        (o.researchCard !== undefined &&
          (!researchChoices(o.level).includes(o.researchCard) || businessType(o) !== 'research'))
      )
        return null;
      if (
        !TILES[id] ||
        TILES[id].kind !== 'property' ||
        !Number.isInteger(o.player) ||
        o.player < 0 ||
        o.player >= s.players.length ||
        !Number.isInteger(o.level) ||
        o.level < 0 ||
        o.level > MAX_BUILDING_LEVEL
      )
        return null;
    }
    for (const m of s.market) {
      if (m.previous === undefined)
        m.previous = Number.isFinite(m.change)
          ? Math.max(20, Math.min(500, m.price - m.change))
          : m.price;
      if (!Number.isSafeInteger(m.previous) || m.previous < 20 || m.previous > 500) return null;
    }
    if (
      s.market.some(
        (m) =>
          !Number.isSafeInteger(m.price) ||
          m.price < 20 ||
          m.price > 500 ||
          !Array.isArray(m.history) ||
          m.history.length > 20 ||
          m.history.some((n) => !Number.isFinite(n) || n < 20 || n > 500),
      )
    )
      return null;
    for (const key of ['music', 'voice'])
      if (key in s.options && typeof s.options[key] !== 'boolean') return null;
    for (const key of ['musicVolume', 'effectsVolume', 'voiceVolume'])
      if (
        key in s.options &&
        (!Number.isFinite(s.options[key]) || s.options[key] < 0 || s.options[key] > 1)
      )
        return null;
    if ('track' in s.options && !['ode', 'town'].includes(s.options.track)) return null;
    if (s.options.lighting === undefined) s.options.lighting = 'day';
    if (!['day', 'golden', 'night'].includes(s.options.lighting)) return null;
    if (s.options.speed === 4) s.options.speed = 3;
    if (s.options.aiFast !== undefined && typeof s.options.aiFast !== 'boolean') return null;
    if (
      typeof s.options.sound !== 'boolean' ||
      ![1, 2, 3].includes(s.options.speed) ||
      !['auto', 'low'].includes(s.options.quality) ||
      s.logs.some((l) => typeof l.text !== 'string' || !Number.isInteger(l.round))
    )
      return null;
    if (
      Object.entries(s.blocks).some(
        ([id, owner]) =>
          !TILES[id] || !Number.isInteger(owner) || owner < 0 || owner >= s.players.length,
      )
    )
      return null;
    if (
      s.phase === 'estate' &&
      (!s.ownership[s.players[s.current].pos] ||
        s.ownership[s.players[s.current].pos].player === s.current)
    )
      return null;
    if (
      s.phase === 'branch' &&
      (TILES[s.players[s.current].pos].next.length !== 2 || s.remaining <= 0)
    )
      return null;
    if (
      s.phase === 'debt' &&
      (!s.debt ||
        !Number.isSafeInteger(s.debt.amount) ||
        s.debt.amount <= 0 ||
        (s.debt.to !== null && (!Number.isInteger(s.debt.to) || !s.players[s.debt.to])) ||
        typeof s.debt.label !== 'string')
    )
      return null;
    if (s.firstPlayer === undefined) s.firstPlayer = 0;
    if (!Number.isInteger(s.firstPlayer) || s.firstPlayer < 0 || s.firstPlayer >= s.players.length)
      return null;
    if (s.pickups === undefined) s.pickups = {};
    if (
      !s.pickups ||
      typeof s.pickups !== 'object' ||
      Object.entries(s.pickups).some(
        ([id, owner]) =>
          !mapPoints(s).includes(+id) || !Number.isInteger(owner) || !s.players[owner],
      )
    )
      return null;
    if (s.talents === undefined) s.talents = false;
    if (typeof s.talents !== 'boolean') return null;
    if (
      !validWeather(s) ||
      (s.mapVersion === 4 && s.rules !== 12) ||
      (s.mapVersion !== 4 && s.rules > 11)
    )
      return null;
    s.rules = s.mapVersion === 4 ? 12 : 11;
    for (const p of s.players) {
      if (p.eventWard === undefined) p.eventWard = false;
      if (p.insuranceTurns === undefined) p.insuranceTurns = 0;
      if (p.operatingUntilRound === undefined) p.operatingUntilRound = 0;
      if (
        typeof p.eventWard !== 'boolean' ||
        !Number.isInteger(p.insuranceTurns) ||
        p.insuranceTurns < 0 ||
        p.insuranceTurns > CARDS.insurance.duration ||
        !Number.isInteger(p.operatingUntilRound) ||
        p.operatingUntilRound < 0 ||
        p.operatingUntilRound > s.maxRounds + (EVENT_RULES.operations.duration ?? 0)
      )
        return null;
      for (const [key, value] of Object.entries({
        tickets: 60,
        cardsUsed: 0,
        buildsUsed: 0,
        shopUsed: 0,
        slowTurns: 0,
      })) {
        if (p[key] === undefined) p[key] = value;
        if (
          !Number.isInteger(p[key]) ||
          p[key] < 0 ||
          p[key] >
            (key === 'tickets'
              ? RULES.couponCap
              : key === 'slowTurns'
                ? 3
                : key === 'shopUsed'
                  ? 2
                  : key === 'cardsUsed'
                    ? 32
                    : 1)
        )
          return null;
      }
      if (p.difficulty === undefined) p.difficulty = s.difficulty;
      if (!['easy', 'normal', 'hard'].includes(p.difficulty)) return null;
      if (p.businessReady === undefined) p.businessReady = false;
      if (typeof p.businessReady !== 'boolean') return null;
      if (p.talentReady === undefined) p.talentReady = false;
      if (p.departures === undefined) p.departures = 0;
      if (
        typeof p.talentReady !== 'boolean' ||
        !Number.isSafeInteger(p.departures) ||
        p.departures < 0
      )
        return null;
      if (p.buildSite === undefined) p.buildSite = null;
      if (p.bankAccess === undefined) p.bankAccess = false;
      if (
        (p.buildSite !== null && (!Number.isInteger(p.buildSite) || !TILES[p.buildSite])) ||
        typeof p.bankAccess !== 'boolean'
      )
        return null;
    }
    if (
      s.notice?.outcomes !== undefined &&
      (!Array.isArray(s.notice.outcomes) ||
        s.notice.outcomes.length > 6 ||
        s.notice.outcomes.some((x) => typeof x !== 'string'))
    )
      return null;
    if (s.handoff === undefined)
      s.handoff =
        s.players.filter((p) => p.human).length > 1 &&
        s.players[s.current].human &&
        s.phase !== 'finished'
          ? { playerId: s.current }
          : null;
    if (
      s.handoff !== null &&
      (!s.handoff ||
        !Number.isInteger(s.handoff.playerId) ||
        s.handoff.playerId !== s.current ||
        !s.players[s.current].human ||
        !s.players[s.current].alive ||
        s.phase === 'finished' ||
        s.players.filter((p) => p.human).length < 2)
    )
      return null;
    if (s.mode === undefined) s.mode = modeConfig({ rounds: s.maxRounds });
    if (
      !validMode(s.mode) ||
      s.mode.rounds !== s.maxRounds ||
      s.players.some((p) => p.cards.some((k) => !s.mode.allowedCards.includes(k)))
    )
      return null;
    if (!validCommerce(s)) return null;
    return s;
  } catch {
    return null;
  }
}
/** @param {import('./domain.js').GameState} state @param {number} [now] @returns {import('./domain.js').SaveEnvelope} */
export function encodeSave(state, now = Date.now()) {
  if (!validSaveTime(now)) throw Error('Invalid save time');
  const clean = migrateSave(state);
  if (!clean) throw Error('Invalid save');
  return { ...clean, savedAt: now, schemaVersion: SCHEMA_VERSION };
}
