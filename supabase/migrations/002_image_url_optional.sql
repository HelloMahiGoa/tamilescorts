-- Make image_url optional (PDF-only profiles)
ALTER TABLE daily_profiles ALTER COLUMN image_url DROP NOT NULL;
