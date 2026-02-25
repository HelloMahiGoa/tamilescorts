import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";

const VALID_TYPES = ["tamil", "mallu", "telugu", "kannada"] as const;
const VALID_CATEGORIES = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"] as const;

async function requireAuth() {
  const supabaseAuth = await createClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  if (!user) throw new Error("Unauthorized");
}

export async function GET(request: Request) {
  try {
    await requireAuth();
    const { searchParams } = new URL(request.url);
    const typeFilter = searchParams.get("type");
    const categoryFilter = searchParams.get("category");

    const supabase = createServiceRoleClient();
    let query = supabase
      .from("category_profiles")
      .select("*")
      .order("type")
      .order("category")
      .order("id");

    if (typeFilter && VALID_TYPES.includes(typeFilter as (typeof VALID_TYPES)[number])) {
      query = query.eq("type", typeFilter);
    }
    if (categoryFilter && VALID_CATEGORIES.includes(categoryFilter as (typeof VALID_CATEGORIES)[number])) {
      query = query.eq("category", categoryFilter);
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data ?? []);
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

interface CategoryProfileInput {
  id: string;
  name: string;
  age: number;
  location: string;
  type: string;
  category: string;
  tagline?: string;
  bio?: string;
  image?: string;
  images?: string[] | null;
  videos?: string[] | null;
  instagram?: string | null;
  availability?: string;
  languages?: string[] | null;
  services?: string[] | null;
  telegram?: string;
  verified?: boolean;
  response_time?: string | null;
  rating?: number | null;
  review_count?: number | null;
  price_hourly?: number | null;
  price_overnight?: number | null;
  price_extended?: number | null;
  is_active?: boolean;
}

export async function POST(request: Request) {
  try {
    await requireAuth();
    const body: CategoryProfileInput = await request.json();

    if (!body.name || body.age == null || !body.location || !body.type || !body.category || !body.id) {
      return NextResponse.json(
        { error: "Missing required fields: id, name, age, location, type, category" },
        { status: 400 }
      );
    }

    if (!VALID_TYPES.includes(body.type as (typeof VALID_TYPES)[number])) {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }
    if (!VALID_CATEGORIES.includes(body.category as (typeof VALID_CATEGORIES)[number])) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    const slug = body.id.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    if (!slug) {
      return NextResponse.json({ error: "Invalid id" }, { status: 400 });
    }

    const row = {
      id: slug,
      name: body.name,
      age: Number(body.age),
      location: body.location,
      type: body.type,
      category: body.category,
      tagline: body.tagline ?? "",
      bio: body.bio ?? "",
      image: body.image ?? "",
      images: body.images ?? [],
      videos: body.videos ?? null,
      instagram: body.instagram ?? null,
      availability: body.availability ?? "Available",
      languages: body.languages ?? [],
      services: body.services ?? null,
      telegram: body.telegram ?? "",
      verified: body.verified ?? false,
      response_time: body.response_time ?? null,
      rating: body.rating ?? null,
      review_count: body.review_count ?? null,
      price_hourly: body.price_hourly ?? null,
      price_overnight: body.price_overnight ?? null,
      price_extended: body.price_extended ?? null,
      is_active: body.is_active ?? true,
    };

    const supabase = createServiceRoleClient();
    const { data, error } = await supabase.from("category_profiles").insert(row).select().single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
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
