import React from 'react';

// Context
import { ProductContext } from 'context';

export const useCartOverlay = () => {
  const { products, dispatch } = React.useContext(ProductContext);
  const [showOverlay, setShowOverlay] = React.useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };
  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return [
    // Overlay Props
    { showOverlay, closeOverlay, products, dispatch },
    //Overlay Controls
    { openOverlay, closeOverlay }
  ];
};
