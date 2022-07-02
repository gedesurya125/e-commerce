import React from 'react';

// External Components
import { Box } from '@gedesurya125/surya-ui';

export const NextIcon = () => {
  return (
    <Box
      as="svg"
      viewBox="0 0 13 18"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <Box
        as="path"
        d="m2 1 8 8-8 8"
        stroke-width="3"
        fill="none"
        fill-rule="evenodd"
        sx={{
          stroke: '#1D2026'
        }}
      />
    </Box>
  );
};
