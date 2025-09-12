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
    <header className="bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Raju Textile</h1>
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-white ${
                isActive && location.hash === "" && location.pathname === "/" ? "text-white" : "text-primary-foreground/80"
              }`
            }
          >
            Home
          </NavLink>
          <button
            onClick={() => handleScrollToSection("features")}
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("about-us")}
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
          >
            Contact
          </button>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-white ${
                isActive ? "text-white" : "text-primary-foreground/80"
              }`
            }
          >
            Dashboard
          </NavLink>
          <Button
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 text-base rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
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