"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/admin";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    router.push(redirect);
    router.refresh();
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
          <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-white/60 text-sm mb-6">
            Sign in to manage daily profiles
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[var(--accent-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)]"
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-white/20 bg-black/50 px-4 py-2.5 text-white placeholder:text-white/40 focus:border-[var(--accent-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)]"
              />
            </div>
            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[var(--accent-gold)] px-4 py-2.5 font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-white/50">
            <Link href="/" className="text-[var(--accent-gold)] hover:underline">
              ← Back to site
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent-gold)] border-t-transparent" />
      </main>
    }>
      <AdminLoginForm />
    </Suspense>
  );
}
