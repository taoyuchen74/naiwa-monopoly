# 贡献指南

使用 Node 20.19+（建议最新 20.x），先运行 `npm ci`。本项目保持 JavaScript；领域类型写在 JSDoc 中，不要求改为 `.ts`，也没有构建期类型代码生成。

```sh
npm run typecheck
npm run lint
npm run test:coverage
npm run build
npm run build:site
npm run check:size
npx playwright install chromium
npm run test:e2e
```

`npm run lint` 默认检查未提交的改动及新文件。比较分支时设置 `LINT_BASE` 为基准提交；CI 使用 PR merge-base，重命名按新路径检查，已删除文件跳过。不要通过更新格式基线跳过新文件。

历史紧凑源码的格式迁移按模块进行：先单独提交 `npx prettier --write <file>`，从 `tools/format-baseline.json` 删除对应路径，验证测试，再提交行为改动。不要在功能 PR 中一次格式化整个 `dist/`。这份基线只豁免格式检查，不豁免 ESLint；新文件没有豁免。`lint:all` 是迁移盘点命令，当前不作为必过门槛。ESLint 不强加分号、命名、缩进风格；unused、console、`===` 为错误，隐式 any 由 tsc 负责。

纯逻辑改动补充可复现种子的单元测试；交互回归放入 `e2e/`，使用 Playwright clock 和真实页面操作，禁止通过暴露生产测试钩子跳过行为。E2E 固定种子、禁用真实音频，并测试发布构建而非开发源码。报告、截图及 trace 在失败时保留。

普通 PR 的 CI 为 test、build、e2e 三个 job，目标总墙钟时间小于 5 分钟（受 GitHub 排队、浏览器下载影响，不是 SLA）。100 局模拟不进入普通 CI；PR 加 `run-slow` 标签或手动运行，另有每日 03:20（北京时间）的默认分支夜间任务。Nightly 不自动遍历所有未合并 PR。

体积限制见 `tools/size-budget.json`，单位为字节。增加预算需要在 PR 中列出实测差值、原因和取舍，禁止在构建时自动抬高限制。覆盖率逐模块要求行／语句／函数／分支至少 80%；紧凑代码使行覆盖率偏乐观，不以 100% 行覆盖率证明所有规则已正确。

仓库管理员应在 GitHub main 分支保护中将 CI 的 test、build、e2e 检查设为必需，并禁止直接绕过合并。工作流本身不会自动开启分支保护；只有 GitHub 后台启用后，失败才会实际阻止合并。

提交前核对 [素材来源](docs/SOURCES.md) 与 [LICENSE](LICENSE)。仅贡献你有权授权的原创代码／文档。第三方角色形象、商标、视频及录音不随代码 MIT 授权；短笑声录音没有已核实的开放再分发许可。不得把参考视频中的素材直接提取后当成原创提交。字体和 Three.js 保留各自许可。README、来源表和发布说明必须维持一致口径。

详见 [工程化与首批迁移记录](docs/ENGINEERING.md)。
