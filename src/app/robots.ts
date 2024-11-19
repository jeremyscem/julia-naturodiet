import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/blog', '/contact', '/myservices'],
      disallow: '/private/',
    },
    sitemap: 'https://julianaturodiet.com/sitemap.xml',
  }
}