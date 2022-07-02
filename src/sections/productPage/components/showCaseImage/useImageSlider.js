import React from 'react';

export const useImageSlider = (imageData) => {
  const [[currentImageIndex, direction], setCurrentPage] = React.useState([
    0, 0
  ]);

  const handleNavigationClick = (direction) => {
    let newImageIndex = currentImageIndex + direction;
    if (newImageIndex > imageData.length - 1) {
      newImageIndex = 0;
    } else if (newImageIndex < 0) {
      newImageIndex = imageData.length - 1;
    }
    setCurrentPage([newImageIndex, direction]);
  };

  const handleNavigationImageClick = (newImageIndex, lastImageIndex) => {
    setCurrentPage([newImageIndex, newImageIndex - lastImageIndex]);
  };

  return [
    currentImageIndex,
    direction,
    { handleNavigationImageClick, handleNavigationClick }
  ];
};
