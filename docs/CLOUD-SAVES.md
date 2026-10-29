# 可选单机云存档：API、模型与冲突策略

本设计先于实现。游客继续离线/单机，无需账号；只有主动进入云存档并注册/登录、确认绑定槽位，才上传已有本地进度。本切片采用自托管用户名密码账号及SQLite持久磁盘，不接第三方登录/邮件服务，不自动部署公网。

## 信任与隔离

云存档是可修改的单机备份，不是联机权威状态或竞技成绩。独立/api/cloud命名空间、HttpOnly/SameSite=Strict Cookie、独立SQLite数据库；不导入Room、不给联机房间恢复权威状态、不提供排行榜。客户端userId、时间、版本、JSON均不用于证明所有权；所有权只来自服务端已验证会话。密码使用随机盐scrypt，Cookie只保存随机会话秘密，其摘要存于服务端。HTTPS部署设置Secure，写请求校验Origin及JSON类型，限制体积/认证频率。

账号最小流程为注册即登录、用户名密码登录、退出当前设备。没有邮件找回或账号合并/删除功能，界面说明。游客“绑定”是明确选择本机槽位后创建该账号所有的云副本，不是自动收走游客数据。退出撤销服务端会话、清空界面的云列表，不删本机进度；重新登录才可手动重试离线修改/待确认上传。别的账号不会自动继承云关联或待上传任务。

## API（仅同源、登录后操作自己的存档）

- GET /api/cloud/session → supported、user {id,username}|null、serverNow；未启用云服务返回CLOUD_DISABLED。
- POST /api/cloud/auth/register、/auth/login：{username,password}，成功设置独立HttpOnly Cookie；注册不上传本地数据。
- POST /api/cloud/auth/logout：{actorUserId}（未登录时幂等清理），服务端撤销会话，清除Cookie。
- GET /api/cloud/saves：自己的元数据列表及accountId，不提供跨用户查询参数。
- GET /api/cloud/saves/:id：自己的有效存档、version、serverSavedAt、snapshotHash、summary、accountId。不存在或非本人均404。
- GET /api/cloud/saves/:id/raw：本人原始JSON下载；用于损坏数据备份，不直接作为可运行对局导入。
- PUT /api/cloud/saves/:id：{actorUserId,requestId,expectedVersion,label,save}。id/requestId为UUID，expectedVersion=0创建，已有数据必须匹配最新正整数版本。actorUserId只作为账号切换前置条件，必须等于Cookie会话用户，绝不是授权来源。成功返回提交元数据。

所有写入使用服务端版本+时间；忽略save.savedAt，不让客户端伪造云更新时间。先检验格式版本及现有迁移器能否接受，再保存服务端生成的schemaVersion/savedAt。未知较新规则或格式不冒险降级。输入不合法422，不写任何云记录；私有存档只向已登录所有者返回。

冲突409 VERSION_CONFLICT返回当前云元数据（版本、地图、轮数、人数、服务端保存时间、状态）；不写、不消耗提交记录。账号切换409 ACCOUNT_CHANGED、同requestId不同内容409 REQUEST_ID_REUSED。客户端看到变化后重新选择，不直接改expectedVersion重试覆盖。

## 数据模型与原子性

users：id随机UUID、唯一规范化username、随机salt、scrypt密码摘要、serverCreatedAt。

sessions：tokenHash、userId外键、服务端expiresAt；不存明文Cookie，不用本地时钟决定过期。

saves：id随机UUID、不可变ownerId外键、version正整数、serverSavedAt、label、payload(JSON)、snapshotHash、summary(JSON)。所有读取/更新都校验ownerId；新建也不能抢占他人id。

requests：(ownerId,requestId)唯一，保存规范化提交摘要和完整提交结果。提交摘要包括动作/id/预期版本/标签/规范化快照，不包括客户端savedAt。重试同一成功请求返回原提交结果；相同key换内容拒绝。请求记录与存档同一SQLite事务提交，重启后仍幂等。采用BEGIN IMMEDIATE、版本检查、原子提交，不做last-write-wins。请求历史和个人存档设置明确上限，达到上限拒绝新写入，不悄悄淘汰幂等记录。

SQLite使用WAL与外键，仅支持同一个数据库文件所在服务实例；须挂载持久磁盘并自行备份。服务停用、磁盘失败或校验失败返回错误，不将“云不可用”当成功；不自动回退为内存云档。

## 客户端状态与冲突

本地4槽继续使用既有repository；独立本地同步元数据按账号+槽位隔离，保存cloudId、baseVersion、baseHash，不保存密码或会话令牌。进入面板/登录/网络恢复不自动上传。上传前冻结本地快照和本地原字节，并显示本地轮数/本机保存时间（仅供参考）及云端轮数/服务端时间。

已有关联使用上次baseVersion，不能用刚读到的最新版本偷偷替换基准。无关联时向已存在云条目写入必须明确确认；“新云存档”不覆盖任何已有条目。确认与上传之间本机槽位变化则重新确认。

