import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";
import { getCategoryPagePath, type CategorySlug } from "@/lib/categories";
import DailyProfilesSection from "@/components/DailyProfilesSection";

const base = getBaseUrl();
const url = `${base}/chennai-escorts`;

function buildChennaiJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Tamil Escorts in Chennai", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: metaTitle,
      description: metaDescription,
      mainEntity: [{ "@id": localBusinessId }, { "@id": faqId }],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: "Tamil Escorts in Chennai",
      description: "Tamil escorts in Chennai and Chennai Tamil escorts. Outcall to Nungambakkam, T Nagar, OMR, Guindy, Adyar. Mallu, Telugu and Kannada companions. We keep it private.",
      url,
      image: `${base}/images/2.avif`,
      priceRange: "₹₹ - ₹₹₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
      },
      areaServed: { "@type": "City", name: "Chennai", containedInPlace: { "@type": "State", name: "Tamil Nadu" } },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
}

const metaTitle = "Tamil Escorts in Chennai | Chennai Tamil Escorts – Outcall";
const metaDescription =
  "Tamil escorts in Chennai and Chennai Tamil escorts. Outcall to Nungambakkam, T Nagar, OMR, Guindy, Adyar. We keep it private. Mallu, Telugu and Kannada too. Pay when you meet.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Tamil escorts in Chennai",
    "Chennai Tamil escorts",
    "Chennai Tamil escort",
    "Tamil escort Chennai",
    "Chennai escorts",
    "escorts in Chennai",
    "Chennai escort service",
    "Tamil escort service Chennai",
    "Nungambakkam escorts",
    "T Nagar escorts",
    "OMR escorts",
    "Guindy escorts",
    "Adyar escorts",
    "Velachery escorts",
    "ECR escorts",
    "outcall Chennai",
    "outcall escorts Chennai",
    "Mallu escorts Chennai",
    "housewife escorts Chennai",
    "college girls escorts Chennai",
    "model escorts Chennai",
    "escort service Nungambakkam",
    "escorts OMR Chennai",
    "hotel escort Chennai",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url,
    siteName: "Tamil Escorts",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: `${base}/images/2.avif`, width: 1200, height: 630, alt: "Tamil escorts in Chennai – outcall in Nungambakkam, T Nagar, OMR" }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
  alternates: { canonical: url },
  robots: { index: true, follow: true },
};

const TRUST_ITEMS = [
  { label: "Private", icon: "🔒" },
  { label: "Pay When You Meet", icon: "💵" },
  { label: "24/7", icon: "🕐" },
  { label: "No Advance (Regular)", icon: "✓" },
];

const POPULAR_AREAS = [
  { name: "Nungambakkam", slug: "nungambakkam", desc: "Hotels & central" },
  { name: "T Nagar", slug: "t-nagar", desc: "Most hotel bookings" },
  { name: "OMR", slug: "omr", desc: "IT & corporate" },
  { name: "Guindy", slug: "guindy", desc: "Business district" },
  { name: "Adyar", slug: "adyar", desc: "Residential & hotels" },
  { name: "Velachery", slug: "velachery", desc: "South Chennai" },
];

const MORE_AREAS = [
  { name: "Egmore", slug: "egmore" },
  { name: "Anna Nagar", slug: "anna-nagar" },
  { name: "Porur", slug: "porur" },
  { name: "Chrompet", slug: "chrompet" },
  { name: "Tambaram", slug: "tambaram" },
  { name: "ECR", slug: "ecr" },
];

const HOW_IT_WORKS = [
  { step: 1, title: "Contact Us", body: "Message us on Telegram with your area, when you need someone, and what you have in mind. We'll ask the basics—hotel or your place, type (Tamil, Mallu, regular, model, etc.)." },
  { step: 2, title: "We Suggest Who's Free", body: "We'll tell you who can reach you on time. If you're at a hotel we need proof and room details; you give her name at reception before she leaves." },
  { step: 3, title: "She Comes to You", body: "Outcall only. She'll turn up at the agreed time. Have address and gate/lobby details ready. Payment when she's there—cash or UPI. No advance for regular, housewife, college-girl profiles." },
];

const WHY_CHOOSE = [
  { title: "No Advance for Regular", body: "For regular, housewife and college-girl we don't take advance. We need hotel proof and room details, and you give her name at reception. You pay when she reaches you." },
  { title: "We Keep It Private", body: "We don't share your number. The women we work with don't post or talk about clients. Your booking stays between you and us." },
  { title: "You Talk to a Person", body: "No bots or long forms. You message us on Telegram; someone who handles Chennai bookings replies. Usually quick." },
  { title: "Pay When You Meet", body: "Cash or UPI when she's there. For models and above we take a small advance; the rest when she arrives." },
];

