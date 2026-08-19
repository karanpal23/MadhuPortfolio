import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  type?: string;
  message?: string;
};

function bad(field: string) {
  return NextResponse.json({ error: `Missing or invalid: ${field}` }, { status: 400 });
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();
  const company = data.company?.trim() ?? "";
  const type = data.type?.trim() ?? "custom";

  if (!name || name.length > 120) return bad("name");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) return bad("email");
  if (!message || message.length > 5000) return bad("message");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error("Contact route missing env vars — RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL");
    return NextResponse.json({ error: "Email is not configured on the server yet." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const subject = `New enquiry — ${name}${company ? " · " + company : ""}`;
  const text = [
    `Name:    ${name}`,
    `Company: ${company || "—"}`,
    `Email:   ${email}`,
    `Type:    ${type}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Could not send the message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
