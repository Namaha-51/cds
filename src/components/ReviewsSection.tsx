"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ReviewCard {
  id: string;
  author: string;
  location: string;
  quote: string;
  serviceTag: string;
}

const REVIEWS: ReviewCard[] = [
  {
    id: "review-1",
    author: "James Edward Valentine",
    location: "MELBOURNE, VIC",
    serviceTag: "MIELE OVEN DIAGNOSTICS",
    quote: "We had Chris over to repair our Miele oven after it stopped heating. He was able to troubleshoot and fix it efficiently with true professional expertise. Highly recommended.",
  },
  {
    id: "review-2",
    author: "Mei Jie Tang",
    location: "GREATER MELBOURNE",
    serviceTag: "DISHWASHER INSTALLATION",
    quote: "We booked CDS to install our new dishwasher and the technician Soman was great. Extremely polite, tidy, and carried out the installation to absolute perfection.",
  },
  {
    id: "review-3",
    author: "Liza Oates",
    location: "VICTORIA",
    serviceTag: "RELIABLE APPLIANCE REPAIR",
    quote: "Chris was great. Very reliable and conscientious. He arrived on time, diagnosed the issue instantly, and had everything running smoothly in no time.",
  },
];

export default function ReviewsSection() {
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
      className="relative py-28 sm:py-36 bg-black text-white overflow-hidden border-b border-white/10 select-none"
    >
      {/* Precision Engineering Dot-Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* Header with 1.6s Luxury Entrance Animation */}
        <div
          className={`max-w-4xl mb-16 sm:mb-20 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-3">
            <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-slate-400">
              VERIFIED FEEDBACK
            </span>
            <Link
              href="https://cdsapplianceservices.com.au/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#FACC15] bg-[#141414] border border-white/15 px-3.5 py-1.5 rounded-full hover:bg-[#FACC15] hover:text-black transition-colors shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-[#FACC15] animate-pulse"></span>
              <span>GOOGLE REVIEWS (4.9 / 5.0) →</span>
            </Link>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold sm:font-black tracking-tight text-white leading-[1.05]">
            Trusted by homeowners, property managers & studios.
          </h2>
        </div>

        {/* 3-Column Pure Matte Black Review Grid with 1.6s Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

          {REVIEWS.map((review, idx) => {
            const delay = `${300 + idx * 200}ms`;
            return (
              <div
                key={review.id}
                style={{ transitionDelay: isVisible ? delay : "0ms" }}
                className={`group relative bg-[#0A0A0A] hover:bg-[#121212] border border-white/15 hover:border-[#FACC15]/60 rounded-xl p-8 flex flex-col justify-between transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#FACC15]">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-sm">{star}</span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-sm">
                      VERIFIED CLIENT
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8 italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {review.author}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                      [{review.location}]
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#FACC15] bg-white/5 px-2 py-1 rounded border border-white/10">
                    {review.serviceTag}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Verification Footer */}
        <div
          style={{ transitionDelay: "900ms" }}
          className={`mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 transition-all duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <span>CDS APPLIANCE SERVICES // OFFICIAL GOOGLE BUSINESS FEEDBACK</span>
          <Link
            href="https://cdsapplianceservices.com.au/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FACC15] hover:underline mt-2 sm:mt-0 font-bold"
          >
            VIEW ALL 66+ REVIEWS ON OFFICIAL PORTAL →
          </Link>
        </div>

      </div>
    </section>
  );
}