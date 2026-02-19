"use client";

import { useState, useCallback, useEffect } from "react";

export type TestimonialItem = {
  name: string;
  location: string;
  occasion: string;
  duration: string;
  verified: boolean;
  story: string;
  personalStory: string;
  date: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rajesh K.",
    location: "Chennai",
    occasion: "Corporate Dinner",
    duration: "4 hours",
    verified: true,
    story: "I was nervous about attending our annual corporate dinner alone, but the companion I booked was absolutely perfect. She was professional, engaging, and helped me network effectively. The evening went much better than I expected!",
    personalStory: "I remember the night clearly—it was my first time using such a service and I was quite anxious. But from the moment I sent a message, everything felt natural and professional. The companion arrived exactly on time, dressed impeccably, and within minutes, my nervousness disappeared. She was not just beautiful but incredibly intelligent—we discussed everything from current business trends to art and culture. My colleagues were impressed, and I felt confident throughout the evening. It was exactly what I needed.",
    date: "2024",
  },
  {
    name: "Amit S.",
    location: "Bangalore",
    occasion: "Business Dinner",
    duration: "6 hours",
    verified: true,
    story: "I wanted to make my business dinner with an important client more memorable, and the companion exceeded all expectations. She was intelligent, well-spoken, and made the evening truly special. Highly recommended!",
    personalStory: "I had a crucial business dinner with a potential client from abroad, and I wanted everything to be perfect. The companion I booked was exceptional—she spoke multiple languages, understood business etiquette perfectly, and had a natural charm that made everyone comfortable. The client was so impressed that he mentioned it during our follow-up meeting! She didn't just accompany me; she enhanced the entire business relationship. That dinner led to a contract worth millions.",
    date: "2024",
  },
  {
    name: "Vikram M.",
    location: "Hyderabad",
    occasion: "Various Events",
    duration: "Multiple occasions",
    verified: true,
    story: "I've used their services several times now, and the quality is consistently outstanding. The companions are always professional, beautiful, and make any event more enjoyable. They really understand what makes good company.",
    personalStory: "I've been a regular client for over two years now, and I can honestly say that every experience has been unique and wonderful. Whether it's a quiet dinner, a social party, or just someone to talk to after a stressful day, they always deliver. What I appreciate most is how they remember my preferences and always suggest the perfect companion for each occasion. It's like having a personal concierge service that truly understands what makes good company.",
    date: "2024",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (next: number) => {
      if (next < 0) {
        setDirection("left");
        setIndex(TESTIMONIALS.length - 1);
      } else if (next >= TESTIMONIALS.length) {
        setDirection("right");
        setIndex(0);
      } else {
        setDirection(next > index ? "right" : "left");
        setIndex(next);
      }
    },
    [index]
  );

  useEffect(() => {
    const id = setInterval(() => goTo(index + 1), 8000);
    return () => clearInterval(id);
  }, [index, goTo]);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative bg-black py-12 overflow-hidden">
      <div className="kolam-border h-2 w-full opacity-50" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-10">
          <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Stories from Real People
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            These aren&apos;t just reviews—they&apos;re real experiences from people just like you
          </p>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[380px]">
          <article
            key={index}
            className="group relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[var(--accent-gold)]/50"
            style={{
              animation: direction === "right"
                ? "slideInFromRight 0.45s ease-out"
                : "slideInFromLeft 0.45s ease-out",
            }}
          >
            <div className="absolute top-6 left-6 text-6xl font-serif text-[var(--accent-gold)]/20 leading-none select-none">
              &quot;
            </div>
            <div className="p-8 sm:p-10 pl-14 sm:pl-16">
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-6 italic">
                {t.story}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                  {t.location}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                  {t.occasion}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80">
                  {t.duration}
                </span>
              </div>
              <div className="border-l-2 border-[var(--accent-gold)]/50 pl-5 py-2 bg-white/5 rounded-r-lg">
                <p className="text-xs font-semibold text-[var(--accent-gold)]/90 uppercase tracking-wider mb-2">
                  Their personal story
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  {t.personalStory}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-sm font-bold text-[var(--accent-gold)]">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">
                      {t.date} · Real experience
                    </p>
                  </div>
                </div>
                {t.verified && (
                  <span className="text-xs font-medium text-[var(--accent-gold)] border border-[var(--accent-gold)]/50 px-3 py-1.5 rounded-full">
                    Verified
                  </span>
                )}
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:text-[var(--accent-gold)]"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setDirection(i > index ? "right" : "left");
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[var(--accent-gold)]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 hover:text-[var(--accent-gold)]"
            aria-label="Next testimonial"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="kolam-border h-2 w-full opacity-50 mt-12" />
    </section>
  );
}
