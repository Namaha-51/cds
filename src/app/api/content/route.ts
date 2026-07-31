import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET: Fetch content from Supabase
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('content')
      .eq('section', 'home')
      .single();

    if (error) throw error;
    return NextResponse.json(data.content);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}

// POST: Save content directly to Supabase
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { error } = await supabase
      .from('site_content')
      .update({ content: body })
      .eq('section', 'home');

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}