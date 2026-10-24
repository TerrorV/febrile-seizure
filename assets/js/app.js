  // ── Embedded translation dictionaries ──────────────────────────────────────
const EN = {
"start": {
    "subtitle": "Press start the moment the seizure begins. I'll guide you through what to watch for.",
    "startButton": "Start timer now",
    "note": "Works without a thermometer, scale, or watch",
    "disclaimer": "Disclaimer: This applet is not reviewed by, endorsed by, or affiliated with any medical professional, medical organization, or health authority."
  },
  "timer": {
    "duration": "seizure duration",
    "phaseObserving": "Observing",
    "phaseMedication": "Give medication",
    "phaseComplex": "Complex seizure",
    "phaseStatus": "Status — call 112",
    "btnStopped": "✓ Stopped"
  },
  "questions": {
    "side": {
      "context": "Right now",
      "text": "Is the shaking happening on BOTH sides of the body?",
      "sub": "Look at both arms and both legs.",
      "options": {
        "both": "Yes — both sides shaking",
        "one": "No — only one side or one limb",
        "little": "Very little movement — can't tell",
        "unsure": "I can't tell"
      }
    },
    "breathing_now": {
      "context": "Breathing check",
      "text": "Are they breathing right now?",
      "sub": "Look for the chest or belly rising.",
      "options": {
        "yes": "Yes — breathing seen",
        "no": "No — no breaths seen",
        "unsure": "I can't tell"
      }
    },
    "lips": {
      "context": "Check colour",
      "text": "What colour are the lips and face?",
      "sub": "Normal skin or pink is fine. Blue or grey is serious.",
      "options": {
        "pink": "Normal / pink colour",
        "blue": "Blue or grey lips",
        "unsure": "Hard to tell"
      }
    },
    "still_seizing_2": {
      "context": "At 2 minutes",
      "text": "Is the child still seizing?",
      "sub": "Are the shaking or stiffening movements still happening?",
      "options": {
        "yes": "Yes — still seizing",
        "no": "No — it has stopped"
      }
    },
    "fever_visible": {
      "context": "At 5 minutes",
      "text": "Does the child feel hot to the touch?",
      "sub": "Feel their forehead with the back of your hand.",
      "options": {
        "hot": "Yes — very hot",
        "warm": "Warm but not hot",
        "cool": "Not hot / normal"
      }
    },
    "breathing_rate": {
      "context": "Breathing rate",
      "text": "Count breaths for 15 seconds",
      "sub": "Tap +1 breath each time the chest or belly rises.",
      "breathHelp": "Tap the big button for each breath. First tap starts the 15-second timer.",
      "breathButton": "Tap For Each Breath",
      "breathWaiting": "Waiting for first tap",
      "breathCount": "Count: {count}",
      "breathNoRecorded": "No breathing check recorded yet.",
      "breathsPerMin": "+1 breath"
    },
    "breathing_effort": {
      "context": "At 6 minutes",
      "text": "How does the breathing look right now?",
      "sub": "Look for chest pulling in, noisy breaths, gasping, or long pauses.",
      "options": {
        "easy": "Easy and steady",
        "hard": "Hard work or noisy",
        "absent": "No breaths or long pauses"
      }
    },
    "responsiveness": {
      "context": "At 7 minutes",
      "text": "Do they react to your voice or gentle touch at all?",
      "sub": "Any movement, sound, or eye opening counts.",
      "options": {
        "yes": "Yes — some reaction",
        "no": "No reaction",
        "unsure": "Hard to tell"
      }
    },
    "tone": {
      "context": "At 8 minutes",
      "text": "Does the body feel floppy or stiff?",
      "sub": "Use a gentle touch only. Do not hold them down.",
      "options": {
        "floppy": "Mostly floppy",
        "stiff": "Mostly stiff",
        "mixed": "Mixed or unsure"
      }
    },
    "hands_feet": {
      "context": "At 9 minutes",
      "text": "Do the hands and feet feel warm or cold?",
      "sub": "A quick touch is enough.",
      "options": {
        "warm": "Warm",
        "cold": "Cool or cold",
        "clammy": "Very cold / clammy"
      }
    },
    "still_seizing_10": {
      "context": "At 10 minutes",
      "text": "Is the seizure still continuing?",
      "sub": "",
      "options": {
        "yes": "Yes — still seizing",
        "no": "No — it stopped"
      }
    },
    "post_side": {
      "context": "After the seizure",
      "text": "Is one side of the body weaker than the other?",
      "sub": "Try asking the child to squeeze both your hands — is one side much weaker?",
      "options": {
        "equal": "Both sides seem equal",
        "weak": "One side seems weaker",
        "cant": "Can't check yet"
      }
    },
    "post_alert": {
      "context": "After the seizure",
      "text": "Is the child starting to wake up or respond?",
      "sub": "It is normal to be very sleepy for several minutes after a seizure.",
      "options": {
        "yes": "Yes — waking up slowly",
        "no": "Still completely unresponsive"
      }
    }
  },
  "waiting": {
    "phase0": {
      "emoji": "👁️",
      "title": "Keep watching",
      "body": "Stay calm. Don't hold the child down or put anything in their mouth. Time the seizure.",
      "actions": [
        "Keep them on their side if possible",
        "Clear the area of hard or sharp objects",
        "Stay with them at all times",
        "Call 112 if this is their first ever seizure"
      ]
    },
    "phase1": {
      "emoji": "⚠️",
      "title": "Medication if available",
      "body": "If you have emergency seizure medication (prescribed by a doctor), give it now.",
      "actions": [
        "Keep them on their side",
        "Watch the breathing",
        "Stay on the phone with emergency services if called"
      ]
    },
    "phase2": {
      "emoji": "🚨",
      "title": "Emergency — call 112",
      "body": "This seizure is lasting longer than 15 minutes. Emergency services must be on the way.",
      "actions": [
        "Stay on the phone with 112",
        "Keep them on their side",
        "Do not give food or water"
      ]
    },
    "nextCardLabel": "Next check-in",
    "nextCardAt": "Next check-in at around {time}"
  },
  "milestones": {
    "2min": {
      "label": "⚠ 2 minutes",
      "text": "If medication is available, give it now. Keep watching the breathing."
    },
    "15min": {
      "label": "🚨 15 minutes — call emergency services now",
      "text": "This is a complex seizure. Call 112 immediately if you haven't already."
    },
    "30min": {
      "label": "🚨 30 minutes — febrile status epilepticus",
      "text": "Tell the ambulance the seizure has lasted 30 minutes. Stay on the phone with emergency services."
    }
  },
  "banners": {
    "notBreathing": {
      "label": "🚨 Not breathing",
      "text": "No breaths seen. Call 112 now and start rescue breathing if trained."
    },
    "breathingUnclear": {
      "label": "⚠ Breathing unclear",
      "text": "If you cannot clearly see breathing, get emergency help now and keep watching the chest and belly."
    },
    "breathingConcern": {
      "label": "⚠ Breathing concern",
      "text": "Breathing rate was outside usual range. Keep close watch and update emergency services."
    },
    "blueLips": {
      "label": "🚨 Blue lips",
      "text": "This is urgent. Call 112 immediately if not already done."
    },
    "oneSided": {
      "label": "⚠ One-sided shaking",
      "text": "Note this — tell the ambulance. Keep watching."
    },
    "breathingEmergency": {
      "label": "🚨 Breathing emergency",
      "text": "No breaths or long pauses seen. Call 112 now and start rescue breathing if trained."
    },
    "breathingHard": {
      "label": "⚠ Breathing concern",
      "text": "Breathing looks hard work or noisy. Keep watching closely and update emergency services."
    },
    "noResponse": {
      "label": "⚠ No response",
      "text": "No reaction to voice or touch. Keep timing the seizure and update emergency services."
    }
  },
  "summary": {
    "title": "Seizure summary",
    "subtitle": "For ambulance handover",
    "durationLabel": "Total seizure duration",
    "statusEpilepticus": "⚠ Febrile status epilepticus (≥30 min)",
    "complexSeizure": "⚠ Complex febrile seizure (≥15 min)",
    "prolonged": "Prolonged — medication was due",
    "sectionWhatHappened": "What happened",
    "ambulanceTitle": "📞 Tell the ambulance",
    "btnShare": "Share / copy summary",
    "btnRestart": "Start over",
    "btnCopied": "✓ Copied to clipboard",
    "reportTitle": "SEIZURE SUMMARY",
    "reportSeparator": "=============",
    "reportDuration": "Duration: {dur}",
    "reportStarted": "Started: {time}",
    "reportObservations": "OBSERVATIONS:",
    "reportBreathRate": "Tap-count breathing rate: {bpm}/min",
    "scriptStart": "My child has had a seizure that lasted <strong>{dur}</strong>. ",
    "scriptFever": "They felt very hot — I think they have a fever. ",
    "scriptOneSide": "The shaking was only on <strong>one side</strong> of the body. ",
    "scriptLittle": "There was very little movement, so I could not tell whether both sides were involved. ",
    "scriptNoBreath": "At the early breathing check, no breathing was seen. ",
    "scriptBreathUnsure": "At the early breathing check, breathing was hard to confirm. ",
    "scriptBreathHard": "Their breathing looked hard work or noisy. ",
    "scriptBreathAbsent": "There were no breaths or there were long pauses in breathing. ",
    "scriptNoResponse": "They did not react to voice or gentle touch. ",
    "scriptWeak": "One side of their body seems weaker now. ",
    "scriptBreathRate": "Breathing rate check was about {bpm} per minute. ",
    "scriptEnd": "They are now in the recovery position.",
    "summaryItems": {
      "side": {
        "both": "Shaking on both sides of body",
        "one": "Shaking on ONE side only — tell ambulance",
        "little": "Very little movement — could not tell whether both sides were involved",
        "unsure": "Side unclear"
      },
      "breathing_now": {
        "yes": "Breathing was seen at the early check",
        "no": "No breathing was seen at the early check",
        "unsure": "Early breathing check was unclear"
      },
      "breathing_rate": {
        "none": "No breaths seen during 15-second check",
        "slow": "Breathing slow (~{bpm}/min)",
        "fast": "Breathing fast (~{bpm}/min)",
        "normal": "Breathing rate ~{bpm}/min"
      },
      "lips": {
        "pink": "Lips were normal / pink colour",
        "blue": "BLUE or grey lips — oxygen concern",
        "unsure": "Lip colour unclear"
      },
      "fever_visible": {
        "hot": "Child felt very hot — likely fever",
        "warm": "Child felt warm",
        "cool": "No obvious fever"
      },
      "breathing_effort": {
        "easy": "Breathing looked easy and steady",
        "hard": "Breathing looked hard work or noisy",
        "absent": "No breaths or long pauses seen"
      },
      "responsiveness": {
        "yes": "Some reaction to voice or touch",
        "no": "No reaction to voice or touch",
        "unsure": "Responsiveness unclear"
      },
      "tone": {
        "floppy": "Body felt mostly floppy",
        "stiff": "Body felt mostly stiff",
        "mixed": "Body tone mixed or unclear"
      },
      "hands_feet": {
        "warm": "Hands and feet felt warm",
        "cold": "Hands and feet felt cool or cold",
        "clammy": "Hands and feet felt very cold or clammy"
      },
      "post_side": {
        "equal": "Both sides equal strength after seizure",
        "weak": "One side WEAKER after seizure — tell ambulance",
        "cant": "Strength not assessed yet"
      },
      "post_alert": {
        "yes": "Child starting to wake up (normal recovery)",
        "no": "Child still unresponsive after seizure"
      }
    },
    "notedAt": "Noted at {time}"
  }
};

