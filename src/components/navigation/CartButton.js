import React from "react";

// External Components
import { AnimatePresence } from "framer-motion";

// Local Components
import { Button, Image, Paragraph } from "src/components";

// Assets
import cartIcon from "src/assets/images/icon-cart.svg";

export const CartButton = ({ ammount = 0, ...props }) => {
  return (
    <Button
      className="cart-button"
      variant="clear"
      sx={{
        position: "relative",
        width: ["1.4em", "1.9em"],
        // flex: 1,
      }}
      {...props}
    >
      <Image src={cartIcon} sx={{ width: "100%" }} />
      <NotificationNumber ammount={ammount} />
    </Button>
  );
};

const NotificationNumber = ({ ammount }) => {
  return (
    <AnimatePresence>
      {ammount !== 0 && (
        <Paragraph
          variant="notification"
          sx={{
            p: "3px 8px",
            bg: "primary",
            color: "white",
            position: "absolute",
            top: "-1em",
            right: "-1em",
            borderRadius: "8px",
          }}
          // Animation Values
          variants={notification}
          initial="initial"
          animate="scaleUp"
          exit="initial"
        >
          {ammount}
        </Paragraph>
      )}
    </AnimatePresence>
  );
};

const notification = {
  initial: {
    scale: 0,
  },
  scaleUp: {
    scale: 1,
  },
};
