import { locales } from '@/middleware';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemapArr = locales.map((locale) => `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/sitemap.xml`);
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapArr,
  };
}
