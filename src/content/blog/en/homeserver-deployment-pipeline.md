---
title: 'git push to Production: How This Site Deploys Itself'
description: 'The deployment pipeline behind this website: GitHub Actions builds an nginx container image, GHCR stores it, and Komodo keeps my homeserver running the latest version. No SSH, no manual steps.'
pubDate: 2026-07-03
tags: ['self-hosting', 'docker', 'ci-cd', 'komodo']
---

This site runs on my homeserver, and publishing a change (a blog post, a CSS tweak, a new project) is exactly one step: `git push`. A few minutes later it's live. No CMS, no FTP, no SSH session, no "deploy script" I have to remember. Here's how the pipeline fits together.

## The moving parts

- **[Astro](https://astro.build)** builds the entire site to static HTML at compile time
- **GitHub Actions** runs the build and packages it into an nginx container image
- **GitHub Container Registry (GHCR)** stores the versioned images
- **[Komodo](https://komo.do)** runs on the homeserver and keeps the deployed container up to date
- A **reverse proxy** terminates TLS in front of everything

The end product of the whole chain is deliberately boring: an `nginx:alpine` image of about 60 MB that serves pre-rendered files. There is no runtime, no database, and no application server to patch or babysit.

## Stage 1: CI builds and publishes the image

Every push to `main` triggers a workflow that type-checks the code, builds the site and, if everything passes, builds the Docker image and pushes it to GHCR:

```yaml
- name: Build (and push on main)
  uses: docker/build-push-action@v6
  with:
    push: ${{ github.event_name == 'push' }}
    tags: ${{ steps.meta.outputs.tags }}
```

Each image gets two tags: `latest`, and an immutable `sha-<commit>` tag. The second one matters more than it looks: every deployed state of the site maps back to an exact commit, and rolling back is just pointing the deployment at an older tag.

Pull requests run the same pipeline without the push, so a broken Dockerfile or a failing type check never reaches the registry in the first place.

## Stage 2: Komodo notices and redeploys

On the server side, Komodo manages the container stack. It watches the registry, and when the `latest` tag moves, it pulls the new image and recreates the container. The gap between "CI finished" and "new version live" is however long the poll interval is. In practice, a coffee's length.

What I like about this half of the setup is what it *removes*: there is no deploy credential on GitHub's side that can touch my server. CI's job ends at the registry. The server pulls; nothing pushes into my network from outside.

## The private-data wrinkle

One detail took a moment of thought: my CV is downloadable from this site as a PDF, and the PDF contains things I don't want in a public git repository (like my phone number). So the repo, which is [public](https://github.com/alex-senger/personal-website), deliberately excludes the CV sources, which also means the CI-built image doesn't contain the PDFs.

The fix is old-fashioned and effective: the PDFs live only on the server and get mounted into the container as read-only volumes, layering over the paths where nginx expects them. Public code, private data, one image.

## Why bother?

A static site could live on any free hoster. But running it myself costs nothing extra on hardware that's already humming in a closet, keeps me on speaking terms with the tools I use professionally, and (the honest reason) the pipeline was fun to build. Self-hosting the *services* is easy precisely because a setup like this makes them disposable: if the server died tomorrow, `git clone` and one Komodo stack definition would bring the site back in minutes.

The data-loss story is what actually needs care in a homelab, but backups and monitoring are their own post.
