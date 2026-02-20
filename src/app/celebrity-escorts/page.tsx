import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";

const base = getBaseUrl();
const url = `${base}/celebrity-escorts`;

const metaTitle = "Celebrity Escorts | High-Profile, Discreet Companions for VIP Occasions";
const metaDescription =
  "Celebrity escorts for high-profile events, VIP occasions and private evenings where discretion matters most. Available across Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more. Tamil, Mallu, Telugu, Kannada. Outcall only.";

function buildCelebrityJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Categories", item: `${base}/categories` },
        { "@type": "ListItem", position: 3, name: "Celebrity Escorts", item: url },
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
      name: "Celebrity Escorts",
      description:
        "High-profile celebrity escorts who understand discretion, privacy, and how to keep things special at VIP events and private evenings across South India.",
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
    "celebrity escorts",
    "vip escorts",
    "high profile escorts",
    "celebrity escorts Chennai",
    "celebrity escorts Bangalore",
    "celebrity escorts Hyderabad",
    "celebrity escorts Kochi",
    "celebrity escorts Coimbatore",
    "celebrity escorts Madurai",
    "discreet celebrity escorts",
    "private celebrity escorts",
    "outcall celebrity escorts",
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
        alt: "Celebrity escorts – high-profile, discreet companionship across South India",
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
  { label: "High-Profile & Discreet", icon: "⭐" },
  { label: "VIP Experience", icon: "👑" },
  { label: "Maximum Privacy", icon: "🔒" },
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
  { name: "Tamil Escorts", slug: "tamil", href: "/profiles/tamil/celebrity" },
  { name: "Mallu Escorts", slug: "mallu", href: "/profiles/mallu/celebrity" },
  { name: "Telugu Escorts", slug: "telugu", href: "/profiles/telugu/celebrity" },
  { name: "Kannada Escorts", slug: "kannada", href: "/profiles/kannada/celebrity" },
];

const WHY_CELEBRITY = [
  {
    title: "High-Profile & Discreet",
    body: "Celebrity escorts understand discretion, privacy, and how to keep things special. They're used to high-profile situations and know how to maintain privacy. Perfect for VIP events, private evenings, or occasions where discretion matters most.",
  },
  {
    title: "Used to Attention",
    body: "Celebrity escorts are used to attention and know how to handle it with grace. They're confident, poised, and comfortable in high-profile settings. Perfect for events or occasions where you want someone who commands attention naturally.",
  },
  {
    title: "VIP Experience",
    body: "Celebrity escorts bring a VIP experience to every meeting. They understand what high-profile clients expect and know how to deliver. They're professional, discreet, and know how to make every moment feel special.",
  },
  {
    title: "Maximum Privacy",
    body: "Celebrity escorts understand the importance of privacy and discretion. They don't share details, don't post about clients, and know how to keep things confidential. Your privacy is their priority.",
  },
];

