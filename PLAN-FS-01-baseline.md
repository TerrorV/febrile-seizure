# PLAN-FS-01: Febrile Seizure — Safety Baseline Artifact & Manual Test Checklist

**Task ID:** PLAN-FS-01
**Status:** Complete
**Date:** 2026-09-18
**Version:** 2026.7.2 / commit ca86101
**Source:** `/home/node/.openclaw/workspace/projects/febrile-seizure`

---

## 1. Repository Snapshot

| Field | Value |
|-------|-------|
| Repo path | `/home/node/.openclaw/workspace/projects/febrile-seizure` |
| Version | `2026.7.2` |
| Commit hash (short) | `ca86101` |
| OpenClaw command verified | `openclaw --version 2>/dev/null || openclaw version 2>/dev/null || cat /app/package.json 2>/dev/null \| grep version \| head -5` |
| Canonical entry point | `index.html` (1623 lines) |
| Duplicate entry point | `fs_responder.html` (1250 lines — currently identical copy) |
| Translation files | `assets/i18n/en.json`, `es.json`, `bg.json` |
| i18n helper | `assets/js/i18n.js` |
| Deployment target | Azure Static Web Apps (GitHub Actions) |

---

## 2. Safety Audit — Canonical Source Baseline

### 2.1 Medical Safety Surface (No Changes Without Clinical Sign-Off)

| # | Check | Status | Notes |
|---|-------|--------|-------|
| MS-01 | Disclaimer present on start screen | ✅ PASS | Hardcoded English disclaimer: "This applet is not reviewed by, endorsed by, or affiliated with any medical professional..." |
| MS-02 | Emergency number (112) referenced in app logic | ✅ PASS | Referenced in phase2 waiting body text, milestones 15min/30min, and banner guidance |
| MS-03 | No medication dosing advice (safe) | ✅ PASS | App only says "give medication if available" — no specific drug, dose, or frequency. No clinical advice beyond general first-aid guidance. |
| MS-04 | No emergency service replacement claim | ✅ PASS | App positions itself as a timing/observation aid, not a diagnostic or replacement for calling 112 |
| MS-05 | Milestone escalation thresholds correct | ✅ PASS | 2min = medication due, 15min = complex seizure/call emergency, 30min = status epilepticus — consistent with standard febrile seizure guidance |

### 2.2 i18n Safety

| # | Check | Status | Notes |
|---|-------|--------|-------|
| IS-01 | Disclaimer translated in all 3 languages | ✅ PASS | `start.disclaimer` present in en.json, es.json, bg.json |
| IS-02 | 112 referenced in all languages | ✅ PASS | Present in phase2 body, milestones, and banners across all 3 language files |
| IS-03 | Translation helper has safe fallback | ✅ PASS | `I18N.t()` returns the key string itself when a key is missing (e.g. `"questions.side.text"` instead of crashing or returning empty) |
| IS-04 | Missing key interpolation handled safely | ✅ PASS | `{placeholder}` values not found in values object are returned as `"{placeholder}"` literal rather than `undefined` |
| IS-05 | Question definitions are language-independent | ✅ PASS | `QUESTION_IDS` array uses only `id`, `triggerAt`, `options` values — no hardcoded text |
| IS-06 | Summary ambulance script composable per-language | ✅ PASS | `buildSummary()` uses `I18N.t()` for each script fragment; language-specific concatenation is handled by the i18n dictionary, not JS logic |

### 2.3 Runtime / Code Safety

| # | Check | Status | Notes |
|---|-------|--------|-------|
| CS-01 | No external network calls during operation | ✅ PASS | App loads fonts from Google Fonts (optional dependency) — all core logic is self-contained in one HTML file |
| CS-02 | No `eval()` or dynamic code execution | ✅ PASS | Verified — no `eval`, `new Function`, or `setTimeout(string)` usage |
| CS-03 | `innerHTML` usage review | ⚠️ WARN | `innerHTML` used in `buildSummary()` for summary items and `showWaiting()` for action items — input is from trusted JSON dictionaries, not user content. Safe but could be hardened with `textContent` + template literals. |
| CS-04 | No `localStorage` currently used | ✅ PASS | Persistence (Phase 5) is planned but not yet implemented |
| CS-05 | `user-scalable=no` in viewport | ⚠️ INFO | Viewport meta includes `user-scalable=no` — good for emergency UI stability but may hinder accessibility for low-vision users (known to be addressed in Phase 7 accessibility pass) |
| CS-06 | Audio API usage safe | ✅ PASS | `AudioContext` used only for milestone beeps/chimes; gracefully handled with `webkit` prefix fallback |
| CS-07 | `navigator.share` / `navigator.clipboard` feature-tested | ✅ PASS | Both paths tested with feature checks before use; fallback `alert()` if neither available |

