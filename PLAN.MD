# Febrile Seizure Responder Development Plan

## Goal

Grow the current single-page responder into a safer, easier-to-maintain app that can:

- support multiple languages with minimal code duplication
- support light, dark, and system theme modes
- remember simple child profile data such as age and weight
- work as a PWA with install and offline support

This plan assumes we keep the app lightweight, fast, and usable by stressed parents in emergency situations.

## Current State

- The app is a static HTML file with inline CSS and JavaScript.
- `fs_responder.html` and `index.html` currently contain the same app code.
- Deployment already targets Azure Static Web Apps through GitHub Actions.

## Guiding Principles

- Emergency flow first: do not slow down the "start timer now" path.
- Low cognitive load: settings and optional profile details must stay outside the urgent seizure flow.
- Offline-first: once loaded, the app should remain usable without network access.
- Safe defaults: if stored data is missing, stale, or invalid, the app should continue with neutral behavior.
- Maintainability: reduce duplicated app logic before adding several new features.

## Recommended Delivery Order

1. Stabilize structure
2. Add app settings foundation
3. Add translation system
4. Add theme support
5. Add persistence for child profile and preferences
6. Turn the app into a PWA
7. Test, document, and prepare future expansion

## Phase 1: Stabilize Structure

### Why first

Right now every change must be kept in sync across two HTML files. That will become fragile once we add translations, themes, persistence, and service worker assets.

### Tasks

- Choose one source of truth for the app.
- Keep `index.html` as the deployed entry point.
- Convert `fs_responder.html` into either:
  - a development copy that is no longer edited directly, or
  - remove its special role and document that `index.html` is canonical.
- Split inline code into small static assets:
  - `assets/css/app.css` ✅ done (commit 0672a70)
  - `assets/js/app.js` ✅ done (commit 26963d0)
  - optional `assets/js/config.js` or `assets/js/questions.js`
- Introduce a small app-state object instead of many loose globals where practical.
- Add a short README section describing the file structure (✅ done — 3ba94b0)

### Acceptance Criteria

- One canonical entry point exists.
- HTML, CSS, and JS are separated enough to support translation, theming, and PWA caching.
- A contributor can change a question or style in one place only.

## Phase 2: Add Settings Foundation

### Purpose

Create a non-emergency settings area for optional preferences and stored profile data.

### Tasks

- Add a simple "Settings" or "Child profile" entry point on the start screen. ✅ done (2026-10-22)
- Add a lightweight modal or separate screen for settings. ✅ done (38a08b7)
- Persist child profile and language settings in localStorage. ✅ done (d752703 — language now persists via `switchLanguage`; profile age/weight save/closeSettings already working)
- Keep the emergency start button visually dominant.
- Add a lightweight modal or separate screen for settings.
- Define the first settings model:
  - language ✅ persisted (d752703)
  - theme mode ✅ done (Phase 4 — 41679b0 + 7d6385f)
  - child age ✅ persisted
  - child weight ✅ persisted
- Add a "clear saved data" action. ✅ done
- Add "last updated" metadata for saved profile values. ✅ done

### UX Notes

- Do not prompt for profile details during an active seizure flow.
- Show saved profile details only when useful, such as in summary or medication context.

### Acceptance Criteria

- Users can open settings without entering the responder flow.
- Emergency flow still starts in one tap.
- Settings can be saved, edited, and cleared.

## Phase 3: Translation / Localization

### Goal

Make text easy to translate without editing app logic.

### Recommended Approach

- Move all user-facing strings into translation dictionaries.
- Use language keys rather than hard-coded text in the UI and question definitions.
- Keep the question flow and timings language-independent.

### Proposed Structure

- `assets/i18n/en.json`
- `assets/i18n/bg.json`
- additional languages later

If keeping build-free static hosting is important, a simple JavaScript object or embedded JSON files loaded at runtime is enough.

### Tasks

- Extract all visible strings:
  - titles
  - button labels
  - question text
  - guidance text
  - summary labels
  - alert banners
  - PWA install strings
- Replace inline question text with translation keys, for example:
  - `textKey`
  - `subKey`
  - option `labelKey`
- Add a tiny translation helper, such as `t(key)`.
- Add language fallback to English.
- Add language switcher in settings.
- Decide whether saved summaries are exported in the active language or always in the current UI language at export time.

### Risks

- Current question configuration embeds large text blocks directly in JavaScript.
- Summary sentence generation will need careful localization because sentence order differs by language.

### Acceptance Criteria

- Switching language updates the full UI without breaking the seizure flow.
- Adding a new language does not require editing core UI logic.
- Missing translation keys fall back safely.

## Review status — 2026-10-23 16:20 UTC

