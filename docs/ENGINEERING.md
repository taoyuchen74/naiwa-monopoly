# 工程化安全网

#1 与当前 main 的整合保留原生 ES Modules、Node 24、统一命令层、云存档与自定义地图。

## 类型与规范

typecheck 使用 jsconfig.json、domain.d.ts 及 tests/types/contracts.js。tsconfig.json 和 game-types.js 仅保留旧入口兼容，不维护第二份过时状态模型。严格空值检查及命令载荷反例沿用现有检查，范围见 TYPES-AND-MODULES.md。

lint 对改动文件执行 ESLint（unused、console、严格相等）与 Prettier。工具/测试可以输出报告。历史紧凑文件只豁免格式，未豁免 ESLint；新文件不加入旧格式基线。CI 根据 LINT_BASE 比较完整历史的 merge-base。lint:all 用于盘点。

## 测试与 CI

Verify game 保留类型检查、单机、双客户端联机、云存档浏览器测试和构建，加入逐文件覆盖率、增量规范、工程化浏览器回归和体积报告。使用 Node 24，保存覆盖率报告、失败截图和 trace。

test:coverage 执行全部单元测试，对 engine/businesses/portfolio/strategy 每个模块分别要求行、语句、函数、分支至少 80%。覆盖率不是规则正确性的证明。

test:e2e 使用独立 playwright.engineering.config.mjs，复用当前浏览器配置与发布构建，在 390×844 和 844×390 真实操作掷骰买地、存档下载再导入、手动旋转与弹窗对齐。默认使用产品简洁地图以稳定检查交互；真实 WebGL 使用现有 test:browser:3d，不声称通过仿真验证真机。

test:slow 用统一命令层执行 100 局固定种子完整对局，交替 4/6 人、两张地图与三种难度，途中反复恢复存档并校验状态。slow.yml 支持手动、每日北京时间 03:20 和 PR 的 run-slow 标签。e2e.yml 是额外手动浏览器入口；常规 CI 无重复的旧三 job 流程。

## 体积与授权

根据用户“预算可以不管”的指示，tools/size-budget.json 的 limit 为 null，仅输出实际原始/gzip 字节、历史基线差值和 JSON 报告，不设置体积硬门槛。check-size 仍可用于具有明确数字上限的独立测试策略。

LICENSE 仅授权原创代码和文档；字体、Three.js 保留各自许可，不授予第三方角色、商标或录音的权利。参见 SOURCES.md。

工作流不会更改分支保护。ENGINEERING-FILES.md 保留 #1 原交付历史，当前可执行文件及本说明优先。
