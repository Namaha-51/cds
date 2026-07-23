// "use client";

// import React from "react";
// import { ShieldCheck, Award, Zap, Clock, ClipboardCheck, Settings } from "lucide-react";

// export default function WhyPremium() {
//   const PILLARS = [
//     {
//       icon: ShieldCheck,
//       title: "Authorised & Licensed",
//       desc: "Licensed plumbers, ARC-certified HVAC engineers, and electrical professionals with complete industry endorsements.",
//     },
//     {
//       icon: Award,
//       title: "Genuine Factory Parts",
//       desc: "Direct components sourced from Bosch, Miele, Smeg, and Panasonic. Maintaining warranty and operational integrity.",
//     },
//     {
//       icon: Zap,
//       title: "Calibrated Diagnostics",
//       desc: "We invest in high-precision testing apparatus to identify trace gas leaks, insulation breakdowns, and controller faults.",
//     },
//     {
//       icon: Settings,
//       title: "Engineering Precision",
//       desc: "Every installation and repair is calibrated to exact manufacturer tolerances to maximize system operating lifespan.",
//     },
//     {
//       icon: ClipboardCheck,
//       title: "VBA Compliance Audits",
//       desc: "All gas and major structural HVAC works are certified with full Certificates of Compliance for complete accountability.",
//     },
//     {
//       icon: Clock,
//       title: "Documented Workmanship",
//       desc: "We provide comprehensive written reports on thermal coefficient outputs, digital diagnostics, and component lifespan.",
//     },
//   ];

//   return (
//     <section className="relative py-24 md:py-32 bg-white border-b border-[#E5E9F0] overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-35" />

//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

//         {/* Section Title */}
//         <div className="max-w-3xl mb-16 lg:mb-20">
//           <span className="text-[10px] font-mono tracking-widest text-[#5A6B82] uppercase block mb-3">
//             THE OUTCOME DIFFERENCE
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2B52]">
//             Why technical precision matters.
//           </h2>
//           <p className="text-base text-[#5A6B82] mt-4 leading-relaxed max-w-2xl">
//             Sloppy repairs shorten appliance lifecycle and compromise safety. We treat heating, cooling, and premium kitchen electronics as mission-critical systems.
//           </p>
//         </div>

//         {/* Pillars Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {PILLARS.map((pillar, index) => {
//             const Icon = pillar.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-[#F7F9FC] border border-[#E5E9F0] p-8 rounded-sm hover:border-[#0D2B52] transition-colors duration-300 group"
//               >
//                 <div className="w-10 h-10 bg-white border border-[#E5E9F0] text-[#0D2B52] flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#0D2B52] group-hover:text-white transition-colors duration-300">
//                   <Icon className="w-5 h-5" />
//                 </div>
//                 <h3 className="text-base font-bold text-[#0D2B52] mb-3 tracking-tight">
//                   {pillar.title}
//                 </h3>
//                 <p className="text-xs text-[#5A6B82] leading-relaxed">
//                   {pillar.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface CapabilityColumn {
  id: string;
  index: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  linkText?: string;
  linkUrl?: string;
}

