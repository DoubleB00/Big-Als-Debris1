/*
  # Create contact requests table

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key) - Unique identifier for each contact request
      - `name` (text) - Customer's name
      - `phone` (text) - Customer's phone number
      - `message` (text) - Customer's message/details about their junk removal needs
      - `created_at` (timestamptz) - Timestamp when the request was submitted
      - `status` (text) - Status of the request (new, contacted, completed)
  
  2. Security
    - Enable RLS on `contact_requests` table
    - Add policy for inserting contact requests (public access for form submissions)
    - Add policy for reading contact requests (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact request
CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view contact requests
CREATE POLICY "Authenticated users can view contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);