// ── State ──────────────────────────────────────────────────────────────────────
let timerInterval = null;
let elapsed = 0;
let startWall = null;
let running = false;
let sessionEnded = false;
let milestonesFired = { 2: false, 15: false, 30: false };
let answers = [];   // { qid, answer, label, elapsed }
let queuedQuestions = [];
let currentQ = null;
let waitingActions = [];
let breathingTimer = null;
let breathingInactivityTimer = null;
let breathingSecondsLeft = 15;
const BREATH_WINDOW_SECONDS = 15;
let breathTapCount = 0;
let breathingStarted = false;
let vitalChecks = {
  breathCountWindow: null,
  breathWindowSeconds: BREATH_WINDOW_SECONDS,
  breathsPerMin: null,
  breathingSeverity: null,
  recordedAt: null
};

// ── i18n init ──────────────────────────────────────────────────────────────────
I18N.register('en', EN);

// Load translations via fetch (falls back silently if offline)
fetch('assets/i18n/es.json')
  .then(r => r.json())
  .then(data => { I18N.register('es', data); })
  .catch(() => { /* es.json not available */ });

fetch('assets/i18n/bg.json')
  .then(r => r.json())
  .then(data => { I18N.register('bg', data); })
  .catch(() => { /* bg.json not available */ });

