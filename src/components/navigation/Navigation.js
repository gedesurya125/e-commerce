import React from "react";

// Context
import { ProductContext } from "src/context";

// Local Components
import {
  Container,
  Box,
  useMenuOverlay,
  MenuOverlay,
  CartOverlay,
  useCartOverlay,
  Link,
} from "src/components";

// Assets
import { navigationData } from "src/data";

// Self Components
import { MenuButton, Logo, CartButton, Avatar } from ".";

export const Navigation = () => {
  const [overlayProps, overlayControls] = useMenuOverlay();
  const [cartOverlayProps, cartOverlayControls] = useCartOverlay();

  return (
    <Container
      className="navigation"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: "1em",
      }}
    >
      <LeftGroup
        openOverlay={overlayControls.openOverlay}
        navigationData={navigationData}
      />
      <RightGroup openCartOverlay={cartOverlayControls.openOverlay} />
      <MenuOverlay {...overlayProps} />
      <CartOverlay {...cartOverlayProps} />
    </Container>
  );
};

const LeftGroup = ({ openOverlay, navigationData }) => {
  return (
    <Box
      className="navigation__left-group"
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flex: "1",
      }}
    >
      <MenuButton onClick={openOverlay} />
      <Logo />
      <Links navigationData={navigationData} />
    </Box>
  );
};

const RightGroup = ({ openCartOverlay }) => {
  const { products } = React.useContext(ProductContext);
  const getTotalAmmount = () =>
    products.reduce((acc, cur) => acc + cur.ammount, 0);
  return (
    <Box
      className="navigation__right-group"
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <CartButton onClick={openCartOverlay} ammount={getTotalAmmount()} />
      <Avatar />
    </Box>
  );
};

const Links = ({ navigationData }) => {
  return (
    <Box
      className="desktop-link"
      sx={{
        display: ["none", "none"],
        alignItems: "center",
        justifyContent: "start",
        ml: [null, "1em"],
      }}
    >
      {navigationData.links.map((link) => (
        <Link
          key={link.title}
          href={link.to}
          variant="navigationLink"
          sx={{
            ":not(:first-of-type)": {
              ml: "1em",
            },
          }}
        >
          {link.title}
        </Link>
      ))}
    </Box>
  );
};
