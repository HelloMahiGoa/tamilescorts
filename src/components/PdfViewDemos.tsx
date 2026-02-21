"use client";

import { useState } from "react";

interface PdfViewDemosProps {
  pdfUrl: string;
  name: string;
}

export default function PdfViewDemos({ pdfUrl, name }: PdfViewDemosProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "gallery">("overview");
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);

  return (
    <div className="space-y-16">
      {/* Section header */}
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-xl font-bold text-[var(--accent-gold)]">PDF View Style Demos</h2>
        <p className="text-sm text-white/50 mt-1">Compare different layouts. Pick one for production.</p>
      </div>

      {/* 1. Full-screen overlay / modal */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">1. Full-screen overlay</h3>
        <button
          onClick={() => setModalOpen(true)}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-left font-medium text-white hover:bg-white/10 transition-colors"
        >
          View profile gallery
        </button>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              ×
            </button>
            <div className="h-[90vh] w-full max-w-4xl rounded-xl overflow-hidden bg-black">
              <iframe src={pdfUrl} className="h-full w-full" title={`${name} gallery`} />
            </div>
          </div>
        )}
      </div>

      {/* 2. Accordion / expandable */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">2. Accordion / expandable</h3>
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex w-full items-center justify-between px-6 py-4 bg-white/5 hover:bg-white/[0.07] transition-colors"
          >
            <span className="font-medium text-white">View profile gallery</span>
            <span className={`text-white/60 text-xs transition-transform duration-200 ${accordionOpen ? "rotate-180" : ""}`}>▾</span>
          </button>
          {accordionOpen && (
            <div className="border-t border-white/10">
              <div className="h-[400px]">
                <iframe src={pdfUrl} className="h-full w-full" title={`${name} gallery`} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Tabbed content */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">3. Tabbed content</h3>
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "overview" ? "bg-[var(--accent-gold)]/20 text-[var(--accent-gold)]" : "text-white/60 hover:text-white"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "gallery" ? "bg-[var(--accent-gold)]/20 text-[var(--accent-gold)]" : "text-white/60 hover:text-white"
              }`}
            >
              Gallery
            </button>
          </div>
          <div className="min-h-[300px] bg-black/40">
            {activeTab === "overview" ? (
              <div className="p-6 text-white/70">
                Profile info, rates, and contact go here. Switch to <strong>Gallery</strong> tab for PDF.
              </div>
            ) : (
              <div className="h-[400px]">
                <iframe src={pdfUrl} className="h-full w-full" title={`${name} gallery`} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. Swipeable cards - link fallback (no thumbnails without server render) */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">4. Card grid (tap to view)</h3>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <a
              key={i}
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="aspect-square rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl text-white/40">📄</span>
            </a>
          ))}
        </div>
        <p className="text-xs text-white/40 mt-2">Placeholder cards. With PDF-to-image, these would show thumbnails. Tap opens PDF.</p>
      </div>

      {/* 5. Floating bottom sheet (mobile-style) */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">5. Bottom sheet</h3>
        <button
          onClick={() => setBottomSheetOpen(true)}
          className="w-full rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-left font-medium text-white hover:bg-white/10"
        >
          Swipe up to view gallery
        </button>
        {bottomSheetOpen && (
          <>
            <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setBottomSheetOpen(false)} aria-hidden />
            <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] rounded-t-2xl overflow-hidden bg-black border-t border-white/10 flex flex-col">
              <div className="flex items-center justify-center py-3 border-b border-white/10">
                <div className="h-1 w-12 rounded-full bg-white/30" />
              </div>
              <div className="flex-1 min-h-0 overflow-auto">
                <div className="h-[70vh]">
                  <iframe src={pdfUrl} className="h-full w-full" title={`${name} gallery`} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 6. Side-by-side (desktop) / stacked (mobile) - shown via layout */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">6. Side-by-side (lg+) / stacked (mobile)</h3>
        <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-6 lg:space-y-0">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-white/70 text-sm">Profile info, rates, contact on this side.</p>
          </div>
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <div className="h-[320px]">
              <iframe src={pdfUrl} className="h-full w-full" title={`${name} gallery`} />
            </div>
          </div>
        </div>
      </div>

      {/* 7. Link-only */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">7. Link-only</h3>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--accent-gold)]/50 bg-[var(--accent-gold)]/10 px-6 py-4 font-medium text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/20 transition-colors"
        >
          View profile gallery
          <span className="text-sm opacity-70">→</span>
        </a>
      </div>

      {/* 8. Inline with expand */}
      <div>
        <h3 className="text-sm font-semibold text-white/80 mb-3">8. Inline with expand</h3>
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <div className={`relative overflow-hidden transition-all ${expandOpen ? "" : "max-h-[280px]"}`}>
            <div className="h-[min(70vh,600px)]">
              <iframe src={pdfUrl} className="h-full w-full" title={`${name} gallery`} />
            </div>
            {!expandOpen && (
              <>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
                <button
                  onClick={() => setExpandOpen(true)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-lg bg-[var(--accent-gold)] px-4 py-2 font-medium text-black"
                >
                  Expand to full view
                </button>
              </>
            )}
          </div>
          {expandOpen && (
            <button
              onClick={() => setExpandOpen(false)}
              className="w-full border-t border-white/10 py-3 text-sm text-white/60 hover:text-white"
            >
              Collapse
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