// Question definition IDs — text is resolved from i18n at render time
const QUESTION_IDS = [
  { id: 'breathing_now', triggerAt: 30, options: ['yes', 'no', 'unsure'] },
  { id: 'lips', triggerAt: 60, options: ['pink', 'blue', 'unsure'] },
  { id: 'breathing_effort', triggerAt: 100, options: ['easy', 'hard', 'absent'] },
  { id: 'still_seizing_2', triggerAt: 120, options: ['yes', 'no'], invertColors: true },
  { id: 'side', triggerAt: 135, options: ['both', 'one', 'little', 'unsure'] },
  { id: 'fever_visible', triggerAt: 300, options: ['hot', 'warm', 'cool'] },
  { id: 'breathing_rate', triggerAt: 340, type: 'breath_counter', options: [] },
  { id: 'responsiveness', triggerAt: 420, options: ['yes', 'no', 'unsure'] },
  { id: 'tone', triggerAt: 480, options: ['floppy', 'stiff', 'mixed'] },
  { id: 'hands_feet', triggerAt: 540, options: ['warm', 'cold', 'clammy'] },
  { id: 'still_seizing_10', triggerAt: 600, options: ['yes', 'no'], invertColors: true },
  { id: 'post_side', triggerAt: null, options: ['equal', 'weak', 'cant'] },
  { id: 'post_alert', triggerAt: null, options: ['yes', 'no'], invertColors: true },
];

// Icon / class mapping for option values
const OPT_META = {
  yes:     { icon: '✓', cls: 'yes' },
  no:      { icon: '!', cls: 'no'  },
  unsure:  { icon: '?', cls: 'unsure' },
  both:    { icon: '✓', cls: 'yes' },
  one:     { icon: '!', cls: 'no'  },
  little:  { icon: '?', cls: 'unsure' },
  pink:    { icon: '✓', cls: 'yes' },
  blue:    { icon: '!', cls: 'no'  },
  hot:     { icon: '✓', cls: 'yes' },
  warm:    { icon: '?', cls: 'unsure' },
  cool:    { icon: '!', cls: 'no'  },
  easy:    { icon: '✓', cls: 'yes' },
  hard:    { icon: '!', cls: 'no'  },
  absent:  { icon: '!', cls: 'no'  },
  floppy:  { icon: '?', cls: 'unsure' },
  stiff:   { icon: '!', cls: 'no'  },
  mixed:   { icon: '?', cls: 'unsure' },
  cold:    { icon: '?', cls: 'unsure' },
  clammy:  { icon: '!', cls: 'no'  },
  equal:   { icon: '✓', cls: 'yes' },
  weak:    { icon: '!', cls: 'no'  },
  cant:    { icon: '?', cls: 'unsure' },
};

// ── Theme switcher ─────────────────────────────────────────────────────────────
function setTheme(mode) {
  // mode: 'light', 'dark', or 'system'
  let effective = mode;
  if (mode === 'system') {
    effective = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', effective);
  // Persist preference
  try {
    const existing = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...existing, themeMode: mode }));
  } catch(e) { /* ignore */ }
  // Update theme button states
  document.querySelectorAll('#settings-theme-row .lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.theme === mode);
  });
}

function applySystemTheme() {
  const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
  if (s.themeMode === 'system') {
    const effective = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', effective);
  }
}

// Listen for system theme changes when in system mode
function initTheme() {
  const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
  const mode = s.themeMode || 'dark'; // default to dark
  setTheme(mode);
  // Hook system theme changes
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}').themeMode === 'system') {
      applySystemTheme();
    }
  });
}

// ── Language switcher ──────────────────────────────────────────────────────────
function switchLanguage(lang) {
  I18N.setLanguage(lang);
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Persist language preference
  try {
    const existing = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...existing, lang }));
  } catch(e) { /* ignore */ }
  // Update html lang attribute
  document.documentElement.lang = lang;
}

function applyTranslations() {
  // Start screen
  document.getElementById('app-title').textContent = I18N.t('app.title');
  document.getElementById('start-subtitle').textContent = I18N.t('start.subtitle');
  document.getElementById('btn-start').textContent = I18N.t('start.startButton');
  document.getElementById('start-note').textContent = I18N.t('start.note');
  document.getElementById('start-disclaimer').textContent = I18N.t('start.disclaimer');

  // Timer strip
  document.querySelector('[data-i18n="timer.duration"]').textContent = I18N.t('timer.duration');
  document.getElementById('btn-stopped').textContent = I18N.t('timer.btnStopped');

  // Waiting screen next-card label
  document.querySelector('[data-i18n="waiting.nextCardLabel"]').textContent = I18N.t('waiting.nextCardLabel');

  // Summary screen static labels
  document.getElementById('sum-title').textContent = I18N.t('summary.title');
  document.getElementById('sum-sub').textContent = I18N.t('summary.subtitle');
  document.getElementById('summary-section-label').textContent = I18N.t('summary.sectionWhatHappened');
  document.getElementById('ambulance-title').textContent = I18N.t('summary.ambulanceTitle');
  document.getElementById('btn-share').childNodes[1].textContent = ' ' + I18N.t('summary.btnShare');
  document.getElementById('btn-restart').textContent = I18N.t('summary.btnRestart');

  // If a question is currently shown, re-render it
  if (currentQ && document.getElementById('screen-question').classList.contains('active')) {
    renderCurrentQuestion();
  }

  // Update timer strip phase
  updateTimerStripPhase();
}