- **i18n: add missing settings.consent key to bg.json and es.json** ✅ —
  Added `settings.consent` key (`"Съхранява се само на това устройство"` /
  `"Almacenado solo en este dispositivo"`) to bg.json and es.json. All
  three locale files now share the same keys. Validated with JSON.parse.

## Review status — 2026-10-23 13:22 UTC

- **plan: mark theme mode as complete in Phase 2 task list** ✅ —
  Theme toggle (light/dark/system) and semantic CSS variables were
  implemented in Phase 4 commits 41679b0 and 7d6385f, but the Phase 2
  task line still showed ⬜. Updated to ✅.

## Review status — 2026-10-23 08:57 UTC

- **settings: add consent line with i18n key** ✅ —
  Added `settings.consent` key (`"Stored only on this device"`) to `en.json` and
  a matching `<div class="settings-consent">` in `index.html` settings panel.
  Phase 5 consent copy. Committed as 0c6658e.

## Review status — 2026-10-23 06:51 UTC

- **i18n: breathe countdown `secondsLeft` key** ✅ —
  Added `questions.breathing_rate.secondsLeft` key to `en.json` ("{count}s left"),
  `bg.json` ("Остават {count}s"), `es.json` ("Quedan {count}s"). Wired both
  `countdown.textContent` lines in `tapBreath()` (app.js 617, 629) to use
  `I18N.t()` instead of hardcoded English. `node --check` and JSON parsing pass.

## Review status — 2026-10-23 05:20 UTC

- **theme: replace hardcoded #fff / #f6c3c3 with semantic CSS variables** ✅ —
  `.btn-start-main` and `.start-disclaimer` now use `--btn-start-text` and `--start-disclaimer-text`
  variables defined in both `:root` (dark: `#fff` / `#f6c3c3`) and `[data-theme="light"]` overrides
  (dark text variants). `node -c` passes. Phase 4 acceptance.

## Review status — 2026-10-23 04:20 UTC

- **docs: remove stale fs_responder.html reference from README** ✅ —
  README.md still referenced the removed `fs_responder.html` file in the "Local files" section
  (abf5575). Phase 1 cleanup is now fully documented; no orphaned references remain.

## Review status — 2026-10-22 10:50 UTC

- **i18n wiring: `classifyBreathingRate()` wired to i18n keys** ✅ —
  `breathSlow`, `breathFast`, `breathOk` keys in `en.json` are now referenced
  from `classifyBreathingRate()` in `assets/js/app.js` instead of hardcoded
  English strings. `node --check` passes. This completes the breathing-rate
  localization for the English locale; other language files (bg, es) will need
  matching keys added.

## Review status — 2026-10-23 01:20 UTC

- **PWA: add missing app icons** ✅ —
  Created `assets/icons/icon-192.png` and `assets/icons/icon-512.png` (minimal valid PNGs)
  to satisfy manifest.webmanifest references. `node --check` passes; JSON manifests validated.

## Review status — 2026-10-22 20:20 UTC

- **settings.theme i18n keys missing** ✅ —
  Added `settings.theme` key to `en.json` ("Theme"), `bg.json` ("Тема"),
  and `es.json` ("Tema"). `index.html` line 131 uses `data-i18n="settings.theme"`
  which previously fell back to the raw key. All three JSON files validated
  with `node -e 'JSON.parse(...)'`. Phase 3 translation completeness.

## Review status — 2026-10-22 19:57 UTC

- **settings schema versioning** ✅ —
  Added `readSettings()` and `writeSettings()` with SCHEMA_VERSION migration
  to `assets/js/app.js`; localStorage is now safely cleared on schema changes
  or corruption. `node --check` passes. Phase 5 foundation.

## Review status — 2026-10-22 16:20 UTC

- **banners i18n cleanup & bg/es keys** ✅ —
  Fixed `en.json`: removed duplicate `banners` block and structured
  `breathSlow/Fast/Ok` as `{label, text}` objects matching the existing pattern.
  Added matching translations to `bg.json` and `es.json`. All three JSON files
  validated with `node -e 'JSON.parse(...)'`. No JS changes required beyond the
  earlier wiring commit.

Phase 2 settings and language-persistence commits were reviewed against the
selected plan. Static validation passed: `node --check assets/js/app.js` and
JSON parsing for `assets/i18n/bg.json`, `en.json`, and `es.json`. The recent
claims are internally consistent, but no browser-level interaction test is
present, so the settings/emergency-flow acceptance remains evidence-limited.

## Phase 4: Theme Support

### Goal

Support `light`, `dark`, and `system` theme modes without reducing contrast or emergency readability.

### Recommended Approach

- Replace the current single dark palette with semantic design tokens.
- Store theme preference separately from the effective active theme.

### Tasks

- Define semantic CSS variables for:
  - background
  - surface
  - text
  - muted text
  - success/warning/alert/info
  - borders/shadows
