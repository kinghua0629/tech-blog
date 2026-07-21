# AGENTS.md

本文件为 AI 代理（Agent）提供在本仓库中工作时的上下文与规范。

## 项目概述

这是一个基于 Astro 的静态个人博客，主题为 [Firefly](https://github.com/CuteLeaf/Firefly)（ fork 自 [saicaca/fuwari](https://github.com/saicaca/fuwari)）。

- 站点名称：King's Tech Blog
- 作者：Ziwen Hua
- 线上地址：https://blog.kinghua0629.com
- 源码语言：中文为主，i18n 支持 en / zh_TW / ja / ru

博客内容以计算机学习笔记（Harvard CS50）、技术随笔和跨领域思考（F1、AI、航天等）为主。

## 环境要求

- Node.js ≥ 22
- pnpm ≥ 9（仓库强制使用 pnpm，`package.json` 中配置了 `only-allow pnpm`）

## 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 启动开发服务器，默认 `http://localhost:4321` |
| `pnpm build` | 生成图标 → 生成 LQIP → Astro 构建 → 子集化字体 → Pagefind 索引 |
| `pnpm preview` | 本地预览构建产物 |
| `pnpm check` | Astro 类型与错误检查 |
| `pnpm type-check` | TypeScript 独立声明检查 |
| `pnpm format` | 使用 Biome 格式化 `./src` |
| `pnpm lint` | 使用 Biome 检查并自动修复 `./src` |
| `pnpm new-post <filename>` | 在 `src/content/posts/` 下创建新文章 |
| `pnpm icons` | 重新生成图标常量 |
| `pnpm lqips` | 重新生成低质量占位图 |

## 技术栈

- **Astro 7** — 静态站点生成
- **Svelte 5** — 交互组件
- **Tailwind CSS 4** — 样式
- **TypeScript** — 类型安全
- **Pagefind** — 客户端全文搜索
- **Biome** — 格式化与 Lint
- **Swup** — SPA 式页面过渡动画

## 目录结构

```
├── src/
│   ├── components/      # Astro / Svelte 组件
│   ├── config/          # 站点配置（TypeScript）
│   ├── content/         # 文章（posts/）与特殊页面（spec/）
│   ├── i18n/            # 多语言翻译
│   ├── layouts/         # 页面布局
│   ├── pages/           # 路由页面
│   ├── plugins/         # 自定义 remark / rehype 插件
│   ├── styles/          # 全局样式
│   └── utils/           # 工具函数
├── scripts/             # 构建脚本
├── public/              # 静态资源
└── dist/                # 构建输出
```

## 添加文章

文章源文件位于 `src/content/posts/`，支持 `.md` 和 `.mdx`。建议的最小 frontmatter：

```yaml
---
title: 文章标题
published: 2026-07-21
description: 一段简短描述
tags: [CS50, Web]
category: 技术
draft: false
---
```

也可使用命令行：

```bash
pnpm new-post my-new-post
```

站点全局配置在 `src/config/siteConfig.ts` 中修改。

## 代码风格

- 使用 Biome 进行格式化和 Lint
- 缩进：tab
- 字符串：双引号
- 提交信息遵循 [Conventional Commits](https://www.conventionalcommits.org/)（如 `feat:`、`fix:`、`chore:`）

## 构建与部署

```bash
pnpm build
```

构建产物输出到 `dist/`，可部署到 Vercel、Cloudflare Pages、GitHub Pages 等静态托管平台。

- Vercel 配置：`vercel.json`
- Cloudflare Workers 配置：`wrangler.jsonc`

## 注意事项

- 不要改用 npm / yarn 安装依赖，pnpm 是唯一允许的包管理器
- 修改 `src/config/` 中的配置后通常需要重启开发服务器才能生效
- 图片建议放在 `src/content/posts/images/` 或 `public/`，Astro 仅对 `src/` 下图片做响应式优化
- 新增依赖前请先确认是否确实需要，并在完成后验证 `pnpm build` 是否通过
