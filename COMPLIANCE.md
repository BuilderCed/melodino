# COMPLIANCE.md — Melodino (Petit Maestro)

> Last updated: 2026-04-21 | FTC COPPA 2026

## Classification

| Regulation | Classification | Reason |
|------------|---------------|--------|
| FTC COPPA | **Child-directed** | Piano app for kids 5-12 |
| Compliance | **BY DESIGN** | Zero data collection architecture |

## Why Melodino Is Compliant

- Zero data collection: no analytics, no cookies, no server calls, no third-party SDKs
- 100% offline: vanilla JS single-file HTML, IndexedDB local only
- Service Worker PWA: offline-first by design
- CSP strict headers
- Open-source MIT + CC0 songs only

## Verification Checklist
- [x] No `fetch()`, `XMLHttpRequest`, or network calls
- [x] No analytics (GA, Mixpanel, PostHog, etc.)
- [x] No ad SDKs
- [x] No persistent identifiers sent to any server
- [x] IndexedDB data = local only, deleted on clear/uninstall
- [ ] README documents "zero data collection" compliance statement

## Status: COMPLIANT BY DESIGN

Single action: Document compliance in README (optional, 0.1 day)
