document.getElementById('footerYear').textContent = new Date().getFullYear();

// --- i18n: per-app copy of the shared convention (see
// all-my-games/.claude/skills/i18n-subpath-app.md) --- deliberately
// duplicated rather than loaded from a shared file, so this app
// never depends on another app's deploy/cache state.
const I18N_STORAGE_KEY = 'dirdam-lang';
const SUPPORTED_LANGS = ['en', 'es', 'ja'];
const LANG_LABELS = { en: 'EN', es: 'ES', ja: '日本語' };

const STRINGS = {
    en: {
        browserTabTitle: 'Predator-Prey',
        pageTitle: 'Predator-Prey',
        subtitle: 'The Lotka-Volterra equations behind every predator-prey cycle',
        introHtml: 'Two populations locked in a feedback loop: <strong>prey</strong> grow on their own, but <strong>predators</strong> cut them down — and predators, in turn, depend entirely on eating prey to grow. Change any of the four rates on the right (<strong>α</strong> prey growth, <strong>β</strong> predation, <strong>γ</strong> predator death, <strong>δ</strong> predator growth) and watch both populations settle into a new rhythm.',
        alphaLabel: 'Prey growth rate (α)',
        betaLabel: 'Predation rate (β)',
        gammaLabel: 'Predator death rate (γ)',
        deltaLabel: 'Predator growth efficiency (δ)',
        initialPopulationsLabel: 'Initial populations',
        prey0Label: 'Initial prey population',
        predator0Label: 'Initial predator population',
        initialHint: 'Applies on the next reset',
        presetsLabel: 'Presets',
        presetClassic: 'Classic',
        presetFastPredator: 'Fast predator',
        presetStableCycle: 'Stable cycle',
        speedLabel: 'Speed',
        speedSlow: 'Slow',
        speedNormal: 'Normal',
        speedFast: 'Fast',
        controlPlay: 'Play',
        controlPause: 'Pause',
        controlReset: 'Reset',
        legendPrey: 'Prey',
        legendPredator: 'Predators',
        legendTime: 't',
        chartTimeCaption: 'Population over time',
        chartPhaseCaption: 'Phase plane — predator vs. prey',
        axisTime: 'Time',
        axisPopulation: 'Population',
        axisPrey: 'Prey',
        axisPredator: 'Predator',
        equationsTitle: 'Lotka-Volterra Equations',
        howToInterpretTitle: 'How to interpret',
        howToInterpretHtml1: 'The top chart plots both populations against time. Watch how a rise in <strong>prey</strong> is always followed &mdash; a little later &mdash; by a rise in <strong>predators</strong>, who then overhunt the prey until food runs short and their own numbers fall too. That lag between cause and effect is what keeps the whole system oscillating instead of settling down.',
        howToInterpretHtml2: 'The bottom chart tells the same story a different way: instead of time on the horizontal axis, it plots <strong>predators</strong> against <strong>prey</strong> directly, so each moment becomes a single point. As the two populations rise and fall together, that point traces a closed loop &mdash; a <strong>cycle</strong> &mdash; over and over, with the bright dot marking where the system is right now. A wider loop means bigger swings between boom and bust; a small loop close to the center means both populations are hovering near their natural balance.',
        seeMoreTools: 'See more tools',
        viewSource: 'View source',
    },
    es: {
        browserTabTitle: 'Depredador-presa',
        pageTitle: 'Depredador-presa',
        subtitle: 'Las ecuaciones de Lotka-Volterra detrás de todo ciclo depredador-presa',
        introHtml: 'Dos poblaciones atrapadas en un bucle de retroalimentación: las <strong>presas</strong> crecen por su cuenta, pero los <strong>depredadores</strong> las reducen — y los depredadores, a su vez, dependen por completo de comer presas para crecer. Cambia cualquiera de las cuatro tasas de la derecha (<strong>α</strong> crecimiento de las presas, <strong>β</strong> depredación, <strong>γ</strong> muerte de los depredadores, <strong>δ</strong> crecimiento de los depredadores) y observa cómo ambas poblaciones se asientan en un nuevo ritmo.',
        alphaLabel: 'Tasa crecimiento presa (α)',
        betaLabel: 'Tasa depredación (β)',
        gammaLabel: 'Tasa muerte depredador (γ)',
        deltaLabel: 'Eficiencia crecimiento depredador (δ)',
        initialPopulationsLabel: 'Poblaciones iniciales',
        prey0Label: 'Población inicial de presas',
        predator0Label: 'Población inicial de depredadores',
        initialHint: 'Se aplica en el próximo reinicio',
        presetsLabel: 'Preajustes',
        presetClassic: 'Clásico',
        presetFastPredator: 'Depredador rápido',
        presetStableCycle: 'Ciclo estable',
        speedLabel: 'Velocidad',
        speedSlow: 'Lenta',
        speedNormal: 'Normal',
        speedFast: 'Rápida',
        controlPlay: 'Reproducir',
        controlPause: 'Pausar',
        controlReset: 'Reiniciar',
        legendPrey: 'Presas',
        legendPredator: 'Depredadores',
        legendTime: 't',
        chartTimeCaption: 'Población a lo largo del tiempo',
        chartPhaseCaption: 'Plano de fase — depredador frente a presa',
        axisTime: 'Tiempo',
        axisPopulation: 'Población',
        axisPrey: 'Presa',
        axisPredator: 'Depredador',
        equationsTitle: 'Ecuaciones de Lotka-Volterra',
        howToInterpretTitle: 'Cómo interpretarlo',
        howToInterpretHtml1: 'El gráfico superior muestra ambas poblaciones a lo largo del tiempo. Observa cómo un aumento de las <strong>presas</strong> siempre va seguido — un poco después — de un aumento de los <strong>depredadores</strong>, que a su vez sobreexplotan a las presas hasta que escasea el alimento y su propio número también cae. Ese desfase entre causa y efecto es lo que mantiene todo el sistema oscilando en lugar de estabilizarse.',
        howToInterpretHtml2: 'El gráfico inferior cuenta la misma historia de otra forma: en vez de poner el tiempo en el eje horizontal, representa a los <strong>depredadores</strong> frente a las <strong>presas</strong> directamente, de modo que cada instante se convierte en un único punto. A medida que ambas poblaciones suben y bajan juntas, ese punto traza un bucle cerrado — un <strong>ciclo</strong> — una y otra vez, con el punto brillante marcando dónde se encuentra el sistema ahora mismo. Un bucle más amplio significa oscilaciones más marcadas entre auge y colapso; un bucle pequeño cerca del centro indica que ambas poblaciones se mantienen cerca de su equilibrio natural.',
        seeMoreTools: 'Ver más herramientas',
        viewSource: 'Ver código fuente',
    },
    ja: {
        browserTabTitle: '捕食者と被食者',
        pageTitle: '捕食者と被食者',
        subtitle: 'すべての捕食関係の循環を支えるロトカ－ヴォルテラ方程式',
        introHtml: '2つの個体数がフィードバックループで結ばれています：<strong>被食者</strong>は自力で増えますが、<strong>捕食者</strong>によって数が減らされます。そして捕食者の方も、被食者を食べることに完全に依存して増えます。右側の4つのレート（<strong>α</strong> 被食者の成長、<strong>β</strong> 被食率、<strong>γ</strong> 捕食者の死亡、<strong>δ</strong> 捕食者の成長）を変えて、両方の個体数が新しいリズムに落ち着く様子を見てみてください。',
        alphaLabel: '被食者の成長率（α）',
        betaLabel: '被食率（β）',
        gammaLabel: '捕食者の死亡率（γ）',
        deltaLabel: '捕食者の成長効率（δ）',
        initialPopulationsLabel: '初期個体数',
        prey0Label: '被食者の初期個体数',
        predator0Label: '捕食者の初期個体数',
        initialHint: '次回のリセット時に適用されます',
        presetsLabel: 'プリセット',
        presetClassic: 'クラシック',
        presetFastPredator: '素早い捕食者',
        presetStableCycle: '安定サイクル',
        speedLabel: '速度',
        speedSlow: '遅い',
        speedNormal: '普通',
        speedFast: '速い',
        controlPlay: '再生',
        controlPause: '一時停止',
        controlReset: 'リセット',
        legendPrey: '被食者',
        legendPredator: '捕食者',
        legendTime: 't',
        chartTimeCaption: '時間による個体数の推移',
        chartPhaseCaption: '位相平面 — 捕食者対被食者',
        axisTime: '時間',
        axisPopulation: '個体数',
        axisPrey: '被食者',
        axisPredator: '捕食者',
        equationsTitle: 'ロトカ・ヴォルテラ方程式',
        howToInterpretTitle: '読み解き方',
        howToInterpretHtml1: '上のグラフは、両方の個体数を時間の経過とともに示しています。<strong>被食者</strong>が増えると、少し遅れて必ず<strong>捕食者</strong>が増え、今度は捕食者が被食者を獲りすぎて食料が不足し、捕食者の数も減っていく様子に注目してください。この原因と結果の間の時間差こそが、システムを安定させず振動させ続ける理由です。',
        howToInterpretHtml2: '下のグラフは同じ物語を別の方法で伝えています。横軸に時間を置く代わりに、<strong>捕食者</strong>と<strong>被食者</strong>を直接プロットするため、各瞬間が1つの点になります。両方の個体数がともに増減するにつれて、その点は同じ<strong>周期</strong>の閉じたループを何度も描きます。明るい点が現在のシステムの状態を示しています。ループが大きいほど好況と不況の振れ幅が大きく、中心に近い小さなループは両方の個体数が自然な均衡の近くにとどまっていることを意味します。',
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

// --- Lotka-Volterra physics ---------------------------------------
// dPrey/dt = prey*(alpha - beta*predator)
// dPredator/dt = predator*(delta*prey - gamma)
// Integrated with classic 4th-order Runge-Kutta rather than the
// simple explicit Euler step of the original app: Euler visibly
// drifts/spirals on these closed orbits at anything but a tiny step
// size, since it doesn't conserve the system's invariant of motion.
// RK4 costs only 4 derivative evaluations per step (trivial for a
// 2-variable ODE) and keeps orbits closed at any reasonable step.
function derivative(state, p) {
    const [prey, predator] = state;
    return [
        prey * (p.alpha - p.beta * predator),
        predator * (p.delta * prey - p.gamma),
    ];
}

function rk4Step(state, p, h) {
    const k1 = derivative(state, p);
    const s2 = [state[0] + k1[0] * h / 2, state[1] + k1[1] * h / 2];
    const k2 = derivative(s2, p);
    const s3 = [state[0] + k2[0] * h / 2, state[1] + k2[1] * h / 2];
    const k3 = derivative(s3, p);
    const s4 = [state[0] + k3[0] * h, state[1] + k3[1] * h];
    const k4 = derivative(s4, p);
    const next = [
        state[0] + (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]),
        state[1] + (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]),
    ];
    // Safety clamp only — populations shouldn't go negative, but a
    // large step with an extreme parameter combination could
    // otherwise overshoot below zero.
    return [Math.max(0, next[0]), Math.max(0, next[1])];
}

