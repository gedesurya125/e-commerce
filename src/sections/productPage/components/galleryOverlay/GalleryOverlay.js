import React from 'react';
// External Components
import { Overlay, Button, Box } from '@gedesurya125/surya-ui';
import { AnimatePresence, motion } from 'framer-motion';

// Local Components

import {
  ShowCaseContainer,
  ImageAndButtonContainer,
  AnimatedImageSlide,
  NavigationButton,
  NavigationImage,
  useImageSlider
} from '../showCaseImage/';

import { CloseIcon } from 'components';

export const GalleryOverlay = ({ data, closeOverlay, isShown }) => {
  const [currentImageIndex, direction, controls] = useImageSlider(data);

  return (
    <AnimatePresence>
      {isShown && (
        <Overlay
          as={motion.div}
          handleCloseOverlay={closeOverlay}
          // Animation Values

          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
        >
          <ShowCaseContainer
            sx={{
              width: [null, null, null, null, '43%', '43%'],
              mx: 'auto',
              my: [null, null, null, null, '5rem', '5rem']
            }}
          >
            <CloseButton onClick={closeOverlay} />
            {/* Outer box needed to show navigation buttons properly */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: [null, null, null, null, '1.5rem', '2rem'],
                position: 'relative'
              }}
            >
              <GalleryNavigationButton isRight={false} control={controls} />
              <ImageAndButtonContainer
                sx={{
                  aspectRatio: [
                    '1.25/1',
                    '1.25/1',
                    '1.25/1',
                    '1.08/1',
                    '1/1',
                    '1/1'
                  ],
                  borderRadius: [null, null, null, null, '1rem', '2rem']
                }}
              >
                <AnimatedImageSlide
                  direction={direction}
                  currentImage={data[currentImageIndex].hiRes}
                />
              </ImageAndButtonContainer>
              <GalleryNavigationButton isRight={true} control={controls} />
            </Box>
            <NavigationImage
              images={data}
              handleNavigationImageClick={controls.handleNavigationImageClick}
              currentImageIndex={currentImageIndex}
              sx={{
                width: '80%',
                ml: 'auto',
                mr: 'auto'
              }}
            />
          </ShowCaseContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const CloseButton = ({ ...props }) => (
  <Button
    variant="clear"
    sx={{
      width: [null, null, null, null, '1.8rem', '2rem'],
      ml: 'auto',
      display: 'block',
      '& path': {
        fill: 'white'
      },
      ':hover': {
        '& path': {
          fill: 'primary'
        }
      }
    }}
    {...props}
  >
    <CloseIcon sx={{}} />
  </Button>
);

const GalleryNavigationButton = ({ isRight, control }) => {
  const styles = isRight
    ? {
        right: [null, null, null, null, '-2.3rem', '-3rem']
      }
    : {
        left: [null, null, null, null, '-2.3rem', '-3rem']
      };
  return (
    <NavigationButton
      isRight={isRight}
      controls={control}
      sx={{
        display: [null, null, null, null, 'flex', 'flex'],
        mx: 0,
        width: [null, null, null, null, '4.6rem', '6rem'],

        position: 'absolute',
        ':hover path': {
          stroke: 'primary'
        },
        ...styles
      }}
    />
  );
};
