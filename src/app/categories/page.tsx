import Link from "next/link";
import { CATEGORIES, getCategoryPagePath } from "@/lib/categories";

export const metadata = {
  title: "Service Categories | Tamil Escorts",
  description:
    "Explore our service categories: Regular, Housewife, College Girls, Models, Artists, Celebrity, and Actress escorts.",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative py-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Categories</span>
          </nav>
          <div className="text-center mb-12">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-2">
              Service Categories
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Understanding Our Service Categories
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Each category offers unique experiences. Choose one to learn more and browse profiles.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, idx) => {
              const isLast = idx === CATEGORIES.length - 1;
              return (
                <Link
                  key={cat.slug}
                  href={getCategoryPagePath(cat.slug)}
                  className={`group relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[var(--accent-gold)]/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_var(--accent-gold)/20] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] ${isLast ? "sm:col-span-2 lg:col-span-3" : ""}`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-gold)]/10 rounded-bl-full transition-transform group-hover:scale-110" />
                  <div className={`relative p-6 sm:p-7 ${isLast ? "flex flex-col lg:flex-row lg:items-center lg:gap-8" : ""}`}>
                    <div className={`flex items-start gap-4 ${isLast ? "lg:mb-0 lg:flex-shrink-0" : "mb-4"}`}>
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--accent-gold)]/20 flex items-center justify-center text-2xl shadow-inner group-hover:bg-[var(--accent-gold)]/30 group-hover:scale-105 transition-all duration-300">
                        {cat.icon}
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h2 className="text-xl font-bold text-white leading-tight">{cat.title}</h2>
                      </div>
                    </div>
                    <p className={`text-[15px] text-white/80 leading-relaxed ${isLast ? "lg:flex-1 lg:mb-0" : "mb-5"}`}>
                      {cat.description}
                    </p>
                    <div className={`flex items-start gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 group-hover:border-[var(--accent-gold)]/30 transition-colors ${isLast ? "lg:flex-shrink-0" : ""}`}>
                      <span className="flex-shrink-0 text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">Best for</span>
                      <span className="text-sm text-white/90 leading-snug">{cat.bestFor}</span>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--accent-gold)] group-hover:underline lg:mt-0 lg:ml-auto">
                      View profiles →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
