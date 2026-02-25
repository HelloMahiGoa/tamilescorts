"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TYPE_LABELS: Record<string, string> = {
  tamil: "Tamil",
  mallu: "Mallu",
  telugu: "Telugu",
  kannada: "Kannada",
};

const CATEGORY_LABELS: Record<string, string> = {
  regular: "Regular",
  housewife: "Housewife",
  "college-girls": "College Girls",
  models: "Models",
  artists: "Artists",
  celebrity: "Celebrity",
  actress: "Actress",
};

const CITIES = [
  "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem",
  "Kochi", "Kozhikode", "Thrissur", "Kannur",
  "Hyderabad", "Visakhapatnam", "Warangal", "Guntur",
  "Bangalore", "Hubli", "Mangalore", "Belgaum",
] as const;

const AVAILABILITY_OPTIONS = ["Available", "Busy", "Advance booking"] as const;

const INDIAN_LANGUAGES = [
  "Tamil", "Telugu", "Malayalam", "Kannada", "Hindi", "English",
] as const;

const SERVICE_OPTIONS = [
  "Dinner Dates", "Social Events", "Travel Companion", "Conversation",
  "Cultural Events", "Art Shows", "Music Concerts", "Creative Discussions",
  "High-Profile Events", "Private Meetings", "Discreet Companionship",
  "Fashion Events", "Photoshoots", "Social Gatherings", "Red Carpet",
  "Mature Companionship", "Discreet Meetings", "Emotional Support",
  "Casual Outings", "Nightlife", "Adventure Activities",
  "Events", "Private Evenings", "Entertainment",
] as const;

function toArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.filter((x) => typeof x === "string");
  if (typeof val === "string" && val.trim()) {
    const s = val.trim();
    if (s.startsWith("[")) try { return (JSON.parse(s) as unknown[]).filter((x): x is string => typeof x === "string"); } catch { /* fallback */ }
    return s.split(/[,;\n]/).map((x) => x.trim()).filter(Boolean);
  }
  return [];
}

function ensureAbsoluteUrl(url: string): string {
  if (!url || typeof url !== "string") return "";
  const u = url.trim();
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  return base ? `${base.replace(/\/$/, "")}${u.startsWith("/") ? u : `/${u}`}` : u;
}

