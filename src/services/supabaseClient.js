import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uxdzsquzyehfxmxjnykz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZHpzcXV6eWVoZnhteGpueWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwODc1MTEsImV4cCI6MjA1NTY2MzUxMX0.J9qQMH3APQwpVItzymt5NMnnrKD02AeyWx-_agqeg_E';

export const supabase = createClient(supabaseUrl, supabaseKey);
 