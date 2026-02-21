"use client";

interface PdfThumbnailProps {
  pdfUrl: string;
  alt: string;
  className?: string;
}

export default function PdfThumbnail({ pdfUrl, alt, className = "" }: PdfThumbnailProps) {
  const proxyUrl = `/api/pdf-proxy?url=${encodeURIComponent(pdfUrl)}`;

  return (
    <iframe
      src={`${proxyUrl}#toolbar=0&navpanes=0`}
      title={alt}
      className={className}
      loading="lazy"
    />
  );
}
