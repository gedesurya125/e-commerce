// Framer Motion Animation

export const slideDownOverlay = {
  close: {
    y: '-100%',
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.5
    }
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
};
