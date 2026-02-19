import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";
import { getCategoryPagePath, type CategorySlug } from "@/lib/categories";

const base = getBaseUrl();
const url = `${base}/mallu-escorts`;

const metaTitle = "Mallu Escorts | Premium Mallu Escorts in Kochi, Trivandrum, Bangalore & More";
const metaDescription =
  "Mallu escorts and escort service across South India. Outcall to your hotel or place in Kochi, Trivandrum, Bangalore, Chennai, Hyderabad. Discreet, verified. Regular, housewife, models, artists, celebrity, actress. Pay when you meet.";

function buildMalluJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Mallu Escorts", item: url },
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
      name: "Mallu Escorts",
      description: "Premium Mallu escort service across South India. Outcall to Kochi, Trivandrum, Bangalore, Chennai, Hyderabad. Discreet, verified companions.",
      url,
      image: `${base}/images/2.avif`,
      priceRange: "₹₹ - ₹₹₹₹₹",
      areaServed: [
        { "@type": "City", name: "Kochi" },
        { "@type": "City", name: "Trivandrum" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Chennai" },
        { "@type": "City", name: "Hyderabad" },
      ],
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
    "Mallu escorts",
    "Mallu escort service",
    "Mallu escorts Kochi",
    "Mallu escorts Trivandrum",
    "Mallu escorts Bangalore",
    "Mallu escorts Chennai",
    "Mallu escorts Hyderabad",
    "Mallu companions",
    "Malayalam speaking escorts",
    "Kerala escorts",
    "housewife escorts Mallu",
    "model escorts Mallu",
    "regular escorts Mallu",
    "outcall Mallu escorts",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url,
    siteName: "Tamil Escorts",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: `${base}/images/2.avif`, width: 1200, height: 630, alt: "Mallu escorts – premium escort service across South India" }],
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
  { label: "100% Discreet", icon: "🔒" },
  { label: "Pay When You Meet", icon: "💵" },
  { label: "24/7 Available", icon: "🕐" },
  { label: "No Advance (Regular)", icon: "✓" },
];

const POPULAR_CITIES = [
  { name: "Kochi", slug: "kochi-escorts", desc: "Kerala's port city" },
  { name: "Trivandrum", slug: "trivandrum-escorts", desc: "Kerala capital" },
  { name: "Bangalore", slug: "bangalore-escorts", desc: "IT hub & cosmopolitan" },
  { name: "Chennai", slug: "chennai-escorts", desc: "Capital of Tamil Nadu" },
  { name: "Hyderabad", slug: "hyderabad-escorts", desc: "Tech & business center" },
  { name: "Coimbatore", slug: "coimbatore-escorts", desc: "Industrial city" },
];

const MORE_CITIES = [
  { name: "Madurai", slug: "madurai-escorts" },
  { name: "Vijayawada", slug: "vijayawada-escorts" },
  { name: "Mysore", slug: "mysore-escorts" },
  { name: "Pondicherry", slug: "pondicherry-escorts" },
];

const HOW_IT_WORKS = [
  { step: 1, title: "Contact Us", body: "Message or call with your city/area, when you need someone, and what you have in mind. We'll ask the basics—hotel or your place, category (regular, housewife, model, etc.)." },
  { step: 2, title: "We Suggest Who's Free", body: "We'll tell you who can reach you on time. If you're at a hotel we need proof and room details; you give her name at reception before she leaves." },
  { step: 3, title: "She Comes to You", body: "Outcall only. She'll turn up at the agreed time. Have address and gate/lobby details ready. Payment when she's there—cash or UPI. No advance for regular, housewife, college-girl profiles." },
];

const WHY_CHOOSE = [
  { title: "No Advance for Regular", body: "For regular, housewife and college-girl profiles we don't ask for advance. Hotel proof + room details + name at reception. Pay when she reaches you." },
  { title: "Complete Discretion", body: "We don't share your number. Girls don't post or talk about clients. Your booking stays between you and us." },
  { title: "Direct Contact", body: "No bots, no long forms. You talk to someone who handles Mallu escort bookings every day. Quick response." },
  { title: "Pay When You Meet", body: "Cash or UPI when she's in your room. For models and above we take a small advance; rest on arrival." },
];

