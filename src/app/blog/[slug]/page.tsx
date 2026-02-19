import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { getBaseUrl } from "@/lib/site";
import type { Metadata } from "next";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });
}

function isoDate(dateStr: string) {
  return new Date(dateStr).toISOString();
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/blog/${slug}`;
  const title = `${post.title} | Tamil Escorts Blog`;
  const description = post.excerpt;

  return {
    title,
    description,
    keywords: [
      "Tamil escorts",
      "Chennai escorts",
      "escort blog",
      "booking escort",
      "South Indian escorts",
      post.title,
    ],
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url,
      title,
      description,
      siteName: "Tamil Escorts",
      publishedTime: isoDate(post.date),
      modifiedTime: isoDate(post.date),
      authors: [post.author],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const baseUrl = getBaseUrl();
  const articleUrl = `${baseUrl}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate(post.date),
    dateModified: isoDate(post.date),
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tamil Escorts",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <article className="relative py-12 sm:py-16" itemScope itemType="https://schema.org/Article">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-[var(--accent-gold)] transition-colors mb-6"
          >
            <span aria-hidden>←</span>
            Back to Blog
          </Link>
          <nav className="mb-8 text-sm text-white/60">
            <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-[var(--accent-gold)] transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80 line-clamp-1">{post.title}</span>
          </nav>

          <header className="mb-10">
            <time
              className="text-sm text-[var(--accent-gold)]/80 font-medium"
              dateTime={isoDate(post.date)}
              itemProp="datePublished"
            >
              {formatDate(post.date)}
            </time>
            <h1
              className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 leading-tight"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <p className="text-lg text-white/75" itemProp="description">
              {post.excerpt}
            </p>
            <p className="mt-3 text-sm text-white/50">
              By{" "}
              <span itemProp="author" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">{post.author}</span>
              </span>
            </p>
          </header>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-white/85 leading-relaxed">
              {post.body.map((paragraph, idx) => (
                <p key={idx} className="text-base sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-[var(--border-color)]">
            <Link
              href="/blog"
              className="inline-flex items-center text-[var(--accent-gold)] font-medium hover:underline"
            >
              ← All articles
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