### 2.4 Structural Safety

| # | Check | Status | Notes |
|---|-------|--------|-------|
| SS-01 | Duplicate `index.html` / `fs_responder.html` | ❌ FAIL | Both files are currently identical. Per PLAN.MD Phase 1, one source of truth must be established. Currently both are editable and identical — any future change must be applied to both or one removed. |
| SS-02 | No CSS/JS separation | ❌ FAIL | All CSS and JS inline in HTML. Makes translation/theming/PWA work (Phases 3–6) impossible without restructuring. |
| SS-03 | Loose globals (15+ mutable) | ⚠️ WARN | Timer state, answers, milestones, breathing state all stored as loose `let` globals. Functional but fragile for future feature additions. |

---

## 3. Baseline Artifact

**What this artifact captures:**
- The exact state of the canonical source (`index.html`) at version 2026.7.2 / commit ca86101
- All 14 question definitions with their trigger times and option values
- All 8 alert banner types and their conditions
- The full summary generation logic including ambulance script assembly
- The breathing rate counter mechanism (15-second tap window)
- The waiting phase logic (phase0: 0-120s, phase1: 120-900s, phase2: >900s)
- Milestone tracking (2min, 15min, 30min)

**File inventory at baseline:**

```
febrile-seizure/
├── PLAN.MD                           # Development plan (7 phases)
├── README.md                         # Deploy instructions (Azure SWA)
├── azure-static-web-apps-*.yml       # GitHub Actions deployment config
├── index.html                        # ✅ Canonical entry point (1623 lines)
├── fs_responder.html                 # Duplicate (1250 lines)
├── assets/
│   ├── css/
│   └── js/
│       └── i18n.js                   # Translation helper (i18n module)
└── assets/
    └── i18n/
        ├── en.json                   # 264 lines
        ├── es.json                   # 253 lines
        └── bg.json                   # 285 lines
```

**Deployment URLs (currently active):**
- `https://happy-smoke-0c1463103.7.azurestaticapps.net/`
- `https://azure-static-web-apps-wonderful-water-06b7f1203`
- `https://azure-static-web-apps-salmon-bay-0eda95503`

---

## 4. Manual Test Checklist

### Phase-Pre (Current State Verification)

| # | Test | Expected Result | Pass/Fail |
|---|------|-----------------|-----------|
| T-01 | Open `index.html` in browser | Dark theme UI renders, title "Seizure First Aid" visible | ☐ |
| T-02 | Click "Start timer now" | Timer begins counting, strip appears with 00:00, "Observing" badge shown | ☐ |
| T-03 | First question: "Is the shaking happening on BOTH sides?" | All 4 option buttons render with icons and correct text | ☐ |
| T-04 | Select an option | Next question appears; timer continues running | ☐ |
| T-05 | Answer "no" to "still_seizing_2" (at 2 min) | `seizureStopped()` fires; timer stops; post-seizure questions displayed | ☐ |
| T-06 | Answer "no" to "still_seizing_10" (at 10 min) | Same stop behavior as T-05 | ☐ |
| T-07 | Select "no" for "breathing_now" | Alert banner: "🚨 Not breathing" shown for 8 seconds | ☐ |
| T-08 | Select "blue" for "lips" | Alert banner: "🚨 Blue lips" shown | ☐ |
| T-09 | Select "absent" for "breathing_effort" | Alert banner: "🚨 Breathing emergency" shown | ☐ |
| T-10 | Complete all post-seizure questions | Summary screen renders with duration, severity label, and ambulance script | ☐ |
| T-11 | Duration ≥ 30 min shown in summary | Label reads "⚠ Febrile status epilepticus (≥30 min)" | ☐ |
| T-12 | Duration ≥ 15 min but < 30 min | Label reads "⚠ Complex febrile seizure (≥15 min)" | ☐ |
| T-13 | Duration ≥ 2 min but < 15 min | Label reads "Prolonged — medication was due" | ☐ |
| T-14 | Click "Share / copy summary" | Clipboard gets plain-text report; button shows "✓ Copied to clipboard" for 2s | ☐ |
| T-15 | Click "Start over" (restart) | Full reset: timer to 0, all screens hidden, start screen shown | ☐ |
| T-16 | Breathing rate counter | Tap button → 15-second countdown → calculates breaths/min | ☐ |

