# Fielmente country pages

One Next.js 16 + Tailwind 4 project that serves a hotel-marketing landing page per country (49 markets) and a hub per region, each on its own subdomain:

- **Europe:** spain, germany, italy, france, sweden, greece, switzerland, portugal, netherlands, austria, croatia, uk, ireland, belgium, norway, denmark, iceland, turkiye
- **Middle East & North Africa:** uae, saudi-arabia, qatar, oman, egypt, morocco
- **Asia:** maldives, sri-lanka, nepal, bhutan, thailand, bali, vietnam, malaysia, singapore, philippines, japan
- **Africa & Indian Ocean:** mauritius, seychelles, south-africa, kenya, tanzania
- **Americas:** canada, mexico, jamaica, bahamas, barbados, dominican-republic, brazil (plus a link to usa.fielmente.com)
- **Oceania:** australia, new-zealand

Each is served at `<slug>.fielmente.com`. Region hubs: `europe`, `middle-east`, `asia`, `africa`, `americas`, `oceania` `.fielmente.com`. Also `/privacy`, `/sitemap.xml`, `/robots.txt`.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev                  # http://localhost:3000/spain, /germany, …
```

Every page also works by path (`/spain`), so Vercel preview URLs need no DNS.

## Add or edit a country

Country copy lives in `src/data/europe.ts` (original 16) and `src/data/world.ts` (everything else, each with a `region`). Regions are in `src/data/regions.ts`. Add one object and the page, metadata, hreflang, sitemap, region hub, footer links and OG image are generated automatically. For a new live subdomain, also add the domain in Vercel and a CNAME in Route 53 (zone for fielmente.com) pointing to `105f54a1a7e9dab9.vercel-dns-016.com`. Shared content (services, clients, process, contact details) is in `src/data/site.ts`.

## Hosting, domains and deploys

- **GitHub:** `fielmente8777/country-fielmente`, branch `pre-prod`.
- **Vercel:** team `eazotel`, project `fielmente-europe`. Every push to `pre-prod` builds a preview at `fielmente-europe-git-pre-prod-eazotel.vercel.app`, where each country also works by path (`/spain`, `/maldives`, …).
- **Production:** the live `*.fielmente.com` subdomains run the deployment made on 17 Oct 2026, before this repo existed, so a push here does **not** change the live sites by itself. To publish, either promote the preview deployment to production in Vercel (Deployments → ⋯ → Promote to Production), or set **Settings → Git → Production Branch** to `pre-prod` so every push goes live (the same way fielmente.com works from `fielmente8777/fielmente-july`).
- **Domains:** each subdomain (`spain`, `maldives`, `asia`, …) is added to the Vercel project and has a CNAME in the AWS Route 53 hosted zone for fielmente.com pointing to `105f54a1a7e9dab9.vercel-dns-016.com`. To add a new market, add the data entry (above), add `<slug>.fielmente.com` in Vercel → Settings → Domains, then add the CNAME in Route 53.
- **Environment variables:** set in Vercel (Production and Preview) from `.env.example`. Nothing secret is needed.
- **Google Search Console:** the `fielmente.com` domain property covers every subdomain. The sitemap is `https://europe.fielmente.com/sitemap.xml`, with 55 URLs: one per country page plus the six region hubs.

`src/proxy.ts` maps `spain.fielmente.com/` to the `/spain` page and `asia.fielmente.com/` to `/regions/asia`.

## Branding

The design is taken from the fielmente.com codebase (`fielmente8777/fielmente-july`): Plus Jakarta Sans, the brand colours from its `globals.css` (#1B2231 navy, #FF824F orange, #0D54EB blue), the header, notched hero banner, glass lead form, section headings with the blue square, dark pill buttons, services tabs, How It Works timeline, CTA band, FAQ, contact block and footer. Logos, banner, service images and client logos in `public/` are copied from that repo. Greek text falls back to Manrope because Plus Jakarta Sans has no Greek glyphs.

## Enquiry forms

Both forms (hero and contact) POST to `/api/enquiry`, which forwards the lead server-side to the same Eazotel CRM endpoint the fielmente.com forms use (`nexon.eazotel.com/eazotel/addcontacts`, Domain `fielmente`), so leads appear in the existing leads dashboard with the country page in the description. On success the visitor goes to fielmente.com/thank-you/, like on the main site. If delivery fails, the form tells the visitor to use WhatsApp instead.

## Before go-live checklist

- [ ] Native-speaker review of local-language headline, CTA, title and description for each non-English country.
- [ ] Confirm Villa Antilla and Toast Maker are happy to be named (`internationalClients` in `src/data/site.ts`). Client logos are independent properties only; chain logos were left out.
- [ ] Set `NEXT_PUBLIC_CONTACT_EMAIL` to a shared inbox if you don't want a personal address public.
- [ ] Send one test enquiry and confirm it lands in the Eazotel leads dashboard.
- [ ] Confirm the promises on the page: quotes in local currency, DPA available on request.
- [ ] The stats (120+ hotels, 5+ years, 95%, 30-40%) are the same figures as the fielmente.com About block; keep them in sync if those change.
- [ ] The FAQ card uses `public/home/img.png` (the consultant photo from fielmente.com); swap it if needed.
- [ ] Legal review of `/privacy`.
- [ ] If you add analytics or ad pixels, add a cookie-consent banner first (EU/UK requirement).
- [ ] Belgium uses Dutch (nl-BE) for its hero; add a French variant later if Wallonia/Brussels is a priority.
- [ ] Native-speaker review of the new local-language heroes: Thai, Indonesian (Bali), Vietnamese, Japanese, French (Morocco), Spanish (Mexico, Dominican Republic), Portuguese (Brazil), Icelandic, Turkish.
- [ ] The Australia page mentions a café client in Sydney (Toast Maker); confirm they're happy with that.
- [ ] Growth claims in intros (Bhutan, Brazil, Iceland, Egypt, South Africa, Seychelles grew in 2025) are qualitative; re-check before using them in ads.
