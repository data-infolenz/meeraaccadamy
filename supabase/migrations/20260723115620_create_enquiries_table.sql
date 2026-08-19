/*
# Create enquiries table for admission form submissions

1. New Tables
- `enquiries`
  - `id` (uuid, primary key, auto-generated)
  - `student_name` (text, not null) — name of the student enquiring
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email
  - `current_class` (text, not null) — the student's current class (e.g. Class 11)
  - `course` (text, not null) — selected course (NEET UG, JEE Main, JEE Advanced, Foundation)
  - `message` (text, nullable) — optional message from the student
  - `status` (text, not null, default 'new') — enquiry processing status
  - `created_at` (timestamptz, default now()) — when the enquiry was submitted

2. Security
- Enable RLS on `enquiries`.
- Public INSERT allowed for `anon, authenticated` so the public admission form
  (no sign-in) can submit enquiries.
- No public SELECT/UPDATE/DELETE: enquiries contain personal data (names, phone,
  email) and must stay private to academy staff, who review them through the
  authenticated Supabase dashboard. Granting anon SELECT would leak private data.

3. Indexes
- Index on `created_at` desc to speed up staff review of recent enquiries.
- Index on `status` to filter new vs processed enquiries.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  current_class text NOT NULL,
  course text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE INDEX IF NOT EXISTS enquiries_created_at_idx
ON enquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS enquiries_status_idx
ON enquiries (status);