const WHAT_YOU_GET = [
  {
    title: "VIP Events",
    desc: "Perfect for high-profile events, VIP occasions, or glamorous gatherings. Celebrity escorts understand discretion and bring presence.",
  },
  {
    title: "Private Evenings",
    desc: "Great for private dinners or evenings where discretion matters most. Celebrity escorts understand privacy and know how to keep things special.",
  },
  {
    title: "High-Profile Occasions",
    desc: "If you need someone for a high-profile occasion where privacy and discretion are essential, celebrity escorts are perfect. They understand what's expected.",
  },
  {
    title: "Maximum Discretion",
    desc: "Perfect for when you need maximum privacy and discretion. Celebrity escorts understand confidentiality and know how to keep things between you.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What makes celebrity escorts different from other categories?",
    a: "Celebrity escorts are high-profile, understand discretion, and are used to attention. They're perfect for VIP events, private evenings, or occasions where discretion matters most. They bring a VIP experience and know how to maintain privacy. Perfect if you need someone who understands high-profile situations.",
  },
  {
    q: "Do I need to pay advance for celebrity escorts?",
    a: "For celebrity escorts, advance payment is typically required. If you're at a hotel, we need proof you're staying there and your room details. You give her name at reception when she arrives. Payment terms will be discussed when you book.",
  },
  {
    q: "What cities do you cover for celebrity escorts?",
    a: "We cover Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai and more across South India. Tell us your city and area when you book, and we'll suggest who's available and can reach you on time.",
  },
  {
    q: "Are celebrity escorts good for first-time bookings?",
    a: "Yes. Celebrity escorts are professional, discreet, and know how to make you feel comfortable. They understand discretion and will help you feel at ease. They're used to different situations and are confident in high-profile settings.",
  },
  {
    q: "How do celebrity escorts compare to regular escorts?",
    a: "Celebrity escorts bring high-profile presence, discretion, and a VIP experience. Regular escorts are more approachable and down-to-earth. Celebrity escorts are better for VIP events, high-profile occasions, or when discretion matters most. Regular escorts are better for casual, relaxed settings.",
  },
  {
    q: "What languages do celebrity escorts speak?",
    a: "We have celebrity escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are multilingual. If you want someone who can speak a specific language, tell us when you book and we'll suggest who fits.",
  },
  {
    q: "How do I book a celebrity escort?",
    a: "Message us on Telegram. Tell us your city/area, when you need someone, and that you're looking for a celebrity escort. We'll suggest who's free and can reach you. Advance bookings are required for celebrity escorts.",
  },
  {
    q: "Are celebrity escorts verified?",
    a: "Yes. We verify all profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
  },
];

