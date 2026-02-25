"use client";

import { useState } from "react";
import Link from "next/link";

interface CategoryProfile {
  id: string;
  name: string;
  age: number;
  type: string;
  category: string;
  location: string;
  is_active: boolean;
}

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

export default function AdminCategoryProfilesTable({
  profiles,
  typeFilter,
  categoryFilter,
}: {
  profiles: CategoryProfile[];
  typeFilter?: string;
  categoryFilter?: string;
}) {
  const [localProfiles, setLocalProfiles] = useState(profiles);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function toggleActive(p: CategoryProfile) {
    try {
      const res = await fetch(
        `/api/admin/category-profiles/${encodeURIComponent(p.id)}/toggle-active?type=${p.type}&category=${p.category}`,
        { method: "POST" }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setLocalProfiles((prev) =>
        prev.map((prof) =>
          prof.id === p.id && prof.type === p.type && prof.category === p.category
            ? { ...prof, is_active: data.is_active }
            : prof
        )
      );
    } catch (e) {
      alert((e as Error).message);
    }
  }

  async function deleteProfile(p: CategoryProfile) {
    if (!confirm("Delete this profile?")) return;
    setDeleting(p.id + p.type + p.category);
    try {
      const res = await fetch(
        `/api/admin/category-profiles/${encodeURIComponent(p.id)}?type=${p.type}&category=${p.category}`,
        { method: "DELETE" }
      );
      if (!res.ok) throw new Error((await res.json()).error);
      setLocalProfiles((prev) =>
        prev.filter(
          (prof) =>
            !(prof.id === p.id && prof.type === p.type && prof.category === p.category)
        )
      );
    } catch (e) {
      alert((e as Error).message);
    } finally {
      setDeleting(null);
    }
  }

  if (localProfiles.length === 0) {
    return (
      <p className="text-white/60">
        No category profiles yet. Run seed or add profiles.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm text-left text-white/80">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Age</th>
            <th className="py-3 px-4">Type</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Location</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {localProfiles.map((p) => (
            <tr key={`${p.type}-${p.category}-${p.id}`} className="border-b border-white/5 hover:bg-white/5">
              <td className="py-3 px-4 font-medium">
                <Link
                  href={`/profiles/${p.type}/${p.category}/${p.id}`}
                  target="_blank"
                  className="text-[var(--accent-gold)] hover:underline"
                >
                  {p.name}
                </Link>
              </td>
              <td className="py-3 px-4">{p.age}</td>
              <td className="py-3 px-4">{TYPE_LABELS[p.type] ?? p.type}</td>
              <td className="py-3 px-4">{CATEGORY_LABELS[p.category] ?? p.category}</td>
              <td className="py-3 px-4">{p.location}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    p.is_active ? "bg-green-600/30 text-green-400" : "bg-red-600/30 text-red-400"
                  }`}
                >
                  {p.is_active ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="py-3 px-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/admin/category-profiles/edit/${encodeURIComponent(p.id)}?type=${p.type}&category=${p.category}`}
                    className="rounded px-2 py-1 text-xs font-medium text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/20"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => toggleActive(p)}
                    className="rounded px-2 py-1 text-xs font-medium text-white/80 hover:bg-white/10"
                  >
                    {p.is_active ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => deleteProfile(p)}
                    disabled={deleting === p.id + p.type + p.category}
                    className="rounded px-2 py-1 text-xs font-medium text-red-400 hover:bg-red-500/20 disabled:opacity-50"
                  >
                    {deleting === p.id + p.type + p.category ? "…" : "Delete"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
