<div align="center">

# King's Tech Blog

> Ziwen Hua 的个人技术博客

[![Online](https://img.shields.io/badge/在线访问-blog.kinghua0629.com-blue)](https://blog.kinghua0629.com)
![Astro](https://img.shields.io/badge/Astro-7.1.1-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/github/license/CuteLeaf/Firefly)

</div>

---

📖 **README**：[简体中文](README.md) | [English](README.en.md)

## 关于这个博客

这是 [Ziwen Hua](https://blog.kinghua0629.com/about/) 的个人博客，基于 [Astro](https://astro.build) 与 [Firefly](https://github.com/CuteLeaf/Firefly) 主题构建。

在这里我记录计算机学习、技术实践与兴趣思考，主要包括：

- **CS 学习笔记** —— 以 Harvard [CS50](https://cs50.harvard.edu/) 课程为核心的编程与计算机基础
- **技术随笔** —— Web 开发、工具使用、编程经验
- **跨领域思考** —— F1 赛车背后的工程与策略、AI、航天、消费电子等

博客更注重真诚记录与长期积累，欢迎通过 [Guestbook](https://blog.kinghua0629.com/guestbook/) 留言交流。

## 技术栈

- [Astro](https://astro.build) —— 静态站点生成
- [Tailwind CSS](https://tailwindcss.com) —— 样式
- [TypeScript](https://www.typescriptlang.org/) —— 类型安全
- [Svelte](https://svelte.dev/) —— 交互组件
- [Pagefind](https://pagefind.app/) —— 全文搜索
- [Biome](https://biomejs.dev/) —— 代码格式与检查

主题继承自 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly)，而 Firefly 基于 [saicaca/fuwari](https://github.com/saicaca/fuwari) 二次开发。

## 本地构建

### 环境要求

- Node.js ≥ 22
- pnpm ≥ 9（项目使用 `only-allow pnpm` 强制锁定）

### 启动步骤

```bash
# 克隆仓库
git clone https://github.com/kinghua0629/tech-blog.git
cd tech-blog

# 安装依赖
pnpm install

# 启动开发服务器，访问 http://localhost:4321
pnpm dev
```

## 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产站点到 `./dist/` |
| `pnpm preview` | 预览已构建的站点 |
| `pnpm check` | 运行 Astro 类型检查 |
| `pnpm format` | 使用 Biome 格式化代码 |
| `pnpm new-post <filename>` | 创建新文章 |

## 添加文章

文章源文件放在 `src/content/posts/`，支持 Markdown 与 MDX。最小 frontmatter 示例：

```yaml
---
title: 文章标题
published: 2026-07-21
description: 文章简介
tags: [CS50, Web]
category: 技术
draft: false
---
```

站点配置位于 `src/config/siteConfig.ts`，主题、布局、侧边栏等更多选项可参考 [Firefly 文档](https://docs-firefly.cuteleaf.cn/)。

## 部署

构建输出目录为 `dist/`，可部署到任何支持静态站点的平台，例如 Vercel、Cloudflare Pages、GitHub Pages 等。

```bash
pnpm build
```

## 许可

站点内容（文章、图片等）版权归作者所有。

底层主题遵循 [MIT License](https://mit-license.org/)，详见原仓库 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) 与 [saicaca/fuwari](https://github.com/saicaca/fuwari)。
