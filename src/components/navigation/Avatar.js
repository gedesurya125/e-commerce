import React from "react";

// Local Components
import { Box, Image } from "src/components";

// Assets
import avatarImage from "src/assets/images/image-avatar.png";

export const Avatar = () => {
  return (
    <Box
      className="navigation__user-avatar"
      sx={{
        aspectRatio: "1/1",
        borderRadius: "50%",
        overflow: "hidden",
        width: ["2em", "3em"],
        ml: ["1em", "1em", "2em"],
      }}
    >
      <Image
        src={avatarImage}
        sx={{
          width: "100%",
        }}
      />
    </Box>
  );
};
