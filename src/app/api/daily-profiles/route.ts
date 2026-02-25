import { NextRequest } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

const DEFAULT_PAGE_SIZE = 10;

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");
  if (!city || !DAILY_PROFILE_CITIES.includes(city as (typeof DAILY_PROFILE_CITIES)[number])) {
    return Response.json({ data: [], total: 0, page: 1, totalPages: 0 }, { status: 200 });
  }

  const page = Math.max(1, parseInt(request.nextUrl.searchParams.get("page") ?? "1", 10) || 1);
  const limit = Math.min(24, Math.max(6, parseInt(request.nextUrl.searchParams.get("limit") ?? String(DEFAULT_PAGE_SIZE), 10) || DEFAULT_PAGE_SIZE));
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const supabase = createServiceRoleClient();

  const [{ count }, { data }] = await Promise.all([
    supabase
      .from("daily_profiles")
      .select("*", { count: "exact", head: true })
      .eq("city_slug", city)
      .eq("is_active", true),
    supabase
      .from("daily_profiles")
      .select("id, slug, name, age, category, city_slug, rate_1shot, rate_2shot, rate_3shot, rate_fullnight")
      .eq("city_slug", city)
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .range(from, to),
  ]);

  const total = count ?? 0;
  const totalPages = Math.ceil(total / limit) || 0;

  return Response.json({
    data: data ?? [],
    total,
    page,
    totalPages,
    limit,
  });
}
