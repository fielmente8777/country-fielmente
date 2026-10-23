import { ArrowUpRight } from "./Icons";

export type CountryCard = { key: string; name: string; eyebrow: string; href: string; lang: string };

// Card grid linking to country pages (region hubs and the world index).
export default function CountryGrid({ items }: { items: CountryCard[] }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((c) => (
        <li key={c.key}>
          <a
            href={c.href}
            hrefLang={c.lang}
            className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-main-border bg-white p-6 transition-shadow hover:shadow-[0_7px_29px_#64646f33]"
          >
            <span>
              <span className="block text-xl font-semibold text-primary">{c.name}</span>
              <span lang={c.lang} className="mt-1 block text-sm text-secondary">{c.eyebrow}</span>
            </span>
            <span className="w-8 aspect-square shrink-0 flex items-center justify-center rounded-full bg-btn-dark text-white">
              <ArrowUpRight />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}