"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

const CITIES = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Kochi",
  "Coimbatore",
  "Madurai",
];

function cityToSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export default function Hero() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const goNext = useCallback(() => {
    setMobileIndex((i) => (i + 1) % CITIES.length);
  }, []);

  const goPrev = useCallback(() => {
    setMobileIndex((i) => (i - 1 + CITIES.length) % CITIES.length);
  }, []);

  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-black sm:h-[60vh] md:h-[70vh] lg:min-h-screen">
      {/* Mobile Hero image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-mobile.avif"
          alt=""
          fill
          className="object-cover object-left object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop Hero image */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/hero-desktop.avif"
          alt=""
          fill
          className="object-cover object-left object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Mobile: Cities strip – click to slide */}
      <div className="absolute bottom-0 left-0 right-0 z-10 lg:hidden">
        <div className="mx-auto max-w-[min(100%,420px)] px-4 pb-6 pt-2">
          <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-gold)]/80">
            Cities
          </p>
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/90 shadow-lg backdrop-blur-sm transition hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/20 hover:text-[var(--accent-gold)] active:scale-95"
              aria-label="Previous city"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/15 bg-black/70 shadow-xl backdrop-blur-md">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {CITIES.map((city) => (
                  <Link
                    key={city}
                    href={`/${cityToSlug(city)}-escorts`}
                    className="flex min-w-full flex-shrink-0 items-center justify-center gap-2 py-4 px-5 active:bg-white/5"
                  >
                    <span className="text-base font-semibold tracking-wide text-white">
                      {city}
                    </span>
                    <span className="text-[var(--accent-gold)] opacity-80">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/90 shadow-lg backdrop-blur-sm transition hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/20 hover:text-[var(--accent-gold)] active:scale-95"
              aria-label="Next city"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="mt-2 flex justify-center gap-1.5">
            {CITIES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMobileIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === mobileIndex
                    ? "w-5 bg-[var(--accent-gold)]"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to city ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Cities panel – premium editorial design */}
      <div className="absolute right-0 top-0 bottom-0 hidden items-center justify-end lg:flex">
        <div className="relative flex h-[min(36rem,80vh)] w-[22rem] flex-col overflow-hidden rounded-l-3xl border-y border-l-0 border-white/20 bg-gradient-to-b from-black/90 via-black/85 to-black/90 shadow-[-12px_0_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,215,0,0.08)] backdrop-blur-2xl xl:w-[26rem]">
          {/* Gold left edge accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--accent-gold)]/70 to-transparent" aria-hidden />
          {/* Top highlight */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-[var(--accent-gold)]/40 via-[var(--accent-gold)]/20 to-transparent" aria-hidden />

          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[0.65rem] font-bold tracking-[0.5em] text-[var(--accent-gold)]/20"
          >
            CITIES
          </div>

          <div className="relative flex flex-1 flex-col justify-center pl-10 pr-6 py-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold)]/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--accent-gold)]">
                Explore cities
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                {CITIES.slice(0, 3).map((city, i) => (
                  <Link
                    key={city}
                    href={`/${cityToSlug(city)}-escorts`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-[13px] font-semibold text-white/90 transition-all duration-300 hover:border-[var(--accent-gold)]/40 hover:bg-[var(--accent-gold)]/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,215,0,0.08)]"
                    style={{ animation: `slideInFromRight 0.4s ease-out ${(60 + i * 50) / 1000}s forwards` }}
                  >
                    {city}
                    <svg className="h-3.5 w-3.5 text-[var(--accent-gold)]/60 transition group-hover:translate-x-0.5 group-hover:text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {CITIES.slice(3, 6).map((city, i) => (
                  <Link
                    key={city}
                    href={`/${cityToSlug(city)}-escorts`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-[13px] font-semibold text-white/90 transition-all duration-300 hover:border-[var(--accent-gold)]/40 hover:bg-[var(--accent-gold)]/10 hover:text-white hover:shadow-[0_0_20px_rgba(255,215,0,0.08)]"
                    style={{ animation: `slideInFromRight 0.4s ease-out ${(210 + i * 50) / 1000}s forwards` }}
                  >
                    {city}
                    <svg className="h-3.5 w-3.5 text-[var(--accent-gold)]/60 transition group-hover:translate-x-0.5 group-hover:text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-gold)]/40 via-[var(--accent-gold)]/15 to-transparent" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                South India
              </span>
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute bottom-0 left-0 h-28 w-28 bg-gradient-to-tr from-[var(--accent-gold)]/8 to-transparent" aria-hidden />
          <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-[var(--accent-gold)]/5 to-transparent" aria-hidden />
        </div>
      </div>
    </section>
  );
}
