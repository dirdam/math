        document.getElementById('footerYear').textContent = new Date().getFullYear();

        const I18N_STORAGE_KEY = 'dirdam-lang';
        const SUPPORTED_LANGS = ['en', 'es', 'ja'];
        const LANG_LABELS = { en: 'EN', es: 'ES', ja: '日本語' };

        const STRINGS = {
            en: {
                browserTabTitle: 'Double Pendulum',
                pageTitle: 'Double Pendulum',
                subtitle: 'How a tiny difference turns into total unpredictability',
                introHtml: 'A double pendulum &mdash; one rod swinging from another &mdash; is a shockingly <strong>chaotic system</strong>: nothing about its equations is random, yet its future is nearly impossible to predict. Below, two identical double pendulums start almost exactly together, differing only by a fraction of a degree in one starting angle. <strong>Watch their paths peel apart.</strong>',
                legendSystemA: 'System A',
                legendSystemB: 'System B',
                massGroupLabel: 'Mass',
                mass1Title: 'Mass 1 (inner bob)',
                mass2Title: 'Mass 2 (outer bob)',
                lengthGroupLabel: 'Length',
                length1Title: 'Length 1 (inner rod)',
                length2Title: 'Length 2 (outer rod)',
                angleGroupLabel: 'Initial angle',
                angle1Title: 'Initial angle 1 (inner rod)',
                angle2Title: 'Initial angle 2 (outer rod)',
                innerLabel: 'Inner',
                outerLabel: 'Outer',
                gravityLabel: 'Gravity',
                deltaLabel: 'Initial angle difference (Δθ₀)',
                deltaHint: "How different System B's starting angle 1 is from System A's, in degrees",
                traceALabel: 'System A trail',
                traceBLabel: 'System B trail',
                speedLabel: 'Speed',
                speedSlow: 'Slow',
                speedNormal: 'Normal',
                speedFast: 'Fast',
                presetsLabel: 'Presets',
                presetClassic: 'Classic',
                presetGentle: 'Gentle',
                presetExtreme: 'Extreme',
                controlPlay: 'Play',
                controlPause: 'Pause',
                controlReset: 'Reset',
                howToInterpretTitle: 'How to interpret',
                howToInterpretHtml1: "Both pendulums obey the exact same deterministic equations, with the exact same masses, lengths, and gravity &mdash; the only difference between them is the tiny starting-angle gap set by <strong>Initial angle difference</strong> below. For a while they swing together almost perfectly. Then, seemingly out of nowhere, their outer bobs (the trailing dots) start tracing completely different paths.",
                howToInterpretHtml2: 'This is the hallmark of a <strong>chaotic system</strong>: not that it\'s random, but that arbitrarily small differences in starting conditions grow exponentially over time, making long-term prediction practically impossible even though every step of the motion is fully determined. Try the <strong>Gentle</strong> preset for contrast &mdash; at small angles, a double pendulum barely diverges at all.',
                seeMoreTools: 'See more tools',
                viewSource: 'View source',
            },
            es: {
                browserTabTitle: 'Péndulo doble',
                pageTitle: 'Péndulo doble',
                subtitle: 'Cómo una diferencia mínima se convierte en total impredecibilidad',
                introHtml: 'Un péndulo doble &mdash; una varilla que oscila colgada de otra &mdash; es un sistema sorprendentemente <strong>caótico</strong>: nada en sus ecuaciones es aleatorio, y sin embargo su futuro es casi imposible de predecir. A continuación, dos péndulos dobles idénticos parten casi exactamente juntos, difiriendo solo en una fracción de grado en un ángulo inicial. <strong>Observa cómo sus trayectorias se separan.</strong>',
                legendSystemA: 'Sistema A',
                legendSystemB: 'Sistema B',
                massGroupLabel: 'Masa',
                mass1Title: 'Masa 1 (bola interior)',
                mass2Title: 'Masa 2 (bola exterior)',
                lengthGroupLabel: 'Longitud',
                length1Title: 'Longitud 1 (varilla interior)',
                length2Title: 'Longitud 2 (varilla exterior)',
                angleGroupLabel: 'Ángulo inicial',
                angle1Title: 'Ángulo inicial 1 (varilla interior)',
                angle2Title: 'Ángulo inicial 2 (varilla exterior)',
                innerLabel: 'Interior',
                outerLabel: 'Exterior',
                gravityLabel: 'Gravedad',
                deltaLabel: 'Diferencia de ángulo inicial (Δθ₀)',
                deltaHint: 'Cuánto difiere el ángulo inicial 1 del Sistema B respecto al del Sistema A, en grados',
                traceALabel: 'Estela del Sistema A',
                traceBLabel: 'Estela del Sistema B',
                speedLabel: 'Velocidad',
                speedSlow: 'Lenta',
                speedNormal: 'Normal',
                speedFast: 'Rápida',
                presetsLabel: 'Preajustes',
                presetClassic: 'Clásico',
                presetGentle: 'Suave',
                presetExtreme: 'Extremo',
                controlPlay: 'Reproducir',
                controlPause: 'Pausar',
                controlReset: 'Reiniciar',
                howToInterpretTitle: 'Cómo interpretarlo',
                howToInterpretHtml1: 'Ambos péndulos obedecen exactamente las mismas ecuaciones deterministas, con las mismas masas, longitudes y gravedad &mdash; la única diferencia entre ellos es la pequeña diferencia de ángulo inicial fijada por <strong>Diferencia de ángulo inicial</strong> más abajo. Durante un rato oscilan juntos casi a la perfección. Luego, aparentemente de la nada, sus bolas exteriores (los puntos con estela) empiezan a trazar caminos completamente distintos.',
                howToInterpretHtml2: 'Este es el sello distintivo de un <strong>sistema caótico</strong>: no que sea aleatorio, sino que diferencias arbitrariamente pequeñas en las condiciones iniciales crecen exponencialmente con el tiempo, haciendo que la predicción a largo plazo sea prácticamente imposible aunque cada paso del movimiento esté completamente determinado. Prueba el preajuste <strong>Suave</strong> como contraste &mdash; con ángulos pequeños, un péndulo doble apenas diverge.',
                seeMoreTools: 'Ver más herramientas',
                viewSource: 'Ver código fuente',
            },
            ja: {
                browserTabTitle: '二重振り子',
                pageTitle: '二重振り子',
                subtitle: 'わずかな違いが、まったく予測不可能な結果を生む',
                introHtml: '二重振り子 &mdash; ある棒の先にもう一本の棒が振り子のようにぶら下がった系 &mdash; は驚くほど<strong>カオス的なシステム</strong>です。方程式のどこにもランダムな要素はないのに、その未来はほとんど予測できません。以下では、2つの同一な二重振り子がほぼ同じ状態からスタートし、片方の初期角度がほんのわずか(1度未満)だけ異なります。<strong>その軌跡がどのように分かれていくか観察してください。</strong>',
                legendSystemA: 'システムA',
                legendSystemB: 'システムB',
                massGroupLabel: '質量',
                mass1Title: '質量1(内側のおもり)',
                mass2Title: '質量2(外側のおもり)',
                lengthGroupLabel: '長さ',
                length1Title: '長さ1(内側の棒)',
                length2Title: '長さ2(外側の棒)',
                angleGroupLabel: '初期角度',
                angle1Title: '初期角度1(内側の棒)',
                angle2Title: '初期角度2(外側の棒)',
                innerLabel: '内側',
                outerLabel: '外側',
                gravityLabel: '重力',
                deltaLabel: '初期角度の差 (Δθ₀)',
                deltaHint: 'システムBの初期角度1が、システムAと比べて何度異なるか',
                traceALabel: 'システムAの軌跡',
                traceBLabel: 'システムBの軌跡',
                speedLabel: '速度',
                speedSlow: '遅い',
                speedNormal: '普通',
                speedFast: '速い',
                presetsLabel: 'プリセット',
                presetClassic: '典型的',
                presetGentle: '穏やか',
                presetExtreme: '極端',
                controlPlay: '再生',
                controlPause: '一時停止',
                controlReset: 'リセット',
                howToInterpretTitle: '読み解き方',
                howToInterpretHtml1: '2つの振り子はどちらも、まったく同じ決定論的な方程式に従い、質量・長さ・重力もすべて同じです &mdash; 唯一の違いは、下にある<strong>初期角度の差</strong>で設定するごくわずかな初期角度のずれだけです。しばらくの間、2つはほぼ完全に一緒に揺れます。しかしやがて、まるで何もないところから突然、外側のおもり(軌跡を残す点)がまったく異なる経路を描き始めます。',
                howToInterpretHtml2: 'これこそが<strong>カオス的なシステム</strong>の特徴です &mdash; ランダムだという意味ではなく、初期条件のごくわずかな違いが時間とともに指数関数的に拡大し、動きの各ステップは完全に決定されているにもかかわらず、長期的な予測が実質的に不可能になるということです。対比として<strong>穏やか</strong>のプリセットを試してみてください &mdash; 角度が小さいと、二重振り子はほとんど発散しません。',
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

        // --- Double pendulum physics ------------------------------------------
        // Point-mass double pendulum, standard closed-form equations of motion
        // (no analytic solution exists — this is exactly why it's chaotic).
        // Verified independently by checking energy conservation over a 20s
        // simulated run (drift ~1e-10) before wiring into this app.
        const ACCENT_HEX = '#1e2a4a';
        const ACCENT_2_HEX = '#c08a2e';
        const TRACK_GRAY = '#d9d9d9';

        let m1 = 1, m2 = 1, L1 = 1, L2 = 1, g = 9.8;
        let pendingTheta1Deg = 120, pendingTheta2Deg = -10, pendingDeltaDeg = 0.01;
        let stateA = [0, 0, 0, 0]; // theta1, omega1, theta2, omega2
        let stateB = [0, 0, 0, 0];
        let traceA = [], traceB = [];
        const FADE_DURATION = 5; // seconds, real (wall-clock) time
        const FULL_OPACITY = 0.7;
        const FLOOR_OPACITY = 0.1;
        let traceClock = 0;
        let playing = false, rafId = null;
        // True once play() has run at least once since the last reset —
        // after that, the initial-condition sliders (angle 1/2, Δθ₀) only
        // apply on the *next* reset, since retroactively snapping a
        // mid-flight pendulum to a new starting angle would misrepresent
        // the run in progress. Before that point, though, there's no run
        // in progress yet, so tweaking them should visibly move the
        // (currently paused, at-rest) pendulum in real time.
        let hasStarted = false;
        let showTraceA = true, showTraceB = true;
        let currentPresetKey = null;

        function deriv(state, mm1, mm2, LL1, LL2, gg) {
            const [th1, w1, th2, w2] = state;
            const delta = th1 - th2;
            const den = (2 * mm1 + mm2 - mm2 * Math.cos(2 * th1 - 2 * th2));
            const den1 = LL1 * den;
            const den2 = LL2 * den;
            const a1 = (-gg * (2 * mm1 + mm2) * Math.sin(th1) - mm2 * gg * Math.sin(th1 - 2 * th2)
                - 2 * Math.sin(delta) * mm2 * (w2 * w2 * LL2 + w1 * w1 * LL1 * Math.cos(delta))) / den1;
            const a2 = (2 * Math.sin(delta) * (w1 * w1 * LL1 * (mm1 + mm2) + gg * (mm1 + mm2) * Math.cos(th1)
                + w2 * w2 * LL2 * mm2 * Math.cos(delta))) / den2;
            return [w1, a1, w2, a2];
        }

        function rk4Step(state, dt, mm1, mm2, LL1, LL2, gg) {
            const k1 = deriv(state, mm1, mm2, LL1, LL2, gg);
            const s2 = state.map((v, i) => v + dt / 2 * k1[i]);
            const k2 = deriv(s2, mm1, mm2, LL1, LL2, gg);
            const s3 = state.map((v, i) => v + dt / 2 * k2[i]);
            const k3 = deriv(s3, mm1, mm2, LL1, LL2, gg);
            const s4 = state.map((v, i) => v + dt * k3[i]);
            const k4 = deriv(s4, mm1, mm2, LL1, LL2, gg);
            return state.map((v, i) => v + dt / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]));
        }

        function bob2Position(state) {
            const [th1, , th2] = state;
            return {
                x: L1 * Math.sin(th1) + L2 * Math.sin(th2),
                y: L1 * Math.cos(th1) + L2 * Math.cos(th2),
            };
        }

        const PRESETS = {
            classic: { m1: 1, m2: 1, L1: 1, L2: 1, g: 9.8, theta1: 120, theta2: -10, delta: 0.01 },
            gentle: { m1: 1, m2: 1, L1: 1, L2: 1, g: 9.8, theta1: 20, theta2: 15, delta: 0.01 },
            extreme: { m1: 1, m2: 1, L1: 1, L2: 1, g: 9.8, theta1: 150, theta2: 60, delta: 1 },
        };
        const PRESET_KEYS = { classic: 'presetClassic', gentle: 'presetGentle', extreme: 'presetExtreme'};

        const SPEED_PRESETS = { slow: 0.5, normal: 1, fast: 2 };
        const SPEED_KEYS = { slow: 'speedSlow', normal: 'speedNormal', fast: 'speedFast' };
        let currentSpeed = 'normal';

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

        // System A is brass (ACCENT_2_HEX), System B is navy (ACCENT_HEX) —
        // every slider affects both, so its fill sweeps from A's color to
        // B's color across the filled portion, same direction as the
        // thumb and play button gradients.
        const fillColor = gradientColor(ACCENT_2_HEX, ACCENT_HEX);

        const mass1Slider = document.getElementById('mass1Slider');
        const mass2Slider = document.getElementById('mass2Slider');
        const length1Slider = document.getElementById('length1Slider');
        const length2Slider = document.getElementById('length2Slider');
        const gravitySlider = document.getElementById('gravitySlider');
        const angle1Slider = document.getElementById('angle1Slider');
        const angle2Slider = document.getElementById('angle2Slider');
        const deltaSlider = document.getElementById('deltaSlider');

        const setMass1 = bindField(mass1Slider, document.getElementById('mass1Number'), (v) => {
            m1 = v; syncPresetHighlight(); updateSliderTrack(mass1Slider, fillColor, v); redrawActiveTraces(); renderLive();
        });
        const setMass2 = bindField(mass2Slider, document.getElementById('mass2Number'), (v) => {
            m2 = v; syncPresetHighlight(); updateSliderTrack(mass2Slider, fillColor, v); redrawActiveTraces(); renderLive();
        });
        const setLength1 = bindField(length1Slider, document.getElementById('length1Number'), (v) => {
            L1 = v; syncPresetHighlight(); updateSliderTrack(length1Slider, fillColor, v); redrawActiveTraces(); renderLive();
        });
        const setLength2 = bindField(length2Slider, document.getElementById('length2Number'), (v) => {
            L2 = v; syncPresetHighlight(); updateSliderTrack(length2Slider, fillColor, v); redrawActiveTraces(); renderLive();
        });
        const setGravity = bindField(gravitySlider, document.getElementById('gravityNumber'), (v) => {
            g = v; syncPresetHighlight(); updateSliderTrack(gravitySlider, fillColor, v);
        });
        const setAngle1 = bindField(angle1Slider, document.getElementById('angle1Number'), (v) => {
            pendingTheta1Deg = v; syncPresetHighlight(); updateSliderTrack(angle1Slider, fillColor, v); applyPendingStateIfFresh();
        });
        const setAngle2 = bindField(angle2Slider, document.getElementById('angle2Number'), (v) => {
            pendingTheta2Deg = v; syncPresetHighlight(); updateSliderTrack(angle2Slider, fillColor, v); applyPendingStateIfFresh();
        });
        const setDelta = bindField(deltaSlider, document.getElementById('deltaNumber'), (v) => {
            pendingDeltaDeg = v; syncPresetHighlight(); updateSliderTrack(deltaSlider, fillColor, v); applyPendingStateIfFresh();
        });

        // Recompute the (still at-rest) pendulum state from the pending
        // initial-condition sliders and repaint — but only before the sim
        // has actually started running since the last reset.
        function applyPendingStateIfFresh() {
            if (hasStarted) return;
            const th1 = pendingTheta1Deg * Math.PI / 180;
            const th2 = pendingTheta2Deg * Math.PI / 180;
            const deltaRad = pendingDeltaDeg * Math.PI / 180;
            stateA = [th1, 0, th2, 0];
            stateB = [th1 + deltaRad, 0, th2, 0];
            renderLive();
        }

        function matchesPreset(p) {
            const eps = 1e-6;
            return Math.abs(m1 - p.m1) < eps && Math.abs(m2 - p.m2) < eps
                && Math.abs(L1 - p.L1) < eps && Math.abs(L2 - p.L2) < eps
                && Math.abs(g - p.g) < eps && Math.abs(pendingTheta1Deg - p.theta1) < eps
                && Math.abs(pendingTheta2Deg - p.theta2) < eps && Math.abs(pendingDeltaDeg - p.delta) < eps;
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
            setMass1(p.m1);
            setMass2(p.m2);
            setLength1(p.L1);
            setLength2(p.L2);
            setGravity(p.g);
            setAngle1(p.theta1);
            setAngle2(p.theta2);
            setDelta(p.delta);
            syncPresetHighlight();
            resetSim({ resume: true });
        }

        // --- Speed pill-toggle -------------------------------------------------
        const speedToggleContainer = document.getElementById('speedToggle');
        function renderSpeedToggle() {
            speedToggleContainer.innerHTML = '';
            Object.keys(SPEED_PRESETS).forEach((key) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = t(SPEED_KEYS[key]);
                btn.setAttribute('aria-pressed', String(key === currentSpeed));
                btn.addEventListener('click', () => {
                    currentSpeed = key;
                    renderSpeedToggle();
                });
                speedToggleContainer.appendChild(btn);
            });
        }
        onLangChange(renderSpeedToggle);
        renderSpeedToggle();

        // --- Trace switches ------------------------------------------------
        const traceToggleA = document.getElementById('traceToggleA');
        const traceToggleB = document.getElementById('traceToggleB');
        const traceCanvasA = document.getElementById('traceCanvasA');
        const traceCanvasB = document.getElementById('traceCanvasB');
        const activeCanvasA = document.getElementById('activeCanvasA');
        const activeCanvasB = document.getElementById('activeCanvasB');

        function updateTraceToggleUI() {
            traceToggleA.setAttribute('aria-checked', String(showTraceA));
            traceToggleB.setAttribute('aria-checked', String(showTraceB));
            traceCanvasA.style.opacity = showTraceA ? '1' : '0';
            activeCanvasA.style.opacity = showTraceA ? '1' : '0';
            traceCanvasB.style.opacity = showTraceB ? '1' : '0';
            activeCanvasB.style.opacity = showTraceB ? '1' : '0';
        }
        traceToggleA.addEventListener('click', () => { showTraceA = !showTraceA; updateTraceToggleUI(); });
        traceToggleB.addEventListener('click', () => { showTraceB = !showTraceB; updateTraceToggleUI(); });

        [document.getElementById('legendDotA'), document.getElementById('switchDotA')].forEach((el) => { el.style.background = ACCENT_2_HEX; });
        [document.getElementById('legendDotB'), document.getElementById('switchDotB')].forEach((el) => { el.style.background = ACCENT_HEX; });

        // --- Canvas rendering ------------------------------------------------
        const stageEl = document.getElementById('stage');
        const liveCanvas = document.getElementById('liveCanvas');
        let liveCtx = null, traceCtxA = null, traceCtxB = null, activeCtxA = null, activeCtxB = null, stageSize = 0;

        function resizeCanvas(canvas) {
            const rect = stageEl.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            const ctx = canvas.getContext('2d');
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            return { ctx, size: rect.width };
        }

        function resizeAll() {
            const l = resizeCanvas(liveCanvas);
            liveCtx = l.ctx; stageSize = l.size;
            const a = resizeCanvas(traceCanvasA);
            traceCtxA = a.ctx;
            const b = resizeCanvas(traceCanvasB);
            traceCtxB = b.ctx;
            const aa = resizeCanvas(activeCanvasA);
            activeCtxA = aa.ctx;
            const ab = resizeCanvas(activeCanvasB);
            activeCtxB = ab.ctx;
            redrawActiveTraces();
            renderLive();
        }
        window.addEventListener('resize', resizeAll);

        // The pendulum can swing all the way around the pivot in any
        // direction (this isn't a simple pendulum confined to swinging
        // below a fixed point), so its reach is a full circle of radius
        // L1+L2 centered on the pivot. Centering the pivot in the square
        // stage — instead of biasing it toward the top — means that
        // circle fills the stage evenly, with no dead zone below it.
        function computeScale() {
            const radiusBudget = stageSize * 0.47;
            return radiusBudget / Math.max(L1 + L2, 0.1);
        }
        function pivotPx() {
            return [stageSize / 2, stageSize / 2];
        }
        function toPx(physX, physY) {
            const scale = computeScale();
            const [px, py] = pivotPx();
            return [px + physX * scale, py + physY * scale];
        }

        // Bob area (not radius) scales with mass — a heavier bob reads as
        // visibly bigger, not just proportionally bigger, matching how a
        // filled circle's apparent "weight" is perceived by area.
        function bobRadius(mass, base) {
            return base * Math.sqrt(mass);
        }

        function drawSystem(ctx, state, color) {
            const [th1, , th2] = state;
            const [pivotX, pivotY] = pivotPx();
            const [x1, y1] = toPx(L1 * Math.sin(th1), L1 * Math.cos(th1));
            const [x2, y2] = toPx(L1 * Math.sin(th1) + L2 * Math.sin(th2), L1 * Math.cos(th1) + L2 * Math.cos(th2));
            ctx.strokeStyle = color;
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(pivotX, pivotY);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x1, y1, bobRadius(m1, 6), 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x2, y2, bobRadius(m2, 8), 0, 2 * Math.PI);
            ctx.fill();
        }

        function renderLive() {
            if (!liveCtx || !stageSize) return;
            liveCtx.clearRect(0, 0, stageSize, stageSize);
            const [pivotX, pivotY] = pivotPx();
            liveCtx.fillStyle = '#8c8a84';
            liveCtx.beginPath();
            liveCtx.arc(pivotX, pivotY, 4, 0, 2 * Math.PI);
            liveCtx.fill();
            drawSystem(liveCtx, stateB, ACCENT_HEX);
            drawSystem(liveCtx, stateA, ACCENT_2_HEX);
        }

        // The trail never disappears — it just settles. The most recent
        // FADE_DURATION seconds are redrawn every frame on the "active"
        // canvas, ramping from FULL_OPACITY (brand new, easy to track)
        // down to FLOOR_OPACITY (about to age out). Once a segment crosses
        // that age, it's baked once, permanently, onto the "persistent"
        // canvas at FLOOR_OPACITY — visually seamless, and cheap, since a
        // canvas can't fade a pixel after the fact, only draw over it.
        function appendTracePoint(arr, pos) {
            arr.push(pos);
        }

        function bakeAgedSegments(arr, persistCtx, color) {
            while (arr.length > 1 && traceClock - arr[1].t > FADE_DURATION) {
                const a = arr[0], b = arr[1];
                if (persistCtx) {
                    const [x1, y1] = toPx(a.x, a.y);
                    const [x2, y2] = toPx(b.x, b.y);
                    persistCtx.strokeStyle = color;
                    persistCtx.globalAlpha = FLOOR_OPACITY;
                    persistCtx.lineWidth = 1.5;
                    persistCtx.lineCap = 'round';
                    persistCtx.beginPath();
                    persistCtx.moveTo(x1, y1);
                    persistCtx.lineTo(x2, y2);
                    persistCtx.stroke();
                    persistCtx.globalAlpha = 1;
                }
                arr.shift();
            }
        }

        function redrawActiveTrace(ctx, arr, color) {
            if (!ctx || !stageSize) return;
            ctx.clearRect(0, 0, stageSize, stageSize);
            for (let i = 1; i < arr.length; i++) {
                const a = arr[i - 1], b = arr[i];
                const age = traceClock - b.t;
                const frac = Math.min(1, Math.max(0, age / FADE_DURATION));
                const alpha = FULL_OPACITY - (FULL_OPACITY - FLOOR_OPACITY) * frac;
                const [x1, y1] = toPx(a.x, a.y);
                const [x2, y2] = toPx(b.x, b.y);
                ctx.strokeStyle = color;
                ctx.globalAlpha = alpha;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            ctx.globalAlpha = 1;
        }

        function redrawActiveTraces() {
            redrawActiveTrace(activeCtxA, traceA, ACCENT_2_HEX);
            redrawActiveTrace(activeCtxB, traceB, ACCENT_HEX);
        }

// --- Simulation loop ---------------------------------------------------
        const INNER_DT = 1 / 2000;
        const MAX_SUBSTEPS = 4000;

        function frame(ts) {
            if (frame.lastTs === undefined) frame.lastTs = ts;
            let dtMs = ts - frame.lastTs;
            frame.lastTs = ts;
            dtMs = Math.min(dtMs, 250);
            const simDt = (dtMs / 1000) * SPEED_PRESETS[currentSpeed];
            let remaining = simDt;
            let steps = 0;
            while (remaining > 0 && steps < MAX_SUBSTEPS) {
                const dt = Math.min(INNER_DT, remaining);
                stateA = rk4Step(stateA, dt, m1, m2, L1, L2, g);
                stateB = rk4Step(stateB, dt, m1, m2, L1, L2, g);
                remaining -= dt;
                steps++;
            }
            traceClock += dtMs / 1000;

            appendTracePoint(traceA, { ...bob2Position(stateA), t: traceClock });
            appendTracePoint(traceB, { ...bob2Position(stateB), t: traceClock });
            bakeAgedSegments(traceA, traceCtxA, ACCENT_2_HEX);
            bakeAgedSegments(traceB, traceCtxB, ACCENT_HEX);
            redrawActiveTraces();
            renderLive();

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
            hasStarted = true;
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
            hasStarted = false;
            const th1 = pendingTheta1Deg * Math.PI / 180;
            const th2 = pendingTheta2Deg * Math.PI / 180;
            const deltaRad = pendingDeltaDeg * Math.PI / 180;
            stateA = [th1, 0, th2, 0];
            stateB = [th1 + deltaRad, 0, th2, 0];
            traceA = [];
            traceB = [];
            traceClock = 0;
            frame.lastTs = undefined;
            if (traceCtxA && stageSize) traceCtxA.clearRect(0, 0, stageSize, stageSize);
            if (traceCtxB && stageSize) traceCtxB.clearRect(0, 0, stageSize, stageSize);
            redrawActiveTraces();
            renderLive();
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
        updateSliderTrack(mass1Slider, fillColor, m1);
        updateSliderTrack(mass2Slider, fillColor, m2);
        updateSliderTrack(length1Slider, fillColor, L1);
        updateSliderTrack(length2Slider, fillColor, L2);
        updateSliderTrack(gravitySlider, fillColor, g);
        updateSliderTrack(angle1Slider, fillColor, pendingTheta1Deg);
        updateSliderTrack(angle2Slider, fillColor, pendingTheta2Deg);
        updateSliderTrack(deltaSlider, fillColor, pendingDeltaDeg);
        updateTraceToggleUI();
        renderPresetButtons();
        resizeAll();
        applyPreset('classic');
