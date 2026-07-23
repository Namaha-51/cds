// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface Panel {
//   id: string;
//   title: string[];
//   desc: string;
//   imageLg: string;
//   imageSm: string;
//   specCode: string;
// }

// const PANELS: Panel[] = [
//   {
//     id: "ac",
//     title: ["AIR", "CONDITIONING"],
//     desc: "Split systems, ducted refrigeration, and VRF setup diagnostics calibrated to exact technical specifications.",
//     imageLg: "/hero-composition.png",
//     imageSm: "/hero-detail.png",
//     specCode: "SYS_REF: HVAC-AC // MELB",
//   },
//   {
//     id: "cooling",
//     title: ["EVAPORATIVE", "COOLING"],
//     desc: "Seasonal cleaning, pad replacements, fan alignment, and winterization checks across greater Melbourne.",
//     imageLg: "/seasonal-cooling.png",
//     imageSm: "/property-dashboard.png",
//     specCode: "SYS_REF: HVAC-EC // MELB",
//   },
//   {
//     id: "kitchen",
//     title: ["KITCHEN", "APPLIANCES"],
//     desc: "Precision calibration of built-in ovens, induction hobs, steam cookers, and high-end extraction systems.",
//     imageLg: "/final-cta.png",
//     imageSm: "/hero-detail.png",
//     specCode: "SYS_REF: APP-KT // MELB",
//   },
//   {
//     id: "laundry",
//     title: ["LAUNDRY", "SYSTEMS"],
//     desc: "Front-load washing machine bearings, hydraulic suspension, pump seals, and heat-pump clothes dryer rebuilds.",
//     imageLg: "/property-dashboard.png",
//     imageSm: "/technician-arrival.png",
//     specCode: "SYS_REF: APP-LD // MELB",
//   },
//   {
//     id: "refrigeration",
//     title: ["REFRIGERATION", "SYSTEMS"],
//     desc: "Authorized compressor diagnostics, mechanical valve rebuilds, and water filtration system calibrations.",
//     imageLg: "/hero-composition.png",
//     imageSm: "/seasonal-cooling.png",
//     specCode: "SYS_REF: APP-RF // MELB",
//   },
//   {
//     id: "coffee",
//     title: ["COFFEE", "MACHINES"],
//     desc: "Thermoblock calibration, high-pressure group head solenoid diagnostics, and water line descaling protocols.",
//     imageLg: "/hero-detail.png",
//     imageSm: "/final-cta.png",
//     specCode: "SYS_REF: APP-CF // MELB",
//   },
//   {
//     id: "commercial",
//     title: ["COMMERCIAL", "EQUIPMENT"],
//     desc: "Heavy-duty HVAC systems, integrated laundry rooms, and industrial food prep appliance restorations.",
//     imageLg: "/technician-arrival.png",
//     imageSm: "/property-dashboard.png",
//     specCode: "SYS_REF: COM-EQ // MELB",
//   },
// ];

// export default function ServicesExplorer() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current || !scrollRef.current) return;

//     const sections = gsap.utils.toArray(".horizontal-panel");
//     const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

//     // Pin Section and Translate Horizontal Scroll
//     const pin = gsap.to(scrollRef.current, {
//       x: () => -totalWidth,
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         start: "top top",
//         end: () => `+=${scrollRef.current!.scrollWidth}`,
//         invalidateOnRefresh: true,
//       },
//     });

//     // Parallax & scale effects inside panels
//     sections.forEach((section: any) => {
//       const imgLg = section.querySelector(".parallax-lg");
//       const imgSm = section.querySelector(".parallax-sm");
//       const textBlock = section.querySelector(".parallax-text");

//       if (imgLg) {
//         gsap.fromTo(
//           imgLg,
//           { scale: 0.95, x: -30 },
//           {
//             scale: 1.05,
//             x: 30,
//             ease: "none",
//             scrollTrigger: {
//               trigger: section,
//               containerAnimation: pin,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           }
//         );
//       }

