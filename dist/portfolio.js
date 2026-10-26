/** @returns {import("./game-types.js").StockBook[]} */
export const emptyBook=()=>Array.from({length:4},()=>({cost:0,realized:0,unpriced:0}));
/** @param {import("./game-types.js").Player} p */
export function migratePortfolio(p){if(p.stockBook===undefined){p.stockLegacy=true;p.stockBook=p.stocks.map(q=>({cost:q?null:0,realized:0,unpriced:0}));}if(p.stockLegacy===undefined)p.stockLegacy=false;if(p.stockTrades===undefined)p.stockTrades=[];
 return typeof p.stockLegacy==='boolean'&&Array.isArray(p.stockBook)&&p.stockBook.length===4&&p.stockBook.every((b,i)=>b&&(b.cost===null||Number.isSafeInteger(b.cost)&&b.cost>=0)&&(!p.stocks[i]?b.cost===0:true)&&Number.isSafeInteger(b.realized)&&Number.isSafeInteger(b.unpriced)&&b.unpriced>=0)&&Array.isArray(p.stockTrades)&&p.stockTrades.length<=40&&p.stockTrades.every(t=>t&&Number.isInteger(t.stock)&&t.stock>=0&&t.stock<4&&Number.isInteger(t.qty)&&t.qty!==0&&Number.isInteger(t.price)&&t.price>=20&&t.price<=500&&Number.isInteger(t.round)&&t.round>=1&&(t.profit===null||Number.isSafeInteger(t.profit)));}
// Integer cost allocation conserves the original purchase cost across partial sales.
/** @param {import("./game-types.js").Player} p @param {number} stock @param {number} qty @param {number} price @param {number} round */
export function recordTrade(p,stock,qty,price,round){const b=p.stockBook[stock],before=p.stocks[stock];let profit=null;
 if(qty>0){if(b.cost!==null)b.cost+=qty*price;}else{const sold=-qty,cost=b.cost===null?null:sold===before?b.cost:Math.round(b.cost*sold/before);profit=cost===null?null:sold*price-cost;if(profit===null)b.unpriced++;else b.realized+=profit;if(b.cost!==null)b.cost-=cost;if(sold===before)b.cost=0;}
 p.money-=qty*price;p.stocks[stock]+=qty;p.stockTrades.unshift({stock,qty,price,round,profit});p.stockTrades=p.stockTrades.slice(0,40);return profit;
}
/** @param {import("./engine.js").Game} g @param {import("./game-types.js").Player} p @param {number} stock */
export function stockPosition(g,p,stock){const q=p.stocks[stock],b=p.stockBook[stock],price=g.s.market[stock].price,value=q*price;return {qty:q,price,cost:b.cost,average:q&&b.cost!==null?b.cost/q:null,value,unrealized:b.cost===null?null:value-b.cost,rate:b.cost?((value-b.cost)/b.cost)*100:null,realized:b.realized,unpriced:b.unpriced};}
/** @param {import("./engine.js").Game} g @param {import("./game-types.js").Player} [p] */
export function portfolio(g,p=g.player){const positions=p.stocks.map((_,i)=>stockPosition(g,p,i)),unknown=positions.filter(o=>o.qty&&o.cost===null).length;return{positions,value:positions.reduce((n,o)=>n+o.value,0),cost:unknown?null:positions.reduce((n,o)=>n+(o.cost||0),0),unrealized:unknown?null:positions.reduce((n,o)=>n+o.unrealized,0),realized:positions.reduce((n,o)=>n+o.realized,0),unknown,unpriced:positions.reduce((n,o)=>n+o.unpriced,0)};}
