"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            // Check if hovering clickable elements
            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button";

            setIsPointer(isClickable);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
            {/* Main precision dot */}
            <div
                className={`absolute w-3 h-3 rounded-full bg-[#2563EB] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out ${isPointer ? "scale-150 bg-[#FACC15]" : "scale-100"
                    }`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />

            {/* Outer targeting reticle ring */}
            <div
                className={`absolute w-8 h-8 rounded-full border border-[#0B1E36]/30 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${isPointer ? "scale-125 border-[#2563EB]" : "scale-100"
                    }`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </div>
    );
}