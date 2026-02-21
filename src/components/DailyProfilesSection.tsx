"use client";

import { useEffect, useState } from "react";
import DailyProfileCard from "./DailyProfileCard";
import type { DailyProfile } from "@/lib/dailyProfiles";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

interface DailyProfilesSectionProps {
  citySlug: string;
}

function getCityName(slug: string): string {
  return slug
    .replace("-escorts", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function DailyProfilesSection({ citySlug }: DailyProfilesSectionProps) {
  const [profiles, setProfiles] = useState<DailyProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!DAILY_PROFILE_CITIES.includes(citySlug as (typeof DAILY_PROFILE_CITIES)[number])) {
      setLoading(false);
      return;
    }
    fetch(`/api/daily-profiles?city=${encodeURIComponent(citySlug)}`)
      .then((res) => res.json())
      .then((data) => setProfiles(Array.isArray(data) ? data : []))
      .catch(() => setProfiles([]))
      .finally(() => setLoading(false));
  }, [citySlug]);

  if (loading || profiles.length === 0) return null;

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
            Browse profiles. Message us on WhatsApp or Telegram to book.
          </p>
        </div>

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
      </div>
    </section>
  );
}
