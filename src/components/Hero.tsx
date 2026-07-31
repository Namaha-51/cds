"use client";
import contentData from "../../data/content.json";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type Easing } from "framer-motion";
import { ShieldCheck, Award, Tag, MapPin, ArrowRight, ChevronRight, Wrench } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

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
    { icon: ShieldCheck, label: contentData.home.badge1Label, sub: contentData.home.badge1Sub },
    { icon: Award, label: contentData.home.badge2Label, sub: contentData.home.badge2Sub },
    { icon: Tag, label: contentData.home.badge3Label, sub: contentData.home.badge3Sub },
    { icon: MapPin, label: contentData.home.badge4Label, sub: contentData.home.badge4Sub },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-116px)] w-full bg-white text-[#0D2B52] overflow-hidden flex flex-col justify-between pt-6 sm:pt-10 md:pt-14 pb-16 px-6 md:px-12 lg:px-20 blueprint-grid border-b border-[#E5E9F0]"
    >
      <div className="absolute inset-0 pointer-events-none blueprint-grid-fine opacity-60" />
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-[#E5E9F0]/60 hidden lg:block" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#E5E9F0]/40 hidden xl:block" />

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full mt-0">
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-full w-max shadow-2xs">
            <Wrench className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#0D2B52] uppercase">
              {contentData.home.heroEyebrow}
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold sm:font-black tracking-tight text-[#0B1E36] leading-[1.05]">
              {contentData.home.heroTitle}
            </motion.h1>
          </div>

          <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal font-sans">
            {contentData.home.heroDesc}
          </motion.p>

          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="pt-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] uppercase tracking-wide font-sans pl-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] inline-block shrink-0"></span>
              <span>{contentData.home.heroEveningNotice}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button onMouseMove={handleBtnMouseMove} onMouseLeave={handleBtnMouseLeave} animate={{ x: btnPosition.x, y: btnPosition.y }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#0B1E36] text-white font-bold text-sm tracking-wide uppercase font-sans rounded-sm overflow-hidden shadow-lg shadow-[#0B1E36]/20 transition-all duration-300 hover:bg-[#0284C7]">
                <span className="relative z-10 flex items-center gap-3">
                  {contentData.home.primaryCta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.button className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1E36] font-bold text-sm tracking-wide uppercase font-sans rounded-sm border-2 border-slate-300 hover:border-[#0B1E36] transition-colors duration-300 shadow-2xs">
                <span className="flex items-center gap-2">
                  {contentData.home.secondaryCta}
                  <ChevronRight className="w-4 h-4 text-[#0F172A] group-hover:text-[#0B1E36] transition-colors" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="pt-4">
            <div className="h-[1px] w-full bg-slate-300" />
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="visible" variants={fadeUp} className="grid grid-cols-2 gap-y-5 gap-x-6 pt-2">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="p-2 bg-[#F0F9FF] border border-[#BAE6FD] rounded-sm text-[#0284C7] shadow-2xs">
                  <badge.icon className="w-5 h-5" />
                </div>
                <div className="pt-0.5">
                  <h4 className="text-sm font-bold text-[#0B1E36] tracking-tight font-sans">{badge.label}</h4>
                  <p className="text-xs text-[#0F172A] font-sans font-medium leading-tight mt-0.5">{badge.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] lg:min-h-[600px]">
          <motion.div style={{ x: imgParallaxX, y: imgParallaxY }} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease: easeQuint, delay: 0.3 }} className="relative w-full h-full max-w-lg lg:max-w-none aspect-[4/3] rounded-sm bg-[#F7F9FC] border-2 border-slate-300 p-3 shadow-2xl shadow-[#0B1E36]/15">
            <div className="absolute top-2 left-2 text-[9px] font-mono font-bold text-[#0F172A] uppercase tracking-widest z-10">SYS_REF: HVAC-2026 // MELB</div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono font-bold text-[#0F172A] uppercase tracking-widest z-10">PRECISION SPEC: ISO-9001</div>
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-white">
              <Image src="/hero-composition.png" alt="CDS Appliance & HVAC Engineering Composition" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center transform transition-transform duration-1000 hover:scale-[1.02]" />
            </div>
          </motion.div>

          <motion.div style={{ x: detailParallaxX, y: detailParallaxY }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: easeQuint, delay: 0.6 }} className="absolute -bottom-6 -left-4 sm:left-4 z-20 w-48 sm:w-60 bg-white border-2 border-slate-300 p-2.5 rounded-sm shadow-xl hidden sm:block">
            <div className="relative w-full h-28 mb-2 overflow-hidden rounded-sm bg-[#F7F9FC]">
              <Image src="/hero-detail.png" alt="HVAC Precision Component Detail" fill className="object-cover" />
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono font-bold">
              <span className="text-[#0B1E36]">DIAGNOSTIC TOLERANCE</span>
              <span className="text-emerald-600">±0.01mm</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, ease: easeQuint, delay: 0.8 }} className="absolute -top-4 -right-2 z-20 bg-[#0B1E36] text-white p-4 rounded-sm shadow-xl max-w-[200px] hidden md:block border border-white/15">
            <div className="text-[10px] font-mono text-[#38BDF8] font-bold uppercase tracking-wider mb-1">Response SLA</div>
            <div className="text-xl font-black tracking-tight text-white mb-1 font-sans">Same-Day</div>
            <div className="text-[11px] text-slate-200 font-medium leading-tight font-sans">Emergency &amp; Scheduled Dispatch Across Greater Melbourne</div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="relative z-10 mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-slate-300 overflow-hidden">
        <div className="flex-1 w-full overflow-hidden whitespace-nowrap flex items-center">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 25 }} className="flex gap-12 text-[11px] sm:text-xs font-mono font-bold text-[#0F172A] uppercase">
            <span>{contentData.home.marqueeText}</span>
            <span>{contentData.home.marqueeText}</span>
            <span>{contentData.home.marqueeText}</span>
          </motion.div>
        </div>
        <div className="text-base sm:text-lg font-black tracking-widest text-[#0B1E36] whitespace-nowrap lg:border-l-2 border-slate-300 lg:pl-6 uppercase">
          {contentData.home.marqueeLocation}
        </div>
      </motion.div>
    </section>
  );
}