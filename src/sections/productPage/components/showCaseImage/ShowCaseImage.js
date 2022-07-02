import React from 'react';

// External Components
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import {
  Box,
  Image,
  Button,
  useActiveBreakpoints
} from '@gedesurya125/surya-ui';

// Local Components
import { GalleryOverlay, useGalleryOverlay } from '../galleryOverlay';
import { NextIcon, PrevIcon } from 'components';
// Assets
// import nextIcon from 'assets/images/icon-next.svg';
// import prevIcon from 'assets/images/icon-previous.svg';

// Animation
import { imageSlideAnimation } from './animation';

// functionality hook
import { useImageSlider } from './useImageSlider';

// Helper

export const ShowCaseImage = ({ data, sx }) => {
  const activeBreakpoints = useActiveBreakpoints();
  console.log('activeBreakpoints', activeBreakpoints);
  const [currentImageIndex, direction, controls] = useImageSlider(data);
  const [overlayProps, overlayControls] = useGalleryOverlay();
  return (
    <ShowCaseContainer sx={sx}>
      <ImageAndButtonContainer
        onClick={activeBreakpoints[4] && overlayControls.openOverlay}
      >
        <NavigationButton isRight={false} controls={controls} />
        <AnimatedImageSlide
          direction={direction}
          currentImage={data[currentImageIndex].hiRes}
        />
        <NavigationButton isRight={true} controls={controls} />
      </ImageAndButtonContainer>
      <NavigationImage
        images={data}
        handleNavigationImageClick={controls.handleNavigationImageClick}
        currentImageIndex={currentImageIndex}
      />
      <GalleryOverlay {...overlayProps} />
    </ShowCaseContainer>
  );
};

// Reused Components
export const ShowCaseContainer = ({ children, sx }) => {
  return (
    <Box
      className="product-image-showcase"
      sx={{
        display: [null, null, 'flex', 'block', 'block', 'block'],
        gridColumn: [
          '1 / 13',
          '1 / 13',
          '1 / 25',
          '1 / 12',
          '2 / 12',
          '2 / 12'
        ],
        ...sx
      }}
    >
      {children}
    </Box>
  );
};

export const ImageAndButtonContainer = ({ onClick, children, sx }) => {
  return (
    <Box
      onClick={onClick}
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
        flex: [null, null, 1, 1, 1, 1],
        ...sx
      }}
    >
      {children}
    </Box>
  );
};

export const AnimatedImageSlide = ({ direction, currentImage, sx }) => {
  return (
    <AnimatePresence custom={direction} initial={false}>
      <Image
        sx={{ position: 'absolute', ...sx }}
        alt="product-image"
        // Aimateion Value
        key={currentImage}
        initial="initial"
        animate="center"
        exit="exit"
        custom={direction}
        src={currentImage}
        variants={imageSlideAnimation}
        transition={{
          duration: 0.5
        }}
      />
    </AnimatePresence>
  );
};

export const NavigationButton = ({ sx, isRight, controls, ...props }) => {
  return (
    <Button
      variant="circlePrimary"
      sx={{
        width: ['3.9rem', '6rem', null, '4rem', null, null],
        position: 'relative',
        zIndex: 1,
        mx: '5%',
        display: [null, null, 'none', 'flex', 'none', 'none'],
        alignItems: 'center',
        '& > svg': {},
        ...sx
      }}
      onClick={
        isRight
          ? () => controls.handleNavigationClick(1)
          : () => controls.handleNavigationClick(-1)
      }
      {...props}
    >
      <Box
        sx={{
          width: ['1rem', '1.3rem', null, '1rem', '1rem', '1.5rem'],
          transform: `translateX(${isRight ? '10%' : '-15%'})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isRight ? <NextIcon /> : <PrevIcon />}
      </Box>
      {/* <Image
        src={isRight ? nextIcon : prevIcon}
        sx={{
          width: ['1rem', '1.3rem', null, '1rem', null, null],
          transform: `translateX(${isRight ? '10%' : '-15%'})`
        }}
      /> */}
    </Button>
  );
};

export const NavigationImage = ({
  images,
  handleNavigationImageClick,
  currentImageIndex,
  sx
}) => {
  return (
    <Box
      className="navigation-image"
      sx={{
        display: ['none', 'none', 'block', 'none', 'flex', 'flex'],
        width: [null, null, '15%', null, '100%', '100%'],
        ml: [null, null, '5%', null, 0, 0],
        mt: [null, null, null, null, '2rem', '2rem'],
        gap: [null, null, null, null, '2rem', '2rem'],
        ...sx
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
