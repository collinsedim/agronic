import { useContext, useState, useEffect } from "react";

import { ProductContext } from "../providers/ProductProvider";
import { CartContext } from "../providers/CartProvider";

import BlueButton from "../components/BlueButton";
import { products } from "../components/productsData";
import ProductComp from "../components/ProductComp";

import rating from "../assets/rating.png";

// store cart data in user browser
// const CART_STORAGE_KEY = "cartData";

const ShopSingle = () => {
  const { productData } = useContext(ProductContext);

  // store cart data in user browser
  // const [cartLoaded, setCartLoaded] = useState(false);

  // useEffect(() => {
  //   const storedCartData = localStorage.getItem(CART_STORAGE_KEY);
  //   if (storedCartData) {
  //     setCartData(JSON.parse(storedCartData));
  //   }
  //   setCartLoaded(true);
  // }, [setCartData]);

  // const updateCartData = (newCartData) => {
  //   setCartData(newCartData);
  //   localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartData));
  // };

  // updateCartData([
  //   {
  //     ...productData,
  //     quantity: purchaseQuantity.quantity,
  //     discount_price: purchaseQuantity.discount_price,
  //   },
  // ]);
  // if (!cartLoaded) {
  //   return null;
  // }
  // store cart data in user browser

  if (!productData) {
    return null;
  }

  const {
    category,
    product_image,
    product_title,
    discount_price,
    price,
    description,
    additional_info,
  } = productData;

  const { setCartData } = useContext(CartContext);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const [purchaseQuantity, setPurchaseQuantity] = useState({
    quantity: 1,
    discount_price: discount_price,
  });

  const handleChange = (event) => {
    const itemsInCart = event.target.value;

    if (itemsInCart <= 99) {
      setPurchaseQuantity((prevQuantity) => ({
        ...prevQuantity,
        quantity: itemsInCart,
        discount_price: discount_price * itemsInCart,
      }));
    }
  };

  return (
    <div>
      <div className="bg-shopHero w-full h-52 bg-center bg-no-repeat bg-cover flex justify-center items-center">
        <h1 className="font-heading font-bold text-5xl">{product_title}</h1>
      </div>
      <div className="my-20 px-4 md:flex gap-16 justify-center items-center">
        <div className="max-w-[500px] sm:w-[500px] h-[500px] relative bg-[#f8f8f8] flex items-center justify-center rounded-3xl">
          <div>
            <img className="w-full" src={product_image} alt={product_title} />
            <div className="bg-[#274c5b] text-white px-2 py-1 w-24 flex justify-center rounded-md absolute top-5 left-5">
              <p className="">{category}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full sm:w-[500px]">
          <h2 className="text-4xl font-semibold font-heading">
            {product_title}
          </h2>
          <img className="w-[70px] mt-2" src={rating} alt="star rating" />
          <div className="flex flex-row-reverse w-[133px] gap-2 text-xl mt-2">
            <p className="font-semibold">${discount_price}</p>
            <p className="text-[#9f9a9a] line-through">${price}</p>
          </div>
          <p className="mt-5">{description.slice(0, 200)}...</p>
          <div className="flex items-center gap-3 mt-5">
            <label htmlFor="quantity" className="font-bold">
              Quantity:
            </label>
            <input
              onChange={handleChange}
              value={purchaseQuantity.quantity}
              id="quantity"
              min="1"
              type="number"
              className="border-2 border-[#274c5b] focus:border-[#274c5b] p-3 w-20 text-center text-base font-bold rounded-2xl"
            />
            <BlueButton
              click={() =>
                setCartData([
                  {
                    ...productData,
                    quantity: purchaseQuantity.quantity,
                  },
                ])
              }
              name="Add to cart"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 justify-center px-2 flex-wrap">
          <p
            onClick={() => setSelectedIndex(1)}
            className={`${
              selectedIndex === 1 ? "bg-[#274c5b] text-white" : "bg-[#f8f8f8]"
            } font-bold px-9 py-3 rounded-xl cursor-pointer`}
          >
            Product Description
          </p>
          <p
            onClick={() => setSelectedIndex(2)}
            className={`${
              selectedIndex === 2 ? "text-white bg-[#274c5b]" : "bg-[#f8f8f8]"
            } font-bold px-9 py-3 rounded-xl cursor-pointer`}
          >
            Additional Information
          </p>
        </div>
        <p
          id="product-description"
          className={`${
            selectedIndex === 1 ? "visible" : "hidden"
          } text-center max-w-[700px] mx-auto mt-3 px-4`}
        >
          {description}
        </p>
        <p
          id="additional-information"
          className={`${
            selectedIndex === 2 ? "visible" : "hidden"
          } text-center max-w-[700px] mx-auto mt-3 px-4`}
        >
          {additional_info}
        </p>
      </div>
      <div className="mt-16 max-w-[1000px] mx-auto">
        <h2 className="font-heading font-bold text-3xl text-center mb-7">
          Related Products
        </h2>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4">
          {products
            .filter(
              (product) =>
                !product.product_title
                  .toLowerCase()
                  .includes(product_title.toLowerCase()) &&
                (product.category === category ||
                  product.description.includes(description))
            )
            .slice(0, 4)
            .map((product) => (
              <ProductComp key={product.product_id} {...product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
