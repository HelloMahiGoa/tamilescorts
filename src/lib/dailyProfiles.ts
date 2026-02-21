/** Daily profiles – types, constants, and styles for admin & frontend. */

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

export const CATEGORY_LABELS: Record<DailyProfileCategory, string> = {
  russian: "Russian",
  "college-girl": "College Girl",
  housewife: "Housewife",
  model: "Model",
  celebrity: "Celebrity",
  "south-indian": "South Indian",
};

/** Category-specific colors/styles for profile cards */
export const CATEGORY_STYLES: Record<
  DailyProfileCategory,
  { bg: string; border: string; badge: string; accent: string; bar: string; hoverRing: string }
> = {
  russian:
    { bg: "bg-slate-900/70", border: "border-slate-500/25", badge: "bg-slate-500/20 text-slate-200 backdrop-blur-sm", accent: "text-slate-300", bar: "from-slate-500/60", hoverRing: "hover:ring-slate-500/40" },
  "college-girl":
    { bg: "bg-emerald-950/50", border: "border-emerald-500/25", badge: "bg-emerald-500/20 text-emerald-200 backdrop-blur-sm", accent: "text-emerald-300", bar: "from-emerald-500/60", hoverRing: "hover:ring-emerald-500/40" },
  housewife:
    { bg: "bg-amber-950/50", border: "border-amber-500/25", badge: "bg-amber-500/20 text-amber-200 backdrop-blur-sm", accent: "text-amber-300", bar: "from-amber-500/60", hoverRing: "hover:ring-amber-500/40" },
  model:
    { bg: "bg-yellow-950/50", border: "border-yellow-500/30", badge: "bg-yellow-500/25 text-yellow-100 backdrop-blur-sm", accent: "text-yellow-300", bar: "from-yellow-500/70", hoverRing: "hover:ring-yellow-500/50" },
  celebrity:
    { bg: "bg-violet-950/50", border: "border-violet-500/25", badge: "bg-violet-500/20 text-violet-200 backdrop-blur-sm", accent: "text-violet-300", bar: "from-violet-500/60", hoverRing: "hover:ring-violet-500/40" },
  "south-indian":
    { bg: "bg-rose-950/50", border: "border-rose-500/25", badge: "bg-rose-500/20 text-rose-200 backdrop-blur-sm", accent: "text-rose-300", bar: "from-rose-500/60", hoverRing: "hover:ring-rose-500/40" },
};

export const DEFAULT_WHATSAPP = "+918121426651";
export const DEFAULT_TELEGRAM = "https://t.me/LillyBabe_chennai";
export const DEFAULT_RATES = {
  rate_1shot: 12000,
  rate_2shot: 24000,
  rate_3shot: 35000,
  rate_fullnight: 40000,
};
export const DEFAULT_AGE = 25;

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
  city_slug: string;
  rate_1shot: number | null;
  rate_2shot: number | null;
  rate_3shot: number | null;
  rate_fullnight: number | null;
}
