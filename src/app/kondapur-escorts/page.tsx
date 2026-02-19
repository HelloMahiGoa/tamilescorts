import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site";
import { getCategoryPagePath, type CategorySlug } from "@/lib/categories";

const base = getBaseUrl();
const url = `${base}/kondapur-escorts`;

const metaTitle = "Kondapur Escorts | Hyderabad Escorts in Kondapur - Outcall to Hotels & Your Place";
const metaDescription =
  "Kondapur escorts and escort service in Hyderabad. Outcall to your hotel or place in Kondapur. Discreet, verified. Tamil, Mallu, Telugu & Kannada. Pay when you meet. No advance for regular & housewife.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "Kondapur escorts",
    "escorts in Kondapur",
    "Kondapur escort service",
    "Hyderabad escorts Kondapur",
    "outcall Kondapur",
    "hotel escort Kondapur",
    "Tamil escorts Kondapur",
    "escort service Hyderabad Kondapur",
    "Kondapur Main Road escorts",
    "Hitech City escorts",
    "escorts near IT companies",
    "Kondapur hotel escorts",
    "discreet escorts Kondapur",
    "verified escorts Kondapur",
    "Mallu escorts Kondapur",
    "Telugu escorts Kondapur",
    "Kannada escorts Kondapur",
    "housewife escorts Kondapur",
    "college girls escorts Kondapur",
    "model escorts Kondapur",
    "regular escorts Kondapur",
    "escort booking Kondapur",
    "escort service Kondapur Hyderabad",
    "outcall escort service Kondapur",
    "24/7 escorts Kondapur",
    "same day escorts Kondapur",
    "business traveler escorts Kondapur",
    "corporate escort Kondapur",
    "dinner escort Kondapur",
    "event escort Kondapur",
  ],
  authors: [{ name: "Tamil Escorts" }],
  creator: "Tamil Escorts",
  publisher: "Tamil Escorts",
  formatDetection: {
    email: false,
    address: false,
  },
  metadataBase: new URL(base),
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
        alt: "Kondapur escorts – premium outcall escort service in Hyderabad",
        type: "image/avif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [`${base}/images/2.avif`],
    creator: "@tamilescorts",
  },
  alternates: {
    canonical: url,
    languages: {
      "en-IN": url,
      "en": url,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Escort Service",
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Kondapur, Hyderabad",
    "geo.position": "17.4800;78.3600",
    "ICBM": "17.4800, 78.3600",
  },
};

const OTHER_AREAS = [
  { name: "Banjara Hills", slug: "banjara-hills-escorts", desc: "Upscale residential" },
  { name: "Jubilee Hills", slug: "jubilee-hills-escorts", desc: "Premium area" },
  { name: "Gachibowli", slug: "gachibowli-escorts", desc: "IT hub" },
  { name: "Madhapur", slug: "madhapur-escorts", desc: "IT & tech" },
  { name: "Hitech City", slug: "hitech-city-escorts", desc: "Tech corridor" },
  { name: "Secunderabad", slug: "secunderabad-escorts", desc: "Commercial hub" },
];

const HOW_IT_WORKS = [
  { step: 1, title: "Contact Us", body: "Message with your location in Kondapur (hotel or area), when you need someone, and what you have in mind. We'll ask the basics - hotel proof if you're at a hotel, type (regular, housewife, model, etc.)." },
  { step: 2, title: "We Suggest Who's Free", body: "We'll tell you who can reach you on time in Kondapur. If you're at a hotel we need proof and room details; you give her name at reception when she arrives." },
  { step: 3, title: "She Comes to You", body: "Outcall only. She'll come to your hotel or your place in Kondapur. Payment when she's there - cash or UPI. No advance for regular, housewife and college-girl profiles." },
];

const WHY_CHOOSE = [
  { title: "No Advance for Regular", body: "For regular, housewife and college-girl profiles we don't ask for advance. Hotel proof + room details + name at reception. Pay when she reaches you." },
  { title: "Complete Discretion", body: "We don't share your number. Your booking stays between you and us. Kondapur is an IT area - we're used to discreet hotel and residential outcall for tech professionals." },
  { title: "IT Area & Easy", body: "Kondapur is one of Hyderabad's prime IT areas for hotel bookings. We send someone who can reach you on time. No fuss." },
  { title: "Pay When You Meet", body: "Cash or UPI when she's in your room. For models and above we take a small advance; rest on arrival." },
];

const CATEGORIES: { slug: CategorySlug; label: string; line: string }[] = [
  { slug: "regular", label: "Regular Escorts", line: "Most popular. No advance; pay when she arrives." },
  { slug: "housewife", label: "Housewife Escorts", line: "Mature, discreet. Same payment rules." },
  { slug: "college-girls", label: "College Girls", line: "Young, fun company. Outcall to your hotel or place." },
  { slug: "models", label: "Model Escorts", line: "Presentable for dinners and events. Small advance." },
];

const LANGUAGES = [
  { name: "Tamil", desc: "Most bookings in Kondapur are Tamil. Perfect for locals and Tamil-speaking clients." },
  { name: "Malayalam", desc: "Mallu escorts available in Kondapur. Great for Kerala clients and Malayalam speakers." },
  { name: "Telugu", desc: "Telugu-speaking companions in Kondapur. Popular for business travelers from Andhra/Telangana." },
  { name: "Kannada", desc: "Kannada escorts in Kondapur. Same booking process and discretion." },
];

const POPULAR_HOTELS = [
  { name: "ITC Kohenur", area: "Hitech City", note: "Luxury hotel, popular for IT professionals" },
  { name: "Novotel Hyderabad", area: "Hitech City", note: "Tech area hotel, discreet outcall" },
  { name: "Taj Krishna", area: "Banjara Hills", note: "Premium location, easy access" },
  { name: "Radisson Blu", area: "Gachibowli", note: "IT district, many bookings" },
  { name: "Lemon Tree", area: "Kondapur", note: "IT area, convenient for outcall" },
  { name: "Hyatt Place", area: "Madhapur", note: "Popular with tech professionals" },
];

const DURATION_OPTIONS = [
  { title: "Short Time (2-3 hours)", desc: "Most popular in Kondapur. Perfect for business travelers staying at hotels. She comes to you for a few hours - dinner, conversation, or relaxed evening. Pay when she arrives; no advance for regular and housewife profiles.", popular: true },
  { title: "Dinner or Evening", desc: "Fixed slot for a dinner, event, or party in Kondapur. Tell us the start time and when it ends. Same payment rules. We match someone who fits the occasion.", popular: false },
  { title: "Full Night", desc: "Dinner plus the night - typically 8-10 hours. Advance notice helps so we can confirm who's free in Kondapur. Payment when she's there; for models and above we take a small advance.", popular: false },
  { title: "Outstation Travel", desc: "Trips from Kondapur to Goa, Bangalore, or elsewhere. We need a few days' notice. Not every companion does outstation. Same discretion and payment.", popular: false },
];

const WHO_BOOKS_KONDAPUR = [
  { title: "IT Professionals", body: "Staying at hotels in Kondapur for work. Tech professionals who don't want to eat alone or sit in a room. Need discreet company that's hassle-free. Most bookings are from IT professionals and business travelers." },
  { title: "Locals", body: "Living in or near Kondapur and want company for an evening - dinner, event, or just a few hours. Same process: tell us your area, when, and type; we fix someone who shows up." },
  { title: "Tech Events & Corporate", body: "Need a plus-one for a client dinner, tech event, or corporate gathering in Kondapur. We send someone presentable who knows how to keep the evening smooth. Popular for IT area business gatherings." },
];