//       if (imgSm) {
//         gsap.fromTo(
//           imgSm,
//           { y: 30, rotation: -2 },
//           {
//             y: -30,
//             rotation: 2,
//             ease: "none",
//             scrollTrigger: {
//               trigger: section,
//               containerAnimation: pin,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           }
//         );
//       }

//       if (textBlock) {
//         gsap.fromTo(
//           textBlock,
//           { x: 50, opacity: 0.8 },
//           {
//             x: -50,
//             opacity: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: section,
//               containerAnimation: pin,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           }
//         );
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative bg-white overflow-hidden">
//       {/* Sticky Background Engineering Details */}
//       <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-30 z-0" />
//       <div className="absolute inset-0 pointer-events-none blueprint-grid-fine opacity-20 z-0" />

//       {/* Horizontal Scroll Container */}
//       <div ref={scrollRef} className="flex h-screen w-[800vw] items-center relative z-10">

//         {/* PANEL 0: Cinematic Typography Opening */}
//         <section className="horizontal-panel w-screen h-screen flex flex-col justify-center px-12 md:px-24 select-none shrink-0 relative bg-white border-r border-[#E5E9F0]">
//           <div className="max-w-5xl">
//             <span className="text-[10px] font-mono tracking-widest text-[#5A6B82] uppercase block mb-6">
//               CDS CAPABILITY INDEX // MELBOURNE
//             </span>
//             <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-[#0D2B52] leading-[0.9] uppercase">
//               Every <br />
//               Appliance. <br />
//               Expertly <br />
//               Serviced.
//             </h1>
//             <p className="text-[#5A6B82] text-xs font-mono tracking-widest uppercase mt-12 block">
//               [ SCROLL VERTICALLY TO EXPLORE PANELS ]
//             </p>
//           </div>
//         </section>

//         {/* PANELS 1 to 7: Service Showcases */}
//         {PANELS.map((panel, idx) => (
//           <section
//             key={panel.id}
//             className="horizontal-panel w-screen h-screen flex items-center justify-between px-12 md:px-24 shrink-0 relative border-r border-[#E5E9F0]"
//           >
//             {/* Background Panel Marker */}
//             <div className="absolute bottom-12 left-12 text-[10px] font-mono text-[#5A6B82]/40 tracking-wider">
//               {panel.specCode} // 0{idx + 1}
//             </div>

//             {/* Split layout: Content on Left, Compositions on Right */}
//             <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl mx-auto gap-12 items-center">

//               {/* Left Column: Huge Editorial Typography & Description */}
//               <div className="lg:col-span-5 space-y-8 parallax-text">
//                 <div className="space-y-2">
//                   <span className="text-[9px] font-mono text-emerald-600 font-bold uppercase tracking-wider block">
//                     ACTIVE PROTOCOL
//                   </span>
//                   <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0D2B52] leading-none">
//                     {panel.title.map((line, i) => (
//                       <span key={i} className="block">
//                         {line}
//                       </span>
//                     ))}
//                   </h2>
//                 </div>
//                 <p className="text-sm text-[#5A6B82] leading-relaxed max-w-sm">
//                   {panel.desc}
//                 </p>
//               </div>

//               {/* Right Column: High-End Image Composition Layout */}
//               <div className="lg:col-span-7 relative flex items-center justify-center min-h-[400px]">

//                 {/* Large Background Frame */}
//                 <div className="relative w-[85%] aspect-[16/10] rounded-sm bg-[#F7F9FC] border border-[#E5E9F0] p-2.5 shadow-2xl overflow-hidden parallax-lg">
//                   <div className="relative w-full h-full rounded-sm overflow-hidden bg-white">
//                     <Image
//                       src={panel.imageLg}
//                       alt={`${panel.title.join(" ")} Feature`}
//                       fill
//                       className="object-cover"
//                     />
//                     <div className="absolute inset-0 border-[6px] border-white/20 pointer-events-none" />
//                   </div>
//                 </div>

