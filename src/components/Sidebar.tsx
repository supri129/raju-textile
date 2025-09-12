"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { Home, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-secondary border-r border-gray-200 dark:border-gray-800 flex-col hidden md:flex">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-foreground">Dashboard</h2>
      </div>
      <nav className="flex-grow p-4 space-y-2">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-muted-foreground transition-all hover:text-gray-900 dark:hover:text-foreground",
              isActive && "bg-gray-200 dark:bg-accent text-gray-900 dark:text-foreground"
            )
          }
        >
          <LayoutDashboard className="h-4 w-4" />
          Overview
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 dark:text-muted-foreground transition-all hover:text-gray-900 dark:hover:text-foreground"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;