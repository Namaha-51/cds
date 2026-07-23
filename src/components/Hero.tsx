"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type Easing } from "framer-motion";
import { ShieldCheck, Award, Tag, MapPin, ArrowRight, ChevronRight, Wrench } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax calculations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const imgParallaxX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const imgParallaxY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const detailParallaxX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const detailParallaxY = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Magnetic Button Effect
  const [btnPosition, setBtnPosition] = useState({ x: 0, y: 0 });
  const handleBtnMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) * 0.25;
    const y = (e.clientY - (top + height / 2)) * 0.25;
    setBtnPosition({ x, y });
  };
  const handleBtnMouseLeave = () => {
    setBtnPosition({ x: 0, y: 0 });
  };

  // Animation Staggers
  const easeQuint: Easing = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: easeQuint,
        delay: custom * 0.12,
      },
    }),
  };

  const trustBadges = [
    { icon: ShieldCheck, label: "Licensed Technicians", sub: "VBA & ARCTick Certified" },
    { icon: Award, label: "Manufacturer Authorised", sub: "Bosch, Daikin, Brivis & More" },
    { icon: Tag, label: "Transparent Pricing", sub: "Fixed Upfront Quotes" },
    { icon: MapPin, label: "Trusted Across Melbourne", sub: "Greater Metro Coverage" },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-white text-[#0D2B52] overflow-hidden flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 lg:px-20 blueprint-grid border-b border-[#E5E9F0]"
    >
      {/* Background Architectural Overlay Lines */}
      <div className="absolute inset-0 pointer-events-none blueprint-grid-fine opacity-60" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#E5E9F0]/60 hidden lg:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#E5E9F0]/40 hidden xl:block" />

      {/* Main Hero Container */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">

        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-10">

          {/* Eyebrow badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F7F9FC] border border-[#E5E9F0] rounded-full w-max"
          >
            <Wrench className="w-3.5 h-3.5 text-[#0D2B52]" />
            <span className="text-xs font-mono tracking-wider text-[#0D2B52] uppercase">
              EST. MELBOURNE • LICENSED HVAC & APPLIANCE ENGINEERS
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-2">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D2B52] leading-[1.08]"
            >
              Melbourne’s Premium Appliance & Air Conditioning Specialists.
            </motion.h1>
          </div>

          {/* Supporting Copy */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-[#5A6B82] leading-relaxed max-w-xl font-normal"
          >
            Manufacturer authorised technical precision for residential and commercial heating, cooling, and high-end appliances. Uncompromising standards, transparent flat-rate pricing, and certified Melbourne technicians.
          </motion.p>

          {/* Actions / Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            {/* Primary Button */}
            <motion.button
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              animate={{ x: btnPosition.x, y: btnPosition.y }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#0D2B52] text-white font-medium text-sm tracking-wide rounded-sm overflow-hidden shadow-lg shadow-[#0D2B52]/10 transition-all duration-300 hover:bg-[#071830]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Schedule a Service
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#0D2B52] font-medium text-sm tracking-wide rounded-sm border border-[#E5E9F0] hover:border-[#0D2B52] transition-colors duration-300"
            >
              <span className="flex items-center gap-2">
                Explore Services
                <ChevronRight className="w-4 h-4 text-[#5A6B82] group-hover:text-[#0D2B52] transition-colors" />
              </span>
            </motion.button>
          </motion.div>

          {/* Technical Stamp Divider */}
          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="pt-4">
            <div className="h-[1px] w-full bg-[#E5E9F0]" />
          </motion.div>

          {/* Trust Indicators Row */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-2 gap-y-4 gap-x-6 pt-2"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-1.5 bg-[#F7F9FC] border border-[#E5E9F0] rounded-sm text-[#0D2B52] mt-0.5">
                  <badge.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#0D2B52] tracking-tight">{badge.label}</h4>
                  <p className="text-[11px] text-[#5A6B82] font-mono leading-tight">{badge.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Layered Editorial Architectural Composition */}
        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[600px]">

          {/* Main Visual Composition */}
          <motion.div
            style={{ x: imgParallaxX, y: imgParallaxY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: easeQuint, delay: 0.3 }}
            className="relative w-full h-full max-w-lg lg:max-w-none aspect-[4/3] rounded-sm bg-[#F7F9FC] border border-[#E5E9F0] p-3 shadow-2xl shadow-[#0D2B52]/5"
          >
            {/* Technical Blueprint Corner Crosshairs */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#5A6B82]/60 uppercase tracking-widest z-10">
              SYS_REF: HVAC-2026 // MELB
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-[#5A6B82]/60 uppercase tracking-widest z-10">
              PRECISION SPEC: ISO-9001
            </div>

            <div className="relative w-full h-full overflow-hidden rounded-sm bg-white">
              <Image
                src="/hero-composition.png"
                alt="CDS Appliance & HVAC Engineering Composition"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transform transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Floating Secondary Technical Detail Layer */}
          <motion.div
            style={{ x: detailParallaxX, y: detailParallaxY }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: easeQuint, delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:left-4 z-20 w-48 sm:w-60 bg-white border border-[#E5E9F0] p-2.5 rounded-sm shadow-xl hidden sm:block"
          >
            <div className="relative w-full h-28 mb-2 overflow-hidden rounded-sm bg-[#F7F9FC]">
              <Image
                src="/hero-detail.png"
                alt="HVAC Precision Component Detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-[#0D2B52] font-semibold">DIAGNOSTIC TOLERANCE</span>
              <span className="text-emerald-600 font-bold">±0.01mm</span>
            </div>
          </motion.div>

          {/* Architectural Spec Card (Top Right Overlay) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: easeQuint, delay: 0.8 }}
            className="absolute -top-4 -right-2 z-20 bg-[#0D2B52] text-white p-4 rounded-sm shadow-xl max-w-[200px] hidden md:block"
          >
            <div className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1">
              Response SLA
            </div>
            <div className="text-xl font-bold tracking-tight text-white mb-1">
              Same-Day
            </div>
            <div className="text-[11px] text-slate-300 leading-tight">
              Emergency & Scheduled Dispatch Across Greater Melbourne
            </div>
          </motion.div>

        </div>

      </div>

      {/* Footer Line Specification */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#5A6B82] pt-6 border-t border-[#E5E9F0]"
      >
        <span>SERVICING: HEATING • EVAPORATIVE COOLING • REFRIGERATION • REVERSE CYCLE • WASHING MACHINES</span>
        <span>MELBOURNE VICTORIA • AUTHORISED SERVICE CENTRE</span>
      </motion.div>
    </section>
  );
}
