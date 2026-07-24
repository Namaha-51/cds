"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1E36] text-white overflow-hidden border-t border-white/10 select-none">

      {/* Precision Engineering Dot-Grid & Ambient Glows */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Increased Top & Bottom Container Breathing Room */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 relative z-10">

        {/* Evenly Spaced 4-Column Layout (3 / 3 / 3 / 3 Grid Spans) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-white/15">

          {/* Column 1: Brand & Compliance Credentials (Span 3) */}
          <div className="lg:col-span-3 space-y-6 lg:pr-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[#FACC15] text-[#0B1E36] font-black font-sans flex items-center justify-center text-base shadow-md shrink-0">
                CDS
              </div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-tight uppercase font-sans leading-none mb-1">
                  CDS Appliance Services
                </h3>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#FACC15] uppercase block">
                  ENGINEERING &amp; HVAC EXCELLENCE
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-medium font-sans">
              Melbourne&apos;s premium HVAC and high-end appliance engineering specialist group. Restoring operational variables to strict manufacturer tolerances.
            </p>

            <div className="font-sans text-xs sm:text-sm font-bold space-y-2.5 text-slate-200 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[#38BDF8]">VBA LIC:</span>
                <span className="text-white">207890</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38BDF8]">ARC LIC:</span>
                <span className="text-white">L-156076</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38BDF8]">ARCTick:</span>
                <span className="text-white">AU32269</span>
              </div>
            </div>
          </div>

          {/* Column 2: Climate Systems (Span 3 + Left Padding for Breathing Room) */}
          <div className="lg:col-span-3 space-y-6 lg:pl-8">
            <h4 className="font-sans text-sm font-black tracking-wider uppercase text-[#38BDF8] border-b border-white/10 pb-3">
              CLIMATE SYSTEMS
            </h4>
            <ul className="space-y-4 text-sm text-slate-200 font-medium font-sans">
              <li>
                <Link href="/services/split-systems" className="hover:text-white transition-colors block">
                  Split Systems
                </Link>
              </li>
              <li>
                <Link href="/services/evaporative-cooling" className="hover:text-white transition-colors block">
                  Evaporative Cooling
                </Link>
              </li>
              <li>
                <Link href="/services/ducted-heating" className="hover:text-white transition-colors block">
                  Gas Ducted Heating
                </Link>
              </li>
              <li>
                <Link href="/services/carbon-monoxide" className="hover:text-white transition-colors block">
                  Carbon Monoxide Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Appliance Care (Span 3) */}
          <div className="lg:col-span-3 space-y-6 lg:pl-4">
            <h4 className="font-sans text-sm font-black tracking-wider uppercase text-[#38BDF8] border-b border-white/10 pb-3">
              APPLIANCE CARE
            </h4>
            <ul className="space-y-4 text-sm text-slate-200 font-medium font-sans">
              <li>
                <Link href="/services/ovens" className="hover:text-white transition-colors block">
                  Ovens &amp; Cooktops
                </Link>
              </li>
              <li>
                <Link href="/services/dishwashers" className="hover:text-white transition-colors block">
                  Integrated Dishwashers
                </Link>
              </li>
              <li>
                <Link href="/services/washing-machines" className="hover:text-white transition-colors block">
                  Washing Machines
                </Link>
              </li>
              <li>
                <Link href="/services/refrigeration" className="hover:text-white transition-colors block">
                  High-End Refrigeration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Melbourne Dispatch (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-sans text-sm font-black tracking-wider uppercase text-[#38BDF8] border-b border-white/10 pb-3">
              MELBOURNE DISPATCH
            </h4>
            <div className="space-y-4 text-sm text-slate-200 font-medium font-sans">
              <p className="leading-relaxed">
                <strong className="text-white font-bold block mb-0.5">Office Address:</strong>
                Level 4, 350 Collins St, Melbourne VIC 3000
              </p>
              <p>
                <strong className="text-white font-bold block mb-0.5">Central Bookings:</strong>
                <a href="tel:1300237482" className="hover:text-[#38BDF8] transition-colors">1300 CDS HVAC</a>
              </p>
              <p>
                <strong className="text-white font-bold block mb-0.5">Support Desk:</strong>
                <a href="mailto:enquiries@cdsapplianceservices.com.au" className="hover:text-[#38BDF8] transition-colors break-all">
                  enquiries@cdsapplianceservices.com.au
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-sans font-semibold text-slate-300 gap-4">
          <span>&copy; {new Date().getFullYear()} CDS APPLIANCE SERVICES PTY LTD. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}