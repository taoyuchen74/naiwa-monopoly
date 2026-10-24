export class ActionPacer{
 constructor(clock=()=>performance.now()){this.clock=clock;this.deadline=0;}
 ready({news=false,moving=false,effects=false}={}){return !news&&!moving&&!effects&&this.clock()>=this.deadline;}
 after(phase,speed=1){const duration=phase==='moving'?520:phase==='roll'?1100:phase==='event'?1800:800;this.deadline=this.clock()+Math.max(phase==='moving'?300:650,duration/Math.min(2,Math.max(1,speed)));}
 reset(){this.deadline=0;}
}
