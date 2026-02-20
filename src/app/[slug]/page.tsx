import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryByPageSlug, CATEGORY_PAGE_SLUGS } from "@/lib/categories";
import { getTypeByPageSlug, TYPE_PAGE_SLUGS } from "@/lib/profileData";
import CategoryPageContent from "@/components/CategoryPageContent";
import TypePageContent from "@/components/TypePageContent";

const CITY_ESCORTS_SLUGS = [
  "chennai-escorts",
  "bangalore-escorts",
  "hyderabad-escorts",
  "kochi-escorts",
  "coimbatore-escorts",
  "madurai-escorts",
] as const;

const SLUG_TO_TITLE: Record<string, string> = {
  "chennai-escorts": "Chennai",
  "bangalore-escorts": "Bangalore",
  "hyderabad-escorts": "Hyderabad",
  "kochi-escorts": "Kochi",
  "coimbatore-escorts": "Coimbatore",
  "madurai-escorts": "Madurai",
};

/** Chennai area page slugs (e.g. /omr-escorts). */
const AREA_ESCORTS_SLUGS = [
  "nungambakkam-escorts",
  "t-nagar-escorts",
  "omr-escorts",
  "guindy-escorts",
  "adyar-escorts",
  "velachery-escorts",
  "egmore-escorts",
  "anna-nagar-escorts",
  "porur-escorts",
  "chrompet-escorts",
  "tambaram-escorts",
  "ecr-escorts",
] as const;

const AREA_SLUG_TO_TITLE: Record<string, string> = {
  "nungambakkam-escorts": "Nungambakkam",
  "t-nagar-escorts": "T Nagar",
  "omr-escorts": "OMR",
  "guindy-escorts": "Guindy",
  "adyar-escorts": "Adyar",
  "velachery-escorts": "Velachery",
  "egmore-escorts": "Egmore",
  "anna-nagar-escorts": "Anna Nagar",
  "porur-escorts": "Porur",
  "chrompet-escorts": "Chrompet",
  "tambaram-escorts": "Tambaram",
  "ecr-escorts": "ECR",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const cityParams = CITY_ESCORTS_SLUGS.map((slug) => ({ slug }));
  const categoryParams = CATEGORY_PAGE_SLUGS.map((slug) => ({ slug }));
  const typeParams = TYPE_PAGE_SLUGS.map((slug) => ({ slug }));
  const areaParams = AREA_ESCORTS_SLUGS.map((slug) => ({ slug }));
  return [...cityParams, ...categoryParams, ...typeParams, ...areaParams];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryByPageSlug(slug);
  if (category) {
    return {
      title: `${category.title} | Tamil Escorts`,
      description: `${category.description.slice(0, 155)}... Best for: ${category.bestFor}`,
    };
  }
  const typeInfo = getTypeByPageSlug(slug);
  if (typeInfo) {
    return {
      title: `${typeInfo.label} | Tamil Escorts`,
      description: `Browse ${typeInfo.label} by category. Regular, Housewife, College Girls, Models, Artists, Celebrity & Actress.`,
    };
  }
  const areaTitle = AREA_SLUG_TO_TITLE[slug];
  if (areaTitle) {
    return {
      title: `${areaTitle} Escorts | Chennai Escorts`,
      description: `Premium escorts in ${areaTitle}, Chennai. Outcall to your hotel or place. Discreet booking. Nungambakkam, T Nagar, OMR & more.`,
    };
  }
  if (!CITY_ESCORTS_SLUGS.includes(slug as (typeof CITY_ESCORTS_SLUGS)[number])) {
    return { title: "Not Found" };
  }
  const city = SLUG_TO_TITLE[slug];
  return {
    title: `${city} Escorts | South Indian Escorts`,
    description: `Premium escorts in ${city}. Browse profiles and book trusted companionship.`,
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;

  const category = getCategoryByPageSlug(slug);
  if (category) {
    return (
      <CategoryPageContent
        category={category}
        showCategoriesInBreadcrumb={false}
        backHref="/categories"
        backLabel="All categories"
      />
    );
  }

  const typeInfo = getTypeByPageSlug(slug);
  if (typeInfo) {
    return <TypePageContent type={typeInfo.type} label={typeInfo.label} />;
  }

  const areaTitle = AREA_SLUG_TO_TITLE[slug];
  if (areaTitle) {
    return (
      <main className="min-h-screen bg-black">
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/chennai-escorts"
              className="text-sm text-white/60 transition-colors hover:text-[var(--accent-gold)]"
            >
              ← Chennai Escorts
            </Link>
          </div>
          <h1 className="mb-4 text-3xl font-bold text-[var(--accent-gold)] sm:text-4xl">
            {areaTitle} Escorts
          </h1>
          <p className="mb-6 text-lg text-white/70">
            Premium escort service in {areaTitle}, Chennai. Outcall to your hotel or your place. We cover this area and can have someone reach you on time. Same discretion and payment rules—pay when you meet; no advance for regular, housewife and college-girl profiles.
          </p>
          <p className="mb-10 text-white/60">
            <Link href="/chennai-escorts" className="text-[var(--accent-gold)] hover:underline">
              View all Chennai areas
            </Link>
            {" · "}
            Message us with your location and when you need someone—we&apos;ll suggest who&apos;s free.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tamil-escorts"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
            >
              Tamil Escorts
            </Link>
            <Link
              href="/mallu-escorts"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
            >
              Mallu Escorts
            </Link>
            <Link
              href="/telugu-escorts"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
            >
              Telugu Escorts
            </Link>
            <Link
              href="/kannada-escorts"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
            >
              Kannada Escorts
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (!CITY_ESCORTS_SLUGS.includes(slug as (typeof CITY_ESCORTS_SLUGS)[number])) {
    notFound();
  }

  const cityName = SLUG_TO_TITLE[slug];

  return (
    <main className="min-h-screen bg-black">
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-white/60 transition-colors hover:text-[var(--accent-gold)]"
          >
            ← Home
          </Link>
        </div>
        <h1 className="mb-4 text-3xl font-bold text-[var(--accent-gold)] sm:text-4xl">
          {cityName} Escorts
        </h1>
        <p className="mb-10 text-lg text-white/70">
          Premium escorts in {cityName}. Choose from Tamil, Mallu, Telugu & Kannada profiles.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tamil-escorts"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
          >
            Tamil Escorts
          </Link>
          <Link
            href="/mallu-escorts"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
          >
            Mallu Escorts
          </Link>
          <Link
            href="/telugu-escorts"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
          >
            Telugu Escorts
          </Link>
          <Link
            href="/kannada-escorts"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
          >
            Kannada Escorts
          </Link>
        </div>
      </section>
    </main>
  );
}