// Step size (h) is intentionally not a raw user-facing field — it's
// bundled into this speed toggle along with a playback pace, so
// "speed" has one clear meaning instead of conflating integration
// fidelity with animation pacing (unlike the original app).
const SPEED_PRESETS = {
    slow: { h: 0.02, simUnitsPerSecond: 1 },
    normal: { h: 0.02, simUnitsPerSecond: 5 },
    fast: { h: 0.02, simUnitsPerSecond: 20 },
};
const SPEED_KEYS = { slow: 'speedSlow', normal: 'speedNormal', fast: 'speedFast' };
let currentSpeed = 'normal';

const PRESETS = {
    classic: { alpha: 0.5, beta: 0.01, gamma: 0.8, delta: 0.01, prey0: 100, predator0: 50 },
    fastPredator: { alpha: 0.5, beta: 0.01, gamma: 0.4, delta: 0.02, prey0: 100, predator0: 20 },
    stableCycle: { alpha: 0.5, beta: 0.01, gamma: 0.8, delta: 0.01, prey0: 82, predator0: 51 },
};
const PRESET_KEYS = { classic: 'presetClassic', fastPredator: 'presetFastPredator', stableCycle: 'presetStableCycle' };

// A small fixed-capacity ring buffer feeds both charts — long
// enough (~66s of real playback at 60fps sampling) to cover the
// phase-plane's fading trail without letting memory grow unbounded
// over an indefinitely-running session.
class RingBuffer {
    constructor(capacity) {
        this.capacity = capacity;
        this.buf = new Array(capacity);
        this.head = 0;
        this.length = 0;
    }
    push(sample) {
        this.buf[(this.head + this.length) % this.capacity] = sample;
        if (this.length < this.capacity) this.length++;
        else this.head = (this.head + 1) % this.capacity;
    }
    forEach(fn) {
        for (let i = 0; i < this.length; i++) fn(this.buf[(this.head + i) % this.capacity], i);
    }
    clear() { this.head = 0; this.length = 0; }
}

