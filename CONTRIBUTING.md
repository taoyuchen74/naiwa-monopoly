# 贡献指南

使用 Node 24，先运行 `npm ci`。项目保持原生 JavaScript ES Modules；领域声明集中于 dist/domain.d.ts，渐进检查范围见 docs/TYPES-AND-MODULES.md。

提交前运行：

```sh
npm run typecheck
npm run lint
npm run test:coverage
npm run build
npm run check:size
npx playwright install chromium
npm run test:browser
npm run test:e2e
npm run test:online
npm run test:cloud
```

lint 默认检查未提交改动；比较分支可设置 LINT_BASE。历史紧凑模块的格式迁移单独提交，从 tools/format-baseline.json 删除相应路径；新文件必须符合格式。lint:all 是盘点命令。开发工具和测试允许输出报告。

交互回归必须操作真实页面与键盘，使用固定种子、独立上下文并控制动画。浏览器仿真不等于真机。100 局完整模拟使用 test:slow，CI 手动或 run-slow 标签运行，也有夜间任务。

CI 保留单机、联机、云存档、覆盖率、类型与增量规范检查。体积只报告，无硬上限。详见 docs/ENGINEERING.md。

仅贡献有权授权的内容。原创代码/文档采用 LICENSE 的 MIT 条款；第三方角色、商标、参考视频和录音不在授权范围内，字体与 Three.js 保留各自许可。参见 docs/SOURCES.md。
