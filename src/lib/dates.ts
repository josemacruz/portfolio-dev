import type { Locale } from '@/content/dictionaries';

export type YearMonth = `${number}-${number}`;

function parse(value: YearMonth): { year: number; month: number } {
  const [year, month] = value.split('-').map(Number);
  return { year: year ?? 0, month: month ?? 1 };
}

function toYearMonth(date: Date): YearMonth {
  return `${date.getFullYear()}-${date.getMonth() + 1}`;
}

export function formatYearMonth(value: YearMonth, locale: Locale): string {
  const { year, month } = parse(value);
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace('.', '');
}

/** Meses entre dos fechas contando ambos extremos, como LinkedIn. */
export function monthsBetween(start: YearMonth, end: YearMonth = toYearMonth(new Date())): number {
  const a = parse(start);
  const b = parse(end);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

export function yearsSince(start: YearMonth): number {
  return Math.floor((monthsBetween(start) - 1) / 12);
}

const UNITS: Record<Locale, { year: [string, string]; month: [string, string] }> = {
  es: { year: ['año', 'años'], month: ['mes', 'meses'] },
  en: { year: ['yr', 'yrs'], month: ['mo', 'mos'] },
};

export function formatDuration(totalMonths: number, locale: Locale): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const { year, month } = UNITS[locale];
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? year[0] : year[1]}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? month[0] : month[1]}`);
  return parts.join(' ');
}