function renderCurrentQuestion() {
  if (!currentQ) return;
  const qid = currentQ.id;
  const qDef = currentQ;

  document.getElementById('q-context').textContent = I18N.t('questions.' + qid + '.context');
  document.getElementById('q-text').textContent = I18N.t('questions.' + qid + '.text');

  const subEl = document.getElementById('q-sub');
  const sub = I18N.t('questions.' + qid + '.sub');
  subEl.textContent = sub;
  subEl.style.display = sub ? 'block' : 'none';

  const opts = document.getElementById('q-options');
  opts.innerHTML = '';

  if (qDef.type === 'breath_counter') {
    opts.innerHTML = `
      <div class="breath-question">
        <div class="breath-help">${I18N.t('questions.breathing_rate.breathHelp')}</div>
        <button class="breath-main-btn" id="breath-main-btn" onclick="tapBreath()">${I18N.t('questions.breathing_rate.breathButton')}</button>
        <div class="vital-row">
          <span class="vital-note" id="breath-countdown">${I18N.t('questions.breathing_rate.breathWaiting')}</span>
          <span class="vital-note" id="breath-tap-count">${I18N.t('questions.breathing_rate.breathCount', { count: 0 })}</span>
        </div>
        <div class="vital-result" id="breath-result">${I18N.t('questions.breathing_rate.breathNoRecorded')}</div>
      </div>`;
    return;
  }

  qDef.options.forEach(opt => {
    const meta = OPT_META[opt.value] || { icon: '?', cls: 'unsure' };
    const cls = qDef.invertColors && meta.cls !== 'unsure'
      ? (meta.cls === 'yes' ? 'no' : meta.cls === 'no' ? 'yes' : meta.cls)
      : meta.cls;
    const btn = document.createElement('button');
    btn.className = 'q-btn ' + cls;
    const label = I18N.t('questions.' + qid + '.options.' + opt.value);
    btn.innerHTML = `<div class="q-btn-icon">${meta.icon}</div><div>${label}</div>`;
    btn.onclick = () => answerQuestion(qDef, opt);
    opts.appendChild(btn);
  });
}

// ── Audio ──────────────────────────────────────────────────────────────────────
let audioCtx = null;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}
function beep(freq, dur, vol, t, type='sine') {
  const ctx = getAudio(), o = ctx.createOscillator(), g = ctx.createGain();
  o.connect(g); g.connect(ctx.destination);
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.01);
  g.gain.setValueAtTime(vol, t + dur - 0.03);
  g.gain.linearRampToValueAtTime(0, t + dur);
  o.start(t); o.stop(t + dur);
}
function chime2() {
  const ctx = getAudio(), t = ctx.currentTime;
  beep(880,0.18,0.22,t); beep(1100,0.18,0.18,t+0.05);
  beep(880,0.18,0.22,t+0.5); beep(1100,0.18,0.18,t+0.55);
}
function alarm3() {
  const ctx = getAudio(), t = ctx.currentTime;
  for(let i=0;i<3;i++){beep(1400,0.14,0.28,t+i*0.22,'square');beep(1000,0.06,0.14,t+i*0.22+0.14,'square');}
  for(let i=0;i<3;i++){beep(1400,0.14,0.28,t+1+i*0.22,'square');beep(1000,0.06,0.14,t+1+i*0.22+0.14,'square');}
}

function updateVitalsTimestamp() {
  vitalChecks.recordedAt = elapsed;
}

function classifyBreathingRate(bpm) {
  if (bpm < 20) return { sev: 'warn', text: I18N.t('banners.breathSlow', { bpm }) };
  if (bpm > 40) return { sev: 'warn', text: I18N.t('banners.breathFast', { bpm }) };
  return { sev: 'ok', text: I18N.t('banners.breathOk', { bpm }) };
}

function renderBreathingResult() {
  const el = document.getElementById('breath-result');
  if (!el) return;
  if (typeof vitalChecks.breathsPerMin !== 'number') {
    el.textContent = I18N.t('questions.breathing_rate.breathNoRecorded');
    return;
  }
  const result = classifyBreathingRate(vitalChecks.breathsPerMin);
  vitalChecks.breathingSeverity = result.sev;
  el.textContent = result.text;
}

function clearBreathingTimers() {
  clearInterval(breathingTimer);
  clearTimeout(breathingInactivityTimer);
  breathingTimer = null;
  breathingInactivityTimer = null;
}

function armBreathingInactivityTimer() {
  clearTimeout(breathingInactivityTimer);
  breathingInactivityTimer = setTimeout(() => {
    if (!currentQ || currentQ.id !== 'breathing_rate') return;
    if (!breathingStarted) {
      vitalChecks.breathCountWindow = 0;
      vitalChecks.breathsPerMin = 0;
    } else if (typeof vitalChecks.breathsPerMin !== 'number') {
      vitalChecks.breathCountWindow = breathTapCount;
      vitalChecks.breathsPerMin = Math.round((breathTapCount * 60) / BREATH_WINDOW_SECONDS);
    }
    updateVitalsTimestamp();
    completeBreathingQuestion();
  }, BREATH_WINDOW_SECONDS * 1000);
}

function tapBreath() {
  if (!currentQ || currentQ.id !== 'breathing_rate') return;
  const countdown = document.getElementById('breath-countdown');
  const countEl = document.getElementById('breath-tap-count');
  const btn = document.getElementById('breath-main-btn');
  if (!countdown || !countEl || !btn) return;

  if (!breathingStarted) {
    breathingStarted = true;
    breathingSecondsLeft = BREATH_WINDOW_SECONDS;
    btn.textContent = I18N.t('questions.breathing_rate.breathsPerMin');
    countdown.textContent = I18N.t('questions.breathing_rate.secondsLeft', { count: BREATH_WINDOW_SECONDS });
    breathingTimer = setInterval(() => {
      breathingSecondsLeft -= 1;
      if (breathingSecondsLeft <= 0) {
        clearBreathingTimers();
        vitalChecks.breathCountWindow = breathTapCount;
        vitalChecks.breathsPerMin = Math.round((breathTapCount * 60) / BREATH_WINDOW_SECONDS);
        updateVitalsTimestamp();
        try { chime2(); } catch(e) {}
        completeBreathingQuestion();
        return;
      }
      countdown.textContent = I18N.t('questions.breathing_rate.secondsLeft', { count: breathingSecondsLeft });
    }, 1000);
  }

  breathTapCount += 1;
  countEl.textContent = I18N.t('questions.breathing_rate.breathCount', { count: breathTapCount });
  armBreathingInactivityTimer();
}

