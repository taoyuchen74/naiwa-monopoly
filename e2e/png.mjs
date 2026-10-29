import pngjs from 'pngjs';

export const PNG = {
  uniqueCentralColors(buffer) {
    const { width, height, data } = pngjs.PNG.sync.read(buffer);
    const colors = new Set();
    for (let y = Math.floor(height * 0.35); y < height * 0.65; y += 3) {
      for (let x = Math.floor(width * 0.35); x < width * 0.65; x += 3) {
        const i = (y * width + x) * 4;
        colors.add(`${data[i] >> 3},${data[i + 1] >> 3},${data[i + 2] >> 3}`);
      }
    }
    return colors.size;
  },
};
