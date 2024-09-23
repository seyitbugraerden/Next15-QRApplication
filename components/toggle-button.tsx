"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Use effect to set mounted state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent rendering until mounted
  }

  return (
    <div>
      {theme === "dark" ? (
        <div
          className="hover:scale-150 duration-300 hover:text-primary cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <Sun size={24} />
        </div>
      ) : (
        <div
          className="hover:scale-150 duration-300 hover:text-primary cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <Moon size={24} />
        </div>
      )}
    </div>
  );
}
