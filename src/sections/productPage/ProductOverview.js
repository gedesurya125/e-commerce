import React from 'react';

// External Components
import {
  GridTemplate,
  Box,
  Heading,
  Paragraph,
  Button,
  Image,
  Grid
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

export const ProductOverview = () => {
  const { images } = productData;

  return (
    <GridTemplate
      sx={{
        pb: ['4rem', '6rem', '6rem', 0, '6rem', '6rem'],
        mt: [null, null, null, null, '7rem', '8rem']
      }}
    >
      <ShowCaseImage data={images} />
      <Box
        sx={{
          gridColumn: ['1/13', '1/13', '1/25', '13/25', '14/24'],
          alignSelf: [null, null, null, 'center', 'center']
        }}
      >
        <InformationBlock />
        <ActionBlock />
      </Box>
    </GridTemplate>
  );
};

// Elements

const InformationBlock = () => {
  const {
    information: { companyName, title, description }
  } = productData;
  return (
    <Box
      className="information-block"
      sx={{
        mt: ['2.5rem', '5rem', '5rem', 0, 0, 0]
      }}
    >
      <CompanyName text={companyName} />
      <ProductTitle text={title} />
      <Description text={description} />
    </Box>
  );
};

const CompanyName = ({ text }) => {
  return (
    <Heading
      color="primary"
      sx={{
        textTransform: 'uppercase',
        fontFamily: 'primary',
        lineHeight: 'primary',
        fontSize: ['1.12rem', '1.6rem', '1.6rem', '1.12rem', '1rem', '1.8rem'],
        letterSpacing: '0.2em'
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
        fontSize: ['3rem', '4rem', '4rem', '3rem', '3.6rem', '5rem'],
        mt: ['1rem', '2rem', '2rem', '1rem', '1rem', '2rem'],
        lineHeight: [1.2, null, null, null, 1.1]
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
        mt: ['1.8rem', '2rem', '2rem', '1rem', '2.6rem', '4.4rem'],
        color: 'darkGray',
        fontSize: ['1.5rem', '2rem', '2.3rem', '1.5rem', '1.25rem', '1.75rem'],
        lineHeight: 1.6
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
        mt: ['3rem', '4rem', null, '2rem', '2rem', '3rem']
      }}
    >
      <PriceBlock price={price * ammount} discount={discount} />
      <Grid
        sx={{
          gridTemplateColumns: [
            '1fr',
            '1fr',
            '1fr',
            '1fr 1fr',
            '12rem 1fr',
            '17rem 1fr'
          ],
          mt: [null, null, null, '1.5rem', '3rem', '3.5rem']
        }}
      >
        <ItemCounter ammount={ammount} setAmmount={setAmmount} />
        <AddToCartButton onClick={handleAddToCart} />
      </Grid>
    </Box>
  );
};
const PriceBlock = ({ price, discount }) => {
  return (
    <Box
      className="price-block"
      sx={{
        display: 'flex',
        alignItems: ['center', 'center', 'center', 'center', 'flex-start'],
        flexDirection: ['row', 'row', 'row', 'row', 'column'],
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
          fontSize: ['2.9rem', '3rem', '3rem', '3rem', '2.4rem', '3.4rem'],
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
        p: [
          '0.2em 0.5em',
          '0.5em 0.8em',
          '0.5em 0.8em',
          '0.5em 0.8em',
          '0.4em 0.8em'
        ],
        borderRadius: '0.4rem',
        ml: ['1.8rem', '2rem', '2rem', '2rem']
      }}
    >
      <Paragraph
        variant="discount"
        color="primary"
        sx={{
          fontFamily: 'primary',
          fontSize: [
            '1.2rem',
            '1.5rem',
            '1.5rem',
            '1.5rem',
            '1.3rem',
            '1.6rem'
          ],
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
        fontSize: ['1.7rem', '2rem', '2rem', '2rem', '1.2rem', '1.9rem'],
        mt: [null, null, null, null, '1rem', '1.2rem'],
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
        bg: 'lightGray',
        borderRadius: '0.7rem',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: ['3rem', '4rem', '4rem', 0],
        py: ['0.5rem', '0.8rem', '0.8rem', 0]
      }}
    >
      <CountButton icon={minusIcon} onClick={() => handleAmmountChange(-1)} />
      <Paragraph
        sx={{
          fontFamily: 'primary',
          fontSize: ['1.9rem', '2rem', '2rem', '1.4rem', '1.4rem', '2rem']
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
        fontSize: ['2rem', '3rem', '3rem', '2rem'],
        p: [
          '1.5rem',
          '1.5rem 2rem 1.5rem 2rem',
          '1.5rem 2rem 1.5rem 2rem',
          '1.5rem'
        ],
        borderRadius: '0.7rem'
      }}
      {...props}
    >
      <Image
        src={icon}
        sx={{
          width: ['1.4rem', '1.6rem', '1.6rem', '1rem', '1rem', '1.5rem']
        }}
      />
    </Button>
  );
};

const AddToCartButton = ({ ...props }) => {
  return (
    <Button
      variant="primary"
      sx={{ width: '100%', mt: ['0.4rem', '2rem', '2rem', 0, 0, 0] }}
      {...props}
    >
      <Image
        src={whiteCartIcon}
        sx={{
          mr: ['1.3rem', '1.5rem', '1.5rem', '1.3rem', '1.3rem', '.1.3rem'],
          width: ['1.6rem', '2rem', '2rem', '1.6rem', '1.6rem', '2rem']
        }}
      />
      <span>Add to cart</span>
    </Button>
  );
};
