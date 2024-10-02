import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "http://www.qulett.com",
      lastModified: new Date().toISOString(), // Use ISO string for dates
      changeFrequency: "weekly", // Correct string for frequency
      priority: 1.0, // Priority is a number between 0.0 and 1.0
    },
    {
      url: "http://www.qulett.com/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "http://www.qulett.com/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
