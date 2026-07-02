// CV content — sourced from the Typst CV (basic-resume). The phone number is
// deliberately omitted on the website; it stays in the downloadable PDF.
import type { Locale } from '@/i18n/ui';

export interface CvEntry {
  title: string;
  organization: string;
  location?: string;
  /** e.g. 'Apr 2024' — rendered as given */
  from: string;
  /** omit for "present" */
  to?: string;
  bullets: string[];
}

export interface CvData {
  experience: CvEntry[];
  education: CvEntry[];
  projects: CvEntry[];
  skills: { category: string; items: string[] }[];
  languages: { name: string; level: string }[];
}

export const cv: Record<Locale, CvData> = {
  en: {
    experience: [
      {
        title: 'Junior IT-Consultant, DevOps Engineer, Python Developer',
        organization: 'ORDIX',
        location: 'Germany',
        from: 'Apr 2024',
        bullets: [
          'Currently on sabbatical to complete the MSc in Artificial Intelligence at the University of Liverpool.',
          'Operated the monitoring platform (Elastic Stack + Icinga 2) for an enterprise client.',
          'Set up PostgreSQL clusters on Kubernetes (CloudNativePG, Argo CD) and designed deployment strategies for a client in the retail sector.',
          'Evaluated high-availability database solutions (Patroni, YugabyteDB, CockroachDB) in a proof of concept for a client in the financial sector.',
          'Built internal web apps and automation tooling in Python; delivered client trainings on Python and GitLab CI/CD.',
        ],
      },
      {
        title: 'Tutor — Software Technology',
        organization: 'University of Bonn',
        location: 'Bonn, Germany',
        from: 'Oct 2023',
        to: 'Mar 2024',
        bullets: [
          'Ran tutorials and prepared exercises for the "Software Technology" module.',
        ],
      },
      {
        title: 'Lecturer / Instructor',
        organization: 'Jobwerk Porz gGmbH',
        location: 'Cologne, Germany',
        from: 'Nov 2021',
        to: 'Oct 2022',
        bullets: [
          'Taught IT and computer science to students (grades 5–10) and supervised school events and activities.',
        ],
      },
    ],
    education: [
      {
        title: 'M.Sc. Artificial Intelligence (in progress)',
        organization: 'University of Liverpool',
        location: 'Remote',
        from: 'Jan 2026',
        to: 'Aug 2028',
        bullets: [],
      },
      {
        title: 'B.Sc. Computer Science',
        organization: 'Rheinische Friedrich-Wilhelms-Universität Bonn',
        location: 'Bonn, Germany',
        from: 'Sep 2021',
        to: 'Mar 2025',
        bullets: [
          'Final grade: 2.2 · Bachelor thesis: 1.0',
          'Selected modules: Algorithms and Programming, Data-Centric Computer Science, Introduction to Data Science, Agile Software Development, Intelligent Vision Systems, Reactive Security.',
        ],
      },
    ],
    projects: [
      {
        title: 'Applied Software Development Project Group — Project Member',
        organization: 'University of Bonn',
        from: 'Apr 2023',
        to: 'Aug 2023',
        bullets: [
          'Developed a Python library integrating pandas, seaborn, and scikit-learn into a unified, user-friendly interface for educational Data Science and Machine Learning use.',
          'Focused on usability and practical application for beginner programmers.',
        ],
      },
    ],
    skills: [
      { category: 'Programming', items: ['Python', 'SQL', 'Java', 'C'] },
      {
        category: 'Tools & Infrastructure',
        items: [
          'Terraform',
          'Ansible',
          'Kubernetes',
          'Docker',
          'Argo CD',
          'GitLab CI/CD',
          'ElasticSearch',
          'Kibana',
          'Logstash',
          'Icinga 2',
          'Oracle Cloud Infrastructure',
        ],
      },
      { category: 'Databases', items: ['PostgreSQL', 'CockroachDB', 'YugabyteDB'] },
      {
        category: 'Methods',
        items: ['Agile (SCRUM)', 'Pair Programming', 'Requirements Engineering'],
      },
    ],
    languages: [
      { name: 'German', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'Russian', level: 'Intermediate' },
    ],
  },
  de: {
    experience: [
      {
        title: 'Junior IT-Consultant, DevOps Engineer, Python-Entwickler',
        organization: 'ORDIX',
        location: 'Deutschland',
        from: 'Apr 2024',
        bullets: [
          'Derzeit im Sabbatical, um den MSc in Artificial Intelligence an der University of Liverpool abzuschließen.',
          'Monitoring-Plattform (Elastic Stack + Icinga 2) für einen Enterprise-Kunden betrieben.',
          'PostgreSQL-Cluster auf Kubernetes (CloudNativePG, Argo CD) aufgebaut und Deployment-Strategien für einen Kunden im Einzelhandel entworfen.',
          'Hochverfügbarkeits-Datenbanklösungen (Patroni, YugabyteDB, CockroachDB) in einem Proof of Concept für einen Kunden im Finanzsektor evaluiert.',
          'Interne Web-Apps und Automatisierungstools in Python gebaut; Kundentrainings zu Python und GitLab CI/CD durchgeführt.',
        ],
      },
      {
        title: 'Tutor — Softwaretechnologie',
        organization: 'Universität Bonn',
        location: 'Bonn, Deutschland',
        from: 'Okt 2023',
        to: 'Mär 2024',
        bullets: [
          'Tutorien geleitet und Übungszettel für das Modul „Softwaretechnologie" vorbereitet.',
        ],
      },
      {
        title: 'Dozent / Lehrkraft',
        organization: 'Jobwerk Porz gGmbH',
        location: 'Köln, Deutschland',
        from: 'Nov 2021',
        to: 'Okt 2022',
        bullets: [
          'IT und Informatik für Schüler:innen (Klassen 5–10) unterrichtet sowie Schulveranstaltungen und Aktivitäten betreut.',
        ],
      },
    ],
    education: [
      {
        title: 'M.Sc. Artificial Intelligence (laufend)',
        organization: 'University of Liverpool',
        location: 'Remote',
        from: 'Jan 2026',
        to: 'Aug 2028',
        bullets: [],
      },
      {
        title: 'B.Sc. Informatik',
        organization: 'Rheinische Friedrich-Wilhelms-Universität Bonn',
        location: 'Bonn, Deutschland',
        from: 'Sep 2021',
        to: 'Mär 2025',
        bullets: [
          'Abschlussnote: 2,2 · Bachelorarbeit: 1,0',
          'Ausgewählte Module: Algorithmen und Programmierung, Datenzentrierte Informatik, Einführung in Data Science, Agile Softwareentwicklung, Intelligent Vision Systems, Reactive Security.',
        ],
      },
    ],
    projects: [
      {
        title: 'Projektgruppe Angewandte Softwareentwicklung — Projektmitglied',
        organization: 'Universität Bonn',
        from: 'Apr 2023',
        to: 'Aug 2023',
        bullets: [
          'Python-Bibliothek entwickelt, die pandas, seaborn und scikit-learn in einer einheitlichen, benutzerfreundlichen Schnittstelle für Data-Science- und Machine-Learning-Lehre integriert.',
          'Fokus auf Benutzerfreundlichkeit und praktische Anwendung für Programmieranfänger:innen.',
        ],
      },
    ],
    skills: [
      { category: 'Programmierung', items: ['Python', 'SQL', 'Java', 'C'] },
      {
        category: 'Tools & Infrastruktur',
        items: [
          'Terraform',
          'Ansible',
          'Kubernetes',
          'Docker',
          'Argo CD',
          'GitLab CI/CD',
          'ElasticSearch',
          'Kibana',
          'Logstash',
          'Icinga 2',
          'Oracle Cloud Infrastructure',
        ],
      },
      { category: 'Datenbanken', items: ['PostgreSQL', 'CockroachDB', 'YugabyteDB'] },
      {
        category: 'Methoden',
        items: ['Agile (SCRUM)', 'Pair Programming', 'Requirements Engineering'],
      },
    ],
    languages: [
      { name: 'Deutsch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'Fließend' },
      { name: 'Russisch', level: 'Mittelstufe' },
    ],
  },
};
