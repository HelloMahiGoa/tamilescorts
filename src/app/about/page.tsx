import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | Tamil Escorts – South Indian Escort Services",
  description:
    "Learn about our story, values, and commitment to premium South Indian escort services. Discreet, professional, and trusted across Chennai, Bangalore, Hyderabad & more.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/40 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent-gold)]/6 rounded-full blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[var(--accent-gold)]/80 text-sm font-medium tracking-widest uppercase mb-3">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Your Trusted Partner in South India
          </h1>
          <div className="w-20 h-0.5 bg-[var(--accent-gold)]/50 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We connect discerning clients with verified, professional companions across South India. Discretion, quality, and cultural understanding are at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-6">
            Who We Are
          </h2>
          <div className="space-y-5 text-lg text-white/80 leading-relaxed">
            <p>
              We are a premium escort service operating across South India, with a strong presence in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore and Madurai. Our focus is simple: to provide genuine, professional companionship to clients who value discretion, quality, and a personal touch.
            </p>
            <p>
              Unlike generic platforms, we specialise in South Indian companionship. Our companions speak Tamil, Malayalam, Kannada, Telugu, and English. They understand local culture, traditions, and the importance of making you feel at ease—whether you need a plus-one for a corporate dinner, company for a trip, or someone to share a relaxed evening with.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-6">
            Our Story
          </h2>
          <div className="space-y-5 text-lg text-white/80 leading-relaxed">
            <p>
              This service was born from a simple observation: many people in South India were looking for companionship that felt real and respectful—someone who could blend into their world, speak their language, and understand their needs—but struggled to find a reliable, discreet option.
            </p>
            <p>
              We built our platform to fill that gap. Every profile is personally curated. We prioritise authenticity, professionalism, and client satisfaction over volume. Over the years we have served thousands of clients—executives, travellers, and everyday people—who return because we deliver what we promise: quality company, complete discretion, and a human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Why South India */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-6">
            Why We Focus on South India
          </h2>
          <div className="space-y-5 text-lg text-white/80 leading-relaxed">
            <p>
              South India is home to a rich mix of cultures, languages, and lifestyles. Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana are economic and cultural hubs where business and social life often call for a companion who fits in naturally—whether at a wedding, a corporate event, or a quiet dinner.
            </p>
            <p>
              Our companions are chosen with this in mind. They share or understand South Indian values, can converse in regional languages, and know how to conduct themselves in both formal and casual settings. When you book with us, you are not just getting a date—you are getting someone who can truly connect with you and your environment.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-2 text-center">
            What We Offer
          </h2>
          <p className="text-white/70 text-center mb-10 max-w-2xl mx-auto">
            A range of categories and services tailored to different needs and occasions.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Diverse Categories", desc: "From regular escorts to artists, models, celebrity-style companions, housewife escorts, college girls, and actress profiles. We match you with the right type for your occasion." },
              { title: "Multiple Cities", desc: "We operate in Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai, and other major South Indian cities." },
              { title: "Incall & Outcall", desc: "Meet at your hotel, home, or venue (outcall), or at the companion's location (incall) where available. We work around your preference and schedule." },
              { title: "Flexible Duration", desc: "Short bookings for a few hours or longer engagements for the night or for travel. We accommodate your timeline." },
              { title: "Event & Travel", desc: "Need a plus-one for a business dinner, wedding, or trip? Our companions are comfortable at events and can travel with you when arranged in advance." },
              { title: "Verified Profiles", desc: "We verify identities and maintain quality standards. What you see and what you get are aligned—no fake profiles or last-minute surprises." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 backdrop-blur-md p-6 hover:border-[var(--accent-gold)]/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-[var(--accent-gold)] font-semibold hover:underline"
            >
              Explore categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values / Promise */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-gold)]/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-4">
              Our Promise to You
            </h2>
            <p className="text-white/75 max-w-xl mx-auto">
              We don&apos;t just provide a service—we commit to your comfort and satisfaction.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Privacy is Sacred", desc: "Your identity, preferences, and experiences stay strictly confidential. We never share your details or discuss your bookings with anyone." },
              { title: "Quality is Non-Negotiable", desc: "Every companion is vetted and curated. We do not compromise on professionalism or conduct." },
              { title: "We're Here When You Need Us", desc: "Our team is available 24/7 for queries, bookings, and support. You are never left without a point of contact." },
              { title: "You're Family", desc: "We remember returning clients and their preferences. Your happiness and trust matter to us beyond a single booking." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md p-6 border-l-4 border-l-[var(--accent-gold)]/50"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-6">
            How We Work
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "You Reach Out", body: "Contact us via Telegram. Tell us your city, preferred type of companion, occasion, and timing. Our team responds quickly and respects your privacy." },
              { step: 2, title: "We Match You", body: "Based on your requirements, we suggest suitable companions. You can ask questions, see profiles where applicable, and choose who fits best." },
              { step: 3, title: "Confirmation & Details", body: "Once you confirm, we lock in the booking and share necessary details—time, place, and what to expect. We keep you updated until the meeting." },
              { step: 4, title: "Meeting & After", body: "Your companion arrives as agreed. After the meeting, we welcome feedback. Many of our clients book again because of the consistency and care we put in." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "1000+", label: "Happy Clients" },
              { number: "100+", label: "Premium Profiles" },
              { number: "24/7", label: "Support" },
              { number: "100%", label: "Discretion" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 py-6"
              >
                <div className="text-3xl font-bold text-[var(--accent-gold)]">{stat.number}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder / Personal Note */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 overflow-hidden lg:grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-0">
              <Image
                src="/images/1.avif"
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-[var(--accent-gold)] mb-4">
                A Personal Note
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 italic">
                &ldquo;I started this because I saw how hard it was for people to find genuine, respectful companionship in South India. We are here to change that—one booking at a time. Your trust means everything to us.&rdquo;
              </p>
              <p className="text-[var(--accent-gold)] font-semibold">Your Trusted Friend</p>
              <p className="text-sm text-white/60">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Book?
          </h2>
          <p className="text-white/70 mb-6">
            Get in touch anytime. We&apos;re here to help you find the right companion.
          </p>
          <div className="flex justify-center">
            <a
              href="https://t.me/LillyBabe_chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-[var(--accent-gold)] text-black hover:bg-[var(--accent-gold)]/90 transition-all"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
          </div>
          <Link href="/" className="inline-block mt-6 text-sm text-white/60 hover:text-[var(--accent-gold)] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
