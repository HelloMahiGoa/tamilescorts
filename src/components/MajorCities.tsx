import Link from "next/link";

const CITIES = [
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Kochi",
  "Coimbatore",
  "Madurai",
  "Trivandrum",
  "Vijayawada",
  "Mysore",
  "Pondicherry",
];

export default function MajorCities() {
  return (
    <section className="relative bg-black py-8 sm:py-10">
      {/* Gold accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/60 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent-gold)]">
          Explore by city
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {CITIES.map((city) => (
            <Link
              key={city}
              href={`/locations?city=${city.toLowerCase().replace(/\s+/g, "-")}`}
              className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/90 transition-all duration-200 hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/15 hover:text-white hover:shadow-[0_0_24px_rgba(255,215,0,0.12)]"
            >
              {city}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
