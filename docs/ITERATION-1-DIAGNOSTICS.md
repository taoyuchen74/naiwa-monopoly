# 第一轮：渲染诊断与故障存档

基线：4016676。设置新增画面诊断和复制入口，显示构建编号、实际渲染模式、实际画质与降级原因。剪贴板不可用时保留已选中的文本，允许手动复制。

`RenderDiagnostics` 是独立的只读快照适配层，不接收 GameState 或 Error 对象。状态为 starting/webgl/fallback；四种降级原因为 context-unavailable、draw-error、context-lost、custom-map。只导出构建号、视口、地图编号、阶段、请求/实际画质、状态和固定错误摘要。旧快照不可修改，也不随后续恢复而变化。

没有修改规则、存档或回放版本；诊断不保存到对局，不自动上传。已有启动故障检查增加故障后买地、自动保存、刷新和读取后的状态哈希比较。构造器失败、绘制失败和可恢复上下文丢失保留各自恢复方式。

验证命令：`npm test`、`npm run typecheck`、`npm run lint`、`npx playwright test e2e-ci/render-diagnostics.spec.mjs`。真实绘制故障存读档由 CI 的软件 WebGL 阶段执行 `e2e-ci/render-failure.spec.mjs`，普通浏览器套件中明确跳过，不能当作已经运行。

本轮以真实桌面浏览器和移动视口仿真验证。Android Chrome、微信内置浏览器和 iOS Safari 均待真机验收。
