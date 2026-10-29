# 最小联机协议、威胁模型与状态机（协议1，规则11）

此文档先于实现提交。垂直切片为单进程 Node.js 房间服务＋统一游戏界面，复用原生ES Modules规则引擎，不更换框架。静态/离线版继续原单机入口；在线入口必须连接同源房间服务，静态托管不支持时明确提示。无账号，不部署公网服务、不声称竞技防作弊。

## 信任边界与威胁模型

浏览器、localStorage、房间邀请码、命令内容和客户端时钟均不可信。服务端crypto生成随机种子、6位数字邀请码和每席32字节恢复令牌，服务端独立Game.create；禁止上传/导入客户端GameState。邀请码仅用于加入未开始房间，不是身份。令牌是高熵持有者凭证，由GET /api/online/session设置为HttpOnly、SameSite=Strict Cookie（HTTPS时Secure），不交给网页JS、不放URL或日志；sessionStorage仅保存房间号和席位号。Cookie丢失无法找回，设备控制仍能冒充；XSS虽不能读取Cookie，仍可能在同源发起操作。

WebSocket升级严格核对Origin和路径，连接5秒内须完成创建/加入/恢复，绑定身份后禁止改绑；恢复会替换同席旧连接，旧连接不能继续下命令。服务端逐命令验证连接身份、roomId/playerId、序号、revision、阶段、当前行动者、所有权/余额/目标。16KiB消息上限，连接/房间/每IP握手及消息速率限制，禁压缩、心跳回收、过大待发送队列关闭。公网运行须可信HTTPS/WSS反向代理及显式PUBLIC_ORIGIN；默认仅监听本机。未实现跨进程协调、账号找回、永久数据库、防刷验证码或抗分布式拒绝服务。

只发送公开投影和该席私有卡牌/股票账户，不发送种子、RNG状态、其他手牌/持仓、恢复令牌、完整存档、原始私有日志。服务端状态承诺stateHash为房间密钥HMAC-SHA256，覆盖完整规则哈希及控制状态，避免用公开低熵RNG哈希穷举种子；不称为客户端可验证公平随机。种子仍为现有规则的确定性32位状态，未宣称密码学随机骰子。

## 消息

客户端首次发送（一次连接只允许一项）：

```json
{"op":"create","protocol":1,"name":"奶伴"}
{"op":"join","protocol":1,"roomId":"123456","name":"奶伴"}
{"op":"resume","protocol":1,"roomId":"123456","playerId":0}
```

先GET /api/online/session建立服务端会话，再连接/api/online/ws；WS握手使用HttpOnly Cookie绑定会话。首次成功返回credentials（仅含非敏感roomId、playerId），随后state。错误不带其他席私有内容。大厅最多6席，房主为0，至少2席且全部在线已准备才可开始；开始后不允许新玩家加入，原席可恢复。角色初始按加入顺序分配，玩家可选择未被占用的角色；房主可设置两张内置地图、20/30/50/80轮、托管难度与天赋开关，改变设置后全部重新准备。房主不能指定种子或初始资产。

```json
{"op":"command","roomId":"123456","playerId":0,"sequence":1,"expectedRevision":2,"type":"roll","payload":{}}
{"op":"result","accepted":true,"revision":3,"stateHash":"hmac-sha256:…","events":[{"kind":"command","playerId":0,"type":"roll"}],"error":null}
```

每席外部sequence从1开始，仅接受成功后加1。重复返回DUPLICATE，跳号OUT_OF_ORDER，旧expectedRevision返回STALE_REVISION，不推进序号或资产；客户端收到state中的nextSequence后重试，不乐观修改规则状态。身份错误先拒绝，不能用命令playerId替换绑定身份。所有结果（含错误）包含accepted/revision/stateHash/events/error，state另含完整当前可见投影，重连无需依赖丢失增量。

大厅命令ready {ready:boolean}、房主start {}，以及configure {character}（本人角色，必须唯一）、settings {mapVersion,rounds,difficulty,talents}（仅房主、固定白名单范围）。角色改变重置本人准备，房间设置改变重置全部准备。设置与角色纳入房间哈希。对局允许原统一规则命令的白名单：roll、step（仅待选岔路）、setDiceCount、buy、resolveEstate、acknowledge、end、construct、setResearch、upgrade、demolish、sell、bank、trade（股票）、shop、vehicle、card、settle、bankrupt、auctionBid/auctionPass；禁止客户端aiTurn、handoff、任意state/options/seed写入。control {ai:boolean}可交出/接回自己的控制。当前在线切片不开放玩家组合交易、存档/回放导入导出、自定义模式/地图导入，UI明确说明，不能通过未知命令绕过。

外部房间revision与引擎revision独立：准备、开始、控制变更、成功规则命令及服务端自动步骤递增房间revision；外部sequence不受自动步骤消耗。引擎命令仍使用自己的nextCommand和dispatch。服务端同一事件循环同步执行，不在校验与提交之间await。拒绝不修改权威规则状态。

## 状态机与时钟

房间 LOBBY → PLAYING → FINISHED → 回收。LOBBY含成员/准备状态；房主开始一次创建唯一权威Game（全席规则执行标志为AI，真人身份/控制由房间层维护，关闭本机换手）；控制层不会让在线真人被自动当成AI。原回合/阶段完全复用引擎。

