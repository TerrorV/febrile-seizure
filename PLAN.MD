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
  - `assets/css/app.css`
  - `assets/js/app.js`
  - optional `assets/js/config.js` or `assets/js/questions.js`
- Introduce a small app-state object instead of many loose globals where practical.
- Add a short README section describing the file structure.

### Acceptance Criteria

- One canonical entry point exists.
- HTML, CSS, and JS are separated enough to support translation, theming, and PWA caching.
- A contributor can change a question or style in one place only.

## Phase 2: Add Settings Foundation

### Purpose

Create a non-emergency settings area for optional preferences and stored profile data.

### Tasks

- Add a simple "Settings" or "Child profile" entry point on the start screen.
- Keep the emergency start button visually dominant.
- Add a lightweight modal or separate screen for settings.
- Define the first settings model:
  - language
  - theme mode
  - child age
  - child weight
- Add a "clear saved data" action.
- Add "last updated" metadata for saved profile values.

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

- Add `manifest.webmanifest`.
- Add app icons in required sizes.
- Add a service worker for caching static assets.
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

## Future Items After This Plan

- richer medical context, such as age-aware breathing-rate interpretation
- localization of shared ambulance handoff text
- optional caregiver notes
- accessibility pass for larger text and screen-reader labels
- analytics only if privacy expectations are clearly defined

## Immediate Next Step

Start with the structural cleanup so future work is not duplicated across `fs_responder.html` and `index.html`.
