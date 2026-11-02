import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Locale } from '@/content/dictionaries';
import { getDictionary } from '@/content/dictionaries';
import { site } from '@/content/site';
import { themeInitScript } from '@/lib/theme';
import '@/app/globals.css';

const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

function personSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    jobTitle: 'Software Engineer',
    description: getDictionary(locale).meta.description,
    sameAs: [site.linkedin, site.github],
    worksFor: { '@type': 'Organization', name: 'Open Digital Services' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Seville' },
    knowsAbout: [
      'Software engineering',
      'Frontend engineering',
      'React',
      'TypeScript',
      'Full-stack development',
      'Product engineering',
      'Artificial intelligence',
      'Cloud engineering',
      'IoT',
    ],
  };
}

/** `<html>` compartido por las dos raíces de idioma: cada una fija su propio `lang`. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema(locale)) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

