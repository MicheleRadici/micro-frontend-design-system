import React from "react";
import { useTheme } from "../ThemeProvider";

export function Button({ children, onClick, variant = "primary" }) {
  const theme = useTheme();
  const isPrimary = variant === "primary";
  return (
    <button
      onClick={onClick}
      style={{
        background: isPrimary ? theme.primary : "transparent",
        color: isPrimary ? "#fff" : theme.primary,
        border: `1px solid ${theme.primary}`,
        padding: "10px 16px",
        borderRadius: theme.radius,
        cursor: "pointer",
        font: "inherit",
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}
