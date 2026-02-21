"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface PdfViewerProps {
  pdfUrl: string;
  name: string;
}

type FitMode = "width" | "page" | "auto";

export default function PdfViewer({ pdfUrl, name }: PdfViewerProps) {
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [fitMode, setFitMode] = useState<FitMode>("width");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = pageImages.length;
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const loadPdf = useCallback(async () => {
    try {
      setLoading(true);
      setUseFallback(false);

      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`;

      const res = await fetch(pdfUrl);
      const arrayBuffer = await res.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const num = pdf.numPages;

      const fullImages: string[] = [];
      const thumbImages: string[] = [];

      for (let i = 1; i <= num; i++) {
        const page = await pdf.getPage(i);
        const fullVp = page.getViewport({ scale: 2 });
        const thumbVp = page.getViewport({ scale: 0.3 });

        const fullCanvas = document.createElement("canvas");
        fullCanvas.width = fullVp.width;
        fullCanvas.height = fullVp.height;
        const fullCtx = fullCanvas.getContext("2d");
        if (fullCtx) {
          await page.render({ canvasContext: fullCtx, viewport: fullVp }).promise;
          fullImages.push(fullCanvas.toDataURL("image/jpeg", 0.9));
        }

        const thumbCanvas = document.createElement("canvas");
        thumbCanvas.width = thumbVp.width;
        thumbCanvas.height = thumbVp.height;
        const thumbCtx = thumbCanvas.getContext("2d");
        if (thumbCtx) {
          await page.render({ canvasContext: thumbCtx, viewport: thumbVp }).promise;
          thumbImages.push(thumbCanvas.toDataURL("image/jpeg", 0.8));
        }
      }

      setPageImages(fullImages);
      setThumbnails(thumbImages);
    } catch {
      setUseFallback(true);
    } finally {
      setLoading(false);
    }
  }, [pdfUrl]);

  useEffect(() => {
    loadPdf();
  }, [loadPdf]);

  if (useFallback) {
    return (
      <section className="rounded-2xl border border-white/10 overflow-hidden bg-black/40 sm:rounded-3xl lg:max-w-6xl lg:mx-auto">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-3 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-wider text-white/50">Profile Gallery</span>
        </div>
        <div className="h-[min(85vh,700px)] lg:h-[min(92vh,950px)]">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="h-full w-full"
            title={`${name} profile`}
          />
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-white/10 bg-black/40">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--accent-gold)] border-t-transparent" />
          <p className="text-sm text-white/60">Loading document…</p>
        </div>
      </div>
    );
  }

  if (pageImages.length === 0) return null;

  const scalePercent = fitMode === "auto" ? zoom : fitMode === "page" ? 85 : 100;

  return (
    <section
      ref={containerRef}
      className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl sm:rounded-3xl lg:max-w-6xl lg:mx-auto lg:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.6)]"
    >
      {/* Toolbar - compact on mobile, refined on desktop */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            title={sidebarOpen ? "Hide thumbnails" : "Show thumbnails"}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="hidden h-6 w-px bg-white/15 lg:block" />
          <div className="hidden gap-1 sm:flex">
            {(["width", "page", "auto"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setFitMode(mode)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  fitMode === mode ? "bg-[var(--accent-gold)]/25 text-[var(--accent-gold)]" : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {mode === "width" ? "Fit width" : mode === "page" ? "Fit page" : "Custom"}
              </button>
            ))}
          </div>
          {fitMode === "auto" && (
            <div className="hidden items-center gap-1 sm:flex">
              <div className="h-6 w-px bg-white/15" />
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(50, z - 10))}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                −
              </button>
              <span className="min-w-[3.5rem] text-center text-sm font-medium text-white/90">{zoom}%</span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(200, z + 10))}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={!canPrev}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="flex items-center gap-1.5 text-sm text-white/80">
            <input
              type="number"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => setCurrentPage(Math.min(totalPages, Math.max(1, parseInt(e.target.value, 10) || 1)))}
              className="w-12 rounded-md border border-white/20 bg-white/5 px-2 py-1 text-center text-white transition-colors focus:border-[var(--accent-gold)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)]/30"
            />
            <span className="text-white/50">/</span>
            <span className="min-w-[1.5rem]">{totalPages}</span>
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={!canNext}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main content - desktop: larger sidebar + spacious viewport */}
      <div className="flex min-h-[min(75vh,650px)] lg:min-h-[min(88vh,920px)]">
        {/* Thumbnail sidebar - wider on desktop */}
        {sidebarOpen && (
          <aside className="hidden w-20 shrink-0 border-r border-white/10 bg-black/20 sm:block sm:w-24 lg:w-36 lg:border-white/[0.08] lg:bg-gradient-to-b from-black/30 to-transparent">
            <div className="flex h-full flex-col gap-1 overflow-y-auto p-2 sm:p-3 lg:gap-2 lg:p-4">
              <span className="hidden px-1 text-[10px] font-semibold uppercase tracking-wider text-white/40 lg:block">
                Pages
              </span>
              {thumbnails.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentPage(i + 1)}
                  className={`block w-full overflow-hidden rounded-md border-2 transition-all lg:rounded-lg ${
                    currentPage === i + 1
                      ? "border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 ring-1 ring-[var(--accent-gold)]/30"
                      : "border-transparent bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Page ${i + 1}`}
                    className="h-auto w-full object-cover"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* Page viewport - no scroll on mobile, scroll on desktop */}
        <div className="flex flex-1 items-center justify-center overflow-hidden bg-[#0d0d0d] p-4 sm:overflow-auto sm:p-6 lg:bg-[linear-gradient(180deg,#111_0%,#0a0a0a_100%)] lg:p-8">
          <div
            className="transition-transform duration-200"
            style={
              fitMode === "width"
                ? {}
                : { transform: `scale(${scalePercent / 100})`, transformOrigin: "center top" }
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pageImages[currentPage - 1]}
              alt={`${name} page ${currentPage}`}
              className={`max-h-[min(70vh,600px)] w-auto rounded-lg shadow-2xl lg:max-h-[min(85vh,880px)] lg:rounded-xl lg:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] ${
                fitMode === "width" ? "min-w-0 w-full max-w-full" : "max-w-full"
              }`}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Mobile thumbnail strip - unchanged */}
      {sidebarOpen && (
        <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-black/30 p-2 sm:hidden">
          {thumbnails.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentPage(i + 1)}
              className={`h-14 w-10 shrink-0 overflow-hidden rounded border ${
                currentPage === i + 1 ? "border-[var(--accent-gold)]" : "border-white/10"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`Page ${i + 1}`} className="h-full w-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
