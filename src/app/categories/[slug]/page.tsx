import { redirect, notFound } from "next/navigation";
import { getCategoryBySlug, getCategoryPagePath, CATEGORY_SLUGS } from "@/lib/categories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORY_SLUGS.map((slug) => ({ slug }));
}

/** Redirect old /categories/regular to /regular-escorts etc. */
export default async function CategorySlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  redirect(getCategoryPagePath(category.slug));
}
