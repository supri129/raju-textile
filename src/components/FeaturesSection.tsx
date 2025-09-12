"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shirt, Factory, Award, Leaf } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Premium Quality Fabrics",
    description: "Sourcing the finest materials to ensure durability and comfort in every thread.",
  },
  {
    icon: Factory,
    title: "State-of-the-Art Manufacturing",
    description: "Utilizing advanced technology and skilled artisans for superior textile production.",
  },
  {
    icon: Award,
    title: "Unmatched Craftsmanship",
    description: "Dedicated to precision and artistry, delivering products of exceptional finish.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to eco-friendly processes and ethical sourcing for a better future.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 dark:text-foreground">
          Why Choose Raju Textile?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;