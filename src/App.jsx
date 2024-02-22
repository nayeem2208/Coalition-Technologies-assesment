import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstPart from "./Components/FirstPart";
import SecondHeader from "./Components/secondHeader";
import SecondPart from "./Components/SecondPart";
import ThirdHeader from "./Components/ThirdHeader";
import ThirdPart from "./Components/ThirdPart";
import Footer from "./Components/Footer";
import { Element } from "react-scroll";
// import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <div id="header">
      <FirstPart  />
      </div>
      <Element name="secondHeader">
        <div>
          <SecondHeader />
        </div>
      </Element>
      <div id="secondPart">
        <SecondPart />
      </div>
      <div id="thirdHeader">
        <ThirdHeader />
      </div>
      <Element name="thirdPart">
      <div >
        <ThirdPart />
      </div>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
