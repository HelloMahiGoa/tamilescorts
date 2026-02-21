"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import DailyProfileCard from "./DailyProfileCard";
import type { DailyProfile } from "@/lib/dailyProfiles";

const PdfGalleryViewer = dynamic(() => import("./PdfGalleryViewer").then((m) => ({ default: m.PdfGalleryViewer })), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-16 text-white/60">
      <span className="animate-pulse">Loading gallery…</span>
    </div>
  ),
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function formatRate(amount: number | null): string {
  if (amount == null) return "—";
  return `₹${Number(amount).toLocaleString()}`;
}

export interface ProfilePageContentProps {
  profile: {
    name: string;
    slug: string;
    age: number;
    category: string;
    city_slug: string;
    rate_1shot: number | null;
    rate_2shot: number | null;
    rate_3shot: number | null;
    rate_fullnight: number | null;
    telegram: string | null;
    pdf_url?: string | null;
  };
  categoryLabel: string;
  categoryStyle: { badge: string; accent: string };
  cityName: string;
  rates: { label: string; amount: number | null }[];
  relatedProfiles?: DailyProfile[];
}

export function ProfilePageContent({
  profile,
  categoryLabel,
  categoryStyle,
  cityName,
  rates,
  relatedProfiles = [],
}: ProfilePageContentProps) {
  const telegramUrl = profile.telegram
    ? profile.telegram.startsWith("http")
      ? profile.telegram
      : `https://t.me/${profile.telegram.replace("@", "")}`
    : null;

  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <motion.div variants={item} initial="hidden" animate="show">
          <Link
            href={`/${profile.city_slug}`}
            className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-[var(--accent-gold)] transition-colors duration-300"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to {cityName} Escorts</span>
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={`mt-6 lg:mt-10 ${profile.pdf_url ? "lg:grid lg:grid-cols-[360px_1fr] lg:gap-12" : "max-w-xl"}`}
        >
          {/* Left column – sticky sidebar */}
          <aside className="lg:sticky lg:top-6 lg:self-start space-y-6">
            <motion.header
              variants={item}
              className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-transparent p-6 sm:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,var(--accent-gold)/8%,transparent)] pointer-events-none" />
              <div className="relative">
                <motion.span
                  variants={item}
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${categoryStyle.badge} border border-white/5`}
                >
                  {categoryLabel}
                </motion.span>
                <motion.h1
                  variants={item}
                  className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white tracking-tight leading-[1.15]"
                >
                  {profile.name}
                </motion.h1>
                <motion.p variants={item} className={`mt-2 text-base ${categoryStyle.accent}`}>
                  {profile.age} years · {cityName}
                </motion.p>

                {telegramUrl && (
                  <motion.div variants={item} className="mt-8">
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 w-full rounded-2xl bg-[#0088cc] px-6 py-4 font-semibold text-white shadow-lg shadow-[#0088cc]/25 transition-all duration-300 hover:shadow-[#0088cc]/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                      <span>Contact on Telegram</span>
                      <span className="opacity-70 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.header>

            {/* Rates – desktop only (mobile: shown after PDF) */}
            <motion.section variants={item} className="hidden lg:block rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-gold)]/90 mb-4">
                Rates
              </h2>
              <div className="space-y-2">
                {rates.map((r) => (
                  <motion.div
                    key={r.label}
                    variants={item}
                    className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-3"
                  >
                    <span className="text-sm font-medium text-white/80 capitalize">{r.label}</span>
                    <span className="font-semibold text-[var(--accent-gold)] tabular-nums">
                      {formatRate(r.amount)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </aside>

          {/* PDF viewer – full width on mobile, canvas-based for proper display */}
          {profile.pdf_url && (
            <motion.section
              variants={item}
              className="mt-6 lg:mt-0 -mx-4 sm:-mx-6 lg:mx-0 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full rounded-none border-0 lg:rounded-2xl lg:border lg:border-white/[0.08] overflow-hidden bg-black/40 flex flex-col"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 sm:px-6 lg:px-5 py-3 lg:py-4 bg-white/[0.02] shrink-0">
                <span className="h-1.5 w-12 rounded-full bg-[var(--accent-gold)]/70" aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Profile Gallery
                </span>
              </div>
              <div className="h-[min(85vh,800px)] min-h-[400px] bg-black/60 w-full overflow-y-auto shrink min-w-0">
                <PdfGalleryViewer
                  url={profile.pdf_url}
                  containerClassName="h-full min-h-[400px] p-2 sm:p-4 [&_canvas]:max-w-full [&_canvas]:h-auto [&_canvas]:mx-auto"
                />
              </div>
            </motion.section>
          )}

          {/* Rates – mobile only (after PDF) */}
          <motion.section
            variants={item}
            className="mt-6 lg:hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-gold)]/90 mb-4">
              Rates
            </h2>
            <div className="space-y-2">
              {rates.map((r) => (
                <motion.div
                  key={r.label}
                  variants={item}
                  className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.04] px-4 py-3"
                >
                  <span className="text-sm font-medium text-white/80 capitalize">{r.label}</span>
                  <span className="font-semibold text-[var(--accent-gold)] tabular-nums">
                    {formatRate(r.amount)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Other profiles you may like */}
        {relatedProfiles.length > 0 && (
          <motion.section
            variants={item}
            initial="hidden"
            animate="show"
            className="mt-16 lg:mt-20 border-t border-white/[0.08] pt-12"
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-gold)]/90 mb-6">
              Other profiles you may like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProfiles.map((rp, i) => (
                <motion.div key={rp.id} variants={item}>
                  <DailyProfileCard profile={rp} cityName={cityName} index={i} />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
