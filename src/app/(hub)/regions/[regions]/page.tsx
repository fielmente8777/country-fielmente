import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { countriesInRegion } from "@/data/countries";
import { extraLinks, regionBySlug, regionUrl, regions } from "@/data/regions";
import { linkTo, services, site, stats, whatsappLink } from "@/data/site";

import EnquiryForm from "@/components/EnquiryForm";
import { Footer, Header, SectionHeading, SocialLinks, displayName } from "@/components/SiteChrome";
import CountryGrid from "@/components/CountyGrid";

type Params = { params: Promise<{ regions: string }> };

export function generateStaticParams() {
  return regions.map((r) => ({ regions: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { regions: slug } = await params;
  const r = regionBySlug(slug);
  if (!r) return {};
  const url = regionUrl(r.slug);
  return {
    metadataBase: new URL(url),
    title: r.metaTitle,
    description: r.description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, siteName: site.brand, title: r.metaTitle, description: r.description, locale: "en_GB" },
    twitter: { card: "summary", title: r.metaTitle, description: r.description },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon/favicon-32x32.png", apple: "/favicon/apple-touch-icon.png" },
  };
}

// Region hub, served on <region>.fielmente.com (see proxy.ts): lists the region's country pages and takes enquiries.
export default async function RegionPage({ params }: Params) {
  const { regions: slug } = await params;
  const r = regionBySlug(slug);
  if (!r) notFound();

  const list = countriesInRegion(r.slug);
  const cards = [
    ...list.map((c) => ({ key: c.slug, name: displayName(c.name), eyebrow: c.heroEyebrow, href: linkTo(c.slug), lang: c.lang })),
    ...(extraLinks[r.slug] ?? []).map((x) => ({ key: x.href, name: x.name, eyebrow: x.eyebrow, href: x.href, lang: x.lang })),
  ].sort((a, b) => a.name.localeCompare(b.name));
  const wa = whatsappLink(r.inName);
  const url = regionUrl(r.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}#agency`,
    name: "Fielmente Hospitality Marketing",
    description: r.description,
    url,
    logo: `${site.mainSite}/fielmente_logo.png`,
    email: site.email,
    telephone: site.phone,
    parentOrganization: { "@id": `${site.mainSite}/#organization` },
    areaServed: cards.map((c) => ({ "@type": "Place", name: c.name })),
    sameAs: Object.values(site.socials),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hospitality marketing services",
      itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title } })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header homeHref={site.mainSite} />
      <main>
        <section className="max_screen_width py-12 md:py-18">
          <div className="max_width">
            <SectionHeading as="h1" eyebrow={r.name} title={r.title} />
            <p className="mt-4 max-w-3xl text-secondary md:text-xl">
              {r.description} Choose your country to see how we help hotels, resorts and restaurants there win more direct bookings.
            </p>
            <div className="mt-10">
              <CountryGrid items={cards} />
            </div>
            <div className="grid xl:grid-cols-4 grid-cols-2 gap-2.5 p-2.5 rounded-[15px] mt-14 bg-[#F5F6F8]">
              {stats.map((s) => (
                <div key={s.label} className="text-center h-full bg-white p-4 rounded-[10px] space-y-3">
                  <p className="text-primary md:text-3xl text-xl font-bold">{s.number}</p>
                  <p className="text-[#6B7280] max-md:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="max_screen_width relative py-12 md:py-18 after:absolute md:after:inset-4 after:inset-2 md:after:rounded-[24px] after:rounded-xl after:bg-[#F9FAFB] after:-z-10 isolate">
          <div className="max_width grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8 max-md:px-2">
              <SectionHeading eyebrow="Contact Us" title="Get a free audit of your <span>hotel marketing</span>" />
              <p className="text-secondary leading-relaxed">
                Tell us about your property and we&apos;ll review your website, search visibility, ads and OTA listings, then walk you through what we found on a call in your time zone.
              </p>
              <dl className="space-y-5">
                <div>
                  <dt className="text-secondary text-sm">Call:</dt>
                  <dd>
                    <a href={`tel:${site.phone}`} className="text-primary text-lg flex items-center gap-2 hover:text-color4">
                      <MdPhone aria-hidden="true" /> {site.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-secondary text-sm">WhatsApp:</dt>
                  <dd>
                    <a href={wa} className="text-primary text-lg flex items-center gap-2 hover:text-color4">
                      <FaWhatsapp className="text-[#25D366]" aria-hidden="true" /> {site.whatsappDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-secondary text-sm">Email:</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="text-primary text-lg flex items-center gap-2 hover:text-color4">
                      <MdEmail aria-hidden="true" /> {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="space-y-3">
                <p className="text-primary font-medium">Follow Fielmente:</p>
                <SocialLinks />
              </div>
            </div>
            <EnquiryForm variant="card" country={r.name} dialCode={r.dialCode} ctaLabel="Submit" whatsappHref={wa} />
          </div>
        </section>
      </main>
      <Footer region={r.slug} />
    </>
  );
}
