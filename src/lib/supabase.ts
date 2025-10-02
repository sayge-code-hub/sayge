import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nuakguavjmrbsrynnyhd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YWtndWF2am1yYnNyeW5ueWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0MDgyOTksImV4cCI6MjA3NDk4NDI5OX0.SKLoKlOBiH7S1uOcz5LqzR_73T-o9Lfh6mLO-SEUhQk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false
  }
});