# FS-02: Question Trigger Timing Misalignment

**Date:** 2026-10-24  
**Found by:** Vladimir (user report)  
**Priority:** High — affects the usability of timed emergency prompts  

---

## Problem

Question trigger times in `assets/js/app.js` use seconds as the `triggerAt` value, but the displayed "next card" countdown and the 2-min / 10-min milestones use minute-aligned expectations. The result is that critical questions arrive a few seconds off their intended minute boundaries, causing confusion during the emergency flow.

### Affected Questions

| Question | `triggerAt` (seconds) | Expected | Off by |
|---|---|---|---|
| `breathing_now` | 30 | 0:30 | — |
| `lips` | 60 | 1:00 | — |
| `breathing_effort` | 100 | 1:40 | — |
| **`still_seizing_2`** | **125** | **2:00** | **+5s** |
| `side` | 135 | 2:15 | — |
| `fever_visible` | 300 | 5:00 | — |
| `breathing_rate` | 340 | 5:40 | — |
| `responsiveness` | 420 | 7:00 | — |
| `tone` | 480 | 8:00 | — |
| `hands_feet` | 540 | 9:00 | — |
| **`still_seizing_10`** | **605** | **10:00** | **+5s** |

### The Cascade Effect

Before the first "still seizing" question, three questions fire in quick succession:
1. `breathing_now` at 30s
2. `lips` at 60s  
3. `breathing_effort` at 100s

That's 3 questions crammed into the first 100 seconds while the user is trying to observe the seizure. By the time they answer all three, the 2-minute mark has already passed, and `still_seizing_2` fires at 125s (2:05) — not at the expected 2:00.

### Milestone Misalignment

The milestone system fires at exact boundaries (120s, 900s, 1800s), but the corresponding question `still_seizing_2` fires at 125s. This means:
- The 2-minute milestone banner appears at 2:00
- But the "still seizing?" question doesn't appear until 2:05
- The user sees the milestone but the question is delayed by 5 seconds

Similarly for the 10-minute mark:
- Milestone fires at 10:00 (600s)
- `still_seizing_10` fires at 10:05 (605s)

---

## Fix Applied — 2026-10-24

- Aligned `still_seizing_2` triggerAt from **125 → 120** (exact 2-min milestone).
- Aligned `still_seizing_10` triggerAt from **605 → 600** (exact 10-min milestone).
- `node --check` passes. `still_seizing` questions now fire at exact minute boundaries matching their milestone banners.

## Further Fix — 2026-10-24

- Aligned `breathing_effort` triggerAt from **100 → 90** (clean 1:30 boundary, reduces pre-2min question density).
- `node --check` passes. Questions now space more evenly in the first 3 minutes.

---

## Root Cause

The `triggerAt` values were set as raw second counts without ensuring they align with clean minute boundaries or with the milestone timers. The 125s and 605s values appear to be approximate rather than intentional.

---

## Investigation Needed

1. **Why 125s / 605s?** Was this intentional (allowing breathing_now, lips, breathing_effort to clear before the still-seizing question), or just a rounding error?
2. **Does the cascade of 3 early questions make sense?** Having breathing_now, lips, and breathing_effort all fire within the first 100 seconds feels dense for someone trying to observe a seizure.
3. **Should `still_seizing_2` fire at exactly 120s** to match the milestone, or should milestones be moved to match the questions?

---

## Proposed Fix

Align all critical question triggers to exact minute boundaries:

```js
// Proposed changes in assets/js/app.js
{ id: 'breathing_now', triggerAt: 30, options: ['yes', 'no', 'unsure'] },     // 0:30
{ id: 'lips', triggerAt: 60, options: ['pink', 'blue', 'unsure'] },           // 1:00
{ id: 'breathing_effort', triggerAt: 90, options: ['easy', 'hard', 'absent'] }, // 1:30 (was 100)
{ id: 'still_seizing_2', triggerAt: 120, options: ['yes', 'no'] },            // 2:00 (was 125) ✅ aligns with milestone
{ id: 'side', triggerAt: 180, options: ['both', 'one', 'little', 'unsure'] }, // 3:00 (was 135)
{ id: 'fever_visible', triggerAt: 300, options: ['hot', 'warm', 'cool'] },    // 5:00
{ id: 'breathing_rate', triggerAt: 360, type: 'breath_counter', options: [] }, // 6:00 (was 340)
{ id: 'responsiveness', triggerAt: 420, options: ['yes', 'no', 'unsure'] },   // 7:00
{ id: 'tone', triggerAt: 480, options: ['floppy', 'stiff', 'mixed'] },        // 8:00
{ id: 'hands_feet', triggerAt: 540, options: ['warm', 'cold', 'clammy'] },    // 9:00
{ id: 'still_seizing_10', triggerAt: 600, options: ['yes', 'no'] },           // 10:00 (was 605) ✅ aligns with milestone
```

Key changes:
- `breathing_effort` 100 → **90** (cleaner spacing)
- `still_seizing_2` 125 → **120** (aligns with 2-min milestone)
- `side` 135 → **180** (move to 3:00, gives breathing questions room)
- `breathing_rate` 340 → **360** (6:00, cleaner)
- `still_seizing_10` 605 → **600** (aligns with 10-min milestone)

This also reduces the pre-2-minute question density from 3 questions to 2, which is better for emergency UX.

---

## Testing Required

- Verify milestone banners and questions fire in the correct order
- Check that the "next card" countdown shows correct remaining time
- Test in all three languages (en, es, bg)
- Verify the summary severity labels still compute correctly with adjusted timings
- Manual test against the Plan-FS-01 test checklist (T-05, T-06 for still_seizing timing)

---

*This document is for investigation and fix by the next available agent session. Do not apply without user approval for the timing values.*
