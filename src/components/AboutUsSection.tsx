"use client";

import React from "react";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-secondary/50 dark:bg-secondary">
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1620722399839-9a5130037c47?q=80&w=1932&auto=format&fit=crop"
            alt="About Raju Textile"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Our Story: A Legacy of Textiles
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Raju Textile has been a cornerstone in the textile industry for decades, built on a foundation of passion for fabrics and dedication to quality. We started with a simple vision: to provide the finest textiles that inspire creativity and stand the test of time.
          </p>
          <p className="text-lg text-muted-foreground">
            From humble beginnings, we've grown into a trusted name, serving a diverse clientele with a wide range of premium fabrics. Our commitment to innovation, sustainability, and customer satisfaction remains at the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;