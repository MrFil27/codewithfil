// ============================================================================
//  Motore i18n  ("i18n" = internationalization: la "i", 18 lettere, la "n";
//  come "l10n" = localization, "a11y" = accessibility).
// ----------------------------------------------------------------------------
//  Questo file contiene SOLO la logica: applica le traduzioni agli elementi
//  [data-i18n] / [data-i18n-placeholder] / [data-i18n-aria-label], costruisce
//  il menu a tendina delle lingue e ricorda la scelta in localStorage.
//
//  I TESTI non stanno qui: ogni lingua è un modulo in assets/js/i18n/<codice>.js
//  che si registra con  I18N.register(codice, config).
//
//  Convenzioni dei moduli lingua:
//    base:    true  ->  i contenuti sono letti dal markup (lingua del DOM),
//                       quindi il modulo non porta `strings`.
//    default: true  ->  lingua mostrata al primo accesso (nessuna preferenza).
//  L'ordine nel menu segue l'ordine di registrazione (= ordine degli <script>).
//
//  Aggiungere una lingua = creare assets/js/i18n/<codice>.js, aggiungere il
//  relativo <template> bandiera in index.html e includere il suo <script>.
//
//  Ordine di caricamento richiesto in index.html:
//    1) questo motore   2) i moduli i18n/<codice>.js   3) script.js
// ============================================================================
(function () {
    const STORAGE_KEY = 'cwf-lang';

    const registry = [];                              // moduli lingua, in ordine
    const baseline = { html: {}, placeholder: {}, ariaLabel: {} };
    const listeners = [];                             // callback notificati al cambio lingua
    let current = null;                               // config della lingua attiva

    const I18N = window.I18N = window.I18N || {};

    // Chiamata dai moduli lingua (assets/js/i18n/<codice>.js).
    I18N.register = function (code, config) {
        registry.push(Object.assign({ code: code }, config));
    };

    // API pubblica per altri script (es. l'animazione dei ruoli in script.js):
    // onChange(cb) registra un callback chiamato con la config della lingua
    // attiva ad ogni cambio (e subito, se una lingua è già attiva).
    I18N.onChange = function (cb) {
        if (typeof cb !== 'function') return;
        listeners.push(cb);
        if (current) cb(current);
    };
    I18N.current = function () { return current; };

    const byCode = code => registry.find(l => l.code === code);
    const baseLang = () => (registry.find(l => l.base) || registry[0] || {}).code;
    const defaultLang = () => {
        const d = registry.find(l => l.default);
        return d ? d.code : baseLang();
    };

    // L'italiano è scritto nel markup: lo catturo al primo avvio come "baseline",
    // così non va duplicato nei file delle traduzioni.
    function captureBaseline() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            baseline.html[el.dataset.i18n] = el.innerHTML;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            baseline.placeholder[el.dataset.i18nPlaceholder] = el.getAttribute('placeholder') || '';
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            baseline.ariaLabel[el.dataset.i18nAriaLabel] = el.getAttribute('aria-label') || '';
        });
    }

    function apply(code) {
        const lang = byCode(code) || {};
        current = lang;
        const dict = lang.base ? null : (lang.strings || {});
        const get = (map, key) => (dict && dict[key] != null) ? dict[key] : baseline[map][key];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = get('html', el.dataset.i18n);
            if (v != null) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const v = get('placeholder', el.dataset.i18nPlaceholder);
            if (v != null) el.setAttribute('placeholder', v);
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
            const v = get('ariaLabel', el.dataset.i18nAriaLabel);
            if (v != null) el.setAttribute('aria-label', v);
        });

        const meta = lang.meta;
        if (meta) {
            if (meta.htmlLang) document.documentElement.lang = meta.htmlLang;
            if (meta.title) document.title = meta.title;
            const desc = document.querySelector('meta[name="description"]');
            if (desc && meta.description) desc.setAttribute('content', meta.description);
        }

        updateSwitch(code);
        try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* no-op */ }

        listeners.forEach(cb => { try { cb(current); } catch (e) { /* no-op */ } });
    }

    // ---- menu a tendina delle lingue ----
    let switchEl, btn, menu, currentFlag;

    function flagNode(flagId) {
        const tpl = document.getElementById(flagId);
        return tpl ? tpl.content.cloneNode(true) : document.createTextNode('');
    }

    function buildMenu(active) {
        if (!menu) return;
        menu.innerHTML = '';
        registry.forEach(l => {
            const li = document.createElement('li');
            li.className = 'lang-option' + (l.code === active ? ' active' : '');
            li.setAttribute('role', 'option');
            li.setAttribute('data-lang', l.code);
            li.setAttribute('aria-selected', l.code === active ? 'true' : 'false');

            const flag = document.createElement('span');
            flag.className = 'flag';
            flag.appendChild(flagNode(l.flag));

            const label = document.createElement('span');
            label.className = 'lang-label';
            label.textContent = l.label || l.code;

            li.appendChild(flag);
            li.appendChild(label);
            li.addEventListener('click', () => { apply(l.code); closeMenu(); });
            menu.appendChild(li);
        });
    }

    function updateSwitch(active) {
        const l = byCode(active);
        if (l && currentFlag) {
            currentFlag.innerHTML = '';
            currentFlag.appendChild(flagNode(l.flag));
        }
        if (menu) menu.querySelectorAll('.lang-option').forEach(li => {
            const on = li.getAttribute('data-lang') === active;
            li.classList.toggle('active', on);
            li.setAttribute('aria-selected', on ? 'true' : 'false');
        });
    }

    function openMenu() { switchEl.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    function closeMenu() { if (switchEl) { switchEl.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } }

    function init() {
        if (!registry.length) return;

        switchEl = document.getElementById('langSwitch');
        btn = document.getElementById('langBtn');
        menu = document.getElementById('langMenu');
        currentFlag = document.getElementById('currentFlag');

        if (btn && menu && switchEl) {
            btn.addEventListener('click', e => {
                e.stopPropagation();
                switchEl.classList.contains('open') ? closeMenu() : openMenu();
            });
            document.addEventListener('click', e => { if (!switchEl.contains(e.target)) closeMenu(); });
            document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
        }

        captureBaseline();

        // Preferenza salvata se valida, altrimenti la lingua di default (default: true).
        const codes = registry.map(l => l.code);
        let initial = defaultLang();
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && codes.includes(saved)) initial = saved;
        } catch (e) { /* no-op */ }

        buildMenu(initial);
        apply(initial);
    }

    // I moduli lingua sono <script> successivi a questo: quando girano siamo
    // ancora in fase di parsing (readyState 'loading'), quindi l'init parte su
    // DOMContentLoaded, a registrazioni completate.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