function completeBreathingQuestion() {
  if (!currentQ || currentQ.id !== 'breathing_rate') return;
  clearBreathingTimers();
  const bpm = vitalChecks.breathsPerMin ?? 0;
  let value = 'normal';
  if (bpm <= 0) value = 'none';
  else if (bpm < 20) value = 'slow';
  else if (bpm > 40) value = 'fast';
  const opt = { value, label: `Breathing check (15s tap): ~${bpm}/min` };
  const q = currentQ;
  setTimeout(() => answerQuestion(q, opt), 250);
}

// ── Settings ───────────────────────────────────────────────────────────────────
const SETTINGS_KEY = 'febrile-seizure-settings';
const VERSION_KEY = 'febrile-seizure-settings-version';
const SCHEMA_VERSION = 1;

function readSettings() {
  // Check schema version; clear if mismatched or corrupt.
  const ver = localStorage.getItem(VERSION_KEY);
  if (ver !== String(SCHEMA_VERSION)) {
    if (ver !== null) { /* migrated: clear old schema */ }
    localStorage.removeItem(SETTINGS_KEY);
    localStorage.setItem(VERSION_KEY, String(SCHEMA_VERSION));
    return {};
  }
  try {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
  } catch(e) {
    /* corrupt — reset */
    localStorage.removeItem(SETTINGS_KEY);
    return {};
  }
}

function writeSettings(partial) {
  const existing = readSettings();
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...existing, ...partial }));
}

function showSettings() {
  const modal = document.getElementById('settings-modal');
  modal.classList.add('visible');
  // Restore saved profile data
  try {
    const s = readSettings();
    const ageEl = document.getElementById('settings-age');
    const weightEl = document.getElementById('settings-weight');
    const updatedEl = document.getElementById('settings-updated');
    if (s.age) ageEl.value = s.age;
    if (s.weight) weightEl.value = s.weight;
    if (s.updated) updatedEl.textContent = s.updated;
    else updatedEl.textContent = '—';
  } catch(e) { /* ignore corrupt data */ }
  // Highlight current language
  document.querySelectorAll('#settings-lang-row .lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === I18N.currentLang);
  });
}

function closeSettings() {
  // Persist profile data before closing
  try {
    const ageEl = document.getElementById('settings-age');
    const weightEl = document.getElementById('settings-weight');
    const age = ageEl.value ? Number(ageEl.value) : null;
    const weight = weightEl.value ? Number(weightEl.value) : null;
    if (age !== null || weight !== null) {
      const existing = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
      const updated = new Date().toLocaleString();
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...existing, age, weight, updated }));
    }
  } catch(e) { /* ignore */ }
  const modal = document.getElementById('settings-modal');
  modal.classList.remove('visible');
}

function clearSavedData() {
  if (confirm(I18N.t('settings.confirmClear') || 'Clear all saved data?')) {
    localStorage.removeItem(SETTINGS_KEY);
    document.getElementById('settings-age').value = '';
    document.getElementById('settings-weight').value = '';
    document.getElementById('settings-updated').textContent = '—';
  }
}

// ── Session logic ──────────────────────────────────────────────────────────────
function startSession() {
  try { getAudio().resume(); } catch(e) {}
  startWall = new Date();
  running = true;
  elapsed = 0;
  answers = [];
  milestonesFired = { 2: false, 15: false, 30: false };
  queuedQuestions = [...QUESTION_IDS.filter(q => q.triggerAt !== null)];
  sessionEnded = false;
  clearBreathingTimers();
  breathingSecondsLeft = BREATH_WINDOW_SECONDS;
  breathTapCount = 0;
  breathingStarted = false;
  vitalChecks = {
    breathCountWindow: null,
    breathWindowSeconds: BREATH_WINDOW_SECONDS,
    breathsPerMin: null,
    breathingSeverity: null,
    recordedAt: null
  };
  renderBreathingResult();

  document.getElementById('timer-strip').classList.remove('hidden');
  document.getElementById('milestone-bar').classList.remove('hidden');
  updateTimerStripPhase();
  timerInterval = setInterval(tick, 500);

  showNextQuestion();
}

function tick() {
  elapsed = (Date.now() - startWall.getTime()) / 1000;
  updateTimerStrip();
  checkMilestones();
  checkQueuedQuestions();
}

function fmt(sec) {
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}

function updateTimerStripPhase() {
  const ph = document.getElementById('strip-phase');
  if (elapsed < 120) {
    ph.className = 'strip-phase';
    ph.textContent = I18N.t('timer.phaseObserving');
  } else if (elapsed < 900) {
    ph.className = 'strip-phase phase-warn';
    ph.textContent = I18N.t('timer.phaseMedication');
  } else if (elapsed < 1800) {
    ph.className = 'strip-phase phase-alert';
    ph.textContent = I18N.t('timer.phaseComplex');
  } else {
    ph.className = 'strip-phase phase-alert';
    ph.textContent = I18N.t('timer.phaseStatus');
  }
}

