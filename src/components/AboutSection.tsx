"use client";

import React from "react";
import { motion, type Easing } from "framer-motion";
import {
    ShieldCheck,
    Award,
    Wrench,
    Compass,
    Anchor,
    FileText,
    CheckCircle2,
    Cpu,
    Sliders,
    Gauge
} from "lucide-react";

// Animation Curves
const easeQuint: Easing = [0.22, 1, 0.36, 1];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.1,
            ease: easeQuint,
            delay: custom * 0.15,
        },
    }),
};

// Core Ethos Bento Cards
const PILLARS = [
    {
        icon: Compass,
        title: "OUR VISION",
        subtitle: "NOT THE CHEAPEST. THE BEST.",
        desc: "To be Melbourne's most trusted specialist appliance repair service, known for manufacturer-level expertise, honest communication, and an uncompromising commitment to getting it right the first time.",
        accent: "border-l-[#0284C7]",
        bg: "bg-[#F8FAFC]",
    },
    {
        icon: Award,
        title: "OUR MISSION",
        subtitle: "SPECIALISTS, NOT GENERALISTS.",
        desc: "Manufacturer-appointed by Miele, Bosch, and Ariston. Our technicians are factory-trained and equipped with proprietary diagnostic tools and digital software that general repairers simply cannot match.",
        accent: "border-l-[#38BDF8]",
        bg: "bg-[#F0F9FF]",
    },
    {
        icon: Anchor,
        title: "METHODICAL PRECISION",
        subtitle: "MARINE ENGINEERING STANDARDS.",
        desc: "Every job is treated with the exact standards Chris applied during a decade as a ship's engineer: methodical, precise, and thorough. We don't guess. We diagnose properly, explain clearly, and only proceed with approval.",
        accent: "border-l-[#0B1E36]",
        bg: "bg-[#F8FAFC]",
    },
    {
        icon: ShieldCheck,
        title: "SERVICE ETHOS",
        subtitle: "ABSOLUTE RESPECT.",
        desc: "Respect is central to everything we do—how we interact with clients, how we treat your home, and how we collaborate. We arrive on time, communicate clearly, and leave your space cleaner than we found it.",
        accent: "border-l-[#10B981]",
        bg: "bg-white shadow-xl shadow-slate-200/50",
    },
];

// Team Directory
const TEAM = [
    {
        name: "Chris D'cunha (Owner & Lead Technician)",
        role: "Owner & Lead Technician",
        tag: "",
        desc: "Chris is our lead technician- After a decade spent as a ship's engineer, Chris retrained as a HVAC and appliance technician. His passion to create change in the industry has led to CDS evolving into its present form, accepted by leading brands as a service partner and by multiple real estate agencies as their preferred repairer. He holds a full Arctic Refrigeration license, ESV license for HVAC and appliances and a BPC registration for Refrigerated Airconditioning and duct work",
        licenses: ["Arctick AU066324", "ESV D20380", "BPC 131134"],
    },
    {
        name: "Soman (Oven & Cooktop Specialist)",
        role: "Oven & Cooktop Specialist",
        tag: "",
        desc: "Soman is an electronics technician specialising in oven repair and familiar with most brands of cooktops. He spearheads CDS' daily operations, being our representative to all our customers.",
        licenses: ["Factory Diagnostic Specialist"],
    },
    {
        name: "Rick (Workshop In-Charge)",
        role: "Workshop In-Charge",
        tag: "",
        desc: "Assists us in our workshop- crucial in helping us solve issues that cannot be solved on site",
        licenses: ["Heavy Workshop Specialist"],
    },
    {
        name: "Wilkins Services Group (Electrical Contractors)",
        role: "Electrical Contractors",
        tag: "",
        desc: "Chris Wilkins serves as our go to Electrical contractor- his expertise in all things electrical helps us help our customers with work that only an electrician can do",
        licenses: ["REC 38111", "Master Electrician"],
    },
    {
        name: "Sharon & Monisha (Administration & Logistics)",
        role: "Administration & Logistics",
        tag: "",
        desc: "Sharon and Monisha are our office administrators- ensuring our standards are kept high and liaising between customers and the team to ensure positive outcomes",
        licenses: ["Logistics Controllers"],
    },
];

// Compliance Registry
const LICENSES = [
    { label: "ESV LICENCE", val: "D20380" },
    { label: "ARCTICK REFRIGERATION", val: "AU066324" },
    { label: "BPC LICENCE", val: "131134" },
    { label: "ELECTRICAL REC", val: "38111" },
    { label: "ABN REGISTERED", val: "46 943 256 831" },
    { label: "BASE OF OPERATIONS", val: "Noble Park VIC 3174" },
];

