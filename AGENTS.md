# AGENTS.md

本文件是 AI 代理在本仓库中工作时的上下文和约定。修改代码前，先确认当前工作区是否已有用户改动；不要覆盖、回滚或清理与当前任务无关的改动。

## 项目概览

这是一个基于 Astro 的静态个人博客，使用 Firefly 主题（源自 Fuwari）。项目包名为 'firefly'，当前版本为 '6.13.3'。

- 站点标题：'Tech Blog' / 'King's Tech Blog'
- 个人资料名：King Hua
- 线上地址：<https://blog.kinghua0629.com>
- 默认语言：'zh_CN'
- 可用语言：'zh_CN'、'zh_TW'、'en'、'ja'、'ru'
- 内容方向：CS50 学习笔记、Web/编程实践，以及 F1、AI、航天等跨领域思考

这是一个配置驱动的静态站点。大多数站点行为通过 'src/config/' 下的 TypeScript 配置控制，而不是通过环境变量或后台管理界面控制。

## 技术栈和版本

- Astro '7.2.10'，默认静态输出；设置 'CF_WORKERS' 时启用 Cloudflare adapter
- Svelte '5.57.x'，用于搜索、设置、归档、分页等交互组件
- Tailwind CSS '4.x'（通过 '@tailwindcss/vite' 集成）
- TypeScript '6.x'
- Astro Content Collections（Markdown/MDX）
- Pagefind：仅在生产构建后生成全文搜索索引
- Biome '2.5.x'：格式化与 lint
- Swup：页面过渡和预加载
- Expressive Code、KaTeX、Mermaid、PlantUML、GitHub Card 等 Markdown 扩展

环境要求：Node.js '>= 22'，包管理器为 pnpm。仓库声明的包管理器版本是 'pnpm@11.25.0'，不要使用 npm 或 yarn 安装依赖。

## 常用命令

| 命令 | 用途 |
| --- | --- |
| 'pnpm install' | 安装依赖；会由 'only-allow pnpm' 检查包管理器 |
| 'pnpm dev' | 启动开发服务器，默认 'http://localhost:4321' |
| 'pnpm start' | 'pnpm dev' 的别名 |
| 'pnpm build' | 生成图标 → 生成 LQIP → Astro 构建 → 字体子集化 → Pagefind 索引 |
| 'pnpm preview' | 预览 'dist/' 中的生产构建 |
| 'pnpm check' | 运行 'astro check' |
| 'pnpm type-check' | 运行 'tsc --noEmit --isolatedDeclarations' |
| 'pnpm format' | 使用 Biome 格式化 'src/' |
| 'pnpm lint' | 使用 Biome 检查并自动修复 'src/' |
| 'pnpm new-post <filename>' | 在 'src/content/posts/' 创建 Markdown 文章 |
| 'pnpm icons' | 扫描源文件并重新生成 'src/constants/icons.ts' |
| 'pnpm lqips' | 增量生成 'src/constants/lqips.json' |

'pnpm build' 中的图标、LQIP 和字体脚本会写入或修改生成文件。构建前后检查 'git diff'，确认没有意外变更。

## 构建和部署

生产构建的实际顺序来自 'package.json'：

1. 'scripts/generate-icons.js' 扫描 'src/' 中的图标引用，生成内联 SVG 数据。
2. 'scripts/generate-lqips.ts' 扫描 'src/' 和 'public/' 图片，增量更新 LQIP 数据。
3. 'astro build' 生成站点。
4. 'scripts/subset-fonts.ts' 扫描 'dist/' HTML，为配置了 'subsetFonts' 的本地字体生成 WOFF2 子集并替换引用。
5. 'pagefind --site dist' 生成生产搜索索引。

部署配置：

- Vercel：'vercel.json'，安装命令为 'pnpm install'，构建命令为 'pnpm build'，输出目录为 'dist'。
- Cloudflare Workers：'wrangler.jsonc' 将 'dist/' 作为静态 assets 目录；在构建时设置 'CF_WORKERS' 会启用 '@astrojs/cloudflare' adapter。

