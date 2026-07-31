import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const DEFAULT_CONTENT = {
  home: {
    heroEyebrow: "Est. Melbourne - Licenced HVAC & Appliance Technicians",
    heroTitle: "Melbourne’s Premium Appliance & Air Conditioning Specialists",
    heroDesc: "Manufacturer authorised technicians with hands-on experience, servicing and installing residential & commercial air conditioning systems and appliances",
  },
  aboutUs: {
    heroBadge: "THE CDS STORY • EST. MELBOURNE",
    heroTitle: "Marine Engineering Precision. Applied to Your Home.",
  },
  contact: {
    heroBadge: "EST. MELBOURNE • DIRECT CLIENT LIAISON",
    heroTitleMain: "Contact Our",
  },
  serviceAreas: {
    heroBadge: "GREATER MELBOURNE COVERAGE DIRECTORY",
    heroTitleMain: "Appliance Repairs Across",
  },
  propertyManagement: {
    heroBadge: "MELBOURNE REAL ESTATE PARTNERSHIPS",
    heroTitleMain: "Melbourne's Property Maintenance Specialists",
  }
};

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .limit(1)
      .single();

    if (error || !data) {
      return NextResponse.json(DEFAULT_CONTENT);
    }

    let contentObj = data.content;
    if (typeof contentObj === "string") {
      try {
        contentObj = JSON.parse(contentObj);
      } catch (e) {
        contentObj = DEFAULT_CONTENT;
      }
    }

    if (!contentObj || typeof contentObj !== "object" || Array.isArray(contentObj) || Object.keys(contentObj).length === 0) {
      contentObj = DEFAULT_CONTENT;
    }

    return NextResponse.json(contentObj);
  } catch (err: any) {
    return NextResponse.json(DEFAULT_CONTENT);
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