import type { YearMonth } from '@/lib/dates';

export const site = {
  url: 'https://josemacruz.dev',
  name: 'Josema Cruz',
  linkedin: 'https://www.linkedin.com/in/josemacruz/',
  github: 'https://github.com/josemacruz',
  opositandos: 'https://opositandos.es',
  /** Ruta del CV dentro de /public. `null` oculta el enlace hasta que exista el PDF. */
  cvPath: null as string | null,
  /** Inicio de la experiencia profesional, para calcular los años de experiencia. */
  careerStart: '2021-03' satisfies YearMonth,
} as const;

export interface Job {
  id: 'ods' | 'knowmad' | 'secmotic';
  company: string;
  companyUrl?: string;
  start: YearMonth;
  /** Sin `end`, el puesto es el actual. */
  end?: YearMonth;
  tech: string[];
}

/** De más reciente a más antiguo. */
export const jobs: Job[] = [
  {
    id: 'ods',
    company: 'Open Digital Services',
    start: '2025-01',
    tech: ['React', 'TypeScript', 'Devin'],
  },
  {
    id: 'knowmad',
    company: 'Knowmad Mood',
    companyUrl: 'https://www.knowmadmood.com/es',
    start: '2023-03',
    end: '2025-01',
    tech: ['React', 'TypeScript', 'Jest', 'DDD'],
  },
  {
    id: 'secmotic',
    company: 'Secmotic',
    companyUrl: 'https://secmotic.com/',
    start: '2021-03',
    end: '2023-03',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Docker'],
  },
];

export const sideProjectTech = ['Next.js', 'NestJS', 'React Native', 'Claude Code', 'Codex', 'OpenCode'];

export const education = {
  /** Mes de inicio del máster; `null` muestra solo «en curso». */
  masterStart: null as YearMonth | null,
  bachelorYears: '2015 — 2022',
  thesisTitle: 'Sistema de gestión de alertas automáticas basado en FIWARE',
  /** Enlace al TFG; `null` lo muestra como texto. */
  thesisUrl: null as string | null,
};
