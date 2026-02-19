import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold text-[var(--accent-maroon-deep)] sm:text-5xl">
          Profile Not Found
        </h1>
        <p className="mt-4 font-display text-lg text-[var(--text-muted)]">
          The profile you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-[var(--accent-maroon)] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--accent-maroon-deep)]"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
