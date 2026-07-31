"use client";

import { useState, useEffect } from "react";

// The corrected safety net with zero syntax errors.
const FULL_CONTENT = {
  home: {
    heroEyebrow: "Est. Melbourne - Licenced HVAC & Appliance Technicians",
    heroTitle: "Melbourne’s  Premium Appliance & Air Conditioning Specialists",
    heroDesc: "Manufacturer authorised technicians with hands-on experience, servicing and installing residential & commercial air conditioning systems and appliances",
    heroEveningNotice: "EVENING APPOINTMENTS AVAILABLE MON–FRI (4:00 PM – 7:00 PM)",
    primaryCta: "Schedule a Service",
    secondaryCta: "Explore Services",
    badge1Label: "Licensed Technicians",
    badge1Sub: "BPC & ARCTick Certified",
    badge2Label: "Manufacturer Authorised",
    badge2Sub: "Miele, Bosch, Whirlpool & More",
    badge3Label: "Transparent Pricing",
    badge3Sub: "Fixed Upfront Quotes",
    badge4Label: "Trusted Across Melbourne",
    badge4Sub: "Greater Metro Coverage",
    marqueeText: "SERVICING: AIRCONDITIONING AND HEATING. EVAPORATIVE COOLING. DISHWASHERS. WASHING MACHINES. RANGEHOODS. OVENS AND COOKTOPS.",
    marqueeLocation: "MELBOURNE, VICTORIA",
    partnersBadge: "Official Manufacturer Network",
    partnersTitle: "Authorised and Licensed Service Providers throughout Melbourne",
    partnersSub: "100% Genuine OEM Replacement Parts Guaranteed Across All Melbourne Repairs",
    servicesTitle1: "AIR CONDITIONING &",
    servicesAccent1: "HVAC SYSTEMS.",
    servicesSub1: "As Melbourne summer approaches, don't wait for heatwave breakdowns. Precision diagnostics, rapid repairs, and efficiency servicing for split systems, ducted climate networks, and VRF units.",
    servicesTitle2: "EVAPORATIVE",
    servicesAccent2: "COOLING CARE.",
    servicesSub2: "Maximized airflow for the peak Australian summer. Comprehensive pre-season cleanings, filter pad replacements, and water distribution checks across Greater Melbourne.",
    servicesTitle3: "ALL ELECTRICAL",
    servicesAccent3: "APPLIANCES.",
    servicesSub3: "Melbourne's premier electrical appliance specialists. Manufacturer provided diagnostics and genuine part repairs for high-end ovens, induction cooktops, rangehoods, dishwashers, and washing machines.",
    servicesTitle4: "THE ONE-STOP",
    servicesAccent4: "PROPERTY SOLUTION.",
    servicesSub4: "Tailored for real estate agents and property managers. Beyond electrical appliances, we provide dedicated Electricians, cabinet makers and minor plumbing repairs under one roof.",
    servicesCta4: "Inquire for Property Management →",
    whyTitle: "Why technical precision matters.",
    whyCol1Title: "Avoid summer breakdowns.",
    whyCol1Desc: "Pre-season pressure diagnostics, filter pad replacements, and airflow calibrations keep your air conditioning and evaporative cooling running efficiently when it matters most.",
    whyCol2Title: "All electrical appliances.",
    whyCol2Desc: "Melbourne's premier electrical appliance specialists. Expert component-level servicing for built-in ovens, induction cooktops, dishwashers, washing machines, and more.",
    whyCol3Title: "Genuine parts. Certified pros.",
    whyCol3Desc: "100% genuine factory parts sourced from Bosch, Miele, and Smeg. ARC-certified engineers and VBA-compliant practitioners ensuring lasting, reliable results.",
    whyCol4Title: "One-stop property care.",
    whyCol4Desc: "Tailored for property managers and real estate agents. Beyond electrical appliances, we provide dedicated Electricians, cabinet makers and minor plumbing repairs under one roof.",
    whyCol4Link: "Enquire for Property Care →",
    whyFooter: "GENUINE PARTS GUARANTEED ACROSS ALL MELBOURNE REPAIRS"
  },
  aboutUs: {
    heroBadge: "THE CDS STORY • EST. MELBOURNE",
    heroTitle: "Marine Engineering Precision. Applied to Your Home.",
    heroDesc: "Most appliance repair companies are generalists. We are specialists. Born from a decade of high-pressure shipboard engineering, CDS Appliance Services brings uncompromising mechanical tolerances, proprietary manufacturer tools, and absolute respect to residential and commercial HVAC across Melbourne.",
    telemetry1Label: "TOLERANCE SPEC",
    telemetry1Value: "±0.01mm EXACT",
    telemetry2Label: "DIAGNOSTIC APPARATUS",
    telemetry2Value: "100% DIGITAL TRACE",
    telemetry3Label: "WARRANTY BACKING",
    telemetry3Value: "2-YEAR VBA SEAL",
    hudRef: "REF: MARINE-HVAC // 2026",
    hudStatus: "SYSTEM ACTIVE",
    floatingBoxTitle: "THERMAL COP TRACE",
    floatingBoxDesc: "Calibrated Logic Diagnostics",
    pillarsBadge: "CORE PHILOSOPHY",
    pillarsTitle: "How We Stand Apart.",
    pillarsVerified: "VERIFIED STANDARD",
    showcaseBadge: "PRECISION IN ACTION",
    showcaseTitle: "Laboratory Standards. Field Execution.",
    showcaseDesc: "We operate Melbourne's most rigorously equipped mobile workshops, carrying OEM factory components for immediate mechanical resolution.",
    protocol1Label: "PROTOCOL 01",
    protocol1Title: "LOGIC BOARD CALIBRATION",
    protocol2Label: "PROTOCOL 02",
    protocol2Title: "PRESSURIZED GAS TRACING",
    teamBadge: "PERSONNEL DIRECTORY",
    teamTitle: "The Master Technicians.",
    teamDesc: "Factory-trained, fully licensed, and equipped with advanced digital diagnostics. Meet the team restoring Melbourne's premium appliances.",
    complianceBadge: "OFFICIAL REGISTRATION & COMPLIANCE",
    complianceTitle: "Fully Accredited. Fully Insured.",
    registryLabel: "VICTORIAN WORKFLOW REGISTRY",
    registryStatus: "ALL LICENSES ACTIVE & VERIFIED"
  },
  contact: {
    heroBadge: "EST. MELBOURNE • DIRECT CLIENT LIAISON",
    heroTitleMain: "Contact Our",
    heroTitleHighlight: "Melbourne Team",
    heroTitleMain2: "Today.",
    heroDesc1: "Need immediate appliance repairs or advice? Speak directly with Melbourne’s licensed engineering specialists. We offer",
    heroDescHighlight: "same-day dispatch",
    heroDesc2: "and convenient evening appointment slots across Greater Melbourne.",
    sysRef: "SYS_REF: CONTACT-2026 // MELB",
    sysStatus: "STATUS: DISPATCH ACTIVE",
    slaBadge: "RESPONSE SLA",
    slaText: "Same-Day & Evening Bookings",
    infoSectionBadge: "FAST & RELIABLE",
    infoSectionTitle: "Get In Touch",
    infoSectionDesc: "Whether you have an emergency breakdown or need a scheduled maintenance quote for your rental property, our dispatch desk is ready.",
    phoneCardTitle: "Direct Dispatch Phone",
    phoneCardVal: "0405 545 609",
    phoneCardSub: "Immediate same-day booking & emergency inquiries.",
    phoneCardBadge: "FASTEST RESPONSE",
    emailCardTitle: "Email & Client Liaison",
    emailCardVal: "service@cdsapplianceservices.com.au",
    emailCardSub: "For property managers, real estate quotes & invoices.",
    emailCardBadge: "INVOICES & QUOTES",
    locationCardTitle: "Base of Operations",
    locationCardVal: "Noble Park VIC 3174",
    locationCardSub: "Mobile workshop fleet dispatching across Greater Melbourne.",
    locationCardBadge: "GREATER MELBOURNE",
    hoursCardTitle: "Operating Hours",
    hoursCardVal: "Mon–Fri: 8:00 AM – 7:00 PM",
    hoursCardSub: "Evening slots (4–7 PM) & weekend emergency service available.",
    hoursCardBadge: "EVENING SLOTS",
    accreditationBadge: "VERIFIED ACCREDITATIONS",
    esvLic: "ESV LIC: D20380",
    arctickLic: "ARCTICK: AU066324",
    bpcLic: "BPC LIC: 131134",
    elecRec: "ELEC REC: 38111",
    formBadge: "ONLINE BOOKING DESK",
    formTitle: "Request a Service",
    formTag: "⚡ Fixed Upfront Quotes",
    successTitle: "Request Received",
    successMessage1: "Thank you,",
    successMessage2: ". Our Melbourne dispatch team is reviewing your fault details and will call you shortly at",
    successMessage3: "to confirm your technician’s arrival window.",
    successButton: "Book Another Appliance",
    formNameLabel: "Full Name *",
    formNamePlaceholder: "e.g. David Miller",
    formPhoneLabel: "Phone Number *",
    formPhonePlaceholder: "e.g. 0400 000 000",
    formEmailLabel: "Email Address",
    formEmailPlaceholder: "e.g. david@example.com",
    formSuburbLabel: "Suburb / Postcode *",
    formSuburbPlaceholder: "e.g. Brighton 3186",
    formApplianceLabel: "Appliance Type",
    formBrandLabel: "Appliance Brand",
    formBrandPlaceholder: "e.g. Miele, Bosch, Fisher & Paykel",
    formWindowLabel: "Preferred Appointment Window",
    formDescLabel: "Fault Description / Error Codes",
    formDescPlaceholder: "Please describe what the appliance is doing (e.g. won't spin, flashing F20 error, leaking from bottom)...",
    formSubmitButton: "Submit Service Request",
    formFooterNote: "🔒 Your details are sent directly to our Melbourne dispatch desk. No third-party sharing.",
    emergencyTitleMain: "Need Immediate",
    emergencyTitleHighlight: "Emergency Repair?",
    emergencyDesc: "Don’t wait for email confirmations. If you have an urgent refrigeration failure, major water leak, or commercial heating breakdown, call our priority dispatch line directly.",
    emergencyButton: "Call Priority Line: 0405 545 609"
  },
  serviceAreas: {
    heroBadge: "GREATER MELBOURNE COVERAGE DIRECTORY",
    heroTitleMain: "Appliance Repairs Across",
    heroTitleHighlight: "Melbourne.",
    heroDesc1: "Need an expert for appliance repairs in Melbourne? At",
    heroDescStrong: "CDS Appliance Services",
    heroDesc2: ", our licensed technicians provide",
    heroDescHighlight: "same-day repairs",
    heroDesc3: "for all major household appliances. We’ve built a trusted reputation across Greater Melbourne for delivering fast, professional, and long-lasting mechanical resolution.",
    sysRef: "SYS_REF: DISPATCH-2026 // MELB",
    coverageZones: "COVERAGE: 25+ ZONES",
    mobileWorkshops: "MOBILE WORKSHOPS",
    oemParts: "OEM Parts Stocked On-Site",
    dirBadge: "LOCAL DISPATCH DIRECTORY",
    dirTitleMain: "Select Your",
    dirTitleHighlight: "Service Area",
    dirSubtitle: "Click any Greater Melbourne suburb below to check local technician availability and service response times.",
    searchPlaceholder: "Search suburbs (e.g. Brighton, Dandenong, Box Hill)...",
    availableSuburbs: "AVAILABLE SUBURBS",
    techsActive: "TECHNICIANS ACTIVE",
    covVerified: "COVERAGE VERIFIED",
    greaterMelb: "GREATER MELBOURNE",
    regionLabel: "REGION:",
    serviceStatusLabel: "Service Status:",
    responseTimeLabel: "Response Time:",
    warrantyLabel: "Warranty Included:",
    warrantyText: "12M Parts / 3M Labour",
    bookTechPrefix: "Book Technician in",
    eveningAppts: "Evening appointments (4–7 PM) & weekend emergency slots available.",
    stdBadge: "THE CDS STANDARDS",
    stdTitleMain: "Why Choose",
    stdTitleHighlight: "CDS Appliance?",
    techBadge: "TECHNICAL STANDARDS",
    techTitleMain: "Appliance Repair &",
    techTitleHighlight: "Service Protocols",
    techSubtitle: "We repair and service all major residential and commercial appliances across Melbourne, restoring mechanical performance to strict manufacturer tolerances without guesswork.",
    commonFaultsLabel: "Common Faults:",
    brandBadge: "FACTORY TRAINING & COMPLIANCE",
    brandTitleMain: "Appliance Brands",
    brandTitleHighlight: "We Service",
    brandSubtitle: "Authorised service partner for leading European and global manufacturers.",
    ctaTitleMain1: "Book Your",
    ctaTitleHighlight: "Melbourne Repair",
    ctaTitleMain2: "Today",
    ctaSubtitle: "At CDS Appliance Services, we’re proud to be your local Melbourne appliance repair experts, keeping residential and commercial properties running smoothly across Greater Melbourne.",
    ctaButton: "Call 0405 545 609"
  },
  propertyManagement: {
    heroBadge: "MELBOURNE REAL ESTATE PARTNERSHIPS",
    heroTitleMain: "Melbourne's Property Maintenance & Appliance Specialists for",
    heroTitleHighlight: "Real Estate Agencies.",
    heroDesc: "One call for appliance repairs, electrical work, air conditioning, cabinet modifications, and comprehensive maintenance coordination across Greater Melbourne.",
    solutionsBadge: "STREAMLINED OPERATIONS",
    solutionsTitleMain: "Reliable Appliance & Air Conditioning Solutions",
    solutionsTitleHighlight: "for Property",
    solutionsDesc1: "At CDS Appliance Services, we understand the challenges property managers face every day; coordinating trades, managing tenant expectations, obtaining quotes, and ensuring repairs are completed quickly can consume valuable time.",
    solutionsHighlightPrefix: "Our goal is simple:",
    solutionsHighlightText: "make property maintenance easier for your team.",
    solutionsDesc2: "We provide professional appliance and air conditioning services throughout Melbourne, working directly with tenants, landlords, and property managers to deliver fast, efficient outcomes with minimal administration.",
    solutionsImgRef: "REF: HVAC-ROOFTOP // MELB",
    advantageBadge: "AGENCY ADVANTAGE",
    advantageTitleMain: "Why Property Managers",
    advantageTitleHighlight: "Choose CDS",
    diffBadge: "THE STANDARD",
    diffTitleMain: "The CDS",
    diffTitleHighlight: "Difference",
    diffDesc: "We understand that property managers need more than just a repair technician. You need a contractor who:",
    accBadge: "LICENSED & FULLY INSURED PARTNERS",
    accTitle: "Why Agents Trust Us",
    accDesc: "We carry comprehensive $10 million Public Liability insurance, full electrical licensing (REC 38111), plumbing compliance (BPC 131134), and ARCTick certification for all air conditioning works.",
    tradesBadge: "SPECIALIZED TRADES",
    tradesTitleMain: "Services Available for",
    tradesTitleHighlight: "Real Estate Agencies",
    tradesBookButton: "Book this service",
    partnersBadge: "VALUED PORTFOLIO PARTNERS",
    partnersTitleMain: "Trusted by Leading Melbourne",
    partnersTitleHighlight: "Real Estate Networks",
    ctaBadge: "PORTFOLIO MANAGEMENT",
    ctaTitleMain1: "Let's Discuss Your",
    ctaTitleHighlight: "Portfolio.",
    ctaDesc: "Whether you manage a small portfolio or hundreds of properties, CDS Appliance Services can provide a reliable appliance and air conditioning maintenance solution tailored to your needs.",
    ctaButton1: "Chris at CDS: 0405 545 609",
    ctaButton2: "Get in Touch Online",
    ctaEmailLabel: "Direct Email:",
    ctaEmailAddress: "chris@cdsapplianceservices.com.au"
  }
};