const HISTORY_CAPACITY = 4000;
const history = new RingBuffer(HISTORY_CAPACITY);

const params = { alpha: 0.5, beta: 0.01, gamma: 0.8, delta: 0.01 };
const initial = { prey: 100, predator: 50 };
let state = [initial.prey, initial.predator];
let t_sim = 0;
let playing = false;
let simRafId = null;
let carrySimTime = 0;
let phasePreyMax = Math.max(initial.prey, 1);
let phasePredatorMax = Math.max(initial.predator, 1);
let currentPresetKey = null;
let hoverT = null;

function pushSample(t, prey, predator) {
    history.push({ t, prey, predator });
    phasePreyMax = Math.max(phasePreyMax, prey);
    phasePredatorMax = Math.max(phasePredatorMax, predator);
}

// --- Fields: slider + synced number input -------------------------
function bindField(sliderEl, numberEl, onChange) {
    function apply(value) {
        sliderEl.value = value;
        // Don't clobber the field the user is actively typing into.
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

// Every slider's "fill" — from the left edge up to the thumb — is
// set as an inline background the same way: a linear-gradient with
// a hard stop at the thumb's own position, gray beyond it. For a
// single-color slider (prey/predator fields) the two colors before
// that hard stop are identical, so it just reads as a flat fill,
// exactly like a native accent-color slider would look. For the
// predation-rate slider, which affects both populations, they're
// two different points along a fixed predator→prey gradient
// anchored to the full track — so dragging the thumb reveals more
// of that fixed gradient rather than restretching a shorter one to
// fit. One function handles both cases; only the color-at-fraction
// callback differs.
const PREY_HEX = '#008300';
const PREDATOR_HEX = '#e34948';
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
const gradientColor = (hexLeft, hexRight) => (frac) => lerpColor(hexLeft, hexRight, frac);

function updateSliderTrack(sliderEl, colorAtFraction, value) {
    const min = parseFloat(sliderEl.min), max = parseFloat(sliderEl.max);
    const pct = ((value - min) / (max - min)) * 100;
    const leftColor = colorAtFraction(0);
    const cutoffColor = colorAtFraction(pct / 100);
    sliderEl.style.background =
        `linear-gradient(to right, ${leftColor} 0%, ${cutoffColor} ${pct}%, ${TRACK_GRAY} ${pct}%, ${TRACK_GRAY} 100%)`;
}

const alphaSlider = document.getElementById('alphaSlider');
const betaSlider = document.getElementById('betaSlider');
const gammaSlider = document.getElementById('gammaSlider');
const deltaSlider = document.getElementById('deltaSlider');
const prey0Slider = document.getElementById('prey0Slider');
const predator0Slider = document.getElementById('predator0Slider');

const alphaFill = solidColor(PREY_HEX);
const betaFill = gradientColor(PREDATOR_HEX, PREY_HEX);
const gammaFill = solidColor(PREDATOR_HEX);
const deltaFill = solidColor(PREDATOR_HEX);
const prey0Fill = solidColor(PREY_HEX);
const predator0Fill = solidColor(PREDATOR_HEX);

const setAlpha = bindField(alphaSlider, document.getElementById('alphaNumber'), (v) => { params.alpha = v; syncPresetHighlight(); updateSliderTrack(alphaSlider, alphaFill, v); });
const setBeta = bindField(betaSlider, document.getElementById('betaNumber'), (v) => { params.beta = v; syncPresetHighlight(); updateSliderTrack(betaSlider, betaFill, v); });
const setGamma = bindField(gammaSlider, document.getElementById('gammaNumber'), (v) => { params.gamma = v; syncPresetHighlight(); updateSliderTrack(gammaSlider, gammaFill, v); });
const setDelta = bindField(deltaSlider, document.getElementById('deltaNumber'), (v) => { params.delta = v; syncPresetHighlight(); updateSliderTrack(deltaSlider, deltaFill, v); });
const setPrey0 = bindField(prey0Slider, document.getElementById('prey0Number'), (v) => { initial.prey = v; syncPresetHighlight(); updateSliderTrack(prey0Slider, prey0Fill, v); });
const setPredator0 = bindField(predator0Slider, document.getElementById('predator0Number'), (v) => { initial.predator = v; syncPresetHighlight(); updateSliderTrack(predator0Slider, predator0Fill, v); });

function matchesPreset(p) {
    const eps = 1e-6;
    return Math.abs(params.alpha - p.alpha) < eps && Math.abs(params.beta - p.beta) < eps
        && Math.abs(params.gamma - p.gamma) < eps && Math.abs(params.delta - p.delta) < eps
        && Math.abs(initial.prey - p.prey0) < eps && Math.abs(initial.predator - p.predator0) < eps;
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
    setAlpha(p.alpha);
    setBeta(p.beta);
    setGamma(p.gamma);
    setDelta(p.delta);
    setPrey0(p.prey0);
    setPredator0(p.predator0);
    resetSim({ resume: true });
}

const speedToggleContainer = document.getElementById('speedToggle');
function renderSpeedToggle() {
    speedToggleContainer.innerHTML = '';
    Object.keys(SPEED_PRESETS).forEach((key) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = t(SPEED_KEYS[key]);
        btn.setAttribute('aria-pressed', String(key === currentSpeed));
        btn.addEventListener('click', () => {
            // No explicit restart needed — simFrame re-reads
            // SPEED_PRESETS[currentSpeed] every frame.
            currentSpeed = key;
            renderSpeedToggle();
        });
        speedToggleContainer.appendChild(btn);
    });
}
onLangChange(renderSpeedToggle);

// --- Chart drawing --------------------------------------------------
// Neither sibling app already has a numeric-axis chart (surnames-
// evolution's is a 0-1 stacked-area chart with no y-axis labels), so
// this axis/gridline/tick-label code is new.

// Classic "nice numbers" tick algorithm (Heckbert) so axes show
// round values instead of whatever the data range happens to be.
function niceNum(range, round) {
    if (range <= 0) return 1;
    const exponent = Math.floor(Math.log10(range));
    const fraction = range / Math.pow(10, exponent);
    let niceFraction;
    if (round) {
        if (fraction < 1.5) niceFraction = 1;
        else if (fraction < 3) niceFraction = 2;
        else if (fraction < 7) niceFraction = 5;
        else niceFraction = 10;
    } else {
        if (fraction <= 1) niceFraction = 1;
        else if (fraction <= 2) niceFraction = 2;
        else if (fraction <= 5) niceFraction = 5;
        else niceFraction = 10;
    }
    return niceFraction * Math.pow(10, exponent);
}

function niceTicks(min, max, targetCount) {
    if (min === max) { min -= 1; max += 1; }
    const range = niceNum(max - min, false);
    const step = niceNum(range / (targetCount - 1), true);
    const niceMin = Math.floor(min / step) * step;
    const niceMax = Math.ceil(max / step) * step;
    const ticks = [];
    for (let v = niceMin; v <= niceMax + step * 0.5; v += step) ticks.push(+v.toFixed(6));
    return ticks;
}

function chartColors() {
    const dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        && document.documentElement.getAttribute('data-theme') !== 'light';
    return dark
        ? { gridline: '#302f2c', ink: '#c3c2b7', inkMuted: '#8c8a84', prey: '#008300', predator: '#e66767' }
        : { gridline: '#e3e1d8', ink: '#52514e', inkMuted: '#8c8a84', prey: '#008300', predator: '#e34948' };
}

const PLOT_PAD = { left: 46, right: 14, top: 14, bottom: 26 };

function plotRectFor(width, height) {
    return {
        x: PLOT_PAD.left,
        y: PLOT_PAD.top,
        w: Math.max(10, width - PLOT_PAD.left - PLOT_PAD.right),
        h: Math.max(10, height - PLOT_PAD.top - PLOT_PAD.bottom),
    };
}

function drawAxes(ctx, rect, xDomain, yDomain, xTicks, yTicks, colors) {
    ctx.save();
    ctx.strokeStyle = colors.gridline;
    ctx.fillStyle = colors.ink;
    ctx.lineWidth = 1;
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';

    const mapX = (v) => rect.x + ((v - xDomain[0]) / (xDomain[1] - xDomain[0] || 1)) * rect.w;
    const mapY = (v) => rect.y + rect.h - ((v - yDomain[0]) / (yDomain[1] - yDomain[0] || 1)) * rect.h;

    yTicks.forEach((v) => {
        const y = mapY(v);
        ctx.beginPath();
        ctx.moveTo(rect.x, y);
        ctx.lineTo(rect.x + rect.w, y);
        ctx.stroke();
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(v), rect.x - 6, y);
    });

    xTicks.forEach((v) => {
        const x = mapX(v);
        ctx.beginPath();
        ctx.moveTo(x, rect.y);
        ctx.lineTo(x, rect.y + rect.h);
        ctx.stroke();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(String(v), x, rect.y + rect.h + 6);
    });

    ctx.restore();
    return { mapX, mapY };
}

function resizeChartCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { width: rect.width, height: rect.height, ctx };
}

const timeCanvas = document.getElementById('timeCanvas');
const phaseCanvas = document.getElementById('phaseCanvas');
const timeTooltip = document.getElementById('timeTooltip');
let timeCtx = null, phaseCtx = null;
let timeSize = { width: 0, height: 0 };
let phaseSize = { width: 0, height: 0 };

// Data captured by the most recent renderTimeChart() call, reused
// by the hover handler so it doesn't recompute the window/scale.
let lastTimeWindow = { samples: [], xDomain: [0, 1], rect: null, mapX: null, mapY: null };

function timeWindowSize() {
    if (params.alpha <= 0 || params.gamma <= 0) return 100;
    const period = 2 * Math.PI / Math.sqrt(params.alpha * params.gamma);
    return Math.min(500, Math.max(10, period * 4));
}

function renderTimeChart() {
    if (!timeCtx) return;
    const colors = chartColors();
    const { width, height } = timeSize;
    timeCtx.clearRect(0, 0, width, height);

    const windowSize = timeWindowSize();
    const tMax = Math.max(t_sim, windowSize);
    const tMin = tMax - windowSize;

    const samples = [];
    history.forEach((s) => { if (s.t >= tMin) samples.push(s); });

    let yMax = 1;
    samples.forEach((s) => { yMax = Math.max(yMax, s.prey, s.predator); });
    if (!samples.length) yMax = Math.max(initial.prey, initial.predator, 1);
    yMax *= 1.15;

    const rect = plotRectFor(width, height);
    const xTicks = niceTicks(tMin, tMax, 6);
    const yTicks = niceTicks(0, yMax, 5);
    const { mapX, mapY } = drawAxes(timeCtx, rect, [tMin, tMax], [0, yMax], xTicks, yTicks, colors);

    function strokeSeries(key, color) {
        timeCtx.save();
        timeCtx.strokeStyle = color;
        timeCtx.lineWidth = 2;
        timeCtx.globalAlpha = 0.8;
        timeCtx.beginPath();
        let started = false;
        samples.forEach((s) => {
            const x = mapX(s.t), y = mapY(s[key]);
            if (!started) { timeCtx.moveTo(x, y); started = true; }
            else timeCtx.lineTo(x, y);
        });
        timeCtx.stroke();
        timeCtx.restore();
    }
    strokeSeries('prey', colors.prey);
    strokeSeries('predator', colors.predator);

    // Corner axis labels — kept short and unrotated rather than a
    // rotated y-axis title, to stay simple and reliable at this
    // chart's compact size.
    timeCtx.save();
    timeCtx.fillStyle = colors.inkMuted;
    timeCtx.font = '10px -apple-system, BlinkMacSystemFont, sans-serif';
    timeCtx.textAlign = 'left';
    timeCtx.textBaseline = 'top';
    timeCtx.fillText(t('axisPopulation'), rect.x + 2, 2);
    timeCtx.textAlign = 'right';
    timeCtx.textBaseline = 'bottom';
    timeCtx.fillText(t('axisTime'), rect.x + rect.w, height - 2);
    timeCtx.restore();

    lastTimeWindow = { samples, xDomain: [tMin, tMax], rect, mapX, mapY };

    if (hoverT !== null && samples.length) {
        let nearest = samples[0], bestDiff = Infinity;
        samples.forEach((s) => { const d = Math.abs(s.t - hoverT); if (d < bestDiff) { bestDiff = d; nearest = s; } });
        const x = mapX(nearest.t);
        timeCtx.save();
        timeCtx.strokeStyle = colors.inkMuted;
        timeCtx.lineWidth = 1;
        timeCtx.setLineDash([3, 3]);
        timeCtx.beginPath();
        timeCtx.moveTo(x, rect.y);
        timeCtx.lineTo(x, rect.y + rect.h);
        timeCtx.stroke();
        timeCtx.restore();

        timeTooltip.style.display = 'block';
        timeTooltip.style.left = Math.min(Math.max(x, 50), width - 50) + 'px';
        timeTooltip.style.top = '6px';
        timeTooltip.innerHTML =
            `<div class="row"><span>${t('legendTime')} = ${nearest.t.toFixed(2)}</span></div>` +
            `<div class="row"><span class="swatch" style="background:${colors.prey}"></span>${t('legendPrey')}: ${nearest.prey.toFixed(1)}</div>` +
            `<div class="row"><span class="swatch" style="background:${colors.predator}"></span>${t('legendPredator')}: ${nearest.predator.toFixed(1)}</div>`;
    } else {
        timeTooltip.style.display = 'none';
    }
}

