export function animationSpeed(value=1){const speed=Number(value);return Number.isFinite(speed)?Math.min(3,Math.max(1,speed)):1;}
export function presentationSpeed(options={},ai=false){return ai&&options.aiFast!==false?3:animationSpeed(options.speed);}
export class ActionPacer{
 constructor(clock=()=>performance.now()){this.clock=clock;this.deadline=0;this.speed=1;}
 ready({news=false,moving=false,effects=false}={}){return !news&&!moving&&!effects&&this.clock()>=this.deadline;}
 setSpeed(value){const speed=animationSpeed(value);if(speed===this.speed)return;const now=this.clock();this.deadline=now+Math.max(0,this.deadline-now)*this.speed/speed;this.speed=speed;}
 after(phase,speed=1){this.speed=animationSpeed(speed);const duration=phase==='moving'?520:phase==='roll'?1100:phase==='event'?1800:800;this.deadline=this.clock()+Math.max(phase==='moving'?90:160,duration/this.speed);}
 reset(){this.deadline=0;}
}
/** Runtime-only batch guard and fallback flashes, swept by the existing UI tick. */
export class PlaybackSession{
 constructor(clock=()=>performance.now()){this.clock=clock;this.tails=[];}
 bind(game){if(this.game===game)return;this.flush();this.game=game;this.skipped=null;}
 key(game){return game.s.revision+':'+game.s.current+':'+game.s.phase;}
 canSkip(game){this.bind(game);return this.skipped!==this.key(game);}
 skip(game,perform){if(!this.canSkip(game))return false;this.skipped=this.key(game);this.flush();perform();return true;}
 tail(done,duration=1200){this.tails.push({done,deadline:this.clock()+duration});}
 sweep(){const now=this.clock(),due=this.tails.filter(t=>t.deadline<=now);this.tails=this.tails.filter(t=>t.deadline>now);for(const t of due)t.done();}
 flush(){const tails=this.tails;this.tails=[];for(const t of tails)t.done();}
}
