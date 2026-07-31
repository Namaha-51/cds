"use client";
import contentData from "../../data/content.json";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function WhyPremium() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const COLUMNS = [
    {
      id: "hvac-summer",
      index: "01",
      title: contentData.home.whyCol1Title,
      desc: contentData.home.whyCol1Desc,
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
      title: contentData.home.whyCol2Title,
      desc: contentData.home.whyCol2Desc,
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
      title: contentData.home.whyCol3Title,
      desc: contentData.home.whyCol3Desc,
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
      title: contentData.home.whyCol4Title,
      desc: contentData.home.whyCol4Desc,
      linkText: contentData.home.whyCol4Link,
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

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-[#FAF9F6] text-[#0F172A] overflow-hidden border-b border-slate-200/80 select-none">
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none" style={{ backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className={`max-w-4xl mx-auto text-center mb-16 sm:mb-20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <span className="w-6 sm:w-8 h-[1px] bg-[#2563EB]"></span>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#0B1E36]">THE OUTCOME DIFFERENCE</span>
            </div>
            <span className="w-6 sm:w-8 h-[1px] bg-[#2563EB]"></span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold sm:font-black tracking-tight text-[#0B1E36] leading-[1.05]">
            {contentData.home.whyTitle}
          </h2>
          <div className="w-12 h-0.5 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 border-t border-b sm:border-b-0 border-slate-200/80">
          {COLUMNS.map((col, idx) => {
            const delay = `${150 + idx * 120}ms`;
            return (
              <div key={col.id} style={{ transitionDelay: isVisible ? delay : "0ms" }} className={`group relative py-10 sm:py-6 lg:py-4 px-0 sm:px-6 lg:px-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div>
                  <div className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] tracking-wider mb-6">[{col.index}]</div>
                  <div className="mb-6 text-[#0B1E36] group-hover:scale-105 transition-transform duration-300 ease-out">{col.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1E36] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">{col.title}</h3>
                  <div className="w-6 h-[1px] bg-slate-200 my-4 group-hover:w-12 group-hover:bg-[#2563EB] transition-all duration-300" />
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{col.desc}</p>
                </div>

                {col.linkText && col.linkUrl && (
                  <div className="mt-8 pt-2">
                    <Link href={col.linkUrl} className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#2563EB] hover:text-[#0B1E36] underline decoration-blue-200 underline-offset-4 hover:decoration-[#0B1E36] transition-all">
                      <span>{col.linkText}</span>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ transitionDelay: "700ms" }} className={`mt-14 text-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="font-mono text-[11px] font-medium text-slate-400 uppercase tracking-widest">{contentData.home.whyFooter}</span>
        </div>
      </div>
    </section>
  );
}