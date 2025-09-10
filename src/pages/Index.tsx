"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutUsSection from "@/components/AboutUsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer"; // Import the new Footer component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AboutUsSection />
        <CallToActionSection />
      </main>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Index;