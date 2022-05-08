// TYPES
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

// HELPER FUNCTIONS

const addToCart = (state, payload) => {
  if (state.find((data) => data.id === payload.id)) {
    return state.map((data) => {
      if (data.id === payload.id) {
        return { ...data, ammount: data.ammount + payload.ammount };
      }
      return data;
    });
  }
  return [...state, payload];
};

// INITIAL VALUE
export const initialValues = [];

// REDUCER
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return state.filter((data) => data.id !== action.id);
    default:
      return state;
  }
};
