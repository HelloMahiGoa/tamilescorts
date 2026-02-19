import Link from "next/link";
import { notFound } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import { getProfilesByTypeAndCategory, type EscortType, type Category } from "@/lib/profileData";

const TYPE_LABELS: Record<EscortType, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

const CATEGORY_LABELS: Record<Category, string> = {
  regular: "Regular",
  artists: "Artists",
  celebrity: "Celebrity",
  models: "Models",
  housewife: "Housewife",
  "college-girls": "College Girls",
  actress: "Actress",
};

interface PageProps {
  params: Promise<{ type: string; category: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { type, category } = await params;
  const typeLabel = TYPE_LABELS[type as EscortType] || type;
  const categoryLabel = CATEGORY_LABELS[category as Category] || category;

  return {
    title: `${categoryLabel} ${typeLabel} | Tamil Escorts`,
    description: `Browse ${categoryLabel.toLowerCase()} ${typeLabel.toLowerCase()} profiles.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { type, category } = await params;

  if (
    !["tamil", "mallu", "telugu", "kannada"].includes(type) ||
    !["regular", "artists", "celebrity", "models", "housewife", "college-girls", "actress"].includes(category)
  ) {
    notFound();
  }

  const profiles = getProfilesByTypeAndCategory(type as EscortType, category as Category);
  const typeLabel = TYPE_LABELS[type as EscortType];
  const categoryLabel = CATEGORY_LABELS[category as Category];

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
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
