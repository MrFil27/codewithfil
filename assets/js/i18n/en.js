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
    roles: ['Java developer', 'Backend developer', 'Modeler & texturer'],
    meta: {
        htmlLang: 'en',
        title: 'CodeWithFil — Java & Web Developer | Portfolio',
        description: 'Java and Web developer. Bukkit plugins, Discord bots, web applications with Laravel and Spring Boot. 6+ years of experience in backend and Minecraft development.'
    },
    strings: {
        // ---- Navbar ----
        'nav.services': 'Services',
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
        'about.age': '21 years old',
        'about.slogan': 'Curiosity is my favourite language!',
        'about.p1': 'There was a time when the word <strong>"developer"</strong> meant nothing to me. I stumbled across it by chance in an online community, sitting next to someone\'s name like a noble title. "And what does that one do?". I got an answer that, I\'ll admit, didn\'t clear much up, but it was enough to send me down the rabbit hole. I never climbed back out: today that mysterious word is simply my craft. My name is Filippo, and I\'m a Java and Web developer.',
        'about.p2': 'What excites me isn\'t just writing code, but watching something real take shape from an idea: taking a problem, breaking it down and watching the pieces fall into place until everything works. I\'m a <strong>curious soul by nature</strong>: I\'m fascinated by the universe and, more broadly, by anything that makes me wonder <em>how things work</em> — ultimately the same question that keeps me in front of the screen.',
        'about.p3': 'I consider myself a <strong>Mid-Level</strong> developer: most of what I know I taught myself, building real projects and getting them wrong until they worked. I\'m now consolidating these skills with an <strong>ITS Umbria course in IT</strong> which, together with my first work experiences, is helping me find my footing in the industry as a developer, as well as shaping the personal projects I show below.',
        'about.fact1': 'My very first line of code',
        'about.fact2.num': '5+ years',
        'about.fact2': 'of hands-on development',
        'about.fact3': 'projects built, between work and passion',

        // ---- Skills ----
        'skills.eyebrow': 'skills',
        'skills.group.lang': 'Languages &amp; Frameworks',
        'skills.group.tools': 'Tools',

        'skill.java.lvl': 'Experience since 2021',
        'skill.java.p': 'My main language. For years I\'ve been working on <strong>Bukkit/Spigot plugins</strong> for Minecraft and custom <strong>Discord bots</strong> built with the <strong>JDA</strong> library.',
        'skill.java.li1': '<strong>Lombok annotations</strong> and <strong>Sql2o</strong> — libraries I use regularly',
        'skill.java.li2': '<strong>Hibernate</strong>, <strong>Spring / Spring Boot</strong> — still early days, but the approach is similar to how I already structure plugins and databases, so the learning curve is short',

        'skill.web.lvl': 'Solid',
        'skill.web.p': 'Beyond native <strong>HTML, CSS and JavaScript</strong>, I work with professional PHP frameworks and modern styling libraries.',
        'skill.web.li1': '<strong>Laravel</strong> and <strong>CodeIgniter</strong> for the back-end',
        'skill.web.li2': '<strong>Tailwind CSS</strong> and other styling libraries for the front-end',

        'skill.node.lvl': 'A bit rusty',
        'skill.node.p': 'Used in the past for Discord and Telegram bots — skills I now consider almost forgotten on that specific front.',
        'skill.node.li1': 'Currently used in the active project <a href="https://glitchvalley.it" target="_blank" style="color:var(--amber);">glitchvalley.it</a>, alongside Laravel, npm and Tailwind CSS',

        'skill.ide.lvl': 'Daily professional use',
        'skill.ide.p': 'Subscribed to every JetBrains service, though I actively use only the ones I really need.',
        'skill.ide.li1': '<strong>IntelliJ IDEA Ultimate</strong> — my main IDE for Java',
        'skill.ide.li2': '<strong>PhpStorm</strong> — for web/PHP projects',
        'skill.ide.li3': '<strong>VS Code</strong> — lightweight editor for quick edits, e.g. configuration files',
        'skill.ide.li4': 'I also know <strong>Eclipse</strong>, but I find IntelliJ far more professional',

        'skill.db.lvl': 'Good, not expert',
        'skill.db.p': 'I work mainly with <strong>MySQL</strong> and <strong>SQLite</strong>, the latter being the one I use most. I know the essential queries needed in projects like Bukkit plugins, rather than the entire SQL language.',
        'skill.db.li1': '<strong>MySQL</strong> and <strong>SQLite</strong> — daily use',
        'skill.db.li2': '<strong>SQL Server</strong> — basic knowledge',

        'skill.docker.lvl': 'Hands-on experience',
        'skill.docker.p': 'For day-to-day development I prefer an <strong>Ubuntu via WSL</strong> environment, but I can build and manage Docker containers when a project needs libraries or software versions different from those already installed on the system.',

        'skill.git.lvl': 'Daily use',
        'skill.git.p1': 'I use Git every day across all my projects. The public GitHub I\'ve shared mostly holds for-fun and portfolio projects; everything you see is intentionally public to showcase my work style.',
        'skill.git.p2': 'The real projects I work on are often under NDA (non-disclosure agreement), so they live in private repositories. I\'ve genuinely built a great many projects.',

        'skill.claude.lvl': 'Daily use',
        'skill.claude.p': 'An AI development assistant by <strong>Anthropic</strong>; I use it straight from the terminal to help write code, refactor and speed up my work.',
        'skill.claude.li1': '<strong>Pair programming</strong> for faster development and debugging',

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

        // ---- Server ----
        'server.eyebrow': 'projects',
        'server.versions': 'Versions',
        'server.mode': 'Mode',
        'server.p1': '<strong>EndlessHorizons Network</strong> is an open-world <strong>RolePlay</strong> Minecraft server, where players simulate real life and live it however they like. I run it as <strong>CEO and development Project Manager</strong>, together with <strong>Kyrolos Ebrahem</strong> (<strong>Lead Developer</strong>) and a passionate team spread across Italy.',
        'server.p2': 'Behind the scenes there are <strong>custom Bukkit plugins in Java</strong> and the official site <strong>glitchvalley.it</strong> (Laravel, Node.js, Tailwind). This is where my real <strong>source code</strong> lives (private and well looked-after), while my public Git is just for fun.',
        'server.btn': 'Visit glitchvalley.it →',

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
        'contact.submit': 'Send message',

        // ---- Footer ----
        'footer.rights': 'all rights reserved',

        // ---- Collaborators ----
        'collab.eyebrow': 'collaboration',
        'collab.title': 'Featured Collaborator',
        'collab.name': 'Kyrolos Ebrahem',
        'collab.role': 'Lead Developer, EndlessHorizons Network',
        'collab.desc': 'Senior developer and creative technologist, co-architect of EHN\'s backend. Skilled in backend, design, and full-stack development.',
        'collab.visit': 'Visit portfolio →',
        'footer.collab': 'Collaborating with'
    }
});
