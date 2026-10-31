// Region hubs: europe.fielmente.com, middle-east.fielmente.com, asia.fielmente.com, …
import { site } from "./site";

export const regions = [
  {
    slug: "europe",
    inName: "in Europe",
    metaTitle: "Hotel & Restaurant Marketing Agency for Europe | Fielmente",
    dialCode: "+44",
    name: "Europe",
    title: "Hotel &amp; Restaurant Marketing <span>Across Europe</span>",
    description:
      "Digital marketing for hotels, resorts and restaurants across Europe: SEO, Google Ads, social media, OTA management and websites that win direct bookings.",
  },
  {
    slug: "middle-east",
    inName: "in the Middle East or North Africa",
    metaTitle: "Hotel & Resort Marketing Agency in the Middle East & North Africa | Fielmente",
    dialCode: "+971",
    name: "Middle East & North Africa",
    title: "Hotel &amp; Resort Marketing in the <span>Middle East &amp; North Africa</span>",
    description:
      "Digital marketing for hotels, resorts and restaurants in the UAE, Saudi Arabia, Qatar, Oman, Egypt and Morocco, from our office in Dubai.",
  },
  {
    slug: "asia",
    inName: "in Asia",
    metaTitle: "Hotel & Resort Marketing Agency in Asia | Fielmente",
    dialCode: "+65",
    name: "Asia",
    title: "Hotel &amp; Resort Marketing <span>Across Asia</span>",
    description:
      "Digital marketing for hotels, resorts and restaurants in the Maldives, Sri Lanka, Nepal, Bhutan, Thailand, Bali, Vietnam, Malaysia, Singapore, the Philippines and Japan.",
  },
  {
    slug: "africa",
    inName: "in Africa or the Indian Ocean",
    metaTitle: "Hotel, Lodge & Resort Marketing Agency in Africa & the Indian Ocean | Fielmente",
    dialCode: "+27",
    name: "Africa & Indian Ocean",
    title: "Hotel, Lodge &amp; Resort Marketing in <span>Africa &amp; the Indian Ocean</span>",
    description:
      "Digital marketing for resorts, safari lodges and hotels in Mauritius, Seychelles, South Africa, Kenya and Tanzania.",
  },
  {
    slug: "americas",
    inName: "in the Americas",
    metaTitle: "Hotel & Resort Marketing Agency for the Americas & Caribbean | Fielmente",
    dialCode: "+1",
    name: "The Americas",
    title: "Hotel &amp; Resort Marketing in <span>the Americas</span>",
    description:
      "Digital marketing for hotels, resorts and restaurants in the United States, Canada, Mexico, the Caribbean and Brazil.",
  },
  {
    slug: "oceania",
    inName: "in Australia or New Zealand",
    metaTitle: "Hotel & Restaurant Marketing Agency in Australia & New Zealand | Fielmente",
    dialCode: "+61",
    name: "Australia & New Zealand",
    title: "Hotel &amp; Restaurant Marketing in <span>Australia &amp; New Zealand</span>",
    description: "Digital marketing for hotels, motels, lodges, cafés and restaurants in Australia and New Zealand.",
  },
] as const;

export type Region = (typeof regions)[number];
export type RegionSlug = Region["slug"];

export const regionBySlug = (slug: string) => regions.find((r) => r.slug === slug);
export const regionUrl = (slug: string) => `https://${slug}.${site.rootDomain}/`;
// On a preview deployment without subdomains (NEXT_PUBLIC_PATH_LINKS=1), link by path instead.
export const regionLink = (slug: string) =>
  process.env.NEXT_PUBLIC_PATH_LINKS === "1" ? `/regions/${slug}` : regionUrl(slug);

// Pages that live outside this project but belong in a region's list.
export const extraLinks: Partial<Record<RegionSlug, { name: string; href: string; lang: string; eyebrow: string }[]>> = {
  europe: ["Finland", "Hungary", "Poland"].map(name=>({name,href:`https://fielmente.com/international-hotel-marketing-agency/locations/${name.toLowerCase()}/`,lang:"en",eyebrow:"Hotel and restaurant marketing"})),
  asia: ["Azerbaijan", "Cambodia", "Kazakhstan"].map(name=>({name,href:`https://fielmente.com/international-hotel-marketing-agency/locations/${name.toLowerCase()}/`,lang:"en",eyebrow:"Hotel and restaurant marketing"})),
  americas: [{ name: "United States", href: `https://usa.${site.rootDomain}/`, lang: "en-US", eyebrow: "Hotel marketing agency" }],
};
