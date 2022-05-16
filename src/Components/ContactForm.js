import React from "react";
import { MdOutlineClose } from "react-icons/md";
const ContactForm = () => {
  return (
    <div id="contactForm" className="fixed z-30 w-screen h-screen hide ">
      <button
        onClick={() => {
          document.getElementById("contactForm").classList.add("hide");
        }}
        className="absolute z-30 w-full h-full bg-c4_50 "
      >
        {" "}
      </button>
      <div className="absolute z-40 w-2/5 p-10 mt-20 -translate-x-1/2 shadow-xl h-5/6 bg-c9 rounded-3xl left-1/2 slide-in-top">
        <button
          className="float-right"
          onClick={() => {
            document.getElementById("contactForm").classList.add("hide");
          }}
        >
          <MdOutlineClose className="w-8 h-8 fill-c6" />
        </button>
        <div className="flex flex-col items-center w-3/4 mx-auto">
          <h1 className="text-6xl font-f1 text-c1">Let's Talk!</h1>
          <h1 className="mt-2 text-lg text-center font-f1 text-c6">
            We will get back to you within one to two days through email. Also
            please don't forget to check your spam account just in case!
          </h1>

          <input
            type="text"
            className="w-full pb-4 mt-6 border-b-2 border-c6 bg-c9 text-c1"
            placeholder="Name / Company*"
          />
          <input
            type="text"
            className="w-full pb-4 mt-6 border-b-2 border-c6 bg-c9 text-c1"
            placeholder="Email"
          />
          <input
            type="text"
            className="w-full pb-4 mt-6 border-b-2 border-c6 bg-c9 text-c1"
            placeholder="Subject"
          />
          <input
            type="text"
            className="w-full pb-4 mt-6 border-b-2 border-c6 bg-c9 text-c1"
            placeholder="Message"
          />

          <button className="p-3 mt-10 text-3xl font-semibold text-white rounded-lg shadow-xl bg-c3 w-fit h-fit">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