//                 {/* Overlapping Floating Small detail Frame */}
//                 <div className="absolute -bottom-8 -left-4 w-48 sm:w-56 bg-white border border-[#E5E9F0] p-2 rounded-sm shadow-2xl parallax-sm z-20">
//                   <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#F7F9FC]">
//                     <Image
//                       src={panel.imageSm}
//                       alt={`${panel.title.join(" ")} Detail`}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="flex items-center justify-between text-[9px] font-mono mt-2">
//                     <span className="text-[#0D2B52] font-semibold">TOLERANCE CODE</span>
//                     <span className="text-emerald-600 font-bold">PASS // OK</span>
//                   </div>
//                 </div>

//               </div>

//             </div>
//           </section>
//         ))}

//       </div>
//     </div>
//   );
// }

// NEW GEMINI CODE

// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface AestheticPanel {
//   id: string;
//   title: string;
//   accentWord: string;
//   subtitle: string;
//   imageTop: string;
//   imageBottom: string;
//   specTag: string;
// }

// // 4 Bold, Graphic, Non-Shiny Panels utilizing Flat Lemon Green, Jelly Blue, and White
// const PANELS: AestheticPanel[] = [
//   {
//     id: "panel-1",
//     title: "PRECISION",
//     accentWord: "DIAGNOSTICS.",
//     subtitle: "We don't guess; we test. Comprehensive fault mapping for European circuitry and mechanical systems.",
//     imageTop: "/hero-composition.png",
//     imageBottom: "/hero-detail.png",
//     specTag: "01 // DIAGNOSTIC MASTERY",
//   },
//   {
//     id: "panel-2",
//     title: "ATMOSPHERIC",
//     accentWord: "CONTROL.",
//     subtitle: "Split systems, ducted refrigeration, and evaporative cooling calibrated to peak thermodynamic COP.",
//     imageTop: "/seasonal-cooling.png",
//     imageBottom: "/property-dashboard.png",
//     specTag: "02 // CLIMATE SYSTEMS",
//   },
//   {
//     id: "panel-3",
//     title: "PREMIUM",
//     accentWord: "APPLIANCES.",
//     subtitle: "Factory-grade restorations for induction cooktops, built-in steam ovens, and precision laundry systems.",
//     imageTop: "/final-cta.png",
//     imageBottom: "/technician-arrival.png",
//     specTag: "03 // KITCHEN & LAUNDRY",
//   },
//   {
//     id: "panel-4",
//     title: "UNCOMPROMISING",
//     accentWord: "EXCELLENCE.",
//     subtitle: "Victoria's trusted repair network, backed by guaranteed 100% genuine OEM replacement parts.",
//     imageTop: "/technician-arrival.png",
//     imageBottom: "/hero-composition.png",
//     specTag: "04 // SERVICE CAPABILITY",
//   },
// ];

// export default function ServicesExplorer() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current || !scrollRef.current) return;

//     const sections = gsap.utils.toArray(".aesthetic-panel");
//     const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

//     // Smooth, fast horizontal translation
//     const pin = gsap.to(scrollRef.current, {
//       x: () => -totalWidth,
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 0.8,
//         start: "top top",
//         end: () => `+=${totalWidth}`,
//         invalidateOnRefresh: true,
//       },
//     });

//     // Parallax framing images that glide around the centralized typography without blocking it
//     sections.forEach((section: any) => {
//       const imgTop = section.querySelector(".parallax-top");
//       const imgBottom = section.querySelector(".parallax-bottom");
//       const textGroup = section.querySelector(".parallax-text");

//       if (textGroup) {
//         gsap.fromTo(
//           textGroup,
//           { x: 60, opacity: 0.8 },
//           {
//             x: -60,
//             opacity: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: section,
//               containerAnimation: pin,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           }
//         );
//       }

