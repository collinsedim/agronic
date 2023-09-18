import { useState } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

import { products } from "../components/productsData";
import ProductComp from "../components/ProductComp";

const Shop = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (activePage) => {
    setPage(activePage);
  };

  return (
    <div>
      <div className="mb-10">
        {/* Hero section */}
        <div className="bg-shopHero w-full h-52 bg-center bg-no-repeat bg-cover flex justify-center items-center">
          <h1 className="font-heading font-bold text-5xl">Shop</h1>
        </div>
        {/* End Hero section */}
      </div>
      {/* Shop products section */}
      <div>
        <div className="flex flex-col items-center justify-center py-10">
          <div className="flex justify-center">
            <div>
              <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-2">
                {products.slice(page * 12 - 12, page * 12).map((product) => (
                  <ProductComp key={product.product_id} {...product} />
                ))}
              </div>
            </div>
          </div>
          {products.length > 0 && (
            <div className="flex gap-1 items-center mt-5">
              <img
                onClick={() => handlePageChange(page - 1)}
                className={`${
                  page * 12 < products.length ? "hidden" : "block"
                } cursor-pointer`}
                src={leftArrow}
                alt=""
              />
              {[...Array(Math.ceil(products.length / 12))].map((_empty, i) => (
                <span
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`cursor-pointer border-2 border-[#274c5b] rounded-full h-8 w-8 p-1 flex justify-center font-bold ${
                    page === i + 1 && "bg-[#274c5b] text-white"
                  }`}
                >
                  {i + 1}
                </span>
              ))}
              <img
                onClick={() => handlePageChange(page + 1)}
                className={`${
                  page * 12 > products.length ? "hidden" : "block"
                } cursor-pointer`}
                src={rightArrow}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      {/* Shop products section */}
    </div>
  );
};

export default Shop;