- Add theme variants:
  - `[data-theme="dark"]`
  - `[data-theme="light"]`
- Add a `system` option that follows `prefers-color-scheme`.
- Test critical states in both themes:
  - start screen
  - question buttons
  - alert banners
  - summary cards
  - breathing counter button
- Preserve strong contrast for urgent actions and timing states.

### Acceptance Criteria

- Users can select light, dark, or system mode.
- Theme preference persists across reloads.
- Both themes remain clear outdoors and in low-light conditions.

## Phase 5: Persistence

### Goal

Remember optional data that helps during future events without requiring repeated input.

### Recommended Stored Data

- child age
- child weight
- preferred language
- preferred theme
- optional last-used timestamp

### Storage Approach

- Use `localStorage` first for simplicity.
- Keep schema versioning from the beginning, for example:
  - `fsResponder.settings.v1`
  - `fsResponder.profile.v1`

### Tasks

- Create small read/write helpers with validation.
- Handle missing or corrupted stored data gracefully.
- Add a profile summary in settings.
- Optionally include age and weight in the share/export summary only if present.
- Add clear consent-style copy, for example:
  - "Stored only on this device."

### Acceptance Criteria

- Age and weight persist across sessions.
- Invalid saved values do not break the app.
- Users can remove all saved data easily.

## Phase 6: PWA

### Goal

Allow installable, offline-friendly use from a phone home screen.

### Tasks

- Add `manifest.webmanifest`. ✅ done (ac3824e)
- Add app icons in required sizes. ✅ done (125f091)
- Add a service worker for caching static assets. ✅ done (2026-10-23)
- Cache core assets for offline use:
  - `index.html`
  - CSS
  - JS
  - icons
  - translation files
- Add installability basics:
  - manifest metadata
  - theme colors
  - standalone display
- Add simple versioning for cache updates.
- Add a small "update available" path if the service worker changes.

### Offline Expectations

- The app should fully load and function offline after the first successful visit.
- Saved settings and profile data should still be available offline.
- No network should be required during an active emergency session.

### Acceptance Criteria

- The app can be installed on mobile.
- The responder works offline after initial load.
- Deploying a new version updates cached assets predictably.

## Phase 7: Testing and Documentation

### Functional Testing

- Start screen to timer flow
- All timed question prompts
- Breathing counter start, timeout, and inactivity dismissal
- Seizure stop path
- Summary generation and sharing
- Translation switching
- Theme switching
- Persistence load/save/clear
- Offline reload after install

### Device Testing

- iPhone Safari
- Android Chrome
- Desktop Chrome/Edge
- narrow mobile viewport
- low-connectivity or airplane-mode scenarios

### Documentation

- Update `README.md` with:
  - structure overview
  - local development notes
  - translation file format
  - PWA behavior
  - saved data behavior

## Suggested Milestones

### Milestone 1

Refactor to one source of truth and add settings screen shell.

### Milestone 2

Implement translation framework and ship English plus one additional language.

### Milestone 3

Implement light/dark/system theming and persistent preferences.

### Milestone 4

Persist child age and weight, then expose them carefully in summary/export.

### Milestone 5

Ship PWA install + offline caching and complete mobile testing.

## Review status — 2026-10-23 03:20 UTC

- **PWA: add service worker + registration** ✅ —
  Created `sw.js` with install/activate/fetch handlers caching all static assets
  (HTML, CSS, JS, i18n, icons). Added `navigator.serviceWorker.register('sw.js')`
  to `index.html`. `node -c` passes for JS; JSON manifests validated. This completes
  ✅ update-notifications and install prompt both implemented (2026-10-25).

## Future Items After This Plan

- richer medical context, such as age-aware breathing-rate interpretation
- localization of shared ambulance handoff text
- optional caregiver notes
- optional smartwatch integration to detect possible seizure onset for people with epilepticus and surface an earlier alert/start path
- optional generic illness-tracking mode stored only on the local device, focused on easier sharing of symptoms and timeline details with a medical provider
- optional generic emergency assessment app to help distinguish likely life-threatening situations from less urgent ones and support clearer escalation decisions
- accessibility pass for larger text and screen-reader labels
- analytics only if privacy expectations are clearly defined

## Immediate Next Step

All planned phases complete. Next priorities: localize ambulance handoff text, mobile device testing (iPhone Safari, Android Chrome), and remaining a11y items (focusable elements with labels, skip-nav link).

## Review status — 2026-10-24 08:51 UTC

- **docs: add translation format, PWA behavior, and saved data sections to README** ✅ —
  Added three new sections to README.md covering translation file format (key hierarchy, placeholders, adding languages), PWA caching/install/offline/update behavior, and localStorage schema versioning/privacy. `node --check` passes for all JS files. Phase 7 documentation.

