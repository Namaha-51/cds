"use client";
import contentData from "../../data/content.json";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AUTHORISED_BRANDS = [
  { name: 'Miele', src: '/logos/miele.png', status: 'Preferred Service Provider', sizeClass: 'w-48 sm:w-56 md:w-64 h-16 sm:h-20', delay: '0ms' },
  { name: 'Bosch', src: '/logos/bosch.png', status: 'Preferred Service Provider', sizeClass: 'w-64 sm:w-72 md:w-80 h-24 sm:h-28', delay: '300ms' },
  { name: 'Ariston', src: '/logos/ariston.png', status: 'Preferred Service Provider', sizeClass: 'w-64 sm:w-72 md:w-80 h-24 sm:h-28', delay: '600ms' },
];

export default function PartnersMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#FCFCFC] border-y border-slate-200/80 py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[180px] bg-white/80 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1E36] tracking-tight max-w-3xl mx-auto">
          {contentData.home.partnersTitle}
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 items-center">
          {AUTHORISED_BRANDS.map((brand) => (
            <div key={brand.name} style={{ transitionDelay: isVisible ? brand.delay : '0ms' }} className={`group relative px-6 py-8 sm:py-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
              <div className={`relative ${brand.sizeClass} flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105`}>
                <Image src={brand.src} alt={`${brand.name} Authorised Service Partner Melbourne`} fill sizes="400px" className="object-contain filter grayscale-[15%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out p-2" />
              </div>
              <div className="absolute bottom-1 sm:bottom-2 opacity-0 transform translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1E36] bg-white/90 border border-slate-300/80 px-4 py-1 rounded-full shadow-sm backdrop-blur-md">
                  ✓ {brand.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ transitionDelay: '600ms' }} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          {contentData.home.partnersSub}
        </p>
      </div>
    </section>
  );
}