import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";

const base = getBaseUrl();
const url = `${base}/college-girls-escorts`;

const metaTitle = "College Girls Escorts | Young, Energetic Companions Across South India";
const metaDescription =
  "College girls escorts for fun, fresh and youthful companionship. Available in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more. Tamil, Mallu, Telugu, Kannada. Outcall only. Pay when you meet.";

function buildCollegeGirlsJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Categories", item: `${base}/categories` },
        { "@type": "ListItem", position: 3, name: "College Girls Escorts", item: url },
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
      "@type": "Service",
      "@id": localBusinessId,
      name: "College Girls Escorts",
      description:
        "Young, fresh, and energetic college girls escorts available across South India. Fun, modern, and easy to talk to. Outcall only. Pay when you meet.",
      url,
      image: `${base}/images/2.avif`,
      areaServed: [
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Kochi" },
        { "@type": "City", name: "Coimbatore" },
        { "@type": "City", name: "Madurai" },
      ],
      serviceType: "Companionship Service",
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

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "college girls escorts",
    "college girl escorts",
    "college escorts Chennai",
    "college escorts Bangalore",
    "college escorts Hyderabad",
    "college escorts Kochi",
    "college escorts Coimbatore",
    "college escorts Madurai",
    "young escorts",
    "student escorts",
    "outcall college girls escorts",
    "no advance college girls escorts",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url,
    siteName: "Tamil Escorts",
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: `${base}/images/2.avif`,
        width: 1200,
        height: 630,
        alt: "College girls escorts – young, energetic companionship across South India",
      },
    ],
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
  { label: "Young & Fresh", icon: "🎓" },
  { label: "Energetic", icon: "⚡" },
  { label: "Easy to Chat", icon: "💬" },
  { label: "Pay When You Meet", icon: "💵" },
];

const POPULAR_CITIES = [
  { name: "Chennai", slug: "chennai-escorts" },
  { name: "Bangalore", slug: "bangalore-escorts" },
  { name: "Hyderabad", slug: "hyderabad-escorts" },
  { name: "Kochi", slug: "kochi-escorts" },
  { name: "Coimbatore", slug: "coimbatore-escorts" },
  { name: "Madurai", slug: "madurai-escorts" },
];

const MORE_CITIES = [
];

const ESCORT_TYPES = [
  { name: "Tamil Escorts", slug: "tamil", href: "/profiles/tamil/college-girls" },
  { name: "Mallu Escorts", slug: "mallu", href: "/profiles/mallu/college-girls" },
  { name: "Telugu Escorts", slug: "telugu", href: "/profiles/telugu/college-girls" },
  { name: "Kannada Escorts", slug: "kannada", href: "/profiles/kannada/college-girls" },
];

