/*
  # Create licenses table

  1. New Tables
    - `licenses`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `license_key` (text, unique)
      - `created_at` (timestamp)
      - `expires_at` (timestamp, nullable)
      - `status` (text)
      - `payment_id` (text)
      - `amount` (numeric)

  2. Security
    - Enable RLS on `licenses` table
    - Add policy for authenticated users to read their own licenses
*/

CREATE TABLE IF NOT EXISTS licenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  license_key text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz,
  status text NOT NULL DEFAULT 'active',
  payment_id text,
  amount numeric NOT NULL,
  CONSTRAINT email_unique UNIQUE(email)
);

ALTER TABLE licenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own licenses"
  ON licenses
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = email);