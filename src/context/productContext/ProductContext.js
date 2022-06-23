import React from 'react';

// Reducer
import { reducer, initialValues } from './reducer';

// CONTEXT PROVIDER
export const ProductContext = React.createContext();

export const useProductContext = () => {
  return React.useContext(ProductContext);
};

// PRODUCT PROVIDER
export const ProductContextProvider = ({ children }) => {
  const [products, dispatch] = React.useReducer(reducer, initialValues);
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
