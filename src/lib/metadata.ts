import type { Metadata, Viewport } from 'next';
import { getDictionary, type Locale } from '@/content/dictionaries';
import { site } from '@/content/site';

const PATHS: Record<Locale, string> = { es: '/', en: '/en' };

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    authors: [{ name: site.name, url: site.url }],
    alternates: {
      canonical: PATHS[locale],
      languages: { es: PATHS.es, en: PATHS.en, 'x-default': PATHS.es },
    },
    openGraph: {
      type: 'profile',
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      url: PATHS[locale],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name} · Software Engineer` }],
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: ['/og.png'] },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBFBFD' },
    { media: '(prefers-color-scheme: dark)', color: '#282A36' },
  ],
};
