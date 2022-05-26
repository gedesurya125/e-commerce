// Helper function
import { getResponsiveSize } from "../utils/responsive";

// CONSTANTS
import {
  breakpoints as rawBreakpoints,
  pagePaddings,
} from "../constants/constants";

// make the breackpoints value tobe px, export exclude the first one
export const breakpoints = rawBreakpoints
  .slice(1)
  .map((breakpoint) => `${breakpoint}px`);

export const layout = {
  container: {
    px: getResponsiveSize(pagePaddings),
  },
};
