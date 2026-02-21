"use client";

import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import DailyProfileCard from "./DailyProfileCard";
import type { DailyProfile } from "@/lib/dailyProfiles";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

interface DailyProfilesSectionProps {
  citySlug: string;
}

export default function DailyProfilesSection({ citySlug }: DailyProfilesSectionProps) {
  const [profiles, setProfiles] = useState<DailyProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (loading || profiles.length === 0) return null;

  return (
    <section
      id="daily-available"
      ref={sectionRef}
      className={`relative border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        inView ? "opacity-100" : "opacity-90"
      }`}
      aria-label="Daily Available Profiles"
    >
      {/* Subtle ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,215,0,0.06),transparent_70%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-amber-400/90 uppercase mb-3">
            Available Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Daily Available
          </h2>
          <p className="text-amber-200/80 max-w-2xl mx-auto text-base sm:text-lg">
            Browse profiles available today. Message us on WhatsApp or Telegram to book.
          </p>
        </div>

        {/* Mobile: Swiper carousel with peek */}
        <div className="md:hidden -mx-4">
          <Swiper
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides={false}
            loop={profiles.length > 1}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            navigation={{
              prevEl: ".daily-swiper-prev",
              nextEl: ".daily-swiper-next",
            }}
            breakpoints={{
              380: { slidesPerView: 1.25 },
              480: { slidesPerView: 1.4 },
            }}
            className="!overflow-visible !pb-2"
          >
            {profiles.map((profile, i) => (
              <SwiperSlide key={profile.id}>
                <DailyProfileCard profile={profile} index={i} variant="luxury" />
              </SwiperSlide>
            ))}
          </Swiper>
          {profiles.length > 1 && (
            <div className="flex justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="daily-swiper-prev flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-amber-500/50 hover:bg-amber-500/10"
                aria-label="Previous profile"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="daily-swiper-next flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-amber-500/50 hover:bg-amber-500/10"
                aria-label="Next profile"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" strokeWidth={2} />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Desktop: Asymmetric bento-style grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:auto-rows-[minmax(320px,auto)]">
          {profiles.map((profile, i) => (
            <div
              key={profile.id}
              className={i === 0 && profiles.length >= 4 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <DailyProfileCard
                profile={profile}
                index={i}
                variant="luxury"
                size={i === 0 && profiles.length >= 4 ? "featured" : "default"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
