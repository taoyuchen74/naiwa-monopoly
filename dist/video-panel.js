import { normalizeVideo, resolveVideo, VIDEO_FIELDS, VIDEO_LABELS } from './video-settings.js';

const effects = { off: '关闭', soft: '柔和', fine: '精细' };

function select(key, label, items, value, display) {
  const options = items
    .map(
      (item) =>
        `<option value="${item}" ${item === value ? 'selected' : ''}>${display(item)}</option>`,
    )
    .join('');
  return `<div class="video-row"><label for="video-${key}">${label}</label><select id="video-${key}" data-video="${key}">${options}</select></div>`;
}

export function videoChange(video, field, control) {
  if (field === 'showFps') return normalizeVideo({ ...video, showFps: control.checked });
  const value =
    control.type === 'checkbox'
      ? control.checked
      : field === 'fps' || field === 'scale'
        ? Number(control.value)
        : control.value;
  return normalizeVideo({ ...video, overrides: { ...video.overrides, [field]: value } });
}

export function videoPreset(video, preset) {
  return normalizeVideo({ ...video, preset, overrides: {} });
}

function qualityText(video, values) {
  return (
    (Object.keys(video.overrides).length ? '自定义' : VIDEO_LABELS[video.preset]) +
    ' · ' +
    (values.fps ? values.fps + ' FPS' : '跟随屏幕')
  );
}

export function syncVideoPanel(root, video, touch) {
  const heading = root?.querySelector('.video-heading span');
  if (!heading) return;
  const config = resolveVideo(video, touch);
  heading.textContent = qualityText(video, config);
  for (const button of root.querySelectorAll('[data-preset][data-act="videoPreset"]'))
    button.setAttribute(
      'aria-pressed',
      String(!Object.keys(video.overrides).length && button.dataset.preset === video.preset),
    );
  for (const control of root.querySelectorAll('[data-video]')) {
    const value = config[control.dataset.video];
    if (control.type === 'checkbox') control.checked = value;
    else control.value = String(value);
  }
}

export function videoPanel(video, touch, expanded = false) {
  const values = resolveVideo(video, touch);
  const custom = Object.keys(video.overrides).length > 0;
  const presets = Object.entries(VIDEO_LABELS)
    .map(
      ([key, label]) =>
        `<button type="button" data-act="videoPreset" data-preset="${key}" aria-pressed="${!custom && video.preset === key}">${label}</button>`,
    )
    .join('');
  return `<div class="video-panel">
    <div class="video-heading"><strong>画质预设</strong><span>${qualityText(video, values)}</span></div>
    <div class="video-presets" role="group" aria-label="画质预设">${presets}</div>
    <p>调整后即时生效，保存在这台设备。</p>
    <details id="videoAdvanced" ${expanded ? 'open' : ''}><summary>高级选项</summary>
    ${select('fps', '帧率上限', VIDEO_FIELDS.fps, values.fps, (n) => (n ? `${n} FPS` : '跟随屏幕'))}
    ${select('scale', '渲染分辨率', VIDEO_FIELDS.scale, values.scale, (n) => `${n}%`)}
    ${select('shadows', '阴影', VIDEO_FIELDS.shadows, values.shadows, (key) => effects[key])}
    ${select('post', '后处理', VIDEO_FIELDS.post, values.post, (key) => effects[key])}
    <label class="video-row">自动分辨率<input type="checkbox" id="video-adaptive" data-video="adaptive" ${values.adaptive ? 'checked' : ''}></label>
    <label class="video-row">显示 FPS<input type="checkbox" id="video-showFps" data-video="showFps" ${values.showFps ? 'checked' : ''}></label>
    </details></div>`;
}
