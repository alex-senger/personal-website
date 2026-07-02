---
title: 'Hello World: Wie diese Seite gebaut ist'
description: 'Ein Rundgang durch den Stack hinter dieser Website — Astro, ein handgeschriebener WebGL-Shader und ein winziges nginx-Docker-Image auf meinem Homeserver.'
pubDate: 2026-07-02
tags: ['meta', 'astro', 'webgl']
---

Willkommen! Das ist der obligatorische erste Beitrag — und gleichzeitig ein Platzhalter, der gerne gelöscht werden darf. Da eine persönliche Website sich selbst erklären sollte, hier ein kurzer Rundgang.

## Der Stack

Die Seite ist mit [Astro](https://astro.build) gebaut: Jede Seite wird beim Build zu statischem HTML gerendert, der Server liefert standardmäßig null JavaScript aus. Der animierte Hintergrund auf der Startseite ist ein handgeschriebener WebGL-Fragment-Shader — domain-warped Fractal Noise, kein three.js, rund 60 Zeilen GLSL.

## Content-Workflow

Blogbeiträge sind einfache Markdown-Dateien im Repository:

```bash
src/content/blog/
├── en/hello-world.md
└── de/hello-world.md
```

Einen Beitrag zu veröffentlichen heißt: Datei committen, Docker-Image neu bauen. Keine Datenbank, kein CMS, nichts zu sichern außer dem Git-Repo selbst.

## Hosting

Das fertige Artefakt ist ein nginx-Container, der ausschließlich statische Dateien ausliefert. Er läuft auf meinem Homeserver hinter einem Reverse Proxy, das gesamte Image ist wenige Megabyte groß.

Mehr dazu in kommenden Beiträgen.
