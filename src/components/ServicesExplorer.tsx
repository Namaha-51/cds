// "use client";
// import contentData from "../../data/content.json";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ServicesExplorer() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const PANELS = [
//     { id: "panel-hvac", title: contentData.home.servicesTitle1, accentWord: contentData.home.servicesAccent1, subtitle: contentData.home.servicesSub1, imageTop: "/hero-composition.png", imageBottom: "/seasonal-cooling.png", specTag: "01 // SUMMER PRIORITY // HVAC", hudCode: "THERMAL_COP // CALIBRATED_VIC" },
//     { id: "panel-evap", title: contentData.home.servicesTitle2, accentWord: contentData.home.servicesAccent2, subtitle: contentData.home.servicesSub2, imageTop: "/seasonal-cooling.png", imageBottom: "/property-dashboard.png", specTag: "02 // SUMMER PRIORITY // EVAPORATIVE COOLER", hudCode: "AIRFLOW_VOL // HYGIENE_PASS" },
//     { id: "panel-appliances", title: contentData.home.servicesTitle3, accentWord: contentData.home.servicesAccent3, subtitle: contentData.home.servicesSub3, imageTop: "/final-cta.png", imageBottom: "/technician-arrival.png", specTag: "03 // RESIDENTIAL & KITCHEN", hudCode: "GENUINE_PARTS // 100%_GUARANTEED" },
//     { id: "panel-property", title: contentData.home.servicesTitle4, accentWord: contentData.home.servicesAccent4, subtitle: contentData.home.servicesSub4, imageTop: "/technician-arrival.png", imageBottom: "/hero-composition.png", specTag: "04 // REAL ESTATE NETWORK", hudCode: "SLA_DISPATCH // PRIORITY_ACCESS", ctaText: contentData.home.servicesCta4, ctaLink: "/property-management" },
//   ];

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       if (!containerRef.current || !scrollRef.current) return;
//       const sections = gsap.utils.toArray(".capability-panel");
//       const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

//       const pin = gsap.to(scrollRef.current, {
//         x: -totalWidth,
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           pin: true,
//           pinSpacing: true,
//           scrub: 1,
//           start: "top top",
//           end: () => `+=${totalWidth}`,
//           invalidateOnRefresh: true,
//         },
//       });

//       sections.forEach((section: any) => {
//         const imgTop = section.querySelector(".hud-frame-top");
//         const imgBottom = section.querySelector(".hud-frame-bottom");
//         const textGroup = section.querySelector(".kinetic-text");

//         if (textGroup) gsap.fromTo(textGroup, { x: 50, opacity: 0.8 }, { x: -50, opacity: 1, ease: "none", scrollTrigger: { trigger: section, containerAnimation: pin, start: "left right", end: "right left", scrub: true } });
//         if (imgTop) gsap.fromTo(imgTop, { y: 40, x: -20 }, { y: -40, x: 10, ease: "none", scrollTrigger: { trigger: section, containerAnimation: pin, start: "left right", end: "right left", scrub: true } });
//         if (imgBottom) gsap.fromTo(imgBottom, { y: -40, x: 20 }, { y: 40, x: -10, ease: "none", scrollTrigger: { trigger: section, containerAnimation: pin, start: "left right", end: "right left", scrub: true } });
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="relative overflow-hidden select-none bg-[#FCFCFC] border-b border-slate-200">
//       <div ref={scrollRef} className="flex h-screen w-[400vw] items-center relative z-10">
//         {PANELS.map((panel) => (
//           <section key={panel.id} className="capability-panel w-screen h-screen flex flex-col justify-center items-center relative shrink-0 overflow-hidden bg-[#FCFCFC] px-6 sm:px-12 md:px-20">
//             <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />

//             <div className="absolute top-10 left-6 sm:left-12 md:left-20 z-40 flex items-center gap-2 bg-[#0B1E36] text-white px-4 py-1.5 rounded-md shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-[#A3E635]"></span>
//               <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">{panel.specTag}</span>
//             </div>

