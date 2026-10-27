# 工程化安全网

本次按当前源码实测，不使用旧页面的“153项检查”或846KB数字。Node 20 为 CI 运行环境；仍是 JavaScript 和 esbuild，没有运行时框架迁移、`.ts` 转换或构建期 codegen。所有工具仅为开发依赖。

## 类型检查

运行 `npm run typecheck`。`tsconfig.json` 启用 `allowJs/checkJs/noEmit/noImplicitAny`，覆盖 engine/content/strategy/businesses，以及其实际引入的 maps/setup/portfolio/talents/difficulty/transfers。Three.js/UI 其余模块不在首批范围；不使用 `@ts-nocheck`、全局 `any` 或过滤诊断来伪造通过。

`Game.state` 在当前代码中实际叫 `Game.s`；没有为了文档改名或增加运行时别名。`Game.s`、`Game.player` 的类型分别为 `GameState`、`Player`。`Game.restore(unknown)` 保留现有完整验证／迁移流程，候选数据只在恢复边界作类型断言，不把断言当成运行时验证。

| 模块                                      | 首批 JSDoc 契约与修复                                                                                                                                                                                                                          |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `game-types.js`                           | `GameState`、`Phase`、`Player`、`Ownership`、`BusinessId`、`CardId`、`CardTarget`、`CardTable`、`StockBook`、`Trade`、`Route`、`PreviewOptions`、`GameSetup`                                                                                   |
| `engine.js`                               | constructor 的 state；create 的配置和玩家工厂；restore 的 unknown 输入；资金／地产／卡片／路线 API 参数与返回；递归路径数组；稀疏 ownership、blocks 索引；旧豆奶迁移边界；删除未使用 TILES 导入、trade 的 profit 绑定，保留原 recordTrade 调用 |
| `content.js`                              | Character[]、Tile[]、数字索引 special 表；CARDS 按键精确约束 target：dice→steps、block→ahead、steal→enemy、demolish→enemyBuilt、build→own，其余→self                                                                                           |
| `strategy.js`                             | 所有策略函数的 Game 参数；Route、Move、CardChoice、PreviewOptions；可选 target；删除未使用 CARDS 导入                                                                                                                                          |
| `businesses.js`                           | Business 表、Ownership、CardId[] 研究选项、Game 参数和地产收费选项                                                                                                                                                                             |
| `portfolio.js`                            | StockBook[]、Player、交易数字参数、Game；未知历史成本仍保留 number/null 语义                                                                                                                                                                   |
| `maps/setup/talents/difficulty/transfers` | 真实传递的 Game／Player、数字索引、配置空数组、回执／清理回调、DOM 元素类型；不依赖隐式 any                                                                                                                                                    |

首轮 tsc 报39条诊断，现已清零。`types/contracts.js` 使用 compile-only `@ts-expect-error` 反例，确保非法 phase、字符串 money、不完整 ownership、未知卡片及错误 target 会被拒绝；如果类型被意外放宽，tsc 会报 unused expect-error。浏览器 `?v=16` 导入保留，通过 `types/browser-imports.d.ts` 映射到真实实现类型。

这是渐进检查：`strictNullChecks` 暂未开启，尚未证明每个稀疏索引／旧存档字段非空。下一批应先把恢复候选类型与规范状态分开、补全 sparse map 的可空读取，再单独开启 strictNullChecks 和 noUncheckedIndexedAccess。当前没有声称达到完整 strict 模式。

## 增量规范与分批策略

`eslint.config.mjs` 是 flat config：no-unused-vars、no-console、eqeqeq。工具和测试允许输出报告；游戏源码禁止 console。类型问题交给 tsc，不另加类型感知 ESLint 解析器。Prettier 独立执行。

`npm run lint` 只检查改动／新增文件；CI 的 `LINT_BASE` 使用完整 Git 历史的 merge-base。历史文件仅有格式豁免，ESLint 没有历史错误基线。格式豁免列表 `tools/format-baseline.json` 固定记录已有文件，新文件默认必须符合 Prettier。逐模块格式迁移使用独立提交，从豁免列表删去路径，验证再做功能修改。

首批纯逻辑 lint 共3条，已修复：engine 的 TILES/profit 两条，strategy 的 CARDS 一条。未把其他历史文件一起改动。实测剩余源码盘点如下，触及对应文件时必须清理；这是迁移工作清单，不是当前增量 CI 失败：

| 下一批模块                                       | 当前诊断数 | 处理重点                                                          |
| ------------------------------------------------ | ---------: | ----------------------------------------------------------------- |
| app.js                                           |         10 | 未使用绑定和 console 诊断；保留异常处理与回退行为，只去掉输出残留 |
| scene.js                                         |         10 | 未使用绑定、console；保留 WebGL 恢复链路                          |
| buildings.js                                     |          8 | 未使用导入／参数／局部变量                                        |
| characters.js                                    |          6 | 未使用造型辅助绑定                                                |
| island.js / reference-characters.js / scenery.js |        各3 | 未使用绑定；模型变更需看渲染回归                                  |
| naigou.js                                        |          2 | 未使用绑定                                                        |
| advanced-panel.js / new-characters.js            |        各1 | 未使用参数／绑定                                                  |

不要把 `lint:all` 设成第一天的必过门槛，也不要用全局关闭 no-unused-vars 解决它。保留的参数若用于接口兼容可明确命名 `_arg`，不可借此掩盖应删除的无效局部逻辑。

## CI 与确定性 E2E

