import { NextResponse, type NextRequest } from "next/server";
import { countries } from "@/data/countries";
import { regions } from "@/data/regions";

const countrySlugs = new Set(countries.map((c) => c.slug));
const regionSlugs = new Set<string>(regions.map((r) => r.slug));

// spain.fielmente.com/  ->  renders /spain
// asia.fielmente.com/   ->  renders /regions/asia
// Every page also works by path (e.g. your-project.vercel.app/spain, /regions/asia) for previews.
export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();
  const sub = host.split(".")[0];

  if (request.nextUrl.pathname === "/") {
    const target = countrySlugs.has(sub) ? `/${sub}` : regionSlugs.has(sub) ? `/regions/${sub}` : null;
    if (target) {
      const url = request.nextUrl.clone();
      url.pathname = target;
      return NextResponse.rewrite(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};