import React from "react";

// External Components
import { AnimatePresence } from "framer-motion";

// Local Components
import {
  Overlay,
  Box,
  Heading,
  Divider,
  Image,
  Paragraph,
  Button,
} from "src/components";

import { removeFromCart, ProductContext } from "src/context";

// Assets
import deleteIcon from "src/assets/images/icon-delete.svg";

export const CartOverlay = ({ showOverlay, closeOverlay, products }) => {
  return (
    <AnimatePresence>
      {showOverlay && (
        <Overlay
          handleCloseOverlay={closeOverlay}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            className="cart"
            sx={{
              bg: "white",
              width: "95%",
              borderRadius: "card",
              mt: "10em",
            }}
          >
            <TitleBar />
            <Divider sx={{ m: 0, borderBottom: "0.5px solid" }} />
            <Basket products={products} />
          </Box>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

const TitleBar = () => {
  return (
    <ContentContainer>
      <Heading as="h3" variant="originalPrice">
        Cart
      </Heading>
    </ContentContainer>
  );
};
const Basket = ({ products }) => {
  const renderProduct = () => {
    if (products.length > 0) {
      return (
        <>
          {products.map((product) => (
            <ItemCard data={product} />
          ))}
          <Button variant="primary" sx={{ width: "100%", mt: "1.8em" }}>
            Checkout
          </Button>
        </>
      );
    }
    return (
      <Paragraph
        variant="originalPrice"
        sx={{ color: "darkGray", lineHeight: "9em", textAlign: "center" }}
      >
        Your cart is empty
      </Paragraph>
    );
  };

  return <ContentContainer>{renderProduct()}</ContentContainer>;
};

const ItemCard = ({ data: { id, image, name, price = 0, ammount } }) => {
  const { dispatch } = React.useContext(ProductContext);

  const handleDeleteItem = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <Box
      className="item-card"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={image}
        sx={{
          aspectRatio: "1/1",
          flexBasis: "16%",
          borderRadius: "thumbnail",
        }}
      />
      <Box
        sx={{
          width: "60%",
          justifySelf: "flex-start",
          ml: "5%",
        }}
      >
        <Paragraph
          variant="productDescription"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "gray",
          }}
        >
          {name}
        </Paragraph>
        <Paragraph
          variant="productDescription"
          sx={{
            color: "gray",
            "& > span": {
              color: "darkGray",
            },
          }}
        >
          {`$${price.toFixed(2)} x ${ammount} `}
          <span>${(price * ammount).toFixed(2)}</span>
        </Paragraph>
      </Box>
      <Button variant="clear" sx={{ ml: "auto" }} onClick={handleDeleteItem}>
        <Image src={deleteIcon} />
      </Button>
    </Box>
  );
};

// Reusable Components

const ContentContainer = ({ children }) => {
  return (
    <Box
      className="content-container"
      sx={{
        p: "1.5em 1.5em",
      }}
    >
      {children}
    </Box>
  );
};
