// ============================================================================
//  Modulo lingua: Inglese
// ----------------------------------------------------------------------------
//  `default: true`  ->  lingua mostrata al primo accesso (nessuna preferenza
//  salvata). Porta etichetta, bandiera, meta (title/description/lang) e tutte
//  le `strings` indicizzate per chiave `data-i18n` / `data-i18n-*`.
//  Si registra nel motore i18n (assets/js/i18n.js).
// ============================================================================
window.I18N.register('en', {
    label: 'English',
    flag: 'flag-en',
    default: true,
    // Ruoli che scorrono nel sottotitolo dell'hero (effetto macchina da scrivere).
    roles: ['Java developer', 'Web developer', 'Backend developer', 'Modeler & texturer'],
    // Unità usata dopo il numero nella riga dell'età, calcolata a runtime (script.js).
    ageUnit: 'years old',
    meta: {
        htmlLang: 'en',
        title: 'CodeWithFil - Java & Web Developer | Portfolio',
        description: 'Java and Web developer. Bukkit plugins, Discord bots, web applications with Laravel and Spring Boot. 6+ years of experience in backend and Minecraft development.'
    },
    strings: {
        // ---- Navbar ----
        'nav.code': 'Code',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'aria.menu': 'Open menu',
        'aria.lang': 'Change language',

        // ---- Hero ----
        'hero.title': 'Hi, I\'m <span class="accent">Filippo</span>',
        'hero.lede': 'I\'ve been building Bukkit plugins, Discord bots and web applications for several years. I like making things that work well, with no needless frills.',
        'hero.cta1': 'Get in touch',
        'hero.cta2': 'See my skills',

        // ---- About ----
        'about.eyebrow': 'who i am',
        'about.p1': 'I\'m naturally curious: I like understanding how things work and building them.',
        'about.p2': 'I build Paper/Bukkit plugins, Discord bots and web applications, across a wide range of languages and frameworks.',

        // ---- Skills ----
        'skills.eyebrow': 'skills',
        'skills.group.lang': 'Languages &amp; Frameworks',
        'skills.group.tools': 'Tools',

        'skill.java.lvl': 'Experience since 2021',
        'skill.java.p': 'My main language. For years I\'ve been working on <strong>Bukkit/Paper plugins</strong> for Minecraft and custom <strong>Discord bots</strong> built with the <strong>JDA</strong> library.',
        'skill.java.li1': '<strong>Lombok annotations</strong> and <strong>Sql2o</strong> - libraries I use regularly',
        'skill.java.li2': '<strong>Hibernate</strong>, <strong>Spring / Spring Boot</strong> - currently consolidating, on solid foundations carried over from plugins and databases, so the learning curve is short',

        'skill.web.lvl': 'Solid',
        'skill.web.p': 'Beyond native <strong>HTML, CSS and JavaScript</strong>, I work with professional PHP frameworks and modern styling libraries.',
        'skill.web.li1': '<strong>Laravel</strong> and <strong>CodeIgniter</strong> for the back-end',
        'skill.web.li2': '<strong>Tailwind CSS</strong> and other styling libraries for the front-end',

        'skill.node.lvl': 'Currently in use',
        'skill.node.p': 'Currently part of my web stack, and previously used for Discord and Telegram bots.',
        'skill.node.li1': 'Currently used in the active project <a href="https://endlesshorizons.it" target="_blank" style="color:var(--green);">endlesshorizons.it</a>, alongside Laravel, npm and Tailwind CSS',

        'skill.flutter.lvl': 'Personal project',
        'skill.flutter.p': 'Google\'s framework for cross-platform apps with <strong>Dart</strong>. I used it to build a full management app, from the interface down to the backend connection.',
        'skill.flutter.li1': '<strong>Biblioteca Elim Perugia</strong> - a catalogue and loan management app for a library, signed <em>EHN Productions</em>: that\'s just the signature I use on my personal projects, not a freelance business',

        'skill.ide.lvl': 'Daily professional use',
        'skill.ide.p': 'Subscribed to every JetBrains service, though I actively use only the ones I really need.',
        'skill.ide.li1': '<strong>IntelliJ IDEA Ultimate</strong> - my main IDE for Java',
        'skill.ide.li2': '<strong>PhpStorm</strong> - for web/PHP projects',
        'skill.ide.li3': '<strong>VS Code</strong> - lightweight editor for quick edits, e.g. configuration files',
        'skill.ide.li4': 'I also know <strong>Eclipse</strong>, but I find IntelliJ far more professional',

        'skill.db.lvl': 'Solid working knowledge',
        'skill.db.p': 'I work mainly with <strong>MySQL</strong> and <strong>SQLite</strong>, the latter being the one I use most. I\'m comfortable with the queries that real projects need, from Bukkit plugins to web apps.',
        'skill.db.li1': '<strong>MySQL</strong> and <strong>SQLite</strong> - daily use',
        'skill.db.li2': '<strong>SQL Server</strong> - basic knowledge',

        'skill.docker.lvl': 'Hands-on experience',
        'skill.docker.p': 'For day-to-day development I prefer an <strong>Ubuntu via WSL</strong> environment, but I can build and manage Docker containers when a project needs libraries or software versions different from those already installed on the system.',

        'skill.git.lvl': 'Daily use',
        'skill.git.p1': 'I use Git every day across all my projects. The public GitHub I\'ve shared mostly holds for-fun and portfolio projects; everything you see is intentionally public to showcase my work style.',
        'skill.git.p2': 'The real projects I work on are often under NDA (non-disclosure agreement), so they live in private repositories. I\'ve genuinely built a great many projects.',

        'skill.claude.lvl': 'Productivity tool',
        'skill.claude.p': 'An AI development assistant by <strong>Anthropic</strong>. I use it from the terminal to speed up refactoring, debugging and repetitive tasks - an extra productivity tool.',
        'skill.claude.li1': '<strong>Pair programming</strong> for faster development and debugging',

        // ---- Tech stack ----
        'stack.eyebrow': 'languages &amp; tools',
        'stack.intro': 'Languages, frameworks and tools I know.',

        // ---- Code showcase ----
        'code.eyebrow': 'real code',
        'code.title': 'Real code',
        'code.intro': 'Not demos, but real fragments pulled from my private projects - Bukkit plugins and the EndlessHorizons Network. Hover to pause the scroll.',

        // ---- Services ----
        'services.eyebrow': 'what i can do',
        'services.title': 'Services',
        'svc1.p': 'Custom, optimised plugins for Minecraft servers, tailored to your server\'s needs.',
        'svc2.title': 'Discord Bots',
        'svc2.p': 'Custom Discord bots: moderation, entertainment or community management, built to measure.',
        'svc3.title': 'Full websites',
        'svc3.p': 'I build sites with careful, intuitive visuals and clean, functional database systems (login/sign-up, messaging...).',
        'svc.more': 'Learn more →',
        'svc.soon': 'Coming soon',

        // ---- Experience ----
        'exp.eyebrow': 'experience',
        'exp.title': 'Work experience',
        'exp.pucci.role': 'Intern',
        'exp.pucci.desc': 'I developed the frontend (with <strong>Bootstrap Italia</strong>) and part of the backend of Pucciufficio\'s support site (ticket.pucciufficio.com), which had several bugs, as well as working on other PHP software and a few Windows applications in C#.',
        'exp.pucci.visit': 'Visit pucciufficio.com →',

        // ---- Projects ----
        'projects.eyebrow': 'projects',
        'projects.versions': 'Versions',
        'projects.mode': 'Mode',
        'projects.p1': '<strong>EndlessHorizons Network</strong> is an open-world <strong>RolePlay</strong> Minecraft server, where players simulate real life and live it however they like. I run it as <strong>CEO and development Project Manager</strong>, together with <strong>Kyrolos Ebrahem</strong> (<strong>Lead Developer</strong>) and a passionate team spread across Italy.',
        'projects.p2': 'Behind the scenes there are <strong>custom Bukkit plugins in Java</strong> and the official site <strong>endlesshorizons.it</strong> (Laravel, Node.js, Tailwind). This is where my real <strong>source code</strong> lives (private and well looked-after), while my public Git is just for fun.',
        'projects.btn': 'Visit endlesshorizons.it →',

        'projects.ehnHeading': 'What I built for EHN',
        'projects.ehn1.title': 'Site &amp; API',
        'projects.ehn1.p': 'EHN\'s official site, built in Laravel: it exposes the API the Minecraft server consumes to keep game and web platform in sync.',
        'projects.ehn2.p': 'A Bukkit plugin that bridges server and site: it receives requests from the web platform and pushes updates back into the game in real time.',
        'projects.ehn3.p': 'A plugin for drivable vehicles in the game world (cars, bikes and other rides), integrated with the server\'s economy and permissions.',
        'projects.ehn4.p': 'A plugin for simulated electronic devices in game: smartphones and appliances players can use in roleplay.',
        'projects.ehn5.p': 'A plugin for wearable skins and cosmetics, to customise a character\'s look without touching the base skin.',

        'projects.personalHeading': 'Personal projects',
        'projects.personal1.p': 'A management app for a church library in Perugia: catalogue, loans and members in a complete mobile app.',
        'projects.personal1.sig': 'Signed EHN Productions - that\'s just the signature I use on my personal projects, not a freelance business',

        // ---- Contact ----
        'contact.eyebrow': 'let\'s talk',
        'contact.title': 'Get in touch',
        'contact.intro': 'Got a project in mind, or just want to chat? Drop me a line and I\'ll get back to you as soon as I can.',
        'contact.label.name': 'Name',
        'contact.label.email': 'Email',
        'contact.label.msg': 'Message',
        'contact.ph.name': 'Your name',
        'contact.ph.email': 'you@email.com',
        'contact.ph.msg': 'Tell me about your project...',
        'contact.privacy': 'I have read the <a href="./pages/policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> regarding the processing of my personal data.',
        'contact.submit': 'Send message',

        // ---- Footer ----
        'footer.rights': 'all rights reserved',
        'footer.privacy': 'Privacy Policy',

        // ---- Collaborators ----
        'collab.eyebrow': 'collaboration',
        'collab.title': 'Featured Collaborator',
        'collab.name': 'KyremWorks',
        'collab.role': 'Lead Developer, EndlessHorizons Network',
        'collab.desc': 'Senior developer and friend, as well as co-architect of EHN\'s backend. We collaborate on several private projects beyond the server.',
        'collab.visit': 'Visit portfolio →',
        'footer.collab': 'Collaborating with'
    }
});
