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

export async function POST(
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
    const { data: existing } = await supabase
      .from("category_profiles")
      .select("is_active")
      .eq("type", type)
      .eq("category", category)
      .eq("id", decodeURIComponent(id))
      .single();

    if (!existing) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    const newActive = !existing.is_active;
    const { data, error } = await supabase
      .from("category_profiles")
      .update({ is_active: newActive })
      .eq("type", type)
      .eq("category", category)
      .eq("id", decodeURIComponent(id))
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ is_active: data.is_active });
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
