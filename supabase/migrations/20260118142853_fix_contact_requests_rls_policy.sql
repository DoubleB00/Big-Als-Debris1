/*
  # Fix RLS Policy for contact_requests table

  ## Changes
    - Drop the existing overly permissive INSERT policy
    - Create a new restrictive INSERT policy that validates data:
      - Name must not be empty and must be 200 characters or less
      - Phone must not be empty and must be 50 characters or less
      - Message must be 2000 characters or less
      - Status must be 'new' (prevents users from manipulating status)
    
  ## Security Improvements
    - Prevents spam submissions with empty or excessively long data
    - Ensures users can only submit requests with status 'new'
    - Maintains public access for legitimate form submissions
*/

-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Anyone can submit contact requests" ON contact_requests;

-- Create a new restrictive policy with data validation
CREATE POLICY "Validated contact request submissions"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    -- Name must not be empty and must be reasonable length
    name IS NOT NULL 
    AND length(trim(name)) > 0 
    AND length(name) <= 200
    -- Phone must not be empty and must be reasonable length
    AND phone IS NOT NULL 
    AND length(trim(phone)) > 0 
    AND length(phone) <= 50
    -- Message must be reasonable length (can be empty)
    AND length(message) <= 2000
    -- Status must be 'new' to prevent manipulation
    AND status = 'new'
  );
