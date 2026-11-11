import "../globals.css";
import { notFound } from "next/navigation";
import { countries, countryBySlug } from "@/data/countries";
import { WhatsAppFloat } from "@/components/SiteChrome";
import { whatsappLink } from "@/data/site";
import GlobalLeadPopup from "@/components/GlobalLeadPopup";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export const dynamicParams = false;

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = countryBySlug(slug);
  if (!country) notFound();

  return (
    // The page body is in English; only the headline, eyebrow and form button are in the local language and
    // carry their own lang attribute. So the document language is English (the local English variant where there is one).
    <html lang={country.lang.startsWith("en") ? country.lang : "en"}>
      <body>
        {children} 
        <WhatsAppFloat href={whatsappLink(country.inName)} />
        <GlobalLeadPopup profile={{ country: country.name, dialCode: country.dialCode, whatsappHref: whatsappLink(country.inName) }} />
      </body>
    </html>
  );
}
