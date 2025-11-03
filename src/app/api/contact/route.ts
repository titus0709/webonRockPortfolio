// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbxleMw5ZbUQE71KQR0P5Xhti_lNq2NIKAzGhBEg5Sv4ben1vZFur5oLQyGrco4qmHSp/exec";
const APPS_SCRIPT_SECRET = process.env.APPS_SCRIPT_SECRET || "Editthius9566";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const forward = { ...body, _secret: APPS_SCRIPT_SECRET };

  try {
    const r = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forward),
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      console.error("Upstream error:", r.status, data);
      return NextResponse.json({ error: "Upstream error", details: data }, { status: 502 });
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Proxy error:", err);
    return NextResponse.json({ error: "Server error", message: String(err) }, { status: 500 });
  }
}
