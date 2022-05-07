export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  layout: {
    container: {
      px: ["6%"],
    },
  },
  // Font Props
  fonts: {
    body: "kumbh-sans-regular, sans-serif",
    heading: "kumbh-sans-bold, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: ["0.7em", "0.95em", "1em", "1.2em", "1.7em"],
  lineHeights: {
    body: 1.5,
    heading: 1.2,
  },
  letterSpacings: {
    caption: "0.2em",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
    },
    caption: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 0,
      letterSpacing: "caption",
    },
    productTitle: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 4,
    },
    productDescription: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: 1,
    },
    originalPrice: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontSize: 1,
    },
    discount: {
      fontFamily: "heading",
      lineHeight: "body",
      fontSize: 1,
    },
    body: {
      fontFamily: "body",
      lineHeight: "heading",
    },
  },
  links: {
    overlayLink: {
      fontFamily: "heading",
      fontSize: 3,
      lineHeight: "heading",
      textDecoration: "none",
      color: "dark",
      py: "0.5em",
    },
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "hsl(26, 100%, 55%)", // orange
    secondary: "hsl(25, 100%, 94%)", // pale orange
    white: "hsl(0, 0%, 100%)",
    dark: "hsl(220, 13%, 13%)",
    gray: "hsl(220, 14%, 75%)",
    lightGray: "hsl(223, 64%, 98%)",
    darkGray: "hsl(219, 9%, 45%)",
    muted: "#f6f6f6",
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "white",
      borderRadius: "card",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "heading",
      fontSize: 1,
      p: "1.1em 1.4em 1.1em 1.4em",
    },
    secondary: {},
    clear: {
      bg: "transparent",
      p: 0,
      color: "text",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    circlePrimary: {
      bg: "white",
      color: "darkGray",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: "1/1",
      borderRadius: "circle",
    },
  },
  radii: {
    card: "12px",
    circle: "50%",
  },
};
