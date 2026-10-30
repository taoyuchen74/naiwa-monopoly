// Presentation-only budget. A short burst does not change quality; sustained
// slow submissions fall back once until the player changes the quality setting.
export class FrameBudget {
  constructor() {
    this.slow = 0;
    this.degraded = false;
  }
  reset() {
    this.slow = 0;
    this.degraded = false;
  }
  record(milliseconds) {
    if (this.degraded) return false;
    this.slow = milliseconds > 40 ? this.slow + 1 : Math.max(0, this.slow - 1);
    if (this.slow < 8) return false;
    this.degraded = true;
    return true;
  }
}