const WHY_COLLEGE_GIRLS = [
  {
    title: "Youthful Energy",
    body: "College girls bring a fresh, energetic vibe to every meeting. They're young, enthusiastic, and full of life. If you want someone who brings energy and a modern outlook, college girls are perfect. They're fun to be around and easy to chat with about anything.",
  },
  {
    title: "Modern Perspective",
    body: "College girls are in touch with current trends, music, culture, and what's happening now. They bring a modern perspective and are easy to talk to about contemporary topics. Perfect if you want someone who's up-to-date and relatable.",
  },
  {
    title: "Easy Going",
    body: "College girls are naturally easy-going and don't take themselves too seriously. They're fun, relaxed, and great for casual outings, nightlife, or adventure activities. No pressure, just good company with youthful energy.",
  },
  {
    title: "Flexible & Fun",
    body: "College girls are flexible with timing and what you want to do. Whether it's dinner, a night out, exploring the city, or just hanging out, they're up for it. Same simple process: you book, they show up, you pay when they're there.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Casual Outings",
    desc: "Perfect for when you want young, energetic company for dinner, movies, or exploring the city. Fun and easy-going.",
  },
  {
    title: "Nightlife",
    desc: "Great for clubs, parties, or nightlife events. College girls know how to have fun and fit into social scenes naturally.",
  },
  {
    title: "Adventure Activities",
    desc: "If you want someone to join you for adventure activities, sightseeing, or trying new things, college girls bring enthusiasm and energy.",
  },
  {
    title: "Modern Conversation",
    desc: "Easy to chat with about current topics, trends, music, or anything modern. They bring a fresh perspective and are genuinely interesting to talk to.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What makes college girls escorts different from other categories?",
    a: "College girls escorts are young, fresh, and full of energy. They bring a modern outlook, are easy to chat with, and great for casual outings, nightlife, or adventure activities. They're fun to be around and don't take themselves too seriously. Perfect if you want youthful, energetic company.",
  },
  {
    q: "Do I need to pay advance for college girls escorts?",
    a: "No. For college girls escorts, we don't ask for advance payment. If you're at a hotel, we need proof you're staying there and your room details. You give her name at reception when she arrives. Payment is when she's there—cash or UPI. Simple and straightforward.",
  },
  {
    q: "What cities do you cover for college girls escorts?",
    a: "We cover Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more across South India. Tell us your city and area when you book, and we'll suggest who's available and can reach you on time.",
  },
  {
    q: "Are college girls escorts good for first-time bookings?",
    a: "Yes. College girls escorts are great for first-time bookings because they're easy-going, fun, and don't make things awkward. They're used to different situations and are naturally relaxed. No pressure, just good company with youthful energy.",
  },
  {
    q: "How do college girls escorts compare to regular escorts?",
    a: "College girls bring youthful energy and a modern perspective. Regular escorts are more established and settled. College girls are better if you want someone young, energetic, and fun. Regular escorts are better if you want someone more mature and easy-going.",
  },
  {
    q: "What languages do college girls escorts speak?",
    a: "We have college girls escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are multilingual. If you want someone who can speak a specific language, tell us when you book and we'll suggest who fits.",
  },
  {
    q: "How do I book a college girls escort?",
    a: "Message us on Telegram. Tell us your city/area, when you need someone, and that you're looking for a college girls escort. We'll suggest who's free and can reach you. Same-day and advance bookings both work. No advance payment required.",
  },
  {
    q: "Are college girls escorts verified?",
    a: "Yes. We verify all profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
  },
];

