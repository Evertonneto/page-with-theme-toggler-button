import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { Button } from "../button/button";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button
        onClick={() => {
          setTheme(theme === themes.white ? themes.dark : themes.white);
        }}
      >
        Clique Aqui
      </Button>
    </div>
  );
};
