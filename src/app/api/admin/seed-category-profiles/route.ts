import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { allProfiles } from "@/lib/seedProfileData";

export async function POST() {
  try {
    const supabaseAuth = await createClient();
    const {
      data: { user },
    } = await supabaseAuth.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createServiceRoleClient();
    const rows = allProfiles.map((p) => ({
      id: p.id,
      name: p.name,
      age: p.age,
      location: p.location,
      type: p.type,
      category: p.category,
      tagline: p.tagline ?? "",
      bio: p.bio ?? "",
      image: p.image ?? "",
      images: p.images ?? [],
      videos: p.videos ?? null,
      instagram: p.instagram ?? null,
      availability: p.availability ?? "Available",
      languages: p.languages ?? [],
      services: p.services ?? null,
      telegram: p.telegram ?? "",
      verified: p.verified ?? false,
      response_time: p.responseTime ?? null,
      rating: p.rating ?? null,
      review_count: p.reviewCount ?? null,
      price_hourly: p.price?.hourly ?? null,
      price_overnight: p.price?.overnight ?? null,
      price_extended: p.price?.extended ?? null,
      is_active: true,
    }));

    const { data, error } = await supabase.from("category_profiles").upsert(rows, {
      onConflict: "type,category,id",
      ignoreDuplicates: false,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, count: rows.length });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
