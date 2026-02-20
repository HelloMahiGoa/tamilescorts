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
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const typeLabel = TYPE_LABELS[profile.type];
  const categoryLabel = CATEGORY_LABELS[profile.category];
  const telegramUrl = `https://t.me/${profile.telegram}`;

  // Filter out images that failed to load
  const availableGalleryImages = profile.images?.filter(img => !failedImages.has(img)) || [];
  const allImages = [profile.image, ...availableGalleryImages];

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Breadcrumb Navigation */}
        <section className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="text-xs sm:text-sm text-white/60">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  href={`/profiles/${profile.type}/${profile.category}`}
                  className="hover:text-white transition-colors"
                >
                  {categoryLabel} {typeLabel}
                </Link>
                <span>/</span>
                <span className="text-white">{profile.name}</span>
              </div>
            </nav>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Images */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-8 space-y-4">
                {/* Main Image */}
                <div
                  className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl transition-all hover:border-[var(--accent-gold)]/30 hover:shadow-[0_0_40px_rgba(255,215,0,0.1)]"
                  onClick={() => openModal(0)}
                >
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 41vw"
                    unoptimized={profile.image.startsWith("/images/")}
                  />
                  {profile.verified && (
                    <div className="absolute top-4 right-4 rounded-full bg-green-500/90 backdrop-blur-md p-2 shadow-lg">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-medium text-white">
                      View gallery
                    </span>
                  </div>
                </div>

                {/* Thumbnail Gallery - Display all available images */}
                {availableGalleryImages.length > 0 && (
                  <div 
                    className="grid grid-cols-4 gap-2 max-h-[400px] overflow-y-auto pr-1"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: 'rgba(255, 215, 0, 0.3) transparent'
                    }}
                  >
                    {availableGalleryImages.map((img, idx) => {
                      // Find the original index in profile.images for modal navigation
                      const originalIndex = profile.images?.indexOf(img) ?? idx;
                      return (
                        <div
                          key={img}
                          onClick={() => openModal(originalIndex + 1)}
                          className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all hover:border-[var(--accent-gold)]/50 hover:scale-105"
                        >
                          <Image
                            src={img}
                            alt={`${profile.name} - Image ${originalIndex + 2}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 1024px) 25vw, 10vw"
                            unoptimized={img.startsWith("/images/")}
                            onError={() => {
                              setFailedImages(prev => new Set(prev).add(img));
                            }}
                          />
                          {/* Image number badge */}
                          <div className="absolute top-1 right-1 rounded-full bg-black/60 backdrop-blur-sm px-1.5 py-0.5 text-[10px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            {originalIndex + 2}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-7">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex flex-wrap items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h1 className="mb-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                      {profile.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/30 px-3 py-1 text-sm font-medium text-[var(--accent-gold)]">
                        {categoryLabel}
                      </span>
                      {profile.verified && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 border border-green-500/30 px-3 py-1 text-sm font-medium text-green-400">
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

                {/* Quick Info */}
                <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="mb-1 text-xs text-white/60 uppercase tracking-wide">Location</p>
                    <p className="text-sm font-semibold text-white">{profile.location}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="mb-1 text-xs text-white/60 uppercase tracking-wide">Age</p>
                    <p className="text-sm font-semibold text-white">{profile.age} years</p>
                  </div>
                  {profile.rating && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="mb-1 text-xs text-white/60 uppercase tracking-wide">Rating</p>
                      <p className="text-sm font-semibold text-white">
                        {profile.rating.toFixed(1)} ⭐
                      </p>
                    </div>
                  )}
                  {profile.responseTime && (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="mb-1 text-xs text-white/60 uppercase tracking-wide">Response</p>
                      <p className="text-xs font-semibold text-white truncate">
                        {profile.responseTime.split(" ")[2] || profile.responseTime}
                      </p>
                    </div>
                  )}
                </div>

                {/* Availability */}
                <div className="mb-6 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-500/30 px-4 py-2 text-sm font-medium text-green-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                    {profile.availability}
                  </span>
                </div>
              </div>

              {/* Pricing Section */}
              {profile.price && (
                <div className="mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm">
                  <h2 className="mb-4 text-xl font-semibold text-white">Rates</h2>
                  <div className="space-y-3">
                    {profile.price.hourly && (
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">Per Hour</p>
                          <p className="text-xs text-white/60">Short meetings, dinner dates</p>
                        </div>
                        <p className="text-lg font-bold text-[var(--accent-gold)]">
                          {formatPrice(profile.price.hourly)}
                        </p>
                      </div>
                    )}
                    {profile.price.overnight && (
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">Overnight</p>
                          <p className="text-xs text-white/60">Extended evening arrangements</p>
                        </div>
                        <p className="text-lg font-bold text-[var(--accent-gold)]">
                          {formatPrice(profile.price.overnight)}
                        </p>
                      </div>
                    )}
                    {profile.price.extended && (
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">Extended</p>
                          <p className="text-xs text-white/60">Multi-day arrangements</p>
                        </div>
                        <p className="text-lg font-bold text-[var(--accent-gold)]">
                          {formatPrice(profile.price.extended)}
                        </p>
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-xs text-white/50 italic">
                    Rates may vary based on location and specific requirements. Please discuss details when you connect.
                  </p>
                </div>
              )}

              {/* About Section */}
              <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h2 className="mb-3 text-xl font-semibold text-white">About {profile.name}</h2>
                <p className="mb-4 text-lg font-medium text-white/90 leading-relaxed">
                  {profile.tagline}
                </p>
                <p className="text-base leading-relaxed text-white/70">
                  {profile.bio}
                </p>
              </div>

              {/* Languages & Services */}
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="mb-3 text-base font-semibold text-white">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {profile.services && profile.services.length > 0 && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <h3 className="mb-3 text-base font-semibold text-white">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {profile.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 px-3 py-1.5 text-sm text-[var(--accent-gold)]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact CTA */}
              <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-gradient-to-br from-[var(--accent-gold)]/10 to-[var(--accent-gold)]/5 p-8 backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Interested in connecting with {profile.name}?
                  </h3>
                  <p className="mb-6 text-base text-white/80">
                    Send a message on Telegram to discuss availability and arrangements. All conversations are private and discreet.
                  </p>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-[#0088cc] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0066aa] hover:scale-105 hover:shadow-xl"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Message on Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Profiles */}
          {relatedProfiles.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="mb-8 text-2xl font-bold text-white">You may also like</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
