import React from "react";

// Local Components
import { Box, Image } from "src/components";

export const ShowCaseImage = ({ data }) => {
  console.log("this is data", data);
  return (
    <Box
      className="product-image"
      sx={{
        aspectRatio: "1.25/1",
        overflow: "hidden",
        // position: "absolute",
        left: 0,
        // width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mx: ["-7%"],
      }}
    >
      <Image sx={{}} src={data[0].hiRes} alt="product-image" />
    </Box>
  );
};
