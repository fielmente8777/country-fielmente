import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { countryBySlug, countriesInRegion } from "@/data/countries";
import { extraLinks, regionBySlug, regionLink, regions } from "@/data/regions";
import { footerColumns, linkTo, navLinks, site } from "@/data/site";
import { ArrowUpRight, IconBox } from "./Icons";

export const displayName = (name: string) => name.replace(/^the /, "").replace(/^\w/, (m) => m.toUpperCase());

/* ---------- Header: same layout as fielmente.com ---------- */
export function Header({ ctaHref = "#contact", homeHref = "/" }: { ctaHref?: string; homeHref?: string }) {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <header className="max_width">
        <nav className="flex items-center justify-between py-3 gap-4" aria-label="Main">
          <a href={homeHref} className="relative block md:w-36 w-25 aspect-[4/1.69] shrink-0" aria-label="Fielmente home">
            <Image src="/Logo.png" alt="Fielmente logo" fill sizes="(max-width: 767px) 100px, 144px" priority />
          </a>
          <ul className="xl:flex hidden items-center gap-10">
            {navLinks.map((l) => (
              <li key={l.label} className="relative nav-link">
                <a href={l.href} className="relative text-nowrap py-2 font-semibold text-primary">
                  {l.label}
                  <span className="span-border" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ctaHref}
            className="flex items-center gap-2 rounded-full bg-btn-dark text-white md:text-base text-xs font-medium md:px-6 px-4 md:py-3 py-2.5 transition-all duration-300 hover:shadow-2xl active:scale-95 text-nowrap"
          >
            Get a Free Audit Report
            <span className="w-6 aspect-square flex items-center justify-center bg-white rounded-full text-primary">
              <ArrowUpRight />
            </span>
          </a>
        </nav>
      </header>
    </div>
  );
}

/* ---------- Section heading: blue square eyebrow + title with orange <span> words ---------- */
export function SectionHeading({
  eyebrow,
  title,
  center = false,
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string; // may contain <span>…</span> for the orange accent
  center?: boolean;
  light?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={`flex flex-col gap-1 ${center ? "items-center text-center" : ""}`}>
      {eyebrow && (
        <p className={`flex items-center gap-2 md:text-[1.25rem]/[2rem] text-sm font-bold uppercase ${light ? "text-white/80" : "text-secondary"}`}>
          <IconBox />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`span-color md:text-[2.5rem]/[3rem] text-[1.6rem]/[2.1rem] font-semibold ${light ? "text-white" : "text-primary"}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}

export function DarkButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex w-fit items-center justify-center gap-2 rounded-full bg-btn-dark text-white font-medium px-6 py-3 transition-all duration-300 hover:shadow-2xl active:scale-95 ${className}`}
    >
      {children}
      <span className="w-6 aspect-square flex items-center justify-center rounded-full bg-white text-primary">
        <ArrowUpRight />
      </span>
    </a>
  );
}

export function SocialLinks({ footer = false }: { footer?: boolean }) {
  const items = [
    { href: site.socials.linkedin, label: "LinkedIn", icon: <FaLinkedinIn /> },
    { href: site.socials.facebook, label: "Facebook", icon: <FaFacebookF /> },
    { href: site.socials.instagram, label: "Instagram", icon: <AiFillInstagram /> },
    { href: site.socials.x, label: "X", icon: <FaXTwitter /> },
  ];
  return (
    <ul className={`flex items-center ${footer ? "gap-7" : "gap-3"}`}>
      {items.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener"
            className={`flex items-center justify-center rounded-full w-10 h-10 text-white transition-all duration-300 hover:scale-105 ${
              footer ? "bg-footer shadow-xl shadow-white/20" : "bg-btn-dark"
            }`}
          >
            <span className="sr-only">{s.label}</span>
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

const footerLink = "text-white/70 hover:text-tertiary transition-colors max-md:text-sm";

/* ---------- Footer: same structure as fielmente.com, plus the country pages of this region ---------- */
export function Footer({ currentSlug, region: regionSlug }: { currentSlug?: string; region?: string }) {
  const region = regionBySlug(regionSlug ?? countryBySlug(currentSlug ?? "")?.region ?? "");
  const inRegion = region
    ? [
        ...countriesInRegion(region.slug)
          .filter((c) => c.slug !== currentSlug)
          .map((c) => ({ key: c.slug, name: displayName(c.name), href: linkTo(c.slug), lang: c.lang })),
        ...(extraLinks[region.slug] ?? []).map((x) => ({ key: x.href, name: x.name, href: x.href, lang: x.lang })),
      ].sort((a, b) => a.name.localeCompare(b.name))
    : [];
  const otherRegions = regions.filter((r) => r.slug !== region?.slug);

  return (
    <footer className="max_screen_width bg-footer md:py-18 pt-10 pb-28 md:pb-18">
      <div className="max_width relative after:absolute after:inset-0 after:bg-[url('/map.png')] after:bg-contain after:bg-no-repeat after:bg-center after:opacity-[0.08] after:-z-10 isolate">
        <div className="grid lg:grid-cols-[1.1fr_2.6fr] gap-10 md:gap-14">
          <div className="flex flex-col gap-6">
            <a href={site.mainSite} className="relative w-full max-w-[179px] aspect-[4/1.76]">
              <Image src="/logo2.png" alt="Fielmente logo" fill sizes="179px" className="object-contain" />
            </a>
            <p className="text-white">© Fielmente Hospitality Marketing Agency</p>
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">Follow Fielmente</p>
              <SocialLinks footer />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4 md:gap-6">
                <p className="text-white text-lg font-medium">{col.title}</p>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-white/70 hover:text-tertiary transition-colors max-md:text-sm">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-4 md:gap-6">
              {region && (
                <>
                  <p className="text-white text-lg font-medium">
                    <a href={regionLink(region.slug)} className="hover:text-tertiary transition-colors">{region.name}</a>
                  </p>
                  <ul className="flex flex-col gap-3 md:gap-4">
                    {inRegion.map((c) => (
                      <li key={c.key}>
                        <a href={c.href} hrefLang={c.lang} className={footerLink}>{c.name}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p className="text-white text-lg font-medium">{region ? "More regions" : "Regions"}</p>
              <ul className="flex flex-col gap-3 md:gap-4">
                {otherRegions.map((r) => (
                  <li key={r.slug}>
                    <a href={regionLink(r.slug)} className={footerLink}>{r.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 col-span-2 md:col-span-1">
              <p className="text-white text-lg font-medium">Offices</p>
              <ul className="flex flex-col gap-4">
                {site.offices.map((o) => (
                  <li key={o.label} className="text-white/70 flex gap-2 max-md:text-sm">
                    <MdLocationOn className="mt-1 shrink-0" aria-hidden="true" />
                    <span>{o.address}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white text-lg font-medium">Contact</p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={`tel:${site.phone}`} className="text-white/70 hover:text-tertiary flex gap-2 items-center max-md:text-sm">
                    <MdPhone aria-hidden="true" /> {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${site.whatsapp}`} className="text-white/70 hover:text-tertiary flex gap-2 items-center max-md:text-sm">
                    <FaWhatsapp aria-hidden="true" /> {site.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-white/70 hover:text-tertiary flex gap-2 items-center max-md:text-sm">
                    <MdEmail aria-hidden="true" /> {site.email}
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-white/70 hover:text-tertiary max-md:text-sm">Privacy notice</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Shared floating contact controls, mounted once by each root layout. */
export function WhatsAppFloat({ href = `https://wa.me/${site.whatsapp}` }: { href?: string }) {
  return (
    <div
      role="group"
      aria-label="Contact Fielmente"
      className="fixed left-4 lg:left-10 z-20 flex flex-col items-start gap-3"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <a
        id="call-button"
        href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
        aria-label="Call Fielmente"
        title="Call Fielmente"
        className="call-button flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#110D3C] text-white shadow-2xl transition-colors hover:bg-[#1B2231] focus-visible:ring-2 focus-visible:ring-[#F26633] focus-visible:ring-offset-2"
      >
        <MdPhone size={23} aria-hidden="true" />
      </a>
      <a
        id="whatsapp-button"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="whatsapp-button flex h-12 w-12 flex-none items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-colors hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-[#F26633] focus-visible:ring-offset-2"
      >
        <FaWhatsapp size={29} aria-hidden="true" />
      </a>
    </div>
  );
}
