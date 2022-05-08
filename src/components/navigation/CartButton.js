import React from "react";

// External Components
import { AnimatePresence } from "framer-motion";

// Local Components
import { Button, Image, Paragraph } from "src/components";

// Assets
import cartIcon from "src/assets/images/icon-cart.svg";

export const CartButton = ({ ammount = 0 }) => {
  return (
    <Button
      variant="clear"
      sx={{
        mr: "15%",
        position: "relative",
      }}
    >
      <Image src={cartIcon} />
      <NotificationNumber ammount={ammount} />
    </Button>
  );
};

const NotificationNumber = ({ ammount }) => {
  console.log("this is the number of notification", ammount);
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
            top: -10,
            right: -10,
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
