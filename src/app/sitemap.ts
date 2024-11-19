import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://julianaturodiet.com",
      lastModified: new Date(),
    },
    {
      url: "https://julianaturodiet.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://julianaturodiet.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://julianaturodiet.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://julianaturodiet.com/myservices",
      lastModified: new Date(),
    },
  ];
}
