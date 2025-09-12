"use client";

import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm text-foreground p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Raju Textile</h1>
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary ${
                isActive && location.hash === "" && location.pathname === "/" ? "text-primary" : "text-foreground/80"
              }`
            }
          >
            Home
          </NavLink>
          <button
            onClick={() => handleScrollToSection("features")}
            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("about-us")}
            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Contact
          </button>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary ${
                isActive ? "text-primary" : "text-foreground/80"
              }`
            }
          >
            Dashboard
          </NavLink>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-base rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleScrollToSection("contact")}
          >
            Request a Quote
          </Button>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;