import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import StoriesCarousel from "@/components/StoriesCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { CATEGORIES, getCategoryPagePath, type CategorySlug } from "@/lib/categories";
import { getTypePagePath, type EscortType } from "@/lib/profileData";
import { getBaseUrl } from "@/lib/site";
import type { Metadata } from "next";

const SITE_TITLE = "Tamil Escorts | Chennai, Bangalore & South India – Premium Companions";
const SITE_DESCRIPTION =
  "Premium Tamil & South Indian escorts in Chennai, Bangalore, Hyderabad, Kochi and more. Discreet, verified profiles. Book companions for dinner, events & travel. 24/7.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Tamil escorts",
    "Chennai escorts",
    "Bangalore escorts",
    "South Indian escorts",
    "Hyderabad escorts",
    "Kochi escorts",
    "escort service Chennai",
    "discreet escorts South India",
  ],
  openGraph: {
    type: "website",
    url: getBaseUrl(),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Tamil Escorts",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: getBaseUrl(),
  },
  robots: { index: true, follow: true },
};

const FAQ_ITEMS = [
  { q: "How do I contact an escort?", a: "Each profile has a Telegram button. Simply click it to start a conversation directly with the escort. All communication is private and discreet." },
  { q: "Are the profiles verified?", a: "Yes, we verify all profiles to ensure authenticity. Look for the verified badge on profiles that have been checked." },
  { q: "Is my information kept private?", a: "Absolutely. We take privacy seriously. Your conversations and interactions remain completely confidential." },
  { q: "What cities do you cover?", a: "We have escorts available in major South Indian cities including Chennai, Bangalore, Hyderabad, Kochi, and many more." },
  { q: "How do I know if someone is available?", a: "Each profile shows availability status. You can also check directly via Telegram - most escorts respond within 30 minutes to 2 hours." },
  { q: "What languages do your companions speak?", a: "Our companions speak various South Indian languages including Tamil, Malayalam, Kannada, Telugu, and English. Many are multilingual." },
  { q: "How far in advance should I book?", a: "We recommend booking at least 2-4 hours in advance, though we can often accommodate same-day requests. For special events, advance booking is recommended." },
  { q: "Can I request a specific companion?", a: "Absolutely! If you've met someone before or have seen a profile you like, just let us know and we'll do our best to arrange for that companion if they're available." },
  { q: "What if I need to cancel or reschedule?", a: "We understand that plans can change. Contact us as soon as possible, and we'll work with you to reschedule or cancel. We're flexible and understanding." },
  { q: "Do you offer services for couples?", a: "Yes, we can arrange companions for couples as well. Just let us know your preferences and we'll find the perfect match." },
  { q: "What payment methods do you accept?", a: "We accept cash payments for discretion and security. Payment is typically made after the service is completed. We never ask for advance payments or deposits." },
  { q: "Are your companions available for travel?", a: "Yes, many of our companions are available for travel, business trips, or extended engagements. This can be discussed when you contact us." },
  { q: "How do I know the companion will show up?", a: "We have a strict policy of reliability. All our companions are professional and punctual. We'll provide confirmation details and keep you updated throughout." },
  { q: "Do you offer both incall and outcall?", a: "Yes. We offer outcall (companion comes to your location—hotel, home, or venue) and can arrange incall where available. Tell us your preference when you book and we'll match you accordingly." },
];

