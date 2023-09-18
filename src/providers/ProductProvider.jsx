import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(() => {
    const storedData = localStorage.getItem("productData");
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(productData), [
      productData,
    ]);
  });

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
