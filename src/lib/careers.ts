import { supabase } from './supabase';

export interface Career {
  id: string;
  title: string;
  seniority: 'Intern' | 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Principal' | null;
  description: string | null;
  skills: string[];
  location: 'Onsite' | 'Remote' | 'Hybrid';
  employment_type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  apply_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export async function fetchCareers(): Promise<Career[]> {
  try {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching careers:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Unexpected error in fetchCareers:', error);
    return [];
  }
}

export async function fetchCareerById(id: string): Promise<Career | null> {
  try {
    const { data, error } = await supabase
      .from('careers')
      .select('*')
      .eq('id', id)
      .eq('is_active', true)
      .single();

    if (error) {
      console.error(`Error fetching career with id ${id}:`, error);
      return null;
    }

    return data;
  } catch (error) {
    console.error(`Unexpected error fetching career with id ${id}:`, error);
    return null;
  }
}
