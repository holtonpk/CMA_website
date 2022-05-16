import React from "react";

import { MdOutlineEmail, MdKeyboardArrowRight } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="z-20 w-11/12">
      <div className="flex flex-row justify-between w-5/6 px-6 pt-5 pb-3 mx-auto">
        <div className="flex flex-row justify-start w-full">
          <h1 className="px-4 py-2 text-2xl font-bold text-white w-fit cornerBox whitespace-nowrap">
            CMA Analytics.
          </h1>

          <div className="flex flex-row justify-between w-1/2 ml-40 ">
            <button className="mr-10 text-xl text-white font-f1">About</button>
            <button className="mr-10 text-xl text-white font-f1 whitespace-nowrap">
              What We Do
            </button>
            <button className="mr-10 text-xl text-white font-f1">
              Projects
            </button>
          </div>
        </div>

        {/* <button className="z-10 p-2 rounded-full bg-c9 h-fit w-fit hover:bg-c2">
          <MdOutlineEmail className="w-8 h-8 fill-c1" />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
