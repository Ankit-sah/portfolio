"use client";

import React, { useEffect, useState, createContext, useContext, useCallback, useMemo } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      const localTheme = localStorage.getItem("theme") as Theme | null;

      if (localTheme === "dark" || localTheme === "light") {
        setTheme(localTheme);
        if (localTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    } catch (error) {
      // Ignore localStorage errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      
      try {
        localStorage.setItem("theme", newTheme);
      } catch (error) {
        // Ignore localStorage errors
      }
      
      if (typeof document !== "undefined") {
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      
      return newTheme;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme: mounted ? theme : "light",
      toggleTheme,
    }),
    [theme, toggleTheme, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