export default function AboutSection() {
    return (
        <section className="relative bg-white text-[#0F172A] overflow-hidden select-none">

            {/* 📍 1. TOP ARCHITECTURAL HERO (Compressed layout to remove blank space) */}
            <div className="relative pt-16 pb-16 md:pt-20 md:pb-20 bg-[#0B1E36] text-white border-b border-white/10 overflow-hidden">

                {/* Subtle background engineering grid */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`,
                        backgroundSize: '28px 28px'
                    }}
                />
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* Left Column: Narrative Copy */}
                        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full">
                                <Anchor className="w-4 h-4 text-[#38BDF8]" />
                                <span className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                                    THE CDS STORY • EST. MELBOURNE
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05] font-sans">
                                Marine Engineering Precision. Applied to Your Home.
                            </h1>

                            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal font-sans max-w-2xl">
                                Most appliance repair companies are generalists. We are specialists.
                            </p>

                            {/* Telemetry Badge Row - Changed to flex so empty badges naturally collapse */}
                            <div className="pt-4 flex flex-wrap gap-8 sm:gap-12 border-t border-white/15 max-w-lg font-mono text-xs">
                                <div>
                                    <span className="text-slate-400 block"></span>
                                    <span className="text-emerald-400 font-bold"></span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block"></span>
                                    <span className="text-[#38BDF8] font-bold">NOBLE PARK VIC</span>
                                </div>
                                <div>
                                    <span className="text-slate-400 block">ACCREDITATION</span>
                                    <span className="text-white font-bold">VBA REGISTERED</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Compressed Image Composition */}
                        <motion.div
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="lg:col-span-5 relative"
                        >
                            {/* Changed from aspect-[4/5] to aspect-[5/4] to severely reduce height and match content */}
                            <div className="relative aspect-square lg:aspect-[5/4] w-full rounded-sm overflow-hidden border-2 border-white/15 shadow-2xl bg-[#071324] p-3 group">

                                {/* HUD Corner Markers */}
                                <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-white/60 uppercase tracking-widest z-20">
                                    SYS_REF: ABOUT-01 // MELB
                                </div>
                                <div className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-[#38BDF8] uppercase tracking-widest z-20 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    CERTIFIED MASTER TECH
                                </div>

                                <div className="relative w-full h-full rounded-sm overflow-hidden bg-slate-900">
                                    <img
                                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                                        alt="Master Technician operating precision diagnostic apparatus"
                                        className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105 filter contrast-[1.05]"
                                    />

                                    {/* Subtle Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/80 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* Floating Telemetry Box */}
                                <div className="absolute bottom-6 left-6 z-20 bg-[#0B1E36]/95 backdrop-blur-md border border-white/20 p-3.5 rounded-sm shadow-xl max-w-[220px]">
                                    <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-[10px] font-bold uppercase mb-1">
                                        <Gauge className="w-3.5 h-3.5" />
                                        EX-SHIP'S ENGINEER
                                    </div>
                                    <div className="text-white font-sans text-sm font-black leading-tight">
                                        Decades of high-pressure marine system diagnostics.
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* 📍 2. THE 4 PILLARS BENTO GRID */}
            <div className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#0284C7] block mb-2">
                        CORE ETHOS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B1E36] uppercase font-sans">
                        The Four Pillars of CDS Appliances
                    </h2>
                    <div className="w-12 h-1 bg-[#0284C7] mx-auto mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {PILLARS.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx * 0.3}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className={`group relative p-8 sm:p-10 rounded-sm border border-slate-200/80 ${pillar.bg} ${pillar.accent} border-l-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 rounded-md bg-[#0B1E36] text-white group-hover:bg-[#0284C7] transition-colors shadow-sm">
                                        <pillar.icon className="w-6 h-6 text-[#38BDF8]" />
                                    </div>
                                    <span className="font-mono text-xs font-bold text-slate-400 tracking-widest uppercase">
                                        [0{idx + 1}]
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight mb-1 font-sans">
                                    {pillar.title}
                                </h3>
                                <h4 className="font-mono text-xs font-bold text-[#0284C7] tracking-wider mb-4 uppercase">
                                    {pillar.subtitle}
                                </h4>

                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal font-sans">
                                    {pillar.desc}
                                </p>
                            </div>

                            <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-400 group-hover:text-[#0B1E36] transition-colors">
                                <span>VERIFIED PROTOCOL</span>
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 📍 3. DYNAMIC VISUAL SHOWCASE (Massive Dual-Image Engineering Banner) */}
            <div className="bg-[#0B1E36] py-20 border-y border-white/10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#38BDF8] block mb-2">
                                TECHNICAL CAPABILITY
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-sans">
                                Advanced Diagnostic Apparatus
                            </h2>
                        </div>
                        <div className="font-mono text-xs text-slate-300 max-w-sm">
                            Utilizing manufacturer provided diagnostic methods and precision tools for exact fault isolation.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Image Banner 1 */}
                        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/15 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1000&auto=format&fit=crop"
                                alt="High-voltage electrical circuit tracing and board diagnostics"
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                                <div>
                                    <span className="font-mono text-[10px] text-[#38BDF8] font-bold block"></span>
                                    <h4 className="text-lg font-black text-white font-sans uppercase"></h4>
                                </div>
                                <Sliders className="w-5 h-5 text-[#38BDF8]" />
                            </div>
                        </div>

                        {/* Image Banner 2 */}
                        <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-white/15 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop"
                                alt="Precision industrial refrigeration and refrigerant line pressure testing"
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-transparent to-transparent opacity-90" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                                <div>
                                    <span className="font-mono text-[10px] text-[#38BDF8] font-bold block"></span>
                                    <h4 className="text-lg font-black text-white font-sans uppercase"></h4>
                                </div>
                                <Cpu className="w-5 h-5 text-[#38BDF8]" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* 📍 4. THE TECHNICAL TEAM DIRECTORY */}
            <div className="py-24 bg-[#F8FAFC] border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#0284C7] block mb-2">
                                
                            </span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B1E36] uppercase font-sans">
                                The Technical Directory
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 max-w-md font-medium font-sans">
                            A specialized team of factory-trained technicians, electrical contractors, and logistics coordinators.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM.map((member, idx) => (
                            <motion.div
                                key={idx}
                                custom={idx * 0.2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="bg-white border border-slate-200/80 rounded-sm p-8 flex flex-col justify-between shadow-sm hover:border-[#0284C7] transition-all duration-300 group"
                            >
                                <div>
                                    {/* Top Tag & Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-mono text-[10px] font-bold tracking-widest text-[#0284C7] bg-[#F0F9FF] border border-[#BAE6FD] px-2.5 py-1 rounded-sm uppercase">
                                            {member.tag}
                                        </span>
                                        <Wrench className="w-4 h-4 text-slate-300 group-hover:text-[#0284C7] transition-colors" />
                                    </div>

                                    {/* Name & Role */}
                                    <h3 className="text-xl font-black text-[#0B1E36] tracking-tight font-sans mb-0.5">
                                        {member.name}
                                    </h3>
                                    <p className="text-xs font-bold text-slate-500 uppercase font-sans tracking-wide mb-4">
                                        {member.role}
                                    </p>

                                    <div className="w-8 h-[2px] bg-slate-200 mb-4 group-hover:w-16 group-hover:bg-[#0284C7] transition-all duration-300" />

                                    {/* Bio */}
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal font-sans mb-6 whitespace-pre-wrap">
                                        {member.desc}
                                    </p>
                                </div>

                                {/* License Badges */}
                                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                                    {member.licenses.map((lic, i) => (
                                        <span
                                            key={i}
                                            className="font-mono text-[10px] font-bold text-[#0B1E36] bg-slate-100 px-2 py-0.5 rounded-xs"
                                        >
                                            {lic}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* 📍 5. COMPLIANCE REGISTRY & LICENSE TERMINAL */}
            <div className="bg-[#0B1E36] text-white py-16">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 border-b border-white/15 gap-8">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 text-[#38BDF8] font-mono text-xs font-bold tracking-widest uppercase">
                                <FileText className="w-4 h-4" />
                                REGULATORY COMPLIANCE
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase font-sans">
                                Official Licensing & Registration Registry
                            </h3>
                        </div>
                        <div className="bg-[#071324] border border-white/15 px-6 py-4 rounded-sm flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                            <div className="font-mono text-xs">
                                <span className="text-slate-400 block">VERIFIED REGISTRATION</span>
                                <span className="text-white font-bold">ACTIVE & FULLY INSURED ({new Date().getFullYear()})</span>
                            </div>
                        </div>
                    </div>

                    {/* License Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-12">
                        {LICENSES.map((item, idx) => (
                            <div key={idx} className="space-y-1 border-l border-white/15 pl-4">
                                <span className="font-mono text-[10px] font-bold tracking-widest text-[#38BDF8] uppercase block">
                                    {item.label}
                                </span>
                                <span className="font-sans text-sm sm:text-base font-black text-white block">
                                    {item.val}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}