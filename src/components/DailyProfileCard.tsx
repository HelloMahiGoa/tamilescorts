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
  variant?: "film" | "bento" | "split" | "gradient" | "pinkGold";
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

export default function DailyProfileCard({ profile, index = 0, variant = "split" }: DailyProfileCardProps) {
  const categoryLabel = CATEGORY_LABELS[profile.category as keyof typeof CATEGORY_LABELS] ?? profile.category;
  const delay = Math.min(index * 0.06, 0.4);
  const isSplit = variant === "split";
  const isFilm = variant === "film";
  const isGradient = variant === "gradient";
  const isPinkGold = variant === "pinkGold";

  if (isPinkGold) {
    return (
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/25 via-amber-900/20 to-yellow-600/25 border border-amber-500/30 shadow-lg shadow-pink-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:border-amber-400/50 gradient-card-enter"
        style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
      >
        <div className="absolute top-0 right-0 w-0 h-0 border-[0_65px_65px_transparent] border-r-amber-500/40 border-t-transparent pointer-events-none z-10" aria-hidden />
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-pink-500/30 via-amber-900/25 to-yellow-600/30">
          {profile.image_url ? (
            <Image
              src={profile.image_url}
              alt={profile.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              unoptimized
            />
          ) : profile.pdf_url ? (
            <PdfThumbnail
              pdfUrl={profile.pdf_url}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          {(profile.image_url || profile.pdf_url) && (
            <>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 pt-8 bg-gradient-to-t from-pink-950/95 via-amber-950/70 to-transparent">
                <p className="font-playfair text-lg font-bold text-white">{profile.name}</p>
                <p className="font-dancing text-sm text-amber-200">{profile.age} yrs</p>
                <p className="text-xs text-amber-300/90">{getRateSummary(profile)}</p>
                <span className="mt-2 inline-flex items-center gap-1 font-dancing text-sm font-semibold text-[var(--accent-gold)] group-hover:text-amber-200 transition-colors">
                  View profile
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-amber-500/30 backdrop-blur-md px-3 py-1 font-dancing text-sm font-semibold text-amber-100 ring-1 ring-amber-400/30">
                {categoryLabel}
              </span>
            </>
          )}
        </div>
        {!profile.image_url && !profile.pdf_url && (
          <div className="flex flex-col gap-1 p-4 bg-gradient-to-b from-pink-950/70 to-transparent">
            <p className="font-playfair text-lg font-bold text-white">{profile.name}</p>
            <p className="font-dancing text-sm text-amber-200">{profile.age} yrs</p>
            <p className="text-xs text-amber-300/90">{getRateSummary(profile)}</p>
            <span className="mt-2 inline-flex items-center gap-1 font-dancing text-sm font-semibold text-[var(--accent-gold)] group-hover:text-amber-200 transition-colors">
              View profile
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </Link>
    );
  }

  if (isGradient) {
    return (
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500/20 via-fuchsia-500/15 to-purple-600/20 border border-pink-400/20 shadow-lg shadow-pink-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/20 hover:border-pink-400/40 gradient-card-enter"
        style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
      >
        <div className="gradient-card-accent" aria-hidden />
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-pink-500/25 via-fuchsia-500/20 to-purple-600/25">
          {profile.image_url ? (
            <Image
              src={profile.image_url}
              alt={profile.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              unoptimized
            />
          ) : profile.pdf_url ? (
            <PdfThumbnail
              pdfUrl={profile.pdf_url}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}
          {(profile.image_url || profile.pdf_url) && (
            <>
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 pt-8 bg-gradient-to-t from-pink-950/95 via-fuchsia-900/70 to-transparent">
                <p className="font-playfair text-lg font-bold text-white">{profile.name}</p>
                <p className="font-dancing text-sm text-pink-200">{profile.age} yrs</p>
                <p className="text-xs text-pink-300/90">{getRateSummary(profile)}</p>
                <span className="mt-2 inline-flex items-center gap-1 font-dancing text-sm font-semibold text-pink-200 group-hover:text-pink-100 transition-colors">
                  View profile
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 font-dancing text-sm font-semibold text-pink-100">
                {categoryLabel}
              </span>
            </>
          )}
        </div>
        {!profile.image_url && !profile.pdf_url && (
          <div className="flex flex-col gap-1 p-4 bg-gradient-to-b from-pink-950/60 to-transparent">
            <p className="font-playfair text-lg font-bold text-white">{profile.name}</p>
            <p className="font-dancing text-sm text-pink-200">{profile.age} yrs</p>
            <p className="text-xs text-pink-300/90">{getRateSummary(profile)}</p>
            <span className="mt-2 inline-flex items-center gap-1 font-dancing text-sm font-semibold text-pink-200 group-hover:text-pink-100 transition-colors">
              View profile
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
      </Link>
    );
  }

  if (isSplit) {
    return (
      <Link
        href={`/daily/${profile.city_slug}/${profile.slug}`}
        className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-lg transition-all duration-300 hover:border-[var(--accent-gold)]/30 hover:shadow-xl split-card-enter"
        style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
      >
        {/* Image half */}
        <div className="relative w-full sm:w-1/2 aspect-[4/5] sm:aspect-auto sm:min-h-[220px] shrink-0 overflow-hidden">
          {profile.image_url ? (
            <Image
              src={profile.image_url}
              alt={profile.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 flex flex-col justify-center gap-1 bg-gradient-to-br from-[var(--accent-gold)]/15 to-black/90 p-4">
              <p className="text-lg font-bold text-white">{profile.name}</p>
              <p className="text-sm text-white/80">{profile.age} yrs · {categoryLabel}</p>
              <p className="text-xs text-white/60">{getRateSummary(profile)}</p>
            </div>
          )}
          {profile.image_url && (
            <span className="absolute right-3 top-3 rounded-full bg-black/60 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-[var(--accent-gold)] ring-1 ring-white/10">
              {categoryLabel}
            </span>
          )}
        </div>

        {/* Gold divider - vertical on desktop, horizontal on mobile */}
        <div
          className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-px bg-gradient-to-b from-transparent via-[var(--accent-gold)]/50 to-transparent"
          aria-hidden
        />
        <div
          className="sm:hidden shrink-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent"
          aria-hidden
        />

        {/* Details half */}
        <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 bg-black/40 sm:bg-transparent">
          <p className="text-xl font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-white/80">{profile.age} yrs · {categoryLabel}</p>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">{getRateSummary(profile)}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-gold)] group-hover:gap-2 transition-all">
            View profile
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    );
  }

  /* Film or Bento variant */
  return (
    <Link
      href={`/daily/${profile.city_slug}/${profile.slug}`}
      className={`group relative flex shrink-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-xl transition-all duration-300 ease-out snap-center ${
        isFilm
          ? "film-card-enter w-[200px] sm:w-[260px] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[var(--accent-gold)]/10 hover:border-[var(--accent-gold)]/30"
          : "profile-card bento-card-enter hover:border-[var(--accent-gold)]/30"
      }`}
      style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
    >
      {isFilm && (
        <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/60 to-transparent" />
      )}
      <div className={`relative w-full overflow-hidden ${isFilm ? "aspect-[3/4]" : "aspect-[3/4] shrink-0"}`}>
        {profile.image_url ? (
          <Image
            src={profile.image_url}
            alt={profile.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes={isFilm ? "240px" : "(max-width: 640px) 50vw, 25vw"}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-center gap-2 bg-gradient-to-br from-[var(--accent-gold)]/10 via-black/90 to-black p-4">
            <p className="font-bold text-white text-base">{profile.name}</p>
            <p className="text-sm text-white/80">{profile.age} yrs · {categoryLabel}</p>
            <p className="text-xs text-white/60">{getRateSummary(profile)}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[var(--accent-gold)]">
              View profile
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        )}
        {profile.image_url && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            {!isSplit && (
              <span className="absolute right-2 top-2 rounded-full bg-black/60 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-gold)] ring-1 ring-white/10">
                {categoryLabel}
              </span>
            )}
          </>
        )}
      </div>
      {profile.image_url && !isSplit && (
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-sm font-semibold text-white truncate">{profile.name}</p>
          <p className="text-xs text-white/70 mt-0.5">{profile.age} yrs · {getRateSummary(profile)}</p>
        </div>
      )}
    </Link>
  );
}
