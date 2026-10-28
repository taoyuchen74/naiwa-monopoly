# 浏览器回归与 CI

先运行 npm ci、npx playwright install chromium，然后 npm run test:browser。
Linux环境可用 npx playwright install --with-deps chromium 安装浏览器所需系统库。
测试自动构建 out/ 并启动本地服务器，不需要先运行 dev，也不接触生产试玩站点。

playwright.config.mjs 是轻量入口：390×844与844×390，每种视口二十一个独立场景，共42例。
固定种子17、固定Date时间、UTC时区和中文locale，随机先手关闭，省电画质、减少动态效果，单worker、无自动重试。
Date固定不冻结定时器；测试等待实际界面/存档状态，不按猜测的动画时长硬等待。
每个用例由Playwright创建新的浏览器上下文，初始存档只来自该用例的夹具。
轻量入口主动模拟WebGL不可用，使用产品已有的48格简洁地图和装饰图SVG回退，避免共享CPU上的
软件绘图阻塞点击稳定性检查。这仍执行同一套真实界面与规则，不是HTML快照或引擎动作替身。
支持GPU的环境可运行 npm run test:browser:3d：同一组场景保留真实地图WebGL，并断言上下文可用；
专门的WebGL失败场景仍注入失败。装饰缩略图始终使用SVG回退，缩略图画质另由专项工具验证。
轻量套件验证掷骰规则与界面结果；减少动态效果下不验收3D骰子落地等动画时序。

覆盖：

- 六人开局，使用控骰卡，真实掷骰，买地，选择住宅建设，再结束回合。
- 中断音频素材请求并模拟音频设备不可用，仍可无声启动和行动。
- 首次读取已有存档不写入覆盖，取消新局保持原字节，确认前备份，恢复备份。
- 真实Tab/Shift+Tab、summary的Enter展开与链接访问、背景inert、Escape和焦点恢复。
- WebGL创建失败时显示48格简洁地图，能查看地块、掷骰和买地。
- 三个手动槽的保存、覆盖/删除取消及确认、读取与自动槽备份，槽位互不影响。
- 旧JSON迁移、实际文件上传/下载和跨槽导入导出，拒绝损坏及未来版本。
- 确认期间槽位变化和存储配额不足时保留原数据及当前旅行。
- 真实骰子数量选择、银行存取款按钮递增revision及逐玩家sequence。
- 护盾、保险和换位的真实卡包操作与合法对手选择，效果在手动槽读取后保留。
- 三个新增事件从真实移动触发、展示实际结算结果，再通过确认按钮继续。
- 热座逐席配置、换手键盘隔离与私有内容清理、第二席银行/股票实操及AI残留按钮拒绝。
- 已确认债务回合读档重新遮挡，真实刷新恢复待交接状态；纯AI席位旁观。

关键点击验证按钮尺寸、视口内位置，并由Playwright检查可见与未被遮挡。
规则状态断言读取当前用例的localStorage，测试本身不替代引擎执行动作。
只有失效注入、固定配置和初始存档在启动前设置，流程通过真实按钮/键盘操作。

## 运行与诊断

仅跑一种尺寸：npm run test:browser -- --project=390x844。
列出用例：npm run test:browser -- --list。
查看报告：npx playwright show-report playwright-report/browser。
失败截图、trace.zip、error-context及测试存档位于test-results/browser，HTML报告位于playwright-report/browser。
报告和临时成品均被Git忽略。CI保留浏览器报告与失败证据7天，单元或浏览器失败不会被忽略。

CI在push main、pull_request及手动触发时运行：安装锁定依赖→JavaScript类型检查→单元/完整对局测试→
安装Chromium→轻量浏览器套件→网页与离线单文件构建。CI使用Linux无头Chromium，绘图后端由浏览器与runner决定，
不把它的执行时间当作图形性能基准。

## 其他检查的定位

更广的套件保留原入口：npm run test:mobile（五种尺寸、手势、旋转和滚动隔离）、
npm run test:a11y（完整模态键盘、对比度和播报）、npm run test:performance（场景生命周期）。
除qa-browser-3d.mjs这个独立Playwright入口外，tools/qa-*.mjs是在已打开的源码预览里用agent-browser eval执行的专项诊断片段；
旧片段依赖明确的当前局面，不是独立测试，也不作为CI已通过的证据。
tools/qa-weak-network.py 是手动弱网/离线发布诊断服务器，同样不在轻量CI中自动运行。
这些工具继续保留用于深入排查，关键主流程现在由独立Playwright用例自动准备局面。

未完成的覆盖包括真实手机、真实软键盘、操作系统窗口遮挡、所有Safari/Firefox差异与真实移动GPU。
旧截图是历史桌面浏览器记录；不能据此宣称完成真机验收。

模式用例通过真实控件选择三种模式，验证实际启动、自动存档及刷新恢复；经营结算检查每席成功/失败文字、净资产进度条及键盘焦点。
