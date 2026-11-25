import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  FrameResolution,
  RenderClock,
  normalizeVideo,
  readVideo,
  resolveVideo,
  videoProfile,
  writeVideo,
} from '../dist/video-settings.js';

test('legacy settings migrate and only allowed local video choices are saved', () => {
  const store = new Map();
  const device = {
    getItem: (key) => store.get(key),
    setItem: (key, value) => store.set(key, value),
  };
  assert.equal(readVideo(device, 'low').preset, 'smooth');
  const video = normalizeVideo({
    preset: 'fine',
    overrides: { fps: 120, scale: 103, shadows: 'soft', post: 'fine' },
    showFps: true,
  });
  assert.equal(writeVideo(device, video), true);
  assert.deepEqual(readVideo(device, 'low'), video);
  assert.deepEqual(resolveVideo(video, true), {
    fps: 120,
    scale: 100,
    shadows: 'soft',
    post: 'fine',
    adaptive: false,
    showFps: true,
  });
});

test('a 30 fps cap on a 60 Hz display draws every other refresh without changing elapsed time', () => {
  for (const cap of [0, 30, 60, 120]) {
    const clock = new RenderClock(),
      accepted = [];
    for (let i = 0; i < 120; i++) {
      const elapsed = clock.take((i * 1000) / 60, cap);
      if (elapsed !== null) accepted.push(elapsed);
    }
    assert.equal(accepted.length, cap === 30 ? 60 : 120);
    assert.ok(Math.abs(accepted[1] - 1000 / (cap === 30 ? 30 : 60)) < 1e-8);
  }
});

test('automatic resolution reacts to sustained slow frames and recovers after steady frames', () => {
  const controller = new FrameResolution(),
    settings = { fps: 60, scale: 100, adaptive: true };
  controller.reset(100);
  for (let i = 0; i < 90; i++) controller.observe(40, settings);
  assert.equal(controller.scale, 60);
  assert.equal(controller.underPressure, true);
  controller.idle();
  assert.equal(controller.fps, 0);
  for (let i = 0; i < 1400; i++) controller.observe(1000 / 60, settings);
  assert.equal(controller.scale, 100);
  assert.equal(controller.underPressure, false);
  const profile = videoProfile(
    { preset: 'fine', shadows: 'fine', post: 'fine' },
    75,
    { shadows: true },
    { dpr: 2 },
  );
  assert.equal(profile.ratio, 0.9375);
  assert.equal(profile.shadow, 0);
  assert.equal(profile.aoSamples, 16);
});
