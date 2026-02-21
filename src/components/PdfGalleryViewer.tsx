"use client";

import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Use worker matching react-pdf's pdfjs version (avoids version mismatch)
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface PdfGalleryViewerProps {
  url: string;
  className?: string;
  containerClassName?: string;
}

function getProxyUrl(url: string): string {
  if (typeof window === "undefined") return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("supabase")) {
      return `/api/pdf-proxy?url=${encodeURIComponent(url)}`;
    }
  } catch {
    /* ignore */
  }
  return url;
}

export function PdfGalleryViewer({ url, className = "", containerClassName = "" }: PdfGalleryViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(400);
  const containerRef = useRef<HTMLDivElement>(null);

  const src = getProxyUrl(url);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => {
      const w = el.offsetWidth || el.clientWidth || window.innerWidth;
      setContainerWidth(w);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onDocumentLoadSuccess = ({ numPages: n }: { numPages: number }) => {
    setNumPages(n);
  };

  return (
    <div ref={containerRef} className={`w-full min-w-0 overflow-y-auto ${containerClassName}`}>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className="flex items-center justify-center py-16 text-white/60">
            <span className="animate-pulse">Loading gallery…</span>
          </div>
        }
        error={
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-white/60">
            <span>Could not load PDF</span>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent-gold)] underline hover:no-underline"
            >
              Open in new tab
            </a>
          </div>
        }
        className={className}
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={containerWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="!mb-4 last:!mb-0 shadow-lg"
          />
        ))}
      </Document>
    </div>
  );
}