//       if (imgTop) {
//         gsap.fromTo(
//           imgTop,
//           { y: 50, x: -30, rotation: -3, scale: 0.95 },
//           {
//             y: -50,
//             x: 20,
//             rotation: 1,
//             scale: 1.05,
//             ease: "none",
//             scrollTrigger: {
//               trigger: section,
//               containerAnimation: pin,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           }
//         );
//       }

//       if (imgBottom) {
//         gsap.fromTo(
//           imgBottom,
//           { y: -50, x: 30, rotation: 3, scale: 1.05 },
//           {
//             y: 50,
//             x: -20,
//             rotation: -1,
//             scale: 0.95,
//             ease: "none",
//             scrollTrigger: {
//               trigger: section,
//               containerAnimation: pin,
//               start: "left right",
//               end: "right left",
//               scrub: true,
//             },
//           }
//         );
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="relative overflow-hidden select-none bg-[#FCFCFC] border-b border-slate-200">

//       {/* Horizontal Scroll Track (4 Panels = 400vw width) */}
//       <div ref={scrollRef} className="flex h-screen w-[400vw] items-center relative z-10">

//         {PANELS.map((panel) => (
//           <section
//             key={panel.id}
//             className="aesthetic-panel w-screen h-screen flex flex-col justify-center items-center relative shrink-0 overflow-hidden bg-[#FCFCFC] px-6 sm:px-12 md:px-20"
//           >
//             {/* 📍 CLEAN ARCHITECTURAL DOT GRID (Matte, No Glows) */}
//             <div
//               className="absolute inset-0 opacity-[0.35] pointer-events-none"
//               style={{
//                 backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`,
//                 backgroundSize: '24px 24px'
//               }}
//             />

//             {/* 📍 SOLID JELLY-BLUE & WHITE ARCHITECTURAL SPEC TAG */}
//             <div className="absolute top-10 left-6 sm:left-12 md:left-20 z-40 flex items-center gap-2 bg-[#0B1E36] text-white px-4 py-1.5 rounded-md shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-[#A3E635]"></span>
//               <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
//                 {panel.specTag}
//               </span>
//             </div>

//             {/* 📍 CENTRALIZED, BOLD, MATTE TYPOGRAPHY COMPOSITION */}
//             <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[65vh]">

//               {/* 1. Top-Left Floating Image Card (Solid White Border, Flat Shadow, Zero Shine) */}
//               <div className="parallax-top absolute top-[2%] left-[2%] sm:left-[6%] w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
//                 <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100">
//                   <Image
//                     src={panel.imageTop}
//                     alt={`${panel.title} Feature`}
//                     fill
//                     sizes="300px"
//                     className="object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//               {/* 2. Massive Bold Central Typography (100% Matte, Flat Graphic Colors) */}
//               <div className="parallax-text z-30 max-w-4xl mx-auto text-center px-4 py-6">
//                 <h2 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#0B1E36] uppercase leading-[0.95] mb-6">
//                   {panel.title} <br />
//                   {/* 📍 FLAT LEMON GREEN GRAPHIC HIGHLIGHT BLOCK (Zero Shine, Pure Swiss Style) */}
//                   <span className="inline-block bg-[#A3E635] text-[#0B1E36] px-3 sm:px-5 py-1 rounded-sm mt-1 shadow-sm">
//                     {panel.accentWord}
//                   </span>
//                 </h2>

//                 {/* Clean, high-contrast subtitle on a solid matte white card */}
//                 <div className="inline-block bg-white border border-slate-200 px-6 py-3 rounded-lg shadow-sm max-w-xl mx-auto">
//                   <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
//                     {panel.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* 3. Bottom-Right Floating Image Card (Solid White Border, Flat Shadow, Zero Shine) */}
//               <div className="parallax-bottom absolute bottom-[2%] right-[2%] sm:right-[6%] w-44 sm:w-56 md:w-64 aspect-[1/1] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
//                 <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100">
//                   <Image
//                     src={panel.imageBottom}
//                     alt={`${panel.title} Detail`}
//                     fill
//                     sizes="300px"
//                     className="object-cover transition-transform duration-700 hover:scale-105"
//                   />
//                 </div>
//               </div>

