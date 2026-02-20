import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import type { EscortType } from "@/lib/profileData";

const TYPE_DESCRIPTIONS: Record<EscortType, string> = {
  tamil: "Browse Tamil escorts by category. From Chennai to Coimbatore, find someone who speaks your language and gets your culture.",
  mallu: "Kerala's charm—Mallu escorts who are easy to talk to and great company. Choose a category to see available profiles.",
  telugu: "Telugu-speaking companions for Hyderabad and beyond. Pick a category to browse profiles.",
  kannada: "Bangalore and Karnataka—Kannada escorts who know how to make an evening feel relaxed. Browse by category.",
};

interface TypePageContentProps {
  type: EscortType;
  label: string;
}

export default function TypePageContent({ type, label }: TypePageContentProps) {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{label}</span>
          </nav>

          <div className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-bl-full pointer-events-none" />
            <div className="relative p-8 sm:p-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {label}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                {TYPE_DESCRIPTIONS[type]}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">
              Browse by category
            </h2>
            <p className="text-white/70 mb-6">
              Choose a category to see available {label.toLowerCase()} profiles.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/profiles/${type}/${cat.slug}`}
                  className="flex items-center justify-between rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md px-6 py-4 transition-all hover:border-[var(--accent-gold)]/50 hover:bg-[var(--card-bg)]"
                >
                  <span className="font-semibold text-white">
                    {cat.title} — {label}
                  </span>
                  <span className="text-[var(--accent-gold)] text-sm font-medium">View →</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
            <Link
              href="/"
              className="text-sm text-white/70 hover:text-[var(--accent-gold)] transition-colors"
            >
              ← Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
