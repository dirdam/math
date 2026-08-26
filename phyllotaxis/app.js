document.getElementById('footerYear').textContent = new Date().getFullYear();

// --- i18n: per-app copy of the shared convention (see the dirdam.squadro.app
// landing page and sibling apps) — deliberately duplicated rather than loaded
// from a shared file, so this app never depends on another app's deploy/cache state.
const I18N_STORAGE_KEY = 'dirdam-lang';
const SUPPORTED_LANGS = ['en', 'es', 'ja'];
const LANG_LABELS = { en: 'EN', es: 'ES', ja: '日本語' };

const STRINGS = {
    en: {
        browserTabTitle: 'Phyllotaxis',
        pageTitle: 'Phyllotaxis',
        subtitle: 'The golden angle behind sunflowers and pinecones',
        introHtml: 'Plants place each new leaf or seed at a fixed <strong>generation angle</strong> from the one before it. At exactly the <strong>golden angle</strong> (137.5°), florets pack tighter than at any other angle.<br><strong>Change the angle</strong> to see different spiral patterns emerge.',
        angleLabel: 'Generation angle',
        presetGolden: 'Golden angle',
        maxSizeLabel: 'Field size',
        sizeSmall: 'Small',
        sizeMedium: 'Medium',
        sizeLarge: 'Large',
        sizeXLarge: 'X-Large',
        speedLabel: 'Growth speed',
        speedSlow: 'Slow',
        speedNormal: 'Normal',
        speedFast: 'Fast',
        showSpiralsLabel: 'Show spirals',
        showAdjacentsLabel: 'Show adjacent links',
        growButton: 'Grow',
        canvasTitle: 'Angle: <strong>{angle}°</strong> &middot; Florets: <strong>{n}</strong>',
        seeMoreTools: 'See more tools',
        viewSource: 'View source',
    },
    es: {
        browserTabTitle: 'Filotaxis',
        pageTitle: 'Filotaxis',
        subtitle: 'El ángulo áureo detrás de girasoles y piñas',
        introHtml: 'Las plantas colocan cada nueva hoja o semilla con un <strong>ángulo de generación</strong> fijo respecto a la anterior. Con exactamente el <strong>ángulo áureo</strong> (137,5°), las flósculas se empaquetan más que con cualquier otro ángulo.<br><strong>Cambia el ángulo</strong> para ver distintos patrones de espirales aparecer.',
        angleLabel: 'Ángulo de generación',
        presetGolden: 'Ángulo áureo',
        maxSizeLabel: 'Tamaño del campo',
        sizeSmall: 'Pequeño',
        sizeMedium: 'Mediano',
        sizeLarge: 'Grande',
        sizeXLarge: 'Extragrande',
        speedLabel: 'Velocidad de crecimiento',
        speedSlow: 'Lenta',
        speedNormal: 'Normal',
        speedFast: 'Rápida',
        showSpiralsLabel: 'Mostrar espirales',
        showAdjacentsLabel: 'Mostrar enlaces adyacentes',
        growButton: 'Crecer',
        canvasTitle: 'Ángulo: <strong>{angle}°</strong> &middot; Flósculos: <strong>{n}</strong>',
        seeMoreTools: 'Ver más herramientas',
        viewSource: 'Ver código fuente',
    },
    ja: {
        browserTabTitle: 'フィロタキシス',
        pageTitle: 'フィロタキシス',
        subtitle: 'ヒマワリや松ぼっくりに隠された黄金角',
        introHtml: '植物は新しい葉や種を、直前のものから一定の<strong>生成角度</strong>だけ回転させて配置します。ちょうど<strong>黄金角</strong>(137.5°)のとき、小花は他のどの角度よりも密に詰まります。<br><strong>角度を変えて</strong>、現れる螺旋を見てみてください。',
        angleLabel: '生成角度',
        presetGolden: '黄金角',
        maxSizeLabel: '範囲の大きさ',
        sizeSmall: '小',
        sizeMedium: '中',
        sizeLarge: '大',
        sizeXLarge: '特大',
        speedLabel: '成長速度',
        speedSlow: '遅い',
        speedNormal: '普通',
        speedFast: '速い',
        showSpiralsLabel: '螺旋を表示',
        showAdjacentsLabel: '隣接リンクを表示',
        growButton: '育てる',
        canvasTitle: '角度: <strong>{angle}°</strong>　・　小花の数: <strong>{n}</strong>',
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
    updateStatsText();
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

// --- Phyllotaxis simulation --------------------------------------
// Florets are added one at a time near the center, each rotated by
// a fixed generation angle from the last. Any floret overlapping an
// older one pushes that older floret radially outward until they
// just touch — repeated many times, this collision-packing process
// is what produces the spiral pattern (rather than placing florets
// via the closed-form r=c*sqrt(n) spiral formula directly), matching
// how a real plant's growing tip packs new primordia against
// existing ones. The golden angle (~137.507°) is the generation
// angle that packs the most florets before any two ever end up
// aligned along the same radial line.

class Floret {
    constructor(distFromCenter, angleDeg, order) {
        this.rad = distFromCenter;
        this.angle = angleDeg * Math.PI / 180;
        this.order = order; // insertion order — decides who's "newer" in a collision
        this.update();
        // `rad`/`x`/`y` above are the resolved physics position, used
        // for all collision math — unaffected by animation. `display*`
        // is what's actually drawn: it starts at the spawn point and
        // eases toward `rad` each frame (see tickAnimation), so a
        // floret that gets pushed later visibly slides to its new
        // spot instead of jumping there. `pop` similarly eases 0→1
        // so a brand new floret grows in rather than appearing at
        // full size instantly.
        this.displayRad = distFromCenter;
        this.displayX = this.x;
        this.displayY = this.y;
        this.pop = 0;
    }
    update() {
        this.x = Math.cos(this.angle) * this.rad;
        this.y = Math.sin(-this.angle) * this.rad;
    }
    updateDisplay() {
        this.displayX = Math.cos(this.angle) * this.displayRad;
        this.displayY = Math.sin(-this.angle) * this.displayRad;
    }
    distanceTo(other) {
        return Math.hypot(this.x - other.x, this.y - other.y);
    }
}

// Buckets florets into cellSize×cellSize cells so collision checks only
// look at nearby florets instead of every floret ever placed — with
// cellSize equal to the collision distance, any two florets closer than
// that must be in the same or an adjacent cell, so a 3×3 neighborhood
// covers every possible collision.
class SpatialGrid {
    constructor(cellSize) {
        this.cellSize = cellSize;
        this.cells = new Map();
    }
    key(x, y) {
        return Math.floor(x / this.cellSize) + ',' + Math.floor(y / this.cellSize);
    }
    add(floret) {
        const k = this.key(floret.x, floret.y);
        let cell = this.cells.get(k);
        if (!cell) { cell = new Set(); this.cells.set(k, cell); }
        cell.add(floret);
        floret._cellKey = k;
    }
    remove(floret) {
        const cell = this.cells.get(floret._cellKey);
        if (cell) cell.delete(floret);
    }
    updatePosition(floret) {
        const newKey = this.key(floret.x, floret.y);
        if (newKey === floret._cellKey) return;
        this.remove(floret);
        this.add(floret);
    }
    neighbors(floret) {
        const cx = Math.floor(floret.x / this.cellSize);
        const cy = Math.floor(floret.y / this.cellSize);
        const result = [];
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const cell = this.cells.get((cx + dx) + ',' + (cy + dy));
                if (cell) for (const other of cell) if (other !== floret) result.push(other);
            }
        }
        return result;
    }
}

