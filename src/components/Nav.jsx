import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../providers/CartProvider";

import searchIcon from "../assets/search-24.png";
import logoIcon from "../assets/leaf.png";
import menuClose from "../assets/close.png";
import menuOpen from "../assets/open.png";
import cartIcon from "../assets/cart.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartData, totalCartProducts } = useContext(CartContext);

  // const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   if (cartData) {
  //     const count = cartData.reduce((total, item) => total + item.quantity, 0);
  //     setCartCount(parseInt(count.toString(), 10));
  //   }
  // }, [cartData]);

  // if (cartData === undefined) {
  //   return null;
  // }

  return (
    <>
      <div className="py-8 flex md:flex-row flex-col gap-y-3 md:gap-0 justify-between">
        <div className="flex justify-between px-3">
          <Link className="flex items-center" to="/">
            <div className="flex items-center">
              <img className="h-8" src={logoIcon} alt="" />{" "}
              <p className="font-heading font-bold text-2xl">Agronic</p>
            </div>
          </Link>
          <div className="flex gap-9 md:hidden">
            <Link to="/cart">
              <div className="border-2 rounded-full w-28 p-1 flex gap-1 items-center cursor-pointer">
                <div className="w-8 p-2 rounded-full flex items-center bg-[#274c5b]">
                  <img src={cartIcon} alt="Cart" />
                </div>
                <p className="font-bold text-base">
                  Cart (
                  <span className="text-[#7eb693]">{totalCartProducts}</span>)
                </p>
              </div>
            </Link>
            <img
              className="cursor-pointer w-[32px] h-[32px]"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              src={isMenuOpen ? menuClose : menuOpen}
              alt=""
            />
          </div>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-x-4">
          <nav className="text-lg">
            <ul className="font-body flex gap-1">
              <Link to="/">
                <li className="font-semibold p-1 cursor-pointer">Home</li>
              </Link>
              <Link to="/about-us">
                <li className="font-semibold p-1 cursor-pointer">About</li>
              </Link>
              <Link to="/shop">
                <li className="font-semibold p-1 cursor-pointer">Shop</li>
              </Link>
              <Link to="/projects">
                <li className="font-semibold p-1 cursor-pointer">Projects</li>
              </Link>
              <Link to="/news">
                <li className="font-semibold p-1 cursor-pointer">News</li>
              </Link>
            </ul>
          </nav>
          <div className="flex gap-1 pr-1">
            <div className="flex items-center relative">
              <input
                type="search"
                placeholder="search products..."
                className="bg-[#d4d4d4] rounded-full outline-none pl-4 pr-8 py-3"
              />
              <img
                src={searchIcon}
                alt="Search"
                className="absolute left-[186px] cursor-pointer bg-[#7eb693] p-2 rounded-full"
              />
            </div>
            <Link to="/cart">
              <div className="border-2 rounded-full w-28 p-1 flex gap-1 items-center">
                <div className="w-8 p-2 rounded-full flex items-center bg-[#274c5b]">
                  <img src={cartIcon} alt="Cart" />
                </div>
                <p className="font-bold text-base">
                  Cart (
                  <span className="text-[#7eb693]">{totalCartProducts}</span>)
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* End Desktop Nav */}
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-y-10 mt-5 absolute z-10 top-16 bg-white w-full p-4">
            <nav className="text-2xl">
              <ul className="font-body flex flex-col gap-y-1">
                <Link to="/">
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer p-1"
                  >
                    Home
                  </li>
                </Link>
                <Link to="/about-us">
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer p-1"
                  >
                    About
                  </li>
                </Link>
                <Link to="/shop">
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer p-1"
                  >
                    Shop
                  </li>
                </Link>
                <Link to="/projects">
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer p-1"
                  >
                    Projects
                  </li>
                </Link>
                <Link to="/news">
                  <li
                    onClick={() => setIsMenuOpen(false)}
                    className="cursor-pointer p-1"
                  >
                    News
                  </li>
                </Link>
              </ul>
            </nav>
            <div className="flex items-center relative">
              <input
                placeholder="Search..."
                type="search"
                className="bg-[#d4d4d4] rounded-full outline-none pl-4 pr-7 py-2 text-lg"
              />
              <img
                src={searchIcon}
                alt="Search"
                className="absolute left-52 cursor-pointer bg-[#7eb693] p-2 rounded-full"
              />
            </div>
          </div>
        )}
        {/* End Mobile Nav */}
      </div>
    </>
  );
};

export default Nav;
