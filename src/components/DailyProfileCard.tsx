"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

function getRates(profile: DailyProfile): { label: string; amount: number | null }[] {
  const items: { label: string; amount: number | null }[] = [];
  if (profile.rate_1shot != null) items.push({ label: "1 shot", amount: profile.rate_1shot });
  if (profile.rate_fullnight != null) items.push({ label: "Full night", amount: profile.rate_fullnight });
  return items;
}

/** Category-specific gradient and glow for premium look */
const CATEGORY_GRADIENT: Record<string, { from: string; via: string; to: string; glow: string }> = {
  russian: { from: "from-slate-500/60", via: "via-slate-400/40", to: "to-slate-600/20", glow: "group-hover:shadow-slate-500/20" },
  "college-girl": { from: "from-emerald-500/70", via: "via-emerald-400/50", to: "to-emerald-600/30", glow: "group-hover:shadow-emerald-500/25" },
  housewife: { from: "from-amber-500/70", via: "via-amber-400/50", to: "to-amber-600/30", glow: "group-hover:shadow-amber-500/25" },
  model: { from: "from-yellow-500/80", via: "via-yellow-400/60", to: "to-yellow-600/40", glow: "group-hover:shadow-yellow-500/30" },
  celebrity: { from: "from-violet-500/70", via: "via-violet-400/50", to: "to-violet-600/30", glow: "group-hover:shadow-violet-500/25" },
  "south-indian": { from: "from-rose-500/70", via: "via-rose-400/50", to: "to-rose-600/30", glow: "group-hover:shadow-rose-500/25" },
};

const DEFAULT_GRADIENT = CATEGORY_GRADIENT["south-indian"];

export default function DailyProfileCard({ profile, cityName, index = 0 }: DailyProfileCardProps) {
  const categoryLabel = CATEGORY_LABELS[profile.category] ?? profile.category;
  const style = CATEGORY_STYLES[profile.category] ?? CATEGORY_STYLES["south-indian"];
  const gradient = CATEGORY_GRADIENT[profile.category] ?? DEFAULT_GRADIENT;
  const rates = getRates(profile);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className="group relative block overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
      >
        {/* Animated gradient border */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.via} ${gradient.to} opacity-70 p-[1px] transition-all duration-500 group-hover:opacity-100`}
        >
          <div className="absolute inset-[1px] rounded-[15px] bg-[#0a0a0a]" />
        </div>

        {/* Glow effect on hover */}
        <div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40 ${gradient.glow}`}
          aria-hidden
        />

        {/* Card content */}
        <div className="relative flex flex-col p-6 sm:p-7 min-h-[200px] lg:min-h-[220px]">
          {/* Top: badge + decorative line */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <span
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] ${style.badge} border border-white/10 shadow-lg`}
            >
              {categoryLabel}
            </span>
            <span
              className={`h-px flex-1 bg-gradient-to-r ${gradient.from} to-transparent opacity-50`}
              aria-hidden
            />
          </div>

          {/* Name – prominent */}
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            {profile.name}
          </h3>
          <p className={`mt-2 text-sm ${style.accent} font-medium`}>
            {profile.age} yrs · {cityName}
          </p>

          {/* Rates – gold chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {rates.length > 0 ? (
              rates.map((r) => (
                <span
                  key={r.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 px-4 py-2.5 text-sm backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--accent-gold)]/50 group-hover:bg-[var(--accent-gold)]/15"
                >
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">{r.label}</span>
                  <span className="font-bold text-[var(--accent-gold)] tabular-nums">
                    {formatRate(r.amount)}
                  </span>
                </span>
              ))
            ) : (
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/60">
                View for rates
              </span>
            )}
          </div>

          {/* CTA – full width at bottom */}
          <div className="mt-auto pt-6">
            <span
              className="flex items-center justify-center gap-2 rounded-xl bg-white/5 py-3.5 text-sm font-semibold text-[var(--accent-gold)]
                border border-[var(--accent-gold)]/20
                transition-all duration-300
                group-hover:bg-[var(--accent-gold)]/15 group-hover:border-[var(--accent-gold)]/40 group-hover:shadow-lg group-hover:shadow-[var(--accent-gold)]/10 group-hover:gap-3"
            >
              View profile
              <svg className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
