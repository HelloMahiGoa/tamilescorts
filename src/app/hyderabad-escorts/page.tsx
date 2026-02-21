import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DailyProfilesSection from "@/components/DailyProfilesSection";
import { getBaseUrl } from "@/lib/site";
import { getCategoryPagePath, type CategorySlug } from "@/lib/categories";

const base = getBaseUrl();
const url = `${base}/hyderabad-escorts`;

const metaTitle = "Hyderabad Escorts | Premium Escorts in Hyderabad – Banjara Hills, Jubilee Hills, Gachibowli, Madhapur";
const metaDescription =
  "Hyderabad escorts and escort service in Hyderabad. Outcall to your hotel or place in Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Hitech City. Discreet, verified. Tamil, Mallu, Telugu companions. Pay when you meet.";

function buildHyderabadJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Hyderabad Escorts", item: url },
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
      name: "Hyderabad Escorts",
      description: "Premium escort service in Hyderabad. Outcall to Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Hitech City. Discreet, verified. Tamil, Mallu, Telugu companions.",
      url,
      image: `${base}/images/2.avif`,
      priceRange: "₹₹ - ₹₹₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
      },
      areaServed: { "@type": "City", name: "Hyderabad", containedInPlace: { "@type": "State", name: "Telangana" } },
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
    "Hyderabad escorts",
    "escorts in Hyderabad",
    "Hyderabad escort service",
    "Banjara Hills escorts",
    "Jubilee Hills escorts",
    "Gachibowli escorts",
    "Madhapur escorts",
    "Hitech City escorts",
    "Secunderabad escorts",
    "outcall Hyderabad",
    "Tamil escorts Hyderabad",
    "Mallu escorts Hyderabad",
    "housewife escorts Hyderabad",
    "model escorts Hyderabad",
    "escort service Banjara Hills",
    "hotel escort Hyderabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url,
    siteName: "Tamil Escorts",
    title: metaTitle,
    description: metaDescription,
    images: [{ url: `${base}/images/2.avif`, width: 1200, height: 630, alt: "Hyderabad escorts – premium outcall escort service" }],
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

const POPULAR_AREAS = [
  { name: "Banjara Hills", slug: "banjara-hills", desc: "Hotels & central" },
  { name: "Jubilee Hills", slug: "jubilee-hills", desc: "Most hotel bookings" },
  { name: "Gachibowli", slug: "gachibowli", desc: "IT & tech" },
  { name: "Madhapur", slug: "madhapur", desc: "Hitech City area" },
  { name: "Hitech City", slug: "hitech-city", desc: "Corporate & hotels" },
  { name: "Secunderabad", slug: "secunderabad", desc: "Twin city" },
];

const MORE_AREAS = [
  { name: "Begumpet", slug: "begumpet" },
  { name: "Film Nagar", slug: "film-nagar" },
  { name: "Kondapur", slug: "kondapur" },
  { name: "Kukatpally", slug: "kukatpally" },
  { name: "Somajiguda", slug: "somajiguda" },
  { name: "Ameerpet", slug: "ameerpet" },
];

const HOW_IT_WORKS = [
  { step: 1, title: "Contact Us", body: "Message or call with your area, when you need someone, and what you have in mind. We'll ask the basics—hotel or your place, type (Tamil, Mallu, regular, model, etc.)." },
  { step: 2, title: "We Suggest Who's Free", body: "We'll tell you who can reach you on time. If you're at a hotel we need proof and room details; you give her name at reception before she leaves." },
  { step: 3, title: "She Comes to You", body: "Outcall only. She'll turn up at the agreed time. Have address and gate/lobby details ready. Payment when she's there—cash or UPI. No advance for regular, housewife, college-girl profiles." },
];

const WHY_CHOOSE = [
  { title: "No Advance for Regular", body: "For regular, housewife and college-girl profiles we don't ask for advance. Hotel proof + room details + name at reception. Pay when she reaches you." },
  { title: "Complete Discretion", body: "We don't share your number. Girls don't post or talk about clients. Your booking stays between you and us." },
  { title: "Direct Contact", body: "No bots, no long forms. You talk to someone who handles Hyderabad bookings every day. Quick response." },
  { title: "Pay When You Meet", body: "Cash or UPI when she's in your room. For models and above we take a small advance; rest on arrival." },
];

