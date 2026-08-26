document.getElementById('footerYear').textContent = new Date().getFullYear();

// --- i18n: per-app copy of the shared convention (see
// all-my-games/.claude/skills/i18n-subpath-app.md) — deliberately
// duplicated rather than loaded from a shared file, so this app
// never depends on another app's deploy/cache state.
const I18N_STORAGE_KEY = 'dirdam-lang';
const SUPPORTED_LANGS = ['en', 'es', 'ja'];
const LANG_LABELS = { en: 'EN', es: 'ES', ja: '日本語' };

const STRINGS = {
    en: {
        browserTabTitle: 'Stroboscopic Effect',
        pageTitle: 'Stroboscopic Effect',
        subtitle: 'Why spinning wheels appear to freeze, slow down, or reverse',
        introHtml: 'A wheel with <strong>N identical spokes</strong> repeats its own appearance N times per revolution, so what a strobe light &mdash; or a video camera\'s frame rate &mdash; actually samples is that repeating <strong>pattern</strong>, not the wheel\'s raw spin. Change the spoke count, rotation speed, or strobe rate below and watch the wheel on the right appear to <strong>freeze, creep forward, or spin backward</strong>, even though the real wheel on the left never does.',
        legendTrueRotation: 'True rotation',
        legendApparentRotation: 'Apparent rotation',
        trueMotionCaption: 'True motion',
        strobedViewCaption: 'Strobed view',
        spokeCountLabel: 'Spoke count (N)',
        rotationSpeedLabel: 'Rotation speed (RPM)',
        strobeFrequencyLabel: 'Strobe / camera rate (Hz)',
        strobeHint: 'Adjusting this resumes the strobe if it was off',
        presetsLabel: 'Presets',
        presetSlowForward: 'Slow forward',
        presetFrozen: 'Frozen',
        presetSlowReverse: 'Slow reverse',
        strobeToggleLabel: 'Activate strobe',
        controlPlay: 'Play',
        controlPause: 'Pause',
        controlReset: 'Reset',
        howToInterpretTitle: 'How to interpret',
        howToInterpretHtml1: 'The left wheel always spins at its <strong>real, continuous speed</strong>, no matter what the strobe is doing. The right wheel only updates at each <strong>strobe flash</strong> (the instants where the wheel is actually seen by the eye or a camera sensor under a flickering light.)',
        howToInterpretHtml2: 'Because the spokes are identical, the wheel looks exactly the same every <strong>1&frasl;N</strong> of a turn, so what matters isn\'t the strobe frequency versus the wheel\'s rotation speed, it\'s the strobe frequency versus that faster repeating <strong>pattern</strong>. Match them closely and the wheel appears to freeze; drift the strobe rate up or down by a little and it creeps forward or slides into reverse.',
        seeMoreTools: 'See more tools',
        viewSource: 'View source',
    },
    es: {
        browserTabTitle: 'Efecto estroboscópico',
        pageTitle: 'Efecto estroboscópico',
        subtitle: 'Por qué las ruedas giratorias parecen congelarse, ralentizarse o invertirse',
        introHtml: 'Una rueda con <strong>N radios idénticos</strong> repite su propia apariencia N veces por vuelta, así que lo que una luz estroboscópica &mdash; o la frecuencia de fotogramas de una cámara de vídeo &mdash; realmente capta es ese <strong>patrón</strong> repetido, no el giro real de la rueda. Cambia el número de radios, la velocidad de giro o la frecuencia del estroboscopio a continuación y observa cómo la rueda de la derecha parece <strong>congelarse, avanzar lentamente o girar hacia atrás</strong>, aunque la rueda real de la izquierda nunca lo haga.',
        legendTrueRotation: 'Rotación real',
        legendApparentRotation: 'Rotación aparente',
        trueMotionCaption: 'Movimiento real',
        strobedViewCaption: 'Vista estroboscópica',
        spokeCountLabel: 'Número de radios (N)',
        rotationSpeedLabel: 'Velocidad de giro (RPM)',
        strobeFrequencyLabel: 'Frecuencia de estroboscopio / cámara (Hz)',
        strobeHint: 'Ajustar esto reactiva el estroboscopio si estaba apagado',
        presetsLabel: 'Preajustes',
        presetSlowForward: 'Avance lento',
        presetFrozen: 'Congelada',
        presetSlowReverse: 'Retroceso lento',
        strobeToggleLabel: 'Activar estroboscopio',
        controlPlay: 'Reproducir',
        controlPause: 'Pausar',
        controlReset: 'Reiniciar',
        howToInterpretTitle: 'Cómo interpretarlo',
        howToInterpretHtml1: 'La rueda de la izquierda siempre gira a su <strong>velocidad real y continua</strong>, sin importar lo que haga el estroboscopio. La rueda de la derecha sólo se actualiza en cada <strong>destello estroboscópico</strong> (los instantes en los que el ojo o el sensor de una cámara realmente ven la rueda bajo una luz parpadeante).',
        howToInterpretHtml2: 'Como los radios son idénticos, la rueda se ve exactamente igual cada <strong>1&frasl;N</strong> de vuelta, así que lo que importa no es la frecuencia del estroboscopio frente a la velocidad de giro de la rueda, sino la frecuencia del estroboscopio frente a ese <strong>patrón</strong> que se repite más rápido. Si coinciden de cerca, la rueda parece congelarse; si desplazas un poco la frecuencia del estroboscopio hacia arriba o hacia abajo, avanza lentamente o retrocede.',
        seeMoreTools: 'Ver más herramientas',
        viewSource: 'Ver código fuente',
    },
    ja: {
        browserTabTitle: 'ストロボ効果',
        pageTitle: 'ストロボ効果',
        subtitle: '回転する車輪が止まって見えたり、遅く見えたり、逆回転して見えたりする理由',
        introHtml: '<strong>N本の同じスポーク</strong>を持つ車輪は、1回転の間にN回、同じ見た目を繰り返します。そのため、ストロボライトやビデオカメラのフレームレートが実際にサンプリングしているのは、車輪そのものの回転ではなく、この繰り返される<strong>パターン</strong>です。以下でスポークの本数、回転速度、ストローブの周波数を変えると、右側の車輪が<strong>静止したり、ゆっくり前に進んだり、逆回転したり</strong>して見える様子を観察できます。左側の本当の車輪はそのようなことは決してしていないのに、です。',
        legendTrueRotation: '実際の回転',
        legendApparentRotation: '見かけの回転',
        trueMotionCaption: '実際の動き',
        strobedViewCaption: 'ストロボで見た様子',
        spokeCountLabel: 'スポークの本数 (N)',
        rotationSpeedLabel: '回転速度 (RPM)',
        strobeFrequencyLabel: 'ストロボ・カメラの周波数 (Hz)',
        strobeHint: 'これを調整するとストロボが停止していても再開します',
        presetsLabel: 'プリセット',
        presetSlowForward: 'ゆっくり正転',
        presetFrozen: '静止',
        presetSlowReverse: 'ゆっくり逆転',
        strobeToggleLabel: 'ストロボを有効にする',
        controlPlay: '再生',
        controlPause: '一時停止',
        controlReset: 'リセット',
        howToInterpretTitle: '読み解き方',
        howToInterpretHtml1: '左の車輪は、ストロボが何をしていても常に<strong>実際の連続した速度</strong>で回転しています。右の車輪は<strong>ストロボの閃光</strong>が起きた瞬間にしか更新されません(それは、点滅する光の下で人の目やカメラのセンサーが実際に車輪を見ている瞬間です)。',
        howToInterpretHtml2: 'スポークはどれも同じ形なので、車輪は<strong>1&frasl;N</strong>回転するごとに全く同じ見た目になります。つまり重要なのは、ストロボの周波数と車輪の回転速度の関係ではなく、ストロボの周波数とこのより速く繰り返される<strong>パターン</strong>との関係です。両者が近ければ車輪は静止して見え、ストロボの周波数を少しだけ上下にずらすと、ゆっくり前に進んだり、逆回転しているように見えたりします。',
        seeMoreTools: '他のツールを見る',
        viewSource: 'ソースを見る',
    },
};