当前 'siteConfig.post.generateOgImages' 为 'true'。生产构建会为非草稿文章生成 '/og/<slug>.png'，并可能在构建期间从 Google Fonts 获取字体；本地调试若不需要 OG 图片，可临时关闭该配置。

## 目录结构

~~~text
├── src/
│   ├── components/      # Astro 静态组件与 Svelte 交互组件
│   ├── config/          # 站点和功能配置，统一由 config/index.ts 导出
│   ├── content/         # posts 文章、spec 特殊页面
│   ├── constants/       # 图标和 LQIP 等生成数据
│   ├── i18n/            # 翻译 key 与语言文件
│   ├── layouts/         # Layout 和 MainGridLayout
│   ├── pages/           # Astro 文件路由和 API/端点
│   ├── plugins/         # remark/rehype Markdown 插件
│   ├── styles/          # 全局样式和功能样式
│   ├── types/           # 配置和功能类型
│   └── utils/           # 内容、URL、图片、日期、布局等工具
├── scripts/             # 构建和内容维护脚本
├── public/              # 不经过 Astro 图片优化的静态资源
├── dist/                # 构建输出，不应手动编辑
├── astro.config.mjs     # Astro、Markdown、Swup、Vite/Tailwind 配置
├── biome.json           # Biome 规则
├── tsconfig.json        # TypeScript 和路径别名
├── vercel.json          # Vercel 部署配置
└── wrangler.jsonc       # Cloudflare Workers 配置
~~~

主要组件目录：'analytics/'、'comment/'、'common/'、'controls/'、'features/'、'layout/'、'misc/'、'pages/'、'widget/'。'.astro' 组件负责页面和静态输出，'.svelte' 组件负责需要客户端状态或事件的交互。

## 内容集合和文章

内容集合定义在 'src/content.config.ts'：

- 'posts'：'src/content/posts/' 下的 '.md' 和 '.mdx' 文件。
- 'spec'：'src/content/spec/' 下的特殊页面内容，当前由 'about'、'friends'、'guestbook'、'cv' 页面读取。

文章的必填 frontmatter 是 'title' 和 'published'；常用字段如下：

~~~yaml
---
title: 文章标题
published: 2026-07-21
description: 文章简介
image: ""
tags: [CS50, Web]
category: 技术
draft: false
lang: zh_CN
pinned: false
comment: true
---
~~~

Schema 还支持 'updated'、'author'、'sourceLink'、'licenseName'、'licenseUrl'、'password'、'passwordHint' 等字段。文章 ID 会去掉扩展名后作为 slug，路由形式为 '/posts/<slug>/'；子目录会保留在 slug 中。

文章列表在生产环境会过滤 'draft: true'，开发环境会显示草稿。文章按置顶状态优先、发布日期倒序排列。

创建文章：

~~~bash
pnpm new-post my-new-post
~~~

脚本会自动补 '.md' 扩展名并创建目录。图片可以放在文章相邻目录、'src/content/posts/images/' 或 'public/'；'src/' 下的图片可由 Astro 优化，'public/' 下的图片按原文件提供。

相册不是 Content Collection：相册元数据在 'src/config/galleryConfig.ts'，图片从 'public/gallery/<album-id>/' 扫描；同目录中的 'urls.txt' 可提供远程图片 URL，'cover.*' 会优先作为封面。

## 路由和页面开关

'src/pages/' 使用 Astro 文件路由，主要页面包括：

- 首页和分页：'[...page].astro'
- 文章：'posts/[...slug].astro'
- 归档、分类、标签、搜索：'archive.astro'、'categories/'、'tags/'、'search.astro'
- 特殊页面：'about.astro'、'CV.astro'、'guestbook.astro'、'friends.astro'、'sponsor.astro'
- 相册：'gallery/' 和 'gallery/[album].astro'
- 可选数据页面：'anime.astro'、'bangumi.astro'
- 端点：'rss.xml.ts'、'robots.txt.ts'、'api/allPostMeta.json.ts'、'og/[...slug].png.ts'

