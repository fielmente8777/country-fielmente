"use client";

import { useState } from "react";
import { ArrowUpRight } from "./Icons";

const DIAL_CODES = [
  "+34", "+49", "+39", "+33", "+46", "+30", "+41", "+351", "+31", "+43", "+385", "+44", "+353", "+32", "+47", "+45",
  "+354", "+90", "+971", "+966", "+974", "+968", "+20", "+212", "+960", "+94", "+977", "+975", "+66", "+62", "+84",
  "+60", "+65", "+63", "+81", "+230", "+248", "+27", "+254", "+255", "+1", "+52", "+55", "+61", "+64", "+91",
];

type Props = {
  variant: "hero" | "card";
  country: string;
  dialCode: string;
  ctaLabel: string;
  ctaLang?: string;
  whatsappHref: string;
};

type Status = "idle" | "sending" | "error";

const THANK_YOU = "https://fielmente.com/thank-you/";

export default function EnquiryForm({ variant, country, dialCode, ctaLabel, ctaLang, whatsappHref }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [code, setCode] = useState(dialCode);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, dialCode: code, country, sourceUrl: window.location.href }),
      });
      if (!res.ok) throw new Error(String(res.status));
      window.location.href = THANK_YOU;
    } catch {
      setStatus("error");
    }
  }

  const honeypot = (
    <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
  );

  const errorLine = status === "error" && (
    <p role="alert" className={`text-sm ${variant === "hero" ? "text-white" : "text-white/90"} mt-3`}>
      The form didn&apos;t send. Message us on{" "}
      <a href={whatsappHref} className="font-semibold underline">WhatsApp</a> instead.
    </p>
  );

  const privacy = (
    <p className={`text-xs ${variant === "hero" ? "text-white/75 text-center" : "text-white/60"} mt-3`}>
      We use these details only to reply to your enquiry. See our{" "}
      <a href="/privacy" className="underline">privacy notice</a>.
    </p>
  );

  if (variant === "hero") {
    return (
      <form onSubmit={onSubmit} className="max-w-5xl w-full mx-auto">
        <div className="grid xl:grid-cols-[1fr_auto] xl:rounded-full rounded-[20px] overflow-hidden glassy-card p-2">
          <div className="grid xl:grid-cols-3 xl:py-2 py-1">
            <label className="w-full flex gap-2 items-center xl:px-4 px-2 max-xl:py-2.5 xl:border-r max-xl:border-b border-white/40 text-white">
              <span className="sr-only">Full name</span>
              <UserIcon />
              <input name="name" required autoComplete="name" placeholder="Full Name*" className="w-full bg-transparent outline-none placeholder:text-white/85 text-sm" />
            </label>
            <div className="w-full flex gap-2 items-center xl:px-4 px-2 max-xl:py-2.5 xl:border-r max-xl:border-b border-white/40 text-white">
              <PhoneIcon />
              <label className="sr-only" htmlFor="hero-code">Country code</label>
              <select id="hero-code" value={code} onChange={(e) => setCode(e.target.value)} className="bg-transparent outline-none text-sm [&>option]:text-primary">
                {(DIAL_CODES.includes(dialCode) ? DIAL_CODES : [dialCode, ...DIAL_CODES]).map((d) => <option key={d}>{d}</option>)}
              </select>
              <label className="sr-only" htmlFor="hero-phone">Phone number</label>
              <input id="hero-phone" name="phone" type="tel" required autoComplete="tel-national" placeholder="Phone Number*" className="w-full min-w-0 bg-transparent outline-none placeholder:text-white/85 text-sm" />
            </div>
            <label className="w-full flex gap-2 items-center xl:px-4 px-2 max-xl:py-2.5 text-white">
              <span className="sr-only">Email</span>
              <MailIcon />
              <input name="email" type="email" required autoComplete="email" placeholder="Email Id*" className="w-full bg-transparent outline-none placeholder:text-white/85 text-sm" />
            </label>
          </div>
          {honeypot}
          <button
            type="submit"
            disabled={status === "sending"}
            lang={ctaLang}
            className="max-xl:mt-2 flex items-center justify-center gap-2 rounded-full bg-white text-primary font-semibold text-sm px-5 py-3 xl:whitespace-nowrap transition-all duration-300 hover:shadow-2xl active:scale-95 disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : ctaLabel}
            <span className="w-6 aspect-square flex items-center justify-center rounded-full bg-primary text-white shrink-0">
              <ArrowUpRight />
            </span>
          </button>
        </div>
        {errorLine}
        {privacy}
      </form>
    );
  }

  const field = "w-full rounded-lg bg-[#1E1E1E] border border-[#2C2C2C] px-4 py-3.5 text-white placeholder:text-[#9EA3AB] outline-none focus:border-tertiary";
  const label = "block text-white text-sm mb-2";

  return (
    <form onSubmit={onSubmit} className="bg-black rounded-[20px] p-6 md:p-8 text-white">
      <p className="text-2xl font-semibold">Get A FREE Consultation!</p>
      <p className="mt-2 text-white/85">Let&apos;s work on boosting your hotel&apos;s profitability!</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={label}>Your Name*</label>
          <input id="c-name" name="name" required autoComplete="name" placeholder="Your full name" className={field} />
        </div>
        <div>
          <label htmlFor="c-phone" className={label}>Your Phone Number*</label>
          <div className="flex gap-2">
            <label className="sr-only" htmlFor="c-code">Country code</label>
            <select id="c-code" value={code} onChange={(e) => setCode(e.target.value)} className="w-24 shrink-0 rounded-lg bg-[#1E1E1E] border border-[#2C2C2C] px-2 py-3.5 text-white outline-none focus:border-tertiary">
              {(DIAL_CODES.includes(dialCode) ? DIAL_CODES : [dialCode, ...DIAL_CODES]).map((d) => <option key={d}>{d}</option>)}
            </select>
            <input id="c-phone" name="phone" type="tel" required autoComplete="tel-national" placeholder="Your phone number" className={`${field} min-w-0`} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-email" className={label}>Your email*</label>
          <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="Your email ID" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-property" className={label}>Hotel, resort or restaurant name</label>
          <input id="c-property" name="property" autoComplete="organization" placeholder="Property name" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="c-message" className={label}>Message</label>
          <textarea id="c-message" name="message" rows={4} placeholder="Write something...." className={field} />
        </div>
      </div>
      {honeypot}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-tertiary py-3.5 font-semibold text-white transition-all duration-300 hover:brightness-105 active:scale-[0.99] disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
      {errorLine}
      {privacy}
    </form>
  );
}

