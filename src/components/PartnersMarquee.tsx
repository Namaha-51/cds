// import React from 'react';

// // Crisp, scalable SVG wordmarks for leading European & Japanese brands
// const BRAND_LOGOS = [
//   {
//     name: 'Miele',
//     logo: (
//       <svg className="h-7 w-auto fill-current" viewBox="0 0 120 30">
//         <path d="M12.5 5L0 30h7.5l4-8.5 4 8.5H23L10.5 5h2zM33 5v25h7V5h-7zM48 5v25h22v-6H55v-4h13v-6H55V9h14V5H48zM77 5v25h20v-6H84v-4h12v-6H84V9h13V5H77zM105 5v25h15v-6h-8V5h-7z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'Bosch',
//     logo: (
//       <svg className="h-6 w-auto fill-current" viewBox="0 0 140 28">
//         <path d="M0 2h14c5.5 0 9 3.5 9 8.5 0 3.5-2 6.5-5.5 7.5 4.5 1 6.5 4.5 6.5 8.5 0 6-4.5 9.5-10.5 9.5H0V2zm8 14h5c2.5 0 4-1.5 4-4s-1.5-4-4-4H8v8zm0 14h6c3 0 4.5-1.5 4.5-4.5S17 21 14 21H8v9zM36 18c0-10.5 7.5-17 17.5-17S71 7.5 71 18s-7.5 17-17.5 17S36 28.5 36 18zm26.5 0c0-6.5-3.5-10.5-9-10.5s-9 4-9 10.5 3.5 10.5 9 10.5 9-4 9-10.5zM76 29.5L80 24c3 3 7 5 11 5 4 0 6-1.5 6-4 0-2.5-2-3.5-7-4.5-7-1.5-11.5-4-11.5-10 0-6 5.5-9.5 12.5-9.5 5.5 0 10 1.5 13.5 5l-3.5 5.5c-3-2.5-6.5-4-9.5-4-3.5 0-5 1.5-5 3.5 0 2 2 3 6.5 4 7.5 1.5 12 4 12 10 0 6.5-5.5 10.5-13.5 10.5-6.5 0-11.5-2-15.5-6zM140 35h-8V2h8v33z" />
//       </svg>
//     ),
//   },
//   {
//     name: 'Smeg',
//     logo: (
//       <svg className="h-6 w-auto fill-current font-black tracking-widest" viewBox="0 0 110 24">
//         <text x="0" y="20" fontFamily="sans-serif" fontSize="24" fontWeight="900" letterSpacing="3">SMEG</text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Daikin',
//     logo: (
//       <svg className="h-6 w-auto fill-current" viewBox="0 0 120 24">
//         <text x="0" y="20" fontFamily="sans-serif" fontSize="22" fontWeight="800" letterSpacing="1">DAIKIN</text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Siemens',
//     logo: (
//       <svg className="h-6 w-auto fill-current" viewBox="0 0 130 24">
//         <text x="0" y="20" fontFamily="sans-serif" fontSize="22" fontWeight="700" letterSpacing="2">SIEMENS</text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Panasonic',
//     logo: (
//       <svg className="h-5 w-auto fill-current" viewBox="0 0 140 24">
//         <text x="0" y="19" fontFamily="sans-serif" fontSize="20" fontWeight="800" letterSpacing="1.5">Panasonic</text>
//       </svg>
//     ),
//   },
//   {
//     name: 'AEG',
//     logo: (
//       <svg className="h-6 w-auto fill-current" viewBox="0 0 80 24">
//         <text x="0" y="20" fontFamily="sans-serif" fontSize="22" fontWeight="900" letterSpacing="4">AEG</text>
//       </svg>
//     ),
//   },
//   {
//     name: 'Fisher & Paykel',
//     logo: (
//       <svg className="h-5 w-auto fill-current" viewBox="0 0 180 24">
//         <text x="0" y="18" fontFamily="sans-serif" fontSize="17" fontWeight="600" letterSpacing="1.5">FISHER & PAYKEL</text>
//       </svg>
//     ),
//   },
// ];

// export default function PartnersMarquee() {
//   return (
//     <section className="relative z-10 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">

//       {/* The Floating Thick Architectural Slab */}
//       <div className="relative bg-slate-900 text-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-slate-800 overflow-hidden">

//         {/* Subtle background ambient glow inside the slab */}
//         <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

//         <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8 pb-6 border-b border-slate-800/80">

//           {/* Left: Authoritative Badge & Title */}
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
//               <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
//                 Authorised Service Network
//               </span>
//             </div>
//             <h3 className="text-lg sm:text-xl font-medium text-slate-100 tracking-tight">
//               Warranty & maintenance partners for Europe & Japan’s leading manufacturers
//             </h3>
//           </div>

