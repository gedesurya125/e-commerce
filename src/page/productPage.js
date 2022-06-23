import React from 'react';
import { injectLayout } from 'layout';
import { ProductOverview } from 'sections';

const ProductPage = () => {
  return (
    <>
      <ProductOverview />
    </>
  );
};
// Injecting layout to the page
export default injectLayout(ProductPage);