// Minimalist, high-clarity copy distilled for fast reading and editorial impact
const COLUMNS: CapabilityColumn[] = [
  {
    id: "hvac-summer",
    index: "01",
    title: "Avoid summer breakdowns.",
    desc: "Pre-season pressure diagnostics, filter pad replacements, and airflow calibrations keep your air conditioning and evaporative cooling running efficiently when it matters most.",
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12C4 10.8954 4.89543 10 6 10H26C27.1046 10 28 10.8954 28 12V22C28 23.1046 27.1046 24 26 24H6C4.89543 24 4 23.1046 4 22V12Z" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20H26" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 24L10 27" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 24L22 27" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M33 14C35.5 14 36.5 16 39 16" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <path d="M33 19C35.5 19 36.5 21 39 21" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <path d="M33 24C35.5 24 36.5 26 39 26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "all-electrical",
    index: "02",
    title: "All electrical appliances.",
    desc: "Melbourne's premier electrical appliance specialists. Expert component-level servicing for built-in ovens, induction cooktops, dishwashers, washing machines, fridges, and more.",
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C8 6.89543 8.89543 6 10 6H34C35.1046 6 36 6.89543 36 8V36C36 37.1046 35.1046 38 34 38H10C8.89543 38 8 37.1046 8 36V8Z" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 18H31V32H13V18Z" stroke="#0B1E36" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="15" cy="12" r="1.5" fill="#2563EB" />
        <circle cx="22" cy="12" r="1.5" fill="#2563EB" />
        <circle cx="29" cy="12" r="1.5" fill="#2563EB" />
      </svg>
    ),
  },
  {
    id: "oem-licensed",
    index: "03",
    title: "Genuine parts. Certified pros.",
    desc: "100% genuine OEM factory parts sourced from Bosch, Miele, and Smeg. ARC-certified refrigeration engineers and VBA-compliant practitioners ensuring lasting, reliable results.",
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 6L8 12V22C8 30.25 14 36.75 22 39C30 36.75 36 30.25 36 22V12L22 6Z" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 22L20 26L28 18" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "property-hub",
    index: "04",
    title: "One-stop property care.",
    desc: "Tailored for property managers and real estate agents. Beyond electrical appliances, we provide certified plumbing maintenance and handyman repairs under one priority SLA.",
    linkText: "Enquire for Property Care →",
    linkUrl: "/property-management",
    icon: (
      <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22L22 8L38 22" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20V36H34V20" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 36V26H26V36" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhyPremium() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-[#FAF9F6] text-[#0F172A] overflow-hidden border-b border-slate-200/80 select-none"
    >
      {/* 📍 CLEAN TECHNICAL SLATE DOT-GRID */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* 📍 CENTER-ALIGNED & HEAVY WEIGHT HEADER (Clean White/Off-White Contrast) */}
        <div
          className={`max-w-4xl mx-auto text-center mb-16 sm:mb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Reference-style framed badge with royal blue rules */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-[#2563EB]"></span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0B1E36]">
                THE OUTCOME DIFFERENCE
              </span>
            </div>
            <span className="w-6 sm:w-8 h-[1px] bg-[#2563EB]"></span>
          </div>

          {/* Heavy, Bold, Center-Aligned H2 */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold sm:font-black tracking-tight text-[#0B1E36] leading-[1.05]">
            Why technical precision matters.
          </h2>

          {/* Minimalist royal blue accent dash underneath */}
          <div className="w-12 h-0.5 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* Pure Editorial 4-Column Wireframe Grid with Crisp Slate Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 border-t border-b sm:border-b-0 border-slate-200/80">

          {COLUMNS.map((col, idx) => {
            const delay = `${150 + idx * 120}ms`;
            return (
              <div
                key={col.id}
                style={{ transitionDelay: isVisible ? delay : "0ms" }}
                className={`group relative py-10 sm:py-6 lg:py-4 px-0 sm:px-6 lg:px-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] tracking-wider mb-6">
                    [{col.index}]
                  </div>

                  <div className="mb-6 text-[#0B1E36] group-hover:scale-105 transition-transform duration-300 ease-out">
                    {col.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1E36] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                    {col.title}
                  </h3>

                  {/* Expanding divider line */}
                  <div className="w-6 h-[1px] bg-slate-200 my-4 group-hover:w-12 group-hover:bg-[#2563EB] transition-all duration-300" />

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {col.desc}
                  </p>
                </div>

                {col.linkText && col.linkUrl && (
                  <div className="mt-8 pt-2">
                    <Link
                      href={col.linkUrl}
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#2563EB] hover:text-[#0B1E36] underline decoration-blue-200 underline-offset-4 hover:decoration-[#0B1E36] transition-all"
                    >
                      <span>{col.linkText}</span>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* Credibility Tagline */}
        <div
          style={{ transitionDelay: "700ms" }}
          className={`mt-14 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <span className="font-mono text-[11px] font-medium text-slate-400 uppercase tracking-widest">
            100% GENUINE OEM REPLACEMENT PARTS GUARANTEED ACROSS ALL MELBOURNE REPAIRS
          </span>
        </div>

      </div>
    </section>
  );
}