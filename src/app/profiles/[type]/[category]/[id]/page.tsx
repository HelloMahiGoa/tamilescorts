import { notFound } from "next/navigation";
import ProfileDetailClient from "@/components/ProfileDetailClient";
import { createServiceRoleClient } from "@/lib/supabase/server";
import type { Profile } from "@/lib/profileData";

const VALID_TYPES = ["tamil", "mallu", "telugu", "kannada"] as const;
const VALID_CATEGORIES = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"] as const;

const TYPE_LABELS: Record<string, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

const CATEGORY_LABELS: Record<string, string> = {
  regular: "Regular",
  artists: "Artists",
  celebrity: "Celebrity",
  models: "Models",
  housewife: "Housewife",
  "college-girls": "College Girls",
  actress: "Actress",
};

function mapRowToProfile(row: Record<string, unknown>): Profile {
  return {
    id: String(row.id),
    name: String(row.name),
    age: Number(row.age),
    location: String(row.location),
    type: row.type as Profile["type"],
    category: row.category as Profile["category"],
    tagline: String(row.tagline ?? ""),
    bio: String(row.bio ?? ""),
    image: String(row.image ?? ""),
    images: (row.images as string[]) ?? [],
    videos: (row.videos as string[]) ?? undefined,
    instagram: row.instagram ? String(row.instagram) : undefined,
    availability: String(row.availability ?? "Available"),
    languages: (row.languages as string[]) ?? [],
    services: (row.services as string[]) ?? undefined,
    telegram: String(row.telegram ?? ""),
    verified: Boolean(row.verified),
    responseTime: row.response_time ? String(row.response_time) : undefined,
    rating: row.rating != null ? Number(row.rating) : undefined,
    reviewCount: row.review_count != null ? Number(row.review_count) : undefined,
    price:
      row.price_hourly != null || row.price_overnight != null || row.price_extended != null
        ? {
            hourly: row.price_hourly != null ? Number(row.price_hourly) : undefined,
            overnight: row.price_overnight != null ? Number(row.price_overnight) : undefined,
            extended: row.price_extended != null ? Number(row.price_extended) : undefined,
          }
        : undefined,
  };
}

interface PageProps {
  params: Promise<{ type: string; category: string; id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { type, category, id } = await params;
  if (!VALID_TYPES.includes(type as (typeof VALID_TYPES)[number]) || !VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
    return { title: "Profile Not Found | Tamil Escorts" };
  }
  const supabase = createServiceRoleClient();
  const { data: row } = await supabase
    .from("category_profiles")
    .select("*")
    .eq("type", type)
    .eq("category", category)
    .eq("id", decodeURIComponent(id))
    .eq("is_active", true)
    .maybeSingle();
  if (!row) return { title: "Profile Not Found | Tamil Escorts" };
  const profile = mapRowToProfile(row as Record<string, unknown>);
  return {
    title: `${profile.name} - ${CATEGORY_LABELS[profile.category]} ${TYPE_LABELS[profile.type]} | Tamil Escorts`,
    description: profile.tagline,
  };
}

export default async function ProfileDetailPage({ params }: PageProps) {
  const { type, category, id } = await params;

  if (!VALID_TYPES.includes(type as (typeof VALID_TYPES)[number]) || !VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])) {
    notFound();
  }

  const supabase = createServiceRoleClient();
  const { data: row, error } = await supabase
    .from("category_profiles")
    .select("*")
    .eq("type", type)
    .eq("category", category)
    .eq("id", decodeURIComponent(id))
    .eq("is_active", true)
    .maybeSingle();

  if (error || !row) notFound();

  const profile = mapRowToProfile(row as Record<string, unknown>);

  const { data: relatedRows } = await supabase
    .from("category_profiles")
    .select("*")
    .eq("type", type)
    .eq("category", category)
    .eq("is_active", true)
    .neq("id", decodeURIComponent(id))
    .order("id")
    .limit(4);

  const relatedProfiles = (relatedRows ?? []).map((r) => mapRowToProfile(r as Record<string, unknown>));

  return <ProfileDetailClient profile={profile} relatedProfiles={relatedProfiles} />;
}
