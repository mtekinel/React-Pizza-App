import { useReducer } from "react";
import { createContext } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  // add item to cart
  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  // delete cart item
  function deleteItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    deleteItem,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
