import React from "react";
import { Image, Box } from "src/components";

// assets
import logo from "src/assets/images/logo.svg";

export const Logo = () => {
  return (
    <Box
      className="navigation__logo"
      sx={{
        width: ["8em", "12em"],
        display: "flex",
        alignItems: "center",
        ml: "1em",
      }}
    >
      <Image src={logo} sx={{ width: "100%" }} />
    </Box>
  );
};
