import { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import HomeHero from "../components/HomeHero";
import News from "../components/News";
import OfferBanner from "../components/OfferBanner";
import Products from "../components/Products";
import SampleProducts from "../components/SampleProducts";
import Testimonial from "../components/Testimonial";
import WhoWeAre from "../components/WhoWeAre";

const Home = () => {
  const fetchProducts = async () => {
    try {
      const data = await fetch("http://localhost:3000/products", {
        method: "GET",
      });

      if (!data.ok) {
        throw new Error("Network response was not ok.");
      }

      const productData = await data.json();
      console.log(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <HomeHero />
      <OfferBanner />
      <AboutUs />
      <Products />
      <Testimonial />
      <SampleProducts />
      <WhoWeAre />
      <News />
    </>
  );
};

export default Home;
