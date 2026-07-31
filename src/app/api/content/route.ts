import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .limit(1)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: error?.message || "No data found" }, { status: 500 });
    }

    let contentObj = data.content;
    if (typeof contentObj === "string") {
      try {
        contentObj = JSON.parse(contentObj);
      } catch (e) {
        contentObj = {};
      }
    }

    // Ensure it's a valid object, not an array or string
    if (!contentObj || typeof contentObj !== "object" || Array.isArray(contentObj)) {
      contentObj = {};
    }

    return NextResponse.json(contentObj);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data: allRows } = await supabase.from("site_content").select("id").limit(1);
    
    if (allRows && allRows.length > 0) {
      const { error } = await supabase
        .from("site_content")
        .update({ content: body })
        .eq("id", allRows[0].id);

      if (error) throw error;
    } else {
      const { error } = await supabase
        .from("site_content")
        .insert([{ content: body }]);

      if (error) throw error;
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}