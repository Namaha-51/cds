"use client";

import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesExplorer from "@/components/ServicesExplorer";
import WhyPremium from "@/components/WhyPremium";
import TimelineProcess from "@/components/TimelineProcess";
import ReviewsSection from "@/components/ReviewsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-white flex flex-col">
      {/* Dynamic SVG Preloader */}
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}

      {/* Main content renders seamlessly only after preload completion */}
      {loadingComplete && (
        <main className="w-full flex-1 flex flex-col">
          <Navbar />
          <Hero />
          <PartnersMarquee />
          <ServicesExplorer />
          <WhyPremium />
          <TimelineProcess />
          <ReviewsSection />
          <FinalCTA />
          <Footer />
        </main>
      )}
    </div>
  );
}