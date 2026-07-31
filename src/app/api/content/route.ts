import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .limit(1)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Ensure we send back the json content object properly
    let contentObj = data.content;
    if (typeof contentObj === "string") {
      try {
        contentObj = JSON.parse(contentObj);
      } catch (e) {
        // Fallback if parsing fails
      }
    }

    return NextResponse.json(contentObj || data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Update the row in Supabase
    const { error } = await supabase
      .from("site_content")
      .update({ content: body })
      .eq("id", 1); // Adjust if your row ID is different, or omit eq if there's only one row

    if (error) {
      // If update fails by ID, try updating the first row found
      const { data: allRows } = await supabase.from("site_content").select("id").limit(1);
      if (allRows && allRows.length > 0) {
        await supabase
          .from("site_content")
          .update({ content: body })
          .eq("id", allRows[0].id);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}