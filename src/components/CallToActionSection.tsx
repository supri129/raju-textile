"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience the Raju Textile Difference?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Whether you're looking for bespoke fabrics or bulk orders, our team is ready to assist you. Get in touch today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            View Our Catalog
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;