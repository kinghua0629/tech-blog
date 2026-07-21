<div align="center">

# King's Tech Blog

> Ziwen Hua's personal tech blog

[![Online](https://img.shields.io/badge/Live-blog.kinghua0629.com-blue)](https://blog.kinghua0629.com)
![Astro](https://img.shields.io/badge/Astro-7.1.1-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/github/license/CuteLeaf/Firefly)

</div>

---

📖 **README**: [简体中文](README.md) | [English](README.en.md)

## About This Blog

This is the personal blog of [Ziwen Hua](https://blog.kinghua0629.com/about/), built with [Astro](https://astro.build) and the [Firefly](https://github.com/CuteLeaf/Firefly) theme.

Here I document my computer science learning, technical experiments, and side interests. Main topics include:

- **CS Study Notes** — programming and CS fundamentals, centered around Harvard [CS50](https://cs50.harvard.edu/)
- **Tech Essays** — web development, tooling, and programming experiences
- **Cross-Domain Thoughts** — the engineering and strategy behind F1, AI, aerospace, consumer electronics, and more

The blog focuses on honest, long-term writing. Feel free to leave a message in the [Guestbook](https://blog.kinghua0629.com/guestbook/).

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS](https://tailwindcss.com) — styling
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [Svelte](https://svelte.dev/) — interactive components
- [Pagefind](https://pagefind.app/) — full-text search
- [Biome](https://biomejs.dev/) — formatting and linting

The theme is inherited from [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly), which is forked and extended from [saicaca/fuwari](https://github.com/saicaca/fuwari).

## Local Build

### Requirements

- Node.js ≥ 22
- pnpm ≥ 9 (enforced via `only-allow pnpm`)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/kinghua0629/tech-blog.git
cd tech-blog

# Install dependencies
pnpm install

# Start the dev server, then visit http://localhost:4321
pnpm dev
```

## Common Commands

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the built site locally |
| `pnpm check` | Run Astro type checking |
| `pnpm format` | Format code with Biome |
| `pnpm new-post <filename>` | Scaffold a new post |

## Adding Posts

Post source files live in `src/content/posts/` and support Markdown and MDX. A minimal frontmatter example:

```yaml
---
title: Post Title
published: 2026-07-21
description: A short introduction
tags: [CS50, Web]
category: Tech
draft: false
---
```

Site-wide configuration is in `src/config/siteConfig.ts`. For more theme, layout, and sidebar options, see the [Firefly documentation](https://docs-firefly.cuteleaf.cn/).

## Deployment

The build output goes to `dist/` and can be deployed to any static hosting platform, such as Vercel, Cloudflare Pages, or GitHub Pages.

```bash
pnpm build
```

## License

Blog content (posts, images, etc.) is copyrighted by the author.

The underlying theme is licensed under the [MIT License](https://mit-license.org/); see the original repositories [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) and [saicaca/fuwari](https://github.com/saicaca/fuwari) for details.
