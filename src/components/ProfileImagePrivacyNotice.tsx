/**
 * Neutral notice about blurred profile images and how original images can be obtained.
 * Shown on homepage profile cards, category listing, and profile detail pages.
 */
export const PROFILE_IMAGE_PRIVACY_TEXT =
  "Profile images are shown in a blurred form to protect privacy. We can provide original images when you contact us on Telegram. To safeguard our profiles’ privacy, we share original images only with regular clients who have used our daily profile service at least five times.";

interface ProfileImagePrivacyNoticeProps {
  /** Optional: compact single-line style for cards; default is full block */
  variant?: "default" | "compact";
  className?: string;
}

export default function ProfileImagePrivacyNotice({
  variant = "default",
  className = "",
}: ProfileImagePrivacyNoticeProps) {
  if (variant === "compact") {
    return (
      <p
        className={`text-xs text-white/60 leading-relaxed ${className}`}
        title={PROFILE_IMAGE_PRIVACY_TEXT}
      >
        Images are blurred for privacy. Original images may be shared via Telegram for regular clients (5+ bookings with our daily profiles).
      </p>
    );
  }

  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 leading-relaxed ${className}`}
      role="note"
    >
      <p>{PROFILE_IMAGE_PRIVACY_TEXT}</p>
    </div>
  );
}
