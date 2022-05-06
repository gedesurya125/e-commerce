import React from "react";

// Local Components
import { Box, Navigation } from "src/components";

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Navigation />
      <Box>{children}</Box>
    </Box>
  );
};