'siteConfig.pages' 控制友链、打赏、留言、番组、相册和追番页面。当前配置为：留言板和相册开启，友链、打赏、番组计划和追番关闭；关闭的页面会重定向到 '/404/'，导航栏和 sitemap 也会相应过滤。

## 配置约定

优先通过 'src/config/index.ts' 导入配置，例如：

~~~ts
import { siteConfig, profileConfig } from "@/config";
~~~

常用配置文件：

- 'siteConfig.ts'：站点信息、主题、页面开关、分页、文章和图片优化
- 'sidebarConfig.ts'：左右侧栏、平板侧栏和移动端组件顺序
- 'navBarConfig.ts'：导航链接、页面过滤和 Pagefind 搜索方式
- 'commentConfig.ts'：Giscus、Twikoo、Waline、Artalk、Disqus
- 'backgroundWallpaper.ts'：壁纸、横幅、渐变、水波纹和背景播放器
- 'galleryConfig.ts'：相册列表和列宽
- 'fontConfig.ts'：Astro Font API 字体和本地字体子集化
- 'analyticsConfig.ts'：Google Analytics、Microsoft Clarity、Umami、51LA
- 'effectsConfig.ts'、'musicConfig.ts'、'pioConfig.ts'、'plantumlConfig.ts'：特效、音乐、看板娘和 PlantUML

修改配置时，注意相应的类型位于 'src/types/'。修改 Astro 配置、字体配置或构建行为后，通常应重启开发服务器并重新执行构建。

## 生成文件和维护脚本

- 'src/constants/icons.ts'：由 'scripts/generate-icons.js' 生成，不要手动编辑。
- 'src/constants/lqips.json'：由 'scripts/generate-lqips.ts' 生成，不要手动编辑；脚本会保留已有条目并移除不存在图片的条目。
- 'scripts/subset-fonts.ts'：只修改 'dist/' 中的字体和引用，不要把其输出当作源文件编辑。
- 'scripts/quarantine-bad-posts.mjs'：检查 'src/content/posts/' 中 'index.md' 文章的图片引用，并把缺失图片的文章移动到 'src/content/_quarantine/'。这是维护脚本，会移动文件；使用前先确认目标范围和工作区状态。

不要直接修改 'dist/' 或 '.astro/'；它们是构建/开发生成目录。若生成文件发生变化，先确认是否由本次源代码或资源变更导致。

## 代码风格和验证

- 使用 Biome；源码缩进为 tab，JavaScript/TypeScript 字符串使用双引号。
- '.astro' 和 '.svelte' 有针对框架文件的放宽规则，但仍应保持现有文件风格。
- 提交信息遵循 Conventional Commits，例如 'feat:'、'fix:'、'chore:'。
- 只新增确有必要的依赖，并使用 pnpm；同步检查 'package.json' 和 'pnpm-lock.yaml'。
- 一般修改至少运行 'pnpm check'；涉及 TypeScript、配置或构建脚本时再运行 'pnpm type-check'；涉及页面、资源或构建流程时运行 'pnpm build'。
- 修改 UI 后，应在 'pnpm dev' 或 'pnpm preview' 中检查相关路由；生产搜索只在 'pnpm build' 后可用，开发环境使用的是搜索 mock。

Markdown 使用了 KaTeX、Mermaid、PlantUML、callout、指令、图片网格、外链处理、邮箱保护和 GitHub 卡片等插件。修改 Markdown 处理链时要同时考虑 'astro.config.mjs' 中的 remark/rehype 顺序。

## 路径别名

'tsconfig.json' 定义了以下别名：

- '@components/*' → 'src/components/*'
- '@assets/*' → 'src/assets/*'
- '@constants/*' → 'src/constants/*'
- '@utils/*' → 'src/utils/*'
- '@i18n/*' → 'src/i18n/*'
- '@layouts/*' → 'src/layouts/*'
- '@/*' → 'src/*'

优先使用这些别名，避免在 'src/' 内新增难以维护的多层相对路径。
