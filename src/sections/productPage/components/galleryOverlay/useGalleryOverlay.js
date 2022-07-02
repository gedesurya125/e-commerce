import React from 'react';
import { productData } from 'data';

export const useGalleryOverlay = () => {
  const { images } = productData;
  const [isShown, setIsShown] = React.useState(false);

  const openOverlay = () => {
    setIsShown(true);
  };

  const closeOverlay = () => {
    setIsShown(false);
  };

  return [
    { data: images, closeOverlay, isShown },
    { openOverlay, closeOverlay }
  ];
};
