import React from 'react';

// Local Components
import { Overlay } from 'components';

// External Components
import { Box, Button, Image, Link } from '@gedesurya125/surya-ui';
import { AnimatePresence } from 'framer-motion';

// Assets
import closeIcon from 'assets/images/icon-close.svg';
import { navigationData } from 'data';

// Animation
import { revealMenuContainer, revealOverlayBackground } from './animation';

export const MenuOverlay = ({ showOverlay, closeOverlay }) => {
  const { links } = navigationData;
  return (
    <AnimatePresence>
      {showOverlay && (
        <Overlay
          handleCloseOverlay={closeOverlay}
          // Animation Values
          variants={revealOverlayBackground}
          initial="close"
          animate="open"
          exit="close"
        >
          <Box
            sx={{
              height: '100%',
              width: ['67%', '40%', ''],
              bg: 'white',
              py: '2.5rem',
              px: '6%'
            }}
            variants={revealMenuContainer}
          >
            <CloseButton onClick={closeOverlay} />
            <Links links={links} />
          </Box>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const Links = ({ links }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '22%'
      }}
    >
      {links.map((link) => (
        <Link
          href={link.to}
          sx={{
            fontFamily: 'primary',
            textDecoration: 'none',
            color: 'dark',
            fontSize: '1.5rem',
            py: ['1rem']
          }}
        >
          {link.title}
        </Link>
      ))}
    </Box>
  );
};

const CloseButton = ({ ...props }) => {
  return (
    <Button
      variant="clear"
      sx={{
        width: '2rem'
      }}
      {...props}
    >
      <Image src={closeIcon} />
    </Button>
  );
};