function updateTimerStrip() {
  const el = document.getElementById('strip-timer');
  const ph = document.getElementById('strip-phase');
  const fill = document.getElementById('ms-fill');
  el.textContent = fmt(elapsed);

  const pct = Math.min((elapsed / 1800) * 100, 100);
  fill.style.width = pct + '%';

  if (elapsed < 120) {
    el.className = 'strip-timer';
    updateTimerStripPhase();
    fill.style.background = 'var(--ok)';
  } else if (elapsed < 900) {
    el.className = 'strip-timer phase-warn';
    updateTimerStripPhase();
    fill.style.background = 'var(--warn)';
  } else if (elapsed < 1800) {
    el.className = 'strip-timer phase-alert';
    updateTimerStripPhase();
    fill.style.background = 'var(--alert)';
  } else {
    el.className = 'strip-timer phase-alert';
    updateTimerStripPhase();
    fill.style.background = 'var(--alert)';
  }
}

function checkMilestones() {
  if (!milestonesFired[2] && elapsed >= 120) {
    milestonesFired[2] = true;
    chime2();
    document.querySelectorAll('.ms-tick')[0].classList.add('reached');
    showBanner(I18N.t('milestones.2min.label'), I18N.t('milestones.2min.text'));
  }
  if (!milestonesFired[15] && elapsed >= 900) {
    milestonesFired[15] = true;
    alarm3();
    document.querySelectorAll('.ms-tick')[1].classList.add('reached');
    showBanner(I18N.t('milestones.15min.label'), I18N.t('milestones.15min.text'));
  }
  if (!milestonesFired[30] && elapsed >= 1800) {
    milestonesFired[30] = true;
    alarm3();
    document.querySelectorAll('.ms-tick')[2].classList.add('reached');
    showBanner(I18N.t('milestones.30min.label'), I18N.t('milestones.30min.text'));
  }
}

function checkQueuedQuestions() {
  if (currentQ) return;
  if (document.getElementById('screen-question').classList.contains('active')) return;
  const due = queuedQuestions.find(q => q.triggerAt !== null && elapsed >= q.triggerAt);
  if (due) {
    queuedQuestions = queuedQuestions.filter(q => q !== due);
    showQuestion(due);
  }
}

function showNextQuestion() {
  const due = queuedQuestions.find(q => q.triggerAt !== null && elapsed >= q.triggerAt);
  if (due) {
    queuedQuestions = queuedQuestions.filter(q => q !== due);
    showQuestion(due);
  } else {
    showWaiting();
  }
}

function showQuestion(qDef) {
  clearBreathingTimers();
  breathTapCount = 0;
  breathingStarted = false;
  currentQ = qDef;

  const qid = qDef.id;

  document.getElementById('q-context').textContent = I18N.t('questions.' + qid + '.context');
  document.getElementById('q-text').textContent = I18N.t('questions.' + qid + '.text');

  const subEl = document.getElementById('q-sub');
  const sub = I18N.t('questions.' + qid + '.sub');
  subEl.textContent = sub;
  subEl.style.display = sub ? 'block' : 'none';

  const opts = document.getElementById('q-options');
  opts.innerHTML = '';

  if (qDef.type === 'breath_counter') {
    opts.innerHTML = `
      <div class="breath-question">
        <div class="breath-help">${I18N.t('questions.breathing_rate.breathHelp')}</div>
        <button class="breath-main-btn" id="breath-main-btn" onclick="tapBreath()">${I18N.t('questions.breathing_rate.breathButton')}</button>
        <div class="vital-row">
          <span class="vital-note" id="breath-countdown">${I18N.t('questions.breathing_rate.breathWaiting')}</span>
          <span class="vital-note" id="breath-tap-count">${I18N.t('questions.breathing_rate.breathCount', { count: 0 })}</span>
        </div>
        <div class="vital-result" id="breath-result">${I18N.t('questions.breathing_rate.breathNoRecorded')}</div>
      </div>`;
    armBreathingInactivityTimer();
    showScreen('screen-question');
    return;
  }

  qDef.options.forEach(value => {
    const meta = OPT_META[value] || { icon: '?', cls: 'unsure' };
    const cls = qDef.invertColors && meta.cls !== 'unsure'
      ? (meta.cls === 'yes' ? 'no' : meta.cls === 'no' ? 'yes' : meta.cls)
      : meta.cls;
    const btn = document.createElement('button');
    btn.className = 'q-btn ' + cls;
    const label = I18N.t('questions.' + qid + '.options.' + value);
    btn.innerHTML = `<div class="q-btn-icon">${meta.icon}</div><div>${label}</div>`;
    btn.onclick = () => answerQuestion(qDef, { value, label });
    opts.appendChild(btn);
  });
  showScreen('screen-question');
}

function answerQuestion(q, opt) {
  answers.push({ qid: q.id, answer: opt.value, label: opt.label, elapsed: elapsed });
  currentQ = null;

  handleAnswer(q.id, opt.value);
}

function seizureStopped() {
  if (sessionEnded) return;
  sessionEnded = true;
  clearInterval(timerInterval);
  clearBreathingTimers();
  running = false;
  const stopTime = elapsed;

  document.querySelector('.btn-stopped').style.display = 'none';

  currentQ = null;
  queuedQuestions = [];

  const postQs = QUESTION_IDS.filter(q => q.triggerAt === null);
  let delay = 0;
  postQs.forEach(q => {
    setTimeout(() => showQuestion(q), delay);
    delay += 100;
  });
  window._stopTime = stopTime;
}

