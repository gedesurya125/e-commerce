// Constants
import { breakpoints } from "../constants/constants";

// Helper function
export const getSize = (size, screenWidth) => {
  return `calc(${size / screenWidth}*100vw)`;
};

export const getResponsiveSize = (values) => {
  return values.map((value, index) => getSize(value, breakpoints[index]));
};

export const getResponsiveTypographys = (typographys) => {
  const typographysKeys = Object.keys(typographys);
  const newTypographys = typographysKeys.map((key) => {
    return {
      ...typographys[key],
      fontSize: getResponsiveSize(typographys[key]?.fontSize),
    };
  });
  const newTypographysObject = {};

  typographysKeys.forEach((key, index) => {
    newTypographysObject[key] = newTypographys[index];
  });
  return newTypographysObject;
};
