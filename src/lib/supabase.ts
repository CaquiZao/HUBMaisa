import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sua-url-do-supabase.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'chave-anonima-publica';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Variáveis de ambiente do Supabase não encontradas. O backend real não funcionará até serem configuradas.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
