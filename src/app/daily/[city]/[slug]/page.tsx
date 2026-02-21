import { notFound } from "next/navigation";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { CATEGORY_LABELS, CATEGORY_STYLES, DAILY_PROFILE_CITIES, type DailyProfile } from "@/lib/dailyProfiles";
import { ProfilePageContent } from "@/components/ProfilePageContent";

interface PageProps {
  params: Promise<{ city: string; slug: string }>;
}

function getCityName(slug: string): string {
  return slug
    .replace("-escorts", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export async function generateMetadata({ params }: PageProps) {
  const { city, slug } = await params;
  const supabase = createServiceRoleClient();
  const { data } = await supabase
    .from("daily_profiles")
    .select("name, meta_title, meta_description")
    .eq("city_slug", city)
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (!data) return { title: "Profile" };
  return {
    title: data.meta_title || `${data.name} | Daily Available`,
    description: data.meta_description || `${data.name} - Available today. Contact us to book.`,
  };
}

export default async function DailyProfilePage({ params }: PageProps) {
  const { city, slug } = await params;

  if (!DAILY_PROFILE_CITIES.includes(city as (typeof DAILY_PROFILE_CITIES)[number])) {
    notFound();
  }

  const supabase = createServiceRoleClient();

  const [profileRes, relatedRes] = await Promise.all([
    supabase
      .from("daily_profiles")
      .select("name, slug, age, category, city_slug, rate_1shot, rate_2shot, rate_3shot, rate_fullnight, telegram, pdf_url")
      .eq("city_slug", city)
      .eq("slug", slug)
      .eq("is_active", true)
      .single(),
    supabase
      .from("daily_profiles")
      .select("id, slug, name, age, category, city_slug, rate_1shot, rate_2shot, rate_3shot, rate_fullnight")
      .eq("city_slug", city)
      .neq("slug", slug)
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .limit(4),
  ]);

  const { data: profile, error } = profileRes;
  const relatedProfiles = (relatedRes.data ?? []) as DailyProfile[];

  if (error || !profile) notFound();

  const p = profile as {
    name: string;
    slug: string;
    age: number;
    category: string;
    city_slug: string;
    rate_1shot: number | null;
    rate_2shot: number | null;
    rate_3shot: number | null;
    rate_fullnight: number | null;
    telegram: string | null;
    pdf_url?: string | null;
  };

  const categoryLabel = CATEGORY_LABELS[p.category as keyof typeof CATEGORY_LABELS] ?? p.category;
  const style = CATEGORY_STYLES[p.category as keyof typeof CATEGORY_STYLES] ?? CATEGORY_STYLES["south-indian"];
  const cityName = getCityName(city);

  const rates = [
    { label: "1 shot", amount: p.rate_1shot },
    { label: "2 shot", amount: p.rate_2shot },
    { label: "3 shot", amount: p.rate_3shot },
    { label: "Full night", amount: p.rate_fullnight },
  ];

  return (
    <ProfilePageContent
      profile={p}
      categoryLabel={categoryLabel}
      categoryStyle={style}
      cityName={cityName}
      rates={rates}
      relatedProfiles={relatedProfiles}
    />
  );
}
