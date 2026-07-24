import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PropertyManagementSection from "@/components/PropertyManagementSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Property Management & Real Estate Maintenance | CDS Melbourne",
    description: "Reliable appliance repairs, smoke alarm compliance, cabinet modifications, and air conditioning maintenance for Melbourne real estate agencies.",
};

export default function PropertyManagementPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 flex flex-col">
                <PropertyManagementSection />
            </main>
            <Footer />
        </div>
    );
}