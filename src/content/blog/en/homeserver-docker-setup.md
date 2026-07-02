---
title: 'Why I Self-Host (and You Might Want To, Too)'
description: 'Placeholder post: thoughts on running your own services at home with Docker — the good, the bad, and the 3 a.m. debugging.'
pubDate: 2026-06-15
tags: ['self-hosting', 'docker', 'homelab']
---

> **Placeholder post** — replace this with your own writing. It exists so the blog listing, tag pages and RSS feed have more than one entry to show.

Running your own services at home is equal parts hobby, learning experience and mild self-inflicted suffering. Here is a rough outline you could fill in:

## What runs on the homeserver

- A reverse proxy terminating TLS for everything
- This website, as a static nginx container
- The usual suspects: file sync, media, monitoring

## What I learned

Containers make the *services* disposable, but the *data* is forever. A backup strategy is not optional. Neither is monitoring — you want to know a disk is filling up before it is full.

## Would I recommend it?

Yes — if you enjoy the process. The cloud is cheaper the moment you value your evenings.
