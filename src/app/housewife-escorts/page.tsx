import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";

const base = getBaseUrl();
const url = `${base}/housewife-escorts`;

const metaTitle = "Housewife Escorts | Mature Companionship Across South India";
const metaDescription =
  "Housewife escorts for mature, grounded companionship. Discreet, understanding, great listeners. Available in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more. Tamil, Mallu, Telugu, Kannada. Outcall only. Pay when you meet.";

function buildHousewifeEscortsJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Categories", item: `${base}/categories` },
        { "@type": "ListItem", position: 3, name: "Housewife Escorts", item: url },
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
      name: "Housewife Escorts",
      description:
        "Mature, grounded companionship with housewife escorts across South India. Discreet, understanding, and great listeners. Available in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more.",
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
    "housewife escorts",
    "housewife escort service",
    "housewife escorts Chennai",
    "housewife escorts Bangalore",
    "housewife escorts Hyderabad",
    "housewife escorts Kochi",
    "housewife escorts Coimbatore",
    "housewife escorts Madurai",
    "mature escorts",
    "discreet escorts",
    "understanding escorts",
    "outcall housewife escorts",
    "no advance housewife escorts",
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
        alt: "Housewife escorts – mature companionship across South India",
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
  { label: "Mature & Grounded", icon: "🏠" },
  { label: "Great Listeners", icon: "💬" },
  { label: "Discreet Service", icon: "🔒" },
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
  { name: "Tamil Escorts", slug: "tamil", href: "/profiles/tamil/housewife" },
  { name: "Mallu Escorts", slug: "mallu", href: "/profiles/mallu/housewife" },
  { name: "Telugu Escorts", slug: "telugu", href: "/profiles/telugu/housewife" },
  { name: "Kannada Escorts", slug: "kannada", href: "/profiles/kannada/housewife" },
];

const WHY_HOUSEWIFE = [
  {
    title: "Life Experience",
    body: "Housewife escorts bring maturity and life experience to every meeting. They understand relationships, emotions, and what makes people comfortable. They're not trying to impress you—they're there to provide genuine, grounded company.",
  },
  {
    title: "Great Listeners",
    body: "One of the biggest reasons people choose housewife escorts is because they're excellent listeners. They know how to read situations, understand what you need, and provide emotional support when needed. They're discreet and understanding.",
  },
  {
    title: "Discreet & Safe",
    body: "Housewife escorts understand discretion better than most. They know how to keep things private, how to read a room, and how to make you feel safe and comfortable. No drama, no complications—just mature, reliable company.",
  },
  {
    title: "Comfortable Company",
    body: "There's something comforting about being with someone who's mature and grounded. Housewife escorts make you feel at ease. They're easy to talk to, understanding, and genuinely pleasant to be around. Perfect for when you want connection without pretense.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Mature Companionship",
    desc: "Perfect for when you want someone with life experience who understands relationships and emotions. Great for meaningful conversations and genuine connection.",
  },
  {
    title: "Emotional Support",
    desc: "Sometimes you need someone who can listen and understand. Housewife escorts are excellent listeners who know how to provide comfort and support when you need it.",
  },
  {
    title: "Discreet Meetings",
    desc: "Housewife escorts understand discretion. They know how to keep things private and make you feel safe. Perfect for when privacy matters most.",
  },
  {
    title: "Relaxed Evenings",
    desc: "Spend a quiet evening with someone mature and grounded. Housewife escorts are easy to be around, great conversation partners, and genuinely pleasant company.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What makes housewife escorts different from other categories?",
    a: "Housewife escorts bring maturity and life experience. They're excellent listeners, understand emotions, and know how to make you feel comfortable and safe. They're discreet, grounded, and provide genuine companionship without pretense. Perfect for when you want mature, understanding company.",
  },
  {
    q: "Do I need to pay advance for housewife escorts?",
    a: "No. For housewife escorts, we don't ask for advance payment. If you're at a hotel, we need proof you're staying there and your room details. You give her name at reception when she arrives. Payment is when she's there—cash or UPI. Simple and straightforward.",
  },
  {
    q: "What cities do you cover for housewife escorts?",
    a: "We cover Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai, Trivandrum, Vijayawada, Mysore, Pondicherry and more across South India. Tell us your city and area when you book, and we'll suggest who's available and can reach you on time.",
  },
  {
    q: "Are housewife escorts good for first-time bookings?",
    a: "Yes. Housewife escorts are excellent for first-time bookings because they're understanding, patient, and know how to make you feel comfortable. They're used to different situations and are great at reading what you need. No pressure, just mature, supportive company.",
  },
  {
    q: "How do housewife escorts compare to regular escorts?",
    a: "Both are approachable, but housewife escorts bring more life experience and emotional maturity. They're better listeners, more understanding, and provide deeper emotional support. Regular escorts are great for casual outings; housewife escorts are better when you want someone with more maturity and understanding.",
  },
  {
    q: "What languages do housewife escorts speak?",
    a: "We have housewife escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are multilingual. If you want someone who can speak a specific language, tell us when you book and we'll suggest who fits.",
  },
  {
    q: "How do I book a housewife escort?",
    a: "Message us on Telegram. Tell us your city/area, when you need someone, and that you're looking for a housewife escort. We'll suggest who's free and can reach you. Same-day and advance bookings both work. No advance payment required.",
  },
  {
    q: "Are housewife escorts verified?",
    a: "Yes. We verify all profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
  },
];

