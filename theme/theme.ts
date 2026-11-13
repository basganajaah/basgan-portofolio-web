"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#737373",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#171717",
      secondary: "#737373",
    },
    success: {
      main: "#22c55e",
    },
    divider: "#e5e5e5",
  },

  typography: {
    fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;
