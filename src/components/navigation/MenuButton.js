import React from "react";
import { Button, Image } from "src/components";
import menuIcon from "src/assets/images/icon-menu.svg";

export const MenuButton = ({ ...props }) => {
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
      {...props}
    >
      <Image src={menuIcon} />
    </Button>
  );
};
