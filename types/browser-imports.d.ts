// The browser cache-busting query is preserved at runtime.
declare module '*talents.js?v=16' {
  export const hasTalent: typeof import('../dist/talents.js').hasTalent;
  export const departureTalent: typeof import('../dist/talents.js').departureTalent;
}