export default function Dashboard() {
  const [content, setContent] = useState<any>(FULL_CONTENT);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/content")
      .then((res) => res.json())
      .then((data) => {
        if (data && Object.keys(data).length > 0 && !data.error) {
          setContent({ ...FULL_CONTENT, ...data });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch failed, using local content", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (key: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [key]: value,
      },
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const result = await res.json();
      
      if (res.ok && result.success) {
        setMessage("Successfully pushed to live! Database is synced.");
      } else {
        setMessage("Error saving: " + (result.error || "Unknown error"));
      }
    } catch (err: any) {
      setMessage("Error saving: " + err.message);
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="p-10 font-mono">Loading dashboard telemetry...</div>;
  }

  const sections = Object.keys(content);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Content Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Manage live website copy stored in Supabase</p>
          </div>
          <div className="flex items-center gap-4">
            {message && (
              <span className={`text-sm font-medium ${message.includes("Error") ? "text-red-600" : "text-green-600"}`}>
                {message}
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-black text-white px-5 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {saving ? "Pushing..." : "Push to Live"}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-gray-100">
          {sections.map((sectionKey) => (
            <button
              key={sectionKey}
              onClick={() => setActiveTab(sectionKey)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === sectionKey
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {sectionKey.toUpperCase()}
            </button>
          ))}
        </div>

        {activeTab && content[activeTab] && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 capitalize border-b pb-2">
              Section: {activeTab}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(content[activeTab]).map(([fieldKey, fieldValue]) => (
                <div key={fieldKey} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label className="block text-xs font-mono font-semibold text-gray-500 uppercase mb-2">
                    {fieldKey}
                  </label>
                  <textarea
                    value={(fieldValue as string) || ""}
                    onChange={(e) => handleChange(fieldKey, e.target.value)}
                    rows={2}
                    className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-800 text-sm focus:ring-2 focus:ring-black focus:outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}