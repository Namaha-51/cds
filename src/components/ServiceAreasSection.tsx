"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import {
    MapPin,
    ShieldCheck,
    Clock,
    Wrench,
    PhoneCall,
    CheckCircle2,
    Search,
    Navigation,
    Gauge
} from "lucide-react";

// Animation Curves
const easeQuint: Easing = [0.22, 1, 0.36, 1];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: easeQuint, delay: custom * 0.1 },
    }),
};

// 1. ALL 24 OFFICIAL SUBURBS SERVED FROM CDS WEBSITE (Symmetrically formatted)
const SUBURBS = [
    { name: "Noble Park", region: "South-Eastern Suburbs", status: "Base of Operations", sla: "Immediate / Same-Day" },
    { name: "Dandenong", region: "South-Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Keysborough", region: "South-Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Doveton", region: "South-Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Frankston", region: "Mornington Peninsula", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "South Yarra", region: "Inner City & Bayside", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Brighton", region: "Inner City & Bayside", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "St Kilda", region: "Inner City & Bayside", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Fitzroy", region: "Inner City & Bayside", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Carlton", region: "Inner City & Metro", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Brunswick", region: "Northern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Preston", region: "Northern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Craigieburn", region: "Northern Suburbs", status: "Active Coverage", sla: "Same-Day / Scheduled" },
    { name: "Essendon", region: "North-Western Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Keilor", region: "Western Suburbs", status: "Active Coverage", sla: "Same-Day / Scheduled" },
    { name: "Hawthorn East", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Camberwell", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Box Hill", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Burwood", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Glen Waverley", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Mitcham", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Ringwood", region: "Eastern Suburbs", status: "Active Coverage", sla: "Same-Day / Scheduled" },
    { name: "Croydon", region: "Outer Eastern Suburbs", status: "Active Coverage", sla: "Same-Day / Scheduled" },
    { name: "Doncaster", region: "North-Eastern Suburbs", status: "Active Coverage", sla: "Same-Day Available" },
    { name: "Donvale", region: "North-Eastern Suburbs", status: "Active Coverage", sla: "Same-Day / Scheduled" },
];

// 2. EXACT CORE GUARANTEES
const GUARANTEES = [
    { text: "Officially authorised by Miele, Bosch and Ariston", highlight: "bg-[#BAE6FD] text-[#0B1E36]" },
    { text: "Licensed & insured technicians you can trust", highlight: "bg-[#A7F3D0] text-[#0B1E36]" },
    { text: "Transparent, upfront pricing – no hidden fees", highlight: "bg-[#FEF08A] text-[#0B1E36]" },
    { text: "12-month guarantee on all parts & 3 months labour", highlight: "bg-[#DDD6FE] text-[#0B1E36]" },
    { text: "Weekend & emergency service available", highlight: "bg-[#FFD6A5] text-[#0B1E36]" },
    { text: "Evening appointments available Mon–Fri 4pm–7pm", highlight: "bg-[#A3E635] text-[#0B1E36]" },
];

// 3. EXACT APPLIANCE FAULT DIAGNOSTICS WITH DIVERSE PASTEL PALETTE
const SERVICES = [
    { title: "Washing Machines", faults: "Won’t spin, won’t drain, electronic error codes", tagBg: "bg-[#A7F3D0]", border: "hover:border-emerald-400" },
    { title: "Ovens & Stoves", faults: "Not heating, broken elements, faulty controls", tagBg: "bg-[#FEF08A]", border: "hover:border-yellow-400" },
    { title: "Integrated Dishwashers", faults: "Leaking, not draining, not cleaning properly", tagBg: "bg-[#BAE6FD]", border: "hover:border-sky-400" },
    { title: "Clothes Dryers", faults: "No heat emission, noisy operation, won’t start", tagBg: "bg-[#FFD6A5]", border: "hover:border-orange-400" },
    { title: "Other Appliances", faults: "High-end microwaves, induction cooktops, and more", tagBg: "bg-[#DDD6FE]", border: "hover:border-purple-400" },
];

