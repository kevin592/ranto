# RANTO 品牌官网

React、TypeScript 与 Vite 构建的六页品牌网站，支持英语、泰语、日语和中文。页面地址保留为 `index.html`、`story.html`、`quality.html`、`products.html`、`global.html` 和 `official.html`。

## 本地预览

使用 Node.js 22，首次运行：

```sh
npm ci
npm run dev
```

在浏览器打开终端显示的地址，默认端口为 3000。可直接在地址末尾加入任一页面文件名进行预览。

## 构建与检查

```sh
npm run check
npm run preview
```

`check` 依次执行代码检查、TypeScript 检查、六页完整构建和产物检查。生产预览默认使用端口 4173。也可以分别运行 `npm run lint`、`npm run build`、`npm run verify:build`。

产物检查会确认六个入口及其页面标识、分享元信息、站内脚本/样式/图片/字体引用，递归检查生成的 JavaScript 模块和 CSS 资源；资源缺失、旧品牌元信息或错误的 GitHub Pages 基础路径会阻止发布。检查脚本复用项目已有的 TypeScript 解析器，不需要额外依赖。

浏览器验收仍需覆盖六页直接访问及刷新、桌面与手机布局、四语切换与跨页记忆、菜单、产品详情和联系链接。HTTP 200 或标签页标题不能代替正文渲染检查。

## 内容与发布

多语言文案集中管理；产品图片使用实际上市产品素材。只公开已经确认的品牌事实、产品说明和渠道信息。所有页面共用导航、页脚、设计样式与语言逻辑。

- `src/content.ts`：英文、中文、泰文和日文正文、图片说明与分享摘要。
- `src/products.ts` / `src/media.ts`：三款 500 ml 产品及场景、包装设计素材。
- `src/evidence.ts`：与具体产品对应的脱敏申报摘录；申报不代表功效检测或品质认证。
- `src/contact-channels.ts`：邮箱、Instagram、Facebook、TikTok 全站共用配置。目前四项为 `pending`，没有地址。收到真实地址后将对应项改为 `active` 并提供 `href`；邮箱用 `mailto:`，社媒用完整个人主页 HTTPS 链接。待公布项目不会生成按钮或链接。

护理空间与三个家庭场景均为概念图；产品为计划包装效果图，内衣款使用已经确认的白色编辑版本。日本沙龙与 SPA 只作为护理理念和视觉灵感，不表示日本经营历史或现有合作。原始公司登记及商标申请文件不包含在公开资料目录。

构建后可运行 `node scripts/export-visuals.mjs <输出目录>`，生成三个产品细节图版及一个包装设计图版的独立 HTML，内嵌所需图片、字体和样式，便于离线查看或导出。

GitHub Actions 在拉取请求中只构建和验证，不部署。合并到 `main`，或在 `main` 手动运行工作流，才会上传并部署本次新构建的完整站点。GitHub Pages 使用 GitHub Actions 作为发布来源，当前地址为 <https://kevin592.github.io/ranto/>。

`dist` 是构建产物。构建会先清空旧产物，再统一生成六个 HTML 和对应资源；不要手工修改脚本哈希或拼接不同构建的页面。静态图片、字体和 `.nojekyll` 由 Vite 从 `public` 一并复制。
