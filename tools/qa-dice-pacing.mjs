// Run as text with agent-browser eval, in a human player's roll phase.
(async()=>{
 const saved=()=>JSON.parse(localStorage.getItem('naiwa-monopoly-v2')),before=saved(),scene=document.getElementById('scene'),button=document.getElementById('actionBtn');
 if(before.phase!=='roll'||!before.players[before.current].human||button.disabled)throw Error('Wait for an active human roll phase');
 const position=before.players[before.current].pos,start=performance.now();
 return await new Promise((resolve,reject)=>{
  const timer=setTimeout(()=>{scene.removeEventListener('dicerollchange',listener);reject(Error('No dice impact event'));},20000);
  function listener(e){if(!e.detail.impact)return;clearTimeout(timer);scene.removeEventListener('dicerollchange',listener);const s=saved();if(s.phase!=='moving'||s.players[s.current].pos!==position){reject(Error('Pawn moved before dice settled'));return;}resolve({dice:s.dice,pawnStayedAt:position,settledAfterMs:Math.round(performance.now()-start),active:document.getElementById('app').classList.contains('is-dice-active')});}
  scene.addEventListener('dicerollchange',listener);button.click();
 });
})()
