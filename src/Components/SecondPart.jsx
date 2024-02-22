import React from "react";
import image from "../../public/peak.jpg";
import Carosel from "./Carosel";

function SecondPart() {
  return (
    <div className="w-full mt-16 relative">
      <img src={image} alt="" className="w-full h-full" />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          background:
            "linear-gradient(0deg, rgba(65,68,84,0) 0%, rgba(74,86,145,0.7) 100%)",
        }}
      ></div>
      <h1
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-50 tracking-tightest absolute top-5 md:top-16 lg:top-20 left-5 md:left-20"
        style={{ zIndex: 4 }}
      >
        01.
      </h1>
      <h1
        className="text-lg md:text-xl lg:text-3xl font-bold text-indigo-950 tracking-tightest absolute ml-2 sm:ml-0 top-6 md:top-20 lg:top-28 left-16 sm:left-20 md:left-40 lg:left-48"
        style={{ zIndex: 4 }}
      >
        HISTORY
      </h1>
      <p
        style={{ zIndex: 4 }}
        className="text-sm absolute top-16 md:top-32 lg:top-48 left-5 flex justify-center md:left-20 w-5/6 lg:w-3/5 mx-auto text-center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
        viverra, rutrum erat rutrum, consectetur mi. Proin at maximus est.
        Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
        scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis
        hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
        congue.
      </p>

      <Carosel />
    </div>
  );
}

export default SecondPart;
