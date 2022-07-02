import React from 'react';

// Local Components
import { themeConfigs } from 'theme';

// External Components
import { Box, Button, Image, Link, Overlay } from '@gedesurya125/surya-ui';
import { AnimatePresence, motion } from 'framer-motion';

// Assets
import closeIcon from 'assets/images/icon-close.svg';
import { navigationData } from 'data';

// Animation
import { revealMenuContainer } from './animation';
import { revealOverlayBackground } from 'components/animation';

export const MenuOverlay = ({ showOverlay, closeOverlay }) => {
  const { links } = navigationData;
  return (
    <AnimatePresence>
      {showOverlay && (
        <Overlay
          as={motion.div}
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
              px: themeConfigs.getGridTemplateMargins()
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
        mt: ['3rem', '3rem', '4rem', '3rem']
      }}
    >
      {links.map((link) => (
        <Link
          href={link.to}
          sx={{
            fontFamily: 'primary',
            textDecoration: 'none',
            color: 'dark',
            fontSize: ['1.5rem', '1.8rem', '2rem'],
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
        width: ['1.5rem', '2rem', '2rem', '1.3rem']
      }}
      {...props}
    >
      <Image src={closeIcon} sx={{ width: '100%' }} />
    </Button>
  );
};
