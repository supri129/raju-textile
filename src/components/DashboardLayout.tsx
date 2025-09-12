"use client";

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 dark:bg-background">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;