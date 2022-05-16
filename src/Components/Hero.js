import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import Lottie from "react-lottie";
import { useState } from "react";
import ellipse from "../Assets/Icons/Ellipse_3.svg";
import background from "../Assets/Icons/back.svg";
import heroImg from "../Assets/Icons/ill-header.svg";
import Navbar from "./Navbar";
const Hero = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      id="hero"
      className="relative z-20 flex flex-col pb-40 bg-white rounded_br_15 "
    >
      <Navbar />

      {/* <svg className="w-full">{background}</svg> */}

      <img src={background} alt="" className="absolute z-10 hero_background " />

      <div className="relative z-20 flex flex-row justify-between pt-0 mx-auto hero_title-container h-1/2">
        <div className="relative z-10 flex flex-col items-center justify-between w-1/2 h-fit hero_text-container ">
          <h1 className="text-xl font-semibold text-white hero_title font-f1 sm:text-xl md:text-2xl lg:text-5xl ">
            We help create Smarter Faster More Competitive businesses
          </h1>

          <h1 className="mt-2 text-xs font-light text-white font-f1 hero_text sm:text-sm md:text-lg lg:text-2xl">
            CMA specializes in collecting, aggregating, analyzing and presenting
            data that will drive business benefits.
          </h1>
          <button
            onClick={() => {
              document.getElementById("contactForm").classList.remove("hide");
            }}
            className="z-40 flex items-center px-2 py-1 mt-2 shadow-xl rounded-xl btn btn-white btn-talk bg-c9 hover:bg-c2 w-fit fex-row md:py-3"
          >
            <span className="flex flex-row items-center mx-2 text-white font-f1 h-fit sm:text-xl md:text-2xl ">
              Let's Connect
            </span>
            <div id="buttonIcon" className="z-40 mx-auto buttonIcon w-fit hide">
              <MdOutlineEmail className="z-10 w-10 h-10 fill-white" />
            </div>
          </button>
        </div>
        <img src={heroImg} className=" heroImg" />

        {/* <div className="absolute w-1/3 mt-10 -ml-20 -translate-y-1/2 left-1/2 top-3/4 h-fit"></div> sm:w-48 sm:h-48 lg:w-80 lg:h-80 */}
      </div>
      {/* <div
        id="connectButtonContainer"
        className="z-40 mt-6 hero-button-float "
      >
        <div className="hero-button-wrapper">
          <button
            onClick={() => {
              document.getElementById("contactForm").classList.remove("hide");
            }}
            className="z-40 flex items-center px-2 shadow-xl rounded-xl btn btn-white btn-talk bg-c9 hover:bg-c2 w-fit fex-row"
          >
            <span className="flex flex-row items-center mx-2 text-2xl text-white font-f1 h-fit">
              Let's Connect
            </span>
            <div id="buttonIcon" className="z-40 mx-auto buttonIcon w-fit hide">
              <MdOutlineEmail className="z-10 w-10 h-10 fill-white" />
            </div>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
