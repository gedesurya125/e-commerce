import React from 'react';
// Context

// Local Components
import { Navigation } from 'components';
import { Box } from '@gedesurya125/surya-ui';

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
