import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bsdprbwwszzzfddqhviq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzZHByYnd3c3p6emZkZHFodmlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NDc2MTcsImV4cCI6MjA0OTQyMzYxN30.NA9gEC90eKr2HYfED94golEoOzsKFV7Kz6fPMhpvyCg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);