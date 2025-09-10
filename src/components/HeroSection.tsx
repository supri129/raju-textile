"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white flex items-center justify-center min-h-[calc(100vh-64px)]">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Raju Textile: Weaving Quality, Crafting Excellence
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover premium fabrics and exceptional craftsmanship for all your textile needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore Products
            </Button>
            <Button className="bg-yellow-400 text-blue-800 hover:bg-yellow-300 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;