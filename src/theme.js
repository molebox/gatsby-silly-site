import defaultTheme from "@chakra-ui/theme";

const theme = {
  ...defaultTheme,
  styles: {
    global: {
      "html, body": {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
      },
    },
  },
  fonts: {
    heading: "Nerko One",
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
    "5xl": "74px",
    "6xl": "100px",
    "7xl": "130px",
  },
  colors: {
    brand: {
      bg: "#F5F5F4",
      fridge: "#fbfbf2",
      lightGrey: "#707070",
      darkGrey: "#1f2127",
      offWhite: "#f6f8fa",
      accent: "#DA5077",
    },
  },
};

export default theme;
