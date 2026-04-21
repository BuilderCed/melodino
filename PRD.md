---
type: prd
product: melodino
aliases: [petit-maestro]
format: condensed
status: draft-v1
version: 1.0
created: 2026-04-11
author: auto-generated from codebase exploration
---

# PRD: Melodino — Piano gamifié pour enfants 5-12 ans

**Status**: Draft v1.0 (existing product, live at https://builderced.github.io/melodino/)
**Last updated**: 2026-04-11
**Classification**: PWA educational game, child-directed, **COPPA compliant by design**

---

## Problem

L'apprentissage du piano chez les jeunes enfants (5-12 ans) est traditionnellement :
- Coûteux (cours privés 30-50€/heure)
- Exigeant en patience (technique avant musicalité)
- Frustrant (progression lente, exercices répétitifs)
- Peu accessible (nécessite piano acoustique ou clavier cher)

Les apps existantes (Piano Academy, Simply Piano) sont :
- Adultes-oriented (UI complexe)
- Payantes par abonnement (inaccessible pour beaucoup de familles)
- Collectent des données enfants (non-compliance COPPA/GDPR-K)
- Nécessitent micro (pas de vrai clavier → frustration)

## Users

- **Primary**: Enfants 5-12 ans avec accès à un clavier (acoustique, MIDI ou ROLI LUMI)
- **Secondary**: Parents qui supervisent l'apprentissage
- **Tertiary**: Professeurs de musique qui veulent un outil complémentaire à domicile

## Vision

Melodino = "Un professeur de piano gentil et patient, gratuit, qui respecte la vie privée des enfants". Une PWA gamifiée qui :
- Fonctionne 100% offline (aucune donnée ne quitte l'appareil)
- Gratuit, open-source (MIT), CC0 songs only
- Zero data collection (COPPA/GDPR-K compliant by design)
- Intègre MIDI (ROLI LUMI, Yamaha, etc.) pour expérience réelle
- 4 mondes × 21 chansons progressives
- Mode "wait" sans pression (le jeu attend que l'enfant joue, pas de timing strict)

## Core Journey

```
1. Enfant ouvre Melodino sur tablette (PWA installable)
2. Choisit un monde (4 disponibles : découverte, mélodies, accords, classiques)
3. Choisit une chanson (21 au total, progression par difficulté)
4. Joue avec le clavier (acoustique → suit visuellement, MIDI → scoring précis)
5. Reçoit 3 étoiles selon performance
6. Débloque la chanson suivante
```

## Functional Requirements

### Phase 0 — Current Production State
- [x] PWA installable (manifest, service worker, offline-first)
- [x] 4 mondes × 21 chansons (CC0 only)
- [x] Web Audio API + Web MIDI API
- [x] Intégration ROLI LUMI (LED keyboard)
- [x] Canvas 2D rendering
- [x] IndexedDB local storage
- [x] Multilingue FR/EN (SpeechSynthesis)
- [x] Accessibility (dyslexia font, reduced motion, ADHD focus mode, color-blind safe)
- [x] 3-star scoring system
- [x] Mode "wait" (pas de pression de timing)
- [x] CSP strict + LD+JSON schema
- [x] Zero data collection (COPPA/GDPR-K compliant)

### Phase 1 — UX Improvements (V1.1)
- **FR-PARENT-001**: Parent dashboard avec PIN lock (voir progression enfant sans modifier)
- **FR-PARENT-002**: Export progression en PDF (pour professeur de musique)
- **FR-GAME-001**: Système d'étoiles persistant entre sessions (localStorage déjà présent)
- **FR-GAME-002**: Feedback vocal encourageant ("Bravo!", "Essaie encore") en FR/EN
- **FR-SETTINGS-001**: Choix des langues (ajouter ES, DE)
- **FR-SETTINGS-002**: Mode daltonien (déjà présent mais à surfacer)

### Phase 2 — Content Expansion
- **FR-CONTENT-001**: Ajout de 10+ chansons CC0 (folklorique, Disney public domain, Beatles post-2054 si applicable)
- **FR-CONTENT-002**: Mode "Compose ton morceau" (sandbox sans scoring)
- **FR-CONTENT-003**: Import MIDI personnel (parent/professeur uploads)
- **FR-LEVELS-001**: Nouveau monde "Harmonie" (accords à 2 mains pour 8-12 ans)

### Phase 3 — Advanced Features
- **FR-AI-001**: Hints vocaux contextuels (si enfant bloque 3x sur un passage)
- **FR-SOCIAL-001**: Partage de progression en PDF (pas de social network, pas de compte)
- **FR-PRINT-001**: Partitions imprimables (pour travailler sans écran)

## Non-Functional Requirements

- **NFR-PERF-001**: Chargement initial < 2s sur 3G
- **NFR-PERF-002**: Responsive canvas rendering 60fps sur tablette moyenne
- **NFR-SIZE-001**: Bundle total < 500KB (actuellement single-file, vanilla JS)
- **NFR-OFFLINE-001**: 100% offline après premier load (service worker)
- **NFR-A11Y-001**: WCAG 2.2 AAA (vu l'audience jeune)
- **NFR-PRIVACY-001**: ZERO data collection (no analytics, cookies, telemetry, server calls) — **maintenu as North Star**
- **NFR-COMPLIANCE-001**: COPPA + GDPR-K compliant by design (confirmé audit 2026-04-11)
- **NFR-LICENSE-001**: Tous les contenus musicaux en CC0 ou domaine public
- **NFR-DEVICE-001**: Support clavier USB MIDI, Bluetooth MIDI, ROLI LUMI

## Metrics

> Note: Pas de tracking serveur (zero data collection). Les métriques ci-dessous sont via GitHub stars, feedback manuel, et self-reported usage.

- **KPI-001**: GitHub stars (target : 100 à 6 mois, 500 à 12 mois)
- **KPI-002**: Retours qualitatifs parents/professeurs (Discord, email)
- **KPI-003**: Inclusions dans listes "free educational apps for kids" (SEO indirect)
- **KPI-004**: Contributions open-source (PR, issues) — target : 5 PRs à 6 mois
- **KPI-005**: Pas de KPI behavioral (car no tracking)

## Distribution

- **Primary**: GitHub Pages (https://builderced.github.io/melodino/) — current
- **Secondary**: Listes "apps gratuites éducation enfants" (Common Sense Media, Wired Kids, Geeks Junior)
- **Tertiary**: Partenariats écoles Montessori et conservatoires (outil gratuit pour profs)
- **Social**: Videos YouTube démo (parents), TikTok short clips musique ludique
- **Tiers**: Alternative App Stores (F-Droid équivalent PWA, DuckDuckGo browser recommandations)

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Pas de modèle économique | Haute | Medium | Pas de risque (pas de burn rate, pas de serveur) |
| Contenu musical insuffisant | Moyenne | Medium | PR communautaires pour CC0 songs |
| Compatibility MIDI variable entre devices | Haute | Medium | Tests multi-device + fallback Web Audio-only mode |
| Browser APIs breaking changes (Web MIDI deprecated) | Faible | Critical | Monitoring W3C status, fallback qwerty-as-piano |

## Out of Scope (jamais)

- ❌ Compte utilisateur (pas de PII)
- ❌ Analytics ou tracking
- ❌ Publicités
- ❌ Achats in-app
- ❌ Social features requiring server
- ❌ Contenus payants

Cette liste est **intentionnelle et non-négociable** : la valeur de Melodino = privacy-first + gratuit + open-source.

## Technical Stack

| Layer | Tech | Rationale |
|-------|------|-----------|
| Core | Vanilla JS (ES2020+) | Zero deps, zero maintenance de libs |
| Audio | Web Audio API | Native browser |
| MIDI | Web MIDI API | Native browser |
| UI | HTML5 Canvas 2D | Performance native |
| Storage | IndexedDB | Local only, async |
| PWA | Service Worker + Web App Manifest | Offline-first |
| Speech | SpeechSynthesis API | Feedback vocal natif |
| Deployment | GitHub Pages | Gratuit, static |
| License | MIT (code) + CC0 (content) | Maximal openness |

## Compliance & Legal

- **COPPA**: ✅ Compliant by design (zero data collection)
- **GDPR-K**: ✅ Compliant by design (zero data collection)
- **Privacy Policy**: Short statement "Melodino does not collect any data. All progress is stored locally in your browser."
- **Content licensing**: Tous les morceaux en CC0 ou domaine public, vérifiés un par un
- **MIT License**: Code source ouvert, contributions bienvenues
- **Disclaimer**: "Melodino est un outil éducatif. Il ne remplace pas un professeur de musique qualifié."

## Dependencies

| Dep | Criticality | Note |
|-----|-------------|------|
| **Zero external runtime dependencies** | — | C'est le point fort |
| GitHub Pages | Critical (hosting) | Peut migrer vers Cloudflare Pages gratuit |
| Web MIDI API | Medium | Fallback qwerty si indisponible |
| ROLI LUMI (optional) | Low | Fonctionne sans LUMI |

## Success Criteria & Definition of Done

Pour chaque feature Phase 1+ :
- [ ] Fonctionne offline
- [ ] Pas de nouvelle dépendance externe
- [ ] Testée sur iPad Safari + Android Chrome (min spec : 2GB RAM)
- [ ] Accessible (WCAG 2.2 AA minimum)
- [ ] Zero data transmission (confirmé par audit Network tab browser)

## Open Questions

- [ ] @founder by 2026-05-01 — Priorité V1.1 : parent dashboard OU content expansion ?
- [ ] @founder by 2026-05-15 — Ajout de langues (ES, DE) ou profondeur FR/EN d'abord ?
- [ ] @community by 2026-06-30 — Appel à contributions pour chansons CC0 additionnelles ?
- [ ] @founder — Considérer un Patreon / donations pour couvrir coût domaine + motivation dev ?

---

*PRD auto-generated on 2026-04-11 based on excellent existing README.md + production state analysis. Melodino is a rare example of a **privacy-first child-directed app compliant by design** — this PRD formalizes that approach for future V1.1+ development.*
