"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { showSuccess } from "@/utils/toast";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      // In a real application, you would perform a search query here.
      console.log("Searching for:", searchTerm);
      showSuccess(`Searching for "${searchTerm}"... (Backend integration needed for actual search)`);
      // You might navigate to a search results page or display results here.
    } else {
      showSuccess("Please enter a search term.");
    }
  };

  return (
    <div className="flex w-full max-w-md items-center space-x-2">
      <form onSubmit={handleSearch} className="flex w-full space-x-2">
        <Input
          type="text"
          placeholder="Search for fabrics, designs, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit" size="icon">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;