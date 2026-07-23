"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 600); // Allow fadeout animation to finish
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Engineering Blueprint Grid Background */}
          <div className="absolute inset-0 blueprint-grid opacity-40" />
          <div className="absolute inset-0 blueprint-grid-fine opacity-30" />

          {/* Clean mechanical SVG drawing "CDS" */}
          <div className="relative flex flex-col items-center gap-6">
            <svg
              width="240"
              height="80"
              viewBox="0 0 240 80"
              className="text-[#0D2B52] stroke-current stroke-[1.5] fill-none"
            >
              {/* Draw C */}
              <motion.path
                d="M 60 20 C 30 20, 20 30, 20 40 C 20 50, 30 60, 60 60"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Draw D */}
              <motion.path
                d="M 100 20 L 100 60 C 135 60, 145 55, 145 40 C 145 25, 135 20, 100 20 Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />

              {/* Draw S */}
              <motion.path
                d="M 210 25 C 200 20, 175 20, 175 32 C 175 42, 215 38, 215 48 C 215 60, 190 60, 180 55"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              />
            </svg>

            {/* Precision status bar calibration details */}
            <div className="flex flex-col items-center gap-1.5 font-mono text-[9px] text-[#5A6B82] tracking-[0.25em] uppercase">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.8, times: [0, 0.2, 0.8, 1] }}
              >
                SYSTEM CALIBRATION // MELB_CORE
              </motion.span>
              <div className="w-24 h-[1px] bg-[#E5E9F0] relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#0D2B52]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
