# 单机命令层

本次迁移清单：

- [x] UI 的规则操作、骰子数量和自动推进提交命令。
- [x] AI 每次决策通过同一入口，骰子及决策标记在引擎内修改。
- [x] 当前玩家、阶段、参数校验，递增revision和逐玩家sequence去重。
- [x] 集中旧存档迁移，保存并校验协议元数据。
- [x] 稳定状态哈希、完整命令重放、旧AI行为指纹和浏览器按钮回归。
- [x] 起点奖励、贷款上限、银行/股市休息日及相关重复经济值集中配置。

## 接口

```js
const command = {
  type: 'bank',
  payload: {kind: 'deposit', amount: 300},
  playerId: 0,
  sequence: 1,
  revision: 0
};
const result = game.dispatch(command); // {ok, code, revision, sequence}
const hash = game.stateHash();         // sha256-v1:<64位十六进制摘要>
```

`type`、`payload`、`playerId`、`sequence`必填。`revision`是可选的预期版本；提交时必须等于当前版本。sequence为每个玩家独立的连续正整数，只有接受后才消费。每接受一次命令，revision加1、该玩家sequence加1；重复、跳号、过期版本、错误玩家/阶段/参数和规则不允许的动作均拒绝，不消费计数、不改变状态、随机数及付款记录。规则处理异常会回滚状态和运行时付款记录。计数达到安全整数边界后拒绝继续，避免精度丢失。

`game.command(type,payload,playerId)`为本机便利入口，自动填写下一sequence和当前revision，返回布尔值。UI操作固定使用真人playerId=0；自动推进使用当前玩家。它不会缓存旧事件来重发；需要去重的调用方应保留原命令并调用dispatch，不能给每次重试生成新sequence。

| type | payload | 阶段 |
| --- | --- | --- |
| roll | `{}` | roll、departure |
| step | `{choice?}` | moving、branch；branch必须选择合法路线 |
| setDiceCount | `{count}` | roll；不超过当前交通工具上限 |
| buy | `{yes}` | buy |
| resolveEstate | `{buy}` | estate |
| acknowledge | `{}` | event |
| construct | `{id,buildingType}` | end |
| setResearch | `{id,key}` | end |
| upgrade、demolish | `{id}` | end |
| sell | `{id}` | roll、end、debt |
| bank | `{kind,amount}` | roll、end、debt；仍检查到访、休息日、额度及债务限制 |
| trade | `{stock,qty}` | roll、end、debt；债务阶段只卖出，休市拒绝 |
| shop | `{key}` | roll、end；必须到店 |
| vehicle | `{id}` | roll、end；必须到店 |
| card | `{index,target?}` | roll、end、estate；继续按具体卡检查时机和目标 |
| settle、bankrupt | `{}` | debt |
| end | `{}` | end |
| aiTurn | `{}` | 所有未结算行动阶段，仅电脑玩家 |

`step`未带路线且首次发现岔路时，会进入branch并算一次有效命令；仍不移动、不消耗剩余步数。错误路线及branch阶段缺少路线会拒绝。破产玩家只允许完成其end阶段的交接。

## 兼容与确定性

原引擎动作方法暂留作命令处理器与既有规则测试的兼容接口，它们不是新调用方的入口，不自行累计协议计数。UI已经迁移完毕，只在本机保存时间和音画偏好上直接写元数据；不再直接修改规则字段。AI策略在一次aiTurn命令内部使用原动作处理器；一次决策可能检查多个候选，但只递增一次revision。回放aiTurn需要使用相同版本的规则及AI代码。

存档新增`revision`和`commandSequences`数组，数组顺序对应玩家id，所有sequence之和等于revision。旧快照缺少两者时从0初始化；部分缺失、负数、小数、长度不符、总和不符拒绝恢复。读取迁移不写回原字节，手动槽、自动槽及JSON导入导出均保留计数。读取较早快照等同回到当时的命令历史，不提供跨不同旅行的全局去重。

哈希对规则状态按键名排序后以UTF-8 JSON计算SHA-256；包含规则版本、地图、玩家、行动阶段、随机状态、日志和协议计数，排除本机options及savedAt。不包含场景、动画时钟或运行时付款通知缓冲。SHA-256实现用Node标准crypto对照空串、Unicode及多个分块边界测试。相同初始快照与相同命令流产生相同哈希；该哈希用于一致性检查，不表示客户端状态可信。

`dist/rules-config.js`是共享经济常量来源：起点400、奶蛙额外80、起点点券25、点券上限、贷款1800、七轮周期的银行周三/股市周日休息、存贷款利率、变卖比率和连锁租金上限。引擎、AI估值和相关面板共用。AI中现金保留1800等数字是独立策略阈值，不是贷款上限，保持原值。

本次没有服务器、联网传输、身份认证、权限服务或前端框架更换。此接口为后续回放与联机提供边界，不构成联网实现。
