import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("*");

    if (error || !data) {
      return NextResponse.json({ error: error?.message || "No data found" }, { status: 500 });
    }

    // Transform rows into a single combined object: { home: {...}, aboutUs: {...}, ... }
    const combined: Record<string, any> = {};
    for (const row of data) {
      let contentObj = row.content;
      if (typeof contentObj === "string") {
        try { contentObj = JSON.parse(contentObj); } catch (e) {}
      }
      // If row content contains nested keys like {"home": {...}}, unwrap it, otherwise use the section column name as key
      if (contentObj && typeof contentObj === "object" && !Array.isArray(contentObj)) {
        if (contentObj[row.section]) {
          combined[row.section] = contentObj[row.section];
        } else {
          combined[row.section] = contentObj;
        }
      }
    }

    return NextResponse.json(combined);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Loop through each section and update its respective row in Supabase
    for (const [sectionKey, sectionData] of Object.entries(body)) {
      await supabase
        .from("site_content")
        .update({ content: sectionData })
        .eq("section", sectionKey);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}