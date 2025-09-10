"use client";

import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (id: string) => {
    setIsOpen(false); // Close the sheet when a link is clicked

    // If already on the home page, scroll directly
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on a different page, navigate to home and then scroll
      navigate(`/#${id}`);
      // Use a timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to allow route change
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary-foreground md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-primary text-primary-foreground">
        <nav className="flex flex-col gap-4 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-white ${
                isActive && location.hash === "" && location.pathname === "/" ? "text-white" : "text-primary-foreground/80"
              }`
            }
            onClick={() => setIsOpen(false)} // Close sheet for home link
          >
            Home
          </NavLink>
          <button
            onClick={() => handleScrollToSection("features")}
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white text-left"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("about-us")}
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white text-left"
          >
            About Us
          </button>
          <NavLink
            to="/upload-design"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-white text-left ${
                isActive ? "text-white" : "text-primary-foreground/80"
              }`
            }
            onClick={() => setIsOpen(false)} // Close sheet for upload design link
          >
            Upload Design
          </NavLink>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white text-left"
          >
            Contact
          </button>
          <Button
            className="mt-4 bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleScrollToSection("contact")}
          >
            Request a Quote
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;