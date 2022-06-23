import React from 'react';
// External components
import {
  Image,
  Button,
  GridTemplate,
  Box,
  Paragraph
} from '@gedesurya125/surya-ui';
import { AnimatePresence } from 'framer-motion';

// Local components
import {
  MenuOverlay,
  CartOverlay,
  useMenuOverlay,
  useCartOverlay
} from 'components';

// Context
import { useProductContext } from 'context';

// Assets
import menuIcon from 'assets/images/icon-menu.svg';
import logo from 'assets/images/logo.svg';
import cartIcon from 'assets/images/icon-cart.svg';
import avatarImage from 'assets/images/image-avatar.png';
// Animation
import { notification } from './animation';

export const Navigation = () => {
  const { products } = useProductContext();
  console.log('this is the product', products);
  const [overlayProps, overlayControls] = useMenuOverlay();
  const [cartOverlayProps, cartOverlayControls] = useCartOverlay();

  return (
    <GridTemplate
      className="navigation"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: '2rem'
      }}
    >
      <MenuButton onClick={overlayControls.openOverlay} />
      <Logo />
      <CartButton
        onClick={cartOverlayControls.openOverlay}
        ammount={products.reduce((acc, cur) => {
          return acc + cur.ammount;
        }, 0)}
      />
      <Avatar />
      <MenuOverlay {...overlayProps} />
      <CartOverlay {...cartOverlayProps} />
    </GridTemplate>
  );
};

// Elements

const MenuButton = ({ ...props }) => {
  return (
    <Button
      variant="clear"
      sx={{
        width: ['1.4rem', '2rem', '2rem'],
        alignSelf: 'center'
      }}
      {...props}
    >
      <Image src={menuIcon} sx={{ width: '100%' }} />
    </Button>
  );
};

// assets
const Logo = () => {
  return (
    <Box
      className="navigation__logo"
      sx={{
        width: ['12rem', '14rem', '15rem'],
        display: 'flex',
        alignItems: 'center',
        gridColumn: ['2 / span 5', '2 / span 5', '2 / span 5']
      }}
    >
      <Image src={logo} sx={{ width: '100%' }} />
    </Box>
  );
};

const CartButton = ({ ammount = 0, ...props }) => {
  return (
    <Button
      className="cart-button"
      variant="clear"
      sx={{
        position: 'relative',
        width: ['1.8rem', '2rem', '2.3rem'],
        gridColumn: [11, 11, 22],
        alignSelf: 'center'
      }}
      {...props}
    >
      <Image src={cartIcon} sx={{ width: '100%' }} />
      <NotificationNumber ammount={ammount} />
    </Button>
  );
};

const NotificationNumber = ({ ammount }) => {
  return (
    <AnimatePresence>
      {ammount !== 0 && (
        <Paragraph
          sx={{
            p: '3px 8px',
            bg: 'primary',
            color: 'white',
            position: 'absolute',
            top: '-1em',
            right: '-1em',
            borderRadius: '8px',
            fontSize: ['1rem', '1rem']
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

const Avatar = () => {
  return (
    <Box
      className="navigation__user-avatar"
      sx={{
        aspectRatio: '1/1',
        borderRadius: '50%',
        overflow: 'hidden',
        width: ['2rem', '3rem', '3.2rem'],
        justifySelf: 'end',
        alignSelf: 'end',
        gridColumn: [12, 12, 24]
      }}
    >
      <Image
        src={avatarImage}
        sx={{
          width: '100%'
        }}
      />
    </Box>
  );
};
