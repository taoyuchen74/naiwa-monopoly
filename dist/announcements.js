// A visual AI receipt queue is not a screen-reader queue. Speak only boundaries
// of a continuous AI sequence, the human turn, and the final result.
export class GameAnnouncements{
 constructor(target,{delay=180}={}){this.target=target;this.delay=delay;this.lastText='';}
 reset(){clearTimeout(this.timer);this.lastText='';this.key=null;}
 say(text){if(!text||text===this.lastText)return;this.lastText=text;clearTimeout(this.timer);this.timer=setTimeout(()=>{const node=this.target();if(node)node.textContent=text;},this.delay);}
 sync(game,started){if(!started){this.game=null;this.key=null;return;}if(this.game!==game){this.game=game;this.key=null;this.lastText='';}
  const s=game.s,key=s.handoff?`handoff:${s.current}:${s.round}`:s.phase==='finished'?'finished':game.player.human?`human:${s.round}:${s.current}`:'ai';if(key===this.key)return;this.key=key;
  this.say(s.handoff?`请交给玩家 ${s.current+1}，${game.char().name}。确认后开始回合。`:key==='finished'?'本次旅行已结束，可查看排名与资产明细。':key==='ai'?'电脑奶伴正在行动，详细过程可在消息记录查看。':`第 ${s.round} 轮，轮到${game.char().name}。`);
 }
}
