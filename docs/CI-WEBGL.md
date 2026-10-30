# 森林 WebGL CI 排查

失败记录：[Verify game #40873947404](https://github.com/taoyuchen74/naiwa-monopoly/actions/runs/40873947404)。单元和普通浏览器104项已通过；四项森林真实WebGL测试全部在地图选择框的普通click等待稳定帧时超时，后续资源、联机和云存档步骤没有执行。不是已证实的规则错误。

Windows 强制 SwiftShader 的原模式单项复查通过（41.2秒），未复现 Linux 的失败，不能据此把原 CI 标绿。修复针对浏览器执行环境：森林真实WebGL使用完整Chromium的新无头模式，沿用在线WebGL套件的channel配置；资源循环脚本使用相同浏览器。CI明确使用SwiftShader，避免依赖宿主显卡。

保留真实canvas、WebGL、触控、滚动隔离、买地建设和结束回合断言，不增加force点击，不跳过失败用例，不放宽actionTimeout。普通简洁地图测试仍采用原浏览器模式。没有改规则状态或用户画质。

复查命令：设置 NAIWA_FOREST_WEBGL=1 与 NAIWA_SOFTWARE_WEBGL=1 后运行 `npx playwright test e2e-ci/forest.spec.mjs --grep WebGL`，再运行 `npm run test:forest:resources`。原Linux工作流中的同一组测试是最终反馈信号，Windows通过不能代替Linux验收。
