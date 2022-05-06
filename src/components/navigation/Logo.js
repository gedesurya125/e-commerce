import React from "react";
import { Image, Box } from "src/components";

// assets
import logo from "src/assets/images/logo.svg";

export const Logo = () => {
  return (
    <Box
      className="navigation__logo"
      sx={{
        width: "76%",
        ml: "10%",
      }}
    >
      <Image src={logo} />
    </Box>
  );
};
