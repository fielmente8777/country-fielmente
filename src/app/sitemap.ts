import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";
import { regions, regionUrl } from "@/data/regions";
import { countryUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(countries.map((c) => [c.lang, countryUrl(c.slug)]));
  return [
    ...regions.map((r) => ({ url: regionUrl(r.slug), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...countries.map((c) => ({
      url: countryUrl(c.slug),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages },
    })),
  ];
}