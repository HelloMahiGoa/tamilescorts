import Link from "next/link";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";
import AdminProfilesTable from "./AdminProfilesTable";

interface PageProps {
  searchParams: Promise<{ city?: string }>;
}

export default async function AdminDashboardPage({ searchParams }: PageProps) {
  const { city: cityFilter } = await searchParams;
  const supabase = createServiceRoleClient();
  let query = supabase
    .from("daily_profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);
  if (cityFilter && DAILY_PROFILE_CITIES.includes(cityFilter as (typeof DAILY_PROFILE_CITIES)[number])) {
    query = query.eq("city_slug", cityFilter);
  }
  const { data: profiles } = await query;

  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Admin</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/upload"
              className="rounded-lg bg-[var(--accent-gold)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Upload Profiles
            </Link>
            <Link href="/" className="text-sm text-white/60 hover:text-[var(--accent-gold)]">
              ← Site
            </Link>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold text-white">
            Daily Profiles ({profiles?.length ?? 0})
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/60">Filter by city:</span>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/admin"
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  !cityFilter
                    ? "bg-[var(--accent-gold)] text-black"
                    : "bg-white/10 text-white/80 hover:bg-white/20"
                }`}
              >
                All
              </Link>
              {DAILY_PROFILE_CITIES.map((c) => (
                <Link
                  key={c}
                  href={`/admin?city=${encodeURIComponent(c)}`}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    cityFilter === c
                      ? "bg-[var(--accent-gold)] text-black"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {c.replace("-escorts", "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <AdminProfilesTable profiles={profiles ?? []} />
      </section>
    </main>
  );
}
