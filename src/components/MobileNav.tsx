"use client";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet when a link is clicked
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
                isActive ? "text-white" : "text-primary-foreground/80"
              }`
            }
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
          <NavLink
            to="#features"
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
            onClick={handleLinkClick}
          >
            Features
          </NavLink>
          <NavLink
            to="#about-us"
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
            onClick={handleLinkClick}
          >
            About Us
          </NavLink>
          <NavLink
            to="#contact"
            className="text-lg font-medium text-primary-foreground/80 transition-colors hover:text-white"
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
          <Button className="mt-4 bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" onClick={handleLinkClick}>
            Request a Quote
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;