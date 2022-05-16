import React, { useState } from "react";
import { useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "../Assets/Lottie/desktop.json";
import * as ScrollMagic from "scrollmagic";
// import * as animationData from "../Assets/Lottie/hero.json";

import Cards from "./Cards";
const Body = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#body",
      reverse: false,
      triggerHook: 0.8,
    })
      .setClassToggle("#aboutBoxTrigger", "slide_in_bottom_abs")

      .addTo(controller);

    let Card = document.getElementById("aboutBox");
    let About = document.getElementById("aboutHoverContainer");
    let circle = document.getElementById("circle");
    let height = About.offsetHeight;
    let width = About.offsetWidth;
    const onMouseMove = (e) => {
      circle.classList.remove("hide");
      let XRotation = (e.offsetY - height / 2) * (6 / height);
      let YRotation = (e.offsetX - width / 2) * -(6 / width);
      Card.style.transform = `perspective(600px) rotateX(${XRotation}deg) rotateY(${YRotation}deg) `;

      circle.style.left = e.offsetX + "px";
      circle.style.top = e.offsetY + "px";
      document.getElementById("aboutImage").style.transform =
        "scale(1.1)  translate(-50%, -30%)";
      document.getElementById("aboutBg").style.filter = "saturate(1.5)";
    };
    const mouseOff = () => {
      circle.classList.add("hide");

      Card.style.transform = `rotateX(0deg) rotateY(0deg) `;
      document.getElementById("aboutImage").style.transform =
        "scale(1)  translate(-50%, -30%)";
      document.getElementById("aboutBg").style.filter = "saturate(1)";
    };

    About.addEventListener("mousemove", onMouseMove);
    About.addEventListener("mouseleave", mouseOff);
  });

  return (
    <div id="body" className="relative z-20 w-full mx-auto ">
      <div
        id="aboutBoxTrigger"
        className="relative invisible -translate-x-1/2 left-1/2"
      >
        <div id="aboutHoverContainer" className="absolute z-40 "></div>

        <div
          id="aboutBox"
          className="relative flex flex-row items-center justify-between mx-auto shadow-xl pointer-events-none bg-c9 rounded-2xl"
        >
          <div
            id="circle"
            className="absolute z-40 text-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none circle hide"
          ></div>
          <div className="relative flex flex-col justify-between w-1/2 px-10 pb-10 pointer-events-none about_text">
            <h1 className="text-5xl font-bold text-white sm:text-5xl lg:text-7xl">
              About
            </h1>
            <h1 className="text-5xl font-bold text-c7 sm:text-5xl lg:text-7xl">
              CMA
            </h1>
            <h1 className="mt-3 text-lg text-white font-f1 sm:text-lg lg:text-2xl">
              CMA Analytics is passionate about helping small and medium sized
              business (SMB) leverage technologies that used to be reserved for
              large, well-funded organizations. The time is now for SMB to
              benefit from data platforms, cloud analytics, machine learning and
              mobile apps.
            </h1>
          </div>
          <div
            id="aboutBg"
            className="w-1/2 h-full pointer-events-none bg-c10 rounded-r-2xl linear"
          ></div>

          <div
            id="aboutImage"
            className="absolute origin-left -translate-x-1/2 pointer-events-none -ml-30 left-3/4 who_we_are-image linear "
          >
            <Lottie
              className="z-10 hover"
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isStopped={isStopped}
              isPaused={isPaused}
            />
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Body;
