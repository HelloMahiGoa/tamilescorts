"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DAILY_PROFILE_CITIES,
  CATEGORY_LABELS,
  DEFAULT_WHATSAPP,
  DEFAULT_TELEGRAM,
  DEFAULT_RATES,
  DEFAULT_AGE,
  slugify,
} from "@/lib/dailyProfiles";
import type { DailyProfileCategory } from "@/lib/dailyProfiles";

const CATEGORIES = Object.keys(CATEGORY_LABELS) as DailyProfileCategory[];

type FormValues = ReturnType<typeof getDefaultForm>;
const getDefaultForm = () => ({
  name: "",
  age: String(DEFAULT_AGE),
  category: "south-indian" as DailyProfileCategory,
  rate_1shot: String(DEFAULT_RATES.rate_1shot),
  rate_2shot: String(DEFAULT_RATES.rate_2shot),
  rate_3shot: String(DEFAULT_RATES.rate_3shot),
  rate_fullnight: String(DEFAULT_RATES.rate_fullnight),
  whatsapp: DEFAULT_WHATSAPP,
  telegram: DEFAULT_TELEGRAM,
  meta_title: "",
  meta_description: "",
});

export default function AdminUploadPage() {
  const [city, setCity] = useState<string>("chennai-escorts");
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [forms, setForms] = useState<Record<number, FormValues>>({});
  const [dragOver, setDragOver] = useState(false);

  function addFiles(newFiles: File[]) {
    const pdfs = newFiles.filter((f) => f.name.toLowerCase().endsWith(".pdf"));
    if (pdfs.length === 0) return;
    setFiles((prev) => {
      const combined = [...prev];
      pdfs.forEach((f) => {
        if (!combined.some((e) => e.name === f.name && e.size === f.size)) {
          combined.push(f);
        }
      });
      setForms((formsPrev) => {
        const next: Record<number, FormValues> = { ...formsPrev };
        combined.forEach((f, i) => {
          if (!next[i]) {
            const baseName = f.name.replace(/\.pdf$/i, "").trim();
            next[i] = { ...getDefaultForm(), name: baseName || "" };
          }
        });
        return next;
      });
      return combined;
    });
  }

  function onFilesChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files || []);
    addFiles(selected);
    (e.target as HTMLInputElement).value = "";
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files || []);
    addFiles(dropped);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(true);
  }

  function onDragLeave() {
    setDragOver(false);
  }

  function removeFile(i: number) {
    setFiles((prev) => prev.filter((_, idx) => idx !== i));
    setForms((prev) => {
      const next: Record<number, FormValues> = {};
      Object.entries(prev).forEach(([k, v]) => {
        const ki = Number(k);
        if (ki < i) next[ki] = v;
        else if (ki > i) next[ki - 1] = v;
      });
      return next;
    });
  }

  function updateForm(i: number, field: keyof FormValues, value: string) {
    setForms((prev) => ({ ...prev, [i]: { ...prev[i], [field]: value } }));
  }

  function applyToAll(field: keyof FormValues, value: string) {
    const keys = Object.keys(forms).map(Number);
    const next = { ...forms };
    keys.forEach((i) => {
      next[i] = { ...next[i], [field]: value };
    });
    setForms(next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (files.length === 0) {
      setError("Select at least one PDF");
      return;
    }
    setError(null);
    setUploading(true);
    try {
      setUploadProgress("Uploading PDFs…");
      const formData = new FormData();
      formData.append("city", city);
      files.forEach((f) => formData.append("files", f));

      const uploadRes = await fetch("/api/admin/upload-pdfs-bulk", {
        method: "POST",
        body: formData,
      });
      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) throw new Error(uploadData.error || "Bulk upload failed");

      const results = (uploadData.results as { pdfUrl: string }[]).map((r, i) => ({
        pdfUrl: r.pdfUrl,
        slug: slugify(forms[i]?.name || files[i].name.replace(/\.pdf$/i, "")),
        form: forms[i] || getDefaultForm(),
      }));

      setUploadProgress("Saving profiles…");
      const profiles = results.map(({ pdfUrl, slug, form }) => ({
        name: form.name.trim() || "Profile",
        slug,
        age: parseInt(form.age, 10) || DEFAULT_AGE,
        category: form.category,
        rate_1shot: form.rate_1shot ? parseFloat(form.rate_1shot) : DEFAULT_RATES.rate_1shot,
        rate_2shot: form.rate_2shot ? parseFloat(form.rate_2shot) : DEFAULT_RATES.rate_2shot,
        rate_3shot: form.rate_3shot ? parseFloat(form.rate_3shot) : DEFAULT_RATES.rate_3shot,
        rate_fullnight: form.rate_fullnight ? parseFloat(form.rate_fullnight) : DEFAULT_RATES.rate_fullnight,
        whatsapp: form.whatsapp.trim() || DEFAULT_WHATSAPP,
        telegram: form.telegram.trim() || DEFAULT_TELEGRAM,
        city_slug: city,
        pdf_url: pdfUrl,
        meta_title: form.meta_title.trim() || null,
        meta_description: form.meta_description.trim() || null,
      }));

      const invalid = profiles.filter((p) => !p.name || p.age < 18);
      if (invalid.length > 0) {
        throw new Error("All profiles need name and age (18+)");
      }

      const res = await fetch("/api/admin/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profiles }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      setFiles([]);
      setForms({});
      window.location.href = "/admin";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      setUploadProgress("");
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link href="/admin" className="text-[var(--accent-gold)] hover:underline">
            ← Dashboard
          </Link>
          <Link href="/admin" className="text-sm text-white/60 hover:text-white">
            Admin
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-white mb-6">Bulk PDF Upload</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white focus:border-[var(--accent-gold)] focus:outline-none"
            >
              {DAILY_PROFILE_CITIES.map((c) => (
                <option key={c} value={c}>
                  {c.replace("-escorts", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">PDF Files</label>
            <div
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              className={`rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors ${
                dragOver ? "border-[var(--accent-gold)] bg-[var(--accent-gold)]/10" : "border-white/20 bg-white/[0.02]"
              }`}
            >
              <input
                id="file-input"
                type="file"
                accept=".pdf"
                multiple
                onChange={onFilesChange}
                className="hidden"
              />
              <label
                htmlFor="file-input"
                className="cursor-pointer text-white/80 hover:text-[var(--accent-gold)] block"
              >
                <span className="font-medium">Drop PDFs here</span> or <span className="text-[var(--accent-gold)] underline">browse</span>
              </label>
              <p className="text-sm text-white/50 mt-2">Multiple files supported</p>
              {files.length > 0 && (
                <p className="text-sm text-white/70 mt-3">{files.length} file(s) selected</p>
              )}
            </div>
          </div>

          {files.length > 0 && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-white/70">Edit details per profile. Use <strong>Apply to all</strong> for shared fields.</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const cat = forms[0]?.category ?? "south-indian";
                      applyToAll("category", cat);
                    }}
                    className="rounded px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 hover:bg-white/20"
                  >
                    Apply category
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const r1 = forms[0]?.rate_1shot ?? String(DEFAULT_RATES.rate_1shot);
                      const r2 = forms[0]?.rate_2shot ?? String(DEFAULT_RATES.rate_2shot);
                      const r3 = forms[0]?.rate_3shot ?? String(DEFAULT_RATES.rate_3shot);
                      const r4 = forms[0]?.rate_fullnight ?? String(DEFAULT_RATES.rate_fullnight);
                      applyToAll("rate_1shot", r1);
                      applyToAll("rate_2shot", r2);
                      applyToAll("rate_3shot", r3);
                      applyToAll("rate_fullnight", r4);
                    }}
                    className="rounded px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 hover:bg-white/20"
                  >
                    Apply rates
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      applyToAll("whatsapp", forms[0]?.whatsapp ?? DEFAULT_WHATSAPP);
                      applyToAll("telegram", forms[0]?.telegram ?? DEFAULT_TELEGRAM);
                    }}
                    className="rounded px-3 py-1.5 text-xs font-medium bg-white/10 text-white/80 hover:bg-white/20"
                  >
                    Apply contact
                  </button>
                </div>
              </div>

              {files.map((file, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white truncate">{file.name}</h3>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="shrink-0 rounded px-2 py-1 text-xs text-red-400 hover:bg-red-500/20"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Name * (from filename)</label>
                      <input
                        value={forms[i]?.name ?? ""}
                        onChange={(e) => updateForm(i, "name", e.target.value)}
                        required
                        className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Age *</label>
                      <input
                        type="number"
                        min={18}
                        value={forms[i]?.age ?? DEFAULT_AGE}
                        onChange={(e) => updateForm(i, "age", e.target.value)}
                        className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Category</label>
                      <select
                        value={forms[i]?.category ?? "south-indian"}
                        onChange={(e) => updateForm(i, "category", e.target.value)}
                        className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <div>
                        <label className="block text-xs text-white/60 mb-1">1 shot</label>
                        <input
                          type="number"
                          value={forms[i]?.rate_1shot ?? DEFAULT_RATES.rate_1shot}
                          onChange={(e) => updateForm(i, "rate_1shot", e.target.value)}
                          className="w-full rounded border border-white/20 bg-black/50 px-2 py-1.5 text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/60 mb-1">2 shot</label>
                        <input
                          type="number"
                          value={forms[i]?.rate_2shot ?? DEFAULT_RATES.rate_2shot}
                          onChange={(e) => updateForm(i, "rate_2shot", e.target.value)}
                          className="w-full rounded border border-white/20 bg-black/50 px-2 py-1.5 text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/60 mb-1">3 shot</label>
                        <input
                          type="number"
                          value={forms[i]?.rate_3shot ?? DEFAULT_RATES.rate_3shot}
                          onChange={(e) => updateForm(i, "rate_3shot", e.target.value)}
                          className="w-full rounded border border-white/20 bg-black/50 px-2 py-1.5 text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/60 mb-1">Full night</label>
                        <input
                          type="number"
                          value={forms[i]?.rate_fullnight ?? DEFAULT_RATES.rate_fullnight}
                          onChange={(e) => updateForm(i, "rate_fullnight", e.target.value)}
                          className="w-full rounded border border-white/20 bg-black/50 px-2 py-1.5 text-white text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">WhatsApp</label>
                      <input
                        type="text"
                        value={forms[i]?.whatsapp ?? DEFAULT_WHATSAPP}
                        onChange={(e) => updateForm(i, "whatsapp", e.target.value)}
                        className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/60 mb-1">Telegram</label>
                      <input
                        type="text"
                        value={forms[i]?.telegram ?? DEFAULT_TELEGRAM}
                        onChange={(e) => updateForm(i, "telegram", e.target.value)}
                        className="w-full rounded border border-white/20 bg-black/50 px-3 py-2 text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {uploadProgress && <p className="text-[var(--accent-gold)] text-sm">{uploadProgress}</p>}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={uploading || files.length === 0}
            className="w-full rounded-lg bg-[var(--accent-gold)] px-6 py-2.5 font-semibold text-black hover:opacity-90 disabled:opacity-50"
          >
            {uploading ? "Processing…" : `Upload ${files.length || 0} PDF(s) & Save`}
          </button>
        </form>
      </section>
    </main>
  );
}
