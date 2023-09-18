import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../providers/ProductProvider";

import rating from "../assets/rating.png";

const ProductComp = ({
  category,
  product_image,
  product_title,
  discount_price,
  price,
  description,
  additional_info,
}) => {
  const { setProductData } = useContext(ProductContext);

  const handleClick = () => {
    setProductData({
      category,
      product_image,
      product_title,
      discount_price,
      price,
      description,
      additional_info,
    });
  };

  return (
    // removed w-[250px] from the div below
    <Link
      // reloadDocument
      onClick={handleClick}
      to={`/product/${encodeURIComponent(product_title.replace(/ /g, "-"))}`}
    >
      <div className="bg-[#eff6f1] p-4 rounded-3xl flex flex-col justify-between cursor-pointer hover:scale-[1.02] duration-150">
        <div className="bg-[#274c5b] text-white px-2 py-1 w-24 flex justify-center rounded-md">
          <p>{category}</p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[200px] h-[200px] object-contain"
            src={product_image}
            alt={product_title}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading">{product_title}</h3>
          <hr className="my-1 border-2" />
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-row-reverse gap-1">
              <p className="font-semibold">${discount_price}</p>
              <p className="text-[#9f9a9a] line-through">${price}</p>
            </div>
            <img className="w-[70px]" src={rating} alt="star rating" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductComp;
