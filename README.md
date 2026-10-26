# 奶蛙大富翁

[![CI](https://github.com/taoyuchen74/naiwa-monopoly/actions/workflows/ci.yml/badge.svg)](https://github.com/taoyuchen74/naiwa-monopoly/actions/workflows/ci.yml)

以奶家角色为主角的浏览器3D单机经营游戏，支持手机横竖屏、2—6人（1名真人＋电脑）、本机存档与离线游玩。非官方粉丝作品，玩法参考历代《大富翁》，地图、模型、界面和技能由本项目实现。

- [直接试玩 · GitHub Pages](https://taoyuchen74.github.io/naiwa-monopoly/)
- [备用试玩入口](https://naiwa-monopoly-island.chicreed128.chatgpt.site/)
- [下载离线单文件](play/奶蛙大富翁.html?raw=1)：用浏览器打开，无需外部素材服务。

## 电影画质

默认画质加入4096像素阴影、GTAO接触遮蔽、环境反射、物理材质、柔和辉光和抗锯齿。道路、草地、铺装、瓦片有细节纹理；水面含动态波纹、浅水细纹及近岸泡沫。河岸、花坛、实体草叶、树冠、建筑四面立面和屋顶设备都增加了几何细节。

界面使用实际3D模型渲染的头像。奶蛙、奶鼠提高曲面采样，增加捧腹手腕、躯干前倾和真实口腔凹陷；奶狗也补充口腔形状。可在游戏设置或地图右侧切换电影/省电画质。

![建筑发展后的实机画面（测试存档）](docs/images/cinematic-town.png)

详细实现与验证见 [电影画质记录](docs/CINEMATIC-2026-10-25.md)。画面以当前设备的显卡和浏览器输出为准。

## 游戏内容

六名角色：奶蛙、奶虫、奶鼠、奶狗、奶蛋、奶茶，各有可关闭的专属天赋。奶茶采用杯身、杯把、茶面、手套及短腿造型；旧豆奶存档自动迁移并保留资产。

奶家滨河镇与经典发财岛可在开局切换。高级设置可指定或随机电脑角色、逐席选择难度、统一起始资金和点券、设置先手、种子及轮数。手机开局按钮固定可见，手动旋转不依赖系统横屏锁定。

空地可建设住宅、连锁便利店、旅馆、购物中心、加油站、研究所、公园，具有独立外观和规则。还有股票成本及盈亏、银行、卡包、交通工具、神灵事件、建设拆除动画与电脑策略。结算展示冠军、并列排名及资产分项。

## 本地运行

```sh
npm ci
npm test
npm run build
```

`npm run dev` 启动模块源码预览；`npm run preview` 启动编译版预览，地址均为 http://localhost:4173/ 。

构建输出为 `out/` 完整网页和 `artifacts/奶蛙大富翁.html` 离线文件。发布使用 `out/` 全部内容；GitHub的 `gh-pages` 分支为网页成品，`main` 保留源码与 `play/` 离线成品。

当前工程化基线为87个构建模块：主脚本约951KB（gzip约271KB），界面字体约99KB；离线单文件约1.23MB。精确字节数、差值和预算由 `npm run check:size` 输出。几何与纹理在运行时生成，下载体积不代表显存占用。新增界面文字后运行 `python tools/subset-font.py` 更新字体子集；字体工具需要 `fonttools brotli`。

## 验证与边界

验证以 [CI 实际执行结果](https://github.com/taoyuchen74/naiwa-monopoly/actions/workflows/ci.yml) 为准，不再手工维护“153项检查”。`npm run test:coverage` 执行 Node 测试并检查 engine/businesses/portfolio/strategy 的逐文件覆盖率；`npm run typecheck` 检查 JSDoc 领域类型；`npm run lint` 检查改动文件；构建产物受固定体积预算约束。Playwright 在390×844与844×390的Chromium手机视口执行开局买地、存档往返及横竖屏画面回归。100局种子模拟独立在夜间、手动或PR的 `run-slow` 标签下执行。浏览器模拟不等于真实安卓设备验证。

本地命令、类型迁移边界、覆盖率实测基线与三个工作流见 [工程化说明](docs/ENGINEERING.md) 和 [贡献指南](CONTRIBUTING.md)。CI失败会产生报告；管理员仍须在GitHub分支保护中把相关检查设为必需，才能强制阻止合并。

本版为游客单机，每个浏览器分别存档，可导入导出。账号、云存档和联机尚未实现。角色仍是原创重建，不宣称已取得参考视频的源模型或逐帧复刻。

[规则](docs/RULES.md) · [设施与阵容](docs/ADVANCED-2026-10-24.md) · [股票](docs/ECONOMY-2026-10-24.md) · [手机开局](docs/MOBILE-MENU-2026-10-25.md) · [素材来源](docs/SOURCES.md)

Three.js及其r180后处理模块使用MIT许可，站酷快乐体使用OFL许可，原许可随成品保留。奶家角色IP、参考视频及短笑声录音不属于本项目原创版权或开放许可；本作不代表相关原作者。配乐包含公版《欢乐颂》的重新编排与原创小镇曲。

原创代码与原创文档采用 [MIT](LICENSE)。第三方角色IP、形象、商标、参考视频及短笑声录音不在本仓库MIT授权范围内；短笑声尚无已核实的开放再分发许可。字体、Three.js保持各自原许可，网页和离线成品不是整体MIT授权。详见 [来源与授权边界](docs/SOURCES.md)。
