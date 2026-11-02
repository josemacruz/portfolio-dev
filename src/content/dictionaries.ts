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
  education: { master: string; school: string; inProgress: string; bachelor: string; university: string; thesis: string; thesisTitle: string };
  languages: { name: string; level: string; note?: string }[];
  footer: { updated: string; top: string };
}

/** Fecha de la última revisión de la sección «Ahora». */
export const lastUpdated = '2026-11' as const;

const es: Dictionary = {
  meta: {
    title: 'Josema Cruz · Software Engineer | Product Engineering',
    description:
      'Ingeniero de Telecomunicaciones y Software Engineer en Open Digital Services. Experiencia en Openbank, React, TypeScript, ingeniería frontend y desarrollo full stack; foco creciente en IA y cloud engineering.',
  },
  skipToContent: 'Saltar al contenido',
  languageLabel: 'Idioma',
  themeLabel: 'Cambiar tema claro / oscuro',
  path: '~',
    intro:
      'Construyo software. Creo productos. Exploro la IA. Soy Ingeniero de Telecomunicaciones y Software Engineer en Open Digital Services (Grupo Santander), donde contribuyo a productos Openbank. Combino ingeniería frontend y desarrollo full stack con criterio de producto, cuidando la accesibilidad y la calidad de ingeniería. Ahora profundizo en IA y cloud.',
  facts: {
    location: 'Andalucía, España · Remoto',
    experience: (years) => `${years}+ años de experiencia`,
    english: 'Inglés B1 certificado · uso profesional',
  },
  contactLabel: 'Enlaces',
  sections: { now: 'Ahora', experience: 'Experiencia', sideProject: 'Producto propio', education: 'Formación', languages: 'Idiomas' },
  present: 'hoy',
  now: {
    items: [
      'Preparándome para la certificación AWS Certified AI Practitioner (AIF-C01).',
      'Profundizando en aplicaciones de IA, flujos con agentes y fundamentos de cloud.',
      'Explorando el uso de Claude Code, Codex y OpenCode para apoyar el desarrollo de productos y la automatización.',
    ],
  },
  jobs: {
    ods: {
      role: 'Software Engineering Analyst',
      context: ' (Grupo Santander) → Openbank México y EE. UU.',
      place: 'Remoto',
      points: [
        'Implementé el producto de préstamos de Openbank México y lo acompañé hasta su puesta en producción.',
        'Mantengo y evoluciono la aplicación de Openbank Estados Unidos, desarrollando funcionalidades que llegan a producción en cada versión.',
        'Trabajo con herramientas de desarrollo asistido por IA y he creado recursos y guardrails propios para integrarlas con control en el flujo diario.',
      ],
    },
    knowmad: {
      role: 'Software Engineer · Frontend',
      context: ' → cliente Openbank México',
      place: 'Remoto',
      points: [
        'Desarrollé y llevé a producción funcionalidades del programa de Openbank México, desde su desarrollo inicial hasta el lanzamiento.',
        'Tras el lanzamiento, asumí el mantenimiento correctivo y evolutivo de la aplicación.',
        'Automaticé pruebas con Jest en cada release y trabajé con DDD o arquitectura tradicional según las necesidades del proyecto.',
      ],
    },
    secmotic: {
      role: 'Software Engineer · Full Stack',
      context: ' → FIWOO, plataforma IoT para ayuntamientos',
      place: 'Sevilla',
      points: [
        'Desarrollé funcionalidades para FIWOO, una plataforma IoT para la gestión municipal, trabajando tanto en frontend como en backend.',
        'Construí interfaces con React, JavaScript y TypeScript, apoyándome en Jest, React Testing Library y Storybook.',
        'Trabajé en servicios con Node.js, TypeScript, Express y MongoDB, con APIs documentadas en Swagger, Docker, GitLab CI/CD y Apache NiFi para ETL.',
      ],
    },
  },
  sideProject: {
    role: 'Fundador y desarrollador full stack',
    points: [
      'Creé desde cero una plataforma educativa digital para preparar las oposiciones de Policía Local en Andalucía y asumí su evolución como producto independiente.',
      'Desarrollé en solitario la aplicación web con Next.js, React y TypeScript, además del backend con NestJS; también hay aplicaciones nativas para iOS y Android con React Native.',
      'Integré gestión de cuentas con Clerk y suscripciones y pagos con Stripe, usando Supabase y PostgreSQL para la persistencia de datos.',
      'El producto ofrece exámenes oficiales y simulacros, psicotécnicos, casos prácticos, estadísticas, temario, clases y convocatorias.',
      'Configuré el despliegue con Docker, Linux y Nginx; participo en decisiones de producto y negocio mientras evoluciono la experiencia web y móvil.',
      'Uso Claude Code, Codex y OpenCode en un flujo de desarrollo asistido por IA con configuraciones y automatizaciones propias.',
    ],
  },
  education: {
    master: 'Máster universitario',
    school: 'Programa y centro pendientes de confirmar',
    inProgress: 'Inicio previsto: febrero de 2027',
    bachelor: 'Grado en Ingeniería de Telecomunicaciones',
    university: 'Universidad de Sevilla',
    thesis: 'TFG',
    thesisTitle: 'Sistema de gestión de alertas automáticas basado en FIWARE',
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
    title: 'Josema Cruz · Software Engineer | Product Engineering',
    description:
      'Telecommunications Engineer and Software Engineer at Open Digital Services. Experience in Openbank, React, TypeScript, frontend engineering and full-stack product development, with a growing focus on AI and cloud engineering.',
  },
  skipToContent: 'Skip to content',
  languageLabel: 'Language',
  themeLabel: 'Toggle light / dark theme',
  path: '~/en',
    intro:
      'Building software. Creating products. Exploring AI. I’m a Telecommunications Engineer and Software Engineer at Open Digital Services (Santander Group), contributing to Openbank products. I combine frontend engineering and full-stack development with product thinking, accessibility and engineering quality. I’m growing my focus in AI and cloud.',
  facts: {
    location: 'Andalusia, Spain · Remote',
    experience: (years) => `${years}+ years of experience`,
    english: 'English · B1 certified; used professionally',
  },
  contactLabel: 'Links',
  sections: { now: 'Now', experience: 'Experience', sideProject: 'Independent product', education: 'Education', languages: 'Languages' },
  present: 'present',
  now: {
    items: [
      'Preparing for the AWS Certified AI Practitioner (AIF-C01) certification.',
      'Building knowledge in AI applications, agent workflows and cloud fundamentals.',
      'Exploring Claude Code, Codex and OpenCode to support product development and automation.',
    ],
  },
  jobs: {
    ods: {
      role: 'Software Engineering Analyst',
      context: ' (Santander Group) → Openbank Mexico & US',
      place: 'Remote',
      points: [
        'Implemented Openbank Mexico’s lending product and took it through to production.',
        'Maintain and evolve the Openbank US application, delivering features that reach production with each release.',
        'Use AI-assisted development tools and have built my own resources and guardrails to bring them into day-to-day work with control.',
      ],
    },
    knowmad: {
      role: 'Software Engineer · Frontend',
      context: ' → client: Openbank Mexico',
      place: 'Remote',
      points: [
        'Built and shipped features for the Openbank Mexico programme from initial development through production launch.',
        'After launch, maintained and evolved the live application, handling corrective and ongoing product work.',
        'Automated Jest tests for each release and applied DDD or traditional architecture as the project required.',
      ],
    },
    secmotic: {
      role: 'Software Engineer · Full Stack',
      context: ' → FIWOO, IoT platform for city councils',
      place: 'Seville',
      points: [
        'Developed features for FIWOO, an IoT platform for municipal services, working across frontend and backend.',
        'Built interfaces with React, JavaScript and TypeScript, supported by Jest, React Testing Library and Storybook.',
        'Worked on services with Node.js, TypeScript, Express and MongoDB, with APIs documented in Swagger, Docker, GitLab CI/CD and Apache NiFi for ETL.',
      ],
    },
  },
  sideProject: {
    role: 'Founder & full-stack developer',
    points: [
      'Built an independent learning platform from scratch for people preparing for local police examinations in Andalusia, and continue to own its product evolution.',
      'Developed the web application with Next.js, React and TypeScript and the backend with NestJS; the product also has native iOS and Android apps built with React Native.',
      'Integrated account management with Clerk and subscriptions and payments with Stripe, using Supabase and PostgreSQL for data persistence.',
      'The product includes official exams and mock tests, psychometric exercises, practical cases, study analytics, an AI-powered exam generator, learning materials, classes and exam announcements.',
      'Configured deployment with Docker, Linux and Nginx; continue to shape product and business decisions as the web and mobile experiences evolve.',
      'Use Claude Code, Codex and OpenCode in an AI-assisted development workflow with my own configuration and automations.',
    ],
  },
  education: {
    master: 'University master’s degree',
    school: 'Programme and institution to be confirmed',
    inProgress: 'Planned start: February 2027',
    bachelor: 'BEng in Telecommunications Engineering',
    university: 'University of Seville',
    thesis: 'Bachelor’s thesis',
    thesisTitle: 'Automated Alert Management System Based on FIWARE',
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