export default function AdminCategoryProfileEditForm({
  profile,
  type,
  category,
}: {
  profile: Record<string, unknown>;
  type: string;
  category: string;
}) {
  const router = useRouter();
  const mainImageInput = useRef<HTMLInputElement>(null);
  const galleryInput = useRef<HTMLInputElement>(null);
  const videoInput = useRef<HTMLInputElement>(null);

  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: (profile.name as string) ?? "",
    age: String(profile.age ?? ""),
    location: (profile.location as string) ?? "Chennai",
    tagline: (profile.tagline as string) ?? "",
    bio: (profile.bio as string) ?? "",
    image: (profile.image as string) ?? "",
    images: toArray(profile.images),
    videos: toArray(profile.videos),
    instagram: (profile.instagram as string) ?? "",
    availability: (["Available", "Busy", "Advance booking"].includes((profile.availability as string) ?? "")
      ? (profile.availability as string)
      : "Available") as (typeof AVAILABILITY_OPTIONS)[number],
    languages: toArray(profile.languages),
    services: toArray(profile.services),
    telegram: (profile.telegram as string) ?? "",
    verified: Boolean(profile.verified),
    response_time: (profile.response_time as string) ?? "",
    rating: profile.rating != null ? String(profile.rating) : "",
    review_count: profile.review_count != null ? String(profile.review_count) : "",
    price_hourly: profile.price_hourly != null ? String(profile.price_hourly) : "",
    price_overnight: profile.price_overnight != null ? String(profile.price_overnight) : "",
    price_extended: profile.price_extended != null ? String(profile.price_extended) : "",
    is_active: Boolean(profile.is_active),
  });

  function update<K extends keyof typeof form>(field: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function uploadFile(file: File, kind: "main" | "gallery" | "video") {
    setUploading(kind);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload-category-media", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      if (kind === "main") update("image", data.url);
      else if (kind === "gallery") setForm((p) => ({ ...p, images: [...p.images, data.url] }));
      else setForm((p) => ({ ...p, videos: [...p.videos, data.url] }));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setUploading(null);
    }
  }

  function toggleLanguage(lang: string) {
    setForm((prev) => ({
      ...prev,
      languages: prev.languages.includes(lang) ? prev.languages.filter((l) => l !== lang) : [...prev.languages, lang],
    }));
  }

  function toggleService(svc: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc) ? prev.services.filter((s) => s !== svc) : [...prev.services, svc],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaving(true);
    try {
      const payload = {
        name: form.name.trim(),
        age: parseInt(form.age, 10),
        location: form.location.trim(),
        tagline: form.tagline.trim(),
        bio: form.bio.trim(),
        image: form.image.trim(),
        images: form.images,
        videos: form.videos,
        instagram: form.instagram.trim() || null,
        availability: form.availability,
        languages: form.languages,
        services: form.services.length ? form.services : null,
        telegram: form.telegram.trim(),
        verified: form.verified,
        response_time: form.response_time.trim() || null,
        rating: form.rating ? parseFloat(form.rating) : null,
        review_count: form.review_count ? parseInt(form.review_count, 10) : null,
        price_hourly: form.price_hourly ? parseFloat(form.price_hourly) : null,
        price_overnight: form.price_overnight ? parseFloat(form.price_overnight) : null,
        price_extended: form.price_extended ? parseFloat(form.price_extended) : null,
        is_active: form.is_active,
      };
      const res = await fetch(
        `/api/admin/category-profiles/${encodeURIComponent(profile.id as string)}?type=${type}&category=${category}`,
        { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Update failed");
      router.push(`/admin/category-profiles?type=${type}&category=${category}`);
      router.refresh();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  const id = profile.id as string;

  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href={`/admin/category-profiles?type=${type}&category=${category}`} className="text-[var(--accent-gold)] hover:underline">
            ← Category Profiles
          </Link>
          <Link href={`/profiles/${type}/${category}/${id}`} target="_blank" className="text-sm text-white/60 hover:text-[var(--accent-gold)]">
            View profile →
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white mb-2">Edit Profile: {form.name}</h1>
        <p className="text-sm text-white/60 mb-6">{TYPE_LABELS[type]} / {CATEGORY_LABELS[category]} / {id}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Name *</label>
              <input value={form.name} onChange={(e) => update("name", e.target.value)} required className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Age *</label>
              <input type="number" min={18} value={form.age} onChange={(e) => update("age", e.target.value)} required className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Location *</label>
            <select value={form.location} onChange={(e) => update("location", e.target.value)} required className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white">
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Tagline</label>
            <input value={form.tagline} onChange={(e) => update("tagline", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Bio</label>
            <textarea value={form.bio} onChange={(e) => update("bio", e.target.value)} rows={4} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
          </div>

          <div>
            <label className="block text-sm text-white/80 mb-1">Main image</label>
            <input ref={mainImageInput} type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f, "main"); e.target.value = ""; }} />
            <div className="flex flex-col gap-3">
              <button type="button" onClick={() => mainImageInput.current?.click()} disabled={!!uploading} className="w-fit rounded-lg border border-dashed border-white/30 px-4 py-2 text-sm text-white/80 hover:bg-white/5 disabled:opacity-50">
                {uploading === "main" ? "Uploading…" : "Upload image"}
              </button>
              {form.image && (
                <div className="relative inline-block w-40">
                  <img src={ensureAbsoluteUrl(form.image)} alt="Main preview" className="aspect-[3/4] w-full rounded-lg border border-white/20 object-cover" referrerPolicy="no-referrer" />
                  <button type="button" onClick={() => update("image", "")} className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500">×</button>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Gallery images</label>
            <input ref={galleryInput} type="file" accept="image/jpeg,image/png,image/webp,image/avif" multiple className="hidden" onChange={(e) => { Array.from(e.target.files || []).forEach((f) => uploadFile(f, "gallery")); e.target.value = ""; }} />
            <div className="space-y-3">
              <button type="button" onClick={() => galleryInput.current?.click()} disabled={!!uploading} className="rounded-lg border border-dashed border-white/30 px-4 py-2 text-sm text-white/80 hover:bg-white/5 disabled:opacity-50">
                {uploading === "gallery" ? "Uploading…" : "Upload gallery"}
              </button>
              <div className="flex flex-wrap gap-3">
                {form.images.map((url, i) => (
                  <div key={i} className="relative w-24">
                    <img src={ensureAbsoluteUrl(url)} alt={`Gallery ${i + 1}`} className="aspect-[3/4] w-full rounded-lg border border-white/20 object-cover" referrerPolicy="no-referrer" />
                    <button type="button" onClick={() => setForm((p) => ({ ...p, images: p.images.filter((_, j) => j !== i) }))} className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white hover:bg-red-500">×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Videos</label>
            <input ref={videoInput} type="file" accept="video/mp4,video/webm" multiple className="hidden" onChange={(e) => { Array.from(e.target.files || []).forEach((f) => uploadFile(f, "video")); e.target.value = ""; }} />
            <div className="space-y-3">
              <button type="button" onClick={() => videoInput.current?.click()} disabled={!!uploading} className="rounded-lg border border-dashed border-white/30 px-4 py-2 text-sm text-white/80 hover:bg-white/5 disabled:opacity-50">
                {uploading === "video" ? "Uploading…" : "Upload video"}
              </button>
              <div className="flex flex-wrap gap-3">
                {form.videos.map((url, i) => (
                  <div key={i} className="relative w-40">
                    <video src={ensureAbsoluteUrl(url)} controls className="aspect-video w-full rounded-lg border border-white/20 bg-black" />
                    <button type="button" onClick={() => setForm((p) => ({ ...p, videos: p.videos.filter((_, j) => j !== i) }))} className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white hover:bg-red-500">×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Instagram</label>
              <input value={form.instagram} onChange={(e) => update("instagram", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Telegram</label>
              <input value={form.telegram} onChange={(e) => update("telegram", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Availability</label>
            <select value={form.availability} onChange={(e) => update("availability", e.target.value as (typeof AVAILABILITY_OPTIONS)[number])} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white">
              {AVAILABILITY_OPTIONS.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Languages (multi-select)</label>
            <div className="flex flex-wrap gap-2">
              {INDIAN_LANGUAGES.map((lang) => (
                <label key={lang} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.languages.includes(lang)} onChange={() => toggleLanguage(lang)} className="rounded" />
                  <span className="text-sm text-white/80">{lang}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-1">Services (multi-select)</label>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto rounded border border-white/10 p-2">
              {SERVICE_OPTIONS.map((svc) => (
                <label key={svc} className="flex items-center gap-2 cursor-pointer flex-shrink-0">
                  <input type="checkbox" checked={form.services.includes(svc)} onChange={() => toggleService(svc)} className="rounded" />
                  <span className="text-xs text-white/80">{svc}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Response time</label>
              <input value={form.response_time} onChange={(e) => update("response_time", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Rating</label>
              <input type="number" step="0.01" min={0} max={5} value={form.rating} onChange={(e) => update("rating", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Review count</label>
              <input type="number" min={0} value={form.review_count} onChange={(e) => update("review_count", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Price hourly</label>
              <input type="number" value={form.price_hourly} onChange={(e) => update("price_hourly", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Price overnight</label>
              <input type="number" value={form.price_overnight} onChange={(e) => update("price_overnight", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Price extended</label>
              <input type="number" value={form.price_extended} onChange={(e) => update("price_extended", e.target.value)} className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="verified" checked={form.verified} onChange={(e) => update("verified", e.target.checked)} className="rounded" />
              <label htmlFor="verified" className="text-sm text-white/80">Verified</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="is_active" checked={form.is_active} onChange={(e) => update("is_active", e.target.checked)} className="rounded" />
              <label htmlFor="is_active" className="text-sm text-white/80">Active</label>
            </div>
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
