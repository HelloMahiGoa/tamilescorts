import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { CATEGORY_LABELS, DAILY_PROFILE_CITIES } from "@/lib/dailyProfiles";
import type { DailyProfile } from "@/lib/dailyProfiles";
import PdfViewer from "@/components/PdfViewer";

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function isUuid(s: string): boolean {
  return UUID_REGEX.test(s);
}

interface PageProps {
  params: Promise<{ params?: string[] }>;
}

function formatRate(amount: number | null): string {
  if (amount == null) return "—";
  return `₹${Number(amount).toLocaleString()}`;
}

export async function generateMetadata({ params }: PageProps) {
  const { params: segments } = await params;
  if (!segments || segments.length !== 2) return { title: "Profile" };
  const [city, slug] = segments;
  const supabase = createServiceRoleClient();
  const { data } = await supabase
    .from("daily_profiles")
    .select("name, meta_title, meta_description")
    .eq("city_slug", city)
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (!data) return { title: "Profile" };
  return {
    title: data.meta_title || `${data.name} | Daily Available`,
    description: data.meta_description || `${data.name} - Available today. Contact us to book.`,
  };
}

export default async function DailyPage({ params }: PageProps) {
  const { params: segments } = await params;

  // /daily (no segments) -> redirect home
  if (!segments || segments.length === 0) {
    redirect("/");
  }

  // /daily/[id] (1 segment, UUID) -> legacy redirect to /daily/city/slug
  if (segments.length === 1) {
    const id = segments[0];
    if (!isUuid(id)) notFound();
    const supabase = createServiceRoleClient();
    const { data } = await supabase
      .from("daily_profiles")
      .select("city_slug, slug")
      .eq("id", id)
      .eq("is_active", true)
      .single();

    if (data?.city_slug && data?.slug) {
      redirect(`/daily/${data.city_slug}/${data.slug}`);
    }
    redirect("/");
  }

  // /daily/[city]/[slug] (2 segments) -> profile page
  if (segments.length !== 2) notFound();
  const [city, slug] = segments;

  if (!DAILY_PROFILE_CITIES.includes(city as (typeof DAILY_PROFILE_CITIES)[number])) {
    notFound();
  }
  const supabase = createServiceRoleClient();
  const { data: profile, error } = await supabase
    .from("daily_profiles")
    .select("*")
    .eq("city_slug", city)
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error || !profile) notFound();

  const p = profile as DailyProfile & { slug: string };
  const categoryLabel = CATEGORY_LABELS[p.category as keyof typeof CATEGORY_LABELS] ?? p.category;
  const cityName = city
    .replace("-escorts", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="min-h-screen bg-black">
      <div className="kolam-border h-2 w-full" />
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href={`/${city}`}
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[var(--accent-gold)] mb-8 transition-colors"
        >
          <span aria-hidden>←</span> {cityName} Escorts
        </Link>

        <div className="grid gap-10 lg:grid-cols-12">
          {p.image_url && (
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={p.image_url}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  unoptimized
                />
              </div>
            </div>
          )}
          <div className={p.image_url ? "lg:col-span-8 space-y-8" : "lg:col-span-12 space-y-8"}>
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full bg-[var(--accent-gold)]/90 px-4 py-1.5 text-sm font-semibold text-black mb-3">
                  {categoryLabel}
                </span>
                <h1 className="text-4xl font-bold text-white tracking-tight">{p.name}</h1>
                <p className="mt-2 text-lg text-white/80">{p.age} years · {cityName}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {p.whatsapp && (
                  <a
                    href={`https://wa.me/${p.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-green-500"
                  >
                    WhatsApp
                  </a>
                )}
                {p.telegram && (
                  <a
                    href={p.telegram.startsWith("http") ? p.telegram : `https://t.me/${p.telegram.replace("@", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0088cc] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#0077b5]"
                  >
                    Telegram
                  </a>
                )}
              </div>
            </header>

            {p.pdf_url && (
              <section>
                <PdfViewer pdfUrl={p.pdf_url} name={p.name} />
              </section>
            )}

            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-gold)] mb-4">
                Rates
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-white/70">1 shot</span>
                  <span className="font-semibold text-white">{formatRate(p.rate_1shot)}</span>
                </div>
                <div className="flex justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-white/70">2 shot</span>
                  <span className="font-semibold text-white">{formatRate(p.rate_2shot)}</span>
                </div>
                <div className="flex justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-white/70">3 shot</span>
                  <span className="font-semibold text-white">{formatRate(p.rate_3shot)}</span>
                </div>
                <div className="flex justify-between rounded-lg bg-white/5 px-4 py-3">
                  <span className="text-white/70">Full night</span>
                  <span className="font-semibold text-white">{formatRate(p.rate_fullnight)}</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