function detectInitialLang() {
    const urlLang = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED_LANGS.includes(urlLang)) return urlLang;
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (SUPPORTED_LANGS.includes(stored)) return stored;
    const browserLang = (navigator.language || 'en').slice(0, 2);
    return SUPPORTED_LANGS.includes(browserLang) ? browserLang : 'en';
}

let currentLang = detectInitialLang();
const langChangeListeners = [];

function getLang() { return currentLang; }

function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang) || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(I18N_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyStaticDict();
    langChangeListeners.forEach((fn) => fn(lang));
}

function onLangChange(fn) { langChangeListeners.push(fn); }

function t(key) {
    return STRINGS[currentLang]?.[key] ?? STRINGS.en?.[key] ?? key;
}

function applyStaticDict() {
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
        el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const val = t(el.getAttribute('data-i18n'));
        const attr = el.getAttribute('data-i18n-attr');
        attr ? el.setAttribute(attr, val) : (el.textContent = val);
    });
    updatePlayPauseUI();
}

const langToggleContainer = document.getElementById('langToggle');
function renderLangToggle() {
    langToggleContainer.innerHTML = '';
    SUPPORTED_LANGS.forEach((lang) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = LANG_LABELS[lang] || lang.toUpperCase();
        btn.setAttribute('aria-label', `Switch language to ${lang}`);
        btn.setAttribute('aria-pressed', String(lang === getLang()));
        btn.addEventListener('click', () => setLang(lang));
        langToggleContainer.appendChild(btn);
    });
}
onLangChange(renderLangToggle);

