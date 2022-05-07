export const imageSlideAnimation = {
  initial: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    x: 0,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
  }),
};
