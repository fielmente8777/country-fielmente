// Every country page, across all regions. Copy lives in europe.ts and world.ts.
import { countries as europe, type Country as EuropeCountry } from "./europe";
import { worldCountries } from "./world";
import type { RegionSlug } from "./regions";

export type FocusPoint = EuropeCountry["focus"][number];
export type Country = Omit<EuropeCountry, "currency"> & { currency: string; region: RegionSlug };

export const countries: Country[] = [
  ...europe.map((c) => ({ ...c, region: "europe" as const })),
  ...worldCountries,
];

export const countryBySlug = (slug: string) => countries.find((c) => c.slug === slug);
export const countriesInRegion = (region: string) => countries.filter((c) => c.region === region);