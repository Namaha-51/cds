import { supabase } from '@/lib/supabase';

export async function getSiteContent() {
  const { data, error } = await supabase
    .from('site_content')
    .select('content')
    .eq('section', 'home')
    .single();

  if (error) {
    console.error('Error fetching content:', error);
    return null;
  }

  return data?.content;
}

export async function updateSiteContent(newContent: any) {
  const { error } = await supabase
    .from('site_content')
    .update({ content: newContent })
    .eq('section', 'home');

  if (error) {
    console.error('Error updating content:', error);
    throw error;
  }
}