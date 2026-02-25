"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

async function doLogout(router: ReturnType<typeof useRouter>) {
  const supabase = createClient();
  await supabase.auth.signOut();
  router.push("/admin/login");
  router.refresh();
}

export function LogoutButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => doLogout(router)}
      className={className ?? "rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"}
    >
      Log out
    </button>
  );
}

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") return null;
  if (pathname === "/admin") return null;

  return (
    <header className="border-b border-white/10 px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <Link href="/admin" className="text-xl font-bold text-white hover:text-white/90">
          Admin
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm text-white/60 hover:text-[var(--accent-gold)]">
            ← Site
          </Link>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
