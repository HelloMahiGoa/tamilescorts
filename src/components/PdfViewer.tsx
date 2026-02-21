"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

interface PdfViewerProps {
  pdfUrl: string;
  name: string;
}

export default function PdfViewer({ pdfUrl, name }: PdfViewerProps) {
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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

      for (let i = 1; i <= num; i++) {
        const page = await pdf.getPage(i);
        const fullVp = page.getViewport({ scale: 2 });
        const fullCanvas = document.createElement("canvas");
        fullCanvas.width = fullVp.width;
        fullCanvas.height = fullVp.height;
        const fullCtx = fullCanvas.getContext("2d");
        if (fullCtx) {
          await page.render({ canvas: fullCanvas, canvasContext: fullCtx, viewport: fullVp }).promise;
          fullImages.push(fullCanvas.toDataURL("image/jpeg", 0.9));
        }
      }

      setPageImages(fullImages);
    } catch {
      setUseFallback(true);
    } finally {
      setLoading(false);
    }
  }, [pdfUrl]);

  useEffect(() => {
    loadPdf();
  }, [loadPdf]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (useFallback) {
    return (
      <section className="rounded-2xl border border-white/10 overflow-hidden sm:rounded-3xl lg:max-w-5xl">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
          <span className="text-xs font-medium uppercase tracking-wider text-white/50">Gallery</span>
        </div>
        <div className="h-[min(85vh,700px)] lg:h-[min(88vh,900px)]">
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
      <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 sm:rounded-3xl">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-2 border-amber-500/40 border-t-amber-400" />
          <p className="text-sm text-white/60">Loading gallery…</p>
        </div>
      </div>
    );
  }

  if (pageImages.length === 0) return null;

  const totalPages = pageImages.length;

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl sm:rounded-3xl lg:max-w-5xl">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-1 w-10 rounded-full bg-amber-500/60" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Profile Gallery</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white/80">
            {activeIndex + 1} / {totalPages}
          </span>
        </div>
      </div>

      {/* Main Swiper - full bleed on mobile, contained on desktop */}
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => { mainSwiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Pagination, Thumbs]}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : undefined }}
          spaceBetween={0}
          slidesPerView={1}
          loop={totalPages > 1}
          pagination={{
            type: isMobile ? "progressbar" : "bullets",
            progressbarFillClass: "swiper-pagination-progressbar-fill !bg-amber-500",
            bulletClass: "swiper-pagination-bullet !bg-white/30 !opacity-100",
            bulletActiveClass: "!bg-amber-500 !w-8",
          }}
          navigation={{
            prevEl: ".pdf-viewer-prev",
            nextEl: ".pdf-viewer-next",
          }}
          className="pdf-gallery-swiper !overflow-hidden"
        >
          {pageImages.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center min-h-[min(75vh,650px)] sm:min-h-[min(80vh,750px)] lg:min-h-[min(85vh,900px)] bg-black/80 p-4 sm:p-6 lg:p-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${name} – page ${i + 1}`}
                  className="max-h-[min(72vh,600px)] sm:max-h-[min(78vh,720px)] lg:max-h-[min(82vh,860px)] w-auto rounded-xl object-contain shadow-2xl"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav arrows */}
        {totalPages > 1 && (
          <>
            <button
              type="button"
              onClick={() => mainSwiperRef.current?.slidePrev()}
              className="pdf-viewer-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:border-amber-500/50 hover:bg-amber-500/20 sm:left-4"
              aria-label="Previous page"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => mainSwiperRef.current?.slideNext()}
              className="pdf-viewer-next absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-all hover:border-amber-500/50 hover:bg-amber-500/20 sm:right-4"
              aria-label="Next page"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip - desktop only */}
      {totalPages > 1 && !isMobile && (
        <div className="border-t border-white/10 bg-black/40 p-3 sm:p-4">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView="auto"
            watchSlidesProgress
            freeMode
            className="!overflow-visible"
          >
            {pageImages.map((src, i) => (
              <SwiperSlide
                key={i}
                className="!w-16 !h-20 sm:!w-20 sm:!h-24 cursor-pointer rounded-lg overflow-hidden border-2 transition-all"
                style={{
                  borderColor: activeIndex === i ? "rgba(245, 158, 11, 0.7)" : "rgba(255,255,255,0.1)",
                  opacity: activeIndex === i ? 1 : 0.6,
                }}
                onClick={() => mainSwiperRef.current?.slideTo(i)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Page ${i + 1}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Mobile: dot pagination */}
      {totalPages > 1 && isMobile && (
        <div className="border-t border-white/10 bg-black/30 px-4 py-3">
          <div className="flex justify-center gap-2">
            {pageImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => mainSwiperRef.current?.slideTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === i ? "w-6 bg-amber-500" : "w-1.5 bg-white/30"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
