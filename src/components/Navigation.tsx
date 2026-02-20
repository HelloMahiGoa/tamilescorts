"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/95 shadow-lg shadow-black/20 backdrop-blur-md">
      {/* Gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-gold)]/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo - Traditional South Indian Style */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            {/* Traditional South Indian decorative element with traditional colors - Enhanced visibility */}
            <div className="relative flex items-center">
              {/* Saffron accent line - more visible */}
              <div className="absolute -left-1.5 h-7 w-1 bg-gradient-to-b from-[#FF9933] via-[#FF8C00] to-transparent rotate-12 shadow-[0_0_6px_rgba(255,153,51,0.6)]" />
              {/* Kumkum red dot (traditional bindi/tilaka) - larger and more visible */}
              <span className="relative flex h-4 w-4 z-10">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#DC143C] via-[#B91C1C] to-[#8B0000] shadow-[0_0_12px_rgba(220,20,60,0.8)]" />
                <span className="absolute inset-0 animate-ping rounded-full bg-[#DC143C] opacity-50" style={{ animationDuration: "2s" }} />
                {/* Gold center - more prominent */}
                <span className="absolute inset-[3px] rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
              </span>
              {/* Deep green accent line - more visible */}
              <div className="absolute -right-1.5 h-7 w-1 bg-gradient-to-b from-transparent via-[#228B22] to-[#006400] -rotate-12 shadow-[0_0_6px_rgba(34,139,34,0.6)]" />
            </div>
            
            {/* Logo text with traditional South Indian color palette - Enhanced visibility */}
            <span 
              className="relative text-xl font-bold tracking-wide transition-all duration-300 sm:text-2xl"
              style={{ 
                fontFamily: "var(--font-cormorant), serif",
                letterSpacing: "0.1em",
                fontWeight: 800,
                color: "#FFD700",
                textShadow: "0 0 10px rgba(255, 215, 0, 0.5), 0 2px 4px rgba(0,0,0,0.8), 2px 2px 0px rgba(255, 153, 51, 0.3)",
              }}
            >
              <span className="relative inline-block group-hover:scale-105 transition-transform duration-300">
                {/* Traditional decorative underline with saffron and red */}
                <span className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF9933] via-[#DC143C] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">Tamil Escorts</span>
                {/* Glow effect with traditional colors */}
                <span 
                  className="absolute inset-0 text-xl sm:text-2xl font-bold opacity-20 blur-md transition-opacity duration-300 group-hover:opacity-40"
                  style={{ 
                    fontFamily: "var(--font-cormorant), serif",
                    letterSpacing: "0.1em",
                    color: "#FF9933",
                  }}
                >
                  Tamil Escorts
                </span>
              </span>
            </span>
            
            {/* Traditional decorative elements - saffron and deep green dots */}
            <div className="hidden sm:flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9933]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#228B22]" />
            </div>
          </Link>

          {/* Desktop: menu links + CTA */}
          <div className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2.5 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1.5 left-4 right-4 h-px scale-x-0 bg-[var(--accent-gold)] transition-transform duration-200 group-hover:scale-x-100" />
                <span className="ml-1 inline-block transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--accent-gold)]">→</span>
              </Link>
            ))}
            <Link
              href="/join-us"
              className="ml-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent-gold)] px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[var(--accent-gold)]/90 hover:shadow-[0_0_20px_var(--accent-gold)/30]"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-white transition-colors hover:bg-white/10 hover:text-[var(--accent-gold)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-6xl animate-[slideIn_0.2s_ease-out] rounded-2xl border border-white/10 bg-black/95 px-2 py-2 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-0.5">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-[var(--accent-gold)]/10 hover:text-[var(--accent-gold)]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label} →
              </Link>
            ))}
            <Link
              href="/join-us"
              className="mx-2 mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-gold)] px-4 py-3 text-sm font-semibold text-black"
              onClick={() => setMobileOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