function renderPhaseChart() {
    if (!phaseCtx) return;
    const colors = chartColors();
    const { width, height } = phaseSize;
    phaseCtx.clearRect(0, 0, width, height);

    const xMax = Math.max(1, phasePredatorMax * 1.15);
    const yMax = Math.max(1, phasePreyMax * 1.15);
    const rect = plotRectFor(width, height);
    const xTicks = niceTicks(0, xMax, 5);
    const yTicks = niceTicks(0, yMax, 5);
    const { mapX, mapY } = drawAxes(phaseCtx, rect, [0, xMax], [0, yMax], xTicks, yTicks, colors);

    // Fading trail: bucket the buffer into bands so old segments of
    // the orbit read as a faint echo and the most recent segment
    // stands out, without paying one stroke() call per point-pair.
    const pts = [];
    history.forEach((s) => pts.push(s));
    const BANDS = 40;
    if (pts.length > 1) {
        const bandSize = Math.max(1, Math.ceil(pts.length / BANDS));
        for (let start = 0; start < pts.length - 1; start += bandSize) {
            const end = Math.min(pts.length - 1, start + bandSize);
            const alpha = 0.15 + 0.75 * (end / pts.length);
            phaseCtx.save();
            phaseCtx.strokeStyle = colors.inkMuted;
            phaseCtx.globalAlpha = alpha;
            phaseCtx.lineWidth = 1.5;
            phaseCtx.beginPath();
            for (let i = start; i <= end; i++) {
                const x = mapX(pts[i].predator), y = mapY(pts[i].prey);
                if (i === start) phaseCtx.moveTo(x, y); else phaseCtx.lineTo(x, y);
            }
            phaseCtx.stroke();
            phaseCtx.restore();
        }
        const last = pts[pts.length - 1];
        phaseCtx.save();
        phaseCtx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#b8492f';
        phaseCtx.beginPath();
        phaseCtx.arc(mapX(last.predator), mapY(last.prey), 4, 0, Math.PI * 2);
        phaseCtx.fill();
        phaseCtx.restore();
    }

    phaseCtx.save();
    phaseCtx.fillStyle = colors.inkMuted;
    phaseCtx.font = '10px -apple-system, BlinkMacSystemFont, sans-serif';
    phaseCtx.textAlign = 'left';
    phaseCtx.textBaseline = 'top';
    phaseCtx.fillText(t('axisPrey'), rect.x + 2, 2);
    phaseCtx.textAlign = 'right';
    phaseCtx.textBaseline = 'bottom';
    phaseCtx.fillText(t('axisPredator'), rect.x + rect.w, height - 2);
    phaseCtx.restore();
}

