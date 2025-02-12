import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.APP_URL || '/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          pl: `${process.env.APP_URL}/pl`,
        },
      },
    },
  ];
}
