"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import {
    Building2,
    ShieldCheck,
    Clock,
    Wrench,
    PhoneCall,
    CheckCircle2,
    Users,
    FileText,
    Award,
    ArrowRight,
    Flame,
    Hammer,
    Droplets,
    Briefcase
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

// Real Estate Benefits Grid
const WHY_CHOOSE_CDS = [
    {
        icon: Clock,
        title: "Fast Response Times",
        desc: "We understand that delays can lead to unhappy tenants and increased workload for property managers. We aim to schedule jobs promptly and keep all parties informed throughout the process.",
        badge: "RAPID DEPLOYMENT",
        badgeBg: "bg-[#A3E635] text-[#0F172A]",
    },
    {
        icon: Users,
        title: "Direct Tenant Liaison",
        desc: "Once a work order is received, we can communicate directly with tenants to arrange access, reducing the amount of time your team spends coordinating appointments.",
        badge: "DIRECT ACCESS",
        badgeBg: "bg-[#BAE6FD] text-[#0B1E36]",
    },
    {
        icon: FileText,
        title: "Detailed Reporting",
        desc: "After attending a property, we provide clear reporting including fault diagnosis, repair recommendations, photos where required, and quotes for approval.",
        badge: "TRANSPARENT DOCS",
        badgeBg: "bg-[#FEF08A] text-[#0B1E36]",
    },
    {
        icon: ShieldCheck,
        title: "Professional Representation",
        desc: "Our technicians understand they are representing both CDS and your agency while attending rental properties. We pride ourselves on providing a professional and respectful service to tenants and landlords alike.",
        badge: "REPUTATION SECURE",
        badgeBg: "bg-[#DDD6FE] text-[#0B1E36]",
    },
];

// The CDS Difference Bullet Points
const DIFFERENCES = [
    "Communicates clearly",
    "Attends when scheduled",
    "Provides accurate reporting",
    "Delivers practical solutions",
    "Helps keep tenants satisfied",
    "Reduces administration for your team",
];

// REA Services with descriptions & mock image topics
const REA_SERVICES = [
    {
        title: "Smoke Alarm Replacements",
        desc: "Ensure compliance with Victorian rental safety regulations with expert testing, photoelectric installation, and compliance certificates.",
        tag: "COMPLIANCE",
        tagBg: "bg-[#A7F3D0]",
        image: "/tech-smoke-alarm.png", // Or generic fallback
    },
    {
        title: "Cabinet Modifications",
        desc: "Custom kitchen cabinetry adjustments to seamlessly accommodate new dishwashers, wall ovens, and rangehood upgrades.",
        tag: "CARPENTRY",
        tagBg: "bg-[#FEF08A]",
        image: "/tech-cabinet.png",
    },
    {
        title: "Minor Plumbing Repairs",
        desc: "Fixing leaking mixer taps, disposal units, sink traps, and dishwasher water inlet connections promptly to prevent property damage.",
        tag: "PLUMBING",
        tagBg: "bg-[#BAE6FD]",
        image: "/tech-plumbing.png",
    },
];

// Real Estate Agency Partners (from site references)
const PARTNERS = [
    "Hodges", "Hedley", "Class A Fix", "Bombay Real Estate", "Buxton", "Biggin & Scott", "Barry Plant", "Woodards", "Walsh & Whitelock"
];