function updateLegendValues() {
    const total = state[0] + state[1];
    // A 50/50 split when both populations are extinct is an arbitrary
    // but harmless fallback — the bar is purely illustrative at that
    // point anyway (there's nothing left to show a ratio of).
    const preyPct = total > 0 ? (state[0] / total) * 100 : 50;
    const predatorPct = total > 0 ? (state[1] / total) * 100 : 50;
    document.getElementById('ratioSegPrey').style.width = preyPct + '%';
    document.getElementById('ratioSegPredator').style.width = predatorPct + '%';
    document.getElementById('preyPct').textContent = preyPct.toFixed(1);
    document.getElementById('predatorPct').textContent = predatorPct.toFixed(1);
}

function renderCharts() {
    updateLegendValues();
    renderTimeChart();
    renderPhaseChart();
}

function resizeCharts() {
    const t1 = resizeChartCanvas(timeCanvas);
    timeCtx = t1.ctx; timeSize = { width: t1.width, height: t1.height };
    const p1 = resizeChartCanvas(phaseCanvas);
    phaseCtx = p1.ctx; phaseSize = { width: p1.width, height: p1.height };
    renderCharts();
}
window.addEventListener('resize', resizeCharts);

timeCanvas.addEventListener('mousemove', (e) => {
    const rect = timeCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const pr = lastTimeWindow.rect;
    if (!pr || mx < pr.x || mx > pr.x + pr.w) { hoverT = null; renderTimeChart(); return; }
    const [d0, d1] = lastTimeWindow.xDomain;
    hoverT = d0 + ((mx - pr.x) / pr.w) * (d1 - d0);
    renderTimeChart();
});
timeCanvas.addEventListener('mouseleave', () => { hoverT = null; renderTimeChart(); });

