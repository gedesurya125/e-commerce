import React from "react";

// Context
import { ProductContextProvider } from "src/context";

// Local Components
import { Box, Navigation } from "src/components";

export const Layout = ({ children }) => {
  return (
    <ProductContextProvider>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Navigation />
        <Box>{children}</Box>
      </Box>
    </ProductContextProvider>
  );
};
