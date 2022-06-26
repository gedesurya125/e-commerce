import React from 'react';

// External Components
import { AnimatePresence, motion } from 'framer-motion';
import {
  Box,
  Divider,
  Heading,
  Paragraph,
  Button,
  Image,
  Overlay
} from '@gedesurya125/surya-ui';
// Local Components

import { removeFromCart, ProductContext } from 'context';
import { themeConfigs } from 'theme';

// Animation
import { slideDownOverlay } from './animation';
import { revealOverlayBackground } from 'components/animation';

// Assets
import deleteIcon from 'assets/images/icon-delete.svg';

export const CartOverlay = ({ showOverlay, closeOverlay, products }) => {
  const gridTemplatemargins = themeConfigs.getGridTemplateMargins();
  return (
    <AnimatePresence>
      {showOverlay && (
        <Overlay
          as={motion.div}
          handleCloseOverlay={closeOverlay}
          variants={revealOverlayBackground}
          initial="close"
          animate="open"
          exit="close"
          sx={{
            display: 'flex',
            justifyContent: ['center', 'center', 'flex-end', 'flex-end'],
            alignItems: 'flex-start',
            bg: 'transparent'
          }}
        >
          <Box
            as={motion.div}
            variants={slideDownOverlay}
            className="cart"
            sx={{
              bg: 'white',
              width: ['95%', '38rem', '38rem', '38rem', '30rem', '35rem'],
              borderRadius: '0.6rem',
              mt: ['10rem', '10rem', '7rem', '7rem', '7rem', '12rem'],
              mr: [
                null,
                null,
                gridTemplatemargins[2],
                gridTemplatemargins[3],
                '6rem',
                '8rem'
              ],
              filter: 'drop-shadow(0.1rem 1rem 1rem rgba(0,0,0,0.6))'
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
          fontSize: ['1.5rem', '2rem', '2rem', '2rem', '1.5rem'],
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
            <ItemCard key={product.id} data={product} />
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
          lineHeight: ['9em', null, null, null, '12rem', '15rem'],
          textAlign: 'center',
          fontFamily: 'primary',
          fontSize: ['1.5rem', null, null, null, null, '1.6rem']
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
          width: ['60%', '60%', '60%', '60%', '70%'],
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
            fontSize: ['1.5rem', '1.9rem', '1.9rem', '1.9rem', '1.5rem']
          }}
        >
          {name}
        </Paragraph>
        <Paragraph
          sx={{
            mt: ['0.3rem'],
            fontSize: ['1.3rem', '1.6rem', '1.6rem', '1.6rem', '1.3rem'],
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
        sx={{
          ml: 'auto',
          width: ['1.2rem', '1.5rem', '1.5rem', '1.5rem', '1.2rem']
        }}
        onClick={handleDeleteItem}
      >
        <Image src={deleteIcon} sx={{ width: '100%' }} />
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
