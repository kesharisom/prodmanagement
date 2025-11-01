import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Enrollment = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  current_job_role: string;
  experience_level: 'beginner' | 'intermediate' | 'advanced';
  motivation: string;
  enrolled_at: string;
  status: 'pending' | 'confirmed' | 'cancelled';
};
