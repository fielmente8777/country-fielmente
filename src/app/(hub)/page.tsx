import type { Metadata } from "next";
import { countriesInRegion } from "@/data/countries";
import { extraLinks, regionLink, regions } from "@/data/regions";
import { linkTo, site } from "@/data/site";

import { Footer, Header, SectionHeading, WhatsAppFloat, displayName } from "@/components/SiteChrome";
import CountryGrid from "@/components/CountyGrid";

export const metadata: Metadata = {
  title: "Hotel & Restaurant Marketing Agency Worldwide | Fielmente",
  description:
    "Fielmente helps hotels, resorts and restaurants around the world win more direct bookings with SEO, Google Ads, social media, OTA management and websites.",
  robots: { index: false, follow: true },
  icons: { icon: "/favicon/favicon-32x32.png", apple: "/favicon/apple-touch-icon.png" },
};

// Index of every region and country page (the project's own URL, e.g. the vercel.app preview).
// Each region is also served on its own subdomain, e.g. asia.fielmente.com.
export default function WorldIndex() {
  return (
    <>
      <Header ctaHref={`${site.mainSite}/contact-us/`} homeHref={site.mainSite} />
      <main className="max_screen_width py-12 md:py-18">
        <div className="max_width space-y-16">
          <div>
            <SectionHeading as="h1" eyebrow="Worldwide" title="Hotel &amp; Restaurant Marketing <span>Around the World</span>" />
            <p className="mt-4 max-w-3xl text-secondary md:text-xl">
              Choose your country to see how Fielmente helps hotels, resorts and restaurants there win more direct bookings.
            </p>
          </div>
          {regions.map((r) => {
            const cards = [
              ...countriesInRegion(r.slug).map((c) => ({ key: c.slug, name: displayName(c.name), eyebrow: c.heroEyebrow, href: linkTo(c.slug), lang: c.lang })),
              ...(extraLinks[r.slug] ?? []).map((x) => ({ key: x.href, name: x.name, eyebrow: x.eyebrow, href: x.href, lang: x.lang })),
            ].sort((a, b) => a.name.localeCompare(b.name));
            return (
              <section key={r.slug} aria-labelledby={`region-${r.slug}`} className="space-y-6">
                <h2 id={`region-${r.slug}`} className="text-primary md:text-[2rem]/tight text-2xl font-semibold">
                  <a href={regionLink(r.slug)} className="hover:text-color4 transition-colors">{r.name}</a>
                </h2>
                <CountryGrid items={cards} />
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat href={`https://wa.me/${site.whatsapp}`} />
    </>
  );
}