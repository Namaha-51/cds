"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Easing } from "framer-motion";
import {
    PhoneCall,
    Mail,
    MapPin,
    Clock,
    Send,
    ShieldCheck,
    CheckCircle2,
    Wrench,
    Calendar,
    MessageSquare,
    User,
    Building2,
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

// Quick Contact Cards
const CONTACT_INFO = [
    {
        icon: PhoneCall,
        title: "Direct Dispatch Phone",
        val: "0405 545 609",
        sub: "Immediate same-day booking & emergency inquiries.",
        href: "tel:0405545609",
        badge: "FASTEST RESPONSE",
        badgeBg: "bg-[#A3E635] text-[#0F172A]",
    },
    {
        icon: Mail,
        title: "Email & Client Liaison",
        val: "service@cdsapplianceservices.com.au",
        sub: "For property managers, real estate quotes & invoices.",
        href: "mailto:service@cdsapplianceservices.com.au",
        badge: "INVOICES & QUOTES",
        badgeBg: "bg-[#BAE6FD] text-[#0B1E36]",
    },
    {
        icon: MapPin,
        title: "Base of Operations",
        val: "Noble Park VIC 3174",
        sub: "Mobile workshop fleet dispatching across Greater Melbourne.",
        href: "#",
        badge: "GREATER MELBOURNE",
        badgeBg: "bg-[#FEF08A] text-[#0B1E36]",
    },
    {
        icon: Clock,
        title: "Operating Hours",
        val: "Mon–Fri: 8:00 AM – 7:00 PM",
        sub: "Evening slots (4–7 PM) & weekend emergency service available.",
        href: "#",
        badge: "EVENING SLOTS",
        badgeBg: "bg-[#DDD6FE] text-[#0B1E36]",
    },
];

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        suburb: "",
        appliance: "Washing Machine",
        brand: "",
        window: "Evening Slot (4:00 PM – 7:00 PM)",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="relative bg-white text-slate-800 overflow-hidden select-none">

            {/* 📍 1. TOP ARCHITECTURAL HERO (pt-36 md:pt-44 clears the 136px fixed header) */}
            <div className="relative pt-36 pb-20 md:pt-44 md:pb-24 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">

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

                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white border border-slate-300 rounded-full shadow-2xs">
                                <div className="w-4 h-4 bg-[#0B1E36] rounded-xs flex items-center justify-center text-[9px] font-black text-white font-sans">
                                    CDS
                                </div>
                                <span className="text-xs font-mono font-bold tracking-widest text-[#0B1E36] uppercase">
                                    EST. MELBOURNE • DIRECT CLIENT LIAISON
                                </span>
                            </div>

                            {/* Headline with Solid Light Highlight */}
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0B1E36] uppercase font-sans leading-[1.1]">
                                Contact Our{" "}
                                <span className="inline-block bg-[#A3E635] text-[#0F172A] px-3 py-1 font-black rounded-xs shadow-2xs">
                                    Melbourne Team
                                </span>{" "}
                                Today.
                            </h1>

                            <p className="text-base sm:text-lg text-slate-600 font-normal font-sans leading-relaxed max-w-2xl">
                                Need immediate appliance repairs or advice? Speak directly with Melbourne’s licensed engineering specialists. We offer{" "}
                                <span className="inline-block bg-[#FEF08A] text-[#0B1E36] px-2 py-0.5 font-bold rounded-xs">
                                    same-day dispatch
                                </span>{" "}
                                and convenient evening appointment slots across Greater Melbourne.
                            </p>
                        </motion.div>

                        {/* Right Column: Editorial Visual Composition */}
                        <motion.div
                            custom={1}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="lg:col-span-5 relative flex items-center lg:justify-end justify-center w-full mt-6 lg:mt-0"
                        >
                            <div className="relative aspect-[4/3] w-full max-w-lg lg:max-w-none ml-auto rounded-sm overflow-hidden border-2 border-slate-300 bg-white p-3 shadow-2xl group">

                                <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest z-20">
                                    SYS_REF: CONTACT-2026 // MELB
                                </div>
                                <div className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest z-20">
                                    STATUS: DISPATCH ACTIVE
                                </div>

                                <div className="relative w-full h-full rounded-sm overflow-hidden bg-slate-100">
                                    <Image
                                        src="/hero-composition.png"
                                        alt="CDS Appliance Service Dispatch Desk"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>

                                <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-300 p-3.5 rounded-sm shadow-xl max-w-[210px]">
                                    <div className="flex items-center gap-2 text-[#0284C7] font-mono text-[10px] font-bold uppercase mb-1">
                                        <Gauge className="w-3.5 h-3.5" />
                                        RESPONSE SLA
                                    </div>
                                    <div className="text-[#0B1E36] font-sans text-xs font-black leading-tight">
                                        Same-Day &amp; Evening Bookings
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* 📍 2. MAIN CONTACT & BOOKING GRID */}
            <div className="py-20 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Direct Contact Info & Hours */}
                        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-5 space-y-6">

                            <div className="space-y-2 pb-2">
                                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#0284C7] uppercase block">
                                    FAST &amp; RELIABLE
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                                    Get In Touch
                                </h2>
                                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                                    Whether you have an emergency breakdown or need a scheduled maintenance quote for your rental property, our dispatch desk is ready.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {CONTACT_INFO.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="group bg-[#F8FAFC] border-2 border-slate-200 p-6 rounded-sm transition-all duration-200 hover:border-[#0B1E36] hover:bg-white hover:shadow-md block"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="p-2.5 rounded-sm bg-white border border-slate-200 text-[#0B1E36] group-hover:bg-[#0B1E36] group-hover:text-white transition-colors shadow-2xs">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <span className={`font-mono text-[10px] font-black px-2.5 py-0.5 rounded-xs uppercase tracking-wider ${item.badgeBg} border border-slate-300/50 shadow-2xs`}>
                                                {item.badge}
                                            </span>
                                        </div>

                                        <h3 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider mb-0.5">
                                            {item.title}
                                        </h3>
                                        <div className="text-lg font-black text-[#0B1E36] font-sans tracking-tight mb-2 group-hover:text-[#0284C7] transition-colors">
                                            {item.val}
                                        </div>
                                        <p className="text-xs text-slate-600 font-sans leading-normal font-medium">
                                            {item.sub}
                                        </p>
                                    </a>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white p-6 rounded-sm border border-slate-800 space-y-3 shadow-md">
                                <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-xs font-bold tracking-widest uppercase">
                                    <ShieldCheck className="w-4 h-4" />
                                    VERIFIED ACCREDITATIONS
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                                    <div>• ESV LIC: <strong className="text-white">D20380</strong></div>
                                    <div>• ARCTICK: <strong className="text-white">AU066324</strong></div>
                                    <div>• BPC LIC: <strong className="text-white">131134</strong></div>
                                    <div>• ELEC REC: <strong className="text-white">38111</strong></div>
                                </div>
                            </div>

                        </motion.div>

                        {/* Right Column: Interactive Service Request Form */}
                        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7">
                            <div className="bg-white border-2 border-[#0B1E36] p-8 sm:p-10 rounded-sm shadow-xl relative overflow-hidden">

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
                                    <div>
                                        <span className="bg-[#FEF08A] text-[#0B1E36] text-[10px] font-mono font-bold px-2.5 py-1 rounded-xs border border-yellow-300 tracking-wider uppercase inline-block mb-2">
                                            ONLINE BOOKING DESK
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E36] uppercase tracking-tight font-sans">
                                            Request a Service
                                        </h3>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 bg-[#F8FAFC] px-3 py-2 rounded-xs border border-slate-200 h-max">
                                        ⚡ Fixed Upfront Quotes
                                    </div>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 text-center space-y-6"
                                    >
                                        <div className="w-16 h-16 bg-[#A7F3D0] border-2 border-emerald-500 text-[#0F172A] rounded-full flex items-center justify-center mx-auto shadow-md">
                                            <CheckCircle2 className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-2 max-w-md mx-auto">
                                            <h4 className="text-2xl font-black text-[#0B1E36] uppercase font-sans">
                                                Request Received
                                            </h4>
                                            <p className="text-sm text-slate-600 font-sans leading-relaxed">
                                                Thank you, <strong className="text-[#0B1E36]">{formData.name}</strong>. Our Melbourne dispatch team is reviewing your fault details and will call you shortly at <strong className="text-[#0B1E36]">{formData.phone}</strong> to confirm your technician’s arrival window.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-6 py-2.5 bg-[#0B1E36] text-white font-bold font-sans text-xs tracking-wider uppercase rounded-sm hover:bg-[#0284C7] transition-colors shadow-sm"
                                        >
                                            Book Another Appliance
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 font-sans">

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                    <User className="w-3.5 h-3.5 text-[#0284C7]" /> Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. David Miller"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-medium"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                    <PhoneCall className="w-3.5 h-3.5 text-[#0284C7]" /> Phone Number *
                                                </label>
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="e.g. 0400 000 000"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                    <Mail className="w-3.5 h-3.5 text-[#0284C7]" /> Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="e.g. david@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-medium"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                    <MapPin className="w-3.5 h-3.5 text-[#0284C7]" /> Suburb / Postcode *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="e.g. Brighton 3186"
                                                    value={formData.suburb}
                                                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                    <Wrench className="w-3.5 h-3.5 text-[#0284C7]" /> Appliance Type
                                                </label>
                                                <select
                                                    value={formData.appliance}
                                                    onChange={(e) => setFormData({ ...formData, appliance: e.target.value })}
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-bold"
                                                >
                                                    <option>Washing Machine</option>
                                                    <option>Oven / Cooktop</option>
                                                    <option>Integrated Dishwasher</option>
                                                    <option>Clothes Dryer</option>
                                                    <option>Air Conditioning / Split System</option>
                                                    <option>Other Household Appliance</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                    <Building2 className="w-3.5 h-3.5 text-[#0284C7]" /> Appliance Brand
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Miele, Bosch, Fisher & Paykel"
                                                    value={formData.brand}
                                                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                                    className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-[#0284C7]" /> Preferred Appointment Window
                                            </label>
                                            <select
                                                value={formData.window}
                                                onChange={(e) => setFormData({ ...formData, window: e.target.value })}
                                                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs px-4 py-3 text-sm text-[#0B1E36] focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-bold"
                                            >
                                                <option>Evening Slot (4:00 PM – 7:00 PM) • Most Popular</option>
                                                <option>Morning Window (8:00 AM – 12:00 PM)</option>
                                                <option>Afternoon Window (12:00 PM – 4:00 PM)</option>
                                                <option>First Available / Emergency Same-Day</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-[#0B1E36] uppercase tracking-wide flex items-center gap-1.5">
                                                <MessageSquare className="w-3.5 h-3.5 text-[#0284C7]" /> Fault Description / Error Codes
                                            </label>
                                            <textarea
                                                rows={3}
                                                placeholder="Please describe what the appliance is doing (e.g. won't spin, flashing F20 error, leaking from bottom)..."
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-[#F8FAFC] border border-slate-300 rounded-xs p-4 text-sm text-[#0B1E36] placeholder-slate-400 focus:outline-none focus:border-[#0B1E36] focus:bg-white transition-all font-medium custom-scrollbar"
                                            />
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                className="w-full py-4 bg-[#0B1E36] hover:bg-[#0284C7] text-white font-bold font-sans text-sm tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0B1E36]/15 scale-[1.01] hover:scale-[1.02]"
                                            >
                                                <Send className="w-4 h-4 shrink-0" />
                                                <span>Submit Service Request</span>
                                            </button>
                                            <p className="text-[11px] text-center font-sans text-slate-500 mt-3 font-medium">
                                                🔒 Your details are sent directly to our Melbourne dispatch desk. No third-party sharing.
                                            </p>
                                        </div>

                                    </form>
                                )}

                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>

            {/* 📍 3. BOTTOM EMERGENCY CALL TO ACTION */}
            <div className="relative py-20 bg-[#F8FAFC] border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6 max-w-2xl mx-auto relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E36] uppercase tracking-tight font-sans leading-tight">
                        Need Immediate{" "}
                        <span className="inline-block bg-[#A3E635] text-[#0F172A] px-3 py-0.5 rounded-xs shadow-2xs">
                            Emergency Repair?
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed font-medium">
                        Don’t wait for email confirmations. If you have an urgent refrigeration failure, major water leak, or commercial heating breakdown, call our priority dispatch line directly.
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