const SERVICE_TYPES = [
  { title: "Short time", desc: "A few hours at your hotel or place. Most popular for business travelers. Pay when she arrives; no advance for regular and housewife profiles." },
  { title: "Dinner or event", desc: "Plus-one for a client dinner or company for an evening out. We'll match someone who's presentable and easy to be around." },
  { title: "Full night", desc: "Longer stay—dinner plus the night. Advance notice helps so we can confirm who's free. Same payment rules: cash or UPI when she's there." },
  { title: "Travel companion", desc: "Outstation trips need advance booking. Not every girl does it; we'll check when you ask." },
];

const WHO_BOOKS = [
  { title: "Business travelers", body: "In town for a few days, staying at a hotel. Don't want to eat alone or sit in a room. Need company that's discreet and hassle-free." },
  { title: "Locals", body: "Living in Kochi, Trivandrum, Bangalore or elsewhere and want company for an evening—dinner, event, or just a few hours. Same process: you tell us area, when, and category; we fix someone who shows up." },
  { title: "Events & client dinners", body: "Need a plus-one for a corporate dinner or a client meet. We send someone presentable who knows how to keep the evening smooth." },
];

const WHAT_TO_EXPECT = [
  { step: "You message", text: "City/area, when, and what you have in mind (regular, housewife, model, dinner, short time, etc.)." },
  { step: "We confirm", text: "We tell you who's free and can reach you. If it's a hotel, we need proof and room details; you give her name at reception." },
  { step: "She arrives", text: "Outcall only. She comes to you. Payment when she's there—cash or UPI. No advance for regular, housewife, college-girl." },
  { step: "After", text: "Your booking stays between you and us. We don't share your number or store your details. Discretion is default." },
];

const FAQ_ITEMS = [
  { q: "What cities do you cover for Mallu escorts?", a: "We cover Kochi, Trivandrum, Bangalore, Chennai, Hyderabad, Coimbatore, Madurai, Vijayawada, Mysore, Pondicherry and more across South India. Tell us your city and area when you book and we'll fix someone who can reach you on time." },
  { q: "Do I need to pay advance?", a: "For regular, housewife and college-girl profiles—no advance. We need hotel proof and room details if you're at a hotel, and you give her name at reception before she starts. For models, artists, celebrity and actress we take a small advance (10% or 20%); the rest when she arrives." },
  { q: "How do I book a Mallu escort?", a: "Message us on Telegram. Tell us your city/area, when you need someone, and what you're looking for (regular, housewife, model, etc.). We'll suggest who's free. Same-day and advance bookings both work." },
  { q: "Is my information kept private?", a: "Yes. We don't share your number with the girls. We don't store or share your details. All coordination goes through us. Discretion is non-negotiable." },
  { q: "Outcall or incall?", a: "We do outcall only—she comes to your hotel or your place. Have the address and any gate or lobby instructions ready so there's no back-and-forth." },
  { q: "Are Mallu escorts verified?", a: "Yes. We verify profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously." },
  { q: "Can I book a Mallu escort for an event?", a: "Yes. We get requests for client dinners, corporate events, and social gatherings. Tell us the occasion, timing, and how formal it is; we'll suggest who fits. Same payment rules apply." },
  { q: "Do Mallu escorts speak Malayalam?", a: "Yes. All our Mallu escorts speak Malayalam and English. Many are multilingual. If you want someone who can hold a conversation in Malayalam—for a family function, a dinner, or just because you're more comfortable—tell us when you book." },
];

const MALLU_CATEGORIES: { slug: CategorySlug; label: string; line: string }[] = [
  { slug: "regular", label: "Regular Escorts", line: "Most popular. No advance; hotel proof and room details for hotel bookings." },
  { slug: "housewife", label: "Housewife Escorts", line: "Discreet, easy to talk to. Same payment rules—pay when she arrives." },
  { slug: "college-girls", label: "College Girls", line: "Casual vibe for dinners and evenings. Outcall to your hotel or place." },
  { slug: "models", label: "Models", line: "Presentable for client dinners and events. Small advance; rest on arrival." },
  { slug: "artists", label: "Artists & Performers", line: "Creative souls from the arts. Perfect for cultural events and conversations." },
  { slug: "celebrity", label: "Celebrity Escorts", line: "High-profile companions. Maximum discretion. Small advance required." },
  { slug: "actress", label: "Actress Escorts", line: "Screen and stage talent. Expressive and confident. Premium category." },
];

