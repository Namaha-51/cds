"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, type Easing } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Service Areas", href: "#service-areas" },
  { name: "Air Conditioning", href: "#air-conditioning" },
  { name: "Contact", href: "#contact" },
];

const DROPDOWN_LINKS = [
  { name: "Property Management", href: "#property-management" },
  { name: "Why Premium", href: "#why-premium" },
  { name: "Our Process", href: "#our-process" },
  { name: "Latest Insights", href: "#insights" },
];

export default function Navbar() {
  const [isSolid, setIsSolid] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Solid background check
    if (latest > 80) {
      setIsSolid(true);
    } else {
      setIsSolid(false);
    }

    // Hide/Show navbar on scroll direction change
    if (latest > lastScrollY && latest > 120) {
      setIsHidden(true);
      setIsDropdownOpen(false);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(latest);
  });

  const easeQuint: Easing = [0.22, 1, 0.36, 1];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.5, ease: easeQuint }}
      className={`fixed top-0 left-0 right-0 h-20 z-40 flex items-center transition-all duration-300 ${
        isSolid
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E9F0] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeQuint, delay: 0.1 }}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-8 h-8 bg-[#0D2B52] flex items-center justify-center rounded-sm">
            <span className="text-white font-semibold tracking-tighter text-sm font-mono">CDS</span>
          </div>
          <div className="hidden sm:block">
            <span className="block font-bold text-xs tracking-wide text-[#0D2B52] uppercase font-mono leading-none">
              CDS
            </span>
            <span className="block text-[9px] text-[#5A6B82] tracking-wider uppercase font-mono mt-0.5">
              APPLIANCE SERVICES
            </span>
          </div>
        </motion.div>

        {/* Central Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link, idx) => {
            const isActive = activeLink === link.name;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeQuint, delay: 0.2 + idx * 0.08 }}
                className={`relative py-2 text-xs font-mono tracking-wider uppercase cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-[#0D2B52]" : "text-[#5A6B82] hover:text-[#0D2B52]"
                }`}
              >
                {link.name}
                
                {/* Animated growing Underline */}
                {isActive ? (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute left-0 bottom-0 right-0 h-[1.5px] bg-[#0D2B52]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute left-0 bottom-0 right-0 h-[1.5px] bg-[#0D2B52] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </motion.a>
            );
          })}

          {/* More Dropdown Link */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1.5 py-2 text-xs font-mono tracking-wider uppercase text-[#5A6B82] hover:text-[#0D2B52] transition-colors"
            >
              More
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: easeQuint }}
                  className="absolute right-0 mt-3 w-56 bg-white border border-[#E5E9F0] shadow-xl p-2 rounded-sm flex flex-col gap-1 z-50"
                >
                  {DROPDOWN_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveLink("More");
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2.5 text-[11px] font-mono tracking-wide text-[#5A6B82] hover:text-[#0D2B52] hover:bg-[#F7F9FC] transition-colors rounded-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Booking Button */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeQuint, delay: 0.1 }}
        >
          <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D2B52] text-white font-medium text-xs tracking-wider uppercase rounded-full shadow-lg shadow-[#0D2B52]/10 transition-all duration-300 hover:bg-[#071830]">
            Book a Service
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </motion.div>

      </div>
    </motion.nav>
  );
}
