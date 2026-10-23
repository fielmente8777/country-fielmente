import "../globals.css";
import { notFound } from "next/navigation";
import { countries, countryBySlug } from "@/data/countries";
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
        <Salesiq />
      </body>
    </html>
  );
}
