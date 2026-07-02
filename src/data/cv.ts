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
          'Currently on sabbatical from this role to complete the MSc in Artificial Intelligence at the University of Liverpool.',
          'Responsible for the operation of the monitoring system (Elastic Stack + Icinga 2) for an enterprise client.',
          'Designed deployment strategies and set up PostgreSQL clusters in Kubernetes using CloudNativePG and Argo CD for a client in the retail sector.',
          'Conducted a proof-of-concept evaluation of high-availability database solutions (Patroni, YugabyteDB, CockroachDB) for a client in the financial sector.',
          'Created API contracts and initial code examples for an AI Model Manager project.',
          'Built internal web apps with Python, Streamlit, Django, and React for employee profiles and project management.',
          'Created automation tools for PDF parsing, data extraction, and XML/Word generation using Python (pandas, PyPDF2, Jinja2).',
          'Authored documentation including operational guides and blog articles, and presented results to internal teams.',
          'Held presentations on technical topics at external meetups and attended industry events.',
          'Prepared teaching materials and conducted training for clients on Python (Basics and Advanced Programming) and GitLab CI/CD.',
        ],
      },
      {
        title: 'Tutor — Software Technology',
        organization: 'University of Bonn',
        location: 'Bonn, Germany',
        from: 'Oct 2023',
        to: 'Mar 2024',
        bullets: [
          'Conducted tutorials for the "Software Technology" module.',
          'Prepared exercise sheets, managed schedules, and supported student learning.',
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
          'Verantwortlich für den Betrieb des Monitoring-Systems (Elastic Stack + Icinga 2) für einen Enterprise-Kunden.',
          'Deployment-Strategien entworfen und PostgreSQL-Cluster in Kubernetes mit CloudNativePG und Argo CD für einen Kunden im Einzelhandel aufgebaut.',
          'Proof-of-Concept-Evaluierung von Hochverfügbarkeits-Datenbanklösungen (Patroni, YugabyteDB, CockroachDB) für einen Kunden im Finanzsektor durchgeführt.',
          'API-Verträge und erste Code-Beispiele für ein AI-Model-Manager-Projekt erstellt.',
          'Interne Web-Apps mit Python, Streamlit, Django und React für Mitarbeiterprofile und Projektmanagement gebaut.',
          'Automatisierungstools für PDF-Parsing, Datenextraktion und XML/Word-Generierung mit Python (pandas, PyPDF2, Jinja2) entwickelt.',
          'Dokumentation wie Betriebshandbücher und Blogartikel verfasst und Ergebnisse vor internen Teams präsentiert.',
          'Vorträge zu technischen Themen auf externen Meetups gehalten und Branchenveranstaltungen besucht.',
          'Schulungsunterlagen erstellt und Kundentrainings zu Python (Grundlagen und Fortgeschrittene Programmierung) sowie GitLab CI/CD durchgeführt.',
        ],
      },
      {
        title: 'Tutor — Softwaretechnologie',
        organization: 'Universität Bonn',
        location: 'Bonn, Deutschland',
        from: 'Okt 2023',
        to: 'Mär 2024',
        bullets: [
          'Tutorien für das Modul „Softwaretechnologie" durchgeführt.',
          'Übungszettel vorbereitet, Termine koordiniert und Studierende beim Lernen unterstützt.',
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
