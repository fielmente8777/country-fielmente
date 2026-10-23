import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { countries, countryBySlug } from "@/data/countries";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Fielmente hospitality marketing";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

// Brand colours from fielmente.com. English text only, so the default font covers every country.
export default async function Image({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const c = countryBySlug(slug);
  const title = c ? (c.lang.startsWith("en") ? c.heroTitle : c.heroTitleEn) : "Hospitality marketing";
  const logo = await readFile(path.join(process.cwd(), "public", "logo2.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1B2231", color: "white", padding: 72 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={220} height={97} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, lineHeight: 1.1, maxWidth: 1000, fontWeight: 600 }}>{title}</div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#FF824F" }}>{c ? c.regions.slice(0, 4).join("  ·  ") : ""}</div>
        </div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.75)" }}>Fielmente Hospitality Marketing Agency</div>
      </div>
    ),
    size,
  );
}