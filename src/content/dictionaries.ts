import type { Job } from '@/content/site';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

interface JobCopy {
  role: string;
  context: string;
  place: string;
  points: string[];
}

export interface Dictionary {
  meta: { title: string; description: string };
  skipToContent: string;
  languageLabel: string;
  themeLabel: string;
  path: string;
  intro: string;
  facts: { location: string; experience: (years: number) => string; english: string };
  contactLabel: string;
  sections: { now: string; experience: string; sideProject: string; education: string; languages: string };
  present: string;
  now: { items: string[] };
  jobs: Record<Job['id'], JobCopy>;
  sideProject: { role: string; points: string[] };
  education: { master: string; school: string; inProgress: string; bachelor: string; university: string; thesis: string };
  languages: { name: string; level: string; note?: string }[];
  footer: { updated: string; top: string };
}

/** Fecha de la última revisión de la sección «Ahora». */
export const lastUpdated = '2026-10' as const;

const es: Dictionary = {
  meta: {
    title: 'Josema Cruz · Software Engineer',
    description:
      'Ingeniero de Telecomunicaciones y Software Engineer en Open Digital Services (Grupo Santander). Openbank México y EE. UU., y creador de Opositandos.',
  },
  skipToContent: 'Saltar al contenido',
  languageLabel: 'Idioma',
  themeLabel: 'Cambiar tema claro / oscuro',
  path: '~',
  intro:
    'Ingeniero de Telecomunicaciones. Trabajo como Software Engineer en Open Digital Services (Grupo Santander) y estoy cursando el Máster en Ciberseguridad de la UOC.',
  facts: {
    location: 'Utrera, Sevilla (España) · Remoto',
    experience: (years) => `${years}+ años de experiencia`,
    english: 'Inglés profesional (B1)',
  },
  contactLabel: 'Enlaces',
  sections: { now: 'Ahora', experience: 'Experiencia', sideProject: 'Side project', education: 'Formación', languages: 'Idiomas' },
  present: 'hoy',
  now: {
    items: [
      'Empezando la migración de Webster Bank a Openbank USA.',
      'Cursando el Máster en Ciberseguridad en la UOC.',
      'Afinando mi setup de desarrollo agéntico con Claude Code, Codex y OpenCode.',
    ],
  },
  jobs: {
    ods: {
      role: 'Software Engineering Analyst',
      context: ' (Grupo Santander) → Openbank México y EE. UU.',
      place: 'Remoto',
      points: [
        'Implementé el producto de préstamos de Openbank México y lo llevé hasta su puesta en producción.',
        'En Openbank Estados Unidos, mantengo la aplicación y desarrollo nuevas funcionalidades que se despliegan en producción en cada versión.',
        'Trabajamos con Devin en el equipo y he creado mis propios recursos y guardrails para integrar agentes de IA en el día a día con agilidad y control.',
        'Desde noviembre de 2026, en la migración de Webster Bank, adquirido por Santander, a Openbank USA.',
      ],
    },
    knowmad: {
      role: 'Software Engineer · Frontend',
      context: ' → cliente Openbank México',
      place: 'Remoto',
      points: [
        'Desarrollé e implementé funcionalidades del programa de Openbank México desde cero hasta su puesta en producción.',
        'Después del lanzamiento, me encargué del mantenimiento correctivo y evolutivo de la aplicación en producción.',
        'Testing automatizado con Jest en cada release, trabajando con DDD y arquitectura tradicional según el proyecto.',
      ],
    },
    secmotic: {
      role: 'Software Engineer · Full Stack',
      context: ' → FIWOO, plataforma IoT para ayuntamientos',
      place: 'Sevilla',
      points: [
        'Desarrollé nuevas funcionalidades y mejoras para FIWOO, una plataforma de gestión de ayuntamientos mediante IoT, trabajando tanto en frontend como en backend.',
        'Frontend en React (JavaScript y TypeScript) con Jest, React Testing Library y Storybook.',
        'Backend en Node.js, TypeScript, Express y MongoDB, con APIs documentadas en Swagger. Docker, GitLab CI/CD y Apache NiFi para ETL.',
      ],
    },
  },
  sideProject: {
    role: 'Fundador y desarrollador',
    points: [
      'Creé desde cero una academia digital de oposiciones, centrada en la preparación de Policía Local de Andalucía, con más de 60 usuarios en producción.',
      'Desarrollé todo el producto yo solo: la web con Next.js y el backend con NestJS, con automatizaciones.',
      'App móvil nativa para iOS y Android con React Native, en producción y disponible para los usuarios.',
      'Desarrollo agéntico con Claude Code, Codex y OpenCode, con configuración y automatizaciones propias para avanzar más rápido sin perder calidad.',
    ],
  },
  education: {
    master: 'Máster en Ciberseguridad',
    school: 'Universitat Oberta de Catalunya (UOC)',
    inProgress: 'en curso',
    bachelor: 'Grado en Ingeniería de Telecomunicaciones',
    university: 'Universidad de Sevilla',
    thesis: 'TFG',
  },
  languages: [
    { name: 'Español', level: 'nativo' },
    {
      name: 'Inglés',
      level: 'B1 certificado',
      note: 'Uso profesional en el día a día: reuniones y trabajo con equipos internacionales.',
    },
  ],
  footer: { updated: 'Actualizado', top: 'arriba' },
};

