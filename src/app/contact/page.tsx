import Link from "next/link";

export const metadata = {
  title: "Contact Us | Tamil Escorts – Book & Inquiries",
  description:
    "Contact Tamil Escorts for bookings and inquiries. Telegram 24/7. Discreet, professional service across Chennai, Bangalore, Hyderabad & South India.",
};

const TELEGRAM_USERNAME = "LillyBabe_chennai";
const TELEGRAM_URL = "https://t.me/LillyBabe_chennai";

export default function ContactPage() {
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
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Get in Touch
          </h1>
          <div className="w-20 h-0.5 bg-[var(--accent-gold)]/50 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have questions or ready to book? We&apos;re here 24/7. Reach out on Telegram for a discreet, prompt response.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)]/90 backdrop-blur-md p-8 text-center transition-all hover:border-[var(--accent-gold)]/60 hover:shadow-[0_0_30px_var(--accent-gold)/10] w-full max-w-md"
            >
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0088cc]/20 text-3xl transition-colors group-hover:bg-[#0088cc]/30">
                <svg className="h-12 w-12 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </span>
              <h2 className="text-xl font-bold text-white mb-2">Telegram</h2>
              <p className="text-white/70 text-sm mb-4">Chat for bookings & inquiries</p>
              <span className="text-lg font-semibold text-[var(--accent-gold)] mb-2">@{TELEGRAM_USERNAME}</span>
              <span className="rounded-lg bg-[var(--accent-gold)] px-4 py-2 text-sm font-semibold text-black">
                Open Telegram
              </span>
              <span className="mt-3 text-xs text-white/50">Usually reply within 1–2 hours</span>
            </a>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--accent-gold)] mb-6 text-center">
            What to Expect
          </h2>
          <ul className="space-y-4">
            {[
              "We respond to Telegram messages as quickly as possible, often within minutes during peak hours.",
              "All conversations are private and discreet. We never share your details with anyone.",
              "You can ask about availability, categories, cities, pricing, or anything else before booking.",
              "No advance payment is required. We'll confirm your booking and share details once you're ready.",
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[var(--accent-gold)]/30 flex items-center justify-center text-xs font-bold text-[var(--accent-gold)]">
                  ✓
                </span>
                <span className="text-white/80 text-sm sm:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service areas */}
      <section className="relative py-12 border-t border-[var(--border-color)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--accent-gold)] mb-4 text-center">
            We Serve Major South Indian Cities
          </h2>
          <p className="text-white/70 text-center mb-6 text-sm">
            Chennai, Bangalore, Hyderabad, Kochi, Coimbatore, Madurai, Trivandrum, Vijayawada & more.
          </p>
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--accent-gold)] font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
