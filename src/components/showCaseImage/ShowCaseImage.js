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

  const handleNavigationImageClick = (newImageIndex, lastImageIndex) => {
    setCurrentPage([newImageIndex, newImageIndex - lastImageIndex]);
  };
  return (
    <Box
      className="product-image-showcase"
      sx={{
        display: [null, null, "flex"],
      }}
    >
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
          mx: ["-9%", "0%"],
          borderRadius: [0, "1em"],
          flex: [null, null, 1],
        }}
      >
        <NavigationButton
          icon={prevIcon}
          onClick={() => handleNavigationClick(-1)}
        />
        <AnimatePresence custom={direction} initial={false}>
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
      <NavigationImage
        images={data}
        handleNavigationImageClick={handleNavigationImageClick}
        currentImageIndex={currentImageIndex}
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
        width: ["3em", "10%"],
        position: "relative",
        zIndex: 1,
        mx: "5%",
        display: [null, null, "none"],
        ...sx,
      }}
      {...props}
    >
      <Image src={icon} />
    </Button>
  );
};

const NavigationImage = ({
  images,
  handleNavigationImageClick,
  currentImageIndex,
}) => {
  return (
    <Box
      className="navigation-image"
      sx={{
        display: ["none", "none", "block"],
        width: [null, null, "15%"],
        ml: [null, null, "5%"],
      }}
    >
      {images.map((image, index) => (
        <ImageThumbnail
          key={index}
          image={image}
          onClick={() => handleNavigationImageClick(index, currentImageIndex)}
          currentImageIndex={currentImageIndex}
          imageIndex={index}
        />
      ))}
    </Box>
  );
};

const ImageThumbnail = ({
  image,
  currentImageIndex,
  imageIndex,
  sx,
  ...props
}) => {
  return (
    <Button
      variant="clear"
      className="image-thumbnail-container"
      sx={{
        display: "flex",
        borderRadius: "1em",
        overflow: "hidden",
        ":not(:first-of-type)": {
          mt: "10%",
        },
        border: imageIndex === currentImageIndex ? "3px solid orange" : "none",
        outline: "none",
        ...sx,
      }}
      {...props}
    >
      <Image
        src={image.thumbnail}
        sx={{
          width: "100%",
          transition: "all 0.5s ease-in-out",
          opacity: imageIndex === currentImageIndex ? 0.5 : 1,
        }}
      />
    </Button>
  );
};
