"use client";

import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Raju Textile</h1>
        {/* You can add navigation or other elements here later */}
      </div>
    </header>
  );
};

export default Header;