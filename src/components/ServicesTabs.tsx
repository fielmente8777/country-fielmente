"use client";

import Image from "next/image";
import { useState } from "react";
import type { Service } from "@/data/site";
import { ArrowUpRight } from "./Icons";

// Same interaction as "Our Services" on fielmente.com: a list on the left, the selected service on the right.
export default function ServicesTabs({ services }: { services: Service[] }) {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1" role="tablist" aria-label="Services">
        {services.map((item, i) => (
          <li key={item.title} className="shrink-0">
            <button
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="service-panel"
              onClick={() => setActive(i)}
              className={`text-left text-sm font-semibold rounded-lg px-3 py-2 transition-colors duration-200 ${
                i === active ? "bg-[#E7F4FF] text-color4" : "text-primary hover:bg-[#F5F6F8]"
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>

      <div id="service-panel" role="tabpanel" className="space-y-4">
        <div className="relative w-full aspect-[780/488] rounded-[20px] overflow-hidden border border-main-border shadow-[0_0_28px_#00000014] bg-[#F9FAFB]">
          <Image src={s.src} alt={s.title} fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />
        </div>
        <h3 className="text-2xl font-medium text-primary">{s.title}</h3>
        <p className="text-secondary leading-relaxed">{s.description}</p>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-btn-dark text-white font-medium px-6 py-3 transition-all duration-300 hover:shadow-2xl active:scale-95"
        >
          {s.cta}
          <span className="w-6 aspect-square flex items-center justify-center rounded-full bg-white text-primary">
            <ArrowUpRight />
          </span>
        </a>
      </div>
    </div>
  );
}