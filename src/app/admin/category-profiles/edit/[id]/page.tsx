import { createServiceRoleClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import AdminCategoryProfileEditForm from "./AdminCategoryProfileEditForm";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ type?: string; category?: string }>;
}

const VALID_TYPES = ["tamil", "mallu", "telugu", "kannada"] as const;
const VALID_CATEGORIES = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"] as const;

export default async function AdminCategoryProfileEditPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { type, category } = await searchParams;

  if (!type || !category || !VALID_TYPES.includes(type as (typeof VALID_TYPES)[number]) || !VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
    notFound();
  }

  const supabase = createServiceRoleClient();
  const { data: profile, error } = await supabase
    .from("category_profiles")
    .select("*")
    .eq("type", type)
    .eq("category", category)
    .eq("id", decodeURIComponent(id))
    .single();

  if (error || !profile) notFound();

  return (
    <AdminCategoryProfileEditForm
      profile={profile as Record<string, unknown>}
      type={type}
      category={category}
    />
  );
}
