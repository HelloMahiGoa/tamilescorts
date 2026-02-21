export const DAILY_PROFILE_CITIES = [
  "chennai-escorts",
  "bangalore-escorts",
  "hyderabad-escorts",
  "kochi-escorts",
  "coimbatore-escorts",
  "madurai-escorts",
] as const;

export type DailyProfileCitySlug = (typeof DAILY_PROFILE_CITIES)[number];

export const DAILY_PROFILE_CATEGORIES = [
  "russian",
  "college-girl",
  "housewife",
  "model",
  "celebrity",
  "south-indian",
] as const;

export type DailyProfileCategory = (typeof DAILY_PROFILE_CATEGORIES)[number];

export const DEFAULT_WHATSAPP = "+918121426651";
export const DEFAULT_TELEGRAM = "https://t.me/LillyBabe_chennai";
export const DEFAULT_RATES = {
  rate_1shot: 12000,
  rate_2shot: 24000,
  rate_3shot: 35000,
  rate_fullnight: 40000,
};
export const DEFAULT_AGE = 25;

export const CATEGORY_LABELS: Record<DailyProfileCategory, string> = {
  russian: "Russian",
  "college-girl": "College Girl",
  housewife: "Housewife",
  model: "Model",
  celebrity: "Celebrity",
  "south-indian": "South Indian",
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "profile";
}

export interface DailyProfile {
  id: string;
  slug: string;
  name: string;
  age: number;
  category: DailyProfileCategory;
  rate_1shot: number | null;
  rate_2shot: number | null;
  rate_3shot: number | null;
  rate_fullnight: number | null;
  whatsapp: string | null;
  telegram: string | null;
  city_slug: string;
  image_url: string | null;
  pdf_url: string;
  meta_title: string | null;
  meta_description: string | null;
  is_active: boolean;
  created_at: string;
}
