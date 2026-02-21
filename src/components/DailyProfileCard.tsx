"use client";

import Link from "next/link";
import type { DailyProfile } from "@/lib/dailyProfiles";
import { CATEGORY_LABELS, CATEGORY_STYLES } from "@/lib/dailyProfiles";

interface DailyProfileCardProps {
  profile: DailyProfile;
  cityName: string;
  index?: number;
}

function formatRate(amount: number | null): string {
  if (amount == null) return "—";
  return `₹${Number(amount).toLocaleString()}`;
}

interface RateItem {
  label: string;
  amount: number | null;
}

function getRates(profile: DailyProfile): RateItem[] {
  const items: RateItem[] = [];
  if (profile.rate_1shot != null) items.push({ label: "1 shot", amount: profile.rate_1shot });
  if (profile.rate_fullnight != null) items.push({ label: "Full night", amount: profile.rate_fullnight });
  return items;
}

export default function DailyProfileCard({ profile, cityName, index = 0 }: DailyProfileCardProps) {
  const categoryLabel = CATEGORY_LABELS[profile.category] ?? profile.category;
  const style = CATEGORY_STYLES[profile.category] ?? CATEGORY_STYLES["south-indian"];
  const rates = getRates(profile);
  const bar = style.bar ?? "from-amber-500/60";
  const hoverRing = style.hoverRing ?? "hover:ring-amber-500/40";

  return (
    <Link
      href={`/daily/${profile.city_slug}/${profile.slug}`}
      className={`group relative block overflow-hidden rounded-2xl border ${style.border} ${style.bg} 
        p-5 sm:p-6 
        backdrop-blur-sm shadow-lg shadow-black/20
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
        hover:ring-2 ${hoverRing}
        active:translate-y-0 active:scale-[0.99]
        lg:flex lg:min-h-[200px] lg:flex-col
      `}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Left accent bar - thicker on desktop */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 lg:w-1.5 bg-gradient-to-b ${bar} to-transparent opacity-80`} aria-hidden />

      <div className="relative pl-1 flex-1 flex flex-col lg:min-h-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between lg:flex-col lg:flex-1 lg:gap-0">
          <div className="min-w-0 flex-1 lg:flex-initial">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider ${style.badge} border border-white/5`}>
              {categoryLabel}
            </span>
            <h3 className="mt-4 font-display text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-white tracking-tight">
              {profile.name}
            </h3>
            <p className={`mt-1 text-sm ${style.accent}`}>
              {profile.age} yrs · {cityName}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {rates.length > 0 ? (
                rates.map((r) => (
                  <span
                    key={r.label}
                    className="inline-flex items-baseline gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2"
                  >
                    <span className="text-xs font-medium text-white/70">{r.label}</span>
                    <span className="font-semibold text-[var(--accent-gold)]">{formatRate(r.amount)}</span>
                  </span>
                ))
              ) : (
                <span className="text-sm text-white/60">View for rates</span>
              )}
            </div>
          </div>
          {/* CTA - inline on mobile/sm, full-width at bottom on desktop */}
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-[var(--accent-gold)] 
            transition-all duration-200 group-hover:bg-[var(--accent-gold)]/20 group-hover:gap-3
            border border-white/5
            lg:mt-auto lg:w-full lg:justify-center lg:py-3
          ">
            View profile
            <svg className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
