// Central site configuration — edit this file to personalize the site.
export const SITE_CONFIG = {
  name: 'Alex Senger',
  email: 'alex.senger@icloud.com',
  // TODO: replace with your real profiles (or remove entries you don't use)
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/your-profile',
  },
  // Path of the downloadable CV PDF inside public/ (drop your file there).
  cvPdf: {
    en: '/cv-en.pdf',
    de: '/cv-de.pdf',
  },
} as const;
