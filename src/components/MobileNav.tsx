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
    setIsOpen(false);

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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-background text-foreground">
        <nav className="flex flex-col gap-4 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors hover:text-primary ${
                isActive && location.hash === "" && location.pathname === "/" ? "text-primary" : "text-foreground/80"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <button
            onClick={() => handleScrollToSection("features")}
            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary text-left"
          >
            Features
          </button>
          <button
            onClick={() => handleScrollToSection("about-us")}
            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary text-left"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary text-left"
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
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
          <Button
            className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
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