export default function CollegeGirlsEscortsPage() {
  const jsonLd = buildCollegeGirlsJsonLd();
  return (
    <main id="main-content" className="min-h-screen bg-black">
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      {/* Hero Section */}
      <header className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2.avif"
            alt="College girls escorts – young, energetic companionship across South India"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 70%), linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 w-full px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-6xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[var(--accent-gold)] transition-colors mb-8 tracking-wide uppercase"
            >
              <span aria-hidden>←</span> Home
            </Link>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/30 mb-6">
                <span className="text-2xl">🎓</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                  College Girls Escorts
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                College Girls Escorts
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Young, fresh, and full of energy. Fun to be around, modern outlook, easy to chat with.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                College girls escorts are students and young professionals who bring youthful energy and a
                fresh perspective. They're fun, easy-going, and great for casual outings, nightlife, or
                adventure activities.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-white/90">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* SEO Intro Section */}
      <section className="border-b border-white/10 py-8 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            <strong className="text-white">College girls escorts</strong> for young, energetic companionship
            in <strong className="text-white">Chennai</strong>, <strong className="text-white">Bangalore</strong>
            , <strong className="text-white">Hyderabad</strong>, Kochi, Coimbatore, Madurai and across South
            India. No advance payment required. Outcall to your hotel or place. Discreet, verified, pay when
            you meet.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/categories" className="text-[var(--accent-gold)] hover:underline">
              All categories
            </Link>
            <Link href="/blog" className="text-[var(--accent-gold)] hover:underline">
              Blog & guides
            </Link>
            <Link href="/contact" className="text-[var(--accent-gold)] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* What College Girls Escorts Are */}
      <section className="w-full border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <Image
                src="/images/artists-escorts.avif"
                alt="College girls escorts – young, energetic companionship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                What Are College Girls Escorts?
              </h2>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                College girls escorts are students and young professionals who bring youthful energy and a
                fresh perspective to every meeting. They're not trying to impress you with maturity or
                experience—they're there to provide fun, energetic company based on youth, enthusiasm, and
                modern outlook.
              </p>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                What makes them special is their energy and relatability. They're in touch with current
                trends, music, culture, and what's happening now. They're easy to chat with about modern
                topics and bring a fresh perspective to conversations. No pretense, just fun, young company.
              </p>
              <p className="text-lg leading-relaxed text-white/85">
                Many clients choose college girls escorts because they want someone young, energetic, and fun
                to be around. Whether it's a night out, adventure activities, or just casual company, college
                girls make it feel lively and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why College Girls Escorts - Cards Grid */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why choose college girls escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Appeal of College Girls Escorts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Young, energetic, and fun. Here's what makes college girls escorts special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_COLLEGE_GIRLS.map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-black/40 p-8 hover:border-[var(--accent-gold)]/40 transition-all"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-gold)]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-gold)]/20 flex items-center justify-center text-xl font-bold text-[var(--accent-gold)]">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/75 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Type */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Browse by type
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              College Girls Escorts by Language
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We have college girls escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Choose a
              type to see available profiles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ESCORT_TYPES.map((type) => (
              <Link
                key={type.slug}
                href={type.href}
                className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-black/40 p-8 hover:border-[var(--accent-gold)]/50 hover:bg-gradient-to-br hover:from-[var(--accent-gold)]/10 hover:to-black/60 transition-all"
              >
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--accent-gold)]/40 group-hover:bg-[var(--accent-gold)] transition-colors" />
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--accent-gold)] transition-colors">
                  {type.name}
                </h3>
                <p className="text-sm text-white/60 mb-4">College girls escorts</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-gold)] group-hover:gap-3 transition-all">
                  View profiles
                  <span className="text-lg">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              What you can do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect For These Situations
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              College girls escorts are great for casual outings, nightlife, and adventure activities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_YOU_GET.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Locations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Available in These Cities
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              College girls escorts available across South India. Tell us your city and we'll suggest who's
              free.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {POPULAR_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center hover:border-[var(--accent-gold)]/40 hover:bg-white/[0.06] transition-all"
              >
                <h3 className="text-base font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors">
                  {city.name}
                </h3>
              </Link>
            ))}
          </div>
          {MORE_CITIES.length > 0 && (
            <div className="rounded-xl border border-white/10 bg-black/30 px-6 py-5 text-center">
              <p className="text-center text-white/70">
                Also available in{" "}
                {MORE_CITIES.map((city, i) => (
                  <span key={city.slug}>
                    <Link
                      href={`/${city.slug}`}
                      className="text-white/85 hover:text-[var(--accent-gold)] hover:underline transition-colors"
                    >
                      {city.name}
                    </Link>
                    {i < MORE_CITIES.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Who Books College Girls Escorts */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Who books college girls escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Chooses College Girls Escorts?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Different people, different reasons. All looking for young, energetic company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Young Professionals",
                body: "In your 20s or 30s and want someone your age or younger. College girls escorts bring youthful energy and are easy to relate to. Great for casual outings, nightlife, or just hanging out with someone fun and energetic.",
              },
              {
                title: "Nightlife Enthusiasts",
                body: "Want someone to join you for clubs, parties, or nightlife events. College girls escorts know how to have fun and fit into social scenes naturally. They bring energy and enthusiasm to any night out.",
              },
              {
                title: "Adventure Seekers",
                body: "Looking for someone to join you for adventure activities, sightseeing, or trying new things. College girls escorts bring enthusiasm and are up for anything. Perfect for when you want energetic, fun company.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-8 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">{item.title}</h3>
                <p className="text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Flexible timing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Duration Options
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              College girls escorts offer flexible durations. All outcall to your hotel or your place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Short Time (2-3 hours)",
                desc: "Perfect for dinner, nightlife, or casual outings. She comes to you for 2-3 hours (or as agreed). Enough time to enjoy each other's company. Pay when she arrives—no advance required.",
              },
              {
                title: "Dinner or Evening",
                desc: "A fixed slot for a specific occasion—dinner, event, or night out. We need the start time and roughly when it ends. College girls escorts are great at fitting into social situations. Same payment rules apply.",
              },
              {
                title: "Full Night",
                desc: "Dinner plus the night—typically 8-10 hours or as agreed. Advance notice helps so we can confirm who's free. College girls escorts are flexible with timing. Payment when she's there—no advance required.",
              },
              {
                title: "Multiple Days",
                desc: "If you're in town for a few days and want consistent, energetic company, we can arrange for a college girls escort to join you over multiple days. Advance notice required. Same discretion and payment rules—pay when she's with you each day.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.title}</h3>
                <p className="text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Transparent pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing for College Girls Escorts
            </h2>
            <p className="text-lg text-white/70">
              Clear rates. No hidden charges. No advance payment required.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">Short Time (2-3 hours)</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹10,000 – ₹15,000
                </p>
                <p className="text-white/75">
                  Perfect for dinner, nightlife, or casual outings. Pay when she arrives—cash or UPI. No
                  advance required.
                </p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">Dinner or Evening</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹12,000 – ₹18,000
                </p>
                <p className="text-white/75">
                  Fixed slot for a specific occasion. We need start and end times. Same payment rules—pay
                  when she arrives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Full Night</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹30,000 – ₹50,000
                </p>
                <p className="text-white/75">
                  Dinner plus the night—typically 8-10 hours. Advance notice helps. Payment when she's
                  there—no advance required.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                <strong className="text-white">Note:</strong> Rates may vary slightly based on location and
                timing. We'll give you a clear quote when you message. Duration and area may affect the final
                quote. All payments are cash or UPI when she arrives—no advance required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              What to expect
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What to Expect When You Book
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              No surprises. Here's what happens from booking to meeting.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "You Message Us",
                text: "Tell us your city/area, when you need someone, and that you're looking for a college girls escort. We'll ask basics like hotel or your place, timing, and any preferences. Quick response—usually within an hour or two.",
              },
              {
                step: "We Confirm Who's Free",
                text: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof (room key photo or bill) and your room number. You give her name at reception when she arrives so she can come up.",
              },
              {
                step: "She Arrives",
                text: "Outcall only—she comes to your hotel or your place. Have the address and any gate or lobby instructions ready. She'll arrive at the agreed time. Payment when she's there—cash or UPI. No advance required.",
              },
              {
                step: "Your Time Together",
                text: "College girls escorts are fun and energetic. They're easy to chat with, bring youthful energy, and are great for casual outings, nightlife, or adventure activities. Whether it's dinner, an event, or just hanging out, they make it feel lively and enjoyable.",
              },
              {
                step: "After",
                text: "Your booking stays between you and us. We don't share your number or store your details. Discretion is default. If something wasn't right, tell us—we take feedback seriously.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="flex gap-6 items-start p-6 rounded-xl border border-white/10 bg-black/30 hover:border-[var(--accent-gold)]/30 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[var(--accent-gold)]/60 bg-[var(--accent-gold)]/10 flex items-center justify-center text-lg font-bold text-[var(--accent-gold)]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.step}</h3>
                  <p className="text-white/75 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Communication */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-4">
                Languages & communication
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Speak Your Language
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                We have college girls escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many
                are multilingual. If you want someone who can hold a conversation in a specific language—for a
                casual outing, nightlife, or just because you're more comfortable—tell us when you book.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["Tamil", "Malayalam", "Telugu", "Kannada", "English"].map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-white/75 leading-relaxed">
                College girls escorts are naturally good at conversation. They're easy to chat with about
                modern topics, trends, music, or anything current. Whether you want to talk about what's
                happening now or just have fun conversation, they're engaging and relatable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Discretion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Privacy & safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Safety & Discretion
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Your privacy is non-negotiable. Here's how we ensure it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Complete Discretion",
                body: "We don't share your number with the escorts. All coordination goes through us. The escorts don't post or talk about clients. Your booking stays between you and us. Discretion is built into everything we do.",
              },
              {
                title: "Verified Profiles",
                body: "All college girls escorts are verified before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
              },
              {
                title: "Outcall Only",
                body: "For your safety and comfort, we do outcall only—she comes to your hotel or your place. You stay in a space you control. If you're at a hotel, we need proof and room details; you give her name at reception.",
              },
              {
                title: "No Information Storage",
                body: "We don't store or share your personal details. We don't keep records of your bookings beyond what's needed for coordination. Your information stays private. After your booking, everything stays between you and us.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.title}</h3>
                <p className="text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Time Booking Guide */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-4">
                New to booking?
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                First Time Booking a College Girls Escort?
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                College girls escorts are great for first-time bookings because they're easy-going, fun, and
                don't make things awkward. They're used to different situations and are naturally relaxed.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Know</h3>
                  <p className="text-white/75 leading-relaxed">
                    College girls escorts are used to first-time clients. They're not there to make you feel
                    awkward or uncomfortable. They're fun, easy-going, and good at keeping things relaxed. If
                    you're nervous, that's normal—they understand and will help you feel at ease.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Have Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, have these ready: your city/area (or hotel name and area), when you
                    need someone (date and rough time), and what you have in mind (dinner, nightlife, casual
                    outing, or just company). If you're at a hotel, we'll ask for proof and room details
                    before she starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">After Your Booking</h3>
                  <p className="text-white/75 leading-relaxed">
                    If something wasn't right on the day, tell us afterwards. We take feedback seriously. The
                    college girls escorts we work with are professional and want to make sure you have a good
                    experience. Your comfort matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Other Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Understanding categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              College Girls Escorts vs Other Categories
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding the difference helps you choose what's right for you.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                comparison: "College Girls vs Regular",
                text: "College girls bring youthful energy and a modern perspective. Regular escorts are more established and settled. College girls are better if you want someone young, energetic, and fun. Regular escorts are better if you want someone more mature and easy-going.",
              },
              {
                comparison: "College Girls vs Housewife",
                text: "College girls bring youth and energy. Housewife escorts bring maturity and life experience. College girls are better for casual outings, nightlife, or adventure activities. Housewife escorts are better for meaningful conversation and emotional support.",
              },
              {
                comparison: "College Girls vs Models",
                text: "College girls are more approachable and relatable. Models are more for high-profile events or when you want someone who turns heads. College girls are better for casual, fun outings. Models are better for glamorous occasions.",
              },
              {
                comparison: "College Girls vs Celebrity/Actress",
                text: "College girls are everyday young people—no pretense, just fun. Celebrity and actress escorts are for high-profile events or when you want someone with a public presence. College girls are about youthful, energetic company.",
              },
            ].map((item) => (
              <div
                key={item.comparison}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">
                  {item.comparison}
                </h3>
                <p className="text-white/75 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenarios */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Real scenarios
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Common Scenarios
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Here are some real situations where college girls escorts work perfectly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                scenario: "Night Out",
                description:
                  "You want to go to a club or party and need someone fun to join you. College girls escorts are perfect because they know how to have fun and fit into nightlife scenes naturally. They bring energy and enthusiasm to any night out.",
              },
              {
                scenario: "Casual Dinner",
                description:
                  "You want young, energetic company for dinner. College girls escorts are easy to chat with, bring a modern perspective, and make the evening feel fun and relaxed. No pressure, just good company.",
              },
              {
                scenario: "Adventure Activities",
                description:
                  "You want someone to join you for sightseeing, trying new things, or adventure activities. College girls escorts bring enthusiasm and are up for anything. Perfect for when you want energetic, fun company.",
              },
              {
                scenario: "Weekend Getaway",
                description:
                  "You're going away for the weekend and want young, fun company. College girls escorts can join you for the weekend and bring energy to your trip. Same simple process—you book, they show up.",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.scenario}</h3>
                <p className="text-white/75 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Timing
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              When to Book College Girls Escorts
            </h2>
            <p className="text-lg text-white/70">
              Flexible timing. Same-day bookings work, advance notice helps for some situations.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                timing: "Same-Day Bookings",
                details:
                  "Most popular option. We often confirm within a few hours. College girls escorts are flexible and can usually accommodate same-day requests. Perfect for when plans change or you decide last minute you want young, energetic company.",
              },
              {
                timing: "Advance Bookings",
                details:
                  "For full-night bookings, multiple days, or specific events, advance notice helps. A day or two ahead gives us time to confirm who's free and arrange everything smoothly. College girls escorts appreciate knowing ahead of time.",
              },
              {
                timing: "Weekend & Nightlife",
                details:
                  "Weekends and evenings are popular for college girls escorts—perfect for nightlife, parties, or fun outings. Weekends can get busy, so a few hours' notice helps during peak times. College girls escorts are usually available.",
              },
              {
                timing: "Last Minute",
                details:
                  "Need someone in the next hour or two? We'll try our best. College girls escorts are often flexible, but availability depends on who's free. Message us and we'll see what we can arrange.",
              },
            ].map((item) => (
              <div
                key={item.timing}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.timing}</h3>
                <p className="text-white/75 leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for a Good Experience */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Tips
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tips for a Good Experience
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Simple things that make your time together more enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tip: "Be Clear About What You Want",
                explanation:
                  "When you message, tell us what you have in mind—nightlife, dinner, adventure activities, or just fun company. College girls escorts are flexible, but knowing what you want helps us suggest the right person and set expectations.",
              },
              {
                tip: "Have Your Details Ready",
                explanation:
                  "If you're at a hotel, have proof and room details ready. If you're at your place, have the address and any gate or lobby instructions. Clear information means she arrives on time without confusion.",
              },
              {
                tip: "Be Respectful",
                explanation:
                  "College girls escorts are professionals. Treat them with respect and they'll do the same. They're there to provide fun, energetic company—be courteous, be clear about timing, and everything will go smoothly.",
              },
              {
                tip: "Communicate Clearly",
                explanation:
                  "If something isn't working or you need to adjust timing, communicate clearly. College girls escorts are understanding and flexible. Clear communication prevents misunderstandings and makes the experience better for everyone.",
              },
            ].map((item) => (
              <div
                key={item.tip}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.tip}</h3>
                <p className="text-white/75 leading-relaxed">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Clearing things up
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Common Misconceptions
            </h2>
            <p className="text-lg text-white/70">
              Let's clear up some common questions and misconceptions about college girls escorts.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                myth: "College girls escorts are less professional",
                truth:
                  "Not true. College girls escorts are just as professional—they just bring youthful energy and a modern perspective. They're good at what they do, they're reliable, and they understand discretion. The difference is in their energy and outlook, not their professionalism.",
              },
              {
                myth: "You need to pay advance",
                truth:
                  "No. For college girls escorts, we don't ask for advance payment. Hotel proof and room details if you're at a hotel, and you pay when she arrives. Simple and straightforward. No advance required.",
              },
              {
                myth: "College girls escorts are only for young clients",
                truth:
                  "Not at all. Clients of all ages choose college girls escorts because they want young, energetic company. Whether you're young and want someone your age, or older and want youthful energy, college girls escorts work for everyone.",
              },
              {
                myth: "They're not as mature or interesting",
                truth:
                  "Actually, college girls escorts are often more interesting because they bring a fresh, modern perspective. They're easy to chat with, they're fun to be around, and they bring energy to any situation. Many clients prefer college girls escorts specifically because of their youthful energy and modern outlook.",
              },
            ].map((item) => (
              <div
                key={item.myth}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/30 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.myth}</h3>
                <p className="text-white/75 leading-relaxed">{item.truth}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Other categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore Other Categories
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              College girls escorts not quite right? Check out other categories that might fit better.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Regular Escorts", slug: "regular-escorts", desc: "Everyday, approachable people who are easy to talk to. Great for casual outings and relaxed evenings." },
              { name: "Housewife Escorts", slug: "housewife-escorts", desc: "Mature, grounded escorts with life experience. Great listeners, discreet, and understanding." },
              { name: "Model Escorts", slug: "models-escorts", desc: "Fashion-forward, photogenic. Perfect for events and when you want someone who turns heads." },
              { name: "Artists & Performers", slug: "artists-escorts", desc: "Creative souls from the arts. Perfect for cultural events and intellectual conversations." },
              { name: "Celebrity Escorts", slug: "celebrity-escorts", desc: "High-profile, discreet. Perfect for VIP events and when discretion matters most." },
              { name: "Actress Escorts", slug: "actress-escorts", desc: "Screen and stage talent. Expressive, confident. Perfect for events and when presence matters." },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/50 hover:bg-black/50 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--accent-gold)] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{cat.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-gold)] mt-4 group-hover:gap-3 transition-all">
                  Learn more
                  <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Etiquette */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-4">
                Etiquette
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Booking Etiquette
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                Simple guidelines that make the experience smooth and comfortable for everyone.
              </p>
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Be Clear and Direct</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, be clear about what you want—timing, duration, occasion type. College
                    girls escorts appreciate knowing what to expect. Clear communication prevents misunderstandings
                    and makes everything smoother.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Respect Boundaries</h3>
                  <p className="text-white/75 leading-relaxed">
                    College girls escorts are professionals providing a service. Treat them with respect. They're
                    there to provide fun, energetic company—be courteous, be clear about timing, and respect
                    their boundaries. Professionalism goes both ways.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Be On Time</h3>
                  <p className="text-white/75 leading-relaxed">
                    If you've booked for a specific time, be ready when she arrives. Have your hotel proof ready
                    if you're at a hotel, or clear address instructions if you're at your place. Being prepared
                    shows respect for her time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Payment Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    Have payment ready—cash or UPI. College girls escorts don't require advance, but payment when
                    she arrives is expected. Having it ready makes the transaction smooth and professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why College Girls Escorts Are Special */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why they're special
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why College Girls Escorts Are a Popular Choice
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              There's a reason many clients choose college girls escorts. Here's why.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                reason: "Young and Energetic",
                explanation:
                  "College girls escorts bring youthful energy and enthusiasm. They're fun to be around, bring a modern perspective, and make any occasion feel lively. Perfect for when you want someone with energy and a fresh outlook.",
              },
              {
                reason: "No Advance Payment",
                explanation:
                  "Unlike models or celebrity escorts, college girls escorts don't require advance payment. Hotel proof and room details if you're at a hotel, and you pay when she arrives. Simple, straightforward, and less risky for you.",
              },
              {
                reason: "Easy to Talk To",
                explanation:
                  "College girls escorts are naturally easy-going and easy to chat with. They bring a modern perspective and can talk about anything—current trends, life, or just casual conversation. No pressure, just fun company.",
              },
              {
                reason: "Perfect for Nightlife",
                explanation:
                  "College girls escorts are perfect for nightlife, parties, or fun outings. They know how to have fun, fit into social scenes naturally, and bring energy to any night out. Perfect for when you want someone fun and energetic.",
              },
              {
                reason: "Reliable and Professional",
                explanation:
                  "College girls escorts are reliable and professional. They show up on time, they're easy to coordinate with, and they understand discretion. You can count on them to be there when you need them.",
              },
            ].map((item) => (
              <div
                key={item.reason}
                className="flex gap-4 items-start p-6 rounded-xl border border-white/10 bg-black/30 hover:border-[var(--accent-gold)]/30 transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.reason}</h3>
                  <p className="text-white/75 leading-relaxed">{item.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simple Steps */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Simple process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How Booking Works
            </h2>
            <p className="text-lg text-white/70">
              Straightforward booking process. No advance payment required.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                body: "Message us with your city/area, when you need someone, and that you're looking for a college girls escort. We'll ask the basics—hotel or your place, timing, what you have in mind.",
              },
              {
                step: "2",
                title: "We Suggest Who's Free",
                body: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof and room details. You give her name at reception when she arrives.",
              },
              {
                step: "3",
                title: "She Arrives & You Pay",
                body: "Outcall only—she comes to your hotel or your place. Payment when she's there—cash or UPI. No advance payment required for college girls escorts.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start p-6 rounded-xl border border-white/10 bg-black/30 hover:border-[var(--accent-gold)]/30 transition-colors"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[var(--accent-gold)]/60 bg-[var(--accent-gold)]/10 flex items-center justify-center text-2xl font-bold text-[var(--accent-gold)]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/75 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods and Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Payment
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Payment Methods and Details
            </h2>
            <p className="text-lg text-white/70">
              Simple payment process. No advance required for college girls escorts.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Payment Methods</h3>
                <p className="text-white/75 mb-4">
                  We accept cash or UPI payments. Payment is made when the college girls escort arrives at your
                  location.
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  {["Cash", "UPI"].map((method) => (
                    <span
                      key={method}
                      className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-bold text-white mb-3">Payment Timing</h3>
                <p className="text-white/75 mb-4">
                  For college girls escorts, no advance payment is required. Payment is made when she arrives at
                  your hotel or your place. Have payment ready—cash or UPI—to make the transaction smooth and
                  professional.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-bold text-white mb-3">Hotel Bookings</h3>
                <p className="text-white/75">
                  If you're at a hotel, we need proof you're staying there (room key photo or bill) and your
                  room number. You give her name at reception when she arrives so she can come up. Payment is
                  made when she arrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Information */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              City coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              College Girls Escorts by City
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Available across major cities in South India. Here's what to know about each city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Chennai", info: "College girls escorts in Chennai cover Nungambakkam, T Nagar, OMR, Adyar and more. Youthful, fun company. Outcall to hotels or your place. No advance required." },
              { city: "Bangalore", info: "College girls escorts are popular in Bangalore—Indiranagar, Koramangala, Whitefield. Great for nightlife and social outings. Same simple process." },
              { city: "Hyderabad", info: "College girls escorts in Hyderabad—Hitech City, Banjara Hills, Gachibowli. Energetic, easy-going. Perfect for business travelers and locals." },
              { city: "Kochi", info: "College girls escorts in Kochi cover Marine Drive, Ernakulam, Kakkanad. Fun, youthful companionship. No advance, pay when she arrives." },
              { city: "Coimbatore", info: "College girls escorts available in Coimbatore. Same discretion and payment rules. Youthful, energetic company." },
              { city: "Madurai", info: "College girls escorts in Madurai offer fun, modern companionship. Flexible timing, same booking process." },
            ].map((item) => (
              <div key={item.city} className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.city}</h3>
                <p className="text-white/75 leading-relaxed text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability & Response Times */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Response
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Availability & Response Times
            </h2>
            <p className="text-lg text-white/70">
              What to expect when you message us.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Response Time</h3>
              <p className="text-white/75">We usually reply within 1–2 hours during the day. Evenings and weekends may take a bit longer. We'll get back to you as soon as we can.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Availability</h3>
              <p className="text-white/75">College girls escorts are available across our covered cities. Same-day bookings are often possible; advance notice helps for full-night or multiple-day bookings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Before you book
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What to Prepare
            </h2>
            <p className="text-lg text-white/70">
              Have these ready so your booking goes smoothly.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: "Your location", detail: "City, area, and full address—or hotel name and area. If it's your place, any gate or lobby instructions." },
              { label: "When you need someone", detail: "Date and rough time. For full-night or multiple days, say so upfront." },
              { label: "Hotel proof (if applicable)", detail: "Room key photo or bill showing your name and room number. We'll ask before she starts." },
              { label: "Payment", detail: "Cash or UPI. Have it ready when she arrives. No advance required for college girls escorts." },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-xl border border-white/10 bg-black/30 p-5 hover:border-[var(--accent-gold)]/30 transition-colors">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2" />
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-white/75 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation & Changes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Policy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Cancellation & Changes
            </h2>
            <p className="text-lg text-white/70">
              Simple and fair. Tell us as soon as you know.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Rescheduling</h3>
              <p className="text-white/75">If you need to change the time or date, message us as soon as you can. We'll try to accommodate. No advance payment for college girls escorts, so rescheduling is straightforward.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Cancellation</h3>
              <p className="text-white/75">If you need to cancel, tell us in good time. We don't charge cancellation fees for college girls escorts since no advance is taken. Just let us know so we can free up the escort's time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Common Questions About College Girls Escorts
            </h2>
            <p className="text-lg text-white/60">Answered honestly. No fluff.</p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-white/75 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/50 px-6 sm:px-10 py-12 text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-4">
              Ready to book
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">Book a College Girls Escort</h2>
            <p className="text-white/70 mb-8 text-lg">
              Message us with your city/area, when you need someone, and that you're looking for a college
              girls escort. No advance payment required. We'll suggest who's free and can reach you on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on Telegram to book college girls escorts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book college girls escorts"
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
