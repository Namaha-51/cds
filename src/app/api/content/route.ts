import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase.from("site_content").select("section, content");
    if (error) throw error;

    const combined: Record<string, any> = {};
    if (data && data.length > 0) {
      data.forEach((row) => {
        if (row.section && row.content) {
          combined[row.section] = row.content;
        }
      });
    }

    return NextResponse.json(combined);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Loop through every tab ("home", "aboutUs") and save it to its own row
    for (const [sectionName, sectionData] of Object.entries(body)) {
      
      const { data: existingRow } = await supabase
        .from("site_content")
        .select("section")
        .eq("section", sectionName)
        .maybeSingle();

      if (existingRow) {
        // Update existing row
        await supabase
          .from("site_content")
          .update({ content: sectionData })
          .eq("section", sectionName);
      } else {
        // Insert new row WITH the required 'section' name
        await supabase
          .from("site_content")
          .insert([{ section: sectionName, content: sectionData }]);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}