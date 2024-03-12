import React, { createContext, useContext, useState } from "react";

const contextTheme = createContext();

export const useTheme = () => useContext(contextTheme);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <contextTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </contextTheme.Provider>
  );
};
