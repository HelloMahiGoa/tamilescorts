import Link from "next/link";
import { CATEGORIES, getCategoryPagePath } from "@/lib/categories";

const categoryLinks = CATEGORIES.map((cat) => ({
  label: cat.title,
  href: getCategoryPagePath(cat.slug),
}));

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  // Use static year to avoid hydration mismatches
  const currentYear = 2026;

  return (
    <footer className="border-t border-[var(--border-color)] bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link 
              href="/" 
              className="group relative inline-block text-xl font-bold transition-all duration-300 hover:scale-105"
              style={{ 
                fontFamily: "var(--font-cormorant), serif",
                letterSpacing: "0.08em",
                fontWeight: 700,
                background: "linear-gradient(135deg, #FFD700 0%, #FF9933 50%, #DC143C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 2px 8px rgba(220,20,60,0.2)",
              }}
            >
              <span className="relative z-10">Tamil Escorts</span>
              {/* Traditional decorative underline with saffron and red */}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF9933]/60 via-[#DC143C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <p className="mt-3 text-sm text-white/60">
              Premium Tamil profiles. South Indian theme, trusted and discreet.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)]">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {categoryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--accent-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)]">
              Site
            </h3>
            <ul className="mt-4 space-y-2">
              {siteLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-[var(--accent-gold)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)]">
              Contact
            </h3>
            <p className="mt-4 text-sm text-white/60">
              For inquiries and bookings, visit our Contact page.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block rounded-full border border-[var(--accent-gold)]/50 px-4 py-2 text-sm font-medium text-[var(--accent-gold)] transition-colors hover:bg-[var(--accent-gold)]/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-color)] pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {currentYear} Tamil Escorts. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-white/50 hover:text-[var(--accent-gold)]">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-[var(--accent-gold)]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
