const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: unknown; idea?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const idea = typeof body.idea === "string" ? body.idea.trim().slice(0, 500) : "";

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json(
      { error: "The waitlist isn't open yet. Please check back soon." },
      { status: 503 },
    );
  }

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ email, business_idea: idea || null }),
  });

  // 409 = this email is already on the list. Treat as success.
  if (res.ok || res.status === 409) {
    return Response.json({ ok: true });
  }

  console.error("Waitlist insert failed", res.status);
  return Response.json({ error: "Something went wrong. Please try again." }, { status: 502 });
}
