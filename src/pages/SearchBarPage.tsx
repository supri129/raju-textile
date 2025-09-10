"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar"; // Import the new SearchBar component

const SearchBarPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-background py-12 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Search Our Collection</CardTitle>
          <CardDescription className="text-gray-600 dark:text-muted-foreground">
            Find the perfect fabric or design for your needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <SearchBar />
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchBarPage;