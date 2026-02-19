import Link from "next/link";

export const metadata = {
  title: "Join Us | Become a Companion – Tamil Escorts",
  description:
    "Join our network of premium South Indian escorts. Discreet, professional, and rewarding. Apply via Telegram. Verified platform across Chennai, Bangalore, Hyderabad & more.",
};

const TELEGRAM_APPLY = "https://t.me/LillyBabe_chennai";

export default function JoinUsPage() {
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
            Join Our Network
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Join Us as a Companion
          </h1>
          <div className="w-20 h-0.5 bg-[var(--accent-gold)]/50 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We welcome confident, professional women from South India to join our verified platform. Work with a discreet, respectful team and connect with quality clients.
          </p>
        </div>
      </section>

      {/* Why join */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-6 text-center">
            Why Join Us?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { title: "Discretion & Privacy", desc: "We protect your identity and details. Only verified clients are connected with you, and we never share your information." },
              { title: "Quality Clients", desc: "Our clients are vetted and respectful. We focus on professionals, travellers, and gentlemen who value companionship and manners." },
              { title: "Flexible Schedule", desc: "You choose when you're available. We work around your schedule—part-time or full-time—and respect your boundaries." },
              { title: "Fair & Transparent", desc: "Clear terms, timely payments, and no hidden conditions. We believe in treating our companions with respect and fairness." },
              { title: "South India Focus", desc: "We operate across Chennai, Bangalore, Hyderabad, Kochi, and other major cities. You can work in your city or when you travel." },
              { title: "Supportive Team", desc: "Our team handles bookings, coordination, and client screening. You focus on the meeting; we handle the rest." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]/80 p-6 hover:border-[var(--accent-gold)]/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we look for */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-6 text-center">
            Who We Look For
          </h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              We work with women who are confident, well-groomed, and comfortable in social settings. You may be a professional, student, artist, or from any background—what matters is that you are genuine, respectful, and able to hold a conversation. Many of our clients need companionship for dinners, events, travel, or relaxed evenings, so being presentable and personable is important.
            </p>
            <p>
              We welcome companions who speak Tamil, Malayalam, Kannada, Telugu, or English. Age and profile vary; we have categories from regular to models, artists, and more. If you are 21+ and interested in joining a discreet, professional network, we would like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-2 text-center">
            How to Apply
          </h2>
          <p className="text-white/70 text-center mb-10 max-w-xl mx-auto">
            Reach out via Telegram. Our team will respond discreetly and guide you through the next steps.
          </p>
          <div className="flex justify-center">
            <a
              href={TELEGRAM_APPLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-gold)] px-8 py-4 text-base font-semibold text-black hover:bg-[var(--accent-gold)]/90 hover:shadow-[0_0_30px_var(--accent-gold)/30] transition-all"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Apply via Telegram
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            All inquiries are confidential. We will never share your contact or details with anyone.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--accent-gold)] mb-8 text-center">
            What Happens Next?
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "You Contact Us", body: "Send a message or call. You can ask any questions first—no obligation." },
              { step: 2, title: "Brief Conversation", body: "We'll have a discreet chat to understand your profile, availability, and what you're comfortable with." },
              { step: 3, title: "Verification", body: "We may request basic verification for the safety of our clients and our network. This is kept private." },
              { step: 4, title: "Onboarding", body: "Once we're both comfortable, we'll add you to our network and share how bookings work. You set your own availability." },
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

      {/* Note on safety */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--accent-gold)]/30 bg-[var(--card-bg)]/50 p-8 text-center">
            <h2 className="text-xl font-bold text-[var(--accent-gold)] mb-4">
              Your Safety & Comfort Matter
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              We screen clients and only pass on serious, respectful inquiries. You are never obliged to accept a booking you're not comfortable with. If at any point you wish to pause or leave the network, we respect that. This is a professional arrangement built on mutual respect and discretion.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-6">
            Send us a message on Telegram. We're here to answer your questions and guide you through the process.
          </p>
          <a
            href={TELEGRAM_APPLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-gold)] px-8 py-4 text-base font-semibold text-black hover:bg-[var(--accent-gold)]/90 transition-all"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Message Us on Telegram
          </a>
          <div className="mt-8">
            <Link href="/" className="text-sm text-white/60 hover:text-[var(--accent-gold)] transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
