"use client";

import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/Header"; // Import the new Header component

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-background">
      <Header /> {/* Render the Header component */}
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Welcome to Your Blank App</h1>
          <p className="text-xl text-muted-foreground">
            Start building your amazing project here!
          </p>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;