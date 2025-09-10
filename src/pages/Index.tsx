"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutUsSection from "@/components/AboutUsSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="about-us">
          <AboutUsSection />
        </div>
        <div id="contact"> {/* Using 'contact' ID for the CallToActionSection as it often serves as the contact point */}
          <CallToActionSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;