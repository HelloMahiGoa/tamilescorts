import Image from "next/image";
import Link from "next/link";
import type { Profile } from "@/lib/profileData";

interface ProfileCardProps {
  profile: Profile;
  showCategory?: boolean;
}

export default function ProfileCard({ profile, showCategory = false }: ProfileCardProps) {
  const categoryLabels: Record<string, string> = {
    regular: "Regular",
    artists: "Artists",
    celebrity: "Celebrity",
    models: "Models",
    housewife: "Housewife",
    "college-girls": "College Girls",
    actress: "Actress",
  };

  return (
    <Link
      href={`/profiles/${profile.type}/${profile.category}/${profile.id}`}
      className="group relative aspect-[3/4] overflow-hidden rounded-xl border-2 border-[var(--border-color)] bg-black/50 shadow-lg transition-all duration-300 hover:border-[var(--accent-gold)] hover:shadow-xl"
    >
      <Image
        src={profile.image}
        alt={profile.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {/* Name tag: always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-3">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-white drop-shadow-sm">
            {profile.name}
          </span>
          {showCategory && (
            <span className="rounded-full bg-[var(--accent-gold)]/80 px-2 py-0.5 text-xs text-black font-semibold">
              {categoryLabels[profile.category]}
            </span>
          )}
        </div>
      </div>
      {/* Hover overlay: profile details */}
      <div className="absolute inset-0 flex flex-col justify-end bg-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex flex-1 flex-col justify-center p-4 text-center text-white">
          <p className="text-2xl font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-white/90">
            {profile.age} yrs · {profile.location}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">{profile.tagline}</p>
          <p className="mt-2 text-xs text-white/70">{profile.availability}</p>
        </div>
      </div>
    </Link>
  );
}