const SERVICE_TYPES = [
  { title: "Short time", desc: "A few hours at your hotel or place. Most popular for business travelers. Pay when she arrives; no advance for regular and housewife profiles." },
  { title: "Dinner or event", desc: "Plus-one for a client dinner in Banjara Hills or Jubilee Hills, or company for an evening out. We'll match someone who's presentable and easy to be around." },
  { title: "Full night", desc: "Longer stay—dinner plus the night. Advance notice helps so we can confirm who's free. Same payment rules: cash or UPI when she's there." },
  { title: "Travel companion", desc: "Outstation trips (Goa, Vizag, Warangal) need advance booking. Not every girl does it; we'll check when you ask." },
];

const WHO_BOOKS = [
  { title: "Business travelers", body: "In town for a few days, staying at a hotel in Banjara Hills or Gachibowli. Don't want to eat alone or sit in a room. Need company that's discreet and hassle-free." },
  { title: "Locals", body: "Living in Hyderabad and want company for an evening—dinner, event, or just a few hours. Same process: you tell us area, when, and type; we fix someone who shows up." },
  { title: "Events & client dinners", body: "Need a plus-one for a corporate dinner or a client meet in Jubilee Hills or Madhapur. We send someone presentable who knows how to keep the evening smooth." },
];

const WHAT_TO_EXPECT = [
  { step: "You message", text: "Area, when, and what you have in mind (Tamil, Mallu, regular, model, dinner, short time, etc.)." },
  { step: "We confirm", text: "We tell you who's free and can reach you. If it's a hotel, we need proof and room details; you give her name at reception." },
  { step: "She arrives", text: "Outcall only. She comes to you. Payment when she's there—cash or UPI. No advance for regular, housewife, college-girl." },
  { step: "After", text: "Your booking stays between you and us. We don't share your number or store your details. Discretion is default." },
];

const FAQ_ITEMS = [
  { q: "What areas in Hyderabad do you cover?", a: "We cover Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Hitech City, Secunderabad, Begumpet, Film Nagar, Kondapur, Kukatpally, Somajiguda, Ameerpet and the rest of the city. Tell us your location when you book and we'll fix someone who can reach you on time." },
  { q: "Do I need to pay advance?", a: "For regular, housewife and college-girl profiles—no advance. We need hotel proof and room details if you're at a hotel, and you give her name at reception before she starts. For models, artists, celebrity and actress we take a small advance (10% or 20%); the rest when she arrives." },
  { q: "How do I book a Hyderabad escort?", a: "Message us on Telegram. Tell us your area, when you need someone, and what you're looking for (Tamil, Mallu, regular, model, etc.). We'll suggest who's free. Same-day and advance bookings both work." },
  { q: "Is my information kept private?", a: "Yes. We don't share your number with the girls. We don't store or share your details. All coordination goes through us. Discretion is non-negotiable." },
  { q: "Outcall or incall in Hyderabad?", a: "We do outcall only in Hyderabad—she comes to your hotel or your place. Have the address and any gate or lobby instructions ready so there's no back-and-forth." },
  { q: "Are Hyderabad escorts verified?", a: "Yes. We verify profiles before listing. You get real photos and real people. No fake profiles or bait-and-switch. If something isn't right on the day, you can tell us—we take feedback seriously." },
  { q: "What is the best area for hotel bookings in Hyderabad?", a: "Banjara Hills and Jubilee Hills get the most hotel bookings—central, plenty of hotels, easy for us to send someone. Gachibowli and Madhapur are popular with business travelers. Hitech City, Secunderabad and Somajiguda work well too. Tell us your hotel area and we'll match someone who can reach you on time." },
  { q: "Can I book a Tamil or Mallu escort in Hyderabad?", a: "Yes. We have Tamil, Mallu and Telugu escorts in Hyderabad. When you message, tell us your preference—language or type (regular, housewife, model, etc.)—and we'll suggest who's free and fits." },
];

const HYDERABAD_CATEGORIES: { slug: CategorySlug; label: string; line: string }[] = [
  { slug: "regular", label: "Regular Escorts", line: "Most popular in Hyderabad. No advance; hotel proof and room details for hotel bookings." },
  { slug: "housewife", label: "Housewife Escorts", line: "Discreet, easy to talk to. Same payment rules—pay when she arrives." },
  { slug: "college-girls", label: "College Girls", line: "Casual vibe for dinners and evenings. Outcall to your hotel or place." },
  { slug: "models", label: "Models", line: "Presentable for client dinners and events. Small advance; rest on arrival." },
];

