import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";
import { CATEGORY_SLUGS, getCategoryPagePath } from "@/lib/categories";
import { getTypePagePath, type EscortType, type Category } from "@/lib/profileData";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

const ESCORT_TYPES: EscortType[] = ["tamil", "mallu", "telugu", "kannada"];
const CATEGORIES: Category[] = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"];

/** All area/locality page slugs (e.g. /omr-escorts). Excludes cities, types, and category landing pages. */
const AREA_ESCORTS_SLUGS = [
  "adyar-escorts", "aluva-escorts", "ameerpet-escorts", "anna-nagar-escorts", "arapalayam-escorts",
  "banjara-hills-escorts", "begumpet-escorts", "bellandur-escorts", "bibikulam-escorts", "brigade-road-escorts",
  "brookefields-escorts", "chrompet-escorts", "ecr-escorts", "edappally-escorts", "egmore-escorts",
  "electronic-city-escorts", "ernakulam-escorts", "film-nagar-escorts", "fort-kochi-escorts", "gachibowli-escorts",
  "gandhipuram-escorts", "goripalayam-escorts", "guindy-escorts", "hitech-city-escorts", "hsr-layout-escorts",
  "indiranagar-escorts", "jayanagar-escorts", "jp-nagar-escorts", "jubilee-hills-escorts", "k-pudur-escorts",
  "kadavanthra-escorts", "kakkanad-escorts", "kalamassery-escorts", "kondapur-escorts", "koodal-nagar-escorts",
  "koramangala-escorts", "kovaipudur-escorts", "kukatpally-escorts", "kk-nagar-escorts", "madhapur-escorts",
  "madurai-anna-nagar-escorts", "marine-drive-escorts", "marathahalli-escorts", "mattancherry-escorts", "mg-road-escorts",
  "nungambakkam-escorts", "omr-escorts", "palanganatham-escorts", "peelamedu-escorts", "porur-escorts",
  "race-course-escorts", "ramnagar-escorts", "rs-puram-escorts", "saibaba-colony-escorts", "saravanampatti-escorts",
  "secunderabad-escorts", "simakkal-escorts", "somajiguda-escorts", "tallakulam-escorts", "tambaram-escorts",
  "tatabad-escorts", "thallakulam-escorts", "thripunithura-escorts", "t-nagar-escorts", "ukkadam-escorts",
  "ulsoor-escorts", "velachery-escorts", "vilangudi-escorts", "vytilla-escorts", "whitefield-escorts",
  "willingdon-island-escorts",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/join-us`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
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

  const areaUrls: MetadataRoute.Sitemap = AREA_ESCORTS_SLUGS.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // Category listing pages: /profiles/{type}/{category}
  const categoryListingUrls: MetadataRoute.Sitemap = [];
  ESCORT_TYPES.forEach((type) => {
    CATEGORIES.forEach((category) => {
      categoryListingUrls.push({
        url: `${base}/profiles/${type}/${category}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      });
    });
  });

  // Individual profile pages: /profiles/{type}/{category}/{id} (from DB)
  const supabase = createServiceRoleClient();
  const [{ data: profileRows }, { data: dailyRows }] = await Promise.all([
    supabase
      .from("category_profiles")
      .select("type, category, id")
      .eq("is_active", true),
    supabase
      .from("daily_profiles")
      .select("city_slug, slug")
      .eq("is_active", true),
  ]);

  const profileUrls: MetadataRoute.Sitemap = (profileRows ?? []).map((p: { type: string; category: string; id: string }) => ({
    url: `${base}/profiles/${p.type}/${p.category}/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const dailyProfileUrls: MetadataRoute.Sitemap = (dailyRows ?? [])
    .filter((d: { city_slug: string; slug: string }) => DAILY_PROFILE_CITIES.includes(d.city_slug as (typeof DAILY_PROFILE_CITIES)[number]))
    .map((d: { city_slug: string; slug: string }) => ({
      url: `${base}/daily/${d.city_slug}/${d.slug}`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.55,
    }));

  return [
    ...staticPages,
    ...cityUrls,
    ...categoryUrls,
    ...typeUrls,
    ...blogUrls,
    ...areaUrls,
    ...categoryListingUrls,
    ...profileUrls,
    ...dailyProfileUrls,
  ];
}
