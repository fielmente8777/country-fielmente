// Preview deployments only: copies the brand images and step icons from the public
// fielmente.com repo (fielmente8777/fielmente-july, pinned commit) before next build.
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const REPO = "https://raw.githubusercontent.com/fielmente8777/fielmente-july/d2e4d93e93d4113a9eaa3ede2cfd433dc592134d/";
const get = async (p) => {
  const res = await fetch(REPO + p.split("/").map(encodeURIComponent).join("/"));
  if (!res.ok) throw new Error(`${p}: HTTP ${res.status}`);
  return res;
};

const stepIcons = path.join("src", "components", "StepIcons.tsx");
if (!existsSync(stepIcons)) {
  const src = await (await get("src/utils/homeIcons.tsx")).text();
  const pick = (name) => {
    const i = src.indexOf(`export const ${name} = () => (`);
    if (i < 0) throw new Error(`${name} not found`);
    return src.slice(i, src.indexOf("\n);", i) + 3);
  };
  await writeFile(stepIcons, ["ConsultIcon", "StrategiseIcon", "ExecuteIcon"].map(pick).join("\n\n") + "\n");
}

if (existsSync(path.join("public", "Logo.png"))) {
  console.log("Brand assets already in public/, skipping download");
  process.exit(0);
}

const ASSETS = [
  "Banner.webp", "Logo.png", "logo2.png", "map.png", "fielmente_logo.png",
  "home/Frame-3.png", "home/bg.png", "home/bnr-sm.webp", "home/img.png",
  "home/about.webp|home/about.png", "home/add.webp|home/add.png",
  "home/ai-search-optimization.webp|home/ai-search-optimization.png",
  "home/content-creation.webp|home/content-creation.png",
  "home/local-seo.webp|home/local-seo.png",
  "home/ota-management.webp|home/ota-management.png",
  "home/preopening-marketing.webp|home/preopening-marketing.png",
  "home/sales-marketing-automation.webp|home/sales-marketing-automation.png",
  "home/social-media-management.webp|home/social-media-management.png",
  "home/website-development.webp|home/website-development.png",
  "home/website-seo.webp|home/website-seo.png",
  "partners/Booking.Com.png", "partners/agoda-logo.png", "partners/airbnb-logo.png", "partners/aws.png",
  "partners/google-partner.png", "partners/meta-business-partner.png", "partners/zoho-corporation.png",
  "favicon/apple-touch-icon.png", "favicon/favicon-16x16.png", "favicon/favicon-32x32.png", "favicon/favicon.ico",
  ...[
    "ALLURE-NAINITAL-LOGO.png", "Grandview_resort.jpg", "Hotel-Green-Castle.jpg", "MIRAMAR-logo.jpg", "Red-Rock-villa.jpg",
    "Riviera.jpg", "STERNWHEELER.webp|STERNWHEELER.png", "ZionHotel.png", "acacia.png", "arkaya.png", "bunker-house.jpg",
    "chefkenzo.png", "colonels-resort.png", "corbett-the-grand.png", "dunagiri-retreat.png", "eracamp.png", "mango-grove.webp",
    "naad-wellness.png", "rudraksh.png", "saraaya.webp|saraaya.jpg", "wabi-sabi.webp|wabi-sabi.png",
  ].map((e) => {
    const [d, s = d] = e.split("|");
    return `clients/${d}|clientsLogo/${s}`;
  }),
];

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {}

await Promise.all(
  ASSETS.map(async (entry) => {
    const [dest, src = dest] = entry.split("|");
    let buf = Buffer.from(await (await get(`public/${src}`)).arrayBuffer());
    if (dest.endsWith(".webp") && !src.endsWith(".webp") && sharp) {
      buf = await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
    }
    const out = path.join("public", dest);
    await mkdir(path.dirname(out), { recursive: true });
    await writeFile(out, buf);
  }),
);
console.log(`Fetched ${ASSETS.length} brand assets (sharp: ${Boolean(sharp)})`);