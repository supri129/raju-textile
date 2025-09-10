"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Raju Textile</h1>
        <nav className="hidden md:flex space-x-6">
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
        </nav>
        <div className="md:hidden">
          {/* Mobile navigation toggle can go here later */}
          <Button variant="ghost" size="icon" className="text-primary-foreground">
            {/* Icon for mobile menu */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;