const en: Dictionary = {
  meta: {
    title: 'Josema Cruz · Software Engineer',
    description:
      'Telecommunications Engineer and Software Engineer at Open Digital Services (Santander Group). Openbank Mexico & US, and creator of Opositandos.',
  },
  skipToContent: 'Skip to content',
  languageLabel: 'Language',
  themeLabel: 'Toggle light / dark theme',
  path: '~/en',
  intro:
    'Telecommunications Engineer. I work as a Software Engineer at Open Digital Services (Santander Group) and I’m studying an MSc in Cybersecurity at UOC.',
  facts: {
    location: 'Utrera, Seville (Spain) · Remote',
    experience: (years) => `${years}+ years of experience`,
    english: 'Professional English (B1)',
  },
  contactLabel: 'Links',
  sections: { now: 'Now', experience: 'Experience', sideProject: 'Side project', education: 'Education', languages: 'Languages' },
  present: 'present',
  now: {
    items: [
      'Starting the migration of Webster Bank into Openbank USA.',
      'Studying an MSc in Cybersecurity at UOC.',
      'Fine-tuning my agentic development setup with Claude Code, Codex and OpenCode.',
    ],
  },
  jobs: {
    ods: {
      role: 'Software Engineering Analyst',
      context: ' (Santander Group) → Openbank Mexico & US',
      place: 'Remote',
      points: [
        'Implemented Openbank Mexico’s lending product and took it all the way to production.',
        'At Openbank US, I maintain the app and build new features that ship to production with every release.',
        'The team works with Devin; I built my own resources and guardrails to bring AI agents into day-to-day work with speed and control.',
        'Since November 2026, working on the migration of Webster Bank, acquired by Santander, into Openbank USA.',
      ],
    },
    knowmad: {
      role: 'Software Engineer · Frontend',
      context: ' → client: Openbank Mexico',
      place: 'Remote',
      points: [
        'Built and shipped features for the Openbank Mexico programme from scratch through to production launch.',
        'After launch, owned corrective and evolutionary maintenance of the app in production.',
        'Automated testing with Jest on every release, working with both DDD and traditional architectures.',
      ],
    },
    secmotic: {
      role: 'Software Engineer · Full Stack',
      context: ' → FIWOO, IoT platform for city councils',
      place: 'Seville',
      points: [
        'Built new features and improvements for FIWOO, an IoT platform that helps city councils manage their services, working across frontend and backend.',
        'Frontend in React (JavaScript and TypeScript) with Jest, React Testing Library and Storybook.',
        'Backend in Node.js, TypeScript, Express and MongoDB, with APIs documented in Swagger. Docker, GitLab CI/CD and Apache NiFi for ETL.',
      ],
    },
  },
  sideProject: {
    role: 'Founder & developer',
    points: [
      'Built a digital academy for Spanish civil service exams from scratch, focused on the Andalusian Local Police exam, with 60+ users in production.',
      'Developed the entire product on my own: the Next.js web app and the NestJS backend, with automations.',
      'Native iOS and Android app built with React Native, live in production and available to users.',
      'Agentic development with Claude Code, Codex and OpenCode, using my own setup and automations to move faster without losing quality.',
    ],
  },
  education: {
    master: 'MSc in Cybersecurity',
    school: 'Universitat Oberta de Catalunya (UOC)',
    inProgress: 'in progress',
    bachelor: 'BEng in Telecommunications Engineering',
    university: 'University of Seville',
    thesis: 'Bachelor’s thesis',
  },
  languages: [
    { name: 'Spanish', level: 'native' },
    {
      name: 'English',
      level: 'B1 certified',
      note: 'Used daily at work: meetings and collaboration with international teams.',
    },
  ],
  footer: { updated: 'Updated', top: 'top' },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
