import React from 'react';

// External Components
import {
  GridTemplate,
  Box,
  Heading,
  Paragraph,
  Button,
  Image
} from '@gedesurya125/surya-ui';

// Self Components
import { ShowCaseImage } from './components';
import { productData } from 'data';

// Context
import { ProductContext, addToCart, ProductOnCart } from 'context';

// Assets
import plusIcon from 'assets/images/icon-plus.svg';
import minusIcon from 'assets/images/icon-minus.svg';
import whiteCartIcon from 'assets/images/icon-cart white.svg';
// TODO: Make the CompanyName, ProductTitle and Description tobe in the One Compent because it stick together
export const ProductOverview = () => {
  const {
    images,
    information: { companyName, title, description }
  } = productData;

  return (
    <GridTemplate
      sx={{
        pb: ['4rem', '6rem', '6rem']
      }}
    >
      <ShowCaseImage data={images} />
      <CompanyName text={companyName} />
      <ProductTitle text={title} />
      <Description text={description} />
      <ActionBlock />
    </GridTemplate>
  );
};

// Elements

const CompanyName = ({ text }) => {
  return (
    <Heading
      color="primary"
      sx={{
        textTransform: 'uppercase',
        fontFamily: 'primary',
        lineHeight: 'primary',
        fontSize: ['1.12rem', '1.6rem', '1.4rem'],
        letterSpacing: '0.2em',
        mt: ['4rem', '5rem', '5rem'],
        gridColumn: ['1/13', '1/13', '1 / span 12']
      }}
    >
      {text}
    </Heading>
  );
};

const ProductTitle = ({ text }) => {
  return (
    <Heading
      sx={{
        color: 'dark',
        fontFamily: 'primary',
        fontSize: ['3rem', '4rem', '3rem'],
        mt: ['1rem', '2rem', '2rem'],
        gridColumn: ['1/13', '1/13', '1 / span 12']
      }}
    >
      {text}
    </Heading>
  );
};

const Description = ({ text }) => {
  return (
    <Paragraph
      sx={{
        mt: ['1rem', '2rem', '2rem'],
        color: 'darkGray',
        fontSize: ['1.5rem', '2rem', '2rem'],
        gridColumn: ['1/13', '1/13', '1 / span 12']
      }}
    >
      {text}
    </Paragraph>
  );
};

const ActionBlock = () => {
  const {
    id,
    images,
    information: { title, price, discount }
  } = productData;

  const [ammount, setAmmount] = React.useState(1);
  const { dispatch } = React.useContext(ProductContext);
  // Function
  const handleAddToCart = () => {
    const productToAdd = new ProductOnCart(
      id,
      title,
      images[0].thumbnail,
      price,
      ammount
    );
    dispatch(addToCart(productToAdd));
  };
  return (
    <Box
      className="action-area"
      sx={{
        mt: ['3rem', '4rem'],
        gridColumn: ['1/13', '1/13', '1 / 25']
      }}
    >
      <PriceBlock price={price * ammount} discount={discount} />
      <ItemCounter ammount={ammount} setAmmount={setAmmount} />
      <AddToCartButton onClick={handleAddToCart} />
    </Box>
  );
};
const PriceBlock = ({ price, discount }) => {
  return (
    <Box
      className="price-block"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
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
        display: 'flex',
        alignItems: 'center',
        flexBasis: '50%'
      }}
    >
      <Paragraph
        sx={{
          color: 'dark',
          fontSize: ['2rem', '3rem'],
          fontFamily: 'primary'
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
        bg: 'secondary',
        p: ['0.2em 0.5em', '0.5em 0.8em'],
        borderRadius: '0.4rem',
        ml: ['1.5rem', '2rem']
      }}
    >
      <Paragraph
        variant="discount"
        color="primary"
        sx={{
          fontFamily: 'primary',
          fontSize: ['1.2rem', '1.5rem'],
          fontWeight: 'bold'
        }}
      >{`${discount}%`}</Paragraph>
    </Box>
  );
};

const OriginalPrice = ({ price }) => {
  return (
    <Paragraph
      variant="originalPrice"
      sx={{
        color: 'gray',
        fontSize: ['1.5rem', '2rem'],
        fontWeight: 'bold'
      }}
    >
      {`$${price.toFixed(2)}`}
    </Paragraph>
  );
};

const ItemCounter = ({ ammount, setAmmount }) => {
  const handleAmmountChange = (direction) => {
    let newAmmount = ammount + direction;
    if (newAmmount < 1) return;
    setAmmount(newAmmount);
  };
  return (
    <Box
      className="item-count"
      sx={{
        bg: 'lightgray',
        borderRadius: '0.7rem',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: ['3rem', '4rem'],
        py: ['0.5rem', '0.8rem'],
        gridColumn: ['1/13', '1/13', '1 / 25']
      }}
    >
      <CountButton icon={minusIcon} onClick={() => handleAmmountChange(-1)} />
      <Paragraph
        sx={{
          fontFamily: 'primary',
          fontSize: ['1.4rem', '2rem']
        }}
      >
        {ammount}
      </Paragraph>
      <CountButton icon={plusIcon} onClick={() => handleAmmountChange(1)} />
    </Box>
  );
};

const CountButton = ({ icon, ...props }) => {
  return (
    <Button
      variant="clear"
      sx={{
        color: 'primary',
        fontSize: ['2rem', '3rem'],
        p: ['1.2rem 1.2rem 1.2rem 1.2rem', '1.5rem 2rem 1.5rem 2rem'],
        borderRadius: '0.7rem',
        gridColumn: ['1/13', '1/13', '1 / 25']
      }}
      {...props}
    >
      <Image
        src={icon}
        sx={{
          width: ['1rem', '1.6rem']
        }}
      />
    </Button>
  );
};

const AddToCartButton = ({ ...props }) => {
  return (
    <Button
      variant="primary"
      sx={{ width: '100%', mt: '8%', gridColumn: ['1/13', '1/13', '1 / 25'] }}
      {...props}
    >
      <Image
        src={whiteCartIcon}
        sx={{
          mr: ['1.3rem', '1.5rem'],
          width: ['1.6rem', '2rem']
        }}
      />
      <span>Add to cart</span>
    </Button>
  );
};
