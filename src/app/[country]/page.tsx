import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { countries, countryBySlug, type Country } from "@/data/countries";
import { clientLogos, countryUrl, internationalClients, partners, services, site, stats, steps, whatsappLink } from "@/data/site";
import EnquiryForm from "@/components/EnquiryForm";
import ServicesTabs from "@/components/ServicesTabs";
import { DarkButton, Footer, Header, SectionHeading, SocialLinks, displayName } from "@/components/SiteChrome";
import { ArrowUpRight, ConsultIcon, ExecuteIcon, PlusIcon, StrategiseIcon, TickIcon } from "@/components/Icons";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

type Params = { params: Promise<{ country: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { country: slug } = await params;
  const c = countryBySlug(slug);
  if (!c) return {};
  const url = countryUrl(c.slug);

  const languages: Record<string, string> = Object.fromEntries(countries.map((x) => [x.lang, countryUrl(x.slug)]));
  languages["en-US"] = `https://usa.${site.rootDomain}/`;
  languages["x-default"] = `${site.mainSite}/`;

  return {
    metadataBase: new URL(url),
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url, languages },
    openGraph: { type: "website", url, siteName: site.brand, title: c.metaTitle, description: c.metaDescription, locale: c.ogLocale },
    twitter: { card: "summary_large_image", title: c.metaTitle, description: c.metaDescription },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/favicon/apple-touch-icon.png",
    },
  };
}

function faqs(c: Country) {
  return [
    {
      q: `Can you work with a hotel ${c.inName} from India?`,
      a: `Yes. Fielmente has offices in India and Dubai and already works with hospitality clients in Europe and Australia. We schedule calls in your time zone (${c.timeZone}) and handle day-to-day work over email and WhatsApp.`,
    },
    {
      q: "What kinds of businesses do you work with?",
      a: "Hotels, resorts, villas, guesthouses, glamping sites, restaurants and cafés, from single independent properties to small groups.",
    },
    {
      q: "Which booking platforms do you manage?",
      a: `${c.platforms.join(", ")}, plus Google Business Profile, Instagram and Facebook.`,
    },
    {
      q: "How is pricing handled?",
      a: `After the free audit we send a written proposal with a monthly fee quoted in ${c.currency}, and we work under a signed engagement agreement.`,
    },
    c.region === "europe"
      ? {
          q: "How do you handle guest data and GDPR?",
          a: "We only use the data needed to run and measure your campaigns, set tracking up to respect cookie consent, and can sign a data processing agreement with you.",
        }
      : {
          q: "How do you handle guest data?",
          a: `We only use the data needed to run and measure your campaigns, set tracking up in line with data protection rules ${c.inName} and in your guests' home countries, and can sign a data processing agreement with you.`,
        },
  ];
}

function Headline({ c }: { c: Country }) {
  const i = c.heroTitle.indexOf(c.heroAccent);
  if (i < 0) return <>{c.heroTitle}</>;
  return (
    <>
      {c.heroTitle.slice(0, i)}
      <span className="text-tertiary">{c.heroAccent}</span>
      {c.heroTitle.slice(i + c.heroAccent.length)}
    </>
  );
}

