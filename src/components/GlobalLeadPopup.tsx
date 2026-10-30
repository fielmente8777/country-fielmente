"use client";
import AuditCapture from "./AuditCapture";
type Profile = { country: string; dialCode: string; whatsappHref: string };
export default function GlobalLeadPopup({ profile, regions }: { profile?: Profile; regions?: Record<string, Profile> }) {
  return <AuditCapture profile={profile} regions={regions} audience="Hotel Marketing" />;
}
