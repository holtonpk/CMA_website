import React from "react";
import Cards from "./Cards";
import { useEffect } from "react";
import * as ScrollMagic from "scrollmagic";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import FloydsLogo from "../Assets/Icons/floyds_logo.png";
import NoLogo from "../Assets/Icons/icon-image-512.webp";

const Body2 = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#body2",
      reverse: false,
      triggerHook: 0.85,
    })
      .setClassToggle("#body-text", "slide_in_bottom")

      .addTo(controller);

    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#body2",
      reverse: false,
      triggerHook: 0.7,
    })
      .setClassToggle("#customerRow1", "slide_in_bottom")

      .addTo(controller);
    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#body2",
      reverse: false,
      triggerHook: 0.5,
    })
      .setClassToggle("#customerRow2", "slide_in_bottom")

      .addTo(controller);

    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#footer",
      reverse: false,
      triggerHook: 0.85,
    })
      .setClassToggle("#footer-text", "slide_in_bottom")

      .addTo(controller);

    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#footer",
      reverse: false,
      triggerHook: 0.3,
    })
      .setClassToggle("#footer-text2", "slide_in_bottom")

      .addTo(controller);

    var smallBox = new ScrollMagic.Scene({
      triggerElement: "#footer",
      reverse: false,
      triggerHook: 0.2,
    })
      .setClassToggle("#footer-icons", "slide_in_bottom")

      .addTo(controller);
  });

  return (
    <div className="w-full ">
      <div
        id="body2"
        className="relative flex flex-col w-11/12 pt-10 pb-40 bg-c9 rounded_tr h-fit"
      >
        <div
          id="body-text"
          className="flex flex-row items-center invisible w-3/5 mx-auto"
        >
          <div className="flex flex-col w-1/2 mr-3 h-fit">
            <h1 className="text-6xl font-semibold text-c7 font-f1">
              Our Clients.
            </h1>
          </div>
          {/* <p className="w-1/2 text-xl text-white font-f1">
            CMA Analytics is a product and service firm that helps companies
            become more competitive. By leveraging cloud infrastructure, SMB can
            have affordable data platforms, enterprise quality analytics,
            including machine learning models. CMA Analytics helps companies
            realize these benefits.
          </p> */}
          <p className="w-1/2 text-xl text-white font-f1">
            We like to build close relationships with our clients. We believe
            dynamic collaboration is the only way to get the job done well.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between mt-10 h-fit">
          <div
            id="customerRow1"
            className="grid invisible mx-auto clientImageContainer"
          >
            <div className="p-6 border-b-2 border-r-2 cursor-pointer border-c6">
              <img src={FloydsLogo} className="w-full h-full" />
            </div>
            <div className="p-6 border-b-2 border-r-2 cursor-pointer border-c6">
              <img src={NoLogo} className="w-full h-full" />
            </div>
            <div className="p-6 border-b-2 cursor-pointer border-c6">
              <img src={NoLogo} className="w-full h-full" />
            </div>
          </div>
          <div
            id="customerRow2"
            className="grid invisible mx-auto mt-14 clientImageContainer2"
          >
            <div className="p-6 border-r-2 cursor-pointer border-c6">
              <img src={NoLogo} className="w-full h-full" />
            </div>
            <div className="p-6 cursor-pointer">
              <img src={NoLogo} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="footer"
        className="relative flex flex-col float-right w-full p-20 -mt-32 h-fit bg-c10 rounded_tl"
      >
        <div
          id="footer-text"
          className="flex flex-row items-center justify-between invisible w-1/2 mx-auto "
        >
          <div className="flex flex-col w-3/5 mx-auto">
            <h1 className="text-5xl font-semibold text-white font-f1 ">
              Interested in Collaboration?
            </h1>
            <h3 className="mt-3 text-xl text-white font-f1">
              Challenge us. We want to work with you to optimize your business's
              potential.
            </h3>
          </div>
          <button
            onClick={() => {
              document.getElementById("contactForm").classList.remove("hide");
            }}
            className="flex flex-row items-center py-3 mx-auto text-xl text-white rounded-lg px-7 bg-c8 font-f1 h-fit w-fit"
          >
            <h1>Let's Talk</h1>
            <MdKeyboardArrowRight className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-between w-full p-20 mt-20 border-t-2 border-c4 h-fit">
          <div
            id="footer-cont"
            className="flex flex-row items-center justify-between w-full"
          >
            <div
              id="footer-text2"
              className="flex flex-col justify-between invisible h-80"
            >
              <div className="w-fit h-fit ">
                <h1 className="px-4 py-2 text-3xl text-white font-f1 cornerBox">
                  CMA Analytics.
                </h1>
              </div>

              <div className="flex flex-row mt-6">
                <h1 className="mr-2 text-xl font-bold text-white">A.</h1>
                <h1 className="text-xl text-white font-f1">
                  Highlands Ranch, CO 80126
                </h1>
              </div>
              <div className="flex flex-row mt-6">
                <h1 className="mr-2 text-xl font-bold text-white">P.</h1>
                <h1 className="text-xl text-white font-f1">(303)-123-4563</h1>
              </div>
              <div className="flex flex-row mt-6">
                <h1 className="mr-2 text-xl font-bold text-white">E.</h1>
                <h1 className="text-xl text-white font-f1">
                  CmaAnalytics@CmaAnalytics.com
                </h1>
              </div>
            </div>
            <div
              id="footer-icons"
              className="flex flex-row justify-between invisible w-1/2"
            >
              <FaLinkedin className="w-20 h-20 cursor-pointer fill-c1" />
              <FaFacebookSquare className="w-20 h-20 cursor-pointer fill-c1" />
              <FaTwitterSquare className="w-20 h-20 cursor-pointer fill-c1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
