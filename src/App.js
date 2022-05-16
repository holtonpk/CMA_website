import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Body2 from "./Components/Body2";
import { useState } from "react";
import AboutCard from "./Components/Body";
import { useEffect } from "react";
import ContactForm from "./Components/ContactForm";

function App() {
  const [buttonMoved, setButtonMoved] = useState(false);
  // ScrollMagicPluginIndicator(ScrollMagic);

  useEffect(() => {
    // ScrollMagicPluginIndicator(ScrollMagic);

    let buttonContainer = document.getElementById("connectButtonContainer");
    window.addEventListener("scroll", () => {
      if (buttonContainer.getBoundingClientRect().y <= 0 && !buttonMoved) {
        buttonContainer.classList.add("floating");
        document.getElementById("buttonIcon").classList.remove("hide");
        setButtonMoved(true);
      }
      if (buttonContainer.getBoundingClientRect().y >= 0 && buttonMoved) {
        buttonContainer.classList.remove("floating");
        document.getElementById("buttonIcon").classList.add("hide");

        setButtonMoved(false);
      }
    });
  });

  return (
    <div className="overflow-hidden">
      <ContactForm />
      <Hero />
      <Body />
      <Body2 />
      <div className="w-full h-20 bg-c10">
        <h3 className="mx-auto mt-6 text-md w-fit text-c4 font-f1">
          2022 © CMA Analytics. All rights reserved.
        </h3>
      </div>
    </div>
  );
}

export default App;
