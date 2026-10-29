import { createHmac, randomBytes, randomInt } from 'node:crypto';
import { controls } from './controls.mjs';
import { Game } from '../dist/engine.js';
import { nextCommand } from '../dist/commands.js';
import { canonicalState } from '../dist/state-hash.js';
import { CHARACTERS } from '../dist/content.js';

const plain = (x) => x !== null && typeof x === 'object' && !Array.isArray(x);
const keys = (x, fields) =>
  plain(x) &&
  Object.keys(x).every((k) => fields.includes(k)) &&
  fields.every((k) => Object.hasOwn(x, k));
const int = (n) => Number.isSafeInteger(n) && n >= 0;
const name = (n) =>
  typeof n === 'string' &&
  n.trim().length > 0 &&
  n.trim().length <= 16 &&
  !/[\x00-\x1f\x7f]/.test(n);
export const RULE_COMMANDS = new Set([
  'roll',
  'step',
  'setDiceCount',
  'buy',
  'resolveEstate',
  'acknowledge',
  'end',
  'construct',
  'setResearch',
  'upgrade',
  'demolish',
  'sell',
  'bank',
  'trade',
  'shop',
  'vehicle',
  'card',
  'settle',
  'bankrupt',
  'auctionBid',
  'auctionPass',
]);
const actor = (room) =>
  room.game.s.phase === 'auction' ? room.game.s.auction.actor : room.game.s.current;

