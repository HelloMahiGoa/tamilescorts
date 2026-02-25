"use client";

import { useState } from "react";

export default function SeedCategoryProfilesButton() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSeed() {
    if (!confirm("Seed 224 category profiles from static data? This will upsert existing rows.")) return;
    setLoading(true);
    setError(null);
    setDone(false);
    try {
      const res = await fetch("/api/admin/seed-category-profiles", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Seed failed");
      setDone(true);
      window.location.reload();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleSeed}
        disabled={loading}
        className="rounded-lg border border-[var(--accent-gold)]/50 px-4 py-2 text-sm font-medium text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/10 disabled:opacity-50"
      >
        {loading ? "Seeding…" : "Seed Category Profiles"}
      </button>
      {done && <span className="text-xs text-green-400">Done</span>}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
