import { theme, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const customTheme = extendTheme({
  fonts: {
    ...theme.fonts,
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    ...theme.colors,
    black: "#121212",
    blackBody: "#313131",
    pink: "#EA1D76",
    lightpink: "#F65097",
    yellow: "#EEE938",
    blue: "#67CFE3",
    white: "#FFFFFF",
  },

  fontSizes: {
    xs: "16px",
    sm: "18px",
    md: "20px",
    lg: "24px",
    xl: "36px",
    "2xl": "38px",
    "3xl": "64px",
  },

  components: {
    Button: {
      baseStyle: {
        borderRadius: "6px",
        fontWeight: "medium",
        bgColor: "blue",
        colorScheme: "blue",
      },
    },
  },
});

export default customTheme;
