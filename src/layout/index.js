import React from 'react';
// Context

// Local Components
import { Navigation } from 'components';
import { Box } from '@gedesurya125/surya-ui';

// TODO: create the layout tobe high order components

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Navigation />
      <Box>{children}</Box>
    </Box>
  );
};

export const injectLayout = (WrappedComponent) => {
  return () => {
    return (
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Navigation />
        <WrappedComponent />
      </Box>
    );
  };
};
