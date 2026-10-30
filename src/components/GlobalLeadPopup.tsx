"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import LeadDialog from "./LeadDialog";
import useLeadPrompt from "@/hooks/useLeadPrompt";

const EnquiryForm = dynamic(() => import("./EnquiryForm"));
type Profile = { country: string; dialCode: string; whatsappHref: string };
const fallback: Profile = { country: "International", dialCode: "+91", whatsappHref: "https://wa.me/919501868775" };

export default function GlobalLeadPopup({ profile, regions }: { profile?: Profile; regions?: Record<string, Profile> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(profile || fallback);
  const open = useCallback(() => {
    const host = window.location.hostname.split(".")[0];
    const route = window.location.pathname.split("/").filter(Boolean).pop() || "europe";
    setSelected(profile || regions?.[host] || regions?.[route] || fallback);
    setIsOpen(true);
  }, [profile, regions]);
  const close = useCallback(() => setIsOpen(false), []);
  useLeadPrompt(open);
  return (
    <LeadDialog open={isOpen} onClose={close} maxWidth={560}>
      <EnquiryForm variant="popup" country={selected.country} dialCode={selected.dialCode} whatsappHref={selected.whatsappHref} ctaLabel="Get a free consultation" />
    </LeadDialog>
  );
}
