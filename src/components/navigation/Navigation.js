import React from 'react';
// External components
import {
  Image,
  Button,
  GridTemplate,
  Box,
  Paragraph,
  Link,
  Flex
} from '@gedesurya125/surya-ui';
import { AnimatePresence } from 'framer-motion';

// Local components
import {
  MenuOverlay,
  CartOverlay,
  useMenuOverlay,
  useCartOverlay,
  CartIcon
} from 'components';

// Context
import { useProductContext } from 'context';

// Assets
import menuIcon from 'assets/images/icon-menu.svg';
import logo from 'assets/images/logo.svg';
import cartIcon from 'assets/images/icon-cart.svg';
import avatarImage from 'assets/images/image-avatar.png';
import { navigationData } from 'data';

// Animation
import { notification } from './animation';

export const Navigation = () => {
  const { products } = useProductContext();
  const [overlayProps, overlayControls] = useMenuOverlay();
  const [cartOverlayProps, cartOverlayControls] = useCartOverlay();

  return (
    <GridTemplate
      className="navigation"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: ['2rem', '2rem', '2rem', '1rem', 0, 0],
        borderBottom: ({ colors }) =>
          `clamp(2px, 0.2rem, 3px) solid ${colors.lightGray}`
      }}
    >
      <MenuButton onClick={overlayControls.openOverlay} />
      <Logo />
      <DesktopLinks data={navigationData} />
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
        width: ['1.4rem', '2rem', '2rem', '1.4rem', null, null],
        display: ['block', 'block', 'block', 'block', 'none', 'none'],
        alignSelf: 'center'
      }}
      {...props}
    >
      <Image src={menuIcon} sx={{ width: '100%' }} />
    </Button>
  );
};

const Logo = () => {
  return (
    <Box
      className="navigation__logo"
      sx={{
        width: ['12rem', '14rem', '15rem', '12rem', '12rem', '15rem'],
        display: 'flex',
        alignItems: 'center',
        gridColumn: [
          '2 / span 5',
          '2 / span 5',
          '2 / span 5',
          '2 / span 5',
          '1 / span 5',
          '1 / span 4'
        ]
      }}
    >
      <Image src={logo} sx={{ width: '100%' }} />
    </Box>
  );
};

const DesktopLinks = ({ data: { links } }) => {
  return (
    <Flex
      className="desktop-links"
      sx={{
        gridColumn: [null, null, null, null, '6 / span 10', '5 / span 10'],
        display: ['none', 'none', 'none', 'none', 'flex', 'flex']
      }}
    >
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.to}
          sx={{
            fontFamily: 'primary',
            textDecoration: 'none',
            color: 'gray',
            py: [null, null, null, null, '3rem', '4.1rem'],
            fontSize: [null, null, null, null, '1.2rem', '1.8rem'],
            ':hover': {
              color: 'darkGray',
              boxShadow: ({ colors }) =>
                `inset 0 clamp(-3px, -0.3rem, -4px) 0 0 ${colors.primary}`
            },
            ':not(:first-of-type)': {
              ml: [null, null, null, null, '2.3rem', '3rem']
            }
          }}
        >
          {link.title}
        </Link>
      ))}
    </Flex>
  );
};

const CartButton = ({ ammount = 0, ...props }) => {
  return (
    <Button
      className="cart-button"
      variant="clear"
      sx={{
        position: 'relative',
        width: ['1.8rem', '2rem', '2.3rem', '1.8rem', '1.8rem', '2.4rem'],
        gridColumn: [11, 11, 22, 23, 22, 22],
        justifySelf: [null, null, null, null, 'end', 'end'],
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center'
      }}
      {...props}
    >
      <CartIcon />
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
        width: ['2rem', '3rem', '3.2rem', '2rem', '3.6rem', '4.9rem'],
        justifySelf: 'end',
        alignSelf: 'center',
        gridColumn: [12, 12, 24, 24, 24, 24]
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
