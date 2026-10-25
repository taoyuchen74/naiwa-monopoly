// One gesture remains a pinch until every finger lifts, preventing accidental land taps.
export class MapGestures{
 constructor({pan,zoom,tap,turn,isStudio=()=>false}){Object.assign(this,{pan,zoom,tap,turn,isStudio});this.points=new Map();this.multi=false;this.dragged=false;this.travel=0;}
 down(id,x,y){if(!this.points.size){this.multi=false;this.dragged=false;this.travel=0;}this.points.set(id,{x,y});if(this.points.size>1)this.multi=true;}
 move(id,x,y){const old=this.points.get(id);if(!old)return;const before=[...this.points.values()],dx=x-old.x,dy=y-old.y;this.points.set(id,{x,y});this.travel+=Math.hypot(dx,dy);const after=[...this.points.values()];if(after.length===2){const distance=p=>Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),a=distance(before),b=distance(after);this.dragged=true;if(a>1&&b>1)this.zoom(b/a);return;}if(this.multi)return;if(this.travel>6){this.dragged=true;if(this.isStudio())this.turn(dx);else this.pan(dx,dy);}}
 up(id,x,y){if(!this.points.has(id))return;const single=this.points.size===1;this.points.delete(id);if(single&&!this.multi&&!this.dragged&&this.travel<=6&&!this.isStudio())this.tap(x,y);}
 cancel(id){this.points.delete(id);this.multi=true;this.dragged=true;}
 reset(){this.points.clear();this.multi=false;this.dragged=false;this.travel=0;}
}