const SERVICE_TYPES = [
  { title: "Short time", desc: "A few hours at your hotel or place. Most business travelers book this. Pay when she arrives; no advance for regular and housewife." },
  { title: "Dinner or event", desc: "Plus-one for a client dinner in Guindy or T Nagar, or company for an evening. We'll see who's free and fits." },
  { title: "Full night", desc: "Longer—dinner plus the night. Give us a bit of notice so we can confirm who's free. Same payment: cash or UPI when she's there." },
  { title: "Travel companion", desc: "Outstation (Pondicherry, Mahabs, Coorg) needs advance booking. Not everyone does it; we'll check when you ask." },
];

const WHO_BOOKS = [
  { title: "Business travelers", body: "In town for a few days, hotel on OMR or Nungambakkam. Don't want to eat alone or sit in a room. Want company for an evening or a few hours." },
  { title: "Locals", body: "Live in Chennai and want company for an evening—dinner, event, or a few hours. Same process: you tell us area, when and type; we fix someone who can come." },
  { title: "Events and client dinners", body: "Need a plus-one for a corporate dinner or client meet in T Nagar or Guindy. We send someone who can hold their own at the table." },
];

const WHAT_TO_EXPECT = [
  { step: "You message", text: "Tell us your area, when you need someone, and what you have in mind (Tamil, Mallu, regular, model, dinner, short time, etc.)." },
  { step: "We confirm", text: "We tell you who's free and can reach you. If you're at a hotel we need proof and room details; you give her name at reception." },
  { step: "She arrives", text: "Outcall only—she comes to you. You pay when she's there, cash or UPI. No advance for regular, housewife, college-girl." },
  { step: "After", text: "We don't share your number or keep your details. Your booking stays between you and us." },
];

const FAQ_ITEMS = [
  { q: "What areas in Chennai do you cover?", a: "We cover Nungambakkam, T Nagar, OMR, Guindy, Adyar, Velachery, Egmore, Anna Nagar, Porur, Chrompet, Tambaram, ECR and the rest of the city. Tell us your location when you book and we'll fix someone who can reach you on time." },
  { q: "Do I need to pay advance?", a: "For regular, housewife and college-girl profiles—no advance. We need hotel proof and room details if you're at a hotel, and you give her name at reception before she starts. For models, artists, celebrity and actress we take a small advance (10% or 20%); the rest when she arrives." },
  { q: "How do I book a Chennai escort?", a: "Message us on Telegram. Tell us your area, when you need someone, and what you're looking for (Tamil, Mallu, regular, model, etc.). We'll suggest who's free. Same-day and advance bookings both work." },
  { q: "Is my information kept private?", a: "Yes. We don't share your number with the women we work with. We don't store or share your details. Everything goes through us." },
  { q: "Outcall or incall in Chennai?", a: "We do outcall only in Chennai—she comes to your hotel or your place. Have the address and any gate or lobby instructions ready so there's no back-and-forth." },
  { q: "Are Chennai escorts verified?", a: "We check profiles before we list them. You get real photos and real people. No fakes. If something isn't right on the day, tell us—we take feedback seriously." },
  { q: "What is the best area for hotel bookings in Chennai?", a: "Nungambakkam and T Nagar get the most hotel bookings—central, plenty of hotels, easy for us to send someone. OMR and Guindy are popular with business travelers. Adyar, Velachery and Egmore work well too. Tell us your hotel area and we'll match someone who can reach you on time." },
  { q: "Can I book Tamil escorts in Chennai?", a: "Yes. We have Tamil escorts in Chennai and Chennai Tamil escorts, and Mallu, Telugu and Kannada too. Tell us your preference—language or type (regular, housewife, model, etc.)—and we'll suggest who's free." },
];

const CHENNAI_CATEGORIES: { slug: CategorySlug; label: string; line: string }[] = [
  { slug: "regular", label: "Regular Escorts", line: "Most bookings in Chennai are regular. No advance; we need hotel proof and room details if you're at a hotel." },
  { slug: "housewife", label: "Housewife Escorts", line: "Easy to talk to. Same deal—pay when she arrives." },
  { slug: "college-girls", label: "College Girls", line: "For dinners and evenings. Outcall to your hotel or your place." },
  { slug: "models", label: "Models", line: "For client dinners and events. Small advance; rest when she arrives." },
];