export class Rooms {
  constructor({
    now = Date.now,
    seed = () => randomInt(1, 0x100000000),
    code = () => String(randomInt(100000, 1000000)),
    turnMs = 60000,
    graceMs = 10000,
    ttlMs = 1800000,
    stepMs = 250,
    maxRooms = 100,
  } = {}) {
    Object.assign(this, { now, seed, code, turnMs, graceMs, ttlMs, stepMs, maxRooms });
    this.rooms = new Map();
    this.bindings = new Map();
  }
  hash(r) {
    return (
      'hmac-sha256:' +
      createHmac('sha256', r.key)
        .update(
          JSON.stringify({
            state: r.game ? canonicalState(r.game.s) : null,
            status: r.status,
            settings: r.settings,
            revision: r.revision,
            seats: r.seats.map((s) => ({
              id: s.id,
              name: s.name,
              character: s.character,
              ready: s.ready,
              ai: s.ai,
              sequence: s.sequence,
            })),
            deadline: r.deadline,
          }),
        )
        .digest('hex')
    );
  }
  result(peer, r, error = null, events = []) {
    if (!r && peer.binding) {
      const candidate = this.rooms.get(peer.binding.roomId);
      if (candidate?.seats[peer.binding.playerId]?.peer === peer) r = candidate;
    }
    const msg = {
      op: 'result',
      accepted: error === null,
      revision: r?.revision ?? 0,
      stateHash: r ? this.hash(r) : null,
      events,
      error,
    };
    peer.send(msg);
    return msg;
  }
  view(r, id) {
    const s = r.game?.s,
      p = s?.players[id];
    return {
      op: 'state',
      protocol: 1,
      roomId: r.id,
      status: r.status,
      revision: r.revision,
      stateHash: this.hash(r),
      playerId: id,
      nextSequence: r.seats[id].sequence + 1,
      serverNow: this.now(),
      deadline: r.deadline,
      settings: { ...r.settings },
      seats: r.seats.map((x) => ({
        id: x.id,
        name: x.name,
        character: x.character,
        ready: x.ready,
        connected: !!x.peer,
        ai: x.ai,
      })),
      game: s
        ? {
            round: s.round,
            maxRounds: s.maxRounds,
            current: s.current,
            actor: actor(r),
            phase: s.phase,
            dice: [...s.dice],
            remaining: s.remaining,
            mapVersion: s.mapVersion,
            ownership: structuredClone(s.ownership),
            blocks: { ...s.blocks },
            pickups: { ...s.pickups },
            market: s.market.map((m) => ({ name: m.name, price: m.price, change: m.change })),
            players: s.players.map((q) => ({
              id: q.id,
              character: q.character,
              pos: q.pos,
              money: q.money,
              loan: q.loan,
              alive: q.alive,
              vehicle: q.vehicle,
              cardCount: q.cards.length,
              worth: r.game.worth(q),
            })),
            notice: s.current === id && s.notice ? structuredClone(s.notice) : null,
            auction: s.auction ? structuredClone(s.auction) : null,
            debt: s.current === id && s.debt ? structuredClone(s.debt) : null,
            winner: s.winner,
            winners: s.phase === 'finished' ? r.game.leaders().map((p) => p.id) : [],
          }
        : null,
      controls: controls(r, id),
      self: p
        ? {
            id,
            cards: [...p.cards],
            stocks: [...p.stocks],
            money: p.money,
            deposit: p.deposit,
            loan: p.loan,
            tickets: p.tickets,
            diceCount: p.diceCount,
            vehicle: p.vehicle,
            bankAccess: p.bankAccess,
            buildSite: p.buildSite,
          }
        : null,
    };
  }
  broadcast(r) {
    for (const s of r.seats) if (s.peer) s.peer.send(this.view(r, s.id));
  }
  bind(peer, m) {
    if (peer.binding)
      return this.result(peer, this.rooms.get(peer.binding.roomId), 'ALREADY_AUTHENTICATED');
    if (!plain(m) || m.protocol !== 1) return this.result(peer, null, 'PROTOCOL_MISMATCH');
    const old = this.bindings.get(peer.sessionId);
    let r, id;
    if (m.op === 'resume') {
      if (!keys(m, ['op', 'protocol', 'roomId', 'playerId']) || !int(m.playerId))
        return this.result(peer, null, 'INVALID_MESSAGE');
      r = this.rooms.get(m.roomId);
      if (!r) return this.result(peer, null, 'ROOM_NOT_FOUND');
      if (!old || old.roomId !== m.roomId || old.playerId !== m.playerId)
        return this.result(peer, null, 'AUTH_FAILED');
      id = m.playerId;
    } else {
      if (old && this.rooms.has(old.roomId)) return this.result(peer, null, 'ALREADY_JOINED');
      if (
        !keys(
          m,
          m.op === 'create' ? ['op', 'protocol', 'name'] : ['op', 'protocol', 'roomId', 'name'],
        ) ||
        !['create', 'join'].includes(m.op) ||
        !name(m.name)
      )
        return this.result(peer, null, 'INVALID_MESSAGE');
      if (m.op === 'create') {
        if (this.rooms.size >= this.maxRooms) return this.result(peer, null, 'ROOM_LIMIT');
        let roomId;
        for (let n = 0; n < 100; n++) {
          const value = this.code();
          if (/^\d{6}$/.test(value) && !this.rooms.has(value)) {
            roomId = value;
            break;
          }
        }
        if (!roomId) return this.result(peer, null, 'ROOM_LIMIT');
        r = {
          id: roomId,
          key: randomBytes(32),
          settings: { mapVersion: 2, rounds: 20, difficulty: 'normal', talents: true },
          status: 'LOBBY',
          revision: 0,
          seats: [],
          game: null,
          deadline: null,
          turnKey: null,
          lastStep: 0,
          createdAt: this.now(),
          lastActivity: this.now(),
          allOfflineAt: null,
        };
        this.rooms.set(roomId, r);
      } else {
        if (typeof m.roomId !== 'string' || !/^\d{6}$/.test(m.roomId))
          return this.result(peer, null, 'INVALID_ROOM');
        r = this.rooms.get(m.roomId);
        if (!r) return this.result(peer, null, 'ROOM_NOT_FOUND');
        if (r.status !== 'LOBBY') return this.result(peer, null, 'ROOM_STARTED');
        if (r.seats.length >= 6) return this.result(peer, null, 'ROOM_FULL');
      }
      id = r.seats.length;
      r.seats.push({
        id,
        name: m.name.trim(),
        character: CHARACTERS.find((c) => !r.seats.some((s) => s.character === c.id)).id,
        sessionId: peer.sessionId,
        sequence: 0,
        ready: false,
        ai: false,
        peer: null,
        disconnectedAt: null,
      });
      this.bindings.set(peer.sessionId, { roomId: r.id, playerId: id });
      r.revision++;
    }
    const seat = r.seats[id],
      prior = seat.peer;
    seat.peer = peer;
    seat.disconnectedAt = null;
    peer.binding = { roomId: r.id, playerId: id };
    r.lastActivity = this.now();
    r.allOfflineAt = null;
    if (prior && prior !== peer) prior.close(4001, 'REPLACED');
    peer.send({ op: 'credentials', roomId: r.id, playerId: id });
    this.broadcast(r);
    return true;
  }
  disconnect(peer) {
    const b = peer.binding,
      r = b && this.rooms.get(b.roomId),
      seat = r?.seats[b.playerId];
    if (!seat || seat.peer !== peer) return;
    seat.peer = null;
    seat.disconnectedAt = this.now();
    if (!r.seats.some((s) => s.peer)) r.allOfflineAt = this.now();
    this.broadcast(r);
  }
  syncTurn(r) {
    if (r.status !== 'PLAYING') return;
    if (r.game.s.phase === 'finished') {
      r.status = 'FINISHED';
      r.deadline = null;
      r.turnKey = null;
      return;
    }
    const s = r.game.s,
      key =
        s.round +
        ':' +
        s.current +
        ':' +
        (s.phase === 'auction' ? 'auction:' + s.auction.actor : 'turn');
    if (key !== r.turnKey) {
      r.turnKey = key;
      r.deadline = this.now() + this.turnMs;
    }
  }
  execute(peer, m) {
    const b = peer.binding,
      r = b && this.rooms.get(b.roomId),
      seat = r?.seats[b.playerId];
    if (!r || !seat || seat.peer !== peer) return this.result(peer, null, 'AUTH_FAILED');
    const reject = (code) => {
      const reply = this.result(peer, r, code);
      peer.send(this.view(r, seat.id));
      return reply;
    };
    if (
      !keys(m, ['op', 'roomId', 'playerId', 'sequence', 'expectedRevision', 'type', 'payload']) ||
      m.op !== 'command' ||
      !plain(m.payload)
    )
      return reject('INVALID_MESSAGE');
    if (m.roomId !== r.id || m.playerId !== seat.id) return reject('AUTH_FAILED');
    if (!int(m.sequence) || m.sequence < 1) return reject('INVALID_SEQUENCE');
    if (m.sequence <= seat.sequence) return reject('DUPLICATE');
    if (m.sequence !== seat.sequence + 1) return reject('OUT_OF_ORDER');
    if (!int(m.expectedRevision) || m.expectedRevision !== r.revision)
      return reject('STALE_REVISION');
    if (r.revision === Number.MAX_SAFE_INTEGER || m.sequence === Number.MAX_SAFE_INTEGER)
      return reject('COUNTER_EXHAUSTED');
    let error = null;
    if (m.type === 'configure') {
      if (r.status !== 'LOBBY') error = 'INVALID_PHASE';
      else if (
        !keys(m.payload, ['character']) ||
        !CHARACTERS.some((c) => c.id === m.payload.character)
      )
        error = 'INVALID_PAYLOAD';
      else if (r.seats.some((s) => s.id !== seat.id && s.character === m.payload.character))
        error = 'CHARACTER_TAKEN';
      else {
        seat.character = m.payload.character;
        seat.ready = false;
      }
    } else if (m.type === 'settings') {
      if (r.status !== 'LOBBY') error = 'INVALID_PHASE';
      else if (seat.id !== 0) error = 'HOST_ONLY';
      else if (
        !keys(m.payload, ['mapVersion', 'rounds', 'difficulty', 'talents']) ||
        ![1, 2].includes(m.payload.mapVersion) ||
        ![20, 30, 50, 80].includes(m.payload.rounds) ||
        !['easy', 'normal', 'hard'].includes(m.payload.difficulty) ||
        typeof m.payload.talents !== 'boolean'
      )
        error = 'INVALID_PAYLOAD';
      else {
        r.settings = { ...m.payload };
        for (const s of r.seats) s.ready = false;
      }
    } else if (m.type === 'ready') {
      if (
        r.status !== 'LOBBY' ||
        !keys(m.payload, ['ready']) ||
        typeof m.payload.ready !== 'boolean'
      )
        error = 'INVALID_PHASE';
      else seat.ready = m.payload.ready;
    } else if (m.type === 'start') {
      if (r.status !== 'LOBBY') error = 'INVALID_PHASE';
      else if (seat.id !== 0) error = 'HOST_ONLY';
      else if (!keys(m.payload, [])) error = 'INVALID_PAYLOAD';
      else if (r.seats.length < 2 || r.seats.some((s) => !s.ready || !s.peer)) error = 'NOT_READY';
      else {
        r.game = Game.create({
          ...r.settings,
          seed: this.seed(),
          playerCount: r.seats.length,
          seatTypes: r.seats.map(() => 'ai'),
          opponents: r.seats.slice(1).map((s) => s.character),
          character: r.seats[0].character,
        });
        r.status = 'PLAYING';
        this.syncTurn(r);
      }
    } else if (m.type === 'control') {
      if (r.status !== 'PLAYING' || !keys(m.payload, ['ai']) || typeof m.payload.ai !== 'boolean')
        error = 'INVALID_PAYLOAD';
      else if (!m.payload.ai && actor(r) === seat.id && this.now() >= r.deadline)
        error = 'TURN_TIMEOUT';
      else seat.ai = m.payload.ai;
    } else {
      if (r.status !== 'PLAYING') error = 'INVALID_PHASE';
      else if (seat.ai) error = 'AI_CONTROLLED';
      else if (actor(r) !== seat.id) error = 'NOT_CURRENT_PLAYER';
      else if (this.now() >= r.deadline) error = 'TURN_TIMEOUT';
      else if (!RULE_COMMANDS.has(m.type)) error = 'UNSUPPORTED_COMMAND';
      else if (m.type === 'step' && r.game.s.phase !== 'branch') error = 'SERVER_MOVEMENT';
      else {
        const reply = r.game.dispatch(nextCommand(r.game, m.type, m.payload, seat.id));
        if (!reply.ok) error = reply.code;
        else this.syncTurn(r);
      }
    }
    if (error) return reject(error);
    seat.sequence = m.sequence;
    r.revision++;
    r.lastActivity = this.now();
    const events = [{ kind: 'command', playerId: seat.id, type: m.type }];
    const reply = this.result(peer, r, null, events);
    this.broadcast(r);
    return reply;
  }
  tick() {
    const now = this.now();
    for (const [id, r] of this.rooms) {
      if (
        (r.allOfflineAt !== null && now - r.allOfflineAt >= this.ttlMs) ||
        (r.status !== 'PLAYING' && now - r.lastActivity >= this.ttlMs)
      ) {
        for (const seat of r.seats) {
          this.bindings.delete(seat.sessionId);
          if (seat.peer) seat.peer.close(4004, 'ROOM_EXPIRED');
        }
        this.rooms.delete(id);
        continue;
      }
      if (r.status !== 'PLAYING') continue;
      let changed = false;
      for (const seat of r.seats)
        if (
          !seat.ai &&
          !seat.peer &&
          seat.disconnectedAt !== null &&
          now - seat.disconnectedAt >= this.graceMs
        ) {
          seat.ai = true;
          r.revision++;
          changed = true;
        }
      const actorId = actor(r),
        seat = r.seats[actorId],
        g = r.game;
      if (now >= r.deadline && !seat.ai) {
        seat.ai = true;
        r.revision++;
        changed = true;
      }
      if (now - r.lastStep >= this.stepMs) {
        const phase = g.s.phase;
        let ok = false;
        if (seat.ai) ok = g.ai();
        else if (phase === 'moving' || phase === 'departure')
          ok = g.command(phase === 'moving' ? 'step' : 'roll');
        if (ok) {
          r.lastStep = now;
          r.revision++;
          r.lastActivity = now;
          this.syncTurn(r);
          changed = true;
        }
      }
      if (changed) this.broadcast(r);
    }
  }
}
