import React from 'react';

// External Components
import { Box } from '@gedesurya125/surya-ui';

export const PrevIcon = () => {
  return (
    <Box
      as="svg"
      viewBox="0 0 12 18"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <Box
        as="path"
        d="M11 1 3 9l8 8"
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
