import Link from "next/link";
import { createServiceRoleClient } from "@/lib/supabase/server";
import AdminCategoryProfilesTable from "@/components/AdminCategoryProfilesTable";
import SeedCategoryProfilesButton from "@/components/SeedCategoryProfilesButton";
import Pagination from "@/components/Pagination";

const PROFILES_PER_PAGE = 10;

const VALID_TYPES = ["tamil", "mallu", "telugu", "kannada"] as const;
const VALID_CATEGORIES = ["regular", "housewife", "college-girls", "models", "artists", "celebrity", "actress"] as const;

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

interface PageProps {
  searchParams: Promise<{ type?: string; category?: string; page?: string }>;
}

export default async function AdminCategoryProfilesPage({ searchParams }: PageProps) {
  const { type: typeFilter, category: categoryFilter, page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(String(pageParam || "1"), 10) || 1);
  const from = (page - 1) * PROFILES_PER_PAGE;
  const to = from + PROFILES_PER_PAGE - 1;

  const supabase = createServiceRoleClient();
  let query = supabase
    .from("category_profiles")
    .select("id, name, age, type, category, location, is_active", { count: "exact" })
    .order("type")
    .order("category")
    .order("id")
    .range(from, to);

  if (typeFilter && VALID_TYPES.includes(typeFilter as (typeof VALID_TYPES)[number])) {
    query = query.eq("type", typeFilter);
  }
  if (categoryFilter && VALID_CATEGORIES.includes(categoryFilter as (typeof VALID_CATEGORIES)[number])) {
    query = query.eq("category", categoryFilter);
  }

  const { data: profiles, count } = await query;
  const total = count ?? 0;
  const totalPages = Math.ceil(total / PROFILES_PER_PAGE) || 1;

  const preserveParams: Record<string, string> = {};
  if (typeFilter) preserveParams.type = typeFilter;
  if (categoryFilter) preserveParams.category = categoryFilter;

  return (
    <main className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">Admin</h1>
            <div className="flex gap-1 rounded-lg bg-white/5 p-1">
              <Link
                href="/admin"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5"
              >
                Daily Profiles
              </Link>
              <Link
                href="/admin/category-profiles"
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white bg-white/10"
              >
                Category Profiles
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin/category-profiles/new"
              className="rounded-lg bg-[var(--accent-gold)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Add Profile
            </Link>
            <Link href="/" className="text-sm text-white/60 hover:text-[var(--accent-gold)]">
              ← Site
            </Link>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-lg font-semibold text-white">
              Category Profiles ({total})
            </h2>
            <SeedCategoryProfilesButton />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/60">Type:</span>
              <div className="flex gap-1">
                <Link
                  href={`/admin/category-profiles${categoryFilter ? `?category=${categoryFilter}` : ""}`}
                  className={`rounded px-2 py-1 text-xs ${!typeFilter ? "bg-[var(--accent-gold)] text-black" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                >
                  All
                </Link>
                {VALID_TYPES.map((t) => (
                  <Link
                    key={t}
                    href={`/admin/category-profiles?type=${t}${categoryFilter ? `&category=${categoryFilter}` : ""}`}
                    className={`rounded px-2 py-1 text-xs ${typeFilter === t ? "bg-[var(--accent-gold)] text-black" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                  >
                    {TYPE_LABELS[t]}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white/60">Category:</span>
              <div className="flex flex-wrap gap-1">
                <Link
                  href={`/admin/category-profiles${typeFilter ? `?type=${typeFilter}` : ""}`}
                  className={`rounded px-2 py-1 text-xs ${!categoryFilter ? "bg-[var(--accent-gold)] text-black" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                >
                  All
                </Link>
                {VALID_CATEGORIES.map((c) => (
                  <Link
                    key={c}
                    href={`/admin/category-profiles?category=${c}${typeFilter ? `&type=${typeFilter}` : ""}`}
                    className={`rounded px-2 py-1 text-xs ${categoryFilter === c ? "bg-[var(--accent-gold)] text-black" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
                  >
                    {CATEGORY_LABELS[c]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <AdminCategoryProfilesTable
          profiles={(profiles ?? []) as { id: string; name: string; age: number; type: string; category: string; location: string; is_active: boolean }[]}
          typeFilter={typeFilter}
          categoryFilter={categoryFilter}
        />
        {totalPages > 1 && (
          <Pagination
            baseUrl="/admin/category-profiles"
            currentPage={page}
            totalPages={totalPages}
            totalItems={total}
            pageSize={PROFILES_PER_PAGE}
            preserveParams={Object.keys(preserveParams).length > 0 ? preserveParams : undefined}
          />
        )}
      </section>
    </main>
  );
}
