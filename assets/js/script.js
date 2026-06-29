// ----- hero IDE editor: AboutMe.java (autocomplete stile IntelliJ, in loop) -----
// Mini-editor con cursore "|": digita carattere per carattere, auto-chiude le
// parentesi ({|}), indenta come un IDE (Invio dentro un blocco manda la "}" due
// righe sotto), numera le righe. A fine scrittura: pausa, "Ctrl+A" (seleziona
// tutto), cancella, torna a 1 riga e ricomincia.
(function () {
    const body = document.getElementById('ideBody');
    const fileNameEl = document.getElementById('ideFileName');
    if (!body) return;

    const INDENT = 4;                         // come IntelliJ (4 spazi)
    const FILE = 'AboutMe.java';

    // ---- modello: righe di celle {ch, cls} + cursore {ln, col} ----
    let lines, cur, selecting;
    function reset() { lines = [[]]; cur = { ln: 0, col: 0 }; selecting = false; }
    const line = () => lines[cur.ln];
    function indentCells(n) { const a = []; for (let i = 0; i < n; i++) a.push({ ch: ' ', cls: 'text' }); return a; }
    function indentOf(ln) { let n = 0; const L = lines[ln]; while (n < L.length && L[n].ch === ' ') n++; return n; }

    function insert(ch, cls) { line().splice(cur.col, 0, { ch, cls: cls || 'text' }); cur.col++; }
    function insertAfter(ch, cls) { line().splice(cur.col, 0, { ch, cls: cls || 'text' }); } // non muove il cursore
    function moveRight() { cur.col++; }

    function smartEnter() {
        const before = line().slice(0, cur.col);
        const after = line().slice(cur.col);
        const base = (function () { let n = 0; while (n < before.length && before[n].ch === ' ') n++; return n; })();
        const prev = before.length ? before[before.length - 1].ch : '';
        const next = after.length ? after[0].ch : '';
        lines[cur.ln] = before;
        if (prev === '{' && next === '}') {
            // espandi il blocco: riga vuota indentata + "}" sotto
            const mid = indentCells(base + INDENT);
            const close = indentCells(base).concat(after);
            lines.splice(cur.ln + 1, 0, mid, close);
            cur.ln += 1; cur.col = base + INDENT;
        } else {
            const nl = indentCells(base).concat(after);
            lines.splice(cur.ln + 1, 0, nl);
            cur.ln += 1; cur.col = base;
        }
    }

    // ---- render con cursore e selezione ----
    function render() {
        body.innerHTML = '';
        for (let i = 0; i < lines.length; i++) {
            const row = document.createElement('div'); row.className = 'ln';
            const num = document.createElement('span'); num.className = 'ln-num';
            num.textContent = String(i + 1).padStart(2, ' ');
            row.appendChild(num);
            const content = document.createElement('span'); content.className = 'ln-content';
            const nodes = [];
            for (const cell of lines[i]) {
                const s = document.createElement('span');
                s.className = 'hl-' + (cell.cls || 'text') + (selecting ? ' ide-sel' : '');
                s.textContent = cell.ch;
                nodes.push(s);
            }
            if (!selecting && cur.ln === i) {
                const caret = document.createElement('span'); caret.className = 'ide-caret';
                nodes.splice(Math.max(0, Math.min(cur.col, nodes.length)), 0, caret);
            }
            nodes.forEach(n => content.appendChild(n));
            row.appendChild(content);
            body.appendChild(row);
        }
    }

    // ---- programma di battitura (atomico, un passo per tick) ----
    const rnd = (a, b) => a + Math.floor(Math.random() * (b - a));
    function buildProgram() {
        const P = [];
        const type = (txt, cls) => { for (const ch of txt) P.push({ a: 'ins', ch, cls, d: rnd(30, 80) }); };
        const open = (o, c, cls) => P.push({ a: 'open', o, c, cls: cls || 'text', d: 70 });
        const over = () => P.push({ a: 'over', d: 55 });
        const enter = () => P.push({ a: 'enter', d: 130 });
        const str = (txt) => { open('"', '"', 'str'); for (const ch of txt) P.push({ a: 'ins', ch, cls: 'str', d: rnd(30, 70) }); over(); };
        const wait = (d) => P.push({ a: 'wait', d });

        type('public class', 'key'); type(' Developer ', 'text'); open('{', '}', 'text'); enter();
        type('String', 'key'); type(' name = ', 'text'); str('Filippo'); type(';', 'text'); enter();
        type('String[]', 'key'); type(' stack = ', 'text'); open('{', '}', 'text');
        str('Java'); type(', ', 'text'); str('PHP'); type(', ', 'text'); str('JS'); over(); type(';', 'text'); enter();
        type('boolean', 'key'); type(' curiousByNature = ', 'text'); type('true', 'key'); type(';', 'text'); enter();
        type('// Bukkit plugins, Discord bots,', 'com'); enter();
        type('// Laravel & Node.js projects', 'com');

        wait(2600);
        P.push({ a: 'selAll', d: 1100 });   // Ctrl+A
        P.push({ a: 'clear', d: 650 });     // cancella tutto -> 1 riga
        wait(500);
        return P;
    }

    let P = [], pi = 0;
    function run() {
        if (pi >= P.length) { P = buildProgram(); pi = 0; }
        const step = P[pi++];
        switch (step.a) {
            case 'ins': insert(step.ch, step.cls); break;
            case 'open': insert(step.o, step.cls); insertAfter(step.c, step.cls); break;
            case 'over': moveRight(); break;
            case 'enter': smartEnter(); break;
            case 'selAll': selecting = true; break;
            case 'clear': reset(); break;
            case 'wait': break;
        }
        render();
        setTimeout(run, step.d);
    }

    function typeFileName(done) {
        if (!fileNameEl) { done(); return; }
        fileNameEl.textContent = '';
        let k = 0;
        (function nf() {
            fileNameEl.textContent = FILE.slice(0, k);
            if (k++ < FILE.length) setTimeout(nf, 55); else setTimeout(done, 350);
        })();
    }

    reset(); render();
    setTimeout(() => typeFileName(() => { P = buildProgram(); pi = 0; run(); }), 500);
})();

