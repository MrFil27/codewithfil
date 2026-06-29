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