//             </div>

//             {/* Bottom Navigation Prompt */}
//             <div className="absolute bottom-8 z-30 text-center">
//               <span className="font-mono text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">
//                 [ SCROLL HORIZONTALLY TO EXPLORE // 01-04 ]
//               </span>
//             </div>

//           </section>
//         ))}

//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CapabilityPanel {
  id: string;
  title: string;
  accentWord: string;
  subtitle: string;
  imageTop: string;
  imageBottom: string;
  specTag: string;
  hudCode: string;
  ctaText?: string;
  ctaLink?: string;
}

// 4 Precision Panels utilizing real CDS Appliance Services data & Summer seasonal priorities
const PANELS: CapabilityPanel[] = [
  {
    id: "panel-hvac",
    title: "AIR CONDITIONING &",
    accentWord: "HVAC SYSTEMS.",
    subtitle: "As Melbourne summer approaches, don't wait for heatwave breakdowns. Precision diagnostics, rapid repairs, and efficiency servicing for split systems, ducted climate networks, and VRF units.",
    imageTop: "/hero-composition.png",
    imageBottom: "/seasonal-cooling.png",
    specTag: "01 // SUMMER PRIORITY // HVAC",
    hudCode: "THERMAL_COP // CALIBRATED_VIC",
  },
  {
    id: "panel-evap",
    title: "EVAPORATIVE",
    accentWord: "COOLING CARE.",
    subtitle: "Maximized airflow for the peak Australian summer. Comprehensive pre-season cleanings, filter pad replacements, water distribution checks, and motor alignment across Greater Melbourne.",
    imageTop: "/seasonal-cooling.png",
    imageBottom: "/property-dashboard.png",
    specTag: "02 // SUMMER PRIORITY // EVAP",
    hudCode: "AIRFLOW_VOL // HYGIENE_PASS",
  },
  {
    id: "panel-appliances",
    title: "ALL ELECTRICAL",
    accentWord: "APPLIANCES.",
    subtitle: "Melbourne's premier electrical specialists. Factory-grade diagnostics and genuine OEM part repairs for high-end ovens, induction cooktops, rangehoods, dishwashers, washing machines, and refrigeration.",
    imageTop: "/final-cta.png",
    imageBottom: "/technician-arrival.png",
    specTag: "03 // RESIDENTIAL & KITCHEN",
    hudCode: "OEM_PARTS // 100%_GUARANTEED",
  },
  {
    id: "panel-property",
    title: "THE ONE-STOP",
    accentWord: "PROPERTY SOLUTION.",
    subtitle: "Tailored for real estate agents and property managers. Beyond electrical appliances, we provide dedicated plumbing and handyman maintenance under one reliable, priority-dispatch roof.",
    imageTop: "/technician-arrival.png",
    imageBottom: "/hero-composition.png",
    specTag: "04 // REAL ESTATE NETWORK",
    hudCode: "SLA_DISPATCH // PRIORITY_ACCESS",
    ctaText: "Inquire for Property Management →",
    ctaLink: "/property-management",
  },
];

