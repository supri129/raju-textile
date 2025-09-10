"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav"; // Import the new MobileNav component

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Raju Textile</h1>
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-white ${
                isActive ? "text-white" : "text-primary-foreground/80"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="#features" // Using hash links for sections on the same page
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
          >
            Features
          </NavLink>
          <NavLink
            to="#about-us" // Using hash links for sections on the same page
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
          >
            About Us
          </NavLink>
          <NavLink
            to="#contact" // Using hash links for sections on the same page
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
          >
            Contact
          </NavLink>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 text-base rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Request a Quote
          </Button>
        </nav>
        <MobileNav /> {/* Render the MobileNav component */}
      </div>
    </header>
  );
};

export default Header;