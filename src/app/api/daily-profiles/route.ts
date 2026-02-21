import { NextRequest } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

export async function GET(request: NextRequest) {
  const city = request.nextUrl.searchParams.get("city");
  if (!city || !DAILY_PROFILE_CITIES.includes(city as (typeof DAILY_PROFILE_CITIES)[number])) {
    return Response.json([], { status: 200 });
  }
  const supabase = createServiceRoleClient();
  const { data } = await supabase
    .from("daily_profiles")
    .select("id, slug, name, age, category, city_slug, rate_1shot, rate_2shot, rate_3shot, rate_fullnight")
    .eq("city_slug", city)
    .eq("is_active", true)
    .order("created_at", { ascending: false });
  return Response.json(data ?? []);
}
