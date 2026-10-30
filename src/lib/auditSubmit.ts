import { auditDescription, type AuditSubmission } from "./auditOffer";
export async function submitAudit(data: AuditSubmission): Promise<{ ok: boolean; message?: string }> {
  const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone, dialCode: data.countryCode, country: data.country || window.location.hostname, property: data.property, message: auditDescription(data), formPurpose: "audit", sourceUrl: window.location.href, company_website: new FormData(data.form).get("company_website") }), signal: AbortSignal.timeout(20000) });
  const result = await response.json().catch(() => ({}));
  return { ok: response.ok && result.ok === true, message: result.error };
}
