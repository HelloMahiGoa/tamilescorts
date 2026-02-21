-- Run this in Supabase SQL Editor: Dashboard -> SQL Editor -> New query -> paste and run
-- Daily profiles table
CREATE TABLE IF NOT EXISTS daily_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('russian', 'college-girl', 'housewife', 'model', 'celebrity', 'south-indian')),
  rate_1shot NUMERIC,
  rate_2shot NUMERIC,
  rate_3shot NUMERIC,
  rate_fullnight NUMERIC,
  whatsapp TEXT,
  telegram TEXT,
  city_slug TEXT NOT NULL,
  slug TEXT NOT NULL,
  image_url TEXT,
  pdf_url TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for city-based queries
CREATE INDEX IF NOT EXISTS idx_daily_profiles_city_slug ON daily_profiles(city_slug);
CREATE INDEX IF NOT EXISTS idx_daily_profiles_is_active ON daily_profiles(is_active);
CREATE UNIQUE INDEX IF NOT EXISTS idx_daily_profiles_city_slug_unique ON daily_profiles(city_slug, slug);

-- Enable RLS
ALTER TABLE daily_profiles ENABLE ROW LEVEL SECURITY;

-- Public read for daily_profiles (anon can select)
CREATE POLICY "daily_profiles_public_read" ON daily_profiles
  FOR SELECT USING (is_active = true);

-- Storage buckets (public read)
INSERT INTO storage.buckets (id, name, public) VALUES ('profile-images', 'profile-images', true) ON CONFLICT (id) DO NOTHING;
INSERT INTO storage.buckets (id, name, public) VALUES ('profile-pdfs', 'profile-pdfs', true) ON CONFLICT (id) DO NOTHING;

-- Storage policies: allow public read for both buckets (drop first if re-running)
DROP POLICY IF EXISTS "profile-images-public-read" ON storage.objects;
DROP POLICY IF EXISTS "profile-pdfs-public-read" ON storage.objects;
CREATE POLICY "profile-images-public-read" ON storage.objects FOR SELECT USING (bucket_id = 'profile-images');
CREATE POLICY "profile-pdfs-public-read" ON storage.objects FOR SELECT USING (bucket_id = 'profile-pdfs');