function buildHomepageJsonLd() {
  const base = getBaseUrl();
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Tamil Escorts",
      url: base,
      description: SITE_DESCRIPTION,
      areaServed: [
        { "@type": "Place", name: "Chennai" },
        { "@type": "Place", name: "Bangalore" },
        { "@type": "Place", name: "Hyderabad" },
        { "@type": "Place", name: "Kochi" },
        { "@type": "Place", name: "Coimbatore" },
        { "@type": "Place", name: "Madurai" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Tamil Escorts",
      url: base,
      description: SITE_DESCRIPTION,
      publisher: { "@type": "Organization", name: "Tamil Escorts", url: base },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];
}

export default function Home() {
  const jsonLd = buildHomepageJsonLd();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[2]) }}
      />
      <Hero />
      <IntroSection />
      {/* SEO: keyword-rich intro for crawlers and users */}
      <section className="relative bg-black py-8 overflow-hidden" aria-label="About our service">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg sm:text-xl text-white/80 leading-relaxed">
            <strong className="text-white">Tamil Escorts</strong> and South Indian escort services in{" "}
            <strong className="text-white">Chennai</strong>, <strong className="text-white">Bangalore</strong>,{" "}
            <strong className="text-white">Hyderabad</strong>, <strong className="text-white">Kochi</strong>, Coimbatore and Madurai. Book a discreet companion for dinner, events, travel or a relaxed evening. Verified profiles, cash or UPI, no advance for regular bookings.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
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

      {/* Tamil, Mallu, Telugu, Kannada – detailed SEO content blocks */}
      <section className="relative bg-black py-16 sm:py-20 overflow-hidden" aria-label="Tamil, Mallu, Telugu and Kannada escorts">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-14">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-3">
              South India
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--accent-gold)] mb-4">
              Tamil, Mallu, Telugu & Kannada Escorts
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Who we are, where we're there, and what you can expect when you book
            </p>
          </header>

          {[
            {
              id: "tamil",
              region: "Tamil Nadu",
              title: "Tamil Escorts",
              image: "/images/tamil-escorts.avif",
              imageAlt: "Tamil escorts Chennai",
              accent: "gold",
              imageFirst: false,
              paragraphs: [
                "Most of our Tamil escort bookings are in Chennai—Nungambakkam, T Nagar, OMR, Guindy, Adyar. We get a lot of out-of-town clients who're here for work and don't want to eat alone in a hotel, and a lot of locals who want company for a dinner or an event without the hassle of dating apps. They're not all looking for a \u201Cmodel type.\u201D Many want someone who speaks Tamil, gets the culture, and can sit at a table or walk into a family function without sticking out. We've got regulars who book the same girl every time they're in town.",
                "Outcall to your hotel or your place is the norm. We need your area, the kind of evening you have in mind (dinner, party, just a few hours), and when. We'll suggest someone who can reach you without a fuss. Discretion is non-negotiable—we don't share your number, and the girls don't post or talk about clients. If you're in Coimbatore, Madurai, or Trichy we can sometimes arrange there too; just ask when you message. Payment is when she reaches you—cash or UPI. For regular and housewife profiles we don't ask for advance; we just need hotel proof and your room details if it's a hotel booking.",
              ],
            },
            {
              id: "mallu",
              region: "Kerala",
              title: "Mallu Escorts",
              image: "/images/mallu-escorts.avif",
              imageAlt: "Mallu escorts Kerala",
              accent: "emerald",
              imageFirst: true,
              paragraphs: [
                "Mallu escorts on our platform are mostly in Kochi; we get requests from Calicut and other parts of Kerala too. What we hear from clients again and again is that they're easy to talk to—no airs, no drama. A lot of bookings are for dinner or a relaxed evening at the client's hotel; some want company for a wedding or a house party where everyone's speaking Malayalam. We've got girls who're fine with that. They don't feel like strangers in the room.",
                "A fair share of Mallu escort bookings are for travel—a weekend in Goa, a couple of days in Munnar or Thekkady. We need a bit of notice for outstation; not everyone does it, but we have profiles who do. Same rules as everywhere: outcall to your place or hotel, discretion, pay when she arrives. If you're in Kerala for work or just passing through and want company that gets the culture, tell us your city and when you need someone. We'll see who's free and who fits what you're looking for.",
              ],
            },
            {
              id: "telugu",
              region: "Andhra & Telangana",
              title: "Telugu Escorts",
              image: "/images/telugu-escorts.avif",
              imageAlt: "Telugu escorts Hyderabad",
              accent: "amber",
              imageFirst: false,
              paragraphs: [
                "Hyderabad is where most of our Telugu escort bookings happen—Banjara Hills, Jubilee Hills, Gachibowli, the usual hotel areas. We get a mix: locals who don't want the hassle of explaining themselves on a dating app, and out-of-town guys who're in the city for a few days and want company for dinner or an event. A lot of them want someone who can hold a conversation in Telugu if the room is full of it. We have profiles that work for high-end client dinners and ones that are more low-key—just someone to eat with and talk to.",
                "Other Andhra cities come up too; we don't have as many girls there as in Hyderabad, but we can check when you ask. Outcall to your hotel or home is standard. You tell us the occasion, the timing, and what you're looking for (chatty, quiet, presentable for an event), and we'll suggest who's available. Payment when she reaches you—cash or UPI. No advance for regular and housewife categories; for models and above we take a small advance and the rest on arrival. Same discretion rules: we don't hand out your number, and what happens stays between you and her.",
              ],
            },
            {
              id: "kannada",
              region: "Karnataka",
              title: "Kannada Escorts",
              image: "/images/kannada-escorts.avif",
              imageAlt: "Kannada escorts Bangalore",
              accent: "slate",
              imageFirst: true,
              paragraphs: [
                "Bangalore is the main hub for Kannada escorts on our platform—Indiranagar, Koramangala, Whitefield, MG Road, the usual spots. A lot of our clients are IT guys, business travellers, or locals who're done with dating apps and want one evening with no follow-up. They want someone who speaks Kannada or at least gets the vibe, looks presentable for a dinner or a do, and doesn't make things awkward. We have that. Most bookings are outcall to the client's hotel or apartment; we need your area and when you need her so we can fix someone who can reach you on time.",
                "We get a fair number of outstation requests too—someone to take to Coorg, Chikmagalur, or Mysore for a couple of days. Not every girl does it, and we need notice, but we can sort it when you ask. Same deal as everywhere: discretion, pay when she arrives (cash or UPI), and for regular and housewife profiles no advance—just hotel proof and room details if it's a hotel. If you're in Bangalore or elsewhere in Karnataka and want Kannada-speaking company that's relaxed and reliable, drop us a message with when and what you have in mind.",
              ],
            },
          ].map((block, idx) => (
            <div key={block.id} className="mb-16 last:mb-0">
              <div
                className={`grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border bg-[var(--card-bg)]/95 backdrop-blur-md shadow-xl lg:grid-cols-2 min-h-0 ${
                  block.accent === "gold"
                    ? "border-[var(--accent-gold)]/40 shadow-[var(--accent-gold)]/5"
                    : block.accent === "emerald"
                      ? "border-emerald-500/30 shadow-emerald-500/5"
                      : block.accent === "amber"
                        ? "border-amber-500/30 shadow-amber-500/5"
                        : "border-white/10"
                }`}
              >
                <div className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] ${block.imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      block.accent === "gold"
                        ? "bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] border border-[var(--accent-gold)]/40"
                        : block.accent === "emerald"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                          : block.accent === "amber"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                            : "bg-white/10 text-white/90 border border-white/20"
                    }`}
                  >
                    {block.region}
                  </div>
                </div>
                <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${block.imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                    {block.title}
                  </h3>
                  <div className="space-y-5">
                    {block.paragraphs.map((p, i) => (
                      <p key={i} className="text-base sm:text-lg leading-relaxed text-white/85">
                        {p}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={getTypePagePath(block.id as EscortType)}
                    className="mt-6 inline-flex items-center gap-2 text-[var(--accent-gold)] font-medium hover:underline text-sm sm:text-base"
                  >
                    View {block.title}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service categories – editorial full-width blocks */}
      <section className="relative bg-black overflow-hidden" aria-label="Service categories – Regular, Housewife, College Girls, Models, Artists, Celebrity, Actress">
        <div className="relative">
          <header className="text-center py-16 sm:py-20 px-4">
            <span className="inline-block text-[var(--accent-gold)]/90 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Service Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 tracking-tight max-w-4xl mx-auto">
              Regular, Housewife, College Girls, Models, Artists, Celebrity & Actress
            </h2>
            <div className="h-1 w-20 bg-[var(--accent-gold)] mx-auto mb-5" />
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              What each category means and who it's for
            </p>
          </header>

          {[
            {
              slug: "regular",
              title: "Regular Escorts",
              icon: "✨",
              image: "/images/regular-escorts.avif",
              imageAlt: "Regular escorts – everyday companionship",
              paragraphs: [
                "Regular escorts are exactly what the name says—everyday people who are easy to talk to and good company. No glamour act, no pretending to be someone else. Most of our clients who book regular escorts want someone for dinner, a night out, or a few hours at the hotel. They want someone who can hold a conversation, laugh when it matters, and not make things awkward. We get a lot of repeat bookings in this category because the vibe is natural. If you're not looking for a model or celebrity type and just want relaxed, genuine company, this is where most people start.",
                "Outcall to your place or hotel is the norm. Same discretion and payment rules as the rest—we don't ask for advance for regular profiles. You tell us your area, what kind of evening you have in mind, and when; we suggest someone who can reach you. A lot of guys in Chennai, Bangalore and Hyderabad book regular escorts for client dinners or just to avoid eating alone. It's the most popular category for a reason.",
              ],
            },
            {
              slug: "housewife",
              title: "Housewife Escorts",
              icon: "🏠",
              image: "/images/housewife-escorts.avif",
              imageAlt: "Housewife escorts – mature, discreet companionship",
              paragraphs: [
                "Housewife escorts are mature, grounded women who bring life experience and a calm presence. A lot of our clients are guys who've had enough of drama and want someone who's easy to be around—someone who listens, doesn't judge, and doesn't need to be the centre of attention. Bookings are often for a relaxed evening at the client's place or hotel, dinner, or just someone to talk to. They're discreet by nature and good at reading the room.",
                "If you want company that feels comfortable and safe rather than flashy, this category fits. Same outcall and payment rules; we don't ask for advance for housewife profiles. Many clients book them when they want someone who gets family values and won't make the evening feel like a show. We have housewife escorts in Chennai, Bangalore, Kochi and other cities—tell us where you are and when you need someone.",
              ],
            },
            {
              slug: "college-girls",
              title: "College Girls",
              icon: "🎓",
              image: "/images/college-girl-escorts.avif",
              imageAlt: "College girl escorts – young, fun companionship",
              paragraphs: [
                "College girls on our platform are students or young professionals—young, energetic, and easy to chat with. Clients book them for casual outings, parties, or someone to spend time with without heavy expectations. They're usually up for a good time, easygoing, and can talk about anything from studies to travel to nightlife. If you're looking for someone youthful and fun rather than formal, this category works.",
                "We get a lot of bookings for events and dinners where the vibe is casual. Outcall to your location, same discretion; no advance for college girl escorts. A lot of guys in Bangalore and Chennai book them for a night out or a weekend. Tell us the occasion and we'll suggest who's free and who fits what you're looking for.",
              ],
            },
            {
              slug: "models",
              title: "Model Escorts",
              icon: "👗",
              image: "/images/model-escorts.avif",
              imageAlt: "Model escorts – fashion, events, high-end companionship",
              paragraphs: [
                "Model escorts are photogenic, well-dressed, and used to being in the room. A lot of clients book them for client dinners, corporate events, or when they want someone who'll turn heads and carry themselves well. They're used to social settings and know how to dress for the occasion. If you're taking someone to a high-end do in Chennai or Bangalore, this is the category a lot of guys pick. We have profiles who've worked in fashion or modelling; they bring that polish and confidence.",
                "Outcall to your hotel or venue. For model escorts we may take a small advance (10% or 20%); the rest you pay when she arrives—cash or UPI. Same discretion: we don't share your number, and what happens stays between you and her. If you need someone for a corporate event or a dinner where impression matters, tell us the occasion and we'll match you.",
              ],
            },
            {
              slug: "artists",
              title: "Artists & Performers",
              icon: "🎭",
              image: "/images/artists-escorts.avif",
              imageAlt: "Artist escorts – dancers, musicians, creative companionship",
              paragraphs: [
                "Artists are dancers, musicians, or performers—creative people who bring something extra to the table. Clients who book them often want more than small talk; they want someone who can talk about their craft, the industry, or the arts. A lot of bookings are for dinners, cultural events, or private evenings where conversation matters. If you're into music, dance, or visual arts, you'll find someone who gets it. They're expressive and know how to make an evening feel different from the usual.",
                "Same discretion and outcall. Advance depends on the profile—we'll tell you when you ask. Artist escorts are popular in Chennai and Bangalore for events and for guys who want company that can hold a conversation about something other than work. Tell us what you have in mind and we'll see who's available.",
              ],
            },
            {
              slug: "celebrity",
              title: "Celebrity Escorts",
              icon: "⭐",
              image: "/images/celebrity-escorts.avif",
              imageAlt: "Celebrity escorts – high-profile, discreet companionship",
              paragraphs: [
                "Celebrity escorts are high-profile and used to attention. They understand discretion and don't talk about clients or post about where they've been. Clients book them when they want someone who's clearly special—for a big event, a client dinner where impression matters, or a private evening. They know how to handle the spotlight and keep things between you and them. We're strict about privacy with this category.",
                "If you want someone who looks and carries themselves like a celebrity, this is the one. Advance is usually required (10% or 20%); the rest when she arrives. We don't hand out your details; all coordination goes through us. Celebrity escort bookings need a bit of notice—tell us the date, the occasion, and the city and we'll see who we can fix.",
              ],
            },
            {
              slug: "actress",
              title: "Actress Escorts",
              icon: "🎬",
              image: "/images/actress-escorts.avif",
              imageAlt: "Actress escorts – screen and stage talent, presence and charm",
              paragraphs: [
                "Actress escorts have screen or stage background—expressive, confident, and good at making every moment feel considered. Clients book them for high-profile events, private evenings, or when they want someone with presence and charm. They're used to performing and know how to hold a conversation and read the room. A lot of clients love the mix of creativity and discretion. If you want someone with that kind of training and vibe, this category fits.",
                "Advance is typically required; the rest when she arrives. Same discretion rules. We have actress escorts in major South Indian cities; tell us the occasion and when you need someone and we'll suggest who's free. Outcall to your hotel or venue. Payment by cash or UPI once she's there.",
              ],
            },
          ].map((block, idx) => {
            const imageLeft = idx % 2 === 0;
            return (
              <article
                key={block.slug}
                className="group relative border-t border-white/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[min(80vh,700px)]">
                  <div className={`relative min-h-[320px] lg:min-h-0 ${!imageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <Link href={getCategoryPagePath(block.slug as CategorySlug)} className="absolute inset-0 block">
                      <Image
                        src={block.image}
                        alt={block.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="100vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r ${imageLeft ? "from-black/90 via-black/50 to-transparent" : "from-black/90 via-black/50 to-transparent lg:from-transparent lg:via-black/50 lg:to-black/90"}`} />
                      <div className="absolute top-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-gold)]/20 text-2xl backdrop-blur-md border border-[var(--accent-gold)]/50 shadow-lg">
                        {block.icon}
                      </div>
                      <span className="absolute bottom-6 left-6 text-[8rem] sm:text-[10rem] lg:text-[12rem] font-black leading-none text-white/10 select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </div>
                  <div className={`relative flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20 bg-black ${!imageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <span className="absolute top-8 right-8 lg:top-10 lg:right-10 text-7xl sm:text-8xl lg:text-9xl font-black text-[var(--accent-gold)]/10 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <span className="inline-block text-[var(--accent-gold)]/80 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        Category {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 tracking-tight">
                        {block.title}
                      </h3>
                      <div className="w-16 h-1 bg-[var(--accent-gold)] mb-6 lg:mb-8" />
                      <div className="space-y-5">
                        {block.paragraphs.map((p, i) => (
                          <p key={i} className="text-base sm:text-lg leading-relaxed text-white/80">
                            {p}
                          </p>
                        ))}
                      </div>
                      <Link
                        href={getCategoryPagePath(block.slug as CategorySlug)}
                        className="mt-8 inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--accent-gold)]/15 border-2 border-[var(--accent-gold)]/50 text-[var(--accent-gold)] font-semibold hover:bg-[var(--accent-gold)]/25 hover:border-[var(--accent-gold)] transition-all duration-300"
                      >
                        Browse {block.title}
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Personal Message from Founder */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-0 grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-2xl backdrop-blur-md lg:grid-cols-2">
            {/* Left: content */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6 sm:text-4xl">
                A Personal Message from Me
              </h2>
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-white/80 italic">
                  "Hi there! I want to personally welcome you to our platform. I started this service because I saw how many people were struggling to find genuine, professional companionship in South India—someone who understands your culture, speaks your language, and makes you feel comfortable."
                </p>
                <p className="text-lg leading-relaxed text-white/70">
                  You know, South India can be a busy place. Whether you're a busy executive who needs someone to accompany you to important events, a business traveler who's tired of dining alone, or someone who just wants pleasant company for an evening—I understand. I've been there myself.
                </p>
                <p className="text-lg leading-relaxed text-white/70">
                  That's why I personally curate every profile on our platform. I want to make sure they're not just beautiful, but also intelligent, well-mannered, and genuinely caring. When you contact us, you're not just getting a service—you're getting a friend who truly cares about making your evening special.
                </p>
                <p className="text-lg leading-relaxed text-white/70">
                  So please, don't hesitate to reach out. Whether you have questions, concerns, or just want to chat about what you're looking for—we're here to help. Your happiness and satisfaction are what drive us every single day.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                <p className="text-xl font-semibold text-[var(--accent-gold)]">Your Trusted Friend</p>
                <p className="text-sm text-white/60 mt-1">Founder & Your Personal Guide</p>
              </div>
            </div>
            {/* Right: image */}
            <div className="relative min-h-[280px] lg:min-h-0">
              <Image
                src="/images/1.avif"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Numbers */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Our Success Numbers
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Trusted by thousands of clients across South India, our numbers speak for themselves
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: "1000+", label: "Happy Clients", icon: "😊" },
              { number: "100+", label: "Premium Escorts", icon: "⭐" },
              { number: "24/7", label: "Availability", icon: "🕐" },
              { number: "100%", label: "Discretion Guaranteed", icon: "🔒" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center bg-[var(--card-bg)] backdrop-blur-md rounded-xl p-6 border border-[var(--border-color)] hover:border-[var(--accent-gold)] transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StoriesCarousel />

      {/* Understanding Escort Services */}
      <section className="bg-black py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Understanding South Indian Escort Services
            </h2>
            <p className="text-lg text-white/70">
              Learn more about our professional escort services and discover the benefits of choosing our trusted platform
            </p>
          </div>
          <div className="space-y-8">
            {/* What are Escort Services - left image, right content */}
            <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-md backdrop-blur-md lg:grid-cols-2">
              <div className="relative min-h-[240px] lg:min-h-0 order-2 lg:order-1">
                <Image
                  src="/images/3.avif"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-4">
                  What are Escort Services in South India?
                </h3>
                <p className="text-lg leading-relaxed text-white/80 mb-4">
                  An escort service is a platform that connects clients with professional companions. In most cases, we arrange meetings between clients and companions either at the client's location (outcall) or at the companion's location (incall).
                </p>
                <p className="text-lg leading-relaxed text-white/80 mb-4">
                  Our services go beyond basic companionship—we provide escorts who can accompany you on longer engagements, business trips, or even cultural events. While we handle the booking and coordination, any additional services are discussed directly between you and the companion.
                </p>
                <div className="grid gap-4 sm:grid-cols-3 mt-4">
                  <div className="text-center p-4 bg-black/50 rounded-lg border border-[var(--border-color)]">
                    <div className="text-2xl mb-2">📋</div>
                    <p className="text-sm font-medium text-white">Professional Booking</p>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-lg border border-[var(--border-color)]">
                    <div className="text-2xl mb-2">🔄</div>
                    <p className="text-sm font-medium text-white">Flexible Arrangements</p>
                  </div>
                  <div className="text-center p-4 bg-black/50 rounded-lg border border-[var(--border-color)]">
                    <div className="text-2xl mb-2">✈️</div>
                    <p className="text-sm font-medium text-white">Extended Companionship</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Benefits of Choosing Our Services - left content, right image */}
            <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] shadow-md backdrop-blur-md lg:grid-cols-2">
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-4">
                  Benefits of Choosing Our Services
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Diverse Variety of Choices
                    </h4>
                    <p className="text-lg leading-relaxed text-white/70">
                      Our main strength is access to a wide variety of companions. We have well-known and model companions available, including artists, celebrities, models, and independent professionals. These options are plentiful with diverse choices for different occasions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      No Special Skills Required
                    </h4>
                    <p className="text-lg leading-relaxed text-white/70">
                      Our companions are professional and understanding. You don't need special charisma or talent to enjoy their company. You can enjoy their youth, beauty, and attractiveness without any pressure or expectations.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Saves Time and Money
                    </h4>
                    <p className="text-lg leading-relaxed text-white/70">
                      Skip the long process of dating and wooing. Our service allows you to hasten the whole process without additional fees. No need to spend time and money on traditional dating methods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[240px] lg:min-h-0">
                <Image
                  src="/images/2.avif"
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value & Quality */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-60" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Value & Quality in Every Service
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover why our services offer exceptional value for your time and money
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
            {/* Main message block */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="bg-[var(--card-bg)] backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-[var(--border-color)] h-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                  Is Your Time and Money Valuable?
                </h3>
                <p className="text-lg leading-relaxed text-white/80 mb-5">
                  South India is one of the busiest and most popular regions where people can enjoy, get entertained, and have access to all kinds of services that would make them happy. When you're thinking of getting intimate companionship, our escort services are waiting to ensure you go back wanting more.
                </p>
                <p className="text-lg leading-relaxed text-white/80">
                  Our companions provide pleasure sprinkled with satisfaction and above all, complete client satisfaction. We are going to advance your fantasies and ensure to end your loneliness with our premium services.
                </p>
              </div>
            </div>

            {/* Value pillars */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="group flex gap-5 p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md hover:border-[var(--accent-gold)]/50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--accent-gold)]/15 flex items-center justify-center text-2xl group-hover:bg-[var(--accent-gold)]/25 transition-colors">
                  ⏰
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-lg">Timely & Efficient</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Services that respect your schedule and deliver when you need them.</p>
                </div>
              </div>
              <div className="group flex gap-5 p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md hover:border-[var(--accent-gold)]/50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--accent-gold)]/15 flex items-center justify-center text-2xl group-hover:bg-[var(--accent-gold)]/25 transition-colors">
                  💰
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-lg">Value for Money</h4>
                  <p className="text-white/70 text-sm leading-relaxed">Premium experiences without hidden costs or compromises.</p>
                </div>
              </div>
              <div className="group flex gap-5 p-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md hover:border-[var(--accent-gold)]/50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--accent-gold)]/15 flex items-center justify-center text-2xl group-hover:bg-[var(--accent-gold)]/25 transition-colors">
                  ✅
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-lg">Satisfaction Guarantee</h4>
                  <p className="text-white/70 text-sm leading-relaxed">We stand behind every booking with complete client satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Promise */}
      <section className="relative bg-black py-14 overflow-hidden">
        {/* Soft ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-gold)]/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Seal-style header */}
          <div className="text-center mb-14">
            <div className="inline-flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-[var(--accent-gold)] flex items-center justify-center mb-5 shadow-[0_0_30px_var(--accent-gold)/20]">
                <span className="text-3xl" aria-hidden>✦</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--accent-gold)] mb-4 tracking-tight">
                Our Personal Promise to You
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent mb-5" />
              <p className="text-lg sm:text-xl text-white/75 italic max-w-xl">
                We don't just provide a service—we make a commitment to your happiness and satisfaction
              </p>
            </div>
          </div>

          {/* Promise cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-14">
            <div className="group relative bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent-gold)]/60 transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-gold)/10]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/5 rounded-bl-full transition-colors group-hover:bg-[var(--accent-gold)]/10" />
              <div className="relative">
                <span className="inline-flex w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] font-bold text-lg items-center justify-center mb-5">1</span>
                <h3 className="font-bold text-white mb-3 text-xl">
                  Your Privacy is Sacred
                </h3>
                <p className="text-white/80 leading-relaxed">
                  We understand that discretion is everything. Your personal information, your preferences, and your experiences with us will always remain completely confidential.
                </p>
              </div>
            </div>
            <div className="group relative bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent-gold)]/60 transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-gold)/10]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/5 rounded-bl-full transition-colors group-hover:bg-[var(--accent-gold)]/10" />
              <div className="relative">
                <span className="inline-flex w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] font-bold text-lg items-center justify-center mb-5">2</span>
                <h3 className="font-bold text-white mb-3 text-xl">
                  Quality is Non-Negotiable
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Every companion on our platform is carefully curated. We never compromise on quality because you deserve nothing but the best.
                </p>
              </div>
            </div>
            <div className="group relative bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent-gold)]/60 transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-gold)/10]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/5 rounded-bl-full transition-colors group-hover:bg-[var(--accent-gold)]/10" />
              <div className="relative">
                <span className="inline-flex w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] font-bold text-lg items-center justify-center mb-5">3</span>
                <h3 className="font-bold text-white mb-3 text-xl">
                  We're Always Here for You
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Whether it's 2 AM or 2 PM, whether you need advice or just want to chat, we're here. Your happiness and satisfaction are what drive us every day.
                </p>
              </div>
            </div>
            <div className="group relative bg-[var(--card-bg)]/90 backdrop-blur-md rounded-2xl p-8 border border-[var(--border-color)] overflow-hidden hover:border-[var(--accent-gold)]/60 transition-all duration-300 hover:shadow-[0_0_40px_var(--accent-gold)/10]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/5 rounded-bl-full transition-colors group-hover:bg-[var(--accent-gold)]/10" />
              <div className="relative">
                <span className="inline-flex w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] font-bold text-lg items-center justify-center mb-5">4</span>
                <h3 className="font-bold text-white mb-3 text-xl">
                  You're Family to Us
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Every client who contacts us becomes part of our extended family. We remember your preferences, we care about your experiences, and we're genuinely invested in your happiness.
                </p>
              </div>
            </div>
          </div>

          {/* Sign-off */}
          <div className="text-center">
            <div className="inline-block px-8 py-6 rounded-2xl border border-[var(--accent-gold)]/30 bg-[var(--card-bg)]/50 backdrop-blur-sm">
              <p className="text-[var(--accent-gold)] font-semibold text-lg mb-1 tracking-wide">
                With love and dedication,
              </p>
              <p className="text-white/60 text-base">Your Trusted Friends in South India</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Section - Split Layout with Icons */}
      <section className="relative bg-black py-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-gold)]/5 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--accent-gold)] mb-4">
              Why Choose South Indian Escorts?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experience genuine companionship rooted in culture and authenticity
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                icon: "🌺",
                title: "Cultural Connection",
                description: "When you're looking for genuine companionship in South India, you want someone who understands your culture, speaks your language, and makes you feel comfortable. That's what we're here for.",
                highlight: "Real connection starts with understanding",
              },
              {
                icon: "💝",
                title: "Authentic & Down-to-Earth",
                description: "Whether you're in Chennai, Bangalore, Hyderabad, or Kochi, our escorts bring warmth, authenticity, and a down-to-earth vibe to every meeting. No pretense, no drama—just real people who know how to make an evening feel special.",
                highlight: "No pretense, just genuine vibes",
              },
              {
                icon: "🎭",
                title: "Diverse Selection",
                description: "From artists and performers who bring creativity to the conversation, to professionals and students who keep things fresh and modern, we have profiles that match different preferences and occasions. Whether it's a dinner date, a social event, or simply someone to talk to, you'll find what you're looking for.",
                highlight: "Something for every occasion",
              },
              {
                icon: "🔐",
                title: "Discretion & Respect",
                description: "Discretion and respect are at the heart of everything we do. Every profile is carefully curated, and we make sure communication is clear, straightforward, and respectful. Your privacy matters, and we take that seriously.",
                highlight: "Your privacy is our priority",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/10 flex items-center justify-center shadow-xl transform hover:scale-110 transition-transform duration-300 border-2 border-[var(--accent-gold)]/30">
                      <span className="text-4xl sm:text-5xl">{item.icon}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--accent-gold)] rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[var(--card-bg)] backdrop-blur-md rounded-2xl p-8 shadow-lg border-l-4 border-[var(--accent-gold)] hover:shadow-xl transition-shadow duration-300 border border-[var(--border-color)]">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[var(--accent-gold)] mb-4 italic">
                    {item.highlight}
                  </p>
                  <p className="text-lg leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Card Grid Design */}
      <section className="relative overflow-hidden bg-black py-12">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experience the difference of genuine South Indian companionship
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "✓", title: "Verified Profiles", desc: "All profiles are carefully verified for authenticity and quality" },
              { icon: "🔒", title: "Complete Discretion", desc: "Your privacy is our top priority. Everything stays confidential" },
              { icon: "💬", title: "Direct Communication", desc: "Connect directly via Telegram for quick and easy communication" },
              { icon: "⭐", title: "Premium Selection", desc: "Curated profiles from artists, models, and professionals" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[var(--card-bg)] backdrop-blur-md rounded-xl p-6 border border-[var(--border-color)] hover:border-[var(--accent-gold)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section - Map-style Grid */}
      <section className="bg-black to-[var(--accent-cream)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className=" text-3xl sm:text-4xl font-semibold text-[var(--accent-gold)] mb-4">
              Available in Major Cities
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Find South Indian escorts in your city
            </p>
            <p className="mt-3 text-base text-white/60 max-w-2xl mx-auto">
              We provide Tamil and South Indian escort services in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore and Madurai. Outcall to your hotel or home, or incall where available.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { city: "Chennai", state: "Tamil Nadu", count: "50+ profiles", slug: "chennai-escorts" },
              { city: "Bangalore", state: "Karnataka", count: "45+ profiles", slug: "bangalore-escorts" },
              { city: "Hyderabad", state: "Telangana", count: "40+ profiles", slug: "hyderabad-escorts" },
              { city: "Kochi", state: "Kerala", count: "35+ profiles", slug: "kochi-escorts" },
              { city: "Coimbatore", state: "Tamil Nadu", count: "30+ profiles", slug: "coimbatore-escorts" },
              { city: "Madurai", state: "Tamil Nadu", count: "25+ profiles", slug: "madurai-escorts" },
            ].map((location, idx) => (
              <Link
                key={idx}
                href={`/${location.slug}`}
                className="group relative block overflow-hidden rounded-lg border-2 border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md p-6 shadow-md transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)]"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent rounded-bl-full"></div>
                <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-1">
                  {location.city}
                </h3>
                <p className="text-sm text-white/70 mb-3">{location.state}</p>
                <p className="text-xs font-medium text-[var(--accent-gold)]">{location.count}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="kolam-border h-2 w-full opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-2">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple Booking Process
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Booking with us is as easy as having a friendly conversation
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-[var(--accent-gold)]/20 via-[var(--accent-gold)]/60 to-[var(--accent-gold)]/20" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4">
              {[
                { step: "1", title: "Initial Contact", time: "5-10 min", description: "Message us on Telegram to discuss your needs. We'll ask about your preferences, occasion, and requirements." },
                { step: "2", title: "Companion Selection", time: "10-15 min", description: "We'll suggest the perfect companion based on your preferences and requirements." },
                { step: "3", title: "Confirmation", time: "5 min", description: "Once you're satisfied with the selection, we'll confirm the booking and provide all necessary details." },
                { step: "4", title: "Service Delivery", time: "As per booking", description: "Your companion will arrive at the agreed time and location, ready to make your experience special." },
              ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-2 border-[var(--accent-gold)] bg-black flex items-center justify-center mb-4 shadow-[0_0_0_3px_rgba(0,0,0,0.9)]">
                    <span className="text-lg font-bold text-[var(--accent-gold)]">{item.step}</span>
                  </div>
                  <div className="w-full bg-[var(--card-bg)]/90 backdrop-blur-md rounded-xl p-5 border border-[var(--border-color)] hover:border-[var(--accent-gold)]/50 transition-all duration-300 min-h-[140px] flex flex-col">
                    <h3 className="text-base font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--accent-gold)] font-medium mb-3">{item.time}</p>
                    <p className="text-sm text-white/75 leading-relaxed text-left flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="kolam-border h-2 w-full opacity-50 mt-12" />
      </section>

      {/* Cultural Connection Section */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[var(--accent-gold)]/6 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-2">
              Why We're Different
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              The Cultural Connection That Matters
            </h2>
            <div className="w-20 h-0.5 bg-[var(--accent-gold)]/60 mx-auto mb-4" />
            <p className="text-lg text-white/70">
              Why cultural understanding makes all the difference
            </p>
          </div>

          <div className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden shadow-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-gold)]/40 via-[var(--accent-gold)] to-[var(--accent-gold)]/40" />
            <div className="p-8 sm:p-10 lg:p-12 pl-10 sm:pl-12">
              <blockquote className="text-xl sm:text-2xl font-medium text-white/95 leading-relaxed mb-8 italic border-l-2 border-[var(--accent-gold)]/50 pl-6">
                You're not just getting a companion—you're getting someone who truly gets you.
              </blockquote>
              <div className="space-y-6 text-lg leading-relaxed text-white/75">
                <p>
                  What really sets our South Indian escort services apart isn't just beauty or professionalism—it's finding someone who understands your cultural background, speaks your language, and makes you feel completely at home.
                </p>
                <p>
                  When you're from Tamil Nadu, Kerala, Karnataka, or Andhra Pradesh, connecting with someone who shares your values, understands your traditions, and can converse in your native language is something special. It's being understood on a deeper level—culturally and emotionally too.
                </p>
                <p>
                  Our companions are cultural ambassadors. They get family values, traditional customs, and the deep-rooted respect central to South Indian culture. Whether you want to speak Tamil, Malayalam, Kannada, or Telugu, share stories about your hometown, or enjoy the company of someone who appreciates your heritage, they know how to create that perfect connection.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-wrap gap-3 justify-center">
                {["Tamil", "Malayalam", "Kannada", "Telugu"].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Use Our Services */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-2">
              Perfect For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Who Can Use Our Services?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our services are perfect for anyone seeking genuine companionship
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "👔", tag: "Professional", title: "Business Professionals", description: "Busy executives who need someone to accompany them to corporate events, business dinners, or networking functions. Make the right impression with professional companionship." },
              { icon: "✈️", tag: "Travel", title: "Business Travelers", description: "Travelers who are tired of dining alone in hotel restaurants. Enjoy pleasant company and meaningful conversation during your business trips." },
              { icon: "🎉", tag: "Social", title: "Event Attendees", description: "Anyone attending social events, parties, or celebrations who wants to make the evening more special with beautiful, intelligent company." },
              { icon: "💼", tag: "Corporate", title: "Corporate Events", description: "Companies looking for professional companions for corporate events, client meetings, or business functions. Enhance your corporate image." },
              { icon: "🎭", tag: "Culture", title: "Cultural Events", description: "Art lovers, music enthusiasts, and cultural event attendees who want someone to share their passion for arts and culture." },
              { icon: "💝", tag: "Personal", title: "Special Occasions", description: "Anyone celebrating birthdays, anniversaries, promotions, or special milestones who wants to make the occasion truly memorable." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative flex gap-5 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md p-6 transition-all duration-300 hover:border-[var(--accent-gold)]/60 hover:shadow-[0_0_30px_var(--accent-gold)/8]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--accent-gold)]/15 flex items-center justify-center text-2xl group-hover:bg-[var(--accent-gold)]/25 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <span className="inline-block text-xs font-semibold text-[var(--accent-gold)]/90 uppercase tracking-wider mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Service Categories Explained */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-gold)]/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-3">
              Service Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Understanding Our Service Categories
            </h2>
            <div className="w-16 h-0.5 bg-[var(--accent-gold)]/50 mx-auto mb-4" />
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Each category offers unique experiences tailored to your preferences
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, idx) => {
              const isLastCard = idx === CATEGORIES.length - 1;
              return (
              <Link
                key={cat.slug}
                href={getCategoryPagePath(cat.slug)}
                className={`group relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[var(--accent-gold)]/60 hover:shadow-[0_8px 32px rgba(0,0,0,0.4),0_0_0_1px_var(--accent-gold)/20] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-gold)] ${isLastCard ? "sm:col-span-2 lg:col-span-3" : ""}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-gold)]/10 rounded-bl-full transition-transform group-hover:scale-110" />
                <div className={`relative p-6 sm:p-7 ${isLastCard ? "flex flex-col lg:flex-row lg:items-center lg:gap-8" : ""}`}>
                  <div className={`flex items-start gap-4 ${isLastCard ? "lg:mb-0 lg:flex-shrink-0" : "mb-4"}`}>
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[var(--accent-gold)]/20 flex items-center justify-center text-2xl shadow-inner group-hover:bg-[var(--accent-gold)]/30 group-hover:scale-105 transition-all duration-300">
                      {cat.icon}
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <p className={`text-[15px] text-white/80 leading-relaxed ${isLastCard ? "lg:flex-1 lg:mb-0" : "mb-5"}`}>
                    {cat.description}
                  </p>
                  <div className={`flex items-start gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 group-hover:border-[var(--accent-gold)]/30 transition-colors ${isLastCard ? "lg:flex-shrink-0" : ""}`}>
                    <span className="flex-shrink-0 text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">Best for</span>
                    <span className="text-sm text-white/90 leading-snug">{cat.bestFor}</span>
                  </div>
                </div>
              </Link>
            );})}
          </div>
        </div>
      </section>

      {/* FAQ Section - Combined */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-2">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent-gold)] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-0.5 bg-[var(--accent-gold)]/50 mx-auto mb-4" />
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Everything you need to know. No question is too small or too silly. We&apos;re here to help!
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md p-5 transition-all duration-300 hover:border-[var(--accent-gold)]/50 hover:shadow-[0_0_24px_var(--accent-gold)/5]"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-[var(--accent-gold)]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-4 pl-1">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] font-bold text-sm flex items-center justify-center">
                    Q
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support CTA */}
      <section className="relative bg-black py-12 overflow-hidden">
        <div className="kolam-border h-2 w-full opacity-50" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--accent-gold)]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md overflow-hidden text-center shadow-xl">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-3">
                Get in touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Book Your Service?
              </h2>
              <div className="w-20 h-0.5 bg-[var(--accent-gold)]/50 mx-auto mb-5" />
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
                We&apos;re here to help you find the perfect companion. Whether you have questions or are ready to book, our team is available 24/7.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://t.me/LillyBabe_chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 hover:shadow-[0_0_30px_var(--accent-gold)/40] transition-all duration-300"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  Available 24/7
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  Complete Discretion
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                  Professional Service
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="kolam-border h-2 w-full opacity-50 mt-12" />
      </section>
    </main>
  );
}
