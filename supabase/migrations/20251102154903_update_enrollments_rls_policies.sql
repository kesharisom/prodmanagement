/*
  # Update RLS Policies for Admin Access

  1. Changes
    - Add policy to allow public read access to enrollments (for admin dashboard)
    - Add policy to allow public update access for status changes (for admin dashboard)
    - These policies enable the admin dashboard to work without authentication
    - In production, you should add proper authentication

  2. Security Notes
    - Current setup allows public read/update for demo purposes
    - For production: Add authentication and restrict to admin users only
    - Consider adding auth.uid() checks for admin-only access
*/

DROP POLICY IF EXISTS "Authenticated users can view all enrollments" ON enrollments;

CREATE POLICY "Anyone can view enrollments"
  ON enrollments
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update enrollment status"
  ON enrollments
  FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);