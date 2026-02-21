import { NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json(
      { error: "Missing city query parameter" },
      { status: 400 }
    );
  }

  if (!DAILY_PROFILE_CITIES.includes(city as (typeof DAILY_PROFILE_CITIES)[number])) {
    return NextResponse.json({ error: "Invalid city" }, { status: 400 });
  }

  const supabase = createServiceRoleClient();
  const { data, error } = await supabase
    .from("daily_profiles")
    .select("*")
    .eq("city_slug", city)
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}
