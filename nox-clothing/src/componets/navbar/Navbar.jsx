import React, { useEffect, useRef, useState } from "react";
import { Cart, PromoImg } from "../index.js";

const Dropdown = ({ children, showDropdown }) => {
  return (
    <>
      {showDropdown && (
        <div className="absolute w-screen left-0 mt-[31.5rem] px-80 flex flex-row justify-between bg-white text-black">
          {children}
        </div>
      )}
    </>
  );
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="flex justify-between fixed top-0 w-screen h-auto px-[6rem] py-[2rem] bg-black text-white">
      <div className="flex items-center">
        <h2 className="font-light font-catamaran 2xl:text-2xl xl:text-xl tracking-widest mx-1 border-r border-amber-200 pr-4 mr-4 cursor-pointer">
          NOX CLOTHING
        </h2>
        <Dropdown showDropdown={showDropdown}>
          <div className="my-16 flex flex-row" ref={wrapperRef}>
            <div className="2xl:mx-4">
              <p className="my-4 text-lg font-normal font-robotoCondensed cursor-pointer">
                Clothes
              </p>
              <div className="flex flex-row font-roboto 2xl:text-lg font-light">
                <div className="content-a mr-6">
                  <p className="cursor-pointer py-1">T-shirt</p>
                  <p className="cursor-pointer py-1">Hoodies</p>
                  <p className="cursor-pointer py-1">Jackets</p>
                  <p className="cursor-pointer py-1">Shoes</p>
                </div>
                <div className="content-b mr-6">
                  <p className="cursor-pointer py-1">T-shirt</p>
                  <p className="cursor-pointer py-1">Hoodies</p>
                  <p className="cursor-pointer py-1">Jackets</p>
                  <p className="cursor-pointer py-1">Shoes</p>
                </div>
              </div>
            </div>
            <div className="2xl:mx-4">
              <p className="my-4 text-lg font-normal font-robotoCondensed">
                Accessories
              </p>
              <div className="font-roboto 2xl:text-lg font-light">
                <p className="cursor-pointer py-1">T-shirt</p>
                <p className="cursor-pointer py-1">Hoodies</p>
                <p className="cursor-pointer py-1">Jackets</p>
                <p className="cursor-pointer py-1">Shoes</p>
              </div>
            </div>
          </div>
          <div className="my-16" ref={wrapperRef}>
            <img
              src={PromoImg}
              alt="promo image"
              className="flex items-center justify-center my-4 2xl:mx-32 mx-24 cursor-pointer"
            />
          </div>
        </Dropdown>

        <p
          className="lg:mx-3 mx-1 font-semibold 2xl:text-base xl:text-sm text-xs uppercase cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Womens
        </p>
        <p
          className="lg:mx-3 mx-1 font-semibold 2xl:text-base xl:text-sm text-xs uppercase cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Mens
        </p>
        <p
          className="lg:mx-3 mx-1 font-semibold 2xl:text-base xl:text-sm text-xs uppercase cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Accessories
        </p>
        <p
          className="lg:mx-3 mx-1 font-semibold 2xl:text-base xl:text-sm text-xs uppercase cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Drops
        </p>
      </div>
      <div className="flex flex-row items-center">
        <p className="lg:mx-3 mx-1 font-semibold 2xl:text-base xl:text-sm text-xs uppercase cursor-pointer">
          <a href="#about">About Us</a>
        </p>
        <p className="lg:mx-3 mx-1 font-semibold 2xl:text-base xl:text-sm text-xs uppercase cursor-pointer">
          <a href="#contact">Contact</a>
        </p>
        <button className="lg:mx-3 mx-1 font-roboto font-semibold border-2 w-16 h-8 2xl:text-lg xl:text-base lg:text-sm border-amber-200 uppercase items-center cursor-pointer">
          Blog
        </button>
        <img
          src={Cart}
          alt="Shopping Cart Logo"
          className="mx-3 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
