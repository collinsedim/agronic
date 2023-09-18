import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCartProducts, setTotalCartProducts] = useState(0);

  useEffect(() => {
    const storedCartData = localStorage.getItem("cartData");
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    //Calculate total price based on cart items
    const calculatedPrice = cartData.reduce(
      (total, item) => total + item.discount_price * item.quantity,
      0
    );
    setTotalPrice(calculatedPrice.toFixed(2));
  }, [cartData]);

  useEffect(() => {
    setTotalCartProducts(cartData.length);
  }, [cartData.length]);

  return (
    <CartContext.Provider
      value={{ cartData, setCartData, totalPrice, totalCartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
