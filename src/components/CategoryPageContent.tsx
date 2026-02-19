import Link from "next/link";
import type { CategoryInfo } from "@/lib/categories";

const TYPE_LABELS: Record<string, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

interface CategoryPageContentProps {
  category: CategoryInfo;
  /** Breadcrumb: show "Categories" link (for /categories/[slug]) or not (for /regular-escorts) */
  showCategoriesInBreadcrumb?: boolean;
  /** Back link text and href */
  backHref?: string;
  backLabel?: string;
}

export default function CategoryPageContent({
  category,
  showCategoriesInBreadcrumb = false,
  backHref = "/categories",
  backLabel = "All categories",
}: CategoryPageContentProps) {
  const types = ["tamil", "mallu", "telugu", "kannada"] as const;
  const slug = category.slug;

  return (
    <main className="min-h-screen bg-black">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">
              Home
            </Link>
            {showCategoriesInBreadcrumb && (
              <>
                <span className="mx-2">/</span>
                <Link href="/categories" className="hover:text-[var(--accent-gold)] transition-colors">
                  Categories
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-white/80">{category.title}</span>
          </nav>

          <div className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-bl-full pointer-events-none" />
            <div className="relative p-8 sm:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--accent-gold)]/20 flex items-center justify-center text-3xl">
                  {category.icon}
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {category.title}
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4 inline-flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">Best for</span>
                <span className="text-sm text-white/90">{category.bestFor}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">
              Browse by region
            </h2>
            <p className="text-white/70 mb-6">
              Choose a profile type to see available {category.title.toLowerCase()} in that category.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {types.map((type) => (
                <Link
                  key={type}
                  href={`/profiles/${type}/${slug}`}
                  className="flex items-center justify-between rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md px-6 py-4 transition-all hover:border-[var(--accent-gold)]/50 hover:bg-[var(--card-bg)]"
                >
                  <span className="font-semibold text-white">
                    {TYPE_LABELS[type]} — {category.title}
                  </span>
                  <span className="text-[var(--accent-gold)] text-sm font-medium">View →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
            <Link
              href={backHref}
              className="text-sm text-white/70 hover:text-[var(--accent-gold)] transition-colors"
            >
              ← {backLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
