import "../globals.css";
import { notFound } from "next/navigation";
import { countries, countryBySlug } from "@/data/countries";
import { WhatsAppFloat } from "@/components/SiteChrome";
import { whatsappLink } from "@/data/site";
import Salesiq from "@/components/zohochatbot/Salesiq";

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
    <html lang={country.lang}>
      <body>
        {children} 
        <WhatsAppFloat href={whatsappLink(country.inName)} />
        <Salesiq />
      </body>
    </html>
  );
}