离线修改保留在本机；网络恢复后手动上传。用户确认上传后，冻结的请求及requestId保存在该账号的独立本机待办中；响应丢失时手动重试同一请求，不能换key重复创建。退出或换账号停止当前流程，待办只允许原账号重试；不会在新账号自动发出。

409冲突展示两边轮数和时间，并提供：
1. 读取云端：再次读取最新有效云档，明确替换目标本地手动槽位（不直接写自动槽或替换运行中的对局）；使用expectedRaw防止本地确认过期，并先备份有效旧档；不替换正在运行的对局，返回单机后从槽位继续。
2. 使用本地：再次明确确认，生成新requestId，按刚展示的云版本提交；若云端再次变化继续409，绝不静默覆盖。
3. 保留副本：新cloudId/expectedVersion=0，原云记录保持不变；新副本归当前登录用户。
4. 取消：保留两边。

下载前后均使用现有迁移器校验，损坏/未来格式不进入Game、不覆盖本地。云列表标示损坏并提供原始文件下载、另存本地云副本或保留原状；不自动删除/“修复”云原文。云损坏条目禁止普通覆盖，须保留原文以便诊断。本地备份使用独立云下载备份键，避免挤占游戏覆盖前备份；写本地失败时保持当前槽位原文。

## 验证计划

API/仓储：登录/退出/过期、跨账号读写拒绝、伪造owner和客户端时间、幂等及重启后重放、同key不同内容、双端版本竞争、事务失败不部分提交、旧档迁移、损坏和未来云档、与联机Cookie/状态隔离。

浏览器：游客原流程不需登录；游客绑定、跨独立浏览器登录/下载/继续；离线修改后冲突三种选择；本地确认过期；上传响应丢失同key重试；退出/换账号不误传；损坏云档不覆盖本机；静态/未启用服务明确提示。使用真实浏览器和真实API，不以HTML字符串断言代替流程验证。


## 实现与运行

- `server/cloud-store.mjs`：SQLite账号、密码摘要、会话、存档、事务与持久幂等；`server/cloud-http.mjs`：独立HTTP协议、同源和大小/频率校验。
- `dist/cloud-sync.js`：本机槽位适配、账号隔离的待确认请求、版本关联和下载备份；`dist/cloud.html/js/css`：可选入口、对比确认、登录与恢复流程，复用现有ModalFocus。
- `npm run start:cloud` 默认私有 `data/cloud.sqlite`；不设置 `CLOUD_DB` 的普通服务器明确拒绝云功能，不影响游客单机或联机房间。生产启用账号必须配置HTTPS的PUBLIC_ORIGIN；静态/离线构建无云服务器。
- 云下载只写manual1—3。独立覆盖前原始备份键为 `naiwa-cloud-download-backup-v1:<slot>`，界面可导出。同步记录为 `naiwa-cloud-links-v1`，账号隔离；损坏时仅用户确认后备份并重置。密码/会话令牌不进localStorage。SQLite文件不能位于公开out目录中。
- 离线退出不能保证撤销服务器Cookie：界面明确“会话仍可能有效，联网后重试”，不谎报已退出。返回单机不触发自动同步。退出成功会撤销当前设备会话；本机进度不等于隐私保险箱，共享设备使用者仍可读取。
- 云原始文件、标签与摘要均按数据处理，不执行HTML。云API与cloud.html在服务工作线程中始终走网络，不缓存私人响应，也不把离线单机页面误当云端成功响应。
- 单账号最多50副本、10000成功请求记录、20活跃会话；全库最多10000用户。达到上限拒绝新写入，不清除旧幂等历史。未提供云删除、密码重置、自动合并或多实例部署。


## 本地验证结果（2026-10-29）

- `npm test`：479通过，0失败，含新增17项云仓储/HTTP/同步测试；覆盖重启幂等、所有权隔离、时钟回拨、并发CAS、事务失败回滚、旧档迁移、未来/损坏数据、配额和本机写入失败。
- `npm run test:cloud`：16通过，390×844与844×390各8项，真实Chromium、独立浏览器上下文和真实HTTP/SQLite。覆盖注册不自动绑定、跨设备下载并实际读槽进入游戏、冲突取消/副本/本机/云端四种选择、离线修改、响应丢失后刷新和同请求重试、退出/换账号、损坏原文下载、Tab/Shift+Tab/Escape/焦点恢复及离线退出提示。
- `npm run test:browser`：88通过，2项既有可选WebGL用例跳过；`npm run test:online`：10通过；类型检查和完整网页/离线HTML构建通过。
- 新云页面另用agent-browser检查游客交互树与无障碍规则，未发现违规；这只是补充检查，不代替上面的键盘与实际读写测试。
- CI增加云浏览器套件，统一上传报告与失败截图/trace。以上为桌面Chromium与移动视口仿真，不是实物手机、跨公网设备、生产HTTPS或磁盘灾难恢复演练。