export default function HousewifeEscortsPage() {
  const jsonLd = buildHousewifeEscortsJsonLd();
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
            alt="Housewife escorts – mature companionship across South India"
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
                <span className="text-2xl">🏠</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                  Housewife Escorts
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Housewife Escorts
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Mature, grounded companionship. Discreet, understanding, great listeners.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Housewife escorts bring warmth and life experience to every meeting. They're discreet,
                understanding, and excellent listeners—the kind of company that feels comfortable and safe.
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
            <strong className="text-white">Housewife escorts</strong> for mature companionship in{" "}
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

      {/* What Housewife Escorts Are */}
      <section className="w-full border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <Image
                src="/images/artists-escorts.avif"
                alt="Housewife escorts – mature, grounded companionship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                What Are Housewife Escorts?
              </h2>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                Housewife escorts are mature, grounded women who bring life experience and understanding to
                every meeting. They're not trying to impress you with youth or glamour—they're there to
                provide genuine companionship based on maturity, emotional intelligence, and genuine care.
              </p>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                What makes them special is their ability to listen, understand, and provide emotional support.
                They know how to read situations, make you feel comfortable, and create a safe, discreet
                environment. They're excellent conversation partners who understand relationships, emotions,
                and what people really need.
              </p>
              <p className="text-lg leading-relaxed text-white/85">
                Many clients choose housewife escorts because they want someone who understands life, who can
                provide emotional support, and who knows how to keep things discreet and comfortable. Whether
                it's a quiet evening, meaningful conversation, or emotional support, housewife escorts make it
                feel natural and safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Housewife Escorts - Cards Grid */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why choose housewife escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Appeal of Housewife Escorts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Mature companionship with understanding and discretion. Here's what makes housewife escorts
              special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_HOUSEWIFE.map((item, i) => (
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
              Housewife Escorts by Language
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We have housewife escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Choose a
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
                <p className="text-sm text-white/60 mb-4">Housewife escorts</p>
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
              Housewife escorts are perfect for mature companionship and emotional support.
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
              Housewife escorts available across South India. Tell us your city and we'll suggest who's free.
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

      {/* Who Books Housewife Escorts */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Who books housewife escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Chooses Housewife Escorts?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Different people, different reasons. All looking for mature, understanding company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Those Seeking Maturity",
                body: "You want someone with life experience who understands relationships and emotions. Housewife escorts bring maturity and emotional intelligence that makes conversations meaningful and connections genuine.",
              },
              {
                title: "Need for Emotional Support",
                body: "Sometimes you need someone who can listen and understand. Housewife escorts are excellent listeners who know how to provide comfort, support, and understanding when you need it most.",
              },
              {
                title: "Discretion Matters",
                body: "Privacy is important to you. Housewife escorts understand discretion better than most. They know how to keep things private, how to read situations, and how to make you feel safe and comfortable.",
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
              Housewife escorts offer flexible durations. All outcall to your hotel or your place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Short Time (2-3 hours)",
                desc: "Perfect for meaningful conversation, emotional support, or a relaxed evening. She comes to you for 2-3 hours (or as agreed). Enough time to connect and feel comfortable. Pay when she arrives—no advance required.",
              },
              {
                title: "Dinner or Evening",
                desc: "A fixed slot for a specific occasion—dinner, event, or quiet evening. We need the start time and roughly when it ends. Housewife escorts are great at making you feel comfortable and understood. Same payment rules apply.",
              },
              {
                title: "Full Night",
                desc: "Dinner plus the night—typically 8-10 hours or as agreed. Advance notice helps so we can confirm who's free. Housewife escorts are flexible with timing. Payment when she's there—no advance required.",
              },
              {
                title: "Multiple Days",
                desc: "If you're in town for a few days and want consistent, mature company, we can arrange for a housewife escort to join you over multiple days. Advance notice required. Same discretion and payment rules—pay when she's with you each day.",
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
              Pricing for Housewife Escorts
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
                  ₹12,000 – ₹18,000
                </p>
                <p className="text-white/75">
                  Perfect for meaningful conversation and emotional support. Pay when she arrives—cash or
                  UPI. No advance required.
                </p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">Dinner or Evening</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹15,000 – ₹22,000
                </p>
                <p className="text-white/75">
                  Fixed slot for a specific occasion. We need start and end times. Same payment rules—pay
                  when she arrives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Full Night</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹35,000 – ₹55,000
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
              Mature, understanding company. Here's what happens from booking to meeting.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "You Message Us",
                text: "Tell us your city/area, when you need someone, and that you're looking for a housewife escort. We'll ask basics like hotel or your place, timing, and any preferences. Quick response—usually within an hour or two.",
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
                text: "Housewife escorts are mature, understanding, and excellent listeners. They know how to make you feel comfortable, provide emotional support when needed, and create a safe, discreet environment. Whether it's conversation, emotional support, or quiet company, they make it feel natural.",
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
                We have housewife escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are
                multilingual. If you want someone who can hold a conversation in a specific language—for
                emotional support, meaningful conversation, or just because you're more comfortable—tell us
                when you book.
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
                Housewife escorts are naturally good at conversation and emotional connection. They know how
                to listen, understand, and provide support. Whether you want to talk about life, emotions,
                relationships, or just unwind, they're easy to be around and genuinely understanding.
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
              Your privacy is non-negotiable. Housewife escorts understand discretion better than most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Complete Discretion",
                body: "We don't share your number with the escorts. All coordination goes through us. Housewife escorts understand discretion and know how to keep things private. Your booking stays between you and us. Discretion is built into everything we do.",
              },
              {
                title: "Verified Profiles",
                body: "All housewife escorts are verified before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
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
                First Time Booking a Housewife Escort?
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                Housewife escorts are excellent for first-time bookings because they're understanding,
                patient, and know how to make you feel comfortable. They're used to different situations and
                are great at reading what you need.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Know</h3>
                  <p className="text-white/75 leading-relaxed">
                    Housewife escorts are understanding and patient. They're not there to make you feel
                    awkward or uncomfortable. They know how to read situations, provide emotional support,
                    and make you feel safe. If you're nervous, that's normal—they understand and will help
                    you feel at ease.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Have Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, have these ready: your city/area (or hotel name and area), when you
                    need someone (date and rough time), and what you have in mind (conversation, emotional
                    support, quiet evening, or just company). If you're at a hotel, we'll ask for proof and
                    room details before she starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">After Your Booking</h3>
                  <p className="text-white/75 leading-relaxed">
                    If something wasn't right on the day, tell us afterwards. We take feedback seriously.
                    The housewife escorts we work with are professional and want to make sure you have a good
                    experience. Your comfort and satisfaction matter.
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
              Housewife Escorts vs Other Categories
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding the difference helps you choose what's right for you.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                comparison: "Housewife vs Regular",
                text: "Both are approachable, but housewife escorts bring more life experience and emotional maturity. They're better listeners, more understanding, and provide deeper emotional support. Regular escorts are great for casual outings; housewife escorts are better when you want someone with more maturity and understanding.",
              },
              {
                comparison: "Housewife vs College Girls",
                text: "Housewife escorts bring maturity and life experience. College girls bring youthful energy and a fresh perspective. Housewife escorts are better if you want someone who understands relationships, emotions, and can provide emotional support. College girls are better for fun, energetic outings.",
              },
              {
                comparison: "Housewife vs Models",
                text: "Housewife escorts focus on emotional connection and understanding. Models focus on appearance and presence. Housewife escorts are better for meaningful conversation and emotional support. Models are better for events and when you want someone who turns heads.",
              },
              {
                comparison: "Housewife vs Celebrity/Actress",
                text: "Housewife escorts are grounded and understanding. Celebrity and actress escorts are for high-profile events or when you want someone with a public presence. Housewife escorts are about genuine emotional connection and support.",
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
              Here are some real situations where housewife escorts work perfectly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                scenario: "Emotional Support",
                description:
                  "You're going through a difficult time and need someone understanding to talk to. Housewife escorts are great listeners who provide emotional support without judgment. They understand relationships, life challenges, and can offer genuine comfort and companionship.",
              },
              {
                scenario: "Mature Conversation",
                description:
                  "You want meaningful conversation with someone who has life experience. Housewife escorts bring maturity and understanding to every conversation. They can talk about relationships, family, life, or anything that matters to you. Perfect for when you want depth, not just surface-level chat.",
              },
              {
                scenario: "Discreet Meeting",
                description:
                  "You need someone for a private, discreet meeting where understanding and maturity matter. Housewife escorts understand discretion and know how to keep things confidential. They're grounded, professional, and make you feel safe and comfortable.",
              },
              {
                scenario: "Comfortable Evening",
                description:
                  "You want a quiet, comfortable evening with someone who feels like genuine company. Housewife escorts bring warmth and understanding. They know how to make you feel at ease and create a comfortable atmosphere. Perfect for when you want connection without complications.",
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
              When to Book Housewife Escorts
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
                  "Most popular option. We often confirm within a few hours. Housewife escorts are flexible and can usually accommodate same-day requests. Perfect for when you need emotional support or mature company on short notice.",
              },
              {
                timing: "Advance Bookings",
                details:
                  "For full-night bookings, multiple days, or when you want to ensure availability, advance notice helps. A day or two ahead gives us time to confirm who's free and arrange everything smoothly. Housewife escorts appreciate knowing ahead of time.",
              },
              {
                timing: "Evening Bookings",
                details:
                  "Evenings are popular for housewife escorts—perfect for quiet dinners, meaningful conversation, or emotional support. Weekends can get busy, so a few hours' notice helps during peak times. Housewife escorts are usually available.",
              },
              {
                timing: "Last Minute",
                details:
                  "Need someone in the next hour or two? We'll try our best. Housewife escorts are often flexible, but availability depends on who's free. Message us and we'll see what we can arrange.",
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
                tip: "Be Open About What You Need",
                explanation:
                  "When you message, tell us what you're looking for—emotional support, mature conversation, discreet meeting, or just comfortable company. Housewife escorts are understanding, but knowing what you need helps us suggest the right person.",
              },
              {
                tip: "Have Your Details Ready",
                explanation:
                  "If you're at a hotel, have proof and room details ready. If you're at your place, have the address and any gate or lobby instructions. Clear information means she arrives on time without confusion.",
              },
              {
                tip: "Be Respectful and Understanding",
                explanation:
                  "Housewife escorts are professionals who provide emotional support and mature companionship. Treat them with respect and they'll do the same. They're there to provide understanding company—be courteous, be clear about timing, and everything will go smoothly.",
              },
              {
                tip: "Communicate Your Needs",
                explanation:
                  "If you need someone to listen, to talk, or just to be there, communicate that. Housewife escorts are great at adapting to what you need. Clear communication helps them provide the best experience for you.",
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
              Let's clear up some common questions and misconceptions about housewife escorts.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                myth: "Housewife escorts are less professional",
                truth:
                  "Not true. Housewife escorts are just as professional—they just bring more maturity and life experience. They're good at what they do, they're reliable, and they understand discretion. The difference is in their maturity and understanding, not their professionalism.",
              },
              {
                myth: "You need to pay advance",
                truth:
                  "No. For housewife escorts, we don't ask for advance payment. Hotel proof and room details if you're at a hotel, and you pay when she arrives. Simple and straightforward. No advance required.",
              },
              {
                myth: "Housewife escorts are only for older clients",
                truth:
                  "Not at all. Clients of all ages choose housewife escorts because they want mature, understanding company. Whether you're young and need someone to talk to, or older and want someone with life experience, housewife escorts work for everyone.",
              },
              {
                myth: "They're not as engaging or interesting",
                truth:
                  "Actually, housewife escorts are often more engaging because they have life experience and can talk about real things. They're great listeners, they understand relationships and emotions, and they provide genuine emotional support. Many clients prefer housewife escorts specifically because of their maturity and understanding.",
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
              Housewife escorts not quite right? Check out other categories that might fit better.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Regular Escorts", slug: "regular-escorts", desc: "Everyday, approachable people who are easy to talk to. Great for casual outings and relaxed evenings." },
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
                  <h3 className="text-lg font-bold text-white mb-2">Be Clear About Your Needs</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, be clear about what you're looking for—emotional support, conversation, or
                    just comfortable company. Housewife escorts appreciate knowing what to expect. Clear
                    communication prevents misunderstandings and makes everything smoother.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Respect Boundaries</h3>
                  <p className="text-white/75 leading-relaxed">
                    Housewife escorts are professionals providing emotional support and mature companionship. Treat
                    them with respect. They're there to provide understanding company—be courteous, be clear
                    about timing, and respect their boundaries. Professionalism goes both ways.
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
                    Have payment ready—cash or UPI. Housewife escorts don't require advance, but payment when she
                    arrives is expected. Having it ready makes the transaction smooth and professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Housewife Escorts Are Special */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why they're special
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Housewife Escorts Are a Popular Choice
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              There's a reason many clients choose housewife escorts. Here's why.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                reason: "Mature and Understanding",
                explanation:
                  "Housewife escorts bring life experience and emotional maturity. They understand relationships, emotions, and can provide genuine emotional support. They're great listeners who know how to make you feel heard and understood.",
              },
              {
                reason: "No Advance Payment",
                explanation:
                  "Unlike models or celebrity escorts, housewife escorts don't require advance payment. Hotel proof and room details if you're at a hotel, and you pay when she arrives. Simple, straightforward, and less risky for you.",
              },
              {
                reason: "Discreet and Professional",
                explanation:
                  "Housewife escorts understand discretion and privacy. They're professional, reliable, and know how to keep things confidential. You can trust them to be discreet and maintain your privacy.",
              },
              {
                reason: "Emotional Support",
                explanation:
                  "Housewife escorts provide genuine emotional support and understanding. They're not just company—they're someone who can listen, understand, and provide comfort. Perfect for when you need someone who gets it.",
              },
              {
                reason: "Comfortable and Safe",
                explanation:
                  "Housewife escorts create a comfortable, safe atmosphere. They know how to make you feel at ease and create a space where you can relax and be yourself. Many clients feel more comfortable with housewife escorts because of their maturity and understanding.",
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
                body: "Message us with your city/area, when you need someone, and that you're looking for a housewife escort. We'll ask the basics—hotel or your place, timing, what you're looking for.",
              },
              {
                step: "2",
                title: "We Suggest Who's Free",
                body: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof and room details. You give her name at reception when she arrives.",
              },
              {
                step: "3",
                title: "She Arrives & You Pay",
                body: "Outcall only—she comes to your hotel or your place. Payment when she's there—cash or UPI. No advance payment required for housewife escorts.",
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
              Simple payment process. No advance required for housewife escorts.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Payment Methods</h3>
                <p className="text-white/75 mb-4">
                  We accept cash or UPI payments. Payment is made when the housewife escort arrives at your
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
                  For housewife escorts, no advance payment is required. Payment is made when she arrives at
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
              Housewife Escorts by City
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Available across major cities in South India. Here's what to know about each city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Chennai", info: "Housewife escorts in Chennai cover Nungambakkam, T Nagar, OMR, Adyar and more. Mature, understanding company. Outcall to hotels or your place. No advance required." },
              { city: "Bangalore", info: "Housewife escorts are popular in Bangalore—Indiranagar, Koramangala, Whitefield. Great for emotional support and mature conversation. Same simple process." },
              { city: "Hyderabad", info: "Housewife escorts in Hyderabad—Hitech City, Banjara Hills, Gachibowli. Discreet, understanding. Perfect for business travelers and locals." },
              { city: "Kochi", info: "Housewife escorts in Kochi cover Marine Drive, Ernakulam, Kakkanad. Mature companionship. No advance, pay when she arrives." },
              { city: "Coimbatore", info: "Housewife escorts available in Coimbatore. Same discretion and payment rules. Mature, grounded company." },
              { city: "Madurai", info: "Housewife escorts in Madurai offer mature companionship and emotional support. Flexible timing, same booking process." },
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
              <p className="text-white/75">Housewife escorts are available across our covered cities. Same-day bookings are often possible; advance notice helps for full-night or multiple-day bookings.</p>
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
              { label: "Payment", detail: "Cash or UPI. Have it ready when she arrives. No advance required for housewife escorts." },
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
              <p className="text-white/75">If you need to change the time or date, message us as soon as you can. We'll try to accommodate. No advance payment for housewife escorts, so rescheduling is straightforward.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Cancellation</h3>
              <p className="text-white/75">If you need to cancel, tell us in good time. We don't charge cancellation fees for housewife escorts since no advance is taken. Just let us know so we can free up the escort's time.</p>
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
              Common Questions About Housewife Escorts
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
            <h2 className="text-3xl font-bold text-white mb-4">Book a Housewife Escort</h2>
            <p className="text-white/70 mb-8 text-lg">
              Message us with your city/area, when you need someone, and that you're looking for a housewife
              escort. No advance payment required. We'll suggest who's free and can reach you on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on Telegram to book housewife escorts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book housewife escorts"
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
