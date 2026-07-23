"use client";

import React, { useEffect, useRef, useState } from "react";

interface TimelineStep {
  id: string;
  num: string;
  title: string;
  desc: string;
  metric: string;
  icon: React.ReactNode;
}

const STEPS: TimelineStep[] = [
  {
    id: "dispatch",
    num: "01",
    title: "Request Dispatch",
    desc: "Submit your details or call our priority desk. Our Melbourne logistics system routes a technician certified specifically in your appliance brand.",
    metric: "SLA // < 2 HOURS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6V20M20 20L10 32M20 20L30 32" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 28H28" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 13C16.866 9.13401 23.134 9.13401 27 13" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9C15.0751 2.92487 24.9249 2.92487 31 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.5" fill="#2563EB" />
      </svg>
    ),
  },
  {
    id: "diagnosis",
    num: "02",
    title: "Precision Diagnosis",
    desc: "We perform full electrical insulation checks, pressurized refrigerant line traces, and logic circuit diagnostics using calibrated testing apparatus.",
    metric: "DIAGNOSTIC // 100% TRACE",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8C6 6.89543 6.89543 6 8 6H32C33.1046 6 34 6.89543 34 8V28C34 29.1046 33.1046 30 32 30H8C6.89543 30 6 29.1046 6 28V8Z" stroke="#0B1E36" strokeWidth="2" />
        <path d="M14 30L12 36H28L26 30" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18H15L18 11L22 25L25 18H30" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "fix",
    num: "03",
    title: "Authorized Fix",
    desc: "We install genuine OEM factory components and trace system draws to guarantee exact mechanical tolerances and original manufacturer warranty.",
    metric: "PARTS // GENUINE OEM",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.5 13.5C28.9853 15.9853 28.9853 20.0147 26.5 22.5L14.5 34.5C12.0147 36.9853 7.98528 36.9853 5.5 34.5C3.01472 32.0147 3.01472 27.9853 5.5 25.5L17.5 13.5C19.9853 11.0147 24.0147 11.0147 26.5 13.5Z" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="12" r="6" stroke="#2563EB" strokeWidth="2" />
        <circle cx="28" cy="12" r="2" fill="#2563EB" />
      </svg>
    ),
  },
  {
    id: "testing",
    num: "04",
    title: "Stress Testing",
    desc: "The appliance is run under peak operating load while monitoring thermal COP outputs, current draw, and internal refrigerant gas stability.",
    metric: "LOAD TEST // PEAK COP",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 32C6 24.268 12.268 18 20 18C27.732 18 34 24.268 34 32" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 32H34" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 32L27 23" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="32" r="3" fill="#0B1E36" />
        <path d="M12 24L14 26M28 24L26 26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "seal",
    num: "05",
    title: "Compliance Seal",
    desc: "We sign off the compliance register, deliver digital diagnostic logs, and issue our backed 2-Year Victorian Building Authority warranty seal.",
    metric: "WARRANTY // 2 YEARS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L8 9V20C8 28.25 13.25 34.75 20 37C26.75 34.75 32 28.25 32 20V9L20 4Z" stroke="#0B1E36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 20L18 24L26 15" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TimelineProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#FCFCFC] text-[#0F172A] overflow-hidden border-b border-slate-200/80 select-none"
    >
      {/* Precision Engineering Dot-Grid */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#94A3B8 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* 1.5s Animated Header */}
        <div
          style={{ transitionDuration: "1500ms" }}
          className={`max-w-4xl mb-20 sm:mb-24 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-slate-500">
              WORKFLOW PROTOCOLS
            </span>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#2563EB] bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
              <span>VBA COMPLIANT REGISTER</span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold sm:font-black tracking-tight text-[#0B1E36] leading-[1.05]">
            Our process is clean, structured, and certified.
          </h2>
        </div>

        {/* High-End Continuous Timeline Layout */}
        <div className="relative">

          {/* Continuous Architectural Timeline Beam */}
          <div className="absolute top-6 left-6 bottom-6 w-0.5 lg:w-full lg:h-0.5 bg-slate-200/80 -z-10 lg:left-0 lg:right-0 lg:top-7" />

          {/* 5-Stage Staggered Progress Grid (1.5s Entrance) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {STEPS.map((step, idx) => {
              // Staggered delays: header at 0ms, steps cascade from 250ms onwards
              const delay = `${250 + idx * 150}ms`;
              return (
                <div
                  key={step.id}
                  style={{
                    transitionDuration: "1500ms",
                    transitionDelay: isVisible ? delay : "0ms"
                  }}
                  className={`group relative pl-14 lg:pl-0 flex flex-col justify-between transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
                    }`}
                >
                  <div>
                    {/* Timeline Node & Monospace Marker */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="absolute left-4 lg:relative lg:left-auto w-4 h-4 rounded-full bg-white border-2 border-[#2563EB] shadow-2xs flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0B1E36]" />
                      </div>

                      <span className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] tracking-wider">
                        [{step.num}]
                      </span>
                    </div>

                    {/* Dual-Tone Custom Engineering SVG */}
                    <div className="mb-6 text-[#0B1E36] group-hover:scale-110 group-hover:translate-x-1 lg:group-hover:translate-x-0 transition-all duration-300 ease-out">
                      {step.icon}
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1E36] tracking-tight leading-snug mb-3 group-hover:text-[#2563EB] transition-colors">
                      {step.title}
                    </h3>

                    {/* Architectural Accent Rule */}
                    <div className="w-8 h-[1px] bg-slate-300 my-3 group-hover:w-16 group-hover:bg-[#2563EB] transition-all duration-300" />

                    {/* Stage Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Telemetry Metric Footer */}
                  <div className="mt-8 pt-3 border-t border-slate-200/60 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-400 group-hover:text-[#0B1E36] transition-colors">
                    {step.metric}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 1.5s Animated Footer Bar */}
        <div
          style={{
            transitionDuration: "1500ms",
            transitionDelay: "1000ms"
          }}
          className={`mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span>CDS APPLIANCE SERVICES // VICTORIAN WORKFLOW REGISTRY</span>
          <span className="text-[#0B1E36] font-bold mt-2 sm:mt-0">SLA DISPATCH GUARANTEE ACROSS GREATER MELBOURNE</span>
        </div>

      </div>
    </section>
  );
}