export default function HyderabadEscortsPage() {
  const jsonLd = buildHyderabadJsonLd();
  return (
    <main id="main-content" className="min-h-screen bg-black">
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      {/* Hero – full width, same layout as Chennai */}
      <header className="relative w-full min-h-[100vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/2.avif"
            alt="Hyderabad escorts – premium outcall escort service in Banjara Hills, Jubilee Hills, Gachibowli and across Hyderabad"
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
            alt="Premium Hyderabad escorts – discreet outcall booking to your hotel or place"
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
                Hyderabad
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                Hyderabad Escorts
              </h1>
              <div className="mt-6 h-px w-16 bg-[var(--accent-gold)]" />
              <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
                Premium escort service in Hyderabad. Outcall to your hotel or your place—Banjara Hills, Jubilee Hills, Gachibowli, Madhapur and across the city.
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
      <section className="border-b border-white/10 py-6 px-4 sm:px-6 lg:px-8" aria-label="About Hyderabad escorts">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            <strong className="text-white">Hyderabad escorts</strong> and escort service in{" "}
            <strong className="text-white">Banjara Hills</strong>, <strong className="text-white">Jubilee Hills</strong>,{" "}
            <strong className="text-white">Gachibowli</strong>, Madhapur, Hitech City and across Hyderabad. Tamil, Mallu & Telugu companions. Outcall to your hotel or place. Discreet, verified, pay when you meet.
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
              alt="Premium Hyderabad escorts – Tamil, Mallu and Telugu companions for outcall in Hyderabad"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="intro-image-gradient-overlay absolute inset-0 z-10" aria-hidden />
          </div>

          <div className="flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 xl:px-16 lg:py-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Looking for premium Hyderabad escorts? You&apos;ve found the city&apos;s trusted escort service.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-white/85 mb-4">
              Most of our bookings in <strong className="text-white">Hyderabad</strong> are from people in town for work—staying at a hotel in <strong className="text-white">Banjara Hills</strong> or <strong className="text-white">Gachibowli</strong>—or locals who want company for a dinner or an event. We don&apos;t do the &quot;pay first and hope someone shows up&quot; thing. You tell us your area, what kind of evening you have in mind, and when. We suggest someone who can reach you without a fuss.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/85 mb-4">
              Outcall to your hotel or your place is the norm. Discretion is non-negotiable. We don't share your number; the girls don't post or talk about clients. Payment when she arrives—cash or UPI. For regular, housewife and college-girl profiles we don't ask for advance; we just need hotel proof and your room details if you're at a hotel. You give her name at reception before she starts. For models, artists, celebrity and actress we take a small advance; the rest when she's there.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-white/85">
              A lot of our clients are here for a few days on work. They don't want to eat alone in a hotel or sit in a room by themselves. Some need a plus-one for a client dinner in Jubilee Hills or Madhapur. Some just want company for an evening with no strings. Same drill for everyone: you book, we fix someone who shows up, you pay when she's there.
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
              What If Booking Escorts in Hyderabad Just Worked?
            </h2>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-4">
              No fakes. No &quot;pay first and pray.&quot; You tell us what you want—area, when, type (Tamil, Mallu, regular, model). We handle the rest. Direct contact with our team. Pay when you meet. Complete privacy guaranteed.
            </p>
            <p className="text-white/70 text-sm sm:text-base">
              This is Hyderabad&apos;s trusted escort service that turns a simple booking into a smooth evening.
            </p>
          </div>
        </div>
      </section>

      <DailyProfilesSection citySlug="hyderabad-escorts" />

      {/* Section 3: Popular Areas */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Popular Areas in Hyderabad
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We cover central Hyderabad, Hitech City, and the suburbs. Tell us your location when you book and we&apos;ll fix someone who can reach you on time.
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
              Banjara Hills and Jubilee Hills get the most hotel bookings. Gachibowli and Madhapur are big for IT and corporate. Hitech City, Secunderabad and Somajiguda are a mix of hotels and residential. Wherever you are, give us the area and we&apos;ll sort it.
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
              Book your escort in Hyderabad in three simple steps.
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
              Trusted Hyderabad escort service. No advance for regular profiles. Discreet and direct.
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

      {/* Section 6: Find Your Perfect Match – label + card wrapper */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By type
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Find Your Perfect Match?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              100% verified profiles. Tamil, Mallu and Telugu escorts in Hyderabad. Choose a type to browse by category (regular, housewife, college girls, models, artists, celebrity, actress).
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

      {/* Tamil, Mallu & Telugu Escorts in Hyderabad – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Tamil Mallu Telugu escorts Hyderabad">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By language
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Tamil, Mallu & Telugu Escorts in Hyderabad
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We have companions who speak Tamil, Malayalam and Telugu. Many clients in Hyderabad want someone who gets the culture and can hold a conversation in their language—for a dinner, an event, or a relaxed evening at your hotel or place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/tamil-escorts", label: "Tamil Escorts", desc: "Tamil companions in Hyderabad. Banjara Hills, Jubilee Hills, Gachibowli—outcall to your hotel or place. Same discretion and pay-when-you-meet policy." },
              { href: "/mallu-escorts", label: "Mallu Escorts", desc: "Mallu companions in Hyderabad for dinner, events or travel. Presentable, easy to talk to. Ask when you message—we'll see who's free." },
              { href: "/telugu-escorts", label: "Telugu Escorts", desc: "Telugu-speaking escorts in Hyderabad. Most popular for local and client dinners. Outcall; pay when she arrives." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl border border-white/10 bg-black/50 p-6 hover:border-[var(--accent-gold)]/40 transition-colors">
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">{item.label}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Languages in Hyderabad – card with pills */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Speak your language
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Languages in Hyderabad
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Tamil", "Malayalam", "Telugu", "English"].map((lang) => (
                  <span key={lang} className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30">
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-white/85 leading-relaxed">
                Our companions in Hyderabad speak Tamil, Malayalam, and Telugu, plus English. Many are multilingual. If you want someone who can hold a conversation in a specific language—for a family function, a dinner where everyone&apos;s speaking Telugu or Tamil, or just because you&apos;re more comfortable—tell us when you book. We&apos;ll suggest who fits. It&apos;s one of the things we get asked most in Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by category – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="Escort categories Hyderabad">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Browse by Category
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Regular, housewife, college girls, models and more. All available in Hyderabad with outcall to your location.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HYDERABAD_CATEGORIES.map((cat) => (
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

      {/* What We Offer – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              What We Offer in Hyderabad
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From a few hours to a full night, dinner dates to travel. Outcall to your hotel or your place in Hyderabad. Tell us what you need and we&apos;ll match you.
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
              We offer flexible durations. All outcall to your hotel or your place in Hyderabad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Short time (a few hours)", desc: "Most popular for business travelers. She comes to you for 2–3 hours (or as agreed). Enough for dinner, conversation, or a relaxed evening. Pay when she arrives; no advance for regular, housewife and college-girl profiles.", num: "1" },
              { title: "Dinner or evening", desc: "A fixed slot for a dinner, event, or party. We need the start time and roughly when it ends. Same payment rules. Tell us the occasion so we match someone who fits the vibe.", num: "2" },
              { title: "Full night", desc: "Dinner plus the night—typically 8–10 hours or as agreed. Advance notice helps so we can confirm who's free. Payment when she's there; for models and above we take a small advance.", num: "3" },
              { title: "Outstation (travel)", desc: "Trips to Goa, Vizag, Warangal or elsewhere. We need a few days' notice. Not every companion does outstation. Same discretion and payment when she's with you.", num: "4" },
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

      {/* Outstation from Hyderabad – card */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/50" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-6 sm:py-8">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
                Travel
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Outstation from Hyderabad
              </h2>
              <p className="text-white/85 leading-relaxed">
                We get requests for trips to Goa, Vizag, Warangal, and elsewhere. Not every companion does outstation, and we need advance notice—often a few days—to check who&apos;s free and willing to travel. Same rules: discretion, pay when she&apos;s with you (cash or UPI), and for regular and housewife profiles no advance. Tell us where you&apos;re going, how many nights, and when; we&apos;ll see what we can arrange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Books Hyderabad Escorts – label + cards */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              Who we serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Who Books Hyderabad Escorts?
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

      {/* First time booking in Hyderabad – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="First time booking Hyderabad">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--accent-gold)]/60" aria-hidden />
            <div className="pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                New to booking?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                First Time Booking in Hyderabad?
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                A lot of our clients are first-timers. You message us with your area, when you need someone, and what you have in mind (dinner, a few hours, event, or just company). We suggest who&apos;s free and can reach you. If you&apos;re at a hotel we need proof and room details; you give her name at reception when she arrives. Payment when she&apos;s there—no advance for regular and housewife profiles.
              </p>
              <p className="text-white/85 leading-relaxed">
                If something isn&apos;t right on the day, tell us afterwards. We take feedback seriously. The women we work with are used to first-time clients; they&apos;re not there to make you feel awkward.
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
                Same-day bookings work—we often confirm within a few hours. For peak times (weekends, evenings in Banjara Hills or Jubilee Hills) a few hours&apos; notice helps. For full-night or outstation (Goa, Vizag, Warangal) we need advance notice; not every girl does it, and we need to line it up.
              </p>
              <p className="text-white/85 leading-relaxed">
                Have these ready when you message: your area (or hotel name and area), when you need her (date and rough time), and what you&apos;re looking for (Tamil, Mallu, regular, model, dinner, short time). If you&apos;re at a hotel, we&apos;ll ask for proof and room details before she starts—so have the room number and be ready to give her name at reception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Bookings & Discretion – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-[var(--accent-gold)]/70" aria-hidden />
            <div className="pl-6 sm:pl-8 pr-6 sm:pr-8 py-8 sm:py-10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-3">
                Privacy & process
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Hotel Bookings & Discretion
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-2">At a hotel</h3>
                  <p className="text-white/85 leading-relaxed">
                    Most Hyderabad bookings are at hotels—Banjara Hills, Jubilee Hills, Gachibowli, Madhapur. We need proof you&apos;re staying there (room key, bill, or a quick photo of the room number) and your room number. You give her name at reception when she arrives so she can come up. We don&apos;t share your number with her; all coordination goes through us.
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-2">At your place</h3>
                  <p className="text-white/85 leading-relaxed">
                    If you&apos;re at your own place, we only need the area and clear address or landmark so she can find you. Same discretion: we don&apos;t hand out your number. Payment when she&apos;s there—cash or UPI. For regular, housewife and college-girl profiles we don&apos;t ask for advance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why outcall only in Hyderabad – card */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="bg-black/50 px-6 sm:px-8 py-6 border-b border-white/10">
              <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
                Safety & discretion
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Why Outcall Only in Hyderabad for Celebrity, Models, Artists and Actress?
              </h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div className="rounded-xl bg-white/[0.03] border border-white/5 p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-2">Outcall for everyone</h3>
                <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                  In Hyderabad we offer <strong className="text-white">outcall only</strong>—she comes to your hotel or your place. We don&apos;t arrange incall. That applies to all profiles: regular, housewife, college girls, and also celebrity, models, artists and actress. You stay in a space you control; she travels to you.
                </p>
              </div>
              <div className="rounded-xl bg-white/[0.03] border border-white/5 p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-2">Premium categories: advance + outcall</h3>
                <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                  For <strong className="text-white">celebrity, models, artists and actress</strong> profiles we take a small advance (typically 10–20%) before she starts; the rest you pay when she arrives. Same outcall rule—she comes to you. If you&apos;re at a hotel we need proof and room details; you give her name at reception.
                </p>
              </div>
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
              No hidden charges. We quote based on duration, type (regular, housewife, model, etc.) and location. You pay when you meet—cash or UPI. For regular, housewife and college-girl profiles we don&apos;t ask for advance. For models, artists, celebrity and actress we take a small advance; the rest when she arrives.
            </p>
            <p className="text-sm font-semibold text-[var(--accent-gold)]">
              Ask for a quote when you message — we&apos;ll give you a clear number.
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
              Clear rates by category. No hidden charges. Duration and area may affect the final quote—message us for a clear number.
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
              { category: "Regular", price: "₹10k – ₹15k per shot.", fullNight: "Full night: ₹30k – ₹50k + cab.", details: "Incall for selected profiles. Outcall: min 2 shots within 10 km." },
              { category: "Housewife", price: "₹10k – ₹12k per shot.", fullNight: "Full night: ₹30k – ₹40k + cab.", details: "Outcall: min 2 shots within 10 km." },
              { category: "College Girl", price: "₹10k – ₹15k per shot.", fullNight: "Full night: ₹30k – ₹50k + cab.", details: "Incall for selected profiles. Outcall: min 2 shots within 10 km." },
              { category: "Models", price: "₹30k – ₹1 Lac per booking.", fullNight: null, details: "Max 2 shots per booking. Stay 4–5 hours max." },
              { category: "Artists", price: "₹1 Lac – ₹5 Lac per booking.", fullNight: null, details: "Max 2 shots per booking. Stay 4–5 hours max." },
              { category: "Celebrity", price: "₹5 Lac – ₹20 Lac per booking.", fullNight: null, details: "Max 2 shots per booking. Stay 4–5 hours max." },
              { category: "Actress", price: "₹10 Lac – ₹1 Crore per booking.", fullNight: null, details: "Max 2 shots per booking. Stay 4–5 hours max." },
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
                  {item.fullNight && <p className="text-white/90 text-sm">{item.fullNight}</p>}
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
              Plans change. If you need to cancel or move your booking, tell us as soon as you can. We&apos;re flexible—we&apos;d rather reschedule than have you rush or no-show. We don&apos;t charge cancellation fees for regular bookings; for models and above we may have a small policy depending on how close to the time you cancel. When you message, ask if you want the details.
            </p>
          </div>
        </div>
      </section>

      {/* Area keyword blocks – Banjara Hills/Jubilee Hills & Gachibowli/Madhapur */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10" aria-label="Escort service by area Hyderabad">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              By area
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Where We Serve in Hyderabad
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-[var(--accent-gold)]/40 transition-colors">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link href="/banjara-hills-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  Banjara Hills
                </Link>
                <Link href="/jubilee-hills-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  Jubilee Hills
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Escort Service in Banjara Hills and Jubilee Hills
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Most of our Hyderabad hotel bookings are in Banjara Hills and Jubilee Hills—central, plenty of hotels, easy for us to send someone. Outcall to your room; we need proof and room details, and you give her name at reception. Pay when she arrives.
              </p>
            </div>
            <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-[var(--accent-gold)]/40 transition-colors">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link href="/gachibowli-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  Gachibowli
                </Link>
                <Link href="/madhapur-escorts" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 hover:bg-[var(--accent-gold)]/25 transition-colors">
                  Madhapur
                </Link>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Outcall Escorts in Gachibowli and Madhapur
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                Gachibowli and Madhapur are big for IT and corporate clients. We get a lot of bookings from business travelers staying there. Outcall only—she comes to your hotel or your place. Tell us your area and when you need someone; we&apos;ll suggest who&apos;s free and can reach you on time.
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
                We cover all of Hyderabad. When you book we factor in where you are and where she&apos;s coming from so we suggest someone who can reach you on time. Tell us your area (or hotel name and area) when you message; we don&apos;t need the exact address until we confirm. Clear gate or lobby instructions help so there&apos;s no back-and-forth on the day.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Banjara Hills", slug: "banjara-hills-escorts" },
                  { name: "Jubilee Hills", slug: "jubilee-hills-escorts" },
                  { name: "Gachibowli", slug: "gachibowli-escorts" },
                  { name: "Madhapur", slug: "madhapur-escorts" },
                  { name: "Hitech City", slug: "hitech-city-escorts" },
                  { name: "Secunderabad", slug: "secunderabad-escorts" },
                  { name: "Begumpet", slug: "begumpet-escorts" },
                  { name: "Film Nagar", slug: "film-nagar-escorts" },
                  { name: "Kondapur", slug: "kondapur-escorts" },
                  { name: "Kukatpally", slug: "kukatpally-escorts" },
                  { name: "Somajiguda", slug: "somajiguda-escorts" },
                  { name: "Ameerpet", slug: "ameerpet-escorts" },
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
                Events and Corporate Bookings in Hyderabad
              </h2>
              <p className="text-white/85 leading-relaxed mb-5">
                A lot of Hyderabad bookings are for client dinners, corporate dos, or events in Jubilee Hills, Banjara Hills, or Gachibowli. You need someone presentable who can sit at a table, hold a conversation, and not stick out. We have profiles who&apos;re used to that—model and celebrity-style for high-end dinners, regular and college-girl for more casual events. Tell us the occasion, the timing, and how formal it is; we&apos;ll suggest who fits.
              </p>
              <div className="rounded-xl bg-white/[0.04] border border-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--accent-gold)]/90 mb-2">
                  What we need from you
                </h3>
                <p className="text-white/85 leading-relaxed text-sm sm:text-base">
                  The venue (hotel or place), date and time, and whether it&apos;s a sit-down dinner or a mix of networking and social. If it&apos;s a hotel we need proof and room details; you give her name at reception. Same payment rules: pay when she arrives. For models and above we take a small advance; the rest when she&apos;s there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Hyderabad Escort Service – content left, image right */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Trusted Hyderabad Escort Service
            </h2>
            <p className="text-lg leading-relaxed text-white/85 mb-6">
              In the heart of Telangana, Hyderabad runs on work, travel, and the need for company that doesn&apos;t come with strings. We&apos;re the city&apos;s trusted escort service—discreet, straightforward, and built for people who don&apos;t want to waste time. Outcall to your hotel in Banjara Hills or your place in Jubilee Hills. Same process everywhere: you book, we fix someone who shows up, you pay when she&apos;s there.
            </p>
            <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-3">
              Why Hyderabad&apos;s clients choose us
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              We don&apos;t hand out your number. We don&apos;t ask for full advance for regular and housewife profiles. We need hotel proof and room details if you&apos;re at a hotel, and you give her name at reception before she starts. If something isn&apos;t right on the day, you can tell us afterwards—we take that seriously. No bots, no long forms. You talk to someone who handles Hyderabad bookings every day.
            </p>
            <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-3">
              How we match you with a Hyderabad escort
            </h3>
            <p className="text-white/80 leading-relaxed">
              You tell us your area, when you need her, and what type you want (Tamil, Mallu, regular, model, etc.). We&apos;ll suggest who&apos;s free and who can reach you on time. Same process for every booking. If you&apos;re new, say so—we&apos;ll walk you through it. If you&apos;ve booked before, just message with the basics and we&apos;ll have someone there.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-xl overflow-hidden bg-white/5 shrink-0">
            <Image
              src="/images/3.avif"
              alt="Trusted Hyderabad escort service – discreet outcall to your hotel or place"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Other cities – label + card */}
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
              Hyderabad is a major hub; we also arrange outcall in Chennai, Bangalore, Kochi, Coimbatore, Madurai and more. Ask when you message—availability depends on who&apos;s free and where. Same rules: discretion, pay when you meet, no advance for regular and housewife profiles.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Chennai", slug: "chennai-escorts" },
                { name: "Bangalore", slug: "bangalore-escorts" },
                { name: "Kochi", slug: "kochi-escorts" },
                { name: "Coimbatore", slug: "coimbatore-escorts" },
                { name: "Madurai", slug: "madurai-escorts" },
              ].map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}`}
                  className="inline-block px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm font-medium hover:border-[var(--accent-gold)]/50 hover:text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
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
              Straightforward guides on booking, discretion, and what to expect in Hyderabad and South India.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/blog/what-to-expect-booking-escort-chennai"
              className="block rounded-2xl border border-white/10 bg-black/40 p-6 hover:border-[var(--accent-gold)]/40 transition-colors group"
            >
              <div className="w-10 h-px bg-[var(--accent-gold)]/50 mb-3 group-hover:bg-[var(--accent-gold)]/70 transition-colors" aria-hidden />
              <h3 className="text-lg font-bold text-white mb-2">What to Expect When Booking an Escort</h3>
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
                More articles on choosing a companion, discretion, and South Indian escort services.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ – label + cards */}
      <section className="border-y border-white/10 py-14 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-label="Frequently asked questions about Hyderabad escorts">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[var(--accent-gold)] uppercase mb-2">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Top Questions about Escorts in Hyderabad
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
              Ready to Book a Hyderabad Escort?
            </h2>
            <p className="text-white/70 mb-6">
              Message us with your area, when you need someone, and what you have in mind. We&apos;re on Telegram. No bots—you&apos;ll talk to someone who handles Hyderabad bookings every day. Questions about areas, payment, or what to expect? Ask when you message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/LillyBabe_chennai"
                target="_blank"
                rel="noopener noreferrer"
                title="Contact Hyderabad escorts on Telegram"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
              </a>
              <Link
                href="/contact"
                title="Contact us to book Hyderabad escorts"
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
