"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection"; // Import the new FeaturesSection component
import AboutUsSection from "@/components/AboutUsSection";   // Import the new AboutUsSection component
import CallToActionSection from "@/components/CallToActionSection"; // Import the new CallToActionSection component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection /> {/* Render the FeaturesSection component */}
        <AboutUsSection />  {/* Render the AboutUsSection component */}
        <CallToActionSection /> {/* Render the CallToActionSection component */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;