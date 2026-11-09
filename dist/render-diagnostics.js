// @ts-check
/** @typedef {'starting'|'webgl'|'fallback'} RenderState */
/** @typedef {'context-unavailable'|'draw-error'|'context-lost'|'custom-map'} RenderReason */
const reasons = Object.freeze({
  'context-unavailable': '无法创建3D上下文，使用简洁地图',
  'draw-error': '3D绘制异常，已停止重绘并使用简洁地图',
  'context-lost': '3D上下文丢失，暂用简洁地图',
  'custom-map': '自定义地图使用简洁地图',
});
export class RenderDiagnostics {
  /** @type {RenderState} */
  #state = 'starting';
  /** @type {RenderReason|null} */
  #reason = null;
  webgl() {
    this.#state = 'webgl';
    this.#reason = null;
  }
  /** @param {RenderReason} reason */
  fallback(reason) {
    this.#state = 'fallback';
    this.#reason = reason;
  }
  /** Only allowlisted public primitives enter a diagnostic; never pass a save or error object.
   * @param {{buildId:string,width:number,height:number,mapVersion:number,phase:string,requestedQuality:string,effectiveQuality:string}} input
   */
  snapshot(input) {
    return Object.freeze({
      buildId: input.buildId,
      viewport: Object.freeze({ width: input.width, height: input.height }),
      mapVersion: input.mapVersion,
      phase: input.phase,
      requestedQuality: input.requestedQuality,
      effectiveQuality: input.effectiveQuality,
      renderState: this.#state,
      fallbackReason: this.#reason,
      errorSummary: this.#reason ? reasons[this.#reason] : '',
    });
  }
}
