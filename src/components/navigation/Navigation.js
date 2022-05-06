import React from "react";

// Local Components
import { Container, Box } from "..";

// Self Components
import { MenuButton, Logo, CartButton, Avatar } from ".";

export const Navigation = () => {
  return (
    <Container
      className="navigation"
      sx={{
        height: "3.7em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <LeftGroup />
      <RightGroup />
    </Container>
  );
};

const LeftGroup = () => {
  return (
    <Box
      className="navigation__left-group"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <MenuButton />
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
