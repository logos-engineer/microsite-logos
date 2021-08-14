import { theme, extendTheme, ThemeConfig } from "@chakra-ui/react";
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

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  fonts: {
    ...theme.fonts,
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  colors: {
    ...theme.colors,
    black: {
      primary: "#121212",
      active: "#14142B",
    },
    white: "#FFFFFF",
    gray: {
      line: "#D9DBE9",
    },
    blackbody: "#313131",
    pink: {
      primary: "#EA1D76",
      50: "#FAC5DC",
      100: "#F8B2D1",
      200: "#F48DBA",
      300: "#F168A3",
      400: "#ED428D",
      500: "#EA1D76",
      600: "#EA1D76",
      700: "#9D0F4C",
      800: "#730B38",
      900: "#490723",
    },
    lightpink: "#F65097",
    yellow: {
      primary: "#EEE938",
      50: "#FCFCE1",
      100: "#FBFACE",
      200: "#F8F5A9",
      300: "#F4F183",
      400: "#F1ED5E",
      500: "#EEE938",
      600: "#E5DF14",
      700: "#BAB610",
      800: "#908C0C",
      900: "#666309",
    },
    blue: {
      primary: "#67CFE3",
      100: "#F1FBFC",
      200: "#CEF0F6",
      300: "#ACE5F0",
      400: "#89DAE9",
      500: "#67CFE3",
      600: "#40C3DC",
      700: "#25AFC9",
      800: "#1E8DA2",
      900: "#176B7C",
    },
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
          lineHeight: "1.5",
          fontWeight: "semibold",
        },
        h6: {
          fontSize: "2xl",
          lineHeight: "1.5",
          fontWeight: "medium",
        },
        "mobile-h1": {
          fontSize: "3xl",
          lineHeight: "1.4",
          fontWeight: "bold",
        },
        "mobile-h2": {
          fontSize: "2xl",
          lineHeight: "1.4",
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
      variants: {
        "3xl": {
          fontSize: "3xl",
          lineHeight: "1.4",
          letterSpacing: "0.005em",
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
        },
        lg: {
          fontSize: "lg",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
        },
        md: {
          fontSize: "md",
          lineHeight: "1.5",
          letterSpacing: "0.5px",
        },
        sm: {
          fontSize: "sm",
          lineHeight: "1.5",
        },
        xs: {
          fontSize: "xs",
          lineHeight: "1.5",
        },
        "mobile-regular": {
          fontSize: "xs",
          lineHeight: "1.5",
        },
        "mobile-semibold": {
          fontSize: "xs",
          lineHeight: "1.5",
          fontWeight: "semibold",
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
        border: "1px",
      },
      variants: {
        primary: {
          bg: "blue.primary",
          color: "white",
          borderColor: "blue.primary",
          h: "auto",
          _hover: {
            bg: "blue.400",
            borderColor: "blue.400",
            _disabled: {
              bgColor: "blue.primary",
              opacity: "0.4",
            },
          },

          _disabled: {
            opacity: 0.4,
          },
        },
        outline: {
          bg: "transparant",
          color: "blue.primary",
          borderColor: "blue.primary",
          h: "auto",
          _hover: {
            bg: "gray.100",
          },
          _disabled: {
            opacity: 0.4,
          },
        },
      },
      sizes: {
        xs: {
          px: "24px",
          py: "8px",
          lineHeight: "1.5",
          fontSize: "xs",
          fontWeight: "medium",
        },
        md: {
          px: "32px",
          py: "12px",
          lineHeight: "1.5",
          fontSize: "md",
          fontWeight: "medium",
        },
      },
      defaultProps: {
        variant: "primary",
        size: "md",
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
