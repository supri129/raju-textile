"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; // Import the new HeroSection component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection /> {/* Render the HeroSection component */}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;