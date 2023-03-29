import React from "react";

const Footer = () => {
  return (
    <div className="sm:px-[6rem] px-[2rem] py-[2rem] bg-black text-white">
      <div className="flex md:flex-row flex-col md:justify-evenly font-roboto">
        <div className="flex md:flex-col flex-row justify-evenly mb-3">
          <h1 className="underline underline-offset-2 mb-2 md:mr-0 cursor-pointer">
            Mens
          </h1>
          <div>
            <ul className="cursor-pointer">
              <li>T-shirt</li>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-col flex-row justify-evenly mb-3">
          <h1 className="underline underline-offset-2 mb-2 cursor-pointer">
            Womens
          </h1>
          <div>
            <ul className="cursor-pointer">
              <li>T-shirt</li>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-col flex-row justify-evenly mb-3">
          <h1 className="underline underline-offset-2 mb-2 cursor-pointer">
            Accessories
          </h1>
          <div>
            <ul className="cursor-pointer">
              <li>T-shirt</li>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-col flex-row justify-evenly mb-3">
          <h1 className="underline underline-offset-2 mb-2 cursor-pointer">
            Drops
          </h1>
          <div>
            <ul className="cursor-pointer">
              <li>T-shirt</li>
              <li>Hoodies</li>
              <li>Jackets</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-start items-center">
          <div className="mb-2">
            <h1 className="font-robotoCondensed text-2xl">Newsletter</h1>
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="bg-black text-white border-b-2 w-60 border-white outline-none px-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
