import React from "react";

// External Components
import { AnimatePresence } from "framer-motion";
// Local Components
import { Box, Image, Button } from "src/components";

// Assets
import nextIcon from "src/assets/images/icon-next.svg";
import prevIcon from "src/assets/images/icon-previous.svg";

// Animation
import { imageSlideAnimation } from "./animation";

export const ShowCaseImage = ({ data }) => {
  console.log("this is data", data);
  const [[currentImageIndex, direction], setCurrentPage] = React.useState([
    0, 0,
  ]);

  const handleNavigationClick = (direction) => {
    let newImageIndex = currentImageIndex + direction;
    if (newImageIndex > data.length - 1) {
      newImageIndex = 0;
    } else if (newImageIndex < 0) {
      newImageIndex = data.length - 1;
    }
    setCurrentPage([newImageIndex, direction]);
  };

  return (
    <Box
      className="product-image"
      sx={{
        aspectRatio: "1.25/1",
        overflow: "hidden",
        position: "relative",
        left: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mx: ["-7%"],
      }}
    >
      <NavigationButton
        icon={prevIcon}
        onClick={() => handleNavigationClick(-1)}
      />
      <AnimatePresence custom={direction}>
        <Image
          sx={{ position: "absolute" }}
          alt="product-image"
          // Aimateion Value
          key={data[currentImageIndex].hiRes}
          initial="initial"
          animate="center"
          exit="exit"
          custom={direction}
          src={data[currentImageIndex].hiRes}
          variants={imageSlideAnimation}
          transition={{
            duration: 0.5,
          }}
        />
      </AnimatePresence>
      <NavigationButton
        icon={nextIcon}
        onClick={() => handleNavigationClick(1)}
      />
    </Box>
  );
};

// Reused Components
const NavigationButton = ({ icon, sx, ...props }) => {
  return (
    <Button
      variant="circlePrimary"
      sx={{
        width: "12%",
        position: "relative",
        zIndex: 1,
        mx: "5%",
        ...sx,
      }}
      {...props}
    >
      <Image src={icon} />
    </Button>
  );
};