// ----- hero role: effetto macchina da scrivere -----
// I ruoli arrivano dal modulo della lingua attiva (I18N.onChange): l'animazione
// si riavvia da sola ad ogni cambio lingua. Fallback no-JS: il testo statico
// già presente in #roleText.
(function () {
    const el = document.getElementById('roleText');
    if (!el || !window.I18N || typeof window.I18N.onChange !== 'function') return;

    const TYPE = 75, ERASE = 40, HOLD = 1500, GAP = 350;
    let roles = [], idx = 0, char = 0, deleting = false, timer = null;

    function tick() {
        const word = roles[idx] || '';
        if (!deleting) {
            char++;
            el.textContent = word.slice(0, char);
            if (char >= word.length) { deleting = true; timer = setTimeout(tick, HOLD); return; }
            timer = setTimeout(tick, TYPE);
        } else {
            char--;
            el.textContent = word.slice(0, char);
            if (char <= 0) { deleting = false; idx = (idx + 1) % roles.length; timer = setTimeout(tick, GAP); return; }
            timer = setTimeout(tick, ERASE);
        }
    }

    function start(newRoles) {
        clearTimeout(timer);
        roles = (Array.isArray(newRoles) && newRoles.length) ? newRoles.slice() : [el.textContent].filter(Boolean);
        idx = 0; char = 0; deleting = false;
        el.textContent = '';
        if (roles.length) tick();
    }

    window.I18N.onChange(cfg => start(cfg && cfg.roles));
})();

// ----- mobile nav toggle -----
const navlinks = document.getElementById('navlinks');
const navtoggle = document.getElementById('navtoggle');
navtoggle.addEventListener('click', () => navlinks.classList.toggle('open'));
navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

// ----- skills IDE explorer -----
const treeItems = document.querySelectorAll('#skillTree .tree-item');
const skillBlocks = document.querySelectorAll('.skill-block');
treeItems.forEach(item => {
    item.addEventListener('click', () => {
        treeItems.forEach(i => i.classList.remove('active'));
        skillBlocks.forEach(b => b.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(item.dataset.target).classList.add('active');
    });
});

// ----- footer year -----
document.getElementById('year').textContent = new Date().getFullYear();

// ----- footer version (version.json generato da GitHub Actions a ogni deploy) -----
fetch('version.json')
    .then(r => r.ok ? r.json() : null)
    .then(v => {
        if (!v) return;
        const el = document.getElementById('versionTag');
        if (!el) return;
        const p = (v.date || '').split('-');
        const dateStr = p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : v.date;
        el.textContent = `${v.version} · ${dateStr}`;
    })
    .catch(() => {});

// ----- contact form (Google Sheet endpoint, da mantenere o sostituire) -----
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeXu86g9wAgDF_kDZlTU-zEMJnlPlD7Udp5WaIbhZCT-VutI91aGwNqruESLN6lTcEJw/exec';
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => { form.reset(); })
        .catch(err => console.error('Errore invio form:', err));
});

// ----- blocco zoom (pinch touchpad, Ctrl+rotellina, scorciatoie tastiera, gesture Safari) -----
// Pinch del touchpad e Ctrl+scroll generano un evento 'wheel' con ctrlKey=true
window.addEventListener('wheel', e => {
    if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// Scorciatoie: Ctrl/Cmd + ('+', '-', '=', '_', '0')
window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '_', '0'].includes(e.key)) {
        e.preventDefault();
    }
});

// Safari (macOS/iOS): eventi gesture del pinch
['gesturestart', 'gesturechange', 'gestureend'].forEach(evt =>
    document.addEventListener(evt, e => e.preventDefault())
);
