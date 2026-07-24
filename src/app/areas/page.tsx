import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Service Areas | CDS Appliance Services Melbourne",
    description: "Check live dispatch telemetry and same-day HVAC and appliance repair coverage across Greater Melbourne.",
};

export default function ServiceAreasPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#071324]">
            {/* 1. Locks the Navbar permanently at the top */}
            <Navbar />

            {/* 2. Loads your interactive dispatch hub */}
            <main className="flex-1 flex flex-col">
                <ServiceAreasSection />
            </main>

            {/* 3. Locks the Footer permanently at the bottom */}
            <Footer />
        </div>
    );
}