// Safety backstop only — getMaxSize()'s presets are all comfortably
// under whatever this would ever cut off at.
const MAX_FLORETS = 4000;

let florets = [];
let grid = null;
let nextOrder = 0;
let creationAngle = 0;
let growRafId = null;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const stage = document.getElementById('stage');
let stageSize = 0;

const angleSlider = document.getElementById('angleSlider');
const angleNumberInput = document.getElementById('angleNumber');
const growBtn = document.getElementById('growBtn');
const canvasTitleEl = document.getElementById('canvasTitle');

function getAngle() { return parseFloat(angleSlider.value) || 0; }
// Floret size is fixed (not user-configurable) — only the field size
// (how many florets fit) is.
function getFloretSize() { return 10; }

// Field size: a 3-way preset toggle rather than a raw number field —
// see surnames-evolution's speed toggle for the reference pattern.
const SIZE_PRESETS = { small: 15, medium: 25, large: 35, xlarge: 45 };
const SIZE_KEYS = { small: 'sizeSmall', medium: 'sizeMedium', large: 'sizeLarge', xlarge: 'sizeXLarge' };
let currentSize = 'small';
function getMaxSize() { return SIZE_PRESETS[currentSize]; }

const sizeToggleContainer = document.getElementById('sizeToggle');
function renderSizeToggle() {
    sizeToggleContainer.innerHTML = '';
    Object.keys(SIZE_PRESETS).forEach((key) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = t(SIZE_KEYS[key]);
        btn.setAttribute('aria-pressed', String(key === currentSize));
        btn.addEventListener('click', () => {
            currentSize = key;
            renderSizeToggle();
            growAnimated();
        });
        sizeToggleContainer.appendChild(btn);
    });
}
onLangChange(renderSizeToggle);

