import { NextRequest, NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

const VALID_TYPES = ["tamil", "mallu", "telugu", "kannada"] as const;
const VALID_CATEGORIES = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"] as const;

function mapRowToProfile(row: Record<string, unknown>) {
  return {
    id: row.id,
    name: row.name,
    age: row.age,
    location: row.location,
    type: row.type,
    category: row.category,
    tagline: row.tagline,
    bio: row.bio,
    image: row.image,
    images: (row.images as string[]) ?? [],
    videos: (row.videos as string[]) ?? undefined,
    instagram: row.instagram ?? undefined,
    availability: row.availability,
    languages: (row.languages as string[]) ?? [],
    services: (row.services as string[]) ?? undefined,
    telegram: row.telegram,
    verified: row.verified,
    responseTime: row.response_time,
    rating: row.rating,
    reviewCount: row.review_count,
    price: {
      hourly: row.price_hourly,
      overnight: row.price_overnight,
      extended: row.price_extended,
    },
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

  try {
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase
      .from("category_profiles")
      .select("*")
      .eq("type", type)
      .eq("category", category)
      .eq("id", decodeURIComponent(id))
      .eq("is_active", true)
      .maybeSingle();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(mapRowToProfile(data));
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
