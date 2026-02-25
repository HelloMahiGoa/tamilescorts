"use client";

import Link from "next/link";

interface PaginationProps {
  baseUrl: string;
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  /** Query params to preserve (e.g. city, type, category) */
  preserveParams?: Record<string, string>;
}

function buildUrl(baseUrl: string, page: number, preserveParams?: Record<string, string>): string {
  const params = new URLSearchParams(preserveParams);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `${baseUrl}?${qs}` : baseUrl;
}

export default function Pagination({
  baseUrl,
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  preserveParams = {},
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <nav
      className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
      aria-label="Pagination"
    >
      <p className="text-sm text-white/60">
        Showing <span className="font-medium text-white">{start}</span>–<span className="font-medium text-white">{end}</span> of{" "}
        <span className="font-medium text-white">{totalItems}</span>
      </p>
      <div className="flex items-center gap-2">
        {currentPage > 1 && (
          <Link
            href={buildUrl(baseUrl, currentPage - 1, preserveParams)}
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
          >
            ← Previous
          </Link>
        )}
        <span className="flex items-center gap-1">
          {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
            let p: number;
            if (totalPages <= 7) p = i + 1;
            else if (currentPage <= 4) p = i + 1;
            else if (currentPage >= totalPages - 3) p = totalPages - 6 + i;
            else p = currentPage - 3 + i;
            return p === currentPage ? (
              <span
                key={p}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-gold)] text-sm font-semibold text-black"
              >
                {p}
              </span>
            ) : (
              <Link
                key={p}
                href={buildUrl(baseUrl, p, preserveParams)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-sm font-medium text-white/80 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
              >
                {p}
              </Link>
            );
          })}
        </span>
        {currentPage < totalPages && (
          <Link
            href={buildUrl(baseUrl, currentPage + 1, preserveParams)}
            className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:border-[var(--accent-gold)]/50 hover:bg-[var(--accent-gold)]/10"
          >
            Next →
          </Link>
        )}
      </div>
    </nav>
  );
}
