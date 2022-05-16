import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../Assets/Lottie/Cloud.json";
import * as animationData2 from "../Assets/Lottie/Data.json";
import { useState, useEffect } from "react";
import * as ScrollMagic from "scrollmagic";
import { MdOutlineStarPurple500 } from "react-icons/md";
const Cards = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var Cards = new ScrollMagic.Scene({
      triggerElement: "#body",
      reverse: false,
      triggerHook: 0.2,
    })
      .setClassToggle("#cards", "slide_in_bottom")
      .addTo(controller);

    const onMouseMove = (e, cardNumber) => {
      let hoverContainer = document.getElementById("flip" + cardNumber);
      let card = document.getElementById("front" + cardNumber);
      let circle = document.getElementById("front" + cardNumber + "-Circle");
      let img = document.getElementById("front" + cardNumber + "-Img");
      let background = document.getElementById("front" + cardNumber + "-Bg");
      circle.classList.remove("hide");

      let XRotation =
        (e.offsetY - hoverContainer.offsetHeight / 2) *
        (4 / hoverContainer.offsetHeight);
      let YRotation =
        (e.offsetX - hoverContainer.offsetWidth / 2) *
        -(4 / hoverContainer.offsetWidth);
      card.style.transform = `perspective(600px) rotateX(${XRotation}deg) rotateY(${YRotation}deg) `;
      circle.style.left = e.offsetX + "px";
      circle.style.top = e.offsetY + "px";

      img.style.transform = "scale(1.05)  translate(-50%, -50%)";
      background.style.filter = "saturate(1.2)";
    };
    const mouseOff = (cardNumber) => {
      let card = document.getElementById("front" + cardNumber);
      let circle = document.getElementById("front" + cardNumber + "-Circle");
      let img = document.getElementById("front" + cardNumber + "-Img");
      let background = document.getElementById("front" + cardNumber + "-Bg");
      card.style.transform = `rotateX(0deg) rotateY(0deg) `;
      img.style.transform = "scale(1)  translate(-50%, -50%)";
      background.style.filter = "saturate(100%)";
      circle.classList.add("hide");

      // document.getElementById("aboutBg").style.background = color;
    };

    document.getElementById("flip1").addEventListener("mousemove", (e) => {
      onMouseMove(e, "1");
    });
    document.getElementById("flip1").addEventListener("mouseleave", () => {
      mouseOff("1");
    });
    document.getElementById("flip2").addEventListener("mousemove", (e) => {
      onMouseMove(e, "2");
    });
    document.getElementById("flip2").addEventListener("mouseleave", () => {
      mouseOff("2");
    });
  });

  const flipCard = (id) => {
    document.getElementById(id).classList.toggle("hover");
  };

  return (
    <div
      id="cards"
      className="relative z-10 flex flex-row justify-between invisible w-3/4 h-screen mx-auto mt-20"
    >
      <div id="flip1" className="mb-20 info_box flip-container">
        <div className="flipper">
          <div
            onClick={() => flipCard("flip1")}
            id="front1"
            className="overflow-hidden cursor-pointer front info_box rounded-3xl "
          >
            <div
              id="front1-Circle"
              className="absolute z-40 text-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 circle2 hide"
            ></div>
            <div
              id="front1-Bg"
              className="relative flex flex-col items-center justify-between overflow-hidden info_box rounded-3xl bg-c7 "
            >
              <div className="z-10 flex flex-col items-start justify-between p-8 h-1/3 w-fit">
                <h1 className="w-11/12 text-2xl font-semibold text-white pointer-events-none leading_big font-f1">
                  Build a Cloud-based database with your key operating data
                </h1>
                <button className="px-3 py-2 mt-2 text-lg text-white border-2 border-white rounded-lg pointer-events-none">
                  Learn More
                </button>
              </div>
              <div
                id="front1-Img"
                className="absolute -mt-10 -ml-12 origin-left -translate-x-1/2 -translate-y-1/2 pointer-events-none w-fit top-3/4 left-1/2 linear"
              >
                <Lottie
                  className="z-10 "
                  options={defaultOptions}
                  height={450}
                  width={450}
                  isStopped={isStopped}
                  isPaused={isPaused}
                />
              </div>
            </div>
          </div>
          <div
            id="back1"
            onClick={() => flipCard("flip1")}
            className="overflow-hidden cursor-pointer back w-fit h-fit rounded-3xl"
          >
            <div
              id="front2-Background"
              className="relative flex flex-col items-center justify-between info_box bg-c10 rounded-3xl "
            >
              <div className="z-10 flex flex-col items-center justify-between p-8 h-1/3 w-fit">
                <ul className="" id="boxDetails1">
                  <li>
                    <div className="flex flex-row justify-between h-full mt-6 w-fit">
                      <MdOutlineStarPurple500 className="w-8 h-8 mt-1 mr-3 fill-white " />
                      <h2 className="text-2xl text-white font-f1 slide-in-left">
                        Establish metrics and KPIs (Key Performance Indicators)
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row mt-6 w-fit h-fit">
                      <MdOutlineStarPurple500 className="w-10 h-10 mt-1 mr-3 fill-white " />
                      <h2 className="text-2xl text-white font-f1 slide-in-left">
                        Aggregate you key data on one platform Establish rules
                        to ensure order in the environment
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row mt-6 w-fit">
                      <MdOutlineStarPurple500 className="w-8 h-8 mt-1 mr-3 fill-white " />
                      <h2 className="text-2xl text-white font-f1 slide-in-left">
                        Generate dashboards and reports based on the data​
                      </h2>
                    </div>
                  </li>
                </ul>
                <button className="px-3 py-2 mt-10 text-lg text-white border-2 border-white rounded-lg pointer-events-none">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="flip2" className="mb-20 flip-container info_box">
        <div className="flipper">
          <div
            onClick={() => flipCard("flip2")}
            id="front2"
            className="overflow-hidden cursor-pointer front info_box rounded-3xl"
          >
            <div
              id="front2-Circle"
              className="absolute z-10 text-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 circle2 hide"
            ></div>
            <div
              id="front2-Bg"
              className="relative overflow-hidden info_box rounded-3xl bg-c8"
            >
              <div className="z-30 flex flex-col items-start justify-between p-8 mx-auto h-1/3 w-fit">
                <h1 className="w-11/12 text-2xl font-semibold text-white pointer-events-none leading_big font-f1">
                  Start to apply sophisticated models to drive new insights
                </h1>
                <button className="z-30 px-3 py-2 mt-2 text-lg text-white border-2 border-white rounded-lg pointer-events-none bg-c8">
                  Learn More
                </button>
              </div>
              <div
                id="front2-Img"
                className="absolute z-20 -mt-6 -ml-6 origin-left -translate-x-1/2 -translate-y-1/2 pointer-events-none w-fit top-3/4 left-1/2 linear"
              >
                <Lottie
                  className="z-20"
                  options={defaultOptions2}
                  height={500}
                  width={500}
                  isStopped={isStopped}
                  isPaused={isPaused}
                />
              </div>
            </div>
          </div>
          <div className="back" onClick={() => flipCard("flip2")}>
            <div className="relative flex flex-col items-center justify-between mx-auto info_box bg-c10 rounded-3xl ">
              <div className="z-10 flex flex-col items-center justify-between p-8 h-1/3 w-fit">
                <h1 className="w-5/6 mx-auto text-xl leading-10 text-white font-f1">
                  Take your data to the next level. Start to apply sophisticated
                  models to drive new insights into your business, such as
                  predictive analytics - answer the "what are the chances"
                  questions
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
