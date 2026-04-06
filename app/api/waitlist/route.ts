// POST /api/waitlist
// Accepts { email: string } and forwards it to your email provider.
//
// ── HOW TO WIRE UP YOUR PROVIDER ─────────────────────────────────────────────
//
// Implement `submitToEmailProvider` below (5–10 lines).
// The function receives a validated email string and should return void on
// success or throw an Error on failure.
//
// Common options:
//
//   Resend (recommended — also handles transactional email):
//     import { Resend } from 'resend';
//     const resend = new Resend(process.env.RESEND_API_KEY);
//     await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID! });
//
//   Beehiiv:
//     await fetch(`https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions`, {
//       method: 'POST',
//       headers: { Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`, 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, reactivate_existing: false, send_welcome_email: true }),
//     });
//
//   Mailchimp:
//     Use `@mailchimp/mailchimp_marketing` — add to list with status: 'subscribed'.
//
//   Webhook (Zapier / Make / n8n):
//     await fetch(process.env.WAITLIST_WEBHOOK_URL!, { method: 'POST', body: JSON.stringify({ email }) });
//
//   Neon Postgres (install via `vercel integration add neon` for auto env provisioning):
//     import { neon } from '@neondatabase/serverless';
//     — Use lazy init (see below) — do NOT call neon() at module level or build crashes:
//     function getSql() { return neon(process.env.DATABASE_URL!); }
//     await getSql()`INSERT INTO waitlist (email) VALUES (${email}) ON CONFLICT DO NOTHING`;
//
//   Upstash Redis (install via `vercel integration add upstash`):
//     import { Redis } from '@upstash/redis';
//     const redis = Redis.fromEnv();
//     await redis.sadd('waitlist', email);
//
// Add env vars to `.env.local`, then sync with `vercel env pull .env.local --yes`.
// ─────────────────────────────────────────────────────────────────────────────

import { after } from "next/server";

async function submitToEmailProvider(email: string): Promise<void> {
  // TODO: implement your provider integration here (5–10 lines)
  // Remove the log statement below once wired up.
  console.log("[waitlist] new subscriber:", email);
}

// ─────────────────────────────────────────────────────────────────────────────

// Lightweight format check — full validation happens at the provider.
function isValidEmailShape(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request): Promise<Response> {
  let email: string;

  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email || !isValidEmailShape(email)) {
    return Response.json(
      { error: "A valid email address is required." },
      { status: 422 }
    );
  }

  try {
    await submitToEmailProvider(email);
  } catch (err) {
    console.error("[waitlist] provider error:", err);
    return Response.json(
      { error: "Failed to join the list. Please try again shortly." },
      { status: 502 }
    );
  }

  // Log analytics after sending the response — zero added latency for the user.
  // Replace with your analytics provider (PostHog, Segment, etc.) when ready.
  after(async () => {
    console.log("[waitlist] analytics: signed_up", { email });
  });

  return Response.json({ success: true }, { status: 200 });
}
