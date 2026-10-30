import { NextResponse } from "next/server";

// Leads go to the same Eazotel CRM endpoint the fielmente.com forms use, so they
// appear in the existing leads dashboard. Override with ENQUIRY_ENDPOINT if needed.
const ENDPOINT = process.env.ENQUIRY_ENDPOINT || "https://nexon.eazotel.com/eazotel/addcontacts";
const DOMAIN = process.env.ENQUIRY_DOMAIN || "fielmente";

const MAX = 2000;
const clean = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they don't retry.
  if (clean(body.company_website)) return NextResponse.json({ ok: true });

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone).replace(/[^\d\s-]/g, "");
  const dialCode = clean(body.dialCode).replace(/[^\d+]/g, "");
  const country = clean(body.country);
  const property = clean(body.property);
  const message = clean(body.message);
  const sourceUrl = clean(body.sourceUrl) || `https://${req.headers.get("host") || ""}/`;

  if (!name || (!(body.formPurpose === "audit" && !email) && !/^\S+@\S+\.\S+$/.test(email)) || phone.replace(/\D/g, "").length < 6) {
    return NextResponse.json({ error: "Name, a valid email and a phone number are required" }, { status: 422 });
  }

  const description = [
    `Country page: ${country}`,
    property && `Property: ${property}`,
    message && `Message: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Domain: DOMAIN,
        email,
        Name: name,
        Contact: `${dialCode}${phone.replace(/\s|-/g, "")}`,
        Description: description,
        created_from: "webform",
        source_url: sourceUrl,
      }),
    });
    const data = (await res.json().catch(() => ({}))) as { Status?: unknown };
    if (!res.ok || !data.Status) {
      console.error("Lead endpoint rejected enquiry", res.status, data);
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Lead endpoint unreachable", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}