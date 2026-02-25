import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

const VALID_TYPES = ["tamil", "mallu", "telugu", "kannada"] as const;
const VALID_CATEGORIES = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"] as const;

async function requireAuth() {
  const supabaseAuth = await createClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  if (!user) throw new Error("Unauthorized");
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const category = searchParams.get("category");

    if (!type || !category) {
      return NextResponse.json(
        { error: "Missing type or category query parameter" },
        { status: 400 }
      );
    }

    if (!VALID_TYPES.includes(type as (typeof VALID_TYPES)[number]) ||
        !VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
      return NextResponse.json({ error: "Invalid type or category" }, { status: 400 });
    }

    const body = await request.json();
    const updates: Record<string, unknown> = {};

    if (body.name != null) updates.name = body.name;
    if (body.age != null) updates.age = Number(body.age);
    if (body.location != null) updates.location = body.location;
    if (body.tagline != null) updates.tagline = body.tagline;
    if (body.bio != null) updates.bio = body.bio;
    if (body.image != null) updates.image = body.image;
    if (body.images != null) updates.images = body.images;
    if (body.videos != null) updates.videos = body.videos;
    if (body.instagram != null) updates.instagram = body.instagram || null;
    if (body.availability != null) updates.availability = body.availability;
    if (body.languages != null) updates.languages = body.languages;
    if (body.services != null) updates.services = body.services;
    if (body.telegram != null) updates.telegram = body.telegram;
    if (body.verified != null) updates.verified = body.verified;
    if (body.response_time != null) updates.response_time = body.response_time;
    if (body.rating != null) updates.rating = body.rating;
    if (body.review_count != null) updates.review_count = body.review_count;
    if (body.price_hourly != null) updates.price_hourly = body.price_hourly;
    if (body.price_overnight != null) updates.price_overnight = body.price_overnight;
    if (body.price_extended != null) updates.price_extended = body.price_extended;
    if (body.is_active != null) updates.is_active = body.is_active;

    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("category_profiles")
      .update(updates)
      .eq("type", type)
      .eq("category", category)
      .eq("id", decodeURIComponent(id))
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (err) {
    if ((err as Error).message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const category = searchParams.get("category");

    if (!type || !category) {
      return NextResponse.json(
        { error: "Missing type or category query parameter" },
        { status: 400 }
      );
    }

    if (!VALID_TYPES.includes(type as (typeof VALID_TYPES)[number]) ||
        !VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
      return NextResponse.json({ error: "Invalid type or category" }, { status: 400 });
    }

    const supabase = createServiceRoleClient();
    const { error } = await supabase
      .from("category_profiles")
      .delete()
      .eq("type", type)
      .eq("category", category)
      .eq("id", decodeURIComponent(id));

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (err) {
    if ((err as Error).message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
