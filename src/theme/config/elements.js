const buttonDefaults = {
  cursor: 'pointer'
};

export const links = {
  overlayLink: {
    fontFamily: 'primary',
    fontSize: 3,
    lineHeight: 'primary',
    textDecoration: 'none',
    color: 'dark',
    py: '0.5em'
  },
  navigationLink: {
    fontFamily: 'primary',
    fontSize: 1,
    lineHeight: 'primary',
    textDecoration: 'none',
    color: 'gray'
  }
};
export const buttons = {
  primary: {
    ...buttonDefaults,
    bg: 'primary',
    color: 'white',
    borderRadius: '0.7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'primary',
    fontSize: ['1.7rem', '1.8rem', '1.8rem', '1.3rem', '1.3rem', '1.7rem'],
    variant: 'text.originalPrice',
    p: [
      '1.7rem 1.4rem 1.7rem 1.4rem',
      '2rem 2rem 2rem 2rem',
      '2rem 2rem 2rem 2rem',
      '1.2rem 1.2rem 1.2rem 1.2rem',
      '1.3rem 1.3rem 1.3rem 1.3rem',
      '2.1rem'
    ]
  },
  secondary: {},
  clear: {
    ...buttonDefaults,
    bg: 'transparent',
    p: 0,
    color: 'text',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circlePrimary: {
    bg: 'white',
    color: 'darkGray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '1/1',
    borderRadius: '50%',
    p: 0
  }
};
