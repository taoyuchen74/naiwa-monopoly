// Run as text with agent-browser eval in an affordable, unshielded estate decision.
(()=>{
 const read=()=>JSON.parse(localStorage.getItem('naiwa-monopoly-v2')),before=read(),from=before.current,to=before.ownership[before.players[from].pos]?.player,button=document.querySelector('[data-act="estatePay"]');
 if(before.phase!=='estate'||to===undefined||before.players[from].shield||!button||button.disabled)throw Error('Open an unshielded estate decision first');
 button.click();const after=read(),paid=after.players[to].money-before.players[to].money;if(paid<=0||before.players[from].money-after.players[from].money!==paid)throw Error('Expected an immediate cash payment');
 const payer=document.querySelector(`[data-player-id="${from}"]`),receiver=document.querySelector(`[data-player-id="${to}"]`);if(payer?.dataset.transferLabel!==`−${paid}`||receiver?.dataset.transferLabel!==`+${paid}`)throw Error('Displayed transfer does not match actual paid amount');
 return{from,to,paid,payer:payer.dataset.transferLabel,receiver:receiver.dataset.transferLabel};
})()
