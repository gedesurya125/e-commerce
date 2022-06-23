import React from 'react';

// External Components
import { AnimatePresence } from 'framer-motion';
import {
  Box,
  Divider,
  Heading,
  Paragraph,
  Button,
  Image
} from '@gedesurya125/surya-ui';
// Local Components
import { Overlay } from 'components';

import { removeFromCart, ProductContext } from 'context';

// Assets
import deleteIcon from 'assets/images/icon-delete.svg';

export const CartOverlay = ({ showOverlay, closeOverlay, products }) => {
  return (
    <AnimatePresence>
      {showOverlay && (
        <Overlay
          handleCloseOverlay={closeOverlay}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}
        >
          <Box
            className="cart"
            sx={{
              bg: 'white',
              width: '95%',
              borderRadius: '0.6rem',
              mt: '10rem'
            }}
          >
            <TitleBar />
            <Divider
              sx={{
                m: 0,
                borderBottom: 'solid',
                borderWidth: 'clamp(1px, 0.1rem, 2px)'
              }}
            />
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
      <Heading
        as="h3"
        sx={{
          fontSize: '1.3rem',
          fontFamily: 'primary'
        }}
      >
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
          <Button variant="primary" sx={{ width: '100%', mt: '1.8em' }}>
            Checkout
          </Button>
        </>
      );
    }
    return (
      <Paragraph
        sx={{
          color: 'darkGray',
          lineHeight: '9em',
          textAlign: 'center',
          fontFamily: 'primary',
          fontSize: '1.5rem'
        }}
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
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Image
        src={image}
        sx={{
          aspectRatio: '1/1',
          flexBasis: '16%',
          borderRadius: '0.5rem'
        }}
      />
      <Box
        sx={{
          width: '60%',
          justifySelf: 'flex-start',
          ml: '5%'
        }}
      >
        <Paragraph
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'darkGray',
            fontSize: '1.5rem'
          }}
        >
          {name}
        </Paragraph>
        <Paragraph
          sx={{
            mt: ['0.3rem'],
            fontSize: '1.3rem',
            color: 'darkGray',
            '& > span': {
              color: 'dark',
              fontFamily: 'primary'
            }
          }}
        >
          {`$${price.toFixed(2)} x ${ammount} `}
          <span>${(price * ammount).toFixed(2)}</span>
        </Paragraph>
      </Box>
      <Button
        variant="clear"
        sx={{ ml: 'auto', width: '1.2rem' }}
        onClick={handleDeleteItem}
      >
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
        p: '1.5em 1.5em'
      }}
    >
      {children}
    </Box>
  );
};
