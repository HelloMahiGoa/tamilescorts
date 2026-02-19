import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";

const base = getBaseUrl();
const url = `${base}/regular-escorts`;

const metaTitle = "Regular Escorts | Genuine Companionship Across South India";
const metaDescription =
  "Regular escorts for genuine companionship. No pretense, just real people you can relax with. Available in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more. Tamil, Mallu, Telugu, Kannada. Outcall only. Pay when you meet.";

function buildRegularEscortsJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Categories", item: `${base}/categories` },
        { "@type": "ListItem", position: 3, name: "Regular Escorts", item: url },
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
      name: "Regular Escorts",
      description:
        "Genuine companionship with regular escorts across South India. No pretense, just real people you can relax with. Available in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more.",
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
    "regular escorts",
    "regular escort service",
    "regular escorts Chennai",
    "regular escorts Bangalore",
    "regular escorts Hyderabad",
    "regular escorts Kochi",
    "regular escorts Coimbatore",
    "regular escorts Madurai",
    "genuine companionship",
    "approachable escorts",
    "casual escorts",
    "outcall regular escorts",
    "no advance regular escorts",
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
        alt: "Regular escorts – genuine companionship across South India",
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
  { label: "No Advance Required", icon: "✓" },
  { label: "Genuine People", icon: "✨" },
  { label: "Easy to Talk To", icon: "💬" },
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
  { name: "Trivandrum", slug: "trivandrum-escorts" },
  { name: "Vijayawada", slug: "vijayawada-escorts" },
  { name: "Mysore", slug: "mysore-escorts" },
  { name: "Pondicherry", slug: "pondicherry-escorts" },
];

const ESCORT_TYPES = [
  { name: "Tamil Escorts", slug: "tamil", href: "/profiles/tamil/regular" },
  { name: "Mallu Escorts", slug: "mallu", href: "/profiles/mallu/regular" },
  { name: "Telugu Escorts", slug: "telugu", href: "/profiles/telugu/regular" },
  { name: "Kannada Escorts", slug: "kannada", href: "/profiles/kannada/regular" },
];

const WHY_REGULAR = [
  {
    title: "No Pretense",
    body: "Regular escorts are just regular people. No airs, no drama. They're easy to talk to and genuinely good company. If you want someone you can relax with without feeling like you need to put on a show, this is it.",
  },
  {
    title: "Most Popular Choice",
    body: "Most of our bookings are for regular escorts. They're approachable, down-to-earth, and great for everything from a quiet dinner to a night out. No advance payment required—just hotel proof and room details if you're at a hotel.",
  },
  {
    title: "Genuine Conversation",
    body: "These are people who know how to hold a conversation. Whether you want to talk about work, travel, food, or just unwind, they're comfortable to be around. No awkward silences, no forced small talk.",
  },
  {
    title: "Flexible & Easy",
    body: "Regular escorts are flexible with timing and what you want to do. Dinner, a few hours, or just company for an evening—they're up for it. Same simple process: you book, they show up, you pay when they're there.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Casual Outings",
    desc: "Perfect for when you want company for dinner, a movie, or just exploring the city. No pressure, just good company.",
  },
  {
    title: "Relaxed Evenings",
    desc: "Sometimes you just want someone to talk to or spend a quiet evening with. Regular escorts are great listeners and easy to be around.",
  },
  {
    title: "Social Events",
    desc: "Need a plus-one for a casual event or gathering? Regular escorts know how to fit in and keep things comfortable.",
  },
  {
    title: "Travel Companion",
    desc: "If you're traveling and want company, regular escorts can join you for meals, sightseeing, or just to have someone around.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What makes regular escorts different from other categories?",
    a: "Regular escorts are everyday, approachable people. No pretense, no airs—just genuine, easy-going company. They're the most popular choice because they're easy to talk to and comfortable to be around. Perfect for casual outings, relaxed evenings, or when you just want good company without any drama.",
  },
  {
    q: "Do I need to pay advance for regular escorts?",
    a: "No. For regular escorts, we don't ask for advance payment. If you're at a hotel, we need proof you're staying there and your room details. You give her name at reception when she arrives. Payment is when she's there—cash or UPI. Simple and straightforward.",
  },
  {
    q: "What cities do you cover for regular escorts?",
    a: "We cover Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai, Trivandrum, Vijayawada, Mysore, Pondicherry and more across South India. Tell us your city and area when you book, and we'll suggest who's available and can reach you on time.",
  },
  {
    q: "Can I book a regular escort for an event?",
    a: "Yes. Regular escorts are great for casual events, dinners, or social gatherings. They know how to fit in and keep things comfortable. Just tell us the occasion and timing, and we'll suggest who fits. Same payment rules—no advance, pay when she arrives.",
  },
  {
    q: "How do regular escorts compare to models or celebrity escorts?",
    a: "Regular escorts are more approachable and down-to-earth. They're perfect for casual settings where you want genuine conversation and easy company. Models and celebrity escorts are more for high-profile events or when you want someone who turns heads. Regular escorts are about comfort and genuine connection.",
  },
  {
    q: "What languages do regular escorts speak?",
    a: "We have regular escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are multilingual. If you want someone who can speak a specific language, tell us when you book and we'll suggest who fits.",
  },
  {
    q: "How do I book a regular escort?",
    a: "Message us on Telegram. Tell us your city/area, when you need someone, and that you're looking for a regular escort. We'll suggest who's free and can reach you. Same-day and advance bookings both work. No advance payment required.",
  },
  {
    q: "Are regular escorts verified?",
    a: "Yes. We verify all profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
  },
];