// 4. EXACT BRANDS WE SERVICE
const BRANDS = [
    "Miele", "Bosch", "Ariston", "Whirlpool", "Fisher & Paykel",
    "Westinghouse", "Electrolux", "Smeg", "Asko", "Bellini",
    "Akai", "Sharp", "Midea", "Glen Dimplex"
];

export default function ServiceAreasSection() {
    const [selectedSuburb, setSelectedSuburb] = useState(SUBURBS[0]);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSuburbs = SUBURBS.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.region.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="relative bg-white text-slate-800 overflow-hidden select-none">

            {/* 📍 1. TOP ARCHITECTURAL HERO (Image pushed firmly right, Crisp Dot-Grid) */}
            <div className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">

                {/* Subtle Engineering Dot-Grid */}
                <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#CBD5E1 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left Column: Narrative Copy */}
                        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7 space-y-6 pr-0 lg:pr-6">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-300 rounded-full shadow-2xs">
                                <Navigation className="w-3.5 h-3.5 text-[#0284C7]" />
                                <span className="text-xs font-mono font-bold tracking-widest text-[#0B1E36] uppercase">
                                    GREATER MELBOURNE COVERAGE
                                </span>
                            </div>

                            {/* Headline with Solid Light Highlight */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B1E36] uppercase font-sans leading-[1.1]">
                                Appliance Repairs Across{" "}
                                <span className="inline-block bg-[#A3E635] text-[#0F172A] px-3 py-1 font-black rounded-xs shadow-2xs">
                                    Melbourne
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-slate-600 font-normal font-sans leading-relaxed max-w-2xl">
                                Delivering manufacturer-authorised servicing across <strong className="text-[#0B1E36] font-bold">24+ Melbourne suburbs</strong> from our central base in Noble Park.{" "}
                                <span className="inline-block bg-[#FEF08A] text-[#0B1E36] px-2 py-0.5 font-bold rounded-xs">
                                    Specialist mobile workshops
                                </span>{" "}
                                equipped for on-site repairs.
                            </p>
                        </motion.div>

                        {/* 📍 Right Column: Image Pushed Firmly to Far Right (lg:justify-end + ml-auto) */}
                        <motion.div
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="lg:col-span-5 relative flex items-center lg:justify-end justify-center w-full mt-6 lg:mt-0"
                        >
                            <div className="relative aspect-[4/3] w-full max-w-lg lg:max-w-none ml-auto rounded-sm overflow-hidden border-2 border-slate-300 bg-white p-3 shadow-2xl group">

                                {/* Corner Markers */}
                                <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest z-20">
                                    SYS_REF: ZONES-03 // GEO
                                </div>
                                <div className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest z-20">
                                    24+ SUBURBS COVERED
                                </div>

                                <div className="relative w-full h-full rounded-sm overflow-hidden bg-slate-100">
                                    <Image
                                        src="/hero-composition.png"
                                        alt="Master Technician operating precision diagnostic apparatus"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>

                                {/* Floating Telemetry Badge */}
                                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-300 p-3.5 rounded-sm shadow-xl max-w-[210px]">
                                    <div className="flex items-center gap-2 text-[#0284C7] font-mono text-[10px] font-bold uppercase mb-1">
                                        <Gauge className="w-3.5 h-3.5" />
                                        MOBILE WORKSHOPS
                                    </div>
                                    <div className="text-[#0B1E36] font-sans text-xs font-black leading-tight">
                                        Fully Stocked with OEM Components
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* 📍 2. INTERACTIVE SUBURB DIRECTORY (Luxury Flowing Vector Gradient #1) */}
            <div className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">

                {/* Custom Luxury Flowing Vector Gradient (Ice Blue & Warm Gold Mesh + Wave) */}
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#BAE6FD]/45 via-[#DDD6FE]/30 to-transparent rounded-full blur-3xl" />
                    <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-gradient-to-tl from-[#FEF08A]/50 via-[#A7F3D0]/30 to-transparent rounded-full blur-3xl" />

                    <svg className="absolute w-full h-full text-slate-200/80" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
                        <path d="M-100 200 C 300 0, 800 400, 1540 150" stroke="url(#luxGrad1)" strokeWidth="120" strokeLinecap="round" opacity="0.25" />
                        <path d="M-100 600 C 400 800, 900 300, 1540 650" stroke="url(#luxGrad2)" strokeWidth="160" strokeLinecap="round" opacity="0.2" />
                        <defs>
                            <linearGradient id="luxGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#38BDF8" />
                                <stop offset="50%" stopColor="#818CF8" />
                                <stop offset="100%" stopColor="#34D399" />
                            </linearGradient>
                            <linearGradient id="luxGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FACC15" />
                                <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block mb-2">
                            INTERACTIVE DIRECTORY
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                            Find Your{" "}
                            <span className="inline-block bg-[#BAE6FD] text-[#0B1E36] px-3 py-0.5 rounded-xs shadow-2xs">
                                Suburb
                            </span>
                        </h2>
                        <p className="text-sm text-slate-600 mt-3 font-sans font-medium">
                            Select your location below to verify local technician dispatch availability and SLA timeframes.
                        </p>
                    </div>

                    {/* Suburb Search Filter */}
                    <div className="max-w-md mx-auto mb-12 relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search suburbs (e.g. Brighton, Dandenong)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/90 backdrop-blur-md border-2 border-slate-300 rounded-full py-3 pl-11 pr-6 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-sans shadow-md font-medium"
                        />
                    </div>

                    {/* Symmetrical Square Grid + Professional Details Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Column: Symmetrical Square Grid Selector (Span 7) */}
                        <div className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-slate-200/80 p-6 sm:p-8 rounded-sm shadow-xl">
                            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 text-xs font-mono">
                                <span className="text-slate-500 font-bold">Available Suburbs ({filteredSuburbs.length})</span>
                                <span className="text-emerald-700 font-bold flex items-center gap-1.5 bg-emerald-100 px-2 py-0.5 rounded-xs border border-emerald-300">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                                    Technicians Active
                                </span>
                            </div>

                            {/* 24-Location Symmetrical Square Grid (3 to 4 Columns) */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[440px] overflow-y-auto pr-2 custom-scrollbar">
                                {filteredSuburbs.map((suburb) => {
                                    const isSelected = selectedSuburb.name === suburb.name;
                                    return (
                                        <button
                                            key={suburb.name}
                                            onClick={() => setSelectedSuburb(suburb)}
                                            className={`px-3 py-3 rounded-xs font-sans text-xs font-bold tracking-wide uppercase transition-all duration-200 flex flex-col items-center justify-center text-center gap-1.5 aspect-square sm:aspect-auto sm:h-20 ${isSelected
                                                ? "bg-[#0B1E36] text-white shadow-md scale-[1.03] border-2 border-[#0B1E36]"
                                                : "bg-white/90 text-slate-700 border border-slate-300 hover:border-[#0B1E36] hover:bg-[#FEF08A]/40 hover:text-[#0B1E36]"
                                                }`}
                                        >
                                            <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? "text-[#A3E635]" : "text-slate-400"}`} />
                                            <span className="line-clamp-2 leading-tight">{suburb.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Column: Dynamic Editorial Summary Card (Span 5) */}
                        <div className="lg:col-span-5 sticky top-28">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedSuburb.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25, ease: easeQuint }}
                                    className="bg-white/95 backdrop-blur-md border-2 border-[#0B1E36] p-8 rounded-sm shadow-2xl relative overflow-hidden"
                                >
                                    {/* Top Pastel Badge */}
                                    <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-[#0B1E36] uppercase mb-3">
                                        <span className="bg-[#FEF08A] px-2.5 py-1 rounded-xs border border-yellow-300">COVERAGE VERIFIED</span>
                                        <span className="text-slate-400">GREATER MELBOURNE</span>
                                    </div>

                                    <h3 className="text-3xl font-black text-[#0B1E36] tracking-tight uppercase font-sans mb-1">
                                        {selectedSuburb.name}
                                    </h3>
                                    <span className="text-xs font-mono text-slate-500 uppercase block mb-6">
                                        Regional Zone: {selectedSuburb.region}
                                    </span>

                                    <div className="space-y-4 border-y border-slate-200 py-6 mb-6 font-sans text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-600 flex items-center gap-2 font-medium">
                                                <Wrench className="w-4 h-4 text-[#0B1E36]" /> Service Status:
                                            </span>
                                            <span className="font-bold text-[#0B1E36] font-mono text-xs bg-[#A7F3D0] border border-emerald-400 px-2.5 py-1 rounded-xs">
                                                {selectedSuburb.status}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-600 flex items-center gap-2 font-medium">
                                                <Clock className="w-4 h-4 text-[#0B1E36]" /> Response SLA:
                                            </span>
                                            <span className="font-bold text-[#0B1E36] font-mono text-xs bg-[#BAE6FD] border border-sky-300 px-2.5 py-1 rounded-xs">
                                                {selectedSuburb.sla}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-600 flex items-center gap-2 font-medium">
                                                <ShieldCheck className="w-4 h-4 text-[#0B1E36]" /> Warranty Backup:
                                            </span>
                                            <span className="font-bold text-[#0B1E36] font-mono text-xs">
                                                12M Parts / 3M Labour
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <a
                                            href="tel:0405545609"
                                            className="w-full py-4 bg-[#0B1E36] hover:bg-[#0284C7] text-white font-bold font-sans text-sm tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                                        >
                                            <PhoneCall className="w-4 h-4 shrink-0 fill-current" />
                                            <span>Book Technician for {selectedSuburb.name}</span>
                                        </a>
                                        <p className="text-[11px] text-center font-sans font-medium text-slate-500">
                                            Evening appointments available Mon–Fri 4pm–7pm
                                        </p>
                                    </div>

                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>

                </div>
            </div>

            {/* 📍 3. WHY CHOOSE CDS IN MELBOURNE (Alternate Grid #1: Crisp Dotted Background) */}
            <div className="relative py-24 bg-[#F8FAFC] border-b border-slate-200">

                {/* Subtle Engineering Dot-Grid */}
                <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#CBD5E1 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block mb-2">
                            SERVICE STANDARDS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                            The CDS{" "}
                            <span className="inline-block bg-[#DDD6FE] text-[#0B1E36] px-3 py-0.5 rounded-xs shadow-2xs">
                                Guarantee
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {GUARANTEES.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-2 border-slate-200 p-6 rounded-sm flex items-start gap-4 shadow-2xs hover:border-[#0B1E36] hover:-translate-y-1 transition-all duration-200"
                            >
                                <div className={`p-2 rounded-sm ${item.highlight} shrink-0 mt-0.5 font-black border border-slate-300/60 shadow-inner`}>
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <span className="text-sm sm:text-base font-bold text-[#0F172A] font-sans leading-snug pt-1">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* 📍 4. OUR MELBOURNE APPLIANCE REPAIR SERVICES (Luxury Flowing Vector Gradient #2) */}
            <div className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">

                {/* Custom Luxury Flowing Vector Gradient (Lavender & Mint Mesh + Wavy Streams) */}
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#DDD6FE]/40 via-[#BAE6FD]/30 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 -right-20 w-[550px] h-[550px] bg-gradient-to-l from-[#A7F3D0]/40 via-[#FEF08A]/30 to-transparent rounded-full blur-3xl" />

                    <svg className="absolute w-full h-full text-slate-200/70" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
                        <path d="M-100 300 C 400 100, 900 600, 1540 250" stroke="url(#luxGrad3)" strokeWidth="140" strokeLinecap="round" opacity="0.2" />
                        <path d="M-100 550 C 300 750, 800 200, 1540 500" stroke="url(#luxGrad4)" strokeWidth="100" strokeLinecap="round" opacity="0.25" />
                        <defs>
                            <linearGradient id="luxGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#818CF8" />
                                <stop offset="100%" stopColor="#34D399" />
                            </linearGradient>
                            <linearGradient id="luxGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#F472B6" />
                                <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Left: Section Explanation */}
                        <div className="lg:w-1/3 space-y-4">
                            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block">
                                
                            </span>
                            <h2 className="text-3xl font-black text-[#0B1E36] uppercase tracking-tight font-sans leading-tight">
                                Common Appliance{" "}
                                <span className="inline-block bg-[#FEF08A] text-[#0B1E36] px-2.5 py-0.5 rounded-xs mt-1 shadow-2xs">
                                    Faults Solved
                                </span>
                            </h2>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed font-medium">
                                We carry extensive replacement inventories to resolve faults on the first visit
                            </p>
                        </div>

                        {/* Right: Diverse Pastel-Tagged Diagnostic Cards */}
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            {SERVICES.map((srv, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white/90 backdrop-blur-md border-2 border-slate-200 p-6 rounded-sm space-y-3 shadow-md transition-all duration-200 ${srv.border} hover:shadow-xl`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`font-black text-[#0B1E36] font-sans text-xs sm:text-sm uppercase tracking-wider px-3 py-1 rounded-xs ${srv.tagBg} border border-slate-300/50 shadow-2xs`}>
                                            {srv.title}
                                        </span>
                                        <Wrench className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-xs font-sans text-slate-600 leading-relaxed pt-1 font-medium">
                                        <strong className="text-[#0B1E36] font-bold">Common Faults:</strong> {srv.faults}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

            {/* 📍 5. APPLIANCE BRANDS WE SERVICE (Alternate Grid #2: Crisp Dotted Background) */}
            <div className="relative py-24 bg-[#F8FAFC]">

                {/* Subtle Engineering Dot-Grid */}
                <div
                    className="absolute inset-0 opacity-60 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#CBD5E1 1.5px, transparent 1.5px)`,
                        backgroundSize: '24px 24px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="bg-white border-2 border-slate-200 p-8 sm:p-12 rounded-sm text-center space-y-8 shadow-sm">
                        <div>
                            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block mb-2">
                                MANUFACTURER EXPERTISE
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                                Major Brands{" "}
                                <span className="inline-block bg-[#A7F3D0] text-[#0B1E36] px-3 py-0.5 rounded-xs shadow-2xs">
                                    Serviced
                                </span>
                            </h3>
                            <p className="text-xs sm:text-sm font-sans text-slate-600 mt-2 font-medium">
                                Expert diagnostic logic across all leading European, Asian, and domestic appliance marques.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            {BRANDS.map((brand, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2.5 bg-[#F8FAFC] border border-slate-300 hover:border-[#0B1E36] hover:bg-[#FEF08A] rounded-xs font-sans text-xs sm:text-sm font-bold tracking-wider text-[#0B1E36] transition-colors uppercase shadow-2xs cursor-default"
                                >
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 📍 6. BOTTOM CALL TO ACTION BANNER (Luxury Flowing Vector Gradient #3) */}
            <div className="relative py-20 bg-white border-t border-slate-200 overflow-hidden">

                {/* Custom Luxury Flowing Vector Gradient (Warm Gold & Lime Mesh + Flowing Streams) */}
                <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FEF08A]/45 via-[#A3E635]/25 to-[#BAE6FD]/35 rounded-full blur-3xl" />

                    <svg className="absolute w-full h-full text-slate-200/80" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
                        <path d="M-100 400 C 400 200, 900 600, 1540 350" stroke="url(#luxGrad5)" strokeWidth="180" strokeLinecap="round" opacity="0.25" />
                        <defs>
                            <linearGradient id="luxGrad5" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FACC15" />
                                <stop offset="50%" stopColor="#4ADE80" />
                                <stop offset="100%" stopColor="#38BDF8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6 max-w-2xl mx-auto relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans leading-tight">
                        Need a technician in{" "}
                        <span className="inline-block bg-[#A3E635] text-[#0F172A] px-3 py-0.5 rounded-xs shadow-2xs">
                            Melbourne
                        </span>{" "}
                        today?
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-medium">
                        Contact our dispatch center to check same-day availability in your immediate suburb.
                    </p>
                    <div className="pt-2">
                        <a
                            href="tel:0405545609"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B1E36] hover:bg-[#0284C7] text-white font-bold font-sans text-sm tracking-wider uppercase rounded-sm transition-all duration-300 shadow-xl shadow-[#0B1E36]/10 scale-[1.02] hover:scale-105"
                        >
                            <PhoneCall className="w-4 h-4 fill-current shrink-0" />
                            <span>Call Priority Line: 0405 545 609</span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}