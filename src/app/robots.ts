import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // Crawling stays open so Google sees each page's noindex; no sitemap, since no page here is meant for the index.
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
  };
}