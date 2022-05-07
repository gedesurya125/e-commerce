import React from "react";

// Local Components
import { Box, Heading, Paragraph, Button, Image } from "src/components";

// Assets
import plusIcon from "src/assets/images/icon-plus.svg";
import minusIcon from "src/assets/images/icon-minus.svg";
import whiteCartIcon from "src/assets/images/icon-cart white.svg";

export const InformationBlock = ({
  data: { companyName, title, description, price, discount },
}) => {
  return (
    <Box
      className="information-block"
      sx={{
        mt: "7%",
      }}
    >
      <CompanyName text={companyName} />
      <ProductTitle text={title} />
      <Description text={description} />
      <PriceBlock price={price} discount={discount} />
      <ItemCounter />
      <AddToCartButton />
    </Box>
  );
};

const CompanyName = ({ text }) => {
  return (
    <Heading
      variant="caption"
      color="primary"
      sx={{
        textTransform: "uppercase",
      }}
    >
      {text}
    </Heading>
  );
};

const ProductTitle = ({ text }) => {
  return (
    <Heading
      variant="productTitle"
      sx={{
        mt: "0.7em",
        color: "dark",
      }}
    >
      {text}
    </Heading>
  );
};

const Description = ({ text }) => {
  return (
    <Paragraph
      variant="productDescription"
      sx={{
        mt: "1em",
        color: "darkGray",
      }}
    >
      {text}
    </Paragraph>
  );
};

const PriceBlock = ({ price, discount }) => {
  return (
    <Box
      className="price-block"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: ["9%"],
      }}
    >
      <PriceAfterDiscount price={price} discount={discount} />
      <OriginalPrice price={price} />
    </Box>
  );
};

const PriceAfterDiscount = ({ price, discount }) => {
  const priceAfterDiscount = (price * (discount / 100)).toFixed(2);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexBasis: "50%",
      }}
    >
      <Paragraph
        variant="productTitle"
        sx={{
          color: "dark",
        }}
      >{`$${priceAfterDiscount}`}</Paragraph>
      <DiscountBox discount={discount} />
    </Box>
  );
};

const DiscountBox = ({ discount }) => {
  return (
    <Box
      sx={{
        bg: "secondary",
        p: "0.2em 0.5em",
        borderRadius: "0.1em",
      }}
    >
      <Paragraph variant="discount" color="primary">{`${discount}%`}</Paragraph>
    </Box>
  );
};

const OriginalPrice = ({ price }) => {
  return (
    <Paragraph
      variant="originalPrice"
      sx={{
        color: "gray",
      }}
    >
      {`$${price.toFixed(2)}`}
    </Paragraph>
  );
};

const ItemCounter = () => {
  return (
    <Box
      className="item-count"
      sx={{
        bg: "lightgray",
        borderRadius: "card",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: "8%",
      }}
    >
      <CountButton icon={minusIcon} />
      <Paragraph variant="originalPrice">0</Paragraph>
      <CountButton icon={plusIcon} />
    </Box>
  );
};

const CountButton = ({ icon }) => {
  return (
    <Button
      variant="clear"
      sx={{
        color: "primary",
        fontSize: "2em",
        p: "0.6em 0.7em 0.6em 0.7em",
      }}
    >
      <Image src={icon} />
    </Button>
  );
};

const AddToCartButton = () => {
  return (
    <Button variant="primary" sx={{ width: "100%", mt: "8%" }}>
      <Image
        src={whiteCartIcon}
        sx={{
          mr: "1em",
        }}
      />
      <span>Add to cart</span>
    </Button>
  );
};
