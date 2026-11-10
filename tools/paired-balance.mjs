import { ruleDependencies } from './simulation-provenance.mjs';
import { Game } from '../dist/engine.js';
import { CHARACTERS } from '../dist/content.js';
import { closedBranches } from '../dist/forest-rules.js';
import { Worker, isMainThread, parentPort } from 'node:worker_threads';
import { readFileSync, existsSync, appendFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ids = CHARACTERS.map((c) => c.id);
export function simulationOptions(env = {}) {
  const workers = Number(env.SIM_WORKERS || 3),
    limit = Number(env.SIM_LIMIT || 3360);
  if (
    !Number.isInteger(workers) ||
    workers < 1 ||
    workers > 16 ||
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > 3360
  )
    throw new RangeError('SIM_WORKERS must be 1..16 and SIM_LIMIT 1..3360');
  return { workers, limit };
}
export function matrix() {
  const cases = [];
  for (let seed = 2001; seed <= 2030; seed++)
    for (let rotation = 0; rotation < 6; rotation++)
      for (const mapVersion of [1, 2, 4])
        for (const difficulty of ['easy', 'normal', 'hard'])
          for (const talents of [false, true]) {
            cases.push({
              family: 'paired',
              seed,
              rotation,
              mapVersion,
              difficulty,
              talents,
              players: 6,
            });
          }
  for (let players = 2; players <= 5; players++)
    for (const difficulty of ['easy', 'normal', 'hard'])
      for (let seed = 2031; seed <= 2040; seed++)
        cases.push({
          family: 'compat',
          seed,
          rotation: (seed - 2031) % 6,
          mapVersion: 4,
          difficulty,
          talents: true,
          players,
        });
  return cases.map((c, id) => ({ id, ...c }));
}
export function runMatch(config, restore = false) {
  const roster = Array.from({ length: config.players }, (_, i) => ids[(config.rotation + i) % 6]);
  let g = Game.create({
    seed: config.seed,
    mapVersion: config.mapVersion,
    rounds: 50,
    playerCount: config.players,
    character: roster[0],
    opponents: roster.slice(1),
    seatTypes: roster.map(() => 'ai'),
    difficulty: config.difficulty,
    talents: config.talents,
    randomStart: false,
    startingCash: 3200,
    startingTickets: 60,
  });
  const causes = Object.create(null);
  let commands = 0,
    restores = 0,
    opportunities = 0,
    openOpportunities = 0,
    entries = 0;
  while (g.s.phase !== 'finished' && commands < 30000) {
    const pid = g.s.current,
      pos = g.player.pos,
      phase = g.s.phase,
      reverse = g.player.reverse;
    const alive = g.s.players.map((p) => p.alive),
      cause = g.s.debt?.label || '未知原因';
    const entry = g.s.mapVersion === 4 ? [8, 28].indexOf(pos) : -1,
      open = entry >= 0 && !closedBranches(g.s).includes(entry);
    if (!g.ai()) throw Error('Stalled ' + JSON.stringify(config) + ' ' + phase);
    commands++;
    if (
      entry >= 0 &&
      !reverse &&
      ['moving', 'branch'].includes(phase) &&
      g.s.players[pid].pos !== pos
    ) {
      opportunities++;
      if (open) openOpportunities++;
      if (g.s.players[pid].pos === [40, 44][entry]) entries++;
    }
    g.s.players.forEach((p, i) => {
      if (alive[i] && !p.alive) causes[i] = cause;
    });
    if (restore && commands % 97 === 0) {
      const hash = g.stateHash(),
        copy = Game.restore(g.s);
      if (!copy || copy.stateHash() !== hash) throw Error('Restore mismatch ' + config.id);
      g = copy;
      restores++;
    }
  }
  if (g.s.phase !== 'finished') throw Error('Command limit ' + config.id);
  const leaders = g.leaders().map((p) => p.id);
  let rank = 1;
  const ranked = g.ranking().map((p, i, a) => {
    if (i && (p.alive !== a[i - 1].alive || g.worth(p) !== g.worth(a[i - 1]))) rank = i + 1;
    return {
      seat: p.id,
      character: p.character,
      alive: p.alive,
      rank,
      winCredit: leaders.includes(p.id) ? 1 / leaders.length : 0,
      assets: g.assets(p),
      bankruptcyCause: causes[p.id] || null,
    };
  });
  return {
    config,
    rounds: g.s.round,
    commands,
    restores,
    hash: g.stateHash(),
    routes: { opportunities, openOpportunities, entries },
    ranked,
  };
}
if (!isMainThread) {
  parentPort.on('message', (config) => {
    try {
      const first = runMatch(config, true),
        second = runMatch(config, false);
      if (
        first.hash !== second.hash ||
        first.commands !== second.commands ||
        JSON.stringify(first.routes) !== JSON.stringify(second.routes) ||
        JSON.stringify(first.ranked) !== JSON.stringify(second.ranked)
      )
        throw Error('Repeat mismatch ' + config.id);
      parentPort.postMessage({ row: { ...first, repeatHash: second.hash } });
    } catch (error) {
      parentPort.postMessage({ error: error.stack });
    }
  });
} else if (resolve(process.argv[1] || '') === fileURLToPath(import.meta.url)) {
  const out = resolve(process.argv[2] || 'artifacts/paired-balance.ndjson');
  const { workers, limit } = simulationOptions(process.env),
    cases = matrix().slice(0, limit);
  const provenance = ruleDependencies();
  const manifest = {
    version: 2,
    provenance,
    roundLimit: 50,
    initial: { cash: 3200, tickets: 60, loan: 0 },
    randomStart: false,
    seatTypes: 'all-ai',
    characterOrder: ids,
    rulesHash: provenance.dependencyHash,
    matrixHash: createHash('sha256').update(JSON.stringify(cases)).digest('hex'),
    cases: cases.length,
  };
  if (existsSync(out + '.manifest.json')) {
    const old = JSON.parse(readFileSync(out + '.manifest.json'));
    if (old.rulesHash !== manifest.rulesHash || old.matrixHash !== manifest.matrixHash)
      throw Error('Incompatible resume');
  } else writeFileSync(out + '.manifest.json', JSON.stringify(manifest));
  const done = new Set();
  if (existsSync(out))
    for (const line of readFileSync(out, 'utf8').trim().split('\n').filter(Boolean)) {
      const r = JSON.parse(line);
      if (
        !cases[r.config.id] ||
        JSON.stringify(cases[r.config.id]) !== JSON.stringify(r.config) ||
        done.has(r.config.id) ||
        r.hash !== r.repeatHash
      )
        throw Error('Invalid/duplicate resumed row');
      done.add(r.config.id);
    }
  if (done.size === cases.length) {
    console.log('Already complete ' + done.size);
    process.exit(0);
  }
  const queue = cases.filter((c) => !done.has(c.id)),
    pool = [];
  let active = 0,
    paused = false,
    finished = false;
  const status = () =>
    writeFileSync(
      out + '.state.json',
      JSON.stringify({ completed: done.size, total: cases.length, active, paused }),
    );
  const assign = (w) => {
    if (finished || paused || !queue.length) return;
    active++;
    w.postMessage(queue.shift());
    status();
  };
  process.stdin.on('data', (buf) => {
    for (const c of String(buf).trim().split(/\s+/)) {
      if (c === 'pause') paused = true;
      if (c === 'resume') {
        paused = false;
        for (const w of pool)
          if (!w.busy) {
            w.busy = true;
            assign(w);
          }
      }
    }
    status();
  });
  for (let i = 0; i < workers; i++) {
    const w = new Worker(new URL(import.meta.url));
    pool.push(w);
    w.busy = true;
    w.on('message', (message) => {
      active--;
      w.busy = false;
      if (message.error) {
        finished = true;
        console.error(message.error);
        for (const x of pool) x.terminate();
        process.stdin.pause();
        process.exitCode = 1;
        return;
      }
      if (finished) return;
      appendFileSync(out, JSON.stringify(message.row) + '\n');
      done.add(message.row.config.id);
      if (done.size % 30 === 0) console.log('Verified ' + done.size + '/' + cases.length);
      if (done.size === cases.length) {
        finished = true;
        status();
        for (const x of pool) x.terminate();
        process.stdin.pause();
        console.log('Complete ' + done.size);
        return;
      }
      if (!paused && queue.length) {
        w.busy = true;
        assign(w);
      }
      status();
    });
    w.on('error', (error) => {
      finished = true;
      console.error(error);
      for (const x of pool) x.terminate();
      process.stdin.pause();
      process.exitCode = 1;
    });
    assign(w);
  }
  status();
}