//             <div className="absolute top-10 right-6 sm:right-12 md:right-20 z-40 hidden md:flex items-center gap-2 font-mono text-[11px] text-slate-400 tracking-wider">
//               <span>SYS_REF: {panel.hudCode}</span>
//             </div>

//             <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[65vh]">
//               <div className="hud-frame-top absolute top-[2%] left-[2%] sm:left-[5%] w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
//                 <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 group">
//                   <Image src={panel.imageTop} alt={`${panel.title} Feature`} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
//                   <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
//                   <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
//                 </div>
//               </div>

//               <div className="kinetic-text z-30 max-w-4xl mx-auto text-center px-4 py-6">
//                 <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0B1E36] uppercase leading-[0.95] mb-6">
//                   {panel.title} <br />
//                   <span className="inline-block bg-[#A3E635] text-[#0B1E36] px-3 sm:px-5 py-1 rounded-sm mt-1 shadow-sm">
//                     {panel.accentWord}
//                   </span>
//                 </h2>

//                 <div className="inline-block bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm max-w-xl mx-auto">
//                   <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">{panel.subtitle}</p>

//                   {panel.ctaText && panel.ctaLink && (
//                     <div className="mt-4 pt-3 border-t border-slate-100 flex justify-center">
//                       <Link href={panel.ctaLink} className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#0B1E36] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#2563EB] transition-colors shadow-2xs">
//                         <span>{panel.ctaText}</span>
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="hud-frame-bottom absolute bottom-[2%] right-[2%] sm:right-[5%] w-44 sm:w-56 md:w-64 aspect-[1/1] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
//                 <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 group">
//                   <Image src={panel.imageBottom} alt={`${panel.title} Detail`} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
//                   <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
//                   <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-8 z-30 text-center">
//               <span className="font-mono text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">[ SCROLL HORIZONTALLY TO EXPLORE // 01-04 ]</span>
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

