// Central site configuration — edit this file to personalize the site.
export const SITE_CONFIG = {
  name: 'Alex Senger',
  email: 'alex@senger-solutions.com',
  socials: {
    github: 'https://github.com/alex-senger',
    linkedin: 'https://www.linkedin.com/in/alexsenger',
  },
  // Downloadable CV PDFs. They live under /downloads/ so the whole directory
  // can be bind-mounted on the server (single-file mounts pin the inode and
  // go stale when the file is replaced).
  cvPdf: {
    en: '/downloads/cv-en.pdf',
    de: '/downloads/cv-de.pdf',
  },
} as const;
