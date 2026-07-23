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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-12 relative z-10">

        {/* Main Footer Grid - Evenly Spaced 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/15">

          {/* Column 1: Brand & Compliance Credentials (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-[#FACC15] text-[#0B1E36] font-black font-mono flex items-center justify-center text-sm shadow-md">
                CDS
              </div>
              <div>
                <h3 className="font-bold text-white text-base tracking-tight uppercase">
                  CDS Appliance Services
                </h3>
                <span className="text-[10px] font-mono tracking-widest text-[#FACC15] uppercase block">
                  ENGINEERING & HVAC EXCELLENCE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-sm">
              Melbourne&apos;s premium HVAC and high-end appliance engineering specialist group. Restoring operational variables to strict manufacturer tolerances.
            </p>

            <div className="font-mono text-[11px] space-y-1.5 text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <span className="text-[#FACC15]">VBA LIC:</span>
                <span>207890</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FACC15]">ARC LIC:</span>
                <span>L-156076</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FACC15]">ARCTick:</span>
                <span>AU32269</span>
              </div>
            </div>
          </div>

          {/* Column 2: Climate Systems (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#FACC15]">
              CLIMATE SYSTEMS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/services/split-systems" className="hover:text-white transition-colors">
                  Split Systems
                </Link>
              </li>
              <li>
                <Link href="/services/evaporative-cooling" className="hover:text-white transition-colors">
                  Evaporative Cooling
                </Link>
              </li>
              <li>
                <Link href="/services/ducted-heating" className="hover:text-white transition-colors">
                  Gas Ducted Heating
                </Link>
              </li>
              <li>
                <Link href="/services/carbon-monoxide" className="hover:text-white transition-colors">
                  Carbon Monoxide Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Appliance Care (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#FACC15]">
              APPLIANCE CARE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li>
                <Link href="/services/ovens" className="hover:text-white transition-colors">
                  Ovens & Cooktops
                </Link>
              </li>
              <li>
                <Link href="/services/dishwashers" className="hover:text-white transition-colors">
                  Integrated Dishwashers
                </Link>
              </li>
              <li>
                <Link href="/services/washing-machines" className="hover:text-white transition-colors">
                  Washing Machines
                </Link>
              </li>
              <li>
                <Link href="/services/refrigeration" className="hover:text-white transition-colors">
                  High-End Refrigeration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Melbourne Dispatch & Live Status (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[#FACC15]">
              MELBOURNE DISPATCH
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="leading-relaxed">
                <strong className="text-white">Office:</strong> Level 4, 350 Collins St, Melbourne VIC 3000
              </p>
              <p>
                <strong className="text-white">Central Bookings:</strong> 1300 CDS HVAC
              </p>
              <p>
                <strong className="text-white">Support:</strong> enquiries@cdsapplianceservices.com.au
              </p>
            </div>

            {/* Live Dispatch Status Widget */}
            <div className="mt-4 bg-[#071324] border border-white/15 rounded-lg p-4 shadow-xl">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-300 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  DISPATCH QUEUE: <strong className="text-white">ACTIVE</strong>
                </span>
                <span className="text-[#FACC15] font-bold">24H SLA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 gap-4">
          <span>&copy; {new Date().getFullYear()} CDS APPLIANCE SERVICES PTY LTD. ALL RIGHTS RESERVED.</span>
          <div className="flex items-center gap-6">
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