export default function MalluEscortsPage() {
  const jsonLd = buildMalluJsonLd();
  return (
    <main id="main-content" className="min-h-screen bg-black">
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      {/* Hero – full width */}
      <header className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/2.avif"
            alt="Mallu escorts – premium escort service across South India"
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
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/actress-escorts.avif"
            alt="Premium Mallu escorts – discreet outcall booking to your hotel or place"
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
                Mallu Escorts
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Mallu Escorts
              </h1>
              <div className="mt-6 h-px w-16 bg-[var(--accent-gold)]" />
              <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
                Premium Mallu escort service across South India. Outcall to your hotel or your place—Kochi, Trivandrum, Bangalore, Chennai, Hyderabad and more.
              </p>
            </div>
          </div>
        </div>

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

      {/* SEO: keyword-rich one-liner + internal links */}
      <section className="border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8" aria-label="About Mallu escorts">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            <strong className="text-white">Mallu escorts</strong> and escort service in{" "}
            <strong className="text-white">Kochi</strong>, <strong className="text-white">Trivandrum</strong>,{" "}
            <strong className="text-white">Bangalore</strong>, Chennai, Hyderabad and across South India. Malayalam-speaking companions. Outcall to your hotel or place. Discreet, verified, pay when you meet.
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

      {/* Section 1: Intro – left image, right content */}
      <section className="w-full border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-0">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] overflow-hidden bg-black">
            <Image
              src="/images/artists-escorts.avif"
              alt="Premium Mallu escorts – Malayalam-speaking companions for outcall across South India"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="intro-image-gradient-overlay absolute inset-0 z-10" aria-hidden />
          </div>

          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Looking for Mallu escorts? You&apos;ve found South India&apos;s trusted Mallu escort service.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/85 mb-4">
              Kerala&apos;s charm—Mallu escorts who are easy to talk to and great company. Most of our bookings are from people in town for work—staying at a hotel in <strong className="text-white">Kochi</strong>, <strong className="text-white">Trivandrum</strong>, or <strong className="text-white">Bangalore</strong>—or locals who want company for a dinner or an event. We don&apos;t do the &quot;pay first and hope someone shows up&quot; thing. You tell us your city/area, what kind of evening you have in mind, and when. We suggest someone who can reach you without a fuss.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/85 mb-4">
              Outcall to your hotel or your place is the norm. Discretion is non-negotiable. We don't share your number; the girls don't post or talk about clients. Payment when she arrives—cash or UPI. For regular, housewife and college-girl profiles we don't ask for advance; we just need hotel proof and your room details if you're at a hotel. You give her name at reception before she starts. For models, artists, celebrity and actress we take a small advance; the rest when she's there.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/85">
              A lot of our clients are here for a few days on work. They don't want to eat alone in a hotel or sit in a room by themselves. Some need a plus-one for a client dinner. Some just want company for an evening with no strings. Same drill for everyone: you book, we fix someone who shows up, you pay when she's there.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What If Booking Just Worked? */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-[var(--accent-gold)]/25 bg-black/50 px-6 sm:px-10 py-10 sm:py-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/60 to-transparent" aria-hidden />
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              The promise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              What If Booking Mallu Escorts Just Worked?
            </h2>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-4">
              No fakes. No &quot;pay first and pray.&quot; You tell us what you want—city/area, when, category (regular, housewife, model). We handle the rest. Direct contact with our team. Pay when you meet. Complete privacy guaranteed.
            </p>
            <p className="text-white/70 text-sm sm:text-base">
              This is South India&apos;s trusted Mallu escort service that turns a simple booking into a smooth evening.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Popular Cities */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Popular Cities for Mallu Escorts
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We cover Kochi, Trivandrum, Bangalore, Chennai, Hyderabad, and more across South India. Tell us your city and area when you book and we&apos;ll fix someone who can reach you on time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {POPULAR_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[var(--accent-gold)]/40 hover:bg-white/[0.06] transition-colors"
              >
                <h3 className="text-lg font-bold text-white">{city.name}</h3>
                <p className="text-sm text-white/60 mt-1">{city.desc}</p>
              </Link>
            ))}
          </div>
          <div className="rounded-xl border border-white/10 bg-black/30 px-6 py-5 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-3">
              More Cities
            </h3>
            <p className="text-center text-white/70">
              {MORE_CITIES.map((city, i) => (
                <span key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="text-white/85 hover:text-[var(--accent-gold)] hover:underline transition-colors"
                  >
                    {city.name}
                  </Link>
                  {i < MORE_CITIES.length - 1 ? " • " : ""}
                </span>
              ))}
            </p>
            <p className="text-white/60 text-sm text-center mt-4 max-w-xl mx-auto">
              Kochi and Trivandrum get the most bookings in Kerala. Bangalore, Chennai and Hyderabad are popular with business travelers and locals. Wherever you are, give us the city and area and we&apos;ll sort it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How it Works */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Three steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              How it Works?
            </h2>
            <p className="text-white/70">
              Book your Mallu escort in three simple steps.
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

      {/* Section 5: Why Choose Us */}
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
              Trusted Mallu escort service. No advance for regular profiles. Discreet and direct.
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

      {/* Browse by category – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="Mallu escort categories">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Browse Mallu Escorts by Category
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Regular, housewife, college girls, models, artists, celebrity, actress and more. All available with outcall to your location.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MALLU_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/profiles/mallu/${cat.slug}`}
                className="block rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-[var(--accent-gold)]/40 transition-colors"
              >
                <h3 className="text-base font-bold text-white mb-1">{cat.label}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{cat.line}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Languages – card with pills */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Speak your language
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Malayalam-Speaking Companions
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Malayalam", "English"].map((lang) => (
                  <span key={lang} className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30">
                    {lang}
                </span>
                ))}
              </div>
              <p className="text-white/85 leading-relaxed">
                All our Mallu escorts speak Malayalam and English. Many are multilingual. If you want someone who can hold a conversation in Malayalam—for a family function, a dinner where everyone&apos;s speaking Malayalam, or just because you&apos;re more comfortable—tell us when you book. We&apos;ll suggest who fits. It&apos;s one of the things we get asked most, especially in Kerala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What We Offer
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From a few hours to a full night, dinner dates to travel. Outcall to your hotel or your place. Tell us what you need and we&apos;ll match you.
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
              We offer flexible durations. All outcall to your hotel or your place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Short time (a few hours)", desc: "Most popular for business travelers. She comes to you for 2–3 hours (or as agreed). Enough for dinner, conversation, or a relaxed evening. Pay when she arrives; no advance for regular, housewife and college-girl profiles.", num: "1" },
              { title: "Dinner or evening", desc: "A fixed slot for a dinner, event, or party. We need the start time and roughly when it ends. Same payment rules. Tell us the occasion so we match someone who fits the vibe.", num: "2" },
              { title: "Full night", desc: "Dinner plus the night—typically 8–10 hours or as agreed. Advance notice helps so we can confirm who's free. Payment when she's there; for models and above we take a small advance.", num: "3" },
              { title: "Outstation (travel)", desc: "Trips to other cities or destinations. We need a few days' notice. Not every companion does outstation. Same discretion and payment when she's with you.", num: "4" },
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

      {/* Who Books Mallu Escorts – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Who we serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Who Books Mallu Escorts?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Different reasons, same process: discreet, direct, pay when you meet.
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

      {/* What to Expect – vertical timeline */}
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
              No surprises. Same flow every time.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-[19px] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-gold)]/60 via-[var(--accent-gold)]/40 to-transparent" aria-hidden />
            <ul className="space-y-0">
              {WHAT_TO_EXPECT.map((item, i) => (
                <li key={item.step} className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--accent-gold)] bg-black flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-[var(--accent-gold)]">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.step}</h3>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* First time booking – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="First time booking">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                New to booking?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                First Time Booking a Mallu Escort?
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                A lot of our clients are first-timers. You message us with your city/area, when you need someone, and what you have in mind (dinner, a few hours, event, or just company). We suggest who&apos;s free and can reach you. If you&apos;re at a hotel we need proof and room details; you give her name at reception when she arrives. Payment when she&apos;s there—no advance for regular and housewife profiles.
              </p>
              <p className="text-white/85 leading-relaxed">
                If something isn&apos;t right on the day, tell us afterwards. We take feedback seriously. The women we work with are used to first-time clients; they&apos;re not there to make you feel awkward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing – highlighted card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/60 p-8 sm:p-10 text-center shadow-[0_0_0_1px_var(--accent-gold)]/10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              No surprises
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-white/85 leading-relaxed max-w-2xl mx-auto mb-6">
              No hidden charges. We quote based on duration, category (regular, housewife, model, etc.) and location. You pay when you meet—cash or UPI. For regular, housewife and college-girl profiles we don&apos;t ask for advance. For models, artists, celebrity and actress we take a small advance; the rest when she arrives.
            </p>
            <p className="text-sm font-semibold text-[var(--accent-gold)]">
              Ask for a quote when you message — we&apos;ll give you a clear number.
            </p>
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="When to book Mallu escorts">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Timing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              When to Book Mallu Escorts
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Same-day and advance bookings both work. A few guidelines.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 space-y-4">
            <p className="text-white/75">
              <strong className="text-white">Same-day:</strong> Message as early as you can. We usually reply within 1–2 hours; we&apos;ll tell you who&apos;s free and can reach you. Popular in Kochi, Trivandrum, Bangalore, Chennai.
            </p>
            <p className="text-white/75">
              <strong className="text-white">Advance:</strong> For full-night, events, or outstation trips, book a day or two ahead so we can confirm the right Mallu escort and timing.
            </p>
            <p className="text-white/75">
              <strong className="text-white">Peak times:</strong> Evenings and weekends can be busier. We&apos;ll still respond; advance notice helps secure your preferred time.
            </p>
          </div>
        </div>
      </section>

      {/* Related Escort Types */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Other escort types">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Also explore
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Other Escort Types
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              We offer Tamil, Telugu, and Kannada escorts across the same cities. Same process—discreet, outcall, pay when you meet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/tamil-escorts" className="rounded-xl border border-white/10 bg-black/30 p-5 hover:border-[var(--accent-gold)]/40 transition-colors text-center">
              <span className="text-lg font-bold text-[var(--accent-gold)]">Tamil Escorts</span>
              <p className="text-sm text-white/75 mt-2">Tamil-speaking companions across South India</p>
            </Link>
            <Link href="/telugu-escorts" className="rounded-xl border border-white/10 bg-black/30 p-5 hover:border-[var(--accent-gold)]/40 transition-colors text-center">
              <span className="text-lg font-bold text-[var(--accent-gold)]">Telugu Escorts</span>
              <p className="text-sm text-white/75 mt-2">Telugu-speaking companions in Hyderabad, Chennai & more</p>
            </Link>
            <Link href="/kannada-escorts" className="rounded-xl border border-white/10 bg-black/30 p-5 hover:border-[var(--accent-gold)]/40 transition-colors text-center">
              <span className="text-lg font-bold text-[var(--accent-gold)]">Kannada Escorts</span>
              <p className="text-sm text-white/75 mt-2">Kannada-speaking companions in Bangalore, Mysore & more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Frequently asked questions about Mallu escorts">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Top Questions about Mallu Escorts
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

      {/* CTA – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-black/50 px-6 sm:px-10 py-10 sm:py-12 text-center">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
              Book now
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Book a Mallu Escort?
            </h2>
            <p className="text-white/70 mb-6">
              Message us with your city/area, when you need someone, and what you have in mind. We&apos;re on Telegram. No bots—you&apos;ll talk to someone who handles Mallu escort bookings every day. Questions about cities, payment, or what to expect? Ask when you message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Mallu escorts on Telegram"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book Mallu escorts"
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
