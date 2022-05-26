import React from "react";
import { Button, Image } from "src/components";
import menuIcon from "src/assets/images/icon-menu.svg";

export const MenuButton = ({ ...props }) => {
  return (
    <Button
      variant="clear"
      sx={{
        aspectRatio: "1.2/1",
        pl: 0,
        width: ["1.1em", "1.5em"],
      }}
      {...props}
    >
      <Image src={menuIcon} sx={{ width: "100%" }} />
    </Button>
  );
};
