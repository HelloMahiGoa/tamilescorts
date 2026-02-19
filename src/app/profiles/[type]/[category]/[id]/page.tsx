import { notFound } from "next/navigation";
import ProfileDetailClient from "@/components/ProfileDetailClient";
import {
  getProfileById,
  getRelatedProfiles,
  type EscortType,
  type Category,
} from "@/lib/profileData";

const TYPE_LABELS: Record<EscortType, string> = {
  tamil: "Tamil Escorts",
  mallu: "Mallu Escorts",
  telugu: "Telugu Escorts",
  kannada: "Kannada Escorts",
};

const CATEGORY_LABELS: Record<Category, string> = {
  regular: "Regular",
  artists: "Artists",
  celebrity: "Celebrity",
  models: "Models",
  housewife: "Housewife",
  "college-girls": "College Girls",
  actress: "Actress",
};

interface PageProps {
  params: Promise<{ type: string; category: string; id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const profile = getProfileById(id);

  if (!profile) {
    return {
      title: "Profile Not Found | Tamil Escorts",
    };
  }

  return {
    title: `${profile.name} - ${CATEGORY_LABELS[profile.category]} ${TYPE_LABELS[profile.type]} | Tamil Escorts`,
    description: profile.tagline,
  };
}

export default async function ProfileDetailPage({ params }: PageProps) {
  const { id } = await params;
  const profile = getProfileById(id);

  if (!profile) {
    notFound();
  }

  const relatedProfiles = getRelatedProfiles(profile, 4);

  return <ProfileDetailClient profile={profile} relatedProfiles={relatedProfiles} />;
}
