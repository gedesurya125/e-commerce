import React from "react";

// Local Components
import { Box, Heading, Paragraph, Button } from "src/components";

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

const CountAndButton = () => {
  return (
    <Box>
      <ItemCount />
    </Box>
  );
};
const ItemCount = () => {
  return (
    <Box
      className="item-count"
      sx={{
        bg: "lightgray",
        borderRadius: "5px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CountButton symbol="-" />
      <Paragraph>0</Paragraph>
      <CountButton symbol="+" />
    </Box>
  );
};

const CountButton = ({ symbol }) => {
  <Button variant="clear" sx={{ color: "primary", flexBasis: "20%" }}>
    {symbol}
  </Button>;
};

const AddToCartButton = () => {
  <Button variant="primary" sx={{ color: "white", bg: "primary" }}></Button>;
};
