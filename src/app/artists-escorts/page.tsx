import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";

const base = getBaseUrl();
const url = `${base}/artists-escorts`;

const metaTitle = "Artists & Performers Escorts | Creative, Cultural Companions";
const metaDescription =
  "Artists and performers escorts for cultural events, art shows, conversations and evenings with a creative touch. Available across Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more. Tamil, Mallu, Telugu, Kannada. Outcall only. Pay when you meet.";

function buildArtistsJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Categories", item: `${base}/categories` },
        { "@type": "ListItem", position: 3, name: "Artists & Performers Escorts", item: url },
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
      name: "Artists & Performers Escorts",
      description:
        "Creative escorts from the arts—dancers, musicians, performers—who bring culture, conversation, and presence to your evenings and events across South India.",
      url,
      image: `${base}/images/artists-escorts.avif`,
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
    "artist escorts",
    "artists escorts",
    "performer escorts",
    "artists escorts Chennai",
    "artists escorts Bangalore",
    "artists escorts Hyderabad",
    "artists escorts Kochi",
    "artists escorts Coimbatore",
    "artists escorts Madurai",
    "creative escorts",
    "cultural escorts",
    "dancer escorts",
    "musician escorts",
    "outcall artist escorts",
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
        url: `${base}/images/artists-escorts.avif`,
        width: 1200,
        height: 630,
        alt: "Artists & Performers escorts – creative, cultural companionship across South India",
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
  { label: "Creative & Expressive", icon: "🎭" },
  { label: "Cultural Insight", icon: "🎨" },
  { label: "Intellectual Conversation", icon: "💬" },
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

const MORE_CITIES: { name: string; slug: string }[] = [];

const ESCORT_TYPES = [
  { name: "Tamil Escorts", slug: "tamil", href: "/profiles/tamil/artists" },
  { name: "Mallu Escorts", slug: "mallu", href: "/profiles/mallu/artists" },
  { name: "Telugu Escorts", slug: "telugu", href: "/profiles/telugu/artists" },
  { name: "Kannada Escorts", slug: "kannada", href: "/profiles/kannada/artists" },
];

const WHY_ARTISTS = [
  {
    title: "Creative & Expressive",
    body: "Artists and performers bring creativity, expression, and a unique perspective to every meeting. They're passionate about their craft, whether it's dance, music, or performance. If you enjoy culture, art, or creative conversation, artists and performers are perfect.",
  },
  {
    title: "Intellectual Conversation",
    body: "Artists and performers are often thoughtful, well-read, and great at conversation. They can talk about art, culture, life, or anything that interests you. Perfect for evenings where you want engaging, meaningful conversation.",
  },
  {
    title: "Cultural Insight",
    body: "Artists and performers understand culture, tradition, and the arts. They bring insight into cultural events, art shows, or performances. If you're interested in culture or want someone who appreciates the arts, they're ideal.",
  },
  {
    title: "Expressive & Engaging",
    body: "Artists and performers are naturally expressive and engaging. They know how to connect, how to express themselves, and how to make conversations feel alive. They bring energy and presence to every meeting.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "Cultural Events",
    desc: "Perfect for art shows, cultural events, or performances. Artists and performers understand the arts and bring cultural insight.",
  },
  {
    title: "Intellectual Evenings",
    desc: "Great for evenings where you want engaging, meaningful conversation. Artists and performers are thoughtful and great at talking about art, culture, or life.",
  },
  {
    title: "Creative Company",
    desc: "If you enjoy creativity, expression, or the arts, artists and performers bring that energy. They're passionate about their craft and bring something unique.",
  },
  {
    title: "Art Shows & Galleries",
    desc: "Perfect for gallery openings, art shows, or cultural gatherings. Artists and performers appreciate the arts and fit naturally into these settings.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What makes artists and performers escorts different from other categories?",
    a: "Artists and performers bring creativity, expression, and cultural insight. They're passionate about their craft—whether dance, music, or performance—and bring that energy to every meeting. Perfect if you enjoy culture, art, or intellectual conversation. They're expressive, engaging, and bring something unique.",
  },
  {
    q: "Do I need to pay advance for artists escorts?",
    a: "For artists escorts, advance payment may be required depending on the booking. If you're at a hotel, we need proof you're staying there and your room details. You give her name at reception when she arrives. Payment terms will be discussed when you book.",
  },
  {
    q: "What cities do you cover for artists escorts?",
    a: "We cover Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more across South India. Tell us your city and area when you book, and we'll suggest who's available and can reach you on time.",
  },
  {
    q: "Are artists escorts good for first-time bookings?",
    a: "Yes. Artists and performers are expressive, engaging, and great at making you feel comfortable. They're naturally good at conversation and connection. They understand discretion and will help you feel at ease.",
  },
  {
    q: "How do artists escorts compare to regular escorts?",
    a: "Artists and performers bring creativity, cultural insight, and intellectual conversation. Regular escorts are more approachable and down-to-earth. Artists are better for cultural events, art shows, or when you want engaging conversation. Regular escorts are better for casual, relaxed settings.",
  },
  {
    q: "What languages do artists escorts speak?",
    a: "We have artists escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are multilingual. If you want someone who can speak a specific language, tell us when you book and we'll suggest who fits.",
  },
  {
    q: "How do I book an artist escort?",
    a: "Message us on Telegram. Tell us your city/area, when you need someone, and that you're looking for an artist or performer escort. We'll suggest who's free and can reach you. Advance bookings are recommended.",
  },
  {
    q: "Are artists escorts verified?",
    a: "Yes. We verify all profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
  },
];

