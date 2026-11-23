
import { supabase } from './supabase';

export async function getProperties() {
  const { data, error } = await supabase
    .from('EJENDOM')
    .select(`
      id,
      navn,
      adresse,
      beskrivelse,
      breddegrad,
      laengdegrad,
      investeringsbeloeb_dkk,
      afkast_min_pct,
      afkast_max_pct,
      samlede_pladser,
      optagede_pladser
    `);

  if (error) {
    throw error;
  }

  return data || [];
}
