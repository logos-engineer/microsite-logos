import { theme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";

const breakpoints = createBreakpoints({
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
});

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    ...theme.fonts,
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    ...theme.colors,
    black: {
      DEFAULT: "#121212",
      active: "#14142B",
    },

    blackBody: "#313131",
    pink: "#EA1D76",
    lightpink: "#F65097",
    yellow: "#EEE938",
    blue: "#67CFE3",
    white: "#FFFFFF",
  },

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "2px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },

  components: {
    Heading: {
      variants: {
        h1: {
          fontSize: "6xl",
          lineHeight: "1.3",
          fontWeight: "bold",
        },
      },
    },
    Text: {
      variants: {
        "2xLarge": {
          fontSize: "2xl",
          lineHeight: "1.3",
          letterSpacing: "0.5px",
          fontWeight: "500",
        },
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "6px",
        py: "16px",
        border: "1px",
      },
      variants: {
        primary: {
          bg: "blue",
          color: "white",
          borderColor: "blue",
          h: "auto",
          px: "32px",
          fontWeight: "medium",
          fontSize: "lg",
          lineHeight: "1.5",
        },
        outline: {
          bg: "transparant",
          color: " white",
          borderColor: "white",
          h: "auto",
          px: "32px",
          fontWeight: "medium",
          fontSize: "lg",
          lineHeight: "1.5",
        },
      },
    },
    Container: {
      baseStyle: {
        maxW: "1160px",
        mx: "auto",
      },
    },
  },
  breakpoints,
});

export default customTheme;
