---
title: 'Hello World: How This Site Is Built'
description: 'A tour of the stack behind this website — Astro, a hand-written WebGL shader, and a tiny nginx Docker image on my homeserver.'
pubDate: 2026-07-02
tags: ['meta', 'astro', 'webgl']
---

Welcome! This is the obligatory first post, and also a placeholder — feel free to delete it. Since a personal site should explain itself, here is a quick tour of how it works.

## The stack

The site is built with [Astro](https://astro.build): every page is rendered to static HTML at build time, so the server ships zero JavaScript by default. The animated background on the landing page is a hand-written WebGL fragment shader — domain-warped fractal noise, no three.js, about 60 lines of GLSL.

## Content workflow

Blog posts are plain Markdown files in the repository:

```bash
src/content/blog/
├── en/hello-world.md
└── de/hello-world.md
```

Publishing a post means committing a file and rebuilding the Docker image. No database, no CMS, nothing to back up except the git repo itself.

## Hosting

The final artifact is an nginx container that only serves static files. It runs on my homeserver behind a reverse proxy, and the whole image is a few megabytes.

More on all of that in future posts.
