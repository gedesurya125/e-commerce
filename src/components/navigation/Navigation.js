import React from "react";

// Local Components
import { Container, Box, useMenuOverlay, MenuOverlay } from "src/components";

// Self Components
import { MenuButton, Logo, CartButton, Avatar } from ".";

export const Navigation = () => {
  const [overlayProps, overlayControls] = useMenuOverlay();

  return (
    <Container
      className="navigation"
      sx={{
        minHeight: "3.7em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <LeftGroup openOverlay={overlayControls.openOverlay} />
      <RightGroup />
      <MenuOverlay {...overlayProps} />
    </Container>
  );
};

const LeftGroup = ({ openOverlay }) => {
  return (
    <Box
      className="navigation__left-group"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <MenuButton onClick={openOverlay} />
      <Logo />
    </Box>
  );
};

const RightGroup = () => {
  return (
    <Box
      className="navigation__right-group"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <CartButton />
      <Avatar />
    </Box>
  );
};