function handleAnswer(qid, value) {
  if ((qid === 'still_seizing_2' || qid === 'still_seizing_10') && value === 'no') {
    seizureStopped();
    return;
  }

  const postIds = QUESTION_IDS.filter(q => q.triggerAt === null).map(q => q.id);
  if (postIds.includes(qid)) {
    const answeredPost = answers.filter(a => postIds.includes(a.qid));
    if (answeredPost.length >= postIds.length) {
      buildSummary(window._stopTime ?? elapsed);
      return;
    } else {
      const nextPost = QUESTION_IDS.find(q => q.triggerAt === null && !answers.find(a => a.qid === q.id));
      if (nextPost) { showQuestion(nextPost); return; }
      else { buildSummary(window._stopTime ?? elapsed); return; }
    }
  }

  if (qid === 'breathing_now' && value === 'no') {
    showBanner(I18N.t('banners.notBreathing.label'), I18N.t('banners.notBreathing.text'));
  }
  if (qid === 'breathing_now' && value === 'unsure') {
    showBanner(I18N.t('banners.breathingUnclear.label'), I18N.t('banners.breathingUnclear.text'));
  }

  if (qid === 'breathing_rate' && value === 'none') {
    showBanner(I18N.t('banners.notBreathing.label'), I18N.t('banners.notBreathing.text'));
  }
  if (qid === 'breathing_rate' && (value === 'slow' || value === 'fast')) {
    showBanner(I18N.t('banners.breathingConcern.label'), I18N.t('banners.breathingConcern.text'));
  }

  if (qid === 'lips' && value === 'blue') {
    showBanner(I18N.t('banners.blueLips.label'), I18N.t('banners.blueLips.text'));
  }

  if (qid === 'side' && value === 'one') {
    showBanner(I18N.t('banners.oneSided.label'), I18N.t('banners.oneSided.text'));
  }

  if (qid === 'breathing_effort' && value === 'absent') {
    showBanner(I18N.t('banners.breathingEmergency.label'), I18N.t('banners.breathingEmergency.text'));
  }

  if (qid === 'breathing_effort' && value === 'hard') {
    showBanner(I18N.t('banners.breathingHard.label'), I18N.t('banners.breathingHard.text'));
  }

  if (qid === 'responsiveness' && value === 'no') {
    showBanner(I18N.t('banners.noResponse.label'), I18N.t('banners.noResponse.text'));
  }

  showNextQuestion();
}

function getWaitingPhase() {
  let phaseKey = 'phase0';
  if (elapsed < 120) phaseKey = 'phase0';
  else if (elapsed < 900) phaseKey = 'phase1';
  else phaseKey = 'phase2';

  // Resolve from the current i18n dictionary (complex object, not a leaf string)
  const dict = I18N.dicts[I18N.current] || I18N.dicts[I18N.fallback];
  const phase = (dict && dict.waiting && dict.waiting[phaseKey]) || EN.waiting[phaseKey];
  return phase;
}

function showWaiting() {
  const nextQ = queuedQuestions
    .filter(q => q.triggerAt !== null)
    .sort((a,b) => a.triggerAt - b.triggerAt)[0];

  const phase = getWaitingPhase();

  document.getElementById('w-emoji').textContent = phase.emoji;
  document.getElementById('w-title').textContent = phase.title;
  document.getElementById('w-body').textContent  = phase.body;

  const actEl = document.getElementById('w-actions');
  actEl.innerHTML = '';
  phase.actions.forEach((a, i) => {
    actEl.innerHTML += `<div class="action-item"><div class="action-num">${i+1}</div><div>${a}</div></div>`;
  });

  const nextCard = document.getElementById('next-card');
  if (nextQ) {
    nextCard.style.display = 'block';
    const mins = Math.round(nextQ.triggerAt / 60);
    document.getElementById('next-card-text').textContent =
      I18N.t('waiting.nextCardAt', { time: mins < 1 ? '1 min' : mins + ' min' });
  } else {
    nextCard.style.display = 'none';
  }

  showScreen('screen-waiting');
}

