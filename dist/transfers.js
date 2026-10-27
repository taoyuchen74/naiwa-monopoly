// Runtime receipts describe completed payments. They are intentionally outside saved state.
/** @typedef {{from:number,to:number,amount:number,kind:string,tile:number,round:number}} Receipt */
export class TransferLog{
 constructor(){this.sequence=0;this.items=/** @type {(Receipt & {sequence:number})[]} */ ([]);}
 /** @param {Receipt} receipt */
 record(receipt){const entry=Object.freeze({...receipt,sequence:++this.sequence});this.items.push(entry);if(this.items.length>16)this.items.shift();return entry;}
 /** @param {number} sequence */
 after(sequence){return this.items.filter(entry=>entry.sequence>sequence);}
}
export class TransferFeed{
 /** @param {import("./engine.js").Game} game */
 read(game,started=true){if(!started||this.game!==game){this.game=game;this.sequence=game.transfers.sequence;return [];}const entries=game.transfers.after(this.sequence);this.sequence=game.transfers.sequence;return entries;}
}
/** @type {WeakMap<Element,object>} */
const pulseTokens=new WeakMap();
/** @param {HTMLElement} root @param {Receipt} receipt */
export function pulseTransferCards(root,receipt){const cleanups=/** @type {(()=>void)[]} */ ([]);for(const [id,sign,kind]of /** @type {[number,string,string][]} */ ([[receipt.from,'−','money-out'],[receipt.to,'+','money-in']])){const card=/** @type {HTMLElement} */ (root.querySelector(`[data-player-id="${id}"]`));if(!card)continue;const token={};pulseTokens.set(card,token);card.classList.remove('money-in','money-out');card.classList.add(kind);card.dataset.transferLabel=sign+receipt.amount;cleanups.push(()=>{if(pulseTokens.get(card)===token){card.classList.remove('money-in','money-out');delete card.dataset.transferLabel;pulseTokens.delete(card);}});}return ()=>cleanups.forEach(clear=>clear());}
