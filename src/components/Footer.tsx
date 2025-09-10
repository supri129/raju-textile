"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Raju Textile</h3>
          <p className="text-sm text-primary-foreground/80">
            Weaving quality, crafting excellence. Your trusted partner for premium fabrics.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="h-4 w-4" />
              121F KSRL street, Pattukkottai, Thanjavur
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-4 w-4" />
              +91 8056881860
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="h-4 w-4" />
              kalyanasundaram@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links / Social Media (Optional, can be expanded) */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
        &copy; {new Date().getFullYear()} Raju Textile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;