import { useState } from "react";
import { createContext } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

function getCartInfo() {
  let cartObj = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cartObj[i] = 0;
  }

  return cartObj;
}

function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getCartInfo());

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }

  function addItemToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  function removeItemFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  function updateCartItemCount(inputAmount, itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: inputAmount }));
  }

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