// --- Continuous simulation loop -------------------------------------
// Adapted from the one-shot rAF-accumulator pattern used elsewhere in
// this app family into a play/pause/reset CONTINUOUS simulation: the
// accumulator here never "finishes", it just keeps consuming elapsed
// real time into fixed RK4 steps for as long as playing is true.
function simFrame(timestamp) {
    if (simFrame.lastTs === undefined) simFrame.lastTs = timestamp;
    let dtMs = timestamp - simFrame.lastTs;
    simFrame.lastTs = timestamp;
    // A backgrounded tab can report a huge elapsed time on refocus —
    // clamp so the simulation doesn't "fast-forward" thousands of
    // steps in one frame.
    dtMs = Math.min(dtMs, 250);

    const preset = SPEED_PRESETS[currentSpeed];
    carrySimTime += (dtMs / 1000) * preset.simUnitsPerSecond;
    let steps = 0;
    while (carrySimTime >= preset.h && steps < 2000) {
        state = rk4Step(state, params, preset.h);
        t_sim += preset.h;
        carrySimTime -= preset.h;
        steps++;
    }
    pushSample(t_sim, state[0], state[1]);
    renderCharts();

    if (playing) simRafId = requestAnimationFrame(simFrame);
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
    simFrame.lastTs = undefined;
    simRafId = requestAnimationFrame(simFrame);
}

function pause() {
    playing = false;
    updatePlayPauseUI();
    if (simRafId !== null) { cancelAnimationFrame(simRafId); simRafId = null; }
}

function resetSim(opts = {}) {
    pause();
    t_sim = 0;
    state = [initial.prey, initial.predator];
    history.clear();
    phasePreyMax = Math.max(initial.prey, 1);
    phasePredatorMax = Math.max(initial.predator, 1);
    carrySimTime = 0;
    hoverT = null;
    pushSample(0, state[0], state[1]);
    renderCharts();
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
renderSpeedToggle();
renderPresetButtons();
resizeCharts();
applyPreset('classic');
