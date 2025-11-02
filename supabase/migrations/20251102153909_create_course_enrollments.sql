/*
  # Course Enrollments Schema

  1. New Tables
    - `enrollments`
      - `id` (uuid, primary key) - Unique identifier for each enrollment
      - `full_name` (text) - Student's full name
      - `email` (text) - Student's email address (unique)
      - `phone` (text) - Student's phone number
      - `current_job_role` (text) - Student's current professional role
      - `experience_level` (text) - Student's experience level (beginner/intermediate/advanced)
      - `motivation` (text) - Why they want to take the course
      - `enrolled_at` (timestamptz) - Timestamp of enrollment
      - `status` (text) - Enrollment status (pending/confirmed/cancelled)

  2. Security
    - Enable RLS on `enrollments` table
    - Add policy to allow anyone to insert their enrollment (public enrollment)
    - Add policy for authenticated admins to view all enrollments

  3. Indexes
    - Add index on email for faster lookups
    - Add index on enrolled_at for sorting
*/

CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  current_job_role text NOT NULL,
  experience_level text NOT NULL CHECK (experience_level IN ('beginner', 'intermediate', 'advanced')),
  motivation text NOT NULL,
  enrolled_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled'))
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can enroll in the course"
  ON enrollments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_enrollments_email ON enrollments(email);
CREATE INDEX IF NOT EXISTS idx_enrollments_enrolled_at ON enrollments(enrolled_at DESC);