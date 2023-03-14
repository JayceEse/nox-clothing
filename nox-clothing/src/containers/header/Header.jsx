import React from "react";
import { ShowMore, ShowMoreBlack } from "../../componets/index.js";
import { Bottoms, Jacket, Tshirt, Hoodie } from "../../componets/index";

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
        w-auto
        h-screen
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
      <div className="py-[8rem] px-[6rem]">
        <h1 className="flex justify-center  font-robotoCondensed text-bold md:text-5xl text-2xl uppercase mb-3.5">
          Popular Products
        </h1>
        <div className="mx-auto mb-20 border-b-4 border-black w-36"></div>
        <div className="flex flex-row justify-between">
          <div>
            <img
              className="w-auto xl:h-96 lg:h-60 md:h-44 h-28"
              src={Bottoms}
              alt="nicce grey bottoms"
            />
            <div>
              <p>Nicce grey bottoms</p>
              <p>$11.99</p>
            </div>
          </div>
          <div>
            <img
              className="w-auto xl:h-96 lg:h-60 md:h-44 h-28"
              src={Jacket}
              alt="nicce black jacket"
            />
            <div>
              <p>Nicce Jacket</p>
              <p>$11.99</p>
            </div>
          </div>
          <div>
            <img
              className="w-auto xl:h-96 lg:h-60 md:h-44 h-28"
              src={Tshirt}
              alt="nicce t-shirt"
            />
            <div>
              <p>Nicce T-Shirt</p>
              <p>$11.99</p>
            </div>
          </div>
          <div>
            <img
              className="w-auto xl:h-96 lg:h-60 md:h-44 h-28"
              src={Hoodie}
              alt="nicce white hoodie"
            />
            <div>
              <p>Nicce Hoodie</p>
              <p>$11.99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ShowMoreBlack />
      </div>
    </div>
  );
};

export default Header;
