"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { getProfilesByTypeAndCategory, type EscortType, type Category } from "@/lib/profileData";

const TABS = [
  {
    id: "tamil",
    label: "Tamil Escorts",
    description:
      "Meet genuine Tamil escorts who bring warmth and culture to every moment. From Chennai to Coimbatore, find someone who gets you.",
  },
  {
    id: "mallu",
    label: "Mallu Escorts",
    description:
      "Kerala’s charm, right here. Friendly, down-to-earth Mallu escorts for good conversation and memorable times—no fuss, just real connection.",
  },
  {
    id: "telugu",
    label: "Telugu Escorts",
    description:
      "Telugu company that feels like home. Whether you’re in Hyderabad or elsewhere, connect with someone who’s easy to talk to and great to be around.",
  },
  {
    id: "kannada",
    label: "Kannada Escorts",
    description:
      "Bangalore and beyond—warm, grounded Kannada escorts who know how to make an evening feel relaxed and special. Real people, real vibes.",
  },
] as const;

const CATEGORIES = ["Regular", "Housewife", "College Girls", "Models", "Artists", "Celebrity", "Actress"];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Regular:
    "Our regular escorts are everyday, approachable people who are easy to talk to and great company. There’s no pretense here—just real people you can relax with, whether you want a quiet dinner, a night out, or someone to talk to. They come from all walks of life and know how to make you feel at ease. Many of our clients come back again and again because the vibe is natural and the connection feels genuine.",
  Artists:
    "Creative souls from the arts—dancers, musicians, and performers—who bring something extra to every meeting. If you enjoy culture, conversation, and a bit of flair, you’ll feel right at home here. These escorts often have stories from the stage or studio and love talking about their craft. Whether you’re into music, dance, or visual arts, you’ll find someone who gets it and can make an evening feel more than ordinary.",
  Celebrity:
    "High-profile escorts who understand discretion and how to keep things special. They’re used to attention and know how to handle it with grace. Ideal when you want someone who gets the spotlight, values privacy, and can accompany you to events or private moments without any fuss. Everything stays between you and them, and the focus is on making your time together memorable and stress-free.",
  Models:
    "Fashion-forward, photogenic escorts with a strong presence and an eye for style. They’re used to being in front of the camera and in social settings, so they’re confident and easy to be around. Perfect for events, dinners, or when you simply want someone who turns heads and knows how to carry themselves. Many have worked in fashion or modelling and bring that polish and poise to every meeting.",
  Housewife:
    "Mature, grounded escorts who bring warmth and life experience to the table. They’re discreet, understanding, and often great listeners—the kind of company that feels comfortable and safe. Many clients appreciate their down-to-earth nature and the fact that there’s no drama, just good conversation and a relaxed vibe. They know how to read a room and make you feel at ease, whether it’s a short meet or a longer arrangement.",
  "College Girls":
    "Young, fresh, and full of energy—students and young professionals who are fun to be around and up for a good time. They bring a lively, modern outlook and are usually easy to chat with about anything from studies to travel to nightlife. If you’re looking for someone youthful, open-minded, and easygoing, this category has plenty to offer. Perfect for casual outings, events, or simply someone to spend time with.",
  Actress:
    "Screen and stage talent—expressive, confident, and used to making every moment feel like a scene worth remembering. These escorts often have training in performance and know how to hold a conversation, read the room, and keep things interesting. Whether you want someone for a high-profile event or a private evening, they bring presence and charm. Many clients love the blend of creativity and discretion that comes with this category.",
};

const CATEGORY_TO_SLUG: Record<string, Category> = {
  Regular: "regular",
  Artists: "artists",
  Celebrity: "celebrity",
  Models: "models",
  Housewife: "housewife",
  "College Girls": "college-girls",
  Actress: "actress",
};

