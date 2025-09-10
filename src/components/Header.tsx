import React from 'react';
import { Button } from "@/components/ui/button";
import { Shirt } from 'lucide-react';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-white shadow-sm rounded-b-lg">
      <div className="flex items-center space-x-2">
        <Shirt className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-blue-800">Raju Textile</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
        <a href="#products" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</a>
        <a href="#about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">About Us</a>
        <a href="#contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
      </nav>
      <Button className="md:hidden">Menu</Button> {/* Mobile menu button */}
    </header>
  );
};

export default Header;