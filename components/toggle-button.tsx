"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="cursor-pointer hover:scale-125 duration-300 group" onClick={() => setTheme("dark")}>
        {theme === "light" && <Moon size={24}  className="group-hover:text-primary"/>}
      </div>
      <div className="cursor-pointer hover:scale-125 duration-300 group" onClick={() => setTheme("light")}>
        {theme === "dark" && <Sun size={24}  className="group-hover:text-primary"/>}
      </div>
    </div>
  );
}
