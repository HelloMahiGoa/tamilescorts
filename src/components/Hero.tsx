import Image from "next/image";
import Link from "next/link";

const CITIES = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Kochi",
  "Coimbatore",
  "Madurai",
];

function cityToSlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export default function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-black sm:h-[60vh] md:h-[70vh] lg:min-h-screen">
      {/* Mobile Hero image */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/images/hero-mobile.avif"
          alt=""
          fill
          className="object-cover object-left object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop Hero image */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/hero-desktop.avif"
          alt=""
          fill
          className="object-cover object-left object-top"
          priority
          sizes="100vw"
        />
      </div>

      {/* Major Cities - right side, unique editorial style, desktop only */}
      <div className="absolute right-0 top-0 bottom-0 hidden items-center justify-end lg:flex">
        <div className="relative flex h-[min(32rem,75vh)] w-[22rem] flex-col overflow-hidden rounded-l-3xl border-y border-l border-white/10 bg-black/70 shadow-[-8px_0_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl xl:w-[26rem]">
          {/* Vertical "CITIES" label */}
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[0.65rem] font-bold tracking-[0.5em] text-[var(--accent-gold)]/30"
            style={{ letterSpacing: "0.5em" }}
          >
            CITIES
          </div>

          {/* Content */}
          <div className="relative flex flex-1 flex-col justify-center pl-10 pr-6 py-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--accent-gold)]/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">
                Explore
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-0">
              {CITIES.map((city, i) => (
                <Link
                  key={city}
                  href={`/${cityToSlug(city)}-escorts`}
                  className="group relative flex items-center gap-2 py-2.5 pl-0 pr-0"
                  style={{ animation: `slideInFromRight 0.4s ease-out ${(60 + i * 40) / 1000}s forwards` }}
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-[var(--accent-gold)]/90 transition-[width] duration-300 group-hover:w-1" />
                  <svg
                    className="h-3.5 w-3.5 flex-shrink-0 text-[var(--accent-gold)]/50 transition-all duration-200 group-hover:scale-110 group-hover:text-[var(--accent-gold)] group-hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="truncate text-[13px] font-medium tracking-wide text-white/75 transition-colors duration-200 group-hover:text-white">
                    {city}
                  </span>
                  <span className="ml-auto text-[10px] font-medium text-[var(--accent-gold)] opacity-0 transition-all duration-200 group-hover:opacity-80">→</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent-gold)]/40 to-transparent" />
              <span className="text-[9px] font-medium uppercase tracking-widest text-white/40">South India</span>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-to-tr from-[var(--accent-gold)]/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}
