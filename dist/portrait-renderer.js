import { faces, poses } from './ceramic-portraits-data.js';

export const portraitBitmap = (id) => (Object.hasOwn(faces, id) ? faces[id] : null);
export function eventPoseBitmap(id, mood) {
  if (!Object.hasOwn(poses, id)) return null;
  const key = mood === 'win' ? 'happy' : mood === 'loss' ? 'sad' : mood;
  return Object.hasOwn(poses[id], key) ? poses[id][key] : poses[id].idle;
}
