import React from "react";

// Local Components
import { Box, Overlay, Button, Image, Link } from "src/components";
import { AnimatePresence } from "framer-motion";

// Assets
import closeIcon from "src/assets/images/icon-close.svg";
import { navigationData } from "src/data";

// Animation
import { revealMenuContainer, revealOverlayBackground } from "./animation";

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
              height: "100%",
              width: ["67%", "40%", ""],
              bg: "white",
              py: "1.5em",
              px: "6%",
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
        display: "flex",
        flexDirection: "column",
        mt: "22%",
      }}
    >
      {links.map((link) => (
        <Link variant="overlayLink" href={link.to}>
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
        width: "1em",
      }}
      {...props}
    >
      <Image src={closeIcon} />
    </Button>
  );
};