// Growth speed: a 3-way preset toggle (ms between florets during the
// animated grow, matching the original app's default of 10ms as "normal")
// rather than a raw number field — see surnames-evolution's speed toggle.
const SPEED_PRESETS = { slow: 40, normal: 10, fast: 2 };
const SPEED_KEYS = { slow: 'speedSlow', normal: 'speedNormal', fast: 'speedFast' };
let currentSpeed = 'normal';
function getGrowthSpeed() { return SPEED_PRESETS[currentSpeed]; }

const speedToggleContainer = document.getElementById('speedToggle');
function renderSpeedToggle() {
    speedToggleContainer.innerHTML = '';
    Object.keys(SPEED_PRESETS).forEach((key) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = t(SPEED_KEYS[key]);
        btn.setAttribute('aria-pressed', String(key === currentSpeed));
        btn.addEventListener('click', () => {
            // No explicit restart needed — the growth loop re-reads
            // getGrowthSpeed() on every check, so a mid-run change
            // just takes effect on its own.
            currentSpeed = key;
            renderSpeedToggle();
        });
        speedToggleContainer.appendChild(btn);
    });
}
onLangChange(renderSpeedToggle);

// Show spirals / Show adjacent links: iOS/iPadOS-style on/off
// switches (see the .switch CSS) rather than plain checkboxes.
let showSpirals = true;
let showAdjacents = true;

function setupSwitch(button, getValue, setValue) {
    button.setAttribute('aria-checked', String(getValue()));
    button.addEventListener('click', () => {
        setValue(!getValue());
        button.setAttribute('aria-checked', String(getValue()));
        if (growRafId !== null) return; // will apply naturally once growth finishes
        render();
        renderOverlays(getFloretSize());
    });
}

setupSwitch(document.getElementById('spiralsToggle'), () => showSpirals, (v) => { showSpirals = v; });
setupSwitch(document.getElementById('adjacentsToggle'), () => showAdjacents, (v) => { showAdjacents = v; });

function setAngle(deg) {
    angleSlider.value = deg; // silently clamps to the slider's own 0–180 range
    // Don't clobber the field the user is actively typing into — it
    // may hold an in-progress value (e.g. "14" on the way to "145")
    // that setAngle's clamped/rounded echo would otherwise stomp on.
    if (document.activeElement !== angleNumberInput) {
        angleNumberInput.value = +deg.toFixed(3);
    }
    document.querySelectorAll('.angle-preset').forEach((btn) => {
        // Tolerance matches the slider/number field's own step (0.001)
        // — e.g. the golden angle preset (137.50776°) and the default
        // starting value (137.507°) are the same angle at that
        // precision and should both show the preset as selected.
        btn.classList.toggle('active', Math.abs(parseFloat(btn.dataset.angle) - deg) < 0.001);
    });
}
angleSlider.addEventListener('input', () => {
    setAngle(getAngle());
    growInstant();
});
angleNumberInput.addEventListener('input', () => {
    const deg = parseFloat(angleNumberInput.value);
    if (isNaN(deg)) return;
    setAngle(deg);
    growInstant();
});
// A typed value outside 0–180 (the slider's range) still grows the
// pattern at that value while the field has focus (setAngle only
// skips echoing back into a focused field, it doesn't stop the
// slider from clamping) — once the user's done editing, snap the
// displayed number to match what actually rendered.
angleNumberInput.addEventListener('change', () => {
    angleNumberInput.value = +getAngle().toFixed(3);
});
document.querySelectorAll('.angle-preset').forEach((btn) => {
    btn.addEventListener('click', () => {
        setAngle(parseFloat(btn.dataset.angle));
        growAnimated();
    });
});

