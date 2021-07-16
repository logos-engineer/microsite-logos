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
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  space: {
    px: "1px",
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },
  lineHeights: {
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      "3": ".75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.3rem", //130%
      "7": "1.4rem", //140%
      "8": "1.5rem", //150%
      "9": "1.75rem",
      "10": "2rem",
      "11": "2.25rem",
      "12": "2.5rem",
    },
  },

  components: {
    Heading: {
      defaultProps: {
        variant: "h1",
      },
      variants: {
        h1: {
          fontSize: "6xl",
          lineHeight: "1.3",
          fontWeight: "bold",
        },
        h2: {
          fontSize: "5xl",
          lineHeight: "1.4",
          fontWeight: "bold",
        },
        h3: {
          fontSize: "4xl",
          lineHeight: "1.4",
          fontWeight: "semibold",
        },
        h4: {
          fontSize: "3xl",
          lineHeight: "1.4",
          fontWeight: "medium",
        },
        h5: {
          fontSize: "2xl",
          lineHeight: "1.4",
          fontWeight: "semibold",
        },
        h6: {
          fontSize: "2xl",
          lineHeight: "1.5",
          fontWeight: "medium",
        },
        "mobile-h1": {
          fontSize: "3xl",
          lineHeight: "42px",
          fontWeight: "bolrd",
        },
        "mobile-h2": {
          fontSize: "2xl",
          lineHeight: "1.5",
          fontWeight: "semibold",
        },
        "mobile-h3": {
          fontSize: "md",
          lineHeight: "1.5",
          fontWeight: "semibold",
        },
      },
    },
    Text: {
      baseStyle: {
        fontSize: "md",
        lineHeight: "1.5",
        letterSpacing: "0.5px",
        fontWeight: "normal",
      },
      variants: {
        "3xl": {
          fontSize: "3xl",
          lineHeight: "1.4",
          letterSpacing: "0.005em",
          fontWeight: "normal",
        },
        "2xl": {
          fontSize: "2xl",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          fontWeight: "500",
        },
        xl: {
          fontSize: "xl",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          fontWeight: "normal",
        },
        lg: {
          fontSize: "lg",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          fontWeight: "normal",
        },
        md: {
          fontSize: "md",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
          fontWeight: "normal",
        },
        sm: {
          fontSize: "sm",
          lineHeight: "1.5",

          fontWeight: "normal",
        },
        xs: {
          fontSize: "xs",
          lineHeight: "1.5",
          fontWeight: "normal",
        },
        "mobile-lg": {
          fontSize: "md",
          lineHeight: "1.5",
          fontWeight: "normal",
        },
        "mobile-semibold": {
          fontSize: "md",
          lineHeight: "1.5",
          fontWeight: "normal",
        },
        subtitle: {
          fontWeight: "semibold",
          fontSize: "md",
          lineHeight: "1.5",
        },
        subtitle2: {
          fontWeight: "semibold",
          fontSize: "md",
          lineHeight: "1.5",
        },
      },
      defaultProps: {
        variant: "md",
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
          _hover: {
            bg: "#2A69AC",
          },

          _disabled: {
            opacity: 0.4,
            _hover: {
              bg: "blue",
            },
          },
        },
        outline: {
          bg: "transparant",
          color: "blue",
          borderColor: "white",
          h: "auto",
          px: "32px",
          fontWeight: "medium",
          fontSize: "lg",
          lineHeight: "1.5",
          _hover: {
            bg: "gray.100",
          },
          _disabled: {
            opacity: 0.4,
          },
        },
      },
      defaultProps: {
        variant: "primary",
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