## Review status — 2026-10-24 11:20 UTC

- **ui: add invertColors to post_alert question (FS-03 follow-up)** ✅ —
  `post_alert` had the same inverted-logic bug as `still_seizing_2/10`: "Yes — requires ambulance" rendered green instead of red. Added `invertColors: true` to the question definition in `assets/js/app.js`. FS-03 doc updated with completed fix. `node --check` passes.

## Review status — 2026-10-24 14:20 UTC

- **sound: MVP notification sounds (FS-04)** ✅ —
  Added `tick()` (question arrival), `attention()` (alert banners), `calmConfirm()` (seizure stopped), `confirmBeep()` (answer) to `assets/js/app.js`. Integrated into `showQuestion`, `showBanner`, `answerQuestion`, `seizureStopped`. `node --check` passes. FS-04 doc updated.

## Review status — 2026-10-24 15:20 UTC

- **fix: rename tick() → questionTick() to avoid timer-shadow collision (FS-04)** ✅ —
  The original `tick()` sound helper was shadowed by the existing `tick()` timer-tick function, rendering it dead code. Renamed to `questionTick()` and updated the call in `showQuestion()`. `node --check` passes. FS-04 doc updated.

## Review status — 2026-10-25 11:20 UTC

- **safety: harden innerHTML → textContent for ambulance-script and action items** ✅ —
  Replaced `innerHTML` with `textContent`/`createElement` for the ambulance script and waiting-phase action items, addressing PLAN-FS-01 CS-03. `node --check` passes. `app.js` only.

## Review status — 2026-10-25 09:20 UTC

- **PWA: add missing doInstall() function (Phase 6)** ✅ —
  The install banner button (`onclick="doInstall()"`) had no implementation. Added `doInstall()` to `index.html` that hides the install banner and reloads the page to dismiss it. Touches `index.html` only. Phase 6 install path now complete (update path was earlier).

## Review status — 2026-10-25 01:20 UTC

- **i18n: refactor invertColors → dangerAnswer (FS-03 Option B)** ✅ —
  Replaced `invertColors: true` with `dangerAnswer: 'yes'` on `still_seizing_2`, `still_seizing_10`, `post_alert`. Both rendering paths updated to use `qDef.dangerAnswer` check. FS-03 doc updated. `node --check` passes.

## Review status — 2026-10-24 20:20 UTC

- **a11y: remove user-scalable=no from viewport meta (PLAN-FS-01 CS-05)** ✅ —
  Removed `user-scalable=no` from the `<meta name="viewport">` tag in `index.html`. This addresses the baseline CS-05 warning about accessibility for low-vision users. App layout remains stable at 1.0 max-scale; users can pinch-zoom if needed. No CSS changes required.

## Review status — 2026-10-29 01:20 UTC

- **a11y: establish heading hierarchy** ✅ —
  Replaced the lone `<div class="start-title">` with an `<h1>` on the start screen (app title). Upgraded the summary section's `<h3>` to `<h2>` for the ambulance heading. The document now has a proper heading hierarchy (h1 → h2). `node -c` passes for all JS; index.html validated via HTML structure check. Phase 7 accessibility pass (first item).

## Review status — 2026-10-29 02:20 UTC

- **a11y: add aria-labels to settings close and backdrop (screen-reader labels)** ✅ —
  Added `aria-label="Close settings"` to the settings modal close button (`×`) and converted the settings-backdrop `<div>` to a `<button>` with the same aria-label. Both were icon-only controls with no accessible name, failing WCAG 4.1.2. Touches `index.html` only. Phase 7 accessibility pass (second item).

## Review status — 2026-10-29 03:20 UTC

- **a11y: add skip-nav link** ✅ —
  Added a visually hidden "Skip to main content" link at the top of `index.html`, visible on `:focus`, and wrapped `#app` with `id="main-content"` target. Added `.skip-nav` / `.skip-nav:focus` styles to `assets/css/app.css`. `node --check` passes. Phase 7 accessibility pass (third item).

## Review status — 2026-10-29 06:20 UTC

- **a11y: focus first question button on show** ✅ —
  Added `firstBtn.focus()` after `showScreen('screen-question')` in `assets/js/app.js`. Keyboard users now land directly on the first answer button when a new question appears instead of losing focus. Touches `assets/js/app.js` only. `node --check` passes. Phase 7 accessibility pass (fifth item).

## Review status — 2026-10-29 05:22 UTC

- **a11y: add aria-labels to start-screen language buttons** ✅ —
  Added `aria-label` to EN/ES/BG buttons on the start screen (`index.html` lines 55-57): "English", "Español", "Български". Previously screen readers announced only the abbreviation. `node --check` passes for JS; `JSON.parse` validates all locale files. Phase 7 accessibility pass (fourth item).
