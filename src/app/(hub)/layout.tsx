import "../globals.css";
import type { Metadata } from "next";
import { site } from "@/data/site";
import { WhatsAppFloat } from "@/components/SiteChrome";
import Salesiq from "@/components/zohochatbot/Salesiq";

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
      </body>
    </html>
  );
}