const TIPS_FOR_EXPERIENCE = [
  { tip: "Be Clear About Location", detail: "Tell us your exact location in Kondapur - hotel name and area, or your residential area. Clear gate or lobby instructions help avoid delays." },
  { tip: "Hotel Proof Ready", detail: "If you're at a hotel, have your room key or bill ready. We'll ask for proof before she starts. Give her name at reception when she arrives." },
  { tip: "Payment Ready", detail: "Have cash or UPI ready when she arrives. No advance for regular and housewife profiles. For models and above, payment terms discussed when you book." },
  { tip: "Timing Matters", detail: "Same-day bookings work, but advance notice (a few hours or a day) helps us confirm the right companion. Peak times (evenings, weekends) can be busier." },
];

const AGE_GROUPS = [
  { range: "20-25", desc: "Young, energetic companions. Popular for events, parties, and casual evenings. Most college-girl profiles fall in this range." },
  { range: "25-30", desc: "Balanced mix of youth and maturity. Great for dinners, corporate events, and relaxed company. Regular and housewife profiles often in this range." },
  { range: "30-35", desc: "Mature, sophisticated companions. Perfect for business dinners, events, and discreet company. Housewife and model profiles." },
  { range: "35+", desc: "Experienced, refined companions. Ideal for corporate events, mature clients, and sophisticated occasions." },
];

const SERVICES_OCCASIONS = [
  { title: "Dinner Dates", desc: "Company for dinner at restaurants in Kondapur. Presentable, conversation-ready. Perfect for business dinners or casual evenings.", popular: true },
  { title: "Corporate Events", desc: "Plus-one for client meetings, corporate dinners, or business events. Professional, well-dressed, knows how to keep the evening smooth.", popular: true },
  { title: "Parties & Social Events", desc: "Companion for parties, celebrations, or social gatherings in Kondapur. Fun, engaging, fits the occasion.", popular: false },
  { title: "Travel Companion", desc: "Company for outstation trips from Kondapur - Goa, Bangalore, or elsewhere. Advance notice required.", popular: false },
  { title: "Relaxed Evening", desc: "Simple company for a few hours at your hotel or place. Conversation, relaxation, no pressure. Most popular booking type.", popular: true },
  { title: "Full Night", desc: "Dinner plus overnight stay. Typically 8-10 hours. Advance booking recommended to confirm availability.", popular: false },
];

const PRICING_FACTORS = [
  { factor: "Category", desc: "Regular and housewife profiles are typically more affordable. Models, artists, celebrity and actress escorts command higher rates." },
  { factor: "Duration", desc: "Short time (2-3 hours) is most economical. Full night and outstation trips are priced higher due to extended time." },
  { factor: "Occasion", desc: "Corporate events and parties may have different rates than casual evenings. Special occasions discussed when you book." },
  { factor: "Advance Notice", desc: "Same-day bookings are standard rates. Last-minute requests (within 2-3 hours) may have limited availability." },
];

const CONTACT_METHODS = [
  { method: "Telegram", desc: "Fastest way to reach us. We usually reply within 1-2 hours. Best for quick questions and same-day bookings.", available: "24/7", response: "1-2 hours" },
];

const WHY_KONDAPUR = [
  { title: "IT Area Hub", desc: "Kondapur is a major IT area in Hyderabad, making it ideal for tech professionals and business travelers. Close to Hitech City, Gachibowli, and Madhapur - we're experienced with IT area bookings." },
  { title: "Tech Hotels", desc: "High concentration of tech-focused hotels in Kondapur means we're experienced with IT professional bookings. We know the area, the hotels, and how to coordinate discreet outcall for tech travelers." },
  { title: "Growing Tech Hub", desc: "Many IT professionals and business travelers stay in Kondapur. We're used to corporate clients, tech events, and professional occasions. Discretion is our default." },
  { title: "Easy Access", desc: "Well-connected by road, close to Hyderabad's IT landmarks and tech parks. Escorts can reach you quickly, whether you're at a hotel or residential area in the IT corridor." },
];

const TRANSPORTATION_INFO = [
  { title: "Travel Time", desc: "Escorts typically reach Kondapur within 30-60 minutes from other parts of Hyderabad. We factor in travel time when suggesting who can reach you on time." },
  { title: "Coordination", desc: "We coordinate with escorts on your behalf. You don't need to arrange transportation - she'll come to your location directly. We'll update you on her arrival time." },
  { title: "Traffic Considerations", desc: "Hyderabad traffic can vary. We account for peak hours (evening rush) when scheduling. Advance bookings give us more flexibility to avoid delays." },
];

const REPEAT_CLIENT_BENEFITS = [
  { benefit: "Priority Booking", desc: "Repeat clients get priority when slots are limited. We know your preferences and can match you faster." },
  { benefit: "Faster Response", desc: "We recognize returning clients and respond faster. Less back-and-forth, quicker confirmations." },
  { benefit: "Preference Memory", desc: "We remember your preferred category, language, and type. Makes booking smoother each time." },
  { benefit: "Flexible Terms", desc: "Established clients may get more flexible payment terms or advance notice requirements, depending on history." },
];

const COMMON_CONCERNS = [
  { concern: "Is this legitimate?", answer: "Yes. We're a professional escort service operating in Hyderabad. All escorts are verified, real people. We maintain discretion and professionalism." },
  { concern: "Will my information be safe?", answer: "Absolutely. We don't share your number with escorts. All coordination goes through us. We don't store personal details beyond what's needed for booking." },
  { concern: "What if I'm not satisfied?", answer: "We aim to match you with the right companion. If there's an issue, communicate with us immediately. We work to resolve concerns and ensure your experience meets expectations." },
  { concern: "Is it safe to book?", answer: "Yes. Outcall to your location means you control the environment. All escorts are verified. We maintain safety standards and discretion for both clients and escorts." },
];

const AREA_HIGHLIGHTS = [
  { name: "Kondapur Main Road", type: "Main thoroughfare", note: "IT area main road with hotels and tech companies" },
  { name: "Hitech City", type: "Tech hub", note: "Major IT corridor, close proximity" },
  { name: "Gachibowli", type: "IT district", note: "Tech parks and IT companies nearby" },
  { name: "DLF Cyber City", type: "Business park", note: "Major tech park, many corporate bookings" },
  { name: "Inorbit Mall", type: "Shopping & dining", note: "Popular destination, close to Kondapur" },
  { name: "Rajiv Gandhi International Airport", type: "Transport hub", note: "30 minutes away, convenient access" },
];

const AREA_COMPARISON = [
  { area: "Kondapur", advantage: "IT area advantage", note: "Prime IT location, close to Hitech City and tech parks, highest tech hotel density" },
  { area: "Banjara Hills", advantage: "Upscale residential", note: "Premium area, good hotels but less IT-focused than Kondapur" },
  { area: "Gachibowli", advantage: "IT hub", note: "Major tech district, but Kondapur offers better hotel access" },
  { area: "Madhapur", advantage: "Tech corridor", note: "IT area, but Kondapur has more hotel options" },
  { area: "Hitech City", advantage: "Tech epicenter", note: "Core IT area, but Kondapur provides better residential outcall options" },
  { area: "Jubilee Hills", advantage: "Premium residential", note: "Upscale area with good hotels, but less IT-focused than Kondapur" },
  { area: "Secunderabad", advantage: "Commercial hub", note: "Business district, convenient but less tech hotel density than Kondapur" },
];

const SEASONAL_AVAILABILITY = [
  { period: "Peak Business Season", months: "October - March", desc: "Most business travelers visit Hyderabad during these months. Weekday evenings are busiest. Advance booking recommended for preferred times.", busy: true },
  { period: "Festival Season", months: "September - December", desc: "Pongal, Diwali, and other festivals bring more visitors. Weekend bookings increase. Book ahead for festival dates.", busy: true },
  { period: "Monsoon Season", months: "June - September", desc: "Heavy rains can affect travel. Escorts still available, but may take longer to reach. Flexible timing helps.", busy: false },
  { period: "Summer", months: "April - May", desc: "Hot weather, fewer business travelers. More availability, easier to book same-day. Good time for advance bookings.", busy: false },
];