export default function ServicesExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const sections = gsap.utils.toArray(".capability-panel");
    const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

    // Snappy, engineered horizontal translation
    const pin = gsap.to(scrollRef.current, {
      x: () => -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.8,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Stark-Inspired Kinetic Parallax: Counter-translating floating image brackets
    sections.forEach((section: any) => {
      const imgTop = section.querySelector(".hud-frame-top");
      const imgBottom = section.querySelector(".hud-frame-bottom");
      const textGroup = section.querySelector(".kinetic-text");

      if (textGroup) {
        gsap.fromTo(
          textGroup,
          { x: 80, opacity: 0.7 },
          {
            x: -80,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              containerAnimation: pin,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      }

      if (imgTop) {
        gsap.fromTo(
          imgTop,
          { y: 70, x: -40, rotation: -2, scale: 0.95 },
          {
            y: -70,
            x: 20,
            rotation: 1,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              containerAnimation: pin,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      }

      if (imgBottom) {
        gsap.fromTo(
          imgBottom,
          { y: -70, x: 40, rotation: 2, scale: 1.05 },
          {
            y: 70,
            x: -20,
            rotation: -1,
            scale: 0.95,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              containerAnimation: pin,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden select-none bg-[#FCFCFC] border-b border-slate-200">

      {/* Horizontal Scroll Track (4 Panels = 400vw width) */}
      <div ref={scrollRef} className="flex h-screen w-[400vw] items-center relative z-10">

        {PANELS.map((panel) => (
          <section
            key={panel.id}
            className="capability-panel w-screen h-screen flex flex-col justify-center items-center relative shrink-0 overflow-hidden bg-[#FCFCFC] px-6 sm:px-12 md:px-20"
          >
            {/* Precision Engineering Dot Grid */}
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`,
                backgroundSize: '24px 24px'
              }}
            />

            {/* Top HUD Spec Tag */}
            <div className="absolute top-10 left-6 sm:left-12 md:left-20 z-40 flex items-center gap-2 bg-[#0B1E36] text-white px-4 py-1.5 rounded-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#A3E635]"></span>
              <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">
                {panel.specTag}
              </span>
            </div>

            {/* Stark-Inspired HUD Telemetry Marker in Top Right */}
            <div className="absolute top-10 right-6 sm:right-12 md:right-20 z-40 hidden md:flex items-center gap-2 font-mono text-[11px] text-slate-400 tracking-wider">
              <span>SYS_REF: {panel.hudCode}</span>
            </div>

            {/* Centralized, Bold, High-Readability Composition */}
            <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[65vh]">

              {/* 1. Top-Left Parallax Frame with HUD Corner Brackets */}
              <div className="hud-frame-top absolute top-[2%] left-[2%] sm:left-[5%] w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 group">
                  <Image
                    src={panel.imageTop}
                    alt={`${panel.title} Feature`}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* HUD Precision Brackets */}
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
                </div>
              </div>

              {/* 2. Massive Bold Central Typography (100% Matte, Highly Legible) */}
              <div className="kinetic-text z-30 max-w-4xl mx-auto text-center px-4 py-6">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0B1E36] uppercase leading-[0.95] mb-6">
                  {panel.title} <br />
                  {/* Flat Lemon Green Architectural Block (Matte, Zero Shine) */}
                  <span className="inline-block bg-[#A3E635] text-[#0B1E36] px-3 sm:px-5 py-1 rounded-sm mt-1 shadow-sm">
                    {panel.accentWord}
                  </span>
                </h2>

                {/* Crisp White Readable Subtitle on Matte Card */}
                <div className="inline-block bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm max-w-xl mx-auto">
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                    {panel.subtitle}
                  </p>

                  {/* Dedicated Action Button for Property Managers (Panel 4) */}
                  {panel.ctaText && panel.ctaLink && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-center">
                      <Link
                        href={panel.ctaLink}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#0B1E36] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#2563EB] transition-colors shadow-2xs"
                      >
                        <span>{panel.ctaText}</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Bottom-Right Parallax Frame with HUD Corner Brackets */}
              <div className="hud-frame-bottom absolute bottom-[2%] right-[2%] sm:right-[5%] w-44 sm:w-56 md:w-64 aspect-[1/1] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 group">
                  <Image
                    src={panel.imageBottom}
                    alt={`${panel.title} Detail`}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* HUD Precision Brackets */}
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* Bottom Navigation Prompt */}
            <div className="absolute bottom-8 z-30 text-center">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">
                [ SCROLL HORIZONTALLY TO EXPLORE // 01-04 ]
              </span>
            </div>

          </section>
        ))}

      </div>
    </div>
  );
}