"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import ImageModal from "@/components/ImageModal";
import type { Profile, EscortType, Category } from "@/lib/profileData";

const TYPE_LABELS: Record<EscortType, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

const CATEGORY_LABELS: Record<Category, string> = {
  regular: "Regular",
  artists: "Artists",
  celebrity: "Celebrity",
  models: "Models",
  housewife: "Housewife",
  "college-girls": "College Girls",
  actress: "Actress",
};

interface ProfileDetailClientProps {
  profile: Profile;
  relatedProfiles: Profile[];
}

export default function ProfileDetailClient({
  profile,
  relatedProfiles,
}: ProfileDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const typeLabel = TYPE_LABELS[profile.type];
  const categoryLabel = CATEGORY_LABELS[profile.category];
  const telegramUrl = `https://t.me/${profile.telegram}`;

  const allImages = profile.images ? [profile.image, ...profile.images] : [profile.image];

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Modern Header with Gradient */}
        <section className="relative overflow-hidden border-b border-[var(--border-color)] bg-black">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <nav className="mb-2 sm:mb-4 text-xs sm:text-sm text-white/80">
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href={`/profiles/${profile.type}/${profile.category}`}
                  className="hover:text-white transition-colors truncate max-w-[120px] sm:max-w-none"
                >
                  {categoryLabel} {typeLabel}
                </Link>
                <span>/</span>
                <span className="text-white truncate max-w-[100px] sm:max-w-none">{profile.name}</span>
              </div>
            </nav>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />
        </section>

        {/* Profile Content */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-12">
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-8 space-y-3 sm:space-y-4">
                {/* Main Image - Clickable */}
                <div
                  className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border-2 border-[var(--border-color)] shadow-2xl transition-transform hover:scale-[1.02] hover:border-[var(--accent-gold)]"
                  onClick={() => openModal(0)}
                >
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                    sizes="(max-width: 1024px) 100vw, 41vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                      Click to view gallery
                    </span>
                    {profile.verified && (
                      <div className="rounded-full bg-green-500 p-2 shadow-lg">
                        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  {profile.verified && (
                    <div className="absolute top-4 right-4 rounded-full bg-green-500 p-2 shadow-lg">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {profile.images && profile.images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {profile.images.slice(0, 4).map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => openModal(idx + 1)}
                        className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border-2 border-white/50 shadow-lg transition-all hover:border-[var(--accent-gold)] hover:scale-105"
                      >
                        <Image
                          src={img}
                          alt={`${profile.name} - Image ${idx + 2}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 1024px) 25vw, 10vw"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-7">
              {/* Header Section */}
              <div className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md p-4 sm:p-6 shadow-lg">
                <div className="mb-4 flex flex-wrap items-start gap-2 sm:gap-3">
                  <div className="flex-1 min-w-0">
                    <h1 className="mb-2 text-2xl sm:text-4xl font-bold text-[var(--accent-gold)] lg:text-5xl break-words">
                      {profile.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--accent-maroon)] px-4 py-1.5 text-sm font-semibold text-white shadow-md">
                        {categoryLabel}
                      </span>
                      {profile.verified && (
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-800">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-4">
                  <div className="rounded-lg bg-black/50 border border-[var(--border-color)] p-2 sm:p-3 text-center">
                    <div className="mb-1 flex items-center justify-center gap-1 text-[var(--accent-gold)]">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/70">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate px-1">{profile.location}</p>
                  </div>
                  <div className="rounded-lg bg-black/50 border border-[var(--border-color)] p-2 sm:p-3 text-center">
                    <div className="mb-1 flex items-center justify-center gap-1 text-[var(--accent-gold)]">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/70">Age</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">{profile.age} yrs</p>
                  </div>
                  {profile.rating && (
                    <div className="rounded-lg bg-[var(--accent-cream)]/50 p-2 sm:p-3 text-center">
                      <div className="mb-1 flex items-center justify-center gap-1 text-[var(--accent-gold)]">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <p className="text-[10px] sm:text-xs text-white/70">Rating</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {profile.rating.toFixed(1)} ⭐
                      </p>
                    </div>
                  )}
                  {profile.responseTime && (
                    <div className="rounded-lg bg-[var(--accent-cream)]/50 p-2 sm:p-3 text-center">
                      <div className="mb-1 flex items-center justify-center gap-1 text-[var(--accent-maroon)]">
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-[10px] sm:text-xs text-white/70">Response</p>
                      <p className="text-[10px] sm:text-xs font-semibold text-white truncate px-1">
                        {profile.responseTime.split(" ")[2]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Availability Badge */}
                <div className="mt-3 sm:mt-4 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-md">
                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-white"></span>
                    <span className="whitespace-nowrap">{profile.availability}</span>
                  </span>
                </div>
              </div>

              {/* Bio Card */}
              <div className="mb-6 rounded-xl sm:rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md p-4 sm:p-6 lg:p-8 shadow-lg">
                <div className="mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="h-1 w-8 sm:w-12 bg-[var(--accent-gold)]"></div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[var(--accent-gold)]">
                    About {profile.name}
                  </h2>
                </div>
                <p className="mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl font-medium text-white leading-relaxed">
                  {profile.tagline}
                </p>
                <p className=" text-sm sm:text-base leading-relaxed text-white/70">
                  {profile.bio}
                </p>
              </div>

              {/* Languages & Services */}
              <div className="mb-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md p-4 sm:p-6 shadow-md">
                  <h3 className="mb-3 sm:mb-4  text-base sm:text-lg font-semibold text-white">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full border border-[var(--border-color)] bg-black/50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white/70"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {profile.services && profile.services.length > 0 && (
                  <div className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md p-4 sm:p-6 shadow-md">
                    <h3 className="mb-3 sm:mb-4  text-base sm:text-lg font-semibold text-white">
                      Services
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-[var(--accent-gold)] bg-[var(--accent-sandal)]/50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Telegram CTA - Modern Design */}
              <div className="mb-6 sm:mb-8 overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0088cc] via-[#0066aa] to-[#0088cc] p-4 sm:p-6 lg:p-8 shadow-2xl">
                <div className="text-center">
                  <div className="mb-3 sm:mb-4 inline-flex items-center justify-center rounded-full bg-[var(--accent-gold)]/20 p-2 sm:p-3 backdrop-blur-sm">
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <h3 className="mb-2  text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    Ready to connect with {profile.name}?
                  </h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white/90">
                    Send a message directly on Telegram - quick and easy!
                  </p>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 sm:gap-3 rounded-lg sm:rounded-xl bg-white px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-bold text-[#0088cc] shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Chat on Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Profiles */}
          {relatedProfiles.length > 0 && (
            <div className="mt-8 sm:mt-12 lg:mt-16 border-t border-[var(--border-pattern)] pt-6 sm:pt-8 lg:pt-12">
              <div className="mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <div className="h-1 w-12 sm:w-16 bg-[var(--accent-gold)]"></div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--accent-gold)]">
                  You May Also Like
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 md:grid-cols-4">
                {relatedProfiles.map((related) => (
                  <ProfileCard key={related.id} profile={related} showCategory />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Image Modal */}
      <ImageModal
        images={allImages}
        currentIndex={modalIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        profileName={profile.name}
      />
    </>
  );
}
