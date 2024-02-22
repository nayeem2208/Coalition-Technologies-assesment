import React from "react";
import logo from "../../public/Vector Smart Object.png";

function Footer() {
  return (
    <div
      style={{ backgroundColor: "#3a496b", position: "relative" }}
      className="w-full h-full min-h-16"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-evenly"
        style={{ color: "#5a698c" }}
      >
        <div className="flex items-center">
          <div
            style={{ position: "relative" }}
            className="rounded-full overflow-hidden "
          >
            <img src={logo} alt="Logo" className="w-9 h-9 mt-2" />
            <div
              className="absolute top-2 left-0 w-full h-full rounded opacity-50"
              style={{ zIndex: 1, backgroundColor: "#5a698c" }}
            ></div>
          </div>
          <h1
            className="h-full font-sans flex flex-col ml-3 mt-2"
            style={{ fontWeight: 700 }}
          >
            <span className="">LOSANGELES</span>
            <span className="mb-2 md:absolute md:top-7">MOUNTAINS</span>
          </h1>
        </div>
        <h1 className="flex items-center mb-2 md:mb-0 mt-3 font-bold text-xs italic md:mt-2">
          COPYRIGHT 2016, ALL RIGHTS RESERVED
        </h1>
      </div>
    </div>
  );
}

export default Footer;