export default function CelebrityEscortsPage() {
  const jsonLd = buildCelebrityJsonLd();
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
            alt="Celebrity escorts – high-profile, discreet companionship across South India"
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
                <span className="text-2xl">⭐</span>
                <span className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase">
                  Celebrity Escorts
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.05] mb-6">
                Celebrity Escorts
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
                High-profile, discreet. Perfect for VIP events and private evenings where discretion matters.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                Celebrity escorts understand discretion, privacy, and how to keep things special. They're used
                to high-profile situations and know how to maintain privacy. Perfect for VIP events, private
                evenings, or occasions where discretion matters most.
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
            <strong className="text-white">Celebrity escorts</strong> for high-profile events, VIP occasions
            and private evenings where discretion matters most in <strong className="text-white">Chennai</strong>
            , <strong className="text-white">Bangalore</strong>, <strong className="text-white">Hyderabad</strong>
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

      {/* What Celebrity Escorts Are */}
      <section className="w-full border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black">
              <Image
                src="/images/2.avif"
                alt="Celebrity escorts – high-profile, discreet companionship"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                What Are Celebrity Escorts?
              </h2>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                Celebrity escorts are high-profile women who understand discretion, privacy, and how to keep
                things special. They're not just companions; they're used to attention, know how to handle it
                with grace, and understand what high-profile clients expect.
              </p>
              <p className="text-lg leading-relaxed text-white/85 mb-4">
                What makes them special is their understanding of discretion and privacy. They're used to
                high-profile situations and know how to maintain confidentiality. They don't share details,
                don't post about clients, and know how to keep things between you. Your privacy is their
                priority.
              </p>
              <p className="text-lg leading-relaxed text-white/85">
                Many clients choose celebrity escorts because they need someone for VIP events, high-profile
                occasions, or private evenings where discretion matters most. Whether it's a VIP event,
                private dinner, or special occasion, celebrity escorts make it feel special and confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Celebrity Escorts - Cards Grid */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why choose celebrity escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Appeal of Celebrity Escorts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              High-profile, discreet, and professional. Here's what makes celebrity escorts special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CELEBRITY.map((item, i) => (
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
              Celebrity Escorts by Language
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We have celebrity escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Choose a
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
                <p className="text-sm text-white/60 mb-4">Celebrity escorts</p>
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
              Celebrity escorts are perfect for VIP events, high-profile occasions, and private evenings.
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
              Celebrity escorts available across South India. Tell us your city and we'll suggest who's free.
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

      {/* Who Books Celebrity Escorts */}
      <section className="border-y border-white/10 py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Who books celebrity escorts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who Chooses Celebrity Escorts?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Different people, different reasons. All looking for high-profile, discreet company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "VIP Event Organizers",
                body: "Hosting or attending high-profile events, VIP occasions, or glamorous gatherings where discretion matters most. Celebrity escorts understand privacy and bring presence. They know how to maintain confidentiality and keep things special.",
              },
              {
                title: "High-Profile Professionals",
                body: "Attending VIP events, private dinners, or high-profile occasions where discretion is essential. Celebrity escorts understand what's expected and know how to maintain privacy. Perfect for when you need maximum discretion.",
              },
              {
                title: "Private Evenings",
                body: "Wanting a private dinner or evening where discretion matters most. Celebrity escorts understand confidentiality and know how to keep things between you. Perfect for when you need someone who understands high-profile situations.",
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
              Celebrity escorts offer flexible durations. All outcall to your hotel or your place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Short Time (2-3 hours)",
                desc: "Perfect for VIP events, high-profile occasions, or when you need discreet company. She comes to you for 2-3 hours (or as agreed). Enough time to enjoy each other's company. Payment terms discussed when you book.",
              },
              {
                title: "Dinner or Evening",
                desc: "A fixed slot for a specific occasion—VIP event, private dinner, or high-profile gathering. We need the start time and roughly when it ends. Celebrity escorts are great at maintaining discretion. Payment terms discussed when you book.",
              },
              {
                title: "Full Night",
                desc: "Dinner plus the night—typically 8-10 hours or as agreed. Advance notice helps so we can confirm who's free. Celebrity escorts are flexible with timing. Payment terms discussed when you book.",
              },
              {
                title: "Multiple Days",
                desc: "If you're in town for a few days and want consistent, discreet company, we can arrange for a celebrity escort to join you over multiple days. Advance notice required. Payment terms discussed when you book.",
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
              Pricing for Celebrity Escorts
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
                  ₹25,000 – ₹40,000
                </p>
                <p className="text-white/75">
                  Perfect for VIP events, high-profile occasions, or when you need discreet company. Payment
                  terms discussed when you book.
                </p>
              </div>
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">Dinner or Evening</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹35,000 – ₹50,000
                </p>
                <p className="text-white/75">
                  Fixed slot for a specific occasion. We need start and end times. Payment terms discussed when
                  you book.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Full Night</h3>
                <p className="text-lg text-[var(--accent-gold)] font-semibold mb-2">
                  ₹80,000 – ₹1,20,000
                </p>
                <p className="text-white/75">
                  Dinner plus the night—typically 8-10 hours. Advance notice helps. Payment terms discussed
                  when you book.
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
                text: "Tell us your city/area, when you need someone, and that you're looking for a celebrity escort. We'll ask basics like hotel or your place, timing, occasion type, and any preferences. Quick response—usually within an hour or two.",
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
                text: "Celebrity escorts are high-profile, discreet, and professional. They understand discretion, privacy, and how to keep things special. Whether it's a VIP event, private dinner, or high-profile occasion, they bring presence and maintain confidentiality.",
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
                We have celebrity escorts who speak Tamil, Malayalam, Telugu, Kannada, and English. Many are
                multilingual. If you want someone who can hold a conversation in a specific language—for a VIP
                event, private dinner, or just because you're more comfortable—tell us when you book.
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
                Celebrity escorts are naturally good at conversation and social interaction. They know how to
                read the room, engage with people, and maintain discretion. Whether you want to talk about
                events, life, or just have engaging conversation, they're professional and easy to be around.
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
                body: "All celebrity escorts are verified before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously.",
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
                First Time Booking a Celebrity Escort?
              </h2>
              <p className="text-lg text-white/85 leading-relaxed mb-6">
                Celebrity escorts are professional, discreet, and know how to make you feel comfortable.
                They're used to different situations and are confident in high-profile settings. They understand
                discretion and will help you feel at ease.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Know</h3>
                  <p className="text-white/75 leading-relaxed">
                    Celebrity escorts are used to first-time clients. They're not there to make you feel awkward
                    or uncomfortable. They're professional, discreet, and good at keeping things relaxed. If
                    you're nervous, that's normal—they understand and will help you feel at ease.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What to Have Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    When you message, have these ready: your city/area (or hotel name and area), when you need
                    someone (date and rough time), what type of occasion (VIP event, private dinner, etc.), and
                    any preferences. If you're at a hotel, we'll ask for proof and room details before she
                    starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">After Your Booking</h3>
                  <p className="text-white/75 leading-relaxed">
                    If something wasn't right on the day, tell us afterwards. We take feedback seriously. The
                    celebrity escorts we work with are professional and want to make sure you have a good
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
              Celebrity Escorts vs Other Categories
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Understanding the difference helps you choose what's right for you.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                comparison: "Celebrity vs Regular",
                text: "Celebrity escorts bring high-profile presence, discretion, and a VIP experience. Regular escorts are more approachable and down-to-earth. Celebrity escorts are better for VIP events, high-profile occasions, or when discretion matters most. Regular escorts are better for casual, relaxed settings.",
              },
              {
                comparison: "Celebrity vs Models",
                text: "Celebrity escorts bring high-profile presence and discretion. Models bring style and photogenic presence. Celebrity escorts are better for VIP events and when discretion matters most. Models are better for fashion events and glamorous occasions.",
              },
              {
                comparison: "Celebrity vs Artists",
                text: "Celebrity escorts bring high-profile presence and discretion. Artists bring creativity and cultural insight. Celebrity escorts are better for VIP events and when discretion matters most. Artists are better for cultural events and intellectual conversation.",
              },
              {
                comparison: "Celebrity vs Actress",
                text: "Celebrity escorts bring high-profile presence and discretion. Actress escorts bring screen and stage presence. Both are good for high-profile events, but celebrity escorts focus more on discretion, while actress escorts focus more on expressive presence.",
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
              Here are some real situations where celebrity escorts work perfectly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                scenario: "VIP Event",
                description:
                  "You're hosting or attending a high-profile event, VIP occasion, or glamorous gathering where discretion matters most. Celebrity escorts are perfect because they understand privacy and bring presence. They know how to maintain confidentiality.",
              },
              {
                scenario: "Private Dinner",
                description:
                  "You have a private dinner or evening where discretion is essential. Celebrity escorts understand confidentiality and know how to keep things between you. Perfect for when you need maximum privacy.",
              },
              {
                scenario: "High-Profile Occasion",
                description:
                  "You need someone for a high-profile occasion where privacy and discretion are essential. Celebrity escorts understand what's expected and know how to maintain privacy. They bring a VIP experience.",
              },
              {
                scenario: "Special Event",
                description:
                  "You're attending a special event or occasion where discretion matters most. Celebrity escorts understand high-profile situations and know how to keep things confidential. They bring presence and maintain privacy.",
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
              When to Book Celebrity Escorts
            </h2>
            <p className="text-lg text-white/70">
              Advance bookings required. Same-day bookings may be possible but subject to availability.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                timing: "Advance Bookings",
                details:
                  "Required for celebrity escorts. A few days ahead gives us time to confirm who's free and arrange everything smoothly. Celebrity escorts need advance notice, especially for VIP events, high-profile occasions, or private evenings where discretion matters.",
              },
              {
                timing: "VIP Event Bookings",
                details:
                  "For VIP events, high-profile occasions, or glamorous gatherings, advance notice is essential. Celebrity escorts need time to prepare and ensure discretion. A few days ahead ensures everything is perfect for your VIP occasion.",
              },
              {
                timing: "Same-Day Bookings",
                details:
                  "May be possible but subject to availability and not guaranteed. We'll try our best, but celebrity escorts are often booked in advance. Last-minute requests depend on who's free. Message us and we'll see what we can arrange.",
              },
              {
                timing: "Multiple Days",
                details:
                  "For multiple-day bookings or extended stays, advance notice is essential. Celebrity escorts need time to plan and ensure availability. A week or more ahead ensures everything is arranged smoothly for your extended booking.",
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
                  "When you message, tell us what type of occasion—VIP event, private dinner, high-profile gathering, or private evening. Celebrity escorts need to know what to expect and how to maintain discretion. Clear information helps them prepare appropriately.",
              },
              {
                tip: "Have Your Details Ready",
                explanation:
                  "If you're at a hotel, have proof and room details ready. If you're at your place, have the address and any gate or lobby instructions. Clear information means she arrives on time, ready for your occasion. Discretion is maintained throughout.",
              },
              {
                tip: "Be Respectful and Discreet",
                explanation:
                  "Celebrity escorts are professionals who understand discretion and privacy. Treat them with respect and they'll do the same. They're there to provide high-profile, discreet company—be courteous, be clear about timing, and maintain confidentiality.",
              },
              {
                tip: "Discuss Payment Terms",
                explanation:
                  "For celebrity escorts, advance payment is typically required. Payment terms will be discussed when you book. Be clear about payment method and timing. Having payment ready as agreed makes the transaction smooth and professional.",
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
              Let's clear up some common questions and misconceptions about celebrity escorts.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                myth: "Celebrity escorts are only for celebrities",
                truth:
                  "Not true. Celebrity escorts are for anyone who needs high-profile, discreet company for VIP events, private evenings, or occasions where discretion matters most. They understand privacy and know how to maintain confidentiality. Perfect for high-profile professionals, event organizers, or anyone who needs maximum discretion.",
              },
              {
                myth: "You always need to pay advance",
                truth:
                  "For celebrity escorts, advance payment is typically required. Payment terms will be discussed when you book. Advance payment helps secure the booking and ensures everything is arranged smoothly. We'll be clear about payment terms upfront.",
              },
              {
                myth: "Celebrity escorts are only for VIP events",
                truth:
                  "Not at all. Celebrity escorts work for many occasions—VIP events, private dinners, high-profile occasions, or private evenings where discretion matters. They're versatile and adapt to what you need. Perfect for any occasion where you need maximum privacy and discretion.",
              },
              {
                myth: "They're not as approachable or easy to talk to",
                truth:
                  "Actually, celebrity escorts are professional, discreet, and easy to be around. They're used to high-profile situations and know how to make you feel comfortable. They're engaging, professional, and good at conversation. Many clients prefer celebrity escorts specifically because of their discretion and professionalism.",
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
              Celebrity escorts not quite right? Check out other categories that might fit better.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Regular Escorts", slug: "regular-escorts", desc: "Everyday, approachable people who are easy to talk to. Great for casual outings and relaxed evenings." },
              { name: "Housewife Escorts", slug: "housewife-escorts", desc: "Mature, grounded escorts with life experience. Great listeners, discreet, and understanding." },
              { name: "College Girls", slug: "college-girls-escorts", desc: "Young, fresh, and full of energy. Fun to be around, modern outlook, easy to chat with." },
              { name: "Model Escorts", slug: "models-escorts", desc: "Fashion-forward, photogenic. Perfect for events and when you want someone who turns heads." },
              { name: "Artists & Performers", slug: "artists-escorts", desc: "Creative souls from the arts. Perfect for cultural events and intellectual conversations." },
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
                    When you message, be clear about what type of occasion—VIP event, private dinner,
                    high-profile gathering, or private evening. Celebrity escorts need to know what to expect
                    and how to maintain discretion. Clear communication prevents misunderstandings and makes
                    everything smoother.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Respect Boundaries and Privacy</h3>
                  <p className="text-white/75 leading-relaxed">
                    Celebrity escorts are professionals providing high-profile, discreet service. Treat them with
                    respect and maintain confidentiality. They're there to provide discreet company—be courteous,
                    be clear about timing, and respect their boundaries. Professionalism and discretion go both
                    ways.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Be On Time</h3>
                  <p className="text-white/75 leading-relaxed">
                    If you've booked for a specific time, be ready when she arrives. Have your hotel proof ready
                    if you're at a hotel, or clear address instructions if you're at your place. Being prepared
                    shows respect for her time and maintains professionalism.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Payment Ready</h3>
                  <p className="text-white/75 leading-relaxed">
                    For celebrity escorts, advance payment is typically required. Payment terms will be discussed
                    when you book. Have payment ready as agreed—cash or UPI. Having it ready makes the
                    transaction smooth and professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Celebrity Escorts Are Special */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Why they're special
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Celebrity Escorts Are a Popular Choice
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              There's a reason many clients choose celebrity escorts. Here's why.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                reason: "High-Profile and Discreet",
                explanation:
                  "Celebrity escorts understand discretion, privacy, and how to keep things special. They're used to high-profile situations and know how to maintain confidentiality. Perfect for VIP events, private evenings, or occasions where discretion matters most.",
              },
              {
                reason: "VIP Experience",
                explanation:
                  "Celebrity escorts bring a VIP experience to every meeting. They understand what high-profile clients expect and know how to deliver. They're professional, discreet, and know how to make every moment feel special.",
              },
              {
                reason: "Used to Attention",
                explanation:
                  "Celebrity escorts are used to attention and know how to handle it with grace. They're confident, poised, and comfortable in high-profile settings. Perfect for events or occasions where you want someone who commands attention naturally.",
              },
              {
                reason: "Maximum Privacy",
                explanation:
                  "Celebrity escorts understand the importance of privacy and discretion. They don't share details, don't post about clients, and know how to keep things confidential. Your privacy is their priority.",
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
              Straightforward booking process. Advance bookings required.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                body: "Message us with your city/area, when you need someone, and that you're looking for a celebrity escort. We'll ask the basics—hotel or your place, timing, occasion type.",
              },
              {
                step: "2",
                title: "We Confirm Who's Free",
                body: "We'll tell you who's available and can reach you on time. If you're at a hotel, we need proof and room details. Payment terms will be discussed—advance payment is typically required.",
              },
              {
                step: "3",
                title: "She Arrives & Payment",
                body: "Outcall only—she comes to your hotel or your place. Payment as discussed when you booked—typically advance payment. She'll arrive ready for your VIP occasion.",
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
              Clear payment process. Advance payment typically required.
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
                  For celebrity escorts, advance payment is typically required. Payment terms will be discussed
                  when you book. Advance payment helps secure the booking and ensures everything is arranged
                  smoothly for your VIP occasion.
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
              Celebrity Escorts by City
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Available across major cities in South India. Here's what to know about each city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Chennai", info: "Celebrity escorts in Chennai cover Nungambakkam, T Nagar, OMR, Adyar and more. VIP, high-profile company. Outcall to hotels or your place. Payment terms discussed when you book." },
              { city: "Bangalore", info: "Celebrity escorts are popular in Bangalore—Indiranagar, Koramangala, Whitefield. Maximum discretion, star presence. Same professional service." },
              { city: "Hyderabad", info: "Celebrity escorts in Hyderabad—Hitech City, Banjara Hills, Gachibowli. VIP treatment, full discretion. Perfect for high-profile occasions." },
              { city: "Kochi", info: "Celebrity escorts in Kochi cover Marine Drive, Ernakulam, Kakkanad. VIP, discreet. Payment terms discussed when you book." },
              { city: "Coimbatore", info: "Celebrity escorts available in Coimbatore. Same discretion and VIP service. Star presence, professional." },
              { city: "Madurai", info: "Celebrity escorts in Madurai offer VIP, high-profile companionship. Flexible timing, same booking process." },
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
              <p className="text-white/75">We usually reply within 1–2 hours during the day. For celebrity escorts, advance bookings are recommended—we'll confirm who's free and payment terms when you message.</p>
            </div>
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">Availability</h3>
              <p className="text-white/75">Celebrity escorts are available across our covered cities. Advance notice is best for VIP and full-night bookings so we can confirm availability and discretion arrangements.</p>
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
              { label: "When you need someone", detail: "Date and rough time. For VIP or full-night bookings, say so upfront so we can confirm a celebrity escort's availability." },
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
              Common Questions About Celebrity Escorts
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
            <h2 className="text-3xl font-bold text-white mb-4">Book a Celebrity Escort</h2>
            <p className="text-white/70 mb-8 text-lg">
              Message us with your city/area, when you need someone, and that you're looking for a celebrity
              escort. We'll suggest who's free and can reach you on time. Payment terms discussed when you
              book.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact us on Telegram to book celebrity escorts"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book celebrity escorts"
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
