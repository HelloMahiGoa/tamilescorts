import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 3600;

/**
 * Proxies PDF requests to avoid CORS when loading from Supabase Storage in the browser.
 * Edge runtime + streaming for fast cold starts and quicker time-to-first-byte on Vercel.
 */
export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  // Only allow Supabase storage and relative URLs
  try {
    const parsed = new URL(url, "http://localhost");
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }
    if (!parsed.hostname.includes("supabase")) {
      return NextResponse.json({ error: "Only Supabase storage URLs allowed" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "TamilEscorts/1.0" },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream returned ${res.status}` },
        { status: res.status }
      );
    }

    const contentType = res.headers.get("content-type") || "application/pdf";

    return new NextResponse(res.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("[pdf-proxy] fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch PDF" },
      { status: 502 }
    );
  }
}
