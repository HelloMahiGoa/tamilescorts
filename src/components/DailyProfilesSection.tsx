"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import DailyProfileCard from "./DailyProfileCard";
import type { DailyProfile } from "@/lib/dailyProfiles";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

const PROFILES_PER_PAGE = 10;
const ALL_PROFILES_LIMIT = 100;

interface DailyProfilesSectionProps {
  citySlug: string;
  basePath?: string;
  /** When true, fetch all profiles in one request and hide pagination (e.g. for Chennai). */
  disablePagination?: boolean;
}

function getCityName(slug: string): string {
  return slug
    .replace("-escorts", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

function buildPageUrl(path: string, page: number): string {
  if (page <= 1) return path;
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}daily_page=${page}#daily-available`;
}

export default function DailyProfilesSection({ citySlug, basePath, disablePagination }: DailyProfilesSectionProps) {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("daily_page");
  const currentPage = disablePagination ? 1 : Math.max(1, parseInt(String(pageParam || "1"), 10) || 1);

  const [profiles, setProfiles] = useState<DailyProfile[]>([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const path = basePath ?? `/${citySlug}`;
  const pageSize = disablePagination ? ALL_PROFILES_LIMIT : PROFILES_PER_PAGE;

  useEffect(() => {
    if (!DAILY_PROFILE_CITIES.includes(citySlug as (typeof DAILY_PROFILE_CITIES)[number])) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(
      `/api/daily-profiles?city=${encodeURIComponent(citySlug)}&page=${currentPage}&limit=${pageSize}`
    )
      .then((res) => res.json())
      .then((body: { data?: DailyProfile[]; total?: number; totalPages?: number }) => {
        setProfiles(Array.isArray(body.data) ? body.data : []);
        setTotal(typeof body.total === "number" ? body.total : 0);
        setTotalPages(typeof body.totalPages === "number" ? body.totalPages : 0);
      })
      .catch(() => {
        setProfiles([]);
        setTotal(0);
        setTotalPages(0);
      })
      .finally(() => setLoading(false));
  }, [citySlug, currentPage, pageSize]);

  if (loading && profiles.length === 0) return null;

  const cityName = getCityName(citySlug);

  return (
    <section
      id="daily-available"
      className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"
      aria-label="Daily Available Profiles"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
            Available Today
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Daily Available
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Browse profiles. Message us on Telegram to book.
          </p>
        </div>

        {profiles.length === 0 ? (
          <p className="py-12 text-center text-white/60">No profiles available for {cityName}.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-6">
              {profiles.map((profile, i) => (
                <DailyProfileCard
                  key={profile.id}
                  profile={profile}
                  cityName={cityName}
                  index={i}
                />
              ))}
            </div>

            {!disablePagination && totalPages > 1 && (
              <nav
                className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
                aria-label="Daily profiles pagination"
              >
                <p className="text-sm text-white/60">
                  Showing{" "}
                  <span className="font-medium text-white">
                    {(currentPage - 1) * PROFILES_PER_PAGE + 1}
                  </span>
                  –{" "}
                  <span className="font-medium text-white">
                    {Math.min(currentPage * PROFILES_PER_PAGE, total)}
                  </span>{" "}
                  of <span className="font-medium text-white">{total}</span>
                </p>
                <div className="flex items-center gap-2">
                  {currentPage > 1 && (
                    <Link
                      href={buildPageUrl(path, currentPage - 1)}
                      className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
                    >
                      ← Previous
                    </Link>
                  )}
                  <span className="flex items-center gap-1">
                    {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                      let p: number;
                      if (totalPages <= 7) p = i + 1;
                      else if (currentPage <= 4) p = i + 1;
                      else if (currentPage >= totalPages - 3) p = totalPages - 6 + i;
                      else p = currentPage - 3 + i;
                      return p === currentPage ? (
                        <span
                          key={p}
                          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-gold)] text-sm font-semibold text-black"
                        >
                          {p}
                        </span>
                      ) : (
                        <Link
                          key={p}
                          href={buildPageUrl(path, p)}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-sm font-medium text-white/80 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
                        >
                          {p}
                        </Link>
                      );
                    })}
                  </span>
                  {currentPage < totalPages && (
                    <Link
                      href={buildPageUrl(path, currentPage + 1)}
                      className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
}
