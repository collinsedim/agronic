import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./providers/ProductProvider";
import { CartProvider } from "./providers/CartProvider";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import ShopSingle from "./pages/ShopSingle";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Services from "./pages/Services";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-[1920px] text-[#274c5b] m-auto font-body">
        <CartProvider>
          <Nav />
          <ProductProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="shop" element={<Shop />} />
              <Route path="/product/:title" element={<ShopSingle />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/services" element={<Services />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Newsletter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
