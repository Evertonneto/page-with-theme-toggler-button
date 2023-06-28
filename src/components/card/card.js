import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: theme.color,
          backgroundColor: theme.background,
          textAlign: "center",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "10px",
          border: "2px solid white",
        }}
      >
        <h1>Titulo do Card</h1>
        <p>
          Parágrago do card,Parágrago do card,Parágrago do card,Parágrago do
          card,Parágrago do card,
        </p>

        <button
          style={{
            color: theme.color,
            backgroundColor: theme.background,
            padding: "10px",
            margin: "10px",
          }}
        >
          Clique Aqui
        </button>
      </div>
    </div>
  );
};
