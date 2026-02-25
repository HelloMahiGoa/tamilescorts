import Link from "next/link";
import { notFound } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import Pagination from "@/components/Pagination";
import ProfileImagePrivacyNotice from "@/components/ProfileImagePrivacyNotice";
import { createServiceRoleClient } from "@/lib/supabase/server";
import type { Profile } from "@/lib/profileData";

const PROFILES_PER_PAGE = 10;

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
  params: Promise<{ type: string; category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { type, category } = await params;
  const typeLabel = TYPE_LABELS[type] || type;
  const categoryLabel = CATEGORY_LABELS[category] || category;

  return {
    title: `${categoryLabel} ${typeLabel} | Tamil Escorts`,
    description: `Browse ${categoryLabel.toLowerCase()} ${typeLabel.toLowerCase()} profiles.`,
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { type, category } = await params;
  const { page: pageParam } = await searchParams;

  if (
    !VALID_TYPES.includes(type as (typeof VALID_TYPES)[number]) ||
    !VALID_CATEGORIES.includes(category as (typeof VALID_CATEGORIES)[number])
  ) {
    notFound();
  }

  const page = Math.max(1, parseInt(String(pageParam || "1"), 10) || 1);
  const from = (page - 1) * PROFILES_PER_PAGE;
  const to = from + PROFILES_PER_PAGE - 1;

  const supabase = createServiceRoleClient();

  const [{ count }, { data: rows }] = await Promise.all([
    supabase
      .from("category_profiles")
      .select("*", { count: "exact", head: true })
      .eq("type", type)
      .eq("category", category)
      .eq("is_active", true),
    supabase
      .from("category_profiles")
      .select("*")
      .eq("type", type)
      .eq("category", category)
      .eq("is_active", true)
      .order("id")
      .range(from, to),
  ]);

  const total = count ?? 0;
  const profiles = (rows ?? []).map((r) => mapRowToProfile(r as Record<string, unknown>));
  const totalPages = Math.ceil(total / PROFILES_PER_PAGE) || 1;
  const typeLabel = TYPE_LABELS[type];
  const categoryLabel = CATEGORY_LABELS[category];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="border-b border-[var(--border-pattern)] bg-gradient-to-b from-[var(--accent-cream)] to-[var(--background)]">
        <div className="kolam-border h-2 w-full" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="mb-6 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--accent-maroon)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/profiles" className="hover:text-[var(--accent-maroon)]">
              Profiles
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">{typeLabel}</span>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">{categoryLabel}</span>
          </nav>
          <h1 className="font-display text-4xl font-semibold text-[var(--accent-maroon-deep)] sm:text-5xl">
            {categoryLabel} {typeLabel}
          </h1>
          <p className="mt-3 font-display text-lg text-[var(--text-muted)]">
            {profiles.length} {profiles.length === 1 ? "profile" : "profiles"} available
          </p>
        </div>
        <div className="h-2 w-full bg-gradient-to-r from-[var(--accent-maroon)] via-[var(--accent-gold)] to-[var(--accent-maroon)]" />
      </section>

      {/* Profiles Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {profiles.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-display text-xl text-[var(--text-muted)]">
              No profiles found in this category.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block text-[var(--accent-maroon)] hover:underline"
            >
              Return to home
            </Link>
          </div>
        ) : (
          <>
            <ProfileImagePrivacyNotice className="mb-6" />
            <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {profiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
            <Pagination
              baseUrl={`/profiles/${type}/${category}`}
              currentPage={page}
              totalPages={totalPages}
              totalItems={total}
              pageSize={PROFILES_PER_PAGE}
            />
          </>
        )}
      </section>
    </main>
  );
}
