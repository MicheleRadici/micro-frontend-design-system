import React, { createContext, useContext } from "react";

const defaultTheme = { primary: "#0a66c2", radius: 8 };
const ThemeContext = createContext(defaultTheme);

export function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={{ ...defaultTheme, ...(theme || {}) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
