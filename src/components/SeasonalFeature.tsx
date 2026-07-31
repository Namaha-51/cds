
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Radio } from "lucide-react";

interface Hotspot {
  id: number;
  top: string;
  left: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Repositioned coordinates focused tightly on central machinery/electronics, NOT empty walls or furniture
const HOTSPOTS: Hotspot[] = [
  {
    id: 1,
    top: "35%",
    left: "48%",
    title: "Microprocessor Control Board",
    desc: "Advanced logic diagnostics isolate signal interruptions, faulty relays, and erratic power regulation in complex electronic panels.",
    icon: Cpu,
  },
  {
    id: 2,
    top: "55%",
    left: "65%",
    title: "Inverter Power Module",
    desc: "High-voltage frequency testing prevents sudden component blowouts and stabilizes energy draw during operation cycles.",
    icon: Zap,
  },
  {
    id: 3,
    top: "70%",
    left: "38%",
    title: "Sensor Telemetry & Relay Link",
    desc: "Calibrating internal feedback loops ensures precise temperature tracking and error-free operational communication.",
    icon: Radio,
  },
];

export default function SeasonalFeature() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  // Tracks cursor movement to subtly shift the wavy white background threads
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-28 sm:py-36 bg-[#0B1E36] text-white overflow-hidden border-y border-white/10"
    >
      {/* 
        📍 WAVY FLOWING WHITE THREAD BACKGROUND:
        Interactive SVG threads that shift gently as the user moves their cursor across the section.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <radialGradient id="threadGlow" cx={`${mousePos.x}%`} cy={`${mousePos.y}%`} r="35%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle cursor follow glow */}
          <rect width="100%" height="100%" fill="url(#threadGlow)" />

          {/* Wavy Flowing Threads */}
          <path
            d={`M-100,200 Q${400 + (mousePos.x - 50) * 2},${100 + (mousePos.y - 50) * 1.5} 720,300 T1540,200`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1.5"
          />
          <path
            d={`M-100,450 Q${500 - (mousePos.x - 50) * 2},${350 - (mousePos.y - 50) * 1.5} 720,500 T1540,400`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.18)"
            strokeWidth="1"
          />
          <path
            d={`M-100,650 Q${600 + (mousePos.x - 50) * 1.5},${550 + (mousePos.y - 50) * 2} 720,600 T1540,700`}
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.25"
          />
        </svg>
      </div>

      {/* Subtle engineering grid overlay for texture depth */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center z-10">

        {/* Left Column: Interactive Electronics Spec Window */}
        <div className="lg:col-span-7 relative flex items-center justify-center">

          <div className="relative w-full aspect-[4/3] rounded-xl bg-[#0F2744] border border-white/20 p-3 sm:p-4 shadow-2xl overflow-hidden group">

            {/* Technical Spec Overlay */}
            <div className="absolute top-5 left-5 z-10 font-mono text-[10px] text-blue-300/80 tracking-widest uppercase bg-[#0B1E36]/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-md">
              PCB_DIAGNOSTIC // COMPONENT_LEVEL_TEST
            </div>

            <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#071324]">
              {/* 
                📍 IMAGE SLOT:
                When you drop an image of an appliance circuit board, motor, or internal electronics here,
                the hotspots will sit perfectly centered on the machinery!
              */}
              <Image
                src="/seasonal-cooling.png"
                alt="European Appliance Electronics & PCB Diagnostics"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-85 transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 border-[10px] border-black/30 pointer-events-none rounded-lg" />

              {/* Functional Clickable Hotspot Buttons (01, 02, 03) */}
              {HOTSPOTS.map((hotspot) => {
                const isActive = activeHotspot.id === hotspot.id;
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspot(hotspot)}
                    style={{ top: hotspot.top, left: hotspot.left }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/btn cursor-pointer focus:outline-none"
                    aria-label={`Examine ${hotspot.title}`}
                  >
                    <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center">
                      {/* Active pulsing ring */}
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isActive ? 'bg-blue-400 opacity-75' : 'bg-white opacity-20'}`}></span>

                      {/* Button Core */}
                      <span className={`relative inline-flex rounded-full h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-xs font-mono font-bold transition-all duration-300 shadow-xl ${isActive
                          ? "bg-white text-[#0B1E36] scale-110 ring-4 ring-blue-400/50 font-extrabold"
                          : "bg-[#0B1E36]/90 text-white border border-white/40 hover:bg-white hover:text-[#0B1E36] hover:scale-105"
                        }`}>
                        0{hotspot.id}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Specification Overlay Card */}
          <div className="absolute -bottom-6 right-6 left-6 md:left-auto md:w-80 bg-white text-[#0B1E36] p-6 rounded-xl shadow-2xl z-30 border border-slate-200">
            <AnimatePresence mode="wait">
              {activeHotspot && (
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 bg-[#0B1E36]/10 rounded-md">
                      <activeHotspot.icon className="w-4 h-4 text-[#0B1E36]" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider text-slate-500 font-semibold uppercase">
                      LOGIC_ZONE // MODULE-0{activeHotspot.id}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold mb-1.5 tracking-tight text-[#0B1E36]">
                    {activeHotspot.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {activeHotspot.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Column: Electronics & Control Board Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8 pt-4 lg:pt-0">

          {/* Removed Star Vector - Clean Technical Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-300 uppercase">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Specialist Diagnostics // Electronics & Control Panels
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Component-level electronics precision.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Modern European appliances rely on complex microprocessors and sensitive inverter boards. When an appliance fails, generalist technicians often recommend buying an expensive whole-board replacement or a brand-new machine. Our factory-trained engineers perform advanced component-level diagnostics to isolate and repair logic failures directly.
          </p>

          <div className="space-y-4 pt-2 border-t border-white/15">
            <div className="flex gap-4 items-start pt-2">
              <div className="text-xs font-mono text-blue-400 font-bold mt-0.5">01 /</div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Micro-Circuit Fault Isolation</h4>
                <p className="text-xs text-slate-300 mt-0.5">Pinpointing blown relays, voltage irregularities, and signal degradation without replacing intact hardware.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-xs font-mono text-blue-400 font-bold mt-0.5">02 /</div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Firmware & Telemetry Calibration</h4>
                <p className="text-xs text-slate-300 mt-0.5">Clearing persistent manufacturer error codes and recalibrating internal sensor feedback loops to factory specs.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1E36] font-semibold text-sm tracking-wide rounded-lg transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:scale-[1.02]">
              <span>Book Electronics Diagnostic</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}