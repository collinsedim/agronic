import { useState } from "react";

import arrowWhite from "../assets/arrow-right-white.png";

import { products } from "./productsData";
import ProductComp from "./ProductComp";

const Products = () => {
  const [page, setPage] = useState(1);

  const handleShowMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex justify-center">
        <div>
          <p className="text-[#68A47F] italic text-center">Categories</p>
          <h2 className="text-center md:text-3xl text-2xl mb-5 font-heading font-bold">
            Our Products
          </h2>
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-2">
            {products.slice(0, page * 8).map((product) => (
              <ProductComp key={product.product_id} {...product} />
            ))}
          </div>
        </div>
      </div>
      {page * 8 < products.length ? (
        <button
          className="bg-[#274c5b] text-white mt-4 px-5 py-3 rounded-lg font-bold hover:bg-[#305664] flex gap-1 group"
          onClick={handleShowMore}
        >
          Load More{" "}
          <img
            className="group-hover:rotate-90 duration-300"
            src={arrowWhite}
            alt=""
          />
        </button>
      ) : (
        <div className="bg-[#274c5b] text-white p-3 font-semibold cursor-not-allowed mt-3">
          No more products to show!
        </div>
      )}
    </div>
  );
};

export default Products;
