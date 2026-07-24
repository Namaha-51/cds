import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "About Us | CDS Appliance Services Melbourne",
    description: "Melbourne's premium HVAC and high-end appliance engineering specialists. Built on a decade of marine engineering precision.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* 1. Navbar locked at the top */}
            <Navbar />

            {/* 2. Main About Content */}
            <main className="flex-1 flex flex-col">
                <AboutSection />
            </main>

            {/* 3. Footer locked at the bottom */}
            <Footer />
        </div>
    );
}