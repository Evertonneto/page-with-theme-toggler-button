import React, { createContext, useState } from "react";

export const themes = {
  dark: {
    background: "#212121",
    color: "white",
  },
  white: {
    background: "white",
    color: "black",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.white);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
