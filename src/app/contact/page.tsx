import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Contact Us & Online Booking | CDS Appliance Services Melbourne",
    description: "Schedule same-day appliance repairs or evening appointments (4-7 PM) with Melbourne's licensed HVAC & appliance engineers.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 flex flex-col">
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}