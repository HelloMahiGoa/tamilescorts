"use client";

import Image from "next/image";
import Link from "next/link";
import type { DailyProfile } from "@/lib/dailyProfiles";
import { CATEGORY_LABELS } from "@/lib/dailyProfiles";
import PdfThumbnail from "./PdfThumbnail";

interface DailyProfileCardProps {
  profile: DailyProfile;
  index?: number;
  featured?: boolean;
  variant?: "film" | "bento" | "split" | "gradient" | "pinkGold" | "luxury";
  size?: "default" | "featured"; // for bento-style larger cards
}

function formatRate(amount: number | null): string {
  if (amount == null) return "—";
  return `₹${Number(amount).toLocaleString()}`;
}

function getRateSummary(profile: DailyProfile): string {
  const parts: string[] = [];
  if (profile.rate_1shot != null) parts.push(`1 shot ${formatRate(profile.rate_1shot)}`);
  if (profile.rate_fullnight != null) parts.push(`Full night ${formatRate(profile.rate_fullnight)}`);
  return parts.length ? parts.join(" · ") : "View PDF";
}

export default function DailyProfileCard({ profile, index = 0, variant = "luxury", size = "default" }: DailyProfileCardProps) {
  const categoryLabel = CATEGORY_LABELS[profile.category as keyof typeof CATEGORY_LABELS] ?? profile.category;
  const delay = Math.min(index * 0.05, 0.35);
  const isFeatured = size === "featured";
  const isLuxury = variant === "luxury" || variant === "pinkGold";

  /* New luxury design - bento-style card with glassmorphism & premium feel */
  if (isLuxury || variant === "luxury") {
    return (
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className={`group relative block overflow-hidden rounded-2xl transition-all duration-500 ease-out
          ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}
          hover:scale-[1.02] hover:shadow-[0_0_40px_-8px_rgba(255,215,0,0.4)]
          border border-white/[0.08] hover:border-amber-500/40
          bg-gradient-to-br from-zinc-900/90 via-black/95 to-amber-950/20
          shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        `}
        style={{ animationDelay: `${delay}s` }}
      >
        {/* Subtle gradient orb */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity group-hover:opacity-80" aria-hidden />

        <div className={`relative overflow-hidden ${isFeatured ? "aspect-[3/4] md:aspect-auto md:min-h-[420px]" : "aspect-[3/4]"}`}>
          {profile.image_url ? (
            <Image
              src={profile.image_url}
              alt={profile.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
              unoptimized
            />
          ) : profile.pdf_url ? (
            <PdfThumbnail
              pdfUrl={profile.pdf_url}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          ) : null}

          {/* Gradient overlay - bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/60 to-transparent"
            aria-hidden
          />

          {/* Content overlay */}
          <div className="absolute inset-x-0 bottom-0 p-5 pb-6">
            <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-200 backdrop-blur-sm">
              {categoryLabel}
            </span>
            <p className="font-display text-xl font-bold tracking-tight text-white drop-shadow-lg sm:text-2xl">{profile.name}</p>
            <p className="mt-0.5 text-sm text-amber-200/90">{profile.age} yrs</p>
            <p className="mt-2 text-xs font-medium text-white/70">{getRateSummary(profile)}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-all group-hover:gap-3 group-hover:text-amber-300">
              View profile
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>

          {/* Hover shine effect */}
          <div
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            aria-hidden
          />
        </div>

        {!profile.image_url && !profile.pdf_url && (
          <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-br from-zinc-900 to-amber-950/30">
            <p className="font-display text-xl font-bold text-white">{profile.name}</p>
            <p className="text-sm text-amber-200/90">{profile.age} yrs</p>
            <p className="text-xs text-white/70">{getRateSummary(profile)}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
              View profile
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        )}
      </Link>
    );
  }

  /* Legacy variants - kept for backward compatibility */
  const isSplit = variant === "split";
  const isFilm = variant === "film";
  const isGradient = variant === "gradient";
  const isPinkGold = variant === "pinkGold";

  if (isPinkGold) {
    return (
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/25 via-amber-900/20 to-yellow-600/25 border border-amber-500/30 shadow-lg transition-all duration-300 hover:border-amber-400/50"
        style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          {profile.image_url ? (
            <Image src={profile.image_url} alt={profile.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 33vw" unoptimized />
          ) : profile.pdf_url ? (
            <PdfThumbnail pdfUrl={profile.pdf_url} alt={profile.name} className="absolute inset-0 h-full w-full object-cover" />
          ) : null}
          {(profile.image_url || profile.pdf_url) && (
            <>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 pt-8 bg-gradient-to-t from-pink-950/95 to-transparent">
                <p className="font-playfair text-lg font-bold text-white">{profile.name}</p>
                <p className="font-dancing text-sm text-amber-200">{profile.age} yrs</p>
                <p className="text-xs text-amber-300/90">{getRateSummary(profile)}</p>
                <span className="mt-2 inline-flex items-center gap-1 font-dancing text-sm font-semibold text-[var(--accent-gold)]">View profile →</span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-amber-500/30 backdrop-blur-md px-3 py-1 font-dancing text-sm font-semibold text-amber-100">{categoryLabel}</span>
            </>
          )}
        </div>
      </Link>
    );
  }

  if (isSplit) {
    return (
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-lg transition-all duration-300 hover:border-[var(--accent-gold)]/30"
      >
        <div className="relative w-full sm:w-1/2 aspect-[4/5] sm:min-h-[220px] shrink-0 overflow-hidden">
          {profile.image_url ? (
            <Image src={profile.image_url} alt={profile.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="100vw, 50vw" unoptimized />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-center gap-1 bg-gradient-to-br from-[var(--accent-gold)]/15 to-black/90 p-4">
              <p className="text-lg font-bold text-white">{profile.name}</p>
              <p className="text-sm text-white/80">{profile.age} yrs · {categoryLabel}</p>
              <p className="text-xs text-white/60">{getRateSummary(profile)}</p>
            </div>
          )}
          {profile.image_url && <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-[var(--accent-gold)]">{categoryLabel}</span>}
        </div>
        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
          <p className="text-xl font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-white/80">{profile.age} yrs · {categoryLabel}</p>
          <p className="mt-3 text-sm text-white/60">{getRateSummary(profile)}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-gold)]">View profile →</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/daily/${profile.city_slug}/${profile.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-xl transition-all duration-300 ${
        isFilm ? "film-card-enter w-[200px] sm:w-[260px] snap-center" : "profile-card"
      }`}
    >
      <div className={`relative w-full overflow-hidden ${isFilm ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
        {profile.image_url ? (
          <Image src={profile.image_url} alt={profile.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes={isFilm ? "240px" : "50vw, 25vw"} unoptimized />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-center gap-2 bg-gradient-to-br from-[var(--accent-gold)]/10 to-black p-4">
            <p className="font-bold text-white">{profile.name}</p>
            <p className="text-sm text-white/80">{profile.age} yrs · {categoryLabel}</p>
            <p className="text-xs text-white/60">{getRateSummary(profile)}</p>
          </div>
        )}
        {profile.image_url && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/95 to-transparent" />
            <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-gold)]">{categoryLabel}</span>
          </>
        )}
      </div>
      {profile.image_url && (
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-sm font-semibold text-white truncate">{profile.name}</p>
          <p className="text-xs text-white/70 mt-0.5">{profile.age} yrs · {getRateSummary(profile)}</p>
        </div>
      )}
    </Link>
  );
}
