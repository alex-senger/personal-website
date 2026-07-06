export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'site.title': 'Alex Senger — Software & IT',
    'site.description':
      'Personal website of Alex Senger: projects, blog and CV of an IT consultant and DevOps engineer.',
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.projects': 'Projects',
    'nav.cv': 'CV',
    'nav.language': 'Language',

    'hero.greeting': "Hi, I'm",
    'hero.tagline': 'I build software, infrastructure and everything in between.',
    'hero.intro':
      'IT consultant and DevOps engineer, currently on sabbatical for an MSc in Artificial Intelligence. Passionate about Kubernetes, databases, Python and self-hosting. This site is my playground, portfolio and notebook at once.',
    'hero.cta.projects': 'View projects',
    'hero.cta.blog': 'Read the blog',
    'hero.cta.cv': 'View my CV',
    'hero.scroll': 'Scroll',

    'home.about.title': 'What I do',
    'home.recentPosts': 'Latest posts',
    'home.featuredProjects': 'Featured projects',
    'home.viewAll': 'View all',

    'blog.title': 'Blog',
    'blog.description': 'Notes on software, infrastructure and things I learn along the way.',
    'blog.readMore': 'Read more',
    'blog.minRead': 'min read',
    'blog.taggedWith': 'Posts tagged',
    'blog.allTags': 'All tags',
    'blog.backToBlog': 'Back to blog',
    'blog.empty': 'No posts yet — check back soon.',

    'projects.title': 'Projects',
    'projects.description': 'A selection of things I have built and maintain.',
    'projects.source': 'Source',
    'projects.live': 'Live',

    'cv.title': 'Curriculum Vitae',
    'cv.description': 'My professional experience, education and skills.',
    'cv.download': 'Download PDF',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.projects': 'Other Projects',
    'cv.skills': 'Skills',
    'cv.languages': 'Languages',
    'cv.present': 'present',

    'footer.rights': 'All rights reserved.',
    'footer.builtWith': 'Built with Astro, self-hosted with Docker.',
    'footer.contact': 'Get in touch',

    'notFound.title': 'Page not found',
    'notFound.text': 'The page you are looking for does not exist or has moved.',
    'notFound.back': 'Back to home',
  },
  de: {
    'site.title': 'Alex Senger — Software & IT',
    'site.description':
      'Persönliche Website von Alex Senger: Projekte, Blog und Lebenslauf eines IT-Consultants und DevOps Engineers.',
    'nav.home': 'Start',
    'nav.blog': 'Blog',
    'nav.projects': 'Projekte',
    'nav.cv': 'Lebenslauf',
    'nav.language': 'Sprache',

    'hero.greeting': 'Hi, ich bin',
    'hero.tagline': 'Ich baue Software, Infrastruktur und alles dazwischen.',
    'hero.intro':
      'IT-Consultant und DevOps Engineer, derzeit im Sabbatical für einen MSc in Artificial Intelligence. Begeistert von Kubernetes, Datenbanken, Python und Self-Hosting. Diese Seite ist Spielwiese, Portfolio und Notizbuch zugleich.',
    'hero.cta.projects': 'Projekte ansehen',
    'hero.cta.blog': 'Zum Blog',
    'hero.cta.cv': 'Zum Lebenslauf',
    'hero.scroll': 'Scrollen',

    'home.about.title': 'Was ich mache',
    'home.recentPosts': 'Neueste Beiträge',
    'home.featuredProjects': 'Ausgewählte Projekte',
    'home.viewAll': 'Alle ansehen',

    'blog.title': 'Blog',
    'blog.description':
      'Notizen zu Software, Infrastruktur und Dingen, die ich unterwegs lerne.',
    'blog.readMore': 'Weiterlesen',
    'blog.minRead': 'Min. Lesezeit',
    'blog.taggedWith': 'Beiträge mit Tag',
    'blog.allTags': 'Alle Tags',
    'blog.backToBlog': 'Zurück zum Blog',
    'blog.empty': 'Noch keine Beiträge — bald geht es los.',

    'projects.title': 'Projekte',
    'projects.description': 'Eine Auswahl an Dingen, die ich gebaut habe und pflege.',
    'projects.source': 'Quellcode',
    'projects.live': 'Live',

    'cv.title': 'Lebenslauf',
    'cv.description': 'Meine Berufserfahrung, Ausbildung und Fähigkeiten.',
    'cv.download': 'PDF herunterladen',
    'cv.experience': 'Erfahrung',
    'cv.education': 'Ausbildung',
    'cv.projects': 'Weitere Projekte',
    'cv.skills': 'Fähigkeiten',
    'cv.languages': 'Sprachen',
    'cv.present': 'heute',

    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.builtWith': 'Gebaut mit Astro, self-hosted mit Docker.',
    'footer.contact': 'Kontakt aufnehmen',

    'notFound.title': 'Seite nicht gefunden',
    'notFound.text': 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    'notFound.back': 'Zurück zur Startseite',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['en'];
