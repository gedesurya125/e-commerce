import React from "react";
import { Button, Box, Image } from "src/components";
import menuIcon from "src/assets/images/icon-menu.svg";

export const MenuButton = () => {
  return (
    <Button
      variant="clear"
      sx={{
        display: "flex",
        flexDirection: "column",
        aspectRatio: "1.2/1",
        width: "1em",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src={menuIcon} />
    </Button>
  );
};
