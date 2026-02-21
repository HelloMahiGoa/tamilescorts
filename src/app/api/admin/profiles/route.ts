import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES, DAILY_PROFILE_CATEGORIES, slugify } from "@/lib/dailyProfiles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityFilter = searchParams.get("city");
  try {
    const supabaseAuth = await createClient();
    const {
      data: { user },
    } = await supabaseAuth.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createServiceRoleClient();
    let query = supabase.from("daily_profiles").select("*").order("created_at", { ascending: false });
    if (cityFilter && DAILY_PROFILE_CITIES.includes(cityFilter as (typeof DAILY_PROFILE_CITIES)[number])) {
      query = query.eq("city_slug", cityFilter);
    }
    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data ?? []);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}

interface ProfileInput {
  name: string;
  slug?: string;
  age: number;
  category: string;
  rate_1shot?: number | null;
  rate_2shot?: number | null;
  rate_3shot?: number | null;
  rate_fullnight?: number | null;
  whatsapp?: string | null;
  telegram?: string | null;
  city_slug: string;
  image_url?: string | null;
  pdf_url: string;
  meta_title?: string | null;
  meta_description?: string | null;
}

export async function POST(request: Request) {
  try {
    const supabaseAuth = await createClient();
    const {
      data: { user },
    } = await supabaseAuth.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const profiles = Array.isArray(body.profiles) ? body.profiles : [body] as ProfileInput[];

    if (profiles.length === 0) {
      return NextResponse.json({ error: "No profiles to create" }, { status: 400 });
    }

    for (const p of profiles) {
      if (!p.name || !p.age || !p.category || !p.city_slug || !p.pdf_url) {
        return NextResponse.json(
          { error: "Missing required fields: name, age, category, city_slug, pdf_url" },
          { status: 400 }
        );
      }
      if (!DAILY_PROFILE_CITIES.includes(p.city_slug as (typeof DAILY_PROFILE_CITIES)[number])) {
        return NextResponse.json({ error: `Invalid city_slug: ${p.city_slug}` }, { status: 400 });
      }
      if (!DAILY_PROFILE_CATEGORIES.includes(p.category as (typeof DAILY_PROFILE_CATEGORIES)[number])) {
        return NextResponse.json({ error: `Invalid category: ${p.category}` }, { status: 400 });
      }
    }

    const supabase = createServiceRoleClient();
    const baseTime = Date.now().toString(36);
    const rows = profiles.map((p, i) => {
      const baseSlug = p.slug || slugify(p.name);
      const slug = (baseSlug || "profile") + "-" + baseTime + (i > 0 ? "-" + i : "");
      return {
      name: p.name,
      slug,
      age: Number(p.age),
      category: p.category,
      rate_1shot: p.rate_1shot != null ? Number(p.rate_1shot) : null,
      rate_2shot: p.rate_2shot != null ? Number(p.rate_2shot) : null,
      rate_3shot: p.rate_3shot != null ? Number(p.rate_3shot) : null,
      rate_fullnight: p.rate_fullnight != null ? Number(p.rate_fullnight) : null,
      whatsapp: p.whatsapp || null,
      telegram: p.telegram || null,
      city_slug: p.city_slug,
      image_url: p.image_url || null,
      pdf_url: p.pdf_url,
      meta_title: p.meta_title || null,
      meta_description: p.meta_description || null,
      is_active: true,
    };
    });

    const { data, error } = await supabase.from("daily_profiles").insert(rows).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ created: data, count: data?.length ?? 0 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
