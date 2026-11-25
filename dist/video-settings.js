export const VIDEO_KEY = 'naiwa-video-v1';
export const VIDEO_LABELS = { auto: '自动', smooth: '流畅', balanced: '均衡', fine: '精细' };
export const VIDEO_FIELDS = {
  fps: [30, 60, 120, 0],
  scale: [60, 75, 85, 100],
  shadows: ['off', 'soft', 'fine'],
  post: ['off', 'soft', 'fine'],
  adaptive: [true, false],
};

export function videoDefaults(preset, touch) {
  switch (preset) {
    case 'smooth':
      return { fps: touch ? 30 : 60, scale: 75, shadows: 'off', post: 'off', adaptive: false };
    case 'fine':
      return { fps: touch ? 30 : 60, scale: 100, shadows: 'fine', post: 'fine', adaptive: false };
    default:
      return {
        fps: touch ? 30 : 60,
        scale: touch || preset === 'balanced' ? 85 : 100,
        shadows: touch ? 'off' : 'soft',
        post: 'off',
        adaptive: preset === 'auto',
      };
  }
}

export function normalizeVideo(raw, legacy) {
  const preset = Object.hasOwn(VIDEO_LABELS, raw?.preset)
    ? raw.preset
    : legacy === 'low'
      ? 'smooth'
      : 'auto';
  const overrides = Object.fromEntries(
    Object.entries(VIDEO_FIELDS)
      .filter(([key, values]) => values.includes(raw?.overrides?.[key]))
      .map(([key]) => [key, raw.overrides[key]]),
  );
  return { preset, overrides, showFps: raw?.showFps === true };
}

export function readVideo(storage, legacy) {
  try {
    return normalizeVideo(JSON.parse(storage.getItem(VIDEO_KEY)), legacy);
  } catch {
    return normalizeVideo(null, legacy);
  }
}

export function writeVideo(storage, video) {
  try {
    storage.setItem(VIDEO_KEY, JSON.stringify(video));
    return true;
  } catch {
    return false;
  }
}

export function resolveVideo(video, touch) {
  return { ...videoDefaults(video.preset, touch), ...video.overrides, showFps: video.showFps };
}

export function videoProfile(
  config,
  scale,
  reducedEffects,
  { dpr = globalThis.devicePixelRatio || 1 } = {},
) {
  const shadows = reducedEffects.shadows ? 'off' : config.shadows;
  const post = reducedEffects.post ? 'off' : config.post;
  return {
    name: config.preset,
    ratio: (Math.min(Math.max(dpr, 1), 1.25) * scale) / 100,
    shadow: { off: 0, soft: 1024, fine: 2048 }[shadows],
    aoSamples: { off: 0, soft: 8, fine: 16 }[post],
    aoScale: post === 'fine' ? 0.65 : post === 'soft' ? 0.5 : 0,
    post,
    shadows,
  };
}

export class RenderClock {
  constructor() {
    this.reset();
  }

  reset() {
    this.last = null;
    this.deadline = null;
  }

  take(now, fps) {
    if (this.deadline !== null && now + 0.75 < this.deadline) return null;
    const elapsed = this.last === null ? 0 : now - this.last;
    this.last = now;
    if (!fps) {
      this.deadline = null;
    } else {
      const interval = 1000 / fps;
      const deadline = this.deadline ?? now;
      const steps = Math.max(1, Math.floor((now + 0.75 - deadline) / interval) + 1);
      this.deadline = deadline + steps * interval;
    }
    return elapsed;
  }
}

export class FrameResolution {
  constructor() {
    this.reset(100);
  }

  reset(scale) {
    this.scale = scale;
    this.samples = [];
    this.elapsed = 0;
    this.good = 0;
    this.underPressure = false;
    this.fps = 0;
  }

  idle() {
    this.samples.length = 0;
    this.elapsed = 0;
    this.underPressure = false;
    this.fps = 0;
  }

  observe(elapsed, { fps, scale, adaptive }) {
    if (!elapsed || elapsed > 250) return this.scale;
    this.samples.push(elapsed);
    this.elapsed += elapsed;
    if (this.elapsed < 1000) return this.scale;
    const mean = this.elapsed / this.samples.length;
    const sorted = this.samples.sort((a, b) => a - b);
    const p95 = sorted[Math.floor((sorted.length - 1) * 0.95)];
    this.fps = Math.round(1000 / mean);
    this.samples = [];
    this.elapsed = 0;
    if (!adaptive) return this.scale;
    const goal = 1000 / Math.min(fps || 60, 60);
    const steps = VIDEO_FIELDS.scale;
    const index = steps.indexOf(this.scale);
    this.underPressure = mean > goal * 1.14 || p95 > goal * 1.65;
    if (this.underPressure) {
      this.scale = steps[Math.max(0, index - 1)];
      this.good = 0;
    } else if (mean <= goal * 1.04 && p95 <= goal * 1.22) {
      this.good++;
      if (this.good >= 7 && this.scale < scale) {
        this.scale = Math.min(scale, steps[index + 1]);
        this.good = 0;
      }
    } else {
      this.good = 0;
    }
    return this.scale;
  }
}
