"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#FAF8F5] text-[#0B1E36] overflow-hidden border-b border-slate-200/80 select-none">

      {/* 📍 TACTILE WARM ARCHITECTURAL DOT GRID */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C8BC94 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Column: Bold Direct Messaging */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5EDB8] border border-[#E0D49C] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]"></span>
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#7A6830]">
              READY FOR DISPATCH // GREATER MELBOURNE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold sm:font-black tracking-tight text-[#0B1E36] leading-[1.05]">
            Secure your certified technician today.
          </h2>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl font-normal">
            From pre-season HVAC and evaporative cooling maintenance to factory-authorized appliance repairs, our master technicians provide guaranteed, precision diagnostics across Melbourne.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#0B1E36] text-white font-mono text-xs font-bold tracking-wider uppercase rounded-md transition-all duration-300 hover:bg-[#2563EB] shadow-lg">
              <span className="flex items-center gap-2">
                Book Diagnostic Call
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <a
              href="tel:1300237482"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1E36] border border-slate-300 font-mono text-xs font-bold tracking-wider uppercase rounded-md hover:border-[#0B1E36] transition-colors shadow-2xs"
            >
              Call 1300 CDS HVAC
            </a>
          </div>
        </div>

        {/* Right Column: High-End Framed Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px]">
          <div className="relative w-full aspect-[4/3] rounded-xl bg-white border border-slate-200/80 p-3 shadow-2xl overflow-hidden group">
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-100">
              <Image
                src="/final-cta.png"
                alt="HVAC Diagnostics Compressor Detail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Architectural HUD Corner Brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0B1E36]/60 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0B1E36]/60 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}