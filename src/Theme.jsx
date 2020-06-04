import React from "react";
import { ThemeProvider } from "styled-components/macro";
import { useSelector } from "react-redux";

const theme = {
  common: {
    boxShadow: "0 18px 24px rgba(0,0,0,.2)",
  },
  dark: {
    primary: "#1765AD",
    primaryLighten: "#3C9AE8",
    secondary: "#D8BD14",
    background: "#141515",
    divider: "#1C1F22",
    modal: "#282E34",
    border: "#3E4955",
    title: "rgba(255,255,255,.85)",
    primaryText: "rgba(255,255,255,.65)",
    secondaryText: "rgba(255,255,255,.45)",
    disable: "rgba(255,255,255,.3)",
    error: "#A61D24",
    boxShadow: "0 18px 24px rgba(0,0,0,.25)",
    facebook: "#395185",
  },
  light: {
    primary: "#1890FF",
    primaryLighten: "#1890FF",
    secondary: "#FADB14",
    background: "#fff",
    divider: "#f5f5f5",
    modal: "#fff",
    border: "#DEDEDE",
    title: "rgba(0,0,0,.85)",
    primaryText: "rgba(0,0,0,.65)",
    secondaryText: "rgba(0,0,0,.45)",
    disable: "rgba(0,0,0,.25)",
    error: "#F5222D",
    boxShadow: "0 18px 24px rgba(0,0,0,.25)",
    facebook: "#395185",
  },
};

const Theme = ({ children }) => {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <ThemeProvider
      theme={{ ...theme[darkMode ? "dark" : "light"], ...theme.common }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Theme;
