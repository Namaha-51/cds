"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, type Easing } from "framer-motion";
import { ArrowRight, Award, Clock, PhoneCall, Home, ChevronRight } from "lucide-react";

// Updated Navigation Links with Property Management
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service Areas", href: "/areas" },
  { name: "Property Management", href: "/property-management" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > lastScrollY && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(latest);
  });

  const easeQuint: Easing = [0.22, 1, 0.36, 1];

  const getBreadcrumbTitle = (path: string) => {
    if (path === "/about") return "About Us";
    if (path === "/areas" || path === "/service-areas") return "Service Areas";
    if (path === "/property-management") return "Property Management";
    if (path === "/contact" || path === "/contact-us") return "Contact Us";
    if (path.startsWith("/privacy-policy")) return "Privacy Policy";
    if (path.startsWith("/terms-of-service")) return "Terms of Service";
    return path.replace("/", "").replace("-", " ").toUpperCase();
  };

  return (
    <div className="relative select-none z-50">

      {/* 📍 1. TOP ANNOUNCEMENT RIBBON */}
      <div className="w-full bg-[#0B1E36] text-white py-2.5 px-6 border-b border-white/10 flex items-center justify-center text-center shadow-xs relative z-50">
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap text-xs sm:text-sm font-sans font-bold tracking-normal">
          <span className="flex items-center gap-2 text-[#38BDF8]">
            <Award className="w-4 h-4 shrink-0" />
            <span>Authorised Miele &amp; Bosch Partner</span>
          </span>
          <span className="hidden md:inline text-slate-500 font-normal">|</span>
          <span className="flex items-center gap-2 text-white">
            <Clock className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>Evening Appointments Available (4–7 PM)</span>
          </span>
          <span className="hidden md:inline text-slate-500 font-normal">|</span>
          <a
            href="tel:0405545609"
            className="flex items-center gap-2 font-black text-white hover:text-[#38BDF8] transition-colors underline decoration-[#38BDF8] underline-offset-4"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>0405 545 609</span>
          </a>
        </div>
      </div>

      {/* 📍 2. MAIN NAVIGATION BAR (Edge-to-Edge Spacing, Single-Line No Wrapping) */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.5, ease: easeQuint }}
        className="w-full h-24 flex items-center transition-all duration-300 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 shadow-sm"
      >
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-4">

          {/* Brand Logo (Far Left) */}
          <Link href="/" className="flex items-center gap-3.5 cursor-pointer group shrink-0 min-w-max">
            <div className="w-10 h-10 bg-[#0B1E36] group-hover:bg-[#0284C7] transition-colors flex items-center justify-center rounded-sm shadow-2xs shrink-0">
              <span className="text-white font-black tracking-tighter text-sm font-sans">CDS</span>
            </div>
            <div>
              <span className="block font-black text-sm tracking-tight text-[#0B1E36] uppercase font-sans leading-none">
                CDS APPLIANCE
              </span>
              <span className="block text-[10px] text-[#0284C7] font-bold tracking-widest uppercase font-mono mt-0.5">
                ENGINEERING &amp; HVAC
              </span>
            </div>
          </Link>

          {/* Central Navigation Links (Generous Padding, Single-Line No Wrapping) */}
          <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 flex-1 px-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-3 text-xs xl:text-sm font-sans font-extrabold tracking-wide uppercase cursor-pointer rounded-sm transition-all duration-200 whitespace-nowrap ${isActive
                      ? "bg-[#0B1E36] text-white shadow-xs"
                      : "text-[#1E293B] hover:bg-[#F0F9FF] hover:text-[#0284C7]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Booking Button (Far Right) */}
          <div className="flex items-center shrink-0 min-w-max">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0B1E36] text-white font-sans font-bold text-xs tracking-wider uppercase rounded-sm shadow-md transition-all duration-300 hover:bg-[#0284C7]"
            >
              <span>Book a Service</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </motion.header>

      {/* 📍 3. DYNAMIC SITE-WIDE BREADCRUMBS */}
      {!isHomePage && (
        <div className="bg-[#F8FAFC] border-b border-slate-200/80 py-3 px-8 md:px-16 lg:px-20 text-xs font-mono font-bold text-slate-500 shadow-2xs relative z-30">
          <div className="max-w-[1440px] mx-auto flex items-center gap-2.5">
            <Link href="/" className="hover:text-[#0284C7] transition-colors flex items-center gap-1.5 text-slate-600">
              <Home className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>HOME</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0B1E36] tracking-wider uppercase font-black">
              {getBreadcrumbTitle(pathname)}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}