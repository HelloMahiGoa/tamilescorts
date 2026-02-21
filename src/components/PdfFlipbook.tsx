"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HTMLFlipBook = dynamic(
  () => import("react-pageflip").then((mod) => mod.default),
  { ssr: false }
);

interface PdfFlipbookProps {
  pdfUrl: string;
  name: string;
}

export default function PdfFlipbook({ pdfUrl, name }: PdfFlipbookProps) {
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);
  const bookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void } } | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPdf() {
      try {
        setLoading(true);
        setError(null);
        setUseFallback(false);

        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.mjs`;

        const res = await fetch(pdfUrl);
        const arrayBuffer = await res.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const numPages = pdf.numPages;
        const images: string[] = [];

        const scale = 2;
        for (let i = 1; i <= numPages; i++) {
          if (cancelled) return;
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          await page.render({ canvas, canvasContext: ctx, viewport }).promise;
          images.push(canvas.toDataURL("image/jpeg", 0.9));
        }

        if (!cancelled) setPageImages(images);
      } catch (err) {
        if (!cancelled) {
          // Fallback to iframe on pdfjs errors (e.g. hashOriginal.toHex, worker mismatch)
          setUseFallback(true);
          setError(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPdf();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  if (useFallback) {
    return (
      <section className="rounded-2xl border border-white/10 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="h-1 w-8 rounded-full bg-[var(--accent-gold)]" aria-hidden />
          <span className="text-xs font-medium uppercase tracking-wider text-white/50">Gallery</span>
        </div>
        <div className="h-[min(85vh,700px)] bg-black/40">
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
      <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent-gold)] border-t-transparent" />
          <p className="text-sm text-white/60">Loading flipbook…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center">
        <p className="text-red-400">{error}</p>
        <p className="mt-2 text-sm text-white/50">Try opening the profile again or check your connection.</p>
      </div>
    );
  }

  if (pageImages.length === 0) {
    return null;
  }

  const width = 320;
  const height = Math.min(480, width * (4 / 3));

  return (
    <section className="rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-2 py-4">
        <span className="text-xs font-medium uppercase tracking-wider text-white/50">Gallery · {pageImages.length} pages</span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => bookRef.current?.pageFlip?.()?.flipPrev?.()}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => bookRef.current?.pageFlip?.()?.flipNext?.()}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
          >
            Next →
          </button>
        </div>
      </div>
      <div className="flex justify-center bg-black/40 py-6 sm:py-8">
        <div className="[&_.stf__wrapper]:!bg-transparent [&_.stf__item]:!bg-transparent [&_.stf__item]:!shadow-none">
          <HTMLFlipBook
            ref={bookRef}
            width={width}
            height={height}
            size="fixed"
            minWidth={width}
            maxWidth={width}
            minHeight={height}
            maxHeight={height}
            startPage={0}
            startZIndex={0}
            autoSize={false}
            maxShadowOpacity={1}
            drawShadow
            flippingTime={600}
            usePortrait
            showCover
            mobileScrollSupport={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            className=""
            style={{}}
          >
            {pageImages.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-black"
                style={{ width, height }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${name} page ${i + 1}`}
                  className="h-full w-full object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </section>
  );
}