export default function ServicesExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const PANELS = [
    { id: "panel-hvac", title: "AIR CONDITIONING &", accentWord: "HVAC SYSTEMS.", subtitle: "As Melbourne summer approaches, don't wait for heatwave breakdowns. Precision diagnostics, rapid repairs, and efficiency servicing for split systems, ducted climate networks, and VRF units.", imageTop: "/hero-composition.png", imageBottom: "/seasonal-cooling.png", specTag: "01 // SUMMER PRIORITY // HVAC", hudCode: "THERMAL_COP // CALIBRATED_VIC" },
    { id: "panel-evap", title: "EVAPORATIVE", accentWord: "COOLING CARE.", subtitle: "Maximized airflow for the peak Australian summer. Comprehensive pre-season cleanings, filter pad replacements, and water distribution checks across Greater Melbourne.", imageTop: "/seasonal-cooling.png", imageBottom: "/property-dashboard.png", specTag: "02 // SUMMER PRIORITY // EVAPORATIVE COOLER", hudCode: "AIRFLOW_VOL // HYGIENE_PASS" },
    { id: "panel-appliances", title: "ALL ELECTRICAL", accentWord: "APPLIANCES.", subtitle: "Melbourne's premier electrical appliance specialists. Manufacturer provided diagnostics and genuine part repairs for high-end ovens, induction cooktops, rangehoods, dishwashers, and washing machines.", imageTop: "/final-cta.png", imageBottom: "/technician-arrival.png", specTag: "03 // RESIDENTIAL & KITCHEN", hudCode: "GENUINE_PARTS // 100%_GUARANTEED" },
    { id: "panel-property", title: "THE ONE-STOP", accentWord: "PROPERTY SOLUTION.", subtitle: "Tailored for real estate agents and property managers. Beyond electrical appliances, we provide dedicated Electricians, cabinet makers and minor plumbing repairs under one roof.", imageTop: "/technician-arrival.png", imageBottom: "/hero-composition.png", specTag: "04 // REAL ESTATE NETWORK", hudCode: "SLA_DISPATCH // PRIORITY_ACCESS", ctaText: "Inquire for Property Management →", ctaLink: "/property-management" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!containerRef.current || !scrollRef.current) return;
      const sections = gsap.utils.toArray(".capability-panel");
      const totalWidth = scrollRef.current.scrollWidth - window.innerWidth;

      const pin = gsap.to(scrollRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((section: any) => {
        const imgTop = section.querySelector(".hud-frame-top");
        const imgBottom = section.querySelector(".hud-frame-bottom");
        const textGroup = section.querySelector(".kinetic-text");

        if (textGroup) gsap.fromTo(textGroup, { x: 50, opacity: 0.8 }, { x: -50, opacity: 1, ease: "none", scrollTrigger: { trigger: section, containerAnimation: pin, start: "left right", end: "right left", scrub: true } });
        if (imgTop) gsap.fromTo(imgTop, { y: 40, x: -20 }, { y: -40, x: 10, ease: "none", scrollTrigger: { trigger: section, containerAnimation: pin, start: "left right", end: "right left", scrub: true } });
        if (imgBottom) gsap.fromTo(imgBottom, { y: -40, x: 20 }, { y: 40, x: -10, ease: "none", scrollTrigger: { trigger: section, containerAnimation: pin, start: "left right", end: "right left", scrub: true } });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden select-none bg-[#FCFCFC] border-b border-slate-200">
      <div ref={scrollRef} className="flex h-screen w-[400vw] items-center relative z-10">
        {PANELS.map((panel) => (
          <section key={panel.id} className="capability-panel w-screen h-screen flex flex-col justify-center items-center relative shrink-0 overflow-hidden bg-[#FCFCFC] px-6 sm:px-12 md:px-20">
            <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />

            <div className="absolute top-10 left-6 sm:left-12 md:left-20 z-40 flex items-center gap-2 bg-[#0B1E36] text-white px-4 py-1.5 rounded-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#A3E635]"></span>
              <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase">{panel.specTag}</span>
            </div>

            <div className="absolute top-10 right-6 sm:right-12 md:right-20 z-40 hidden md:flex items-center gap-2 font-mono text-[11px] text-slate-400 tracking-wider">
              <span>SYS_REF: {panel.hudCode}</span>
            </div>

            <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[65vh]">
              <div className="hud-frame-top absolute top-[2%] left-[2%] sm:left-[5%] w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 group">
                  <Image src={panel.imageTop} alt={`${panel.title} Feature`} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
                </div>
              </div>

              <div className="kinetic-text z-30 max-w-4xl mx-auto text-center px-4 py-6">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0B1E36] uppercase leading-[0.95] mb-6">
                  {panel.title} <br />
                  <span className="inline-block bg-[#A3E635] text-[#0B1E36] px-3 sm:px-5 py-1 rounded-sm mt-1 shadow-sm">
                    {panel.accentWord}
                  </span>
                </h2>

                <div className="inline-block bg-white border border-slate-200 px-6 py-4 rounded-xl shadow-sm max-w-xl mx-auto">
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">{panel.subtitle}</p>

                  {panel.ctaText && panel.ctaLink && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex justify-center">
                      <Link href={panel.ctaLink} className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#0B1E36] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#2563EB] transition-colors shadow-2xs">
                        <span>{panel.ctaText}</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="hud-frame-bottom absolute bottom-[2%] right-[2%] sm:right-[5%] w-44 sm:w-56 md:w-64 aspect-[1/1] sm:aspect-[16/10] rounded-xl overflow-hidden shadow-xl z-20 bg-white p-2 border border-slate-200">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100 group">
                  <Image src={panel.imageBottom} alt={`${panel.title} Detail`} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
                  <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 z-30 text-center">
              <span className="font-mono text-[11px] font-bold tracking-widest text-[#2563EB] uppercase">[ SCROLL HORIZONTALLY TO EXPLORE // 01-04 ]</span>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}