function resizeCanvas() {
    const rect = stage.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    stageSize = rect.width;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    render();
    // Resizing the canvas backing store clears it, so a resize while
    // idle (growth already finished) needs to redraw the overlays
    // too, not just the plain florets — otherwise they'd vanish the
    // next time the window resizes after a run completes.
    if (growRafId === null && florets.length) renderOverlays(getFloretSize());
}
window.addEventListener('resize', resizeCanvas);

// Pushes `older` directly away from `newer` until they just touch.
// Only ever moves `older` (the earlier-inserted of the pair) — new
// florets always spawn near the center and shove existing ones
// outward, never the other way around.
function pushApart(newer, older, minDist) {
    const dist = newer.distanceTo(older);
    // The epsilon here isn't just "close enough" — without it, a pair
    // sitting at (due to float rounding) a hair under minDist can
    // recompute a positive-but-negligible pushDist forever, since the
    // check below never sees them as resolved (verified experimentally:
    // this was a real infinite loop, not a hypothetical one).
    if (dist >= minDist - 1e-6) return false;
    if (dist < 1e-6) {
        // Exactly coincident (e.g. a 0° generation angle keeps spawning
        // florets on top of each other) — the angle-based math below
        // divides by dist, so handle this degenerate case directly.
        older.rad += minDist;
    } else {
        const angDist = Math.abs(newer.angle - older.angle) % (2 * Math.PI);
        const sinArg = Math.max(-1, Math.min(1, newer.rad * Math.sin(angDist) / dist));
        const alpha = Math.PI - Math.asin(sinArg);
        const cosAlpha = Math.cos(alpha);
        const pushDist = dist * cosAlpha + Math.sqrt(dist * dist * (cosAlpha * cosAlpha - 1) + minDist * minDist);
        older.rad += pushDist;
    }
    older.update();
    return true;
}

// Resolves every collision triggered by adding `newFloret`, including
// ones cascading from florets it pushes (a push can shove a floret
// into a THIRD one it wasn't touching before) — via a worklist over
// the spatial grid instead of rechecking every floret pair ever
// placed. That brute-force rescan is what the original naive port of
// this algorithm did, and floret count grows with fieldSize² while
// that rescan cost grows with floret-count³ — fieldSize 35 alone took
// 30+ seconds before this optimization (verified directly), which
// would have frozen the tab given growInstant() re-runs this on every
// slider drag tick.
function resolveCollisions(newFloret, minDist) {
    const queue = [newFloret];
    const queued = new Set(queue);
    while (queue.length) {
        const a = queue.shift();
        queued.delete(a);
        for (const b of grid.neighbors(a)) {
            const newer = a.order > b.order ? a : b;
            const older = a.order > b.order ? b : a;
            if (pushApart(newer, older, minDist)) {
                grid.updatePosition(older);
                if (!queued.has(older)) { queue.push(older); queued.add(older); }
                // `a` itself just moved — the rest of the neighbor
                // list above was computed from its old position, so
                // it's stale; re-queue `a` for a fresh lookup instead
                // of continuing to trust it (a real bug caught during
                // testing: skipping this caused a non-terminating loop).
                if (older === a) break;
            }
        }
    }
}

