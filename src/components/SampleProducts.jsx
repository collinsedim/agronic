import React from "react";
import arrowRight from "../assets/arrow-right.png";
import ProductComp from "./ProductComp";
import { products } from "./productsData";

const SampleProducts = () => {
  return (
    <div className="w-full bg-[#274c5b] py-20 flex justify-center">
      <div className="w-[1040px] px-5">
        <div>
          <div className="sm:flex justify-between items-center mb-10">
            <div>
              <p className="italic font-light text-lg text-[#68A47F]">Offer</p>
              <h2 className="text-white font-heading font-bold text-3xl">
                We Offer Organic For You
              </h2>
            </div>
            <button className="bg-[#efd372] p-3 mt-4 text-lg rounded-lg flex items-center justify-center group">
              View All Products{" "}
              <img
                className="ml-1 group-hover:translate-x-1 duration-300"
                src={arrowRight}
                alt=""
              />
            </button>
          </div>
          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-2">
            {products
              .filter((product) => product.category === "Vegetable")
              .slice(0, 4)
              .map((product) => (
                <ProductComp key={product.product_id} {...product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProducts;