export default function PropertyManagementSection() {
    return (
        <section className="relative bg-white text-slate-800 overflow-hidden select-none">

            {/* 📍 1. TOP HERO SECTION (Matches luxury executive navy tone) */}
            <div className="relative pt-36 pb-24 md:pt-44 md:pb-28 bg-[#0B1E36] text-white border-b border-white/10 overflow-hidden">

                {/* Subtle Engineering Dot-Grid */}
                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#38BDF8 1.5px, transparent 1.5px)`,
                        backgroundSize: '28px 28px'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-8 space-y-6">

                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full backdrop-blur-md">
                                <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                                <span className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                                    MELBOURNE REAL ESTATE PARTNERSHIPS
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase font-sans leading-[1.08]">
                                Melbourne&apos;s Property Maintenance &amp; Appliance Specialists for{" "}
                                <span className="inline-block bg-[#38BDF8] text-[#071324] px-3 py-1 font-black rounded-xs shadow-md mt-1">
                                    Real Estate Agencies.
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg text-slate-300 font-normal font-sans leading-relaxed max-w-2xl">
                                One call for appliance repairs, electrical work, air conditioning, cabinet modifications, and comprehensive maintenance coordination across Greater Melbourne.
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* 📍 2. RELIABLE SOLUTIONS OVERVIEW (Grid with Rooftop HVAC Image) */}
            <div className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">

                {/* Wavy Luxury Background Gradient */}
                <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#BAE6FD]/40 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7 space-y-6">
                            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block">
                                STREAMLINED OPERATIONS
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans leading-tight">
                                Reliable Appliance &amp; Air Conditioning Solutions{" "}
                                <span className="inline-block bg-[#FEF08A] text-[#0B1E36] px-2 py-0.5 rounded-xs">
                                    for Property
                                </span>
                            </h2>
                            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                                <p>
                                    At CDS Appliance Services, we understand the challenges property managers face every day; coordinating trades, managing tenant expectations, obtaining quotes, and ensuring repairs are completed quickly can consume valuable time.
                                </p>
                                <div className="p-4 bg-[#F8FAFC] border-l-4 border-[#0B1E36] rounded-r-sm font-bold text-[#0B1E36]">
                                    Our goal is simple: <span className="text-[#0284C7]">make property maintenance easier for your team.</span>
                                </div>
                                <p>
                                    We provide professional appliance and air conditioning services throughout Melbourne, working directly with tenants, landlords, and property managers to deliver fast, efficient outcomes with minimal administration.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Image Composition */}
                        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-5">
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-2 border-slate-300 bg-white p-3 shadow-2xl group">
                                <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest z-20">
                                    REF: HVAC-ROOFTOP // MELB
                                </div>
                                <div className="relative w-full h-full rounded-sm overflow-hidden bg-slate-100">
                                    <Image
                                        src="/hero-composition.png" // Replace with rooftop unit photo if available
                                        alt="Technician servicing commercial property evaporative unit"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* 📍 3. WHY PROPERTY MANAGERS CHOOSE CDS (Grid Bento Cards) */}
            <div className="relative py-24 bg-[#F8FAFC] border-b border-slate-200">

                {/* Subtle Dotted Grid */}
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
                            AGENCY ADVANTAGE
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                            Why Property Managers{" "}
                            <span className="inline-block bg-[#A3E635] text-[#0F172A] px-3 py-0.5 rounded-xs shadow-2xs">
                                Choose CDS
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {WHY_CHOOSE_CDS.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white border-2 border-slate-200 p-8 rounded-sm space-y-4 shadow-sm hover:border-[#0B1E36] transition-all duration-300"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="p-3 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] rounded-sm">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className={`font-mono text-[10px] font-black px-3 py-1 rounded-xs uppercase tracking-wider ${item.badgeBg} border border-slate-300/50`}>
                                        {item.badge}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black text-[#0B1E36] font-sans uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600 font-sans leading-relaxed font-medium">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* 📍 4. THE CDS DIFFERENCE & ACCREDITATION BADGES */}
            <div className="py-24 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        <div className="lg:col-span-6 space-y-6">
                            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block">
                                THE STANDARD
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                                The CDS{" "}
                                <span className="inline-block bg-[#DDD6FE] text-[#0B1E36] px-3 py-0.5 rounded-xs">
                                    Difference
                                </span>
                            </h2>
                            <p className="text-sm text-slate-600 font-sans leading-relaxed">
                                We understand that property managers need more than just a repair technician. You need a contractor who:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                {DIFFERENCES.map((diff, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 p-3.5 rounded-xs">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span className="text-xs sm:text-sm font-bold text-[#0B1E36] font-sans">{diff}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Accreditations Box */}
                        <div className="lg:col-span-6 bg-[#0B1E36] text-white p-8 sm:p-10 rounded-sm shadow-xl space-y-6">
                            <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-xs font-bold tracking-widest uppercase">
                                <ShieldCheck className="w-5 h-5" />
                                LICENSED &amp; FULLY INSURED PARTNERS
                            </div>
                            <h3 className="text-2xl font-black font-sans uppercase">
                                Why Agents Trust Us
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                                We carry comprehensive $10 million Public Liability insurance, full electrical licensing (REC 38111), plumbing compliance (BPC 131134), and ARCTick certification for all air conditioning works.
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-center font-mono text-xs">
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
                                    <div className="font-bold text-[#38BDF8]">REC</div>
                                    <div className="text-white font-black">38111</div>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
                                    <div className="font-bold text-[#38BDF8]">ARCTICK</div>
                                    <div className="text-white font-black">AU066324</div>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
                                    <div className="font-bold text-[#38BDF8]">BPC</div>
                                    <div className="text-white font-black">131134</div>
                                </div>
                                <div className="p-3 bg-white/5 border border-white/10 rounded-xs">
                                    <div className="font-bold text-[#38BDF8]">ESV</div>
                                    <div className="text-white font-black">D20380</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* 📍 5. SERVICES AVAILABLE FOR REA (Smoke alarms, cabinetry, plumbing) */}
            <div className="relative py-24 bg-[#F8FAFC] border-b border-slate-200">

                {/* Subtle Dotted Grid */}
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
                            SPECIALIZED TRADES
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                            Services Available for{" "}
                            <span className="inline-block bg-[#BAE6FD] text-[#0B1E36] px-3 py-0.5 rounded-xs">
                                Real Estate Agencies
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {REA_SERVICES.map((srv, idx) => (
                            <div key={idx} className="bg-white border-2 border-slate-200 rounded-sm overflow-hidden shadow-sm hover:border-[#0B1E36] transition-all flex flex-col">
                                <div className="p-6 space-y-3 flex-1">
                                    <span className={`font-mono text-[10px] font-black px-2.5 py-1 rounded-xs uppercase ${srv.tagBg} text-[#0B1E36]`}>
                                        {srv.tag}
                                    </span>
                                    <h3 className="text-xl font-black text-[#0B1E36] font-sans uppercase">
                                        {srv.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed font-medium">
                                        {srv.desc}
                                    </p>
                                </div>
                                <div className="px-6 pb-6 pt-2">
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1E36] hover:text-[#0284C7] uppercase font-sans tracking-wide">
                                        <span>Book this service</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* 📍 6. OUR REAL ESTATE PARTNERS (Agency Logo Showcase) */}
            <div className="py-24 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-10">

                    <div>
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block mb-2">
                            VALUED PORTFOLIO PARTNERS
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                            Trusted by Leading Melbourne{" "}
                            <span className="inline-block bg-[#FEF08A] text-[#0B1E36] px-3 py-0.5 rounded-xs">
                                Real Estate Networks
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
                        {PARTNERS.map((partner, i) => (
                            <div
                                key={i}
                                className="px-6 py-4 bg-[#F8FAFC] border border-slate-200 rounded-xs font-sans font-black text-sm sm:text-base text-slate-700 uppercase tracking-wider shadow-2xs hover:border-[#0B1E36] hover:text-[#0B1E36] transition-colors"
                            >
                                {partner}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* 📍 7. FINAL CALL TO ACTION (Let's Discuss Your Portfolio) */}
            <div className="relative py-24 bg-[#0B1E36] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6 max-w-2xl mx-auto relative z-10">

                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#38BDF8] uppercase block">
                        PORTFOLIO MANAGEMENT
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-sans leading-tight">
                        Let&apos;s Discuss Your{" "}
                        <span className="inline-block bg-[#A3E635] text-[#0F172A] px-3 py-1 rounded-xs">
                            Portfolio.
                        </span>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed font-medium">
                        Whether you manage a small portfolio or hundreds of properties, CDS Appliance Services can provide a reliable appliance and air conditioning maintenance solution tailored to your needs.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:0405545609"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#38BDF8] hover:bg-white text-[#071324] font-black font-sans text-sm tracking-wider uppercase rounded-sm transition-all duration-300 shadow-xl"
                        >
                            <PhoneCall className="w-4 h-4 fill-current shrink-0" />
                            <span>Chris at CDS: 0405 545 609</span>
                        </a>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold font-sans text-sm tracking-wider uppercase rounded-sm transition-all duration-300"
                        >
                            <span>Get in Touch Online</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="text-xs font-mono text-slate-400 pt-4">
                        Direct Email: <a href="mailto:chris@cdsapplianceservices.com.au" className="text-[#38BDF8] underline">chris@cdsapplianceservices.com.au</a>
                    </div>

                </div>
            </div>

        </section>
    );
}