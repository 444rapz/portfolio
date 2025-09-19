import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ko-fi.com/rapz444',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
