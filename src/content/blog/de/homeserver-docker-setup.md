---
title: 'Warum ich self-hoste (und du vielleicht auch solltest)'
description: 'Platzhalter-Beitrag: Gedanken zum Betrieb eigener Dienste zu Hause mit Docker — das Gute, das Schlechte und das Debugging um 3 Uhr nachts.'
pubDate: 2026-06-15
tags: ['self-hosting', 'docker', 'homelab']
---

> **Platzhalter-Beitrag** — ersetze ihn durch deinen eigenen Text. Er existiert, damit Blog-Übersicht, Tag-Seiten und RSS-Feed mehr als einen Eintrag anzeigen.

Eigene Dienste zu Hause zu betreiben ist zu gleichen Teilen Hobby, Lernerfahrung und mildes, selbst zugefügtes Leid. Hier eine grobe Gliederung zum Ausfüllen:

## Was auf dem Homeserver läuft

- Ein Reverse Proxy, der TLS für alles terminiert
- Diese Website als statischer nginx-Container
- Die üblichen Verdächtigen: Dateisync, Medien, Monitoring

## Was ich gelernt habe

Container machen die *Dienste* austauschbar, aber die *Daten* bleiben für immer. Eine Backup-Strategie ist nicht optional. Monitoring auch nicht — man will wissen, dass eine Platte vollläuft, bevor sie voll ist.

## Würde ich es empfehlen?

Ja — wenn man den Weg genießt. Die Cloud ist in dem Moment günstiger, in dem man seine Abende zu schätzen weiß.
