"use client";

import React, { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import SeasonalFeature from "@/components/SeasonalFeature";
import ServicesExplorer from "@/components/ServicesExplorer";
import WhyPremium from "@/components/WhyPremium";
import TimelineProcess from "@/components/TimelineProcess";
import ReviewsSection from "@/components/ReviewsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {/* Dynamic SVG Preloader */}
      <Loader onComplete={() => setLoadingComplete(true)} />

      {/* Main content renders seamlessly only after preload completion */}
      {loadingComplete && (
        <main className="min-h-screen bg-white">
          <Navbar />
          <Hero />
          <PartnersMarquee />
          <SeasonalFeature />
          <ServicesExplorer />
          <WhyPremium />
          <TimelineProcess />
          <ReviewsSection />
          <FinalCTA />
          <Footer />
        </main>
      )}
    </>
  );
}
