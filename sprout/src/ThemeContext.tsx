import React, { useEffect, createContext, useState } from "react";

// Create a light and dark theme and put it into an object
const themes = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "#555",
    color: "white",
  },
};

// Get value for the key theme from localStorage
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
};

// Define object and pass as props
export const ThemeContext = React.createContext(themes);

// Provide value to children elements and pass object to value attribute
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  // Pass initial state, return variable with current state value, and update value
  const [theme, setTheme] = useState(getTheme);

  // toggle state variable theme from “dark” to “light”
  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};