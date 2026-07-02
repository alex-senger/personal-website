# personal-website

Bilingual (EN/DE) personal website built with [Astro](https://astro.build) — fully static output, shipped as a small nginx Docker image for self-hosting.

## Features

- **Bilingual routing** — every page exists under `/en/` and `/de/` with a language switcher that preserves the current page; `/` redirects based on browser language, with a no-JS fallback
- **WebGL hero** — hand-written GLSL fragment shader (domain-warped fractal noise, no three.js) with mouse parallax, a CSS-gradient fallback when WebGL is unavailable, and `prefers-reduced-motion` support
- **Markdown blog** — content collections per locale, tag pages, per-language RSS feeds, reading-time estimates, draft support
- **Project showcase** — cards driven by Markdown frontmatter (tech stack, repository and live links)
- **CV page** — rendered from structured TypeScript data per locale, with downloadable PDF
- **Zero client-side framework** — plain Astro components and small vanilla-JS islands (typewriter, scroll reveal, shader); fonts are self-hosted, no external requests
- **SEO** — sitemap, canonical URLs, `hreflang` alternates, Open Graph tags

## Tech stack

Astro 7 · TypeScript · Tailwind CSS 4 · WebGL · Docker · nginx

## Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve the production build locally
```

## Content workflow

### Blog posts

Create the same slug in both language folders so the language switcher works seamlessly:

```
src/content/blog/en/my-post.md
src/content/blog/de/my-post.md
```

```yaml
---
title: 'Post title'
description: 'Short summary shown in listings, RSS and meta tags.'
pubDate: 2026-07-02
tags: ['docker', 'homelab']
draft: false        # true = visible in dev, excluded from builds
---
```

Publishing is a commit plus an image rebuild — no database, no CMS.

### Projects

One Markdown file per project and locale under `src/content/projects/{en,de}/`, with `title`, `description`, `tech`, optional `repo`/`live` links, `featured` and `order` in the frontmatter.

### CV

The CV page is rendered from structured data in [src/data/cv.ts](src/data/cv.ts) (both locales). The downloadable PDFs (`public/cv-en.pdf`, `public/cv-de.pdf`) are compiled from Typst sources that are intentionally **not tracked in this repository** — place the PDFs into `public/` before building a deployable image. Without them the site builds fine; only the download links return 404.

### Site strings

Global UI strings live in [src/i18n/ui.ts](src/i18n/ui.ts); contact details and social links in [src/config.ts](src/config.ts).

## Deployment

```bash
docker compose up -d --build
```

The multi-stage build (Node → nginx:alpine) produces a ~60 MB image serving pre-rendered static files with gzip, cache and security headers. The compose file maps host port `8080`; adjust the mapping or attach the container to a reverse-proxy network instead. TLS/HSTS is expected to terminate at the reverse proxy.

Set `SITE_URL` in [docker-compose.yml](docker-compose.yml) to the public URL — it is baked into the sitemap, RSS feeds and canonical links at build time.

Compatible with Podman: `podman compose up -d --build`.

## CI

[.github/workflows/ci.yml](.github/workflows/ci.yml) runs on every push and pull request to `main`:

1. **Type check & build** — `astro check` + `astro build`, with the `dist/` output uploaded as an artifact
2. **Docker image** — verifies the image builds on PRs; on pushes to `main` it also publishes to GitHub Container Registry as `ghcr.io/<owner>/<repo>:latest` (plus a `sha-…` tag)

Set the repository variable `SITE_URL` (Settings → Secrets and variables → Actions → Variables) to bake the production URL into the published image; it defaults to `https://example.com`. A homeserver can then deploy by pulling the prebuilt image instead of building locally:

```yaml
services:
  website:
    image: ghcr.io/<owner>/<repo>:latest
    restart: unless-stopped
    ports:
      - '8080:80'
```

## Project structure

```
src/
├── config.ts              # contact details, social links, CV PDF paths
├── content.config.ts      # blog + projects collection schemas
├── content/{blog,projects}/{en,de}/   # Markdown content per locale
├── data/cv.ts             # structured CV data per locale
├── i18n/                  # locale list, UI string dictionaries, helpers
├── components/            # header, footer, cards, WebGL shader background
├── layouts/BaseLayout.astro
└── pages/
    ├── index.astro        # root: browser-language redirect
    ├── 404.astro
    └── [lang]/            # all routes, generated once per locale
```
