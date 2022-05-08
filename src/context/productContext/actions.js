// TYPES
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

// ACTIONS
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, id });