export default async function CountryPage({ params }: Params) {
  const { country: slug } = await params;
  const c = countryBySlug(slug);
  if (!c) notFound();

  const wa = whatsappLink(c.inName);
  const name = displayName(c.name);
  const faqList = faqs(c);
  const url = countryUrl(c.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${url}#agency`,
      name: "Fielmente Hospitality Marketing",
      description: c.metaDescription,
      url,
      logo: `${site.mainSite}/fielmente_logo.png`,
      image: `${site.mainSite}/fielmente_logo.png`,
      email: site.email,
      telephone: site.phone,
      parentOrganization: { "@id": `${site.mainSite}/#organization` },
      address: { "@type": "PostalAddress", streetAddress: "Suncity Success Tower, Golf Course Ext Rd, Sector 65", addressLocality: "Gurugram", addressRegion: "Haryana", postalCode: "122005", addressCountry: "IN" },
      areaServed: { "@type": c.slug === "bali" ? "AdministrativeArea" : "Country", name },
      knowsLanguage: [c.lang, "en"],
      sameAs: Object.values(site.socials),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hospitality marketing services",
        itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, description: s.description } })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqList.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main>
        {/* Hero: fielmente.com banner, glass pill, white headline with orange accent, glass lead form */}
        <section className="max_screen_width py-7">
          <div className="max_width">
            <div className="relative w-full overflow-hidden rounded-[24px] xl:rounded-none xl:aspect-[4/1.9255]">
              <Image src="/Banner.webp" alt="" fill priority sizes="(min-width: 768px) 1320px, 1px" className="object-cover xl:object-contain md:block hidden" />
              <Image src="/home/bnr-sm.webp" alt="" fill priority sizes="(max-width: 767px) 100vw, 1px" className="object-cover md:hidden" />
              <div className="relative xl:absolute xl:inset-0 z-10 px-4 md:px-12 pt-6 md:pt-10 pb-16 md:pb-28 xl:pb-0 xl:pt-16">
                <div className="flex flex-col xl:gap-6 gap-4">
                  <div className="flex items-center gap-2 px-2.5 py-1.5 text-white rounded-full w-fit mx-auto glassy-card">
                    <Image src="/home/Frame-3.png" alt="" width={40} height={18} />
                    <p className="text-[11px] md:text-xs" lang={c.lang}>{c.heroEyebrow}</p>
                  </div>
                  <h1 lang={c.lang} className="[word-break:auto-phrase] text-white text-center lg:text-[2.5rem]/tight md:text-[2rem]/tight text-[1.55rem]/tight font-semibold max-w-4xl mx-auto">
                    <Headline c={c} />
                  </h1>
                  <p className="text-white text-center lg:text-lg text-sm max-w-3xl mx-auto">
                    {c.heroTitleEn}. SEO, Google Ads, social media, OTA management and websites that win direct bookings.
                  </p>
                  <EnquiryForm variant="hero" country={name} dialCode={c.dialCode} ctaLabel={c.cta} ctaLang={c.lang} whatsappHref={wa} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business partners */}
        <section className="max_screen_width py-8 md:py-12">
          <div className="max_width grid lg:grid-cols-[220px_1fr] items-center gap-6">
            <h2 className="span-color text-primary text-lg font-semibold max-lg:text-center">
              Our <span>Business</span> Partners
            </h2>
            <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]" style={{ ["--marquee-duration" as string]: "28s" }}>
              <div className="marquee-track items-center">
                {[...partners, ...partners].map((p, i) => (
                  <div key={i} className="relative w-40 h-16 mx-8 shrink-0" aria-hidden={i >= partners.length}>
                    <Image src={p.src} alt={i < partners.length ? p.alt : ""} fill sizes="160px" className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About / market */}
        <section className="max_screen_width relative py-12 md:py-18 after:absolute md:after:inset-4 after:inset-2 md:after:rounded-[24px] after:rounded-xl after:bg-[#F9FAFB] after:-z-10 isolate">
          <div className="max_width">
            <div className="grid lg:grid-cols-[1.7fr_1.5fr] gap-10 items-center">
              <div className="space-y-6 max-md:px-2">
                <SectionHeading eyebrow={`Hotel marketing ${c.inName}`} title={`Hotel &amp; Restaurant Marketing Agency for <span>${c.name}</span>`} />
                <p className="text-secondary md:text-xl text-base leading-relaxed">{c.intro}</p>
                <ul className="space-y-4">
                  {c.focus.map((f) => (
                    <li key={f.title} className="flex gap-3">
                      <span className="mt-0.5 shrink-0"><TickIcon /></span>
                      <span className="text-secondary">
                        <strong className="text-primary font-semibold md:text-lg">{f.title}.</strong> {f.body}
                      </span>
                    </li>
                  ))}
                </ul>
                <DarkButton href="#contact">Book My Free Consultation Call</DarkButton>
              </div>
              <div className="w-full relative aspect-[465/508] max-w-md mx-auto">
                <Image src="/home/about.webp" alt="Hotels and resorts marketed by Fielmente" fill sizes="(max-width: 1024px) 90vw, 460px" className="object-contain" />
              </div>
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

        {/* Regions strip, styled like the services marquee on fielmente.com */}
        <section aria-label={`Regions we serve ${c.inName}`} className="max_screen_width bg-black py-4 mt-12 md:mt-18 overflow-hidden marquee">
          <div className="marquee-track items-center" style={{ ["--marquee-duration" as string]: "36s" }}>
            {[...c.regions, ...c.regions].map((r, i) => (
              <span key={i} className="flex items-center gap-8 mr-8 text-white font-semibold uppercase whitespace-nowrap md:text-base text-sm" aria-hidden={i >= c.regions.length}>
                {r}
                <span className="w-2 h-2 bg-tertiary inline-block" />
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max_screen_width py-12 md:py-18">
          <div className="max_width space-y-10">
            <SectionHeading eyebrow="Our Services" title={`Transforming Hospitality Brands ${c.inName} with Expert <span>Hospitality Marketing</span> Services`} />
            <ServicesTabs services={services} />
            <div className="rounded-2xl border border-main-border p-5 md:p-6">
              <p className="font-semibold text-primary">Platforms we manage for hotels {c.inName}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[...c.platforms, "Google Business Profile", "Instagram", "Facebook"].map((p) => (
                  <li key={p} className="rounded-full border border-main-border bg-[#F9FAFB] px-3.5 py-1.5 text-sm text-secondary">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="max_screen_width py-12 md:py-18 bg-[#F9FAFB]">
          <div className="max_width grid lg:grid-cols-2 gap-10">
            <SectionHeading eyebrow="How It Works" title="Behind The Scene at <span>Fielmente</span>" />
            <ol className="relative space-y-8">
              <span aria-hidden="true" className="absolute left-6 top-12 bottom-12 border-l border-dashed border-color4" />
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-6">
                  <div className="bg-[#E9F5FF] border-2 border-[#B8CDF9] w-12 aspect-square flex items-center justify-center rounded-full text-color4 shrink-0">
                    {[<ConsultIcon key="c" />, <StrategiseIcon key="s" />, <ExecuteIcon key="e" />][i]}
                  </div>
                  <div className="space-y-2">
                    <h3 className="md:text-[1.75rem] text-xl font-semibold text-primary">{s.title}</h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Clients */}
        <section id="work" className="max_screen_width py-12 md:py-18">
          <div className="max_width grid lg:grid-cols-[220px_1fr] items-center gap-6">
            <h2 className="text-primary text-xl font-semibold max-lg:text-center">
              Our Valued <br className="max-lg:hidden" />
              Hospitality Clients
            </h2>
            <div className="marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]" style={{ ["--marquee-duration" as string]: "60s" }}>
              <div className="marquee-track items-center">
                {[...clientLogos, ...clientLogos].map((l, i) => (
                  <div key={i} className="relative w-44 h-24 mx-2 shrink-0 rounded-lg border border-main-border bg-white" aria-hidden={i >= clientLogos.length}>
                    <Image src={l.src} alt={i < clientLogos.length ? l.alt : ""} fill sizes="176px" className="object-contain p-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="max_width mt-8 text-secondary max-lg:text-center">
            Outside India we also work with{" "}
            {internationalClients.map((ic, i) => (
              <span key={ic.name}>
                <strong className="text-primary font-semibold">{ic.name}</strong> ({ic.place}){i < internationalClients.length - 1 ? " and " : "."}
              </span>
            ))}
          </p>
        </section>

        {/* Elevate CTA band */}
        <section className="max_screen_width py-8 md:py-12">
          <div className="max_width">
            <div className="elevate-brand">
              <div className="grid lg:grid-cols-[1.3fr_1fr] items-center gap-6 py-10 px-6 md:px-16">
                <div className="text-white space-y-4 max-w-lg">
                  <h2 className="md:text-[2.1rem]/tight text-2xl font-semibold">Elevate your Hospitality Brand {c.inName} Today!</h2>
                  <p className="text-white/90">
                    Ready to transform your digital presence? Book a free audit and we&apos;ll show you where your next direct bookings will come from.
                  </p>
                  <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-white text-black font-medium px-6 py-3 transition-all duration-300 hover:shadow-2xl active:scale-95">
                    Schedule Call
                    <span className="w-6 aspect-square flex items-center justify-center rounded-full bg-black text-white"><ArrowUpRight /></span>
                  </a>
                </div>
                <div className="w-full md:w-[410px] lg:ml-auto relative aspect-[471/428]">
                  <Image src="/home/add.webp" alt="Hotel room photographed for a Fielmente client" fill sizes="410px" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max_screen_width py-12 md:py-18">
          <div className="max_width grid lg:grid-cols-[1.4fr_2fr] gap-10">
            <div className="lg:w-100 space-y-8">
              <SectionHeading eyebrow="FAQs" title="Frequently <span>Asked</span> Questions!" />
              <div className="py-5 px-6 border border-main-border rounded-2xl flex flex-col gap-5 shadow-md">
                <Image src="/home/img.png" alt="Fielmente consultant" width={64} height={64} className="rounded-full border object-contain" />
                <div>
                  <p className="text-lg font-semibold text-primary">Get A FREE Consultation!</p>
                  <p className="text-sm text-secondary">Let&apos;s work on boosting your hotel&apos;s profitability!</p>
                </div>
                <DarkButton href="#contact" className="w-full! text-sm">Book a Free Call</DarkButton>
              </div>
            </div>
            <div>
              {faqList.map((f) => (
                <details key={f.q} className="group border-b border-[#EBE3E0] py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-primary text-lg font-semibold">
                    {f.q}
                    <span className="faq-plus shrink-0 transition-transform duration-300"><PlusIcon /></span>
                  </summary>
                  <p className="mt-3 text-secondary leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max_screen_width relative py-12 md:py-18 after:absolute md:after:inset-4 after:inset-2 md:after:rounded-[24px] after:rounded-xl after:bg-[#F9FAFB] after:-z-10 isolate">
          <div className="max_width grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-8 max-md:px-2">
              <SectionHeading eyebrow="Contact Us" title="Get in touch with Us" />
              <p className="text-secondary leading-relaxed">
                Tell us about your property and we&apos;ll review your website, search visibility, ads and OTA listings, then walk you through what we found on a call in {c.timeZone}.
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
                <div>
                  <dt className="text-secondary text-sm">Offices:</dt>
                  {site.offices.map((o) => (
                    <dd key={o.label} className="text-primary flex gap-2 mt-1">
                      <MdLocationOn className="mt-1 shrink-0" aria-hidden="true" /> {o.address}
                    </dd>
                  ))}
                </div>
              </dl>
              <div className="space-y-3">
                <p className="text-primary font-medium">Follow Fielmente:</p>
                <SocialLinks />
              </div>
            </div>
            <EnquiryForm variant="card" country={name} dialCode={c.dialCode} ctaLabel="Submit" whatsappHref={wa} />
          </div>
        </section>
      </main>

      <Footer currentSlug={c.slug} />
    </>
  );
}