function showBanner(label, text) {
  document.getElementById('banner-label').textContent = label;
  document.getElementById('banner-text').textContent  = text;
  const b = document.getElementById('alert-banner');
  b.classList.add('visible');
  clearTimeout(b._timeout);
  b._timeout = setTimeout(closeBanner, 8000);
}
function closeBanner() {
  document.getElementById('alert-banner').classList.remove('visible');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── Summary ────────────────────────────────────────────────────────────────────
function buildSummary(seizureDuration) {
  const durStr = fmt(seizureDuration);
  document.getElementById('sum-duration').textContent = durStr;

  const mins = seizureDuration / 60;
  let durLabel = I18N.t('summary.durationLabel');
  if (mins >= 30)     durLabel = I18N.t('summary.statusEpilepticus');
  else if (mins >= 15) durLabel = I18N.t('summary.complexSeizure');
  else if (mins >= 2)  durLabel = I18N.t('summary.prolonged');
  document.getElementById('sum-dur-label').textContent = durLabel;

  const itemMap = {
    'side': {
      label: a => I18N.t('summary.summaryItems.side.' + a, { default: I18N.t('summary.summaryItems.side.unsure') }),
      sev: a => a === 'one' ? 'alert' : a === 'little' ? 'warn' : 'ok'
    },
    'breathing_now': {
      label: a => I18N.t('summary.summaryItems.breathing_now.' + a, { default: I18N.t('summary.summaryItems.breathing_now.unsure') }),
      sev: a => a === 'yes' ? 'ok' : a === 'no' ? 'alert' : 'warn'
    },
    'breathing_rate': {
      label: a => {
        const bpm = vitalChecks.breathsPerMin;
        if (a === 'none') return I18N.t('summary.summaryItems.breathing_rate.none');
        if (a === 'slow') return I18N.t('summary.summaryItems.breathing_rate.slow', { bpm });
        if (a === 'fast') return I18N.t('summary.summaryItems.breathing_rate.fast', { bpm });
        return I18N.t('summary.summaryItems.breathing_rate.normal', { bpm });
      },
      sev: a => a === 'none' ? 'alert' : (a === 'slow' || a === 'fast') ? 'warn' : 'ok'
    },
    'lips': {
      label: a => I18N.t('summary.summaryItems.lips.' + a, { default: I18N.t('summary.summaryItems.lips.unsure') }),
      sev: a => a === 'blue' ? 'alert' : a === 'unsure' ? 'warn' : 'ok'
    },
    'fever_visible': {
      label: a => I18N.t('summary.summaryItems.fever_visible.' + a, { default: I18N.t('summary.summaryItems.fever_visible.cool') }),
      sev: a => a === 'hot' ? 'warn' : 'ok'
    },
    'breathing_effort': {
      label: a => I18N.t('summary.summaryItems.breathing_effort.' + a, { default: '' }),
      sev: a => a === 'easy' ? 'ok' : a === 'hard' ? 'warn' : 'alert'
    },
    'responsiveness': {
      label: a => I18N.t('summary.summaryItems.responsiveness.' + a, { default: I18N.t('summary.summaryItems.responsiveness.unsure') }),
      sev: a => a === 'no' ? 'warn' : a === 'unsure' ? 'warn' : 'ok'
    },
    'tone': {
      label: a => I18N.t('summary.summaryItems.tone.' + a, { default: I18N.t('summary.summaryItems.tone.mixed') }),
      sev: a => a === 'stiff' ? 'warn' : 'ok'
    },
    'hands_feet': {
      label: a => I18N.t('summary.summaryItems.hands_feet.' + a, { default: I18N.t('summary.summaryItems.hands_feet.cold') }),
      sev: a => a === 'warm' ? 'ok' : 'warn'
    },
    'post_side': {
      label: a => I18N.t('summary.summaryItems.post_side.' + a, { default: I18N.t('summary.summaryItems.post_side.cant') }),
      sev: a => a === 'weak' ? 'alert' : 'ok'
    },
    'post_alert': {
      label: a => I18N.t('summary.summaryItems.post_alert.' + a, { default: I18N.t('summary.summaryItems.post_alert.no') }),
      sev: a => a === 'no' ? 'alert' : 'ok'
    },
  };

  const container = document.getElementById('sum-items');
  container.innerHTML = '';
  answers.forEach(ans => {
    const map = itemMap[ans.qid];
    if (!map) return;
    const label = map.label(ans.answer);
    const sev   = map.sev(ans.answer);
    const time  = fmt(ans.elapsed);
    container.innerHTML += `
      <div class="summary-item">
        <div class="si-dot si-${sev}"></div>
        <div><div style="font-weight:500">${label}</div><div style="font-size:12px;color:var(--text3);margin-top:2px">${I18N.t('summary.notedAt', { time })}</div></div>
      </div>`;
  });

  // Build ambulance script
  const sideAns = answers.find(a => a.qid === 'side');
  const breathingNowAns = answers.find(a => a.qid === 'breathing_now');
  const feverAns = answers.find(a => a.qid === 'fever_visible');
  const breathingEffortAns = answers.find(a => a.qid === 'breathing_effort');
  const responsivenessAns = answers.find(a => a.qid === 'responsiveness');
  const postSideAns = answers.find(a => a.qid === 'post_side');

  let script = I18N.t('summary.scriptStart', { dur: durStr });
  script += feverAns?.answer === 'hot' ? I18N.t('summary.scriptFever') : '';
  script += sideAns?.answer === 'one' ? I18N.t('summary.scriptOneSide') : '';
  script += sideAns?.answer === 'little' ? I18N.t('summary.scriptLittle') : '';
  script += breathingNowAns?.answer === 'no' ? I18N.t('summary.scriptNoBreath') : '';
  script += breathingNowAns?.answer === 'unsure' ? I18N.t('summary.scriptBreathUnsure') : '';
  script += breathingEffortAns?.answer === 'hard' ? I18N.t('summary.scriptBreathHard') : '';
  script += breathingEffortAns?.answer === 'absent' ? I18N.t('summary.scriptBreathAbsent') : '';
  script += responsivenessAns?.answer === 'no' ? I18N.t('summary.scriptNoResponse') : '';
  script += postSideAns?.answer === 'weak' ? I18N.t('summary.scriptWeak') : '';
  if (typeof vitalChecks.breathsPerMin === 'number') script += I18N.t('summary.scriptBreathRate', { bpm: vitalChecks.breathsPerMin }) + ' ';
  script += '"' + I18N.t('summary.scriptEnd') + '"';
  document.getElementById('ambulance-script').innerHTML = script;

  showScreen('screen-summary');
}

function shareReport() {
  const lines = [I18N.t('summary.reportTitle'), I18N.t('summary.reportSeparator')];
  const dur = document.getElementById('sum-duration').textContent;
  lines.push(I18N.t('summary.reportDuration', { dur }));
  lines.push(I18N.t('summary.reportStarted', { time: startWall ? startWall.toLocaleTimeString() : 'unknown' }));
  lines.push('');
  lines.push(I18N.t('summary.reportObservations'));
  answers.forEach(a => {
    const time = fmt(a.elapsed);
    lines.push(`[${time}] ${a.label}`);
  });
  if (typeof vitalChecks.breathsPerMin === 'number') lines.push(I18N.t('summary.reportBreathRate', { bpm: vitalChecks.breathsPerMin }));
  lines.push('');
  lines.push(document.getElementById('ambulance-script').innerText);
  const text = lines.join('\n');
  if (navigator.share) {
    navigator.share({ title: I18N.t('summary.title'), text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('btn-share');
      const orig = btn.innerHTML;
      btn.innerHTML = I18N.t('summary.btnCopied');
      setTimeout(() => btn.innerHTML = orig, 2000);
    });
  } else {
    alert(text);
  }
}

function restart() {
  clearInterval(timerInterval);
  clearBreathingTimers();
  elapsed = 0; running = false; sessionEnded = false; currentQ = null;
  answers = []; queuedQuestions = [];
  milestonesFired = { 2: false, 15: false, 30: false };
  breathingSecondsLeft = BREATH_WINDOW_SECONDS;
  breathTapCount = 0;
  breathingStarted = false;
  vitalChecks = {
    breathCountWindow: null,
    breathWindowSeconds: BREATH_WINDOW_SECONDS,
    breathsPerMin: null,
    breathingSeverity: null,
    recordedAt: null
  };
  window._stopTime = null;
  document.querySelector('.btn-stopped').style.display = '';
  document.getElementById('timer-strip').classList.add('hidden');
  document.getElementById('milestone-bar').classList.add('hidden');
  document.getElementById('alert-banner').classList.remove('visible');
  document.getElementById('strip-timer').textContent = '00:00';
  document.getElementById('ms-fill').style.width = '0%';
  document.querySelectorAll('.ms-tick').forEach(t => t.classList.remove('reached'));
  updateTimerStripPhase();
  renderBreathingResult();
  showScreen('screen-start');
}

// ── Init ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language preference before applying translations
  try {
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    if (s.lang && I18N.dicts[s.lang]) {
      I18N.setLanguage(s.lang);
    }
  } catch(e) { /* ignore corrupt data */ }
  applyTranslations();
});
