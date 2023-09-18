import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../providers/CartProvider";

const Cart = () => {
  const { cartData, setCartData } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCartProducts, setTotalCartProducts] = useState(0);

  useEffect(() => {
    //Calculate total price based on cart items
    const calculatedPrice = cartData.reduce(
      (total, item) => total + item.discount_price * item.quantity,
      0
    );
    setTotalPrice(calculatedPrice);
  }, [cartData]);

  const totalProducts = cartData.length;

  useEffect(() => {
    setTotalCartProducts(totalProducts);
  }, [totalProducts]);

  // console.log(cartData);

  return (
    <div>
      <div className="bg-cartHero w-full h-52 bg-center bg-no-repeat bg-cover mb-10">
        <div className=" flex justify-center items-center bg-white/40 w-full h-full">
          <h1 className="font-heading font-bold text-6xl text-center">
            Cart (
            {`${totalProducts} ${totalProducts > 1 ? "Products" : "Product"}`})
          </h1>
        </div>
      </div>
      <div className="px-5">
        {/* <div className="mb-6 border-b-2 py-2">
          <h2 className="font-bold text-xl">
            Total products in cart ({totalProducts})
          </h2>
        </div> */}
        <div>
          {cartData.map((cartItem, i) => (
            <div
              key={`'Item' ${i}`}
              className="flex gap-5 items-center justify-between max-w-md text-lg"
            >
              <img
                className="w-10 h-10"
                src={cartItem.product_image}
                alt={cartItem.product_title}
              />
              <Link
                // reloadDocument
                to={`/product/${encodeURIComponent(
                  cartItem.product_title.replace(/ /g, "-")
                )}`}
              >
                <p className="font-semibold">{cartItem.product_title}</p>
              </Link>
              <p>${cartItem.discount_price}</p>
              <div className="flex gap-1 items-center">
                <button
                  onClick={() =>
                    setCartData((prevCartData) =>
                      prevCartData.map((item) =>
                        item.product_title === cartItem.product_title &&
                        item.quantity > 1
                          ? { ...item, quantity: item.quantity - 1 }
                          : item
                      )
                    )
                  }
                  className="text-3xl cursor-pointer bg-[#7eb693] font-bold h-6 w-6 rounded-full flex items-center justify-center text-white"
                >
                  -
                </button>
                <input
                  className="border-2 w-16 text-center rounded-md"
                  type="text"
                  value={cartItem.quantity}
                />
                <button
                  onClick={() =>
                    setCartData((prevCartData) =>
                      prevCartData.map((item) =>
                        item.product_title === cartItem.product_title
                          ? { ...item, quantity: item.quantity + 1 }
                          : item
                      )
                    )
                  }
                  className="text-3xl cursor-pointer bg-[#7eb693] font-bold h-6 w-6 rounded-full flex items-center justify-center text-white"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-5">
          <h2 className="font-bold text-xl border-y-2 py-2">
            Total Price:{" "}
            <span className="text-[#7eb693] ml-4">
              ${totalPrice.toFixed(2)}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
