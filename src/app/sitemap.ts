import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { es: `${site.url}/`, en: `${site.url}/en` };
  return [
    { url: languages.es, alternates: { languages } },
    { url: languages.en, alternates: { languages } },
  ];
}
