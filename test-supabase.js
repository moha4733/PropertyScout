import { supabase } from './src/services/supabase';

async function testConnection() {
  const { data, error } = await supabase
    .from('EJENDOM')
    .select('*');

  if (error) {
    console.error('Supabase fejl:', error.message);
    return;
  }

  console.log('Supabase forbindelse virker!');
  console.log('Ejendomme:', data);
}

testConnection();