document.documentElement.lang = currentLang;
renderLangToggle();

// --- Stroboscopic effect physics -----------------------------------
// Closed-form kinematics — angle(t) = 2π·f_rotation·t — unlike an ODE,
// this has an exact solution, no integration needed. The pedagogical
// crux: N identical spokes make the wheel's visible PATTERN repeat N
// times per revolution, so the relevant frequency for aliasing is
// f_pattern = N·f_rotation, not the raw rotation frequency — this is
// why real wagon wheels/helicopter rotors do surprising things tied
// to spoke count, not just rotation-speed-vs-frame-rate mismatch.
let N = 8;
let rotationRPM = 300;
let strobeHz = 39;
let strobeEnabled = true;
let elapsedSimTime = 0;
let nextStrobeTime = 0;
let trueAngle = 0, strobedAngle = 0;
let playing = false, rafId = null;
let currentPresetKey = null;

const rotationHz = () => rotationRPM / 60;
const patternHz = () => N * rotationHz();
const trueAngleAt = (time) => 2 * Math.PI * rotationHz() * time;

function apparentHz() {
    const fp = patternHz();
    if (!strobeEnabled) return fp;
    const fs = strobeHz;
    return fp - Math.round(fp / fs) * fs;
}
const apparentRPM = () => (apparentHz() / Math.max(N, 1)) * 60;

const PRESETS = {
    slowForward: { N: 8, rpm: 300, strobeHz: 39 },
    frozen: { N: 8, rpm: 300, strobeHz: 40 },
    slowReverse: { N: 8, rpm: 300, strobeHz: 41 },
};
const PRESET_KEYS = { slowForward: 'presetSlowForward', frozen: 'presetFrozen', slowReverse: 'presetSlowReverse' };

// --- Fields: slider + synced number input -------------------------
function bindField(sliderEl, numberEl, onChange) {
    function apply(value) {
        sliderEl.value = value;
        if (document.activeElement !== numberEl) numberEl.value = value;
        onChange(parseFloat(value));
    }
    sliderEl.addEventListener('input', () => apply(sliderEl.value));
    numberEl.addEventListener('input', () => {
        const v = parseFloat(numberEl.value);
        if (!Number.isNaN(v)) apply(v);
    });
    return apply;
}

const ACCENT_2_HEX = '#e8631c';
const TRACK_GRAY = '#d9d9d9';

function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function lerpColor(hexA, hexB, frac) {
    const a = hexToRgb(hexA), b = hexToRgb(hexB);
    const mix = a.map((c, i) => Math.round(c + (b[i] - c) * frac));
    return `rgb(${mix[0]}, ${mix[1]}, ${mix[2]})`;
}

const solidColor = (hex) => () => hex;

function updateSliderTrack(sliderEl, colorAtFraction, value) {
    const min = parseFloat(sliderEl.min), max = parseFloat(sliderEl.max);
    const pct = ((value - min) / (max - min)) * 100;
    const leftColor = colorAtFraction(0);
    const cutoffColor = colorAtFraction(pct / 100);
    sliderEl.style.background =
        `linear-gradient(to right, ${leftColor} 0%, ${cutoffColor} ${pct}%, ${TRACK_GRAY} ${pct}%, ${TRACK_GRAY} 100%)`;
}

const spokeSlider = document.getElementById('spokeSlider');
const rpmSlider = document.getElementById('rpmSlider');
const strobeSlider = document.getElementById('strobeSlider');
const fillColor = solidColor(ACCENT_2_HEX);