export default function RegularEscortsPage() {
  const jsonLd = buildRegularEscortsJsonLd();
  return (
    <main id="main-content" className="min-h-screen bg-black">
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      {/* Hero Section - Unique Design */}
      <header className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2.avif"
            alt="Regular escorts – genuine companionship across South India"
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
                <span className="text-2xl">✨</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                  Regular Escorts
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Regular Escorts
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Genuine companionship. No pretense, just real people you can relax with.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Everyday, approachable people who are easy to talk to and great company. Whether you want
                a quiet dinner, a night out, or someone to talk to—regular escorts are the most popular
                choice for a reason.
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
            <strong className="text-white">Regular escorts</strong> for genuine companionship in{" "}
            <strong className="text-white">Chennai</strong>, <strong className="text-white">Bangalore</strong>
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

      {/* What Regular Escorts Are - Unique Content Section */}
      <section className="w-full border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <Image
                src="/images/artists-escorts.avif"
                alt="Regular escorts – genuine, approachable companionship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                What Are Regular Escorts?
              </h2>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                Regular escorts are everyday people who happen to do this work. They're not models or
                celebrities—they're just regular, approachable people who are easy to talk to and great
                company. Think of them as someone you'd meet at a coffee shop or through friends, not
                someone who's trying to impress you with their status or looks.
              </p>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                What makes them special is their genuineness. They're comfortable in their own skin, easy
                to be around, and genuinely good at conversation. No pretense, no airs—just real people you
                can relax with.
              </p>
              <p className="text-lg leading-relaxed text-white/85">
                Most of our clients choose regular escorts because they want company that feels natural and
                unforced. Whether it's a quiet dinner, a night out, or just someone to talk to, regular
                escorts make it feel easy and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Regular Escorts - Cards Grid */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why choose regular escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Appeal of Regular Escorts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Most popular for a reason. Here's what makes regular escorts special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_REGULAR.map((item, i) => (
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

      {/* Browse by Type - Unique Design */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Browse by type
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Regular Escorts by Language
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We have regular escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Choose a
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
                <p className="text-sm text-white/60 mb-4">Regular escorts</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-gold)] group-hover:gap-3 transition-all">
                  View profiles
                  <span className="text-lg">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Do - Services */}
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
              Regular escorts are versatile and great for various occasions.
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
              Regular escorts available across South India. Tell us your city and we'll suggest who's free.
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
        </div>
      </section>

      {/* Who Books Regular Escorts */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Who books regular escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Chooses Regular Escorts?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Different people, different reasons. All looking for genuine, easy-going company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Travelers",
                body: "In town for a few days, staying at a hotel. Don't want to eat alone or sit in a room by yourself. Need company that's discreet, hassle-free, and easy to talk to. Regular escorts are perfect—they understand the situation and make it comfortable.",
              },
              {
                title: "Locals",
                body: "Living in the city and want company for an evening. Maybe a dinner, an event, or just someone to talk to. Regular escorts are great because they're approachable and don't make things feel awkward. Same simple process—you book, they show up.",
              },
              {
                title: "First-Timers",
                body: "Never booked before and want something straightforward. Regular escorts are ideal because they're used to first-time clients. They're not there to make you feel uncomfortable—just good company that feels natural. No pressure, no drama.",
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
              Regular escorts offer flexible durations. All outcall to your hotel or your place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Short Time (2-3 hours)",
                desc: "Most popular option. Perfect for dinner, conversation, or a relaxed evening. She comes to you for 2-3 hours (or as agreed). Enough time to enjoy each other's company without feeling rushed. Pay when she arrives—no advance required.",
              },
              {
                title: "Dinner or Evening",
                desc: "A fixed slot for a specific occasion—dinner, event, or party. We need the start time and roughly when it ends. Regular escorts are great at fitting into social situations and keeping things comfortable. Same payment rules apply.",
              },
              {
                title: "Full Night",
                desc: "Dinner plus the night—typically 8-10 hours or as agreed. Advance notice helps so we can confirm who's free. Regular escorts are flexible with timing. Payment when she's there—no advance required for regular escorts.",
              },
              {
                title: "Multiple Days",
                desc: "If you're in town for a few days and want consistent company, we can arrange for a regular escort to join you over multiple days. Advance notice required. Same discretion and payment rules—pay when she's with you each day.",
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
              Pricing for Regular Escorts
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
                  Most popular option. Perfect for dinner, conversation, or a relaxed evening. Pay when she
                  arrives—cash or UPI. No advance required.
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
                  there—no advance required for regular escorts.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                <strong className="text-white">Note:</strong> Rates may vary slightly based on location and
                timing. We'll give you a clear quote when you message. Duration and area may affect the
                final quote. All payments are cash or UPI when she arrives—no advance required for regular
                escorts.
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
                text: "Tell us your city/area, when you need someone, and that you're looking for a regular escort. We'll ask basics like hotel or your place, timing, and any preferences. Quick response—usually within an hour or two.",
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
                text: "Regular escorts are easy to be around. They're good at conversation, comfortable in social settings, and genuinely pleasant company. Whether it's dinner, an event, or just talking, they make it feel natural.",
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
                We have regular escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are
                multilingual. If you want someone who can hold a conversation in a specific language—for a
                family function, a dinner where everyone's speaking that language, or just because you're
                more comfortable—tell us when you book.
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
                Regular escorts are naturally good at conversation. They know how to read the room, keep
                things comfortable, and make genuine connections. Whether you want to talk about work,
                travel, food, or just unwind, they're easy to be around.
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
                body: "All regular escorts are verified before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
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
                First Time Booking a Regular Escort?
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                A lot of our clients are first-timers. Regular escorts are perfect for first-time bookings
                because they're approachable, easy to talk to, and used to making people feel comfortable.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Know</h3>
                  <p className="text-white/75 leading-relaxed">
                    Regular escorts are used to first-time clients. They're not there to make you feel
                    awkward or uncomfortable. They're good at reading the situation and keeping things
                    relaxed. If you're nervous, that's normal—they understand and will help you feel at ease.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Have Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, have these ready: your city/area (or hotel name and area), when you
                    need someone (date and rough time), and what you have in mind (dinner, a few hours,
                    event, or just company). If you're at a hotel, we'll ask for proof and room details
                    before she starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">After Your Booking</h3>
                  <p className="text-white/75 leading-relaxed">
                    If something wasn't right on the day, tell us afterwards. We take feedback seriously.
                    The regular escorts we work with are professional and want to make sure you have a good
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
              Regular Escorts vs Other Categories
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding the difference helps you choose what's right for you.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                comparison: "Regular vs Models",
                text: "Regular escorts are more approachable and down-to-earth. Perfect for casual settings where you want genuine conversation. Models are more for high-profile events or when you want someone who turns heads. Regular escorts are about comfort and connection.",
              },
              {
                comparison: "Regular vs Housewife",
                text: "Both are approachable, but housewife escorts bring more life experience and maturity. Regular escorts are great for casual outings and relaxed evenings. Housewife escorts are better if you want someone with more life experience and emotional maturity.",
              },
              {
                comparison: "Regular vs College Girls",
                text: "Regular escorts are more established and comfortable in various settings. College girls bring youthful energy and a fresh perspective. Regular escorts are better if you want someone who's more settled and easy-going.",
              },
              {
                comparison: "Regular vs Celebrity/Actress",
                text: "Regular escorts are everyday people—no pretense, no airs. Celebrity and actress escorts are for high-profile events or when you want someone with a public presence. Regular escorts are about genuine, easy-going company.",
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
              Here are some real situations where regular escorts work perfectly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                scenario: "Business Trip",
                description:
                  "You're in Chennai for three days on work. Don't want to eat alone every night. Book a regular escort for dinner—someone easy to talk to who makes the evening feel natural. She shows up, you have dinner, good conversation, she leaves. Simple and comfortable.",
              },
              {
                scenario: "Local Event",
                description:
                  "You have a casual event or gathering and need a plus-one. Regular escorts are perfect because they know how to fit in and keep things comfortable. They're good at conversation and make it feel natural. No one needs to know—just good company.",
              },
              {
                scenario: "Quiet Evening",
                description:
                  "You just want someone to talk to or spend a quiet evening with. Regular escorts are great listeners and easy to be around. No pressure, no drama—just genuine company. Perfect for when you want connection without complications.",
              },
              {
                scenario: "Travel Companion",
                description:
                  "You're traveling and want company for meals or sightseeing. Regular escorts can join you for the day or multiple days. They're flexible, easy-going, and make travel feel less lonely. Same simple process—you book, they show up.",
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
              When to Book Regular Escorts
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
                  "Most popular option. We often confirm within a few hours. Regular escorts are flexible and can usually accommodate same-day requests. Perfect for when plans change or you decide last minute you want company.",
              },
              {
                timing: "Advance Bookings",
                details:
                  "For full-night bookings, multiple days, or specific events, advance notice helps. A day or two ahead gives us time to confirm who's free and arrange everything smoothly. Regular escorts appreciate knowing ahead of time.",
              },
              {
                timing: "Peak Times",
                details:
                  "Weekends and evenings in popular areas (like Chennai's OMR or Bangalore's Indiranagar) can get busy. A few hours' notice helps during peak times. Regular escorts are usually available, but advance notice ensures you get who you want.",
              },
              {
                timing: "Last Minute",
                details:
                  "Need someone in the next hour or two? We'll try our best. Regular escorts are often flexible, but availability depends on who's free. Message us and we'll see what we can arrange.",
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
                  "When you message, tell us what you have in mind—dinner, a few hours, event, or just company. Regular escorts are flexible, but knowing what you want helps us suggest the right person and set expectations.",
              },
              {
                tip: "Have Your Details Ready",
                explanation:
                  "If you're at a hotel, have proof and room details ready. If you're at your place, have the address and any gate or lobby instructions. Clear information means she arrives on time without confusion.",
              },
              {
                tip: "Be Respectful",
                explanation:
                  "Regular escorts are professionals. Treat them with respect and they'll do the same. They're there to provide good company—be courteous, be clear about timing, and everything will go smoothly.",
              },
              {
                tip: "Communicate Clearly",
                explanation:
                  "If something isn't working or you need to adjust timing, communicate clearly. Regular escorts are understanding and flexible. Clear communication prevents misunderstandings and makes the experience better for everyone.",
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
              Let's clear up some common questions and misconceptions about regular escorts.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                myth: "Regular escorts are less professional",
                truth:
                  "Not true. Regular escorts are just as professional—they're just more approachable and down-to-earth. They're good at what they do, they're reliable, and they understand discretion. The difference is in their style, not their professionalism.",
              },
              {
                myth: "You need to pay advance",
                truth:
                  "No. For regular escorts, we don't ask for advance payment. Hotel proof and room details if you're at a hotel, and you pay when she arrives. Simple and straightforward. No advance required.",
              },
              {
                myth: "Regular escorts are only for certain occasions",
                truth:
                  "Not at all. Regular escorts are versatile. They're great for casual dinners, events, quiet evenings, travel, or just company. They're flexible and adapt to what you need. Perfect for almost any situation where you want good company.",
              },
              {
                myth: "They're not as good at conversation",
                truth:
                  "Actually, regular escorts are often better at conversation because they're naturally easy-going and genuine. They're not trying to impress you—they're just good company. Many clients prefer regular escorts specifically because they're easier to talk to.",
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

      {/* City-Specific Information */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              City coverage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Regular Escorts by City
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Available across major cities in South India. Here's what to know about each city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "Chennai",
                info: "Most bookings in Chennai are for regular escorts. Popular areas include Nungambakkam, T Nagar, OMR, and Adyar. Outcall to hotels or your place. No advance required.",
              },
              {
                city: "Bangalore",
                info: "Regular escorts are very popular in Bangalore. Indiranagar, Koramangala, and Whitefield are common areas. Flexible timing, easy-going company. Perfect for IT professionals and business travelers.",
              },
              {
                city: "Hyderabad",
                info: "Regular escorts available in Hyderabad—Hitech City, Banjara Hills, and Gachibowli are popular. Great for business travelers and locals. Same simple process everywhere.",
              },
              {
                city: "Kochi",
                info: "Regular escorts in Kochi cover Marine Drive, Fort Kochi, Ernakulam, and Kakkanad. Popular with business travelers staying at hotels. No advance, pay when she arrives.",
              },
              {
                city: "Coimbatore",
                info: "Regular escorts available in Coimbatore. Popular with business travelers and locals. Same discretion and payment rules. Easy to book, easy-going company.",
              },
              {
                city: "Madurai",
                info: "Regular escorts in Madurai are approachable and easy to talk to. Great for locals and travelers. Flexible timing, genuine company. Same simple booking process.",
              },
            ].map((item) => (
              <div
                key={item.city}
                className="rounded-xl border border-white/10 bg-black/30 p-6 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">{item.city}</h3>
                <p className="text-white/75 leading-relaxed text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Regular Escorts Are Popular */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why they're popular
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Regular Escorts Are the Most Popular Choice
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              There's a reason most bookings are for regular escorts. Here's why.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                reason: "They're Approachable",
                explanation:
                  "Regular escorts don't make you feel like you need to impress them or be someone you're not. They're easy to talk to, comfortable to be around, and genuinely pleasant company. No pretense, no pressure—just natural interaction.",
              },
              {
                reason: "No Advance Payment",
                explanation:
                  "Unlike models or celebrity escorts, regular escorts don't require advance payment. Hotel proof and room details if you're at a hotel, and you pay when she arrives. Simple, straightforward, and less risky for you.",
              },
              {
                reason: "Great Value",
                explanation:
                  "Regular escorts offer genuine companionship at reasonable rates. You get good company, good conversation, and a comfortable experience without paying premium prices. Great value for what you get.",
              },
              {
                reason: "Versatile",
                explanation:
                  "Regular escorts work for almost any situation—dinner, events, quiet evenings, travel, or just company. They're flexible and adapt to what you need. One category that fits many different needs.",
              },
              {
                reason: "Reliable",
                explanation:
                  "Regular escorts are reliable and professional. They show up on time, they're easy to coordinate with, and they understand discretion. You can count on them to be there when you need them.",
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
              Regular escorts not quite right? Check out other categories that might fit better.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Housewife Escorts", slug: "housewife-escorts", desc: "Mature, grounded escorts with life experience. Great listeners, discreet, and understanding." },
              { name: "College Girls", slug: "college-girls-escorts", desc: "Young, fresh, and full of energy. Fun to be around, modern outlook, easy to chat with." },
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
                    When you message, be clear about what you want—timing, duration, occasion. Regular
                    escorts appreciate knowing what to expect. Clear communication prevents misunderstandings
                    and makes everything smoother.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Respect Boundaries</h3>
                  <p className="text-white/75 leading-relaxed">
                    Regular escorts are professionals providing a service. Treat them with respect. They're
                    there to provide good company—be courteous, be clear about timing, and respect their
                    boundaries. Professionalism goes both ways.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Be On Time</h3>
                  <p className="text-white/75 leading-relaxed">
                    If you've booked for a specific time, be ready when she arrives. Have your hotel proof
                    ready if you're at a hotel, or clear address instructions if you're at your place. Being
                    prepared shows respect for her time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Payment Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    Have payment ready—cash or UPI. Regular escorts don't require advance, but payment when
                    she arrives is expected. Having it ready makes the transaction smooth and professional.
                  </p>
                </div>
              </div>
            </div>
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
                body: "Message us with your city/area, when you need someone, and that you're looking for a regular escort. We'll ask the basics—hotel or your place, timing.",
              },
              {
                step: "2",
                title: "We Suggest Who's Free",
                body: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof and room details. You give her name at reception when she arrives.",
              },
              {
                step: "3",
                title: "She Arrives & You Pay",
                body: "Outcall only—she comes to your hotel or your place. Payment when she's there—cash or UPI. No advance payment required for regular escorts.",
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
              Simple payment process. No advance required for regular escorts.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Payment Methods</h3>
                <p className="text-white/75 mb-4">
                  We accept cash or UPI payments. Payment is made when the regular escort arrives at your
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
                  For regular escorts, no advance payment is required. Payment is made when she arrives at your
                  hotel or your place. Have payment ready—cash or UPI—to make the transaction smooth and
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
              <p className="text-white/75">Regular escorts are available across our covered cities. Same-day bookings are often possible; advance notice helps for full-night or multiple-day bookings.</p>
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
              { label: "Payment", detail: "Cash or UPI. Have it ready when she arrives. No advance required for regular escorts." },
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
              <p className="text-white/75">If you need to change the time or date, message us as soon as you can. We'll try to accommodate. No advance payment for regular escorts, so rescheduling is straightforward.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Cancellation</h3>
              <p className="text-white/75">If you need to cancel, tell us in good time. We don't charge cancellation fees for regular escorts since no advance is taken. Just let us know so we can free up the escort's time.</p>
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
              Common Questions About Regular Escorts
            </h2>
            <p className="text-lg text-white/60">
              Answered honestly. No fluff.
            </p>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Book a Regular Escort
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Message us with your city/area, when you need someone, and that you're looking for a regular
              escort. No advance payment required. We'll suggest who's free and can reach you on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on Telegram to book regular escorts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book regular escorts"
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
