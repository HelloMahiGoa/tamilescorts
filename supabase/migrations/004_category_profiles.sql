-- Category profiles table: type × category (Tamil/Mallu/Telugu/Kannada × Regular/Housewife/etc.)
CREATE TABLE IF NOT EXISTS category_profiles (
  id TEXT NOT NULL,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  location TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('tamil', 'mallu', 'telugu', 'kannada')),
  category TEXT NOT NULL CHECK (category IN ('regular', 'housewife', 'college-girls', 'models', 'artists', 'celebrity', 'actress')),
  tagline TEXT NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  images JSONB DEFAULT '[]',
  videos JSONB,
  instagram TEXT,
  availability TEXT DEFAULT 'Available',
  languages JSONB DEFAULT '[]',
  services JSONB,
  telegram TEXT NOT NULL DEFAULT '',
  verified BOOLEAN DEFAULT false,
  response_time TEXT,
  rating NUMERIC(3,2),
  review_count INTEGER,
  price_hourly NUMERIC,
  price_overnight NUMERIC,
  price_extended NUMERIC,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (type, category, id)
);

CREATE INDEX IF NOT EXISTS idx_category_profiles_type ON category_profiles(type);
CREATE INDEX IF NOT EXISTS idx_category_profiles_category ON category_profiles(category);
CREATE INDEX IF NOT EXISTS idx_category_profiles_is_active ON category_profiles(is_active);
CREATE INDEX IF NOT EXISTS idx_category_profiles_type_category ON category_profiles(type, category);

ALTER TABLE category_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "category_profiles_public_read" ON category_profiles
  FOR SELECT USING (is_active = true);

CREATE OR REPLACE FUNCTION update_category_profiles_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_category_profiles_updated_at
  BEFORE UPDATE ON category_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_category_profiles_updated_at();
