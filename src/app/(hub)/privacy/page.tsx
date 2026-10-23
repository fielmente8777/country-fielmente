import type { Metadata } from "next";
import { site } from "@/data/site";
import { Footer, Header, SectionHeading } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Privacy notice | Fielmente",
  robots: { index: false, follow: true },
};

// Draft privacy notice for the enquiry forms on the country pages. Have it reviewed before go-live.
export default function Privacy() {
  const h = "pt-4 text-lg font-semibold text-primary";
  return (
    <>
      <Header ctaHref={`${site.mainSite}/contact-us/`} homeHref={site.mainSite} />
      <main className="max_screen_width py-12 md:py-18">
        <div className="max_width max-w-3xl!">
          <SectionHeading as="h2" eyebrow="Legal" title="Privacy <span>notice</span>" />
          <div className="mt-8 space-y-4 leading-relaxed text-secondary">
            <p>This notice explains how Fielmente Hospitality Marketing (&quot;Fielmente&quot;, &quot;we&quot;) uses the details you send through the enquiry forms on our country pages.</p>
            <h3 className={h}>What we collect</h3>
            <p>Your name, phone number, email address, property name and message (if given), and the page you used.</p>
            <h3 className={h}>Why we use it</h3>
            <p>To reply to your enquiry and, if you ask us to, prepare an audit and proposal. Our legal basis is taking steps at your request before entering into a contract, and our legitimate interest in responding to business enquiries (GDPR Art. 6(1)(b) and (f)).</p>
            <h3 className={h}>Where it goes</h3>
            <p>Enquiries are stored in the Eazotel CRM that Fielmente uses to manage leads, and handled by our team in India and the UAE. Transfers outside the EEA, UK or Switzerland are protected by appropriate safeguards such as standard contractual clauses.</p>
            <h3 className={h}>How long we keep it</h3>
            <p>Up to 24 months after our last contact with you, unless you become a client.</p>
            <h3 className={h}>Your rights</h3>
            <p>You can ask to see, correct or delete your data, or object to its use, at any time by emailing <a href={`mailto:${site.email}`} className="text-color4 underline">{site.email}</a>. You can also complain to your local data protection authority.</p>
            <h3 className={h}>Cookies</h3>
            <p>These pages do not set advertising or analytics cookies. If that changes, we will ask for your consent first.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}