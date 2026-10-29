import { sha256, stateHash, canonicalState as _canonicalState } from './state-hash.js';
const recordings = new WeakMap(),
  muted = new WeakSet();
export const REPLAY_VERSION = 1,
  REPLAY_RULES = 12;
export const clone = (x) => JSON.parse(JSON.stringify(x));
export function muteReplay(g) {
  muted.add(g);
}
let serial = 0;
const identity = () => globalThis.crypto?.randomUUID?.() || Date.now() + '-' + ++serial;
export function recordCommand(g, command, before) {
  const r = recordings.get(g);
  if (!r || muted.has(g)) return;
  const prior = JSON.parse(before),
    previous = r.commands.at(-1)?.chain || r.initialHash,
    entry = {
      command: clone(command),
      stateHash: g.stateHash(),
      cause:
        !g.s.players[prior.current].alive && prior.players[prior.current].alive
          ? prior.debt?.label || '未知原因'
          : null,
    };
  entry.chain = sha256(
    previous + JSON.stringify(entry.command) + entry.stateHash + JSON.stringify(entry.cause),
  );
  r.commands.push(entry);
  r.finalHash = entry.stateHash;
}
export function replayRecord(g) {
  if (recordings.has(g)) return recordings.get(g);
  const r = {
    captureId: identity(),
    formatVersion: 1,
    rules: g.s.rules,
    initial: clone(g.s),
    initialHash: g.stateHash(),
    commands: [],
    finalHash: g.stateHash(),
  };
  recordings.set(g, r);
  return r;
}
export function attachRecording(g, r, fork = false) {
  const next = clone(r);
  if (fork || !next.captureId) next.captureId = identity();
  recordings.set(g, next);
}
export function compatible(r) {
  if (
    !r ||
    r.formatVersion !== 1 ||
    ![11, 12].includes(r.rules) ||
    r.initial?.rules !== r.rules ||
    (r.initial.mapVersion === 4 ? r.rules !== 12 : r.rules !== 11)
  )
    throw Error('版本不兼容，不能播放。');
  if (r.captureId !== undefined && (typeof r.captureId !== 'string' || r.captureId.length > 100))
    throw Error('回放标识无效');
  if (!Array.isArray(r.commands) || r.commands.length > 100000) throw Error('命令数量无效。');
  if (r.initialHash !== stateHash(r.initial)) throw Error('初始快照校验失败。');
}
