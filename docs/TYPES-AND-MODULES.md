# 渐进类型检查与模块职责

运行 `npm ci`、`npm run typecheck`、`npm test`。TypeScript仅作开发检查，不生成运行时代码，项目继续使用原生JavaScript ES Modules，没有引入React或迁移Three.js。

## 类型范围

`dist/domain.d.ts`集中声明GameState、Player、Ownership、Phase、Command、SaveEnvelope，以及关联的建筑、卡牌、偏好、股票、槽位状态等类型。存档仍是扁平格式，schemaVersion与savedAt没有变成新的嵌套结构；命令以type区分payload，正常调用通过Game.command的JSDoc重载检查。

`jsconfig.json`使用allowJs/noEmit、严格空值检查和文件级`// @ts-check`。已检查engine、commands、save-schema、save-repository、economy和ui-session；旧辅助函数的隐式参数暂不全部收紧（noImplicitAny=false），项目级checkJs=false以免一次牵动整个渲染树。app的DOM/音画装配及Three.js模块尚未全面检查；不能把本轮结果称为全仓库严格类型化。

Game.s有明确GameState类型，IDE可查看状态属性及命令载荷；UI推进模块已实际参与检查。外部数据继续以unknown进入dispatch和migrateSave，经原运行时校验后返回结果。旧JSON的动态字段限于迁移函数内部；JSDoc不替代运行时校验。动态命令表在校验后有一处明确的函数类型断言，恢复初始化时有一处补齐协议字段后的状态断言，没有用ts-ignore/ts-nocheck屏蔽生产模块错误。

浏览器原有`talents.js?v=16`查询参数保持不变；query-modules.d.ts仅为该缓存查询提供类型声明，不加载任何脚本。

## 类型错误修复清单

| 原问题 | 处理 |
| --- | --- |
| 接收方参数以null为默认值，被推断成只接受null | 明确number/null；保留公共费用与玩家付款两条路径 |
| 原始命令为unknown，直接读取字段或用未知值查询字符串列表 | 增加对象、整数与字符串收窄；返回明确CommandResult |
| 动态命令表丢失type与payload的联系 | 映射各命令的载荷及处理函数类型，公开便利入口使用关联重载 |
| 部分地产不存在仍读取level/player | 明确稀疏Ownership类型；筛选/建造/升级/卡牌处理先确认地产存在 |
| 路障目标与地产目标形状不一致 | CardTarget明确包含可选obstacle，并保留真实player、level和id |
| 队列shift、债务和角色查找可能为空 | 在解构、结算、清算和查找结果使用前收窄 |
| 神灵键与事件amount的推断过宽 | 声明注册表键类型，确认可选金额后传入支付处理 |
| 创建状态尚未包含revision/sequence | 区分InitialGameState与初始化后的GameState，保持补齐顺序及对象引用 |
| 槽位状态未关联可读数据 | SlotRecord区分empty/valid/corrupt/future，只有valid带GameState |
| 旧存档恢复与JSON导出缺少类型说明 | migrateSave返回GameState/null，encodeSave返回带版本和时间的SaveEnvelope |

`tests/types/contracts.js`是编译专用正反例，不会进入游戏。15个ts-expect-error分别保护阶段、现金、稀疏地产、建筑等级、命令关联、缺少/错误载荷、错误工厂参数、恢复空值、存档元数据及槽位编号。若编译器不再报预期错误，typecheck反而失败，防止类型静默退化成any。

## 模块职责

| 模块 | 职责与依赖 |
| --- | --- |
| engine.js | 保留Game公开方法、地图移动、地产、卡牌、回合和AI装配；经济方法委托新模块，调用方无需改名 |
| economy.js | 支付/自动取款/进入债务、银行存取借还、股票交易、债务支付、市场与利息结算；只依赖组合和规则配置，Game依赖仅存在于JSDoc |
| save-schema.js | 继续集中旧存档迁移和拒绝逻辑；拆开长行、补类型，复用规则配置中的点券上限 |
| save-repository.js | 四槽及备份的Storage适配、冲突检查、导入导出；不依赖DOM |
| ui-session.js | 单次推进的暂停/隐藏/面板/动画等待、命令选择及状态变化判断；返回原阶段和速度，不操作DOM、计时器、声音或存储 |
| app.js | 保留启动与模块装配、DOM事件、面板、计时器、渲染和保存；tick委托ui-session后按原顺序处理节奏、保存、渲染 |
| commands.js / rules-config.js | 保留命令校验与共享规则的单一来源，不引入平行规则或第二套迁移 |

新增运行时模块没有启动副作用，也没有运行时导入engine，因而不增加循环依赖。原ESM导入、缓存查询、初始化顺序和公开Game方法保留。删除marketTick中重复的同值previous赋值；未改随机抽取顺序、收费公式、利息取整或AI难度。

## 验证

本轮沿用规则、天赋、AI旧行为指纹、完整对局、命令逐步重放哈希、四槽迁移及导入导出回归。新增ui-session的四组接口测试，并让现有面板暂停及WebGL恢复测试继续验证app实际接线。CI新增typecheck步骤，再执行完整单元测试、真实浏览器交互和网页/离线构建。实际数量以CI和本次交付记录为准；浏览器为Chromium移动视口仿真，不宣称真机验证。
