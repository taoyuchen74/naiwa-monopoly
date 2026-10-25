// Runtime receipts describe completed payments. They are intentionally outside saved state.
export class TransferLog{
 constructor(){this.sequence=0;this.items=[];}
 record(receipt){const entry=Object.freeze({...receipt,sequence:++this.sequence});this.items.push(entry);if(this.items.length>16)this.items.shift();return entry;}
 after(sequence){return this.items.filter(entry=>entry.sequence>sequence);}
}
export class TransferFeed{
 read(game,started=true){if(!started||this.game!==game){this.game=game;this.sequence=game.transfers.sequence;return [];}const entries=game.transfers.after(this.sequence);this.sequence=game.transfers.sequence;return entries;}
}
const pulseTokens=new WeakMap();
export function pulseTransferCards(root,receipt){const cleanups=[];for(const [id,sign,kind]of [[receipt.from,'−','money-out'],[receipt.to,'+','money-in']]){const card=root.querySelector(`[data-player-id="${id}"]`);if(!card)continue;const token={};pulseTokens.set(card,token);card.classList.remove('money-in','money-out');card.classList.add(kind);card.dataset.transferLabel=sign+receipt.amount;cleanups.push(()=>{if(pulseTokens.get(card)===token){card.classList.remove('money-in','money-out');delete card.dataset.transferLabel;pulseTokens.delete(card);}});}return ()=>cleanups.forEach(clear=>clear());}
