"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    handleThemeChange(mode);
  }, [mode]);

  const handleThemeChange = (mode) => {
    console.log("mode ", mode);
    document.documentElement.classList.add(mode);
    // if (mode === "dark" || ) {
    // } else {
    //   document.documentElement.classList.add("dark");
    // }
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a provider");
  }

  return context;
}
