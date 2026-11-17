import { LeadPayload } from "@/@types/leadType";

export async function POST(request: Request) {
  const url = "https://api.v1.kyraitsolutions.com/api/webhook/6afb234bb851e4595a251bac/lead";
  const token = "webhook_11f788d3564a201ec0f6c579c131e253f2c14406ffcb1e0336d2e785e576d00a";

  if (!url || !token) {
    console.error("Lead webhook is not configured: set LEAD_WEBHOOK_URL and token in your environment variables.");
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
