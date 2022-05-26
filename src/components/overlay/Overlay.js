import React from "react";
import ReactDOM from "react-dom";

// Local Components
import { Box } from "src/components";

// Portal Element
const portalRoot = document.getElementById("portal");

export const Overlay = ({ children, handleCloseOverlay, sx, ...props }) => {
  return ReactDOM.createPortal(
    <OverlayBackground
      handleCloseOverlay={handleCloseOverlay}
      sx={sx}
      {...props}
    >
      {children}
    </OverlayBackground>,
    portalRoot
  );
};

const OverlayBackground = ({ children, handleCloseOverlay, sx, ...props }) => {
  // Stop Parent onClick event propagation to the childrens
  const handleBackgroundClick = (e) => {
    if (e.target !== e.currentTarget) return;
    handleCloseOverlay();
  };
  React.useEffect(() => {
    const onEscPressed = (e) => {
      if (e.key === "Escape") {
        handleCloseOverlay();
      }
    };
    document.body.style.overflow = "hidden";
    document.body.addEventListener("keydown", onEscPressed);

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("keydown", onEscPressed);
    };
  }, [handleCloseOverlay]);
  return (
    <Box
      role="dialog"
      aria-modal="true"
      className="overlay-background"
      onClick={handleBackgroundClick}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "rgba(0,0,0,0.75)",
        zIndex: 100,
        overflow: "auto",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