const GROUP_BOOKING_INFO = [
  { title: "Multiple Escorts", desc: "Need multiple escorts for a corporate event, party, or group gathering in Kondapur? We can arrange 2-4 escorts depending on availability. Advance notice required - at least 2-3 days." },
  { title: "Event Coordination", desc: "For large events, we coordinate multiple escorts, ensure they arrive together, and match them to your event's needs. Professional, presentable, and know how to work as a group." },
  { title: "Pricing", desc: "Group bookings are priced per escort. Rates depend on category, duration, and occasion. We'll provide a quote based on your specific requirements." },
  { title: "Requirements", desc: "For group bookings, we need clear details: number of escorts, event type, duration, dress code (if any), and timing. More notice = better availability and coordination." },
];

const FAQ_ITEMS = [
  { q: "Do you cover Kondapur?", a: "Yes. Kondapur is one of our main areas in Hyderabad. We do outcall to hotels and residences in Kondapur. Tell us your location (hotel name or area) and when you need someone; we'll suggest who can reach you on time." },
  { q: "Do I need to pay advance in Kondapur?", a: "For regular, housewife and college-girl profiles - no advance. We need hotel proof and room details if you're at a hotel, and you give her name at reception. For models, artists, celebrity and actress we take a small advance; the rest when she arrives." },
  { q: "What's the best way to book an escort in Kondapur?", a: "Message us on Telegram. Tell us you're in Kondapur, when you need someone, and what you're looking for (regular, housewife, model, Tamil, Mallu, etc.). We'll suggest who's free. Same-day and advance bookings both work." },
  { q: "Outcall or incall in Kondapur?", a: "We do outcall only - she comes to your hotel or your place in Kondapur. Have the address and any gate or lobby instructions ready." },
  { q: "Why is Kondapur popular for escort bookings?", a: "Kondapur is a prime IT area in Hyderabad with many tech hotels and IT professionals. It's easy for us to send someone there, and clients often stay in the area. Same process as the rest of Hyderabad: discreet, pay when you meet." },
];