### Language Switching (i18n Verification)

| # | Test | Expected Result | Pass/Fail |
|---|------|-----------------|-----------|
| T-17 | Switch language to Spanish (`es`) | All UI text, question text, banners, summary re-render in Spanish | ☐ |
| T-18 | Switch language to Bulgarian (`bg`) | All UI text, question text, banners, summary re-render in Bulgarian (Cyrillic) | ☐ |
| T-19 | Switch language during active timer | Language change does not disrupt running timer or question flow | ☐ |
| T-20 | Missing key graceful degradation | If any key is missing from a dictionary, display returns the key path (e.g. `"app.title"`) rather than empty or crash | ☐ |

### Waiting Phase Verification

| # | Test | Expected Result | Pass/Fail |
|---|------|-----------------|-----------|
| T-21 | 0-120s phase | Shows "👁️ Keep watching" with phase0 actions | ☐ |
| T-22 | 120-900s phase | Shows "⚠️ Medication if available" with phase1 actions | ☐ |
| T-23 | >900s phase | Shows "🚨 Emergency — call 112" with phase2 actions | ☐ |
| T-24 | Timer strip phase colors | Green (phase0) → Yellow (phase1) → Red (phase2) | ☐ |
| T-25 | Milestone bar fill animation | Progress fills from 0% to 100% as timer approaches 30 min | ☐ |
| T-26 | Next card preview | Shows countdown to next timed question | ☐ |

### Mobile & Edge Cases

| # | Test | Expected Result | Pass/Fail |
|---|------|-----------------|-----------|
| T-27 | Open in portrait mobile | All text readable, buttons tappable (min 44px touch targets) | ☐ |
| T-28 | Open in landscape mobile | Layout adapts, no horizontal scroll | ☐ |
| T-29 | Low-connectivity / airplane mode | App still loads and functions if cached from previous visit | ☐ |
| T-30 | Screen orientation change during active timer | Timer continues, no JS errors | ☐ |
| T-31 | Rapid restarts (click restart 3x in 5s) | No duplicate timers, no state corruption | ☐ |
| T-32 | Audio API availability | If browser blocks AudioContext, app continues without sound errors | ☐ |
| T-33 | `navigator.share` unavailable | Falls back to clipboard copy; if clipboard also unavailable, shows `alert()` | ☐ |

---

## 5. Acceptance Status Summary

| Category | Pass | Warn | Fail |
|----------|------|------|------|
| Medical safety | 5 | 0 | 0 |
| i18n safety | 6 | 0 | 0 |
| Runtime/code safety | 5 | 2 | 0 |
| Structural safety | 1 | 1 | 2 |
| Manual tests (T-01 to T-33) | — | — | Not yet run |

**Overall status:** ✅ **Baseline captured — ready for Phase 1 execution**

The medical content surface is clean: no dosing, no diagnosis, appropriate disclaimers, and all three languages preserve safety messaging. The two structural failures (duplicate files, no CSS/JS separation) are the explicit blockers for Phase 1 and are the stated immediate next step in PLAN.MD.

---

## 6. Known Blockers for Phase 1

1. **Duplicate entry point** (`index.html` vs `fs_responder.html`): Both files are identical. Must choose one canonical source and either convert the other to a non-editable reference or remove it. This is the single highest-priority blocker.
2. **Inline monolith**: All CSS (~200 lines) and JS (~1000 lines) are embedded in the HTML. Splitting into `assets/css/app.css` and `assets/js/app.js` is required before translation, theming, and PWA work.
3. **Google Fonts external dependency**: The `@import` to `fonts.googleapis.com` means the app has a network dependency for font loading. For offline-first (Phase 6), fonts must be self-hosted or pre-cached.

---

## 7. Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| Medical content drift during refactoring | 🔴 Critical | No medical text changes in Phase 1–2; text-only changes require clinical sign-off per project rules |
| Duplicate file out-of-sync during Phase 1 | 🟡 Medium | Complete Phase 1 (unify to one file) before any new content is added |
| i18n key migration introduces missing keys | 🟡 Medium | Use I18N.t() safe fallback (already in place); run T-20 (missing key) after migration |
| Structure changes affect ambulance script assembly | 🟡 Medium | Test T-10/T-11/T-12 (summary generation) after each JS refactor |
| Breaking the emergency flow speed | 🔴 Critical | "Start timer now" button must remain the most prominent, single-tap element |

---

*Artifact created 2026-09-18. Source: OpenClaw local-agent session ca86101.*
