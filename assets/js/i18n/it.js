// ============================================================================
//  Modulo lingua: Italiano  (lingua base)
// ----------------------------------------------------------------------------
//  `base: true`  ->  i testi italiani sono quelli scritti nel markup di
//  index.html: il motore li legge dal DOM al primo avvio, quindi qui NON
//  servono le `strings`. Restano solo etichetta del menu, bandiera e meta.
//  Si registra nel motore i18n (assets/js/i18n.js).
// ============================================================================
window.I18N.register('it', {
    label: 'Italiano',
    flag: 'flag-it',
    base: true,
    // Ruoli che scorrono nel sottotitolo dell'hero (effetto macchina da scrivere).
    roles: ['Java developer', 'Backend developer', 'Modeler & texturer'],
    meta: {
        htmlLang: 'it',
        title: 'CodeWithFil — Java & Web Developer | Portfolio',
        description: 'Sviluppatore Java e Web. Plugin Bukkit, bot Discord, applicazioni web con Laravel e Spring Boot. 6+ anni di esperienza in sviluppo backend e Minecraft.'
    }
});
