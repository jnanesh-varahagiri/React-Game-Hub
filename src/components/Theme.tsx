import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    brand: {
      50: "#e4f0ff",
      100: "#bad4ff",
      200: "#8cb8ff",
      300: "#5e9cff",
      400: "#307fff",
      500: "#1766e6",
      600: "#104fb3",
      700: "#093880",
      800: "#04214d",
      900: "#010a1a",
    },
    background: {
      light: "#b2cdc9", // Light mode background color
      dark: "#202023", // Dark mode background color
    },

    white: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg:
          props.colorMode === "light" ? "background.light" : "background.dark",
        color: props.colorMode === "light" ? "black" : "white",
      },
    }),
  },
});

export default theme;
