import { LeadPayload } from "@/@types/leadType";

export async function POST(request: Request) {
  const url = process.env.LEAD_WEBHOOK_URL;
  const token = process.env.webhook_3607ce32eb;

  if (!url || !token) {
    console.error("Lead webhook is not configured: set LEAD_WEBHOOK_URL and webhook_3607ce32eb");
    return Response.json({ ok: false, error: "Enquiries are temporarily unavailable." }, { status: 500 });
  }

  let lead: LeadPayload;
  try {
    lead = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!lead?.name?.trim() || (!lead.phone?.trim() && !lead.email?.trim())) {
    return Response.json({ ok: false, error: "Name and a phone number or email are required." }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(lead),
    });

    if (!response.ok) {
      console.error("Lead webhook failed", response.status, await response.text());
      return Response.json({ ok: false, error: "Could not send your enquiry. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Lead webhook unreachable", error);
    return Response.json({ ok: false, error: "Could not send your enquiry. Please try again." }, { status: 502 });
  }
}
