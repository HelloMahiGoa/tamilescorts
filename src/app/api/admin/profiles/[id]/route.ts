import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES, DAILY_PROFILE_CATEGORIES } from "@/lib/dailyProfiles";

async function requireAuth() {
  const supabaseAuth = await createClient();
  const { data: { user } } = await supabaseAuth.auth.getUser();
  if (!user) throw new Error("Unauthorized");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const supabase = createServiceRoleClient();
    const { data, error } = await supabase.from("daily_profiles").select("*").eq("id", id).single();
    if (error || !data) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(data);
  } catch (err) {
    if ((err as Error).message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const body = await request.json();
    const supabase = createServiceRoleClient();

    const updates: Record<string, unknown> = {};
    if (body.name != null) updates.name = body.name;
    if (body.slug != null) updates.slug = body.slug;
    if (body.age != null) updates.age = Number(body.age);
    if (body.category != null) {
      if (!DAILY_PROFILE_CATEGORIES.includes(body.category)) {
        return NextResponse.json({ error: "Invalid category" }, { status: 400 });
      }
      updates.category = body.category;
    }
    if (body.rate_1shot != null) updates.rate_1shot = body.rate_1shot === "" ? null : Number(body.rate_1shot);
    if (body.rate_2shot != null) updates.rate_2shot = body.rate_2shot === "" ? null : Number(body.rate_2shot);
    if (body.rate_3shot != null) updates.rate_3shot = body.rate_3shot === "" ? null : Number(body.rate_3shot);
    if (body.rate_fullnight != null) updates.rate_fullnight = body.rate_fullnight === "" ? null : Number(body.rate_fullnight);
    if (body.whatsapp != null) updates.whatsapp = body.whatsapp || null;
    if (body.telegram != null) updates.telegram = body.telegram || null;
    if (body.city_slug != null) {
      if (!DAILY_PROFILE_CITIES.includes(body.city_slug)) {
        return NextResponse.json({ error: "Invalid city" }, { status: 400 });
      }
      updates.city_slug = body.city_slug;
    }
    if (body.pdf_url != null) updates.pdf_url = body.pdf_url;
    if (body.meta_title != null) updates.meta_title = body.meta_title || null;
    if (body.meta_description != null) updates.meta_description = body.meta_description || null;

    const { data, error } = await supabase
      .from("daily_profiles")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  } catch (err) {
    if ((err as Error).message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAuth();
    const { id } = await params;
    const supabase = createServiceRoleClient();
    const { error } = await supabase.from("daily_profiles").delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ deleted: true });
  } catch (err) {
    if ((err as Error).message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error" },
      { status: 500 }
    );
  }
}