const UserIcon = () => (
  <svg width={20} height={20} viewBox="0 0 25 25" fill="currentColor" aria-hidden="true" className="shrink-0">
    <path d="M12.1 12.08c-.96 0-1.79-.34-2.47-1.03a3.37 3.37 0 0 1-1.03-2.47c0-.96.34-1.79 1.03-2.47a3.37 3.37 0 0 1 2.47-1.03c.96 0 1.79.34 2.47 1.03.69.68 1.03 1.51 1.03 2.47s-.34 1.79-1.03 2.47c-.68.69-1.51 1.03-2.47 1.03Zm-7 7.02v-.71c0-.49.13-.95.4-1.37.27-.42.62-.75 1.070-.98 1-.49 2-.85 3.01-1.1a13.1 13.1 0 0 1 6.04 0c1.01.25 2.01.61 3.01 1.1.45.23.8.56 1.07.98.27.42.4.88.4 1.37v.71c0 .42-.15.78-.44 1.07-.3.3-.66.44-1.08.44H6.62c-.42 0-.78-.15-1.07-.44a1.47 1.47 0 0 1-.45-1.07Z" />
  </svg>
);
const PhoneIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
    <path d="M19.95 21q-3.12 0-6.17-1.36a18.4 18.4 0 0 1-5.55-3.87 18.4 18.4 0 0 1-3.87-5.55A15 15 0 0 1 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .62.24t.33.56l.65 3.5q.05.4-.03.68a1.06 1.06 0 0 1-.27.47L6.98 10.9q.52.95 1.22 1.84t1.55 1.71q.78.78 1.63 1.44.85.67 1.82 1.22l2.35-2.35q.22-.23.59-.34.36-.11.71-.06l3.45.7q.35.1.57.36.23.27.23.6v4.05q0 .45-.3.75t-.75.3Z" />
  </svg>
);
const MailIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
    <path d="M4 20q-.82 0-1.41-.59A1.93 1.93 0 0 1 2 18V6q0-.82.59-1.41T4 4h16q.82 0 1.41.59T22 6v12q0 .82-.59 1.41T20 20H4Zm8-7.18q.13 0 .27-.04.13-.04.25-.11l7.08-4.42a.86.86 0 0 0 .3-.31.84.84 0 0 0 .1-.41q0-.5-.43-.75-.42-.25-.87.03L12 11 5.3 6.81q-.45-.28-.87-.02-.43.24-.43.73 0 .25.1.44t.3.29l7.08 4.42q.12.07.25.11.14.04.27.04Z" />
  </svg>
);