export default function ChennaiEscortsPage() {
  const jsonLd = buildChennaiJsonLd();
  return (
    <main id="main-content" className="min-h-screen bg-black">
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      {/* Hero – full width, hero-desktop / hero-mobile, unique & stylish */}
      <header className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden">
        {/* Desktop background */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/2.avif"
            alt="Tamil escorts in Chennai – outcall in Nungambakkam, T Nagar, OMR"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, transparent 55%), linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 50%)",
            }}
          />
        </div>
        {/* Mobile background */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/actress-escorts.avif"
            alt="Chennai escorts – outcall to your hotel or place"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 pb-24 pt-20 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-7xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[var(--accent-gold)] transition-colors mb-8 tracking-wide uppercase"
            >
              <span aria-hidden>←</span> Home
            </Link>

            <div className="max-w-2xl md:max-w-xl lg:max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.3em] text-[var(--accent-gold)] uppercase mb-4">
                Chennai
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Tamil Escorts in Chennai
              </h1>
              <div className="mt-6 h-px w-16 bg-[var(--accent-gold)]" />
              <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
                Chennai Tamil escorts. Outcall to your hotel or your place—Nungambakkam, T Nagar, OMR, Guindy, Adyar and the rest of the city.
              </p>
              <a
                href="#daily-available"
                className="hero-cta-btn group mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-[var(--accent-gold)] bg-[var(--accent-gold)]/15 px-6 py-3.5 text-base font-semibold text-[var(--accent-gold)] transition-all duration-300 hover:bg-[var(--accent-gold)] hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent-gold)]/30"
              >
                <svg className="h-5 w-5 animate-bounce-slow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span>Available Today</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <p className="mt-6 text-xs text-white/50 uppercase tracking-wider">
                Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="relative z-10 w-full border-t border-white/10 bg-black/75 backdrop-blur-md">
          <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-white/90">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* SEO: keyword-rich one-liner + internal links (homepage-style) */}
      <section className="border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8" aria-label="About Tamil escorts in Chennai">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Tamil escorts in Chennai and Chennai Tamil escorts. Outcall in Nungambakkam, T Nagar, OMR, Guindy, Adyar and the rest of Chennai. Mallu, Telugu and Kannada too. We keep it private. Pay when you meet.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog" className="text-[var(--accent-gold)] hover:underline">
              Blog & guides
            </Link>
            <Link href="/categories" className="text-[var(--accent-gold)] hover:underline">
              Service categories
            </Link>
            <Link href="/contact" className="text-[var(--accent-gold)] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Intro – left image (gradient animation), right content */}
      <section className="w-full border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
          {/* Left: image with gradient animation */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden bg-black">
            <Image
              src="/images/artists-escorts.avif"
              alt="Tamil escorts in Chennai – Tamil, Mallu, Telugu and Kannada companions for outcall"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div
              className="intro-image-gradient-overlay absolute inset-0 z-10"
              aria-hidden
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Tamil Escorts in Chennai – Outcall to Your Hotel or Place
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/85 mb-4">
              Most of our bookings are in Chennai—hotels in Nungambakkam or OMR, or your place. We don't do pay-first-and-hope-someone-shows-up. You tell us your area, what kind of evening you want, and when. We tell you who's free and can reach you.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/85 mb-4">
              Outcall only—she comes to your hotel or your place. We don't share your number; the women we work with don't post or talk about clients. You pay when she arrives, cash or UPI. For regular, housewife and college-girl we don't take advance; we just need hotel proof and room details if you're at a hotel, and you give her name at reception before she starts. For models, artists, celebrity and actress we take a small advance; the rest when she's there.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/85">
              Lots of our clients are in town for work—a few days, don't want to eat alone or sit in a room. Some need a plus-one for a client dinner in Guindy or T Nagar. Some want company for an evening. Same process: you book, we fix someone, you pay when she's there.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What If Booking Just Worked? – card */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-[var(--accent-gold)]/25 bg-black/50 px-6 sm:px-10 py-10 sm:py-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/60 to-transparent" aria-hidden />
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              How we work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Booking Escorts in Chennai
            </h2>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-4">
              No fakes. No pay-first-and-pray. You tell us what you want—area, when, type (Tamil, Mallu, regular, model). We sort the rest. You talk to us on Telegram. Pay when you meet. We don't share your details.
            </p>
            <p className="text-white/70 text-sm sm:text-base">
              Same process every time: you message, we confirm who can come, she turns up, you pay when she's there.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <DailyProfilesSection citySlug="chennai-escorts" basePath="/chennai-escorts" />
      </Suspense>

      {/* Section 3: Popular Areas – card + label */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Popular Areas in Chennai
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We cover central Chennai, OMR, and the suburbs. Tell us your location when you book and we'll fix someone who can reach you on time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {POPULAR_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/${area.slug}-escorts`}
              className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[var(--accent-gold)]/40 hover:bg-white/[0.06] transition-colors"
            >
              <h3 className="text-lg font-bold text-white">{area.name}</h3>
              <p className="text-sm text-white/60 mt-1">{area.desc}</p>
            </Link>
          ))}
        </div>
          <div className="rounded-xl border border-white/10 bg-black/30 px-6 py-5 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-3">
              More Areas
            </h3>
            <p className="text-center text-white/70">
              {MORE_AREAS.map((area, i) => (
                <span key={area.slug}>
                  <Link
                    href={`/${area.slug}-escorts`}
                    className="text-white/85 hover:text-[var(--accent-gold)] hover:underline transition-colors"
                  >
                    {area.name}
                  </Link>
                  {i < MORE_AREAS.length - 1 ? " • " : ""}
                </span>
              ))}
            </p>
            <p className="text-white/60 text-sm text-center mt-4 max-w-xl mx-auto">
              Nungambakkam and T Nagar get the most hotel bookings. OMR and Guindy are big for IT and corporate. Adyar, Velachery, Anna Nagar and Egmore are a mix of hotels and residential. Wherever you are, give us the area and we'll sort it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How it Works – card + label */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Three steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How It Works
            </h2>
            <p className="text-white/70">
              Three steps to book in Chennai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 text-center hover:border-[var(--accent-gold)]/40 transition-colors">
                <div className="w-14 h-14 rounded-full border-2 border-[var(--accent-gold)]/60 bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              The difference
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Why Choose Us?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              No advance for regular. We keep it private. You talk to us, we fix someone.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <div className="w-10 h-px bg-[var(--accent-gold)]/50 mb-3" aria-hidden />
                <h3 className="text-base font-bold text-[var(--accent-gold)] mb-2">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Browse by type */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By type
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Browse by Type
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
            Tamil, Mallu, Telugu and Kannada escorts in Chennai. Pick a type to see categories—regular, housewife, college girls, models, artists, celebrity, actress.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href: "/tamil-escorts", label: "Tamil Escorts" },
              { href: "/mallu-escorts", label: "Mallu Escorts" },
              { href: "/telugu-escorts", label: "Telugu Escorts" },
              { href: "/kannada-escorts", label: "Kannada Escorts" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-5 px-4 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10 transition-all text-base font-semibold text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link href="/categories" className="inline-block mt-6 text-[var(--accent-gold)] font-medium hover:underline text-sm">
            View all categories →
          </Link>
          </div>
        </div>
      </section>

      {/* Tamil, Mallu, Telugu & Kannada Escorts in Chennai – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Tamil Mallu Telugu Kannada escorts Chennai">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By language
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Tamil, Mallu, Telugu & Kannada Escorts in Chennai
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
            We have companions who speak Tamil, Malayalam, Telugu and Kannada. A lot of clients in Chennai want someone they can talk to in their language—for dinner, an event, or an evening at your hotel or place.
          </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/tamil-escorts", label: "Tamil Escorts", desc: "Most Chennai bookings are Tamil. Nungambakkam, T Nagar, OMR, Guindy—outcall to your hotel or place. Same deal: we keep it private, you pay when she arrives." },
              { href: "/mallu-escorts", label: "Mallu Escorts", desc: "Mallu companions in Chennai for dinner, events or travel. Easy to talk to. Ask when you message—we'll see who's free." },
              { href: "/telugu-escorts", label: "Telugu Escorts", desc: "Telugu-speaking escorts in Chennai. A lot of client dinners and events. Outcall; pay when she arrives." },
              { href: "/kannada-escorts", label: "Kannada Escorts", desc: "Kannada escorts in Chennai. Same process: tell us area, when, type. We fix someone who can reach you." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl border border-white/10 bg-black/50 p-6 hover:border-[var(--accent-gold)]/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">{item.label}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Languages in Chennai – card with pills */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Speak your language
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Languages in Chennai
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Tamil", "Malayalam", "Telugu", "Kannada", "English"].map((lang) => (
                  <span key={lang} className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30">
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-white/85 leading-relaxed">
                Our companions in Chennai speak Tamil, Malayalam, Telugu and Kannada, and English. Many speak more than one. If you want someone you can talk to in a particular language—dinner where everyone's speaking Tamil, or you're just more comfortable that way—tell us when you book. We'll suggest who fits. We get asked this a lot in Chennai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by category – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="Escort categories Chennai">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Browse by Category
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
            Regular, housewife, college girls, models and more.             All available in Chennai with outcall to your location.
          </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHENNAI_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={getCategoryPagePath(cat.slug)}
                className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-white mb-1">{cat.label}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{cat.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section: What We Offer – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What We Offer in Chennai
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
            A few hours to a full night, dinner to travel. Outcall to your hotel or your place. Tell us what you need and we'll see who fits.
          </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_TYPES.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/50 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration options in detail – 4 cards grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Flexible booking
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Duration Options in Detail
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Different durations. All outcall to your hotel or your place in Chennai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Short time (a few hours)", desc: "She comes for 2–3 hours or as agreed. Enough for dinner or an evening. Pay when she arrives; no advance for regular, housewife and college-girl.", num: "1" },
              { title: "Dinner or evening", desc: "A slot for dinner, event or party. We need start time and roughly when it ends. Same payment. Tell us the occasion and we'll see who fits.", num: "2" },
              { title: "Full night", desc: "Dinner plus the night—usually 8–10 hours or as agreed. Give us notice so we can confirm who's free. You pay when she's there; for models and above we take a small advance.", num: "3" },
              { title: "Outstation (travel)", desc: "Pondicherry, Mahabalipuram, Coorg or elsewhere. We need a few days' notice. Not everyone does outstation. Same deal: we keep it private, you pay when she's with you.", num: "4" },
            ].map((item) => (
              <div key={item.num} className="group rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 hover:border-[var(--accent-gold)]/40 transition-colors">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[var(--accent-gold)]/60 bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] font-bold text-sm">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/75 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outstation from Chennai – card */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/50" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-6 sm:py-8">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
                Travel
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Outstation from Chennai
              </h2>
              <p className="text-white/85 leading-relaxed">
                We get requests for Pondicherry, Mahabalipuram, Coorg and elsewhere. Not everyone does outstation, and we need a few days' notice to check who's free and willing to travel. Same rules: we keep it private, you pay when she's with you (cash or UPI). For regular and housewife, no advance. Tell us where you're going, how many nights and when; we'll see what we can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Who Books Chennai Escorts – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Who we serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Who Books Chennai Escorts?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Different reasons, same process: you message us, we fix someone, you pay when you meet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHO_BOOKS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors">
                <div className="w-10 h-px bg-[var(--accent-gold)]/50 mb-3" aria-hidden />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: What to Expect – vertical timeline design */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Booking flow
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              What to Expect When You Book
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              Same flow every time.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Gold line */}
            <div
              className="absolute left-[19px] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-gold)]/60 via-[var(--accent-gold)]/40 to-transparent"
              aria-hidden
            />
            <ul className="space-y-0">
              {WHAT_TO_EXPECT.map((item, i) => (
                <li key={item.step} className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
                  {/* Step number circle */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--accent-gold)] bg-black flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-[var(--accent-gold)]">
                      {i + 1}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {item.step}
                    </h3>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* First time booking in Chennai – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="First time booking Chennai">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                New to booking?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                First Time Booking in Chennai?
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                Many of our clients are first-timers. Not sure what we'll ask or how it works. Short version: you message us with your area, when you need someone, and what you have in mind (dinner, a few hours, event, or just company). We tell you who's free and can reach you. If you're at a hotel we need proof and room details; you give her name at reception when she arrives. You pay when she's there—no advance for regular and housewife.
              </p>
              <p className="text-white/85 leading-relaxed">
                If something isn't right on the day, tell us afterwards. We take feedback seriously. The women we work with are used to first-time clients. You book, she comes, you spend time together. That's it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to book and what helps – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent" aria-hidden />
            <div className="p-6 sm:p-8">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Practical tips
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                When to Book and What to Have Ready
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                Same-day works—we often confirm within a few hours. For busy times (weekends, evenings in Nungambakkam or T Nagar) a few hours' notice helps. For full-night or outstation (Pondicherry, Mahabs, Coorg) we need advance notice; not everyone does it, and we need to line it up.
              </p>
              <p className="text-white/85 leading-relaxed">
                When you message, have this ready: your area (or hotel name and area), when you need her (date and rough time), and what you're looking for (Tamil, Mallu, regular, model, dinner, short time). If you're at a hotel we'll ask for proof and room details before she starts—so have the room number and be ready to give her name at reception. That way we confirm faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Hotel bookings & privacy */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-[var(--accent-gold)]/70" aria-hidden />
            <div className="pl-6 sm:pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Privacy & process
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Hotel Bookings & Privacy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-2">At a hotel</h3>
                  <p className="text-white/85 leading-relaxed">
                    Most Chennai bookings are at hotels—Nungambakkam, T Nagar, OMR, Guindy. We need proof you're staying there (room key, bill, or a photo of the room number) and your room number. You give her name at reception when she arrives so she can come up. We don't share your number with her; everything goes through us. What happens in your room stays between you and her. We don't store or pass on your details.
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-2">At your place</h3>
                  <p className="text-white/85 leading-relaxed">
                    If you're at your own place we only need the area and a clear address or landmark so she can find you. Same deal: we don't give out your number. You pay when she's there—cash or UPI. For regular, housewife and college-girl we don't take advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why outcall only in Chennai – card with two blocks */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-black/50 px-6 sm:px-8 py-6 border-b border-white/10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
                Safety & privacy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Why Outcall Only in Chennai for Celebrity, Models, Artists and Actress?
              </h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl bg-white/[0.03] border border-white/5 p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-2">Outcall for everyone</h3>
                <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                  In Chennai we do <strong className="text-white">outcall only</strong>—she comes to your hotel or your place. We don't do incall (you going to her). That goes for everyone: regular, housewife, college girls, and also celebrity, models, artists and actress. You stay somewhere you control; she comes to you. No unfamiliar addresses or last-minute venue changes.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/5 p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-2">Celebrity, models, artists, actress: advance + outcall</h3>
                <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                  For <strong className="text-white">celebrity, models, artists and actress</strong> we take a small advance (usually 10–20%) before she sets out; the rest you pay when she arrives. Same outcall—she comes to you. If you're at a hotel we need proof and room details; you give her name at reception. When she's with you, payment is cash or UPI. So: outcall only for everyone in Chennai; advance only for these categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pricing – highlighted card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10 text-center shadow-[0_0_0_1px_var(--accent-gold)]/10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Rates
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Pricing
            </h2>
            <p className="text-white/85 leading-relaxed max-w-2xl mx-auto mb-6">
              No hidden charges. We quote by duration, type (regular, housewife, model, etc.) and location. You pay when you meet—cash or UPI. For regular, housewife and college-girl we don't take advance. For models, artists, celebrity and actress we take a small advance; the rest when she arrives.
            </p>
            <p className="text-sm font-semibold text-[var(--accent-gold)]">
              Ask for a quote when you message—we'll give you a number.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing for all – clean list by category */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By category
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Pricing for All
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
              Rates by category. Duration and area can change the quote—message us and we'll give you a number.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
            <div className="border-b border-white/10 bg-[var(--accent-gold)]/10 px-4 py-3 sm:px-6 sm:py-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                <div className="sm:col-span-3 font-bold text-white text-sm">Category</div>
                <div className="sm:col-span-9 font-bold text-white text-sm">Rates &amp; notes</div>
              </div>
            </div>
            {[
              {
                category: "Regular",
                price: "₹10k – ₹15k per shot.",
                fullNight: "Full night: ₹30k – ₹50k + cab.",
                details: "Incall for selected profiles. Outcall: min 2 shots within 10 km.",
              },
              {
                category: "Housewife",
                price: "₹10k – ₹12k per shot.",
                fullNight: "Full night: ₹30k – ₹40k + cab.",
                details: "Outcall: min 2 shots within 10 km.",
              },
              {
                category: "College Girl",
                price: "₹10k – ₹15k per shot.",
                fullNight: "Full night: ₹30k – ₹50k + cab.",
                details: "Incall for selected profiles. Outcall: min 2 shots within 10 km.",
              },
              {
                category: "Models",
                price: "₹30k – ₹1 Lac per booking.",
                fullNight: null,
                details: "Max 2 shots per booking. Stay 4–5 hours max.",
              },
              {
                category: "Artists",
                price: "₹1 Lac – ₹5 Lac per booking.",
                fullNight: null,
                details: "Max 2 shots per booking. Stay 4–5 hours max.",
              },
              {
                category: "Celebrity",
                price: "₹5 Lac – ₹20 Lac per booking.",
                fullNight: null,
                details: "Max 2 shots per booking. Stay 4–5 hours max.",
              },
              {
                category: "Actress",
                price: "₹10 Lac – ₹1 Crore per booking.",
                fullNight: null,
                details: "Max 2 shots per booking. Stay 4–5 hours max.",
              },
            ].map((item, i) => (
              <div
                key={item.category}
                className={`grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 px-4 py-4 sm:px-6 sm:py-5 border-b border-white/10 last:border-b-0 ${i % 2 === 1 ? "bg-white/[0.02]" : ""}`}
              >
                <div className="sm:col-span-3">
                  <span className="font-bold text-[var(--accent-gold)] text-sm sm:text-base">{item.category}</span>
                </div>
                <div className="sm:col-span-9 space-y-0.5">
                  <p className="text-white font-semibold text-sm sm:text-base">{item.price}</p>
                  {item.fullNight && (
                    <p className="text-white/90 text-sm">{item.fullNight}</p>
                  )}
                  <p className="text-white/70 text-sm leading-relaxed">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation and rescheduling – card */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Flexible
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Cancellation and Rescheduling
            </h2>
            <p className="text-white/85 leading-relaxed">
              Plans change. If you need to cancel or move your booking, tell us as soon as you can. We'd rather reschedule than have you rush or no-show. We don't charge cancellation fees for regular bookings; for models and above there may be a small policy depending on how close to the time you cancel. Ask when you message if you want the details.
            </p>
          </div>
        </div>
      </section>

      {/* Area keyword blocks – Nungambakkam/T Nagar & OMR/Guindy as cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="Escort service by area Chennai">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By area
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Where We Serve in Chennai
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-[var(--accent-gold)]/40 transition-colors">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link href="/nungambakkam-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  Nungambakkam
                </Link>
                <Link href="/t-nagar-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  T Nagar
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Escort Service in Nungambakkam and T Nagar
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Most of our Chennai hotel bookings are in Nungambakkam and T Nagar—central, plenty of hotels, easy for us to send someone. Outcall to your room; we need proof and room details, and you give her name at reception. Pay when she arrives. Same for your place: tell us the area and we'll fix someone who can reach you.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-[var(--accent-gold)]/40 transition-colors">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link href="/omr-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  OMR
                </Link>
                <Link href="/guindy-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  Guindy
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Outcall Escorts on OMR and Guindy
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                OMR and Guindy are big for IT and corporate clients. We get a lot of bookings from business travelers staying there. Outcall only—she comes to your hotel or your place. Tell us your area and when you need someone; we'll suggest who's free and can reach you on time. No advance for regular and housewife profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting to your area – card with area pills */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent" aria-hidden />
            <div className="p-6 sm:p-8">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Getting to Your Area
              </h2>
              <p className="text-white/85 leading-relaxed mb-6">
                We cover all of Chennai. When you book we factor in where you are and where she's coming from so we suggest someone who can reach you on time. Tell us your area (or hotel name and area) when you message; we don't need the exact address until we confirm. Clear gate or lobby instructions help so there's no back-and-forth on the day.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Nungambakkam", slug: "nungambakkam-escorts" },
                  { name: "T Nagar", slug: "t-nagar-escorts" },
                  { name: "OMR", slug: "omr-escorts" },
                  { name: "Guindy", slug: "guindy-escorts" },
                  { name: "Adyar", slug: "adyar-escorts" },
                  { name: "Velachery", slug: "velachery-escorts" },
                  { name: "Egmore", slug: "egmore-escorts" },
                  { name: "Anna Nagar", slug: "anna-nagar-escorts" },
                  { name: "Porur", slug: "porur-escorts" },
                  { name: "Chrompet", slug: "chrompet-escorts" },
                  { name: "Tambaram", slug: "tambaram-escorts" },
                  { name: "ECR", slug: "ecr-escorts" },
                ].map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="inline-flex px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/10 hover:bg-[var(--accent-gold)]/15 hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)]/30 transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events and corporate bookings – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-black/30 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/50" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Corporate & events
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Events and Corporate Bookings in Chennai
              </h2>
              <p className="text-white/85 leading-relaxed mb-5">
                A lot of Chennai bookings are for client dinners, corporate events or dos in Guindy, T Nagar or OMR. You need someone who can sit at a table, hold a conversation and not stick out. We have people used to that—model and celebrity types for high-end dinners, regular and college-girl for more casual. Tell us the occasion, timing and how formal it is; we'll suggest who fits.
              </p>
              <div className="rounded-xl bg-white/[0.04] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-2">
                  What we need from you
                </h3>
                <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                  Venue (hotel or place), date and time, and whether it's a sit-down dinner or mix of networking and social. If it's a hotel we need proof and room details; you give her name at reception. Same payment: pay when she arrives. For models and above we take a small advance; the rest when she's there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Chennai Escort Service – content left, image right */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Chennai Escort Service
            </h2>
            <p className="text-lg leading-relaxed text-white/85 mb-6">
              Chennai runs on work, travel and people who want company without strings. We do outcall to your hotel in Nungambakkam or your place in Adyar. Same process: you book, we fix someone who can come, you pay when she's there.
            </p>
            <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-3">
              How we work
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              We don't give out your number. We don't take full advance for regular and housewife. If you're at a hotel we need proof and room details; you give her name at reception before she starts. If something isn't right on the day, tell us afterwards—we take that seriously. No bots or long forms. You talk to someone who handles Chennai bookings.
            </p>
            <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-3">
              Booking
            </h3>
            <p className="text-white/80 leading-relaxed">
              Tell us your area, when you need her and what type you want (Tamil, Mallu, regular, model, etc.). We'll suggest who's free and can reach you. Same process every time. If you're new, say so and we'll walk you through it. If you've booked before, message with the basics and we'll sort it.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden bg-white/5 shrink-0">
            <Image
              src="/images/3.avif"
              alt="Chennai escort service – outcall to your hotel or place"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section: Also Serving – other cities – label + card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-6 sm:px-10 py-10 text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Other cities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              We Also Serve Other Cities
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Chennai is our main hub. We can sometimes arrange outcall in Coimbatore, Madurai, Trichy, Bangalore, Hyderabad and Kochi. Ask when you message—it depends who's free and where. Same rules: we keep it private, you pay when you meet, no advance for regular and housewife.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Coimbatore", slug: "coimbatore-escorts" },
              { name: "Madurai", slug: "madurai-escorts" },
              { name: "Trichy", slug: null },
              { name: "Bangalore", slug: "bangalore-escorts" },
              { name: "Hyderabad", slug: "hyderabad-escorts" },
              { name: "Kochi", slug: "kochi-escorts" },
            ].map((city) =>
              city.slug ? (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:border-[var(--accent-gold)]/50 hover:text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-colors"
                >
                  {city.name}
                </Link>
              ) : (
                <span
                  key={city.name}
                  className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium"
                >
                  {city.name}
                </span>
              )
            )}
          </div>
          </div>
        </div>
      </section>

      {/* Related reading – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Blog and guides">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Blog & guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Related Reading
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Guides on booking and what to expect in Chennai.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/blog/what-to-expect-booking-escort-chennai"
              className="block rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-[var(--accent-gold)]/40 transition-colors group"
            >
              <div className="w-10 h-px bg-[var(--accent-gold)]/50 mb-3 group-hover:bg-[var(--accent-gold)]/70 transition-colors" aria-hidden />
              <h3 className="text-lg font-bold text-white mb-2">What to Expect When Booking an Escort in Chennai</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                From first contact to meeting your companion. What we ask, how it works, and how to feel at ease.
              </p>
            </Link>
            <Link
              href="/blog"
              className="block rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-[var(--accent-gold)]/40 transition-colors group"
            >
              <div className="w-10 h-px bg-[var(--accent-gold)]/50 mb-3 group-hover:bg-[var(--accent-gold)]/70 transition-colors" aria-hidden />
              <h3 className="text-lg font-bold text-white mb-2">Blog & Guides</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                More articles on choosing a companion, privacy, and South Indian escort services.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Frequently asked questions about Chennai escorts">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Top Questions about Escorts in Chennai
            </h2>
            <p className="text-white/60 text-sm">
              Answered honestly. No fluff.
            </p>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6 hover:border-white/20 transition-colors"
              >
                <h3 className="text-base font-bold text-white mb-2">{item.q}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: CTA – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/50 px-6 sm:px-10 py-10 sm:py-12 text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Book now
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Book a Chennai Escort?
            </h2>
            <p className="text-white/70 mb-6">
            Message us with your area, when you need someone and what you have in mind. We're on Telegram. You'll talk to someone who handles Chennai bookings. Questions about areas, payment or what to expect? Ask when you message.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/LillyBabe_chennai"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact Chennai escorts on Telegram"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <Link
              href="/contact"
              title="Contact us to book Chennai escorts"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-colors"
            >
              Contact
            </Link>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}