export default function IntroSection() {
  const [activeTab, setActiveTab] = useState<string>("tamil");
  const [activeCategory, setActiveCategory] = useState<string | null>("Regular"); // Default to Regular
  const activeTabData = TABS.find((t) => t.id === activeTab) ?? TABS[0];

  // Get profiles for the active tab and category - ensure stable order
  const profiles = useMemo(() => {
    if (!activeCategory) return [];
    const categorySlug = CATEGORY_TO_SLUG[activeCategory];
    if (!categorySlug) return [];
    const filtered = getProfilesByTypeAndCategory(activeTab as EscortType, categorySlug);
    // Sort by id to ensure consistent order, then slice
    return filtered.sort((a, b) => a.id.localeCompare(b.id)).slice(0, 6);
  }, [activeTab, activeCategory]);

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <div className="mb-6 inline-block h-0.5 w-24 bg-[var(--accent-gold)]" />
          
          {/* Main Heading - Unique & Stylish Design */}
          <div className="mb-10 relative">
            {/* Decorative top elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-60">
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-[var(--accent-gold)]"></div>
              <div className="relative">
                <div 
                  className="h-2 w-2 rounded-full bg-[var(--accent-gold)] animate-pulse"
                  style={{ animation: "pulse 2s ease-in-out infinite" }}
                ></div>
                <div 
                  className="absolute inset-0 h-2 w-2 rounded-full bg-[var(--accent-gold)] opacity-50"
                  style={{ animation: "pulse 2s ease-in-out infinite 0.5s" }}
                ></div>
              </div>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-[var(--accent-gold)]"></div>
            </div>

            <h1 
              className="relative inline-block mb-4"
              style={{
                fontFamily: "var(--font-playfair), serif",
                animation: "fadeInUp 1s ease-out",
              }}
            >
              {/* Main text with layered effects */}
              <span className="relative inline-block">
                {/* Shadow layer */}
                <span 
                  className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight opacity-20 blur-sm"
                  style={{
                    transform: "translate(4px, 4px)",
                    color: "var(--accent-gold)",
                  }}
                >
                  South Indian Escorts
                </span>
                
                {/* Main gradient text */}
                <span 
                  className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-light) 50%, var(--accent-gold) 100%)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gradientShift 4s ease infinite, shimmerText 3s linear infinite",
                    letterSpacing: "-0.03em",
                    filter: "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))",
                  }}
                >
                  South Indian Escorts
                </span>
                
                {/* Shimmer overlay */}
                <span 
                  className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shimmerText 3s linear infinite",
                    letterSpacing: "-0.03em",
                  }}
                >
                  South Indian Escorts
                </span>
              </span>
            </h1>

            {/* Decorative elements below */}
            <div className="relative flex items-center justify-center gap-2 mt-4">
              {/* Left decorative line */}
              <div className="flex-1 max-w-[100px] sm:max-w-[150px]">
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent"></div>
                <div className="h-0.5 bg-gradient-to-r from-transparent to-[var(--accent-gold)]/50 mt-0.5"></div>
              </div>
              
              {/* Center decorative element */}
              <div className="relative">
                <div 
                  className="h-3 w-3 rounded-full border-2 border-[var(--accent-gold)] animate-spin"
                  style={{ 
                    animation: "rotateBorder 8s linear infinite",
                    borderStyle: "dashed",
                  }}
                ></div>
                <div className="absolute inset-0 h-3 w-3 rounded-full border border-[var(--accent-gold)]/50 opacity-50"></div>
              </div>
              
              {/* Right decorative line */}
              <div className="flex-1 max-w-[100px] sm:max-w-[150px]">
                <div className="h-px bg-gradient-to-l from-transparent via-[var(--accent-gold)] to-transparent"></div>
                <div className="h-0.5 bg-gradient-to-l from-transparent to-[var(--accent-gold)]/50 mt-0.5"></div>
              </div>
            </div>

            {/* Floating accent dots */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block">
              <div 
                className="h-2 w-2 rounded-full bg-[var(--accent-gold)] opacity-60"
                style={{ animation: "float 3s ease-in-out infinite" }}
              ></div>
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block">
              <div 
                className="h-2 w-2 rounded-full bg-[var(--accent-gold)] opacity-60"
                style={{ animation: "float 3s ease-in-out infinite 1.5s" }}
              ></div>
            </div>
          </div>

          {/* Modern Tabs with Sliding Indicator */}
          <div className="mb-10 relative">
            <div className="relative inline-flex flex-wrap justify-center gap-2 sm:gap-3 rounded-2xl bg-[var(--card-bg)] backdrop-blur-md p-2 shadow-2xl border border-[var(--border-color)]">
              {TABS.map((tab, index) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className="relative z-10 rounded-xl px-5 py-3 sm:px-6 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 ease-out"
                  style={{
                    color: activeTab === tab.id ? "white" : "white/70",
                  }}
                >
                  <span className="relative z-10">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-gold-light)] to-[var(--accent-gold)] shadow-lg shadow-[var(--accent-gold)]/30 animate-scale-in"
                      style={{
                        animation: "scaleIn 0.3s ease-out",
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl shimmer-effect opacity-50"></div>
                    </div>
                  )}
                  {activeTab !== tab.id && (
                    <div className="absolute inset-0 rounded-xl bg-transparent transition-all duration-300 hover:bg-white/10"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-[var(--accent-gold)] sm:text-5xl lg:text-6xl">
            {activeTabData.label}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-white/70 sm:text-2xl">
            {activeTabData.description}
          </p>

          {/* Modern Animated Categories with Flowing Arrows - 2 lines on mobile, single line on desktop */}
          <div className="mt-10 flex flex-wrap sm:flex-nowrap justify-center items-center gap-1.5 sm:gap-1 md:gap-1.5 lg:gap-2 sm:overflow-x-auto sm:pb-2 scrollbar-hide">
            {CATEGORIES.map((label, index) => (
              <div key={label} className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    const newCategory = activeCategory === label ? null : label;
                    setActiveCategory(newCategory);
                  }}
                  className="group relative"
                  style={{
                    animation: `slideIn 0.4s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-full border-2 px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 text-xs sm:text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 ease-out transform flex-shrink-0 whitespace-nowrap ${
                      activeCategory === label
                        ? "border-[var(--accent-gold)] bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-gold-light)] text-black shadow-lg shadow-[var(--accent-gold)]/40 scale-110"
                        : "border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md text-white/70 hover:border-[var(--accent-gold)] hover:bg-[var(--card-bg)] hover:text-white hover:shadow-md hover:scale-105 hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Shimmer effect for active */}
                    {activeCategory === label && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                    
                    {/* Glow effect for active */}
                    {activeCategory === label && (
                      <div className="absolute inset-0 rounded-full bg-[var(--accent-gold)] opacity-20 blur-xl -z-10 animate-pulse"></div>
                    )}
                    
                    <span className="relative z-10 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      {label}
                      {activeCategory === label && (
                        <svg
                          className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 animate-scale-in"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          style={{ animation: "scaleIn 0.3s ease-out" }}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                    
                    {/* Ripple effect on click */}
                    <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 opacity-0 group-active:opacity-100 transition-all duration-300"></span>
                  </div>
                </button>
                
                {/* Flowing Arrow between categories - hide on mobile when wrapping */}
                {index < CATEGORIES.length - 1 && (
                  <div className="hidden sm:block relative mx-0.5 sm:mx-1 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex items-center justify-center flex-shrink-0">
                    {/* Continuous flowing arrow animation */}
                    <svg
                      className="absolute h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[var(--accent-gold)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      style={{
                        animation: `continuousFlow 2s ease-in-out infinite`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {/* Secondary arrow for flow effect */}
                    <svg
                      className="absolute h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[var(--accent-gold)] opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{
                        animation: `continuousFlow 2s ease-in-out infinite`,
                        animationDelay: `${index * 0.2 + 0.5}s`,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    {/* Glow trail effect */}
                    <div
                      className="absolute h-0.5 w-6 sm:h-1 sm:w-8 md:w-10 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-40 blur-sm"
                      style={{
                        animation: `continuousFlow 2s ease-in-out infinite`,
                        animationDelay: `${index * 0.2 + 0.25}s`,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Category detail: paragraph + placeholder images */}
          {activeCategory && (
            <div
              className="mt-12 border-t border-[var(--border-color)] pt-12 text-center animate-slide-in"
              style={{ animation: "slideIn 0.5s ease-out" }}
            >
              <p className="mx-auto max-w-3xl text-lg text-white/80 leading-relaxed">
                {CATEGORY_DESCRIPTIONS[activeCategory]}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3">
                {profiles.length === 0 ? (
                  <div className="col-span-full py-8 text-center">
                    <p className="text-lg text-white/70">
                      No profiles available in this category.
                    </p>
                    <Link
                      href={`/profiles/${activeTab}/${CATEGORY_TO_SLUG[activeCategory]}`}
                      className="mt-4 inline-block text-[var(--accent-gold)] hover:underline"
                    >
                      View all profiles →
                    </Link>
                  </div>
                ) : (
                  profiles.map((profile, idx) => (
                    <Link
                      key={profile.id}
                      href={`/profiles/${profile.type}/${profile.category}/${profile.id}`}
                      className="group relative aspect-[3/4] overflow-hidden rounded-xl border-2 border-[var(--border-color)] bg-black/50 shadow-lg transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-xl hover:scale-105"
                      style={{
                        animation: `scaleIn 0.4s ease-out ${idx * 0.1}s both`,
                      }}
                    >
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      {/* Name tag: always visible at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-3">
                        <span className="text-lg font-semibold text-white drop-shadow-sm">
                          {profile.name}
                        </span>
                      </div>
                      {/* Hover overlay: profile details */}
                      <div className="absolute inset-0 flex flex-col justify-end bg-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex flex-1 flex-col justify-center p-4 text-center text-white">
                          <p className="text-2xl font-semibold">{profile.name}</p>
                          <p className="mt-1 text-sm text-white/90">
                            {profile.age} yrs · {profile.location}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-white/80">
                            {profile.tagline}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
