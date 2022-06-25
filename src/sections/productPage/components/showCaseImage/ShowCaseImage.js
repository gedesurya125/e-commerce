import React from 'react';

// External Components
import { AnimatePresence, LayoutGroup } from 'framer-motion';
// Local Components
import { Box, Image, Button } from '@gedesurya125/surya-ui';

// Assets
import nextIcon from 'assets/images/icon-next.svg';
import prevIcon from 'assets/images/icon-previous.svg';

// Animation
import { imageSlideAnimation } from './animation';

export const ShowCaseImage = ({ data }) => {
  const [[currentImageIndex, direction], setCurrentPage] = React.useState([
    0, 0
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
        display: [null, null, 'flex', 'block', 'block', 'block'],
        gridColumn: ['1 / 13', '1 / 13', '1 / 25', '1 / 12', '2 / 12', '2 / 12']
      }}
    >
      <Box
        className="product-image"
        sx={{
          aspectRatio: ['1.25/1', '1.25/1', '1.25/1', '1.08/1', '1/1', '1/1'],
          overflow: 'hidden',
          position: 'relative',
          left: 0,
          display: 'flex',
          flexDirection: ['row', 'row', 'row', 'row', 'column', 'column'],
          justifyContent: 'space-between',
          alignItems: 'center',
          mx: ['-8%', 0, 0, 0, 0, 0],
          borderRadius: [0, '1rem', '1rem', '1rem', '1rem', '1rem'],
          flex: [null, null, 1, 1, 1, 1]
        }}
      >
        <NavigationButton
          icon={prevIcon}
          onClick={() => handleNavigationClick(-1)}
        />
        <AnimatePresence custom={direction} initial={false}>
          <Image
            sx={{ position: 'absolute' }}
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
              duration: 0.5
            }}
          />
        </AnimatePresence>
        <NavigationButton
          icon={nextIcon}
          onClick={() => handleNavigationClick(1)}
          isRight={true}
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
const NavigationButton = ({ icon, sx, isRight, ...props }) => {
  return (
    <Button
      variant="circlePrimary"
      sx={{
        width: ['3.9rem', '6rem', null, '4rem', null, null],
        position: 'relative',
        zIndex: 1,
        mx: '5%',
        display: [null, null, 'none', 'block', 'none', 'none'],
        ...sx
      }}
      {...props}
    >
      <Image
        src={icon}
        sx={{
          width: ['1rem', '1.3rem', null, '1rem', null, null],
          transform: `translateX(${isRight ? '10%' : '-15%'})`
        }}
      />
    </Button>
  );
};

const NavigationImage = ({
  images,
  handleNavigationImageClick,
  currentImageIndex
}) => {
  return (
    <Box
      className="navigation-image"
      sx={{
        display: ['none', 'none', 'block', 'none', 'flex', 'flex'],
        width: [null, null, '15%', null, '100%', '100%'],
        ml: [null, null, '5%', null, 0, 0],
        mt: [null, null, null, null, '2rem', '2rem'],
        gap: [null, null, null, null, '2rem', '2rem']
      }}
    >
      <LayoutGroup>
        {images.map((image, index) => (
          <ImageThumbnail
            key={index}
            image={image}
            onClick={() => handleNavigationImageClick(index, currentImageIndex)}
            currentImageIndex={currentImageIndex}
            imageIndex={index}
          />
        ))}
      </LayoutGroup>
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
  const isCurrentImageDisplayed = currentImageIndex === imageIndex;
  return (
    <Button
      variant="clear"
      className="image-thumbnail-container"
      sx={{
        position: 'relative',
        display: 'flex',
        ':not(:first-of-type)': {
          mt: ['10%', '10%', '10%', '10%', 0, 0]
        },
        '& > *': {
          borderRadius: '1rem',
          aspectRatio: '1/1',
          width: '100%'
        },
        outline: 'none',
        ...sx
      }}
      {...props}
    >
      <Image
        src={image.thumbnail}
        sx={{
          transition: 'all 0.5s ease-in-out',
          opacity: isCurrentImageDisplayed ? 0.5 : 1,
          display: 'block',
          pointerEvents: 'none'
        }}
      />
      {isCurrentImageDisplayed && (
        <Box
          className="image-selection-box"
          layoutId="selection-box"
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            border: 'solid orange',
            borderWidth: 'clamp(3px, 0.3rem, 4px)',
            zIndex: 1
          }}
        />
      )}
    </Button>
  );
};
