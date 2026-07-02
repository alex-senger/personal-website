// Central site configuration — edit this file to personalize the site.
export const SITE_CONFIG = {
  name: 'Alex Senger',
  email: 'alex@senger-solutions.com',
  socials: {
    github: 'https://github.com/alex-senger',
    linkedin: 'https://www.linkedin.com/in/alexsenger',
  },
  // Path of the downloadable CV PDF inside public/ (drop your file there).
  cvPdf: {
    en: '/cv-en.pdf',
    de: '/cv-de.pdf',
  },
} as const;