三个 YAML：`.github/workflows/ci.yml`、`e2e.yml`、`slow.yml`。普通 CI 有 test、build、e2e 三个 job：test 与 build 并行，e2e 复用 build 的同一份 out artifact，不另行打包；手动单独运行 e2e 时才现场构建。固定使用 GitHub ubuntu-24.04 runner，复用其预装 Chrome 系统库，只安装 Playwright 默认 Chromium headless shell（`--only-shell`）并按 lockfile 缓存浏览器；不在每次运行时 apt 升级系统库或安装本游戏无需的日文／泰文字体，图形用例串行运行，在 runner 预装的 Xvfb 虚拟显示器中启用系统 OpenGL，避免强制 SwiftShader 的低帧率，失败保留截图、trace和HTML报告。没有默认重试掩盖不稳定测试。

三条 spec 在390×844和844×390各执行一次，共6条浏览器用例：

1. 开局选奶鼠、保持默认天赋、固定 seed17 和真人先手；按真实按钮掷骰，断言真实结果4步、落到4号地、买地扣款与 ownership，结束回合后等待电脑。
2. 下载真实 JSON 文件，离开页面后清存档（避免 pagehide 自动保存回写），导入同一文件并确认，断言完整状态相等，再掷骰证明可以继续。
3. 通过页面按钮连续切换横竖屏，检查逻辑尺寸、WebGL canvas、无回退画面、中心像素颜色变化以及弹窗旋转矩阵／屏幕边界；断言存档未变。

参考原 `tools/qa-dice-pacing.mjs` 和 `qa-dialog-orientation.mjs` 的关键断言，存档流程来自实际 app 导出／导入路径。旧 QA 脚本继续作为手动专项检查，不冒充 E2E 覆盖。Playwright clock 在导航前用 setFixedTime 固定日期；保留原生 RAF／计时器，避免冻结浏览器点击稳定性检查。按可观察状态等待而非写死动画耗时；规则随机序列由显式种子固定，存档比较使用完整状态。音频接口禁用，种子从正常配置读取，不修改引擎 RNG／挂生产测试钩子。

`PLAYWRIGHT_EXECUTABLE_PATH` 可在本地指向已安装的 Chrome/Chromium；CI 不设置此变量，使用锁定 Playwright 版本安装的 Chromium。模拟器不能替代真实安卓设备测试。普通 CI 总墙钟目标小于5分钟；排队、冷下载以及共享 runner 负载须以实际 Actions 记录为准。

100局种子模拟在独立 slow workflow：每日北京时间03:20检查默认分支，或手动运行；PR加 `run-slow` 标签后检查该 PR，后续 synchronize 继续执行。它不是每个普通 PR 的必需检查，不能把跳过慢速任务当成完成100局。现有正常单元测试中的小规模完整对局保留。

## 覆盖率与预算

`.c8rc.json` 使用 `all` 和逐文件门槛，engine/businesses/portfolio/strategy 的行、语句、函数、分支均至少80%。不是仅对已加载文件取平均。迁移实测：四模块行／函数／语句100%，分支分别90.96%／94.87%／98.24%／97.03%，合计93.04%。紧凑的一行多分支代码仍有盲点，报告不是规则正确性的证明。

`tools/check-size.mjs` 读取实际构建字节并重新 gzip，不信任 build-info 的大小字段。固定基线与上限在 `tools/size-budget.json`；超限打印绝对字节与百分比差值，并返回非零退出码。预算自检会实造一个超限文件，证明它会失败。

| 成品          | 当前基线 bytes / gzip bytes | 上限 bytes / gzip bytes |
| ------------- | --------------------------- | ----------------------- |
| Web 主脚本    | 950305 / 271295             | 980000 / 280000         |
| 离线完整 HTML | 1226579 / 411524            | 1280000 / 425000        |

900KB／250KB只是需求示例，已小于当前主脚本，不能无说明地设成必败门槛。配置不在 CI 内自动更新；抬高预算必须审阅原因。JSDoc 与无用绑定清理不改变游戏规则；构建大小有极小压缩差异，由报告展示。

## 授权与合并门槛

LICENSE 的 MIT 范围仅限原创代码和原创文档。程序模型实现不等于获得角色形象IP授权；参考视频、角色IP／商标和短笑声不在MIT范围。笑声没有已核实的开放再分发许可；字体OFL、Three.js MIT各自保留。README、CONTRIBUTING、LICENSE与既有SOURCES.md采用一致边界。

工作流不会自动更改 GitHub 分支保护。管理员须在 main 的保护规则中将 test、build、e2e 对应检查设为必需并限制绕过，才能实际阻止失败 PR 合并。没有权限时不宣称已启用。此改动不自动部署网页、不合并PR、不包含此前未提交的音频迭代。

所有要求的配置、三个 YAML、Playwright 三条 spec 和预算脚本的完整文本见 [交付文件全文](ENGINEERING-FILES.md)；真实源文件为最终依据。

实现依据：[TypeScript checkJs](https://www.typescriptlang.org/tsconfig/checkJs.html)、[Playwright Clock](https://playwright.dev/docs/clock)、[c8 all 与覆盖率门槛](https://github.com/bcoe/c8)。

无头浏览器启用系统图形后端（`--enable-gpu`），CI 通过预装的 Xvfb 与 ANGLE OpenGL 保留真实 WebGL 画面、原生点击稳定性检查和默认动画。没有使用强制点击、二维地图或空白截图替代三维流程。依据：[Chromium 无头模式 GPU 文档](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/gpu/using-gpu-hardware-in-headless-chrome.md)。首次 CI 的启动／点击超时报告保留用于诊断，最终是否通过以实际工作流记录为准。
