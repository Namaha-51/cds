import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    // 1. Fetch all rows from the database
    const { data, error } = await supabase.from("site_content").select("section, content");

    if (error) throw error;

    // 2. Combine them into one object for your dashboard tabs
    const combinedContent: Record<string, any> = {};
    
    if (data) {
      data.forEach((row) => {
        let parsed = row.content;
        if (typeof parsed === 'string') {
          try { parsed = JSON.parse(parsed); } catch (e) {}
        }
        
        // Handle if the data got double-nested previously
        if (parsed && parsed[row.section]) {
          combinedContent[row.section] = parsed[row.section];
        } else {
          combinedContent[row.section] = parsed || {};
        }
      });
    }

    return NextResponse.json(combinedContent);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json(); // The full object from your dashboard

    // Loop through each tab (home, aboutUs, etc.) and save it properly
    for (const [sectionName, sectionData] of Object.entries(body)) {
      
      // Check if the row exists
      const { data: existingRow } = await supabase
        .from("site_content")
        .select("section")
        .eq("section", sectionName)
        .single();

      if (existingRow) {
        // Update existing row
        const { error } = await supabase
          .from("site_content")
          .update({ content: sectionData })
          .eq("section", sectionName);
        if (error) throw error;
      } else {
        // Insert new row WITH the required 'section' column
        const { error } = await supabase
          .from("site_content")
          .insert([{ section: sectionName, content: sectionData }]);
        if (error) throw error;
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}