//           {/* Right: Guarantee Tag */}
//           <div className="shrink-0 flex items-center gap-3 bg-slate-800/60 border border-slate-700/60 px-4 py-2 rounded-lg">
//             <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <span className="text-xs font-medium text-slate-300">
//               100% Genuine OEM Parts Guaranteed
//             </span>
//           </div>

//         </div>

//         {/* The Marquee Track Container with CSS Edge-Fade Masks */}
//         <div
//           className="relative w-full overflow-hidden py-4"
//           style={{
//             maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
//             WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
//           }}
//         >

//           {/* Animated Scrolling Track (Duplicated array for infinite loop) */}
//           <div className="flex items-center gap-16 sm:gap-24 w-max animate-infinite-scroll hover:[animation-play-state:paused] transition-all">
//             {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
//               <div
//                 key={`${brand.name}-${idx}`}
//                 className="group flex items-center justify-center cursor-pointer py-2 transition-all duration-300"
//                 title={`Authorised ${brand.name} Repair Specialist`}
//               >
//                 {/* Logo styling: starts muted at 40% opacity, snaps to 100% bright white on hover with a micro-scale */}
//                 <div className="text-slate-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-out">
//                   {brand.logo}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>

//       {/* Tailwind Animation Style Injection */}
//       <style dangerouslySetInnerHTML={{
//         __html: `
//         @keyframes infiniteScroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-33.333%); }
//         }
//         .animate-infinite-scroll {
//           animation: infiniteScroll 28s linear infinite;
//         }
//       `}} />

//     </section>
//   );
// }


"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AUTHORISED_BRANDS = [
  {
    name: 'Miele',
    src: '/logos/miele.png',
    status: 'Official Warranty Partner',
    delay: '0ms',
  },
  {
    name: 'Bosch',
    src: '/logos/bosch.png',
    status: 'Authorised Service Centre',
    delay: '300ms',
  },
  {
    name: 'Ariston',
    src: '/logos/ariston.png',
    status: 'Certified Repair Specialists',
    delay: '600ms',
  },
];

export default function PartnersMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Triggers the slow, buttery 1.2s entrance animation on scroll
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
      className="relative w-full bg-[#FCFCFC] border-y border-slate-200/80 py-24 sm:py-32 overflow-hidden"
    >
      {/* 
        📍 DARKER, SHARPER ENGINEERING GRID:
        Matches the technical grid from your Hero section perfectly without feeling yellow or grey.
      */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle crisp white glow in the center so the logos pop against the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[250px] bg-white/80 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 📍 UPGRADED HERO-STYLE HEADER: Bold, Dark Navy & Massive */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs mb-4">
          <span className="h-2 w-2 rounded-full bg-[#0B1E36]"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1E36]">
            Official Manufacturer Network
          </span>
        </div>

        {/* Matches the deep navy color (#0B1E36) and authority of your Hero H1 */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1E36] tracking-tight max-w-3xl mx-auto">
          Authorised Victorian Service Practitioners
        </h2>
      </div>

      {/* 
        📍 NO CARDS! DIRECT HOVER ARCHITECTURAL LAYOUT:
        Logos float directly on the background, separated by crisp 1px vertical rules.
      */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">

          {AUTHORISED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              style={{ transitionDelay: isVisible ? brand.delay : '0ms' }}
              className={`group relative px-6 py-12 sm:py-16 flex flex-col items-center justify-center cursor-pointer transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-16 sm:translate-y-20 scale-95'
                }`}
            >
              {/* 
                📍 MASSIVE LOGO SCALE:
                Bumped up to h-28 sm:h-32 (huge visual presence!).
                Hovers cleanly with a smooth 105% scale bump without needing a box.
              */}
              <div className="relative w-64 sm:w-72 md:w-80 h-24 sm:h-32 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                <Image
                  src={brand.src}
                  alt={`${brand.name} Authorised Service Partner Melbourne`}
                  fill
                  sizes="400px"
                  className="object-contain filter grayscale-[15%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out p-2"
                />
              </div>

              {/* Verified Status Tag - Slides up smoothly directly beneath the hovering logo */}
              <div className="absolute bottom-2 sm:bottom-4 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1E36] bg-white/90 border border-slate-300/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-md">
                  ✓ {brand.status}
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Credibility Tagline */}
      <div
        style={{ transitionDelay: '800ms' }}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          100% Genuine OEM Replacement Parts Guaranteed Across All Melbourne Repairs
        </p>
      </div>

    </section>
  );
}