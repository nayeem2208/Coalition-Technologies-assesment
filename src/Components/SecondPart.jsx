import React from "react";
import image from "../../public/peak.jpg";
import Carosel from "./Carosel";

function SecondPart() {
  return (
    <div className="w-full mt-16" style={{ position: "relative" }}>
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
        className="text-8xl font-bold opacity-50 tracking-tightest"
        style={{ position: "absolute", zIndex: 4, top: 50, left: 300 }}
      >
        01.
      </h1>
      <h1
        className="text-3xl font-bold text-indigo-950 tracking-tightest "
        style={{ position: "absolute", zIndex: 4, top: 90, left: 400 }}
      >
        HISTORY
      </h1>
      <p style={{ position: "absolute", zIndex: 4, top: 140, left: 350 }} className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ante
        viverra, rutrum erat rutrum, consectetur mi. Proin at <br/>maximus est.
        Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam. Cras
        scelerisque id quam sed dignissim <br/> Pellentesque urna nunc, gravida quis
        hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec
        congue.{" "}
      </p>
      <Carosel />
    </div>
  );
}

export default SecondPart;
