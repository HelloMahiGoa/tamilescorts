import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata = {
  title: "Blog | Tamil Escorts – Guides & Tips",
  description:
    "Read our guides and articles on booking escorts in South India, discretion, choosing the right companion, and more.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const [featured, ...rest] = sortedPosts;

  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-14 sm:py-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-gold)]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[var(--accent-gold)]/5 rounded-full blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-gold)]/15 text-xl">
              📖
            </span>
            <span className="text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase">
              Blog
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Guides & Articles
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Tips, guides, and insights on booking companionship in South India—discretion, what to expect, and how to choose the right companion.
          </p>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="relative px-4 sm:px-6 lg:px-8 pb-10">
          <div className="mx-auto max-w-5xl">
            <span className="text-xs font-semibold text-[var(--accent-gold)] uppercase tracking-wider">
              Latest
            </span>
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-2 block rounded-2xl border-2 border-[var(--border-color)] bg-[var(--card-bg)]/90 p-6 sm:p-8 lg:p-10 transition-all hover:border-[var(--accent-gold)]/60 hover:shadow-[0_0_40px_var(--accent-gold)/8]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                <div className="flex-1 min-w-0">
                  <time className="text-sm text-white/50 font-medium">
                    {formatDate(featured.date)}
                  </time>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-tight group-hover:text-[var(--accent-gold)] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/75 text-base sm:text-lg leading-relaxed line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[var(--accent-gold)] font-semibold text-sm">
                    Read article
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <div className="mt-6 lg:mt-0 flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--accent-gold)]/20 flex items-center justify-center text-2xl">
                  📄
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="relative py-8 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-white/90 mb-6">More articles</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 p-5 sm:p-6 transition-all hover:border-[var(--accent-gold)]/50 hover:shadow-[0_0_24px_var(--accent-gold)/5]"
              >
                <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-gold)]/15 text-sm font-bold text-[var(--accent-gold)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <time className="text-xs text-white/50 font-medium">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 leading-snug group-hover:text-[var(--accent-gold)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center text-xs font-medium text-[var(--accent-gold)]">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
