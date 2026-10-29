// Explicit opt-in. This path must be on a persistent, private disk.
process.env.CLOUD_DB||='data/cloud.sqlite';
await import('./start.mjs');
