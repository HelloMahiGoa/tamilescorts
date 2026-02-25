import Link from "next/link";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";
import AdminProfilesTable from "./AdminProfilesTable";
import Pagination from "@/components/Pagination";
import { LogoutButton } from "./AdminNav";

const PROFILES_PER_PAGE = 10;

interface PageProps {
  searchParams: Promise<{ city?: string; page?: string }>;
}

export default async function AdminDashboardPage({ searchParams }: PageProps) {
  const { city: cityFilter, page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(String(pageParam || "1"), 10) || 1);
  const from = (page - 1) * PROFILES_PER_PAGE;
  const to = from + PROFILES_PER_PAGE - 1;

  const supabase = createServiceRoleClient();

  const [
    { count: dailyTotal },
    { count: categoryTotal },
    { count: dailyActiveCount },
  ] = await Promise.all([
    supabase.from("daily_profiles").select("*", { count: "exact", head: true }),
    supabase.from("category_profiles").select("*", { count: "exact", head: true }).eq("is_active", true),
    supabase.from("daily_profiles").select("*", { count: "exact", head: true }).eq("is_active", true),
  ]);

  let query = supabase
    .from("daily_profiles")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (cityFilter && DAILY_PROFILE_CITIES.includes(cityFilter as (typeof DAILY_PROFILE_CITIES)[number])) {
    query = query.eq("city_slug", cityFilter);
  }

  const { data: profiles, count } = await query;
  const total = count ?? 0;
  const totalPages = Math.ceil(total / PROFILES_PER_PAGE) || 1;

  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">Admin</h1>
            <div className="flex gap-1 rounded-lg bg-white/5 p-1">
              <Link
                href="/admin"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white bg-white/10"
              >
                Daily Profiles
              </Link>
              <Link
                href="/admin/category-profiles"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5"
              >
                Category Profiles
              </Link>
            </div>
          </div>
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
            <LogoutButton />
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-8">
          <Link href="/admin" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <p className="text-2xl font-bold text-[var(--accent-gold)]">{dailyTotal ?? 0}</p>
            <p className="text-sm text-white/60">Daily Profiles</p>
          </Link>
          <Link href="/admin/category-profiles" className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors">
            <p className="text-2xl font-bold text-[var(--accent-gold)]">{categoryTotal ?? 0}</p>
            <p className="text-sm text-white/60">Category Profiles</p>
          </Link>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold text-white/90">{DAILY_PROFILE_CITIES.length}</p>
            <p className="text-sm text-white/60">Cities</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold text-white/90">{dailyActiveCount ?? 0}</p>
            <p className="text-sm text-white/60">Active (daily)</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold text-white">
            Daily Profiles ({total})
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
        {totalPages > 1 && (
          <Pagination
            baseUrl="/admin"
            currentPage={page}
            totalPages={totalPages}
            totalItems={total}
            pageSize={PROFILES_PER_PAGE}
            preserveParams={cityFilter ? { city: cityFilter } : undefined}
          />
        )}
      </section>
    </main>
  );
}