// Build JSON-LD after all constants are defined
function buildKondapurJsonLd() {
  const localBusinessId = `${url}#localbusiness`;
  const faqId = `${url}#faq`;
  const serviceId = `${url}#service`;
  const organizationId = `${base}#organization`;
  
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base },
        { "@type": "ListItem", position: 2, name: "Hyderabad Escorts", item: `${base}/hyderabad-escorts` },
        { "@type": "ListItem", position: 3, name: "Kondapur Escorts", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: metaTitle,
      description: metaDescription,
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${base}#website`,
        name: "Tamil Escorts",
        url: base,
      },
      about: { "@id": localBusinessId },
      mainEntity: [{ "@id": localBusinessId }, { "@id": faqId }, { "@id": serviceId }],
      breadcrumb: {
        "@id": `${url}#breadcrumb`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": organizationId,
      name: "Tamil Escorts",
      url: base,
      logo: {
        "@type": "ImageObject",
        url: `${base}/images/2.avif`,
      },
      sameAs: [
        "https://www.facebook.com/tamilescorts",
        "https://twitter.com/tamilescorts",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: "Kondapur Escorts",
      description: "Premium escort service in Kondapur, Hyderabad. Outcall to hotels and residences. Discreet, verified companions. Tamil, Mallu, Telugu & Kannada escorts available.",
      url,
      image: [
        `${base}/images/2.avif`,
      ],
      priceRange: "₹₹ - ₹₹₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kondapur",
        addressRegion: "Hyderabad",
        addressRegionCode: "TG",
        addressCountry: "IN",
        addressCountryCode: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 17.4800,
        longitude: 78.3600,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Hyderabad",
          containedInPlace: {
            "@type": "State",
            name: "Telangana",
          },
        },
        {
          "@type": "Place",
          name: "Kondapur",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Escort Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Regular Escorts",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Regular Escort Service",
                  description: "Regular escort service in Kondapur. No advance required.",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Housewife Escorts",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Housewife Escort Service",
                  description: "Housewife escort service in Kondapur. Mature, discreet companions.",
                },
              },
            ],
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
        worstRating: "1",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      paymentAccepted: "Cash, UPI",
      currenciesAccepted: "INR",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: "Escort Service in Kondapur",
      description: "Premium outcall escort service in Kondapur, Hyderabad. Available 24/7. Discreet, verified companions.",
      provider: {
        "@id": organizationId,
      },
      areaServed: {
        "@type": "Place",
        name: "Kondapur, Hyderabad",
      },
      serviceType: "Escort Service",
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        priceRange: "₹₹ - ₹₹₹₹₹",
        availability: "https://schema.org/InStock",
        url: url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": faqId,
      mainEntity: FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Popular Hotels in Kondapur",
      description: "Popular hotels and locations where we provide escort services in Kondapur",
      itemListElement: POPULAR_HOTELS.map((hotel, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: hotel.name,
        description: `${hotel.name} - ${hotel.area}. ${hotel.note}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Languages Available in Kondapur",
      description: "Languages spoken by escorts available in Kondapur",
      itemListElement: LANGUAGES.map((lang, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: lang.name,
        description: lang.desc,
      })),
    },
  ];
}

export default function KondapurEscortsPage() {
  const jsonLd = buildKondapurJsonLd();
  return (
    <main id="main-content" className="min-h-screen bg-black" itemScope itemType="https://schema.org/WebPage" lang="en-IN">
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}

      {/* Responsive Hero Section - Full Background Image */}
      <header className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden" role="banner" itemScope itemType="https://schema.org/WPHeader">
        {/* Background Image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/2.avif"
            alt="Kondapur escorts – premium outcall escort service in Hyderabad. Discreet, verified companions available for hotel and residential bookings in central Hyderabad."
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            itemProp="image"
            loading="eager"
            fetchPriority="high"
          />
          {/* Multi-layer gradient overlay - Responsive */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95 md:from-black/50 md:via-black/75 md:to-black/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(212,175,55,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.6)_0%,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        {/* Content Overlay - Responsive Padding */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 pb-12 sm:pb-16 md:pb-20 pt-20 sm:pt-24 md:pt-32">
          <div className="mx-auto max-w-7xl">
            {/* Breadcrumb - Responsive */}
            <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
              <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/50" role="list">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors" itemProp="item" rel="home" aria-label="Go to homepage">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/hyderabad-escorts" className="hover:text-[var(--accent-gold)] transition-colors" itemProp="item" rel="up" aria-label="View Hyderabad escorts page">
                    <span itemProp="name">Hyderabad</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <li aria-hidden="true" className="text-white/30">/</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-white/70" itemProp="name">Kondapur</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            {/* Main Content */}
            <div>
              {/* Badge - Responsive */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-[var(--accent-gold)]/20 backdrop-blur-md border border-[var(--accent-gold)]/40 rounded-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--accent-gold)]" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[var(--accent-gold)] uppercase">
                  Hyderabad · IT Area
                </span>
              </div>

              {/* Main Heading - Fully Responsive */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white leading-[0.9] mb-4 sm:mb-6 md:mb-8 tracking-tight">
                <span className="block">Kondapur</span>
                <span className="block text-[var(--accent-gold)] mt-1 sm:mt-2">ESCORTS</span>
              </h1>

              {/* Subheading - Responsive */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl lg:max-w-3xl font-light" itemProp="description">
                Premium escort service in Hyderabad's IT area. Outcall to your hotel or your place - discreet, verified, pay when you meet.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)]/80 to-transparent" />
      </header>

      {/* Intro Section - Magazine Style */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Service">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Large Number/Quote */}
            <div className="lg:col-span-3 hidden lg:block" aria-hidden="true">
              <div className="sticky top-24">
                <div className="text-[120px] sm:text-[150px] font-black text-[var(--accent-gold)]/10 leading-none">
                  01
                </div>
                <div className="mt-4 h-1 w-16 bg-[var(--accent-gold)]" />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight" itemProp="name">
                Hyderabad IT Area&apos;s Premier Escort Service
              </h2>
              <div className="prose prose-invert max-w-none space-y-4 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed" itemProp="description">
                <p>
                  <strong className="text-white">Kondapur</strong> is one of Hyderabad&apos;s prime IT areas for hotel and outcall bookings. If you&apos;re staying at a hotel here or you live in the area and want company for a dinner or an evening, we&apos;ve got you.
                </p>
                <p>
                  We don&apos;t ask for advance for regular, housewife and college-girl profiles - we need hotel proof and room details if you&apos;re at a hotel, and you give her name at reception when she arrives. Payment when she&apos;s there: cash or UPI.
                </p>
                <p>
                  Outcall only - she comes to you. We don&apos;t share your number; discretion is default. Tell us your location in Kondapur, when you need someone, and what type you want (Tamil, Mallu, regular, model, etc.). We&apos;ll suggest who&apos;s free and can reach you on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline Style */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" itemScope itemType="https://schema.org/HowTo">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" itemProp="name">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto" itemProp="description">
              Three simple steps. No complications.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line - Responsive positioning */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-gold)]/60 via-[var(--accent-gold)]/40 to-transparent" />

            <div className="space-y-12 sm:space-y-16" itemProp="step">
              {HOW_IT_WORKS.map((item, idx) => (
                <div key={item.step} className="relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  {/* Step Number - Responsive */}
                  <div className={`md:${idx % 2 === 0 ? 'order-1' : 'order-2'} flex items-center gap-4 sm:gap-6`}>
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black border-2 border-[var(--accent-gold)] flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-[var(--accent-gold)]">{item.step}</span>
                    </div>
                    <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-[var(--accent-gold)]/40 to-transparent" />
                  </div>

                  {/* Content - Responsive */}
                  <div className={`md:${idx % 2 === 0 ? 'order-2' : 'order-1'} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:border-[var(--accent-gold)]/30 transition-all`} itemScope itemType="https://schema.org/HowToStep">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4" itemProp="name">{item.title}</h3>
                    <p className="text-sm sm:text-base text-white/75 leading-relaxed" itemProp="text">{item.body}</p>
                    <meta itemProp="position" content={item.step.toString()} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Creative Grid */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="why-choose-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4" aria-label="Section label">
              Why Us
            </span>
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Trusted Service in Kondapur
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {WHY_CHOOSE.map((item, idx) => (
              <div
                key={item.title}
                className={`relative p-6 sm:p-8 border-l-4 ${
                  idx % 2 === 0 ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/5' : 'border-white/20 bg-white/5'
                } hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-all`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 border border-[var(--accent-gold)]/10 rounded-full blur-2xl" />
                <h3 className="text-lg sm:text-xl font-bold text-[var(--accent-gold)] mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed relative z-10">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kondapur Specifically - Diagonal Split Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="why-Kondapur-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-4 mb-4" aria-hidden="true">
              <div className="h-1 w-16 bg-[var(--accent-gold)]" />
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Why Kondapur</span>
            </div>
            <h2 id="why-Kondapur-heading" className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight" itemProp="name">
              Why Choose<br />Kondapur?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8" itemProp="itemListElement" role="list">
            {WHY_KONDAPUR.map((item, idx) => (
              <article
                key={item.title}
                className={`relative overflow-hidden ${
                  idx % 2 === 0 ? 'lg:translate-y-0' : 'lg:translate-y-8'
                }`}
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative p-8 sm:p-10 bg-black/40 backdrop-blur-sm border-l-4 border-[var(--accent-gold)] hover:bg-black/60 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-xl font-bold text-[var(--accent-gold)]" aria-hidden="true">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" itemProp="name">{item.title}</h3>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed" itemProp="description">{item.desc}</p>
                      <meta itemProp="position" content={(idx + 1).toString()} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Asymmetric Layout */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="categories-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="lg:col-span-4">
              <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4" aria-label="Section label">
                Categories
              </span>
              <h2 id="categories-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" itemProp="name">
                Browse by Category
              </h2>
              <p className="text-base sm:text-lg text-white/70" itemProp="description">
                Regular, housewife, college girls, models and more. All available for outcall in Kondapur.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4" itemProp="itemListElement" role="list">
                {CATEGORIES.map((cat, idx) => (
                  <article
                    key={cat.slug}
                    itemScope
                    itemType="https://schema.org/ListItem"
                    itemProp="itemListElement"
                    role="listitem"
                  >
                    <Link
                      href={getCategoryPagePath(cat.slug)}
                      className="group relative p-5 sm:p-6 bg-black/40 border border-white/10 hover:border-[var(--accent-gold)]/50 hover:bg-black/60 transition-all block"
                      rel="follow"
                      aria-label={`Browse ${cat.label} in Kondapur`}
                      itemProp="item"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent-gold)]/0 group-hover:bg-[var(--accent-gold)] transition-all" />
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[var(--accent-gold)] transition-colors" itemProp="name">
                        {cat.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/60" itemProp="description">{cat.line}</p>
                      <meta itemProp="position" content={(idx + 1).toString()} />
                    </Link>
                  </article>
                ))}
              </div>
              <div className="mt-5 sm:mt-6">
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 text-[var(--accent-gold)] hover:gap-3 transition-all text-sm sm:text-base"
                  rel="follow"
                  aria-label="View all escort categories"
                >
                  View all categories
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Available */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-labelledby="languages-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4" aria-label="Section label">
              Languages
            </span>
            <h2 id="languages-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" itemProp="name">
              Languages Available in Kondapur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto" itemProp="description">
              Tamil, Mallu, Telugu, and Kannada escorts available for outcall in Kondapur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8" itemProp="itemListElement" role="list">
            {LANGUAGES.map((lang, idx) => (
              <article
                key={lang.name}
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
                role="listitem"
                className="p-6 bg-black/40 border border-white/10 hover:border-[var(--accent-gold)]/40 hover:bg-black/60 transition-all"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2" itemProp="name">{lang.name}</h3>
                <p className="text-sm text-white/75 leading-relaxed" itemProp="description">{lang.desc}</p>
                <meta itemProp="position" content={(idx + 1).toString()} />
              </article>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {["Tamil", "Malayalam", "Telugu", "Kannada", "English"].map((lang) => (
              <span
                key={lang}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups Available - Circular Badge Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="age-groups-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/5 via-transparent to-[var(--accent-gold)]/5" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
              <div className="h-px w-12 bg-[var(--accent-gold)]/50" />
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Age Groups</span>
              <div className="h-px w-12 bg-[var(--accent-gold)]/50" />
            </div>
            <h2 id="age-groups-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" itemProp="name">
              Age Groups Available
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto" itemProp="description">
              Different age ranges for different preferences and occasions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" itemProp="itemListElement" role="list">
            {AGE_GROUPS.map((group, idx) => (
              <article
                key={group.range}
                className="relative group"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative p-8 sm:p-10 bg-black/60 backdrop-blur-md border-2 border-white/10 rounded-full aspect-square flex flex-col items-center justify-center text-center hover:border-[var(--accent-gold)]/50 hover:scale-105 transition-all">
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[var(--accent-gold)]/30 group-hover:bg-[var(--accent-gold)] transition-colors" aria-hidden="true" />
                  <div className="text-4xl sm:text-5xl font-black text-[var(--accent-gold)] mb-3" itemProp="name">{group.range}</div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed" itemProp="description">{group.desc}</p>
                  <meta itemProp="position" content={(idx + 1).toString()} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Hotels & Locations */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-labelledby="hotels-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4" aria-label="Section label">
              Locations
            </span>
            <h2 id="hotels-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" itemProp="name">
              Popular Hotels & Locations in Kondapur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto" itemProp="description">
              We cover major hotels and residential areas in Kondapur. Central location makes it easy for outcall.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" itemProp="itemListElement" role="list">
            {POPULAR_HOTELS.map((hotel, idx) => (
              <article
                key={hotel.name}
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
                role="listitem"
                className="p-5 sm:p-6 bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/40 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-1" itemProp="name">{hotel.name}</h3>
                <p className="text-sm text-[var(--accent-gold)] mb-2" itemProp="address">{hotel.area}</p>
                <p className="text-xs text-white/60" itemProp="description">{hotel.note}</p>
                <meta itemProp="position" content={(idx + 1).toString()} />
              </article>
            ))}
          </div>

          <div className="mt-8 p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-white/80 text-center">
              <strong className="text-white">Kondapur Main Road</strong>, <strong className="text-white">Hitech City</strong>, and surrounding IT areas are all covered. Tell us your hotel name or residential area when you book.
            </p>
          </div>
        </div>
      </section>

      {/* Area Highlights - Location Pin Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02] overflow-hidden" aria-labelledby="highlights-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(212,175,55,0.05),transparent_50%)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-block mb-4" aria-hidden="true">
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">📍 Landmarks</span>
            </div>
            <h2 id="highlights-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight" itemProp="name">
              Area Highlights
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto" itemProp="description">
              Key locations and landmarks in and around Kondapur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {AREA_HIGHLIGHTS.map((highlight, idx) => (
              <div
                key={highlight.name}
                className="relative group"
              >
                <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-[var(--accent-gold)]/30 group-hover:bg-[var(--accent-gold)] transition-colors" />
                <div className="pl-6 pr-5 py-6 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[var(--accent-gold)]/40 hover:bg-black/60 transition-all">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2 animate-pulse" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{highlight.name}</h3>
                      <p className="text-xs text-[var(--accent-gold)] uppercase tracking-wider mb-2">{highlight.type}</p>
                      <p className="text-xs text-white/60 leading-relaxed">{highlight.note}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration Options */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Duration
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Duration Options in Kondapur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Flexible durations. All outcall to your hotel or your place in Kondapur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {DURATION_OPTIONS.map((option, idx) => (
              <div
                key={option.title}
                className={`relative p-6 sm:p-8 border-l-4 ${
                  option.popular ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)]/5' : 'border-white/20 bg-white/5'
                } hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 transition-all`}
              >
                {option.popular && (
                  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-bold bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] rounded">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Occasions - Hexagonal Card Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-[var(--accent-gold)]" />
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Services</span>
              <div className="w-8 h-0.5 bg-[var(--accent-gold)]" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Services &<br />Occasions
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Different occasions call for different types of company.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES_OCCASIONS.map((service, idx) => (
              <div
                key={service.title}
                className={`relative group ${
                  service.popular ? 'lg:col-span-1' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  service.popular 
                    ? 'from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/5' 
                    : 'from-white/5 to-transparent'
                } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 ${
                  service.popular 
                    ? 'border-[var(--accent-gold)]/50' 
                    : 'border-white/10 group-hover:border-[var(--accent-gold)]/30'
                } rounded-2xl hover:scale-[1.02] transition-all`}>
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent-gold)] rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-black">★</span>
                    </div>
                  )}
                  <div className="mb-3">
                    <div className="w-10 h-1 bg-[var(--accent-gold)]/50 mb-3" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Bookings - Event Party Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🎉</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Group Events</span>
              <span className="text-2xl">🎉</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Group Bookings
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Need multiple escorts for an event or gathering? We can arrange that.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-gold)]/50 via-[var(--accent-gold)]/30 to-transparent hidden lg:block" />
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {GROUP_BOOKING_INFO.map((item, idx) => (
                <div
                  key={item.title}
                  className={`relative ${idx % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:translate-y-8'}`}
                >
                  <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-[var(--accent-gold)] border-4 border-black hidden lg:block -translate-x-2" />
                  <div className="p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/50 rounded-xl hover:scale-[1.02] transition-all">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center text-lg font-bold text-[var(--accent-gold)]">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed pl-14">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-8 sm:p-10 bg-gradient-to-r from-[var(--accent-gold)]/10 via-[var(--accent-gold)]/5 to-transparent border-l-4 border-[var(--accent-gold)] rounded-xl">
            <p className="text-white/90 text-center leading-relaxed">
              <strong className="text-white">Group bookings require advance notice</strong> - at least 2-3 days, preferably more. This gives us time to coordinate multiple escorts, ensure availability, and match them to your event&apos;s needs.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods & Details */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Payment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Payment Methods & Details
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Simple payment process. No advance required for regular, housewife, and college-girl profiles.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">Payment Methods</h3>
              <p className="text-white/75 mb-4">
                We accept cash or UPI payments. Payment is made when the escort arrives at your location in Kondapur.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Cash", "UPI"].map((method) => (
                  <span
                    key={method}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--accent-gold)]/15 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">Payment Timing</h3>
              <p className="text-white/75 mb-4">
                For regular, housewife and college-girl profiles - no advance required. Payment when she arrives at your hotel or your place in Kondapur. Have payment ready - cash or UPI - to make the transaction smooth.
              </p>
              <p className="text-white/75">
                For models, artists, celebrity and actress escorts, we may require a small advance (10% or 20%); the rest when she arrives. Payment terms discussed when you book.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">Hotel Bookings</h3>
              <p className="text-white/75">
                If you&apos;re at a hotel in Kondapur, we need proof you&apos;re staying there (room key photo or bill) and your room number. You give her name at reception when she arrives so she can come up. Payment is made when she arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview - Table/Comparison Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-2xl">💰</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Pricing</span>
              <span className="text-2xl">💰</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Pricing Overview
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              What affects the rates in Kondapur.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
            {PRICING_FACTORS.map((item, idx) => (
              <div
                key={item.factor}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--accent-gold)]/10 flex items-center justify-center text-xl font-bold text-[var(--accent-gold)]">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.factor}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative p-8 sm:p-10 bg-gradient-to-r from-black/80 via-[var(--accent-gold)]/10 to-black/80 border-2 border-[var(--accent-gold)]/30 rounded-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)]/10 rounded-bl-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-white/90 text-center leading-relaxed text-base sm:text-lg">
                <strong className="text-white">Exact pricing</strong> is discussed when you book, based on your specific requirements - category, duration, occasion, and timing. We&apos;re transparent about rates upfront. <strong className="text-[var(--accent-gold)]">No hidden charges.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation & Changes - Timeline Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[var(--accent-gold)]" />
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Policy</span>
              <div className="w-8 h-0.5 bg-[var(--accent-gold)]" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Cancellation &<br />Changes
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Life happens. Here&apos;s our policy.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-gold)]/50 via-[var(--accent-gold)]/30 to-transparent hidden sm:block" />
            <div className="space-y-8">
              {[
                { 
                  title: "Cancellations", 
                  icon: "✕",
                  content: "If you need to cancel, let us know as soon as possible. For regular, housewife and college-girl profiles - no advance was taken, so no refund needed. For models and above where we took an advance, cancellation policy depends on timing:",
                  list: [
                    "24+ hours notice: Full refund of advance",
                    "12-24 hours notice: 50% refund of advance",
                    "Less than 12 hours: Advance retained (she may have already started travel)"
                  ]
                },
                { 
                  title: "Rescheduling", 
                  icon: "↻",
                  content: "Need to change the time? Message us and we'll try to accommodate. Same-day rescheduling depends on her availability. Advance bookings are easier to reschedule. We'll confirm the new time before you commit.",
                  list: null
                },
                { 
                  title: "No-Shows", 
                  icon: "⏰",
                  content: "If you don't show up or don't respond when she arrives, the booking is considered complete. For advance payments, no refund. For regular profiles with no advance, no charge - but please communicate if plans change.",
                  list: null
                }
              ].map((item, idx) => (
                <div key={item.title} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-black/60 border-2 border-[var(--accent-gold)]/50 flex items-center justify-center text-2xl font-bold text-[var(--accent-gold)] hidden sm:flex">
                    {item.icon}
                  </div>
                  <div className="flex-1 p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-xl transition-all">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="sm:hidden text-2xl">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 mb-3 leading-relaxed">{item.content}</p>
                    {item.list && (
                      <ul className="space-y-2 text-white/70 text-sm sm:text-base ml-4">
                        {item.list.map((li, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--accent-gold)] mt-1">•</span>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Timing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              When to Book in Kondapur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Same-day and advance bookings both work. Here&apos;s what to know.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">Same-Day Bookings</h3>
              <p className="text-white/75">
                Message as early as you can. We usually reply within 1–2 hours; we&apos;ll tell you who&apos;s free and can reach you in Kondapur. Popular for business travelers who decide last minute.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">Advance Bookings</h3>
              <p className="text-white/75">
                For full-night, events, or outstation trips, book a day or two ahead so we can confirm the right escort and timing. Advance notice helps secure your preferred time, especially for models and above.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-3">Peak Times</h3>
              <p className="text-white/75">
                Evenings and weekends can be busier in Kondapur. We&apos;ll still respond; advance notice helps secure your preferred time. Business travelers often book weekday evenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Books in Kondapur */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Who We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Who Books Escorts in Kondapur?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Different reasons, same process: discreet, direct, pay when you meet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {WHO_BOOKS_KONDAPUR.map((item) => (
              <div
                key={item.title}
                className="p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/40 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-px bg-[var(--accent-gold)]/50 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Discretion */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Safety
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Safety & Discretion in Kondapur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Your privacy and safety are our priority.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "Complete Discretion", desc: "We don't share your number with escorts. Your booking stays between you and us. Kondapur is an IT area - we're used to discreet hotel and residential outcall for tech professionals." },
              { title: "Verified Profiles", desc: "All escorts are verified before listing. Real photos, real people. No fake profiles or bait-and-switch in Kondapur bookings." },
              { title: "Outcall Only", desc: "She comes to you - your hotel or your place in Kondapur. You control the environment. No incall locations." },
              { title: "No Information Storage", desc: "We don't store or share your personal details. All coordination goes through us. Discretion is non-negotiable." },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-black/40 border border-white/10 hover:border-[var(--accent-gold)]/30 transition-all"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">{item.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification & Screening - Checklist Badge Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-2xl">✓</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Verification</span>
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Verification &<br />Screening
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              How we ensure quality and safety.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Escort Verification",
                icon: "🛡️",
                content: "All escorts are verified before we list them. We check:",
                items: [
                  "Real photos (no stock images or fake profiles)",
                  "Identity verification",
                  "Background checks for safety",
                  "Professional conduct standards"
                ]
              },
              {
                title: "Client Screening",
                icon: "🔍",
                content: "For your safety and ours, we may ask for:",
                items: [
                  "Hotel proof: Room key photo or bill (for hotel bookings)",
                  "Location details: Exact address or hotel name and area",
                  "Basic information: When you need someone, duration, occasion"
                ],
                note: "We don't ask for ID or personal documents. Hotel proof is only to verify you're staying there. All information is kept confidential."
              },
              {
                title: "Ongoing Monitoring",
                icon: "📊",
                content: "We monitor feedback and maintain quality standards. If an escort doesn't meet expectations, we address it immediately. Your feedback helps us maintain service quality in Kondapur.",
                items: null,
                note: null
              }
            ].map((item, idx) => (
              <div
                key={item.title}
                className="relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent-gold)]/30 group-hover:bg-[var(--accent-gold)] transition-colors rounded-full" />
                <div className="pl-8 pr-6 py-6 sm:py-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-white/70 mb-3">{item.content}</p>
                    </div>
                  </div>
                  {item.items && (
                    <div className="ml-16 space-y-2">
                      {item.items.map((li, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[var(--accent-gold)] mt-1">✓</span>
                          <span className="text-sm text-white/70">{li}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.note && (
                    <p className="mt-4 ml-16 text-sm text-white/60 italic">{item.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Prepare */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Preparation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              What to Prepare
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Have these ready so your booking in Kondapur goes smoothly.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { label: "Your Location", detail: "Exact location in Kondapur - hotel name and area, or residential area and address. If it's your place, any gate or lobby instructions." },
              { label: "When You Need Someone", detail: "Date and rough time. For full-night or multiple days, say so upfront so we can confirm availability." },
              { label: "Hotel Proof (if applicable)", detail: "Room key photo or bill showing your name and room number. We'll ask before she starts. You give her name at reception when she arrives." },
              { label: "Payment Ready", detail: "Cash or UPI. Have it ready when she arrives. No advance required for regular, housewife and college-girl profiles." },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 p-5 sm:p-6 bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/30 transition-all"
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent-gold)] mt-2" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">{item.label}</h3>
                  <p className="text-sm sm:text-base text-white/75">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Requirements - Checklist Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-2xl">📋</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Requirements</span>
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Booking<br />Requirements
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              What we need from you to complete a booking.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Age Verification",
                icon: "🔞",
                desc: "You must be 18 years or older to book. We don't ask for ID, but we reserve the right to verify age if needed.",
                items: null
              },
              {
                title: "Hotel Proof (For Hotel Bookings)",
                icon: "🏨",
                desc: "If you're staying at a hotel in Kondapur, we need:",
                items: [
                  "Photo of your room key or hotel bill showing your name",
                  "Room number",
                  "Hotel name and area",
                  "You'll give her name at reception when she arrives"
                ],
                note: "This is for safety and verification - we need to confirm you're actually staying there."
              },
              {
                title: "Residential Bookings",
                icon: "🏠",
                desc: "For residential bookings in Kondapur, we need your area and address. Clear gate or lobby instructions help avoid delays.",
                items: null
              },
              {
                title: "Communication",
                icon: "💬",
                desc: "We need clear communication about your location, timing, and preferences. Respond promptly to our messages.",
                items: null
              }
            ].map((item, idx) => (
              <div
                key={item.title}
                className="relative group"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent-gold)]/30 group-hover:bg-[var(--accent-gold)] transition-colors rounded-full" />
                <div className="pl-8 pr-6 py-6 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/70 mb-3">{item.desc}</p>
                      {item.items && (
                        <div className="space-y-2 ml-4">
                          {item.items.map((li, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-[var(--accent-gold)] mt-1">▸</span>
                              <span className="text-sm text-white/70">{li}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.note && (
                        <p className="mt-3 text-sm text-white/60 italic">{item.note}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Requests - Tag/Form Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(212,175,55,0.03)_25%,transparent_25%,transparent_75%,rgba(212,175,55,0.03)_75%)] bg-[length:20px_20px]" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">✨</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Customization</span>
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Special Requests &<br />Preferences
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Have specific preferences? We&apos;ll do our best to accommodate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                title: "Appearance Preferences",
                icon: "👤",
                desc: "Looking for a specific look, height, or style? Tell us when you book. We'll try to match your preferences.",
                tags: ["Height", "Style", "Look"]
              },
              {
                title: "Language Preferences",
                icon: "🗣️",
                desc: "Prefer someone who speaks Tamil, Malayalam, Telugu, Kannada, or English? We have escorts fluent in these languages.",
                tags: ["Tamil", "Mallu", "Telugu", "Kannada", "English"]
              },
              {
                title: "Special Occasions",
                icon: "🎉",
                desc: "Planning something special? We can help with birthdays, anniversaries, corporate events, outstation trips, and multiple-day bookings.",
                tags: ["Birthday", "Anniversary", "Corporate", "Outstation", "Multi-day"]
              },
              {
                title: "What We Can't Accommodate",
                icon: "⚠️",
                desc: "We provide companionship and escort services. We can't accommodate requests that are illegal, unsafe, or violate our policies.",
                tags: ["Legal Only", "Safe", "Policy Compliant"]
              }
            ].map((item, idx) => (
              <div
                key={item.title}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-2xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--accent-gold)]/20 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] border border-[var(--accent-gold)]/30 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repeat Client Benefits - Medal/Badge Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-3xl">🏆</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Loyalty</span>
              <span className="text-3xl">🏆</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Repeat Client<br />Benefits
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              We value returning clients. Here&apos;s what you get.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {REPEAT_CLIENT_BENEFITS.map((item, idx) => (
              <div
                key={item.benefit}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-gold)]/20 via-[var(--accent-gold)]/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/50 rounded-2xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--accent-gold)]/30 to-[var(--accent-gold)]/10 flex items-center justify-center text-2xl font-bold text-[var(--accent-gold)] border-2 border-[var(--accent-gold)]/30">
                        {idx + 1}
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--accent-gold)] rounded-full border-2 border-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.benefit}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Around */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Location
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Getting Around Kondapur
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              IT area location makes Kondapur easy to reach from anywhere in Hyderabad.
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-white/80 leading-relaxed mb-4">
              <strong className="text-white">Kondapur</strong> is strategically located in Hyderabad&apos;s IT corridor, making it easy for escorts to reach you from other parts of the city. Whether you&apos;re staying at a hotel on Kondapur Main Road, near Hitech City, or in a residential area, we factor in travel time when suggesting who can reach you.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              The area is well-connected by road and has good access to major Hyderabad IT landmarks and tech parks. Tell us your location when you book - we don&apos;t need the exact address until we confirm, but clear gate or lobby instructions help avoid delays.
            </p>
            <p className="text-white/80 leading-relaxed">
              <strong className="text-white">Nearby areas:</strong> Hitech City (5 min), Gachibowli (10 min), Madhapur (15 min), Banjara Hills (20 min). Easy access makes Kondapur one of Hyderabad&apos;s most convenient IT areas for outcall bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Transportation & Logistics - Route Flow Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-2xl">🚗</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Logistics</span>
              <span className="text-2xl">📍</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Transportation &<br />Logistics
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              How escorts reach you and what to expect.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-gold)]/50 via-[var(--accent-gold)]/30 to-transparent hidden sm:block" />
            <div className="space-y-8">
              {TRANSPORTATION_INFO.map((item, idx) => (
                <div key={item.title} className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-black/60 border-4 border-[var(--accent-gold)]/50 flex items-center justify-center text-2xl font-bold text-[var(--accent-gold)] hidden sm:flex z-10">
                    {idx + 1}
                  </div>
                  <div className="flex-1 p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-xl transition-all">
                    <div className="flex items-center gap-3 mb-3 sm:hidden">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-lg font-bold text-[var(--accent-gold)]">
                        {idx + 1}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 hidden sm:block">{item.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-8 bg-gradient-to-r from-[var(--accent-gold)]/10 via-[var(--accent-gold)]/5 to-[var(--accent-gold)]/10 border-l-4 border-[var(--accent-gold)] rounded-xl">
            <p className="text-white/90 text-center leading-relaxed">
              <strong className="text-white">You don&apos;t need to arrange transportation.</strong> We handle all coordination. The escort will come directly to your location in Kondapur.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for a Good Experience */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4">
              Tips
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Tips for a Good Experience
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Make your booking in Kondapur smooth and hassle-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {TIPS_FOR_EXPERIENCE.map((item) => (
              <div
                key={item.tip}
                className="p-6 bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-bold text-[var(--accent-gold)] mb-2">{item.tip}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods - Modern Horizontal Card Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="contact-methods-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
              <div className="h-px w-12 bg-[var(--accent-gold)]/50" />
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Contact</span>
              <div className="h-px w-12 bg-[var(--accent-gold)]/50" />
            </div>
            <h2 id="contact-methods-heading" className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Contact Methods
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              Multiple ways to reach us. Choose what works best.
            </p>
          </div>

          <div className="space-y-4">
            {CONTACT_METHODS.map((method, idx) => (
              <div
                key={method.method}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-l-4 border-[var(--accent-gold)]/40 hover:border-[var(--accent-gold)] rounded-xl transition-all hover:bg-black/70">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/10 flex items-center justify-center text-3xl border border-[var(--accent-gold)]/30 group-hover:scale-110 transition-transform">
                      {idx === 0 ? "💬" : idx === 1 ? "📞" : "📧"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{method.method}</h3>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-[var(--accent-gold)]/15 border border-[var(--accent-gold)]/30 rounded-full text-xs text-[var(--accent-gold)] font-semibold">
                            {method.available}
                          </span>
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">
                            {method.response}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{method.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Availability - Clock Timeline Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08),transparent_70%)]" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-3xl">🕐</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Availability</span>
              <span className="text-3xl">🕐</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Operating Hours
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              When we&apos;re available and what to expect.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent-gold)]/50 via-[var(--accent-gold)]/30 to-transparent hidden lg:block -translate-x-1/2" />
            <div className="space-y-8">
              {[
                { time: "9 AM - 6 PM", label: "Daytime", desc: "Fastest response, usually within 1-2 hours", icon: "☀️" },
                { time: "6 PM - 11 PM", label: "Evenings", desc: "Busy period, may take 2-3 hours to respond", icon: "🌆" },
                { time: "11 PM - 2 AM", label: "Late Night", desc: "Limited availability, response may be slower", icon: "🌙" },
                { time: "2 AM - 9 AM", label: "Early Morning", desc: "Minimal availability, responses next day", icon: "🌅" }
              ].map((item, idx) => (
                <div key={item.label} className={`relative flex gap-6 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-black/60 border-4 border-[var(--accent-gold)]/50 flex items-center justify-center text-3xl hidden lg:flex z-10">
                    {item.icon}
                  </div>
                  <div className={`flex-1 p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-xl transition-all ${idx % 2 === 0 ? 'lg:mr-auto lg:max-w-[45%]' : 'lg:ml-auto lg:max-w-[45%]'}`}>
                    <div className="flex items-center gap-3 mb-3 lg:hidden">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="text-xs text-[var(--accent-gold)] font-semibold">{item.time}</div>
                        <h3 className="text-xl font-bold text-white">{item.label}</h3>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <div className="text-xs text-[var(--accent-gold)] font-semibold mb-1">{item.time}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                    </div>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-8 bg-gradient-to-r from-[var(--accent-gold)]/10 via-transparent to-[var(--accent-gold)]/10 border-t border-b border-[var(--accent-gold)]/30">
            <p className="text-white/90 text-center leading-relaxed">
              <strong className="text-white">24/7 availability:</strong> Escorts are available throughout the day. Same-day bookings often possible; advance notice helps for full-night bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal Availability - Calendar Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-2xl">📅</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Seasons</span>
              <span className="text-2xl">📅</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Seasonal<br />Availability
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              How different seasons affect availability and booking patterns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {SEASONAL_AVAILABILITY.map((season, idx) => (
              <div
                key={season.period}
                className={`relative group ${
                  season.busy ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  season.busy 
                    ? 'from-[var(--accent-gold)]/20 to-[var(--accent-gold)]/5' 
                    : 'from-white/5 to-transparent'
                } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 ${
                  season.busy 
                    ? 'border-[var(--accent-gold)]/50' 
                    : 'border-white/10 group-hover:border-[var(--accent-gold)]/30'
                } rounded-2xl transition-all hover:scale-[1.02]`}>
                  {season.busy && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-[var(--accent-gold)] text-black text-xs font-bold rounded-full border-2 border-black">
                      🔥 BUSY
                    </div>
                  )}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{season.period}</h3>
                      <p className="text-sm text-[var(--accent-gold)] font-semibold">{season.months}</p>
                    </div>
                    <div className="text-3xl opacity-50">
                      {idx === 0 ? "🌞" : idx === 1 ? "🎉" : idx === 2 ? "🌧️" : "☀️"}
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">{season.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-gradient-to-r from-black/80 via-[var(--accent-gold)]/10 to-black/80 border-2 border-[var(--accent-gold)]/30 rounded-2xl">
            <p className="text-white/90 text-center leading-relaxed">
              <strong className="text-white">Year-round availability:</strong> Escorts are available throughout the year. Peak seasons mean more bookings - advance booking helps secure your preferred time.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison with Other Hyderabad Areas - Comparison Table Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.03)_0%,transparent_50%,rgba(212,175,55,0.03)_100%)]" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-2xl">⚖️</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Comparison</span>
              <span className="text-2xl">⚖️</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Kondapur vs<br />Other Areas
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
              What makes Kondapur unique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {AREA_COMPARISON.map((item, idx) => (
              <div
                key={item.area}
                className={`relative group ${
                  item.area === "Kondapur" ? 'lg:col-span-3 sm:col-span-2' : ''
                }`}
              >
                {item.area === "Kondapur" && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-gold)]/30 via-[var(--accent-gold)]/20 to-[var(--accent-gold)]/30 rounded-2xl blur opacity-50" />
                )}
                <div className={`relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 ${
                  item.area === "Kondapur"
                    ? "border-[var(--accent-gold)]/60 bg-gradient-to-br from-[var(--accent-gold)]/10 to-black/60"
                    : "border-white/10 hover:border-[var(--accent-gold)]/40"
                } rounded-2xl transition-all hover:scale-[1.02]`}>
                  {item.area === "Kondapur" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent-gold)] text-black text-xs font-bold rounded-full border-2 border-black">
                      ⭐ CURRENT AREA ⭐
                    </div>
                  )}
                  <div className={`text-center ${item.area === "Kondapur" ? 'mt-4' : ''}`}>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{item.area}</h3>
                    <div className="w-16 h-1 bg-[var(--accent-gold)] mx-auto mb-4" />
                    <p className="text-sm text-[var(--accent-gold)] font-semibold mb-3">{item.advantage}</p>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-gradient-to-r from-black/80 via-[var(--accent-gold)]/10 to-black/80 border-2 border-[var(--accent-gold)]/30 rounded-2xl">
            <p className="text-white/90 text-center leading-relaxed text-base sm:text-lg">
              <strong className="text-white">Kondapur&apos;s IT area advantage</strong> makes it the most convenient area for escort bookings in Hyderabad. Prime IT location, highest tech hotel density, easy access from all parts of the city, and we&apos;re most experienced with IT area bookings.
            </p>
          </div>
        </div>
      </section>

      {/* Other Areas - Minimal Grid */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="other-areas-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4" aria-label="Section label">
              Other Areas
            </span>
            <h2 id="other-areas-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4" itemProp="name">
              We Cover All of Hyderabad
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4" itemProp="itemListElement" role="list">
            {OTHER_AREAS.map((area, idx) => (
              <article
                key={area.slug}
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
                role="listitem"
              >
                <Link
                  href={`/${area.slug}`}
                  className="p-5 sm:p-6 bg-white/5 border border-white/10 hover:border-[var(--accent-gold)]/40 hover:bg-white/10 transition-all block"
                  rel="follow"
                  aria-label={`View ${area.name} escorts page`}
                  itemProp="item"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1" itemProp="name">{area.name}</h3>
                  <p className="text-xs sm:text-sm text-white/60" itemProp="description">{area.desc}</p>
                  <meta itemProp="position" content={(idx + 1).toString()} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* First Time - Large Quote Style */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white/[0.02]" aria-labelledby="first-time-heading" itemScope itemType="https://schema.org/Article">
        <div className="mx-auto max-w-5xl">
          <article className="relative p-8 sm:p-12 md:p-16 border-l-4 border-[var(--accent-gold)] bg-black/40">
            <div className="absolute top-6 sm:top-8 left-6 sm:left-8 text-5xl sm:text-6xl font-black text-[var(--accent-gold)]/20 leading-none" aria-hidden="true">
              "
            </div>
            <div className="relative z-10 pl-6 sm:pl-8">
              <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4 sm:mb-6" aria-label="Section label">
                First Time?
              </span>
              <h2 id="first-time-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6" itemProp="headline">
                First Time Booking in Kondapur?
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/85 leading-relaxed" itemProp="articleBody">
                <p>
                  Message us with your location in Kondapur (hotel or area), when you need someone, and what you have in mind. We suggest who&apos;s free and can reach you. If you&apos;re at a hotel we need proof and room details; you give her name at reception when she arrives. Payment when she&apos;s there - no advance for regular and housewife profiles.
                </p>
                <p>
                  The women we work with are used to first-time clients. You book, she comes, you spend time together. Discretion is guaranteed.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Common Concerns Addressed - Q&A Card Design */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="concerns-heading" itemScope itemType="https://schema.org/FAQPage">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05),transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4" aria-hidden="true">
              <span className="text-2xl">❓</span>
              <span className="text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase">Concerns</span>
              <span className="text-2xl">💬</span>
            </div>
            <h2 id="concerns-heading" className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight" itemProp="name">
              Common Concerns<br />Addressed
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto" itemProp="description">
              Addressing common questions and concerns.
            </p>
          </div>

          <div className="space-y-5" itemProp="mainEntity" itemScope itemType="https://schema.org/ItemList">
            {COMMON_CONCERNS.map((item, idx) => (
              <article
                key={item.concern}
                className="relative group"
                itemScope
                itemType="https://schema.org/Question"
                itemProp="itemListElement"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-gold)]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <div className="relative p-6 sm:p-8 bg-black/60 backdrop-blur-md border-2 border-white/10 hover:border-[var(--accent-gold)]/40 rounded-2xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--accent-gold)]/20 flex items-center justify-center text-xl font-bold text-[var(--accent-gold)] border-2 border-[var(--accent-gold)]/30" aria-hidden="true">
                      Q{idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-start gap-2" itemProp="name">
                        <span className="text-[var(--accent-gold)]" aria-hidden="true">Q:</span>
                        <span>{item.concern}</span>
                      </h3>
                      <div className="pl-6 border-l-2 border-[var(--accent-gold)]/30" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                        <p className="text-sm sm:text-base text-white/75 leading-relaxed flex items-start gap-2" itemProp="text">
                          <span className="text-[var(--accent-gold)] font-bold mt-1" aria-hidden="true">A:</span>
                          <span>{item.answer}</span>
                        </p>
                      </div>
                      <meta itemProp="position" content={(idx + 1).toString()} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Minimal List */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/FAQPage" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs font-mono tracking-widest text-[var(--accent-gold)] uppercase mb-4" aria-label="Section label">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-5 sm:space-y-6" itemProp="mainEntity" itemScope itemType="https://schema.org/ItemList" role="list">
            {FAQ_ITEMS.map((item, idx) => (
              <article
                key={item.q}
                className="border-b border-white/10 pb-5 sm:pb-6 last:border-0"
                itemScope
                itemType="https://schema.org/Question"
                itemProp="itemListElement"
                role="listitem"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3" itemProp="name">{item.q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-sm sm:text-base text-white/75 leading-relaxed" itemProp="text">{item.a}</p>
                </div>
                <meta itemProp="position" content={(idx + 1).toString()} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal & Bold */}
      <section className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black" aria-labelledby="cta-heading" itemScope itemType="https://schema.org/ContactPage">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-tight">
            Ready to Book?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto" itemProp="description">
            Message us with your location in Kondapur, when you need someone, and what you have in mind.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4" role="group" aria-label="Contact options">
            <a
              href="https://t.me/LillyBabe_Hyderabad"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[var(--accent-gold)]/90 transition-all text-base sm:text-lg"
              aria-label="Contact us on Telegram for Kondapur escort bookings"
              itemProp="contactPoint"
              itemScope
              itemType="https://schema.org/ContactPoint"
            >
              <meta itemProp="contactType" content="Customer Service" />
              <meta itemProp="availableLanguage" content="English, Tamil, Hindi" />
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/30 text-white font-bold rounded-lg hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all text-base sm:text-lg"
              rel="follow"
              aria-label="Contact page for Kondapur escort service"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}



