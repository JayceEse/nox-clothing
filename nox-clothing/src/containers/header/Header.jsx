import React from "react";
import { ShowMore, ShowMoreBlack } from "../../componets/index.js";
import {
  Bottoms,
  Jacket,
  Tshirt,
  Hoodie,
  SummerSale,
  TopBottoms,
  TopJackets,
  TopShirts,
  TopHoodies,
} from "../../componets/index";

const Header = () => {
  return (
    <div>
      <div
        className='
        bg-[url("../src/assets/header-bg.png")]
        bg-cover
        bg-center 
        mt-24
        px-[6rem]
        pt-[50rem]
        w-screen
        h-auto
        '
      >
        <div className="flex flex-col lg:items-start items-center">
          <h2 className="font-inter text-semibold 2xl:text-3xl xl:text-xl text-lg text-white mb-8">
            New collection
          </h2>
          <h1 className="font-robotoCondensed text-medium 2xl:text-5xl xl:text-3xl text-2xl text-white uppercase mb-12">
            New Streetwear Outfits
          </h1>
        </div>
        <div className="flex flex-row justify-center">
          <ShowMore />
        </div>
      </div>
      <div className="py-[8rem] md:px-[6rem] px-[2rem]">
        <h1 className="flex justify-center items-center font-robotoCondensed text-bold sm:text-5xl text-xl uppercase mb-3.5">
          Popular Products
        </h1>
        <div className="mx-auto mb-20 border-b-4 border-black w-36"></div>
        <div className="flex md:flex-row flex-col justify-center -mx-2">
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5"
              src={Bottoms}
              alt="nicce grey bottoms"
            />
            <div className="pl-5">
              <p>Nicce grey bottoms</p>
              <p>$11.99</p>
            </div>
          </div>
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5"
              src={Jacket}
              alt="nicce black jacket"
            />
            <div className="pl-5">
              <p>Nicce Jacket</p>
              <p>$11.99</p>
            </div>
          </div>
          <div className="md:my-0 my-4">
            <img className="w-full px-5" src={Tshirt} alt="nicce t-shirt" />
            <div className="pl-5">
              <p>Nicce T-Shirt</p>
              <p>$11.99</p>
            </div>
          </div>
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5"
              src={Hoodie}
              alt="nicce white hoodie"
            />
            <div className="pl-5">
              <p>Nicce Hoodie</p>
              <p>$11.99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <ShowMoreBlack />
      </div>
      <div className="py-[8rem] sm:px-[6rem] px-[2rem] bg-black">
        <img
          src={SummerSale}
          alt="Summer Sale Promo Image"
          className="w-full h-auto cursor-pointer"
        />
      </div>
      <div className="py-[8rem] md:px-[6rem] px-[2rem]">
        <h1 className="flex justify-center items-center font-robotoCondensed text-bold sm:text-5xl text-xl uppercase mb-3.5">
          top categories
        </h1>
        <div className="mx-auto mb-20 border-b-4 border-black w-36"></div>
        <div className="flex md:flex-row flex-col justify-center -mx-2">
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5 cursor-pointer"
              src={TopBottoms}
              alt="nicce grey bottoms"
            />
          </div>
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5 cursor-pointer"
              src={TopJackets}
              alt="nicce black jacket"
            />
          </div>
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5 cursor-pointer"
              src={TopShirts}
              alt="nicce t-shirt"
            />
          </div>
          <div className="md:my-0 my-4">
            <img
              className="w-full px-5 cursor-pointer"
              src={TopHoodies}
              alt="nicce white hoodie"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <ShowMoreBlack />
      </div>
    </div>
  );
};

export default Header;