服务端自动推进departure/moving，岔路等待玩家；客户端不能手工加速移动。每个玩家回合60秒，拍卖按独立竞价者计时；普通操作不延长截止时间。超时转AI托管，AI沿原规则逐步行动完成回合；已超时当前回合不能反复接回延时。断线保留席位，10秒宽限后托管，回合倒计时继续；刷新在宽限内恢复原控制。托管后重连可接回，已超时当前回合须等其结束。不重抽随机数，不接受客户端设置计时。

每席控制独立；自动动作和客户端命令串行。房间保存于服务进程内存，进程存活期间可重连；服务重启或房间过期明确报ROOM_NOT_FOUND，不从客户端存档恢复。大厅/已结束/空闲房间30分钟过期，全部断线的进行中房间保留30分钟（不因AI动作无限保留）；房间数上限100。

单机存档localStorage键完全不读写；在线仅sessionStorage保存非敏感房间/席位提示，恢复身份来自HttpOnly Cookie，与单机存档隔离。本版不支持在线持久存档或跨服务器恢复，UI明确提示。

## 验证计划

- 单元：2—6人、满房、错误邀请码、准备与房主权限、种子不由客户端决定、投影不泄密、重复/跳号/过期revision、冒充席位/房间、非法阶段/资产/快照、原子拒绝、超时/断线托管/接回、房间过期、旧连接替换。
- 两个独立真实浏览器上下文：创建/加入、准备/开始、双方同步、对局命令、重复/乱序/过期revision、伪造资产/身份/种子、刷新重连、单机JSON不成为权威状态、断线与超时托管、移动尺寸主要按钮。
- 服务端HTTP/WebSocket：Origin拒绝、认证超时、非法JSON/超大消息、消息限流、静态服务只读公开资源；CI同时跑原单机回归、联机测试与构建，不虚构公网或真机验证。

## 运行与模块

`npm run start:online` 构建公共文件并启动server/start.mjs；默认127.0.0.1:4182，首页选择联机后进入同一 index.html?online=1；旧 online.html 自动跳转统一入口。公共目录只含构建产物；不向HTTP开放server/、dist/或包文件。生产模式必须设置PUBLIC_ORIGIN并在受信反向代理启用HTTPS/WSS，HOST/PORT可配置；本次不自动部署。

server/rooms.mjs管理身份绑定、房间时钟、外部命令序号、HMAC承诺和私有投影；server/controls.mjs根据权威Game生成可用按钮；server/http.mjs提供HttpOnly会话、Origin校验、WebSocket、限流与心跳。dist/online-client.js只管理连接、确认与重连；dist/online.js仅兼容旧地址跳转。dist/online-session.js 复用 IslandScene、MiniMap、ModalFocus、GameOrientation 和底部操作栏，只显示服务器投影并提交命令；dist/online-view.js 是只供绘制的适配对象，没有本地规则执行、随机数、存档或 stateHash 接口，不补造缺失的私有账户。仅自己的手牌和持股在面板展示，其他账户不会成为本地 Game。音画偏好沿用本机设置，与存档分离。

大厅成员中途不换席/离房，直到房间过期或服务重启；同一浏览器Cookie表示一个席位，后连接替换先连接。房间号/席位提示不是恢复凭证。没有Cookie时不能凭邀请码夺回开始后的席位。跨服务器和跨设备恢复不在本切片范围内。

构建保留旧 online.html 重定向壳；单机与联机共用主脚本和原生模块，依然只加载一个游戏脚本。service worker绕过联机页面及/api/online/，不缓存会话响应。离线单文件点击入口明确提示不支持，静态站联机页明确提示服务不可用。WebSocket使用固定版本[ws官方实现](https://github.com/websockets/ws)，客户端使用浏览器原生WebSocket。

资源上限是单进程的安全边界，不是已验证的100房并发容量承诺。32位规则RNG仍有可预测性风险；权威命令、私有投影与HMAC状态承诺阻止直接上传/修改权威状态，不构成竞技认证或对可控客户端的绝对防作弊保证。

## 统一体验与验证入口

首页选择本机或联机；联机复用同一岛屿、地图导航、方向切换、触控拖动缩放、折叠面板和底部经营栏，WebGL不可用时回退简洁地图。顶部“房”按钮常驻，房间、准备与重连使用同一个模态框。确认操作验证房间revision；背景inert，Tab隔离，Escape保留待决选择，关闭恢复触发按钮焦点。帮助从同一规则文案搜索，音画偏好共用但对局存档独立。联机面板不暂停服务器时钟。

`npm run test:online` 默认执行双客户端简洁地图、协议校验、房间设置、角色、真实键盘、滚动和视口收缩检查；两项真实WebGL用例默认跳过。`npm run test:online:3d` 用完整Chromium启用GPU，两个视口分别验证双客户端3D用卡→掷骰→买地→建设→结束，采用生产默认60秒窗口；普通超时专项保持测试用20秒。视口收缩用于输入布局模拟，不声称真机系统键盘、安卓/iOS或公网验证。失败保留截图与trace。

音画和界面统一不等于规则权限混合：本机存档/JSON不发送到房间；在线自己的手牌和持股来自self，其他玩家只显示公开资金、位置与地产。客户端没有在线本地Game实例，所有规则动作仍由服务器白名单、阶段、资产和身份验证。
