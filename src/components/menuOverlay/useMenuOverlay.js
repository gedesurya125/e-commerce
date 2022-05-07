import React from "react";

export const useMenuOverlay = () => {
  const [showOverlay, setShowOverlay] = React.useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };
  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return [
    // Overlay Props
    { showOverlay, closeOverlay },
    // Overlay Controls
    { openOverlay, closeOverlay },
  ];
};
