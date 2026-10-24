# FS-03: Question Button Colors Semantically Reversed for "Still Seizing?"

**Date:** 2026-10-24  
**Found by:** Vladimir (user report)  
**Priority:** High — during an emergency, green should signal "everything's okay" and red should signal "danger"

---

## Problem

The question **"Is the child still seizing?"** (`still_seizing_2` at 2:00, `still_seizing_10` at 10:00) has options:
- **yes** → "Yes — still seizing" — colored **green** (positive/warning)
- **no** → "No — it has stopped" — colored **red** (danger)

This is semantically backwards. The desired answer ("No, it stopped") is red. The problem answer ("Yes, still going") is green. In an emergency, this creates a cognitive mismatch — users instinctively trust green = safe.

---

## Fix Applied — 2026-10-24

- Added `invertColors: true` flag to `still_seizing_2` and `still_seizing_10` question definitions in `assets/js/app.js` (line 367, 374).
- Updated both rendering paths (lines 525–527, 894–896) to swap the color class when `invertColors` is set: yes→no (green→red), no→yes (red→green), unsure unchanged.
- `node --check` passes; no CSS changes needed since class names are reused.

## Fix Applied — 2026-10-24 (continued)

- Added `invertColors: true` to `post_alert` question definition in `assets/js/app.js` (line 376). `node --check` passes.

## Root Cause

`OPT_META` in `assets/js/app.js` (line 380) maps answer keys to CSS classes generically:

```js
const OPT_META = {
  yes:     { icon: '✓', cls: 'yes' },   // → green (ok-bg)
  no:      { icon: '!', cls: 'no'  },   // → red (alert-bg)
  unsure:  { icon: '?', cls: 'unsure' }, // → yellow (warn-bg)
  both:    { icon: '✓', cls: 'yes' },
  one:     { icon: '!', cls: 'no'  },
  ...
};
```

The mapping assumes `"yes"` always means "positive/okay" and `"no"` always means "negative/flag". This works for questions like "Are they breathing?" or "Is there some reaction?" — but breaks for **`still_seizing`** where "yes" is bad and "no" is good.

Same issue applies to other yes/no questions where "yes" is the negative outcome:
- `breathing_now`: "No — no breaths seen" is red ✅ (correct — bad outcome)
- `responsiveness`: "No — no reaction" is red ✅ (correct — bad outcome)
- `post_alert`: "Yes — requires ambulance" would be green ❌ (incorrect — bad outcome)
- `still_seizing_2`: "Yes — still seizing" is green ❌ (incorrect — bad outcome)
- `still_seizing_10`: "Yes — still seizing" is green ❌ (incorrect — bad outcome)

---

## Affected Questions

| Question | Option | Current Color | Should Be |
|---|---|---|---|
| `still_seizing_2` | yes | green | red |
| `still_seizing_2` | no | red | green |
| `still_seizing_10` | yes | green | red |
| `still_seizing_10` | no | red | green |
| `post_alert` | yes | green | red |
| `post_alert` | no | red | green |

Note: `post_alert` "yes" means "Yes — requires ambulance," which is the danger state, so it should be red, not green.

---

## Proposed Fix

Option A — **Add question-specific overrides** in `OPT_META`:

```js
const OPT_META = {
  yes:     { icon: '✓', cls: 'yes' },
  no:      { icon: '!', cls: 'no'  },
  unsure:  { icon: '?', cls: 'unsure' },
  // Semantic overrides for inverted-logic questions
  'yes:danger':   { icon: '!', cls: 'no'  },
  'no:reassuring':{ icon: '✓', cls: 'yes' },
  // Question-specific
  'still_seizing_2_yes':   { icon: '!', cls: 'no'  },
  'still_seizing_2_no':    { icon: '✓', cls: 'yes' },
  'still_seizing_10_yes':  { icon: '!', cls: 'no'  },
  'still_seizing_10_no':   { icon: '✓', cls: 'yes' },
  'post_alert_yes':        { icon: '!', cls: 'no'  },
  'post_alert_no':         { icon: '✓', cls: 'yes' },
};
```

Then in the question rendering code, look up the override key:

```js
// Instead of OPT_META[opt.value], use:
const overrideKey = qid + '_' + opt.value;
const meta = OPT_META[overrideKey] || OPT_META[opt.value] || { icon: '?', cls: 'unsure' };
```

Option B — **Add a `dangerAnswer` field to question definitions**:

```js
{ id: 'still_seizing_2', triggerAt: 120, options: ['yes', 'no'], dangerAnswer: 'yes' },
```

Then the renderer checks if `answer === question.dangerAnswer` and swaps the color class.

---

## Recommended Approach

**Option B** is cleaner and more maintainable:
- The question definition explicitly declares which answer is the "danger" state
- No need to enumerate overrides for every question
- Easy to audit which questions have inverted semantics
- Future questions can declare this without code changes

---

## Testing Required

- Verify `still_seizing_2` — "No — it has stopped" shows green ✓
- Verify `still_seizing_2` — "Yes — still seizing" shows red !
- Verify `still_seizing_10` — same pattern
- Verify `post_alert` — "Yes — requires ambulance" shows red, "No" shows green
- Verify all other yes/no questions still render correctly (breathing_now, responsiveness, etc.)
- Test in light and dark themes (contrast on both backgrounds)
- Manual checklist: update FS-01 test cases for button color verification

---

*Documented for investigation and fix. Option B recommended.*
