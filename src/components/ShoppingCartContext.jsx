// ShoppingCartContext.js
import { createContext, useContext, useReducer } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
  }
  return context;
};

const shoppingCartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, { cartItems: [] });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  return (
    <ShoppingCartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
