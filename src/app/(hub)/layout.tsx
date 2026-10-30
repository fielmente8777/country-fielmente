import "../globals.css";
import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { regions } from "@/data/regions";
import GlobalLeadPopup from "@/components/GlobalLeadPopup";

import { WhatsAppFloat } from "@/components/SiteChrome";
import Salesiq from "@/components/zohochatbot/Salesiq";

const leadProfiles = Object.fromEntries(regions.map(region => [region.slug, { country: region.name, dialCode: region.dialCode, whatsappHref: whatsappLink(region.inName) }]));

export const metadata: Metadata = {
  metadataBase: new URL(`https://europe.${site.rootDomain}/`),
};

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppFloat />
        <Salesiq />
        <GlobalLeadPopup regions={leadProfiles} />
      </body>
    </html>
  );
}
