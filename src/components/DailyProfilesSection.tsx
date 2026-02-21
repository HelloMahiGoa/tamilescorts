"use client";

import { useEffect, useState, useRef } from "react";
import DailyProfileCard from "./DailyProfileCard";
import type { DailyProfile } from "@/lib/dailyProfiles";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

interface DailyProfilesSectionProps {
  citySlug: string;
}

export default function DailyProfilesSection({ citySlug }: DailyProfilesSectionProps) {
  const [profiles, setProfiles] = useState<DailyProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!DAILY_PROFILE_CITIES.includes(citySlug as (typeof DAILY_PROFILE_CITIES)[number])) {
      setLoading(false);
      return;
    }
    fetch(`/api/daily-profiles?city=${encodeURIComponent(citySlug)}`)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(Array.isArray(data) ? data : []);
      })
      .catch(() => setProfiles([]))
      .finally(() => setLoading(false));
  }, [citySlug]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (loading || profiles.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className={`border-y border-amber-500/25 py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-950/30 via-transparent to-amber-950/30 overflow-hidden ${inView ? "opacity-100" : "opacity-90"}`}
      aria-label="Daily Available Profiles"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase mb-2">
            Available Today
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-3">
            Daily Available
          </h2>
          <p className="text-amber-200/80 max-w-xl mx-auto font-dancing text-lg">
            Browse profiles available today. Message us on WhatsApp or Telegram to book.
          </p>
        </div>

        {/* 5th design: gradient pink + golden */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {profiles.map((profile, i) => (
            <DailyProfileCard
              key={profile.id}
              profile={profile}
              index={i}
              variant="pinkGold"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