const setSpokes = bindField(spokeSlider, document.getElementById('spokeNumber'), (v) => {
    N = Math.max(1, Math.round(v));
    syncPresetHighlight();
    updateSliderTrack(spokeSlider, fillColor, v);
});
const setRpm = bindField(rpmSlider, document.getElementById('rpmNumber'), (v) => {
    rotationRPM = v;
    syncPresetHighlight();
    updateSliderTrack(rpmSlider, fillColor, v);
});
const setStrobe = bindField(strobeSlider, document.getElementById('strobeNumber'), (v) => {
    strobeHz = Math.round(v);
    strobeEnabled = true;
    syncPresetHighlight();
    updateStrobeToggleUI();
    updateSliderTrack(strobeSlider, fillColor, v);
});

function matchesPreset(p) {
    const eps = 1e-6;
    return strobeEnabled && N === p.N && Math.abs(rotationRPM - p.rpm) < eps
        && Math.abs(strobeHz - p.strobeHz) < eps;
}

function syncPresetHighlight() {
    currentPresetKey = Object.keys(PRESETS).find((k) => matchesPreset(PRESETS[k])) || null;
    renderPresetButtons();
}

const presetButtonsContainer = document.getElementById('presetButtons');
function renderPresetButtons() {
    presetButtonsContainer.innerHTML = '';
    Object.keys(PRESETS).forEach((key) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = t(PRESET_KEYS[key]);
        btn.className = key === currentPresetKey ? 'active' : '';
        btn.addEventListener('click', () => applyPreset(key));
        presetButtonsContainer.appendChild(btn);
    });
}
onLangChange(renderPresetButtons);

function applyPreset(key) {
    const p = PRESETS[key];
    setSpokes(p.N);
    setRpm(p.rpm);
    strobeSlider.value = p.strobeHz;
    document.getElementById('strobeNumber').value = p.strobeHz;
    strobeHz = p.strobeHz;
    strobeEnabled = true;
    updateSliderTrack(strobeSlider, fillColor, p.strobeHz);
    syncPresetHighlight();
    updateStrobeToggleUI();
    resetSim({ resume: true });
}

// --- Strobe on/off switch (a plain binary toggle, not itself a
// "preset" of N/RPM/strobeHz values — see phyllotaxis's .switch
// pattern for the reference iOS/iPadOS-style toggle) -----------------
const strobeToggleBtn = document.getElementById('strobeToggle');
function updateStrobeToggleUI() {
    strobeToggleBtn.setAttribute('aria-checked', String(strobeEnabled));
}
strobeToggleBtn.addEventListener('click', () => {
    strobeEnabled = !strobeEnabled;
    if (!strobeEnabled) {
        strobedAngle = trueAngle;
    } else {
        nextStrobeTime = elapsedSimTime;
    }
    syncPresetHighlight();
    updateStrobeToggleUI();
    renderWheels();
    updateLegendReadouts();
});

// --- Canvas rendering ------------------------------------------------
const trueCanvas = document.getElementById('trueCanvas');
const strobedCanvas = document.getElementById('strobedCanvas');
const flashOverlay = document.getElementById('flashOverlay');
let trueCtx = null, strobedCtx = null;
let trueSize = 0, strobedSize = 0;

function resizeWheelCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx, size: rect.width };
}

function resizeWheels() {
    const t1 = resizeWheelCanvas(trueCanvas);
    trueCtx = t1.ctx; trueSize = t1.size;
    const s1 = resizeWheelCanvas(strobedCanvas);
    strobedCtx = s1.ctx; strobedSize = s1.size;
    renderWheels();
}
window.addEventListener('resize', resizeWheels);

function wheelColors() {
    const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        && document.documentElement.getAttribute('data-theme') !== 'light';
    return dark
        ? { tire: '#111214', rim: '#7d8288', spoke: '#5a5f64', hub: '#111214', dot: '#ff7a3d' }
        : { tire: '#2b2f33', rim: '#9aa0a6', spoke: '#4d5257', hub: '#2b2f33', dot: '#e8631c' };
}

