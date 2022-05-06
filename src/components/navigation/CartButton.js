import React from "react";

// Local Components
import { Button, Image } from "src/components";

// Assets
import cartIcon from "src/assets/images/icon-cart.svg";

export const CartButton = () => {
  return (
    <Button
      variant="clear"
      sx={{
        mr: "15%",
      }}
    >
      <Image src={cartIcon} />
    </Button>
  );
};
