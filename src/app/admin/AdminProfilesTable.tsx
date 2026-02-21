"use client";

import { useState } from "react";
import Link from "next/link";

interface Profile {
  id: string;
  name: string;
  slug: string;
  age: number;
  category: string;
  city_slug: string;
  is_active: boolean;
  created_at: string;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

export default function AdminProfilesTable({ profiles }: { profiles: Profile[] }) {
  const [localProfiles, setLocalProfiles] = useState(profiles);
  const [editing, setEditing] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function toggleActive(id: string) {
    try {
      const res = await fetch(`/api/admin/profiles/${id}/toggle-active`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setLocalProfiles((prev) =>
        prev.map((p) => (p.id === id ? { ...p, is_active: data.is_active } : p))
      );
    } catch (e) {
      alert((e as Error).message);
    }
  }

  async function deleteProfile(id: string) {
    if (!confirm("Delete this profile?")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/admin/profiles/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error((await res.json()).error);
      setLocalProfiles((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      alert((e as Error).message);
    } finally {
      setDeleting(null);
    }
  }

  if (localProfiles.length === 0) {
    return (
      <p className="text-white/60">No profiles yet. Upload PDFs to get started.</p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm text-left text-white/80">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Age</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">City</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Created</th>
            <th className="py-3 px-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {localProfiles.map((p) => (
            <tr key={p.id} className="border-b border-white/5 hover:bg-white/5">
              <td className="py-3 px-4 font-medium">
                <Link
                  href={`/daily/${p.city_slug}/${p.slug}`}
                  target="_blank"
                  className="text-[var(--accent-gold)] hover:underline"
                >
                  {p.name}
                </Link>
              </td>
              <td className="py-3 px-4">{p.age}</td>
              <td className="py-3 px-4">{p.category}</td>
              <td className="py-3 px-4">{p.city_slug.replace("-escorts", "")}</td>
              <td className="py-3 px-4">
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    p.is_active ? "bg-green-600/30 text-green-400" : "bg-red-600/30 text-red-400"
                  }`}
                >
                  {p.is_active ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="py-3 px-4 text-white/60">
                {formatDate(p.created_at)}
              </td>
              <td className="py-3 px-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/admin/edit/${p.id}`}
                    className="rounded px-2 py-1 text-xs font-medium text-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/20"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => toggleActive(p.id)}
                    disabled={editing === p.id}
                    className="rounded px-2 py-1 text-xs font-medium text-white/80 hover:bg-white/10 disabled:opacity-50"
                  >
                    {p.is_active ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => deleteProfile(p.id)}
                    disabled={deleting === p.id}
                    className="rounded px-2 py-1 text-xs font-medium text-red-400 hover:bg-red-500/20 disabled:opacity-50"
                  >
                    {deleting === p.id ? "…" : "Delete"}
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
