import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { regions, regionUrl } from "@/data/regions";
import { countryUrl, isIndexedCountry } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Countries with their own fielmente.com page (see mainSitePageFor) are noindex, so they stay out.
  const indexed = countries.filter((c) => isIndexedCountry(c.slug));
  const languages = Object.fromEntries(indexed.map((c) => [c.lang, countryUrl(c.slug)]));
  return [
    ...regions.map((r) => ({ url: regionUrl(r.slug), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...indexed.map((c) => ({
      url: countryUrl(c.slug),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages },
    })),
  ];
}
