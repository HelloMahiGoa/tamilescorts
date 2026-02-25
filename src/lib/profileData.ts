export type EscortType = "tamil" | "mallu" | "telugu" | "kannada";
export type Category = "regular" | "artists" | "celebrity" | "models" | "housewife" | "college-girls" | "actress";

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  type: EscortType;
  category: Category;
  tagline: string;
  bio: string;
  image: string;
  images?: string[];
  videos?: string[];
  instagram?: string;
  availability: string;
  languages: string[];
  services?: string[];
  telegram: string;
  verified?: boolean;
  responseTime?: string;
  rating?: number;
  reviewCount?: number;
  price?: {
    hourly?: number;
    overnight?: number;
    extended?: number;
  };
}

/** Type page URL path: /tamil-escorts, /mallu-escorts, etc. */
export const TYPE_PAGE_SLUGS = ["tamil-escorts", "mallu-escorts", "telugu-escorts", "kannada-escorts"] as const;

const TYPE_LABELS: Record<EscortType, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

export function getTypePagePath(type: EscortType): string {
  return `/${type}-escorts`;
}

export function getTypeByPageSlug(pageSlug: string): { type: EscortType; label: string } | undefined {
  if (!pageSlug.endsWith("-escorts")) return undefined;
  const type = pageSlug.slice(0, -8) as EscortType;
  if (!["tamil", "mallu", "telugu", "kannada"].includes(type)) return undefined;
  return { type, label: TYPE_LABELS[type] };
}
