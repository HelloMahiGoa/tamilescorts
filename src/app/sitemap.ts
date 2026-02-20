import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";
import { CATEGORY_SLUGS, getCategoryPagePath } from "@/lib/categories";
import { getTypePagePath, type EscortType } from "@/lib/profileData";

const ESCORT_TYPES: EscortType[] = ["tamil", "mallu", "telugu", "kannada"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/join-us`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/categories`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const citySlugs = ["chennai-escorts", "bangalore-escorts", "hyderabad-escorts", "kochi-escorts", "coimbatore-escorts", "madurai-escorts"];
  const cityUrls: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const categoryUrls: MetadataRoute.Sitemap = CATEGORY_SLUGS.map((slug) => ({
    url: `${base}${getCategoryPagePath(slug)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const typeUrls: MetadataRoute.Sitemap = ESCORT_TYPES.map((type) => ({
    url: `${base}${getTypePagePath(type)}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const blogSlugs = getAllSlugs();
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaSlugs = [
    "nungambakkam-escorts", "t-nagar-escorts", "omr-escorts", "guindy-escorts",
    "adyar-escorts", "velachery-escorts", "egmore-escorts", "anna-nagar-escorts",
    "porur-escorts", "chrompet-escorts", "tambaram-escorts", "ecr-escorts",
  ];
  const areaUrls: MetadataRoute.Sitemap = areaSlugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...cityUrls, ...categoryUrls, ...typeUrls, ...blogUrls, ...areaUrls];
}
