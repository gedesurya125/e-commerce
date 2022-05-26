import { getResponsiveTypographys } from "../utils/responsive";

const typographys = {
  caption: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontSize: [11.2, 16],
    letterSpacing: ["0.2em"],
  },
  productTitle: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontSize: [27.2, 48],
  },
  productDescription: {
    fontFamily: "body",
    lineHeight: "body",
    fontSize: [20, 22.4],
    "& > span": {
      fontFamily: "heading",
    },
  },
  originalPrice: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontSize: [15.2],
  },
  discount: {
    fontFamily: "heading",
    lineHeight: "body",
    fontSize: [15.2],
  },
  notification: {
    fontFamily: "heading",
    lineHeight: 1,
    fontSize: [9.6],
  },
};

export const text = getResponsiveTypographys(typographys);
