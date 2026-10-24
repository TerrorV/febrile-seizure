# FS-04: Feature Request — Sound Notifications for Events

**Date:** 2026-10-24  
**Requested by:** Vladimir  
**Type:** Feature request (not a defect — sound is currently minimal)  
**Priority:** Medium-High — critical for hands-busy emergency scenarios  

---

## Problem

The app currently has sound only for milestone beeps (2min, 15min, 30min) and the breathing countdown chime. There is **no sound feedback** for:
- A new question appearing (user may be looking away or helping the child)
- A question being answered
- An alert banner appearing
- The timer being started

In a seizure emergency, the caregiver is often holding the child, wiping them, or attending to them physically. They may not be looking at the screen. Sound notifications let them know something important is happening without needing to look at the display.

---

## Current Sound Coverage

| Event | Sound |
|---|---|
| 2-minute milestone | ✅ `chime2()` — two-tone chime |
| 15-minute milestone | ✅ `chime2()` |
| 30-minute milestone | ✅ `chime2()` |
| Breathing countdown | ✅ `chime2()` per second |
| Question arrival | ❌ Silent |
| Answer selected | ❌ Silent |
| Alert banner | ❌ Silent |
| Timer start | ❌ Silent |
| Seizure stopped (user answered "no") | ❌ Silent |

---

## Proposed Sound Events

### 1. Question Arrival (every timed question)
- A brief, soft "tick" or single-tone notification
- Should be quiet enough not to startle, but audible if the phone is face-down or in a pocket
- **Purpose:** Alert the caregiver that a new question is ready

### 2. Alert Banner Appear (banners 1-8)
- A sharper, more urgent tone than question arrival
- Matches or complements the existing milestone chime but distinct from it
- **Purpose:** Draw attention to critical state changes (not breathing, blue lips, etc.)

### 3. Seizure Stopped ("no" to still_seizing)
- A calming, softer tone — confirms the seizure has stopped
- **Purpose:** Reduce anxiety by audibly confirming the positive outcome

### 4. Timer Start
- A single clear tone when "Start timer now" is tapped
- **Purpose:** Confirm the timer has started (important if the user taps accidentally or quickly)

### 5. Answer Confirmed
- Very subtle tap-like feedback sound (optional, may be too busy)
- **Purpose:** Confirm selection was registered

---

## Sound Design Principles

1. **Distinct per event type** — the caregiver should be able to tell what's happening by the sound alone
2. **No loud, jarring tones** — this is a stressful situation; sounds should be reassuring, not alarming
3. **Short duration** — 100-200ms max, not continuous playback
4. **Respect browser autoplay policies** — all sounds play only after user has interacted with the page (which happens at timer start)
5. **Graceful degradation** — if AudioContext is unavailable, the app continues silently

---

## Implementation Notes

### Existing infrastructure (already in place)

```js
let audioCtx = null;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function beep(freq, dur, vol, t, type='sine') {
  // ... existing beep implementation
}

function chime2() {
  // ... two-tone chime for milestones
}

function urgentBeep() {
  // ... triple-tone for breathing rate (used in countdown)
}
```

### Suggested new sounds

```js
// Soft single-tone tick — new question arriving
function tick() {
  const ctx = getAudio();
  beep(660, 0.08, 0.15);
}

// Calm confirmation — seizure stopped
function calmConfirm() {
  const ctx = getAudio();
  beep(520, 0.15, 0.12);
  setTimeout(() => beep(480, 0.15, 0.10), 120);
}

// Attention tone — alert banner
function attention() {
  const ctx = getAudio();
  beep(880, 0.1, 0.18);
  setTimeout(() => beep(660, 0.1, 0.15), 100);
}
```

### Where to integrate

| Integration Point | Location in app.js |
|---|---|
| Question arrival | `checkAndShowQuestions()` after card is displayed |
| Answer selected | `answerQuestion()` after answer is recorded |
| Banner shown | `showBanner()` |
| Timer start | `startTimer()` after timer begins |
| Seizure stopped | `seizureStopped()` |

---

## Configuration (Future)

Eventually this could be configurable:
- Sound on/off toggle in settings
- Volume level
- Sound theme (soft / alert / custom)

For MVP, hardcode the sounds and make them non-configurable.

---

## Testing Required

- Sound plays on new question arrival
- Sound plays on alert banner
- Sound is distinct between event types
- Sound does not interrupt or conflict with milestone chimes
- Sound works on iOS Safari (known autoplay restrictions)
- Sound works on Android Chrome
- No audio errors if AudioContext is blocked
- Sound doesn't interfere with user's own device audio (alarms, calls, etc.)

---

## Fix Applied — 2026-10-24

- **Naming collision fixed:** The original `tick()` sound helper (question arrival) was shadowed by the existing `tick()` timer-tick function (line 781), rendering it dead code. Renamed the sound helper to `questionTick()` and updated the call in `showQuestion()` to use the new name. `node --check` passes.

## Fix Applied — 2026-10-24 (continued)

- **Timer start sound not yet wired:** The plan suggested adding sound in `startTimer()`, but no explicit call was added there yet. This is a minor gap, not blocking.

---

*Feature implemented; see commits 7f4c5c1 (initial MVP) and follow-up fix for `questionTick` rename.*
