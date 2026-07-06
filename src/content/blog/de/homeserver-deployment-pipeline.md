---
title: 'git push bis Production: Wie sich diese Seite selbst deployt'
description: 'Die Deployment-Pipeline hinter dieser Website: GitHub Actions baut ein nginx-Container-Image, die GHCR speichert es, und Komodo hält meinen Homeserver auf dem neuesten Stand. Ohne SSH, ohne manuelle Schritte.'
pubDate: 2026-07-03
tags: ['self-hosting', 'docker', 'ci-cd', 'komodo']
---

Diese Seite läuft auf meinem Homeserver, und eine Änderung zu veröffentlichen (ein Blogbeitrag, ein CSS-Tweak, ein neues Projekt) ist genau ein Schritt: `git push`. Ein paar Minuten später ist sie live. Kein CMS, kein FTP, keine SSH-Session, kein „Deploy-Skript", an das ich denken muss. So greift die Pipeline ineinander.

## Die Bausteine

- **[Astro](https://astro.build)** baut die gesamte Seite zur Build-Zeit zu statischem HTML
- **GitHub Actions** führt den Build aus und verpackt ihn in ein nginx-Container-Image
- **GitHub Container Registry (GHCR)** speichert die versionierten Images
- **[Komodo](https://komo.do)** läuft auf dem Homeserver und hält den deployten Container aktuell
- Ein **Reverse Proxy** terminiert TLS vor allem anderen

Das Endprodukt der ganzen Kette ist bewusst langweilig: ein `nginx:alpine`-Image von etwa 60 MB, das vorgerenderte Dateien ausliefert. Es gibt keine Runtime, keine Datenbank und keinen Application Server, den man patchen oder hüten müsste.

## Stufe 1: CI baut und veröffentlicht das Image

Jeder Push auf `main` startet einen Workflow, der den Code typprüft, die Seite baut und, wenn alles durchläuft, das Docker-Image baut und in die GHCR pusht:

```yaml
- name: Build (and push on main)
  uses: docker/build-push-action@v6
  with:
    push: ${{ github.event_name == 'push' }}
    tags: ${{ steps.meta.outputs.tags }}
```

Jedes Image bekommt zwei Tags: `latest` und ein unveränderliches `sha-<commit>`-Tag. Das zweite ist wichtiger, als es aussieht: Jeder deployte Zustand der Seite lässt sich auf einen exakten Commit zurückführen, und ein Rollback heißt nur, das Deployment auf ein älteres Tag zu zeigen.

Pull Requests durchlaufen dieselbe Pipeline ohne den Push. Ein kaputtes Dockerfile oder ein fehlschlagender Type-Check erreicht die Registry also gar nicht erst.

## Stufe 2: Komodo merkt es und deployt neu

Auf der Serverseite verwaltet Komodo den Container-Stack. Es beobachtet die Registry, und wenn sich das `latest`-Tag bewegt, zieht es das neue Image und erstellt den Container neu. Die Lücke zwischen „CI fertig" und „neue Version live" ist so lang wie das Poll-Intervall, in der Praxis eine Kaffeelänge.

Was ich an dieser Hälfte des Setups mag, ist das, was sie *weglässt*: Es gibt kein Deploy-Credential auf GitHub-Seite, das meinen Server anfassen könnte. Der Job der CI endet an der Registry. Der Server zieht; nichts pusht von außen in mein Netzwerk.

## Der Kniff mit den privaten Daten

Ein Detail brauchte einen Moment Nachdenken: Mein Lebenslauf ist auf dieser Seite als PDF herunterladbar, und das PDF enthält Dinge, die ich nicht in einem öffentlichen Git-Repository haben will (etwa meine Telefonnummer). Das Repo, das [öffentlich ist](https://github.com/alex-senger/personal-website), schließt die CV-Quellen deshalb bewusst aus, womit auch das CI-gebaute Image die PDFs nicht enthält.

Die Lösung ist altmodisch und wirksam: Die PDFs liegen nur auf dem Server und werden als Read-only-Volumes in den Container gemountet, genau über die Pfade, an denen nginx sie erwartet. Öffentlicher Code, private Daten, ein Image.

## Warum der Aufwand?

Eine statische Seite könnte bei jedem kostenlosen Hoster liegen. Aber sie selbst zu betreiben kostet auf Hardware, die ohnehin im Schrank summt, nichts extra, hält mich mit den Werkzeugen im Training, die ich beruflich nutze, und (der ehrliche Grund) die Pipeline zu bauen hat Spaß gemacht. Die *Dienste* selbst zu hosten ist gerade deshalb einfach, weil ein Setup wie dieses sie austauschbar macht: Stürbe der Server morgen, würden `git clone` und eine Komodo-Stack-Definition die Seite in Minuten zurückbringen.

Die Daten sind das, was in einem Homelab wirklich Sorgfalt braucht, aber Backups und Monitoring sind einen eigenen Beitrag wert.
