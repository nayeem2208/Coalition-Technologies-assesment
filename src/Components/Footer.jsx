import React from "react";
import logo from "../../public/Vector Smart Object.png";
function Footer() {
  return (
    <div
      style={{ backgroundColor: "#3a496b", position: "relative" }}
      className="w-full h-16"
    >
      <div
        className="flex items-center justify-evenly"
        style={{ color: "#5a698c" }}
      >
        <div className="flex">
          <div
            style={{ position: "relative" }}
            className="rounded-full overflow-hidden "
          >
            <img src={logo} alt="Logo" className="w-9 h-9 mt-2" />
            <div
              className="absolute top-2 left-0 w-full h-full rounded  opacity-50"
              style={{ zIndex: 1, backgroundColor: "#5a698c" }}
            ></div>
          </div>
          <h1
            className="h-full font-sans  flex flex-col ml-3 mt-2  "
            style={{ fontWeight: 700 }}
          >
            <span className="">LOSANGELES</span>
            <span
              className="mb-2"
              style={{
                position: "absolute",
                top: 22,
              }}
            >
              MOUNTAINS
            </span>
          </h1>
        </div>
        <h1 className="flex items-center mt-3 font-bold text-xs italic">
          COPYRIGHT 2016,ALL RIGHTS RESERVED
        </h1>
      </div>
    </div>
  );
}

export default Footer;
