"use client";

import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-secondary p-4 border-r dark:border-gray-700 hidden md:block">
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-gray-200 dark:hover:bg-gray-700 ${
              isActive ? "bg-gray-200 dark:bg-gray-700 text-primary" : "text-muted-foreground"
            }`
          }
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;