import { visitQuote } from './arrival-panels.js';
import { debtInfo } from './debt-panel.js';
import { diceWeights } from './strategy.js';

export const LITTLE_NAIWA_KEY = 'naiwa-little-assistant-v1';

export function littleNaiwaTip(game, context) {
  const { s, player } = game;
  if (!player.human || !player.alive) return '';
  const tile = game.tiles[player.pos];

  if (context === 'roll') {
    if (player.skip) return '点「休养」跳过这回合。';
    if (player.forced) return `步数已指定，本次走 ${player.forced} 格。`;
    if (player.slowTurns) return '慢行生效，本次只走一格。';

    const risky = [...diceWeights(player.diceCount)].reduce((chance, [steps, weight]) => {
      const routes = game.preview(steps);
      return routes.length && routes.every((route) => route.rent > player.money * 0.35)
        ? chance + weight
        : chance;
    }, 0);
    if (risky >= 0.3) return '前方高租金地块较多，先看看「落点」。';
    return '轮到你啦，点「掷骰子」出发。';
  }
  if (context === 'end') return '经营都办好了吗？点「结束回合」交棒。';

  if (context === 'buy') {
    if (tile.price > player.money) return '现金不够买这块地，可以先跳过。';
    if (tile.price >= player.money * 0.5) return '这块地要花一半以上的现金，记得留些付租。';
    return '买地前可以比较街区归属，连片住宅能提高租金。';
  }
  if (context === 'branch') {
    const [main, shortcut] = tile.next.map((first) => {
      const routes = game.preview(s.remaining, { first });
      return Math.max(0, ...routes.map((route) => route.rent));
    });
    if (main > shortcut) return '这次支路的最高预估租金更低。';
    if (shortcut > main) return '这次主路的最高预估租金更低。';
    return '选路前看看最终落点和沿途奖励。';
  }
  if (context === 'estate' && s.ownership[player.pos]) {
    const quote = visitQuote(game, player.pos);
    if (quote.max > player.money) return '这次费用可能超过现金，先核对最高费用。';
    if (quote.exemption === 'shield') return '你有免租效果，这次费用可以抵消。';
  }
  if (context === 'debt') {
    const debt = debtInfo(game);
    if (!debt || debt.canPay) return '';
    if (debt.bank.available > 0 && debt.bank.deposit >= debt.gap)
      return '存款够补上缺口，可以先去银行取款。';
    if (debt.stocks.available >= debt.gap) return '卖出部分股票就有机会补上缺口。';
    if (debt.available >= debt.amount) return '可以组合下方几种筹款途径来补齐欠款。';
  }
  return '';
}
