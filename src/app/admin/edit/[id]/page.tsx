"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { DAILY_PROFILE_CITIES, CATEGORY_LABELS, DEFAULT_WHATSAPP, DEFAULT_TELEGRAM, DEFAULT_RATES } from "@/lib/dailyProfiles";
import type { DailyProfileCategory } from "@/lib/dailyProfiles";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as DailyProfileCategory[];

export default function AdminEditPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [profile, setProfile] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    age: "",
    category: "south-indian" as DailyProfileCategory,
    rate_1shot: "",
    rate_2shot: "",
    rate_3shot: "",
    rate_fullnight: "",
    whatsapp: "",
    telegram: "",
    city_slug: "",
    meta_title: "",
    meta_description: "",
  });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/admin/profiles/${id}`);
        if (res.status === 404) {
          setError("Profile not found");
          return;
        }
        const p = (await res.json()) as Record<string, unknown>;
        if (!res.ok) throw new Error((p as { error?: string }).error as string);
        setProfile(p);
        setForm({
          name: (p.name as string) || "",
          slug: (p.slug as string) || "",
          age: String(p.age ?? ""),
          category: (p.category as DailyProfileCategory) || "south-indian",
          rate_1shot: p.rate_1shot != null ? String(p.rate_1shot) : String(DEFAULT_RATES.rate_1shot),
          rate_2shot: p.rate_2shot != null ? String(p.rate_2shot) : String(DEFAULT_RATES.rate_2shot),
          rate_3shot: p.rate_3shot != null ? String(p.rate_3shot) : String(DEFAULT_RATES.rate_3shot),
          rate_fullnight: p.rate_fullnight != null ? String(p.rate_fullnight) : String(DEFAULT_RATES.rate_fullnight),
          whatsapp: (p.whatsapp as string) || DEFAULT_WHATSAPP,
          telegram: (p.telegram as string) || DEFAULT_TELEGRAM,
          city_slug: (p.city_slug as string) || "",
          meta_title: (p.meta_title as string) || "",
          meta_description: (p.meta_description as string) || "",
        });
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/profiles/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          slug: form.slug.trim(),
          age: parseInt(form.age, 10),
          category: form.category,
          rate_1shot: form.rate_1shot ? parseFloat(form.rate_1shot) : null,
          rate_2shot: form.rate_2shot ? parseFloat(form.rate_2shot) : null,
          rate_3shot: form.rate_3shot ? parseFloat(form.rate_3shot) : null,
          rate_fullnight: form.rate_fullnight ? parseFloat(form.rate_fullnight) : null,
          whatsapp: form.whatsapp.trim() || null,
          telegram: form.telegram.trim() || null,
          city_slug: form.city_slug,
          meta_title: form.meta_title.trim() || null,
          meta_description: form.meta_description.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      router.push("/admin");
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading…</div>;
  if (error && !profile) return <div className="min-h-screen bg-black flex items-center justify-center text-red-400">{error}</div>;

  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/admin" className="text-[var(--accent-gold)] hover:underline">← Dashboard</Link>
        </div>
      </header>
      <section className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-white/80 mb-1">Name *</label>
            <input value={form.name} onChange={(e) => update("name", e.target.value)} required className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Slug * (URL part)</label>
            <input value={form.slug} onChange={(e) => update("slug", e.target.value)} required className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Age *</label>
            <input type="number" min={18} value={form.age} onChange={(e) => update("age", e.target.value)} required className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Category</label>
            <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white">
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div><label className="block text-xs text-white/60 mb-1">1 shot</label><input type="number" value={form.rate_1shot} onChange={(e) => update("rate_1shot", e.target.value)} className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm" /></div>
            <div><label className="block text-xs text-white/60 mb-1">2 shot</label><input type="number" value={form.rate_2shot} onChange={(e) => update("rate_2shot", e.target.value)} className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm" /></div>
            <div><label className="block text-xs text-white/60 mb-1">3 shot</label><input type="number" value={form.rate_3shot} onChange={(e) => update("rate_3shot", e.target.value)} className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm" /></div>
            <div><label className="block text-xs text-white/60 mb-1">Full night</label><input type="number" value={form.rate_fullnight} onChange={(e) => update("rate_fullnight", e.target.value)} className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm" /></div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">WhatsApp</label>
            <input value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Telegram</label>
            <input value={form.telegram} onChange={(e) => update("telegram", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">City</label>
            <select value={form.city_slug} onChange={(e) => update("city_slug", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white">
              {DAILY_PROFILE_CITIES.map((c) => (
                <option key={c} value={c}>{c.replace("-escorts", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</option>
              ))}
            </select>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={saving} className="rounded-lg bg-[var(--accent-gold)] px-6 py-2.5 font-semibold text-black hover:opacity-90 disabled:opacity-50">
            {saving ? "Saving…" : "Save"}
          </button>
        </form>
      </section>
    </main>
  );
}