export default function ArtistsEscortsPage() {
  const jsonLd = buildArtistsJsonLd();
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
            src="/images/artists-escorts.avif"
            alt="Artists & Performers escorts – creative, cultural companionship across South India"
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
                <span className="text-2xl">🎭</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                  Artists & Performers
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Artists & Performers Escorts
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                Creative, expressive. Perfect for cultural events and intellectual conversation.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Artists and performers bring creativity, culture, and engaging conversation to every meeting.
                They're passionate about their craft—whether dance, music, or performance—and bring that
                energy and insight to your evenings.
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
            <strong className="text-white">Artists and performers escorts</strong> for cultural events, art
            shows, and evenings with a creative touch in <strong className="text-white">Chennai</strong>,{" "}
            <strong className="text-white">Bangalore</strong>, <strong className="text-white">Hyderabad</strong>
            , Kochi, Coimbatore, Madurai and across South India. Outcall to your hotel or place. Discreet,
            verified, pay when you meet.
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

      {/* What Artists Escorts Are */}
      <section className="w-full border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <Image
                src="/images/artists-escorts.avif"
                alt="Artists & Performers escorts – creative, cultural companionship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                What Are Artists & Performers Escorts?
              </h2>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                Artists and performers escorts are creative souls from the arts—dancers, musicians, performers,
                and artists—who bring creativity, expression, and cultural insight to every meeting. They're not
                just companions; they're passionate about their craft and bring that energy to your evenings.
              </p>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                What makes them special is their creativity and expression. They understand culture, tradition,
                and the arts. They're thoughtful, well-read, and great at conversation. Whether it's talking
                about art, culture, life, or anything that interests you, they bring engaging, meaningful
                conversation.
              </p>
              <p className="text-lg leading-relaxed text-white/85">
                Many clients choose artists and performers because they want someone creative and expressive for
                cultural events, art shows, or evenings where intellectual conversation matters. Whether it's a
                gallery opening, cultural event, or private evening, artists and performers make it feel special
                and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Artists Escorts - Cards Grid */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why choose artists escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Appeal of Artists & Performers
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Creative, expressive, and culturally aware. Here's what makes artists and performers special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_ARTISTS.map((item, i) => (
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
              Artists Escorts by Language
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We have artists escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Choose a type
              to see available profiles.
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
                <p className="text-sm text-white/60 mb-4">Artists escorts</p>
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
              Artists and performers are perfect for cultural events, art shows, and intellectual evenings.
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
              Artists escorts available across South India. Tell us your city and we'll suggest who's free.
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

      {/* Who Books Artists Escorts */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Who books artists escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Chooses Artists & Performers?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Different people, different reasons. All looking for creative, expressive company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Art Enthusiasts",
                body: "Interested in art, culture, or the creative arts and want someone who appreciates and understands these things. Artists and performers bring cultural insight and creative conversation. Perfect for gallery openings, art shows, or cultural events.",
              },
              {
                title: "Intellectuals",
                body: "Looking for engaging, meaningful conversation and someone who can talk about art, culture, life, or anything that interests you. Artists and performers are thoughtful, well-read, and great at conversation. Perfect for evenings where intellectual conversation matters.",
              },
              {
                title: "Cultural Event Attendees",
                body: "Attending cultural events, performances, or art shows and want someone who fits naturally into these settings. Artists and performers understand culture and the arts. They bring creativity and expression to every meeting.",
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
              Artists escorts offer flexible durations. All outcall to your hotel or your place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Short Time (2-3 hours)",
                desc: "Perfect for art shows, cultural events, or occasions where you need creative company. She comes to you for 2-3 hours (or as agreed). Enough time to enjoy each other's company and conversation. Payment terms discussed when you book.",
              },
              {
                title: "Dinner or Evening",
                desc: "A fixed slot for a specific occasion—gallery opening, cultural event, or intellectual evening. We need the start time and roughly when it ends. Artists escorts are great at fitting into cultural settings. Payment terms discussed when you book.",
              },
              {
                title: "Full Night",
                desc: "Dinner plus the night—typically 8-10 hours or as agreed. Advance notice helps so we can confirm who's free. Artists escorts are flexible with timing. Payment terms discussed when you book.",
              },
              {
                title: "Multiple Days",
                desc: "If you're in town for a few days and want consistent, creative company, we can arrange for an artist escort to join you over multiple days. Advance notice required. Payment terms discussed when you book.",
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
              Pricing for Artists Escorts
            </h2>
            <p className="text-lg text-white/70">
              Clear rates. Payment terms discussed when you book.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">Short Time (2-3 hours)</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹15,000 – ₹25,000
                </p>
                <p className="text-white/75">
                  Perfect for art shows, cultural events, or occasions where you need creative company.
                  Payment terms discussed when you book.
                </p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">Dinner or Evening</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹20,000 – ₹30,000
                </p>
                <p className="text-white/75">
                  Fixed slot for a specific occasion. We need start and end times. Payment terms discussed when
                  you book.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Full Night</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹50,000 – ₹80,000
                </p>
                <p className="text-white/75">
                  Dinner plus the night—typically 8-10 hours. Advance notice helps. Payment terms discussed when
                  you book.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/60">
                <strong className="text-white">Note:</strong> Rates may vary based on location, timing, and
                specific requirements. We'll give you a clear quote when you message. Duration and area may
                affect the final quote. Payment terms will be discussed when you book.
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
                text: "Tell us your city/area, when you need someone, and that you're looking for an artist or performer escort. We'll ask basics like hotel or your place, timing, occasion type, and any preferences. Quick response—usually within an hour or two.",
              },
              {
                step: "We Confirm Who's Free",
                text: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof (room key photo or bill) and your room number. You give her name at reception when she arrives so she can come up. Payment terms will be discussed.",
              },
              {
                step: "She Arrives",
                text: "Outcall only—she comes to your hotel or your place. Have the address and any gate or lobby instructions ready. She'll arrive at the agreed time, ready for your occasion. Payment as discussed when you booked.",
              },
              {
                step: "Your Time Together",
                text: "Artists and performers are creative, expressive, and engaging. They bring cultural insight, intellectual conversation, and creative energy. Whether it's an art show, cultural event, or private evening, they make it feel special and engaging.",
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
                We have artists escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are
                multilingual. If you want someone who can hold a conversation in a specific language—for a
                cultural event, art show, or just because you're more comfortable—tell us when you book.
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
                Artists and performers are naturally good at conversation and expression. They know how to
                engage, how to express themselves, and how to make conversations feel alive. Whether you want to
                talk about art, culture, or just have engaging conversation, they're thoughtful and easy to be
                around.
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
                body: "All artists escorts are verified before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
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
                First Time Booking an Artist Escort?
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                Artists and performers are expressive, engaging, and great at making you feel comfortable.
                They're naturally good at conversation and connection. They understand discretion and will help
                you feel at ease.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Know</h3>
                  <p className="text-white/75 leading-relaxed">
                    Artists and performers are used to first-time clients. They're not there to make you feel
                    awkward or uncomfortable. They're creative, expressive, and good at keeping things relaxed.
                    If you're nervous, that's normal—they understand and will help you feel at ease.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Have Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, have these ready: your city/area (or hotel name and area), when you need
                    someone (date and rough time), what type of occasion (art show, cultural event, etc.), and
                    any preferences. If you're at a hotel, we'll ask for proof and room details before she
                    starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">After Your Booking</h3>
                  <p className="text-white/75 leading-relaxed">
                    If something wasn't right on the day, tell us afterwards. We take feedback seriously. The
                    artists escorts we work with are professional and want to make sure you have a good
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
              Artists Escorts vs Other Categories
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding the difference helps you choose what's right for you.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                comparison: "Artists vs Regular",
                text: "Artists and performers bring creativity, cultural insight, and intellectual conversation. Regular escorts are more approachable and down-to-earth. Artists are better for cultural events, art shows, or when you want engaging conversation. Regular escorts are better for casual, relaxed settings.",
              },
              {
                comparison: "Artists vs College Girls",
                text: "Artists and performers bring creativity and cultural insight. College girls bring youthful energy and a modern perspective. Artists are better for cultural events, art shows, or intellectual conversation. College girls are better for casual, fun outings.",
              },
              {
                comparison: "Artists vs Models",
                text: "Artists and performers bring creativity and cultural insight. Models bring style and photogenic presence. Artists are better for cultural events, art shows, or intellectual conversation. Models are better for fashion events and glamorous occasions.",
              },
              {
                comparison: "Artists vs Celebrity/Actress",
                text: "Artists and performers bring creativity and cultural insight. Celebrity and actress escorts bring public recognition and high-profile presence. Artists are better for cultural events and intellectual conversation. Celebrity/actress escorts are better for high-profile events where recognition matters.",
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
              Here are some real situations where artists and performers work perfectly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                scenario: "Gallery Opening",
                description:
                  "You're attending a gallery opening or art show and want someone who appreciates and understands art. Artists and performers are perfect because they bring cultural insight and creative conversation. They fit naturally into these settings.",
              },
              {
                scenario: "Cultural Event",
                description:
                  "You're attending a cultural event, performance, or art show and want creative company. Artists and performers understand culture and the arts. They bring creativity and expression to every meeting.",
              },
              {
                scenario: "Intellectual Evening",
                description:
                  "You want engaging, meaningful conversation and someone who can talk about art, culture, or life. Artists and performers are thoughtful, well-read, and great at conversation. Perfect for evenings where intellectual conversation matters.",
              },
              {
                scenario: "Private Evening",
                description:
                  "You want creative, expressive company for a private dinner or evening. Artists and performers bring creativity and cultural insight. They know how to engage and make conversations feel alive.",
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
              When to Book Artists Escorts
            </h2>
            <p className="text-lg text-white/70">
              Advance bookings recommended. Same-day bookings possible but subject to availability.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                timing: "Advance Bookings",
                details:
                  "Recommended for artists escorts. A day or two ahead gives us time to confirm who's free and arrange everything smoothly. Artists escorts appreciate advance notice, especially for cultural events, art shows, or intellectual evenings.",
              },
              {
                timing: "Same-Day Bookings",
                details:
                  "Possible but subject to availability. We'll try our best to confirm within a few hours. Artists escorts are flexible, but advance notice ensures you get who you want. Perfect for when plans change or you decide last minute.",
              },
              {
                timing: "Cultural Event Bookings",
                details:
                  "For art shows, gallery openings, or cultural events, advance notice is essential. Artists escorts need time to prepare and understand the occasion. A few days ahead ensures everything is perfect for your cultural event.",
              },
              {
                timing: "Last Minute",
                details:
                  "Need someone in the next hour or two? We'll try our best, but availability may be limited. Artists escorts are often booked in advance, so last-minute requests depend on who's free. Message us and we'll see what we can arrange.",
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
                tip: "Be Clear About the Occasion",
                explanation:
                  "When you message, tell us what type of occasion—art show, cultural event, gallery opening, or intellectual evening. Artists escorts need to know what to expect and how to prepare. Clear information helps them bring the right energy and insight.",
              },
              {
                tip: "Have Your Details Ready",
                explanation:
                  "If you're at a hotel, have proof and room details ready. If you're at your place, have the address and any gate or lobby instructions. Clear information means she arrives on time, ready for your occasion.",
              },
              {
                tip: "Be Respectful",
                explanation:
                  "Artists escorts are professionals who bring creativity and cultural insight. Treat them with respect and they'll do the same. They're there to provide engaging, expressive company—be courteous, be clear about timing, and everything will go smoothly.",
              },
              {
                tip: "Discuss Payment Terms",
                explanation:
                  "For artists escorts, advance payment may be required depending on the booking. Payment terms will be discussed when you book. Be clear about payment method and timing. Having payment ready makes the transaction smooth and professional.",
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
              Let's clear up some common questions and misconceptions about artists escorts.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                myth: "Artists escorts are only for art enthusiasts",
                truth:
                  "Not true. Artists escorts bring creativity and cultural insight, but they're also engaging and great at conversation. They work for many occasions—cultural events, intellectual evenings, or just when you want creative, expressive company. Perfect for anyone who appreciates culture and conversation.",
              },
              {
                myth: "You always need to pay advance",
                truth:
                  "Advance payment may be required depending on the booking. Payment terms will be discussed when you book. For some bookings, especially cultural events or full-night, advance payment helps secure the booking. We'll be clear about payment terms upfront.",
              },
              {
                myth: "Artists escorts are only for cultural events",
                truth:
                  "Not at all. Artists escorts work for many occasions—art shows, gallery openings, intellectual evenings, or private dinners. They're versatile and adapt to what you need. Perfect for any occasion where you want creative, engaging company.",
              },
              {
                myth: "They're too intellectual or hard to talk to",
                truth:
                  "Actually, artists escorts are naturally good at conversation and expression. They're thoughtful, engaging, and know how to make conversations feel alive. They can talk about art, culture, life, or anything that interests you. Many clients prefer artists escorts specifically because of their engaging conversation.",
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
              Artists escorts not quite right? Check out other categories that might fit better.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Regular Escorts", slug: "regular-escorts", desc: "Everyday, approachable people who are easy to talk to. Great for casual outings and relaxed evenings." },
              { name: "Housewife Escorts", slug: "housewife-escorts", desc: "Mature, grounded escorts with life experience. Great listeners, discreet, and understanding." },
              { name: "College Girls", slug: "college-girls-escorts", desc: "Young, fresh, and full of energy. Fun to be around, modern outlook, easy to chat with." },
              { name: "Model Escorts", slug: "models-escorts", desc: "Fashion-forward, photogenic. Perfect for events and when you want someone who turns heads." },
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
                  <h3 className="text-lg font-bold text-white mb-2">Be Clear About the Occasion</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, be clear about what type of occasion—art show, cultural event, gallery
                    opening, or intellectual evening. Artists escorts need to know what to expect and how to
                    prepare. Clear communication prevents misunderstandings and makes everything smoother.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Respect Boundaries</h3>
                  <p className="text-white/75 leading-relaxed">
                    Artists escorts are professionals providing a service. Treat them with respect. They're there
                    to provide creative, engaging company—be courteous, be clear about timing, and respect their
                    boundaries. Professionalism goes both ways.
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
                    For artists escorts, advance payment may be required. Payment terms will be discussed when you
                    book. Have payment ready as agreed—cash or UPI. Having it ready makes the transaction smooth
                    and professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Artists Escorts Are Special */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why they're special
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Artists Escorts Are a Popular Choice
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              There's a reason many clients choose artists escorts. Here's why.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                reason: "Creative and Expressive",
                explanation:
                  "Artists escorts bring creativity, expression, and cultural insight. They're passionate about their craft—whether dance, music, or performance—and bring that energy to every meeting. Perfect for when you want something unique and engaging.",
              },
              {
                reason: "Intellectual Conversation",
                explanation:
                  "Artists escorts are thoughtful, well-read, and great at conversation. They can talk about art, culture, life, or anything that interests you. Perfect for evenings where you want engaging, meaningful conversation.",
              },
              {
                reason: "Cultural Insight",
                explanation:
                  "Artists escorts understand culture, tradition, and the arts. They bring insight into cultural events, art shows, or performances. Perfect if you're interested in culture or want someone who appreciates the arts.",
              },
              {
                reason: "Engaging and Expressive",
                explanation:
                  "Artists escorts are naturally expressive and engaging. They know how to connect, how to express themselves, and how to make conversations feel alive. They bring energy and presence to every meeting.",
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
              Straightforward booking process. Advance bookings recommended.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                body: "Message us with your city/area, when you need someone, and that you're looking for an artist or performer escort. We'll ask the basics—hotel or your place, timing, occasion type.",
              },
              {
                step: "2",
                title: "We Confirm Who's Free",
                body: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof and room details. Payment terms will be discussed when you book.",
              },
              {
                step: "3",
                title: "She Arrives & Payment",
                body: "Outcall only—she comes to your hotel or your place. Payment as discussed when you booked—may be advance or when she arrives. She'll arrive ready for your occasion.",
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
              Clear payment process. Payment terms discussed when you book.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Payment Methods</h3>
                <p className="text-white/75 mb-4">
                  We accept cash or UPI payments. Payment timing will be discussed when you book.
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
                  For artists escorts, advance payment may be required depending on the booking. Payment terms will
                  be discussed when you book. We'll be clear about whether advance payment is needed or if payment
                  is made when she arrives.
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-bold text-white mb-3">Hotel Bookings</h3>
                <p className="text-white/75">
                  If you're at a hotel, we need proof you're staying there (room key photo or bill) and your
                  room number. You give her name at reception when she arrives so she can come up. Payment terms
                  will be discussed when you book.
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
              Artists Escorts by City
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Available across major cities in South India. Here's what to know about each city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Chennai", info: "Artists escorts in Chennai cover Nungambakkam, T Nagar, OMR, Adyar and more. Cultural, intellectual company. Outcall to hotels or your place. Payment terms discussed when you book." },
              { city: "Bangalore", info: "Artists escorts are popular in Bangalore—Indiranagar, Koramangala, Whitefield. Great for conversation and cultural connection. Same discretion and professional service." },
              { city: "Hyderabad", info: "Artists escorts in Hyderabad—Hitech City, Banjara Hills, Gachibowli. Thoughtful, creative presence. Perfect for business and cultural occasions." },
              { city: "Kochi", info: "Artists escorts in Kochi cover Marine Drive, Ernakulam, Kakkanad. Cultural, intellectual companionship. Payment terms discussed when you book." },
              { city: "Coimbatore", info: "Artists escorts available in Coimbatore. Same discretion and professional service. Thoughtful, creative company." },
              { city: "Madurai", info: "Artists escorts in Madurai offer cultural, intellectual companionship. Flexible timing, same booking process." },
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
              <p className="text-white/75">We usually reply within 1–2 hours during the day. For artists escorts, advance bookings are recommended—we'll confirm who's free and payment terms when you message.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Availability</h3>
              <p className="text-white/75">Artists escorts are available across our covered cities. Advance notice is best for full-night or multiple-day bookings so we can confirm availability and timing.</p>
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
              { label: "When you need someone", detail: "Date and rough time. For full-night or multiple days, say so upfront so we can confirm an artists escort's availability." },
              { label: "Hotel proof (if applicable)", detail: "Room key photo or bill showing your name and room number. We'll ask before she starts." },
              { label: "Payment", detail: "Payment terms (advance or on arrival) will be discussed when you book. Have cash or UPI ready as agreed." },
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
              <p className="text-white/75">If you need to change the time or date, message us as soon as you can. We'll try to accommodate. Rescheduling may be subject to terms if advance payment was made.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Cancellation</h3>
              <p className="text-white/75">If you need to cancel, tell us in good time. Cancellation terms depend on whether advance payment was taken—we'll explain when you book. We aim to be fair to both you and the escort.</p>
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
              Common Questions About Artists Escorts
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
            <h2 className="text-3xl font-bold text-white mb-4">Book an Artist Escort</h2>
            <p className="text-white/70 mb-8 text-lg">
              Message us with your city/area, when you need someone, and that you're looking for an artist or
              performer escort. We'll suggest who's free and can reach you on time. Payment terms discussed when
              you book.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on Telegram to book artists escorts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book artists escorts"
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
