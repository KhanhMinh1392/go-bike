import { locales } from '@/middleware';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const languageEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
  }));
  
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
    },
    ...languageEntries,
  ];
}