// Advances the simulation by one floret. Returns true once the
// pattern has filled the requested field size (or hit the safety cap).
function advanceOnce(floretSize, angleDeg, maxSize) {
    const newFloret = new Floret(2 * floretSize, creationAngle, nextOrder++);
    florets.push(newFloret);
    grid.add(newFloret);
    resolveCollisions(newFloret, 2 * floretSize);
    creationAngle += angleDeg;
    return florets[0].rad > maxSize * floretSize || florets.length >= MAX_FLORETS;
}

// The simulation works in fixed "world" pixel units (a floret of
// size 10 is 10 world-px wide) regardless of how big the field gets,
// but the stage is a fixed on-screen size — so everything is drawn
// scaled down to fit the field's worst-case extent (maxSize*floretSize)
// inside the stage, rather than clipping large fields.
//
// The growth-stop check only tracks one specific floret's radius (see
// advanceOnce), which for a spiral is a good proxy for the pattern's
// overall extent, but for a degenerate generation angle (e.g. 45°,
// 90°) that grows as straight radiating arms instead, a DIFFERENT
// arm can already reach further out before that check trips —
// confirmed visually clipping the stage edge. SAFETY_MARGIN is a
// flat extra shrink to cover that gap rather than computing the
// true worst case across every arm shape.
const SAFETY_MARGIN = 0.95;
function getScale(floretSize, maxSize) {
    const margin = 10; // px of breathing room at the stage edge
    const worldRadius = maxSize * floretSize + floretSize;
    return ((stageSize / 2 - margin) / worldRadius) * SAFETY_MARGIN;
}