function drawWheel(ctx, size, angle) {
    if (!ctx || !size) return;
    const colors = wheelColors();
    const cx = size / 2, cy = size / 2;
    const outerR = size * 0.46;
    const tireW = size * 0.07;
    const rimR = outerR - tireW;
    const hubR = size * 0.045;

    ctx.clearRect(0, 0, size, size);

    ctx.beginPath();
    ctx.arc(cx, cy, outerR - tireW / 2, 0, 2 * Math.PI);
    ctx.strokeStyle = colors.tire;
    ctx.lineWidth = tireW;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, rimR, 0, 2 * Math.PI);
    ctx.strokeStyle = colors.rim;
    ctx.lineWidth = Math.max(1.5, size * 0.012);
    ctx.stroke();

    for (let k = 0; k < N; k++) {
        const a = angle + k * 2 * Math.PI / N;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * rimR, cy + Math.sin(a) * rimR);
        ctx.strokeStyle = colors.spoke;
        ctx.lineWidth = Math.max(2, size * 0.022);
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(cx, cy, hubR, 0, 2 * Math.PI);
    ctx.fillStyle = colors.hub;
    ctx.fill();

    // Reference "valve stem" dot at spoke k=0 — a legibility aid so
    // drift is visually confirmable, not the sole mechanism (the
    // numeric readout/direction badge is the authoritative answer).
    const dotR = Math.max(2.5, size * 0.022);
    const dx = cx + Math.cos(angle) * rimR, dy = cy + Math.sin(angle) * rimR;
    ctx.beginPath();
    ctx.arc(dx, dy, dotR, 0, 2 * Math.PI);
    ctx.fillStyle = colors.dot;
    ctx.fill();
}

function renderWheels() {
    drawWheel(trueCtx, trueSize, trueAngle);
    drawWheel(strobedCtx, strobedSize, strobedAngle);
}

function triggerFlashPulse() {
    flashOverlay.style.transition = 'none';
    flashOverlay.style.opacity = '0.45';
    requestAnimationFrame(() => {
        flashOverlay.style.transition = 'opacity 250ms ease-out';
        flashOverlay.style.opacity = '0';
    });
}

// --- Legend / per-wheel readouts --------------------------------------
function updateLegendReadouts() {
    document.getElementById('trueRotationValue').textContent = rotationRPM.toFixed(0);
    const aRpm = apparentRPM();
    document.getElementById('apparentRotationValue').textContent = (aRpm >= 0 ? '+' : '') + aRpm.toFixed(0);
}

// --- Continuous simulation loop ---------------------------------------
// Adapts the rAF-accumulator pattern used elsewhere in this app family:
// here there's no ODE to integrate (closed-form angle instead), so the
// loop's job is to advance the true angle and detect which strobe-flash
// instants fall inside the elapsed time, not to step a fixed integrator.
function frame(ts) {
    if (frame.lastTs === undefined) frame.lastTs = ts;
    let dtMs = ts - frame.lastTs;
    frame.lastTs = ts;
    dtMs = Math.min(dtMs, 250);
    elapsedSimTime += dtMs / 1000;
    trueAngle = trueAngleAt(elapsedSimTime);

    if (strobeEnabled) {
        const period = 1 / strobeHz;
        let guard = 0;
        while (nextStrobeTime <= elapsedSimTime && guard++ < 500) {
            strobedAngle = trueAngleAt(nextStrobeTime);
            triggerFlashPulse();
            nextStrobeTime += period;
        }
    } else {
        strobedAngle = trueAngle;
    }

    renderWheels();
    updateLegendReadouts();
    if (playing) rafId = requestAnimationFrame(frame);
}

const playPauseBtn = document.getElementById('playPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg>';
const ICON_PAUSE = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><rect x="14" y="3" width="5" height="18" rx="1" /><rect x="5" y="3" width="5" height="18" rx="1" /></svg>';

function updatePlayPauseUI() {
    playPauseBtn.innerHTML = (playing ? ICON_PAUSE : ICON_PLAY) + '<span>' + t(playing ? 'controlPause' : 'controlPlay') + '</span>';
    playPauseBtn.setAttribute('aria-label', t(playing ? 'controlPause' : 'controlPlay'));
}

function play() {
    if (playing) return;
    playing = true;
    updatePlayPauseUI();
    frame.lastTs = undefined;
    rafId = requestAnimationFrame(frame);
}

function pause() {
    playing = false;
    updatePlayPauseUI();
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
}

function resetSim(opts = {}) {
    pause();
    elapsedSimTime = 0;
    nextStrobeTime = 0;
    trueAngle = 0;
    strobedAngle = 0;
    frame.lastTs = undefined;
    renderWheels();
    updateLegendReadouts();
    if (opts.resume) play();
}

playPauseBtn.addEventListener('click', () => (playing ? pause() : play()));
resetBtn.addEventListener('click', () => resetSim());

// Auto-pause when the tab isn't visible, so a forgotten background
// tab doesn't keep burning CPU/GPU indefinitely. Deliberately does
// NOT auto-resume on return — resuming on its own would be a more
// surprising behavior than just staying paused.
document.addEventListener('visibilitychange', () => {
    if (document.hidden && playing) pause();
});

// --- Boot ------------------------------------------------------------
applyStaticDict();
renderPresetButtons();
resizeWheels();
applyPreset('slowForward');
