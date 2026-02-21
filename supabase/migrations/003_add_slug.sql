-- Add slug for /daily/{city}/{slug} (run if 001 didn't have slug)
ALTER TABLE daily_profiles ADD COLUMN IF NOT EXISTS slug TEXT;
UPDATE daily_profiles SET slug = LOWER(REGEXP_REPLACE(REGEXP_REPLACE(COALESCE(name, 'profile'), '\s+', '-', 'g'), '[^a-z0-9-]', '', 'g')) || '-' || SUBSTRING(id::text, 1, 8) WHERE slug IS NULL OR slug = '';
ALTER TABLE daily_profiles ALTER COLUMN slug SET DEFAULT 'profile';
UPDATE daily_profiles SET slug = COALESCE(NULLIF(TRIM(slug), ''), 'profile-' || SUBSTRING(id::text, 1, 8));
ALTER TABLE daily_profiles ALTER COLUMN slug SET NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS idx_daily_profiles_city_slug_unique ON daily_profiles(city_slug, slug);