function render() {
    const floretSize = getFloretSize();
    const scale = getScale(floretSize, getMaxSize());
    const c = stageSize / 2;

    ctx.clearRect(0, 0, stageSize, stageSize);

    ctx.fillStyle = '#d8d8d0';
    ctx.beginPath();
    ctx.arc(c, c, 2, 0, 2 * Math.PI);
    ctx.fill();

    const drawnRadius = Math.max(1, floretSize * scale);
    ctx.fillStyle = '#e8a33d';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.lineWidth = 1;
    for (const f of florets) {
        const r = Math.max(0.5, drawnRadius * f.pop);
        ctx.beginPath();
        ctx.arc(f.displayX * scale + c, f.displayY * scale + c, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    drawGenerationAngle(c, scale);
}

// A "compass needle" from the center to the currently growing floret
// — the last one placed, which is still easing in (pop < 1) during
// an animated run. Tracks its actual display position, so the needle
// follows it smoothly if a later push slides it further out too.
function drawGenerationAngle(c, scale) {
    if (florets.length === 0) return;
    const current = florets[florets.length - 1];
    const x2 = current.displayX * scale + c;
    const y2 = current.displayY * scale + c;

    ctx.save();
    ctx.strokeStyle = '#1e4d8b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(c, c);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.fillStyle = '#1e4d8b';
    ctx.beginPath();
    ctx.arc(x2, y2, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
}

function updateStatsText() {
    canvasTitleEl.innerHTML = t('canvasTitle')
        .replace('{angle}', getAngle().toFixed(3))
        .replace('{n}', florets.length);
}

function renderOverlays(floretSize) {
    const scale = getScale(floretSize, getMaxSize());
    if (showSpirals) drawLinks(scale, floretSize, 3 * floretSize, 1);
    if (showAdjacents) drawLinks(scale, floretSize, 2.05 * floretSize, Math.max(2, Math.floor(floretSize * scale / 3)));
}

function drawLinks(scale, floretSize, maxDist, lineWidth) {
    ctx.strokeStyle = 'rgba(74, 124, 58, 0.55)';
    ctx.lineWidth = lineWidth;
    const c = stageSize / 2;
    for (let i = 0; i < florets.length - 1; i++) {
        for (let j = i + 1; j < florets.length; j++) {
            if (florets[i].distanceTo(florets[j]) <= maxDist) {
                ctx.beginPath();
                ctx.moveTo(florets[i].x * scale + c, florets[i].y * scale + c);
                ctx.lineTo(florets[j].x * scale + c, florets[j].y * scale + c);
                ctx.stroke();
            }
        }
    }
    ctx.lineWidth = 1;
}

function stopGrowth() {
    if (growRafId !== null) {
        cancelAnimationFrame(growRafId);
        growRafId = null;
    }
}

function finishGrowth(floretSize) {
    render();
    renderOverlays(floretSize);
    updateStatsText();
}

// Eases every floret's drawn position/size toward its resolved
// physics state (see the Floret class), one animation frame at a
// time, so a push (or a brand new floret popping in) reads as
// motion instead of a jump. Returns whether anything is still
// moving, so the growth loop below knows when it can stop.
const EASE = 0.22;
const SETTLE_EPSILON = 0.05;
function tickAnimation() {
    let stillAnimating = false;
    for (const f of florets) {
        const radGap = f.rad - f.displayRad;
        if (Math.abs(radGap) > SETTLE_EPSILON) {
            f.displayRad += radGap * EASE;
            stillAnimating = true;
        } else {
            f.displayRad = f.rad;
        }
        f.updateDisplay();

        if (1 - f.pop > SETTLE_EPSILON) {
            f.pop += (1 - f.pop) * EASE;
            stillAnimating = true;
        } else {
            f.pop = 1;
        }
    }
    return stillAnimating;
}

// Snaps every floret straight to its resolved state, skipping the
// grow/slide animation — used after growInstant()'s synchronous loop,
// which has no animation frames to ease across.
function settleAnimation() {
    for (const f of florets) {
        f.displayRad = f.rad;
        f.updateDisplay();
        f.pop = 1;
    }
}

function resetFlorets(floretSize) {
    florets = [];
    creationAngle = 0;
    nextOrder = 0;
    grid = new SpatialGrid(2 * floretSize);
}

// Params for the in-progress animated run, plus timing state so
// growFrame knows when (real, elapsed) time calls for the next
// floret — re-reading getGrowthSpeed() each check rather than
// capturing it once means a mid-run speed change just takes effect
// on its own, no need to tear down and restart anything.
let growParams = null;
let growElapsedSinceLastFloret = 0;
let growFinishedAdding = false;

function growFrame(timestamp) {
    if (growFrame.lastTimestamp === undefined) growFrame.lastTimestamp = timestamp;
    const dt = timestamp - growFrame.lastTimestamp;
    growFrame.lastTimestamp = timestamp;

    if (!growFinishedAdding) {
        growElapsedSinceLastFloret += dt;
        const speed = getGrowthSpeed();
        // A while loop (not if) so a slow frame rate relative to a
        // fast speed preset still adds the right number of florets
        // instead of falling behind.
        while (!growFinishedAdding && growElapsedSinceLastFloret >= speed) {
            growElapsedSinceLastFloret -= speed;
            const finished = advanceOnce(growParams.floretSize, growParams.angleDeg, growParams.maxSize);
            updateStatsText();
            if (finished) growFinishedAdding = true;
        }
    }

    const stillAnimating = tickAnimation();
    render();

    if (growFinishedAdding && !stillAnimating) {
        growRafId = null;
        finishGrowth(growParams.floretSize);
        return;
    }
    growRafId = requestAnimationFrame(growFrame);
}

function growAnimated() {
    stopGrowth();
    const floretSize = getFloretSize();
    resetFlorets(floretSize);
    growParams = { floretSize, angleDeg: getAngle(), maxSize: getMaxSize() };
    growElapsedSinceLastFloret = 0;
    growFinishedAdding = false;
    growFrame.lastTimestamp = undefined;
    growRafId = requestAnimationFrame(growFrame);
}

function growInstant() {
    stopGrowth();
    const floretSize = getFloretSize();
    resetFlorets(floretSize);
    const angleDeg = getAngle();
    const maxSize = getMaxSize();
    let finished = false;
    while (!finished) finished = advanceOnce(floretSize, angleDeg, maxSize);
    settleAnimation();
    finishGrowth(floretSize);
}

growBtn.addEventListener('click', growAnimated);

applyStaticDict();
renderSizeToggle();
renderSpeedToggle();
setAngle(getAngle());
resizeCanvas();
growAnimated();
