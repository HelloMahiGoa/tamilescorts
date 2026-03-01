"use client";

import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Telegram floating panel */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded panel */}
        {open && (
          <div className="mb-1 w-72 max-w-[90vw] rounded-2xl border border-white/10 bg-black/90 px-4 py-3 shadow-2xl backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-gold)] mb-2">
              Telegram
            </p>
            <p className="text-xs text-white/70 mb-3">
              Book direct, join the Chennai group or follow our official channel.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://t.me/Tamil_Escorts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-[#0088cc]/20 px-3 py-2 text-xs text-white/90 hover:bg-[#0088cc]/30 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0088cc]">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold">Book on Telegram</span>
                    <span className="text-[10px] text-white/60">@Tamil_Escorts</span>
                  </span>
                </span>
                <span className="text-[10px] text-white/70">Chat</span>
              </a>

              <a
                href="https://t.me/Tamil_Escorts_Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/10 transition-colors"
              >
                <span className="flex flex-col">
                  <span className="text-xs font-semibold">Chennai group</span>
                  <span className="text-[10px] text-white/60">Questions & local updates</span>
                </span>
                <span className="text-[10px] text-[var(--accent-gold)] font-semibold">Join</span>
              </a>

              <a
                href="https://t.me/Tamil_Escorts_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/10 transition-colors"
              >
                <span className="flex flex-col">
                  <span className="text-xs font-semibold">Official channel</span>
                  <span className="text-[10px] text-white/60">Announcements & new profiles</span>
                </span>
                <span className="text-[10px] text-[var(--accent-gold)] font-semibold">Follow</span>
              </a>
            </div>
          </div>
        )}

        {/* Telegram toggle button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-14 items-center gap-2 rounded-full bg-[#0088cc] px-4 text-sm font-semibold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,136,204,0.6)]"
          aria-label="Open Telegram options"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </span>
          <span className="hidden sm:inline">Telegram</span>
          <span className="text-xs opacity-80">{open ? "Close" : "Open"}</span>
        </button>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-orange)] shadow-2xl transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,107,53,0.6)]"
            style={{ marginBottom: open ? "5.5rem" : "0" }}
            aria-label="Scroll to top"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>

    </>
  );
}
