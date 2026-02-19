export const CATEGORY_SLUGS = [
  "regular",
  "housewife",
  "college-girls",
  "models",
  "artists",
  "celebrity",
  "actress",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export interface CategoryInfo {
  slug: CategorySlug;
  icon: string;
  title: string;
  description: string;
  bestFor: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "regular",
    icon: "✨",
    title: "Regular Escorts",
    description:
      "Everyday, approachable people who are easy to talk to and great company. No pretense—just real people you can relax with, whether you want a quiet dinner, a night out, or someone to talk to.",
    bestFor: "Casual outings, relaxed evenings, genuine conversation",
  },
  {
    slug: "housewife",
    icon: "🏠",
    title: "Housewife Escorts",
    description:
      "Mature, grounded escorts who bring warmth and life experience. Discreet, understanding, and great listeners—the kind of company that feels comfortable and safe.",
    bestFor: "Mature companionship, emotional support, discreet meetings",
  },
  {
    slug: "college-girls",
    icon: "🎓",
    title: "College Girls",
    description:
      "Young, fresh, and full of energy—students and young professionals who are fun to be around. Bring a lively, modern outlook and are easy to chat with about anything.",
    bestFor: "Casual outings, nightlife, adventure activities",
  },
  {
    slug: "models",
    icon: "👗",
    title: "Model Escorts",
    description:
      "Fashion-forward, photogenic escorts with a strong presence and an eye for style. Confident and easy to be around. Perfect for events, dinners, or when you want someone who turns heads.",
    bestFor: "Fashion events, social gatherings, glamorous occasions",
  },
  {
    slug: "artists",
    icon: "🎭",
    title: "Artists & Performers",
    description:
      "Creative souls from the arts—dancers, musicians, and performers—who bring something extra to every meeting. Perfect if you enjoy culture, conversation, and a bit of flair.",
    bestFor: "Cultural events, art shows, intellectual conversations",
  },
  {
    slug: "celebrity",
    icon: "⭐",
    title: "Celebrity Escorts",
    description:
      "High-profile escorts who understand discretion and how to keep things special. Used to attention and know how to handle it with grace. Ideal for VIP events and private moments.",
    bestFor: "High-profile events, VIP occasions, maximum discretion",
  },
  {
    slug: "actress",
    icon: "🎬",
    title: "Actress Escorts",
    description:
      "Screen and stage talent—expressive, confident, and used to making every moment feel like a scene worth remembering. Perfect for high-profile events or private evenings.",
    bestFor: "Events, private evenings, entertainment",
  },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

/** URL path for a category page: /regular-escorts, /housewife-escorts, etc. */
export function getCategoryPagePath(slug: CategorySlug): string {
  return `/${slug}-escorts`;
}

/** All category page slugs (for [slug] route). */
export const CATEGORY_PAGE_SLUGS = CATEGORY_SLUGS.map((s) => `${s}-escorts`);

/** Resolve category from page slug (e.g. "regular-escorts" -> category). */
export function getCategoryByPageSlug(pageSlug: string): CategoryInfo | undefined {
  if (!pageSlug.endsWith("-escorts")) return undefined;
  const slug = pageSlug.slice(0, -8) as CategorySlug; // "-escorts" length 8
  return getCategoryBySlug(slug);
}
